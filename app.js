var express = require('express'),
  app = express(),
  cors = require('cors');

app.use(cors());

app.use('/polymer_tutorial', express.static(__dirname + '/public/polymer-tutorial-master'));


app.listen(3000, function() { console.log('listening in port 3000');});
