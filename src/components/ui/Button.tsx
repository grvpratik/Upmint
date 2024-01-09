// Button.js

import { cn } from "@/libs/utils";
import React from "react";

interface ButtonProps {
	children: React.ReactNode;
	onClick: () => void;
	className?: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({
	children,
	onClick,
	className,
}) => (
	<button
		className={cn(
			"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
			className
		)}
		onClick={onClick}
	>
		{children}
	</button>
);

const SecondaryButton: React.FC<ButtonProps> = ({
	children,
	onClick,
	className,
}) => (
	<button
		className={cn(
			"bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded",
			className
		)}
		onClick={onClick}
	>
		{children}
	</button>
);

const Button = {
	Primary: PrimaryButton,
	Secondary: SecondaryButton,
};

export default Button;
