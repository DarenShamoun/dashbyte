import React from 'react';
import styles from './ServicesSection.module.css';

function ServicesSection() {
  return (
    <section className={styles.section}>
      <h2>Our Services</h2>
      <div className={styles.services}>
        <div className={styles.card}>
          <h3>Service 1</h3>
          <p>Brief description of Service 1...</p>
          <button>Learn More</button>
        </div>
        {/* Add more cards as needed */}
      </div>
    </section>
  );
}

export default ServicesSection;
