import React from "react";
import { Link } from "react-router-dom";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Image,
	Button,
	Chip,
} from "@heroui/react";
export default function WorkoutCard({ workout }) {
	return (
		<Card className="w-full bg-dark-surface border border-neutral-700 shadow-md hover:shadow-primary/30 transition-shadow duration-300 rounded-2xl">
			<CardHeader className="p-0">
				<Image
					alt={workout.title}
					className="object-cover w-full h-48"
					src={workout.imageUrl}
					removeWrapper
				/>
			</CardHeader>
			<CardBody className="p-4">
				<div className="flex justify-between items-start">
					<h4 className="font-bold text-lg text-dark-primary">
						{workout.title}
					</h4>
					<Chip
						color={
							workout.difficulty === "Beginner"
								? "success"
								: workout.difficulty === "Intermediate"
								? "warning"
								: "danger"
						}
						variant="flat"
						className="capitalize"
					>
						{workout.difficulty}
					</Chip>
				</div>
				<p className="text-sm text-dark-secondary mt-1">
					{workout.duration} | {workout.calories} kcal
				</p>
			</CardBody>
			<CardFooter className="p-4 border-t border-neutral-700">
				<Button
					as={Link}
					to={`/workouts/plan/${workout.id}`}
					color="primary"
					variant="solid"
					className="w-full"
				>
					View Workout
				</Button>
			</CardFooter>
		</Card>
	);
}
