import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { nameValidity } from '../../utils/utils';
import { updateUserName } from '../../redux/user.slice';

/**
 * React component given the custom welcome message of the user connected
 * @param {PropTypes} token access user token delivered on connection
 * @returns {React.ReactElement} WelcomeForm
 */
const WelcomForm = ({ token }) => {
  const user = useSelector((state) => state.user);
  const inputFirstName = useRef();
  const inputLastName = useRef();
  const [isEditing, setIsEditing] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();

  /**
   * handle edit name profil on form submission
   * @param {object} e event on form submission
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    //test input with regex
    const firstNameCheck = nameValidity(inputFirstName.current.value);
    const lastNameCheck = nameValidity(inputLastName.current.value);
  
    if (firstNameCheck && lastNameCheck) {
      // prepare body for axios request
      const data = {
        firstName: inputFirstName.current.value,
        lastName: inputLastName.current.value,
      };
      //axios request
      axios
        .put(`${process.env.REACT_APP_LOCALHOST_URL}/user/profile`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const updateData = {
            firstName: res.data.body.firstName,
            lastName: res.data.body.lastName,
          };
          dispatch(updateUserName(updateData))
          setIsEditing(false)
        })
        .catch((err) => {
          setIsError(true);
          console.log(err);
          if (err.message) {
            setErrorMessage(err.message);
          }
        });
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="header">
      {!isEditing ? (
        <>
          <h1>
            Welcome back
            <br />
            {`${user.firstName} ${user.lastName} !`}
          </h1>
          <button
            className="edit-button"
            onClick={(e) => {
              e.preventDefault();
              setIsEditing(true);
              setIsError(false);
              setErrorMessage(false);
            }}
          >
            Edit Name
          </button>
        </>
      ) : (
        <>
          <h1>Welcome back</h1>
          <form className="grid-welcome-form">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder={user.firstName}
              autoComplete="off"
              ref={inputFirstName}
              onChange={() => setIsError(false)}
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder={user.lastName}
              autoComplete="off"
              ref={inputLastName}
              onChange={() => setIsError(false)}
            />
            <button
              id="welcome-save-btn"
              className="welcome-form-btn"
              onClick={(e) => handleSubmit(e)}
            >
              Save
            </button>
            <button
              id="welcome-cancel-btn"
              className="welcome-form-btn"
              onClick={(e) => {
                e.preventDefault();
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
          </form>
          {isError &&
            (errorMessage ? (
              <p className="error">{errorMessage}</p>
            ) : (
              <ul className="error error-welcome-container">
                Please fill correctly the first and the last name inputs :
                <li> - start with a capital letter</li>
                <li> - minimum one character</li>
                <li> - no accent</li>
                <li> - no numbers</li>
                <li> - no special characters</li>
              </ul>
            ))}
        </>
      )}
    </div>
  );
};

WelcomForm.propTypes = {
  token: PropTypes.string,
};

export default WelcomForm;
