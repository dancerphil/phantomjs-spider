phantom.outputEncoding = "gbk";

"use strict";
var fs = require('fs')
var page = require('webpage').create();

var url = 'https://www.baidu.com/s?wd=%E6%B1%BD%E8%BD%A6%E5%93%81%E7%89%8C%E5%A4%A7%E5%85%A8&usm=1&ie=utf-8&rsv_cq=%E6%B1%BD%E8%BD%A6%E5%93%81%E7%89%8Clogo&rsv_dl=0_left_sp_img_4_18696'
page.open(url, function(status) {
	var x = page.evaluate(function() {
		var imgs = $(".op_definitive_answer_po_itemsArea .c-img")
		var urls = []
		for (var i = 0; i < imgs.length; i++) {
			urls.push(imgs[i].src)
		}
		// TODO while(hasNextButton){click and read}
		return urls;
	});

	try {
		var s = ''
		for (xx in x) {
			s += x[xx] + '\r\n';
			console.log(x[xx]);
		}
		fs.write('urls.txt', s, 'w');
	} catch (e) {
		console.log(e);
	}

})