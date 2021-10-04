const { userModel } = require('../Db/Models/User');


const Tracker = async(req, res) => {
    try {
        const userName = "deepak123";
        const user = await userModel.findOne({
            userName: userName
        });
        const old = new Date(user.createdAt);
        const today = new Date();
        const OldDate = old.getFullYear() + '-' + (old.getMonth() + 1) + '-' + old.getDate();
        const currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

        if (OldDate === currentDate) {
            return res.status(200).json({ user });
        } else {
            return res.status(400).json({ errors: "" });
        }

    } catch (err) {
        console.error(err.message);
    }
};


module.exports = { Tracker };