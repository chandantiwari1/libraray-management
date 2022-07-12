const mysql = require('mysql');

const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"put_paper"
});



module.exports=pool;