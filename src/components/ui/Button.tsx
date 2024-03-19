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
      "cursor-pointer  rounded-lg border-b-[4px]   border-blue-600 bg-blue-500 px-6 py-2 text-white transition-all hover:-translate-y-[1px] hover:border-b-[6px] hover:brightness-110 active:translate-y-[2px] active:border-b-[2px] active:brightness-90 ",

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
      "cursor-pointer  rounded-lg border-b-[4px]   border-gray-400 bg-white px-6 py-2 text-black transition-all hover:-translate-y-[1px] hover:border-b-[6px] hover:brightness-110 active:translate-y-[2px] active:border-b-[2px] active:brightness-90 ",
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
