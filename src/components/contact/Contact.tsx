'use client';

import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaPaperPlane,
  FaSpinner
} from 'react-icons/fa';
import styles from './Contact.module.css';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = React.useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null);
  const [isSuccess, setIsSuccess] = React.useState<boolean | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    setIsSuccess(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Set success message
      setStatusMessage("Message sent successfully! We'll get back to you within 24 hours.");
      setIsSuccess(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch { // The error variable has been removed here
      // Set error message
      setStatusMessage("Error sending message. Please try again later.");
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Location",
      content: "University of Ibadan"
    },
    {
      icon: <FaPhone size={24} />,
      title: "Telephone",
      content: "+234 780 964 78"
    },
    {
      icon: <FaEnvelope size={24} />,
      title: "Email",
      content: "kngvs@gmail.com\nkng@gmail.com"
    },
    {
      icon: <FaClock size={24} />,
      title: "Business Hours",
      content: "Opens 9am - 2pm\nMonday - Friday"
    }
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/company/kids-nutri-garden-school/",
      icon: <FaLinkedinIn size={24} />,
      label: "LinkedIn"
    },
    {
      href: "https://wa.me/+2348056014140",
      icon: <FaWhatsapp size={24} />,
      label: "WhatsApp"
    },
    {
      href: "https://www.instagram.com/kidsnutrigarden_ng?igsh=YzljYTk1ODg3Zg==",
      icon: <FaInstagram size={24} />,
      label: "Instagram"
    }
  ];

  return (
    <>
    <h2 className={styles.sectionTitle}><span>Contact</span> Us</h2>
    <section className={styles.container}>

      <div className={styles.content}>

        <div className={styles.contactInfo}>
          <h2 className={styles.title}>Get in touch</h2>
          <p className={styles.subtitle}>
            You can contact us anytime and day, our assistant will get back to you and attend to your needs
          </p>

          <div className={styles.contactDetails}>
            {contactItems.map((item, index) => (
              <div key={index} className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  {item.icon}
                </div>
                <div className={styles.contactText}>
                  <h3>{item.title}</h3>
                  <p style={{ whiteSpace: 'pre-line' }}>{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.socialSection}>
            <p className={styles.socialTitle}>Follow us</p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>Your details</h2>
          <p className={styles.formSubtitle}>
            Let us know how to get back to you
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            {statusMessage && (
              <div className={`${styles.statusMessage} ${isSuccess ? styles.success : styles.error}`}>
                {statusMessage}
              </div>
            )}
            
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={styles.input}
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Your email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={styles.input}
                required
                placeholder="Enter your email"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className={styles.input}
                required
                placeholder="What is this about?"
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Comment / Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className={`${styles.input} ${styles.textarea}`}
                required
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin mr-2" size={20} />
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane className="mr-2" size={20} />
                  Submit
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;