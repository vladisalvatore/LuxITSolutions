import React from 'react';
import Layout from '../components/Layout';
import '../styles/about.css';

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="about-hero">
      <video autoPlay loop muted className="about-hero-video">
          <source src="/videos/1120.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className="about-title">About Lux IT Solutions</h1>
      </section>

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
            <video autoPlay loop muted className="service-video">
              <source src="/videos/digital.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
            <video autoPlay loop muted className="service-video">
              <source src="/videos/finger.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
