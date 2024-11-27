import React from 'react';
import Layout from '../components/Layout';
import '../styles/about.css';

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="about-hero">
      <img
          src="/icons/1120.gif" // Replace with your actual GIF path
          alt="Animated Header"
          className="about-hero-video"
        />
        <h1 className="about-title">About Lux IT Solutions</h1>
      </section>
<br/><br/>
      {/* Content Section */}
      <section className="about-content">
        <div className="about-section">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              At Lux IT Solutions, our mission is to deliver innovative, reliable, and scalable IT solutions tailored to the needs of modern businesses. We are passionate about empowering companies with cutting-edge technology to achieve their goals.
            </p>
          </div>
          <div className="service-video-container">
          <img
          src="/icons/digital.gif" // Replace with your actual GIF path
          alt="Animated Header"
          className="service-video"
        />
          </div>
        </div>

        <div className="about-section reverse">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Founded by a team of experienced professionals, Lux IT Solutions brings together expertise in web development, cloud services, and custom solutions. We take pride in building strong partnerships and providing unparalleled support.
            </p>
          </div>
          <div className="service-video-container">
          <img
          src="/icons/fingerprint.gif" // Replace with your actual GIF path
          alt="Animated Header"
          className="service-video"
        />
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <p>Contact Us</p>
          <p>Email: contact@lux-it-solutions.com</p>
          <p>Phone: +1 (470) 800-3101</p>
          <p>© 2024 Lux IT Solutions. All rights reserved.</p>
        </div>
      </footer>
    </Layout>
  );
};

export default AboutPage;
