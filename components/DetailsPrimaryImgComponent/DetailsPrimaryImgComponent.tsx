import Image from "next/image"
import styles from "./DetailsPrimaryImgComponent.module.scss"
import { useContext, useEffect } from "react";
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ImgDataInterface, ProductsDataContextInterface } from "@/types/Interfaces";
import PlaceholderImageComponent from "../PlaceholderImageComponent/PlaceholderImageComponent";

export default function DetailsPrimaryImgComponent({
    activeImage,
}: {
    activeImage: ImgDataInterface | undefined;
}) {

    return (
        <div className={styles["container-outer-image"]}>
            {activeImage ?
                <div className={styles["container-inner-image"]}>
                    <Image
                        src={activeImage?.imgSrc || "/image"}
                        alt={activeImage?.imgAlt || "image"}
                        fill
                        priority
                        sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div> : <PlaceholderImageComponent />
            }
            <style jsx>{`
          .${styles["container-outer-image"]} {
            --card-details-image-proportion: calc((var(--card-details-image-width)) * ${activeImage?.imgProportionsX || 1});
          }
        `}</style>
        </div>
    );
}