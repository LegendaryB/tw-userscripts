// ==UserScript==
// @name         Village Distance Calculator
// @namespace    https://github.com/LegendaryB/tw-userscripts
// @version      0.4
// @author       LegendaryB
// @include		 https://de*.die-staemme.de/game.php*screen=map*
// @require      https://raw.githubusercontent.com/LegendaryB/tw-framework/main/dist/framework.js
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

/***/ "../tw-framework/dist/common/BuildingKeys.js":
/*!***************************************************!*\
  !*** ../tw-framework/dist/common/BuildingKeys.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/common/BuildingKeys.js?");

/***/ }),

/***/ "../tw-framework/dist/common/UnitKeys.js":
/*!***********************************************!*\
  !*** ../tw-framework/dist/common/UnitKeys.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/common/UnitKeys.js?");

/***/ }),

/***/ "../tw-framework/dist/common/index.js":
/*!********************************************!*\
  !*** ../tw-framework/dist/common/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BuildingKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuildingKeys */ \"../tw-framework/dist/common/BuildingKeys.js\");\n/* harmony import */ var _UnitKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnitKeys */ \"../tw-framework/dist/common/UnitKeys.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/common/index.js?");

/***/ }),

/***/ "../tw-framework/dist/i18n/index.js":
/*!******************************************!*\
  !*** ../tw-framework/dist/i18n/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Translator\": () => (/* binding */ Translator),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar _a;\r\nclass Translator {\r\n    static registerTranslationProvider(lang, translations) {\r\n        this.translationProviderMap.set(lang, translations);\r\n    }\r\n    static unregisterTranslationProvider(lang) {\r\n        this.translationProviderMap.delete(lang);\r\n    }\r\n    static getPropertyKeyByHandlebar(handlebar) {\r\n        return handlebar.replace('{{', '').replace('}}', '');\r\n    }\r\n}\r\n_a = Translator;\r\nTranslator.translationProviderMap = new Map();\r\nTranslator.translate = (propertyKey) => {\r\n    let provider = _a.translationProviderMap.get(window.game_data.locale);\r\n    if (!provider) {\r\n        return \"ERROR! NO TRANSLATION!\";\r\n    }\r\n    return provider[propertyKey];\r\n};\r\nTranslator.translateAndReplace = (data) => {\r\n    let handlebars = data.match(/{{{?(#[a-z]+ )?[a-z]+.[a-z]*}?}}/gi);\r\n    if (!handlebars) {\r\n        return data;\r\n    }\r\n    for (const handlebar of handlebars) {\r\n        let key = _a.getPropertyKeyByHandlebar(handlebar);\r\n        let translatedValue = _a.translate(key);\r\n        data = data.replace(handlebar, translatedValue);\r\n    }\r\n    return data;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Translator());\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/i18n/index.js?");

/***/ }),

/***/ "../tw-framework/dist/index.js":
/*!*************************************!*\
  !*** ../tw-framework/dist/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlayerInfoScreenScraper\": () => (/* reexport safe */ _scrapers__WEBPACK_IMPORTED_MODULE_4__.PlayerInfoScreenScraper),\n/* harmony export */   \"Translator\": () => (/* reexport safe */ _i18n__WEBPACK_IMPORTED_MODULE_2__.Translator),\n/* harmony export */   \"UIMessageService\": () => (/* reexport safe */ _services__WEBPACK_IMPORTED_MODULE_0__.UIMessageService),\n/* harmony export */   \"calcTravelTime\": () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_6__.calcTravelTime),\n/* harmony export */   \"calcUnitTravelTime\": () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_6__.calcUnitTravelTime),\n/* harmony export */   \"calcUnitTravelTimeBetweenVillages\": () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_6__.calcUnitTravelTimeBetweenVillages),\n/* harmony export */   \"calcUnitTravelTimeByCoordinates\": () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_6__.calcUnitTravelTimeByCoordinates),\n/* harmony export */   \"calculateDistance\": () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_6__.calculateDistance),\n/* harmony export */   \"calculateDistanceBetweenVillages\": () => (/* reexport safe */ _math__WEBPACK_IMPORTED_MODULE_6__.calculateDistanceBetweenVillages),\n/* harmony export */   \"createTemplateElement\": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_1__.createTemplateElement),\n/* harmony export */   \"getBuildingInfo\": () => (/* reexport safe */ _world__WEBPACK_IMPORTED_MODULE_3__.getBuildingInfo),\n/* harmony export */   \"getGameData\": () => (/* binding */ getGameData),\n/* harmony export */   \"getTWMap\": () => (/* binding */ getTWMap),\n/* harmony export */   \"getUnitInfo\": () => (/* reexport safe */ _world__WEBPACK_IMPORTED_MODULE_3__.getUnitInfo),\n/* harmony export */   \"getWorldConfiguration\": () => (/* reexport safe */ _world__WEBPACK_IMPORTED_MODULE_3__.getWorldConfiguration),\n/* harmony export */   \"scrapeAllyInfoScreen\": () => (/* reexport safe */ _scrapers__WEBPACK_IMPORTED_MODULE_4__.scrapeAllyInfoScreen)\n/* harmony export */ });\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ \"../tw-framework/dist/services/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"../tw-framework/dist/utils/index.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n */ \"../tw-framework/dist/i18n/index.js\");\n/* harmony import */ var _world__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./world */ \"../tw-framework/dist/world/index.js\");\n/* harmony import */ var _scrapers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrapers */ \"../tw-framework/dist/scrapers/index.js\");\n/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common */ \"../tw-framework/dist/common/index.js\");\n/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./math */ \"../tw-framework/dist/math/index.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types */ \"../tw-framework/dist/types/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst getGameData = () => {\r\n    return window.game_data;\r\n};\r\nconst getTWMap = () => {\r\n    return window.TWMap;\r\n};\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/index.js?");

