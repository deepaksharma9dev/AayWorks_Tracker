import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store'
import {Landing} from './components/Landing';
import {WelcomePage} from './components/WelcomePage';
import ClockIn from './components/ClockIn';
import ClockOut from './components/ClockOut';
import {Calender} from './components/Calender';
import {Tracker} from './components/Tracker';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/welcome-page" component={WelcomePage} />
            <Route exact path="/clock-in" component={ClockIn} />
            <Route exact path="/clock-out" component={ClockOut} />
            <Route exact path="/calender" component={Calender} />
            <Route exact path="/Tracker" component={Tracker} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
