import React from 'react';
import styles from './home.module.css';

function HomePage({ children }) {
  return (
    <section className={styles.homeSection}>
      <h1>Welcome to Dashbyte</h1>
      <p>Your one-stop solution for all your tech needs.</p>
      {children}
    </section>
  );
}

export default HomePage;
