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
const axios = require('axios')
const {addNotifications} = require('./services/notificationsService.js');

mongoose.connect('mongodb+srv://yuriy:Wdj_7yex6cE5cjp@cluster0-odkqs.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser:true,useUnifiedTopology: true})
    .then(() => {console.log('Database is connected') },
err => { console.log('Can not connect to the database' +err)});

app.use(cors())
app.use(express.json());
routes(app)

app.use('/', express.static('./client/my-app/build'));

io.on('connection', socket => {
  socket.on('new-user', (room, name) => {
    console.log("Join-"+room)
    socket.join(room)
  })
  socket.on('send-chat-message', (room, message,email,name,id_notifications) => {
    const roomList = io.sockets.adapter.rooms[room];
    if(roomList.length === 1){
        const userEmail = room.replace(email,'')
        const message = { 
          app_id: "890ecd33-a1e8-443b-8489-0d76bfdd453a",
          contents: {"en": "English Message"},
          include_player_ids: [id_notifications]
        };
        axios.post("https://onesignal.com/api/v1/notifications",message).then((res) => console.log(res))
        addNotifications(userEmail,room)
    }else{
      console.log(name+"-"+JSON.stringify(roomList))
      socket.to(room).broadcast.emit('chat-message', { message: message,email,name,room})
    }
    
  })
  socket.on('leave-room',(room)=>{
    console.log("leave-"+room)
    socket.leave(room)
  })
 
})

server.listen(port, () => console.log(`Listening on port ${port}`))