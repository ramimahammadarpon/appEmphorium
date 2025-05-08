import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import ErrorPage from "../Pages/ErrorPage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AppDetails from "../Pages/AppDetails";
import PrivateRoute from "./PrivateRoute";
import Faqs from "../Pages/Faqs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("/appsInfos.json"),
        hydrateFallbackElement: (
          <div className="min-h-[80vh] flex justify-center items-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "faqs",
        element: <Faqs></Faqs>,
        loader: () => fetch("/faq.json"),
        hydrateFallbackElement: (
          <div className="min-h-[80vh] flex justify-center items-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
      {
        path: "app-details/:id",
        element: (
          <PrivateRoute>
            <AppDetails></AppDetails>
          </PrivateRoute>
        ),
        loader: () => fetch("/appsInfos.json"),
        hydrateFallbackElement: (
          <div className="min-h-[80vh] flex justify-center items-center">
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
      },
    ],
  },
  {
    path: "authentication",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);
