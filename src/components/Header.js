import React from "react";
import { Link } from "react-router-dom";
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Input,
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownItem,
	Avatar,
	Button,
} from "@heroui/react";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";
export default function Header({ pages }) {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);
	return (
		<Navbar
			maxWidth="xl"
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			className="sticky top-0 z-50 backdrop-blur-md bg-dark-surface/80 border-b border-neutral-700"
		>
			<NavbarContent justify="start">
				<NavbarMenuToggle className="text-dark-primary sm:hidden" />
				<NavbarBrand>
					<Link
						to="/"
						className="font-bold text-inherit text-dark-primary text-xl"
					>
						FitTrack
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-6" justify="center">
				{pages.slice(0, 4).map((page, index) => (
					<NavbarItem key={`${page.name}-${index}`}>
						<Link
							to={page.route}
							className="text-dark-secondary hover:text-primary transition-colors duration-200"
						>
							{page.name.replace("Page", "")}
						</Link>
					</NavbarItem>
				))}
			</NavbarContent>

			<NavbarContent justify="end" className="gap-4">
				<NavbarItem className="hidden lg:flex">
					<Input
						aria-label="Search"
						classNames={{
							inputWrapper: "bg-dark-base border-neutral-700",
						}}
						labelPlacement="outside"
						placeholder="Search..."
						startContent={
							<MagnifyingGlassIcon className="w-5 h-5 text-dark-secondary" />
						}
						type="search"
					/>
				</NavbarItem>
				<NavbarItem>
					<Button
						isIconOnly
						variant="light"
						aria-label="Notifications"
					>
						<BellIcon className="w-6 h-6 text-dark-secondary" />
					</Button>
				</NavbarItem>
				<Dropdown
					placement="bottom-end"
					className="bg-dark-surface border border-neutral-700"
				>
					<DropdownTrigger>
						<Avatar
							isBordered
							as="button"
							className="transition-transform"
							color="secondary"
							size="sm"
							src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
						/>
					</DropdownTrigger>
					<DropdownMenu
						aria-label="Profile Actions"
						variant="flat"
						classNames={{
							base: "bg-dark-surface",
							emptyContent: "bg-dark-surface",
						}}
					>
						<DropdownItem
							key="profile"
							className="h-14 gap-2 text-dark-primary"
						>
							<p className="font-semibold">Signed in as</p>
							<p className="font-semibold">
								zoe.taylor@example.com
							</p>
						</DropdownItem>
						<DropdownItem
							key="settings"
							className="text-dark-secondary hover:!bg-dark-base"
						>
							My Settings
						</DropdownItem>
						<DropdownItem
							key="team_settings"
							className="text-dark-secondary hover:!bg-dark-base"
						>
							Team Settings
						</DropdownItem>
						<DropdownItem
							key="analytics"
							className="text-dark-secondary hover:!bg-dark-base"
						>
							Analytics
						</DropdownItem>
						<DropdownItem
							key="system"
							className="text-dark-secondary hover:!bg-dark-base"
						>
							System
						</DropdownItem>
						<DropdownItem
							key="configurations"
							className="text-dark-secondary hover:!bg-dark-base"
						>
							Configurations
						</DropdownItem>
						<DropdownItem
							key="help_and_feedback"
							className="text-dark-secondary hover:!bg-dark-base"
						>
							Help & Feedback
						</DropdownItem>
						<DropdownItem
							key="logout"
							color="danger"
							className="hover:!bg-red-500/20"
						>
							Log Out
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>

			<NavbarMenu className="bg-dark-surface/80 backdrop-blur-md border-t border-neutral-700">
				{pages.map((page, index) => (
					<NavbarMenuItem key={`${page.name}-${index}`}>
						<Link
							to={page.route}
							className="w-full text-dark-secondary hover:text-primary transition-colors duration-200"
							onClick={() => setIsMenuOpen(false)}
						>
							{page.name.replace("Page", "")}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
