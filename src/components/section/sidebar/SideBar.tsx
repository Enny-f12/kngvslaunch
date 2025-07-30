'use client';
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaLayerGroup,
  FaNewspaper,
  FaBookOpen,
  FaChevronRight,
} from "react-icons/fa";
import styles from "./Sidebar.module.css";
import type { MenuItemProps } from "./types";

// Button component
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
  size?: "default" | "icon";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) => {
  const base = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    ghost: "bg-transparent text-inherit hover:bg-gray-200",
  };
  const sizes = {
    default: "px-4 py-2 text-sm",
    icon: "w-10 h-10 text-lg",
  };
  const combined = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  return (
    <button className={combined} {...props}>
      {children}
    </button>
  );
};

// Menu item with optional submenu
const MenuItem: React.FC<MenuItemProps> = ({ icon, label, href, submenu }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  if (submenu) {
    return (
      <div className={styles.menuItemWrapper}>
        <button
          onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
          className={styles.submenuButton}
        >
          <div className={styles.menuLabel}>
            {icon}
            <span>{label}</span>
          </div>
          <FaChevronRight
            className={`${styles.chevron} ${isSubmenuOpen ? styles.rotate90 : ""}`}
          />
        </button>
        <div
          className={`${styles.submenuContainer} ${
            isSubmenuOpen ? styles.submenuOpen : styles.submenuClosed
          }`}
        >
          {submenu.map((item, index) => (
            <a key={index} href={item.href} className={styles.submenuLink}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <a href={href} className={styles.menuItem}>
      {icon}
      <span>{label}</span>
    </a>
  );
};

// Main Sidebar Component
export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: MenuItemProps[] = [
    {
      icon: <FaHome className={styles.iconPurple} />,
      label: "Home",
      href: "/home",
    },
    {
      icon: <FaInfoCircle className={styles.iconPink} />,
      label: "About Us",
      submenu: [
        { label: "About Us", href: "/about" },
        { label: "Our Team", href: "/team" },
        { label: "Advisory Board", href: "/advisory" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      icon: <FaLayerGroup className={styles.iconBlue} />,
      label: "Our Programs",
      submenu: [
        { label: "Vacation School", href: "/vacation" },
        { label: "Trainings", href: "/training" },
        { label: "Annual Exhibition", href: "/exhibition" },
        { label: "Advocacy", href: "/advocacy" },
        { label: "Amplified Kitchen", href: "/amplified" },
        { label: "World Food Day", href: "/wfd" },
      ],
    },
    {
      icon: <FaNewspaper className={styles.iconRed} />,
      label: "News & Report",
      submenu: [
        { label: "Annual Report", href: "/report" },
        { label: "Newsletter", href: "/newsletter" },
        { label: "Our Gallery", href: "/gallery" },
      ],
    },
    {
      icon: <FaBookOpen className={styles.iconYellow} />,
      label: "Resources",
      submenu: [
        { label: "Curriculum", href: "/curriculum" },
        { label: "Toolkit", href: "/toolkit" },
      ],
    },
  ];

  return (
    <>
      {/* Open Menu Button */}
      <Button
        onClick={() => setIsOpen(true)}
        variant="ghost"
        size="icon"
        className={`${styles.menuBtn} ${isOpen ? styles.invisible : styles.visible}`}
      >
        <FaBars />
      </Button>

      {/* Sidebar */}
      <div className={`${styles.sidebarWrapper} ${isOpen ? styles.open : ""}`}>
        <div className={styles.sidebarHeader}>
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            size="icon"
            className={styles.closeBtn}
          >
            <FaTimes />
          </Button>

          <div className={styles.logoWrapper}>
            <img
              src="/assets/sidebar/logo.jpg"
              alt="Kids Nutri Garden"
              className={styles.logoImage}
            />
            <h1 className={styles.logoText}>Kids Nutri Garden</h1>
          </div>
        </div>

        <nav className={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && <div className={styles.overlay} onClick={() => setIsOpen(false)} />}
    </>
  );
};
