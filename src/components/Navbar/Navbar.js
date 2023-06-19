import React from 'react';
import { Link } from 'react-router-dom';
import facebookIcon from '../../assets/facebook.svg';
import twitterIcon from '../../assets/twitter.svg';
import instagramIcon from '../../assets/instagram.svg';
import logo from '../../assets/4k-LogoTransparent.png';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/"><img src={logo} alt="Logo" className={styles.logo} /></Link>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pc-builder">PC Builder</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className={styles.socialLinks}>
        <a href="https://www.facebook.com/dashbyte/" target="_blank" rel="noreferrer">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://twitter.com/dash_byte" target="_blank" rel="noreferrer">
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/dashbyte/" target="_blank" rel="noreferrer">
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
