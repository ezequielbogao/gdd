import { useEffect, useState } from "react";
// import Content from "@cpt/Content";
// import { useMenu } from "@ctx/MenuContext";
import ContentHeader from "../layout/ContentHeader";
import Content from "../layout/Content";
import Table from "../table/Table";
import Rightarrow from "@icons/Rightarrow";
import Lupa from "@icons/Lupa";
import Td from "../table/Td";
import Tr from "../table/Tr";
import Th from "../table/Th";
import { Link } from "react-router-dom";
import { fetchDeudores } from "../../redux/slices/deudoresSlice";
import { useDispatch, useSelector } from "react-redux";
import {
    Checkbox,
    Drawer,
    IconButton,
    Typography,
} from "@material-tailwind/react";
import Tablefilter from "../icons/Tablefilter";

const Deudores = () => {
    //Redux
    const dispatch = useDispatch();
    const { deudores } = useSelector((state) => state.deudores);

    const [viewOptions, setViewOptions] = useState(false);
    const openOptionsTable = () => {
        setViewOptions(!viewOptions);
    };

    const TABLE_DEUDORES = [
        "",
        "RECURSO",
        "IMPONIBLE",
        "CUOTA",
        "ANIO",
        "MONTO TOTAL",
        "FECHA VTO",
        "SITUACIÓN",
        "ESTADO",
    ];

    let totalPage = 0;
    let paginatedPages = 0;
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    if (deudores) {
        totalPage = Math.ceil(deudores.length / itemsPerPage);
        paginatedPages = deudores.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
        );
    }

    useEffect(() => {
        if (!deudores) dispatch(fetchDeudores());
    }, [dispatch, deudores]);

    const nextPage = () => {
        if (currentPage < totalPage) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const style = {
        btn: "p-2 px-3 rounded-md bg-slate-600 text-slate-50 outline-none focus:outline-none text-sm",
        input: "p-2 border-1 dark:text-slate-100 border-slate-200 rounded-md dark:bg-slate-600 dark:border-slate-700 focus:outline-none",
    };

    const [deudoresSeleccionados, setDeudoresSeleccionados] = useState({});

    const handleCheck = (recurso, imponible, cuota, anio, monto_total) => {
        const deudorID = `${cuota}-${anio}`;
        const deudor = { recurso, imponible, cuota, anio, monto_total };

        setDeudoresSeleccionados((prevState) => {
            const grupoImponible = { ...prevState[imponible] }; // Copiamos el grupoImponible existente o un objeto vacío si no existe
            const seleccionado = grupoImponible[deudorID];

            if (seleccionado) {
                /*
                    Si ya está seleccionado, lo eliminamos
                    Destructuración de "grupoImponible"

                    Lo que se hace acá es guardar en la const nuevoGrupo  una copia de grupoImponible menos el indice [deudorID]
                    Osea todo el grupo menos el ID ya seleccionado
                */
                const { [deudorID]: _, ...nuevoGrupo } = grupoImponible;

                /*
                    En este caso se hace lo mismo, pero si el grupo queda vacio, o sea si se eliminaron todos los deudores del mismo imponible y quedó vacio.
                    Se devuelve un nuevo DeudoresSeleccionados , sin el indice [imponible]
                */
                if (Object.keys(nuevoGrupo).length === 0) {
                    const { [imponible]: _, ...nuevoState } = prevState;
                    return nuevoState;
                }

                /*
                    Devolvemos un nuevo objeto , una copia del estado anterior de DeudoresSeleccionados, pero con el nuevo grupo
                */
                return {
                    ...prevState,
                    [imponible]: nuevoGrupo, // Devolvemos el grupoImponible sin el deudor
                };
            } else {
                /*
                   Si no está seleccionado, devolvemos un nuevo objeto, una copia del estado anterior, pero agregando [imponible][deudor]
                */
                return {
                    ...prevState,
                    [imponible]: {
                        ...grupoImponible,
                        [deudorID]: deudor,
                    },
                };
            }
        });
    };

    const isSelected = (imponible, cuota, anio) => {
        const deudorID = `${cuota}-${anio}`;
        return deudoresSeleccionados[imponible]?.[deudorID] !== undefined;
    };

    useEffect(() => {
        console.log(deudoresSeleccionados);
    }, [deudoresSeleccionados]);

    return (
        <Content>
            <div className="text-left w-full">
                <ContentHeader
                    label="GDD"
                    title="Deudores"
                    btn={
                        <Link
                            onClick={openOptionsTable}
                            className={
                                "p-2 px-3 rounded-md bg-trasparent text-slate-50 outline-none focus:outline-none text-sm"
                            }>
                            <Tablefilter />
                        </Link>
                    }
                />

                <div className="px-0 rounded-0">
                    {viewOptions && (
                        <div className="absolute right-0 top-0 bg-white border-1 border-slate-200 h-full p-5 transitions-all">
                            <div className="flex justify-end">
                                <Link
                                    onClick={openOptionsTable}
                                    className={
                                        "p-2 px-3 rounded-md bg-trasparent text-slate-50 outline-none focus:outline-none text-sm"
                                    }>
                                    <Rightarrow />
                                </Link>
                            </div>
                            <div>
                                {" "}
                                <form
                                    // onSubmit={handleSubmit(onSubmit)}
                                    className="flex rounded-xl justify-end w-full flex flex-col">
                                    <span className="font-bold text-lg mb-10">
                                        FILTROS
                                    </span>
                                    <label className="font-normal text-sm text-slate-400">
                                        Imponible
                                    </label>
                                    <div className="flex mb-5">
                                        <input
                                            required
                                            type="text"
                                            className="form-control focus:outline-none bg-white border-1 border-slate-200 dark:bg-slate-500 dark:text-slate-100 p-1  text-md font-light rounded-tl-md rounded-bl-md"
                                            placeholder="Buscar"
                                            name="dni"
                                        />
                                        <div className="flex justify-end">
                                            <button
                                                type="submit"
                                                className="bg-slate-300 text-slate-800 text-xs font-light  md:mt-0 rounded-tl-none rounded-bl-none rounded-tr-md rounded-br-md focus:border-slate-600 hover:bg-slate-500 hover:outline-none hover:border-slate-600">
                                                <Lupa width={"20"} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col mb-4 w-full">
                                        <label className="font-normal text-sm text-slate-400">
                                            Año
                                        </label>
                                        <select
                                            className={style.input}
                                            onChange={1}
                                            value={1}>
                                            <option value={0}>2025</option>
                                            <option value={1001}>2024</option>
                                            <option value={1002}>2023</option>
                                            <option value={1003}>2022</option>
                                            <option value={1004}>2021</option>
                                            <option value={1005}>2020</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* <div className="flex justify-end m-5">
                        <Link to={"/deudores/nuevo"} className={style.btn}>
                            Añadir deudor
                        </Link>
                    </div> */}
                    <Table
                        currentPage={currentPage}
                        prevPage={prevPage}
                        nextPage={nextPage}
                        totalPage={totalPage}
                        css={
                            "bg-white dark:bg-slate-800 rounded-0 mt-5 border-1 border-l-0 border-r-0 border-slate-200"
                        }>
                        <thead>
                            <tr>
                                {TABLE_DEUDORES.map((head) => (
                                    <Th key={head} text={head} />
                                ))}
                            </tr>
                        </thead>
                        <tbody className="font-geist font-semibold">
                            {deudores && deudores.length > 0 ? (
                                paginatedPages.map(
                                    (
                                        {
                                            RECURSO,
                                            NRO_IMPONIBLE,
                                            CUOTA,
                                            ANIO,
                                            FECHA_VTO,
                                            MONTO_TOTAL,
                                            SITUACION,
                                            ESTADO,
                                        },
                                        index
                                    ) => (
                                        <tr
                                            key={index}
                                            id={
                                                NRO_IMPONIBLE +
                                                "-" +
                                                ANIO +
                                                "-" +
                                                CUOTA
                                            }
                                            className="bg-white border-1 border-slate-200 dark:bg-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800">
                                            <td
                                                className={`p-2 items-center justify-content-center d-flex align-center w-auto`}>
                                                <input
                                                    type="checkbox"
                                                    className="checkbox"
                                                    checked={isSelected(
                                                        NRO_IMPONIBLE,
                                                        CUOTA,
                                                        ANIO
                                                    )}
                                                    onChange={() =>
                                                        handleCheck(
                                                            RECURSO,
                                                            NRO_IMPONIBLE,
                                                            CUOTA,
                                                            ANIO,
                                                            MONTO_TOTAL
                                                        )
                                                    }
                                                />
                                            </td>

                                            <Td content={RECURSO} />
                                            <Td content={NRO_IMPONIBLE} />
                                            <Td content={CUOTA} />
                                            <Td content={ANIO} />
                                            <Td content={FECHA_VTO} />
                                            <Td content={MONTO_TOTAL} />
                                            <Td>
                                                <span
                                                    className={`font-normal text-sm ${
                                                        SITUACION ===
                                                        "notificada"
                                                            ? "text-red-500"
                                                            : "text-green-600"
                                                    }`}>
                                                    {SITUACION}
                                                </span>
                                            </Td>
                                            <Td content={ESTADO} />
                                        </tr>
                                    )
                                )
                            ) : (
                                <tr>
                                    <td colSpan="6" className="p-4 text-center">
                                        No hay deudores .
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                    <div className="flex justify-end m-5">
                        {Object.keys(deudoresSeleccionados).length > 0 && (
                            <Link to={"/deudores/nuevo"} className={style.btn}>
                                Generar Gestión de deuda
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </Content>
    );
};

export default Deudores;
