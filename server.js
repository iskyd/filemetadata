'use strict';

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
var routes     = require('./routes/index.js');

app.use(bodyParser({defer: true}));

routes(app);

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});
