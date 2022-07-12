var express = require('express');
var router = express.Router();

const db = require('../util/database');

router.get('/',(req,res,next)=>{
    res.render('book');
})

router.delete('/',(req,res,next)=>{
    const name=req.body.bookname;
    db.query('DELETE FROM bookself WHERE bookname=?',[name],function(err,data){
        console.log(data);
    });
    res.send("dleted");
})
router.get('/all',(req,res,next)=>{
    db.query('SELECT * FROM bookself',function(err,data){
        console.log(data);
        res.send("fwetched");
    })
})

router.post('/',(req,res,next)=>{
    const bookname = req.body.bookname;
    const author = req.body.author;
    const copies = req.body.copies;
    db.query('INSERT INTO bookself(bookname,author,copies) VALUES(?,?,?)',[bookname,author,copies]);
    res.send(req.body);
});

module.exports=router;
