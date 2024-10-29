"use client";
import React from "react";
import Button from "@/components/ui/Button";
import { sendContactMessage } from "../../_actions/actions";
import { useFormState } from "react-dom";
import Input from "../Input/Input";
import SelectComponent from "../Select/SelectComponent";
import TextAreaComponent from "../TextArea/TextAreaComponent";
import { UDocumentData } from "@/constants/types";

function Form({ lang }: { lang: UDocumentData }) {
  const [error, sendMessageAction] = useFormState(sendContactMessage, {});

  return (
    <form
      action={sendMessageAction}
      className="flex flex-col gap-6 justify-center items-start p-6 bg-general-gradient w-full h-full rounded-xl border border-orange text-start max-w-full md:max-w-[50%]"
      aria-labelledby="form-title"
    >
      <Input
        label={lang.modal.label.name}
        type="text"
        name="name"
        id="text_input_name"
        placeholder={lang.contactsSection.formContactSection.form.inputName}
        required={true}
        error={error?.name}
      />
      <Input
        label={lang.modal.label.phone}
        type="tel"
        name="phone"
        id="text_input_phone"
        placeholder={lang.contactsSection.formContactSection.form.inputPhone}
        error={error?.phone}
      />
      <Input
        required={true}
        label="Email"
        type="email"
        name="email"
        id="text_input_email"
        placeholder={lang.contactsSection.formContactSection.form.inputEmail}
        error={error?.email}
      />
      <SelectComponent
        label={
          lang.contactsSection.formContactSection.form.textareaMessage.select
            .label
        }
        name="service"
        lang={lang}
      />
      <TextAreaComponent
        label={
          lang.contactsSection.formContactSection.form.textareaMessage.label
        }
        name="message"
        placeholder={
          lang.contactsSection.formContactSection.form.textareaMessage
            .placeholder
        }
        required={true}
      />
      <Button type="submit">{lang.buttonText.send}</Button>
    </form>
  );
}

export default Form;
