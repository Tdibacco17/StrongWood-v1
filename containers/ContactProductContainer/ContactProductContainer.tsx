import ContactProductComponent from "@/components/ContactProductComponent/ContactProductComponent";
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ContactProductDataInterface, ProductsDataContextInterface } from "@/types/Interfaces";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";

export default function ContactProductContainer({
    slug,
    pay
}: {
    slug: string | undefined,
    pay: string | undefined
}) {
    console.log(pay, "paymentMethod")
    const router = useRouter();

    const { handleProductDataChange } = useContext(
        ProductDetailContext
    ) as ProductsDataContextInterface;

    useEffect(() => {
        if (slug) {
            const fetchData = async () => {
                if (handleProductDataChange) {
                    const rawData = await fetch(
                        `/api/products/getProductBySlug?slug=${slug}`
                    );
                    const parsedData = await rawData.json();
                    if (parsedData.error) {
                        return;
                    }

                    handleProductDataChange &&
                        handleProductDataChange(parsedData.data);
                }
            };

            fetchData();
        }
    }, [slug]);

    const [selectedPayment, setSelectedPayment] = useState<string>(pay ? pay : "");
    const [isSelect, setIsSelect] = useState<boolean>(false)
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isCheck, setIsCheck] = useState<boolean>(true);
    const [textModal, setTextModal] = useState<string>("");
    const [loadingText, setLoadingText] = useState<boolean>(false);

    const handlePaymentChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        if (event.target.value === "Efectivo" || event.target.value === "Tarjeta") {
            setIsSelect(true);
        } else {
            setIsSelect(false);
        }

        setSelectedPayment(event.target.value);
    };

    const selectRef = useRef<HTMLSelectElement | null>(null);

    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const directiongeRef = useRef<HTMLInputElement>(null);

    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleValidation = () => {
        if (
            nameRef.current?.value.trim() === "" ||
            phoneRef.current?.value.trim() === "" ||
            emailRef.current?.value.trim() === "" ||
            directiongeRef.current?.value.trim() === ""
        ) {
            setErrorMessage("Por favor, complete todos los campos.");
            return false;
        }
        if ((selectedPayment === "" && pay === "") ||
            selectedPayment === "" && (pay && pay !== "Efectivo" && pay !== "Tarjeta")) {
            setErrorMessage("Por favor, seleccione un método de pago.");
            return false;
        }

        return true;
    };

    const handleSubmitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!handleValidation()) {
            setTimeout(() => {
                setErrorMessage("")
            }, 2000)
            return;
        }
        setLoadingText(true);

        let data: ContactProductDataInterface = {
            name: nameRef.current?.value || "No se paso un nombre",
            phone: phoneRef.current?.value || "No se paso un telefono",
            email: emailRef.current?.value || "No se paso un email",
            direction: directiongeRef.current?.value || "No se paso una dirección",
            product: slug || "No se paso un producto",
            payment: selectedPayment !== "" ? selectedPayment : (pay || "No se pasó un método de pago"),
        };
        try {
            const response = await fetch("/api/contact/product", {
                method: "POST",
                headers: {
                    // "Accept": "application/json, text/plain",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.status === 200) {
                console.log("Email enviado con éxito");
                setErrorMessage("")
                setTextModal("Email enviado con éxito")
                setIsModal(true);
                setIsCheck(true)
                setTimeout(() => {
                    setLoadingText(false);
                    setTextModal("");
                    setIsModal(false);
                    router.push("/");
                }, 2000)
            } else {
                console.log("Error al enviar el correo electrónico");
                setErrorMessage("")
                setTextModal("Error al enviar el email")
                setIsModal(true);
                setIsCheck(false)
                setTimeout(() => {
                    setLoadingText(false);
                    setTextModal("");
                    setIsModal(false);
                    router.push("/");
                }, 2000)
            }
        } catch (error) {
            console.log("Error al enviar el correo electrónico:", error);
        }
    }

    return <ContactProductComponent
        nameRef={nameRef}
        phoneRef={phoneRef}
        emailRef={emailRef}
        directiongeRef={directiongeRef}
        handleSubmitEmail={handleSubmitEmail}
        errorMessage={errorMessage}
        pay={pay}
        isSelect={isSelect}
        selectedPayment={selectedPayment}
        selectRef={selectRef}
        handlePaymentChange={handlePaymentChange}
        isModal={isModal}
        textModal={textModal}
        loadingText={loadingText}
        isCheck={isCheck}
    />
}