var fs = require('fs')
if(fs.exists('1.txt')){
	console.log('exists')
}
var x=fs.open('1.txt',{
  mode: 'r' //(see Open Mode above)
});
console.log(x.seek())