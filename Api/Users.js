const Router = require('express').Router();
const { ClockIn } = require('../controller/ClockIn');
const checkOut = require('../controller/ClockOut');
const { Tracker } = require('../controller/Tracker');
const { check } = require('express-validator');

Router
    .post('/user/clockin', ClockIn);

Router
    .put('/user/clockout', checkOut.clockOut);


Router
    .get('/user/tracker', Tracker);

module.exports = Router;