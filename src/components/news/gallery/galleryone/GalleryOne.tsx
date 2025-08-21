import React from "react";
import styles from "./GalleryOne.module.css";
import Link  from "next/link";
import Image from "next/image";
const Gallery2021: React.FC = () => {
  const images = [
    "/images/IMG-20210710-WA0001.jpg",
    "/images/IMG-20210716-Creativity in our nutri-kitchen for health and enjoyment.jpg",
    "/images/IMG-20210813-WA0041.jpg",
    "/images/IMG_20210813_152448.jpg",
    "/images/IMG_20210817_111006.jpg",
    "/images/IMG_20210819_125306.jpg",
    "/images/IMG_20210817_132015.jpg",
    "/images/IMG_20210817_111641.jpg",
    "/images/IMG_20210810_112121.jpg",
    "/images/IMG-20210827-WA0018.jpg",
    "/images/IMG_20210813_152650.jpg",
    "/images/IMG_20210817_111457.jpg",
  ];

  return (
    <div className={styles.container}>
      {/* Back Button */}
      <div className={styles.heading}>
        <Link href="/gallery">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>

      {/* Gallery */}
      <div className={styles.categories}>
        <h3>2021</h3>
        <div className={styles.images}>
          {images.map((src, index) => (
            <Image key={index} src={src} 
            alt={`Gallery 2021 - ${index + 1}`}
            width={200} 
        height={200} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery2021;
