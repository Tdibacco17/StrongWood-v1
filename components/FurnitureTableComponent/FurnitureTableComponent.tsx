import Image from "next/image";
import styles from "./FurnitureTableComponent.module.scss";
import FurnitureCardComponent from "../FurnitureCardComponent/FurnitureCardComponent";
import React from "react";

export default function FurnitureTableComponent({
    carouselTableRef,
    handleScrollLeft,
    handleScrollRight,
    tableId,
    handleSelectTable,
    data
}: {
    carouselTableRef: React.RefObject<HTMLDivElement>,
    handleScrollLeft: () => void;
    handleScrollRight: () => void;
    tableId: number,
    handleSelectTable:(id: string, imgData: any) => void,
    data: any
}) {

    return (
        <>
            <div className={styles["container-all-table-design"]} id={tableId.toString()}>
                <div className={styles["carousel-table"]} ref={carouselTableRef}>
                    {
                        data && data.tipos.map((e: any, index: number) => {
                            return (
                                <React.Fragment key={`${e}-${index}`}>
                                    <FurnitureCardComponent
                                        imgData={e}
                                        tableId={tableId}
                                        nextTableId={tableId + 1}
                                        handleSelectTable={handleSelectTable} />
                                </React.Fragment>
                            )
                        })
                    }
                </div>
                <div className={styles["buttons-table"]}>
                    <button className={styles["buttons"]} onClick={handleScrollLeft}>
                        <Image
                            src="/assets/icons/arrowLeft.svg"
                            alt="Icono Izquierda"
                            width={15}
                            height={15}
                            loading="lazy"
                        />
                    </button>
                    <button className={styles["buttons"]} onClick={handleScrollRight}>
                        <Image
                            src="/assets/icons/arrowRight.svg"
                            alt="Icono Derecha"
                            width={15}
                            height={15}
                            loading="lazy"
                        />
                    </button>
                </div>
            </div>
        </>
    )
}