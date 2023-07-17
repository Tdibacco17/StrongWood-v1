import FurnitureComponent from "@/components/FurnitureComponent/FurnitureComponent";
import { ContactContext } from "@/context/ContactContextProvider";
import { ContactDataContextInterface, FurnitureDataCardsInterface, FurnitureTableInterface } from "@/types/Interfaces";
import { useRouter } from "next/router";
import { useCallback, useContext, useEffect, useState } from "react";

export default function FurnitureContainer({
    designSlug,
    item,
    furnitureData
}: {
    designSlug: string,
    item: string | undefined,
    furnitureData: FurnitureTableInterface[]
}) {

    const { setInfoFurniture } = useContext(
        ContactContext
    ) as ContactDataContextInterface;

    const [visibleTables, setVisibleTables] = useState([1]);
    const [clickedImages, setClickedImages] = useState<{ [key: number]: FurnitureDataCardsInterface[] }>({});
    const [validated, setValidated] = useState(false);
    const [showMissingFields, setShowMissingFields] = useState(false);

    const [buttonClicked, setButtonClicked] = useState(false);

    const router = useRouter();

    useEffect(() => {

    }, [])

    useEffect(() => {
        const allTablesHaveSelections = Array.from({ length: furnitureData.length }, (_, i) => i + 1).every(
            i => clickedImages[i] && clickedImages[i].length > 0
        );
        setValidated(allTablesHaveSelections);
    }, [clickedImages]);

    const handleCardClick = useCallback((tableId: number, cardId: number, cardTitle: string, tableTitle: string) => {
        const nextTableId = tableId + 1;
        if (!visibleTables.includes(nextTableId)) {
            setVisibleTables(prevTables => [...prevTables, nextTableId]);
        }

        setClickedImages(prevImages => {
            const prevTableImages = prevImages[tableId] || [];
            const isCardSelected = prevTableImages.some(image => image.cardId === cardId);

            let updatedImages = [];
            if (
                furnitureData[tableId - 1]?.maxSelections &&
                prevTableImages.length >= furnitureData[tableId - 1].maxSelections &&
                !isCardSelected
            ) {
                updatedImages = [...prevTableImages.slice(1), { cardId, cardTitle, tableTitle }];
            } else {
                updatedImages = isCardSelected
                    ? prevTableImages.filter(image => image.cardId !== cardId)
                    : [...prevTableImages, { cardId, cardTitle, tableTitle }];
            }

            return { ...prevImages, [tableId]: updatedImages };
        });
    }, [visibleTables]);

    const handleValidation = useCallback(() => {
        const tablesWithMissingFields = Array.from({ length: furnitureData.length }, (_, i) => i + 1).filter(
            i => !clickedImages[i] || clickedImages[i].length === 0
        );

        if (tablesWithMissingFields.length === 0) {
            setValidated(true);
            setInfoFurniture({
                designSlug: designSlug,
                designItem: item,
                data: clickedImages
            })
            router.push("/contact/design");
        } else {
            setValidated(false);
            setButtonClicked(true);
        }

        setShowMissingFields(true);
    }, [clickedImages]);

    return <FurnitureComponent
        furnitureData={furnitureData}
        visibleTables={visibleTables}
        clickedImages={clickedImages}
        showMissingFields={showMissingFields}
        validated={validated}
        handleCardClick={handleCardClick}
        handleValidation={handleValidation}
        buttonClicked={buttonClicked}
    />
}