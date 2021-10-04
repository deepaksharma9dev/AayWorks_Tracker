import { combineReducers } from 'redux';
import ClockIn from './ClockIn';
import ClockOut from './ClockOut';
import Tracker from './Tracker';

export default combineReducers({
    ClockIn,
    ClockOut,
    Tracker
});