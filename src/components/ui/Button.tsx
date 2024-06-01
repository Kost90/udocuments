import clsx from "clsx";

interface IProps {
  type: "submit" | "reset" | "button";
  onClick?: () => void;
  className?: string;
  name?: string;
  children?: React.ReactNode;
}
function Button({ type, onClick, name, className = "", children }: IProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        `flex items-center justify-center p-2 md:py-2 md:px-5 border border-black rounded-xl md:w-36 w-28 bg-orange text-black hover:bg-navBar hover:border-orange-500 hover:text-cream active:bg-cream active:text-black transition duration-75 cursor-pointer`,
        className
      )}
    >
      {name}
      {children}
    </button>
  );
}

export default Button;
