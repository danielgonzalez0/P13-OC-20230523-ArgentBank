import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import getUserinfos from '../../utils/axiosRequest';

/**
 * React component given the profil page of the user connected
 * @returns {React.ReactElement} ProfilPage
 */
const UserPage = () => {
  const userToken = useSelector((state) => state.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (userToken.userToken === null) {
      navigate('/login');
    } else {
       getUserinfos(userToken);
    }
  }, [userToken, navigate]);

  return (
    <div className="body-wrapper">
      <Navigation />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserPage;
