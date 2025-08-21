import React from 'react';
import styles from './Team.module.css'
import Image from 'next/image';
interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

// --- TEAM DATA ---
// Storing data in an array makes the component clean and easy to update.
const teamMembers: TeamMember[] = [
  {
    name: 'Shirley Ejoh',
    role: 'Founder Of Kids Nutri Garden',
    imageUrl: 'https://placehold.co/400x400/159c09/FFFFFF?text=Founder',
  },
  {
    name: 'AD',
    role: 'Advisory Board',
    imageUrl: 'https://placehold.co/400x400/34D399/FFFFFF?text=Advisor',
  },
  {
    name: 'Emmanuel Udoh',
    role: 'Program Officer',
    imageUrl: '/assets/about/team/Emmanuel.jpg',
  },
];


// --- REACT COMPONENT ---
const TeamSection: React.FC = () => {
  return (
    <>


      <section className={styles.teamSection}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h2 className={styles.title}>
              Meet <span>Our Team</span>
            </h2>
            <p className={styles.description}>
              Our dedicated team is passionate about empowering children to make healthy, informed choices. Through hands-on learning in nutrition and gardening, we aim to inspire the next generation to lead healthier, more sustainable lives.
            </p>
          </header>

          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamMemberCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={member.imageUrl}
                    alt={`Portrait of ${member.name}`}
                    className={styles.memberImage}
                    width={200}
                    height={200}

                  />
                </div>
                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// --- MAIN APP COMPONENT ---
// This is the component that would be rendered to the DOM.
export default function App() {
  return <TeamSection />;
}
