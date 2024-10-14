import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-me" style={{ padding: '50px', textAlign: 'center' }}>
      <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>About Me</h2>
      <p style={{ fontSize: '20px', lineHeight: '1.5', maxWidth: '800px', margin: '0 auto' }}>
        Hi there! I’m Justin McMillion, a Full Stack Developer with a passion for creating dynamic and engaging web applications. Based in Charleston, WV, I have a background in Computer Science, which ignited my love for coding and technology. 
      </p>
      <p style={{ fontSize: '20px', lineHeight: '1.5', maxWidth: '800px', margin: '20px auto' }}>
        I specialize in building intuitive user interfaces and seamless user experiences, utilizing technologies like React, Node.js, and Express. My journey in the tech world has been driven by a desire to solve problems and bring ideas to life through code.
      </p>
      <p style={{ fontSize: '20px', lineHeight: '1.5', maxWidth: '800px', margin: '20px auto' }}>
        When I’m not coding, you can find me exploring new gaming worlds, experimenting with the latest tech trends, or spending quality time with my family. I believe in continuous learning and collaboration, and I'm always open to new opportunities and challenges.
      </p>
      <p style={{ fontSize: '20px', lineHeight: '1.5', maxWidth: '800px', margin: '20px auto' }}>
        Let’s connect and see how we can work together to create something amazing!
      </p>
    </div>
  );
};

export default AboutMe;