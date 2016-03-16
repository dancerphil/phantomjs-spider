var webPage = require('webpage');
var page = webPage.create();

page.onCallback = function(args){
	if (args.start){
		steps[0].call(this);
	}
	if (args.next) {
		steps.splice(0, args.next);
		if (steps[0]) {
			steps[0].call(this);
		}
	}
}
var steps = [
function(){
	console.log('0')
	page.evaluate(function () {
        callPhantom({next : 1});
    });
},
function(){
	console.log('1')
	page.evaluate(function () {
        callPhantom({next : 1});
    });
},
function(){
	console.log('2')
	page.evaluate(function () {
        callPhantom({next : 1});
    });
},
function(){
	console.log('3')
	page.evaluate(function () {
        callPhantom({next : 1});
    });
}
]
page.open('about:blank', function (status) {
    page.evaluate(function () {
        callPhantom({start : 1});
    });
    // phantom.exit();
});

// console.log(steps)
// console.log(steps[0])
// steps[0].call(this)
// steps[3].call(this)
// steps.splice(0, 3)
// steps[0].call(this)