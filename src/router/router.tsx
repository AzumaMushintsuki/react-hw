import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/UsersPage.tsx";

export const router= createBrowserRouter([{path:'/', element: <UsersPage/>}])
