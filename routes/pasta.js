var express = require('express');
const pasta_controlers = require('../controllers/pasta');
var router = express.Router();

/* GET pasta detail */
router.get('/', pasta_controlers.pasta_list);
router.get('/:id', pasta_controlers.pasta_detail);
router.put('/:id', pasta_controlers.pasta_update_put);
router.delete('/:id', pasta_controlers.pasta_delete);
router.get('/detail/:id', pasta_controlers.pasta_detail);


module.exports = router;

