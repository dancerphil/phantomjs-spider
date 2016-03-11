phantom.outputEncoding = "gbk";

"use strict";
var fs = require('fs')
var page = require('webpage').create();

var url = 'https://www.baidu.com/s?wd=%E6%B1%BD%E8%BD%A6%E5%93%81%E7%89%8C%E5%A4%A7%E5%85%A8&usm=1&ie=utf-8&rsv_cq=%E6%B1%BD%E8%BD%A6%E5%93%81%E7%89%8Clogo&rsv_dl=0_left_sp_img_4_18696'
page.open(url, function(status) {
		//TODO 最外侧循环，点击事件1-n，得到地区名
		// 	// var urls
		// 	// $(".op_definitive_answer_po_tag_item")地区的class
		// 	// 先读第一页
		// 	// TODO while(hasNextButton){click and read}
		// 		// 读取这一个地区，这一页的车标（一般是12个）
			
		// 	//readPage()

		// 	// $(".op_definitive_answer_po_page_next")[0].click()
		// 	interval = setInterval(function(){
		// 		console.log("fu?")
		// 		// if ( $(".op_definitive_answer_po_page_next")[0] ) {
		// 		// 	readPage()
		// 		// 	$(".op_definitive_answer_po_page_next")[0].click()
		// 		// 	console.log("yeah?");
		// 		// } else {
		// 		// 	readPage()
		// 		// 	console.log("!next");
		// 		// 	phantom.exit();
		// 		// }
		// 	}, 10);
		// 	//readPage()
	var outputString=''
	addToOutput(page.evaluate(readPage));
	page.evaluate(clickNext);
	writeFile()
	// setInterval(function(){
	// 		addToOutput(page.evaluate(readPage))
	// 		writeFile()
	// 	}
	// 	,1000)
	// }
	function readPage(){
		var urls = []
		var imgs = $(".op_definitive_answer_po_itemsArea .c-img")
		var titles = $(".op_definitive_answer_po_itemsArea .c-gap-top-small a")
		for (var i = 0; i < imgs.length; i++) {
			urls.push(titles[i].title)
			urls.push(imgs[i].src)
		}
		return urls
	}
	function clickNext(){
		$(".op_definitive_answer_po_page_next")[0].click()
	}
	function addToOutput(obj){
		for (i in obj) {
			outputString += obj[i] + '\r\n';
			console.log(obj[i]);
		}
	}
	function writeFile(){
		try {
			fs.write('urls.txt', outputString, 'w');
		} catch (e) {
			console.log(e);
		}
	}
	
	// phantom.exit()
})