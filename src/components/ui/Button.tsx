import clsx from "clsx";

interface IProps {
  type: "submit" | "reset" | "button";
  onClick?: () => void;
  className?: string;
  name?: string;
  children?: React.ReactNode;
  disabled?:boolean;
}
function Button({ type, onClick, name, className = "", children, disabled }: IProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        `flex items-center justify-center p-2 md:py-2 md:px-5 border border-black rounded-xl w-40 bg-orange text-black hover:bg-navBar hover:border-orange hover:text-cream active:bg-cream active:text-black transition duration-75 cursor-pointer`,
        className
      )}
      disabled={disabled}
    >
      {name}
      {children}
    </button>
  );
}

export default Button;
