(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-dom"], factory);
	else if(typeof exports === 'object')
		exports["SpaceGame"] = factory(require("react"), require("react-dom"));
	else
		root["SpaceGame"] = factory(root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	var AppHeader = __webpack_require__(3);
	var GameCanvas = __webpack_require__(4);
	
	var SpaceGame = React.createClass({
		displayName: 'SpaceGame',
	
		getInitialState: function getInitialState() {
			return {
				moneh: 0
			};
		},
		render: function render() {
			var _this = this;
	
			var appHeaderProps = {
				moneh: this.state.moneh,
				makeMoneh: function makeMoneh() {
					_this.setState({
						moneh: _this.state.moneh + 1
					});
				}
			};
			return React.createElement(
				'div',
				{ className: 'SpaceGame' },
				React.createElement(AppHeader, appHeaderProps),
				React.createElement(GameCanvas, null)
			);
		}
	});
	
	module.exports = SpaceGame;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	
	var AppHeader = function AppHeader(props) {
		return React.createElement(
			'div',
			{ className: 'AppHeader' },
			React.createElement(
				'ul',
				{ className: 'state' },
				React.createElement(
					'li',
					null,
					'Health: 0'
				),
				React.createElement(
					'li',
					null,
					'$',
					props.moneh
				)
			),
			React.createElement(
				'button',
				{ onClick: props.makeMoneh },
				'MONEH'
			)
		);
	};
	
	module.exports = AppHeader;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(2);
	
	var GameCanvas = function GameCanvas(props) {
		return React.createElement(
			'div',
			{ className: 'GameCanvas' },
			'OMG SVG ALL UP IN HERE'
		);
	};
	
	module.exports = GameCanvas;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-space-game.js.map