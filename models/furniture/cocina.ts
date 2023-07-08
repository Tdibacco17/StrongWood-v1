import { FurnitureTableInterface } from "@/types/Interfaces";

export const CocinaNordica: FurnitureTableInterface[] = [
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
            { cardId: 2, cardTitle: "Medium" },
            { cardId: 3, cardTitle: "Premium" },
        ],
    }, {
        tableId: 3,
        tableTitle: "Combinación",
        maxSelections: 8,
        cards: [
            { cardId: 1, cardTitle: "Cajonera" },
            { cardId: 2, cardTitle: "Tacho" },
            { cardId: 3, cardTitle: "Puerta" },
            { cardId: 4, cardTitle: "Carro especiero" },
            { cardId: 5, cardTitle: "Carro esquinero" },
            { cardId: 6, cardTitle: "Torre de heladera" },
            { cardId: 7, cardTitle: "Torre de horno + microondas" },
            { cardId: 8, cardTitle: "Mesada de madera maciza" },
        ],
    }, {
        tableId: 4,
        tableTitle: "Distribución",
        maxSelections: 2,
        cards: [
            { cardId: 1, cardTitle: "En L" },
            { cardId: 2, cardTitle: "En U" },
            { cardId: 3, cardTitle: "Lineal" },
            { cardId: 4, cardTitle: "Paralelo" },
            { cardId: 5, cardTitle: "Con isla" },
        ],
    }
]