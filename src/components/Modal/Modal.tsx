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

function Modal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();
  const [error, sendCallbackMessAction] = useFormState(sendCallBackMessage, {});

  return (
    <>
      {modal && (
        <div className="left-0 h-full bg-transparent flex justify-center items-center w-full top-0 fixed z-10 p-5">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={transitionWithoutDelay}
            viewport={viewPort}
            action={sendCallbackMessAction}
            className="flex flex-col gap-6 justify-center items-start p-6 bg-general-gradient w-full h-full rounded-xl border border-orange text-start max-w-full md:max-w-[50%] max-h-[50%]"
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
          </motion.form>
        </div>
      )}
    </>
  );
}

export default Modal;
