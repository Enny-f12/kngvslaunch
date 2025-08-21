import React from "react";
import styles from "./GalleryTwo.module.css";
import  Link  from "next/link";
import Image from "next/image";
const Gallery2022: React.FC = () => {
  const images: string[] = [
    "/images/1e195ee6-aa6e-4c9f-8a2f-b7161cc4af2d.jpg",
    "/images/83ecb95f-2ae3-4067-b23a-c6cd72717a8c.jpg",
    "/images/42495880-a67f-45f1-9796-97424c4402cd.jpg",
    "/images/d3dd1c93-c089-4fd7-befa-a03d75a43e18.jpg",
    "/images/3f6f8f5d-986f-49cf-abb6-012c5772e384.jpg",
    "/images/ebcabbe1-c5b4-4b12-98fd-08c4205d1edf.jpg",
    "/images/IMG-20220722-WA0051.jpg",
    "/images/IMG-20220815-WA0044.jpg",
    "/images/IMG-20240910-WA0034.jpg",
    "/images/IMG_20220902_111835.jpg",
    "/images/upload for report (4).jpg",
    "/images/upload for report.jpg",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Link href="/gallery">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
      </div>

      <div className={styles.categories}>
        <h3>2022</h3>
        <div className={styles.images}>
          {images.map((src, index) => (
            <Image key={index} src={src}
             alt={`2022 Gallery ${index + 1}`} 
             width={200} 
        height={200}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery2022;
