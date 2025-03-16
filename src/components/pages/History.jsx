import { useEffect, useState } from "react";
// import Content from "@cpt/Content";
// import { useMenu } from "@ctx/MenuContext";
import ContentHeader from "../layout/ContentHeader";
import Content from "../layout/Content";

const History = () => {
    return (
        <Content>
            <div className="text-left w-full">
                <ContentHeader label="GDD" title="Historial de gestiones" />

                <div className="p-5 md:p-10"></div>
            </div>
        </Content>
    );
};

export default History;
