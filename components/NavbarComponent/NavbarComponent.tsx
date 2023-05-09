import { useScrollPosition, NAVBAR_HEIGHT } from "@/utils/scroll/useScrollPosition";
import styles from "./NavbarComponent.module.scss";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function NavbarComponent({ isSlider }: { isSlider: Boolean }) {

    const { isScrolled, isAtTop } = useScrollPosition() // 64px === 5rem
    const hiddenRef = useRef<boolean>(false);

    useEffect(() => {
        hiddenRef.current = isScrolled === -NAVBAR_HEIGHT;
    }, [isScrolled]);

    return (
        <div className={`${styles['container-section-navbar']} ${hiddenRef.current ? styles["hidden"] : ""}`}>
            <div className={`
                    ${styles['container-primary-nav']}
                    ${isSlider ?
                    isAtTop ? styles["isTransparency"] : styles["isDark"]
                    : styles["isOtherSection"]}
                `}>
                <Link href={"/"}>
                    <h2 className={styles["title"]}>STRONG WOOD</h2>
                </Link>
            </div>

            {
                !isSlider &&
                <div className={styles['container-secondary-nav']}>
                    <h2 className={styles["title"]}>funcionalidades</h2>
                </div>
            }
        </div>
    );
}