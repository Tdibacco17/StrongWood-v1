import { useScrollPosition, NAVBAR_HEIGHT } from "@/utils/scroll/useScrollPosition";
import styles from "./NavbarComponent.module.scss";
import { useEffect, useRef, useState } from "react";

export default function NavbarComponent() {
    const { isScrolled, isAtTop, scrollPosition } = useScrollPosition() // === -NAVBAR_HEIGHT; // 80px === 5rem
    const hiddenRef = useRef<boolean>(false);

    useEffect(() => {
        hiddenRef.current = isScrolled === -NAVBAR_HEIGHT;
    }, [isScrolled]);

    console.log("[scrollPosition] :", scrollPosition);
    console.log("[isAtTop] :", isAtTop);

    return (
        <div
            className={`${styles["container-section-navbar"]} ${hiddenRef.current ? styles["hidden"] : ""
                } ${isAtTop ? styles["isTransparency"] : styles["isBlackBackground"]}`}
        >
            <h2 className={styles["title"]}>STRONG WOOD</h2>
        </div>
    );
}