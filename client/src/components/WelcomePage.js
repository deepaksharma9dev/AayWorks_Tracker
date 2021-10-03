import React,{Fragment} from 'react'

export const WelcomePage = () => {
    return (
        <Fragment>
            <div className="container-fluid d-flex flex-column justify-content-end welcome_page_sec">
        <div className="path_sec d-flex flex-column justify-content-center text-center">
            <div className="h2 mb-2">
                Select
            </div>
            <div className="d-flex justify-content-around mt-5">
                <div className="clock_in_button_sec">
                    <img src="../asserts/Icons/enter@1X.png" alt="clock in icon"/>
                    <div className="h5"> Clock-in</div>
                </div>
                <div className="clock_out_button_sec">
                    <img src="../asserts/Icons/logout (1)@1X.png" alt="Clock out button"/>
                    <div className="h5">
                        Clock-out
                    </div>
                </div>
                <div className="tracker_button_sec">
                    <img src="../asserts/Icons/calendar@1X.png" alt="tracker"/>
                    <div className="h5">
                        Tracker
                    </div>
                </div>
            </div>

        </div>
    </div>
        </Fragment>
    )
}
