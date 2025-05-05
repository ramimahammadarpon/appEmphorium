import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";

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
            }
        ]
    }
])