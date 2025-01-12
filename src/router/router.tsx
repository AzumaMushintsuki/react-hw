import {createBrowserRouter} from "react-router";
import UsersCardsList from "../components/users-list-creator/UsersCardsList.tsx";
import MainLayout from "../layouts/MainLayout.tsx";

export const router= createBrowserRouter([
    {path:'/', element: <MainLayout/>,
        children:[
            {path:'users', element:<UsersCardsList/>}
        ]}
])