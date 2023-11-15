var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var pasta_controller = require('../controllers/pasta');

/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

/// pasta ROUTES ///
// POST request for creating a pasta.
router.post('/pastas', pasta_controller.pasta_create_post);

// DELETE request to delete pasta.
router.delete('/pastas/:id', pasta_controller.pasta_delete);

// PUT request to update pasta.
router.put('/pastas/:id', pasta_controller.pasta_update_put);

// GET request for one pasta.
router.get('/pastas/:id', pasta_controller.pasta_detail);

// GET request for list of all pasta items.
router.get('/pastas', pasta_controller.pasta_list);

/* GET detail pasta page */
router.get('/detail', pasta_controller.pasta_view_one_Page);

/* GET create pasta page */
router.get('/create', pasta_controller.pasta_create_Page);

/*GET create update page*/
router.get('/update', pasta_controller.pasta_update_Page);


module.exports = router;