var express = require('express');
var router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('register');
});

router.post('/',(req,res,next)=>{
    const bookname = req.body.bookname;
    const copies = req.body.copies;
    const author = req.body.author;
    res.json({
        "bookname":bookname,
        "copies":copies,
        "author":author
    });
});

module.exports=router;