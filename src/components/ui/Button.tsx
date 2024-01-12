// Button.js

import { cn } from "@/libs/utils";
import React from "react";

interface ButtonProps {
	children: React.ReactNode;
	props?: React.HTMLAttributes<HTMLElement>;
	className?: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({
	children,
	props,
	className,
}) => (
	<button
		className={cn(
			"bg-blue-500 hover:bg-blue-700 text-white font-medium py-1.5 px-3 rounded transition-all duration-200 ease-in-out",
			className
		)}
		{...props}
	>
		{children}
	</button>
);

const SecondaryButton: React.FC<ButtonProps> = ({
	children,
	props,
	className,
}) => (
	<button
		className={cn(
			"bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-1.5 px-3 rounded transition-all duration-200 ease-in-out",
			className
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
