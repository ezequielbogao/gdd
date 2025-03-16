// import logo_black from "../../../assets/ate_logo_b.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate("/");
    };

    return (
        <div className="w-full grid grid-cols-8 h-full min-h-screen bg-slate-100 dark:bg-slate-900">
            <div className="hidden md:flex col-span-8 md:col-span-4 items-center justify-center bg-slate-200 dark:bg-slate-800">
                <div className="hidden md:flex p-5 text-center flex-col justify-center align-middle items-center">
                    {/* <img
                        src={logo_black}
                        alt="Logo de la aplicación"
                        className="w-14 md:w-40"
                    /> */}
                    <div className="flex flex-col mt-10">
                        <span className="md:text-3xl text-slate-400 dark:text-slate-400 font-light">
                            GDD
                        </span>
                        <span className="md:text-4xl text-slate-700 dark:text-slate-300 font-medium">
                            GESTIÓN DE <br></br>DEUDA
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-span-8 md:col-span-4 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900">
                <div className="flex md:hidden p-5 text-center flex-col justify-center align-middle items-center">
                    {/* <img
                        src={logo_black}
                        alt="Logo de la aplicación"
                        className="w-40"
                    /> */}
                    <div className="flex flex-col mt-10">
                        <span className="text-3xl text-slate-400 dark:text-slate-400 font-light">
                            GDD
                        </span>
                        <span className="text-4xl text-slate-700 dark:text-slate-300 font-medium">
                            GESTIÓN DE <br></br>DEUDA
                        </span>
                    </div>
                </div>
                <div className="p-5 w-full max-w-md text-left">
                    <h3 className="text-xl text-center font-normal text-slate-800 dark:text-slate-50">
                        Ingresá tus credenciales
                    </h3>
                    <form className="mt-4 space-y-4" onSubmit={onSubmit}>
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-slate-700 dark:text-slate-300">
                                Correo Electrónico
                            </label>
                            <input
                                type="email"
                                id="username"
                                placeholder="Introduce tu correo"
                                className="w-full px-4 py-2 border rounded-md text-slate-700 bg-white dark:bg-slate-700 dark:text-slate-50 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-slate-700 dark:text-slate-300">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Introduce tu contraseña"
                                className="w-full px-4 py-2 border rounded-md text-slate-700 bg-white dark:bg-slate-700 dark:text-slate-50 focus:outline-none"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 border-none focus:outline-none">
                                Iniciar sesión
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
