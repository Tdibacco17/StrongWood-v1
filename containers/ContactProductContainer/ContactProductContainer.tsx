import ContactProductComponent from "@/components/ContactProductComponent/ContactProductComponent";
import { ProductDetailContext } from "@/context/ProductDetailProvider";
import { ContactProductDataInterface, ProductsDataContextInterface } from "@/types/Interfaces";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";

export default function ContactProductContainer({
    slug,
    pay,
    productPrice
}: {
    slug: string | undefined,
    pay: string | undefined,
    productPrice: string
}) {

    const router = useRouter();

    const { handleProductDataChange, productData } = useContext(
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
    const [loadingText, setLoadingText] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [isNote, setIsNote] = useState<boolean>(false);
    const handleChangeIsNote = () => {
        setIsNote(!isNote);
    }

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
    const [noteRef, setNoteRef] = useState<string>("");

    const handleChangeNoteRef = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.target.value;
        setNoteRef(text);
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

        if (phoneRef.current?.value && !(regex.test(phoneRef.current?.value.trim()))) {
            setErrorMessage("Numero de telefono tiene que ser solo caracteres numericos.");
            return false;
        }

        if (phoneRef.current?.value && !(phoneRef.current?.value.length >= 8)) {
            setErrorMessage("El número de teléfono no cumple con la longitud mínima.");
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
        setLoadingText(true);

        let data: ContactProductDataInterface = {
            name: nameRef.current?.value || "No se paso un nombre",
            phone: phoneRef.current?.value.trim() || "No se paso un telefono",
            email: emailRef.current?.value.trim() || "No se paso un email",
            direction: directiongeRef.current?.value || "No se paso una dirección",
            note: noteRef.trim().length > 0 ? noteRef.trim() : "No se paso una nota",
            product: productData?.title || "No se paso un producto",
            paymentMethod: selectedPayment !== "" ? selectedPayment : (pay || "No se pasó un método de pago"),
            price: selectedPayment !== "" ?
                (selectedPayment === "Efectivo" ? productData?.detail?.payment?.cash.offerPrice ?? ""
                    : productData?.detail?.payment?.card.offerPrice ?? ""
                ) : productPrice
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
                setErrorMessage("")
                setIsModal(true);
                setIsCheck(true)
                setTimeout(() => {
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

    return <ContactProductComponent
        nameRef={nameRef}
        phoneRef={phoneRef}
        emailRef={emailRef}
        directiongeRef={directiongeRef}
        noteRef={noteRef}
        handleSubmitEmail={handleSubmitEmail}
        errorMessage={errorMessage}
        pay={pay}
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