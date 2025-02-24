import { useState } from "react";
// import Content from "@cpt/Content";
// import { useMenu } from "@ctx/MenuContext";
import ContentHeader from "../layout/ContentHeader";
import Content from "../layout/Content";
import Table from "../table/Table";
import Td from "../table/Td";
import Tr from "../table/Tr";
import Th from "../table/Th";
import { Link } from "react-router-dom";

const Deudores = () => {
    const TABLE_DEUDORES = [
        "Email",
        "Organización",
        "Teléfono",
        "Canal",
        "Fecha",
        "Estado",
    ];

    const deudores = [
        {
            mail: "juan.perez@email.com",
            organizacion: "Organización A",
            telefono: "123-456-789",
            canal: "Web",
            fecha_turno: "2025-02-23",
            estado_turno: "Confirmada",
        },
        {
            mail: "maria.gomez@email.com",
            organizacion: "Organización B",
            telefono: "987-654-321",
            canal: "Teléfono",
            fecha_turno: "2025-02-24",
            estado_turno: "Cancelada",
        },
        {
            mail: "carlos.rodriguez@email.com",
            organizacion: "Organización C",
            telefono: "555-555-555",
            canal: "Correo",
            fecha_turno: "2025-02-25",
            estado_turno: "Confirmada",
        },
        {
            mail: "ana.lopez@email.com",
            organizacion: "Organización D",
            telefono: "111-222-333",
            canal: "Web",
            fecha_turno: "2025-02-26",
            estado_turno: "Confirmada",
        },
        {
            mail: "luis.martinez@email.com",
            organizacion: "Organización E",
            telefono: "444-444-444",
            canal: "Teléfono",
            fecha_turno: "2025-02-27",
            estado_turno: "Cancelada",
        },
        {
            mail: "sofia.paredes@email.com",
            organizacion: "Organización F",
            telefono: "666-777-888",
            canal: "Web",
            fecha_turno: "2025-03-01",
            estado_turno: "Confirmada",
        },
        {
            mail: "pedro.sanchez@email.com",
            organizacion: "Organización G",
            telefono: "999-111-222",
            canal: "Teléfono",
            fecha_turno: "2025-03-02",
            estado_turno: "Confirmada",
        },
        {
            mail: "marta.vazquez@email.com",
            organizacion: "Organización H",
            telefono: "333-444-555",
            canal: "Correo",
            fecha_turno: "2025-03-03",
            estado_turno: "Cancelada",
        },
        {
            mail: "juanita.diaz@email.com",
            organizacion: "Organización I",
            telefono: "555-666-777",
            canal: "Web",
            fecha_turno: "2025-03-04",
            estado_turno: "Confirmada",
        },
        {
            mail: "arturo.morales@email.com",
            organizacion: "Organización J",
            telefono: "222-333-444",
            canal: "Teléfono",
            fecha_turno: "2025-03-05",
            estado_turno: "Cancelada",
        },
        {
            mail: "jose.fernandez@email.com",
            organizacion: "Organización K",
            telefono: "777-888-999",
            canal: "Correo",
            fecha_turno: "2025-03-06",
            estado_turno: "Confirmada",
        },
        {
            mail: "lucia.garcia@email.com",
            organizacion: "Organización L",
            telefono: "444-555-666",
            canal: "Web",
            fecha_turno: "2025-03-07",
            estado_turno: "Confirmada",
        },
        {
            mail: "rafael.pinto@email.com",
            organizacion: "Organización M",
            telefono: "555-666-777",
            canal: "Teléfono",
            fecha_turno: "2025-03-08",
            estado_turno: "Cancelada",
        },
        {
            mail: "veronica.gutierrez@email.com",
            organizacion: "Organización N",
            telefono: "888-999-000",
            canal: "Correo",
            fecha_turno: "2025-03-09",
            estado_turno: "Confirmada",
        },
        {
            mail: "josefa.ramirez@email.com",
            organizacion: "Organización O",
            telefono: "333-444-555",
            canal: "Web",
            fecha_turno: "2025-03-10",
            estado_turno: "Confirmada",
        },
        {
            mail: "alfredo.rios@email.com",
            organizacion: "Organización P",
            telefono: "666-777-888",
            canal: "Teléfono",
            fecha_turno: "2025-03-11",
            estado_turno: "Cancelada",
        },
    ];

    let totalPage = 0;
    let paginatedPages = 0;
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);

    totalPage = Math.ceil(deudores.length / itemsPerPage);
    paginatedPages = deudores.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

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
                            {deudores.length > 0 ? (
                                paginatedPages.map(
                                    (
                                        {
                                            mail,
                                            organizacion,
                                            telefono,
                                            canal,
                                            fecha_turno,
                                            estado_turno,
                                        },
                                        index
                                    ) => (
                                        <Tr key={index}>
                                            <Td content={mail} />
                                            <Td content={organizacion} />
                                            <Td content={telefono} />
                                            <Td content={canal} />
                                            <Td content={fecha_turno} />
                                            <Td>
                                                <span
                                                    className={`font-normal text-sm ${
                                                        estado_turno ===
                                                        "Cancelada"
                                                            ? "text-red-500"
                                                            : "text-green-600"
                                                    }`}>
                                                    {estado_turno}
                                                </span>
                                            </Td>
                                        </Tr>
                                    )
                                )
                            ) : (
                                <tr>
                                    <td colSpan="6" className="p-4 text-center">
                                        No hay citas disponibles.
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
