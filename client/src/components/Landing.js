import React,{Fragment} from 'react'
import {useHistory} from 'react-router-dom';
import AayWorks from '../asserts/Icons/AayWorks.png'
export const Landing = () => {


      let history = useHistory();
      setTimeout(() => {
        history.push("/welcome-page")
      },5000)

    return (
      <Fragment>
        <div
          className="container text-center d-flex flex-column justify-content-center"
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
