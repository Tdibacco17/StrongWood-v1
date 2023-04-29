import useScrollPosition from "@/utils/scroll/useScrollPosition";
import styles from "./NavbarComponent.module.scss";
import { useEffect, useState } from "react";

export default function NavbarComponent() {
    const scrolledDown = useScrollPosition() === -80; // 80px === 5rem
    const [hidden, setHidden] = useState<boolean>(false);

    useEffect(() => {
        setHidden(scrolledDown);
    }, [scrolledDown]);

    return (
        <div className={`${styles["container-section-navbar"]} ${hidden ? styles.hidden : ""}`}>
            <h2 className={styles["title"]}>STRONG WOOD</h2>
        </div>
    );
}