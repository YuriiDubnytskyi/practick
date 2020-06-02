const express = require('express');

const cors = require('cors');
const routes = require('./routes/index')
const mongoose = require('mongoose');

const port = 5000
const app = express();
var http = require('http')
var socketIO = require('socket.io');
const server = http.createServer(app)
const io = socketIO(server)



mongoose.connect('mongodb+srv://yuriy:Wdj_7yex6cE5cjp@cluster0-odkqs.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser:true,useUnifiedTopology: true})
    .then(() => {console.log('Database is connected') },
err => { console.log('Can not connect to the database' +err)});


app.use(cors())
app.use(express.json());
routes(app)
app.use(express.static(path.join(__dirname, './client/my-app/build')));
//app.use('/', express.static('./client/my-app/build'));


io.on('connection', socket => {
  socket.on('new-user', (room, name) => {
    socket.join(room)
    socket.to(room).broadcast.emit('user-connected', {room,name})
    console.log("here room"+room)
  })
  socket.on('send-chat-message', (room, message,email,name) => {
    socket.to(room).broadcast.emit('chat-message', { message: message,email,name})
  })
 
})

server.listen(port, () => console.log(`Listening on port ${port}`))
// app.listen(5000 ,function () {
//   console.log('Example app listening on port 5000!');
// });
