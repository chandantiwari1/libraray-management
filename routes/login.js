var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    res.send("Loginb routwer");
});

module.exports=router;