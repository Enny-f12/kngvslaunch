import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft } from 'react-icons/fa'; // Using react-icons for the arrow
import styles from './Wfdtwo.module.css';

// --- Data for the component ---
// This could also be passed in as props
const schoolsVisited = [
  'Kings and Queens Primary School, Ashi, Ibadan - 46 pupils and 10 teachers',
  'Bumble Bee Elementary School, new Bodija, Ibadan - 50 pupils and 7 teachers',
  'VASTAB Mega Primary School, old Bodija Ibadan - 75 pupils and 10 teachers',
  'Tekhols Primary School, Bashorun Ibadan - 40 pupils and 7 teachers',
];

const photoGalleryImages = [
  '/images/KNGVS Pro_20241223_083343_1.png',
  '/images/KNGVS Pro_20241223_083218_1.png',
  '/images/KNGVS Pro_20241223_083340_1.png',
  '/images/KNGVS Pro_20241223_083400_1.png',
  '/images/KNGVS Pro_20241223_083410_1.png',
  '/images/KNGVS Pro_20241223_083316_1.png',
  '/images/KNGVS Pro_20241223_083357_1.png',
  '/images/KNGVS Pro_20241223_083252_1.png',
];

// --- Component Definition ---
interface WfdEventPageProps {
  eventTitle?: string;
  backLinkHref?: string;
}

const WfdEventPage: React.FC<WfdEventPageProps> = ({
  eventTitle = 'World Food Day KNGVS Event',
  backLinkHref = '/wfd', // Default link for the back button
}) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.heading}>
        <Link href={backLinkHref} className={styles.backLink}>
          <FaArrowLeft />
        </Link>
        <h2>{eventTitle}</h2>
      </div>

      <div className={styles.schools}>
        <h3>Schools Visited</h3>
        <ul>
          {schoolsVisited.map((school, index) => (
            <li key={index}>{school}</li>
          ))}
        </ul>
      </div>

      <div className={styles.say}>
        <p>
          <em>
            By fostering awareness and encouraging a sense of responsibility
            towards water resources, we strive to contribute to a sustainable
            and food-secure future.
          </em>
        </p>
      </div>

      <div className={styles.photoSection}>
        <h2>Photo Splash: World Food Day Activities</h2>
        <div className={styles.photoGrid}>
          {photoGalleryImages.map((src, index) => (
            <div key={index} className={styles.photoWrapper}>
              <Image
                src={src}
                alt={`World Food Day Activity ${index + 1}`}
                width={500}
                height={500}
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WfdEventPage;
