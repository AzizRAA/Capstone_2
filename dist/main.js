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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n\\tmargin: 0;\\r\\n\\tpadding: 0;\\r\\n\\tbox-sizing: border-box;\\r\\n\\tfont-family: 'Montserrat', sans-serif;\\r\\n}\\r\\n\\r\\nbody {\\r\\n\\toverflow-x: hidden;\\r\\n}\\r\\n\\r\\n#header {\\r\\n\\tdisplay: flex;\\r\\n\\talign-items: center;\\r\\n\\tpadding-left: 30px;\\r\\n\\tpadding-top: 20px;\\r\\n\\tposition: fixed;\\r\\n\\twidth: 100%;\\r\\n\\tbackground-image: linear-gradient(black, rgba(0, 0, 0, 0));\\r\\n\\theight: 140px;\\r\\n}\\r\\n\\r\\n.navItems {\\r\\n\\tmargin-left: 10vw;\\r\\n}\\r\\n\\r\\n.navItems-item {\\r\\n\\tfont-weight: 500;\\r\\n\\tfont-size: 1.8rem;\\r\\n\\tmargin-right: 2vw;\\r\\n\\tpadding-bottom: 5px;\\r\\n\\ttransition: ease-in-out 0.2s;\\r\\n\\tcolor: rgb(138, 134, 196);\\r\\n\\tcursor: pointer;\\r\\n\\ttext-shadow: 0px 0px 1px rgb(255, 255, 255);\\r\\n}\\r\\n\\r\\n.navItems-item:hover {\\r\\n\\tcolor: rgb(134, 0, 134);\\r\\n\\ttext-shadow: 0px 0px 1px rgb(212, 13, 212);\\r\\n}\\r\\n\\r\\n.theLogo {\\r\\n\\ttransition: ease-in-out 0.2s;\\r\\n\\tmargin-bottom: 15px;\\r\\n}\\r\\n\\r\\n.theLogo:hover {\\r\\n\\t-webkit-filter: drop-shadow(1px 1px 0 white)\\r\\n                  drop-shadow(-1px -1px 0 white);\\r\\n  filter: drop-shadow(0px -1px 1px white) \\r\\n          drop-shadow(0px -1px 1px white);\\r\\n\\tcursor: pointer;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n\\toutline: 2px solid rgba(0, 0, 0, 0.459);\\r\\n\\tfilter: drop-shadow(0px -2px 2px black);\\r\\n\\tposition: fixed;\\r\\n\\tleft: 0;\\r\\n\\tbottom: 0;\\r\\n\\twidth: 100vw;\\r\\n\\theight: 55px;\\r\\n\\tbackground-color: rgb(255, 255, 255, 0.02);\\r\\n\\tbackdrop-filter: blur(10px);\\r\\n\\tdisplay: flex;\\r\\n\\talign-items: center;\\r\\n\\tz-index: -1;\\r\\n}\\r\\n\\r\\n.licenceText {\\r\\n\\tcolor: white;\\r\\n\\tfont-size: 1.2rem;\\r\\n\\tmargin-left: 35px;\\r\\n\\twidth: 60%;\\r\\n}\\r\\n\\r\\na {\\r\\n\\tcolor: rgb(255, 0, 255);\\r\\n\\ttext-decoration: none;\\r\\n}\\r\\n\\r\\nmarquee {\\r\\n\\twidth: 40%;\\r\\n\\tmargin-right: 35px;\\r\\n\\tfont-size: 2rem;\\r\\n\\tcolor: white;\\r\\n\\tbackground-color: rgba(0, 0, 0, 0.2);\\r\\n\\tborder-radius: 20px;\\r\\n\\topacity: 60%;\\r\\n}\\r\\n\\r\\n#commentsPopup {\\r\\n\\twidth: 100vw;\\r\\n\\tposition: absolute;\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\talign-items: center;\\r\\n\\theight: 100vh;\\r\\n\\tbackdrop-filter: blur(10px);\\r\\n\\ttransition: 0.7s;\\r\\n\\ttop: -100vh;\\r\\n\\toverflow-y: auto;\\r\\n\\tborder-bottom: 3px solid black;\\r\\n\\tpadding: 0 35px;\\r\\n}\\r\\n\\r\\n#cp-icon {\\r\\n\\tfont-size: 10rem;\\r\\n\\ttext-shadow: 0px 0px 10px rgb(255, 255, 255);\\r\\n\\tline-height: 13rem;\\r\\n}\\r\\n\\r\\n#cp-title {\\r\\n\\tfont-size: 4rem;\\r\\n\\tfont-weight: 900;\\r\\n\\tfont-family: 'Handlee', sans-serif;\\r\\n\\ttext-shadow: 0px 0px 10px rgb(255, 255, 255);\\r\\n\\ttext-align: center;\\r\\n}\\r\\n\\r\\n#cp-attrDiv {\\r\\n\\tdisplay: flex;\\r\\n\\talign-items: flex-end;\\r\\n\\tjustify-content: center;\\r\\n\\tflex-wrap: wrap;\\r\\n\\twidth: 600px;\\r\\n\\tpadding: 15px;\\r\\n\\tborder-bottom-right-radius: 15px;\\r\\n\\tborder-bottom-left-radius: 15px;\\r\\n\\tbackground-image: linear-gradient(transparent, rgb(0, 0, 0, 0.16));\\r\\n\\tmargin-top: -30px;\\r\\n\\theight: 7rem;\\r\\n\\tmargin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.cp-attrDiv-node {\\r\\n\\twidth: 280px;\\r\\n\\ttext-align: center;\\r\\n\\tcolor: rgb(247, 247, 247);\\r\\n\\ttext-shadow: 0px 0px 2px rgb(20, 2, 65);\\r\\n\\tmargin-bottom: 5px;\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\talign-items: center;\\r\\n\\tjustify-content: flex-start;\\r\\n}\\r\\n\\r\\n#cp-commentsDiv {\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\t/* background-image: linear-gradient(transparent, rgb(0, 0, 0, 0.3)); */\\r\\n\\twidth: 600px;\\r\\n\\tborder-radius: 15px;\\r\\n\\tpadding-left: 15px;\\r\\n\\tpadding-right: 15px;\\r\\n\\tpadding-top: 15px;\\r\\n\\tpadding-bottom: 15px;\\r\\n}\\r\\n\\r\\n#cp-commentsDiv-title {\\r\\n\\ttext-align: center;\\r\\n\\tmargin-bottom: 10px;\\r\\n\\tfont-size: 2rem;\\r\\n\\ttext-shadow: 0px 0px 5px rgb(255, 255, 255);\\r\\n}\\r\\n\\r\\n#cp-commentsDiv-displayDiv {\\r\\n\\tmargin-bottom: 20px;\\r\\n}\\r\\n\\r\\n#cp-commentsDiv-addCommentTitle {\\r\\n\\tmargin-bottom: 10px;\\r\\n\\ttext-align: center;\\r\\n\\ttext-shadow: 0px 0px 3px rgb(255, 255, 255);\\r\\n\\t/* font-family: 'Handlee', sans-serif; */\\r\\n\\tfont-size: 1.6rem;\\r\\n}\\r\\n\\r\\n#cp-nameInput {\\r\\n\\twidth: 50%;\\r\\n\\tmargin-bottom: 10px;\\r\\n\\theight: 30px;\\r\\n\\tbackground-color: transparent;\\r\\n\\tbackground-image: linear-gradient(rgba(0, 0, 0, 0.267), transparent);\\r\\n\\tcolor: white;\\r\\n\\tborder: none;\\r\\n\\tborder-radius: 10px;\\r\\n\\tcolor: white;\\r\\n\\tpadding-left: 15px;\\r\\n\\toutline: 1px solid rgba(255, 255, 255, 0.164);\\r\\n\\tborder-radius: 10px;\\r\\n}\\r\\n\\r\\n#cp-nameInput::placeholder {\\r\\n\\tcolor: rgb(151, 151, 151);\\r\\n}\\r\\n\\r\\n#cp-commentTA {\\r\\n\\twidth: 80%;\\r\\n\\tmargin-bottom: 10px;\\r\\n\\theight: 60px;\\r\\n\\tbackground-color: transparent;\\r\\n\\tbackground-image: linear-gradient(rgba(0, 0, 0, 0.267), transparent);\\r\\n\\tcolor: white;\\r\\n\\tborder: none;\\r\\n\\tborder-radius: 10px;\\r\\n\\tcolor: white;\\r\\n\\tpadding-left: 15px;\\r\\n\\tpadding-top: 10px;\\r\\n\\tmargin-bottom: 20px;\\r\\n\\toutline: 1px solid rgba(255, 255, 255, 0.164);\\r\\n\\tborder-radius: 10px;\\r\\n}\\r\\n\\r\\n#cp-commentTA::placeholder {\\r\\n\\tcolor: rgb(151, 151, 151);\\r\\n}\\r\\n\\r\\n#commentButton {\\r\\n\\twidth: 130px;\\r\\n\\theight: 35px;\\r\\n\\tbackground-color: rgb(12, 75, 9);\\r\\n\\tborder: none;\\r\\n\\tborder-radius: 10px;\\r\\n\\tcolor: white;\\r\\n\\tfont-size: 1.1rem;\\r\\n\\ttransition: 0.2s;\\r\\n\\tcursor: pointer;\\r\\n}\\r\\n\\r\\n#commentButton:hover {\\r\\n\\tbackground-color: rgb(0, 0, 0);\\r\\n\\tfont-size: 1.12rem;\\r\\n\\tcolor: rgb(178, 62, 255);\\r\\n}\\r\\n\\r\\n#cp-commentsDiv-displayDiv {\\r\\n\\toutline: 3px solid rgb(49, 12, 75);\\r\\n\\theight: 100px;\\r\\n\\tborder-radius: 10px;\\r\\n\\tpadding: 6px;\\r\\n\\tbackground-color: rgba(0, 0, 0, 0.877);\\r\\n\\tcolor: rgb(178, 62, 255);\\r\\n\\toverflow-y: auto;\\r\\n}\\r\\n\\r\\n#exitCommentsPopup {\\r\\n\\tposition: absolute;\\r\\n\\ttop: 30px;\\r\\n\\tright: 50px;\\r\\n\\tcolor: white;\\r\\n\\tfont-size: 3rem;\\r\\n\\tfont-family: 'Michroma', san sans-serif;\\r\\n\\ttransition: 0.2s;\\r\\n\\tcursor: pointer;\\r\\n}\\r\\n\\r\\n#exitCommentsPopup:hover {\\r\\n\\tcolor: rgb(59, 0, 0);\\r\\n\\ttext-shadow: 0px 0px 5px rgb(255, 82, 82);\\r\\n\\tfont-size: 3.1rem;\\r\\n}\\r\\n\\r\\nmain {\\r\\n\\theight: 75.2vh;\\r\\n\\tdisplay: flex;\\r\\n\\talign-items: center;\\r\\n\\tflex-wrap: wrap;\\r\\n\\talign-content: flex-start;\\r\\n\\tpadding: 20px 2%;\\r\\n\\toverflow: auto;\\r\\n\\tposition: fixed;\\r\\n\\ttop: 140px;\\r\\n\\tbackground-image: linear-gradient(transparent, rgba(0, 0, 0, 0.507));\\r\\n\\twidth: 100vw;\\r\\n}\\r\\n\\r\\n.emojiCard {\\r\\n\\toutline: 1px solid rgba(255, 255, 255, 0.445);\\r\\n\\tmargin: 0 2% 50px 2%;\\r\\n\\tpadding: 15px;\\r\\n\\twidth: 315px;\\r\\n\\theight: 300px;\\r\\n\\tdisplay: flex;\\r\\n\\tflex-direction: column;\\r\\n\\talign-items: center;\\r\\n\\tjustify-content: center;\\r\\n\\ttext-align: center;\\r\\n\\tborder-radius: 50px;\\r\\n\\tbackdrop-filter: blur(10px);\\r\\n\\tbackground-color: rgba(255, 255, 255, 0.158);\\r\\n\\ttransition: ease-in-out 0.2s;\\r\\n\\tcolor: white;\\r\\n}\\r\\n\\r\\n.emojiCard:hover {\\r\\n\\tbackdrop-filter: none;\\r\\n\\tbackground-color: transparent;\\r\\n}\\r\\n\\r\\n.emojiCard-icon {\\r\\n\\tfont-size: 3.5rem;\\r\\n}\\r\\n\\r\\n.emojiCard-likeDiv {\\r\\n\\tdisplay: flex;\\r\\n\\tmargin-top: 15px;\\r\\n\\tmargin-bottom: 30px;\\r\\n\\tfont-size: 1.2rem;\\r\\n\\tcolor: rgb(201, 0, 0);\\r\\n\\tfont-weight: 600;\\r\\n}\\r\\n\\r\\n.commentsBtn {\\r\\n\\tfont-size: 1.1rem;\\r\\n\\theight: 40px;\\r\\n\\twidth: 130px;\\r\\n\\tborder-radius: 20px;\\r\\n\\tbackground-color: transparent;\\r\\n\\tbackground-image: linear-gradient(rgba(0, 0, 0, 0.507), transparent);\\r\\n\\tcolor: white;\\r\\n\\tborder: 1px solid rgb(179, 179, 255);\\r\\n\\ttransition: ease-in-out 0.2s;\\r\\n}\\r\\n\\r\\n.commentsBtn:hover {\\r\\n\\tbackground-color: black;\\r\\n\\tcolor: rgb(202, 110, 255);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone_2/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\r\n\r\nconst renderBackground = __webpack_require__(/*! ./modules/background.js */ \"./src/modules/background.js\");\r\nconst renderHeader = __webpack_require__(/*! ./modules/header.js */ \"./src/modules/header.js\");\r\nconst renderMain = __webpack_require__(/*! ./modules/mainPage.js */ \"./src/modules/mainPage.js\");\r\nconst renderFooter = __webpack_require__(/*! ./modules/footer.js */ \"./src/modules/footer.js\");\r\n\r\n\r\nwindow.onload = async () => {\r\n\trenderBackground();\r\n\trenderHeader();\r\n\trenderFooter();\r\n\tawait renderMain();\r\n};\r\n\n\n//# sourceURL=webpack://capstone_2/./src/index.js?");

