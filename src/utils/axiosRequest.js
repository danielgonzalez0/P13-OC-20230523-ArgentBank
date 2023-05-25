import axios from 'axios';

/**
 * get user profile infos from the server
 * @param {string} token access token given by the server
 */
const getUserinfos = async (token) => {
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

export default getUserinfos;
