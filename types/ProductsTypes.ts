export interface ProjectsDataContextInterface {
    projectsData?: ProjectDataInterface;
    handleProjectDataChange?: Function;
    projectData?: ProjectInterface;
}

export interface ProjectDataInterface {
    [id: string]: ProjectInterface;
}

export interface ProjectInterface {
    title: string;
    image: string;
    textNumber: string;
    projectSlug: string;
    year: string;
    location: string;
    detail: {
        portraitImg: ImgDataInterface;
        technicalInfo: TechnicalInfoInterface;
        firstTwoSmallImg: TwoSmallImgType[];
        secondTwoSmallImg: TwoSmallImgType[];
        optionalProjectLogo: ImgDataInterface;
    };
}

export interface ImgDataInterface {
    imgSrc: string;
    imgAlt: string;
    imgProportionsX?: number;
    imgProportionsY?: number;
}

export interface TechnicalInfoInterface {
    title: string;
    description: string;
    footer: {
        architects: { name: string }[];
        proposalType: string;
        year: string;
        location: string;
    };
    blueprintInfo?: ImgDataInterface;
}

export type TwoSmallImgType = { imgSrc: string; imgAlt: string };
