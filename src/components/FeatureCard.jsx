"use client";
import { motion } from "framer-motion";
const FeatureCard = ({ title, description }) => {
  return (
    <motion.div
  whileHover={{ y: -8 }}
  transition={{ type: "spring", stiffness: 200 }}
  className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition duration-300"
>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-700">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;