import { GET_DATA, NO_DATA } from "../actions/types";


const initialState = {
    loading: true,
    payload: []
};

export default function(state = initialState, action) {
    const { type ,payload} = action;
    switch (type) {
      case GET_DATA:
        return {
          loading: false,
          payload: [...payload]
        };
    case NO_DATA:{
        return {
            loading: false
        }
    }
      default:
        return state;
    }
}