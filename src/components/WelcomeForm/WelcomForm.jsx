import React, { useState } from 'react';
import { useSelector } from 'react-redux';

/**
 * React component given the custom welcome message of the user connected
 * @returns {React.ReactElement} WelcomeForm
 */
const WelcomForm = () => {
  const user = useSelector((state) => state.user);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {};

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
              autoComplete='off'
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder={user.lastName}
              autoComplete='off'
            />
            <button
              id="welcome-save-btn"
              className="welcome-form-btn"
              onClick={(e) => {
                e.preventDefault();
                setIsEditing(false);
              }}
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
        </>
      )}
    </div>
  );
};

export default WelcomForm;
