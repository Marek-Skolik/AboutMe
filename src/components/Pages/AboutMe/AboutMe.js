import React from 'react';
import styles from './AboutMe.module.scss';
import WeldImage from './weld.png';
import ProgrammingIMG from './programming.png';

const AboutMe = () => {
  return (
    <div className={styles.about}>
      <div className={styles.flexContainer}>
        <div className={styles.text}>
          <h1>Kilka słów o mnie</h1>
          <p>Jestem Marek i mieszkam na Śląsku. Tutaj sie urodziłem i wychowałem. Kończąc gimnazjum wybrałem szkołę średnią, którą było Centrum Edukacji Ekonomiczno-Handlowej w Tarnowskich Górach.<br/>
            Dostałem się na kierunek Technik Organizacji Reklamy. Bardzo interesowały mnie zagadnienia z tym związane, otrzymałem dwie kwalifikacje po zdaniu egzaminów i tak po wszystkim szukałem pracy.<br/>
            Nie potrafiłem niczego znaleźć, więc postarałem się o jakikolwiek zarobek, ponieważ gdzieś trzeba było pracować. Dostałem pracę jako pracownik Utrzymania Ruchu w dziale spawalniczym. <br/>
            Krótko mówiąc, zacząłem naprawiać urządzenia spawalnicze.</p>
        </div>
        <div className={styles.imgWeld}>
          <img 
            src={WeldImage}
            alt="welderImg"
            className={styles.welderImg}
          />
        </div>
      </div>
      <div className={styles.flexContainer}>
        <div className={styles.text}>
          <p>Pracę zacząłem w w 2016 roku i trwa do dzisiaj. W międzyczasie zająłem się marketingiem sieciowym. Byłem liderem 12 osobowej grupy sprzedawców. Od dwóch lat interesuję się programowaniem. Korzystałem z różnych szkoleń na YouTube, ale postanowiłem, że muszę te informacje usystematyzować oraz określić. <br/>
            Podjąłem również decyczję o przebranżowieniu się. Postanowiłem robić to co sprawia mi przyjemność, dzięki czemu mam szanse rozwoju oraz jest przyszłościowe. Wziałem, więc udział w Bootcamp-ie Kodilli na Fullstack Developera. <br />
            Kurs trwał 10 miesięcy, w tym 800h nauki i 90% praktyki. Poznałem wiele technologi z zakresu Frontend-u i Backend-u. Chetnie rozwinę się w obu kierunkach, jednak najlepiej czuję się we Froncie.<br/>
            Mam nadzieję na znalezienie swojej pierwszej, wymarzonej pracy w  branży IT i zdobycie doświadczenia komercyjnego.</p>
        </div>
        <div className={styles.programmer}>
          <img 
            src={ProgrammingIMG}
            alt="programmingIMG"
            className={styles.programmingImage}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;