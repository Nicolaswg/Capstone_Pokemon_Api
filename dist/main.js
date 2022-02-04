/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../../src/img/pokemonLogo.png */ \"./src/img/pokemonLogo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Lato:300,400&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\r\\n:root {\\r\\n  --background-color: #fff;\\r\\n  --color-ligth-gray: #fff;\\r\\n  --card-color: #eee;\\r\\n  --font-color: #000;\\r\\n  --font-title-name: 'Lato';\\r\\n  --font-title-size: 1.2rem;\\r\\n  --font-comment-size: 1.5rem;\\r\\n}\\r\\n\\r\\n* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.header {\\r\\n  width: 100%;\\r\\n  height: 100px;\\r\\n  padding: 20px;\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n  width: 100px;\\r\\n  height: 80px;\\r\\n  background-size: cover;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.nav-bar {\\r\\n  display: flex;\\r\\n  gap: 20px;\\r\\n  flex-grow: 2;\\r\\n  justify-content: space-evenly;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\n.nav-bar li a {\\r\\n  text-decoration: none;\\r\\n  font-size: 1.2rem;\\r\\n  color: var(--font-color);\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n}\\r\\n\\r\\n.nav-link {\\r\\n  transition: color ease 600ms, font-size ease 600ms;\\r\\n}\\r\\n\\r\\n.nav-link:hover {\\r\\n  color: #accbee;\\r\\n  font-size: 1.5rem;\\r\\n  text-shadow: 14px 8px 9px #dbdada;\\r\\n}\\r\\n\\r\\n.homepage {\\r\\n  background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);\\r\\n}\\r\\n\\r\\n.main {\\r\\n  width: 100%;\\r\\n  padding: 20px;\\r\\n  display: flex;\\r\\n  gap: 40px;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.pokemon {\\r\\n  width: 250px;\\r\\n  height: 350px;\\r\\n  padding: 15px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  margin: 5px 10px 20px 10px;\\r\\n  border-radius: 30px;\\r\\n  background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%);\\r\\n  transition: transform ease 600ms;\\r\\n  -webkit-box-shadow: 11px 14px 22px 0 rgba(0, 0, 0, 0.62);\\r\\n  box-shadow: 11px 14px 22px 0 rgba(0, 0, 0, 0.62);\\r\\n}\\r\\n\\r\\n.pokemon:hover {\\r\\n  transform: scale(1.1);\\r\\n}\\r\\n\\r\\n.img-container {\\r\\n  background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);\\r\\n  border-radius: 50%;\\r\\n}\\r\\n\\r\\n.poke-img {\\r\\n  width: 180px;\\r\\n  height: 180px;\\r\\n  object-fit: contain;\\r\\n}\\r\\n\\r\\n.poke-title {\\r\\n  width: 70%;\\r\\n  margin-top: 10px;\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.poke-name {\\r\\n  font-family: var(--font-title-name);\\r\\n  font-size: var(--font-title-size);\\r\\n}\\r\\n\\r\\n.far.fa-heart {\\r\\n  font-size: var(--font-title-size);\\r\\n  cursor: pointer;\\r\\n  transition: color ease 600ms;\\r\\n}\\r\\n\\r\\n.far.fa-heart:hover {\\r\\n  color: #dd2f03;\\r\\n}\\r\\n\\r\\n.poke-like {\\r\\n  display: flex;\\r\\n  margin-top: 5px;\\r\\n  width: 50%;\\r\\n  justify-content: flex-end;\\r\\n  gap: 5px;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  font-family: var(--font-title-name);\\r\\n  font-size: 0.9rem;\\r\\n}\\r\\n\\r\\n.lk-counter {\\r\\n  font-family: var(--font-title-name);\\r\\n  font-size: 0.9rem;\\r\\n}\\r\\n\\r\\n.btn-container {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  margin-top: 40px;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.com-btn {\\r\\n  width: 80%;\\r\\n  padding: 12px;\\r\\n  background-image: radial-gradient(73% 147%, #eadfdf 59%, #ece2df 100%), radial-gradient(91% 146%, rgba(255, 255, 255, 0.5) 47%, rgba(0, 0, 0, 0.5) 100%);\\r\\n  background-blend-mode: screen;\\r\\n  border-radius: 12px;\\r\\n  transition: background ease 600ms, border ease 600ms;\\r\\n}\\r\\n\\r\\n.com-btn:hover {\\r\\n  background: #dfdcdc8a;\\r\\n  border: solid 1px #6991c7;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  width: 100%;\\r\\n  height: 10vh;\\r\\n  padding: 10px;\\r\\n  background: var(--background-color);\\r\\n  border-top: 3px solid var(--font-color);\\r\\n}\\r\\n\\r\\n.footer p {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  display: flex;\\r\\n  font-size: 1.1rem;\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.modal-bg {\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n  background-color: rgba(0, 0, 0, 0.6);\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  backdrop-filter: blur(3px);\\r\\n  z-index: 5;\\r\\n}\\r\\n\\r\\n.com-contain {\\r\\n  height: 85%;\\r\\n  padding: 15px;\\r\\n  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);\\r\\n  border-radius: 10px;\\r\\n  display: flex;\\r\\n  position: relative;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.close-popUp {\\r\\n  position: absolute;\\r\\n  background: var(--background-color);\\r\\n  top: 10px;\\r\\n  right: 10px;\\r\\n  width: 40px;\\r\\n  height: 40px;\\r\\n  border-radius: 8px;\\r\\n  transition: background ease 600ms, color ease 600ms;\\r\\n}\\r\\n\\r\\n.close-popUp:hover {\\r\\n  background: #dd2f03;\\r\\n  color: var(--background-color);\\r\\n}\\r\\n\\r\\n.img-div-contain {\\r\\n  width: 200px;\\r\\n  height: 200px;\\r\\n  background-color: var(--background-color);\\r\\n  border-radius: 50%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(2, 1fr);\\r\\n  grid-template-rows: repeat(2, 1fr);\\r\\n  gap: 15px;\\r\\n  margin-top: 10px;\\r\\n  margin-left: 20px;\\r\\n}\\r\\n\\r\\n.description p {\\r\\n  font-family: var(--font-title-name);\\r\\n  font-size: var(--font-title-size);\\r\\n  margin-right: 20px;\\r\\n  border: solid 2px var(--background-color);\\r\\n  padding: 5px;\\r\\n  border-radius: 8px;\\r\\n  color: #68a4f3;\\r\\n}\\r\\n\\r\\n.Add-comment {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  margin-top: 10px;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  gap: 15px;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  background-color: #eee;\\r\\n  margin-top: 20px;\\r\\n  border-radius: 10px;\\r\\n  padding: 10px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n  gap: 5px;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  background-color: white;\\r\\n  padding: 10px;\\r\\n  border-radius: 6px;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  transition: 0.3s;\\r\\n  border: 1px solid #ccc;\\r\\n}\\r\\n\\r\\n.label {\\r\\n  font-family: var(--font-title-name);\\r\\n  font-size: var(--font-comment-size);\\r\\n  text-decoration: underline;\\r\\n  color: #68a4f3;\\r\\n}\\r\\n\\r\\n.label2 {\\r\\n  font-family: var(--font-title-name);\\r\\n  font-size: var(--font-comment-size);\\r\\n  margin-left: 20px;\\r\\n  margin-top: 20px;\\r\\n  color: #68a4f3;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.input-name,\\r\\n.input-area {\\r\\n  padding: 10px;\\r\\n  border: 2px solid rgb(10, 9, 9);\\r\\n  border-radius: 6px;\\r\\n  flex: 1;\\r\\n  width: 300px;\\r\\n  height: 8px;\\r\\n}\\r\\n\\r\\n.input-name:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.input-area:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  width: 50%;\\r\\n  padding: 12px;\\r\\n  background-image: radial-gradient(73% 147%, #eadfdf 59%, #ece2df 100%), radial-gradient(91% 146%, rgba(255, 255, 255, 0.5) 47%, rgba(0, 0, 0, 0.5) 100%);\\r\\n  background-blend-mode: screen;\\r\\n  border-radius: 12px;\\r\\n  transition: background ease 600ms, border ease 600ms;\\r\\n}\\r\\n\\r\\n.btn:hover {\\r\\n  background: #dfdcdc8a;\\r\\n  border: solid 1px #6991c7;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_pokeRender_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/pokeRender.js */ \"./src/modules/pokeRender.js\");\n\n\n\n(0,_modules_pokeRender_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/commentPopUp.js":
/*!*************************************!*\
  !*** ./src/modules/commentPopUp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"comPopUp\": () => (/* binding */ comPopUp),\n/* harmony export */   \"getCounter\": () => (/* binding */ getCounter),\n/* harmony export */   \"getCommentArr\": () => (/* binding */ getCommentArr)\n/* harmony export */ });\nconst getCommentArr = async (comId) => {\r\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ApHeiaIj7DwoNhyw7w7c/comments?item_id=${comId}`);\r\n  const resolve = await response.json();\r\n  return resolve;\r\n};\r\n\r\nconst addCommentToArray = async (id, nametTxt, commentArea) => {\r\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ApHeiaIj7DwoNhyw7w7c/comments', {\r\n    method: 'POST',\r\n    headers: {\r\n      Accept: 'application/json',\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: `${id}`,\r\n      username: `${nametTxt}`,\r\n      comment: `${commentArea}`,\r\n    }),\r\n  });\r\n};\r\n\r\nconst getCounter = (comId) => {\r\n  const resolve = comId.length;\r\n  return resolve;\r\n};\r\n\r\nconst comPopUp = (pokemon, i, pokId) => {\r\n  const parent = document.createElement('div');\r\n  parent.classList.add('modal-bg');\r\n\r\n  const commentContainer = document.createElement('div');\r\n  commentContainer.classList.add('com-contain'); let commentHtml = '';\r\n\r\n  commentHtml += `\r\n  <button class=\"close-popUp\">X</button>\r\n  <div class=\"img-div-contain\">\r\n  <img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon[i].id}.png\" class=\"poke-img\">\r\n  </div>\r\n  <div class=\"description\">\r\n     <p>weight: ${pokemon[i].weight} kg</p>\r\n     <p>height: ${pokemon[i].height} m</p>\r\n     <p>species: ${pokemon[i].species.name}</p>\r\n     <p>type: ${pokemon[i].types[0].type.name}</p>\r\n     </div>\r\n     <div>\r\n     <p class=\"label2\"> All the Comments [<span class=\"counter\"> </span>]</p>\r\n     <div class=\"comments\">\r\n     \r\n     </div>\r\n      <div class=\"Add-comment\">\r\n      <form class=\"form\">\r\n      <label class=\"label\">Add a comment ✍\r\n      </label>\r\n      <input class=\"input-name\" id=\"name\" type=\"text\" placeholder=\"Your name\">\r\n      <textarea class=\"input-area\" id=\"txtArea\" cols=\"8\" rows=\"3\" placeholder=\"Your insights\"></textarea>\r\n      <button class=\"btn\" type=\"submit\">Comment</button\r\n      ></form>\r\n      </div>\r\n      </div>`;\r\n\r\n  commentContainer.innerHTML = commentHtml;\r\n  parent.appendChild(commentContainer);\r\n  document.body.appendChild(parent);\r\n\r\n  const btnClose = document.querySelector('.close-popUp');\r\n\r\n  btnClose.addEventListener('click', () => {\r\n    parent.remove();\r\n  });\r\n\r\n  const inputName = document.querySelector('.input-name');\r\n  const inputArea = document.querySelector('.input-area');\r\n  const formDiv = document.querySelectorAll('.form');\r\n  const commentDiv = document.querySelector('.comments');\r\n  const counterCom = document.querySelector('.counter');\r\n\r\n  function displayComments(comments) {\r\n    commentDiv.innerHTML = '';\r\n    counterCom.textContent = getCounter(comments);\r\n\r\n    comments.forEach((elemnt) => {\r\n      const div = document.createElement('div');\r\n      div.className = 'comment';\r\n\r\n      const nameWithComment = document.createElement('p');\r\n      nameWithComment.className = 'comment';\r\n\r\n      const title = `${elemnt.creation_date} ${elemnt.username} : ${elemnt.comment}`;\r\n      nameWithComment.textContent = title;\r\n      div.appendChild(nameWithComment);\r\n      commentDiv.appendChild(div);\r\n    });\r\n  }\r\n\r\n  const addElementsToPageFrom = async (comId) => {\r\n    await getCommentArr(comId).then((comments) => {\r\n      displayComments(comments);\r\n    });\r\n  };\r\n\r\n  for (let i = 0; i < formDiv.length; i += 1) {\r\n    formDiv[i].addEventListener('submit', (e) => {\r\n      e.preventDefault();\r\n\r\n      const pok = Number(pokId);\r\n      const name = document.getElementById('name').value;\r\n      const comment = document.getElementById('txtArea').value;\r\n      addCommentToArray(pok, name, comment).then(() => {\r\n        addElementsToPageFrom(pok);\r\n      });\r\n      inputName.value = '';\r\n      inputArea.value = '';\r\n      inputName.focus();\r\n    });\r\n  }\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/commentPopUp.js?");

