export type InputProps = {
  id?: string;
  type: string;
  name: string;
  placeholder?: string;
  className?: string;
  label: string;
  required?: boolean;
  error?: string[];
};

function Input({ ...props }: InputProps) {
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
      {props.error && <span className="text-orange">{props.error}</span>}
    </div>
  );
}

export default Input;
