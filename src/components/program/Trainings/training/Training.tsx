'use client';
import React from 'react';
import styles from './Training.module.css';
import Image from 'next/image';
// =================================================================================
// --- TrainingIntroSection Component ---
// This component displays the main text and image for the volunteer training section.
// =================================================================================
const TrainingIntroSection: React.FC = () => (
    <section className={`${styles.section} ${styles.trainingIntroSection}`}>
        <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Volunteer <span>Training</span></h2>
            <div className={styles.contentWrapper}>
                <div className={styles.textContainer}>
                    <h3>Garden-Based Learning and Nutrition Education</h3>
                    <p>At Kids Nutri Garden, we believe in empowering our volunteers. We offer comprehensive training focused on garden-based learning and nutrition education, equipping volunteers with practical techniques to integrate gardening into educational settings.</p>
                    <br />
                    <p>Through these hands-on workshops, volunteers learn to manage gardens, teach sustainable practices, and promote healthy eating habits, inspiring others to understand the link between nutrition and well-being.</p>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://placehold.co/400x450/34d399/FFFFFF?text=Training"
                        alt="A volunteer training session in a garden"
                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x450/cccccc/FFFFFF?text=Error'; }}

                        width={200}
                        height={200} />
                </div>
            </div>
        </div>
    </section>
);

export default TrainingIntroSection;