/***/ }),

/***/ "./src/modules/counters.js":
/*!*********************************!*\
  !*** ./src/modules/counters.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemCount = (arr) => arr.length;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemCount);\n\n//# sourceURL=webpack:///./src/modules/counters.js?");

/***/ }),

/***/ "./src/modules/displayHome.js":
/*!************************************!*\
  !*** ./src/modules/displayHome.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayHeader\": () => (/* binding */ displayHeader),\n/* harmony export */   \"pokeCard\": () => (/* binding */ pokeCard)\n/* harmony export */ });\n/* harmony import */ var _commentPopUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentPopUp.js */ \"./src/modules/commentPopUp.js\");\n/* harmony import */ var _likeApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likeApi.js */ \"./src/modules/likeApi.js\");\n/* harmony import */ var _counters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counters.js */ \"./src/modules/counters.js\");\n\r\n\r\n\r\n\r\nconst header = document.querySelector('.header');\r\nconst pokedex = document.getElementById('pokedex');\r\nconst displayHeader = (arr) => {\r\n  const pokeNum = (0,_counters_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr);\r\n  const html = `<div class=\"logo\"></div><ul class=\"nav-bar\"><li><a href=\"#\" class=\"nav-link\">Pokemons (${pokeNum})</a></li><li><a href=\"#\" class=\"nav-link\">Game List</a></li><li><a href=\"#\"class=\"nav-link\">Players</a></li></ul>`;\r\n  header.innerHTML = html;\r\n};\r\nconst pokeCard = async (pokeArr) => {\r\n  let pokeHTML = '';\r\n  const lkNum = await (0,_likeApi_js__WEBPACK_IMPORTED_MODULE_1__.getLike)();\r\n  pokeArr.forEach((element, i) => {\r\n    pokeHTML += `<div class=\"pokemon\" id=\"${pokeArr[i].id}\">\r\n      <div class=\"img-container\">\r\n      <img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeArr[i].id}.png\" class=\"poke-img\">\r\n      </div>\r\n      <div class=\"poke-title\">\r\n      <p class=\"poke-name\">${pokeArr[i].name}</p>\r\n      <i class=\"far fa-heart lk\"></i></div>\r\n      <div class=\"poke-like\">\r\n      <span class =\"lk-counter\">${lkNum[i].likes}</span>\r\n      <p class=\"likes\">Likes</p></div>\r\n      <div class=\"btn-container\">\r\n      <button class=\"com-btn\">Comments</button>\r\n      </div>\r\n      </div>`;\r\n    pokedex.innerHTML = pokeHTML;\r\n  });\r\n\r\n  const likes = document.querySelectorAll('.lk');\r\n  const sapns = document.querySelectorAll('.lk-counter');\r\n\r\n  likes.forEach(async (like, i) => {\r\n    like.addEventListener('click', async () => {\r\n      sapns[i].textContent = Number(sapns[i].textContent) + 1;\r\n      await (0,_likeApi_js__WEBPACK_IMPORTED_MODULE_1__.postLike)(i);\r\n    });\r\n  });\r\n\r\n  const commentBtn = document.querySelectorAll('.com-btn');\r\n  commentBtn.forEach((e, i) => {\r\n    commentBtn[i].addEventListener('click', async (e) => {\r\n      const pokId = e.target.parentNode.parentNode.id;\r\n      (0,_commentPopUp_js__WEBPACK_IMPORTED_MODULE_0__.comPopUp)(pokeArr, i, pokId);\r\n\r\n      // document.querySelector('.counter').textContent = getCounter(pokId);\r\n\r\n      const commentDiv = document.querySelector('.comments');\r\n      const comments = await (0,_commentPopUp_js__WEBPACK_IMPORTED_MODULE_0__.getCommentArr)(pokId);\r\n\r\n      document.querySelector('.counter').textContent = (0,_commentPopUp_js__WEBPACK_IMPORTED_MODULE_0__.getCounter)(comments);\r\n\r\n      comments.forEach((elemnt) => {\r\n        const div = document.createElement('div');\r\n        div.className = 'comment';\r\n        const nameWithComment = document.createElement('p');\r\n        nameWithComment.className = 'comment';\r\n        const title = `${elemnt.creation_date} ${elemnt.username} : ${elemnt.comment}`;\r\n        nameWithComment.textContent = title;\r\n        div.appendChild(nameWithComment);\r\n        commentDiv.appendChild(div);\r\n      });\r\n    });\r\n  });\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/displayHome.js?");

