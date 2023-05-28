import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ProductsDataContextInterface } from "@/types/Interfaces";
import { useContext } from "react";
import styles from "./DetailsInfoComponent.module.scss"
import Image from "next/image";

export default function DetailsInfoComponent() {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

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
                        <button className={styles["button"]}>
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