import { FurnitureTableDataInterface } from "@/types/Interfaces";

export const furnitureCocina: FurnitureTableDataInterface = {
    designTitle: "Cocina",
    data: [
        {
            tableId: 1,
            tableTitle: "Combinación de colores",
            maxSelections: 1,
            cards: [
                { cardId: 1, cardTitle: "Melamina" },
                { cardId: 2, cardTitle: "Laqueado" },
                { cardId: 3, cardTitle: "Enchapado en madera Laqueado" },
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
                        imgSrc: "/assets/img/furniture/cocina/herrajesEstandar.webp",
                        imgAlt: "Herraje estandar",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 2, cardTitle: "Medium",
                    image: {
                        imgSlug: "herraje-medium",
                        imgSrc: "/assets/img/furniture/cocina/herrajesMedium.webp",
                        imgAlt: "Herraje medium",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 3, cardTitle: "Premium",
                    image: {
                        imgSlug: "herraje-premium",
                        imgSrc: "/assets/img/furniture/cocina/herrajesPremium.webp",
                        imgAlt: "Herraje premium",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
            ],
        }, {
            tableId: 3,
            tableTitle: "Combinaciónes",
            maxSelections: 9,
            cards: [
                {
                    cardId: 1, cardTitle: "Cajonera",
                    image: {
                        imgSlug: "cajonera",
                        imgSrc: "/assets/img/furniture/cocina/combinacionesCajonera.webp",
                        imgAlt: "Cajonera",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                { cardId: 2, cardTitle: "Tacho" },
                {
                    cardId: 3, cardTitle: "Puertas",
                    image: {
                        imgSlug: "puertas",
                        imgSrc: "/assets/img/furniture/cocina/combinacionesPuertas.webp",
                        imgAlt: "Puertas",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                { cardId: 4, cardTitle: "Carro especiero" },
                { cardId: 5, cardTitle: "Carro esquinero" },
                { cardId: 6, cardTitle: "Torre de heladera" },
                {
                    cardId: 7, cardTitle: "Torre de horno + microondas",
                    image: {
                        imgSlug: "Torre-de-horno-microondas",
                        imgSrc: "/assets/img/furniture/cocina/combinacionesTorreHornoMicroondas.webp",
                        imgAlt: "Torre de horno + microondas",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                { cardId: 8, cardTitle: "Mesada de madera maciza" },
                { cardId: 9, cardTitle: "Luces led" },
            ],
        }, {
            tableId: 4,
            tableTitle: "Distribución",
            maxSelections: 2,
            cards: [
                {
                    cardId: 1, cardTitle: "En L",
                    image: {
                        imgSlug: "cocina-en-l",
                        imgSrc: "/assets/img/furniture/cocina/cocinaEnL.webp",
                        imgAlt: "Cocina en L",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 2, cardTitle: "En U",
                    image: {
                        imgSlug: "cocina-en-u",
                        imgSrc: "/assets/img/furniture/cocina/cocinaEnU.webp",
                        imgAlt: "Cocina en U",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 3, cardTitle: "En G",
                    image: {
                        imgSlug: "cocina-en-g",
                        imgSrc: "/assets/img/furniture/cocina/cocinaEnG.webp",
                        imgAlt: "Cocina en G",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 4, cardTitle: "Lineal",
                    image: {
                        imgSlug: "cocina-lineal",
                        imgSrc: "/assets/img/furniture/cocina/cocinaLineal.webp",
                        imgAlt: "Cocina lineal",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 5, cardTitle: "En paralelo",
                    image: {
                        imgSlug: "cocina-en-paralelo",
                        imgSrc: "/assets/img/furniture/cocina/cocinaEnParalelo.webp",
                        imgAlt: "Cocina en paralelo",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 6, cardTitle: "Con isla",
                    image: {
                        imgSlug: "cocina-en-isla",
                        imgSrc: "/assets/img/furniture/cocina/cocinaEnIsla.webp",
                        imgAlt: "Cocina en isla",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
            ],
        }
    ]
}