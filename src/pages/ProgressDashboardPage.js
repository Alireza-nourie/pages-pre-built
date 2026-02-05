import AchievementBadge from "../components/AchievementBadge";
import ProgressChart from "../components/ProgressChart";
import { BoltIcon, ClockIcon, FireIcon } from "@heroicons/react/24/outline";
import { Card, CardBody, Chip } from "@heroui/react";
import React from "react";

export default function ProgressDashboardPage() {
	const achievements = [
		{
			title: "First Workout",
			description: "You completed your first workout!",
		},
		{
			title: "Workout Streak: 7 Days",
			description: "You've worked out for 7 days in a row.",
		},
		{
			title: "Cardio King",
			description: "You've completed 10 hours of cardio.",
		},
		{
			title: "Strength Milestone",
			description: "You've lifted over 10,000 kg in total.",
		},
		{
			title: "Perfect Month",
			description:
				"You've completed all your scheduled workouts for a month.",
		},
		{
			title: "Early Bird",
			description: "You've completed 20 workouts before 8 AM.",
		},
	];
	return (
		<div className="bg-neutral-950 text-white min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
				<>
					<div className="flex justify-between items-center">
						<h1 className="text-4xl font-bold tracking-tight text-dark-primary">
							Your Progress Dashboard
						</h1>
						<Chip color="success">Data up to date</Chip>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<Card className="bg-dark-surface border border-neutral-700 p-4">
							<CardBody className="text-center">
								<div className="flex justify-center mb-2">
									<BoltIcon className="w-8 h-8 text-secondary" />
								</div>
								<h3 className="text-3xl font-bold text-dark-primary">
									24
								</h3>
								<p className="text-dark-secondary">
									Workouts Completed
								</p>
							</CardBody>
						</Card>
						<Card className="bg-dark-surface border border-neutral-700 p-4">
							<CardBody className="text-center">
								<div className="flex justify-center mb-2">
									<ClockIcon className="w-8 h-8 text-secondary" />
								</div>
								<h3 className="text-3xl font-bold text-dark-primary">
									18h 32m
								</h3>
								<p className="text-dark-secondary">
									Time Spent
								</p>
							</CardBody>
						</Card>
						<Card className="bg-dark-surface border border-neutral-700 p-4">
							<CardBody className="text-center">
								<div className="flex justify-center mb-2">
									<FireIcon className="w-8 h-8 text-secondary" />
								</div>
								<h3 className="text-3xl font-bold text-dark-primary">
									9,200
								</h3>
								<p className="text-dark-secondary">
									Calories Burned
								</p>
							</CardBody>
						</Card>
					</div>
				</>

				<>
					<ProgressChart title="Weight Trend" data={[]} />
					<ProgressChart
						title="Strength Gain (Bench Press)"
						data={[]}
					/>
					<ProgressChart
						title="Cardio Performance (Running)"
						data={[]}
					/>
					<ProgressChart title="Workout Consistency" data={[]} />
				</>

				<>
					<h2 className="text-3xl font-bold tracking-tight text-dark-primary">
						Your Achievements
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
						{achievements.map((achievement, index) => (
							<AchievementBadge
								key={index}
								achievement={achievement}
							/>
						))}
					</div>
				</>
			</div>
		</div>
	);
}
