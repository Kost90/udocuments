'use client'
import clsx from "clsx";
import { useFormStatus } from "react-dom";

interface IProps {
  type: "submit" | "reset" | "button";
  onClick?: () => void;
  className?: string;
  name?: string;
  children?: React.ReactNode;
}
function Button({ type, onClick, name, className = "", children}: IProps) {
  const { pending } = useFormStatus();

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        `flex items-center justify-center p-4 md:py-2 md:px-5 border border-black rounded-xl w-40 bg-orange text-black hover:bg-cream hover:border-orange hover:text-black hover:font-bold active:bg-cream active:text-black transition duration-75 cursor-pointer disabled:bg-slate-400 disabled:text-neutral-800`,
        className
      )}
      disabled={pending}
    >
      {name}
      {children}
    </button>
  );
}

export default Button;
