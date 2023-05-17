import React from 'react';
import styles from './Home.module.scss';
import frontendImage from './frontend.png';

const Home = () => {
  return (
    <div className={`${styles.home} ${styles.container}`}>
      <img
        src={frontendImage}
        alt="Frontend"
        className={`${styles.image} ${styles.animateRight}`}
      />
      <div className={styles.textContainer}>
        <h1 className={`${styles.hello} ${styles.animateLeft}`}>Witam na stronie!</h1>
        <h2 className={`${styles.content} ${styles.animateRight}`}>Szukam pracy jako Junior Frontend/Fullstack Developer</h2>
        <h3 className={`${styles.content} ${styles.animateLeft}`}>Na stronie jest trochę informacji o mojej osobie oraz krótka historia decyzji o przebranżowieniu.</h3>
        <h2 className={`${styles.welcome} ${styles.animateRight}`}>Zapraszam!</h2>
      </div>
    </div>
  );
}

export default Home;