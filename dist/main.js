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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background: #f5f5f5;\\n  font-family: Arial, sans-serif;\\n  color: #333;\\n  height: 100%;\\n  width: 100%;\\n  font-size: 16px;\\n}\\n\\nmain {\\n  margin: 80px 48px;\\n  background: #fff;\\n  border-radius: 2px;\\n  box-shadow: 10px 5px 5px #d5d5d5;\\n  border: 1px solid #d5d5d5;\\n}\\n\\n.top {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.top > h1 {\\n  font-weight: normal;\\n  padding: 24px;\\n  margin: 0;\\n  border-bottom: 1px solid #d5d5d5;\\n}\\n\\n.top > img {\\n  margin: 20px;\\n  cursor: pointer;\\n}\\n\\n#add-todo-label {\\n  display: flex;\\n  justify-content: space-between;\\n  padding-right: 24px;\\n  border-bottom: 1px solid #d5d5d5;\\n  align-items: center;\\n}\\n\\n#add-task {\\n  box-sizing: border-box;\\n  margin: 0;\\n  font-size: 24px;\\n  font-style: italic;\\n  padding: 24px;\\n  border: none;\\n  border-bottom: 1px solid #d5d5d5;\\n  width: 100%;\\n}\\n\\n#add-task:focus {\\n  outline: none;\\n}\\n\\nul {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nul > li {\\n  padding: 24px;\\n  border-bottom: 1px solid #d5d5d5;\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\nul > li > label {\\n  gap: 24px;\\n  display: flex;\\n}\\n\\n.checkbox {\\n  height: 16px;\\n  width: 16px;\\n  margin: 0;\\n}\\n\\np {\\n  background: #f5f5f5;\\n  padding: 24px;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\np > a:hover {\\n  text-decoration: none;\\n  color: #888;\\n}\\n\\n.header-icon {\\n  height: 32px;\\n}\\n\\n.icon {\\n  height: 16px;\\n  width: 16px;\\n  cursor: pointer;\\n}\\n\\n.edit-todo-form {\\n  padding: 24px;\\n  display: flex;\\n  justify-content: space-between;\\n  background: lightyellow;\\n  border-bottom: 1px solid #d5d5d5;\\n}\\n\\n.edit-todo-form > label {\\n  display: flex;\\n  gap: 24px;\\n}\\n\\n.edit-todo-input {\\n  background: lightyellow;\\n  border: none;\\n}\\n\\n.completed {\\n  text-decoration: line-through;\\n}\\n\\n.edit-todo-input:focus {\\n  outline: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _rotate_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rotate.svg */ \"./src/rotate.svg\");\n/* harmony import */ var _enter_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enter.png */ \"./src/enter.png\");\n/* harmony import */ var _modules_todo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/todo.js */ \"./src/modules/todo.js\");\n/* harmony import */ var _modules_changeDom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/changeDom.js */ \"./src/modules/changeDom.js\");\n/* harmony import */ var _modules_displayTodo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/displayTodo.js */ \"./src/modules/displayTodo.js\");\n/* harmony import */ var _modules_clearAllCompleted_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/clearAllCompleted.js */ \"./src/modules/clearAllCompleted.js\");\n/* harmony import */ var _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/localStorage.js */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _modules_addNewTodo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/addNewTodo.js */ \"./src/modules/addNewTodo.js\");\n/* harmony import */ var _modules_updateTodoHandler_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/updateTodoHandler.js */ \"./src/modules/updateTodoHandler.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst loadElements = () => {\n  let taskArray = [];\n  taskArray = (0,_modules_localStorage_js__WEBPACK_IMPORTED_MODULE_7__.retrieveData)();\n  taskArray\n    .sort((x, y) => x.index - y.index)\n    .forEach((todo) => {\n      const taskElement = (0,_modules_displayTodo_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(todo);\n      (0,_modules_changeDom_js__WEBPACK_IMPORTED_MODULE_4__.appendToDOM)(taskElement);\n    });\n};\n\nconst loadRefreshIcon = () => {\n  const refreshIcon = document.getElementById('list_refresh');\n  refreshIcon.src = _rotate_svg__WEBPACK_IMPORTED_MODULE_1__;\n  refreshIcon.alt = 'refresh';\n  refreshIcon.setAttribute('class', 'header-icon');\n  refreshIcon.addEventListener('click', () => {\n    window.location.reload();\n  });\n};\n\nconst loadEnterIcon = () => {\n  const enterIcon = document.getElementById('enter_newtodo');\n  enterIcon.src = _enter_png__WEBPACK_IMPORTED_MODULE_2__;\n  enterIcon.alt = 'enter';\n  enterIcon.setAttribute('class', 'icon');\n  // add eventlistner for enter key\n  enterIcon.addEventListener('click', () => {\n    // if todo is written or add to your list field is not empity\n    if (_modules_addNewTodo_js__WEBPACK_IMPORTED_MODULE_8__.addTodoForm.elements[\"add-task\"].value) {\n      const todosArray = (0,_modules_localStorage_js__WEBPACK_IMPORTED_MODULE_7__.retrieveData)();\n      const newTodo = new _modules_todo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\n        _modules_addNewTodo_js__WEBPACK_IMPORTED_MODULE_8__.addTodoForm.elements[\"add-task\"].value,\n        false,\n        todosArray.length + 1,\n      );\n      _modules_todo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addTodo(newTodo);\n      const todoElement = (0,_modules_displayTodo_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(newTodo);\n      (0,_modules_changeDom_js__WEBPACK_IMPORTED_MODULE_4__.appendToDOM)(todoElement);\n      _modules_addNewTodo_js__WEBPACK_IMPORTED_MODULE_8__.addTodoForm.reset();\n    } else if (document.getElementsByClassName('edit-todo-input')[0]) { // if add todo is empity and if someone is yousing phone and want to edit a task\n      (0,_modules_updateTodoHandler_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n    }\n  });\n};\n\nconst loadAfterAllCleared = () => {\n  const paragraph = document.getElementsByTagName('p')[0];\n  const clearAllCompletedLink = document.createElement('a');\n  clearAllCompletedLink.setAttribute('id', 'clear-all-completed');\n  clearAllCompletedLink.setAttribute('href', '/');\n  clearAllCompletedLink.innerText = 'Clear all completed';\n  clearAllCompletedLink.addEventListener('click', _modules_clearAllCompleted_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n  paragraph.appendChild(clearAllCompletedLink);\n};\nwindow.onload = () => {\n  loadElements();\n  loadRefreshIcon();\n  loadEnterIcon();\n  loadAfterAllCleared();\n  _modules_addNewTodo_js__WEBPACK_IMPORTED_MODULE_8__.addTodoForm.addEventListener('submit', _modules_addNewTodo_js__WEBPACK_IMPORTED_MODULE_8__.addTodoFormHandler);\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/addNewTodo.js":
/*!***********************************!*\
  !*** ./src/modules/addNewTodo.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTodoForm\": () => (/* binding */ addTodoForm),\n/* harmony export */   \"addTodoFormHandler\": () => (/* binding */ addTodoFormHandler)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/modules/todo.js\");\n/* harmony import */ var _changeDom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changeDom.js */ \"./src/modules/changeDom.js\");\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.js */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _displayTodo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayTodo.js */ \"./src/modules/displayTodo.js\");\n\n\n\n\n\nconst addTodoForm = document.getElementById('todo-form');\n\nconst addTodoFormHandler = (e) => {\n  e.preventDefault();\n  const todosArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.retrieveData)();\n  const newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n    addTodoForm.elements['add-task'].value,\n    false,\n    todosArray.length + 1,\n  );\n  _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTodo(newTodo);\n  const todoElement = (0,_displayTodo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(newTodo);\n  (0,_changeDom_js__WEBPACK_IMPORTED_MODULE_1__.appendToDOM)(todoElement);\n  addTodoForm.reset();\n};\n\n//# sourceURL=webpack://to-do-list/./src/modules/addNewTodo.js?");