/***/ }),

/***/ "../tw-framework/dist/math/Coordinates.js":
/*!************************************************!*\
  !*** ../tw-framework/dist/math/Coordinates.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateDistance\": () => (/* binding */ calculateDistance),\n/* harmony export */   \"calculateDistanceBetweenVillages\": () => (/* binding */ calculateDistanceBetweenVillages)\n/* harmony export */ });\nconst calculateDistance = (start_x, start_y, target_x, target_y) => {\r\n    let distance_x = start_x - target_x;\r\n    let distance_y = start_y - target_y;\r\n    return Math.sqrt(distance_x * distance_x + distance_y * distance_y);\r\n};\r\nconst calculateDistanceBetweenVillages = (startVillage, targetVillage) => {\r\n    let start_xy = startVillage.xy.toString();\r\n    let target_xy = targetVillage.xy.toString();\r\n    let start_x = Number(start_xy.slice(0, 3));\r\n    let start_y = Number(start_xy.slice(3, 6));\r\n    let target_x = Number(target_xy.slice(0, 3));\r\n    let target_y = Number(target_xy.slice(3, 6));\r\n    return calculateDistance(start_x, start_y, target_x, target_y);\r\n};\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/math/Coordinates.js?");

/***/ }),

/***/ "../tw-framework/dist/math/UnitTravelTime.js":
/*!***************************************************!*\
  !*** ../tw-framework/dist/math/UnitTravelTime.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calcTravelTime\": () => (/* binding */ calcTravelTime),\n/* harmony export */   \"calcUnitTravelTime\": () => (/* binding */ calcUnitTravelTime),\n/* harmony export */   \"calcUnitTravelTimeBetweenVillages\": () => (/* binding */ calcUnitTravelTimeBetweenVillages),\n/* harmony export */   \"calcUnitTravelTimeByCoordinates\": () => (/* binding */ calcUnitTravelTimeByCoordinates)\n/* harmony export */ });\n/* harmony import */ var _Coordinates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Coordinates */ \"../tw-framework/dist/math/Coordinates.js\");\n\r\nconst COORDINATE_SEPARATOR = '|';\r\nconst calcTravelTime = (distance, speed) => {\r\n    return distance * speed;\r\n};\r\nconst calcUnitTravelTime = (startX, startY, targetX, targetY, unitInfo) => {\r\n    let distance = (0,_Coordinates__WEBPACK_IMPORTED_MODULE_0__.calculateDistance)(startX, startY, targetX, targetY);\r\n    return calcTravelTime(distance, unitInfo.Speed);\r\n};\r\nconst calcUnitTravelTimeBetweenVillages = (startVillage, targetVillage, unitInfo) => {\r\n    let distance = (0,_Coordinates__WEBPACK_IMPORTED_MODULE_0__.calculateDistanceBetweenVillages)(startVillage, targetVillage);\r\n    return calcTravelTime(distance, unitInfo.Speed);\r\n};\r\nconst calcUnitTravelTimeByCoordinates = (startCoordinates, targetCoordinates, unit) => {\r\n    let [startX, startY] = startCoordinates.split(COORDINATE_SEPARATOR).flatMap(coordinate => Number(coordinate));\r\n    let [targetX, targetY] = targetCoordinates.split(COORDINATE_SEPARATOR).flatMap(coordinate => Number(coordinate));\r\n    return calcUnitTravelTime(startX, startY, targetX, targetY, unit);\r\n};\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/math/UnitTravelTime.js?");

/***/ }),

