const Router = require('express').Router();
const { ClockIn } = require('../controller/ClockIn');
const checkOut = require('../controller/ClockOut');
const { Tracker } = require('../controller/Tracker');
const { check } = require('express-validator');

Router
    .post('/user/clockin', [
        check('userName', "userName is required").not().isEmpty(),
        check('ClockIn', "clock in is required").not().isEmpty()
    ], ClockIn);

Router
    .put('/user/clockout', [
        check('userName', "userName is required").not().isEmpty(),
    ], checkOut.clockOut);


Router
    .get('/user/tracker', Tracker);

module.exports = Router;