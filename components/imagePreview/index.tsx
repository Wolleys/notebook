import { FC } from "react";
import Image from "next/image";
import styles from "./imagepreview.module.css";

interface ImagePreviewProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImagePreview: FC<ImagePreviewProps> = ({ src, alt, width, height }) => {
  return (
    <figure className={styles.imageContainer}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles.image}
      />
    </figure>
  );
};

export default ImagePreview;
