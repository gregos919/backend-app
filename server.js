const express = require('express');
const app = express();
const expressValidator = require('express-validator');
const bodyParser = require('body-parser');
const PORT = 3000;
const contact = require('./routes/contact.route');

app.use(bodyParser.json());

app.use(expressValidator());

app.listen(PORT, function(){
    console.log('Server is running on PORT: ',PORT);
});

app.use('/api/contact',contact);


