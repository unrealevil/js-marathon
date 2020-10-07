/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/get.js":
/*!****************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/get.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var superPropBase = __webpack_require__(/*! ./superPropBase */ \"./node_modules/@babel/runtime/helpers/superPropBase.js\");\n\nfunction _get(target, property, receiver) {\n  if (typeof Reflect !== \"undefined\" && Reflect.get) {\n    module.exports = _get = Reflect.get;\n  } else {\n    module.exports = _get = function _get(target, property, receiver) {\n      var base = superPropBase(target, property);\n      if (!base) return;\n      var desc = Object.getOwnPropertyDescriptor(base, property);\n\n      if (desc.get) {\n        return desc.get.call(receiver);\n      }\n\n      return desc.value;\n    };\n  }\n\n  return _get(target, property, receiver || target);\n}\n\nmodule.exports = _get;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/get.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nmodule.exports = _getPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\n\nmodule.exports = _inherits;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ \"./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js\");\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n  var target = objectWithoutPropertiesLoose(source, excluded);\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nmodule.exports = _objectWithoutProperties;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/objectWithoutProperties.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\nmodule.exports = _objectWithoutPropertiesLoose;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return assertThisInitialized(self);\n}\n\nmodule.exports = _possibleConstructorReturn;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/superPropBase.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n\nfunction _superPropBase(object, property) {\n  while (!Object.prototype.hasOwnProperty.call(object, property)) {\n    object = getPrototypeOf(object);\n    if (object === null) break;\n  }\n\n  return object;\n}\n\nmodule.exports = _superPropBase;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/superPropBase.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _taggedTemplateLiteral(strings, raw) {\n  if (!raw) {\n    raw = strings.slice(0);\n  }\n\n  return Object.freeze(Object.defineProperties(strings, {\n    raw: {\n      value: Object.freeze(raw)\n    }\n  }));\n}\n\nmodule.exports = _taggedTemplateLiteral;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./src/action.js":
/*!***********************!*\
  !*** ./src/action.js ***!
  \***********************/
/*! exports provided: DamageAction, HealthAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DamageAction\", function() { return DamageAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HealthAction\", function() { return HealthAction; });\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/objectWithoutProperties.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/get */ \"./node_modules/@babel/runtime/helpers/get.js\");\n/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _battle_log_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./battle-log.js */ \"./src/battle-log.js\");\n/* harmony import */ var _widgets_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widgets.js */ \"./src/widgets.js\");\n\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Action = /*#__PURE__*/function () {\n  function Action(_ref) {\n    var name = _ref.name,\n        _ref$amount = _ref.amount,\n        amount = _ref$amount === void 0 ? null : _ref$amount;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, Action);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(this, \"actionLog\", []);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(this, \"btn\", _widgets_js__WEBPACK_IMPORTED_MODULE_11__[\"buttonDefault\"]);\n\n    this.name = name;\n    this.amount = amount;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(Action, [{\n    key: \"isDisable\",\n    value: function isDisable() {\n      return null !== this.amount && this.amount <= 0;\n    }\n  }, {\n    key: \"apply\",\n    value: function apply(player, enemy) {\n      if (player.isDead() || enemy.isDead()) {\n        return false;\n      }\n\n      if (null === this.amount) {\n        return true; //бесконечное количество действий\n      }\n\n      if (!this.isDisable()) {\n        --this.amount;\n        return true;\n      }\n\n      return false;\n    }\n  }, {\n    key: \"pushLog\",\n    value: function pushLog(msg) {\n      this.actionLog.push(msg);\n    }\n  }, {\n    key: \"popLogs\",\n    value: function popLogs() {\n      var logs = this.actionLog;\n      this.actionLog = [];\n      return logs;\n    }\n  }]);\n\n  return Action;\n}();\n\nvar DamageAction = /*#__PURE__*/function (_Action) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(DamageAction, _Action);\n\n  var _super = _createSuper(DamageAction);\n\n  function DamageAction(_ref2) {\n    var _this;\n\n    var damageMin = _ref2.damageMin,\n        damageMax = _ref2.damageMax,\n        actionProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, [\"damageMin\", \"damageMax\"]);\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, DamageAction);\n\n    _this = _super.call(this, actionProps);\n    _this.damageMin = damageMin;\n    _this.damageMax = damageMax;\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(DamageAction, [{\n    key: \"apply\",\n    value: function apply(player, enemy) {\n      if (_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(DamageAction.prototype), \"apply\", this).call(this, player, enemy)) {\n        var damage = Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__[\"random\"])(this.damageMin, this.damageMax);\n        enemy.makeDamage(damage);\n        this.pushLog(_battle_log_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].doDamage(enemy, player));\n        this.pushLog(_battle_log_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].damageInfo(damage));\n        this.pushLog(_battle_log_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].hpInfo(enemy));\n        return true;\n      }\n\n      return false;\n    }\n  }]);\n\n  return DamageAction;\n}(Action);\nvar HealthAction = /*#__PURE__*/function (_Action2) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(HealthAction, _Action2);\n\n  var _super2 = _createSuper(HealthAction);\n\n  function HealthAction(_ref3) {\n    var _this2;\n\n    var hpMin = _ref3.hpMin,\n        hpMax = _ref3.hpMax,\n        actionProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, [\"hpMin\", \"hpMax\"]);\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_6___default()(this, HealthAction);\n\n    _this2 = _super2.call(this, actionProps);\n\n    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0___default()(_this2), \"btn\", _widgets_js__WEBPACK_IMPORTED_MODULE_11__[\"buttonGreen\"]);\n\n    _this2.hpMin = hpMin;\n    _this2.hpMax = hpMax;\n    return _this2;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_7___default()(HealthAction, [{\n    key: \"apply\",\n    value: function apply(player, enemy) {\n      if (_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(HealthAction.prototype), \"apply\", this).call(this, player, enemy)) {\n        var hp = Object(_utils_js__WEBPACK_IMPORTED_MODULE_9__[\"random\"])(this.hpMin, this.hpMax);\n        player.addHp(hp);\n        this.pushLog(_battle_log_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].doHealing(player));\n        this.pushLog(_battle_log_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].healingInfo(hp));\n        this.pushLog(_battle_log_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"].hpInfo(player));\n        return true;\n      }\n\n      return false;\n    }\n  }]);\n\n  return HealthAction;\n}(Action);\n\n//# sourceURL=webpack:///./src/action.js?");

