webpackJsonp([0,2],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(2);
	
	var _exclaimify = __webpack_require__(5);
	
	var _exclaimify2 = _interopRequireDefault(_exclaimify);

	// const button = document.getElementById('button')

	// const alertAsyncMessage = function() {
	//   // CommonJS async syntax webpack magic
	//   require.ensure([], function() {
	//     const message = require("./asyncMessage")
	//     alert(exclaimify(message))
	//   })
	// }

	// console.log(`
	//   asset references like this one:
	//     images/gulp.png
	//   get updated in js too!`)

	// button.addEventListener('click', alertAsyncMessage)

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var moduleElements = document.querySelectorAll('[data-module]');
	
	var _loop = function () {
	  var el = moduleElements[i];
	  var name = el.getAttribute('data-module');
	  __webpack_require__.e/* nsure */(1, function () {
	    var Module = __webpack_require__(3)("./" + name);
	    new Module(el);
	  });
	};
	
	for (var i = 0; i < moduleElements.length; i++) {
	  _loop();
	}

/***/ },
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports["default"] = function (string) {
	  return string + "!";
	};
	
	module.exports = exports["default"];

/***/ }
]);
//# sourceMappingURL=app.js.map