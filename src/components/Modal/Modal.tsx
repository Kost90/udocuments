"use client";
import { useSearchParams, usePathname } from "next/navigation";
import { useFormState } from "react-dom";
import Input from "../Input/Input";
import Button from "../ui/Button";
import { sendCallBackMessage } from "@/app/aboutus/_actions/actions";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  transitionWithoutDelay,
  viewPort,
} from "@/constants/animation_variants";
import { Titel, Paragraph } from "../typography/Typography";

function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();
  const [error, sendCallbackMessAction] = useFormState(sendCallBackMessage, {});

  return (
    <>
      {modal && (
        <div className="left-0 h-full bg-transparent flex justify-center items-center w-full top-0 fixed z-10 p-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transitionWithoutDelay}
            viewport={viewPort}
            className="flex flex-col gap-4 justify-center items-start p-6 bg-general-gradient w-full h-full rounded-xl border border-orange text-start max-w-full md:max-w-[50%] max-h-full md:max-h-[60%]"
          >
            <Titel
              text="Замовити зворотній звонок"
              id="titel_of_modal_window"
              className="mb-0 leading-10 md:leading-3"
            />
            <Paragraph text="Наш менеджер надасть вам безкоштовну консультацію" />
            <form
              action={sendCallbackMessAction}
              className="flex flex-col gap-6 justify-center items-start bg-general-gradient w-full h-full"
            >
              <Input
                label="Імя"
                type="text"
                name="name"
                id="text_input_name"
                placeholder="Ваше імя"
                required={true}
                error={error?.name}
              />
              <Input
                label="Телефон"
                type="tel"
                name="phone"
                id="text_input_phone"
                placeholder="Ваше телефон"
                error={error?.phone}
              />
              <div className="flex flex-row flex-wrap items-center justify-center gap-3">
                <Button type="submit">Надіслати</Button>
                <Link href={pathname}>
                  <Button type="button">Скасувати</Button>
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default Modal;
