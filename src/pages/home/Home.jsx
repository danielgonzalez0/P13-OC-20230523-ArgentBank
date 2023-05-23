import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import Header from '../../components/header/Header';

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
      </main>
    </>
  );
};

export default Home;
