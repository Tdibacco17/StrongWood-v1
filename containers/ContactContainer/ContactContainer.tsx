import ContactComponent from "@/components/ContactComponent/ContactComponent";
import { ContactProductDataInterface } from "@/types/Interfaces";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

export default function ContactContainer({ slug, pago }: { slug: string | undefined, pago: string | undefined }) {

    const router = useRouter()

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
            pago: pago || "No se paso un metodo de pago",
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
                // console.log("Email enviado con éxito");
                setErrorMessage("")
                router.push("/")
            } else {
                console.log("Error al enviar el correo electrónico");
            }
        } catch (error) {
            console.log("Error al enviar el correo electrónico:", error);
        }
    }

    return <ContactComponent
        nameRef={nameRef}
        phoneRef={phoneRef}
        emailRef={emailRef}
        directiongeRef={directiongeRef}
        handleSubmitEmail={handleSubmitEmail}
        errorMessage={errorMessage} />
}