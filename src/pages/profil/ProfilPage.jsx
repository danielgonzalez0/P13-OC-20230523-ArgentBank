import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

/**
 * React component given the profil page of the user connected
 * @returns {React.ReactElement} ProfilPage
 */
const ProfilPage = () => {
  const userToken = useSelector((state) => state.token);

  /**
   * get user profile infos from the server
   * @param {string} token access token given by the server
   */
  const getUserinfos = (token) => {
    axios
      .post(
        `${process.env.REACT_APP_URL}/user/profile`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => console.log(res.data.body))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUserinfos(userToken);
  }, [userToken]);

  return <div>Page de profil</div>;
};

export default ProfilPage;
