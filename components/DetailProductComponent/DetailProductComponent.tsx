import { ImgDataInterface, ProductInterface } from "@/types/Interfaces"
import styles from "./DetailProductComponent.module.scss"
import ImagesComponent from "../ImagesComponent/ImagesComponent"
import React, { useState } from "react"
import Image from "next/image"
import DetailImagesComponent from "../ImagesComponent/ImagesComponent"

export default function DetailProductComponent({
    product
}: {
    product: ProductInterface
}) {

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const handleImageClick = (index: number) => {
        setActiveImageIndex(index);
    };

    return (
        <div className={styles["container-section-details"]}>

            {product &&
                <div className="product-detail">

                    <div className="product-detail__image">
                        <DetailImagesComponent
                            imgSlug={product.image.imgSlug}
                            imgSrc={product.detail.images ? (product.detail.images[activeImageIndex]?.imgSrc || '') : ''}
                            imgAlt={product.image.imgAlt}
                            originalWidth={product.image.originalWidth}
                            originalHeight={product.image.originalHeight}
                            outerWidth={10}
                            outerHeight={10}
                        />
                    </div>
                    <div className="product-detail__info">
                        <h1>{product.title}</h1>
                        <p>{product.title}</p>
                        <p>Precio: {product.price}</p>
                        {product.offerPrice && <p>Precio oferta: {product.offerPrice}</p>}
                        {product.offerPercentage && <p>Descuento: {product.offerPercentage}%</p>}
                    </div>
                    {/* {product.detail && product.detail.images && (
                        <div className="product-detail__gallery">
                            <h2>Galería de imágenes</h2>
                            {product.detail.images.map((image, index) => (
                                <Image
                                    key={image.imgSlug}
                                    src={image.imgSrc}
                                    alt={image.imgAlt}
                                    className={activeImageIndex === index ? "active" : ""}
                                    onClick={() => handleImageClick(index)}
                                    width={200}
                                    height={200}
                                />
                            ))}
                        </div>
                    )} */}
                </div>
            }
            {/* <div>
                {
                    product ? <ImagesComponent
                        imgSlug={product.image.imgSlug}
                        imgSrc={product.image.imgSrc}
                        imgAlt={product.image.imgAlt}
                        originalWidth={product.image.originalWidth}
                        originalHeight={product.image.originalHeight}
                        outerWidth={0}
                        outerHeight={0}
                    /> : <></>
                }
                {
                    product ? product.detail.images && product.detail.images.map((e: ImgDataInterface) => {
                        return (
                            <React.Fragment key={e.imgSlug}>
                                <ImagesComponent
                                    imgSlug={e.imgSlug}
                                    imgSrc={e.imgSrc}
                                    imgAlt={e.imgAlt}
                                    originalWidth={e.originalWidth}
                                    originalHeight={e.originalHeight}
                                    outerWidth={0}
                                    outerHeight={0}
                                />
                            </React.Fragment>
                        )
                    }) : <></>
                }
            </div> */}


            {/* <pre>
                {product ? JSON.stringify(product, null, 2) : "no existe"}
            </pre> */}
        </div>
    )
}