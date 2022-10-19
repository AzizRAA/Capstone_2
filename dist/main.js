/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@keyframes fadeIn {\\r\\n  from {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    opacity: 1;\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes fadeOut {\\r\\n  from {\\r\\n    opacity: 1;\\r\\n  }\\r\\n\\r\\n  to {\\r\\n    opacity: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n$white : white;\\r\\n\\r\\nhtml,\\r\\nbody {\\r\\n  font-family: 'Baloo Bhai', cursive;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n/* .title {\\r\\n  position: relative;\\r\\n  z-index: 999;\\r\\n display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  height: 100%;\\r\\n} */\\r\\n.emoji {\\r\\n  background: none;\\r\\n  text-decoration: none;\\r\\n  position: fixed;\\r\\n  font-size: 2vw;\\r\\n  animation: fadeIn 0.3s ease-in;\\r\\n}\\r\\n\\r\\n.fadeOut {\\r\\n  animation: fadeOut 0.3s ease-in;\\r\\n}\\r\\n\\r\\n/***   */\\r\\n* {\\r\\n  font-family: 'Poppins', sans-serif;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone_2/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone_2/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone_2/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone_2/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone_2/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone_2/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone_2/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone_2/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone_2/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone_2/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n// const generateRGB = require('./modules/animations');\nconst getRandomInt = __webpack_require__(/*! ./modules/animations */ \"./src/modules/animations.js\");\nconst setSmoothColorChange = __webpack_require__(/*! ./modules/animations */ \"./src/modules/animations.js\");\nconst renderEmoji = __webpack_require__(/*! ./modules/animations */ \"./src/modules/animations.js\");\nconst handleMouseMove = __webpack_require__(/*! ./modules/animations */ \"./src/modules/animations.js\");\nconst getMousePosition = __webpack_require__(/*! ./modules/animations */ \"./src/modules/animations.js\");\nconst anime = __webpack_require__(/*! ./modules/animations */ \"./src/modules/animations.js\");\nconst renderMarquee = __webpack_require__(/*! ./modules/api */ \"./src/modules/api.js\");\n\nwindow.onload = () => {\n  renderBackground();\n  renderHeader();\n  renderFooter();\n};\n\n//# sourceURL=webpack://capstone_2/./src/index.js?");

/***/ }),

/***/ "./src/modules/animations.js":
/*!***********************************!*\
  !*** ./src/modules/animations.js ***!
  \***********************************/
/***/ ((module) => {

eval("const MINIMUM_COLOR_R = 60;\nconst MINIMUM_COLOR_G = 15;\nconst MINIMUM_COLOR_B = 90;\n\nconst MAXIMUM_COLOR_R = 180;\nconst MAXIMUM_COLOR_G = 15;\nconst MAXIMUM_COLOR_B = 30;\n\nconst ICONS_DISTANCE = 50;\n\nlet cachePosition = {\n  x: 0,\n  y: 0,\n};\n// const bcg = generateRGB(true);\n// let bcgName = `rgb(${MINIMUM_COLOR_R},${MINIMUM_COLOR_G},${MINIMUM_COLOR_R})`;\n\n// document.body.style.background = bcgName;\n\n// Generate random number within a given range.\nfunction getRandomInt(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\n// Handle rgb change on mouseOver inside the body.\n// implemented by calculating the percentage of the cursor position regarding the highest number we can achieve inside the palette (<255).\n// minimum color in an RGB is 0 (which is black, so we had to set different minimum).\nfunction setSmoothColorChange(pos, colors) {\n  colors.r = MINIMUM_COLOR_R + Math.round((pos / window.innerWidth) * MAXIMUM_COLOR_R);\n  colors.g = MINIMUM_COLOR_G + Math.round((pos / window.innerWidth) * MAXIMUM_COLOR_G);\n  colors.b = MINIMUM_COLOR_B + Math.round((pos / window.innerWidth) * MAXIMUM_COLOR_B);\n\n  return bcgName = `rgb(${colors.r},${colors.g},${colors.b})`;\n}\n\n// As the function name applies.\n// function generateRGB(isObj) {\n//   const colors = {\n//     r: getRandomInt(0, 255),\n//     g: getRandomInt(0, 255),\n//     b: getRandomInt(0, 255),\n//   };\n//   return isObj ? colors : `rgb(${colors.r},${colors.g},${colors.b})`;\n// }\n\nfunction renderEmoji() {\n  const allEmojis = ['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😈', '👿', '😉', '😊', '☺️', '😋', '😌', '😍', '😎', '😏', '😐', '😑', '😒', '😓', '😔', '😕', '😖', '😗', '😘', '😙', '😚', '😛', '😜', '😝', '😞', '😟', '😠', '😡', '😢', '😣', '😤', '😥', '😦', '😧', '😨', '😩', '😪', '😫', '😬', '😭', '😮', '😯', '😰', '😱', '😲', '😳', '😴', '😵', '😶', '😷', '😸', '😹', '😺', '😻', '😼', '😽', '😾', '😿', '🙀', '👣', '👤', '👥', '👶', '👶🏻', '👶🏼', '👶🏽', '👶🏾', '👶🏿', '👦', '👦🏻', '👦🏼', '👦🏽', '👦🏾', '👦🏿', '👧', '👧🏻', '👧🏼', '👧🏽', '👧🏾', '👧🏿', '👨', '👨🏻', '👨🏼', '👨🏽', '👨🏾', '👨🏿', '👩', '👩🏻', '👩🏼', '👩🏽', '👩🏾', '👩🏿', '👪', '👨‍👩‍👧', '👨‍👩‍👧‍👦', '👨‍👩‍👦‍👦', '👨‍👩‍👧‍👧', '👩‍👩‍👦', '👩‍👩‍👧', '👩‍👩‍👧‍👦', '👩‍👩‍👦‍👦', '👩‍👩‍👧‍👧', '👨‍👨‍👦', '👨‍👨‍👧', '👨‍👨‍👧‍👦', '👨‍👨‍👦‍👦', '👨‍👨‍👧‍👧', '👫', '👬', '👭', '👯', '👰', '👰🏻', '👰🏼', '👰🏽', '👰🏾', '👰🏿', '👱', '👱🏻', '👱🏼', '👱🏽', '👱🏾', '👱🏿', '👲', '👲🏻', '👲🏼', '👲🏽', '👲🏾', '👲🏿', '👳', '👳🏻', '👳🏼', '👳🏽', '👳🏾', '👳🏿', '👴', '👴🏻', '👴🏼', '👴🏽', '👴🏾', '👴🏿', '👵', '👵🏻', '👵🏼', '👵🏽', '👵🏾', '👵🏿', '👮', '👮🏻', '👮🏼', '👮🏽', '👮🏾', '👮🏿', '👷', '👷🏻', '👷🏼', '👷🏽', '👷🏾', '👷🏿', '👸', '👸🏻', '👸🏼', '👸🏽', '👸🏾', '👸🏿', '💂', '💂🏻', '💂🏼', '💂🏽', '💂🏾', '💂🏿', '👼', '👼🏻', '👼🏼', '👼🏽', '👼🏾', '👼🏿', '🎅', '🎅🏻', '🎅🏼', '🎅🏽', '🎅🏾', '🎅🏿', '👻', '👹', '👺', '💩', '💀', '👽', '👾', '🙇', '🙇🏻', '🙇🏼', '🙇🏽', '🙇🏾', '🙇🏿', '💁', '💁🏻', '💁🏼', '💁🏽', '💁🏾', '💁🏿', '🙅', '🙅🏻', '🙅🏼', '🙅🏽', '🙅🏾', '🙅🏿', '🙆', '🙆🏻', '🙆🏼', '🙆🏽', '🙆🏾', '🙆🏿', '🙋', '🙋🏻', '🙋🏼', '🙋🏽', '🙋🏾', '🙋🏿', '🙎', '🙎🏻', '🙎🏼', '🙎🏽', '🙎🏾', '🙎🏿', '🙍', '🙍🏻', '🙍🏼', '🙍🏽', '🙍🏾', '🙍🏿', '💆', '💆🏻', '💆🏼', '💆🏽', '💆🏾', '💆🏿', '💇', '💇🏻', '💇🏼', '💇🏽', '💇🏾', '💇🏿', '💑', '👩‍❤️‍👩', '👨‍❤️‍👨', '💏', '👩‍❤️‍💋‍👩', '👨‍❤️‍💋‍👨', '🙌', '🙌🏻', '🙌🏼', '🙌🏽', '🙌🏾', '🙌🏿', '👏', '👏🏻', '👏🏼', '👏🏽', '👏🏾', '👏🏿', '👂', '👂🏻', '👂🏼', '👂🏽', '👂🏾', '👂🏿', '👀', '👃', '👃🏻', '👃🏼', '👃🏽', '👃🏾', '👃🏿', '👄', '💋', '👅', '💅', '💅🏻', '💅🏼', '💅🏽', '💅🏾', '💅🏿', '👋', '👋🏻', '👋🏼', '👋🏽', '👋🏾', '👋🏿', '👍', '👍🏻', '👍🏼', '👍🏽', '👍🏾', '👍🏿', '👎', '👎🏻', '👎🏼', '👎🏽', '👎🏾', '👎🏿', '☝', '☝🏻', '☝🏼', '☝🏽', '☝🏾', '☝🏿', '👆', '👆🏻', '👆🏼', '👆🏽', '👆🏾', '👆🏿', '👇', '👇🏻', '👇🏼', '👇🏽', '👇🏾', '👇🏿', '👈', '👈🏻', '👈🏼', '👈🏽', '👈🏾', '👈🏿', '👉', '👉🏻', '👉🏼', '👉🏽', '👉🏾', '👉🏿', '👌', '👌🏻', '👌🏼', '👌🏽', '👌🏾', '👌🏿', '✌', '✌🏻', '✌🏼', '✌🏽', '✌🏾', '✌🏿', '👊', '👊🏻', '👊🏼', '👊🏽', '👊🏾', '👊🏿', '✊', '✊🏻', '✊🏼', '✊🏽', '✊🏾', '✊🏿', '✋', '✋🏻', '✋🏼', '✋🏽', '✋🏾', '✋🏿', '💪', '💪🏻', '💪🏼', '💪🏽', '💪🏾', '💪🏿', '👐', '👐🏻', '👐🏼', '👐🏽', '👐🏾', '👐🏿', '🙏', '🙏🏻', '🙏🏼', '🙏🏽', '🙏🏾', '🙏🏿', '🌱', '🌲', '🌳', '🌴', '🌵', '🌷', '🌸', '🌹', '🌺', '🌻', '🌼', '💐', '🌾', '🌿', '🍀', '🍁', '🍂', '🍃', '🍄', '🌰', '🐀', '🐁', '🐭', '🐹', '🐂', '🐃', '🐄', '🐮', '🐅', '🐆', '🐯', '🐇', '🐰', '🐈', '🐱', '🐎', '🐴', '🐏', '🐑', '🐐', '🐓', '🐔', '🐤', '🐣', '🐥', '🐦', '🐧', '🐘', '🐪', '🐫', '🐗', '🐖', '🐷', '🐽', '🐕', '🐩', '🐶', '🐺', '🐻', '🐨', '🐼', '🐵', '🙈', '🙉', '🙊', '🐒', '🐉', '🐲', '🐊', '🐍', '🐢', '🐸', '🐋', '🐳', '🐬', '🐙', '🐟', '🐠', '🐡', '🐚', '🐌', '🐛', '🐜', '🐝', '🐞', '🐾', '⚡️', '🔥', '🌙', '☀️', '⛅️', '☁️', '💧', '💦', '☔️', '💨', '❄️', '🌟', '⭐️', '🌠', '🌄', '🌅', '🌈', '🌊', '🌋', '🌌', '🗻', '🗾', '🌐', '🌍', '🌎', '🌏', '🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘', '🌚', '🌝', '🌛', '🌜', '🌞', '🍅', '🍆', '🌽', '🍠', '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐', '🍑', '🍒', '🍓', '🍔', '🍕', '🍖', '🍗', '🍘', '🍙', '🍚', '🍛', '🍜', '🍝', '🍞', '🍟', '🍡', '🍢', '🍣', '🍤', '🍥', '🍦', '🍧', '🍨', '🍩', '🍪', '🍫', '🍬', '🍭', '🍮', '🍯', '🍰', '🍱', '🍲', '🍳', '🍴', '🍵', '☕️', '🍶', '🍷', '🍸', '🍹', '🍺', '🍻', '🍼', '🎀', '🎁', '🎂', '🎃', '🎄', '🎋', '🎍', '🎑', '🎆', '🎇', '🎉', '🎊', '🎈', '💫', '✨', '💥', '🎓', '👑', '🎎', '🎏', '🎐', '🎌', '🏮', '💍', '❤️', '💔', '💌', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '💜', '💛', '💚', '💙', '🏃', '🏃🏻', '🏃🏼', '🏃🏽', '🏃🏾', '🏃🏿', '🚶', '🚶🏻', '🚶🏼', '🚶🏽', '🚶🏾', '🚶🏿', '💃', '💃🏻', '💃🏼', '💃🏽', '💃🏾', '💃🏿', '🚣', '🚣🏻', '🚣🏼', '🚣🏽', '🚣🏾', '🚣🏿', '🏊', '🏊🏻', '🏊🏼', '🏊🏽', '🏊🏾', '🏊🏿', '🏄', '🏄🏻', '🏄🏼', '🏄🏽', '🏄🏾', '🏄🏿', '🛀', '🛀🏻', '🛀🏼', '🛀🏽', '🛀🏾', '🛀🏿', '🏂', '🎿', '⛄️', '🚴', '🚴🏻', '🚴🏼', '🚴🏽', '🚴🏾', '🚴🏿', '🚵', '🚵🏻', '🚵🏼', '🚵🏽', '🚵🏾', '🚵🏿', '🏇', '🏇🏻', '🏇🏼', '🏇🏽', '🏇🏾', '🏇🏿', '⛺️', '🎣', '⚽️', '🏀', '🏈', '⚾️', '🎾', '🏉', '⛳️', '🏆', '🎽', '🏁', '🎹', '🎸', '🎻', '🎷', '🎺', '🎵', '🎶', '🎼', '🎧', '🎤', '🎭', '🎫', '🎩', '🎪', '🎬', '🎨', '🎯', '🎱', '🎳', '🎰', '🎲', '🎮', '🎴', '🃏', '🀄️', '🎠', '🎡', '🎢', '🚃', '🚞', '🚂', '🚋', '🚝', '🚄', '🚅', '🚆', '🚇', '🚈', '🚉', '🚊', '🚌', '🚍', '🚎', '🚐', '🚑', '🚒', '🚓', '🚔', '🚨', '🚕', '🚖', '🚗', '🚘', '🚙', '🚚', '🚛', '🚜', '🚲', '🚏', '⛽️', '🚧', '🚦', '🚥', '🚀', '🚁', '✈️', '💺', '⚓️', '🚢', '🚤', '⛵️', '🚡', '🚠', '🚟', '🛂', '🛃', '🛄', '🛅', '💴', '💶', '💷', '💵', '🗽', '🗿', '🌁', '🗼', '⛲️', '🏰', '🏯', '🌇', '🌆', '🌃', '🌉', '🏠', '🏡', '🏢', '🏬', '🏭', '🏣', '🏤', '🏥', '🏦', '🏨', '🏩', '💒', '⛪️', '🏪', '🏫', '🇦🇺', '🇦🇹', '🇧🇪', '🇧🇷', '🇨🇦', '🇨🇱', '🇨🇳', '🇨🇴', '🇩🇰', '🇫🇮', '🇫🇷', '🇩🇪', '🇭🇰', '🇮🇳', '🇮🇩', '🇮🇪', '🇮🇱', '🇮🇹', '🇯🇵', '🇰🇷', '🇲🇴', '🇲🇾', '🇲🇽', '🇳🇱', '🇳🇿', '🇳🇴', '🇵🇭', '🇵🇱', '🇵🇹', '🇵🇷', '🇷🇺', '🇸🇦', '🇸🇬', '🇿🇦', '🇪🇸', '🇸🇪', '🇨🇭', '🇹🇷', '🇬🇧', '🇺🇸', '🇦🇪', '🇻🇳', '⌚️', '📱', '📲', '💻', '⏰', '⏳', '⌛️', '📷', '📹', '🎥', '📺', '📻', '📟', '📞', '☎️', '📠', '💽', '💾', '💿', '📀', '📼', '🔋', '🔌', '💡', '🔦', '📡', '💳', '💸', '💰', '💎', '🌂', '👝', '👛', '👜', '💼', '🎒', '💄', '👓', '👒', '👡', '👠', '👢', '👞', '👟', '👙', '👗', '👘', '👚', '👕', '👔', '👖', '🚪', '🚿', '🛁', '🚽', '💈', '💉', '💊', '🔬', '🔭', '🔮', '🔧', '🔪', '🔩', '🔨', '💣', '🚬', '🔫', '🔖', '📰', '🔑', '✉️', '📩', '📨', '📧', '📥', '📤', '📦', '📯', '📮', '📪', '📫', '📬', '📭', '📄', '📃', '📑', '📈', '📉', '📊', '📅', '📆', '🔅', '🔆', '📜', '📋', '📖', '📓', '📔', '📒', '📕', '📗', '📘', '📙', '📚', '📇', '🔗', '📎', '📌', '✂️', '📐', '📍', '📏', '🚩', '📁', '📂', '✒️', '✏️', '📝', '🔏', '🔐', '🔒', '🔓', '📣', '📢', '🔈', '🔉', '🔊', '🔇', '💤', '🔔', '🔕', '💭', '💬', '🚸', '🔍', '🔎', '🚫', '⛔️', '📛', '🚷', '🚯', '🚳', '🚱', '📵', '🔞', '🉑', '🉐', '💮', '㊙️', '㊗️', '🈴', '🈵', '🈲', '🈶', '🈚️', '🈸', '🈺', '🈷', '🈹', '🈳', '🈂', '🈁', '🈯️', '💹', '❇️', '✳️', '❎', '✅', '✴️', '📳', '📴', '🆚', '🅰', '🅱', '🆎', '🆑', '🅾', '🆘', '🆔', '🅿️', '🚾', '🆒', '🆓', '🆕', '🆖', '🆗', '🆙', '🏧', '♈️', '♉️', '♊️', '♋️', '♌️', '♍️', '♎️', '♏️', '♐️', '♑️', '♒️', '♓️', '🚻', '🚹', '🚺', '🚼', '♿️', '🚰', '🚭', '🚮', '▶️', '◀️', '🔼', '🔽', '⏩', '⏪', '⏫', '⏬', '➡️', '⬅️', '⬆️', '⬇️', '↗️', '↘️', '↙️', '↖️', '↕️', '↔️', '🔄', '↪️', '↩️', '⤴️', '⤵️', '🔀', '🔁', '🔂', '#⃣', '0⃣', '1⃣', '2⃣', '3⃣', '4⃣', '5⃣', '6⃣', '7⃣', '8⃣', '9⃣', '🔟', '🔢', '🔤', '🔡', '🔠', 'ℹ️', '📶', '🎦', '🔣', '➕', '➖', '〰', '➗', '✖️', '✔️', '🔃', '™', '©', '®', '💱', '💲', '➰', '➿', '〽️', '❗️', '❓', '❕', '❔', '‼️', '⁉️', '❌', '⭕️', '💯', '🔚', '🔙', '🔛', '🔝', '🔜', '🌀', 'Ⓜ️', '⛎', '🔯', '🔰', '🔱', '⚠️', '♨️', '♻️', '💢', '💠', '♠️', '♣️', '♥️', '♦️', '☑️', '⚪️', '⚫️', '🔘', '🔴', '🔵', '🔺', '🔻', '🔸', '🔹', '🔶', '🔷', '▪️', '▫️', '⬛️', '⬜️', '◼️', '◻️', '◾️', '◽️', '🔲', '🔳', '🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙', '🕚', '🕛', '🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥', '🕦', '🕧'];\n  const randomNum = getRandomInt(0, allEmojis.length - 1);\n  const emojiCon = document.createElement('p');\n  emojiCon.classList.add('emoji');\n\n  emojiCon.innerHTML = allEmojis[randomNum];\n  emojiCon.style.top = `${cachePosition.y}px`;\n  emojiCon.style.left = `${cachePosition.x}px`;\n  document.body.appendChild(emojiCon);\n  setTimeout(() => {\n    emojiCon.classList.add('fadeOut');\n    setTimeout(() => document.body.removeChild(emojiCon), 300);\n  }, 2000);\n}\n\n(function anime() {\n  let mousePos;\n\n  document.onmousemove = handleMouseMove;\n  setInterval(getMousePosition, 1000); // setInterval repeats every X ms\n\n  function handleMouseMove(event) {\n    let dot; let eventDoc; let doc; let body; let pageX; let\n      pageY;\n\n    event = event || window.event; // IE-ism\n\n    // If pageX/Y aren't available and clientX/Y are,\n    // calculate pageX/Y - logic taken from jQuery.\n    // (This is to support old IE)\n    if (event.pageX == null && event.clientX != null) {\n      eventDoc = (event.target && event.target.ownerDocument) || document;\n      doc = eventDoc.documentElement;\n      body = eventDoc.body;\n\n      event.pageX = event.clientX\n        + (doc && doc.scrollLeft || body && body.scrollLeft || 0)\n        - (doc && doc.clientLeft || body && body.clientLeft || 0);\n      event.pageY = event.clientY\n        + (doc && doc.scrollTop || body && body.scrollTop || 0)\n        - (doc && doc.clientTop || body && body.clientTop || 0);\n    }\n\n    mousePos = {\n      x: event.pageX,\n      y: event.pageY,\n    };\n\n    // Fixing the distance between each emoji\n    switch (true) {\n      case mousePos.x - cachePosition.x > ICONS_DISTANCE:\n      case mousePos.y - cachePosition.y > ICONS_DISTANCE:\n        cachePosition = mousePos;\n        renderEmoji();\n        break;\n      case cachePosition.y - mousePos.y > ICONS_DISTANCE:\n      case cachePosition.x - mousePos.x > ICONS_DISTANCE:\n        cachePosition = mousePos;\n        renderEmoji();\n        break;\n      default:\n        break;\n    }\n\n    setSmoothColorChange(mousePos.x, bcg);\n    document.body.style.background = bcgName;\n  }\n\n  function getMousePosition() {\n    const pos = mousePos;\n    if (!pos) {\n      // We haven't seen any movement yet\n    } else {\n      // Use pos.x and pos.y\n    }\n  }\n}());\n\n// TODO:\n// 1. Set min & high color pickers.\n// 2. Add the Y axis color interpolation (minimal color change effect just for more coolness).\n\n// export { generateRGB, getRandomInt, setSmoothColorChange, renderEmoji, handleMouseMove, getMousePosition, anime}\nmodule.exports = getRandomInt, setSmoothColorChange, renderEmoji, handleMouseMove, getMousePosition, anime;\n\n//# sourceURL=webpack://capstone_2/./src/modules/animations.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((module) => {

eval("const footer = document.querySelector('footer');\nconst allEmojisLink = 'https://emojihub.herokuapp.com/api/all';\n\nconst renderMarquee = async () => {\n  const marquee = document.createElement('marquee');\n\n  const response = await fetch(allEmojisLink);\n  const allEmojisArr = await response.json();\n\n  for (let i = 0; i < allEmojisArr.length; i += 1) {\n    marquee.innerHTML += `${allEmojisArr[i].htmlCode[0]} - `;\n  }\n\n  footer.append(marquee);\n};\n\nmodule.exports = renderMarquee;\n\n//# sourceURL=webpack://capstone_2/./src/modules/api.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;