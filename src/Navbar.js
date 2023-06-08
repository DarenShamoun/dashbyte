import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { ReactComponent as FacebookIcon } from './facebook.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';
import { ReactComponent as TwitterIcon } from './twitter.svg';

const logo = '/4k-LogoTransparent.png';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src={logo} alt="Logo" className={styles.logo} />
      </Link>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/chat">Chat</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com/dashbyte/" target="_blank" rel="noreferrer"><FacebookIcon /></a>
        <a href="https://twitter.com/dash_byte" target="_blank" rel="noreferrer"><TwitterIcon /></a>
        <a href="https://www.instagram.com/dashbyte/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
      </div>
    </nav>
  );
}

export default Navbar;
