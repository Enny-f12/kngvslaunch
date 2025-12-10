'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp
} from 'react-icons/fa';

export default function Contact() {
  const contactItems = [
    { icon: <FaMapMarkerAlt />, title: 'Location', text: 'University of Ibadan' },
    { icon: <FaPhone />, title: 'Telephone', text: '+234 780 964 78' },
    { icon: <FaEnvelope />, title: 'Email', text: 'kngvs@gmail.com\ninfo@kng.com' },
    { icon: <FaClock />, title: 'Business Hours', text: 'Mon - Fri\n9am - 2pm' }
  ];

  const socials = [
    { href: 'https://linkedin.com/company/kids-nutri-garden-school/', icon: <FaLinkedinIn /> },
    { href: 'https://wa.me/+2348056014140', icon: <FaWhatsapp /> },
    { href: 'https://www.instagram.com/kidsnutrigarden_ng?igsh=YzljYTk1ODg3Zg==', icon: <FaInstagram /> }
  ];

  return (
    <section className="min-h-screen bg-white flex flex-col mt-15 lg:mt-30 px-4 mx-auto">
    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-24 flex justify-center text-center">
      Contact <span className="text-green-600 ml-2"> Us</span>
    </h1>
     {/* Glassmorphic Hero */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="relative mb-16 w-full mx-auto max-w-6xl p-12 rounded-3xl backdrop-blur-2xl bg-white/30 border border-emerald-100 shadow-sm text-center overflow-hidden"
>

   
  {/* Background gradient layer */}
  <div className="absolute inset-0 bg-linear-to-b from-white via-[#e6f4e6] to-[#d4efda] rounded-3xl" />

  {/* Foreground text layer */}
  <div className="relative z-10 space-y-6">
    
    <h2 className="text-3xl font-semibold text-gray-600 ">
      We’d Love to Hear from You
    </h2>
    <p className="text-gray-700 text-lg max-w-2xl mx-auto">
      Whether you want to collaborate, partner, or simply say hello — we’re always open to new connections.
    </p>
  </div>
</motion.div>

      {/* Contact Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto"
      >
        {contactItems.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-6 border border-emerald-100 hover:shadow-emerald-200 transition relative overflow-hidden"
          >
            <div className="text-emerald-500 text-4xl mb-4">{item.icon}</div>
            <h3 className="font-semibold text-xl text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 whitespace-pre-line">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-12 text-center"
      >
        <p className="text-sm uppercase tracking-wide mb-8 md:mb-3 text-gray-500">Follow Us</p>
        <div className="flex gap-4 justify-center">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
