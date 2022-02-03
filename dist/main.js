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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/img/pokemonLogo.png */ \"./src/img/pokemonLogo.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Lato:300,400&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n:root {\\n  --background-color: #fff;\\n  --color-ligth-gray: #dbdada;\\n  --card-color: #eee;\\n  --font-color: #000;\\n  --font-title-name: 'Lato';\\n  --font-title-size: 1.1rem;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n.header {\\n  width: 100%;\\n  height: 100px;\\n  padding: 20px;\\n  display: flex;\\n  justify-content: space-evenly;\\n  align-items: center;\\n}\\n\\n.logo {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  width: 100px;\\n  height: 80px;\\n  background-size: cover;\\n  cursor: pointer;\\n}\\n\\n.nav-bar {\\n  display: flex;\\n  gap: 20px;\\n  flex-grow: 2;\\n  justify-content: space-evenly;\\n  list-style: none;\\n}\\n\\n.nav-bar li a {\\n  text-decoration: none;\\n  font-size: 1.2rem;\\n  color: var(--font-color);\\n  font-family: 'Roboto', sans-serif;\\n}\\n\\n.nav-link {\\n  transition: color ease 600ms, font-size ease 600ms;\\n}\\n\\n.nav-link:hover {\\n  color: rgb(30, 188, 199);\\n  font-size: 1.5rem;\\n  text-shadow: 14px 8px 9px #dbdada;\\n}\\n\\n.homepage {\\n  background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);\\n}\\n\\n.main {\\n  width: 100%;\\n  padding: 20px;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.pokemon {\\n  width: 250px;\\n  padding: 15px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  margin: 5px 10px 20px 10px;\\n  background-color: var(--card-color);\\n  border-radius: 30px;\\n}\\n\\n.img-container {\\n  background-color: var(--background-color);\\n  border-radius: 50%;\\n}\\n\\n.poke-img {\\n  width: 150px;\\n  height: 150px;\\n  object-fit: contain;\\n}\\n\\n.poke-title {\\n  width: 50%;\\n  display: flex;\\n  justify-content: space-evenly;\\n  align-items: center;\\n}\\n\\n.poke-name {\\n  font-family: var(--font-title-name);\\n  font-size: var(--font-title-size);\\n}\\n\\n.far.fa-heart {\\n  font-size: var(--font-title-size);\\n  cursor: pointer;\\n}\\n\\n.poke-like {\\n  display: flex;\\n  margin-top: 5px;\\n  width: 50%;\\n  justify-content: flex-end;\\n}\\n\\n.likes {\\n  font-family: var(--font-title-name);\\n  font-size: 0.9rem;\\n}\\n\\n.btn-container {\\n  display: flex;\\n  padding-top: 20px;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\n.footer {\\n  width: 100%;\\n  height: 10vh;\\n  padding: 10px;\\n  background: var(--color-ligth-gray);\\n  border-top: 3px solid var(--font-color);\\n}\\n\\n.footer p {\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  font-size: 1.1rem;\\n  font-family: 'Roboto', sans-serif;\\n  align-items: center;\\n}\\n\\n.hidden {\\n  display: none;\\n}\\n\\n.com-contain {\\n  background-color: var(--color-ligth-gray);\\n  border-radius: 25px;\\n}\\n\\n.close-popUp {\\n  margin-left: 270px;\\n  padding: 5px;\\n  border-radius: 8px;\\n}\\n\\n.modal-bg {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100vh;\\n  background-color: rgba(0, 0, 0, 0.6);\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  backdrop-filter: blur(3px);\\n  z-index: 5;\\n}\\n\\n.img-div-contain {\\n  width: 150px;\\n  height: 150px;\\n  background-color: var(--background-color);\\n  border-radius: 50%;\\n  margin-left: 50px;\\n}\\n\\n.description {\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  grid-template-rows: repeat(2, 1fr);\\n  gap: 20px;\\n  margin-top: 10px;\\n  margin-left: 15px;\\n}\\n\\n.description p {\\n  font-family: monospace;\\n  font-size: 15px;\\n}\\n\\n.form {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 15px;\\n  margin-left: 30px;\\n  margin-top: 10px;\\n}\\n\\n.comments {\\n  background-color: #eee;\\n  margin-top: 20px;\\n  border-radius: 10px;\\n  padding: 20px;\\n  display: flex;\\n  flex-direction: column;\\n  width: 350px;\\n  height: 150px;\\n  margin-left: 30px;\\n  overflow-y: scroll;\\n} \\n\\n/*\\n.comment {\\n  background-color: white;\\n  padding: 10px;\\n  border-radius: 6px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  transition: 0.3s;\\n  cursor: pointer;\\n  border: 1px solid #ccc;\\n} */\\n\\n.label {\\n  font-size: 22px;\\n  font-weight: bold;\\n}\\n\\n.label2 {\\n  font-size: 22px;\\n  font-weight: bold;\\n  margin-left: 50px;\\n  margin-top: 10px;\\n}\\n\\n.input-name,\\n.input-area {\\n  padding: 10px;\\n  border: 2px solid rgb(10, 9, 9);\\n  border-radius: 6px;\\n  flex: 1;\\n  width: 200px;\\n  height: 8px;\\n}\\n\\n.input-name:focus {\\n  outline: none;\\n}\\n\\n.input-area:focus {\\n  outline: none;\\n}\\n\\n.btn {\\n  border-left: 3px black;\\n  border-top: 3px black;\\n  padding: 10px;\\n  border-radius: 6px;\\n  margin-left: 110px;\\n  cursor: pointer;\\n  width: 75px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayHome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayHome.js */ \"./src/modules/displayHome.js\");\n/* harmony import */ var _modules_pokeRender_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/pokeRender.js */ \"./src/modules/pokeRender.js\");\n\n\n\n\n(0,_modules_displayHome_js__WEBPACK_IMPORTED_MODULE_1__.displayHeader)();\n(0,_modules_pokeRender_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/commentPopUp.js":
/*!*************************************!*\
  !*** ./src/modules/commentPopUp.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// const { DateTime } = require('luxon');\n\nconst comPopUp = (pokemon, i, pokId) => {\n  const parent = document.createElement('div');\n  parent.classList.add('modal-bg');\n  parent.classList.add('overlay');\n  const commentContainer = document.createElement('div');\n  commentContainer.classList.add('com-contain');\n\n  let commentHtml = '';\n  commentHtml += `<section class=\"coment-sec\" >\n    <button class=\"close-popUp\">X</button>\n    <div class=\"img-div-contain\">\n       <img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon[i].id}.png\" class=\"poke-img\"> \n    </div>\n    <div class=\"description\">\n        <p>weight: ${pokemon[i].weight}</p>\n        <p>height: ${pokemon[i].height}</p>\n        <p>species: ${pokemon[i].species.name}</p>\n        <p>type: ${pokemon[i].types[0].type.name}</p>\n    </div>\n    <div>\n       <p class=\"label2\"> Comments () </p>  \n        <div class=\"comments\">\n\n        </div>\n        <div class=\"Add-comment\">\n            <form class=\"form\">\n                <label class=\"label\">Add a comment ✍</label>\n                <input class=\"input-name\" id=\"name\" type=\"text\" placeholder=\"Your name\">\n                <textarea class=\"input-area\" id=\"txtArea\" cols=\"8\" rows=\"3\" placeholder=\"Your insights\"></textarea>\n                <button class=\"btn\" type=\"submit\">Comment</button>\n            </form>\n        </div>\n    </div>\n    </section>`;\n\n  commentContainer.innerHTML = commentHtml;\n  parent.appendChild(commentContainer);\n  document.body.appendChild(parent);\n\n  const btnClose = document.querySelector('.close-popUp');\n\n  btnClose.addEventListener('click', () => {\n    parent.remove();\n  });\n\n  const inputName = document.querySelector(\".input-name\");\n  const inputArea = document.querySelector(\".input-area\");\n  const formDiv = document.querySelectorAll(\".form\");\n  const commentDiv = document.querySelector(\".comments\");\n\n  const getCommentArr = async (comId) => {\n    const response = await fetch(\n      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ApHeiaIj7DwoNhyw7w7c/comments?item_id=${comId}`\n    );\n    return response.json();\n  };\n\n  // const comments = [];\n  function displayComments(comments) {\n    // console.log(comments);\n    commentDiv.innerHTML = \" \";\n\n    comments.forEach((elemnt) => {\n      // create main div\n      const div = document.createElement(\"div\");\n      div.className = \"comment\";\n      // div.setAttribute(\"item-id\", elemnt.id);\n\n      // const theTime = DateTime.now().toLocaleString(DateTime.DATETIME_MED);\n      const theTime = elemnt.creation_date;\n\n      const nameWithComment = document.createElement(\"p\");\n      nameWithComment.className = \"comment\";\n      const title = `${theTime} ${elemnt.username} : ${elemnt.comment}`;\n      nameWithComment.textContent = title;\n      div.appendChild(nameWithComment);\n\n      commentDiv.appendChild(div);\n    });\n  }\n\n  const addElementsToPageFrom = async (comId) => {\n    await getCommentArr(comId).then((comments) => {\n      displayComments(comments);\n    });\n  };\n\n  const addCommentToArray = async (id, nametTxt, commentArea) => {\n    await fetch(\n      \"https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ApHeiaIj7DwoNhyw7w7c/comments\",\n      {\n        method: \"POST\",\n        headers: {\n          Accept: \"application/json\",\n          \"Content-Type\": \"application/json\",\n        },\n        body: JSON.stringify({\n          item_id: `${id}`,\n          username: `${nametTxt}`,\n          comment: `${commentArea}`,\n        }),\n      }\n    );\n  };\n\n  const pok = Number(pokId);\n  addElementsToPageFrom(pok);\n  for (let i = 0; i < formDiv.length; i += 1) {\n    formDiv[i].addEventListener(\"submit\", (e) => {\n      e.preventDefault();\n      // const pok = Number(pokId);\n\n      if (inputName !== \" \" && inputArea !== \" \") {\n        const name = document.getElementById(\"name\").value;\n        const comment = document.getElementById(\"txtArea\").value;\n        // const id = document.getElementById(\"item-id\");\n        addElementsToPageFrom(pok);\n        addCommentToArray(pok, name, comment);\n        inputName.value = \"\";\n        inputArea.value = \"\";\n        inputName.focus();\n      }\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (comPopUp);\n\n\n//# sourceURL=webpack:///./src/modules/commentPopUp.js?");

/***/ }),

