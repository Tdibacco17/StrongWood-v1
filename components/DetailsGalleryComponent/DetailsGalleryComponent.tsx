import { useContext } from "react";
import DetailsPrimaryImgComponent from "../DetailsPrimaryImgComponent/DetailsPrimaryImgComponent"
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ImgDataInterface, ProductsDataContextInterface } from "@/types/Interfaces";
import styles from "./DetailsGalleryComponent.module.scss"
import DetailsCarouselImgComponent from "../DetailsCarouselImgComponent/DetailsCarouselImgComponent";
import Image from "next/image";

export default function DetailsGalleryComponent({
    width,
    handleScrollLeft,
    handleScrollUp,
    handleScrollRight,
    handleScrollDown,
    activeImage,
    carouselRef,
    handleImageClick
}: {
    width: number,
    handleScrollLeft: () => void;
    handleScrollUp: () => void;
    handleScrollRight: () => void;
    handleScrollDown: () => void;
    activeImage: ImgDataInterface | undefined;
    carouselRef: React.RefObject<HTMLDivElement>;
    handleImageClick: (index: number) => void;
}) {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    return (
        <div className={styles['container-section-gallery']}>
            <DetailsPrimaryImgComponent activeImage={activeImage} />
            <div className={styles['container-section-carousel']}>
                <div className={styles['carousel']} ref={carouselRef}>
                    {productData &&
                        Object.keys(productData).length > 0 &&
                        productData?.detail?.images?.map((image, index) => {
                            return (
                                <DetailsCarouselImgComponent
                                    key={image.imgSlug}
                                    imgSrc={image.imgSrc}
                                    imgAlt={image.imgAlt}
                                    imgProportionsX={image.imgProportionsX ? image.imgProportionsX : 1}
                                    handleImageClick={() => handleImageClick(index)}
                                />
                            );
                        })}
                </div>
                <div className={styles['carousel-buttons']}>
                    <button
                        className={`${styles['carousel-arrow']} ${width < 768 ? styles['top'] : styles['left']}`}
                        onClick={width < 768 ? handleScrollLeft : handleScrollUp}>
                        {
                            width < 768 ?
                                <Image
                                    src="/assets/icons/arrowLeft.svg"
                                    alt="Icono Izquierda"
                                    width={15}
                                    height={15}
                                /> :
                                <Image
                                    src="/assets/icons/arrowTop.svg"
                                    alt="Icono Arriba"
                                    width={15}
                                    height={15}
                                />
                        }
                    </button>
                    <button
                        className={`${styles['carousel-arrow']}  ${width < 768 ? styles['bottom'] : styles['right']}`}
                        onClick={width < 768 ? handleScrollRight : handleScrollDown}>
                        {
                            width < 768 ?
                                <Image
                                    src="/assets/icons/arrowRight.svg"
                                    alt="Icono Derecha"
                                    width={15}
                                    height={15}
                                /> :
                                <Image
                                    src="/assets/icons/arrowBottom.svg"
                                    alt="Icono Abajo"
                                    width={15}
                                    height={15}
                                />
                        }
                    </button>
                </div>
            </div>
        </div>
    );
}