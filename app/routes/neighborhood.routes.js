require('dotenv').config();


module.exports = app => {
    const neighborhoods = require("../controllers/neighborhood.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", neighborhoods.create);
  
    // Retrieve all Tutorials
    router.get("/", neighborhoods.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", neighborhoods.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", neighborhoods.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", neighborhoods.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", neighborhoods.delete);
  
    // Delete all Tutorials
    router.delete("/", neighborhoods.deleteAll);
  
    app.use('/api/neighborhoods', router);
  };