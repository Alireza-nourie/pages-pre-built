import React from "react";
import { TrophyIcon, StarIcon } from "@heroicons/react/24/outline";
export default function AchievementBadge({ achievement }) {
	return (
		<div className="relative p-4 rounded-xl bg-dark-surface border border-neutral-700 w-full max-w-sm transform hover:-translate-y-1 transition-transform duration-200">
			<div className="absolute top-2 right-2 bg-dark-base rounded-md p-1.5 border border-neutral-600">
				<StarIcon className="w-4 h-4 text-yellow-400" />
			</div>
			<div className="flex items-center gap-4">
				<div className="p-3 bg-accent/10 rounded-lg">
					<TrophyIcon className="w-8 h-8 text-accent" />
				</div>
				<div>
					<p className="font-bold text-dark-primary text-lg">
						{achievement.title}
					</p>
					<p className="text-dark-secondary text-sm">
						{achievement.description}
					</p>
				</div>
			</div>
		</div>
	);
}