/***/ "./src/modules/displayHome.js":
/*!************************************!*\
  !*** ./src/modules/displayHome.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayHeader\": () => (/* binding */ displayHeader),\n/* harmony export */   \"pokeCard\": () => (/* binding */ pokeCard)\n/* harmony export */ });\n/* harmony import */ var _commentPopUp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentPopUp.js */ \"./src/modules/commentPopUp.js\");\n/* harmony import */ var _likeApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likeApi.js */ \"./src/modules/likeApi.js\");\n\n\n\nconst header = document.querySelector(\".header\");\nconst pokedex = document.getElementById(\"pokedex\");\nconst pokemonNumber = 150;\nconst displayHeader = () => {\n  const html = `<div class=\"logo\"></div><ul class=\"nav-bar\"><li><a href=\"#\" class=\"nav-link\">Pokemons (${pokemonNumber})</a></li><li><a href=\"#\" class=\"nav-link\">Game List</a></li><li><a href=\"#\"class=\"nav-link\">Players</a></li></ul>`;\n  header.innerHTML = html;\n};\n\nconst pokeCard = async (pokeArr) => {\n  let pokeHTML = \"\";\n  const lkNum = await (0,_likeApi_js__WEBPACK_IMPORTED_MODULE_1__.getLike)();\n  pokeArr.map((e, i) => {\n    pokeHTML += `<div class=\"pokemon\" id=\"${pokeArr[i].id}\">\n    <div class=\"img-container\">\n    <img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokeArr[i].id}.png\" class=\"poke-img\">\n    </div>\n    <div class=\"poke-title\">\n    <p class=\"poke-name\">${pokeArr[i].name}</p>\n    <i class=\"far fa-heart lk\"></i>\n    </div>\n    <span class =\"lk-counter\">${lkNum[i].likes}</span>\n    <div class=\"poke-like\">\n    <p class=\"likes\">Likes</p>\n    </div>\n    <div class=\"btn-container\"><button class=\"com-btn\">Comments</button>\n    </div>\n    </div>`;\n    pokedex.innerHTML = pokeHTML;\n    return pokeArr;\n  });\n  const likes = document.querySelectorAll(\".lk\");\n  likes.forEach((like, i) => {\n    like.addEventListener(\"click\", () => {\n      (0,_likeApi_js__WEBPACK_IMPORTED_MODULE_1__.postLike)(i);\n    });\n  });\n  const commentBtn = document.querySelectorAll(\".com-btn\");\n  commentBtn.forEach((e, i) => {\n    commentBtn[i].addEventListener(\"click\", () => {\n      const pokId = e.target.parentNode.parentNode.id;\n      (0,_commentPopUp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(pokeArr, i, pokId);\n    });\n  });\n  // const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);\n};\n\n\n\n//# sourceURL=webpack:///./src/modules/displayHome.js?");

