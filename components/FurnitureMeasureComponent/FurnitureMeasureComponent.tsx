import { Measure, MeasureDataInterface, MeasureType, MeasureValues } from "@/types/Interfaces";
import { ChangeEvent } from "react";

export function FurnitureMeasureComponent({
    measureData,
    imgSlugsWithAskMeasure,
    handleMeasureChange,
    measureValues
}: {
    measureData: MeasureDataInterface,
    imgSlugsWithAskMeasure: string[]
    handleMeasureChange: (measureName: string, value: number) => void,
    measureValues: MeasureValues
}) {
    if (Object.keys(measureData).length === 0) {
        return <></>
    }

    const selectedAskMeasure: MeasureType[] | undefined = imgSlugsWithAskMeasure.length > 0  ? measureData[imgSlugsWithAskMeasure[0]].leters : undefined;

    return (
        <div>
            {
                selectedAskMeasure && (Object.values(selectedAskMeasure) as MeasureType[]).map((item: MeasureType) => {
                    return (
                        <div key={item.measure_id}>
                            <p>{item.title}</p>
                            <input
                                type="number"
                                value={measureValues[item.title] || ""}
                                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                    handleMeasureChange(item.title, parseInt(e.target.value))
                                }
                            />
                        </div>
                    )
                })
            }
        </div>
    );
}