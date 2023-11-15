var Pasta = require('../models/pasta');
const mongoose = require('mongoose');
const { Types } = mongoose;

// List of all pastas
exports.pasta_list = async function (req, res) {
    try {
      const pastaItems = await Pasta.find();
      console.log('pastaItems:', pastaItems); 
      res.render('pasta', { title: 'Pasta List', pastaItems });
    } catch (err) {
      res.status(500);
      res.send(`{"error"}:${err}}`);
    }
  };

// VIEWS
// Handle a show all view
exports.pasta_view_all_Page = async function (req, res) {
  try {
    const thePastas = await Pasta.find();
    res.render('pasta', { title: 'Pasta Search Results', results: thePastas });
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// specific pasta
exports.pasta_detail = async function(req, res) {
  console.log("detail", req.query.id); 

  try {
      const objectId = new Types.ObjectId(req.query.id); 
      console.log("objectId", objectId);

      const result = await Pasta.findById(objectId);
      console.log("result", result);

      if (!result) {
          res.status(404).json({ error: `Document with id ${req.query.id} not found` });
          return;
      }

      res.json(result);
  } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
};



// Handle pasta create on POST.
exports.pasta_create_post = async function (req, res) {
    const { name, weight, price } = req.body;
  
    try {
      const newPasta = new Pasta({ name, weight, price });
      const savedPasta = await newPasta.save();
      res.status(201).json(savedPasta);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// Handle pasta delete form on DELETE.
exports.pasta_delete = async function(req, res){
  console.log("delete " +req.params.id)
  try {
    result = await Pasta.findByIdAndDelete(req.params.id)
    console.log("Removed " + result)
    res.send(result)
  } catch (err){
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
  }
};

// Handle pasta update form on PUT.
exports.pasta_update_put = async function(req, res) {
  console.log(`Update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);

  try {
    let toUpdate = await Pasta.findById(req.params.id);

    if (req.body.name) toUpdate.name = req.body.name;
    if (req.body.weight) toUpdate.weight = req.body.weight;
    if (req.body.price) toUpdate.price = req.body.price;

    let result = await toUpdate.save();

    console.log("Success " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
  }
};


// Handle a show one view with id specified by query
exports.pasta_view_one_Page = async function(req, res) {
  console.log("single view for id " + req.query.id)
  try{
    result = await Pasta.findById( req.query.id)
    res.render('pastadetail',
    { title: 'Pasta Detail', toShow: result });
    }
  catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
  };


