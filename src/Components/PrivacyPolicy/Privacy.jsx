import React from 'react';
import '../PrivacyPolicy/privacy.scss';

const Privacy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy</h1>
      <p className="privacy-policy-date">Effective Date: [31/08/2024]</p>

      <section className="privacy-policy-section">
        <h2>1. Introduction</h2>
        <p>
          Welcome to CityRentals. We are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website , use our services, or interact with us in any other way.
        </p>
        <p>Please read this policy carefully to understand our views and practices regarding your personal data and how we will treat it.</p>
      </section>

      <section className="privacy-policy-section">
        <h2>2. Information We Collect</h2>
        <ul>
          <li><strong>Personal Information:</strong> This may include your name, email address, phone number, and other contact details that you provide when you register on our Site, fill out forms, or communicate with us.</li>
          <li><strong>Technical Data:</strong> We collect information such as your IP address, browser type, and operating system automatically when you visit our Site.</li>
          <li><strong>Usage Data:</strong> We may track your activities on the Site, such as pages visited, links clicked, and the duration of your visit.</li>
        </ul>
      </section>

      <section className="privacy-policy-section">
        <h2>3. How We Use Your Information</h2>
        <p>We may use the information we collect in the following ways:</p>
        <ul>
          <li>To provide you with the services and features offered on our Site.</li>
          <li>To improve our Site and user experience.</li>
          <li>To communicate with you about updates, promotions, or other content that may be of interest to you.</li>
          <li>For legal and compliance purposes.</li>
        </ul>
      </section>

      <section className="privacy-policy-section">
        <h2>4. Cookies and Tracking Technologies</h2>
        <p>We use cookies and similar tracking technologies to enhance your experience on our Site. You can choose to disable cookies through your browser settings, but doing so may affect your ability to use some features of the Site.</p>
      </section>

      <section className="privacy-policy-section">
        <h2>5. Data Security</h2>
        <p>We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction.</p>
      </section>

      <section className="privacy-policy-section">
        <h2>6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Request access to your personal data and receive a copy of it.</li>
          <li>Request corrections to any inaccurate or incomplete data.</li>
          <li>Request the deletion of your personal data.</li>
          <li>Object to the processing of your personal data.</li>
          <li>Request the transfer of your data to another service provider.</li>
        </ul>
      </section>

      <section className="privacy-policy-section">
        <h2>7. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the "Effective Date" will be updated.</p>
      </section>

      <section className="privacy-policy-section">
        <h2>8. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy or our data practices, please contact us at:</p>
        <p><strong>Email:</strong> cityrentalsbuisness@gmail.com</p>
      </section>
    </div>
  );
};

export default Privacy;
