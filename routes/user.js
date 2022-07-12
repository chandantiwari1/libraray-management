var express = require('express');
var router = express.Router();

const db = require("../util/database");
router.get('/',(req,res,next)=>{
    res.render('user');
});

router.post('/',(req,res,next)=>{
    // res.send(req.body);
    const username=req.body.username;
    const password=req.body.password;
    const batch= req.body.batch;
    const clas = req.body.class;
    db.query('INSERT INTO registerbook(name,batch,class,password) VALUES(?,?,?,?)',[username,batch,clas,password],function(err,data){
        console.log(data);
    }); 
});

module.exports=router;