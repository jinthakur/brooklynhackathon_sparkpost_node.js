
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Password reset!');
});



var SparkPost = require('sparkpost');
var options = {
  endpoint: 'https://api.sparkpost.com:443'
};
var client = new SparkPost('c0d9744155d7bbbda929d4e6f4b2822cc1355052', options);

var trans = {
	
  
  content: {
        from: { 'name': 'jin', 'email': 'jin@elegantfelt.com'},
        subject: 'Your match results',
        reply_to: 'bounces@elegantfelt.com',
		
		
        template_id: 'test'
    },
  return_path: 'bounces@elegantfelt.com',
  recipients: [{ address: { email: 'tjitender@gmail.com' } }]
};

client.transmissions.send({transmissionBody: trans}, function(err, res) {
  if (err) {
    console.log(err);
  } else {
    console.log(res.body);
    console.log('Congrats you can use our SDK!');
  }
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});