/***/ "../tw-framework/dist/math/index.js":
/*!******************************************!*\
  !*** ../tw-framework/dist/math/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calcTravelTime\": () => (/* reexport safe */ _UnitTravelTime__WEBPACK_IMPORTED_MODULE_1__.calcTravelTime),\n/* harmony export */   \"calcUnitTravelTime\": () => (/* reexport safe */ _UnitTravelTime__WEBPACK_IMPORTED_MODULE_1__.calcUnitTravelTime),\n/* harmony export */   \"calcUnitTravelTimeBetweenVillages\": () => (/* reexport safe */ _UnitTravelTime__WEBPACK_IMPORTED_MODULE_1__.calcUnitTravelTimeBetweenVillages),\n/* harmony export */   \"calcUnitTravelTimeByCoordinates\": () => (/* reexport safe */ _UnitTravelTime__WEBPACK_IMPORTED_MODULE_1__.calcUnitTravelTimeByCoordinates),\n/* harmony export */   \"calculateDistance\": () => (/* reexport safe */ _Coordinates__WEBPACK_IMPORTED_MODULE_0__.calculateDistance),\n/* harmony export */   \"calculateDistanceBetweenVillages\": () => (/* reexport safe */ _Coordinates__WEBPACK_IMPORTED_MODULE_0__.calculateDistanceBetweenVillages)\n/* harmony export */ });\n/* harmony import */ var _Coordinates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Coordinates */ \"../tw-framework/dist/math/Coordinates.js\");\n/* harmony import */ var _UnitTravelTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnitTravelTime */ \"../tw-framework/dist/math/UnitTravelTime.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/math/index.js?");

/***/ }),

/***/ "../tw-framework/dist/scrapers/AllyInfo.js":
/*!*************************************************!*\
  !*** ../tw-framework/dist/scrapers/AllyInfo.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrapeAllyInfoScreen\": () => (/* binding */ scrapeAllyInfoScreen)\n/* harmony export */ });\nconst scrapeAllyInfoScreen = () => {\r\n};\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/scrapers/AllyInfo.js?");

/***/ }),

/***/ "../tw-framework/dist/scrapers/PlayerInfo.js":
/*!***************************************************!*\
  !*** ../tw-framework/dist/scrapers/PlayerInfo.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlayerInfoScreenScraper\": () => (/* binding */ PlayerInfoScreenScraper)\n/* harmony export */ });\nconst PLAYERINFO_TABLE_ID = 'player_info';\r\nconst VILLAGES_LIST_TABLE_ID = 'villages_list';\r\nconst POINTS_SEPARATOR = '.';\r\nclass PlayerInfoScreenScraper {\r\n    static getPlayerInfoTable() {\r\n        let playerInfoTableElement = document.getElementById(PLAYERINFO_TABLE_ID);\r\n        let pointsTableRowElement = playerInfoTableElement.rows[2];\r\n        let rankTableRowElement = playerInfoTableElement.rows[3];\r\n        let bashpointsTableRowElement = playerInfoTableElement.rows[4];\r\n        let tribeTableRowIndex = 5;\r\n        if (document.querySelector('[src*=\"/premium/features/Premium_small.png\"]')) {\r\n            tribeTableRowIndex = 6;\r\n        }\r\n        let tribeTableRowElement = playerInfoTableElement.rows[tribeTableRowIndex];\r\n        return {\r\n            Points: {\r\n                Value: pointsTableRowElement.cells[1].innerText,\r\n                Element: pointsTableRowElement\r\n            },\r\n            Rank: {\r\n                Value: rankTableRowElement.cells[1].innerText,\r\n                Element: rankTableRowElement\r\n            },\r\n            Bashpoints: {\r\n                Value: bashpointsTableRowElement.cells[1].innerText,\r\n                Element: bashpointsTableRowElement\r\n            },\r\n            Tribe: {\r\n                Value: tribeTableRowElement.cells[1].innerText,\r\n                Element: tribeTableRowElement\r\n            },\r\n            Element: playerInfoTableElement\r\n        };\r\n    }\r\n    static getVillageTable() {\r\n        let villageTableElement = document.getElementById(VILLAGES_LIST_TABLE_ID);\r\n        let villageTableHeader = this.getVillageTableHeader(villageTableElement);\r\n        let villageTableRows = this.getVillageTableRows(villageTableElement);\r\n        return {\r\n            Header: villageTableHeader,\r\n            Rows: villageTableRows,\r\n            Element: villageTableElement\r\n        };\r\n    }\r\n    static getVillageTableHeader(villageTable) {\r\n        let villageTableRowHeader = villageTable.tHead;\r\n        let villageTableRowHeaderRow = villageTableRowHeader.rows[0];\r\n        return {\r\n            Name: {\r\n                Value: villageTableRowHeaderRow.cells[0].innerText,\r\n                Element: villageTableRowHeaderRow.cells[0]\r\n            },\r\n            Coordinates: {\r\n                Value: villageTableRowHeaderRow.cells[1].innerText,\r\n                Element: villageTableRowHeaderRow.cells[1]\r\n            },\r\n            Points: {\r\n                Value: villageTableRowHeaderRow.cells[2].innerText,\r\n                Element: villageTableRowHeaderRow.cells[2]\r\n            },\r\n            Element: villageTableRowHeader\r\n        };\r\n    }\r\n    static getVillageTableRows(villageTable) {\r\n        let villageTableRows = [];\r\n        for (const villageTableRow of villageTable.tBodies[0].rows) {\r\n            villageTableRows.push({\r\n                Name: villageTableRow.cells[0].innerText,\r\n                Coordinates: villageTableRow.cells[1].innerText,\r\n                Points: Number(villageTableRow.cells[2].innerText.replaceAll(POINTS_SEPARATOR, '')),\r\n                Element: villageTableRow\r\n            });\r\n        }\r\n        return villageTableRows;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/scrapers/PlayerInfo.js?");

/***/ }),

