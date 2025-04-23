var espress = require('express');
app = espress();

app.get('/', function (req, res) {
  res.send('Helo World! I am version 1.0');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!);
});