/***/ }),

/***/ "./src/modules/background.js":
/*!***********************************!*\
  !*** ./src/modules/background.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const background = __webpack_require__(/*! ./artwork/background.jpg */ \"./src/modules/artwork/background.jpg\");\r\n\r\nrenderBackground = () => {\r\n\tconst bg = new Image();\r\n\tbg.src = background;\r\n\tbg.style.position = 'absolute';\r\n\tbg.style.top = 0;\r\n\tbg.style.zIndex = -2;\r\n\tbg.style.width = '100vw';\r\n\tbg.style.height = '100%';\r\n\tbg.style.objectFit = 'cover';\r\n\t\r\n\tconst body = document.querySelector('body');\r\n\tbody.append(bg);\r\n};\r\n\r\nmodule.exports = renderBackground;\n\n//# sourceURL=webpack://capstone_2/./src/modules/background.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const addComment = __webpack_require__(/*! ./involvement.js */ \"./src/modules/involvement.js\");\r\nconst getComments = __webpack_require__(/*! ./involvement.js */ \"./src/modules/involvement.js\");\r\n\r\nconst mainContainer = document.querySelector('#commentsPopup');\r\n\r\nconst updateViewer = async (emojiID = 0) => {\r\n\tconst viewer = document.querySelector('#cp-commentsDiv-displayDiv');\r\n\tviewer.innerHTML = '';\r\n\t\r\n\tconst commentsDB = await getComments(emojiID);\r\n\r\n\tif (commentsDB.length === 0) {\r\n\t\tviewer.innerHTML = 'Hi there 👋 - be the first to comment on this emoji';\r\n\t} else {\r\n\t\t\tcommentsDB.forEach(commentObj => {\r\n\t\t\tviewer.innerHTML += `<p>${commentObj.creation_date} ${commentObj.username}: ${commentObj.comment}</p>`;\r\n\t\t});\r\n\t};\r\n};\r\n\r\n\r\nconst renderCommentsPopup = async (emoji_obj = {}, eNum = 0) => {\r\n\t\r\n\t// Render comments popup structure\r\n\tmainContainer.style.top = 0;\r\n\tmainContainer.innerHTML = `\r\n\t<h2 class=\"\" id=\"exitCommentsPopup\">X</h2>\r\n\t<h2 id=\"cp-icon\">${emoji_obj.htmlCode[0]}</h2>\r\n\t<h2 id=\"cp-title\">${emoji_obj.name}</h2>\r\n\r\n\t<div id=\"cp-attrDiv\">\r\n\t\t<p id=\"cp-attrDiv-categoryP\" class=\"cp-attrDiv-node\">category: ${emoji_obj.category}</p>\r\n\t\t<p id=\"cp-attrDiv-groupP\" class=\"cp-attrDiv-node\">group: ${emoji_obj.group}</p>\r\n\t\t<p id=\"cp-attrDiv-htmlCodeP\" class=\"cp-attrDiv-node\">htmlCode: ${emoji_obj.htmlCode[0]}</p>\r\n\t\t<p id=\"cp-attrDiv-unicodeP\" class=\"cp-attrDiv-node\">unicode: ${emoji_obj.unicode}</p>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div id=\"cp-commentsDiv\">\r\n\t\t<h3 id=\"cp-commentsDiv-title\">Comments (2)</h3>\r\n\t\t\r\n\t\t<div id=\"cp-commentsDiv-displayDiv\">\r\n\t\t</div>\r\n\t\t\r\n\t\t<h4 id=\"cp-commentsDiv-addCommentTitle\">Add comment</h4>\r\n\t\t<input id=\"cp-nameInput\" type=\"text\" placeholder=\"Your name\" aria-placeholder=\"Your name\">\r\n\t\t<textarea name=\"commentTA\" id=\"cp-commentTA\" cols=\"30\" rows=\"10\" placeholder=\"Your insights\" aria-placeholder=\"Your insights\"></textarea>\r\n\t\t<button id=\"commentButton\" type=\"button\">Comment</button>\r\n\t\t</div>\r\n\t`;\t\r\n\t\t\r\n\t// Load X button behaviour\r\n\tconst exitBtn = document.querySelector('#exitCommentsPopup');\r\n\texitBtn.addEventListener('click', () => {\r\n\t\tmainContainer.style.top = '-100vh';\r\n\t});\r\n\t\r\n\t// Load/Render emoji comments\r\n\tawait updateViewer(eNum);\r\n\t\r\n\t// Load comment button behaviour\r\n\r\n\tconst commentBtnx = document.querySelector('#commentButton');\r\n\tcommentBtnx.addEventListener('click', async () => {\r\n\t\tconst nameInput = document.querySelector('#cp-nameInput');\r\n\t\tconst commentTA = document.querySelector('#cp-commentTA');\r\n\t\tconsole.log('button clicked');\r\n\t\tconsole.log(eNum);\r\n\r\n\t\tconst post = {\r\n\t\t\titem_id: eNum,\r\n    \tusername: nameInput.value,\r\n    \tcomment: commentTA.value,\r\n\t\t};\r\n\r\n\t\tconsole.log('post = ' + post);\r\n\t\t\r\n\t\tawait addComment(post);\r\n\t\t\r\n\t\tnameInput.value = '';\r\n\t\tcommentTA.value = '';\r\n\t\t\r\n\t\tawait updateViewer(eNum);\r\n\t});\r\n\r\n};\r\n\r\nmodule.exports = renderCommentsPopup;\n\n//# sourceURL=webpack://capstone_2/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/footer.js":
