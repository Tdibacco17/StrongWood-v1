import { NextApiRequest, NextApiResponse } from "next";

const getAllProducts = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const dataModule = await import("@/models/products");
        const productData = dataModule.productsData;

        res.status(200).json({
            success: true,
            error: false,
            data: productData,
        });
    } catch (error) {
        res.status(500).json({
            message: "Something went wrong when querying the API",
            success: false,
            error: true,
        });
    }
};

export default getAllProducts;