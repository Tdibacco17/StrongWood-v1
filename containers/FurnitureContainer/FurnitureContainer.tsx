import FurnitureComponent from "@/components/FurnitureComponent/FurnitureComponent";
import { useState } from "react";

export default function FurnitureContainer({
    slug,
    furnitureStyle,
}: {
    slug: string | undefined,
    furnitureStyle: string | undefined,
}) {

    const [visibleTableIds, setVisibleTableIds] = useState<string[]>(["1"]);
    const [selectedTableData, setSelectedTableData] = useState<any[]>([]);

    const handleSelectTable = (tableId: string, imgData: any) => {
        const newData = { tableId, imgData, isSelected: true };
        const existingDataIndex = selectedTableData.findIndex((data) => data.tableId === tableId);

        if (existingDataIndex !== -1) {
            // Reemplazar el dato existente con el nuevo dato
            setSelectedTableData((prevData) => {
                const updatedData = [...prevData];
                updatedData[existingDataIndex] = newData;
                return updatedData;
            });
        } else {
            // Agregar el nuevo dato al arreglo
            setSelectedTableData((prevData) => [...prevData, newData]);
        }

        setVisibleTableIds((prevIds) => [...prevIds, tableId]);
    };

    console.log(selectedTableData)
    //logica para mandar email

    return <FurnitureComponent
        visibleTableIds={visibleTableIds}
        handleSelectTable={handleSelectTable}
    />
}