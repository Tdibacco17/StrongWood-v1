import LayoutComponent from "@/layout/LayoutComponent";
import { ProductDetailProvider } from "@/context/ProductDetailProvider";
import DetailProductContainer from "@/containers/DetailProductContainer/DetailProductContainer";

export default function ProductDetail() {

    return (
        <LayoutComponent isSlider={false}>
            <ProductDetailProvider>
                <DetailProductContainer />
            </ProductDetailProvider>
        </LayoutComponent>
    );
};