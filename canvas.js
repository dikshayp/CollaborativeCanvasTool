var express = require('express')
  , app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);
  
  server.listen(8080);
  
  app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection',function(socket){
		socket.on('message',function(message){
			socket.broadcast.emit('message',message);
		});
		socket.on('disconnect',function(){
			
		});
});



