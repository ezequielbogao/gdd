// import { ToastContainer } from "react-toastify";
import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import Header from "./Header";
export const MainLayout = () => {
    return (
        <div className="w-full flex flex-col justify-center bg-white text-slate-800 dark:bg-slate-900 dark:text-slate-50 bg-pattern">
            <Header />
            <div className="flex">
                <Menu />
                <Outlet />
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};
