import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Image,
	Button,
	Badge,
} from "@heroui/react";
import { Link } from "react-router-dom";
export default function WorkoutCard({ workout }) {
	return (
		<Card className="bg-neutral-800 shadow-lg hover:shadow-orange-500/30 transition-shadow duration-300l">
			<CardHeader className="flex justify-between items-start p-4 pb-2">
				<h3 className="text-white text-xl font-semibold flex-grow">
					{workout.title}
				</h3>
				<Badge
					color={
						workout.difficulty === "Beginner"
							? "success"
							: workout.difficulty === "Intermediate"
							? "warning"
							: "danger"
					}
					variant="flat"
					className="ml-4 capitalize"
				>
					{workout.difficulty}
				</Badge>
			</CardHeader>
			<CardBody className="p-4 pt-0">
				<Image
					src={workout.image}
					alt={workout.title}
					className="rounded-lg object-cover h-48 w-full"
				/>
				<p className="text-neutral-400 text-sm mt-4 line-clamp-3">
					{workout.description}
				</p>
				<p className="text-neutral-300 text-sm mt-2">
					Duration: {workout.duration}
				</p>
			</CardBody>
			<CardFooter className="p-4 pt-0 flex justify-end">
				<Link to={`/workouts/${workout.id}`}>
					<Button
						color="primary"
						className="rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors"
					>
						View Workout
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}
