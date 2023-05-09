import HomeComponent from "@/components/HomeComponent/HomeComponent";
import LayoutComponent from "@/layout/LayoutComponent";

export default function HomePage() {
  return (
    <LayoutComponent isSlider={true} >
      <HomeComponent />
    </LayoutComponent>
  )
}