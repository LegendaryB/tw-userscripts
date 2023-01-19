// ==UserScript==
// @name         DebugScript
// @namespace    https://github.com/LegendaryB/tw-userscripts
// @version      0.1
// @author       LegendaryB
// @match		 https://*.die-staemme.de/game.php*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==

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

/***/ "../tw-framework/dist/DOMHelpers.js":
/*!******************************************!*\
  !*** ../tw-framework/dist/DOMHelpers.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createElement\": () => (/* binding */ createElement)\n/* harmony export */ });\nconst createElement = (innerHTML) => {\r\n    let element = document.createElement('template');\r\n    element.innerHTML = innerHTML.trim();\r\n    return element.content.firstChild;\r\n};\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/DOMHelpers.js?");

/***/ }),

/***/ "../tw-framework/dist/UIMessageService.js":
/*!************************************************!*\
  !*** ../tw-framework/dist/UIMessageService.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UIMessageService\": () => (/* binding */ UIMessageService),\n/* harmony export */   \"UIMessageType\": () => (/* binding */ UIMessageType)\n/* harmony export */ });\nvar UIMessageType;\r\n(function (UIMessageType) {\r\n    UIMessageType[UIMessageType[\"Info\"] = 0] = \"Info\";\r\n    UIMessageType[UIMessageType[\"Success\"] = 1] = \"Success\";\r\n    UIMessageType[UIMessageType[\"Error\"] = 2] = \"Error\";\r\n})(UIMessageType || (UIMessageType = {}));\r\nclass UIMessageService {\r\n    static InfoMessage(msg) {\r\n        this.Message(msg, UIMessageType.Info);\r\n    }\r\n    static SuccessMessage(msg) {\r\n        this.Message(msg, UIMessageType.Success);\r\n    }\r\n    static ErrorMessage(msg) {\r\n        this.Message(msg, UIMessageType.Error);\r\n    }\r\n    static Message(msg, messageType) {\r\n        switch (messageType) {\r\n            case UIMessageType.Info:\r\n                window.UI.InfoMessage(msg);\r\n                break;\r\n            case UIMessageType.Success:\r\n                window.UI.SuccessMessage(msg);\r\n                break;\r\n            case UIMessageType.Error:\r\n                window.UI.ErrorMessage(msg);\r\n                break;\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/UIMessageService.js?");

/***/ }),

/***/ "../tw-framework/dist/i18n/Translator.js":
/*!***********************************************!*\
  !*** ../tw-framework/dist/i18n/Translator.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Translator\": () => (/* binding */ Translator),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar _a;\r\nclass Translator {\r\n    static registerTranslationProvider(lang, translations) {\r\n        this.translationProviderMap.set(lang, translations);\r\n    }\r\n    static unregisterTranslationProvider(lang) {\r\n        this.translationProviderMap.delete(lang);\r\n    }\r\n    static getPropertyKeyByHandlebar(handlebar) {\r\n        return handlebar.replace('{{', '').replace('}}', '');\r\n    }\r\n}\r\n_a = Translator;\r\nTranslator.translationProviderMap = new Map();\r\nTranslator.translate = (propertyKey) => {\r\n    let provider = _a.translationProviderMap.get(window.game_data.locale);\r\n    if (!provider) {\r\n        return \"ERROR! NO TRANSLATION!\";\r\n    }\r\n    return provider[propertyKey];\r\n};\r\nTranslator.translateAndReplace = (data) => {\r\n    let handlebars = data.match(/{{{?(#[a-z]+ )?[a-z]+.[a-z]*}?}}/gi);\r\n    if (!handlebars) {\r\n        return data;\r\n    }\r\n    for (const handlebar of handlebars) {\r\n        let key = _a.getPropertyKeyByHandlebar(handlebar);\r\n        let translatedValue = _a.translate(key);\r\n        data = data.replace(handlebar, translatedValue);\r\n    }\r\n    return data;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Translator());\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/i18n/Translator.js?");

/***/ }),

/***/ "../tw-framework/dist/index.js":
/*!*************************************!*\
  !*** ../tw-framework/dist/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Translator\": () => (/* reexport safe */ _i18n_Translator__WEBPACK_IMPORTED_MODULE_2__.Translator),\n/* harmony export */   \"UIMessageService\": () => (/* reexport safe */ _UIMessageService__WEBPACK_IMPORTED_MODULE_0__.UIMessageService),\n/* harmony export */   \"UIMessageType\": () => (/* reexport safe */ _UIMessageService__WEBPACK_IMPORTED_MODULE_0__.UIMessageType),\n/* harmony export */   \"createElement\": () => (/* reexport safe */ _DOMHelpers__WEBPACK_IMPORTED_MODULE_1__.createElement),\n/* harmony export */   \"getBuildingInfo\": () => (/* reexport safe */ _world__WEBPACK_IMPORTED_MODULE_3__.getBuildingInfo),\n/* harmony export */   \"getGameData\": () => (/* binding */ getGameData),\n/* harmony export */   \"getUnitInfo\": () => (/* reexport safe */ _world__WEBPACK_IMPORTED_MODULE_3__.getUnitInfo),\n/* harmony export */   \"getWorldConfiguration\": () => (/* reexport safe */ _world__WEBPACK_IMPORTED_MODULE_3__.getWorldConfiguration)\n/* harmony export */ });\n/* harmony import */ var _UIMessageService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIMessageService */ \"../tw-framework/dist/UIMessageService.js\");\n/* harmony import */ var _DOMHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMHelpers */ \"../tw-framework/dist/DOMHelpers.js\");\n/* harmony import */ var _i18n_Translator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n/Translator */ \"../tw-framework/dist/i18n/Translator.js\");\n/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./world */ \"../tw-framework/dist/world/index.js\");\n\r\n\r\n\r\n\r\nconst getGameData = () => {\r\n    return window.game_data;\r\n};\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/index.js?");

