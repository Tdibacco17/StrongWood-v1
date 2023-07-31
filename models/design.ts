import { DesignDataInterface } from "@/types/Interfaces";

export const designData: DesignDataInterface = {
    "cocina": {
        designSlug: "cocina",
        title: "Cocina",
        image: {
            imgSlug: 1,
            imgSrc: "/assets/img/design/cocina/serieNewYork.webp",
            imgAlt: "Cocina",
            imgProportionsX: 1.5024,
            imgProportionsY: 0.6651,
        },
        subcategories: [
            {
                title: "Cocinas",
                subtitle: "Selecciona tu cocina a cotizar",
                images: [
                    {
                        imgSlug: "serie-nordica",
                        imgSrc: "/assets/img/design/cocina/serieNordica.webp",
                        imgAlt: "Serie Nordica",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }, {
                        imgSlug: "serie-new-york",
                        imgSrc: "/assets/img/design/cocina/serieNewYork.webp",
                        imgAlt: "Serie New York",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }, {
                        imgSlug: "serie-premium",
                        imgSrc: "/assets/img/design/cocina/seriePremium.webp",
                        imgAlt: "Serie Premiun",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }, {
                        imgSlug: "serie-nova",
                        imgSrc: "/assets/img/design/cocina/serieNova.webp",
                        imgAlt: "Serie Nova",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }, {
                        imgSlug: "serie-de-luxe",
                        imgSrc: "/assets/img/design/cocina/serieDeLuxe.webp",
                        imgAlt: "Serie De Luxe",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    },
                ]
            }
        ]
    },
    "baño": {
        designSlug: encodeURIComponent("baño"),
        title: "Baño",
        image: {
            imgSlug: 1,
            imgSrc: "/assets/img/design/baño/vanitoryNordico.webp",
            imgAlt: "Baño",
            imgProportionsX: 1.5024,
            imgProportionsY: 0.6651,
        },
        subcategories: [
            {
                title: "Vanitory",
                subtitle: "Selecciona tu vanitory a cotizar",
                images: [
                    {
                        imgSlug: "vanitory-new-york",
                        imgSrc: "/assets/img/design/baño/vanitoryNewYork.webp",
                        imgAlt: "Vanitory New York",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651
                    }, {
                        imgSlug: "vanitory-escandinavo",
                        imgSrc: "/assets/img/design/baño/vanitoryEscandinavo.webp",
                        imgAlt: "Vanitory Escandinavo",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    }, {
                        imgSlug: "vanitory-nordico",
                        imgSrc: "/assets/img/design/baño/vanitoryNordico.webp",
                        imgAlt: "Vanitory Nordico",
                        imgProportionsX: 1.5024,
                        imgProportionsY: 0.6651,
                    },
                ]
            }
        ]
    },
    "placares": {
        designSlug: "placares",
        title: "Placares",
        image: {
            imgSlug: 1,
            imgSrc: "/assets/img/design/placares/placarEstiloModerno1.webp",
            imgAlt: "Placares",
            imgProportionsX: 1.5024,
            imgProportionsY: 0.6651,
        },
        subcategories: [
            {
                title: "Vestidores",
                subtitle: "Selecciona tu vestidor a cotizar",
                images: [
                    {
                        imgSlug: "vestidor-de-luxe",
                        imgSrc: "/assets/img/design/placares/categorieVestidor1.webp",
                        imgAlt: "Vestidor de luxe",
                        imgProportionsX: 1,
                        imgProportionsY: 1
                    },
                    {
                        imgSlug: "vestidor-fusion",
                        imgSrc: "/assets/img/design/placares/categorieVestidor2.webp",
                        imgAlt: "Vestidor  Fusion",
                        imgProportionsX: 1,
                        imgProportionsY: 1
                    }
                ]
            }, {
                title: "Placar",
                subtitle: "Selecciona tu placar a cotizar",
                images: [
                    {
                        imgSlug: "placard-UrbanWood",
                        imgSrc: "/assets/img/design/placares/categoriePlacar1.webp",
                        imgAlt: "PLacard  UrbanWood",
                        imgProportionsX: 1,
                        imgProportionsY: 1
                    }
                ]
            }
        ]
    },
    "dormitorio": {
        designSlug: "dormitorio",
        title: "Dormitorio",
        image: {
            imgSlug: 1,
            imgSrc: "/assets/img/design/dormitorio/Dormitorio1.webp",
            imgAlt: "Dormitorio",
            imgProportionsX: 1.5024,
            imgProportionsY: 0.6651,
        },
        subcategories: [
            {
                title: "Cama",
                subtitle: "Selecciona tu cama a cotizar",
                images: [
                    {
                        imgSlug: "cama-individual",
                        imgSrc: "/assets/img/design/dormitorio/camaIndividual1.webp",
                        imgAlt: "Individual",
                        imgProportionsX: 1,
                        imgProportionsY: 1
                    },
                    {
                        imgSlug: "cama-matrimonial",
                        imgSrc: "/assets/img/design/dormitorio/camaMatrimonial1.webp",
                        imgAlt: "Matrimonial",
                        imgProportionsX: 1,
                        imgProportionsY: 1
                    },
                ]
            }, {
                title: "Mesa de Luz",
                subtitle: "Selecciona tu meda de luz a cotizar",
                images: [
                    {
                        imgSlug: "mesa-de-luz",
                        imgSrc: "/assets/img/design/dormitorio/mesa-de-luz-1.webp",
                        imgAlt: "Mesa de Luz",
                        imgProportionsX: 1,
                        imgProportionsY: 1
                    },
                ]
            }, {
                title: "Comoda",
                subtitle: "Selecciona tu comoda a cotizar",
                images: [
                    {
                        imgSlug: "comoda",
                        imgSrc: "/assets/img/design/dormitorio/comoda-1.webp",
                        imgAlt: "Comoda",
                        imgProportionsX: 1,
                        imgProportionsY: 1
                    },
                ]
            }, {
                title: "Escritorio",
                subtitle: "Selecciona tu escritorio a cotizar",
                images: [
                    {
                        imgSlug: "escritorio",
                        imgSrc: "/assets/img/design/dormitorio/escritorio-1.webp",
                        imgAlt: "Escritorio",
                        imgProportionsX: 1,
                        imgProportionsY: 1
                    },
                ]
            }
        ]
    },
    // "obras": {
    //     designSlug: "obras",
    //     title: "Obras",
    //     image: {
    //         imgSlug: 1,
    //         imgSrc: "/assets/img/design/obras/Farina1.webp",
    //         imgAlt: "Obras",
    //         imgProportionsX: 1.5024,
    //         imgProportionsY: 0.6651,
    //     },
    // subcategories: [
    //     {
    //         title: "Locales",
    //         images: [
    //             {
    //                 imgSlug: 1,
    //                 imgSrc: "/assets/img/home/twoCategories/strong1.webp",
    //                 imgAlt: "Locales",
    //                 imgProportionsX: 1,
    //                 imgProportionsY: 1
    //             },
    //             {
    //                 imgSlug: 2,
    //                 imgSrc: "/assets/img/home/twoCategories/strong1.webp",
    //                 imgAlt: "Locales",
    //                 imgProportionsX: 1,
    //                 imgProportionsY: 1
    //             },
    //         ]
    //     }, {
    //         title: "Obras",
    //         images: [
    //             {
    //                 imgSlug: 1,
    //                 imgSrc: "/assets/img/home/twoCategories/strong1.webp",
    //                 imgAlt: "Obras",
    //                 imgProportionsX: 1,
    //                 imgProportionsY: 1
    //             },
    //             {
    //                 imgSlug: 2,
    //                 imgSrc: "/assets/img/home/twoCategories/strong1.webp",
    //                 imgAlt: "Obras",
    //                 imgProportionsX: 1,
    //                 imgProportionsY: 1
    //             },
    //         ]
    //     }
    // ]
    // },
    // "oficina-e-industria": {
    //     designSlug: "oficina-e-industria",
    //     title: "Oficina e Industria",
    //     image: {
    //         imgSlug: 1,
    //         imgSrc: "/assets/img/design/oficinaIndustria/oficina1.webp",
    //         imgAlt: "Oficina e industria",
    //         imgProportionsX: 1.5024,
    //         imgProportionsY: 0.6651,
    //     },
    // subcategories: [
    //     {
    //         title: "Escritorios",
    //         images: [
    //             {
    //                 imgSlug: 1,
    //                 imgSrc: "/assets/img/home/twoCategories/strong1.webp",
    //                 imgAlt: "Escritorio",
    //                 imgProportionsX: 1,
    //                 imgProportionsY: 1
    //             },
    //             {
    //                 imgSlug: 2,
    //                 imgSrc: "/assets/img/home/twoCategories/strong1.webp",
    //                 imgAlt: "Escritorio",
    //                 imgProportionsX: 1,
    //                 imgProportionsY: 1
    //             },
    //         ]
    //     }
    // ]
    // },
}