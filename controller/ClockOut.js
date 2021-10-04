const { userModel } = require('../Db/Models/User');
const { validationResult } = require('express-validator');



const clockOut = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ msg: errors.array() });
    }
    try {
        const { userName } = req.body;

        const today = new Date();

        const ClockOut = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log(userName);

        let user = await userModel.findOne({ userName: userName });
        console.log(user);

        const CheckInTime = user.ClockIn.split(":");
        const CheckOut = ClockOut.split(":");

        const totalHours = [];
        let index = 0;
        let greater_one;
        let lower_one;

        while (index < CheckInTime.length && index < CheckOut.length) {
            if (Number(CheckInTime[index]) > Number(CheckOut[index])) {
                greater_one = Number(CheckInTime[index]);
                lower_one = Number(CheckOut[index]);
                totalHours.push(String(greater_one - lower_one));
                totalHours.push(":");
            } else {
                greater_one = Number(CheckOut[index]);
                lower_one = Number(CheckInTime[index]);
                totalHours.push(String(greater_one - lower_one));
                totalHours.push(":");
            }
            index++;
        }

        totalHours.pop();

        let total = "";

        totalHours.forEach(e => total += e);

        user.ClockOut = ClockOut;
        user.WorkingHours = total;

        await user.save();

        return res.status(200).json({ msg: "Clock in has created" });

    } catch (err) {
        console.log(err);
        return res.status(400).json({ errors: err.message });
    }

};

module.exports = { clockOut };