/***/ }),

/***/ "./src/actions.js":
/*!************************!*\
  !*** ./src/actions.js ***!
  \************************/
/*! exports provided: pikachuActions, charmanderActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pikachuActions\", function() { return pikachuActions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"charmanderActions\", function() { return charmanderActions; });\n/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action.js */ \"./src/action.js\");\n\nvar pikachuActions = function pikachuActions() {\n  return [new _action_js__WEBPACK_IMPORTED_MODULE_0__[\"DamageAction\"]({\n    name: 'Дать леща',\n    amount: 10,\n    damageMax: 30,\n    damageMin: 0\n  }), new _action_js__WEBPACK_IMPORTED_MODULE_0__[\"DamageAction\"]({\n    name: 'Прописать пендаль',\n    amount: 3,\n    damageMax: 50,\n    damageMin: 10\n  }), new _action_js__WEBPACK_IMPORTED_MODULE_0__[\"DamageAction\"]({\n    name: 'Ушатать с вертушки',\n    amount: 2,\n    damageMax: 100,\n    damageMin: 50\n  }), new _action_js__WEBPACK_IMPORTED_MODULE_0__[\"DamageAction\"]({\n    name: 'Тыкнуть  пальцем',\n    amount: null,\n    //бесконечно\n    damageMax: 10,\n    damageMin: 0\n  }), new _action_js__WEBPACK_IMPORTED_MODULE_0__[\"HealthAction\"]({\n    name: 'Приложить подорожник',\n    amount: 5,\n    hpMax: 50,\n    hpMin: 25\n  }), new _action_js__WEBPACK_IMPORTED_MODULE_0__[\"HealthAction\"]({\n    name: 'Помазать зеленкой',\n    amount: 1,\n    hpMax: 150,\n    hpMin: 50\n  })];\n};\nvar charmanderActions = function charmanderActions() {\n  return [new _action_js__WEBPACK_IMPORTED_MODULE_0__[\"DamageAction\"]({\n    name: 'Подставить подножку',\n    amount: 10,\n    damageMax: 30,\n    damageMin: 0\n  }), new _action_js__WEBPACK_IMPORTED_MODULE_0__[\"DamageAction\"]({\n    name: 'Дать щелбан',\n    amount: null,\n    //бесконечно\n    damageMax: 10,\n    damageMin: 0\n  }), new _action_js__WEBPACK_IMPORTED_MODULE_0__[\"DamageAction\"]({\n    name: 'Пульнуть из рогатки',\n    amount: 3,\n    damageMax: 100,\n    damageMin: 0\n  }), new _action_js__WEBPACK_IMPORTED_MODULE_0__[\"HealthAction\"]({\n    name: 'Утереть сопли',\n    amount: 4,\n    hpMax: 100,\n    hpMin: 0\n  })];\n};\n\n//# sourceURL=webpack:///./src/actions.js?");

