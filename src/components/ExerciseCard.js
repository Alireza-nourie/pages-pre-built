import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardFooter, Image, Button, Chip } from "@heroui/react";
export default function ExerciseCard({ exercise }) {
	return (
		<Card
			shadow="sm"
			isPressable
			className="bg-dark-surface border border-neutral-700 hover:border-primary transition-colors duration-200 rounded-xl"
		>
			<CardBody className="overflow-visible p-0">
				<Image
					shadow="sm"
					radius="lg"
					width="100%"
					alt={exercise.name}
					className="w-full object-cover h-[200px]"
					src={exercise.imageUrl}
				/>
			</CardBody>
			<CardFooter className="text-small justify-between">
				<div>
					<b className="text-dark-primary">{exercise.name}</b>
					<p className="text-dark-secondary">
						{exercise.muscleGroup}
					</p>
				</div>
				<Button
					as={Link}
					to={`/exercises/${exercise.id}`}
					color="primary"
					radius="lg"
					size="sm"
				>
					View
				</Button>
			</CardFooter>
		</Card>
	);
}