/***/ }),

/***/ "./src/modules/changeDom.js":
/*!**********************************!*\
  !*** ./src/modules/changeDom.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendToDOM\": () => (/* binding */ appendToDOM),\n/* harmony export */   \"removeFromDOM\": () => (/* binding */ removeFromDOM)\n/* harmony export */ });\nconst appendToDOM = (todoElement) => {\n  const todoList = document.getElementById('taskList');\n  todoList.appendChild(todoElement);\n};\n\nconst removeFromDOM = (todo) => {\n  todo.parentElement.removeChild(todo);\n};\n\n//# sourceURL=webpack://to-do-list/./src/modules/changeDom.js?");

/***/ }),

/***/ "./src/modules/checkboxStatus.js":
/*!***************************************!*\
  !*** ./src/modules/checkboxStatus.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/modules/todo.js\");\n\n\nconst checkboxStatus = (e) => {\n  const displayElement = e.target.parentElement.parentElement;\n  const taskIndex = displayElement.getAttribute('id');\n  const task = _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodo(taskIndex);\n  task.completed = !task.completed;\n  if (task.completed) {\n    displayElement.classList.add('completed');\n  } else {\n    displayElement.classList.remove('completed');\n  }\n  _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateTodo(task);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkboxStatus);\n\n//# sourceURL=webpack://to-do-list/./src/modules/checkboxStatus.js?");

/***/ }),

