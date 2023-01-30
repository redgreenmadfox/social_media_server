require('dotenv').config()
const express = require('express');
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const router = require('./routes/index');

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL
const app = express();

mongoose.connect(
  MONGO_URL, 
  {
    useUnifiedTopology: true, 
    useNewUrlParser: true
  },
  () => {
    console.log('DB successfuly connected')
  }
);

//middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})