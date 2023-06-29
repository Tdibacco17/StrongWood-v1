import styles from "./FurnitureComponent.module.scss"

export default function FurnitureComponent({ subcategorie }: { subcategorie: string | string[] }) {
    return (
        <div className={styles["container-section-furniture"]}>
            {subcategorie}
        </div>
    )
}