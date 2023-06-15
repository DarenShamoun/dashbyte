import React from 'react';
import styles from './servicesSection.module.css';

function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      <h1>Our Services</h1>
      <div className={styles.serviceCard}>
        <h2>Software Development</h2>
        <p>Our team of experienced developers can help you build robust and scalable software solutions tailored to your business needs.</p>
      </div>
      <div className={styles.serviceCard}>
        <h2>PC Building</h2>
        <p>With a long history in PC building, we can build computers of all types to suit your specific needs, whether for gaming, work, or home use.</p>
      </div>
      <div className={styles.serviceCard}>
        <h2>IT Services</h2>
        <p>Our IT services leverage the power of AI to provide efficient and effective solutions for your business.</p>
      </div>
      <div className={styles.serviceCard}>
        <h2>Website Design</h2>
        <p>We design websites of all types, ensuring they are user-friendly, responsive, and visually appealing.</p>
      </div>
    </section>
  );
}

export default ServicesSection;
