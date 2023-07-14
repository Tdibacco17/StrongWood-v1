import { FurnitureTableInterface } from "@/types/Interfaces";

export const furniturePlacares: FurnitureTableInterface[] = [
    {
        tableId: 1,
        tableTitle: "Combinación de colores",
        maxSelections: 2,
        cards: [
            { cardId: 1, cardTitle: "Blanco laca" },
            { cardId: 2, cardTitle: "Gris grafito" },
            { cardId: 3, cardTitle: "Tribal" },
            { cardId: 4, cardTitle: "Enchapado en madera" },
            { cardId: 5, cardTitle: "Simil madera" },
            { cardId: 6, cardTitle: "Simil madera" },
            { cardId: 7, cardTitle: "Simil madera" },
            { cardId: 8, cardTitle: "Simil madera" },
        ],
    }, {
        tableId: 2,
        tableTitle: "Calidad de herrajes",
        maxSelections: 1,
        cards: [
            { cardId: 1, cardTitle: "Estandar" },
            { cardId: 3, cardTitle: "Premium" },
        ],
    }, {
        tableId: 3,
        tableTitle: "Incluirr",
        maxSelections: 7,
        cards: [
            { cardId: 1, cardTitle: "Pantalonero" },
            { cardId: 2, cardTitle: "Zapatero" },
            { cardId: 3, cardTitle: "Luces led" },
            { cardId: 4, cardTitle: "Barral para perchas" },
            { cardId: 5, cardTitle: "Puertas aluminio" },
            { cardId: 6, cardTitle: "Puertas corredizas" },
            { cardId: 7, cardTitle: "Sin puerta" },
        ],
    },{
        tableId: 4,
        tableTitle: "Distribución",
        maxSelections: 7,
        cards: [
            { cardId: 1, cardTitle: "En L" },
            { cardId: 2, cardTitle: "En U" },
            { cardId: 3, cardTitle: "Lineal" },
            { cardId: 4, cardTitle: "En paralelo" },
        ],
    }, {
        tableId: 5,
        tableTitle: "Medidas (ancho x largo x profundidad)",
        maxSelections: 1,
        cards: [
            { cardId: 1, cardTitle: "45cm x 60cm x 40cm" },
            { cardId: 2, cardTitle: "45cm x 60cm x 40cm" },
            { cardId: 3, cardTitle: "45cm x 60cm x 40cm" },
            { cardId: 4, cardTitle: "45cm x 60cm x 40cm" },
        ],
    }
]