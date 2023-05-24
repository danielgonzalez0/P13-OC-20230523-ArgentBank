import React from 'react';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import LoginForm from '../../components/loginForm/LoginForm';

/**
 * React component given the login page of the application
 * @returns {React.ReactElement} Login
 */
const Login = () => {
  return (
    <div className="body-wrapper">
      <Navigation />
      <main className="main bg-dark">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
};

export default Login;
