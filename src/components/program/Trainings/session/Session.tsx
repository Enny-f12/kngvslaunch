'use client';
import React from 'react';
import styles from './Session.module.css';

// =================================================================================
// --- TrainingGallerySection Component ---
// This component displays a gallery of training session photos and a call-to-action button.
// =================================================================================

const galleryImages = [
    'https://placehold.co/300x250/a3e635/FFFFFF?text=Session+1',
    'https://placehold.co/300x250/86efac/FFFFFF?text=Session+2',
    'https://placehold.co/300x250/4ade80/FFFFFF?text=Session+3',
    'https://placehold.co/300x250/22c55e/FFFFFF?text=Session+4',
    'https://placehold.co/300x250/16a34a/FFFFFF?text=Session+5',
    'https://placehold.co/300x250/15803d/FFFFFF?text=Session+6',
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
                        <img 
                            src={src} 
                            alt={`Volunteer training session photo ${index + 1}`}
                            onError={(e) => { e.currentTarget.src = 'https://placehold.co/300x250/cccccc/FFFFFF?text=Error'; }}
                        />
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
