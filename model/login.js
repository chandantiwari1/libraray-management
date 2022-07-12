const db = require('../util/database');

module.exports = class Login {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    loggedin() {
        db.query('SELECT * FROM users',function(err,data){
            console.log(data);
        });
    }
    save(){
        db.query('INSERT INTO users(name,')
    }
};