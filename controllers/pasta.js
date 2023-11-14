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
  console.log("detail", req.params.id);

  try {
      const objectId = new Types.ObjectId(req.params.id); // Use 'new' to create ObjectId
      console.log("objectId", objectId);

      const result = await Pasta.findById(objectId);
      console.log("result", result);

      if (!result) {
          res.status(404).json({ error: `Document with id ${req.params.id} not found` });
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
exports.pasta_delete = function (req, res) {
  res.send('NOT IMPLEMENTED: pasta delete DELETE ' + req.params.id);
};

// Handle pasta update form on PUT.
exports.pasta_update_put = function (req, res) {
  res.send('NOT IMPLEMENTED: pasta update PUT' + req.params.id);
};

