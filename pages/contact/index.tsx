import ContactContainer from "@/containers/ContactContainer/ContactContainer";
import LayoutComponent from "@/layout/LayoutComponent";
import { useRouter } from "next/router";


export default function ContactPage() {
    return (
        <LayoutComponent isSlider={false} urlBack={"/"} >
            contact page
        </LayoutComponent>
    )
}