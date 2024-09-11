"use client";
import React from "react";
import Button from "@/components/ui/Button";
import { sendContactMessage } from "../../_actions/actions";
import { useFormState } from "react-dom";
import Input from "../../../../../components/Input/Input";
import SelectComponent from "../../../../../components/Select/SelectComponent";
import TextAreaComponent from "../../../../../components/TextArea/TextAreaComponent";

function Form() {
  const [error, sendMessageAction] = useFormState(sendContactMessage, {});

  return (
    <form
      action={sendMessageAction}
      className="flex flex-col gap-6 justify-center items-start p-6 bg-general-gradient w-full h-full rounded-xl border border-orange text-start max-w-full md:max-w-[50%]"
      aria-labelledby="form-title"
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
      <Input
        required={true}
        label="Email"
        type="email"
        name="email"
        id="text_input_email"
        placeholder="Ваше email"
        error={error?.email}
      />
      <SelectComponent label="Оберіть тему" name="service" />
      <TextAreaComponent
        label="Ваше питання"
        name="message"
        placeholder=" питання"
        required={true}
      />
      <Button type="submit">Надіслати</Button>
    </form>
  );
}

export default Form;
