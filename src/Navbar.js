import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
const logo = '/4k-LogoTransparent.png';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
