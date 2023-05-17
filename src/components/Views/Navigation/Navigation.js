import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link to="/" className={styles.titleLink}>
        <h2 className={styles.title}>Marek Skolik - Junior Frontend/Fullstack Developer</h2>
      </Link>
      <ul className={styles.navList}>
        <li>
          <Link to="/about" className={styles.navLink}>O mnie</Link>
        </li>
        <li>
          <Link to="/cv" className={styles.navLink}>CV</Link>
        </li>
        <li>
          <Link to="/portfolio" className={styles.navLink}>Portfolio</Link>
        </li>
        <li>
          <Link to="/hobby" className={styles.navLink}>Hobby</Link>
        </li>
        <li>
          <Link to="/contact" className={styles.navLink}>Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;