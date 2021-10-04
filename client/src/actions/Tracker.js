import axios from 'axios';
import { GET_DATA, NO_DATA } from './types';



export const TrackerUserData = ({userName,currentDate}) => async dispatch => {

    
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ userName, currentDate });

    try {
      const res = await axios.post(
        "http://localhost:7000/api/users/user/tracker",
        body,
        config
      );

      dispatch({
        type: GET_DATA,
        payload: res.data
      });
    } catch (err) {
      console.log("errors", err);
      dispatch({
        type: NO_DATA,
      });
    }
};