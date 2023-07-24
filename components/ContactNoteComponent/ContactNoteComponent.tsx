import styles from "./ContactNoteComponent.module.scss";

export default function ContactNoteComponent({ handleChangeNoteRef }: { handleChangeNoteRef: (event: React.ChangeEvent<HTMLTextAreaElement>) => void}) {

    return (
        <div className={`${styles["container-section-note"]}`}>
            <p className={styles["textarea-title"]}>Nota</p>
            <textarea
                placeholder="Agregar nota.."
                className={styles["form-textarea"]}
                onChange={handleChangeNoteRef}
            />
        </div>
    )
}