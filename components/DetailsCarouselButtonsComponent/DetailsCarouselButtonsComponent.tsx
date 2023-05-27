import Image from "next/image";
import styles from "./DetailsCarouselButtonsComponent.module.scss"
import { useWindowSize } from "@/utils/size/useWindowSIze";

export default function CarouselButtonsComponent({
    width,
    handleScrollLeft,
    handleScrollUp,
    handleScrollRight,
    handleScrollDown
}: {
    width: number,
    handleScrollLeft: () => void;
    handleScrollUp: () => void;
    handleScrollRight: () => void;
    handleScrollDown: () => void;
}) {
    return (
        <div className={styles['carousel-buttons']}>
            <button
                className={`${styles['carousel-arrow']} ${width < 768 ? styles['top'] : styles['left']}`}
                onClick={width < 768 ? handleScrollLeft : handleScrollUp}>
                {
                    width < 768 ?
                        <Image
                            src="/assets/icons/arrowLeft.svg"
                            alt="icono"
                            width={15}
                            height={15}
                        /> :
                        <Image
                            src="/assets/icons/arrowTop.svg"
                            alt="icono"
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
                            alt="icono"
                            width={15}
                            height={15}
                        /> :
                        <Image
                            src="/assets/icons/arrowBottom.svg"
                            alt="icono"
                            width={15}
                            height={15}
                        />
                }
            </button>
        </div>
    )
}