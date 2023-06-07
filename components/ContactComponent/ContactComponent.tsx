import { useContext, useRef, useState } from "react";
import styles from "./ContactComponent.module.scss"
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ProductsDataContextInterface } from "@/types/Interfaces";
import ContactProductImgComponent from "../ContactProductImgComponent/ContactProductImgComponent";

export default function ContactComponent({
    handleSubmitEmail,
    nameRef,
    phoneRef,
    emailRef,
    directiongeRef,
    errorMessage,
    pago,
    isSelect,
    selectedPayment,
    selectRef,
    handlePaymentChange
}: {
    handleSubmitEmail: (e: React.FormEvent<HTMLFormElement>) => void,
    nameRef: React.RefObject<HTMLInputElement>,
    phoneRef: React.RefObject<HTMLInputElement>,
    emailRef: React.RefObject<HTMLInputElement>,
    directiongeRef: React.RefObject<HTMLInputElement>,
    errorMessage: string,
    pago: string | undefined,
    isSelect: boolean,
    selectedPayment: string,
    selectRef: React.RefObject<HTMLSelectElement>;
    handlePaymentChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    return (
        <div className={styles["container-section-contact"]}>
            <div className={styles["container-row-dividers"]}>
                {productData &&
                    <ContactProductImgComponent imgSrc={productData?.image?.imgSrc} imgAlt={productData?.image?.imgAlt} />
                }
                <div className={styles["container-section-form"]}>
                    <h3 className={styles["form-title"]}>CONTACTO</h3>

                    <form onSubmit={handleSubmitEmail} className={styles["container-form"]}>
                        <div className={styles["form-divider"]}>
                            <div className={styles["divider"]}>
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
                            </div>
                            <div className={styles["divider"]}>
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
                            </div>
                        </div>

                        <label className={styles["group-paymethod"]}>
                            {
                                !isSelect ?
                                    <p className={styles["form-text"]}>
                                        Abona en {(pago && pago === "Efectivo" || pago === "Tarjeta") ? pago : ""}
                                    </p>
                                    : <p className={styles["form-text"]}>
                                        Abona en {selectedPayment}
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

                        <button className={styles["form-button"]} type="submit">Enviar</button>

                        {errorMessage && <p className={styles["form-error"]}>{errorMessage}</p>}
                    </form>
                </div>
            </div>
        </div >
    )
}