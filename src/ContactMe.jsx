import React from 'react';
import { motion } from 'framer-motion';

const ContactMe = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="contact-me"
    >
      <h2>Contact Me</h2>
      <p>Feel free to reach out through any of the following:</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          type="submit"
          className="submit-button"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactMe;