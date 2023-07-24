import React, { useContext } from "react";
import styles from "./ContactProductComponent.module.scss"
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ProductsDataContextInterface } from "@/types/Interfaces";
import ContactProductImgComponent from "../ContactProductImgComponent/ContactProductImgComponent";
import ContactModalComponent from "../ContactModalComponent/ContactModalComponent";
import ContactNoteComponent from "../ContactNoteComponent/ContactNoteComponent";

export default function ContactProductComponent({
    handleSubmitEmail,
    nameRef,
    phoneRef,
    emailRef,
    directiongeRef,
    noteRef,
    errorMessage,
    pay,
    isSelect,
    selectedPayment,
    selectRef,
    handlePaymentChange,
    isModal,
    loadingText,
    isCheck,
    handleChangeIsNote,
    isNote,
    handleChangeNoteRef
}: {
    handleSubmitEmail: (e: React.FormEvent<HTMLFormElement>) => void,
    nameRef: React.RefObject<HTMLInputElement>,
    phoneRef: React.RefObject<HTMLInputElement>,
    emailRef: React.RefObject<HTMLInputElement>,
    directiongeRef: React.RefObject<HTMLInputElement>,
    noteRef: string,
    errorMessage: string,
    pay: string | undefined,
    isSelect: boolean,
    selectedPayment: string,
    selectRef: React.RefObject<HTMLSelectElement>;
    handlePaymentChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    isModal: boolean,
    loadingText: boolean,
    isCheck: boolean,
    handleChangeIsNote: () => void,
    isNote: boolean,
    handleChangeNoteRef: (event: React.ChangeEvent<HTMLTextAreaElement>) => void

}) {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    return (
        <div className={styles["container-section-contact"]}>
            {isModal && <ContactModalComponent check={isCheck} />}
            <div className={styles["container-colum-dividers"]}>
                <div className={`${styles["container-row-dividers"]} ${isNote ? styles["isBorderRadius"] : ""}`}>
                    <div className={styles["container-section-image"]}>
                        {productData &&
                            <ContactProductImgComponent
                                imgSrc={productData?.image?.imgSrc}
                                imgAlt={productData?.image?.imgAlt} />
                        }
                    </div>
                    <div className={styles["container-section-form"]}>
                        <p className={styles["form-title"]}>CONSULTAR</p>

                        <form onSubmit={handleSubmitEmail} className={styles["container-form"]}>
                            <div className={styles["form-divider"]}>
                                <div className={styles["divider"]}>
                                    <label className={styles["form-group"]}>
                                        <p className={styles["form-text"]}>Nombre</p>
                                        <input
                                            className={styles["form-input"]}
                                            required
                                            type="text" name="name" ref={nameRef} />
                                    </label>
                                    <label className={styles["form-group"]}>
                                        <p className={styles["form-text"]}>Telefono</p>
                                        <input
                                            className={styles["form-input"]}
                                            required
                                            type="text" name="phone" ref={phoneRef} />
                                    </label>
                                </div>
                                <div className={styles["divider"]}>
                                    <label className={styles["form-group"]}>
                                        <p className={styles["form-text"]}>Email</p>
                                        <input
                                            className={styles["form-input"]}
                                            required
                                            type="email" name="email" ref={emailRef} />
                                    </label>
                                    <label className={styles["form-group"]}>
                                        <p className={styles["form-text"]}>Dirección</p>
                                        <input
                                            className={styles["form-input"]}
                                            required
                                            type="text" name="direction" ref={directiongeRef} />
                                    </label>
                                </div>
                            </div>

                            <div className={styles["form-footer"]}>
                                <label className={styles["group-paymethod"]}>
                                    {
                                        !isSelect ?
                                            <p className={styles["form-text"]}>
                                                Abonar en {(pay && pay === "Efectivo" || pay === "Tarjeta") ? pay : ""}
                                            </p>
                                            : <p className={styles["form-text"]}>
                                                Abonar en {selectedPayment}
                                            </p>
                                    }
                                    <select
                                        onFocus={() => {
                                            if (selectRef.current) {
                                                selectRef.current.selectedIndex = -1;
                                            }
                                        }}
                                        ref={selectRef}
                                        value={selectedPayment}
                                        onChange={handlePaymentChange}
                                        className={styles["select-paymethod"]}>
                                        <option
                                            value={"Tarjeta"}
                                            className={styles["select-text"]}>
                                            Tarjeta
                                        </option>
                                        <option
                                            value={"Efectivo"}
                                            className={styles["select-text"]}>
                                            Efectivo
                                        </option>
                                    </select>
                                </label>
                                <button
                                    disabled={noteRef.trim().length > 0}
                                    className={styles["form-footer-btn"]}
                                    onClick={handleChangeIsNote}
                                    type="button">
                                    Agregar nota
                                </button>
                            </div>

                            <button className={styles["form-button"]} type="submit">
                                {loadingText ? "Cargando.." : "Enviar"}
                            </button>
                            <p className={styles["form-note"]}>Nos pondremos en contacto dentro de las proximias 72hs.</p>
                            {errorMessage && <p className={styles["form-error"]}>{errorMessage}</p>}
                        </form>
                    </div>
                </div>
                <div className={`${styles["contact-note-enter-active"]} ${isNote ? styles["show-note"] : styles["contact-note-exit"]}`}>
                    {isNote && <ContactNoteComponent handleChangeNoteRef={handleChangeNoteRef} />}
                </div>
            </div>
        </div>
    )
}