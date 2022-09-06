var express = require("express")
var router= express.Router();


//get api
router.get('/',(req,res) => {
   
            res.json({statusCode: 200, message:"Success", data: {'name':'Vrushali'}})
        })
   