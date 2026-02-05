import React from "react";
import { Button } from "@heroui/react";
import { PlusIcon } from "@heroicons/react/24/outline";
export default function FloatingActionButton({ onClick, icon, label }) {
	return (
		<Button
			isIconOnly
			color="primary"
			aria-label={label}
			onClick={onClick}
			className="fixed bottom-8 right-8 w-16 h-16 rounded-full shadow-lg z-40"
		>
			{icon || <PlusIcon className="w-8 h-8" />}
		</Button>
	);
}
