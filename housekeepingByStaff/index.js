const express = require('express');
const connectwithdb = require("./db");
const housekeep = require("./model/housekeepingByStaff.model");

const app = express();
connectwithdb();

app.get("/",(req,res) =>{
    res.send("Hello backend");
})

// for create
app.get("/housekeepingStaffCreation", (req,res) =>{
    const housekeepcreate = housekeep.create({
      guestID : 25,
      name : "Deepali yadav",
      roomno: 420,
      check_in: "2024-06-14T12:00:00.000+00:00",
      checkout: "2024-06-16T12:00:00.000+00:00",
      time : "2 days",
      status: "done"
    });
    console.log(housekeepcreate);
    res.send("Request created in the database");
})

// to find 
app.get("/housekeepingStaffFind", async(req,res)=>{
    const details = await housekeep.find(); 
    console.log(details);
    res.send("Housekeeping details");
})

app.listen(3000, () => {
    console.log("app is listening on port number 3000");
})