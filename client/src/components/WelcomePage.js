import React,{Fragment} from 'react';
import {useHistory} from 'react-router-dom'
import ClockIn from "../asserts/Icons/enter@1X.png";
import ClockOut from "../asserts/Icons/logout(1)@1X.png";
import Calendar from "../asserts/Icons/calendar@1X.png";

export const WelcomePage = () => {
    let history = useHistory();
    return (
      <Fragment>
        <div className="container d-flex flex-column justify-content-end welcome_page_sec">
          <div className="path_sec d-flex flex-column justify-content-center text-center">
            <div className="h3 mb-2">Select</div>
            <div className="d-flex justify-content-around mt-5">
              <div className="clock_in_button_sec">
                <img
                  src={ClockIn}
                  alt="clock in icon"
                  onClick={() => history.push("/clock-in")}
                />
                <div className="h5"> Clock-in</div>
              </div>
              <div className="clock_out_button_sec">
                <img
                  src={ClockOut}
                  alt="Clock out button"
                  onClick={() => history.push("/clock-out")}
                />
                <div className="h5">Clock-out</div>
              </div>
              <div className="tracker_button_sec">
                <img
                  src={Calendar}
                  alt="tracker"
                  onClick={() => history.push("/calender")}
                />
                <div className="h5">Tracker</div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}
