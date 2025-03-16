import { useEffect, useState } from "react";
// import Content from "@cpt/Content";
// import { useMenu } from "@ctx/MenuContext";
import ContentHeader from "../layout/ContentHeader";
import Content from "../layout/Content";
import {
    Checkbox,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from "@material-tailwind/react";

const Config = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
    };
    const style = {
        input: "p-2 border-2 dark:text-slate-100 border-slate-300 rounded-md dark:bg-slate-600 dark:border-slate-700 focus:outline-none",
    };

    return (
        <Content>
            <div className="text-left w-full">
                <ContentHeader label="GDD" title="Configuraciones" />

                <div className="p-5 md:p-10">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col rounded-md w-1/2">
                        <div className="flex flex-col md:flex-row  rounded-md w-full gap-5">
                            <div className="flex-1 w-1/2">
                                <label className="mb-1 text-slate-500 text-lg font-normal">
                                    Cargar tasa
                                </label>
                                <div className="flex flex-col mb-4 w-full">
                                    <label className="mb-1 text-slate-500 text-md font-light">
                                        Tasa
                                    </label>
                                    <input
                                        className={style.input}
                                        onChange={1}
                                        value={0}
                                    />
                                </div>
                                <div className="flex flex-col mb-4 w-full">
                                    <label className="mb-1 text-slate-500 text-md font-light">
                                        Descripción
                                    </label>
                                    <input
                                        className={style.input}
                                        onChange={1}
                                        value={0}
                                    />
                                </div>{" "}
                                <div className="flex flex-row mb-4 w-full gap-3">
                                    <div className="w-full flex flex-col">
                                        <label className="mb-1 text-slate-500 text-md font-light">
                                            Fecha de inicio
                                        </label>
                                        <input
                                            type="date"
                                            className={style.input}
                                            onChange={1}
                                            value={0}
                                        />
                                    </div>
                                    <div className="w-full flex flex-col">
                                        <label className="mb-1 text-slate-500 text-md font-light">
                                            Fecha de fin
                                        </label>
                                        <input
                                            type="date"
                                            className={style.input}
                                            onChange={1}
                                            value={0}
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-slate-600 text-sm opacity-90 hover:opacity-100 text-slate-100 border-0 outline-none transition-colors">
                                        Actualizar
                                    </button>
                                </div>
                                <div className="w-full border-b-1 border-b-slate-300 my-10"></div>
                                <div className="flex flex-col mb-4 w-full">
                                    <label className="mb-1 text-slate-500 text-md font-light">
                                        Excluir cuenta
                                    </label>
                                    <input
                                        className={style.input}
                                        onChange={1}
                                        value={""}
                                    />
                                </div>
                                <div className="flex flex-col mb-4 w-full">
                                    <label className="mb-1 text-slate-500 text-md font-light">
                                        Estados de Deuda
                                    </label>
                                    <div className="flex flex-row gap-3">
                                        <span className="rounded-md bg-slate-100 text-slate-600 p-1 px-3">
                                            Activa
                                        </span>
                                        <span className="rounded-md bg-slate-100 text-slate-600 p-1 px-3">
                                            Eximida
                                        </span>
                                        <span className="rounded-md bg-slate-100 text-slate-600 p-1 px-3">
                                            Acuerdo
                                        </span>
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="bg-slate-600 text-sm opacity-90 hover:opacity-100 text-slate-100 border-0 outline-none transition-colors">
                                            Añadir
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Content>
    );
};

export default Config;
