import { InputProps } from "./Input";

type TextAreaProps = Omit<InputProps, "type">;

function TextAreaComponent({ ...props }: TextAreaProps) {
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

export default TextAreaComponent;
