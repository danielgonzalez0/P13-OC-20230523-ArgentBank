import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import Header from '../../components/header/Header';
import Features from '../../components/featuresCard/Features';
import chatIcon from './icon-chat.png';
import moneyIcon from './icon-money.png';
import securityIcon from './icon-security.png';
import Footer from '../../components/footer/Footer';

/**
 * React component given the homepage of the application
 * @returns {React.ReactElement} Home
 */
const Home = () => {
  return (
    <>
      <Navigation />
      <main>
        <Header />
        <section className="features">
          <h2 className="sr-only">Features</h2>
          <Features
            imgSrc={chatIcon}
            imgAlt={'Chat-icon'}
            title={'You are our #1 priority'}
            text={
              'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
            }
          />
          <Features
            imgSrc={moneyIcon}
            imgAlt={'money-icon'}
            title={'More savings means higher rates'}
            text={`The more you save with us, the higher your interest rate will be!`}
          />
          <Features
            imgSrc={securityIcon}
            imgAlt={'security-icon'}
            title={'Security you can trust'}
            text={`We use top of the line encryption to make sure your data and money
            is always safe.`}
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
