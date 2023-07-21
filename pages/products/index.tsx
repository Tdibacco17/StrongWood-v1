import ProductsContainer from "@/containers/ProductsContainer/ProductsContainer";
import LayoutComponent from "@/layout/LayoutComponent";

export default function ProductsPage() {
    return (
        <LayoutComponent  buttonBack={true} isSlider={false} urlBack={""}>
            <ProductsContainer />
        </LayoutComponent>
    )
}