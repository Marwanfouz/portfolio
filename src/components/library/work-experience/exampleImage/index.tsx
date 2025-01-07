import React from "react";
import Image from "next/image";

import styles from "./exampleImage.module.scss";

type ExampleImageProps = {
  imagePath: string;
  alt: string;
  caption?: string;
};

const ExampleImage: React.FC<ExampleImageProps> = ({
  imagePath,
  alt,
  caption,
}) => {
  return (
    <div className={styles.exampleContainer}>
      <div className={styles.projectImageContainer}>
        <Image src={imagePath} alt={alt} fill />
      </div>
      <span>{caption}</span>
    </div>
  );
};

export default ExampleImage;
