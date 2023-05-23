import React from 'react';
import ArgentBankLogo from './argentBankLogo.png';
import { NavLink } from 'react-router-dom';

/**
 * React component given the navigation of the application
 * @returns {React.ReactElement} Navigation
 */
const Navigation = () => {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

      <div>
        <NavLink className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
