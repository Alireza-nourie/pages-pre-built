import ExerciseCard from "../components/ExerciseCard";
import ExerciseFilters from "../components/ExerciseFilters";
import React from "react";

export default function ExercisesBrowsePage() {
	const exercises = [
		{
			id: 1,
			name: "Bench Press",
			muscleGroup: "Chest",
			imageUrl:
				"https://pixabay.com/get/gee430dacf34103cbe71b1ad420fbf606ade4b61bd438c4a7819867a11172044e51fa046c37ad239746b2655cfc3e2fd66e4a30e33984acf7282fd83fbd459e10_640.jpg",
		},
		{
			id: 2,
			name: "Squat",
			muscleGroup: "Legs",
			imageUrl:
				"https://pixabay.com/get/g7dcdd4e74f209db350462c7429d37a9f195e367707d29a299cb0ba3a2ad5856bad831f7e8ad52a10df3fa20d8eb10f935dbf267aabc1681e66a9ef25e33cfff2_640.jpg",
		},
		{
			id: 3,
			name: "Deadlift",
			muscleGroup: "Back",
			imageUrl:
				"https://pixabay.com/get/g2bc51e65f9733fa19bc2478f8284c603f33ed737593f59b3213f6c8bbb527b70253fe7f113ce6b1580eb3201993510f82f19101cd1e312365040e253bc6f049b_640.jpg",
		},
		{
			id: 4,
			name: "Overhead Press",
			muscleGroup: "Shoulders",
			imageUrl:
				"https://pixabay.com/get/gafcebc914dc5dda3d386ef19f48205281f079a904db3bc89b532bd53208ac2b5878b57badb1cf05c5d5e6bbc44df623d_640.jpg",
		},
		{
			id: 5,
			name: "Bicep Curl",
			muscleGroup: "Arms",
			imageUrl:
				"https://pixabay.com/get/g71234e319f0ee565ee7e44b977febadd1eab1ae3ca3b7c1b75e72fab01cb5774f0ba08cd3bb2a27db97af3a8d4410f1635ff515f994486f34cb5296824ef6910_640.jpg",
		},
		{
			id: 6,
			name: "Plank",
			muscleGroup: "Core",
			imageUrl:
				"https://pixabay.com/get/g72e0020a4eeb5be60110028aae88f57edb7da23d4fbf7bd79badd1d47eb33694bea3a59d7472649097c3f5ba8f96fa84_640.jpg",
		},
		{
			id: 7,
			name: "Pull Up",
			muscleGroup: "Back",
			imageUrl:
				"https://pixabay.com/get/g94635463290e43fe0371b4307a6de84d89d5720dd2f5441af9568888bc10afb4658ebe1e91719c31599ea11c9f294e860bc4a399435e1fa4360986485d167caf_640.jpg",
		},
		{
			id: 8,
			name: "Push Up",
			muscleGroup: "Chest",
			imageUrl:
				"https://pixabay.com/get/gbd08e545f35b7b5165c1c04eedb19956f7cdc8db9b9d587059aa723fc8ad164a21b091e0dad83f1283b3df1ec5fd2ffb33b25f6b6334cdb6dc6265873c447d54_640.jpg",
		},
	];
	return (
		<div className="bg-neutral-950 text-white min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
				<>
					<h1 className="text-4xl font-bold tracking-tight text-dark-primary">
						Exercise Library
					</h1>
					<ExerciseFilters />
				</>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{exercises.map((exercise) => (
						<ExerciseCard key={exercise.id} exercise={exercise} />
					))}
				</div>
			</div>
		</div>
	);
}
