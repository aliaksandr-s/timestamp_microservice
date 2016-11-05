'use strict'

const express = require('express');
const dateConverter = require('./dateConverter');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'));
})

app.use(function (req, res, next) {
    const url = req.url.slice(1);
    let date = dateConverter.convertStrnigToDate(url);
    res.json(date);
});

app.listen(port, function () {
    console.log('listening')
})

