const express = require("express");
const app = express();
const PORT = 3001
require('dotenv').config();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user')

const { mongoURI } = require('./config/database');
mongoose.connect(mongoURI);


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', userRoutes)

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

