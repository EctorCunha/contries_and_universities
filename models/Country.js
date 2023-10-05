const mongoose = require('mongoose');

const Country = mongoose.model("Country", {
    country: String,
    university: String,
})

module.exports = Country;