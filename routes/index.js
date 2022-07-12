var express = require('express');
var router = express.Router();
const loginController = require('../controller/login')
/* GET home page. */
router.get('/',loginController.getUser);
router.post('/',loginController.postUser);


module.exports = router;
