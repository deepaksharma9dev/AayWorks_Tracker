import axios from 'axios';
import { CHECKED_OUT, CHECKED_OUT_ERROR } from './types';


export const CheckedOut = () => async dispatch => {
    const userName = "kartik23";
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify({ userName });
    try {

        const res = await axios.put('http://localhost:7000/api/users/user/clockout', body, config);

        dispatch({
            type: CHECKED_OUT
        });

    } catch (err) {
        console.log("errors", err);
        dispatch({
            type: CHECKED_OUT_ERROR
        });

    }
};