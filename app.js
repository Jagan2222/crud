const express = require("express");
const app = express();
const cors=require("cors");

const db =require("./src/Model/crud")
const crudRoute = require('./src/Routes/crud')

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/" , (req,res)=>{
    res.send(`Server Running on ${PORT}`)
});

 //Routes
 app.use("/", crudRoute);


app.listen(PORT , ()=>{
    console.log(`Server Running on ${PORT}`)
})