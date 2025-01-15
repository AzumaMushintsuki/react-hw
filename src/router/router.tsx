import {createBrowserRouter} from "react-router-dom";
import CarsPage from "../pages/CarsPage.tsx";

export const router = createBrowserRouter([
    {path:'/', element:<CarsPage/>}
])