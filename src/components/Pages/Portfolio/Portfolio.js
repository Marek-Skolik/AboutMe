import React from 'react';
import styles from './Portfolio.module.scss';
import elTigre from './elTigre.png';
import teamProject from './team-project.png';
import pizzeriaImg from './pizzeria.png';
import secondHand from './second-hand.png';
import fullStack from './fullstack.png';

const Portfolio = () => {

  return (
      <div className={styles.portfolio}>
        <div className={styles.project}>
          <img src={elTigre} alt="zdjecie" />
          <h3>ElTigre Shop</h3>
          <h4>Link: https://github.com/Marek-Skolik/Individual-Project-ElTigre-shop</h4>
          <p>Projekt sklepu z kawą. Prosty layout wykonany za pomocą HTML, CSS i JavaScript.</p>
        </div>
        <div className={styles.project}>
          <img src={teamProject}alt="zdjecie" />
          <h3>Projekt zespołowy</h3>
          <h4>Link: https://github.com/Marek-Skolik/Team-Project</h4>
          <p>Projekt, stworzony przez 5 osobowy zespół, w tym mnie. Jest to strona sklepu z meblami. <br />
            Produkty pobierane są z serwera API. Projekt posiada kilka funkcjonalności takich jak np: <br />
            Dodawanie do koszyka oraz usuwanie lub zmiana ilości, karuzele ze zdjęciami, ocenianie produktów <br />
            przydzielaniem gwiazdek. Wykorzystano: React, Sass, JavaScript,Redux, API, Bootstrap.</p>
        </div>
        <div className={styles.project}>
          <img src={pizzeriaImg} alt="zdjecie" />
          <h3>Strona Pizzerii</h3>
          <h4>Link: https://github.com/Marek-Skolik/Projekt-Pizzeria-MammaMia</h4>
          <p>Strona pizzeri z wieloma funkcjonalnościami. Wybór pizzy oraz jej dodatków, z podglądem zmiany jej wyglądu, <br />
              dodawania do koszyka wraz z ilością i adekwatną ceną, rezerwacja stolika oraz ilości miejsc.<br />
              Wykorzystane technologie: HTML, Sass, Handlebars, JavaScript, AJAX.</p>
        </div>
        <div className={styles.project}>
          <img src={secondHand} alt="zdjecie" />
          <h3>Second-Hand</h3>
          <h4>Link: https://github.com/Marek-Skolik/Second-Hand-Shop</h4>
          <p>Projekt sklepu internetowego zawierający frontend i backend, z wykorzystaniem React, Bootstrap, Redux, Nest oraz MySql.</p>
        </div>
        <div className={styles.project}>
          <img src={fullStack} alt="zdjecie" />
          <h3>Projekt Fullstack</h3>
          <h4>Link: https://github.com/Marek-Skolik/Fullstack-App-Backend-</h4>
          <p>Projekt fullstack-owy, składający się z frontend-u i backend-u. Zawiera funkcjonalnośc rejestracji nowego użytkownika oraz logowania. <br />
              Strona zawiera ogłoszenia, które można przejrzeć szczególowo oraz opcję ich dodawania. Wykorzystane technologie to: React, Bootstrap, Redux, API, MongoDB, Mongoose.</p>
        </div>
      </div>
  );
};

export default Portfolio;