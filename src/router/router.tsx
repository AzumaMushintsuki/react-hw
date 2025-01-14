import {createBrowserRouter} from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import HomePage from "../pages/HomePage.tsx";
import CartsPage from "../pages/CartsPage.tsx";

export const router= createBrowserRouter([
    {path:'/', element: <MainLayout/>,
        children:[
            {path:'users', element:<UsersPage/>},
            {path:'users/:userId/carts', element: <CartsPage/>},
            {path:'posts', element: <PostsPage/>},
            {index: true, element: <HomePage/>}
        ]}
])