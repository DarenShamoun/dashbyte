import React from 'react';
import styles from './Footer.module.css';
import facebookIcon from './assets/facebook.svg';
import twitterIcon from './assets/twitter.svg';
import instagramIcon from './assets/instagram.svg';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© 2023 Dashbyte. All rights reserved.</p>
      <div className={styles.socialLinks}>
        <a href="https://www.facebook.com/dashbyte/">
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://twitter.com/dash_byte">
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/dashbyte/">
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

