const express = require("express");
const mongoose = require("mongoose");
// const bodyparser = require("body-parser");
const app = express();
const port = 80;
const path = require("path");
app.use(express.static(path.join(__dirname,"../")));

// app.use(express.json());
app.use(express.urlencoded());






//Mongoose 

mongoose.connect('Sensitive Info',{useNewUrlParser: true , useUnifiedTopology: true}).then(()=>{
    console.log("Mongodb connected.............");
});

var inquirySchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    modelname:String,
    country:String,
    query:String,
    date_of_inquiry:{type: Date, default: new Date()},
    time_of_inquiry:{type: String, default: new Date().toLocaleTimeString()}


});

var contact_inquiry = mongoose.model('inquiry',inquirySchema); //here inquiry is the collection name in the DB and it will automatically become plural








// ENDPOINTS
app.get("/",(req , res)=>{
    res.status(200).sendFile(path.join(__dirname,"../html/","home.html"))
});

app.get("/products",(req , res)=>{
    res.status(200).sendFile(path.join(__dirname,"../html/","products.html"))
});


app.get("/inquiry",(req , res)=>{
    res.status(200).sendFile(path.join(__dirname,"../html/","inquiry.html"))
});


app.post("/inquiry",(req , res)=>{

    const inquiry = new contact_inquiry(req.body);
    inquiry.save().then(result=>{
        // console.log(result);
        res.sendFile(path.join(__dirname,"../html/","successful.html"))
    }).catch(err=>{
        // console.log(err.message);
        res.status(400).send("Sorry some error occured. Please try again later..")
    })
});
app.get("/contact",(req , res)=>{
    res.status(200).sendFile(path.join(__dirname,"../html/","contact.html"))
});
app.get("/about",(req , res)=>{
    res.status(200).sendFile(path.join(__dirname,"../html/","about.html"))
});


// LISTENING 
app.listen(port , ()=>{
    console.log(`The application has been started succesfully on port ${port}`);
})