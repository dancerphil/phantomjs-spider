var fs = require('fs');
var wp =require('webpage')
var file = fs.open("urls.txt", 'r');
var urls=file.read();
file.close();
urlArray=urls.split('\r\n');

var p=new Array(urlArray.length);
console.log(p.length);
for(var i = 0; i < p.length; i++){
	var t=function(i){
		console.log("f");
		p[i] = require('webpage').create();
		p[i].open(urlArray[i], function(status) {
			console.log("Status: " + status);
			  if(status === "success") {
				p[i].viewportSize = { width: 58, height : 58 };
				p[i].render(i+'.jpg');
			}
		});
	}(i);
}
