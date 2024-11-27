// src/pages/index.js

import React from 'react'
import { useInView } from 'react-intersection-observer'
import Layout from '../components/Layout'
import '../styles/index.css'

const IndexPage = () => {

  const { ref: webDevRef, inView: webDevInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const { ref: cloudRef, inView: cloudInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  const { ref: customRef, inView: customInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero">
      <img
          src="/images/1120.gif" // Replace with your actual GIF path
          alt="Animated Header"
          className="hero-video"
        />
       
        <h1 className="hero-title">Lux IT Solutions</h1>
      </section>

      {/* About Us Section */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          At Lux IT Solutions, we are committed to delivering innovative and tailored IT services 
          to help businesses of all sizes achieve their goals. From web development to cloud 
          services and custom solutions, we provide expertise and dedication to drive your success.
        </p>
      </section>

      {/* Services Section */}
      <section className="content">
        <br/>
        <h2>Custom Solutions for Any Business</h2>

        {/* Web Development */}
        <div ref={webDevRef} className={`service-item ${webDevInView ? 'fade-in' : ''}`}>
          <div className="service-video-container">
          <img
          src="/icons/1121.gif" // Replace with your actual GIF path
          alt="Animated Header"
          className="service-video"
        />
          </div>
          <div className="service-description">
            <h3>Web Development</h3>
            <p>
              We create responsive, fast-loading, and visually stunning websites that provide a 
              seamless user experience. Whether you need an e-commerce platform or a corporate 
              website, we've got you covered.
            </p>
          </div>
        </div>

        {/* Cloud Services */}
        <div ref={cloudRef} className={`service-item reverse ${cloudInView ? 'fade-in' : ''}`}>
          <div className="service-video-container">
          <img
          src="/icons/cloud.gif" // Replace with your actual GIF path
          alt="Animated Header"
          className="service-video"
        />
          </div>
          <div className="service-description">
            <h3>Cloud Services</h3>
            <p>
              Leverage the power of the cloud to scale your business operations effortlessly. 
              Our cloud services include secure data storage, backups, and cloud infrastructure 
              setup to ensure high availability.
            </p>
          </div>
        </div>

        {/* Custom Solutions */}
        <div ref={customRef} className={`service-item ${customInView ? 'fade-in' : ''}`}>
          <div className="service-video-container">
          <img
          src="/icons/custom.gif" // Replace with your actual GIF path
          alt="Animated Header"
          className="service-video"
        />
          </div>
          <div className="service-description">
            <h3>Custom Solutions</h3>
            <p>
              Have a unique challenge? We build tailor-made solutions to address your specific 
              business needs. From bespoke software to integrated IT systems, we turn your ideas 
              into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>Contact Us</p>
          <p>Email: contact@lux-it-solutions.com</p>
          <p>Phone: +1 (470) 800-3101</p>
          <p>© 2024 Lux IT Solutions. All rights reserved.</p>
        </div>
      </footer>
    </Layout>
  )
}

export default IndexPage
