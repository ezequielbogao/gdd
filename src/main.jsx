import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@store/store";

import { MainLayout } from "./components/layout/MainLayout";
import Dashboard from "./components/pages/Dashboard";
import Config from "./components/pages/Config";
import Gestion from "./components/pages/Gestion";
import Deudores from "./components/pages/Deudores";
import NuevoDeudor from "./components/pages/NuevoDeudor";
import History from "./components/pages/History";
import Informes from "./components/pages/Informes";
import Login from "./components/pages/Login";

import { AuthMiddleware } from "./components/auth/AuthMiddleware";

import "./App.css";
import "./index.css";

const ProtectedRoutes = () => {
    return (
        <AuthMiddleware>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/configuracion" element={<Config />} />
                    <Route path="/deudores/nuevo" element={<NuevoDeudor />} />
                    <Route path="/deudores" element={<Deudores />} />
                    <Route path="/gestion-deuda" element={<Gestion />} />
                    <Route
                        path="/historial-gestiones"
                        element={<History />}
                    />
                    <Route
                        path="/informes"
                        element={<Informes />}
                    />
                </Routes>
            </MainLayout>
        </AuthMiddleware>
    );
};
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<ProtectedRoutes />} />
            </Routes>
        </BrowserRouter>
    </Provider>
);