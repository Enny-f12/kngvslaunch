'use client'

import React from 'react';
import Image from 'next/image';

// --- Data for the component (Unchanged) ---
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
// --- Exhibition Component (Tailwind Conversion) ---
// =================================================================================
const Exhibition: React.FC = () => {
    // Shared classes based on CSS Modules
    const containerClasses = "max-w-[1200px] mx-auto px-4 md:px-12";
    const sectionPadding = "py-24";
    const titleClasses = "text-3xl lg:text-5xl font-extrabold text-gray-900 text-center mb-4";
    const subtitleClasses = "text-lg lg:text-xl text-gray-700 text-center max-w-[1100px] mx-auto mb-16 leading-relaxed";
    const galleryGridClasses = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6";
    const galleryImageClasses = "w-full h-[300px] object-cover rounded-xl shadow-xl transition-all duration-300 ease-in-out hover:translate-y-[-5px] hover:scale-[1.03] hover:shadow-2xl";

    return (
        <div className="w-full overflow-x-hidden">
            
            {/* --- Hero Section --- */}
            <section className="relative h-[70vh] flex items-center justify-center text-center text-white p-8">
                {/* Hero Background */}
                <Image
                    src="/assets/Program/exhibition/KNGVS Pro_20240910_151717_1.png"
                    alt="A vibrant and fun exhibition day"
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    fill
                />
                {/* Hero Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
                
                {/* Hero Content */}
                <div className="relative z-20">
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold shadow-md leading-tight">
                        Grow It, Cook It, Love It
                    </h1>
                </div>
            </section>

            {/* --- Intro Section --- */}
            <section className={`${sectionPadding}`}>
                <div className={containerClasses}>
                    <h2 className={titleClasses}>A Grand <span className="text-green-600">Show-and-Tell</span>
                    <span className="block w-20 h-1 bg-green-500 rounded mx-auto mt-3"></span>
                    </h2>
                    <p className={subtitleClasses}>
                        The KNGVS amplified edition culminated in our exciting annual garden-to-fork exhibition and fun day on September 1, 2023. It was a grand event celebrating the journey of food from the garden to the plate.
                    </p>
                    <div className={galleryGridClasses}>
                        <Image 
                            src="/assets/Program/exhibition/KNGVS Pro_20240910_120222_1.png" 
                            alt="Exhibition Highlight 1" 
                            className={galleryImageClasses} 
                            width={400} height={300} 
                        />
                        <Image 
                            src="/assets/Program/exhibition/KNGVS Pro_20240910_120218_1.png" 
                            alt="Exhibition Highlight 2" 
                            className={galleryImageClasses} 
                            width={400} height={300}
                        />
                        <Image 
                            src="/assets/Program/exhibition/KNGVS Pro_20240910_120225_1.png" 
                            alt="Exhibition Highlight 3" 
                            className={galleryImageClasses} 
                            width={400} height={300}
                        />
                    </div>
                </div>
            </section>

            {/* --- Highlights Section --- */}
            <section className={`${sectionPadding} bg-gray-50`}> {/* Assuming --bg-light is bg-gray-50 */}
                <div className={containerClasses}>
                    <h2 className={titleClasses}><span className="text-green-600">Exhibition</span> Highlights
                    <span className="block w-20 h-1 bg-green-500 rounded mx-auto mt-3"></span>
                    </h2>
                    <p className={subtitleClasses}>{highlightsData.description}</p>
                    <div className={galleryGridClasses}>
                        {highlightsData.images.map((src, index) => (
                            <Image 
                                key={index} 
                                src={src} 
                                alt={`Highlight ${index + 1}`} 
                                className={galleryImageClasses} 
                                width={400} height={300} 
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Attendance Section --- */}
            <section className={`${sectionPadding}`}>
                <div className={containerClasses}>
                    <h2 className={titleClasses}>Exhibition <span className="text-green-600">Attendance</span>
                    <span className="block w-20 h-1 bg-green-500 rounded mx-auto mt-3"></span>
                    </h2>
                    <p className={subtitleClasses}>{attendanceData.description}</p>
                    <div className={galleryGridClasses}>
                        {attendanceData.images.map((src, index) => (
                            <Image 
                                key={index} 
                                src={src} 
                                alt={`Guest ${index + 1}`} 
                                className={galleryImageClasses} 
                                width={400} height={300}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Exhibition;