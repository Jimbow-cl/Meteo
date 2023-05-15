import { createBrowserRouter } from "react-router-dom";
import Home from "../Home";
import Meteo from "../Meteo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,

    },
    {
        path: "/meteo",
        element: <Meteo />,

    },
])


export default router