/***/ "../tw-framework/dist/scrapers/index.js":
/*!**********************************************!*\
  !*** ../tw-framework/dist/scrapers/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlayerInfoScreenScraper\": () => (/* reexport safe */ _PlayerInfo__WEBPACK_IMPORTED_MODULE_1__.PlayerInfoScreenScraper),\n/* harmony export */   \"scrapeAllyInfoScreen\": () => (/* reexport safe */ _AllyInfo__WEBPACK_IMPORTED_MODULE_0__.scrapeAllyInfoScreen)\n/* harmony export */ });\n/* harmony import */ var _AllyInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AllyInfo */ \"../tw-framework/dist/scrapers/AllyInfo.js\");\n/* harmony import */ var _PlayerInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerInfo */ \"../tw-framework/dist/scrapers/PlayerInfo.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/scrapers/index.js?");

/***/ }),

/***/ "../tw-framework/dist/services/UIMessageService.js":
/*!*********************************************************!*\
  !*** ../tw-framework/dist/services/UIMessageService.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UIMessageService\": () => (/* binding */ UIMessageService)\n/* harmony export */ });\nclass UIMessageService {\r\n    static InfoMessage(msg) {\r\n        window.UI.InfoMessage(msg);\r\n    }\r\n    static SuccessMessage(msg) {\r\n        window.UI.SuccessMessage(msg);\r\n    }\r\n    static ErrorMessage(msg) {\r\n        window.UI.ErrorMessage(msg);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/services/UIMessageService.js?");

/***/ }),

/***/ "../tw-framework/dist/services/index.js":
/*!**********************************************!*\
  !*** ../tw-framework/dist/services/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UIMessageService\": () => (/* reexport safe */ _UIMessageService__WEBPACK_IMPORTED_MODULE_0__.UIMessageService)\n/* harmony export */ });\n/* harmony import */ var _UIMessageService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIMessageService */ \"../tw-framework/dist/services/UIMessageService.js\");\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/services/index.js?");

/***/ }),

/***/ "../tw-framework/dist/storage/index.js":
/*!*********************************************!*\
  !*** ../tw-framework/dist/storage/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Storage\": () => (/* binding */ Storage)\n/* harmony export */ });\nconst KEY_PREFIX = `tw-framework_${window.game_data.world}`;\r\nclass Storage {\r\n    static getItem(key) {\r\n        key = this.makeKey(key);\r\n        return localStorage.getItem(key);\r\n    }\r\n    static setItem(key, value) {\r\n        key = this.makeKey(key);\r\n        localStorage.setItem(key, value);\r\n    }\r\n    static setRawItem(key, value) {\r\n        key = this.makeKey(key);\r\n        let item = JSON.stringify(value);\r\n        localStorage.setItem(key, item);\r\n    }\r\n    static removeItem(key) {\r\n        key = this.makeKey(key);\r\n        localStorage.removeItem(key);\r\n    }\r\n    static makeKey(key) {\r\n        return `${KEY_PREFIX}_${key}`;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/storage/index.js?");

/***/ }),

/***/ "../tw-framework/dist/types/TWMap/TWMap.js":
/*!*************************************************!*\
  !*** ../tw-framework/dist/types/TWMap/TWMap.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/types/TWMap/TWMap.js?");

/***/ }),

/***/ "../tw-framework/dist/types/TWMap/TWMapHandler.js":
/*!********************************************************!*\
  !*** ../tw-framework/dist/types/TWMap/TWMapHandler.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/types/TWMap/TWMapHandler.js?");

/***/ }),

/***/ "../tw-framework/dist/types/TWMap/TWMapSpawnSector.js":
/*!************************************************************!*\
  !*** ../tw-framework/dist/types/TWMap/TWMapSpawnSector.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/types/TWMap/TWMapSpawnSector.js?");

/***/ }),

/***/ "../tw-framework/dist/types/TWMap/TWMapVillage.js":
/*!********************************************************!*\
  !*** ../tw-framework/dist/types/TWMap/TWMapVillage.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/types/TWMap/TWMapVillage.js?");

/***/ }),

