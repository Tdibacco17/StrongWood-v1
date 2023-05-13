import { NextApiRequest, NextApiResponse } from "next";

const getInfoHome = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const dataModule = await import("@/models/home");
        const projectData = dataModule.homeData;

        res.status(200).json({
            success: true,
            error: false,
            data: { ...projectData },
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong when querying the API",
            success: false,
            error: true,
        });
    }
};

export default getInfoHome;
