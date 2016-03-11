// var country='德国'
var file = require('fs').open("urls.txt", 'r')
var urls = file.read()
file.close()

urlArray = urls.split('\r\n')

var pages = new Array(urlArray.length)

for (var i = 0; i < pages.length; i++) {
	var t = function(i) {
		pages[i] = require('webpage').create()
		pages[i].open(urlArray[i], function(status) {
			console.log("Status: " + status)
			if (status === "success") {
				pages[i].viewportSize = {
					width: 58,
					height: 58
				}
				pages[i].render(i + '.jpg')
			}
		})
	}(i)
}