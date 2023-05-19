import React, { useEffect, useState } from 'react';
import styles from './Hobby.module.scss';
import Carousel from 'react-bootstrap/Carousel';
import ITImage from './programowanie.png';
import BasketImage from './basketball.png';
import DrumImage from './perkusja.png';
import BooksImage from './książki.png';
import FriendsImage from './znajomi.png';
import GammingImage from './granie.png';

const Hobby = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.hobby} ${animate ? styles.animate : ''}`}>
        <Carousel>
          <Carousel.Item>
            <div className={styles.carouselItem}>
              <img className={styles.carouselImage} src={ITImage} alt="IT" />
              <Carousel.Caption>
                <h3>Programowanie</h3>
                <p>Interesuję się programowaniem oraz marzę, aby rozwijać się w tym kierunku</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.carouselItem}>
              <img className={styles.carouselImage} src={BasketImage} alt="Basketball" />
              <Carousel.Caption>
                <h3>Koszykówka</h3>
                <p>W koszykówkę grałem od początku szkoły podstawowej. Kiedyś grałem klubowo, obecnie dla przyjemności</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.carouselItem}>
              <img className={styles.carouselImage} src={DrumImage} alt="Drums" />
              <Carousel.Caption>
                <h3>Perkusja</h3>
                <p>Gry na perkusji uczę się od 3 lat. Sprawia mi niesamowitą frajdę. Wystąpienie na scenie byłoby czymś...</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.carouselItem}>
              <img className={styles.carouselImage} src={BooksImage} alt="Books" />
              <Carousel.Caption>
                <h3>Książki</h3>
                <p>Uwielbiam czytać książki. Preferuję biografie, książki historyczne oraz literaturę faktu</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.carouselItem}>
              <img className={styles.carouselImage} src={FriendsImage} alt="Friends" />
              <Carousel.Caption>
                <h3>Czas z przyjaciółmi</h3>
                <p>Kiedy tylko mogę, staram się spędzać czas ze wspaniałymi przyjaciółmi. Wspólne wyjazdy, spotkania na mieście lub u któregoś z nas</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.carouselItem}>
              <img className={styles.carouselImage} src={GammingImage} alt="Gaming" />
              <Carousel.Caption>
                <h3>Granie w gry</h3>
                <p>Lubię pograć. Robię to na laptopie lub PS4. Od zawsze grałem w gry akcji, strzelanki, strategie oraz sportowe, zdarzą się też RPG</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Hobby;