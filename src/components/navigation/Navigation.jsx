import React from 'react';
import ArgentBankLogo from './argentBankLogo.png';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../../redux/token.slice';
import { clearUser } from '../../redux/user.slice';

/**
 * React component given the navigation of the application
 * @returns {React.ReactElement} Navigation
 */
const Navigation = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

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

      {user.firstName === null ? (
        <div>
          <NavLink className="main-nav-item" to="/login">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      ) : (
        <div>
          <NavLink className="main-nav-item" to="/profil">
            <i className="fa fa-user-circle"></i>
            {user.firstName}
          </NavLink>
          <NavLink
            className="main-nav-item"
            to="/"
            onClick={() => {
              dispatch(deleteToken());
              dispatch(clearUser());
            }}
          >
            <i className="fa fa-sign-out"></i>
            Sign Out
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
