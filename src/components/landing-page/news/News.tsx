import React from "react";
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
    link: "/blog/nutrition-garden-empowers-kids",
  },
  {
    id: 2,
    title: "Our Newsletter",
    snippet: "See highlights and testimonials from our most recent volunteer session.",
    image: "/assets/news/istockphoto-538052314-612x612.webp",
    link: "/blog/volunteer-training-recap",
  },
  {
    id: 3,
    title: "Our Gallery",
    snippet: "Discover vibrant moments from our programs — from gardens to classrooms to kitchens.",
    image: "/assets/news/KNGVS Pro_20240909_000336_1.png",
    link: "/blog/amplified-kitchen-project",
  },
];

const NewsSection: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto my-16 py-20 mt-10 md:mt-15 lg:mt-30 px-5 md:px-12 lg:px-8 ">
      {/* Header */}
      <div className="mb-10 text-left">
         <div className="flex items-start gap-4 mb-5 md:flex-row flex-col-reverse">
          <div className="w-10 md:w-1 h-1 md:h-10 bg-[#159c09]"></div>
         <h2 className="text-4xl md:text-5xl font-semibold">
            Latest News and Reports
          </h2>
        </div>
        <p className="text-lg md:text-xl leading-relaxed max-w-6xl">
          Catch up on what&apos;s happening in our programs
        </p>
      </div>

      {/* News Grid */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {newsData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={280}
              height={220}
              className="w-full h-[220px] object-cover"
            />
            <div className="p-5">
              <h3 className="text-xl md:text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="text-base text-gray-500 md:text-lg leading-relaxed max-w-6xl">{item.snippet}</p>
              <a
                href={item.link}
                className="text-green-600 mt-4 font-normal transition-all duration-300 hover:text-green-800 hover:underline hover:scale-105 inline-block"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
