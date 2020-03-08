const mongoose = require('mongoose');

const DATABASE_CONECTION = 'mongodb://mongo/test';

var userSchema = new mongoose.Schema({
  name: String
});

User = exports.User = mongose.model()

