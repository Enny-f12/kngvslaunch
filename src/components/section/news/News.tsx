import React from "react";
import styles from "./News.module.css";
import Image from "next/image";
type NewsItem = {
  id: number;
  title: string;
  snippet: string;
  image: string;
  link: string;
};

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Annual Report",
    snippet: "Reports from two years of transforming learning through food and farming.",
    image: "/assets/news/istockphoto-1341785038-612x612.webp",
    link: "/blog/nutrition-garden-empowers-kids"
  },
  {
    id: 2,
    title: "Our Newsletter",
    snippet: "See highlights and testimonials from our most recent volunteer session.",
    image: "/assets/news/istockphoto-538052314-612x612.webp",
    link: "/blog/volunteer-training-recap"
  },
  {
    id: 3,
    title: "Our Gallery",
    snippet: "Discover vibrant moments from our programs — from gardens to classrooms to kitchens.",
    image: "/assets/news/KNGVS Pro_20240909_000336_1.png",
    link: "/blog/amplified-kitchen-project"
  }
];

const NewsSection: React.FC = () => {
  return (
    <section className={styles.newsSection}>
      <div className={styles.header}>
        <div className={styles.line}>
          <div id={styles.vertical_line}></div>
          <h2>Latest News and Reports</h2>
        </div>
        <p>Catch up on what`&apos;`s happening in our programs</p>
      </div>

      <div className={styles.grid}>
        {newsData.map((item) => (
          <div key={item.id} className={styles.card}>
            <Image src={item.image}
              alt={item.title}
              width={200}
              height={200} />
            <div className={styles.cardContent}>
              <h3>{item.title}</h3>
              <p>{item.snippet}</p>
              <a href={item.link}>Read More </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
