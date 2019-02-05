const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    'mongodb://gadsden:250433@localhost/rapperlist?authSource=admin&w=1',
 {
      useNewUrlParser: true
 }
 );

app.listen(3000, () => {
    console.log('Serivodr rodando na porta 3000');
});
