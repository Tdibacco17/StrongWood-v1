import FurnitureTableContainer from "@/containers/FurnitureTableContainer/FurnitureTableContainer"
import styles from "./FurnitureComponent.module.scss"
import { bañoFurnitureData } from "@/models/furniture"

export default function FurnitureComponent({
    visibleTableIds,
    handleSelectTable,
}: {
    visibleTableIds: string[],
    handleSelectTable: (id: string, imgData: any) => void,
}) {

    return (
        <div className={styles["container-section-furniture"]}>
            <div className={styles["container-tables"]}>
                {bañoFurnitureData && Object.values(bañoFurnitureData).map((item: any) => {
                    if (visibleTableIds.includes(item.id.toString())) {
                        return (
                            <FurnitureTableContainer
                                key={item.id}
                                tableId={item.id as number}
                                data={item}
                                handleSelectTable={handleSelectTable}
                            />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    )
}