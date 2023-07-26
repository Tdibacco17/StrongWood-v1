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
    const router = useRouter();

    const [currentTableId, setCurrentTableId] = useState<number | null>(null);
    const [measureValues, setMeasureValues] = useState<MeasureValues>({});
    const [visibleTables, setVisibleTables] = useState([1]);
    const [clickedImages, setClickedImages] = useState<{ [key: number]: FurnitureDataCardsInterface[] }>({});
    const [validated, setValidated] = useState<boolean>(false);
    const [showMissingFields, setShowMissingFields] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [imgData, setImgData] = useState<ImgDataInterface | undefined>(undefined);
    //gestiona la cocina que eligio el usuario
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
    //variable de que distribucion eligio
    const imgSlugsWithAskMeasure: string[] = getImgSlugsWithAskMeasure(clickedImages);

    const matchedObject = (currentTableId && furnitureData[currentTableId - 1].cards.find((e: any) => {
        return e.image?.imgSlug === imgSlugsWithAskMeasure[0];
    })) as FurnitureDataCardsInterface | undefined;

    const imageProp = matchedObject?.image;

    //FetchData
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

    //Actualizacion validaciones
    useEffect(() => {
        const allTablesHaveSelections = Array.from({ length: furnitureData.length }, (_, i) => i + 1).every(
            i => clickedImages[i] && clickedImages[i].length > 0
        );
        const isMeasureValidated = validateMeasureInputs(imgSlugsWithAskMeasure, measureData, measureValues);
        setValidated(allTablesHaveSelections && isMeasureValidated);
    }, [clickedImages, furnitureData, imgSlugsWithAskMeasure, measureData, measureValues]);

    // boton click en imagenes
    const handleCardClick = useCallback(
        (tableId: number, cardId: number, cardTitle: string, tableTitle: string) => {
            const nextTableId = tableId + 1;
            if (!visibleTables.includes(nextTableId)) {
                setVisibleTables(prevTables => [...prevTables, nextTableId]);
            }

            //busco que tabla tiene la prop askMeasure en true (pedir medidas)
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

            // Limpiar el estado de measureValues solo si el tableId es igual a currentTableId
            if (currentTableAskMeasure && tableId === currentTableId) {
                setMeasureValues({});
            }
            //agarro el tableId de la distribucion
            if (currentTableAskMeasure) {
                setCurrentTableId(tableId); // Actualiza currentTableId solo si es una tabla con askMeasure
            }
        },
        [visibleTables, furnitureData]
    );
    //BOTON COTIZAR
    const handleValidation = useCallback(() => {
        const noMissingFields = hasMissingFields(furnitureData, clickedImages);
        const hasAskMeasure = furnitureData.some((table) => table.askMeasure === true);

        let isMeasureValidated = true;
        if (hasAskMeasure) {
            isMeasureValidated = validateMeasureInputs(imgSlugsWithAskMeasure, measureData, measureValues);
        }

        if (noMissingFields && isMeasureValidated) {
            setValidated(true);
            setInfoFurniture({
                designSlug: designSlug,
                designItem: item,
                data: clickedImages,
                measures: measureValues,
                imageData: imageProp
            })
            router.push("/contact/design");
        } else {
            setValidated(false);
            setButtonClicked(true);
        }

        setShowMissingFields(true);
    }, [clickedImages, furnitureData, imgSlugsWithAskMeasure, measureData, measureValues, currentTableId]);

    //VALIDACION DE IMAGES
    const hasMissingFields = (furnitureData: FurnitureTableInterface[], clickedImages: { [key: number]: FurnitureDataCardsInterface[] }) => {
        const tablesWithMissingFields = Array.from({ length: furnitureData.length }, (_, i) => i + 1).filter(
            i => !clickedImages[i] || clickedImages[i].length === 0
        );
        return tablesWithMissingFields.length === 0;
    };
    //VALIDACION DE INPUTS
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
    //MANEJADOR DE DATOS DEL INPUTS
    const handleMeasureChange = (measureName: string, value: number) => {
        // setMeasureValues((prevMeasureValues) => {
        //     if (value > 0) {
        //         return {
        //             ...prevMeasureValues,
        //             [measureName]: value,
        //         };
        //     } else {
        //         const updatedMeasureValues = { ...prevMeasureValues };
        //         delete updatedMeasureValues[measureName];
        //         return updatedMeasureValues;
        //     }
        // });
        setMeasureValues((prevMeasureValues) => {
            if (!isNaN(value)) {
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

    useEffect(() => {
        setMeasureValues({});
    }, [currentTableId]);

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