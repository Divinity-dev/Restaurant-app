"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkrestaurant_app"] = self["webpackChunkrestaurant_app"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: \\\"Lato\\\", sans-serif;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 40px;\\r\\n  height: 40px;\\r\\n  border-radius: 10px;\\r\\n  margin-left: 10px;\\r\\n}\\r\\n\\r\\n.navigation {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.active {\\r\\n  color: black;\\r\\n  font-weight: bold;\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.nav-menu {\\r\\n  display: flex;\\r\\n  list-style: none;\\r\\n  gap: 30px;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\n.content {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  margin-left: 150px;\\r\\n}\\r\\n\\r\\n.content-child {\\r\\n  width: 100%;\\r\\n  height: auto;\\r\\n  margin-bottom: 20px;\\r\\n}\\r\\n\\r\\n.items {\\r\\n  margin-top: 50px;\\r\\n}\\r\\n\\r\\n.content-grandchild {\\r\\n  width: 50%;\\r\\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.79);\\r\\n  border-radius: 5%;\\r\\n}\\r\\n\\r\\n.content-grandchild img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.food {\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.span {\\r\\n  margin-top: 20px;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  border: 2px solid #000;\\r\\n  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.349);\\r\\n  font-size: 120%;\\r\\n  text-align: center;\\r\\n  border-radius: 3%;\\r\\n  margin-left: 40px;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  text-align: center;\\r\\n  border: 3px solid #000;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  background: rgba(0, 0, 0, 0.6);\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  position: absolute;\\r\\n  top: 0;\\r\\n  display: none;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.popup-content {\\r\\n  height: 440px;\\r\\n  width: 400px;\\r\\n  background: #fff;\\r\\n  padding: 20px;\\r\\n  border-radius: 6px;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  margin: 20px auto;\\r\\n  display: block;\\r\\n  width: 50%;\\r\\n  padding: 8px;\\r\\n  border-radius: 6px;\\r\\n  border: 1px solid gray;\\r\\n}\\r\\n\\r\\n.text-area {\\r\\n  margin: 20px auto;\\r\\n  display: block;\\r\\n  width: 50%;\\r\\n  border-radius: 6px;\\r\\n  padding: 8px;\\r\\n  border: 1px solid gray;\\r\\n}\\r\\n\\r\\n.close-btn {\\r\\n  position: absolute;\\r\\n  top: -1px;\\r\\n  right: -1px;\\r\\n}\\r\\n\\r\\n#img-food {\\r\\n  width: 140px;\\r\\n  height: 130px;\\r\\n  border-radius: 8px;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.cmt-title {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  width: 80px;\\r\\n  height: 30px;\\r\\n  border-radius: 8px;\\r\\n  border: 1px solid gray;\\r\\n  color: #000;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.comment-btn:hover {\\r\\n  background-color: aquamarine;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_logo_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/logo.jpg */ \"./src/images/logo.jpg\");\n/* harmony import */ var _modules_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dom.js */ \"./src/modules/dom.js\");\n/* harmony import */ var _modules_url_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/url.js */ \"./src/modules/url.js\");\n/* harmony import */ var _modules_send_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/send.js */ \"./src/modules/send.js\");\n/* harmony import */ var _modules_comment_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/comment.js */ \"./src/modules/comment.js\");\n/* harmony import */ var _modules_comments_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/comments.js */ \"./src/modules/comments.js\");\n\n\n\n\n\n\n\n\nconst foods = document.querySelector('.foods');\nconst desc = document.querySelector('.description');\nconst image = document.querySelector('.logo');\nconst commentBtn = document.querySelector('comment-btn');\nconst addCmtBtn = document.querySelector('#addCmtBtn')\nconst name = document.querySelector('.name');\nconst insights = document.querySelector('.text-area');\nconst comm = document.querySelector('.all-comments')\n\nimage.src = _images_logo_jpg__WEBPACK_IMPORTED_MODULE_1__;\n(0,_modules_dom_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\nconst Details = (lists, id) => {\n  const list = lists.find((list) => list.idMeal === id);\n  foods.src = list.strMealThumb;\n  desc.innerHTML = list.strMeal;\n  console.log(commentBtn);\n  commentBtn.setAttribute('data-index',list.idMeal);\n  addcommentSubmitListener();\n};\n\nconst getAllLikes = async () => {\n  const x = await fetch(_modules_url_js__WEBPACK_IMPORTED_MODULE_3__.url2).then((res) => res.json());\n  return x;\n};\n\nconst displayLikes = async (likeNode, mealId) => {\n  const likes = await getAllLikes();\n  const likearr = likes.filter((like) => parseInt(like.item_id, 10) === parseInt(mealId, 10));\n  likeNode.innerHTML = likearr[0].likes;\n};\n\nconst displayDetails = async (e) => {\n  await fetch(_modules_url_js__WEBPACK_IMPORTED_MODULE_3__.url).then((res) => res.json()).then((json) => Details(json.meals, e.target.getAttribute('id')));\n};\n\ndocument.getElementById('content').onclick = (e) => {\n  if (e.target.className === 'comment') {\n    document.querySelector('.popup').style.display = 'flex';\n    displayDetails(e);\n  } else if (e.target.className === 'fa fa-heart-o') {\n    (0,_modules_send_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n      item_id: e.target.getAttribute('id'),\n    });\n    const likenode = e.target.previousElementSibling;\n    displayLikes(likenode, e.target.getAttribute('id'));\n  }\n};\n\ndocument.querySelector('.close-btn').addEventListener('click', () => {\n  document.querySelector('.popup').style.display = 'none';\n});\n\n// commentBtn.addEventListener('click', (e) => {\n//   sendComment({\n//     item_id: e.idMeal,\n//     username: name.value,\n//     comment: insights.value,\n//   });\n// });\n\n/// new try\n\nconst displayComments = async (hostId) => {\n  const allComments = await (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_6__.getComments)(hostId);\n  if (allComments === 0) {\n    return;\n  }\n  let cmntsMarkup = '';\n  allComments.forEach((item) => {\n    cmntsMarkup += `<li class=\"shown-comment\">${item.creation_date} - ${item.username} <br> ${item.comment}</li>`;\n  });\n  comm.innerHTML = cmntsMarkup;\n};\n\nconst changeId = () => {\n  const newId = modalId.getAttribute('id');\n  return newId;\n};\n\nconst addCmtBtnAction = () => {\n  addCmtBtn.onsubmit = async (e) => {\n    e.preventDefault();\n    const mealId = changeId();\n    await (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_6__.postComment)(mealId, user, message);\n    displayComments(mealId);\n    addCmtBtn.reset();\n  };\n};\n\nconst submitComment = async (mealId) => {\n  const nameElement = document.querySelector('.name');\n  const commentElement = document.querySelector('.text-area');\n\n  const posted = await (0,_modules_comments_js__WEBPACK_IMPORTED_MODULE_6__.postComment)(mealId,nameElement,commentElement);\n  posted ? console.log('comment sucessfully submitted') : console.log('submission failed');\n}\n\nconst addcommentSubmitListener = () => {\n  commentBtn.addEventListener('click',  (e) => {\n    e.preventDefault();\n    const mealId = e.target.getAttribute('data-index');\n    submitComment(mealId);\n  });\n}\n\n\n\n// const totalMeals = (mealsArr) => mealsArr.length;\n\n// const displayMealsCounter = async (mealsArr) => {\n//   const mealsTotal = await totalMeals(mealsArr);\n//   document.getElementById('meal').innerHTML = `(${mealsTotal})`;\n// };\n\n// const getMeals = async () => {\n//   const mealsArr = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')\n//     .then((resp) => resp.json())\n//     .catch((error) => error);\n\n//   return mealsArr.meals;\n// };\n\n// displayMealsCounter(getMeals);\n\n\n//# sourceURL=webpack://restaurant-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getComment\": () => (/* binding */ getComment)\n/* harmony export */ });\n/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ \"./src/modules/url.js\");\n\n\nconst sendComment = async (mealobj) => {\n  await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__.url3, {\n    method: 'POST',\n    body: JSON.stringify(mealobj),\n    headers: { 'Content-Type': 'application/json' },\n  }).then((res) => res.json);\n  return sendComment;\n};\n\n// export const showComment = () => {\n//     document.querySelector('.all-comments').innerHTML =\n// }\n\nconst getComment = async () => {\n  await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__.url3).then((res) => res.json());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendComment);\n\n// const getAllLikes = async () => {\n//     const x = await fetch(url2).then((res) => res.json());\n//     return x;\n//   };\n\n//   const displayLikes = async (likeNode, mealId) => {\n//     const likes = await getAllLikes();\n//     const likearr = likes.filter((like) => parseInt(like.item_id, 10) === parseInt(mealId, 10));\n//     likeNode.innerHTML = likearr[0].likes;\n//   };\n\n// exports = {\n//     sendComment, getComment\n// }\n\n//# sourceURL=webpack://restaurant-app/./src/modules/comment.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\n/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ \"./src/modules/url.js\");\n\r\n\r\nconst postComment = async (MealId, name, message) => {\r\n  if (name.value && message.value) {\r\n   const postStatus = await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__.url3, {\r\n      method: 'post',\r\n      body: JSON.stringify({\r\n        item_id: MealId,\r\n        username: name.value,\r\n        comment: message.value,\r\n      }),\r\n      headers: {\r\n        'Content-type': 'application/json; charset=UTF-8',\r\n      },\r\n    }).then(() => true)\r\n      .catch(() => false);\r\n\r\n    return postStatus;\r\n  }\r\n};\r\n\r\nconst getComments = async (hostId) => {\r\n  const commentLink = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rOpkEBLjDARrzi6r3P9W/comments'?item_id=${hostId}`;\r\n  const response = await fetch(commentLink);\r\n  if (response.ok) {\r\n    const retrieved = await response.json();\r\n    return retrieved;\r\n  }\r\n  if (response.status === 400) {\r\n    return [];\r\n  }\r\n  return undefined;\r\n};\n\n//# sourceURL=webpack://restaurant-app/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ \"./src/modules/url.js\");\n\n\nconst content = document.getElementById('content');\nfunction show(meal) {\n  content.innerHTML += `<div class=\"content-child\">\n<div class=\"content-grandchild \">\n    <img src=${meal.strMealThumb} alt=\"\">\n    <div class=\"food\">\n        <h3>${meal.strMeal}</h3>\n        <div class=\"span\">\n        <span class=\"likes\"></span>\n        <i class=\"fa fa-heart-o\" aria-hidden=\"true\" id=${meal.idMeal}></i>\n    </div>\n    </div>\n    <button class=\"comment\" id=${meal.idMeal}>Comments</button>\n</div>\n</div>`;\n}\nconst mealDisplay = (list) => {\n  list.forEach((item, index) => {\n    show(item, index);\n  });\n};\nconst domDisplay = async () => {\n  await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__.url).then((res) => res.json()).then((json) => mealDisplay(json.meals));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domDisplay);\n\n//# sourceURL=webpack://restaurant-app/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/send.js":
/*!*****************************!*\
  !*** ./src/modules/send.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url.js */ \"./src/modules/url.js\");\n/* eslint-disable import/no-named-as-default */\n\n\nconst send = async (mealobj) => {\n  await fetch(_url_js__WEBPACK_IMPORTED_MODULE_0__.url2, {\n    method: 'POST',\n    body: JSON.stringify(mealobj),\n    headers: { 'Content-Type': 'application/json' },\n  });\n  return send;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (send);\n\n//# sourceURL=webpack://restaurant-app/./src/modules/send.js?");

/***/ }),

/***/ "./src/modules/url.js":
/*!****************************!*\
  !*** ./src/modules/url.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"url\": () => (/* binding */ url),\n/* harmony export */   \"url2\": () => (/* binding */ url2),\n/* harmony export */   \"url3\": () => (/* binding */ url3)\n/* harmony export */ });\nconst url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';\nconst url2 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wlC7hx9TD4NhKdjCqcZP/likes';\nconst url3 = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/rOpkEBLjDARrzi6r3P9W/comments';\n\n//# sourceURL=webpack://restaurant-app/./src/modules/url.js?");

/***/ }),

/***/ "./src/images/logo.jpg":
/*!*****************************!*\
  !*** ./src/images/logo.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b683fe276feca0efd986.jpg\";\n\n//# sourceURL=webpack://restaurant-app/./src/images/logo.jpg?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);