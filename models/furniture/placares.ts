import { FurnitureTableDataInterface } from "@/types/Interfaces";

export const furniturePlacares: FurnitureTableDataInterface = {
    designSlug: "placar",
    data: [
        {
            tableId: 1,
            tableTitle: "Combinación de colores",
            maxSelections: 1,
            cards: [
                {
                    cardId: 1, cardTitle: "Melamina",
                    image: {
                        imgSlug: "melamina",
                        imgSrc: "/assets/img/furniture/combinacionDeColores/colorMelamina.webp",
                        imgAlt: "Melamina",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 2, cardTitle: "Enchapado en madera",
                    image: {
                        imgSlug: "enchapado-madera",
                        imgSrc: "/assets/img/furniture/combinacionDeColores/colorEnchapadoEnMadera.webp",
                        imgAlt: "Enchapado en madera",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
            ],
        }, {
            tableId: 2,
            tableTitle: "Calidad de herrajes",
            maxSelections: 1,
            cards: [
                {
                    cardId: 1, cardTitle: "Estandar",
                    image: {
                        imgSlug: "herraje-estandar",
                        imgSrc: "/assets/img/furniture/calidadDeHerrajes/herrajesEstandar.webp",
                        imgAlt: "Herraje estandar",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 2, cardTitle: "Premium",
                    image: {
                        imgSlug: "herraje-premium",
                        imgSrc: "/assets/img/furniture/calidadDeHerrajes/herrajesPremium.webp",
                        imgAlt: "Herraje premium",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
            ],
        }, {
            tableId: 3,
            tableTitle: "Incluir",
            maxSelections: 4,
            cards: [
                { cardId: 1, cardTitle: "Pantalonero" },
                { cardId: 2, cardTitle: "Zapatero" },
                {
                    cardId: 3, cardTitle: "Luces LED",
                    image: {
                        imgSlug: "Luces-led",
                        imgSrc: "/assets/img/furniture/incluir/luzLed.webp",
                        imgAlt: "Luces LED",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                { cardId: 4, cardTitle: "Barral para perchas" },
            ],
        },
        {
            tableId: 4,
            tableTitle: "Puertas",
            maxSelections: 1,
            cards: [
                {
                    cardId: 1, cardTitle: "De vidrio",
                    image: {
                        imgSlug: "puertas-de-vidrio",
                        imgSrc: "/assets/img/furniture/puertas/placares/puertaDeVidrio.webp",
                        imgAlt: "Puertas de vidrio",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                { cardId: 2, cardTitle: "Corredizas" },
                {
                    cardId: 3, cardTitle: "Sin puerta",
                    image: {
                        imgSlug: "sin-puertas",
                        imgSrc: "/assets/img/furniture/puertas/placares/placarSinPuerta.webp",
                        imgAlt: "Sin puerta",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
            ],
        }, {
            tableId: 5,
            tableTitle: "Distribución",
            maxSelections: 1,
            cards: [
                {
                    cardId: 1, cardTitle: "En L",
                    image: {
                        imgSlug: "placar-en-l",
                        imgSrc: "/assets/img/furniture/distribucion/placares/placarEnL.webp",
                        imgAlt: "Placar en L",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 2, cardTitle: "En C",
                    image: {
                        imgSlug: "placar-en-c",
                        imgSrc: "/assets/img/furniture/distribucion/placares/placarEnC.webp",
                        imgAlt: "Placar en C",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 3, cardTitle: "En G",
                    image: {
                        imgSlug: "placar-en-g",
                        imgSrc: "/assets/img/furniture/distribucion/placares/placarEnG.webp",
                        imgAlt: "Placar en G",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 4, cardTitle: "Lineal",
                    image: {
                        imgSlug: "placar-lineal",
                        imgSrc: "/assets/img/furniture/distribucion/placares/placarLineal.webp",
                        imgAlt: "Placar lineal",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 5, cardTitle: "En paralelo",
                    image: {
                        imgSlug: "placar-en-paralelo",
                        imgSrc: "/assets/img/furniture/distribucion/placares/placarEnParalelo.webp",
                        imgAlt: "Placar en paralelo",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
            ],
        }, {
            tableId: 6,
            tableTitle: "Con isla",
            maxSelections: 1,
            cards: [
                {
                    cardId: 1, cardTitle: "Si",
                    image: {
                        imgSlug: "placar-con-isla",
                        imgSrc: "/assets/img/furniture/isla/placares/placarEnIsla.webp",
                        imgAlt: "Placar con isla",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                { cardId: 2, cardTitle: "No", },
            ],
        }, {
            tableId: 7,
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