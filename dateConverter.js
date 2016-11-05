const moment = require('moment');

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

module.exports = {
    convertStrnigToDate: convertStrnigToDate
}