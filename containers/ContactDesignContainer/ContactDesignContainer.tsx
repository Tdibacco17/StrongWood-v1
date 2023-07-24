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
    const [loadingText, setLoadingText] = useState<boolean>(false);
    const [isNote, setIsNote] = useState<boolean>(false);
    const handleChangeIsNote = () => {
        setIsNote(!isNote);
    }

    const selectRef = useRef<HTMLSelectElement | null>(null);

    const nameRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const directiongeRef = useRef<HTMLInputElement>(null);
    const [noteRef, setNoteRef] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");

    const handleChangeNoteRef = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.target.value;
        setNoteRef(text);
    };
    
    const handlePaymentChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        if (event.target.value === "Efectivo" || event.target.value === "Tarjeta") {
            setIsSelect(true);
        } else {
            setIsSelect(false);
        }

        setSelectedPayment(event.target.value);
    };

    const handleValidation = () => {
        const regex = /^[0-9]+$/;

        if (
            nameRef.current?.value.trim() === "" ||
            phoneRef.current?.value.trim() === "" ||
            emailRef.current?.value.trim() === "" ||
            directiongeRef.current?.value.trim() === ""
        ) {
            setErrorMessage("Por favor, complete todos los campos.");
            return false;
        }

        if(phoneRef.current?.value && !(regex.test(phoneRef.current?.value.trim()))){
            setErrorMessage("Numero de telefono tiene que ser solo caracteres numericos.");
            return false;
        }

        if(phoneRef.current?.value && !(phoneRef.current?.value.length >= 8)){
            setErrorMessage("El número de teléfono no cumple con la longitud mínima.");
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
            }, 4000)
            return;
        }
        setLoadingText(true);

        let dataDesign: ContactDesignDataInterface = {
            name: nameRef.current?.value || "No se paso un nombre",
            phone: phoneRef.current?.value.trim() || "No se paso un telefono",
            email: emailRef.current?.value.trim() || "No se paso un email",
            direction: directiongeRef.current?.value || "No se paso una dirección",
            note: noteRef.trim().length > 0 ? noteRef.trim() : "No se paso una nota",
            selections: {
                designSlug: infoFurniture.designSlug,
                designItem: infoFurniture.designItem,
                cardData: Object.values(infoFurniture.data)
            },
            paymentMethod: selectedPayment !== "" ? selectedPayment : "No se pasó un método de pago",
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
                setIsModal(true);
                setIsCheck(true)
                setTimeout(() => {
                    setLoadingText(false);
                    setLoadingText(false);
                    setIsModal(false);
                    router.push("/");
                }, 2500)
            } else {
                setErrorMessage("")
                setIsModal(true);
                setIsCheck(false)
                setTimeout(() => {
                    setLoadingText(false);
                    setIsModal(false);
                    router.push("/");
                }, 2500)
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
        noteRef={noteRef}
        handleSubmitEmail={handleSubmitEmail}
        errorMessage={errorMessage}
        isSelect={isSelect}
        selectedPayment={selectedPayment}
        selectRef={selectRef}
        handlePaymentChange={handlePaymentChange}
        isModal={isModal}
        loadingText={loadingText}
        isCheck={isCheck}
        handleChangeIsNote={handleChangeIsNote}
        isNote={isNote}
        handleChangeNoteRef={handleChangeNoteRef}
    />
}
