const express = require('express')
const router = express.Router();

const db =require("../Model/crud")



//GET API
router.get('/data' , (req,res)=>{
    db.findAll().then((data)=>{
        console.log(data)
        res.send(data)
    })
});


//POST API
router.post("/adddata", (req,res)=>{
    var data = req.body
    console.log(data)

    var data ={
        firstName:data.firstname,
        lastName:data.lastname,
        place:data.place,
        age:data.age
    }

    db.create(data).then((data)=>{
        res.send("Success")
    }).catch((err)=>{
        console.log(err)
        res.send(err)
    })
});



//UPDATE API
router.put("/update/:id" , (req,res)=>{
    const id = req.params.id;
    console.log(id);
    const data = req.body;
    console.log(data);

    var updatedata ={
        firstName:data.firstname,
        lastName:data.lastname,
        place:data.place,
        age:data.age
    }

    db.findByPk(id).then((data)=>{
        console.log(data)
        if(data===null){
            res.send("No data Found")
        }else{
            db.update(updatedata,{ where: {id: id}}).then((data)=>{
                res.send("Sucessfully Updated")
            })
        }
    })


});


//DELETE API
router.delete("/delete/:id" , (req,res)=>{
    const id = req.params.id;
    console.log(id)

    db.destroy({
        where: {
           id:id 
        }
     }).then((data)=>{
        res.send("Sucess")
     }).catch((err)=>{
        res.send(err)
     })
});



module.exports=router;
