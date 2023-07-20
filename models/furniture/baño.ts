import { FurnitureTableDataInterface } from "@/types/Interfaces";

export const furnitureBaño: FurnitureTableDataInterface = {
    designSlug: "baño",
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
                    cardId: 2, cardTitle: "Laqueado",
                    image: {
                        imgSlug: "laqueado",
                        imgSrc: "/assets/img/furniture/combinacionDeColores/coloresLaqueado.webp",
                        imgAlt: "Laqueado",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }
                },
                {
                    cardId: 3, cardTitle: "Enchapado en madera",
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
            tableTitle: "Distribución",
            maxSelections: 4,
            cards: [
                { cardId: 1, cardTitle: "Puertas" },
                { cardId: 2, cardTitle: "Cajones" },
                { cardId: 3, cardTitle: "Estantes" },
                { cardId: 4, cardTitle: "Manijas" },
            ],
        }
    ]
}