/***/ "./src/modules/clearAllCompleted.js":
/*!******************************************!*\
  !*** ./src/modules/clearAllCompleted.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./src/modules/localStorage.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/modules/todo.js\");\n\n\n\nconst clearAllCompletedHandler = (e) => {\n  e.preventDefault();\n  let tasks = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.retrieveData)();\n  tasks.forEach((element) => {\n    if (element.completed) {\n      tasks = tasks.filter((todo) => todo.index.toString() !== element.index.toString());\n    }\n  });\n  const IndexChengedArray = [];\n  tasks.sort((x, y) => x.index - y.index).forEach((element, index) => {\n    IndexChengedArray.push(new _todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](element.description, element.completed, index + 1));\n  });\n  (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.storeData)(IndexChengedArray);\n  window.location.reload();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearAllCompletedHandler);\n\n//# sourceURL=webpack://to-do-list/./src/modules/clearAllCompleted.js?");

/***/ }),

/***/ "./src/modules/deletHandler.js":
/*!*************************************!*\
  !*** ./src/modules/deletHandler.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/modules/todo.js\");\n\n\nconst deletEventHandler = (e) => {\n  const todo = e.target.parentElement;\n  const indexTodo = todo.getAttribute('id');\n  _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeTodo(indexTodo);\n  window.location.reload();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deletEventHandler);\n\n//# sourceURL=webpack://to-do-list/./src/modules/deletHandler.js?");

/***/ }),

/***/ "./src/modules/displayTodo.js":
/*!************************************!*\
  !*** ./src/modules/displayTodo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_edit_Icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/edit-Icon.svg */ \"./images/edit-Icon.svg\");\n/* harmony import */ var _updateTodoHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateTodoHandler.js */ \"./src/modules/updateTodoHandler.js\");\n/* harmony import */ var _editTodo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editTodo.js */ \"./src/modules/editTodo.js\");\n/* harmony import */ var _newCheckbox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newCheckbox.js */ \"./src/modules/newCheckbox.js\");\n\n\n\n\n\nconst editClickHandler = (e) => {\n  const displayElement = e.target.parentElement;\n  const indexTodo = displayElement.getAttribute('id');\n  const editElement = (0,_editTodo_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(indexTodo);\n  editElement.addEventListener('submit', _updateTodoHandler_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n  const taskList = displayElement.parentElement;\n  taskList.replaceChild(editElement, displayElement);\n};\n\nconst createEditIcon = () => {\n  const editIcon = new Image();\n  editIcon.src = _images_edit_Icon_svg__WEBPACK_IMPORTED_MODULE_0__;\n  editIcon.setAttribute('class', 'icon');\n  editIcon.addEventListener('click', editClickHandler);\n  return editIcon;\n};\n\nconst createDisplayElement = (todo) => {\n  const displayElement = document.createElement('li');\n  displayElement.setAttribute('id', todo.index);\n  const labelElement = document.createElement('label');\n  const checkboxElement = (0,_newCheckbox_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(todo.completed);\n  if (todo.completed) {\n    displayElement.classList.add('completed');\n  } else {\n    displayElement.classList.remove('completed');\n  }\n  labelElement.appendChild(checkboxElement);\n  const descriptionElement = document.createElement('span');\n  descriptionElement.innerText = todo.description;\n  labelElement.appendChild(descriptionElement);\n  displayElement.appendChild(labelElement);\n  const menuElement = createEditIcon();\n  displayElement.appendChild(menuElement);\n  return displayElement;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDisplayElement);\n\n//# sourceURL=webpack://to-do-list/./src/modules/displayTodo.js?");

/***/ }),

