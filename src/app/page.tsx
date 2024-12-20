"use client";

import { useRef } from "react";

import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Proj from "@/components/Proj";
import { motion, useScroll, useTransform } from "framer-motion";
import profileData from "../data";

const { projects } = profileData;

const PortfolioWebsite = () => {
    const containerRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"]
    });
  
    // Adjust the transform range to match your desired scroll behavior
    const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(projects.length- 0.5) * 100}%`]);

  return (
    <div className="dark bg-black text-white min-h-[100vh] transition-colors duration-300">
      {/* Header Section */}
      <Header />

      <div className="container mx-auto px-6 py-16 space-y-24">
        {/* Hero Section */}
        <AnimatedSection>
          <Hero />
        </AnimatedSection>

        <div 
          ref={containerRef} 
          className="relative h-[700vh] w-full"
        >
          <div className="sticky top-0 left-0 h-screen w-full overflow-hidden">
            <motion.div 
              style={{ x }} 
              className="flex h-full items-center gap-8 will-change-transform"
            >
              {projects.map(
                (project, i) => (
                  <Proj project={project} key={i} />
                )
              )}
            </motion.div>
          </div>
        </div>

      </div>

      {/* Footer Section */}
      <AnimatedSection>
        <Footer />
      </AnimatedSection>

    </div>
  );
};

export default PortfolioWebsite;
