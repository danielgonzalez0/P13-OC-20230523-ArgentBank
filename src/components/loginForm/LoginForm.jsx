import React, { useRef, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToken } from '../../redux/token.slice';
import { useNavigate } from 'react-router-dom';

/**
 * React component given the login form for the connexion
 * @returns {React.ReactElement} LoginForm
 */
const LoginForm = () => {
  const inputName = useRef();
  const inputPassword = useRef();
  const inputRemenber = useRef();
  const formRef = useRef();
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  /**
   * handle call to the server on login form submission
   * @param {object} e event on form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: inputName.current.value,
      password: inputPassword.current.value,
    };

    axios
      .post(`${process.env.REACT_APP_URL}/user/login`, data)
      .then((res) => {
        dispatch(addToken(res.data.body.token));
      })
      .then(() => {
        formRef.current.reset();
        navigate('/profil')
      })
      .catch((err) => {
        setIsError(true);
        setError(err.response.data.message);
        console.log(err.response.data.message);
      });
  };

  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={(e) => handleSubmit(e)} ref={formRef}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            ref={inputName}
            onChange={() => setIsError(false)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={inputPassword}
            onChange={() => setIsError(false)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" ref={inputRemenber} />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <input type="submit" className="sign-in-button" value="Sign In" />
      </form>
      {isError && <p className="error">{error}</p>}
    </section>
  );
};

export default LoginForm;
