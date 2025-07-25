'use client';

import React, { useState } from 'react'
import styles from './Faq.module.css'
import { FaChevronDown } from 'react-icons/fa'

const faqData = [
  {
    question: 'What is Kids Nutri-garden™?',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum sapiente dolorum ab aliquam non sequi nostrum voluptas...',
  },
  {
    question: 'How big is Kids nutri garden program?',
    answer:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non tenetur nam tempore...',
  },
  {
    question: 'How do I get started?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit unde non quo officia...',
  },
  {
    question: 'Is KNGVS a non-governmental organization?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, similique perspiciatis...',
  },
  {
    question: 'How does KNGVS work alongside other NGOs?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eveniet aliquam aspernatur...',
  },
  {
    question: 'Is KNGVS only present in one state?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero soluta voluptatibus...',
  },
  {
    question: 'What are the impacts KNGVS has done to the society at large?',
    answer:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, repellendus in? Ea suscipit...',
  },
]

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <div className={styles.container}>
      <div className={styles.faq_text}>
        <div className={styles.line}>
          <div id={styles.vertical_line}></div>
          <h2>Frequently Asked Questions</h2>
        </div>
      <p className={styles.fap}>
        Here are the frequently asked questions you may check before getting started
      </p>
      </div>
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`${styles.faq} ${activeIndex === index ? styles.active : ''}`}
        >
          <button className={styles.accordion} onClick={() => toggleFaq(index)}>
            <p>{faq.question}</p>
            <FaChevronDown size={16} color="#083319" />
          </button>
          <div
            className={styles.panel}
            style={{ display: activeIndex === index ? 'block' : 'none' }}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Faq
