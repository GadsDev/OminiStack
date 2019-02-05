const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);// Pegar o servidor
const io = require('socket.io')(server); //Fazer o server ouvir requisições socket

app.use(express.json())

mongoose.connect(
    'mongodb://gadsden:250433@localhost/rapperlist?authSource=admin&w=1',
 {
      useNewUrlParser: true
 }
 );

 app.use(cors())

 //Midleware
 app.use((req, res, next) => {
     req.io = io;

     return next()
 });

 app.use(require('./routes/routes'))

server.listen(3000, () => {
    console.log('Serivodr rodando na porta 3000');
});
