import React from 'react';
import styles from './CV.module.scss';
import cvImg from './CV.png';

const CV = () => {
  const handleShowCV = () => {
    window.open(cvImg, '_blank');
  };

  return (
    <div className={styles.cvPage}>
      <div className={styles.cvContainer}>
        <a href={cvImg} target="_blank" rel="noopener noreferrer" className={styles.cvLink}>
          <button className={styles.showButton} onClick={handleShowCV}>
            Pokaż
          </button>
        </a>
      </div>
    </div>
  );
};

export default CV;