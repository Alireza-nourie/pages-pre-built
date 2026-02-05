import { ChartBarIcon, HeartIcon } from "@heroicons/react/24/outline";
import { FireIcon, StarIcon } from "@heroicons/react/24/solid";
import {
	Avatar,
	Badge,
	Button,
	Card,
	CardBody,
	CardHeader,
	Chip,
	User,
} from "@heroui/react";
import React from "react";

export default function Profile() {
	return (
		<div className="bg-neutral-950 text-white min-h-screen p-4 flex flex-col gap-6">
			<section className="w-full max-w-4xl mx-auto">
				<Card className="bg-neutral-800/80 rounded-2xl p-8">
					<div className="flex flex-col md:flex-row items-center gap-8">
						<Avatar
							src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
							className="w-32 h-32 text-large ring-4 ring-orange-500"
						/>
						<div className="flex-grow text-center md:text-left">
							<h1 className="text-4xl font-bold text-white">
								Jason Hughes
							</h1>
							<p className="text-neutral-400">
								jason@example.com
							</p>
							<div className="flex gap-4 mt-4 justify-center md:justify-start">
								<Badge color="secondary" className="rounded-lg">
									Pro Member
								</Badge>
								<Badge color="primary" className="rounded-lg">
									Level 12
								</Badge>
							</div>
						</div>
						<Button
							color="primary"
							variant="bordered"
							className="rounded-lg border-orange-500 text-orange-500 hover:bg-orange-500/10 transition-colors"
						>
							Edit Profile
						</Button>
					</div>
				</Card>
			</section>

			<section className="w-full max-w-7xl mx-auto">
				<h2 className="text-3xl font-bold text-white text-center mb-8">
					Progress Analytics
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<Card className="bg-neutral-800/80 rounded-2xl">
						<CardHeader className="flex items-center gap-4 p-6">
							<ChartBarIcon className="w-6 h-6 text-orange-500" />
							<h3 className="text-xl font-semibold text-white">
								Strength Progress
							</h3>
						</CardHeader>
						<CardBody className="p-6">
							<div className="h-64 bg-neutral-700/50 rounded-lg flex items-center justify-center">
								<p className="text-neutral-400">
									Strength Chart Placeholder
								</p>
							</div>
						</CardBody>
					</Card>
					<Card className="bg-neutral-800/80 rounded-2xl">
						<CardHeader className="flex items-center gap-4 p-6">
							<HeartIcon className="w-6 h-6 text-red-500" />
							<h3 className="text-xl font-semibold text-white">
								Cardio Progress
							</h3>
						</CardHeader>
						<CardBody className="p-6">
							<div className="h-64 bg-neutral-700/50 rounded-lg flex items-center justify-center">
								<p className="text-neutral-400">
									Cardio Chart Placeholder
								</p>
							</div>
						</CardBody>
					</Card>
				</div>
			</section>

			<section className="w-full max-w-7xl mx-auto mt-10">
				<h2 className="text-3xl font-bold text-white text-center mb-8">
					Your Achievements
				</h2>
				<Card className="bg-neutral-800/80 rounded-2xl">
					<CardBody className="p-8">
						<div className="flex flex-wrap justify-center gap-6">
							<Chip
								startContent={<FireIcon className="w-5 h-5" />}
								variant="solid"
								color="warning"
								size="lg"
								classNames={{
									base: "h-12 rounded-lg bg-orange-500/20 text-orange-300",
									content: "font-semibold",
								}}
							>
								Consistent Performer
							</Chip>
							<Chip
								startContent={<StarIcon className="w-5 h-5" />}
								variant="solid"
								color="secondary"
								size="lg"
								classNames={{
									base: "h-12 rounded-lg bg-purple-500/20 text-purple-300",
									content: "font-semibold",
								}}
							>
								PR Breaker
							</Chip>
							<Chip
								startContent={
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path d="M10 3a1 1 0 011 1v4.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 8.586V4a1 1 0 011-1z" />
										<path d="M3.293 12.293a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 10.414l-3.293 3.293a1 1 0 01-1.414 0z" />
									</svg>
								}
								variant="solid"
								color="primary"
								size="lg"
								classNames={{
									base: "h-12 rounded-lg bg-blue-500/20 text-blue-300",
									content: "font-semibold",
								}}
							>
								Cardio King
							</Chip>
							<Chip
								startContent={
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-5 w-5"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fillRule="evenodd"
											d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
											clipRule="evenodd"
										/>
									</svg>
								}
								variant="solid"
								color="success"
								size="lg"
								classNames={{
									base: "h-12 rounded-lg bg-green-500/20 text-green-300",
									content: "font-semibold",
								}}
							>
								Workout Complete
							</Chip>
						</div>
					</CardBody>
				</Card>
			</section>
		</div>
	);
}
