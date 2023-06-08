import React from 'react';
import styles from './ServicesSection.module.css';

function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <h2>What We Do</h2>
      <p>At Dashbyte, we offer a wide range of IT services and solutions to help businesses improve their operations and profitability. Our services include:</p>
      <ul>
        <li>IT Consulting: We provide strategic advice on using technology to achieve your business goals.</li>
        <li>Managed IT Services: We take care of your IT infrastructure, so you can focus on your core business.</li>
        <li>Cloud Services: We help businesses migrate to the cloud and take advantage of its scalability and cost-effectiveness.</li>
        <li>Cybersecurity: We protect your business from cyber threats with our comprehensive security solutions.</li>
        <li>Software Development: We build custom software solutions to meet the unique needs of your business.</li>
      </ul>
    </section>
  );
}

export default ServicesSection;
