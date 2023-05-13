//SACARLO
export interface CustomStyles {
    [key: string]: string;
}

//home
export interface HomeDataContextInterface {
    handleHomeDataChange?: Function;
    homeData?: HomeDataInterface;
}

export interface HomeDataInterface {
    sliderImages: ImgDataInterface[];
    categoriesImages: ImgDataInterface[];
}

//products
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

//image
export interface ImgDataInterface {
    imgSlug: number,
    imgSrc: string,
    imgAlt: string,
    originalWidth?: number,
    originalHeight?: number,
    imgProportionsX?: number; //dividir la anchura entre la altura
    imgProportionsY?: number; //dividir la altura entre la anchura
}