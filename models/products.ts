// import { ProductDataInterface } from "@/types/Interfaces";

import { ProductDataInterface } from "@/types/Interfaces";

export const productsData: ProductDataInterface = {
    "mesa-de-luz-roma": {
        productSlug: 1,
        title: "mesa de luz roma",
        price: 78610.00,
        offerPrice: 54827.00,
        offerPercentage: 30,
        image: {
            imgSlug: 1,
            imgSrc: "/image.jpg",
            imgAlt: "mesa de luz roma",
            originalWidth: 800,
            originalHeight: 900,
        },
        detail: {
            description: {
                title: "Mesa de luz ideal para lucir tu cuarto más elegante.",
                qualities: [
                    "Gracias a su delicado recubrimiento de laca y a su gran dureza esta mesa te perdurará de por vida!",
                    "Su amplia cajonera permitirá mantener el orden de tu cuarto.",
                    "Asimismo, es importante destacar que gracias a sus gomas protectoras inferiores tus pisos no se verán dañados."
                ],
                measures: "80cm x 40 cm.",
                materials: [
                    "Pino",
                    "Petiribi",
                    "Roble"
                ],
            },
            images: [
                {
                    imgSlug: 2,
                    imgSrc: "/image.jpg",
                    imgAlt: "mesa de luz roma",
                    originalWidth: 800,
                    originalHeight: 900,
                },
                {
                    imgSlug: 3,
                    imgSrc: "/image.jpg",
                    imgAlt: "mesa de luz roma",
                    originalWidth: 800,
                    originalHeight: 900,
                },
            ],
        }
    }
}