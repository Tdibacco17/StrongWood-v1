import { MeasureDataInterface, MeasureType, MeasureValues } from "@/types/Interfaces";
import { ChangeEvent } from "react";
import styles from "./FurnitureMeasureComponent.module.scss"

export function FurnitureMeasureComponent({
    measureData,
    imgSlugsWithAskMeasure,
    handleMeasureChange,
    measureValues,
}: {
    measureData: MeasureDataInterface,
    imgSlugsWithAskMeasure: string[]
    handleMeasureChange: (measureName: string, value: number) => void,
    measureValues: MeasureValues,
}) {
    if (Object.keys(measureData).length === 0) {
        return <></>
    }

    const selectedAskMeasure: MeasureType[] | undefined = imgSlugsWithAskMeasure.length > 0 ? measureData[imgSlugsWithAskMeasure[0]].leters : undefined;

    return (
        <>
            {
                selectedAskMeasure && (Object.values(selectedAskMeasure) as MeasureType[]).map((item: MeasureType) => {
                    return (
                        <div className={`${styles["container-section-input-measures"]}`} key={item.measure_id}>
                            <p className={styles["input-title"]}>{item.title}</p>
                            {/* <input
                                className={styles["input-measure"]}
                                type="number"
                                value={measureValues[item.title] || ""}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    handleMeasureChange(item.title, parseInt(e.target.value))
                                }
                            /> */}
                            <input
                                className={styles["input-measure"]}
                                type="number" // Cambiar el tipo de "text" a "number"
                                value={measureValues[item.title] || ""}
                                placeholder="En metros"
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    handleMeasureChange(item.title, parseFloat(e.target.value))
                                    // Convertir el valor a un número válido
                                }
                            />
                        </div>
                    )
                })
            }
        </>
    );
}