/***/ }),

/***/ "./src/battle-log.js":
/*!***************************!*\
  !*** ./src/battle-log.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\nfunction _templateObject16() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\", \" \\u043F\\u0440\\u043E\\u0441\\u0442\\u043E \\u043F\\u0440\\u0438\\u043B\\u0435\\u0433 \\u043D\\u0430 \\u0441\\u043A\\u0430\\u043C\\u0435\\u0439\\u043A\\u0443.\"]);\n\n  _templateObject16 = function _templateObject16() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject15() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\", \" \\u043F\\u0440\\u0438\\u0441\\u0435\\u043B \\u043F\\u0435\\u0440\\u0435\\u0434\\u043E\\u0445\\u043D\\u0443\\u0442\\u044C \\u043D\\u0430 \\u0433\\u0430\\u0437\\u043E\\u043D\\u0447\\u0438\\u043A.\"]);\n\n  _templateObject15 = function _templateObject15() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject14() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\", \" \\u043F\\u043E\\u0440\\u044B\\u043B\\u0441\\u044F \\u0432 \\u043A\\u0430\\u0440\\u043C\\u0430\\u043D\\u0435, \\u0438 \\u043D\\u0430\\u0448\\u0435\\u043B \\u0441\\u0435\\u043C\\u043A\\u0438.\"]);\n\n  _templateObject14 = function _templateObject14() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject13() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\", \" \\u043F\\u044B\\u0442\\u0430\\u043B\\u0441\\u044F \\u0447\\u0442\\u043E-\\u0442\\u043E \\u0441\\u043A\\u0430\\u0437\\u0430\\u0442\\u044C, \\u043D\\u043E \\u0432\\u0434\\u0440\\u0443\\u0433, \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E \", \" \\u0441\\u043E \\u0441\\u043A\\u0443\\u043A\\u0438, \\u0440\\u0430\\u0437\\u0431\\u0438\\u043B \\u0431\\u0440\\u043E\\u0432\\u044C \\u0441\\u043E\\u043F\\u0435\\u0440\\u043D\\u0438\\u043A\\u0443.\"]);\n\n  _templateObject13 = function _templateObject13() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject12() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\", \" \\u0440\\u0430\\u0441\\u0441\\u0442\\u0440\\u043E\\u0438\\u043B\\u0441\\u044F, \\u043A\\u0430\\u043A \\u0432\\u0434\\u0440\\u0443\\u0433, \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E \", \" \\u0441\\u043B\\u0443\\u0447\\u0430\\u0439\\u043D\\u043E \\u0432\\u043B\\u0435\\u043F\\u0438\\u043B \\u0441\\u0442\\u043E\\u043F\\u043E\\u0439 \\u0432 \\u0436\\u0438\\u0432\\u043E\\u0442 \\u0441\\u043E\\u043F\\u0435\\u0440\\u043D\\u0438\\u043A\\u0430.\"]);\n\n  _templateObject12 = function _templateObject12() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject11() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\", \" \\u043F\\u043E\\u0448\\u0430\\u0442\\u043D\\u0443\\u043B\\u0441\\u044F, \\u0438 \\u0432\\u043D\\u0435\\u0437\\u0430\\u043F\\u043D\\u043E \\u043D\\u0430\\u0433\\u043B\\u044B\\u0439 \", \" \\u0431\\u0435\\u0441\\u043F\\u0440\\u0438\\u0447\\u0438\\u043D\\u043D\\u043E \\u0443\\u0434\\u0430\\u0440\\u0438\\u043B \\u0432 \\u043D\\u043E\\u0433\\u0443 \\u043F\\u0440\\u043E\\u0442\\u0438\\u0432\\u043D\\u0438\\u043A\\u0430\"]);\n\n  _templateObject11 = function _templateObject11() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject10() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\", \" \\u0432\\u044B\\u0441\\u043C\\u043E\\u0440\\u043A\\u0430\\u043B\\u0441\\u044F, \\u043D\\u043E \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E \", \" \\u043F\\u0440\\u043E\\u0432\\u0435\\u043B \\u0434\\u0440\\u043E\\u0431\\u044F\\u0449\\u0438\\u0439 \\u0443\\u0434\\u0430\\u0440.\"]);\n\n  _templateObject10 = function _templateObject10() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject9() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\", \" \\u0443\\u0434\\u0438\\u0432\\u0438\\u043B\\u0441\\u044F, \\u0430 \", \" \\u043F\\u043E\\u0448\\u0430\\u0442\\u043D\\u0443\\u0432\\u0448\\u0438\\u0441\\u044C \\u0432\\u043B\\u0435\\u043F\\u0438\\u043B \\u043F\\u043E\\u0434\\u043B\\u044B\\u0439 \\u0443\\u0434\\u0430\\u0440.\"]);\n\n  _templateObject9 = function _templateObject9() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject8() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\", \" \\u043F\\u043E\\u043F\\u0435\\u0440\\u0445\\u043D\\u0443\\u043B\\u0441\\u044F, \\u043D\\u043E \\u0432 \\u044D\\u0442\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \", \" \\u043D\\u0435\\u0445\\u043E\\u0442\\u044F \\u0440\\u0430\\u0437\\u0434\\u0440\\u043E\\u0431\\u0438\\u043B \\u043A\\u0443\\u043B\\u0430\\u043A\\u043E\\u043C <\\u0432\\u044B\\u0440\\u0435\\u0437\\u0430\\u043D\\u043D\\u043E \\u0446\\u0435\\u043D\\u0437\\u0443\\u0440\\u043E\\u0439> \\u043F\\u0440\\u043E\\u0442\\u0438\\u0432\\u043D\\u0438\\u043A\\u0430.\"], [\"\", \" \\u043F\\u043E\\u043F\\u0435\\u0440\\u0445\\u043D\\u0443\\u043B\\u0441\\u044F, \\u043D\\u043E \\u0432 \\u044D\\u0442\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \", \" \\u043D\\u0435\\u0445\\u043E\\u0442\\u044F \\u0440\\u0430\\u0437\\u0434\\u0440\\u043E\\u0431\\u0438\\u043B \\u043A\\u0443\\u043B\\u0430\\u043A\\u043E\\u043C \\\\<\\u0432\\u044B\\u0440\\u0435\\u0437\\u0430\\u043D\\u043D\\u043E \\u0446\\u0435\\u043D\\u0437\\u0443\\u0440\\u043E\\u0439\\\\> \\u043F\\u0440\\u043E\\u0442\\u0438\\u0432\\u043D\\u0438\\u043A\\u0430.\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\", \" \\u043F\\u0440\\u0438\\u0448\\u0435\\u043B \\u0432 \\u0441\\u0435\\u0431\\u044F, \\u043D\\u043E \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E \", \" \\u0441\\u043B\\u0443\\u0447\\u0430\\u0439\\u043D\\u043E \\u043D\\u0430\\u043D\\u0435\\u0441 \\u043C\\u043E\\u0449\\u043D\\u0435\\u0439\\u0448\\u0438\\u0439 \\u0443\\u0434\\u0430\\u0440.\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\", \" \\u0437\\u0430\\u0431\\u044B\\u043B\\u0441\\u044F, \\u043D\\u043E \\u0432 \\u044D\\u0442\\u043E \\u0432\\u0440\\u0435\\u043C\\u044F \\u043D\\u0430\\u0433\\u043B\\u044B\\u0439 \", \", \\u043F\\u0440\\u0438\\u043D\\u044F\\u0432 \\u0432\\u043E\\u043B\\u0435\\u0432\\u043E\\u0435 \\u0440\\u0435\\u0448\\u0435\\u043D\\u0438\\u0435, \\u043D\\u0435\\u0441\\u043B\\u044B\\u0448\\u043D\\u043E \\u043F\\u043E\\u0434\\u043E\\u0439\\u0434\\u044F \\u0441\\u0437\\u0430\\u0434\\u0438, \\u0443\\u0434\\u0430\\u0440\\u0438\\u043B.\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\", \" \\u043F\\u043E\\u043F\\u0435\\u0440\\u0445\\u043D\\u0443\\u043B\\u0441\\u044F, \\u0438 \\u0437\\u0430 \\u044D\\u0442\\u043E \", \" \\u0441 \\u0438\\u0441\\u043F\\u0443\\u0433\\u0443 \\u043F\\u0440\\u0438\\u043B\\u043E\\u0436\\u0438\\u043B \\u043F\\u0440\\u044F\\u043C\\u043E\\u0439 \\u0443\\u0434\\u0430\\u0440 \\u043A\\u043E\\u043B\\u0435\\u043D\\u043E\\u043C \\u0432 \\u043B\\u043E\\u0431 \\u0432\\u0440\\u0430\\u0433\\u0430.\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\", \" \\u0432\\u0441\\u043F\\u043E\\u043C\\u043D\\u0438\\u043B \\u0447\\u0442\\u043E-\\u0442\\u043E \\u0432\\u0430\\u0436\\u043D\\u043E\\u0435, \\u043D\\u043E \\u043D\\u0435\\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u043D\\u043E \", \", \\u043D\\u0435 \\u043F\\u043E\\u043C\\u043D\\u044F \\u0441\\u0435\\u0431\\u044F \\u043E\\u0442 \\u0438\\u0441\\u043F\\u0443\\u0433\\u0430, \\u0443\\u0434\\u0430\\u0440\\u0438\\u043B \\u0432 \\u043F\\u0440\\u0435\\u0434\\u043F\\u043B\\u0435\\u0447\\u044C\\u0435 \\u0432\\u0440\\u0430\\u0433\\u0430.\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\u0423\\u0440\\u0430\\u0430, \\u0432\\u0430\\u0448 \\u0445\\u0440\\u0430\\u0431\\u0440\\u044B\\u0439 \", \" \\u043F\\u043E\\u0431\\u0435\\u0434\\u0438\\u043B \\u043D\\u0435\\u0443\\u0434\\u0430\\u0447\\u043D\\u043E\\u0433\\u043E \", \"\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\u042D\\u0445\\u0445, \\u0432\\u0430\\u0448 \", \" \\u043F\\u043E\\u0433\\u0438\\u0431 \\u0441\\u043C\\u0435\\u0440\\u0442\\u044C\\u044E \\u0445\\u0440\\u0430\\u0431\\u0440\\u044B\\u0445 \\u043E\\u0442 \\u0433\\u0440\\u044F\\u0437\\u043D\\u044B\\u0445 \\u0440\\u0443\\u043A \", \"\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\u041D\\u0430\\u0447\\u0438\\u043D\\u0430\\u0435\\u0442\\u0441\\u044F \\u0431\\u043E\\u0439 \\u043C\\u0435\\u0436\\u0434\\u0443 \", \" \\u0438 \", \"\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  startGame: function startGame(player, enemy) {\n    return logDecor(_templateObject(), player.name, enemy.name);\n  },\n  doDamage: function doDamage(damagedPokemon, attackerPokemon) {\n    return generateBattlePhrase(damagedPokemon, attackerPokemon);\n  },\n  damageInfo: function damageInfo(damageAmount) {\n    return \"\\u0423\\u0440\\u043E\\u043D <span style=\\\"color:red\\\">-\".concat(damageAmount, \"</span>\");\n  },\n  hpInfo: function hpInfo(_ref) {\n    var name = _ref.name,\n        hpLeft = _ref.hp,\n        hpTotal = _ref.defaultHp;\n    return \"\\u0423 \".concat(name, \" \\u043E\\u0441\\u0442\\u0430\\u043B\\u043E\\u0441\\u044C \\u0437\\u0434\\u043E\\u0440\\u043E\\u0432\\u044C\\u044F <span style=\\\"color:green\\\">\").concat(hpLeft, \" \\u0438\\u0437 \").concat(hpTotal, \"</span>\");\n  },\n  doHealing: function doHealing(pokemon) {\n    return generateHealingPhrase(pokemon);\n  },\n  healingInfo: function healingInfo(hpAmount) {\n    return \"\\u041F\\u043E\\u043B\\u0443\\u0447\\u0435\\u043D\\u043E \\u0437\\u0434\\u043E\\u0440\\u043E\\u0432\\u044C\\u044F <span style=\\\"color:green\\\">+\".concat(hpAmount, \"</span>\");\n  },\n  playerLost: function playerLost(_ref2, _ref3) {\n    var playerName = _ref2.name;\n    var enemyName = _ref3.name;\n    return logDecor(_templateObject2(), playerName, enemyName);\n  },\n  playerWin: function playerWin(_ref4, _ref5) {\n    var playerName = _ref4.name;\n    var enemyName = _ref5.name;\n    return logDecor(_templateObject3(), playerName, enemyName);\n  }\n});\n\nfunction generateBattlePhrase(_ref6, _ref7) {\n  var first = _ref6.name;\n  var second = _ref7.name;\n  var phrases = [function () {\n    return logDecor(_templateObject4(), first, second);\n  }, function () {\n    return logDecor(_templateObject5(), first, second);\n  }, function () {\n    return logDecor(_templateObject6(), first, second);\n  }, function () {\n    return logDecor(_templateObject7(), first, second);\n  }, function () {\n    return logDecor(_templateObject8(), first, second);\n  }, function () {\n    return logDecor(_templateObject9(), first, second);\n  }, function () {\n    return logDecor(_templateObject10(), first, second);\n  }, function () {\n    return logDecor(_templateObject11(), first, second);\n  }, function () {\n    return logDecor(_templateObject12(), first, second);\n  }, function () {\n    return logDecor(_templateObject13(), first, second);\n  }];\n  return phrases[Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(0, phrases.length)]();\n}\n\nfunction generateHealingPhrase(_ref8) {\n  var name = _ref8.name;\n  var phrases = [function () {\n    return logDecor(_templateObject14(), name);\n  }, function () {\n    return logDecor(_templateObject15(), name);\n  }, function () {\n    return logDecor(_templateObject16(), name);\n  }];\n  return phrases[Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(0, phrases.length)]();\n}\n\nfunction logDecor(templateData) {\n  var str = templateData[0];\n\n  for (var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    keys[_key - 1] = arguments[_key];\n  }\n\n  keys.map(function (val) {\n    return escape(val);\n  }).forEach(function (val, index) {\n    return str += \"<strong>\".concat(val, \"</strong>\") + templateData[index + 1];\n  });\n  return str;\n}\n\n//# sourceURL=webpack:///./src/battle-log.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene.js */ \"./src/scene.js\");\n/* harmony import */ var _pokemons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pokemons.js */ \"./src/pokemons.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _battle_log_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./battle-log.js */ \"./src/battle-log.js\");\n\n\n\n\nvar player;\nvar enemy;\n\nfunction startGame(playerPokemon) {\n  _scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearAll();\n  player = playerPokemon;\n  var enemyPokemons = [Object(_pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"pikachu\"])(), Object(_pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"charmander\"])()];\n  enemy = enemyPokemons[Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"random\"])(0, enemyPokemons.length)];\n  _scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].attachLeftPokemon(player);\n  _scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].attachRightPokemon(enemy);\n  renderPokemons();\n  player.playerActions().forEach(function (action) {\n    _scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].attachAction(action, function () {\n      return playerTurn(action);\n    });\n    action.render();\n  });\n  _scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addLogMessage(_battle_log_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].startGame(player, enemy));\n}\n\nfunction renderPokemons() {\n  player.render();\n  enemy.render();\n}\n\nfunction playerTurn(action) {\n  action.apply(player, enemy);\n  action.render();\n  renderPokemons();\n  checkEndGameCondition();\n  enemyTurn();\n}\n\nfunction enemyTurn() {\n  var damage = Object(_utils_js__WEBPACK_IMPORTED_MODULE_2__[\"random\"])(20, 50);\n  player.makeDamage(damage);\n  _scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addLogMessage([_battle_log_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].doDamage(player, enemy), _battle_log_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].damageInfo(damage), _battle_log_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hpInfo(player)].join('<br/>'));\n  renderPokemons();\n  checkEndGameCondition();\n}\n\nfunction checkEndGameCondition() {\n  if (player.isDead()) {\n    _scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addLogMessage(_battle_log_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].playerLost(player, enemy));\n    _scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showLostGame(newGame);\n    return;\n  }\n\n  if (enemy.isDead()) {\n    _scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addLogMessage(_battle_log_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].playerWin(player, enemy));\n    _scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showWinGame(newGame);\n  }\n}\n\nfunction newGame() {\n  _scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearAll();\n  _scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showNewGame(selectPokemon);\n}\n\nfunction selectPokemon() {\n  _scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearAll();\n  _scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showPokemonSelect([Object(_pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"pikachu\"])(), Object(_pokemons_js__WEBPACK_IMPORTED_MODULE_1__[\"charmander\"])()], startGame);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return newGame();\n});\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nObject(_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pokemon.js":
