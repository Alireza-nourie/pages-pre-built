import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/react";
import { ChartBarIcon } from "@heroicons/react/24/outline";
export default function ProgressChart({ title, data }) {
	return (
		<Card className="w-full bg-dark-surface border border-neutral-700">
			<CardHeader>
				<div className="flex items-center gap-3">
					<ChartBarIcon className="w-6 h-6 text-primary" />
					<h3 className="text-lg font-semibold text-dark-primary">
						{title}
					</h3>
				</div>
			</CardHeader>
			<CardBody>
				<div className="w-full h-64 bg-dark-base rounded-lg flex items-center justify-center border border-neutral-600">
					<p className="text-dark-secondary italic">
						Chart placeholder for {title}
					</p>
				</div>
			</CardBody>
		</Card>
	);
}
