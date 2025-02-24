import { createRoot } from "react-dom/client";
import "./App.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainLayout } from "./components/layout/MainLayout";
import Dashboard from "./components/pages/Dashboard";
import Config from "./components/pages/Config";
import Gestion from "./components/pages/Gestion";
import Deudores from "./components/pages/Deudores";
import NuevoDeudor from "./components/pages/NuevoDeudor";
import History from "./components/pages/History";
import Informes from "./components/pages/Informes";
import Login from "./components/pages/Login";

const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/configuracion",
                element: <Config />,
            },
            {
                path: "/deudores/nuevo",
                element: <NuevoDeudor />,
            },
            {
                path: "/deudores",
                element: <Deudores />,
            },
            {
                path: "/gestion-deuda",
                element: <Gestion />,
            },
            {
                path: "/historial-gestiones",
                element: <History />,
            },
            {
                path: "/informes",
                element: <Informes />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    // <MenuProvider>
    <RouterProvider router={router}>
        <MainLayout />
    </RouterProvider>
    // </MenuProvider>
);
