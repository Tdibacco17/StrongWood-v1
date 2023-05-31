import styles from "./ContactComponent.module.scss"

export default function ContactComponent({
    handleSubmitEmail,
    nameRef,
    phoneRef,
    emailRef,
    directiongeRef,
    errorMessage
}: {
    handleSubmitEmail: (e: React.FormEvent<HTMLFormElement>) => void,
    nameRef: React.RefObject<HTMLInputElement>,
    phoneRef: React.RefObject<HTMLInputElement>,
    emailRef: React.RefObject<HTMLInputElement>,
    directiongeRef: React.RefObject<HTMLInputElement>,
    errorMessage: string
}) {

    return (
        <div className={styles["container-section-contact"]}>

            <form onSubmit={handleSubmitEmail} className={styles["container-form"]}>
                <label className={styles["form-group"]}>
                    <p className={styles["form-text"]}>Nombre</p>
                    <input
                        className={styles["form-input"]}
                        type="text" name="name" ref={nameRef} />
                </label>
                <label className={styles["form-group"]}>
                    <p className={styles["form-text"]}>Telefono</p>
                    <input
                        className={styles["form-input"]}
                        type="text" name="phone" ref={phoneRef} />
                </label>
                <label className={styles["form-group"]}>
                    <p className={styles["form-text"]}>Email</p>
                    <input
                        className={styles["form-input"]}
                        type="text" name="email" ref={emailRef} />
                </label>
                <label className={styles["form-group"]}>
                    <p className={styles["form-text"]}>Dirección</p>
                    <input
                        className={styles["form-input"]}
                        type="text" name="direction" ref={directiongeRef} />
                </label>
                <p className={styles["form-text"]}></p>
                <button
                    className={styles["form-button"]}
                    type="submit">Enviar</button>
                {errorMessage && <p className={styles["form-error"]}>{errorMessage}</p>}
            </form>
        </div>
    )
}