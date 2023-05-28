import LayoutComponent from "@/layout/LayoutComponent";
import { ProductDetailProvider } from "@/context/ProductDetailProvider";
import DetailsProductContainer from "@/containers/DetailsProductContainer/DetailsProductContainer";

export default function ProductDetail() {

    return (
        <LayoutComponent isSlider={false} isBack={true}>
            <ProductDetailProvider>
                <DetailsProductContainer />
            </ProductDetailProvider>
        </LayoutComponent>
    );
};