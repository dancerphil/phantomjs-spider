var fs = require('fs');
var wp =require('webpage')
var file = fs.open("urls.txt", 'r');
var urls=file.read();
file.close();
urlArray=urls.split('\r\n');

var p1 = require('webpage').create();
p1.open(urlArray[0], function(status) {
	console.log("Status: " + status);
	  if(status === "success") {
		p1.viewportSize = { width: 58, height : 58 };
		p1.render('0.jpg');
	}
});
var p2 = require('webpage').create();
p2.open(urlArray[1], function(status) {
	console.log("Status: " + status);
	  if(status === "success") {
		p2.viewportSize = { width: 58, height : 58 };
		p2.render('1.jpg');
	}
});
var p3 = require('webpage').create();
p3.open(urlArray[2], function(status) {
	console.log("Status: " + status);
	  if(status === "success") {
		p3.viewportSize = { width: 58, height : 58 };
		p3.render('2.jpg');
	}
});
var p4 = require('webpage').create();
p4.open(urlArray[3], function(status) {
	console.log("Status: " + status);
	  if(status === "success") {
		p4.viewportSize = { width: 58, height : 58 };
		p4.render('3.jpg');
	}
});