/***/ "../tw-framework/dist/types/TWMap/index.js":
/*!*************************************************!*\
  !*** ../tw-framework/dist/types/TWMap/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TWMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TWMap */ \"../tw-framework/dist/types/TWMap/TWMap.js\");\n/* harmony import */ var _TWMapHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TWMapHandler */ \"../tw-framework/dist/types/TWMap/TWMapHandler.js\");\n/* harmony import */ var _TWMapSpawnSector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TWMapSpawnSector */ \"../tw-framework/dist/types/TWMap/TWMapSpawnSector.js\");\n/* harmony import */ var _TWMapVillage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TWMapVillage */ \"../tw-framework/dist/types/TWMap/TWMapVillage.js\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/types/TWMap/index.js?");

/***/ }),

/***/ "../tw-framework/dist/types/UI/index.js":
/*!**********************************************!*\
  !*** ../tw-framework/dist/types/UI/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/types/UI/index.js?");

/***/ }),

/***/ "../tw-framework/dist/types/game_data/GameData.js":
/*!********************************************************!*\
  !*** ../tw-framework/dist/types/game_data/GameData.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/types/game_data/GameData.js?");

/***/ }),

/***/ "../tw-framework/dist/types/game_data/index.js":
/*!*****************************************************!*\
  !*** ../tw-framework/dist/types/game_data/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GameData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameData */ \"../tw-framework/dist/types/game_data/GameData.js\");\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/types/game_data/index.js?");

/***/ }),

/***/ "../tw-framework/dist/types/index.js":
/*!*******************************************!*\
  !*** ../tw-framework/dist/types/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _TWMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TWMap */ \"../tw-framework/dist/types/TWMap/index.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ \"../tw-framework/dist/types/UI/index.js\");\n/* harmony import */ var _game_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_data */ \"../tw-framework/dist/types/game_data/index.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/types/index.js?");

/***/ }),

/***/ "../tw-framework/dist/utils/DOMHelpers.js":
/*!************************************************!*\
  !*** ../tw-framework/dist/utils/DOMHelpers.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTemplateElement\": () => (/* binding */ createTemplateElement)\n/* harmony export */ });\nconst createTemplateElement = (innerHTML) => {\r\n    let templateElement = document.createElement('template');\r\n    templateElement.innerHTML = innerHTML.trim();\r\n    return templateElement;\r\n};\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/utils/DOMHelpers.js?");

/***/ }),

/***/ "../tw-framework/dist/utils/index.js":
/*!*******************************************!*\
  !*** ../tw-framework/dist/utils/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTemplateElement\": () => (/* reexport safe */ _DOMHelpers__WEBPACK_IMPORTED_MODULE_0__.createTemplateElement)\n/* harmony export */ });\n/* harmony import */ var _DOMHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMHelpers */ \"../tw-framework/dist/utils/DOMHelpers.js\");\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/utils/index.js?");

/***/ }),

/***/ "../tw-framework/dist/world/index.js":
/*!*******************************************!*\
  !*** ../tw-framework/dist/world/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBuildingInfo\": () => (/* binding */ getBuildingInfo),\n/* harmony export */   \"getUnitInfo\": () => (/* binding */ getUnitInfo),\n/* harmony export */   \"getWorldConfiguration\": () => (/* binding */ getWorldConfiguration)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ \"../tw-framework/dist/storage/index.js\");\n/* harmony import */ var _xmlToJS__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xmlToJS */ \"../tw-framework/dist/world/xmlToJS.js\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n\r\nconst WORLD_CONFIG_ENDPOINT = 'interface.php?func=get_config';\r\nconst UNIT_INFO_ENDPOINT = 'interface.php?func=get_unit_info';\r\nconst BUILDING_INFO_ENDPOINT = 'interface.php?func=get_building_info';\r\nconst WORLD_CONFIG_KEY = 'worldConfig';\r\nconst UNIT_INFO_KEY = 'unitInfo';\r\nconst BUILDING_INFO_KEY = 'buildingInfo';\r\nconst request = (endpoint) => __awaiter(void 0, void 0, void 0, function* () {\r\n    let baseURL = new URL(window.location.origin);\r\n    let requestURL = `${baseURL}/${endpoint}`;\r\n    let response = yield fetch(requestURL);\r\n    let body = yield response.text();\r\n    return body;\r\n});\r\nconst get = (endpoint, cacheKey) => __awaiter(void 0, void 0, void 0, function* () {\r\n    let item = _storage__WEBPACK_IMPORTED_MODULE_0__.Storage.getItem(cacheKey);\r\n    if (item) {\r\n        return JSON.parse(item);\r\n    }\r\n    let response = yield request(endpoint);\r\n    let obj = (0,_xmlToJS__WEBPACK_IMPORTED_MODULE_1__.xmlToJS)(response);\r\n    _storage__WEBPACK_IMPORTED_MODULE_0__.Storage.setRawItem(cacheKey, obj);\r\n    return obj;\r\n});\r\nconst getWorldConfiguration = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    return get(WORLD_CONFIG_ENDPOINT, WORLD_CONFIG_KEY);\r\n});\r\nconst getBuildingInfo = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    let data = yield get(BUILDING_INFO_ENDPOINT, BUILDING_INFO_KEY);\r\n    return data;\r\n});\r\nconst getUnitInfo = () => __awaiter(void 0, void 0, void 0, function* () {\r\n    let data = yield get(UNIT_INFO_ENDPOINT, UNIT_INFO_KEY);\r\n    delete data.Militia;\r\n    return data;\r\n});\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/world/index.js?");

