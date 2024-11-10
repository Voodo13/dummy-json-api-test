import {createBrowserRouter,} from "react-router-dom";
import MainPage from "../../pages/MainPage/MainPage.jsx";
import {MainLayout} from "../layouts";
import {ErrorPage} from "../../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <MainPage />,
            },
        ]
    },
]);
