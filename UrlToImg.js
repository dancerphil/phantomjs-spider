var country='德国'
var file = require('fs').open(country+".txt", 'r')
var urls = file.read()
file.close()

urlArray = urls.split('\r\n')

for (var i = 0; i < urlArray.length; i+=2) {
	var t = function(i) {
		var page = require('webpage').create()
		page.open(urlArray[i+1], function(status) {
			console.log("Status: " + status)
			if (status === "success") {
				page.viewportSize = {
					width: 58,
					height: 58
				}
				page.render(country+'/'+urlArray[i] + '.jpg')
			}
		})
	}(i)
}