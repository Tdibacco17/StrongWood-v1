import { ContactDataContextInterface } from "@/types/Interfaces";
import styles from "./ContactDesignComponent.module.scss";
import { ContactContext } from "@/context/ContactContextProvider";
import { useContext } from "react";

export default function ContactDesignComponent({
    handleSubmitEmail,
    nameRef,
    phoneRef,
    emailRef,
    directiongeRef,
    errorMessage,
    isSelect,
    selectedPayment,
    selectRef,
    handlePaymentChange,
    isModal,
    textModal,
    loadingText
}: {
    handleSubmitEmail: (e: React.FormEvent<HTMLFormElement>) => void,
    nameRef: React.RefObject<HTMLInputElement>,
    phoneRef: React.RefObject<HTMLInputElement>,
    emailRef: React.RefObject<HTMLInputElement>,
    directiongeRef: React.RefObject<HTMLInputElement>,
    errorMessage: string,
    isSelect: boolean,
    selectedPayment: string,
    selectRef: React.RefObject<HTMLSelectElement>;
    handlePaymentChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    isModal: boolean,
    textModal: string,
    loadingText: boolean
}) {
    const { infoFurniture } = useContext(
        ContactContext
    ) as ContactDataContextInterface;
    return (
        <div className={styles["container-section-contact"]}>
            {/* {isModal && <ContactModalComponent textData={textModal} />} */}
            <div className={styles["container-row-dividers"]}>
                <div className={styles["container-section-image"]}>
                    {
                        Object.values(infoFurniture.data).map((item: any) => {
                            return item.map((subItem: any) => {
                                return JSON.stringify(subItem);
                            });
                        })
                        // JSON.stringify(Object.values(infoFurniture.data))
                    }
                </div>
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
                            <p className={styles["form-text"]}>
                                Abona en {selectedPayment}
                            </p>
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
                        {loadingText && <p className={styles["form-loading"]}>Cargando..</p>}
                        {errorMessage && <p className={styles["form-error"]}>{errorMessage}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}