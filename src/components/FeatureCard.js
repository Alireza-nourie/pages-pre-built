import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/react";
export default function FeatureCard({ feature }) {
	return (
		<Card className="p-6 bg-dark-surface border border-neutral-700 text-center items-center h-full">
			<CardHeader>
				<div className="p-4 bg-primary/10 rounded-full">
					{feature.icon}
				</div>
			</CardHeader>
			<CardBody>
				<h3 className="text-xl font-bold text-dark-primary">
					{feature.title}
				</h3>
				<p className="text-dark-secondary mt-2">
					{feature.description}
				</p>
			</CardBody>
		</Card>
	);
}
