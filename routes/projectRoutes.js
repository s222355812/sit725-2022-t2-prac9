var express = require("express")
var router = express.Router();
let { getDB } = require('../dbConnect');
let projectCollection;
getDB.then((result) => {
    projectCollection = result.collection('SIT725');
});

const Project = require("../models/Project");

//get api
router.get('/', (req, res) => {
    projectCollection.find({}).toArray((err, result) => {
        if (err) {
            res.json({
                statusCode: 400,
                message: err
            })
        } else {
            res.json({
                statusCode: 200,
                message: "Success",
                data: result
            })
        }
    })
})

// post api
router.post('/', (req, res) => {
    console.log("New Project added", req.body)
    var newProject = new Project({
        title: req.body.title,
        image: "images/" +req.body.image + ".jpg",
        link: req.body.link,
        description: req.body.description
    })

    projectCollection.insertOne(newProject, (err, result) => {
        if (err) {
            res.json({
                statusCode: 400,
                message: err
            })
        } else {
            res.json({
                statusCode: 200,
                message: "Project Successfully added",
                data: result
            })
        }
    })
})

module.exports = router;