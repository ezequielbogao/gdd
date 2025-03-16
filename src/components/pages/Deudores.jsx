import { useEffect, useState } from "react";
// import Content from "@cpt/Content";
// import { useMenu } from "@ctx/MenuContext";
import ContentHeader from "../layout/ContentHeader";
import Content from "../layout/Content";
import Table from "../table/Table";
import Td from "../table/Td";
import Tr from "../table/Tr";
import Th from "../table/Th";
import { Link } from "react-router-dom";
import { fetchDeudores } from "../../redux/slices/deudoresSlice";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@material-tailwind/react";

const Deudores = () => {
    //Redux
    const dispatch = useDispatch();
    const { deudores } = useSelector((state) => state.deudores);

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
        btn: "p-2 px-3 rounded-md bg-slate-600 text-slate-50 outline-none focus:outline-none",
    };

    return (
        <Content>
            <div className="text-left w-full">
                <ContentHeader label="GDD" title="Deudores" />

                <div className="p-5 md:p-10">
                    <div className="flex justify-end">
                        <Link to={"/deudores/nuevo"} className={style.btn}>
                            Añadir deudor
                        </Link>
                    </div>
                    <Table
                        currentPage={currentPage}
                        prevPage={prevPage}
                        nextPage={nextPage}
                        totalPage={totalPage}>
                        <thead>
                            <tr>
                                {TABLE_DEUDORES.map((head) => (
                                    <Th key={head} text={head} />
                                ))}
                            </tr>
                        </thead>
                        <tbody>
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
                                        <Tr key={index}>
                                            <Td content={<Checkbox />} />
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
                                        </Tr>
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
                </div>
            </div>
        </Content>
    );
};

export default Deudores;
