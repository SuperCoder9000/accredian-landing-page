"use client";
import { motion } from "framer-motion";

const SectionWrapper = ({ title, children, id }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-12">
          {title}
        </h2>
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;