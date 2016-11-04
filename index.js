var express = require('express')
var app = express();
var port = process.env.port || 8081
app.use(express.static(__dirname));
app.get('*', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
});
app.listen(port, function() {
  console.log('Server is listening on ' + port);
});
