import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import ExercisesBrowsePage from "./pages/ExercisesBrowsePage";
import ProgressDashboardPage from "./pages/ProgressDashboardPage";
import WorkoutsPage from "./pages/WorkoutsPage";
import LockedPage from "./components/LockedPage";
import Profile from "./pages/Profile";

function App() {
	const pages = [
		{ name: "Browse Exercises", route: "/browse-exercises" },
		{ name: "Progress Dashboard", route: "/progress-dashboard" },
		{ name: "Workouts", route: "/workouts" },
		{ name: "Profile", route: "/profile" },
	];
	return (
		<HeroUIProvider>
			<BrowserRouter>
				<Header pages={pages} />
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route
						path="/browse-exercises"
						element={<ExercisesBrowsePage />}
					/>
					<Route
						path="/progress-dashboard"
						element={<ProgressDashboardPage />}
					/>
					<Route path="/workouts" element={<WorkoutsPage />} />
					<Route path="/preferences" element={<LockedPage />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/settings" element={<LockedPage />} />
				</Routes>
				<Footer pages={pages} />
			</BrowserRouter>
		</HeroUIProvider>
	);
}

export default App;
