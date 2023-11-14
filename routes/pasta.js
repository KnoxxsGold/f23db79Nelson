var express = require('express');
const pasta_controlers = require('../controllers/pasta');
var router = express.Router();

/* GET pasta detail */
router.get('/:id', pasta_controlers.pasta_detail);

module.exports = router;

