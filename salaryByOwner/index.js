const express = require('express');
const connectwithdb = require("./db");
const salary = require("./model/salary.model");

const app = express();
connectwithdb();

app.get("/",(req,res) =>{
    res.send("Hello backend");
})

// for create
app.get("/ownerCreation", (req,res) =>{
    const salarycreate = salary.create({
        StaffID: 'STAFF011',
        Name: 'RAMAN',
        Role: 'Front Desk Manager',
        BaseSalary: 55000,
        Overtime: 4200,
        Bonus: 1000,
        PaymentDate: "2024-06-30T00:00:00.000Z",
        Status: 'Active'
    });
    console.log(salarycreate);
    res.send("salary created in the database");
})

// to find 
app.get("/salaryFind", async(req,res)=>{
    const details = await salary.find(); 
    console.log(details);
    res.send("staff salary details");
})

app.listen(3000, () => {
    console.log("app is listening on port number 3000");
})