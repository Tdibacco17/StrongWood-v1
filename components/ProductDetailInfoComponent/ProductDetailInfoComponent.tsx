import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ContactDataContextInterface, ProductsDataContextInterface } from "@/types/Interfaces";
import { useContext } from "react";
import styles from "./ProductDetailInfoComponent.module.scss"
import Image from "next/image";
import { useRouter } from "next/router";
import { ContactContext } from "@/context/ContactContextProvider";

export default function ProductDetailInfoComponent() {
    const { productData } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    const { setInfoProduct } = useContext(
        ContactContext
    ) as ContactDataContextInterface;

    const router = useRouter();

    const handleContactInfo = ({ productSlug, paymethod, productPrice }: { productSlug: string, paymethod: string, productPrice: string }) => {
        setInfoProduct({
            productSlug: productSlug,
            paymenMethod: paymethod,
            productPrice: productPrice
        })
        router.push("/contact/product");
    }

    return (
        <div className={styles["container-section-info"]}>
            <div className={styles["container-info"]}>
                <p className={styles["product-title"]}>{productData?.title}</p>
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
                            onClick={() => handleContactInfo({
                                productSlug: productData?.productSlug,
                                paymethod: "Efectivo",
                                productPrice: `$ ${productData?.detail?.payment?.cash.offerPrice}`
                            })}
                            className={styles["button"]}>
                            <Image
                                className={styles["image-btn"]}
                                src="/assets/icons/wallet.svg"
                                alt="Icono Billetera"
                                width={20}
                                height={20}
                                loading="lazy"
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
                        <button
                            onClick={() => handleContactInfo({
                                productSlug: productData?.productSlug,
                                paymethod: "Tarjeta",
                                productPrice: `$ ${productData?.detail?.payment?.card.offerPrice}`
                            })}
                            className={styles["button"]}>
                            <Image
                                className={styles["image-btn"]}
                                src="/assets/icons/creditCard.svg"
                                alt="Icono Tarjeta"
                                width={20}
                                height={20}
                                loading="lazy"
                            />
                            {/* <p className={styles["btn-price"]}>{`$ ${productData.detail.payment.card.price}`}</p> */}
                            <p className={styles["btn-price"]}>{`$ ${productData.detail.payment.card.offerPrice}`}</p>
                        </button>
                    </div>
                }
            </div>
            {/* <style jsx>
                {`
                .${styles["product-price"]} .${styles["info-price"]} {
                    ${productData?.offerPrice ?
                        `text-decoration: line-through;
                        color: var(--strong-bluegray-5);
                        ` :
                        `font-size: var(--strong-font-xxxmedium);
                        
                        @media (max-width: 768px) {
                            font-size: var(--strong-font-large);
                        }
                        
                        @media (max-width: 480px) {
                            font-size: var(--strong-font-xxmedium);
                        }`}    
                    }
                `}
            </style> */}
        </div >
    )
}