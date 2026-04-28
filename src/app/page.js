"use client";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import SectionWrapper from "../components/SectionWrapper";
import Logos from "../components/Logos";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
export default function Home() {
  return (
    <motion.main
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="pt-20"
>
      <Navbar />
      <Hero />

      <SectionWrapper title="Our Track Record">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-600">10K+</h3>
            <p className="text-gray-600 mt-2">
              Professionals Trained
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-600">200+</h3>
            <p className="text-gray-600 mt-2">
              Sessions Delivered
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-600">5K+</h3>
            <p className="text-gray-600 mt-2">
              Active Learners
            </p>
          </div>

        </div>
      </SectionWrapper>
      <SectionWrapper id="features" title="Why Choose Accredian?">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <FeatureCard
            title="Industry Relevant Programs"
            description="Learn from curated courses designed with top industry experts."
          />

          <FeatureCard
            title="Flexible Learning"
            description="Upskill at your own pace with flexible learning schedules."
          />

          <FeatureCard
            title="Proven Outcomes"
            description="Drive measurable growth and employee success."
          />

        </div>
      </SectionWrapper>
      <Logos />
      <HowItWorks />
      <FAQ />
      <Testimonials />
      <CTA />
      <Footer />
    </motion.main>
  );
}