import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
const logo = '/4k-LogoTransparent.png';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <ul className={styles.navLinks}>
        <li><Link to="/" className={styles.link}>Home</Link></li>
        <li><Link to="/chat" className={styles.link}>Chat</Link></li>
        <li><Link to="/about" className={styles.link}>About</Link></li>
        <li><Link to="/services" className={styles.link}>Services</Link></li>
        <li><Link to="/contact" className={styles.link}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
