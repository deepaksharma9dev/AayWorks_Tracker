const { validationResult } = require('express-validator');
const { userModel } = require('../Db/Models/User');

const ClockIn = async(req, res) => {



    // const { username, ClockIn } = req.body;

    // const errors = validationResult(request);
    // if (!errors.isEmpty()) {
    //     return {
    //         status: 400,
    //         errors: errors.array()
    //     };
    // }
    try {
        const userName = "deepak123";
        const today = new Date();
        const ClockIn = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

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