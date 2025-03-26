const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3002;

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/integration-api', function(req, res) {
  res.sendFile(path.join(__dirname, '/integration-api.html'));
});
app.get('/paiement-api', function(req, res) {
  res.sendFile(path.join(__dirname, '/paiement-api.html'));
});
app.get('/v3-api', function(req, res) {
  res.sendFile(path.join(__dirname, '/v3-api.html'));
});


app.use('/static', express.static('public'));

app.listen(port);
console.log('Server started at http://localhost:' + port);