import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/marek-skolik-develop" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>
        <a href="https://github.com/Marek-Skolik" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
      </div>
      <a href="mailto:marek250296@interia.pl" className={styles.mailLink}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.mailIcon} />
      </a>
    </div>
  );
};

export default Contact;