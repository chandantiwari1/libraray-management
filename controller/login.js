const Login = require('../model/login');

const adminUser="xxx.com";
const adminPassword="xxx.com";

exports.getUser = (req, res, next) => {

    res.render('index');
    const login = new Login(null,null);
    const val =  login.loggedin();
};
exports.postUser = (req, res, next) => {

    const user = req.body.username;
    const pass = req.body.password;
    if(user==adminUser && pass==adminPassword){
        res.render('register');
    }
    var res = db.req
    // const login = new Login();
    // login.loggedin(function (err, data) {
    //     console.log(data);
    // });
};