/***/ }),

/***/ "../tw-framework/dist/world/xmlToJS.js":
/*!*********************************************!*\
  !*** ../tw-framework/dist/world/xmlToJS.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"xmlToJS\": () => (/* binding */ xmlToJS)\n/* harmony export */ });\nconst letterToUpperCaseAt = (input, index) => {\r\n    return input.substring(0, index) + input.charAt(index).toUpperCase() + input.substr(index + 1);\r\n};\r\nconst getIndexesOf = (input, searchElement) => {\r\n    let results = [], i = -1;\r\n    while ((i = input.indexOf(searchElement, i + 1)) >= 0) {\r\n        results.push(i);\r\n    }\r\n    return results;\r\n};\r\nconst createKeyForProperty = (propertyKey) => {\r\n    let indexes = getIndexesOf(propertyKey, '_');\r\n    propertyKey = letterToUpperCaseAt(propertyKey, 0);\r\n    for (const index of indexes) {\r\n        propertyKey = letterToUpperCaseAt(propertyKey, index + 1);\r\n    }\r\n    propertyKey = propertyKey.replaceAll('_', '');\r\n    return propertyKey;\r\n};\r\nconst xmlToJS = (data) => {\r\n    let obj = {};\r\n    let parser = new DOMParser();\r\n    let xml = parser.parseFromString(data, 'text/xml');\r\n    let rootNode = xml.querySelector('config');\r\n    for (const node of rootNode.children) {\r\n        let key = createKeyForProperty(letterToUpperCaseAt(node.localName, 0));\r\n        obj[key] = {};\r\n        if (node.children.length == 0) {\r\n            obj[key] = Number(node.innerHTML);\r\n            continue;\r\n        }\r\n        for (const propNode of node.children) {\r\n            let propertyKey = createKeyForProperty(propNode.localName);\r\n            obj[key][propertyKey] = Number(propNode.innerHTML);\r\n        }\r\n    }\r\n    return obj;\r\n};\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/world/xmlToJS.js?");

/***/ }),

