import { useScrollPosition, NAVBAR_HEIGHT } from "@/utils/scroll/useScrollPosition";
import styles from "./NavbarComponent.module.scss";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavbarComponent({ isSlider }: { isSlider: Boolean }) {

    const { isScrolled, isAtTop } = useScrollPosition() // 64px === 5rem
    const hiddenRef = useRef<boolean>(false);

    useEffect(() => {
        hiddenRef.current = isScrolled === -NAVBAR_HEIGHT;
    }, [isScrolled]);

    const router = useRouter()

    return (
        <div className={`${styles['container-section-navbar']} ${hiddenRef.current ? styles["hidden"] : ""}`}>
            <div className={`
                    ${styles['container-primary-nav']}
                    ${isSlider ?
                    isAtTop ? styles["isTransparency"] : styles["isDark"]
                    : styles["isOtherSection"]}
                `}>
                <h1 onClick={() => { router.push(`/`); }} className={styles["title"]}>STRONG WOOD</h1>
            </div>
            {
                !isSlider &&
                <div className={styles['container-secondary-nav']}>
                    <h3 className={styles["title"]}>funcionalidades</h3>
                </div>
            }
        </div>
    );
}