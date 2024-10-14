import React from 'react';
import './Index.css'; // Import the global CSS file
import HeroSection from './HeroSection';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';

const App = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default App;