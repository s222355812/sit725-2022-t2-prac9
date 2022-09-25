require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const dbConnect = require('./dbConnect');
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require('./routes/userRoutes');
const {
  response
} = require('express');

let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cors())
app.use('/api/projects', projectRoutes)

app.get('/addNumber/:n1/:n2', function (request, response) {
  response.json({
    statusCode: 200
  });
});

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  setInterval(() => {
    socket.emit('number', new Date().toISOString());
  }, 1000);
  setInterval(() => {
    socket.emit('random_number', parseInt(Math.random() * 10));
  });
});

const port = process.env.port || 3000;

http.listen(port, () => {
  console.log("App running at http://localhost:" + port)
})