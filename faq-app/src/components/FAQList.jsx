import React, { useState } from 'react';
import FAQItem from './FAQItem';
import faqData from '../data/faqData';

const FAQList = ({ toggleDarkMode, darkMode }) => {
  const [openId, setOpenId] = useState(null);
  const [expandAll, setExpandAll] = useState(false);

  const toggleItem = (id) => {
    if (expandAll) {
      setExpandAll(false);
    }
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const toggleExpandAll = () => {
    setExpandAll((prev) => !prev);
    setOpenId(null);
  };

  return (
<div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-12">
<div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 px-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text text-center sm:text-left w-full sm:w-auto">
          Frequently Asked Questions
        </h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleExpandAll}
            className="flex items-center gap-2 px-4 py-4 text-sm font-medium text-white
              bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-600 hover:to-indigo-700
              rounded-lg shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2
              focus-visible:ring-indigo-500 transition-all duration-300 cursor-pointer"
          >
            <i className="bx bx-collapse-alt text-lg"></i>
            <span>{expandAll ? 'Collapse All' : 'Expand All'}</span>
          </button>
          <button
            onClick={toggleDarkMode}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r
              from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 text-gray-700 
              dark:text-gray-200 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-300 cursor-pointer"
          >
            <i className={`bx bx-${darkMode ? 'sun' : 'moon'} text-xl`}></i>
          </button>
        </div>
      </div>

      <div className="bg-white/80 dark:bg-gray-800/80 shadow-lg border border-indigo-100/50 dark:border-gray-900/30 transition-all duration-300 rounded-lg p-4 mx-4">
        {faqData.map((faq) => (
          <FAQItem
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
            onClick={toggleItem}
            isOpen={expandAll || openId === faq.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQList;
