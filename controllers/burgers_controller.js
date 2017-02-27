var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require('../models/burger.js');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
        res.render('index', { burgers: data })
    })

});


router.post("/create", function(req, res) {
    burger.create(['burger_name'], [req.body.name], function(response) {
        res.redirect('/');
    })
})

// Export routes for server.js to use.
module.exports = router;