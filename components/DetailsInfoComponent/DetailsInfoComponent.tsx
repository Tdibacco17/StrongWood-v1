import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ProductsDataContextInterface } from "@/types/Interfaces";
import { useContext, useRef } from "react";
import styles from "./DetailsInfoComponent.module.scss"
import Image from "next/image";

export default function DetailsInfoComponent() {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const directiongeRef = useRef<HTMLInputElement>(null);
    const productgeRef = useRef<HTMLInputElement>(null);

    const handleSubmitEmail = async (e: any) => {
        e.preventDefault();

        let data = {
            name: "tomas", // nameRef.current?.value,
            phone: "tomas",//phoneRef.current?.value,
            email: "tomas", //emailRef.current?.value,
            direction: "tomas",// directiongeRef.current?.value,
            product: "tomas", //productgeRef.current?.value,
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Accept": "application/json, text/plain",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.status === 200) {
                console.log("Email enviado con éxito");
            } else {
                console.log("Error al enviar el correo electrónico");
            }
        } catch (error) {
            console.log("Error al enviar el correo electrónico:", error);
        }
    }

    console.log(productData)
    return (
        <div className={styles["container-section-info"]}>
            <div className={styles["container-info"]}>
                <h1 className={styles["product-title"]}>{productData?.title}</h1>
                {
                    productData?.price &&
                    <p className={styles["product-price"]}>
                        <span className={styles["info-price"]}>
                            {`Precio: $ ${productData?.price}`}
                        </span>
                    </p>
                }
                {
                    productData?.offerPrice &&
                    <p className={styles["product-price"]}>
                        <span className={styles["info-offerPrice"]}>
                            {`Precio en oferta: $ ${productData?.offerPrice}`}
                        </span>
                    </p>
                }
            </div>
            <div className={styles["container-buttons-method"]}>
                {
                    productData?.detail?.payment?.cash?.price &&
                    <div className={styles["button-method"]}>
                        <p className={styles["title"]}>Abonando en Efectivo</p>
                        <button
                            // onClick={handleSubmitEmail}
                            className={styles["button"]}>
                            <Image
                                src="/assets/icons/wallet.svg"
                                alt="Icono Billetera"
                                width={20}
                                height={20}
                            />
                            {/* <p className={styles["btn-price"]}>{`$ ${productData.detail.payment.cash.price}`}</p> */}
                            <p className={styles["btn-price"]}>{`$ ${productData.detail.payment.cash.offerPrice}`}</p>
                        </button>
                    </div>
                }
                {
                    productData?.detail?.payment?.card?.price &&
                    <div className={styles["button-method"]}>
                        <p className={styles["title"]}>Abonando en Tarjeta</p>
                        <button className={styles["button"]}>
                            <Image
                                src="/assets/icons/creditCard.svg"
                                alt="Icono Tarjeta"
                                width={20}
                                height={20}
                            />
                            {/* <p className={styles["btn-price"]}>{`$ ${productData.detail.payment.card.price}`}</p> */}
                            <p className={styles["btn-price"]}>{`$ ${productData.detail.payment.card.offerPrice}`}</p>
                        </button>
                    </div>
                }
            </div>
            <style jsx>
                {`
               .${styles["product-price"]} .${styles["info-price"]} {
                    ${productData?.offerPrice ? "text-decoration: line-through;" : ""}    
                    }
                `}
            </style>
        </div>
    )
}