/*!************************!*\
  !*** ./src/pokemon.js ***!
  \************************/
/*! exports provided: Pokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Pokemon\", function() { return Pokemon; });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar Pokemon = /*#__PURE__*/function () {\n  function Pokemon(_ref) {\n    var name = _ref.name,\n        hp = _ref.hp,\n        image = _ref.image,\n        level = _ref.level,\n        playerActions = _ref.playerActions;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Pokemon);\n\n    this.name = name;\n    this.hp = this.defaultHp = hp;\n    this.image = image;\n    this.level = level;\n    this.playerActions = playerActions;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Pokemon, [{\n    key: \"isDead\",\n    value: function isDead() {\n      return 0 === this.hp;\n    }\n  }, {\n    key: \"makeDamage\",\n    value: function makeDamage(amount) {\n      this.hp -= amount;\n\n      if (this.hp < 0) {\n        this.hp = 0;\n      }\n    }\n  }, {\n    key: \"addHp\",\n    value: function addHp(amount) {\n      this.hp += amount;\n\n      if (this.hp > this.defaultHp) {\n        this.hp = this.defaultHp;\n      }\n    }\n  }]);\n\n  return Pokemon;\n}();\n\n//# sourceURL=webpack:///./src/pokemon.js?");

/***/ }),

