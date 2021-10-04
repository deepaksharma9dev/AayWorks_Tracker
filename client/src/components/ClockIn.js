import React, { Fragment, useState ,useEffect} from "react";
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import CheckIn from '../asserts/Icons/enter@1X.png';
import LeftArrow from '../asserts/Icons/ArrowLeft.png';
import DownArrow from '../asserts/Icons/DownArrow.png';
import LocationIcon from '../asserts/Icons/Location-icon.png';
import {Checked} from '../actions/ClockIn';

const ClockIn = ({ Checked }) => {

  const [currentTime, setCurrentTime] = useState(new Date());
  const history = useHistory();


  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];



  useEffect(() => {
    setCurrentTime(new Date());
  }, []);



  const Clockin =
    currentTime.getHours() +
    ":" +
    currentTime.getMinutes() +
    ":" +
    currentTime.getSeconds();


  const EnterTheTime = (Clockin) => {
    Checked(Clockin);
  };


  

  return (
    <Fragment>
      <div className="container d-flex flex-column justify-content-between clock-in-container-sec">
        <div className="row">
          <div className="col-12">
            <div className="card clock-in-card-sec">
              <div className="card-body">
                <div className="d-flex">
                  <div className="left-arrow mr-3">
                    <img src={LeftArrow} alt="" />
                  </div>
                  <div className="door-in-text card-title"> Clock-In</div>
                </div>
                <div className="d-flex justify-content-around">
                  <div className="door-in-sec w-30 align-self-center">
                    <img src={CheckIn} className="door_in_icon" alt="" />
                  </div>
                  <div className="company-about-sec w-50">
                    <div className="company-name-sec d-flex align-items-center justify-content-between">
                      <div className="company-name">Mohan Interprieses</div>
                      <div className="right-arrow-sec">
                        <img src={DownArrow} alt="" />
                      </div>
                    </div>
                    <div className="shop-num-sec">Shop 53</div>
                    <div className="address-sec">Palasiya Chowk</div>
                    <div className="state-sec">Indore, MP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card location_card_sec ml-5 h-100">
              <div className="card-body">
                <div className="h2">{Clockin} UTC</div>
                <div className="card-text">
                  {weekDays[currentTime.getDay()]}, {currentTime.getDate()}{" "}
                  {Months[currentTime.getMonth()]}
                </div>
                <div className="location-icon-sec d-flex mt-4">
                  <div className="location-icon mr-2">
                    <img src={LocationIcon} alt="" />
                  </div>
                  <div className="location-name">Palasiya Chowk</div>
                </div>
                <div
                  className="text-center clock-in-button mt-5 border py-2 ml-5"
                  onClick={() => {
                    EnterTheTime(Clockin)
                    history.push("/welcome-page");
                  }}
                >
                  Clock in
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};


export default connect(null,{Checked})(ClockIn);