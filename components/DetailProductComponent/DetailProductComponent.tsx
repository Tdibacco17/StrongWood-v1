import { ImgDataInterface, ProductInterface } from "@/types/Interfaces"
import styles from "./DetailProductComponent.module.scss"
import ImagesComponent from "../ImagesComponent/ImagesComponent"
import React from "react"

export default function DetailProductComponent({
    product
}: {
    product: ProductInterface
}) {
    return (
        <div className={styles["container-section-details"]}>
            <div>
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
            </div>
            <pre>
                {product ? JSON.stringify(product, null, 2) : "no existe"}
            </pre>
        </div>
    )
}