import MenuButton from "../links/MenuButton";
import Casa from "../icons/Casa";
import Setting from "../icons/Setting";
import Cartilla from "../icons/Cartilla";
import Deudor from "../icons/Deudor";
import Charts from "../icons/Charts";
import Cash from "../icons/Cash";
import { useLocation } from "react-router-dom";

const Menu = () => {
    const location = useLocation();
    const path = location.pathname;
    return (
        <div className="w-2/12 justify-between md:px-5 border-r-1 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 pb-32">
            <div className="flex flex-col mt-5">
                <MenuButton
                    path={path}
                    to={"/"}
                    icon={<Casa />}
                    title={"Home"}
                />
                <span className="w-full mb-10" />
                <MenuButton
                    path={path}
                    to={"/deudores"}
                    icon={<Deudor />}
                    title={"Deudores"}
                />
                <MenuButton
                    path={path}
                    to={"/gestion-deuda"}
                    icon={<Cash />}
                    title={"Gestión de Deuda"}
                />
                <MenuButton
                    path={path}
                    to={"/historial-gestiones"}
                    icon={<Charts />}
                    title={"Historial de gestiones"}
                />
                <MenuButton
                    path={path}
                    to={"/informes"}
                    icon={<Cartilla />}
                    title={"Informes"}
                />
                <MenuButton
                    path={path}
                    to={"/configuracion"}
                    icon={<Setting />}
                    title={"Configuración"}
                />
            </div>
        </div>
    );
};

export default Menu;
