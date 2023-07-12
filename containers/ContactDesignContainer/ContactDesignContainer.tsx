import ContactDesignComponent from "@/components/ContactDesignComponent/ContactDesignComponent";
import { ContactContext } from "@/context/ContactContextProvider";
import { ContactDataContextInterface, ContactDesignDataInterface } from "@/types/Interfaces";
import { useRouter } from "next/router";
import { useContext, useRef, useState } from "react";

export default function ContactDesignContainer({
    slug,
    item
}: {
    slug: string | undefined,
    item: string | undefined,
}) {

    const router = useRouter();

    const { infoFurniture } = useContext(
        ContactContext
    ) as ContactDataContextInterface;

    const [selectedPayment, setSelectedPayment] = useState<string>("");
    const [isSelect, setIsSelect] = useState<boolean>(false)
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isCheck, setIsCheck] = useState<boolean>(true);
    const [textModal, setTextModal] = useState<string>("");
    const [loadingText, setLoadingText] = useState<boolean>(false);

    const selectRef = useRef<HTMLSelectElement | null>(null);

    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const directiongeRef = useRef<HTMLInputElement>(null);
    const [errorMessage, setErrorMessage] = useState<string>("");
    
    const handlePaymentChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        if (event.target.value === "Efectivo" || event.target.value === "Tarjeta") {
            setIsSelect(true);
        } else {
            setIsSelect(false);
        }

        setSelectedPayment(event.target.value);
    };

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
        if (selectedPayment === "") {
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

        let dataDesign: ContactDesignDataInterface = {
            name: nameRef.current?.value || "No se paso un nombre",
            phone: phoneRef.current?.value || "No se paso un telefono",
            email: emailRef.current?.value || "No se paso un email",
            direction: directiongeRef.current?.value || "No se paso una dirección",
            selections: {
                designTitle: infoFurniture.designTitle,
                designItem: infoFurniture.designItem,
                cardData: Object.values(infoFurniture.data)
            },
            payment: selectedPayment !== "" ? selectedPayment : "No se pasó un método de pago",
        };
        try {
            const response = await fetch("/api/contact/design", {
                method: "POST",
                headers: {
                    // "Accept": "application/json, text/plain",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataDesign),
            });

            if (response.status === 200) {
                setErrorMessage("")
                setTextModal("Email enviado con éxito")
                setIsModal(true);
                setIsCheck(true)
                setTimeout(() => {
                    setLoadingText(false);
                    setLoadingText(false);
                    setTextModal("");
                    setIsModal(false);
                    router.push("/");
                }, 2000)
            } else {
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

    return <ContactDesignComponent
        nameRef={nameRef}
        phoneRef={phoneRef}
        emailRef={emailRef}
        directiongeRef={directiongeRef}
        handleSubmitEmail={handleSubmitEmail}
        errorMessage={errorMessage}
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
