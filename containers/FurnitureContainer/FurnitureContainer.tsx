import FurnitureComponent from "@/components/FurnitureComponent/FurnitureComponent";
import { ContactContext } from "@/context/ContactContextProvider";
import {
    ContactDataContextInterface, FurnitureDataCardsInterface, FurnitureTableInterface,
    ImgDataInterface, MeasureDataInterface, MeasureValues
} from "@/types/Interfaces";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";

export default function FurnitureContainer({
    designSlug,
    item,
    furnitureData,
    measureData
}: {
    designSlug: string,
    item: string | undefined,
    furnitureData: FurnitureTableInterface[],
    measureData: MeasureDataInterface
}) {

    const { setInfoFurniture } = useContext(
        ContactContext
    ) as ContactDataContextInterface;



    const [measureValues, setMeasureValues] = useState<MeasureValues>({});

    const handleMeasureChange = (measureName: string, value: number) => {
        setMeasureValues((prevMeasureValues) => {
            if (value > 0) {
                return {
                    ...prevMeasureValues,
                    [measureName]: value,
                };
            } else {
                const updatedMeasureValues = { ...prevMeasureValues };
                delete updatedMeasureValues[measureName];
                return updatedMeasureValues;
            }
        });
    };

    const [visibleTables, setVisibleTables] = useState([1]);
    const [clickedImages, setClickedImages] = useState<{ [key: number]: FurnitureDataCardsInterface[] }>({});
    const [validated, setValidated] = useState(false);
    const [showMissingFields, setShowMissingFields] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [imgData, setImgData] = useState<ImgDataInterface | undefined>(undefined)

    const router = useRouter();

    const getImgSlugsWithAskMeasure = (clickedImages: any) => {
        const imgSlugs = [];

        for (const key in clickedImages) {
            const cardArr = clickedImages[key];
            const hasAskMeasure = cardArr.some((card: any) => card.askMeasure === true);

            if (hasAskMeasure) {
                const imgSlug = cardArr.find((card: any) => card.askMeasure === true)?.imgSlug;
                if (imgSlug) {
                    imgSlugs.push(imgSlug);
                }
            }
        }
        return imgSlugs;
    };
    const imgSlugsWithAskMeasure: string[] = getImgSlugsWithAskMeasure(clickedImages);

    useEffect(() => {
        if (router.query.slug) {
            const fetchData = async () => {
                if (setImgData) {
                    const rawData = await fetch(
                        `/api/design/getDesignBySlug?slug=${router.query.slug}`
                    );
                    const parsedData = await rawData.json();
                    if (parsedData.error) {
                        return;
                    }

                    setImgData && setImgData(
                        parsedData.data.subcategories
                            .flatMap((subcategory: any) => subcategory.images)
                            .find((image: ImgDataInterface) => image.imgSlug === router.query.item)
                    );
                }
            };
            fetchData();
        }
    }, [router.query]);

    useEffect(() => {
        const allTablesHaveSelections = Array.from({ length: furnitureData.length }, (_, i) => i + 1).every(
            i => clickedImages[i] && clickedImages[i].length > 0
        );

        const isMeasureValidated = validateMeasureInputs(imgSlugsWithAskMeasure, measureData, measureValues);

        setValidated(allTablesHaveSelections && isMeasureValidated);
    }, [clickedImages, furnitureData, imgSlugsWithAskMeasure, measureData, measureValues]);


    const handleCardClick = useCallback(
        (tableId: number, cardId: number, cardTitle: string, tableTitle: string) => {
            const nextTableId = tableId + 1;
            if (!visibleTables.includes(nextTableId)) {
                setVisibleTables(prevTables => [...prevTables, nextTableId]);
            }

            const currentTable = furnitureData.find(table => table.tableId === tableId);
            const currentTableAskMeasure = currentTable ? currentTable.askMeasure : false;

            setClickedImages(prevImages => {
                const prevTableImages = prevImages[tableId] || [];
                const isCardSelected = prevTableImages.some(image => image.cardId === cardId);

                let updatedImages = [];
                if (
                    furnitureData[tableId - 1]?.maxSelections &&
                    prevTableImages.length >= furnitureData[tableId - 1].maxSelections &&
                    !isCardSelected
                ) {
                    updatedImages = [...prevTableImages.slice(1), { cardId, cardTitle, tableTitle, askMeasure: currentTableAskMeasure, imgSlug: currentTableAskMeasure ? furnitureData[tableId - 1]?.cards.find(card => card.cardId === cardId)?.image?.imgSlug : undefined }];
                } else {
                    updatedImages = isCardSelected
                        ? prevTableImages.filter(image => image.cardId !== cardId)
                        : [...prevTableImages, { cardId, cardTitle, tableTitle, askMeasure: currentTableAskMeasure, imgSlug: currentTableAskMeasure ? furnitureData[tableId - 1]?.cards.find(card => card.cardId === cardId)?.image?.imgSlug : undefined }];
                }

                return { ...prevImages, [tableId]: updatedImages };
            });
        },
        [visibleTables, furnitureData]
    );

    const handleValidation = useCallback(() => {
        const tablesWithMissingFields = Array.from({ length: furnitureData.length }, (_, i) => i + 1).filter(
            i => !clickedImages[i] || clickedImages[i].length === 0
        );

        const isMeasureValidated = validateMeasureInputs(imgSlugsWithAskMeasure, measureData, measureValues);

        if (tablesWithMissingFields.length === 0 && isMeasureValidated) {
            setValidated(true);
            setInfoFurniture({
                designSlug: designSlug,
                designItem: item,
                data: clickedImages,
                measures: measureValues
            })
            router.push("/contact/design");
        } else {
            setValidated(false);
            setButtonClicked(true);
        }

        setShowMissingFields(true);
    }, [clickedImages, furnitureData, imgSlugsWithAskMeasure, measureData, measureValues]);


    const validateMeasureInputs = (imgSlugsWithAskMeasure: string[], measureData: MeasureDataInterface, measureValues: MeasureValues) => {
        let isMeasureValidated = false;

        if (imgSlugsWithAskMeasure.length > 0) {
            imgSlugsWithAskMeasure.forEach((imgSlug) => {
                const measureInfo = measureData[imgSlug];
                if (measureInfo) {
                    const numValuesToComplete = measureInfo.numValuesToComplete;
                    if (Object.keys(measureValues).length === numValuesToComplete) {
                        isMeasureValidated = true;
                    }
                }
            });
        }

        return isMeasureValidated;
    };

    return <FurnitureComponent
        furnitureData={furnitureData}
        visibleTables={visibleTables}
        clickedImages={clickedImages}
        showMissingFields={showMissingFields}
        validated={validated}
        handleCardClick={handleCardClick}
        handleValidation={handleValidation}
        buttonClicked={buttonClicked}
        imgData={imgData}
        measureData={measureData}
        imgSlugsWithAskMeasure={imgSlugsWithAskMeasure}
        handleMeasureChange={handleMeasureChange}
        measureValues={measureValues}
    />
}