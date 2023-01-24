// ==UserScript==
// @name         Tribe Farm and RZ stats
// @namespace    https://github.com/LegendaryB/tw-userscripts
// @version      0.1
// @author       LegendaryB
// @match		 https://*.die-staemme.de/game.php*screen=ranking*&mode=ally*
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

/***/ "./src/userscripts/TribeFarmAndRZStats/src/index.ts":
/*!**********************************************************!*\
  !*** ./src/userscripts/TribeFarmAndRZStats/src/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared */ \"./src/userscripts/shared/index.ts\");\n\r\n(async () => {\r\n    const getPlayers = async (allyInfoLink) => {\r\n        let doc = await (0,_shared__WEBPACK_IMPORTED_MODULE_0__.requestPageAndParse)(allyInfoLink);\r\n        let playerItems = Array.from(doc.querySelectorAll('[class=userimage-tiny]'));\r\n        let playerNames = playerItems.map(memberImageElement => {\r\n            let member = memberImageElement.nextElementSibling;\r\n            return member.innerText.trim();\r\n        });\r\n        return playerNames;\r\n    };\r\n    let table = document.getElementById('ally_ranking_table');\r\n    let allyInfoLinks = Array.from(table.querySelectorAll('[href*=\"game.php\"]'));\r\n    let headers = `\r\n        <th>Farm</th>\r\n        <th>Raubzug</th>\r\n        <th>Gesamt</th>`;\r\n    let tableHead = table.querySelector('tbody').firstElementChild;\r\n    tableHead.insertAdjacentHTML('beforeend', headers);\r\n    for (const allyInfoLink of allyInfoLinks) {\r\n        let playerNames = await getPlayers(allyInfoLink);\r\n        let allyFarm = 0;\r\n        let allyRz = 0;\r\n        for (const playerName of playerNames) {\r\n            let farm = await (0,_shared__WEBPACK_IMPORTED_MODULE_0__.getInADayInfo)(playerName, 'loot_res');\r\n            let rz = await (0,_shared__WEBPACK_IMPORTED_MODULE_0__.getInADayInfo)(playerName, 'scavenge');\r\n            allyFarm += farm.Points;\r\n            allyRz += rz.Points;\r\n        }\r\n        let allyTotal = allyFarm + allyRz;\r\n        let allyRow = allyInfoLink.closest('tr');\r\n        let allyFarmCell = allyRow.insertCell(-1);\r\n        let allyRzCell = allyRow.insertCell(-1);\r\n        let allyTotalCell = allyRow.insertCell(-1);\r\n        allyFarmCell.innerText = allyFarm.toLocaleString();\r\n        allyRzCell.innerText = allyRz.toLocaleString();\r\n        allyTotalCell.innerText = allyTotal.toLocaleString();\r\n        await (0,_shared__WEBPACK_IMPORTED_MODULE_0__.sleep)(100);\r\n    }\r\n})();\r\n\n\n//# sourceURL=webpack://tw-userscripts/./src/userscripts/TribeFarmAndRZStats/src/index.ts?");

/***/ }),

/***/ "./src/userscripts/shared/getInADayInfo.ts":
/*!*************************************************!*\
  !*** ./src/userscripts/shared/getInADayInfo.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInADayInfo\": () => (/* binding */ getInADayInfo),\n/* harmony export */   \"requestPageAndParse\": () => (/* binding */ requestPageAndParse),\n/* harmony export */   \"sleep\": () => (/* binding */ sleep)\n/* harmony export */ });\nconst sleep = ms => new Promise(r => setTimeout(r, ms));\r\nconst requestPageAndParse = async (link) => {\r\n    try {\r\n        let response = await fetch(link);\r\n        let html = await response.text();\r\n        let parser = new DOMParser();\r\n        let doc = parser.parseFromString(html, 'text/html');\r\n        return doc;\r\n    }\r\n    catch (err) {\r\n        debugger;\r\n        return undefined;\r\n    }\r\n};\r\n// todo: move to framework?\r\nconst getInADayInfo = async (playerName, type) => {\r\n    try {\r\n        let url = `/game.php?screen=ranking&mode=in_a_day&type=${type}&name=${encodeURIComponent(playerName)}`;\r\n        let doc = await requestPageAndParse(url);\r\n        let table = doc.getElementById('in_a_day_ranking_table');\r\n        let row = table.querySelector('[class=userimage-tiny]').closest('tr');\r\n        let rank = row.cells[0].innerText;\r\n        let points = Number(row.cells[3].innerText.replace('.', ''));\r\n        return {\r\n            Rank: rank,\r\n            Points: points\r\n        };\r\n    }\r\n    catch (err) {\r\n        return 0;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack://tw-userscripts/./src/userscripts/shared/getInADayInfo.ts?");

/***/ }),

/***/ "./src/userscripts/shared/index.ts":
/*!*****************************************!*\
  !*** ./src/userscripts/shared/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInADayInfo\": () => (/* reexport safe */ _getInADayInfo__WEBPACK_IMPORTED_MODULE_0__.getInADayInfo),\n/* harmony export */   \"requestPageAndParse\": () => (/* reexport safe */ _getInADayInfo__WEBPACK_IMPORTED_MODULE_0__.requestPageAndParse),\n/* harmony export */   \"sleep\": () => (/* reexport safe */ _getInADayInfo__WEBPACK_IMPORTED_MODULE_0__.sleep)\n/* harmony export */ });\n/* harmony import */ var _getInADayInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getInADayInfo */ \"./src/userscripts/shared/getInADayInfo.ts\");\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/./src/userscripts/shared/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/userscripts/TribeFarmAndRZStats/src/index.ts");
/******/ 	
/******/ })()
;