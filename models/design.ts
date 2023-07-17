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
    "obras": {
        designSlug: "obras",
        title: "Obras",
        image: {
            imgSlug: 1,
            imgSrc: "/assets/img/design/obras/Farina1.webp",
            imgAlt: "Obras",
            imgProportionsX: 1.5024,
            imgProportionsY: 0.6651,
        },
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
                images: [
                    {
                        imgSlug: "cama-1",
                        imgSrc: "/assets/img/home/twoCategories/strong1.webp",
                        imgAlt: "Cama1",
                        imgProportionsX: 1,
                        imgProportionsY: 1
                    }, {
                        imgSlug: "cama-2",
                        imgSrc: "/assets/img/home/twoCategories/strong1.webp",
                        imgAlt: "Cama2",
                        imgProportionsX: 1,
                        imgProportionsY: 1
                    }, {
                        imgSlug: "cama-3",
                        imgSrc: "/assets/img/home/twoCategories/strong1.webp",
                        imgAlt: "Cama3",
                        imgProportionsX: 1,
                        imgProportionsY: 1
                    },
                ]
            }, {
                title: "Mesa de Luz",
                images: [
                    {
                        imgSlug: "mesa-de-luz-1",
                        imgSrc: "/assets/img/home/twoCategories/strong1.webp",
                        imgAlt: "Mesa de Luz",
                        imgProportionsX: 1,
                        imgProportionsY: 1
                    },
                    {
                        imgSlug: "mesa-de-luz-2",
                        imgSrc: "/assets/img/home/twoCategories/strong1.webp",
                        imgAlt: "Mesa de Luz",
                        imgProportionsX: 1,
                        imgProportionsY: 1
                    },
                ]
            }, {
                title: "Comoda",
                images: [
                    {
                        imgSlug: "comoda-1",
                        imgSrc: "/assets/img/home/twoCategories/strong1.webp",
                        imgAlt: "Escritorio",
                        imgProportionsX: 1,
                        imgProportionsY: 1
                    },
                    {
                        imgSlug: "comoda-2",
                        imgSrc: "/assets/img/home/twoCategories/strong1.webp",
                        imgAlt: "Escritorio",
                        imgProportionsX: 1,
                        imgProportionsY: 1
                    },
                ]
            }
        ]
    },
    "oficina-e-industria": {
        designSlug: "oficina-e-industria",
        title: "Oficina e Industria",
        image: {
            imgSlug: 1,
            imgSrc: "/assets/img/design/oficinaIndustria/oficina1.webp",
            imgAlt: "Oficina e industria",
            imgProportionsX: 1.5024,
            imgProportionsY: 0.6651,
        },
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
                images: [
                    {
                        imgSlug: "vestidor-1",
                        imgSrc: "/assets/img/design/placares/categorieVestidor1.webp",
                        imgAlt: "Vestidores1",
                        imgProportionsX: 1,
                        imgProportionsY: 1
                    },
                    {
                        imgSlug: "vestidor-2",
                        imgSrc: "/assets/img/design/placares/categorieVestidor1.webp",
                        imgAlt: "Vestidores2",
                        imgProportionsX: 1,
                        imgProportionsY: 1
                    },
                ]
            }, {
                title: "Placar",
                images: [
                    {
                        imgSlug: "placar-1",
                        imgSrc: "/assets/img/design/placares/categoriePlacar1.webp",
                        imgAlt: "Placar1",
                        imgProportionsX: 1,
                        imgProportionsY: 1
                    },
                    {
                        imgSlug: "placar-2",
                        imgSrc: "/assets/img/design/placares/categoriePlacar1.webp",
                        imgAlt: "Placar2",
                        imgProportionsX: 1,
                        imgProportionsY: 1
                    },
                ]
            }
        ]
    },
}