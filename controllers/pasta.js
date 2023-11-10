var Pasta = require('../models/pasta');
//List of all pastas
exports.pasta_list= async function(req, res){
    try{
        thePasta = await Pasta.find();
        res.send(thePasta);
    }
    catch(err){
        res.status(500);
        res.send(`{"error"}:${err}}`);
    }
};
// for a specific pasta.
exports.pasta_detail = function(req, res) {
res.send('NOT IMPLEMENTED: pasta detail: ' + req.params.id);
};
// Handle pasta create on POST.
exports.pasta_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: pasta create POST');
};
// Handle pasta delete form on DELETE.
exports.pasta_delete = function(req, res) {
res.send('NOT IMPLEMENTED: pasta delete DELETE ' + req.params.id);
};
// Handle pasta update form on PUT.
exports.pasta_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: pasta update PUT' + req.params.id);
};