import React,{Fragment} from 'react'
import AayWorks from '../asserts/Icons/AayWorks.png'
export const Landing = () => {
    return (
      <Fragment>
        <div
          className="container-fluid text-center d-flex flex-column justify-content-center"
          id="Landing_sec"
        >
          <div className="landing_icon_sec">
            <img src={AayWorks} className="banner_sec" alt="Aayworks logo" />
          </div>
          <div className="brand_name_sec">AayWorks</div>
          <div className="slogan_sec">Reimagining the way Bharat works</div>
        </div>
      </Fragment>
    );
}
