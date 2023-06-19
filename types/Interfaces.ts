//home
export interface HomeDataContextInterface {
    handleHomeDataChange?: Function;
    homeData?: HomeDataInterface;
}

//** interface de homepage */
export interface HomeDataInterface {
    sliderImages: ImgDataInterface[];
    categoriesImages: ImgDataInterface[];
}

//design
export interface DesignDataContextInterface {
    designsData?: DesignDataInterface;
    handleDesignDataChange?: Function;
    designData?: DesignInterface;
}

export interface DesignDataInterface {
    [id: string]: DesignInterface;
}

export interface DesignInterface {
    designSlug: string,
    title: string,
    image: ImgDataInterface,
    subcategories: SubCategorieDataInterface[]
}

export interface SubCategorieDataInterface {
    title: string,
    images: ImgDataInterface[]
}

//products
export interface ProductsDataContextInterface {
    productsData?: ProductDataInterface;
    handleProductDataChange?: Function;
    productData?: ProductInterface;
}

//** interface de productos */

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
        payment?: PaymentDataInterface;
        description?: DescriptionDataInterface,
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

//product details
export interface DescriptionDataInterface {
    title?: string,
    itemsDescription?: string[],
    measures?: string
}

export interface PaymentDataInterface {
    cash: {
        price: string,
        offerPrice?: string,
        offerPercentage?: number;
    },
    card: {
        price: string,
        offerPrice?: string,
        offerPercentage?: number;
    }
}

//contact

export interface ContactProductDataInterface {
    name: string,
    phone: string,
    email: string,
    direction: string,
    product: string
    pago: string
}