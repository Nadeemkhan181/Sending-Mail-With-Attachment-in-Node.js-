
//Sending Emails with File In Node

var http = require('http');
var nodemailer = require('nodemailer');
var fs = require('fs');

http.createServer(function (request, response) {
response.write("<h1 style=color:red>Email Sent Succesfully</h1>");



var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'xyz@gmail.com',
    pass: 'password'
  }
});

fs.readFile("./port-Copy.html", function (err, data) {
var mailOptions = {
  from: 'abc123@gmail.com',
  to: 'xyz123@gmail.com',
  subject: 'Sending Email using Node.js',
  text: '<h1>hello</h1>!',
  attachments: [{'filename': 'portCopy.txt', 'content': data}]
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
 console.log('Email sent: ' + info.response);
  }
});
response.end();
});
}).listen(8080);
