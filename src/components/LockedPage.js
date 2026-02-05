import React from "react";
import { Card, CardBody, Button } from "@heroui/react";

export default function LockedPage() {
	const handleUpgrade = () => {
		// Primary approach: Try to redirect parent window (works for same-origin)
		try {
			if (window.top && window.top !== window) {
				// Try to get parent origin and redirect
				const parentOrigin = window.top.location.origin;
				window.top.location.href = `${parentOrigin}/subscription`;
				return;
			}
		} catch (e) {
			// Cross-origin error - fall through to postMessage
		}

		// Secondary approach: Use postMessage to communicate with parent
		// The parent component should listen for this message
		try {
			if (window.parent && window.parent !== window) {
				window.parent.postMessage(
					{
						type: "codalio-upgrade-request",
						url: "/subscription",
					},
					"*"
				);
				return;
			}
		} catch (e) {
			// postMessage failed - fall through to new window
		}

		// Fallback: Open upgrade page in new tab/window
		// This is the most reliable method for sandboxed iframes
		const currentOrigin = window.location.origin;
		const upgradeUrl = `${currentOrigin}/subscription`;
		window.open(upgradeUrl, "_blank", "noopener,noreferrer");
	};

	return (
		<div className="min-h-screen bg-neutral-900 flex items-center justify-center px-6 py-16">
			<Card className="max-w-md w-full bg-neutral-800 border border-neutral-700 rounded-xl">
				<CardBody className="p-8 text-center space-y-6">
					<div className="space-y-2">
						<h1 className="text-2xl font-bold text-white">
							Page Locked
						</h1>
						<p className="text-neutral-400">
							This page is locked on the free plan. Upgrade to
							unlock all pages and access the full application.
						</p>
					</div>
					<Button
						color="primary"
						size="lg"
						className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl"
						onPress={handleUpgrade}
					>
						Upgrade Now
					</Button>
				</CardBody>
			</Card>
		</div>
	);
}
