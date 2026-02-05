import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "@heroui/react";
export default function Footer({ pages }) {
	return (
		<footer className="bg-dark-surface border-t border-neutral-700 mt-auto">
			<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
					<div className="col-span-2 md:col-span-1">
						<h3 className="text-xl font-bold text-dark-primary mb-2">
							FitTrack
						</h3>
						<p className="text-dark-secondary">
							Achieve Your Fitness Goals.
						</p>
					</div>
					<div>
						<h4 className="text-md font-semibold text-dark-primary tracking-wider uppercase">
							Navigation
						</h4>
						<ul className="mt-4 space-y-2">
							{pages.map((page, index) => (
								<li key={`${page.name}-${index}`}>
									<Link
										to={page.route}
										className="text-dark-secondary hover:text-primary transition-colors duration-200"
									>
										{page.name.replace("Page", "")}
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div>
						<h4 className="text-md font-semibold text-dark-primary tracking-wider uppercase">
							Legal
						</h4>
						<ul className="mt-4 space-y-2">
							<li>
								<Link
									to="/terms"
									className="text-dark-secondary hover:text-primary transition-colors duration-200"
								>
									Terms
								</Link>
							</li>
							<li>
								<Link
									to="/privacy"
									className="text-dark-secondary hover:text-primary transition-colors duration-200"
								>
									Privacy
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<Divider className="my-8 bg-neutral-700" />
				<p className="text-center text-base text-dark-secondary">
					&copy; {new Date().getFullYear()} FitTrack. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
}
