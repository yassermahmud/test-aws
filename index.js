var express = require('express')
var app = express();
var port = process.env.port || 80
app.use(express.static(__dirname));
app.get('*', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
});
app.listen(port, function() {
  console.log('Server is listen on ' + port);
});
