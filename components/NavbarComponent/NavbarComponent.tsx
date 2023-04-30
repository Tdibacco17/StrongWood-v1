import { useScrollPosition, NAVBAR_HEIGHT } from "@/utils/scroll/useScrollPosition";
import styles from "./NavbarComponent.module.scss";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function NavbarComponent({ isHomePage }: { isHomePage: Boolean }) {

    const { isScrolled, isAtTop, scrollPosition } = useScrollPosition() // 80px === 5rem
    const hiddenRef = useRef<boolean>(false);

    useEffect(() => {
        hiddenRef.current = isScrolled === -NAVBAR_HEIGHT;
    }, [isScrolled]);

    // console.log("[scrollPosition] :", scrollPosition);
    // console.log("[isAtTop] :", isAtTop);
    return (
        <div
            className={`
            ${styles["container-section-navbar"]} 
            ${hiddenRef.current ? styles["hidden"] : ""} 
            ${isHomePage ?
                    isAtTop ? styles["isTransparency"] : styles["isDark"]
                    : styles["isOtherSection"]
                }
            `}>
            <Link href={"/"}>
                <h2 className={styles["title"]}>STRONG WOOD</h2>
            </Link>
        </div>
    );
}