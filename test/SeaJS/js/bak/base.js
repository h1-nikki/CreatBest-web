define(function(require, exports) {
  exports.testMethod = function(id) {
    document.getElementById(id).style.color = 'red';
  }
});