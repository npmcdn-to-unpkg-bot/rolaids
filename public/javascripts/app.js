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
	
	//
	// Accordion
	//
	function accordionTabs(target) {
	  $(target).each(function (index) {
	    $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
	  });
	  $(target).on('click', 'li > a.tab-link', function (event) {
	    event.preventDefault();
	
	    if (!$(this).hasClass('is-active')) {
	      var accordionTabs = $(this).closest('.accordion-tabs');
	      accordionTabs.find('.is-open').removeClass('is-open').hide();
	
	      $(this).next().toggleClass('is-open').toggle();
	      accordionTabs.find('.is-active').removeClass('is-active');
	      $(this).addClass('is-active');
	    }
	  });
	}
	
	//
	// Dropdown
	//
	var dropdown = function dropdown() {};
	
	//
	// Application "Controller"
	//
	var ROLAIDS = {
	  common: {
	    init: function init() {
	      accordionTabs('.accordion-tabs');
	    }
	  },
	
	  home: {
	    init: function init() {},
	
	    show: function show() {}
	  }
	};
	
	//
	// Utility functions
	//
	var UTIL = {
	  exec: function exec(controller, action) {
	    var ns = ROLAIDS,
	        action = action === undefined ? "init" : action;
	
	    if (controller !== "" && ns[controller] && typeof ns[controller][action] == "function") {
	      ns[controller][action]();
	    }
	  },
	
	  init: function init() {
	    var body = document.body,
	        controller = body.getAttribute("data-controller"),
	        action = body.getAttribute("data-action");
	
	    UTIL.exec("common");
	    UTIL.exec(controller);
	    UTIL.exec(controller, action);
	  }
	};
	
	//
	// Initialize
	//
	document.addEventListener('DOMContentLoaded', function () {
	  UTIL.init();
	}, false);

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