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
module.exports = router;