/***/ "./src/modules/editTodo.js":
/*!*********************************!*\
  !*** ./src/modules/editTodo.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/modules/todo.js\");\n/* harmony import */ var _images_delet_Icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../images/delet-Icon.svg */ \"./images/delet-Icon.svg\");\n/* harmony import */ var _newCheckbox_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newCheckbox.js */ \"./src/modules/newCheckbox.js\");\n/* harmony import */ var _deletHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deletHandler.js */ \"./src/modules/deletHandler.js\");\n\n\n\n\n\nconst createTaskDescripion = (description) => {\n  const taskDescription = document.createElement('input');\n  taskDescription.setAttribute('type', 'text');\n  taskDescription.setAttribute('name', 'edit-todo');\n  taskDescription.setAttribute('class', 'edit-todo-input');\n  taskDescription.setAttribute('value', description);\n  return taskDescription;\n};\n\nconst createDeletElement = () => {\n  const deletElement = new Image();\n  deletElement.src = _images_delet_Icon_svg__WEBPACK_IMPORTED_MODULE_1__;\n  deletElement.setAttribute('class', 'icon');\n  deletElement.addEventListener('click', _deletHandler_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  return deletElement;\n};\n\nconst createEditElement = (indexTodo) => {\n  const todo = _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodo(indexTodo);\n  const editElement = document.createElement('form');\n  editElement.setAttribute('class', 'edit-todo-form');\n  editElement.setAttribute('id', indexTodo);\n  editElement.setAttribute('action', '#');\n  editElement.setAttribute('method', 'patch');\n  editElement.setAttribute('type', 'submit');\n  const label = document.createElement('label');\n  label.setAttribute('for', 'edit-todo');\n  label.setAttribute('id', 'edit-todo-label');\n  const checkbox = (0,_newCheckbox_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todo.completed);\n  if (todo.completed) {\n    editElement.classList.add('completed');\n  } else {\n    editElement.classList.remove('completed');\n  }\n  label.appendChild(checkbox);\n  const description = createTaskDescripion(todo.description);\n  label.appendChild(description);\n  const deleteElement = createDeletElement();\n  editElement.appendChild(label);\n  editElement.appendChild(deleteElement);\n  return editElement;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createEditElement);\n\n//# sourceURL=webpack://to-do-list/./src/modules/editTodo.js?");

/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"retrieveData\": () => (/* binding */ retrieveData),\n/* harmony export */   \"storeData\": () => (/* binding */ storeData)\n/* harmony export */ });\nconst storageAvailable = (type) => {\n  let storage;\n  try {\n    storage = window[type];\n    const x = '__storage_test__';\n    storage.setItem(x, x);\n    storage.removeItem(x);\n    return true;\n  } catch (e) {\n    return (\n      e instanceof DOMException && (e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && storage && storage.length !== 0);\n  }\n};\nlet availableStorage;\nlet todos = [];\nif (storageAvailable('localStorage')) {\n  availableStorage = window.localStorage;\n} else {\n  availableStorage = null;\n}\nconst retrieveData = () => {\n  if (availableStorage.getItem('todos')) {\n    const todosData = availableStorage.getItem('todos');\n    todos = JSON.parse(todosData);\n  }\n  return todos;\n};\nconst storeData = (todosArray) => {\n  if (availableStorage) {\n    const jsonData = JSON.stringify(todosArray);\n    availableStorage.setItem('todos', jsonData);\n  }\n};\n\n//# sourceURL=webpack://to-do-list/./src/modules/localStorage.js?");

/***/ }),

