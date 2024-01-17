import clsx from "clsx";

interface ButtonProps {
  children?: React.ReactNode;
  width?: "full" | "fit-content";
  classes?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  width,
  classes,
  onClick
}: ButtonProps) => {
  
  return (
    <button
      onClick={onClick}
      className={
        clsx("flex items-center justify-center px-4 py-2 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-700",
        width === "full" ? "w-full" : "w-fit",
        classes)}
    >
      {children}
    </button>
  );
}

export default Button;