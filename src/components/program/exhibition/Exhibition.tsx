import React from 'react';
import styles from './Exhibition.module.css';
import Image from 'next/image';
// --- Data for the component ---
const highlightsData = {
    title: "Exhibition Highlights",
    description: "The event featured cook-with-me contests (parent and child pair) between partner schools and was supported by Golden Penny Foods. There were creative presentations, experience sharing, anthropometry checks, sales of veggies from kids’ nutri-garden, games, and a raffle draw with attractive prizes.",
    images: [
        '/assets/Program/exhibition/IMG-20240910-WA0011.jpg',
        '/assets/Program/exhibition/IMG-20240910-WA0012.jpg',
        '/assets/Program/exhibition/IMG-20240910-WA0013.jpg',
        '/assets/Program/exhibition/IMG-20240910-WA0014.jpg',
        '/assets/Program/exhibition/IMG-20240910-WA0015.jpg',
        '/assets/Program/exhibition/IMG-20240910-WA0016.jpg',
    ]
};

const attendanceData = {
    title: "Distinguished Guests",
    description: "Distinguished guests included Prof. Oluyemisi Bamgbose (DVC RISP), Prof. Olayinka Omigbodun (Provost COMUI), Prof. A.F. Adeniyi, Dr. Oluyemisi Folasire, Prof. Oyedunni Arulogun, Deans of FPH and Agriculture, educators, parents, alumni, and over 150 attendees.",
    images: [
        '/assets/Program/exhibition/KNGVS Pro_20240910_120233_1.png',
        '/assets/Program/exhibition/KNGVS Pro_20240910_120237_1.png',
        '/assets/Program/exhibition/KNGVS Pro_20240910_120240_1.png',
    ]
};


// =================================================================================
// --- Exhibition Component ---
// =================================================================================
const Exhibition: React.FC = () => {
    return (
        <>


            <div className={styles.exhibitionWrapper}>
                {/* --- Hero Section --- */}
                <section className={styles.heroSection}>
                    <Image
                        src="/assets/Program/exhibition/KNGVS Pro_20240910_151717_1.png"
                        alt="A vibrant and fun exhibition day"
                        className={styles.heroBackground}
                        width={200}
                        height={200}
                    />
                    <div className={styles.heroOverlay}></div>
                    <div className={styles.heroContent}>
                        <h1>Grow It, Cook It, Love It</h1>
                        <p>Our Annual Public Exhibition and Fun Day</p>
                    </div>
                </section>

                {/* --- Intro Section --- */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>A Grand <span>Show-and-Tell</span></h2>
                        <p className={styles.sectionSubtitle}>
                            The KNGVS amplified edition culminated in our exciting annual garden-to-fork exhibition and fun day on September 1, 2023. It was a grand event celebrating the journey of food from the garden to the plate.
                        </p>
                        <div className={styles.galleryGrid}>
                            <Image src="/assets/Program/exhibition/KNGVS Pro_20240910_120222_1.png" alt="Exhibition Highlight 1" className={styles.galleryImage} width={200}
                                height={200} />
                            <Image src="/assets/Program/exhibition/KNGVS Pro_20240910_120218_1.png" alt="Exhibition Highlight 2" className={styles.galleryImage} width={200}
                                height={200} />
                            <Image src="/assets/Program/exhibition/KNGVS Pro_20240910_120225_1.png" alt="Exhibition Highlight 3" className={styles.galleryImage} width={200}
                                height={200} />
                        </div>
                    </div>
                </section>

                {/* --- Highlights Section --- */}
                <section className={`${styles.section} ${styles.contentSection}`}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}><span>Exhibition</span> Highlights</h2>
                        <p className={styles.sectionSubtitle}>{highlightsData.description}</p>
                        <div className={styles.galleryGrid}>
                            {highlightsData.images.map((src, index) => (
                                <Image key={index} src={src} alt={`Highlight ${index + 1}`} className={styles.galleryImage} width={200}
                                    height={200} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Attendance Section --- */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <h2 className={styles.sectionTitle}>Exhibition <span>Attendance</span></h2>
                        <p className={styles.sectionSubtitle}>{attendanceData.description}</p>
                        <div className={styles.galleryGrid}>
                            {attendanceData.images.map((src, index) => (
                                <Image key={index} src={src} alt={`Guest ${index + 1}`} className={styles.galleryImage} width={200}
                                    height={200} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Final Image Section --- */}
                <section className={`${styles.section} ${styles.contentSection}`}>
                    <div className={`${styles.container} ${styles.singleImageSection}`}>
                        <h2 className={styles.sectionTitle}>A Cross-section of <span>Children & Guests</span></h2>
                        <Image
                            src="/assets/Program/exhibition/KNGVS Pro_20240910_151717_1.png"
                            alt="A group photo of children and guests at the exhibition"
                            className={styles.singleImage}
                            width={200}
                            height={200}
                        />
                    </div>
                </section>

            </div>
        </>
    );
};

export default Exhibition;