/***/ "./src/userscripts/VillageDistanceCalculator/src/index.ts":
/*!****************************************************************!*\
  !*** ./src/userscripts/VillageDistanceCalculator/src/index.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates */ \"./src/userscripts/VillageDistanceCalculator/src/templates/index.ts\");\n/* harmony import */ var tw_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tw-framework */ \"../tw-framework/dist/index.js\");\n\r\n\r\nconst TABLE_ID = 'VillageDistanceCalculatorTable';\r\nconst TABLE_HEADER_ID = 'VillageDistanceCalculatorHeaders';\r\nconst TABLE_BODY_AREA_ID = 'VillageDistanceCalculatorBody';\r\nconst map = (0,tw_framework__WEBPACK_IMPORTED_MODULE_1__.getTWMap)();\r\nconst mapHandler = map.mapHandler;\r\nconst travelTimeTable = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createUnitTable)();\r\nlet scriptActive = false;\r\nlet selectedVillages = [];\r\nconst renderSelectionIndicator = (village, villageElement) => {\r\n    let template = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createSelectionIndicator)(village.id, villageElement.style.left, villageElement.style.top);\r\n    villageElement.insertAdjacentHTML('afterend', template);\r\n};\r\nconst insertTravelTimeTable = () => {\r\n    let anchor = document.getElementById('map_whole');\r\n    anchor.insertAdjacentHTML('afterend', travelTimeTable);\r\n};\r\nconst insertUnitTableHeader = (unit) => {\r\n    const tableHeaderElement = document.getElementById(TABLE_HEADER_ID);\r\n    const header = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createUnitTableHeader)(`https://dsde.innogamescdn.com/asset/f6f54c14/graphic/unit/unit_${unit.toLowerCase()}.png`);\r\n    tableHeaderElement.insertAdjacentHTML('beforeend', header);\r\n};\r\nconst insertUnitTableCell = (unit, value) => {\r\n    const tableBodyAreaElement = document.getElementById(TABLE_BODY_AREA_ID);\r\n    const cell = (0,_templates__WEBPACK_IMPORTED_MODULE_0__.createUnitTableCell)(unit.toLowerCase(), value);\r\n    tableBodyAreaElement.insertAdjacentHTML('beforeend', cell);\r\n};\r\nconst renderTravelTimeTable = async () => {\r\n    const unitInfo = await (0,tw_framework__WEBPACK_IMPORTED_MODULE_1__.getUnitInfo)();\r\n    const startVillage = selectedVillages[0];\r\n    const targetVillage = selectedVillages[1];\r\n    insertTravelTimeTable();\r\n    for (const key in unitInfo) {\r\n        const travelTime = (0,tw_framework__WEBPACK_IMPORTED_MODULE_1__.calcUnitTravelTimeBetweenVillages)(startVillage, targetVillage, unitInfo[key]);\r\n        insertUnitTableHeader(key);\r\n        insertUnitTableCell(key, convertTime(travelTime));\r\n    }\r\n};\r\nconst customSpawnSector = (data, sector) => {\r\n    mapHandler.integratedSpawnSector(data, sector);\r\n    for (const village of selectedVillages) {\r\n        let mapVillageElement = document.getElementById(`map_village_${village.id}`);\r\n        if (!mapVillageElement) {\r\n            continue;\r\n        }\r\n        renderSelectionIndicator(village, mapVillageElement);\r\n    }\r\n};\r\nconst handleTWMapVillageClick = async (x, y) => {\r\n    let village = map.villages[(x) * 1000 + y];\r\n    if (!village) {\r\n        return;\r\n    }\r\n    if (selectedVillages.length == 2) {\r\n        resetSelectedVillages();\r\n    }\r\n    tw_framework__WEBPACK_IMPORTED_MODULE_1__.UIMessageService.SuccessMessage(`Selected village: ${x}|${y}`);\r\n    let indexInSelectedVillagesArray = selectedVillages.findIndex(sv => sv.id == village.id);\r\n    if (indexInSelectedVillagesArray != -1) {\r\n        selectedVillages.splice(indexInSelectedVillagesArray, 1);\r\n    }\r\n    else {\r\n        selectedVillages.push(village);\r\n    }\r\n    map.reload();\r\n    if (selectedVillages.length == 2) {\r\n        await renderTravelTimeTable();\r\n    }\r\n};\r\nconst customClickFunction = (x, y, e) => {\r\n    handleTWMapVillageClick(x, y);\r\n    return false;\r\n};\r\nconst enableVillageSelection = () => {\r\n    tw_framework__WEBPACK_IMPORTED_MODULE_1__.UIMessageService.InfoMessage('VillageDistanceCalculator active');\r\n    scriptActive = true;\r\n    mapHandler.integratedSpawnSector = mapHandler.spawnSector;\r\n    mapHandler.spawnSector = customSpawnSector;\r\n    mapHandler.integratedClickFunction = mapHandler.onClick;\r\n    mapHandler.onClick = customClickFunction;\r\n    map.reload();\r\n};\r\nconst disableVillageSelection = () => {\r\n    tw_framework__WEBPACK_IMPORTED_MODULE_1__.UIMessageService.InfoMessage('VillageDistanceCalculator inactive');\r\n    scriptActive = false;\r\n    mapHandler.spawnSector = mapHandler.integratedSpawnSector;\r\n    mapHandler.onClick = mapHandler.integratedClickFunction;\r\n    resetSelectedVillages();\r\n};\r\nconst resetSelectedVillages = () => {\r\n    selectedVillages = [];\r\n    removeTravelTimeTable();\r\n    map.reload();\r\n};\r\nconst removeTravelTimeTable = () => {\r\n    let table = document.getElementById(TABLE_ID);\r\n    if (table) {\r\n        table.remove();\r\n    }\r\n};\r\nconst formatTime = (input) => {\r\n    return input < 10 ? `0${input}` : input;\r\n};\r\nconst convertTime = (input) => {\r\n    let input1 = Math.round(input * 60);\r\n    let seconds = (input1 % 60);\r\n    let input2 = Math.floor(input1 / 60);\r\n    let minutes = input2 % 60;\r\n    let input3 = Math.floor(input2 / 60);\r\n    let hours = input3 % 24;\r\n    let days = Math.floor(input3 / 24);\r\n    if (days > 0) {\r\n        hours += days * 24;\r\n    }\r\n    return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;\r\n};\r\ndocument.addEventListener('keydown', (event) => {\r\n    if (event.isComposing || event.key === 'd') {\r\n        if (!scriptActive) {\r\n            enableVillageSelection();\r\n        }\r\n        else {\r\n            disableVillageSelection();\r\n        }\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://tw-userscripts/./src/userscripts/VillageDistanceCalculator/src/index.ts?");

/***/ }),

/***/ "./src/userscripts/VillageDistanceCalculator/src/templates/SelectionIndicatorTemplate.ts":
/*!***********************************************************************************************!*\
  !*** ./src/userscripts/VillageDistanceCalculator/src/templates/SelectionIndicatorTemplate.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSelectionIndicator\": () => (/* binding */ createSelectionIndicator)\n/* harmony export */ });\nconst createSelectionIndicator = (villageId, left, top) => `\r\n    <div class=\"SelectionIndicator\" id=\"SelectionIndicator_${villageId}\"\r\n        style=\"outline: 2px dashed gold; width:52px; height:37px; position: absolute; z-index: 50; left: ${left}; top: ${top};\">\r\n    </div>\r\n`;\r\n\n\n//# sourceURL=webpack://tw-userscripts/./src/userscripts/VillageDistanceCalculator/src/templates/SelectionIndicatorTemplate.ts?");

