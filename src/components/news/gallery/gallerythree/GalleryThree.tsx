import React from "react";
import styles from "./GalleryThree.module.css";
import Link from "next/link";

const Gallery2023: React.FC = () => {
  const images: string[] = [
    "/images/DSC_1517.jpg",
    "/images/IMG-20230822-WA0169.jpg",
    "/images/IMG-20230822-WA0036.jpg",
    "/images/IMG-20230822-WA0142.jpg",
    "/images/IMG-20230822-WA0144.jpg",
    "/images/IMG-20230822-WA0189.jpg",
    "/images/IMG-20230822-WA0179.jpg",
    "/images/20230823_105844.jpg",
    "/images/20230823_115116.jpg",
    "/images/20230823_124223.jpg",
    "/images/IMG-20230822-WA0166.jpg",
    "/images/IMG-20230822-WA0143.jpg",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Link href="/gallery">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>

      <div className={styles.categories}>
        <h3>2023</h3>
        <div className={styles.images}>
          {images.map((src, index) => (
            <img key={index} src={src} alt={`2023 Gallery ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery2023;
