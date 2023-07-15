import { FurnitureTableDataInterface } from "@/types/Interfaces";

export const furnitureBaño: FurnitureTableDataInterface = {
    designTitle: "Baño",
    data: [
        {
            tableId: 1,
            tableTitle: "Colores",
            maxSelections: 1,
            cards: [
                { cardId: 1, cardTitle: "Blanco laca" },
                { cardId: 2, cardTitle: "Enchapado en madera" },
                { cardId: 3, cardTitle: "Gris grafito" },
                { cardId: 4, cardTitle: "Simil madera" },
                { cardId: 5, cardTitle: "Simil madera" },
            ],
        }, {
            tableId: 2,
            tableTitle: "Calidad de herrajes",
            maxSelections: 1,
            cards: [
                { cardId: 1, cardTitle: "Estandar" },
                { cardId: 2, cardTitle: "Premium" },
            ],
        }, {
            tableId: 3,
            tableTitle: "Distribución",
            maxSelections: 1,
            cards: [
                { cardId: 1, cardTitle: "Puertas" },
                { cardId: 2, cardTitle: "Cajones" },
                { cardId: 3, cardTitle: "Estantes" },
            ],
        }
    ]
}
