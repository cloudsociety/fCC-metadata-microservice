var express = require('express');
var multer = require('multer');

var app = express();
var PORT = process.env.PORT || 3000;

var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

app.use(express.static('public'));

app.post('/getsize', upload.single('file'), (req, res) => {
  // console.log(req.file);
  var fileSize = {size: req.file.size};
  res.send(fileSize);
}),


app.listen(PORT, function () {
  console.log(`Express server is up on port ${PORT}`);
});

module.exports = {app};
