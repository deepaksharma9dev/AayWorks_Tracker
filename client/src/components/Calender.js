import React, { Fragment, useState,useContext } from "react";
import LeftArrow from "../asserts/Icons/ArrowLeft.png";
import DownArrow from "../asserts/Icons/DownArrow.png";
import CalendarIcon from "../asserts/Icons/calendar@1X.png";
import Calendar from "react-calendar";
import { connect } from "react-redux";
import "react-calendar/dist/Calendar.css";
import { TrackerUserData } from "../actions/Tracker";
import {useHistory} from 'react-router-dom';

const Calender = ({ TrackerUserData }) => {
  let history = useHistory()
  const [value, onChange] = useState(new Date());

  const userName = "kartik23";

  const currentDate = value;

  const TrackerDetails = () => TrackerUserData({ userName, currentDate });

  console.log(value);
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card tracker-card-sec">
              <div className="card-body">
                <div className="d-flex">
                  <div className="left-arrow mr-3">
                    <img src={LeftArrow} alt="" />
                  </div>
                  <div className="door-in-text card-title"> Track</div>
                </div>
                <div className="d-flex justify-content-around">
                  <div className="door-in-sec w-30 align-self-center">
                    <img className="door_in_icon" src={CalendarIcon} alt="" />
                  </div>
                  <div className="company-about-sec w-50">
                    <div className="company-name-sec d-flex align-items-center justify-content-between">
                      <div className="company-name">Mohan Interprieses</div>
                      <div className="right-arrow-sec">
                        <img src={DownArrow} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 d-flex  justify-content-between mx-4">
            <div>Select Days</div>
            <div className="color-icon">Color</div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <div className="row justify-content-center">
              <Calendar onChange={onChange} value={value} />
            </div>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div
            className="col-3 text-center check-button py-3 btn"
            onClick={() => {
              TrackerDetails();
              history.push('/tracker')
            }}
          >
            Check
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { TrackerUserData })(Calender);