/*!*******************************!*\
  !*** ./src/modules/footer.js ***!
  \*******************************/
/***/ ((module) => {

eval("const footer = document.querySelector('footer');\r\n// const renderMarquee = require('./marquee.js');\r\n\r\nconst setouLink = '<a href=\"https://github.com/Botlhale-Setou\">Botlhale Setou</a>';\r\nconst azizLink = '<a href=\"https://github.com/AzizRAA\">Azizbek Ruzmatov</a>';\r\nconst mitLink = `<a href=\"https://github.com/AzizRAA/Capstone_2/blob/development/MIT.md\">MIT Licence</a>`;\r\n\r\nconst renderFooter = () => {\r\n\tconst licenceText = document.createElement('p');\r\n\tlicenceText.classList.add('licenceText');\r\n\tlicenceText.innerHTML = `Created by ${setouLink} and ${azizLink} under the ${mitLink}`;\r\n\t\r\n\tfooter.append(licenceText);\r\n\r\n\t// renderMarquee();\t\r\n};\r\n\r\nmodule.exports = renderFooter;\n\n//# sourceURL=webpack://capstone_2/./src/modules/footer.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((module) => {

eval("const link = 'https://emojihub.herokuapp.com/api/all';\r\nconst arrOutput = [];\r\n\r\nconst getData = async () => {\r\n\t\tconst response = await fetch(link);\r\n\t\tconst allEmojis = await response.json();\r\n\r\n\t\tfor (let i = 100; i < 260; i += 1) {\r\n\t\t\tarrOutput.push(allEmojis[i]);\r\n\t\t}\r\n\r\n\treturn arrOutput;\r\n};\r\n\r\nmodule.exports = getData;\n\n//# sourceURL=webpack://capstone_2/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Logo = __webpack_require__(/*! ./artwork/pixelplanetlogo.png */ \"./src/modules/artwork/pixelplanetlogo.png\");\r\n\r\nrenderHeader = () => {\r\n\tconst theLogo = new Image();\r\n\ttheLogo.src = Logo;\r\n\ttheLogo.style.width = '35vw';\r\n\r\n\tconst navItems = document.createElement('div');\r\n\tconst emojisNav = document.createElement('a');\r\n\tconst aboutNav = document.createElement('a');\r\n\tconst contactNav = document.createElement('a');\r\n\r\n\ttheLogo.classList.add('theLogo');\r\n\tnavItems.classList.add('navItems');\r\n\temojisNav.classList.add('navItems-item');\r\n\taboutNav.classList.add('navItems-item');\r\n\tcontactNav.classList.add('navItems-item');\r\n\r\n\temojisNav.innerText = 'Emojis';\r\n\taboutNav.innerText = 'About';\r\n\tcontactNav.innerText = 'Contact';\r\n\r\n\tnavItems.append(emojisNav, aboutNav, contactNav);\r\n\r\n\ttheLogo.addEventListener('click', () => {\r\n\t\twindow.location.reload();\r\n\t});\r\n\r\n\tconst header = document.querySelector('#header');\r\n\theader.innerHTML = '';\r\n\theader.append(theLogo, navItems);\r\n};\r\n\r\nmodule.exports = renderHeader;\n\n//# sourceURL=webpack://capstone_2/./src/modules/header.js?");

/***/ }),

/***/ "./src/modules/involvement.js":
/*!************************************!*\
  !*** ./src/modules/involvement.js ***!
  \************************************/
/***/ ((module) => {

eval("\r\nconst addComment = async (data) => {\r\n\tconst clink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Wabvv9xOPozDkba4yUVs/comments';\r\n\tconsole.log('Now');\r\n\r\n\tawait fetch(clink, {\r\n\t\tbody: JSON.stringify(data),\r\n\t\tmethod: 'POST',\r\n\t\theaders: {\r\n\t\t\t'Content-type': 'application/json; charset= UTF-8',\r\n\t\t},\r\n\t});\r\n\r\n\tconst {result} = await response.json();\r\n\treturn result;\r\n};\r\n\r\nconst getComments = async (item_id) => {\r\n\tconsole.log('item_id = ' + item_id);\r\n\tlet link = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Wabvv9xOPozDkba4yUVs/comments?item_id=${item_id}`;\r\n\tconsole.log('link = ' + link);\r\n\r\n\tconst response = await fetch(link);\r\n\tconst result = await response.json();\r\n\r\n\treturn result;\r\n};\r\n\r\nmodule.exports = getComments, addComment;\n\n//# sourceURL=webpack://capstone_2/./src/modules/involvement.js?");

/***/ }),

/***/ "./src/modules/mainPage.js":
/*!*********************************!*\
  !*** ./src/modules/mainPage.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const getData = __webpack_require__(/*! ./getData.js */ \"./src/modules/getData.js\");\r\nconst renderCommentsPopup = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\r\nconst mainDiv = document.querySelector('main');\r\n\r\nconst renderMain = async () => {\r\n\tconst emojiDB = await getData();\r\n\r\n\tfor (let i = 0; i < emojiDB.length; i += 1) {\r\n\t\tmainDiv.innerHTML += `\r\n\t\t<div class=\"emojiCard\">\r\n\t\t<h2 class=\"emojiCard-icon\">${emojiDB[i].htmlCode[0]}</h2>\r\n\t\t<h3 class=\"emojiCard-title\">${emojiDB[i].name}</h3>\r\n\r\n\t\t<div class=\"emojiCard-likeDiv\">\r\n\t\t\t<p class=\"emojiCard-like\">&#10084;</p>\r\n\t\t\t<p class=\"emojiCard-likeDesc\">4 likes</p>\r\n\t\t</div>\r\n\r\n\t\t<button class=\"commentsBtn\" id=\"${i}\" type=\"button\">Comment</button>\r\n\t</div>\r\n\t\t`;\r\n\t};\r\n\r\n\tconst allCommentBtns = document.querySelectorAll('.commentsBtn');\r\n\r\n\tallCommentBtns.forEach((btn) => {\r\n\t\tbtn.addEventListener('click', async () => {\r\n\t\t\tconst index = parseInt(btn.id);\r\n\r\n\t\t\tawait renderCommentsPopup(emojiDB[index], index);\r\n\t\t});\r\n\t});\r\n\r\n};\r\n\r\nmodule.exports = renderMain;\n\n//# sourceURL=webpack://capstone_2/./src/modules/mainPage.js?");

/***/ }),

/***/ "./src/modules/artwork/background.jpg":
/*!********************************************!*\
  !*** ./src/modules/artwork/background.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3f34e17ce770665b7e75.jpg\";\n\n//# sourceURL=webpack://capstone_2/./src/modules/artwork/background.jpg?");

/***/ }),

/***/ "./src/modules/artwork/pixelplanetlogo.png":
/*!*************************************************!*\
  !*** ./src/modules/artwork/pixelplanetlogo.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c9b23460453221704383.png\";\n\n//# sourceURL=webpack://capstone_2/./src/modules/artwork/pixelplanetlogo.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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