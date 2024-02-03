import { cn } from "@/libs/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <button
    className={cn(
      "rounded bg-blue-500 px-3 py-1.5 font-medium text-white transition-all duration-200 ease-in-out hover:bg-blue-700",
      className,
    )}
    {...props}
  >
    {children}
  </button>
);

const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => (
  <button
    className={cn(
      "flex rounded text-sm bg-gray-200 bg-gray-300/25 px-2 py-1 text-gray-800 transition  hover:bg-gray-300/50 md:px-3 md:py-1.5  dark:text-gray-200 ",
      className,
    )}
    {...props}
  >
    {children}
  </button>
);

const Button = {
  Primary: PrimaryButton,
  Secondary: SecondaryButton,
};

export default Button;