/***/ "./src/pokemons.js":
/*!*************************!*\
  !*** ./src/pokemons.js ***!
  \*************************/
/*! exports provided: pikachu, charmander */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pikachu\", function() { return pikachu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"charmander\", function() { return charmander; });\n/* harmony import */ var _pokemon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokemon.js */ \"./src/pokemon.js\");\n/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions.js */ \"./src/actions.js\");\n\n\nvar pikachu = function pikachu() {\n  return new _pokemon_js__WEBPACK_IMPORTED_MODULE_0__[\"Pokemon\"]({\n    name: 'Pikachu',\n    image: './assets/pokemons/pikachu.png',\n    hp: 150,\n    level: 1,\n    playerActions: _actions_js__WEBPACK_IMPORTED_MODULE_1__[\"pikachuActions\"]\n  });\n};\nvar charmander = function charmander() {\n  return new _pokemon_js__WEBPACK_IMPORTED_MODULE_0__[\"Pokemon\"]({\n    name: 'Charmander',\n    image: './assets/pokemons/charmander.png',\n    hp: 300,\n    level: 2,\n    playerActions: _actions_js__WEBPACK_IMPORTED_MODULE_1__[\"charmanderActions\"]\n  });\n};\n\n//# sourceURL=webpack:///./src/pokemons.js?");

