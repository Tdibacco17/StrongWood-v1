import ImageComponent from "@/components/ImageComponent/ImageComponent";
import { ProjectsContext } from "@/context/ProjectsContextProvider";
import LayoutComponent from "@/layout/LayoutComponent";
import { ProjectsDataContextInterface } from "@/types/ProductsTypes";
import { useContext, useEffect } from "react";

export default function test() {

  const { projectsData } = useContext(
    ProjectsContext
  ) as ProjectsDataContextInterface;

  // useEffect(() => {
  //   console.log(projectsData);
  // }, [projectsData]);

  return (
    <LayoutComponent>
      <ImageComponent project={projectsData} />
    </LayoutComponent>
  )
}