/***/ }),

/***/ "./src/modules/likeApi.js":
/*!********************************!*\
  !*** ./src/modules/likeApi.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postLike\": () => (/* binding */ postLike),\n/* harmony export */   \"getLike\": () => (/* binding */ getLike)\n/* harmony export */ });\nconst baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';\nconst appID = 'ApHeiaIj7DwoNhyw7w7c';\n\nconst postLike = async (id) => {\n  const response = await fetch(`${baseURL}${appID}/likes/`, {\n    method: 'POST',\n    body: JSON.stringify({ item_id: id }),\n    headers: {\n      'Content-type': 'application/JSON',\n    },\n  });\n  const result = await response.text();\n  return result;\n};\n\nconst getLike = async () => {\n  const response = await fetch(`${baseURL}${appID}/likes/`);\n  const result = await response.json();\n  return result;\n};\n\n\n\n//# sourceURL=webpack:///./src/modules/likeApi.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pokeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pokeList.js */ \"./src/modules/pokeList.js\");\n/* harmony import */ var _displayHome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayHome.js */ \"./src/modules/displayHome.js\");\n/* eslint-disable no-await-in-loop */\n\n\n\nconst pokemonNumber = 9;\nconst pokemonList = async () => {\n  for (let i = 1; i <= pokemonNumber; i += 1) {\n    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;\n    const res = await fetch(url);\n    const pokemon = await res.json();\n    _pokeList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pokeList.push(pokemon);\n  }\n  (0,_displayHome_js__WEBPACK_IMPORTED_MODULE_1__.pokeCard)(_pokeList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pokeList);\n  return _pokeList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pokeList;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pokemonList);\n\n\n//# sourceURL=webpack:///./src/modules/pokeRender.js?");

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