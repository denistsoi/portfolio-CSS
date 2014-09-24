var express = require('express');
var http    = require('http');

var app     = express();
var server  = http.Server(app);


var title = 'Denis Tsoi\'s CSS portfolio';

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', { 
    title: title })
});


// serve static files
app.use(express.static(__dirname + '/public'));

// start server
server.listen(process.env.PORT || 3000);
// var server = app.listen(3000, function(){
//   console.log('listening on port %d', server.address().port);
// });