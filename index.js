require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connect = require('./Db/db');

app.use(cors());
app.use(express.json());

const userRoutes = require('./Api/Users');

app.use('/api/users', userRoutes);
app.listen(process.env.PORT || 7000, async() => {
    try {
        await connect.connect_db();
        console.log("server is running");
    } catch (err) {
        console.error(err);
    }
});