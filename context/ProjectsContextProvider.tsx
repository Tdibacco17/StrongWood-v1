
import { ProjectDataInterface, ProjectsDataContextInterface } from "@/types/ProductsTypes";
import { ReactNode, createContext, useState } from "react";

export const ProjectsContext = createContext<ProjectsDataContextInterface | {}>(
    {}
);

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
    const [projectsData, setProjectsData] = useState<ProjectDataInterface>({});

    const handleProjectDataChange = (projectData: ProjectDataInterface) => {
        console.log("[SETTING]", projectData);

        setProjectsData(projectData);
    };

    return (
        <ProjectsContext.Provider
            value={{ projectsData, handleProjectDataChange }}
        >
            {children}
        </ProjectsContext.Provider>
    );
};
