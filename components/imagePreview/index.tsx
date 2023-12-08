import { FC } from "react";
import Image from "next/image";
import styles from "./imagepreview.module.css";
import { ImagePreviewProps } from "./ImagePreviewProps";

const ImagePreview: FC<ImagePreviewProps> = ({ imagePreview }) => {
  const { src, alt, width, height } = imagePreview;

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
