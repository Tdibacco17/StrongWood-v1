import HomeContainer from "@/containers/HomeContainer/HomeContainer";
import { HomeProvider } from "@/context/HomeProvider";
import LayoutComponent from "@/layout/LayoutComponent";

export default function HomePage() {
  return (
    <LayoutComponent isSlider={true} >
      <HomeProvider>
        <HomeContainer />
      </HomeProvider>
    </LayoutComponent>
  )
}