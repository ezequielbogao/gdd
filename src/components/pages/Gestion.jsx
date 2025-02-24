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

const Gestion = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
    };
    const style = {
        input: "p-2 border-2 dark:text-slate-100 border-slate-300 rounded-md dark:bg-slate-600 dark:border-slate-700 focus:outline-none",
    };

    return (
        <Content>
            <div className="text-left w-full">
                <ContentHeader label="GDD" title="Gestión de deuda" />

                <div className="p-5 md:p-10">
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col rounded-md w-full">
                        <div className="flex flex-col md:flex-row  rounded-md w-full gap-5">
                            <div className="flex-1 md:w-1/2">
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

                            <div className="flex-1 md:w-1/2">
                                <div className="flex flex-col mb-4 w-full">
                                    <label className="mb-1 text-slate-500 text-md font-light">
                                        Periodo de deuda
                                    </label>
                                    <input
                                        type="date"
                                        className={style.input}
                                        onChange={1}
                                        value={1}
                                    />
                                </div>

                                <div className="flex flex-col mb-4 w-full">
                                    <label className="mb-1 text-slate-500 text-md font-light">
                                        Categoría de Riesgo
                                    </label>
                                    <select
                                        className={style.input}
                                        onChange={1}
                                        value={1}>
                                        <option value={0}>Alta</option>
                                        <option value={1002}>Media</option>
                                        <option value={1003}>Baja</option>
                                    </select>
                                </div>
                                <div className="flex flex-col mb-4 w-full">
                                    <label className="mb-1 text-slate-500 text-md font-light">
                                        Estado de la Deuda
                                    </label>
                                    <List className="flex-row p-0">
                                        <ListItem className="p-0">
                                            <label
                                                htmlFor="horizontal-list-react"
                                                className="flex w-full cursor-pointer items-center px-3 py-2">
                                                <ListItemPrefix className="mr-3">
                                                    <Checkbox
                                                        id="horizontal-list-react"
                                                        ripple={false}
                                                        className="hover:before:opacity-0"
                                                        containerProps={{
                                                            className: "p-0",
                                                        }}
                                                    />
                                                </ListItemPrefix>
                                                <Typography
                                                    color="blue-gray"
                                                    className="font-medium">
                                                    Activa
                                                </Typography>
                                            </label>
                                        </ListItem>
                                        <ListItem className="p-0">
                                            <label
                                                htmlFor="horizontal-list-vue"
                                                className="flex w-full cursor-pointer items-center px-3 py-2">
                                                <ListItemPrefix className="mr-3">
                                                    <Checkbox
                                                        id="horizontal-list-vue"
                                                        ripple={false}
                                                        className="hover:before:opacity-0"
                                                        containerProps={{
                                                            className: "p-0",
                                                        }}
                                                    />
                                                </ListItemPrefix>
                                                <Typography
                                                    color="blue-gray"
                                                    className="font-medium">
                                                    Eximida
                                                </Typography>
                                            </label>
                                        </ListItem>
                                        <ListItem className="p-0">
                                            <label
                                                htmlFor="horizontal-list-svelte"
                                                className="flex w-full cursor-pointer items-center px-3 py-2">
                                                <ListItemPrefix className="mr-3">
                                                    <Checkbox
                                                        id="horizontal-list-svelte"
                                                        ripple={false}
                                                        className="hover:before:opacity-0"
                                                        containerProps={{
                                                            className: "p-0",
                                                        }}
                                                    />
                                                </ListItemPrefix>
                                                <Typography
                                                    color="blue-gray"
                                                    className="font-medium">
                                                    Acuerdo
                                                </Typography>
                                            </label>
                                        </ListItem>
                                    </List>
                                </div>
                                <div className="flex flex-col mb-4 w-full">
                                    <label className="mb-1 text-slate-500 text-md font-light">
                                        Tipo de Gestión Realizada
                                    </label>
                                    <select
                                        className={style.input}
                                        onChange={1}
                                        value={1}>
                                        <option value={0}>Llamada</option>
                                        <option value={1002}>
                                            Envío de notificación
                                        </option>
                                        <option value={1003}>
                                            Acuerdo de pago
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row  rounded-md w-full gap-5 mt-5">
                            <div className="flex-1 md:w-1/2">
                                <div className="flex flex-col mb-4 w-full">
                                    <label className="mb-1 text-slate-500 text-md font-light">
                                        Fecha de Próximo Contacto
                                    </label>
                                    <input
                                        type="date"
                                        className={style.input}
                                        onChange={1}
                                        value={""}
                                    />
                                </div>
                                <div className="flex flex-col mb-4 w-full">
                                    <label className="mb-1 text-slate-500 text-md font-light">
                                        Acciones de Seguimiento
                                    </label>
                                    <List className="flex-row p-0">
                                        <ListItem className="p-0">
                                            <label
                                                htmlFor="horizontal-list-react"
                                                className="flex w-full cursor-pointer items-center px-3 py-2">
                                                <ListItemPrefix className="mr-3">
                                                    <Checkbox
                                                        id="horizontal-list-react"
                                                        ripple={false}
                                                        className="hover:before:opacity-0"
                                                        containerProps={{
                                                            className: "p-0",
                                                        }}
                                                    />
                                                </ListItemPrefix>
                                                <Typography
                                                    color="blue-gray"
                                                    className="font-medium">
                                                    reintentar contacto
                                                </Typography>
                                            </label>
                                        </ListItem>
                                        <ListItem className="p-0">
                                            <label
                                                htmlFor="horizontal-list-vue"
                                                className="flex w-full cursor-pointer items-center px-3 py-2">
                                                <ListItemPrefix className="mr-3">
                                                    <Checkbox
                                                        id="horizontal-list-vue"
                                                        ripple={false}
                                                        className="hover:before:opacity-0"
                                                        containerProps={{
                                                            className: "p-0",
                                                        }}
                                                    />
                                                </ListItemPrefix>
                                                <Typography
                                                    color="blue-gray"
                                                    className="font-medium">
                                                    enviar recordatorio
                                                </Typography>
                                            </label>
                                        </ListItem>
                                    </List>
                                </div>

                                <div className="flex flex-col mb-4 w-full">
                                    <label className="mb-1 text-slate-500 text-md font-light">
                                        Comentarios Adicionales
                                    </label>
                                    <textarea
                                        className={style.input}
                                        onChange={1}
                                        value={""}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end mt-3 gap-3">
                            <button
                                type="submit"
                                className="bg-green-600 text-sm opacity-90  hover:opacity-100 text-green-100 border-0 outline-none transition-colors">
                                Guardar Cambios
                            </button>
                            <button
                                type="submit"
                                className="bg-red-600 opacity-90 text-sm hover:opacity-100 text-red-100 border-0 outline-none transition-colors">
                                Cancelar
                            </button>
                            <button
                                type="submit"
                                className="bg-slate-600 text-sm opacity-90 hover:opacity-100 text-slate-100 border-0 outline-none transition-colors">
                                Enviar a Gestión de Deuda
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Content>
    );
};

export default Gestion;
