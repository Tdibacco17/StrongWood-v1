import { useScrollPosition, NAVBAR_HEIGHT } from "@/utils/scroll/useScrollPosition";
import styles from "./NavbarComponent.module.scss";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

export default function NavbarComponent({ isSlider, urlBack }: { isSlider: boolean, urlBack: string }) {

    const { isScrolled, isAtTop } = useScrollPosition() // 57.6px === 3.6rem
    const hiddenRef = useRef<boolean>(false);

    useEffect(() => {
        hiddenRef.current = isScrolled === -NAVBAR_HEIGHT;
    }, [isScrolled]);

    const router = useRouter()

    return (
        <div className={`
        ${styles['container-section-navbar']} 
        ${hiddenRef.current && !isAtTop ?
                styles["hidden"]
                :
                styles['show-on-top']}
                `}>
            <div className={`
                    ${styles['container-primary-nav']}
                    ${isSlider ?
                    (isAtTop ? styles['isTransparency'] : styles["isDark"])
                    :
                    (isAtTop ? styles['isOtherSection'] : styles['isOtherSection'])
                }
                `}>
                <h1 onClick={() => { router.push(`/`); }} className={styles["title"]}>STRONG WOOD</h1>
            </div>
            {
                !isSlider &&
                <div className={styles['container-secondary-nav']}>
                    {
                        urlBack ?
                            <p onClick={() => { router.push(`/${urlBack}`); }} className={styles["back-title"]}>VOLVER</p>
                            : <p className={styles["title"]}>FUNCIONALIDADES</p>
                    }
                </div>
            }
        </div>
    );
}