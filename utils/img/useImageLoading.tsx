import { useEffect, useState } from "react";

const useImageLoading = (imageUrl: string): boolean => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        const image = new window.Image();
        image.src = imageUrl;
        image.onload = () => {
            setLoading(false);
        };

        return () => {
            image.onload = null;
        };
    }, [imageUrl]);

    return loading;
};

export default useImageLoading;