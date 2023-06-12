import { NextApiRequest, NextApiResponse } from "next";

const getDesignBySlug = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { slug } = req.query;
        
        if (!slug) {
            res.status(500).json({
                message: "Something went wrong when querying the API",
                success: false,
                error: true,
            });
        }

        const dataModule = await import("@/models/design");
        const designData = dataModule.designData[slug as string];

        res.status(200).json({
            success: true,
            error: false,
            data: designData,
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong when querying the API",
            success: false,
            error: true,
        });
    }
};

export default getDesignBySlug;
