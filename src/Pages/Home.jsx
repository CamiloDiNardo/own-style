import React from 'react';
import {
  Banner,
  CardsButton,
  ModalCookies,
  Footer,
  NavBar,
  ArmchairLogo,
  Slider,
  MapCards,
  Contact,
} from '../components';
const Home = () => {
  return (
    <div>
      <NavBar />
      <Slider />
      <ArmchairLogo />
      <Banner />
      <MapCards />
      <CardsButton />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