/***/ }),

/***/ "../tw-framework/dist/world/index.js":
/*!*******************************************!*\
  !*** ../tw-framework/dist/world/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBuildingInfo\": () => (/* binding */ getBuildingInfo),\n/* harmony export */   \"getUnitInfo\": () => (/* binding */ getUnitInfo),\n/* harmony export */   \"getWorldConfiguration\": () => (/* binding */ getWorldConfiguration)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nconst WORLD_CONFIG_ENDPOINT = 'interface.php?func=get_config';\r\nconst UNIT_INFO_ENDPOINT = 'interface.php?func=get_unit_info';\r\nconst BUILDING_INFO_ENDPOINT = 'interface.php?func=get_building_info';\r\nconst WORLD_CONFIG_KEY = `tw-framework_${window.game_data.world}_worldConfig`;\r\nconst UNIT_INFO_KEY = `tw-framework_${window.game_data.world}_unitInfo`;\r\nconst BUILDING_INFO_KEY = `tw-framework_${window.game_data.world}_buildingInfo`;\r\nconst request = (endpoint) => __awaiter(void 0, void 0, void 0, function* () {\r\n    let baseURL = new URL(window.location.origin);\r\n    let requestURL = `${baseURL}/${endpoint}`;\r\n    let response = yield fetch(requestURL);\r\n    let body = yield response.text();\r\n    //console.log(response);\r\n    //console.log(body);\r\n    return body;\r\n});\r\nconst letterToUpperCaseAt = (input, index) => {\r\n    return input.substring(0, index) + input.charAt(index).toUpperCase() + input.substr(index + 1);\r\n};\r\nconst getIndexesOf = (input, searchElement) => {\r\n    let results = [], i = -1;\r\n    while ((i = input.indexOf(searchElement, i + 1)) >= 0) {\r\n        results.push(i);\r\n    }\r\n    return results;\r\n};\r\nconst createKeyForProperty = (propertyKey) => {\r\n    let indexes = getIndexesOf(propertyKey, '_');\r\n    propertyKey = letterToUpperCaseAt(propertyKey, 0);\r\n    for (const index of indexes) {\r\n        propertyKey = letterToUpperCaseAt(propertyKey, index + 1);\r\n    }\r\n    propertyKey = propertyKey.replaceAll('_', '');\r\n    return propertyKey;\r\n};\r\nconst xmlToJson = (data) => {\r\n    let obj = {};\r\n    let parser = new DOMParser();\r\n    let xml = parser.parseFromString(data, 'text/xml');\r\n    let rootNode = xml.querySelector('config');\r\n    for (const node of rootNode.children) {\r\n        let key = createKeyForProperty(letterToUpperCaseAt(node.localName, 0));\r\n        obj[key] = {};\r\n        if (node.children.length == 0) {\r\n            obj[key] = Number(node.innerHTML);\r\n            continue;\r\n        }\r\n        for (const propNode of node.children) {\r\n            let propertyKey = createKeyForProperty(propNode.localName);\r\n            obj[key][propertyKey] = Number(propNode.innerHTML);\r\n        }\r\n    }\r\n    return obj;\r\n};\r\nconst get = (endpoint, cacheKey) => __awaiter(void 0, void 0, void 0, function* () {\r\n    let item = localStorage.getItem(cacheKey);\r\n    if (item) {\r\n        return JSON.parse(item);\r\n    }\r\n    let response = yield request(endpoint);\r\n    let json = xmlToJson(response);\r\n    localStorage.setItem(cacheKey, JSON.stringify(json));\r\n    return json;\r\n});\r\nconst getWorldConfiguration = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    return get(WORLD_CONFIG_ENDPOINT, WORLD_CONFIG_KEY);\r\n});\r\nconst getBuildingInfo = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    let data = yield get(BUILDING_INFO_ENDPOINT, BUILDING_INFO_KEY);\r\n    return data;\r\n});\r\nconst getUnitInfo = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    let data = yield get(UNIT_INFO_ENDPOINT, UNIT_INFO_KEY);\r\n    return data;\r\n});\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/world/index.js?");

/***/ }),

/***/ "./src/userscripts/DebugScript/index.ts":
/*!**********************************************!*\
  !*** ./src/userscripts/DebugScript/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var tw_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tw-framework */ \"../tw-framework/dist/index.js\");\n\r\n(async () => {\r\n    let unitInfo = await (0,tw_framework__WEBPACK_IMPORTED_MODULE_0__.getUnitInfo)();\r\n    console.log(await (0,tw_framework__WEBPACK_IMPORTED_MODULE_0__.getWorldConfiguration)());\r\n    console.log(await (0,tw_framework__WEBPACK_IMPORTED_MODULE_0__.getBuildingInfo)());\r\n    console.log(unitInfo);\r\n    console.log(unitInfo.Knight);\r\n})();\r\n\n\n//# sourceURL=webpack://tw-userscripts/./src/userscripts/DebugScript/index.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/userscripts/DebugScript/index.ts");
/******/ 	
/******/ })()
;