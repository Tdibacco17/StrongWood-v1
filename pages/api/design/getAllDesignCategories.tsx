import { NextApiRequest, NextApiResponse } from "next";

const getAllDesignCategories = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const dataModule = await import("@/models/design");
        const designCategorieData = dataModule.designData;

        res.status(200).json({
            success: true,
            error: false,
            data: designCategorieData,
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong when querying the API",
            success: false,
            error: true,
        });
    }
};

export default getAllDesignCategories;