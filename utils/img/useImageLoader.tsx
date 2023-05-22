import { useState, useEffect } from 'react';

const useImageLoader = (imgSrc: string) => {
    const [loading, setLoading] = useState<Boolean>(true);

    useEffect(() => {
        const image = new Image();
        image.src = imgSrc;
        image.onload = () => {
            setLoading(false);
        };

        return () => {
            image.onload = null;
        };
    }, [imgSrc]);

    return loading;
};

export default useImageLoader;