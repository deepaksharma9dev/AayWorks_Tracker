import React, { Fragment } from "react";
import LeftArrow from "../asserts/Icons/ArrowLeft.png";
import DownArrow from "../asserts/Icons/DownArrow.png";
import CalendarIcon from "../asserts/Icons/calendar@1X.png";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { Spinner } from "./Spinner";

const Tracker = ({ loading, userData }) => {
  const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return loading ? (
    <Fragment>
      <Spinner />
    </Fragment>
  ) : (
    <Fragment>
      <div className="container tracker_container">
        <div className="row">
          <div className="col-12 p-0">
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
          <div className="col-12">
            <div className="row justify-content-between text-center">
              <div className="col-3">
                <i className="fas fa-arrow-circle-left"></i>
              </div>
              <div className="col-3">
                {Months[new Date(userData[0].createdAt).getMonth()]}{" "}
                {new Date(userData[0].createdAt).getDate()}
                th {new Date(userData[0].createdAt).getFullYear()}
              </div>
              <div className="col-3">
                <i class="fas fa-arrow-circle-right"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-between px-5 py-4 result_sec">
            <div className="result_title">Clock in</div>
            <div className="employes_data">{userData[0].ClockIn}</div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-between px-5 py-4 result_sec">
            <div className="result_title">ClockOut</div>
            <div className="employes_data">{userData[0].ClockOut}</div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-between px-5 py-4 result_sec">
            <div className="result_title">Working Hours</div>
            <div className="employes_data">{userData[0].WorkingHours}</div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 d-flex justify-content-between px-5 py-4 result_sec">
            <div className="result_title">Total Earnings</div>
            <div className="employes_data">700 INR</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Tracker.propTypes = {
  loading: propTypes.bool,
  userData: propTypes.array,
};
const mapStateToProps = (state) => ({
  loading: state.Tracker.loading,
  userData: state.Tracker.payload,
});

export default connect(mapStateToProps)(Tracker);