/***/ }),

/***/ "./src/scene.js":
/*!**********************!*\
  !*** ./src/scene.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _widgets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets.js */ \"./src/widgets.js\");\n\nvar $logBoard = document.getElementById('battle-log');\nvar $actionsHolder = document.getElementById('battle-actions');\nvar $leftCharacter = document.getElementById('left-character');\nvar $rightCharacter = document.getElementById('right-character');\n\nvar clearActions = function clearActions() {\n  $actionsHolder.innerHTML = '';\n};\n\nvar clearBattleLog = function clearBattleLog() {\n  $logBoard.innerHTML = '';\n};\n\nvar clearPokemons = function clearPokemons() {\n  $leftCharacter.innerHTML = '';\n  $rightCharacter.innerHTML = '';\n};\n\nvar initCharacterRender = function initCharacterRender($characterHolder, pokemon) {\n  $characterHolder.innerHTML = characterHtml(pokemon);\n  var $elHP = $characterHolder.querySelector('.hp-text'),\n      $elProgressbar = $characterHolder.querySelector('.hp-progressbar');\n\n  pokemon.render = function () {\n    var hp = pokemon.hp,\n        defaultHp = pokemon.defaultHp;\n    $elHP.innerText = hp + ' / ' + defaultHp;\n    var hpPercent = Math.round(hp / defaultHp * 100);\n    $elProgressbar.style.width = hpPercent + '%';\n  };\n};\n\nvar addLogMessage = function addLogMessage(msg) {\n  if (!msg) {\n    return;\n  }\n\n  var $p = document.createElement('p');\n  $p.innerHTML = msg;\n  $logBoard.insertBefore($p, $logBoard.children[0]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  clearAll: function clearAll() {\n    clearActions();\n    clearBattleLog();\n    clearPokemons();\n  },\n  showNewGame: function showNewGame(newGameCallback) {\n    var $btn = Object(_widgets_js__WEBPACK_IMPORTED_MODULE_0__[\"buttonDefault\"])('Начать эпическую битву', newGameCallback);\n    $actionsHolder.appendChild($btn);\n  },\n  attachAction: function attachAction(action, actionCallback) {\n    var $btn = action.btn(action.name, actionCallback);\n    $actionsHolder.appendChild($btn);\n\n    action.render = function () {\n      var name = action.name,\n          amount = action.amount;\n      $btn.innerText = \"\".concat(name + (null !== amount ? \" (\".concat(amount, \")\") : ''));\n\n      if (action.isDisable()) {\n        $btn.disabled = true;\n        $btn.removeEventListener('click', actionCallback);\n      }\n\n      addLogMessage(action.popLogs().join('<br/>'));\n    };\n  },\n  attachLeftPokemon: function attachLeftPokemon(pokemon) {\n    return initCharacterRender($leftCharacter, pokemon);\n  },\n  attachRightPokemon: function attachRightPokemon(pokemon) {\n    return initCharacterRender($rightCharacter, pokemon);\n  },\n  addLogMessage: addLogMessage,\n  showLostGame: function showLostGame(newGameCallback) {\n    clearActions();\n    $actionsHolder.appendChild(Object(_widgets_js__WEBPACK_IMPORTED_MODULE_0__[\"messageBig\"])('<strong style=\"color:red\">Вы проиграли :((</strong>'));\n    $actionsHolder.appendChild(Object(_widgets_js__WEBPACK_IMPORTED_MODULE_0__[\"buttonDefault\"])('ОК', newGameCallback));\n  },\n  showWinGame: function showWinGame(newGameCallback) {\n    clearActions();\n    $actionsHolder.appendChild(Object(_widgets_js__WEBPACK_IMPORTED_MODULE_0__[\"messageBig\"])('<strong style=\"color:#fdf200\">Эпическая победа!!!</strong>'));\n    $actionsHolder.appendChild(Object(_widgets_js__WEBPACK_IMPORTED_MODULE_0__[\"buttonDefault\"])('ОК', newGameCallback));\n  },\n  showPokemonSelect: function showPokemonSelect(pokemons, startGameCallback) {\n    $actionsHolder.appendChild(Object(_widgets_js__WEBPACK_IMPORTED_MODULE_0__[\"messageBig\"])('<strong style=\"color:#ffc650;\">Выбери своего покемона</strong>'));\n    pokemons.forEach(function (pokemon) {\n      var $btn = Object(_widgets_js__WEBPACK_IMPORTED_MODULE_0__[\"buttonSelectPokemon\"])(pokemon, function () {\n        return startGameCallback(pokemon);\n      });\n      $actionsHolder.appendChild($btn);\n    });\n  }\n});\n\nvar characterHtml = function characterHtml(_ref) {\n  var name = _ref.name,\n      level = _ref.level,\n      hp = _ref.hp,\n      defaultHp = _ref.defaultHp,\n      image = _ref.image;\n  return \"\\n            <span class=\\\"lvl\\\">Lv. \".concat(level, \"</span>\\n            <img src=\\\"\").concat(image, \"\\\" class=\\\"sprite\\\" alt=\\\"\").concat(name, \"\\\">\\n            <div class=\\\"details\\\">\\n                <h2 class=\\\"name\\\">\").concat(name, \"</h2>\\n                <div class=\\\"hp\\\">\\n                    <div class=\\\"bar\\\">\\n                        <div class=\\\"health hp-progressbar\\\"></div>\\n                    </div>\\n                    <span class=\\\"text hp-text\\\">\").concat(hp, \" / \").concat(defaultHp, \"</span>\\n                </div>\\n            </div>\\n\");\n};\n\n//# sourceURL=webpack:///./src/scene.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\nfunction random(min, max) {\n  return min + Math.floor(Math.random() * (max - min));\n}\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ }),

