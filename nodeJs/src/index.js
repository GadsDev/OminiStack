const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json())

mongoose.connect(
    'mongodb://gadsden:250433@localhost/rapperlist?authSource=admin&w=1',
 {
      useNewUrlParser: true
 }
 );

 app.use(require('./routes/routes'))

app.listen(3000, () => {
    console.log('Serivodr rodando na porta 3000');
});
