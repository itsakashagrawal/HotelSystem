const mongoose = require("mongoose");

const housekeepingSchema = mongoose.Schema({
     guestID : Number,
     name : String,
     roomno: Number,
     check_in: Date,
     checkout: Date,
     time : String,
     status: String
})

module.exports = mongoose.model("housekeepings", housekeepingSchema);