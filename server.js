const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const moment = require('moment');

moment().format();
app.use(express.static('/public'));

// Routes

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.get("/:time", (req, res) => {
  const inputTime = req.params.time;
  const time = formatTime(inputTime)
  res.end(time);
})

app.listen(port);


// Format Time //

const formatTime = (inputTime) => {
  let time = {
    date: null,
    timestamp: null
  }
  // If input is unix timestamp
  if (inputTime.match(/^\d*$/)){
    time.date = moment.unix(parseInt(inputTime)).format('MM/DD/YYYY');
    time.timestamp = inputTime;
  }
  // If input is human readable date (non-strict format)
  else if(moment(inputTime).isValid()){
    time.date = moment(inputTime).format('MM/DD/YYYY');
    time.timestamp = moment(inputTime).unix();
  }

  return JSON.stringify(time);
}