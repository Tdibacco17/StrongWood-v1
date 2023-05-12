import { ImgDataInterface, ProductInterface, ProductsDataContextInterface } from "@/types/Interfaces"
import styles from "./DetailProductComponent.module.scss"
import ImagesComponent from "../ImagesComponent/ImagesComponent"
import React, { useContext, useMemo, useState } from "react"
import Image from "next/image"
import DetailImagesComponent from "../ImagesComponent/ImagesComponent"
import { ProductDetailContext } from "@/context/ProductDetailProvider"

export default function DetailProductComponent() {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleImageClick = (index: number) => {
        setActiveImageIndex(index);
    };

    if (!productData) {
        return null;
    }
    const activeImage = productData.detail?.images?.[activeImageIndex];

    return (
        <div className={styles["container-section-details"]}>
            <div className="product-detail">
                <div className="product-detail__image">
                    <Image
                        key={productData.productSlug}
                        src={activeImage?.imgSrc ||
                            productData.detail?.images?.[0]?.imgSrc ||
                            "/images"}
                        alt={productData.image.imgAlt}
                        width={200}
                        height={200}
                        priority
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className="product-detail__info">
                    <h1>{productData.title}</h1>
                    <p>{productData.title}</p>
                    <p>Precio: {productData.price}</p>
                    {productData.offerPrice && (
                        <p>Precio oferta: {productData.offerPrice}</p>
                    )}
                    {productData.offerPercentage && (
                        <p>Descuento: {productData.offerPercentage}%</p>
                    )}
                </div>
                {productData.detail && productData.detail.images && (
                    <div className="product-detail__gallery">
                        <h2>Galería de imágenes</h2>
                        <div className="product-detail__gallery-images">
                            {productData.detail.images.map((image, index) => (
                                <Image
                                    key={image.imgSlug}
                                    src={image.imgSrc}
                                    alt={image.imgAlt}
                                    className={activeImageIndex === index ? "active" : ""}
                                    onClick={() => handleImageClick(index)}
                                    width={200}
                                    height={200}
                                    priority
                                    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
