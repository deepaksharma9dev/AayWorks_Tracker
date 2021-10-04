const Router = require('express').Router();
const { ClockIn } = require('../controller/ClockIn');
const checkOut = require('../controller/ClockOut');
const { Tracker } = require('../controller/Tracker');
const { check } = require('express-validator');


//@route  Post /api/users/user/clockin
//desc    Create a user checkin
//access  Public
Router
    .post('/user/clockin', [
        check('userName', "userName is required").not().isEmpty(),
        check('ClockIn', "clock in is required").not().isEmpty()
    ], ClockIn);


//@route  PUT /api/users/user/clocklout
//desc    Create a user checkout
//access  Public
Router
    .put('/user/clockout', [
        check('userName', "userName is required").not().isEmpty(),
    ], checkOut.clockOut);

//@route  GET /api/users/user/tracker
//desc    To tracker user's working hours
//access  Public
Router
    .get('/user/tracker', Tracker);

module.exports = Router;