export interface CustomStyles {
    [key: string]: string;
}

export interface ProductDataInterface {
    [id: string]: ProductInterface;
}

export interface ProductInterface {
    productSlug: number,
    title: string,
    image: ImgDataInterface,
    price: string,
    offerPrice?: string,
    offerPercentage?: number,
    detail: {
        description?: DescriptionInterface,
        images?: ImgDataInterface[],
    },
}

export interface ImgDataInterface {
    imgSlug: number,
    imgSrc: string,
    imgAlt: string,
    originalWidth: number,
    originalHeight: number,
}

export interface DescriptionInterface {
    title: string,
    qualities: string[]
    measures: string,
    materials: string[]
}