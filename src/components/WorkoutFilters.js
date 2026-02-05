import React, { useState } from "react";
import { Input, Select, SelectItem, Button } from "@heroui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export default function WorkoutFilters() {
	const [searchTerm, setSearchTerm] = useState("");
	const [difficulty, setDifficulty] = useState("");

	return (
		<div className="w-full flex flex-col md:flex-row items-center gap-4">
			<Input
				labelPlacement="outside"
				placeholder="Search workouts..."
				value={searchTerm}
				onValueChange={setSearchTerm}
				startContent={
					<MagnifyingGlassIcon className="w-5 h-5 text-dark-secondary" />
				}
				className="w-full md:w-1/2"
				classNames={{
					inputWrapper: "bg-dark-surface border-neutral-700",
				}}
			/>
			<Select
				labelPlacement="outside"
				placeholder="Filter by difficulty"
				selectedKeys={difficulty ? [difficulty] : []}
				onSelectionChange={(keys) =>
					setDifficulty(Array.from(keys)[0] || "")
				}
				className="w-full md:w-auto"
				classNames={{
					trigger: "bg-dark-surface border-neutral-700",
					popoverContent: "bg-dark-surface border-neutral-700",
				}}
			>
				<SelectItem key="beginner">Beginner</SelectItem>
				<SelectItem key="intermediate">Intermediate</SelectItem>
				<SelectItem key="advanced">Advanced</SelectItem>
			</Select>
			<Button color="primary" className="w-full md:w-auto">
				Search
			</Button>
		</div>
	);
}
