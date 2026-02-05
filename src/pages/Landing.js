import FeatureCard from "../components/FeatureCard";
import {
	ChartBarIcon,
	ClipboardDocumentListIcon,
	TrophyIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@heroui/react";
import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
	const features = [
		{
			title: "Workout Logging",
			description:
				"Easily log your exercises, sets, reps, and weights to keep a detailed history of your training.",
			icon: (
				<ClipboardDocumentListIcon className="w-8 h-8 text-primary" />
			),
		},
		{
			title: "Progress Tracking",
			description:
				"Visualize your progress with intuitive charts and metrics for strength, endurance, and body measurements.",
			icon: <ChartBarIcon className="w-8 h-8 text-primary" />,
		},
		{
			title: "Achievements & Milestones",
			description:
				"Stay motivated by unlocking achievements for reaching new personal records and maintaining consistency.",
			icon: <TrophyIcon className="w-8 h-8 text-primary" />,
		},
	];
	return (
		<div className="bg-neutral-950 text-white min-h-screen">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
				<div className="relative text-center text-dark-primary z-10 px-4">
					<h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
						Achieve Your Fitness Goals with FitTrack
					</h1>
					<p className="max-w-2xl mx-auto mt-6 text-lg md:text-xl text-dark-secondary">
						Track your workouts, monitor your progress, and stay
						motivated on your journey to a healthier you. All in one
						simple, powerful app.
					</p>
					<div className="mt-8">
						<Button
							as={Link}
							to="/workouts"
							color="primary"
							size="lg"
							className="font-semibold"
						>
							Get Started
						</Button>
					</div>
				</div>

				<>
					<div className="text-center">
						<h2 className="text-3xl font-bold tracking-tight text-dark-primary sm:text-4xl">
							Everything you need to succeed
						</h2>
						<p className="mt-4 text-lg leading-8 text-dark-secondary">
							FitTrack provides a comprehensive suite of tools to
							help you reach your fitness goals.
						</p>
					</div>
					<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
						{features.map((feature) => (
							<FeatureCard
								key={feature.title}
								feature={feature}
							/>
						))}
					</div>
				</>

				<div className="bg-dark-surface rounded-2xl p-12 border border-neutral-700 shadow-lg text-center">
					<h2 className="text-3xl font-bold tracking-tight text-dark-primary sm:text-4xl">
						Join the FitTrack Community Today!
					</h2>
					<p className="mt-4 max-w-xl mx-auto text-lg leading-8 text-dark-secondary">
						Take the first step towards a better you. Sign up now
						and unlock your full potential.
					</p>
					<div className="mt-8">
						<Button
							as={Link}
							to="/workouts"
							color="primary"
							size="lg"
							className="font-semibold"
						>
							Start Your Journey
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
