var express = require('express');
const pasta_controlers= require('../controllers/pasta');
var router = express.Router();
/* GET pastas */
router.get('/', pasta_controlers.pasta_view_all_Page );
module.exports = router;
