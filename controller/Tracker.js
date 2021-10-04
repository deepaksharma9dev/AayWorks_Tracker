const { userModel } = require('../Db/Models/User');
const { validationResult } = require('express-validator');

const Tracker = async(req, res) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ msg: errors.array() });
    }

    try {

        const { userName, currentDate } = req.body;

        const user = await userModel.find({
            userName: userName
        });


        let isExists = 0;

        user.forEach(async(user) => {
            const old = new Date(user.createdAt);
            let today = new Date(currentDate);
            const OldDate = old.getFullYear() + '-' + (old.getMonth() + 1) + '-' + old.getDate();
            today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            if (OldDate === today) {
                isExists++;
                return res.status(200).json([user]);
            }
        });

        if (!isExists) {
            return res.status(400).json({ msg: "You Have Not Worked" });
        }

    } catch (err) {
        console.log(err)
        console.error(err.message);
    }
};


module.exports = { Tracker };