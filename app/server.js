const { timeOutPromise } = require('./modules/utils.js');

const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

http.listen(8090, () => {
  console.log('Listening in port 8090');
});

app.use(express.static(__dirname + '/www'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/www/index.html');
});

io.on('connection', (socket) => {
  let msg = 'Welcome to our chat, please take a sit and wait...';

  console.log('User connected');

  io.emit('connectedUsr', { msg });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  socket.on('chatMsg', (e) => {
    console.log('New message: ' + e.msg);
    io.emit('chatMsg', e);
  });
});

app.get('/load', (req, res) => {
  let conf = {res};
  let num;
  let text;

  timeOutPromise(() => {
    num = (Math.random()).toString();
  }, 957)
  .then(() => {
    return timeOutPromise(() => {
      text = 'Hello World => ' + num;
    }, 1239);
  })
  .then(() => {
    conf.body = text;
    setResponse(conf);
  });
});

const setResponse = ({res, code = 200, headers = {'Content-type': 'text/html'}, body} = {}) => {
  res.writeHead(code, headers);
  res.send(body);
  res.end();
};
