import LayoutComponent from "@/layout/LayoutComponent";
import { ProductDetailProvider } from "@/context/ProductDetailProvider";
import DetailsProductContainer from "@/containers/DetailProductContainer/DetailProductContainer";

export default function ProductDetail() {

    return (
        <LayoutComponent isSlider={false}>
            <ProductDetailProvider>
                <DetailsProductContainer />
            </ProductDetailProvider>
        </LayoutComponent>
    );
};