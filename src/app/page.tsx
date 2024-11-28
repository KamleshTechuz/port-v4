"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, X } from "lucide-react";

import AnimatedSection from "@/components/AnimatedSection";
import Cont from "@/components/Cont";
import Edu from "@/components/Edu";
import Exp from "@/components/Exp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Proj from "@/components/Proj";
import Skill from "@/components/Skill";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const PortfolioWebsite = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showChat, setShowChat] = useState(false); // State to toggle chat visibility

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleChatToggle = () => {
    setShowChat(!showChat); // Toggle chat visibility
  };

  return (
    <ParallaxProvider>

        <div className="dark bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-[100vh] transition-colors duration-300 relative overflow-hidden">
          {/* Header Section */}
          <Header scrollToSection={() => {}} />

          <div className=" mx-auto px-6 py-16 space-y-24 mt-[120px]">
            {/* Hero Section */}
            <AnimatedSection>
              <Hero />
            </AnimatedSection>

            {/* Experience Section */}
            {/* <AnimatedSection>
              <Exp />
            </AnimatedSection> */}

            {/* Education Section */}
            {/* <AnimatedSection>
              <Edu />
            </AnimatedSection> */}

            {/* Projects Section */}
            <AnimatedSection>
              <Proj />
            </AnimatedSection>

            {/* Skills Section */}
            {/* <Parallax speed={-10}>
              <Skill />
            </Parallax> */}
            {/* <AnimatedSection direction="down">
            </AnimatedSection> */}
          </div>

          {/* Footer Section */}
          <AnimatedSection>
            <Footer />
          </AnimatedSection>

          {/* Scroll to Top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
              aria-label="Scroll to Top"
            >
              <ArrowUp size={24} />
            </button>
          )}

          {/* Message Button */}
          <button
            onClick={handleChatToggle}
            className="fixed bottom-6 left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 z-50"
            aria-label="Message"
          >
            <MessageCircle size={24} />
          </button>

          {/* Chat Form (Floating) */}
          {showChat && (
            <Cont
              setShowChat={setShowChat}
              handleChatToggle={handleChatToggle}
            />
          )}
        </div>

    </ParallaxProvider>
  );
};

export default PortfolioWebsite;
