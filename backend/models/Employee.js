const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  designation: String,
  salary: Number,
  status: String,
});

module.exports = mongoose.model('Employee', EmployeeSchema);
