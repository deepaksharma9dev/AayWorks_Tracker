import React,{Fragment} from 'react';
import LeftArrow from "../asserts/Icons/ArrowLeft.png";
import DownArrow from "../asserts/Icons/DownArrow.png";
import CalendarIcon from "../asserts/Icons/calendar@1X.png";

export const Tracker = () => {
    return (
      <Fragment>
        <div className="container tracker_container">
          <div className="row">
            <div className="col-12 p-0">
              <div className="card tracker-card-sec">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="left-arrow mr-3">
                      <img src={LeftArrow} />
                    </div>
                    <div className="door-in-text card-title"> Track</div>
                  </div>
                  <div className="d-flex justify-content-around">
                    <div className="door-in-sec w-30 align-self-center">
                      <img className="door_in_icon" src={CalendarIcon} />
                    </div>
                    <div className="company-about-sec w-50">
                      <div className="company-name-sec d-flex align-items-center justify-content-between">
                        <div className="company-name">Mohan Interprieses</div>
                        <div className="right-arrow-sec">
                          <img src={DownArrow} />
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
                  <img src={LeftArrow} />
                </div>
                <div className="col-3">Date</div>
                <div className="col-3">
                  <img src={DownArrow} />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-between px-5 py-4 result_sec">
              <div className="result_title">Total Earnings</div>
              <div className="employes_data">700</div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-between px-5 py-4 result_sec">
              <div className="result_title">Total Earnings</div>
              <div className="employes_data">700</div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-between px-5 py-4 result_sec">
              <div className="result_title">Total Earnings</div>
              <div className="employes_data">700</div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12 d-flex justify-content-between px-5 py-4 result_sec">
              <div className="result_title">Total Earnings</div>
              <div className="employes_data">700</div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}
