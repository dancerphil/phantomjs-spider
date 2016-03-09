
// "use strict";
var fs = require('fs');
var wp =require('webpage')
var file = fs.open("urls.txt", 'r');
var urls=file.read();
file.close();
urlArray=urls.split('\r\n');
// console.log(urlss);
var pages=[];
for (i in urlArray){
	console.log(urlArray[i]);
	pages.push( wp.create());
	pages[i].open(urlArray[i], function(status) {
		console.log("Status: " + status);
		  if(status === "success") {
			pages[i].viewportSize = { width: 58, height : 58 };
			pages[i].render(i+'.jpg');
		}
	});
}
console.log(urlArray.length);
console.log(pages.length);
// phantom.exit();
// var anotherPage = require('webpage').create();
// anotherPage.open('https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3505352579,1716618655&fm=58', function(status) {
// 	console.log("Status: " + status);
// 	  if(status === "success") {
// 		anotherPage.viewportSize = { width: 58, height : 58 };
// 		anotherPage.render('1.jpg');
// 	}
// });