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

const NuevoDeudor = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
    };
    const style = {
        input: "p-2 border-2 dark:text-slate-100 border-slate-300 rounded-md dark:bg-slate-600 dark:border-slate-700 focus:outline-none",
    };

    return (
        <Content>
            <div className="text-left w-full">
                <ContentHeader label="GDD" title="Nuevo deudor" />

                <div className="p-5 md:p-10">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col rounded-md w-full">
                        <div className="flex flex-col md:flex-row  rounded-md w-full gap-5">
                            <div className="flex-1 md:w-full">
                                <div className="flex flex-col mb-4 w-full">
                                    <label className="mb-1 text-slate-500 text-md font-light">
                                        Deudor
                                    </label>
                                    <select
                                        className={style.input}
                                        onChange={1}
                                        value={1}>
                                        <option value={0}>
                                            Selecciona un deudor
                                        </option>
                                        <option value={1001}>Juan Pérez</option>
                                        <option value={1002}>
                                            María Gómez
                                        </option>
                                        <option value={1003}>
                                            Carlos Rodríguez
                                        </option>
                                        <option value={1004}>Ana López</option>
                                        <option value={1005}>
                                            Luis Martínez
                                        </option>
                                    </select>
                                </div>

                                <div className="flex flex-col mb-4 w-full">
                                    <label className="mb-1 text-slate-500 text-md font-light">
                                        Tipo de imponible
                                    </label>
                                    <select
                                        className={style.input}
                                        onChange={1}
                                        value={1}>
                                        <option value={0}>
                                            Selecciona un tipo de imponible
                                        </option>
                                        <option value={1}>Rodado</option>
                                        <option value={2}>Inmueble</option>
                                        <option value={3}>Contribuyente</option>
                                        <option value={4}>Comercio</option>
                                    </select>
                                </div>

                                <div className="flex flex-col mb-4 w-full">
                                    <label className="mb-1 text-slate-500 text-md font-light">
                                        N° Imponible
                                    </label>
                                    <input
                                        className={style.input}
                                        onChange={1}
                                        value={""}
                                    />
                                </div>
                                <div className="flex flex-col mb-4 w-full">
                                    <label className="mb-1 text-slate-500 text-md font-light">
                                        Monto total de deuda
                                    </label>
                                    <input
                                        className={style.input}
                                        onChange={1}
                                        value={0}
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Content>
    );
};

export default NuevoDeudor;
