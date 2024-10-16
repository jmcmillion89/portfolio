import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import additional icons

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="hero"
    >
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="../public/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h1 className="hero-title">Hi, I'm Justin McMillion</h1>
      <p className="hero-description">
        Full Stack Developer | React, Node.js, and MongoDB Expert
      </p>

      <div className="hero-cta">
        <button onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          View My Work
        </button>
      </div>

      <div className="hero-socials">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:your.email@example.com">
          <FaEnvelope />
        </a>
      </div>

      <div className="scroll-arrow" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <motion.div
          whileHover={{ scale: 1.1 }} // Scale effect on hover
          className="arrow-icon"
        >
          <FaArrowDown />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroSection;