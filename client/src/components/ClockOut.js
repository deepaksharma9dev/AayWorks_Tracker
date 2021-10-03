import React,{Fragment} from 'react';
import LogOut from '../asserts/Icons/logout(1)@1X.png'
import LeftArrow from "../asserts/Icons/ArrowLeft.png";
import DownArrow from "../asserts/Icons/DownArrow.png";
import LocationIcon from "../asserts/Icons/Location-icon.png";

export const ClockOut = () => {
    return (
      <Fragment>
        <div className="container d-flex flex-column justify-content-between clock-in-container-sec">
          <div className="row">
            <div className="col-12">
              <div className="card clock-in-card-sec">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="left-arrow mr-3">
                      <img src={LeftArrow} />
                    </div>
                    <div className="door-in-text card-title"> Clock-Out</div>
                  </div>
                  <div className="d-flex justify-content-around">
                    <div className="door-in-sec w-30 align-self-center">
                      <img src={LogOut} className="door_in_icon" />
                    </div>
                    <div className="company-about-sec w-50">
                      <div className="company-name-sec d-flex align-items-center justify-content-between">
                        <div className="company-name">Mohan Interprieses</div>
                        <div className="right-arrow-sec">
                          <img src={DownArrow} />
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
              <div className="card clockOutlocation_card_sec ml-5 h-100">
                <div className="card-body">
                  <div className="h2">9.12 AM IST</div>
                  <div className="card-text">Wednesday, 25 sep</div>
                  <div className="location-icon-sec d-flex mt-4">
                    <div className="location-icon mr-2">
                      <img src={LocationIcon} />
                    </div>
                    <div className="location-name">Palasiya Chowk</div>
                  </div>
                  <div className="text-center clock-in-button mt-5 border py-2 ml-5">
                    Clock in
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}
