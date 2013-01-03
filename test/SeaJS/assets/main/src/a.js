define(function(require, exports, module) {
	var $ = require('jquery')
	
	function A() { }

	A.prototype.afn = function() {
		$('p').append('A')
	}
	
	module.exports = A
})