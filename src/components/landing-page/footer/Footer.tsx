import React from 'react';
import { FaLinkedinIn, FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-linear-to-r from-green-800 via-green-700 to-green-700 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row flex-wrap gap-4 justify-between">
        {/* Logo & Description */}
        <div className="flex flex-col md:w-1/3 gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/assets/sidebar/logo.jpg"
              alt="Kids Nutri Garden Logo"
              width={80}
              height={80}
              className="rounded-lg"
            />
            <h2 className="text-2xl font-semibold text-white">Kids Nutri Garden</h2>
          </div>
          <p className="text-gray-300 text-lg">
            Nurturing Generation Of Healthy Eaters; Grow It, Cook It, Love It.
          </p>
        </div>

        {/* About Section */}
        <div className="flex flex-col gap-3 md:w-1/6">
          <h3 className="text-lg font-semibold text-white">About</h3>
          <ul className="flex flex-col gap-2  text-gray-300">
            <li>
              <a href="/abput" className="hover:text-green-300 transition-colors">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-300 transition-colors">Blog</a>
            </li>
            <li>
              <a href="/teams" className="hover:text-green-300 transition-colors">Our Team</a>
            </li>
            <li>
              <a href="/contct" className="hover:text-green-300 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Categories Section */}
        <div className="flex flex-col gap-3 md:w-1/6">
          <h3 className="text-lg font-semibold text-white">Categories</h3>
          <ul className="flex flex-col gap-2  text-gray-300">
            <li>
              <a href="/exhibition/cover" className="hover:text-green-300 transition-colors">Annual Exhibition</a>
            </li>
            <li>
              <a href="/training" className="hover:text-green-300 transition-colors">Trainings</a>
            </li>
            <li>
              <a href="/amplified" className="hover:text-green-300 transition-colors">Amplified Kitchen</a>
            </li>
            <li>
              <a href="/vacation" className="hover:text-green-300 transition-colors">Vacation School</a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col gap-4 md:w-1/6">
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <ul className="flex flex-col gap-1 text-gray-300">
            <li>University of Ibadan</li>
            <li>+23470986547</li>
            <li>kidsnutrigarden@gmail.com</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-white">
            <a
              href="https://www.linkedin.com/company/kids-nutri-garden-school/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition-colors"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://wa.me/+2348056014140"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.instagram.com/kidsnutrigarden_ng?igsh=YzljYTk1ODg3Zg=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://vm.tiktok.com/ZMkhdX2tV/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition-colors"
            >
              <FaTiktok size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
