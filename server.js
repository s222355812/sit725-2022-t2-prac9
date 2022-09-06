var express = require("express")
var app = express()
var cors = require('cors')
//let projectCollection; 
let dbConnect=require("./dbConnect")
let projectRoutes=require("./routes/projectRoutes");
let userRoute=require("./routes/userRoutes")

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use('/api/projects',projectRoutes)
app.use('/api/projects',projectRoutes)

// const MongoClient = require('mongodb').MongoClient

// //adding database connection
// const uri = 'mongodb+srv://vrushali:Dewberry2021@cluster0.dsabwdb.mongodb.net/?retryWrites=true&w=majority'
// const client = new MongoClient(uri, {useNewUrlParser: true})

//create a project collection
//const createColllection = (collectionName) => {
    // client.connect((err,db) => {
    //     projectCollection = client.db().collection(collectionName);
    //     if(!err) {
    //         console.log('MongoDB Connected')
    //     }
    //     else {
    //         console.log("DB Error: ", err);
    //         process.exit(1);
    //     }
    // })
//}

//inserting project
// const insertProjects = (project, callback) => {
//     projectCollection.insert(project,callback);
// }

//getting project
// const getProjects = (callback) => {
//     projectCollection.find({}).toArray(callback);
// }

//get api
// app.get('/api/projects',(req,res) => {
//     getProjects((err,result) => {
//         if(err) {
//             res.json({statusCode: 400, message: err})
//         }
//         else {
//             res.json({statusCode: 200, message:"Success", data: result})
//         }
//     })
// })

// post api
// app.post('/api/projects',(req,res) => {
//     console.log("New Project added", req.body)
//     var newProject = req.body;
//     insertProjects(newProject,(err,result) => {
//         if(err) {
//             res.json({statusCode: 400, message: err})
//         }
//         else {
//             res.json({statusCode: 200, message:"Project Successfully added", data: result})
//         }
//     })
// })
// const cardList = [
//     {
//         title: "Wine Tasting",
//         image: "images/winetasting.jpg",
//         link: "Wine Tasting",
//         desciption: "Find best places for Wine Tasting"
//     },
//     {
//         title: "Day Trip",
//         image: "images/daytrip.jpg",
//         link: "Day Trip",
//         desciption: "Search best destinations for Day Trip"
//     }
//   ]
app.get('/addNumber/:n1/:n2', function(request,response){
    //response.statusCode(500);
    response.json({statusCode:200});
})

const port = process.env.port || 3000;

app.listen(port,()=>{
    console.log("App running at http://localhost:"+port)
   // createColllection('SIT725')
})