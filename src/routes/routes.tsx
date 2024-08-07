// import App from "@/App";
import MainLayout from "@/layouts/MainLayout";
import InformationContainer from "@/pages/auth/informations/InformationContainer";
import Login from "@/pages/auth/login/Login";
import Register from "@/pages/auth/register/Register";
import TwoStepVerification from "@/pages/auth/twoStepVerification/TwoStepVerification";
import Home from "@/pages/home/Home";
import Profile from "@/pages/profile/Profile";
import type { Router } from "@remix-run/router";
import { createBrowserRouter } from "react-router-dom";

const router: Router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
			{
				path: "/otp",
				element: <TwoStepVerification />,
			},
			{
				path: "/profile",
				element: <Profile />,
			},
			{
				path: "/information",
				element: <InformationContainer />,
			},
		],
	},
]);

export default router;
