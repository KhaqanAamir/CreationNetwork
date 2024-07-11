import React, { useState } from 'react';
import '../../Styles/Pages/Pricing/FAQItem.css'

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="question text-xl" onClick={toggleAnswer}>
        {question}
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
}

export default FAQItem;
