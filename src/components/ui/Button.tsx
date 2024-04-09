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
    "px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-900 hover:opacity-80 text-white text-sm font-medium rounded-md",

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
      "cursor-pointer  rounded-md bg-gradient-to-r from-gray-100 to-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:opacity-80 ",
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
