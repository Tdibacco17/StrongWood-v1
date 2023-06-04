import { useContext, useState } from "react";
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
    pago
}: {
    handleSubmitEmail: (e: React.FormEvent<HTMLFormElement>) => void,
    nameRef: React.RefObject<HTMLInputElement>,
    phoneRef: React.RefObject<HTMLInputElement>,
    emailRef: React.RefObject<HTMLInputElement>,
    directiongeRef: React.RefObject<HTMLInputElement>,
    errorMessage: string,
    pago: string | undefined
}) {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    const [selectedPayment, setSelectedPayment] = useState<string>(`${pago}`);

    const handlePaymentChange = (event: any) => {
        setSelectedPayment(event.target.value);
    };

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

                            <label className={styles["group-paymethod"]}>
                                <p className={styles["form-text"]}>Abona en: {pago}</p>
                                <select
                                    value={selectedPayment}
                                    onChange={handlePaymentChange}
                                    className={styles["select-paymethod"]}
                                >
                                    <option value="cambiar">
                                        cambiar
                                    </option>
                                    <option value={pago}>
                                        {pago === "Efectivo" ? "Tarjeta" : "Efectivo"}
                                    </option>
                                </select>
                            </label>
                            
                        </div>

                        <button className={styles["form-button"]} type="submit">Enviar</button>

                        {errorMessage && <p className={styles["form-error"]}>{errorMessage}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}