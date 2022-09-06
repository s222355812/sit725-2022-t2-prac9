var express = require("express")
var router= express.Router();
let projectCollection; 

//inserting project
const insertProjects = (project, callback) => {
    projectCollection.insert(project,callback);
}

//getting project
const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

// post api
router.post('/',(req,res) => {
    console.log("New Project added", req.body)
    var newProject = req.body;
    insertProjects(newProject,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Project Successfully added", data: result})
        }
    })
})

//get api
router.get('/',(req,res) => {
    getProjects((err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
})

module.exports=router;