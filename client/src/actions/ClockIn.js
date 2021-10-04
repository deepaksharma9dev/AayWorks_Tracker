import axios from 'axios';
import { CHECKED_IN_ERROR, CHECKED_IN } from './types';


export const Checked = (
    ClockIn) => async dispatch => {
    console.log(ClockIn);
    const userName = "kartik23";
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ userName, ClockIn });
    try {

        const res = await axios.post('http://localhost:7000/api/users/user/clockin', body, config);

        dispatch({
            type: CHECKED_IN
        });

    } catch (err) {
        console.log("errors", err);
        dispatch({
            type: CHECKED_IN_ERROR
        });

    }
};