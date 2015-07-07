var https = require('https');
var fs = require('fs');

var options = {
  key: fs.readFileSync('/etc/apache2/ssl/private.pem'),
  cert: fs.readFileSync('/etc/apache2/ssl/ssl.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("Hello World\n");
}).listen(8080);
console.log('Server running');
