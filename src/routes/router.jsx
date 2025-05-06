import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import ErrorPage from "../Pages/ErrorPage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import AppDetails from "../Pages/AppDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                element:<Home></Home>,
                loader: ()=>fetch('/appsInfos.json')
            },
            {
                path: "profile",
                element: <Profile></Profile>
            },
            {
                path:'app-details/:id',
                element:<AppDetails></AppDetails>,
                loader:()=> fetch('/appsInfos.json')
            }
        ]
    },
    {
        path:"authentication",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"registration",
                element:<Registration></Registration>
            }
        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>
    }
])