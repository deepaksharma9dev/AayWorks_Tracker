const { validationResult } = require('express-validator');
const { userModel } = require('../Db/Models/User');

const ClockIn = async(req, res) => {

    const { userName, ClockIn } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ msg: errors.array() });
    }
    try {

        const User = new userModel({
            userName: userName,
            ClockIn: ClockIn
        });

        await User.save();

        return res.status(200).json({ msg: "clock in has created" });

    } catch (err) {
        return res.status(400).json({ errors: err.message });
    }





};



module.exports = { ClockIn };