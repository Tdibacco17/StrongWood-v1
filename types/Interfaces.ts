export interface CustomStyles {
    [key: string]: string;
}

export interface ProductsDataContextInterface {
    productsData?: ProductDataInterface;
    handleProductDataChange?: Function;
    productData?: ProductInterface;
}

export interface ProductDataInterface {
    [id: string]: ProductInterface;
}

export interface ProductInterface {
    productSlug: string;
    title: string;
    image: ImgDataInterface;
    price: string;
    offerPrice?: string;
    offerPercentage?: number;
    detail?: {
        // payMethod?: [],
        // description?: DescriptionDataInterface,
        images?: ImgDataInterface[];
    },
}

export interface ImgDataInterface {
    imgSlug: number,
    imgSrc: string,
    imgAlt: string,
    originalWidth: number,
    originalHeight: number,
}

/*
export interface DescriptionDataInterface {
    title: string,
    qualities: string[]
    measures: string,
    materials: string[]
}
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

*/