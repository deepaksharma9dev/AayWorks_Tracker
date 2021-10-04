import { CHECKED_OUT, CHECKED_OUT_ERROR } from "../actions/types";


const initialState = {
    loading: true
};

export default function(state = initialState, action) {
    const { type } = action;
    switch (type) {
        case CHECKED_OUT:
        case CHECKED_OUT_ERROR:
            return {
                loading: false,
            };
        default:
            return state;
    }
}