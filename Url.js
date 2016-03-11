// 张聪 413149044@qq.com
phantom.outputEncoding = "gbk";
var country = '法国'
var countryNum = 4
var fs = require('fs')
var page = require('webpage').create();
var outputString = ''

var url = 'https://www.baidu.com/s?wd=%E6%B1%BD%E8%BD%A6%E5%93%81%E7%89%8C%E5%A4%A7%E5%85%A8&usm=1&ie=utf-8&rsv_cq=%E6%B1%BD%E8%BD%A6%E5%93%81%E7%89%8Clogo&rsv_dl=0_left_sp_img_4_18696'
page.open(url, function(status) {
	page.evaluate(clickCountry,countryNum) //点击地区: 全部 德国 意大利 英国 法国 美国 中国 日本 其它
	setInterval(function() {
		addToOutput(page.evaluate(readPage)) // 返回此页面上的图URL
		if (!page.evaluate(clickNext)) { // 如果有下一页按钮，点击并跳过，如果已经是最后一页，输出并退出
			writeFile()
			phantom.exit()
		}
	}, 5000) // 两秒太少，改进可以参考： https://github.com/BigMaster/hahou/tree/master/phantomjs-script/lib

	function readPage() {
		var urls = []
		var imgs = $(".op_definitive_answer_po_itemsArea .c-img")
		var titles = $(".op_definitive_answer_po_itemsArea .c-gap-top-small a")
		for (var i = 0; i < imgs.length; i++) {
			urls.push(titles[i].title)
			urls.push(imgs[i].src)
		}
		return urls
	}

	function clickCountry(countryNum) {
		$(".op_definitive_answer_po_tag_item")[countryNum].click()
	}

	function clickNext() {
		if ($(".op_definitive_answer_po_page_next").length == 0) {
			return false
		}
		$(".op_definitive_answer_po_page_next")[0].click()
		return true
	}

	function addToOutput(obj) {
		for (i in obj) {
			outputString += obj[i] + '\r\n';
			console.log(obj[i])
		}
		console.log('________________________end of addToOutput')
	}

	function writeFile() {
		try {
			//console.log(outputString)
			fs.write(country + '.txt', outputString, 'w');
		} catch (e) {
			console.log(e);
		}
	}

	// phantom.exit()
})