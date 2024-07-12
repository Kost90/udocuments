import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Button from "@/components/ui/Button";
import { sendMessage } from "../../_actions/actions";

type InputProps = {
  id?: string;
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
  label: string;
  required?: boolean;
};

type TextAreaProps = Omit<InputProps, "type">;

type SelectProps = {
  name: string;
  label: string;
};

function Form() {
  return (
    <form action={sendMessage} className="flex flex-col gap-6 justify-center items-start p-6 bg-general-gradient w-full h-full rounded-xl border border-orange text-start max-w-full md:max-w-[50%]">
      <Input
        label="Імя"
        type="text"
        name="name"
        id="text_input_name"
        placeholder="Ваше імя"
        required={true}
      />
      <Input
        label="Телефон"
        type="tel"
        name="phone"
        id="text_input_phone"
        placeholder="Ваше телефон"
      />
      <Input
        required={true}
        label="Email"
        type="email"
        name="email"
        id="text_input_email"
        placeholder="Ваше email"
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

export function Input({ ...props }: InputProps) {
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full">
      <label className="text-base text-cream">{props.label}</label>
      <input
        required={props.required}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        id={props.id}
        className={`w-full flex justify-center items-center p-1 bg-cream text-black placeholder:text-slate-600 rounded-lg`}
      />
    </div>
  );
}

export function SelectComponent({ ...props }: SelectProps) {
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full">
      <label className="text-base text-cream">{props.label}</label>
    <Select name={props.name}>
      <SelectTrigger className="w-full bg-cream">
        <SelectValue placeholder="теми:" />
      </SelectTrigger>
      <SelectContent className="bg-cream">
        <SelectGroup>
          <SelectLabel className="text-base text-black">
            оберіть одну
          </SelectLabel>
          <SelectItem value="property" className="cursor-pointer">
            Послуги з оформлення нерухомості
          </SelectItem>
          <SelectItem value="advocate" className="cursor-pointer">
            Послуги адвоката, супровід бізнесу
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  );
}

export function TextAreaComponent({ ...props }: TextAreaProps) {
  return (
    <div className="flex flex-col justify-start items-start gap-2 w-full">
      <label className="text-base text-cream">{props.label}</label>
      <textarea
        required={props.required}
        name={props.name}
        placeholder={props.placeholder}
        id={props.id}
        className={`w-full flex justify-center items-center p-1 bg-cream text-black placeholder:text-slate-600 rounded-lg resize-none min-h-40 md:min-h-48`}
      />
    </div>
  );
}

export default Form;
