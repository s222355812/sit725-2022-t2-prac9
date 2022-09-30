const MongoClient = require('mongodb').MongoClient

//adding database connection
const uri = 'mongodb+srv://vrushali:Dewberry2021@cluster0.dsabwdb.mongodb.net/?retryWrites=true&w=majority'

let getDB = new Promise((resolve, reject) => {
    MongoClient.connect(uri, {
        useNewURLParser: true
    }, (err, result) => {
        if (err) {
            reject(err);
            console.log('MongoDB error catch');
        } else {
            resolve(result.db('test'));
            console.log('MongoDB connection successful');
        }
    });
});

module.exports = { getDB }