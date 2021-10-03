const mongoose = require('mongoose');
let db = process.env.MONGO_URI;

module.exports.connect_db = async() => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("database has connected successfully");
    } catch (err) {
        console.error(err);

        process.exit(1);
    }

};