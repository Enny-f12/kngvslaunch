'use client';
import React from 'react';
import styles from './Session.module.css';
import Image from 'next/image';

const galleryImages = [
    

       '/assets/Program/training/IMG-20240723-WA0008.jpg',
       '/assets/Program/training/IMG-20240725-WA0061.jpg',
        '/assets/Program/training/IMG-20240725-WA0076.jpg',
        '/assets/Program/training/IMG-20240725-WA0066.jpg',
        '/assets/Program/training/IMG-20240725-WA0088.jpg',
        '/assets/Program/training/IMG-20240725-WA0083.jpg',
        '/assets/Program/training/IMG-20240725-WA0008.jpg',
        '/assets/Program/training/IMG-20240725-WA0044.jpg',
         '/assets/Program/training/IMG-20240726-WA0048.jpg',
        '/assets/Program/training/IMG-20240726-WA0037.jpg',
        '/assets/Program/training/IMG-20240725-WA0073.jpg',
        '/assets/Program/training/IMG-20240723-WA0014.jpg',
];

const TrainingGallerySection: React.FC = () => (
    <section className={`${styles.section} ${styles.trainingGallerySection}`}>
        <div className={styles.container}>
            <div className={styles.galleryHeader}>
                <h3>Our Training Sessions in Action</h3>
                <p>Volunteer training equips individuals with the necessary skills and knowledge to effectively contribute. It fosters teamwork, responsibility, and leadership, ensuring volunteers make a positive, lasting impact.</p>
            </div>
            <div className={styles.photoGrid}>
                {galleryImages.map((src, index) => (
                    <div key={index} className={styles.photoCard}>
                        <Image
                            src={src}
                            alt={`Volunteer training session photo ${index + 1}`}
                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/300x250/cccccc/FFFFFF?text=Error'; }}
                            width={200}
                            height={200} />
                    </div>
                ))}
            </div>
            <div className={styles.joinButtonContainer}>
                <a href="https://wa.me/+2348056014140" className={styles.joinButton} target="_blank" rel="noopener noreferrer">
                    Join Us
                </a>
            </div>
        </div>
    </section>
);

export default TrainingGallerySection;
