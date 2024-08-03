const mongoose = require("mongoose");

const salarySchema = mongoose.Schema({
    
    StaffID: String,
    Name: String,
    Role: String,
    BaseSalary: Number,
    Overtime: Number,
    Bonus: Number,
    PaymentDate: Date,
    Status: String

})

module.exports = mongoose.model("salaries", salarySchema);