/***/ "./src/widgets.js":
/*!************************!*\
  !*** ./src/widgets.js ***!
  \************************/
/*! exports provided: buttonDefault, buttonGreen, messageBig, buttonSelectPokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttonDefault\", function() { return buttonDefault; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttonGreen\", function() { return buttonGreen; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"messageBig\", function() { return messageBig; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buttonSelectPokemon\", function() { return buttonSelectPokemon; });\nvar buttonDefault = function buttonDefault(title) {\n  var onClick = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var $button = document.createElement('button');\n  $button.className = 'button';\n  $button.innerText = title;\n\n  if (onClick) {\n    $button.addEventListener('click', onClick);\n  }\n\n  return $button;\n};\nvar buttonGreen = function buttonGreen(title) {\n  var onClick = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var $button = document.createElement('button');\n  $button.className = 'button btn-green';\n  $button.innerText = title;\n\n  if (onClick) {\n    $button.addEventListener('click', onClick);\n  }\n\n  return $button;\n};\nvar messageBig = function messageBig(message) {\n  var $msg = document.createElement('div');\n  $msg.className = 'message-big';\n  $msg.innerHTML = message;\n  return $msg;\n};\nvar buttonSelectPokemon = function buttonSelectPokemon(_ref) {\n  var level = _ref.level,\n      image = _ref.image,\n      name = _ref.name;\n  var onClick = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var $button = document.createElement('button');\n  $button.className = 'button pokemon-btn';\n  $button.innerHTML = \"\\n            <span class=\\\"lvl\\\">Lv. \".concat(level, \"</span>\\n            <img src=\\\"\").concat(image, \"\\\" class=\\\"sprite\\\" alt=\\\"\").concat(name, \"\\\">\\n            <div class=\\\"details\\\">\\n                <h2 class=\\\"name\\\">\").concat(name, \"</h2>\\n            </div>\\n\");\n\n  if (onClick) {\n    $button.addEventListener('click', onClick);\n  }\n\n  return $button;\n};\n\n//# sourceURL=webpack:///./src/widgets.js?");

/***/ })

/******/ });