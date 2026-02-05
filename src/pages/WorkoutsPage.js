import FloatingActionButton from "../components/FloatingActionButton";
import WorkoutCard from "../components/WorkoutCard";
import WorkoutFilters from "../components/WorkoutFilters";
import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function WorkoutsPage() {
	const workouts = [
		{
			id: 1,
			title: "Full Body Strength",
			difficulty: "Intermediate",
			duration: "60 min",
			calories: 450,
			progress: 75,
			imageUrl:
				"https://pixabay.com/get/g9003b70a759a3bd20067ec6b56b1d5037bd51097aaa99f545e7815f8170cad49ea8e56b09e2b7d3b20d8f448dee2ba5c_640.jpg",
		},
		{
			id: 2,
			title: "Morning Cardio",
			difficulty: "Beginner",
			duration: "30 min",
			calories: 300,
			progress: 100,
			imageUrl:
				"https://pixabay.com/get/gc365472c0227ff9cb6811b476ca6a8dee6df0f74ef208d14ccdc9bf7ec78bff00bd87ff081ada9e9b63a8bff97c4c27d12892b962669a897999e49745f93755e_640.jpg",
		},
		{
			id: 3,
			title: "HIIT Challenge",
			difficulty: "Advanced",
			duration: "45 min",
			calories: 600,
			progress: 20,
			imageUrl:
				"https://pixabay.com/get/g9c4260543cb713c41582ccc577d3665df5bb57cdcab8996199988644086a32e2810c1b1c905629ca01b54377869237492d8094ddb355d78d8ec736c06094dd31_640.jpg",
		},
		{
			id: 4,
			title: "Yoga Flow",
			difficulty: "Beginner",
			duration: "45 min",
			calories: 200,
			progress: 50,
			imageUrl:
				"https://pixabay.com/get/gfa474b39ecfdf44f8927e48a8916ddfb8f052835db7b721c1001fcb6f0f2dc6f7256de8bc0b200a434ea2d5257a7d7b30d5e69835fbfbb8201e82fbab2fe8d92_640.jpg",
		},
		{
			id: 5,
			title: "Core Crusher",
			difficulty: "Intermediate",
			duration: "20 min",
			calories: 250,
			progress: 90,
			imageUrl:
				"https://pixabay.com/get/g3b88abda1c19650207e10e9a2beedb185e35b6d516b6c82f0fb17bbbceac950a68ed74c1227a5fe8b9eafb184afb202a59ab68078fc4b596746d19f3a1717e68_640.jpg",
		},
		{
			id: 6,
			title: "Leg Day",
			difficulty: "Advanced",
			duration: "75 min",
			calories: 700,
			progress: 10,
			imageUrl:
				"https://pixabay.com/get/gd04622186543086c2228ff8395b5fffd68599adf170457bf4717f7dde9a58dccf639a84ffb1cef2c78fb64d9c7db192ecef94aadb6b885d29115d28845e443ac_640.jpg",
		},
	];
	return (
		<div className="bg-neutral-950 text-white min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
				<>
					<h1 className="text-4xl font-bold tracking-tight text-dark-primary">
						Explore Workouts
					</h1>
					<WorkoutFilters />
				</>

				<>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{workouts.map((workout) => (
							<WorkoutCard key={workout.id} workout={workout} />
						))}
					</div>
					<FloatingActionButton
						label="Create new workout"
						icon={<PlusIcon className="w-8 h-8" />}
					/>
				</>
			</div>
		</div>
	);
}