/***/ }),

/***/ "./src/userscripts/VillageDistanceCalculator/src/templates/UnitTableCellTemplate.ts":
/*!******************************************************************************************!*\
  !*** ./src/userscripts/VillageDistanceCalculator/src/templates/UnitTableCellTemplate.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUnitTableCell\": () => (/* binding */ createUnitTableCell)\n/* harmony export */ });\nconst createUnitTableCell = (unit, value) => `\r\n    <td style=\"text-align: center;\" data-unit=\"${unit}\">${value}</td>\r\n`;\r\n\n\n//# sourceURL=webpack://tw-userscripts/./src/userscripts/VillageDistanceCalculator/src/templates/UnitTableCellTemplate.ts?");

/***/ }),

/***/ "./src/userscripts/VillageDistanceCalculator/src/templates/UnitTableHeaderTemplate.ts":
/*!********************************************************************************************!*\
  !*** ./src/userscripts/VillageDistanceCalculator/src/templates/UnitTableHeaderTemplate.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUnitTableHeader\": () => (/* binding */ createUnitTableHeader)\n/* harmony export */ });\nconst createUnitTableHeader = (img_src) => `\r\n    <th style=\"text-align: center;\">\r\n        <a href=\"#\" class=\"unit_link\"> <img src=\"${img_src}\"/></a>\r\n    </th>\r\n`;\r\n// todo: use IconAssetProvider\r\n\n\n//# sourceURL=webpack://tw-userscripts/./src/userscripts/VillageDistanceCalculator/src/templates/UnitTableHeaderTemplate.ts?");

/***/ }),

/***/ "./src/userscripts/VillageDistanceCalculator/src/templates/UnitTableTemplate.ts":
/*!**************************************************************************************!*\
  !*** ./src/userscripts/VillageDistanceCalculator/src/templates/UnitTableTemplate.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUnitTable\": () => (/* binding */ createUnitTable)\n/* harmony export */ });\nconst createUnitTable = () => `\r\n    <table id=\"VillageDistanceCalculatorTable\" class=\"vis\" style=\"border-spacing: 0px; border-collapse: collapse; table-layout: fixed;\" width=\"100%\">\r\n        <thead>\r\n            <tr id=\"VillageDistanceCalculatorHeaders\">\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr id=\"VillageDistanceCalculatorBody\">\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n`;\r\n\n\n//# sourceURL=webpack://tw-userscripts/./src/userscripts/VillageDistanceCalculator/src/templates/UnitTableTemplate.ts?");

/***/ }),

/***/ "./src/userscripts/VillageDistanceCalculator/src/templates/index.ts":
/*!**************************************************************************!*\
  !*** ./src/userscripts/VillageDistanceCalculator/src/templates/index.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createSelectionIndicator\": () => (/* reexport safe */ _SelectionIndicatorTemplate__WEBPACK_IMPORTED_MODULE_3__.createSelectionIndicator),\n/* harmony export */   \"createUnitTable\": () => (/* reexport safe */ _UnitTableTemplate__WEBPACK_IMPORTED_MODULE_0__.createUnitTable),\n/* harmony export */   \"createUnitTableCell\": () => (/* reexport safe */ _UnitTableCellTemplate__WEBPACK_IMPORTED_MODULE_2__.createUnitTableCell),\n/* harmony export */   \"createUnitTableHeader\": () => (/* reexport safe */ _UnitTableHeaderTemplate__WEBPACK_IMPORTED_MODULE_1__.createUnitTableHeader)\n/* harmony export */ });\n/* harmony import */ var _UnitTableTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnitTableTemplate */ \"./src/userscripts/VillageDistanceCalculator/src/templates/UnitTableTemplate.ts\");\n/* harmony import */ var _UnitTableHeaderTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnitTableHeaderTemplate */ \"./src/userscripts/VillageDistanceCalculator/src/templates/UnitTableHeaderTemplate.ts\");\n/* harmony import */ var _UnitTableCellTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UnitTableCellTemplate */ \"./src/userscripts/VillageDistanceCalculator/src/templates/UnitTableCellTemplate.ts\");\n/* harmony import */ var _SelectionIndicatorTemplate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectionIndicatorTemplate */ \"./src/userscripts/VillageDistanceCalculator/src/templates/SelectionIndicatorTemplate.ts\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/./src/userscripts/VillageDistanceCalculator/src/templates/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/userscripts/VillageDistanceCalculator/src/index.ts");
/******/ 	
/******/ })()
;