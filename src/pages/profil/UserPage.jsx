import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navigation from '../../components/navigation/Navigation';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../redux/user.slice';

/**
 * React component given the profil page of the user connected
 * @returns {React.ReactElement} ProfilPage
 */
const UserPage = () => {
  const userToken = useSelector((state) => state.token);
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector((state)=>state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userToken === null) {
      navigate('/login');
    } else {
      axios
        .post(
          `${process.env.REACT_APP_URL}/user/profile`,
          {},
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        )
        .then((res) => {
          dispatch(getUser(res.data.body));
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [userToken, navigate, dispatch]);

  if(isLoading) return <p>Data is loading...</p>

  return (
    <div className="body-wrapper">
      <Navigation />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            {`${user.firstName} ${user.lastName} !`}
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserPage;
