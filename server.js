var express = require('express');
var app = express();

require('./router/main')(app);
app.set('views',__dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/views'));

var server = app.listen(3000, function() {
  console.log('Server started!');
});
