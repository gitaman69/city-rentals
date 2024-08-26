import React from 'react';
import './AboutUs.scss';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="container">
        <h1>About Us</h1>
        <p className="intro">
          Welcome to City Rentals, where we connect property owners with people looking for a place to stay. Our mission is to provide a seamless and trustworthy rental experience.
        </p>
        <div className="content">
          <div className="text">
            <h2>Our Journey</h2>
            <p>
              Started with the aim of revolutionizing the rental industry, we’ve grown into a platform that thousands of people trust for finding their perfect rental spaces. Our journey is built on values of transparency, trust, and innovation.
            </p>

            <h2>Our Values</h2>
            <p>
              We believe in offering honest services that meet the needs of both landlords and tenants. Our platform is designed to make renting easy, efficient, and enjoyable.
            </p>

            <h2>Our Team</h2>
            <p>
              Our team is composed of passionate professionals who are dedicated to creating the best rental experience for you. We work tirelessly to ensure that our platform remains user-friendly and up-to-date with the latest trends in the rental industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