/***/ }),

/***/ "./src/modules/likeApi.js":
/*!********************************!*\
  !*** ./src/modules/likeApi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postLike\": () => (/* binding */ postLike),\n/* harmony export */   \"getLike\": () => (/* binding */ getLike)\n/* harmony export */ });\nconst baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst appID = 'ApHeiaIj7DwoNhyw7w7c';\n\nconst postLike = async (id) => {\n  const response = await fetch(`${baseURL}${appID}/likes/`, {\n    method: 'POST',\n    body: JSON.stringify({ item_id: id }),\n    headers: {\n      'Content-type': 'application/JSON',\n    },\n  });\n  const result = await response.text();\n  return result;\n};\n\nconst getLike = async () => {\n  const response = await fetch(`${baseURL}${appID}/likes/`);\n  const result = await response.json();\n  return result;\n};\n\n\n\n\n//# sourceURL=webpack:///./src/modules/likeApi.js?");

/***/ }),

/***/ "./src/modules/pokeList.js":
/*!*********************************!*\
  !*** ./src/modules/pokeList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass List {\n    static pokeList = [];\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);\n\n//# sourceURL=webpack:///./src/modules/pokeList.js?");

/***/ }),

/***/ "./src/modules/pokeRender.js":
/*!***********************************!*\
  !*** ./src/modules/pokeRender.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pokeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokeList.js */ \"./src/modules/pokeList.js\");\n/* harmony import */ var _displayHome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayHome.js */ \"./src/modules/displayHome.js\");\n/* eslint-disable no-await-in-loop */\r\n\r\n\r\n\r\nconst pokemonNumber = 9;\r\nconst pokemonList = async () => {\r\n  for (let i = 1; i <= pokemonNumber; i += 1) {\r\n    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;\r\n    const res = await fetch(url);\r\n    const pokemon = await res.json();\r\n    _pokeList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pokeList.push(pokemon);\r\n  }\r\n  (0,_displayHome_js__WEBPACK_IMPORTED_MODULE_1__.pokeCard)(_pokeList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pokeList);\r\n  (0,_displayHome_js__WEBPACK_IMPORTED_MODULE_1__.displayHeader)(_pokeList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pokeList);\r\n  return _pokeList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pokeList;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pokemonList);\r\n\n\n//# sourceURL=webpack:///./src/modules/pokeRender.js?");

/***/ }),

/***/ "./src/img/pokemonLogo.png":
/*!*********************************!*\
  !*** ./src/img/pokemonLogo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b68bd9724e687f016a77.png\";\n\n//# sourceURL=webpack:///./src/img/pokemonLogo.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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