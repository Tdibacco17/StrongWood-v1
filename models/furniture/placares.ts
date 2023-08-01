import { FurnitureTableDataInterface, MeasureDataInterface } from "@/types/Interfaces";

export const furniturePlacares: FurnitureTableDataInterface = {
    designSlug: "placar",
    data: [
        {
            tableId: 1,
            tableTitle: "Combinación de colores",
            maxSelections: 1,
            askMeasure: false,
            cards: [
                {
                    cardId: 1, cardTitle: "Melamina",
                    image: {
                        imgSlug: "melamina",
                        imgSrc: "/assets/img/furniture/combinacionDeColores/melamina.webp",
                        imgAlt: "Melamina",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 2, cardTitle: "Enchapado en madera",
                    image: {
                        imgSlug: "enchapado-madera",
                        imgSrc: "/assets/img/furniture/combinacionDeColores/enchapadoMadera.webp",
                        imgAlt: "Enchapado en madera",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 4, cardTitle: "Perfect sense",
                    image: {
                        imgSlug: "perfect-sense",
                        imgSrc: "/assets/img/furniture/combinacionDeColores/perfectSens.webp",
                        imgAlt: "Perfect sense",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
            ],
        }, {
            tableId: 2,
            tableTitle: "Calidad de herrajes",
            maxSelections: 1,
            askMeasure: false,
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
            askMeasure: false,
            cards: [
                {
                    cardId: 1, cardTitle: "Pantalonero",
                    image: {
                        imgSlug: "pantalonero",
                        imgSrc: "/assets/img/furniture/incluir/pantalonero.webp",
                        imgAlt: "Pantalonero",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 2, cardTitle: "Zapatero",
                    image: {
                        imgSlug: "zapatero",
                        imgSrc: "/assets/img/furniture/incluir/zapatero.webp",
                        imgAlt: "Zapatero",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 3, cardTitle: "Luces LED",
                    image: {
                        imgSlug: "luces-led",
                        imgSrc: "/assets/img/furniture/incluir/luzLed.webp",
                        imgAlt: "Luces LED",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 4, cardTitle: "Barral para perchas",
                    image: {
                        imgSlug: "barral-para-perchas",
                        imgSrc: "/assets/img/furniture/incluir/barralParaPerchas.webp",
                        imgAlt: "Barral para perchas",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 5, cardTitle: "Cajonera",
                    image: {
                        imgSlug: "cajonera",
                        imgSrc: "/assets/img/furniture/incluir/cajoneraPlacar.webp",
                        imgAlt: "Cajonera",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 6, cardTitle: "Estantes",
                    image: {
                        imgSlug: "estantes",
                        imgSrc: "/assets/img/furniture/incluir/estantes.webp",
                        imgAlt: "Estantes",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
            ],
        },
        {
            tableId: 4,
            tableTitle: "Puertas",
            maxSelections: 1,
            askMeasure: false,
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
                {
                    cardId: 2, cardTitle: "Corredizas",
                    image: {
                        imgSlug: "corredizas",
                        imgSrc: "/assets/img/furniture/puertas/placares/puertasCorredizas.webp",
                        imgAlt: "Corredizas",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
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
        },
        {
            tableId: 5,
            tableTitle: "Con isla",
            maxSelections: 1,
            askMeasure: false,
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
                {
                    cardId: 2, cardTitle: "No",
                    image: {
                        imgSlug: "placar-sin-isla",
                        imgSrc: "/assets/img/furniture/isla/placares/placarSinIsla.webp",
                        imgAlt: "Placar sin isla",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
            ],
        },
        {
            tableId: 6,
            tableTitle: "Distribución",
            maxSelections: 1,
            askMeasure: true,
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
        }
    ]
}


export const measuresPlacares: MeasureDataInterface = {
    "placar-en-l": {
        numValuesToComplete: 2,
        measure_slug: "placar-en-l",
        leters: [
            {
                measure_id: 1,
                title: "Medida A",
                measure: 0
            },
            {
                measure_id: 2,
                title: "Medida B",
                measure: 0
            }
        ]
    },
    "placar-en-c": {
        numValuesToComplete: 3,
        measure_slug: "placar-en-c",
        leters: [
            {
                measure_id: 1,
                title: "Medida A",
                measure: 0
            },
            {
                measure_id: 2,
                title: "Medida B",
                measure: 0
            },
            {
                measure_id: 3,
                title: "Medida C",
                measure: 0
            },
        ]
    },
    "placar-en-g": {
        numValuesToComplete: 4,
        measure_slug: "placar-en-g",
        leters: [
            {
                measure_id: 1,
                title: "Medida A",
                measure: 0
            },
            {
                measure_id: 2,
                title: "Medida B",
                measure: 0
            },
            {
                measure_id: 3,
                title: "Medida C",
                measure: 0
            },
            {
                measure_id: 4,
                title: "Medida D",
                measure: 0
            }
        ]
    },
    "placar-lineal": {
        numValuesToComplete: 1,
        measure_slug: "placar-lineal",
        leters: [
            {
                measure_id: 1,
                title: "Medida A",
                measure: 0
            },
        ]
    },
    "placar-en-paralelo": {
        numValuesToComplete: 2,
        measure_slug: "placar-en-paralelo",
        leters: [
            {
                measure_id: 1,
                title: "Medida A",
                measure: 0
            },
            {
                measure_id: 2,
                title: "Medida B",
                measure: 0
            },
        ]
    }
}