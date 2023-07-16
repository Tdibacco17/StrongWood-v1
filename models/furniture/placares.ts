import { FurnitureTableDataInterface } from "@/types/Interfaces";

export const furniturePlacares: FurnitureTableDataInterface = {
    designTitle: "Placar",
    data: [
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
            tableTitle: "Incluir",
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
        }, {
            tableId: 4,
            tableTitle: "Distribución",
            maxSelections: 7,
            cards: [
                {
                    cardId: 1, cardTitle: "En L",
                    image: {
                        imgSlug: "placar-en-l",
                        imgSrc: "/assets/img/furniture/placares/placarEnL.webp",
                        imgAlt: "Placar en L",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 2, cardTitle: "En C",
                    image: {
                        imgSlug: "placar-en-c",
                        imgSrc: "/assets/img/furniture/placares/placarEnC.webp",
                        imgAlt: "Placar en C",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 3, cardTitle: "En G",
                    image: {
                        imgSlug: "placar-en-g",
                        imgSrc: "/assets/img/furniture/placares/placarEnG.webp",
                        imgAlt: "Placar en G",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 4, cardTitle: "Lineal",
                    image: {
                        imgSlug: "placar-lineal",
                        imgSrc: "/assets/img/furniture/placares/placarLineal.webp",
                        imgAlt: "Placar lineal",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 5, cardTitle: "En paralelo",
                    image: {
                        imgSlug: "placar-en-paralelo",
                        imgSrc: "/assets/img/furniture/placares/placarEnParalelo.webp",
                        imgAlt: "Placar en paralelo",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 6, cardTitle: "Con isla",
                    image: {
                        imgSlug: "placar-con-isla",
                        imgSrc: "/assets/img/furniture/placares/placarEnIsla.webp",
                        imgAlt: "Placar con isla",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
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
}