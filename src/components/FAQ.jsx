"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What types of corporate training programs does Accredian offer?",
    answer: "We offer customized training programs across technology, leadership, and business domains tailored to enterprise needs.",
  },
  {
    question: "Are the programs customizable?",
    answer: "Yes, all programs are tailored based on your organization’s specific goals and requirements.",
  },
  {
    question: "How are the training programs delivered?",
    answer: "We provide both online and offline learning options with flexible delivery formats.",
  },
  {
    question: "Do you provide certification?",
    answer: "Yes, participants receive industry-recognized certifications upon successful completion.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-5 cursor-pointer hover:shadow-lg hover:border-blue-500 transition duration-300 bg-white"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg text-gray-900">
                  {faq.question}
                </h3>
                <span className="text-blue-600 text-xl font-bold">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>

              {openIndex === index && (
                <p className="text-gray-700 mt-3 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;