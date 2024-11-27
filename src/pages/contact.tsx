import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Layout from '../components/Layout';
import '../styles/contact.css';


const AboutPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const [status, setStatus] = useState('');
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs
          .send(
            'service_34fy5qp', // Replace with your EmailJS service ID
            'template_xanhlll', // Replace with your EmailJS template ID
            formData,
            '78H4WZ7RGIQWrWR7e' // Replace with your EmailJS user ID
          )
          .then(
            (result) => {
              setStatus('Message sent successfully!');
              setFormData({ name: '', email: '', message: '' }); // Reset the form
            },
            (error) => {
              setStatus('Failed to send message. Please try again.');
            }
          );
      };
  return (
    <Layout>
      {/* Hero Section */}
      <section className="about-hero">
      <img
          src="/1120.gif" // Replace with your actual GIF path
          alt="Animated Header"
          className="about-hero-video"
        />
        <h1 className="about-title">Get In Touch</h1>
      </section>

      <section className="contact-form-section">
        <h2>Contact Us</h2>
        <p>Have questions or need assistance? Fill out the form below or reach out to us directly.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="form-button">
            Send Message
          </button>
        </form>
        {status && <p className="form-status">{status}</p>}
      </section>

      <footer className="contact-footer">
        <p>Email: contact@lux-it-solutions.com | Phone: 470-800-3101</p>
      </footer>
    </Layout>
  );
};

export default AboutPage;
