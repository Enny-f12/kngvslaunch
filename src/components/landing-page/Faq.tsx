'use client';

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: 'What is Kids Nutri-garden™?',
    answer:
      'Kids Nutri-garden™ is a community-driven program designed to teach children about nutrition, sustainable gardening, and healthy eating habits through hands-on gardening activities.',
  },
  {
    question: 'How big is Kids Nutri-garden program?',
    answer:
      'Our program currently operates in multiple schools in Oyo state, reaching over 500 children annually through school and community garden initiatives.',
  },
  {
    question: 'How do I get started?',
    answer:
      'You can get started by volunteering, donating, or partnering with us. Visit our website or contact us via WhatsApp to join the program and make a positive impact.',
  },
  {
    question: 'Is KNGVS a non-governmental organization?',
    answer:
      'Yes, KNGVS is a registered non-governmental organization (NGO) dedicated to improving child nutrition and education through community gardens.',
  },
  {
    question: 'How does KNGVS work alongside other NGOs?',
    answer:
      'We collaborate with other NGOs, schools, and community groups to expand our reach, share resources, and create joint initiatives that benefit children’s nutrition and education.',
  },
  {
    question: 'Is KNGVS only present in one state?',
    answer:
      'YES, currently KNGVS has a presence in Oyo state, with ongoing projects expanding across regions to reach more communities and children.',
  },
  {
    question: 'What are the impacts KNGVS has done to society at large?',
    answer:
      'KNGVS has successfully educated thousands of children on healthy eating, improved access to fresh produce, and fostered community engagement in sustainable gardening practices.',
  },
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="max-w-6xl px-5 md:px-12 lg:px-8 py-20 mx-auto mt-10 md:mt-15 lg:mt-30">
      {/* Header */}
      <div className="mb-12 text-left">
          <div className="flex items-start gap-4 mb-5 md:flex-row flex-col-reverse">
            <div className="w-10 md:w-1 h-1 md:h-10 bg-[#159c09]"></div>
            <h2 className="text-4xl md:text-5xl font-semibold">
            Frequently Asked Questions
          </h2>
        </div>
        <p className="text-lg md:text-xl leading-relaxed max-w-6xl">
          Here are the frequently asked questions you may check before getting started
        </p>
      </div>

      {/* FAQ Items */}
      {faqData.map((faq, index) => (
        <div
          key={index}
          className={`border border-gray-300 rounded-md mb-4 overflow-hidden ${
            activeIndex === index ? 'border-none' : ''
          }`}
        >
          <button
            className={`w-full flex justify-between items-center p-6 text-left transition-colors duration-300 font-medium text-lg md:text-xl ${
              activeIndex === index
                ? 'bg-linear-to-br from-green-600 to-green-200 text-white'
                : 'bg-white text-black hover:bg-linear-to-br hover:from-green-600 hover:to-green-200 hover:text-white'
            }`}
            onClick={() => toggleFaq(index)}
          >
            <p className="w-11/12">{faq.question}</p>
            <FaChevronDown
              size={16}
              color={activeIndex === index ? 'white' : '#083319'}
              className={`transform transition-transform duration-300 ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {activeIndex === index && (
            <div className="p-6 bg-white">
              <p className="text-black text-base md:text-lg leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
