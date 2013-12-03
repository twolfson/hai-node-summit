var http = require('http');

module.exports = function (port) {
  var app = http.createServer(function (req, res) {
    res.end('Hello World!\n');
  });

  app.listen(port);
  return app;
};

if (module.parent === null) {
  module.exports(9005);
  console.log('Server is listening at http://127.0.0.1:' + 9005 + '/');
}

