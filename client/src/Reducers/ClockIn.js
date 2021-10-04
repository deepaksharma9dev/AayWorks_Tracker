import { CHECKED_IN, CHECKED_IN_ERROR } from "../actions/types";


const initialState = {
    loading: true
};

export default function(state = initialState, action) {
    const {type} = action;
    switch (type) {
      case CHECKED_IN:
      case CHECKED_IN_ERROR:
        return {
          loading: false,
        };
        default:
            return state;
    }
}