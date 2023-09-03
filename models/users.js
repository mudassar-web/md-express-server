const mongoose = require('mongoose');

module.exports = mongoose.model('users', { fname: String, lname: String });
