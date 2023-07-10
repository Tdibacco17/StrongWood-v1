import ContactProductComponent from "@/components/ContactProductComponent/ContactProductComponent";
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ContactProductDataInterface, ProductsDataContextInterface } from "@/types/Interfaces";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";

export default function ContactProductContainer({
    slug, pay
}: {
    slug: string | undefined,
    pay: string | undefined
}) {

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

    const [selectedPayment, setSelectedPayment] = useState<string>("");
    const [isSelect, setIsSelect] = useState<boolean>(false)
    const [isModal, setIsModal] = useState<boolean>(false)

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
            }, 4000)
            return;
        }

        let data: ContactProductDataInterface = {
            name: nameRef.current?.value || "No se paso un nombre",
            phone: phoneRef.current?.value || "No se paso un telefono",
            email: emailRef.current?.value || "No se paso un email",
            direction: directiongeRef.current?.value || "No se paso una dirección",
            product: slug || "No se paso un producto",
            pay: selectedPayment !== "" ? selectedPayment : (pay || "No se pasó un método de pago"),
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
                setErrorMessage("")
                setIsModal(true)
                setTimeout(() => {
                    setIsModal(false)
                    router.push("/")
                }, 1500)
            } else {
                console.log("Error al enviar el correo electrónico");
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
    />
}