/***/ "./src/modules/newCheckbox.js":
/*!************************************!*\
  !*** ./src/modules/newCheckbox.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _checkboxStatus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkboxStatus.js */ \"./src/modules/checkboxStatus.js\");\n\n\nconst createCheckbox = (status) => {\n  const checkbox = document.createElement('input');\n  checkbox.setAttribute('class', 'checkbox');\n  checkbox.setAttribute('type', 'checkbox');\n  if (status) {\n    checkbox.checked = true;\n  }\n  checkbox.addEventListener('change', _checkboxStatus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n  return checkbox;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCheckbox);\n\n//# sourceURL=webpack://to-do-list/./src/modules/newCheckbox.js?");

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./src/modules/localStorage.js\");\n\n\nlet newTodoArray = [];\n\nclass Todo {\n  constructor(description, completed, index) {\n    this.description = description;\n    this.completed = completed;\n    this.index = index;\n  }\n\n  static getTodo = (index) => {\n    newTodoArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.retrieveData)();\n    const todo = newTodoArray.find((x) => x.index.toString() === index.toString());\n    return todo;\n  }\n\n  static addTodo = (todo) => {\n    const newTodo = new Todo(\n      todo.description,\n      todo.completed,\n      todo.index,\n    );\n    const testArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.retrieveData)();\n    testArray.push(newTodo);\n    return (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.storeData)(testArray);\n  }\n\n  static updateTodo = (todo) => {\n    newTodoArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.retrieveData)();\n    newTodoArray = newTodoArray.filter((element) => element.index !== todo.index);\n    const newTodo = new Todo(\n      todo.description,\n      todo.completed,\n      todo.index,\n    );\n    newTodoArray.push(newTodo);\n    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.storeData)(newTodoArray);\n  }\n\n  static removeTodo = (index) => {\n    newTodoArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.retrieveData)();\n    newTodoArray = newTodoArray.filter((element) => element.index.toString() !== index.toString());\n    const reIndexedArray = [];\n    newTodoArray.sort((x, y) => x.index - y.index).forEach((element, index) => {\n      reIndexedArray.push(new Todo(element.description, element.completed, index + 1));\n    });\n    return (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.storeData)(reIndexedArray);\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./src/modules/todo.js?");

/***/ }),

/***/ "./src/modules/updateTodoHandler.js":
/*!******************************************!*\
  !*** ./src/modules/updateTodoHandler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _editTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editTodo.js */ \"./src/modules/editTodo.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/modules/todo.js\");\n/* harmony import */ var _images_edit_Icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/edit-Icon.svg */ \"./images/edit-Icon.svg\");\n/* harmony import */ var _newCheckbox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newCheckbox.js */ \"./src/modules/newCheckbox.js\");\n\n\n\n\n\nconst updateTodoHandler = () => {\n  const inputElement = document.getElementsByClassName('edit-todo-input')[0];\n  const formElement = inputElement.parentElement.parentElement;\n  const indexTodo = formElement.getAttribute('id');\n  const todo = _todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getTodo(indexTodo);\n  todo.description = inputElement.value;\n  _todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateTodo(todo);\n  const displayElement = document.createElement('li');\n  displayElement.setAttribute('id', todo.index);\n  const editIcon = new Image();\n  editIcon.src = _images_edit_Icon_svg__WEBPACK_IMPORTED_MODULE_2__;\n  editIcon.setAttribute('class', 'icon');\n  editIcon.addEventListener('click', (e) => {\n    const displayElement = e.target.parentElement;\n    const indexTodo = displayElement.getAttribute('id');\n    const editElement = (0,_editTodo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(indexTodo);\n    // editElement.addEventListener('submit', updateTodoHandler);\n    const todoList = displayElement.parentElement;\n    todoList.replaceChild(editElement, displayElement);\n  });\n  const label = document.createElement('label');\n  const checkbox = (0,_newCheckbox_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(todo.completed);\n  if (todo.completed) {\n    displayElement.classList.add('completed');\n  } else {\n    displayElement.classList.remove('completed');\n  }\n  label.appendChild(checkbox);\n  const descriptionElement = document.createElement('span');\n  descriptionElement.innerText = todo.description;\n  label.appendChild(descriptionElement);\n  displayElement.appendChild(label);\n  displayElement.appendChild(editIcon);\n  formElement.parentElement.replaceChild(displayElement, formElement);\n  return displayElement;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateTodoHandler);\n\n//# sourceURL=webpack://to-do-list/./src/modules/updateTodoHandler.js?");

/***/ }),

/***/ "./images/delet-Icon.svg":
/*!*******************************!*\
  !*** ./images/delet-Icon.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"de6bfcf37c1a40561e3e.svg\";\n\n//# sourceURL=webpack://to-do-list/./images/delet-Icon.svg?");

/***/ }),

/***/ "./images/edit-Icon.svg":
/*!******************************!*\
  !*** ./images/edit-Icon.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1b41e8f7bde0f4baade5.svg\";\n\n//# sourceURL=webpack://to-do-list/./images/edit-Icon.svg?");

/***/ }),

/***/ "./src/enter.png":
/*!***********************!*\
  !*** ./src/enter.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"058c9ec4472cabd5f964.png\";\n\n//# sourceURL=webpack://to-do-list/./src/enter.png?");

/***/ }),

/***/ "./src/rotate.svg":
/*!************************!*\
  !*** ./src/rotate.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"be6c0448531b7bce8092.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/rotate.svg?");

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