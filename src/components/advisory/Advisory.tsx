import React from 'react';
import  styles from './Advisory.module.css'

const AdvisoryBoardSection: React.FC = () => {
    return (
        <section className={styles.advisorySection}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}><span>Advisory</span> Board</h2>
                <div className={styles.contentWrapper}>
                    <div className={styles.textContainer}>
                        <p>Our Advisory Board is essential to the success of our kids' nutrition garden program. Composed of experts in nutrition, education, agriculture, and community engagement, the board provides valuable guidance to ensure our initiatives remain impactful. With diverse backgrounds in child development, health, and sustainable food practices, they help shape the direction of our programs.</p>
                        <br />
                        <p>The board plays a key role in curriculum development, offering strategic insights to keep our programs relevant and effective. They also provide oversight in program evaluation and community outreach, ensuring we meet our goals of fostering healthy eating habits and reducing malnutrition in children. Their commitment strengthens our ability to empower children with the skills and knowledge they need to make healthy, informed choices throughout their lives.</p>
                    </div>
                    <div className={styles.imageContainer}>
                        <img 
                          src="https://placehold.co/480x350/159c09/FFFFFF?text=Advisory+Board" 
                          alt="A meeting of the advisory board"
                         
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default AdvisoryBoardSection;