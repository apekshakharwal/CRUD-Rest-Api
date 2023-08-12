const mongoose = require("mongoose");
var EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Required"
  },
  email: {
    type: String,
    required: "Required"
  },
 
  mobile_no: {
    type: Number,
    //  required : "Required"
  },
  designation: {
    type: String,
    required : "Required"
  },
  address: {
    type: String,
    //  required : "Required"
  },
})
const Employee = mongoose.model('Employees', EmployeeSchema);

module.exports = Employee;