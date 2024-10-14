import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/yourusername/repos');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="projects"
      style={{ padding: '50px', backgroundColor: '#2a2a2a', textAlign: 'center', color: '#e0e0e0' }}
    >
      <h2>Projects</h2>
      <p>Here are some of the projects I’ve worked on.</p>
      <div className="repo-list">
        {repos.map((repo) => (
          <motion.div
            key={repo.id}
            whileHover={{ scale: 1.05 }}
            style={{
              background: '#333',
              padding: '20px',
              borderRadius: '10px',
              margin: '20px auto',
              width: '80%',
              color: '#fff',
            }}
          >
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" style={{ color: '#61dafb' }}>
              View Repository
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;