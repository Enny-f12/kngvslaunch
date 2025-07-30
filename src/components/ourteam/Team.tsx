import React from 'react';

// --- CSS MODULE STYLES ---
// In a real project, this would be in a file like 'TeamSection.module.css'
const styles = `
.teamSection {
  width: 100%;
  padding: 6rem 1.5rem;
  background-color: #f9fafb; /* A light, neutral background */
  font-family: 'Inter', sans-serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.header {
  margin-bottom: 4rem;
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1f2937; /* Darker text for better contrast */
  margin-bottom: 1rem;
}

.title span {
  color: #159c09; /* Your primary color */
}

.description {
  font-size: 1.125rem;
  line-height: 1.75;
  color: #4b5563;
  max-width: 700px;
  margin: 0 auto;
}

.teamGrid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

/* Tablet and larger */
@media (min-width: 768px) {
  .teamGrid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop and larger */
@media (min-width: 1024px) {
  .teamGrid {
    grid-template-columns: repeat(3, 1fr);
  }
  .title {
    font-size: 3rem;
  }
}

.teamMemberCard {
  background-color: #ffffff;
  border-radius: 1rem; /* Softer, more modern corners */
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.teamMemberCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
}

.imageWrapper {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.memberImage {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the image covers the area without distortion */
  transition: transform 0.3s ease;
}

.teamMemberCard:hover .memberImage {
    transform: scale(1.05); /* Subtle zoom on hover */
}

.memberInfo {
  padding: 1.5rem;
}

.memberName {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin: 0;
}

.memberRole {
  font-size: 1rem;
  font-weight: 500;
  color: #159c09; /* Using primary color for the role */
  margin-top: 0.25rem;
}
`;

// --- TYPESCRIPT INTERFACE ---
interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

// --- TEAM DATA ---
// Storing data in an array makes the component clean and easy to update.
const teamMembers: TeamMember[] = [
  {
    name: 'Jasmine Doe',
    role: 'Founder Of Kids Nutri Garden',
    imageUrl: 'https://placehold.co/400x400/159c09/FFFFFF?text=Founder',
  },
  {
    name: 'Alex Ray',
    role: 'Advisory Board',
    imageUrl: 'https://placehold.co/400x400/34D399/FFFFFF?text=Advisor',
  },
  {
    name: 'Samuel Chen',
    role: 'Program Officer',
    imageUrl: 'https://placehold.co/400x400/A3E635/FFFFFF?text=Officer',
  },
];


// --- REACT COMPONENT ---
const TeamSection: React.FC = () => {
  return (
    <>
      {/* We inject the styles into the head of the document */}
      <style>{styles}</style>
      {/* We add the Google Font link to the head */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" />

      <section className="teamSection">
        <div className="container">
          <header className="header">
            <h2 className="title">
              Meet <span>Our Team</span>
            </h2>
            <p className="description">
              Our dedicated team is passionate about empowering children to make healthy, informed choices. Through hands-on learning in nutrition and gardening, we aim to inspire the next generation to lead healthier, more sustainable lives.
            </p>
          </header>
          
          <div className="teamGrid">
            {teamMembers.map((member, index) => (
              <div key={index} className="teamMemberCard">
                <div className="imageWrapper">
                  <img 
                    src={member.imageUrl} 
                    alt={`Portrait of ${member.name}`} 
                    className="memberImage"
                    
                  />
                </div>
                <div className="memberInfo">
                  <h3 className="memberName">{member.name}</h3>
                  <p className="memberRole">{member.role}</p>
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
