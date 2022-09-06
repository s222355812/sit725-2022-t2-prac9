require('dotenv').config()

const MongoClient = require('mongodb').MongoClient

//adding database connection
const uri = 'mongodb+srv://vrushali:Dewberry2021@cluster0.dsabwdb.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {useNewUrlParser: true})

client.connect((err,db) => {
   // projectCollection = client.db().collection('SIT725');
    if(!err) {
        console.log('MongoDB Connected')
    }
    else {
        console.log("DB Error: ", err);
        process.exit(1);
    }
})
exports.MongoClient=client;