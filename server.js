'use strict'

const express = require('express');
const moment = require('moment');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    console.log(req.url)
    res.send('Hello World!')
})

app.use(function (req, res, next) {
    const url = req.url.slice(1);
    let date = convertStrnigToDate(url);
    res.json(date);
});

app.listen(port, function () {
    console.log('listening on port 8080!')
})

function convertStrnigToDate(url) {
    let date = {
        unix: null,
        natural: null
    }

    if (moment.unix(url).isValid()) {
        date.unix = +url;
        date.natural = moment.unix(url).format("MMMM D, YYYY");
    } else if (moment(url).isValid()) {
        date.natural = moment(url).format("MMMM D, YYYY");
        date.unix = +moment(url).format("X");
    }

    return date;
}