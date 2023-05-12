import { useState } from "react";
import Image from "next/image";

type CustomImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
};

const CustomImage = ({ src, alt, sizes, className }: CustomImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={className}>
      {isLoading && (
        <img
          src="/loading.gif"
          alt="Loading"
          style={{ width: "100%", height: "100%" }}
        />
      )}
      <Image
        src={src}
        alt={alt}
        onLoad={handleLoad}
        style={{ display: isLoading ? "none" : "block" }}
        sizes={sizes || "(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"}
      />
    </div>
  );
};