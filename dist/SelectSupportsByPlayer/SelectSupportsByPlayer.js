// ==UserScript==
// @name         Select supports by player
// @namespace    https://github.com/LegendaryB/tw-userscripts
// @version      0.1
// @author       LegendaryB
// @include		 https://de*.die-staemme.de/game.php*screen=place*&mode=units*
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

/***/ "../tw-framework/dist/index.js":
/*!*************************************!*\
  !*** ../tw-framework/dist/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ally\": () => (/* reexport safe */ _tw_models__WEBPACK_IMPORTED_MODULE_0__.Ally),\n/* harmony export */   \"IconAssetProvider\": () => (/* reexport safe */ _tw_assets__WEBPACK_IMPORTED_MODULE_1__.IconAssetProvider),\n/* harmony export */   \"Player\": () => (/* reexport safe */ _tw_models__WEBPACK_IMPORTED_MODULE_0__.Player),\n/* harmony export */   \"UIMessageService\": () => (/* reexport safe */ _tw_UIMessageService__WEBPACK_IMPORTED_MODULE_3__.UIMessageService),\n/* harmony export */   \"UIMessageType\": () => (/* reexport safe */ _tw_UIMessageService__WEBPACK_IMPORTED_MODULE_3__.UIMessageType),\n/* harmony export */   \"UnitScreen\": () => (/* reexport safe */ _tw_screens__WEBPACK_IMPORTED_MODULE_2__.UnitScreen),\n/* harmony export */   \"createElement\": () => (/* reexport safe */ _DOMHelpers__WEBPACK_IMPORTED_MODULE_4__.createElement),\n/* harmony export */   \"getGameData\": () => (/* binding */ getGameData)\n/* harmony export */ });\n/* harmony import */ var _tw_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tw/models */ \"../tw-framework/dist/tw/models/index.js\");\n/* harmony import */ var _tw_assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tw/assets */ \"../tw-framework/dist/tw/assets/index.js\");\n/* harmony import */ var _tw_screens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tw/screens */ \"../tw-framework/dist/tw/screens/index.js\");\n/* harmony import */ var _tw_UIMessageService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tw/UIMessageService */ \"../tw-framework/dist/tw/UIMessageService.js\");\n/* harmony import */ var _DOMHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOMHelpers */ \"../tw-framework/dist/DOMHelpers.js\");\n\r\n\r\n\r\n\r\n\r\nconst getGameData = () => {\r\n    return window.game_data;\r\n};\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/index.js?");

/***/ }),

/***/ "../tw-framework/dist/tw/UIMessageService.js":
/*!***************************************************!*\
  !*** ../tw-framework/dist/tw/UIMessageService.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UIMessageService\": () => (/* binding */ UIMessageService),\n/* harmony export */   \"UIMessageType\": () => (/* binding */ UIMessageType)\n/* harmony export */ });\nvar UIMessageType;\r\n(function (UIMessageType) {\r\n    UIMessageType[UIMessageType[\"Info\"] = 0] = \"Info\";\r\n    UIMessageType[UIMessageType[\"Success\"] = 1] = \"Success\";\r\n    UIMessageType[UIMessageType[\"Error\"] = 2] = \"Error\";\r\n})(UIMessageType || (UIMessageType = {}));\r\nclass UIMessageService {\r\n    static showInfoMessage(msg) {\r\n        this.showMessage(msg, UIMessageType.Info);\r\n    }\r\n    static showSuccessMessage(msg) {\r\n        this.showMessage(msg, UIMessageType.Success);\r\n    }\r\n    static showErrorMessage(msg) {\r\n        this.showMessage(msg, UIMessageType.Error);\r\n    }\r\n    static showMessage(msg, messageType) {\r\n        switch (messageType) {\r\n            case UIMessageType.Info:\r\n                window.UI.InfoMessage(msg);\r\n                break;\r\n            case UIMessageType.Success:\r\n                window.UI.SuccessMessage(msg);\r\n                break;\r\n            case UIMessageType.Error:\r\n                window.UI.ErrorMessage(msg);\r\n                break;\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/tw/UIMessageService.js?");

/***/ }),

/***/ "../tw-framework/dist/tw/assets/IconAssetProvider.js":
/*!***********************************************************!*\
  !*** ../tw-framework/dist/tw/assets/IconAssetProvider.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IconAssetProvider\": () => (/* binding */ IconAssetProvider)\n/* harmony export */ });\n/* harmony import */ var _enums_Building__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/Building */ \"../tw-framework/dist/tw/enums/Building.js\");\n/* harmony import */ var _enums_IconAssetType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/IconAssetType */ \"../tw-framework/dist/tw/enums/IconAssetType.js\");\n/* harmony import */ var _enums_Unit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/Unit */ \"../tw-framework/dist/tw/enums/Unit.js\");\nvar _a;\r\n\r\n\r\n\r\nclass IconAssetProvider {\r\n    static getBuildingIcon(building) {\r\n        let building_name = _enums_Building__WEBPACK_IMPORTED_MODULE_0__.Building[building].toString();\r\n        return this.getIcon(building_name, _enums_IconAssetType__WEBPACK_IMPORTED_MODULE_1__.IconAssetType.Unit);\r\n    }\r\n    static getUnitIcon(unit) {\r\n        let unit_name = _enums_Unit__WEBPACK_IMPORTED_MODULE_2__.Unit[unit].toLowerCase();\r\n        return this.getIcon(`unit_${unit_name}`, _enums_IconAssetType__WEBPACK_IMPORTED_MODULE_1__.IconAssetType.Unit);\r\n    }\r\n    static getIcon(name, iconAssetType) {\r\n        let url = window.location.origin;\r\n        let path = this.iconAssetTypeToPathMap.get(iconAssetType);\r\n        return `${url}/${path}/${name}.png`;\r\n    }\r\n}\r\n_a = IconAssetProvider;\r\nIconAssetProvider.iconAssetTypeToPathMap = new Map();\r\nIconAssetProvider.basePath = '/graphic';\r\n(() => {\r\n    _a.iconAssetTypeToPathMap.set(_enums_IconAssetType__WEBPACK_IMPORTED_MODULE_1__.IconAssetType.Building, `${_a.basePath}/buildings`);\r\n    _a.iconAssetTypeToPathMap.set(_enums_IconAssetType__WEBPACK_IMPORTED_MODULE_1__.IconAssetType.Unit, `${_a.basePath}/unit`);\r\n})();\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/tw/assets/IconAssetProvider.js?");

/***/ }),

/***/ "../tw-framework/dist/tw/assets/index.js":
/*!***********************************************!*\
  !*** ../tw-framework/dist/tw/assets/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IconAssetProvider\": () => (/* reexport safe */ _IconAssetProvider__WEBPACK_IMPORTED_MODULE_0__.IconAssetProvider)\n/* harmony export */ });\n/* harmony import */ var _IconAssetProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconAssetProvider */ \"../tw-framework/dist/tw/assets/IconAssetProvider.js\");\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/tw/assets/index.js?");

/***/ }),

/***/ "../tw-framework/dist/tw/enums/Building.js":
/*!*************************************************!*\
  !*** ../tw-framework/dist/tw/enums/Building.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Building\": () => (/* binding */ Building)\n/* harmony export */ });\nvar Building;\r\n(function (Building) {\r\n})(Building || (Building = {}));\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/tw/enums/Building.js?");

/***/ }),

/***/ "../tw-framework/dist/tw/enums/IconAssetType.js":
/*!******************************************************!*\
  !*** ../tw-framework/dist/tw/enums/IconAssetType.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IconAssetType\": () => (/* binding */ IconAssetType)\n/* harmony export */ });\nvar IconAssetType;\r\n(function (IconAssetType) {\r\n    IconAssetType[IconAssetType[\"Unit\"] = 0] = \"Unit\";\r\n    IconAssetType[IconAssetType[\"Building\"] = 1] = \"Building\";\r\n})(IconAssetType || (IconAssetType = {}));\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/tw/enums/IconAssetType.js?");

/***/ }),

/***/ "../tw-framework/dist/tw/enums/Unit.js":
/*!*********************************************!*\
  !*** ../tw-framework/dist/tw/enums/Unit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Unit\": () => (/* binding */ Unit)\n/* harmony export */ });\nvar Unit;\r\n(function (Unit) {\r\n    Unit[Unit[\"Spear\"] = 0] = \"Spear\";\r\n    Unit[Unit[\"Sword\"] = 1] = \"Sword\";\r\n    Unit[Unit[\"Axe\"] = 2] = \"Axe\";\r\n    Unit[Unit[\"Spy\"] = 3] = \"Spy\";\r\n    Unit[Unit[\"Light\"] = 4] = \"Light\";\r\n    Unit[Unit[\"Heavy\"] = 5] = \"Heavy\";\r\n    Unit[Unit[\"Ram\"] = 6] = \"Ram\";\r\n    Unit[Unit[\"Catapult\"] = 7] = \"Catapult\";\r\n    Unit[Unit[\"Snob\"] = 8] = \"Snob\";\r\n    Unit[Unit[\"Knight\"] = 9] = \"Knight\";\r\n})(Unit || (Unit = {}));\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/tw/enums/Unit.js?");

/***/ }),

/***/ "../tw-framework/dist/tw/models/Ally.js":
/*!**********************************************!*\
  !*** ../tw-framework/dist/tw/models/Ally.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ally\": () => (/* binding */ Ally)\n/* harmony export */ });\nclass Ally {\r\n    constructor(id, name, tag, playerCount, points, rank, bashpoints, bashpointsRank) {\r\n        this.id = id;\r\n        this.name = name;\r\n        this.tag = tag;\r\n        this.playerCount = playerCount;\r\n        this.points = points;\r\n        this.rank = rank;\r\n        this.bashpoints = bashpoints;\r\n        this.bashpointsRank = bashpointsRank;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/tw/models/Ally.js?");

/***/ }),

/***/ "../tw-framework/dist/tw/models/Player.js":
/*!************************************************!*\
  !*** ../tw-framework/dist/tw/models/Player.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\r\n    constructor(id, name, points, rank, ally, villageCount) {\r\n        this.id = id;\r\n        this.name = name;\r\n        this.points = points;\r\n        this.rank = rank;\r\n        this.ally = ally;\r\n        this.villageCount = villageCount;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/tw/models/Player.js?");

/***/ }),

/***/ "../tw-framework/dist/tw/models/index.js":
/*!***********************************************!*\
  !*** ../tw-framework/dist/tw/models/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ally\": () => (/* reexport safe */ _Ally__WEBPACK_IMPORTED_MODULE_1__.Ally),\n/* harmony export */   \"Player\": () => (/* reexport safe */ _Player__WEBPACK_IMPORTED_MODULE_0__.Player)\n/* harmony export */ });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"../tw-framework/dist/tw/models/Player.js\");\n/* harmony import */ var _Ally__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ally */ \"../tw-framework/dist/tw/models/Ally.js\");\n\r\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/tw/models/index.js?");

/***/ }),

/***/ "../tw-framework/dist/tw/screens/index.js":
/*!************************************************!*\
  !*** ../tw-framework/dist/tw/screens/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UnitScreen\": () => (/* reexport safe */ _place__WEBPACK_IMPORTED_MODULE_0__.UnitScreen)\n/* harmony export */ });\n/* harmony import */ var _place__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place */ \"../tw-framework/dist/tw/screens/place/index.js\");\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/tw/screens/index.js?");

/***/ }),

/***/ "../tw-framework/dist/tw/screens/place/UnitScreen.js":
/*!***********************************************************!*\
  !*** ../tw-framework/dist/tw/screens/place/UnitScreen.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UnitScreen\": () => (/* binding */ UnitScreen)\n/* harmony export */ });\nclass UnitScreen {\r\n    static getDefenceTable() {\r\n        return document.getElementById('units_home');\r\n    }\r\n    static getDefenceTableRows() {\r\n        const tableRowElements = this.getDefenceTableRowElements();\r\n        let tableRows = [];\r\n        for (const tableRowElement of tableRowElements) {\r\n            const tableRowElementData = this.getDefenceTableRowData(tableRowElement);\r\n            tableRows.push({\r\n                element: tableRowElement,\r\n                data: tableRowElementData\r\n            });\r\n        }\r\n        return tableRows;\r\n    }\r\n    static getDefenceTableRowData(row) {\r\n        let units = new Map();\r\n        let unitItems = Array.from(row.querySelectorAll('.unit-item'));\r\n        for (const item of unitItems) {\r\n            let unit = this.getUnitName(item);\r\n            let amount = Number(item.innerText);\r\n            units.set(unit, amount);\r\n        }\r\n        return {\r\n            source: row.cells[1].innerText,\r\n            playerName: this.getPlayerName(row),\r\n            distance: Number(row.cells[2].innerText),\r\n            units: units\r\n        };\r\n    }\r\n    static getDefenceTableRowElements() {\r\n        let table = this.getDefenceTable();\r\n        let elements = Array.from(table.querySelectorAll('input[type=checkbox]:not(.selectAll)'));\r\n        let tableRows = [];\r\n        for (const element of elements) {\r\n            let tableRowElement = element.closest('tr');\r\n            if (tableRowElement !== null) {\r\n                tableRows.push(tableRowElement);\r\n            }\r\n        }\r\n        return tableRows;\r\n    }\r\n    static getUnitName(cell) {\r\n        const unitTypeClassNamePrefix = 'unit-item-';\r\n        let classListArray = Array.from(cell.classList);\r\n        for (const item of classListArray) {\r\n            if (item.indexOf(unitTypeClassNamePrefix) != -1) {\r\n                let unitName = item;\r\n                unitName = unitName.replace(unitTypeClassNamePrefix, '');\r\n                unitName = this.toUpperCaseAt(unitName, 0);\r\n                return unitName;\r\n            }\r\n        }\r\n        return null;\r\n    }\r\n    static getPlayerName(row) {\r\n        let cell = row.cells[1];\r\n        let matches = cell.innerText.match(/\\(([^()]*)\\)/g);\r\n        return matches[0].replace(\"(\", \"\").replace(\")\", \"\");\r\n    }\r\n    static toUpperCaseAt(str, index) {\r\n        return str.substring(0, index) + str.charAt(index).toUpperCase() + str.substring(index + 1);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/tw/screens/place/UnitScreen.js?");

/***/ }),

/***/ "../tw-framework/dist/tw/screens/place/index.js":
/*!******************************************************!*\
  !*** ../tw-framework/dist/tw/screens/place/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UnitScreen\": () => (/* reexport safe */ _UnitScreen__WEBPACK_IMPORTED_MODULE_0__.UnitScreen)\n/* harmony export */ });\n/* harmony import */ var _UnitScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnitScreen */ \"../tw-framework/dist/tw/screens/place/UnitScreen.js\");\n\r\n\n\n//# sourceURL=webpack://tw-userscripts/../tw-framework/dist/tw/screens/place/index.js?");

/***/ }),

/***/ "./src/userscripts/SelectSupportsByPlayer/index.ts":
/*!*********************************************************!*\
  !*** ./src/userscripts/SelectSupportsByPlayer/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ \"./src/userscripts/SelectSupportsByPlayer/ui.ts\");\n/* harmony import */ var tw_framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tw-framework */ \"../tw-framework/dist/index.js\");\n\r\n\r\n(() => {\r\n    const markSupportsByPlayer = (playerName, tableRowElements) => {\r\n        let msg = `Selected all supports of player '${playerName}'!`;\r\n        for (const tableRow of tableRowElements) {\r\n            // if (tableRow.element.style.display)\r\n            let checkbox = tableRow.element.firstElementChild.firstElementChild;\r\n            if (tableRow.data.playerName == playerName) {\r\n                checkbox.checked = !checkbox.checked;\r\n                if (!checkbox.checked) {\r\n                    msg = `Deselected all supports of player '${playerName}'!`;\r\n                }\r\n            }\r\n            else {\r\n                checkbox.checked = false;\r\n            }\r\n        }\r\n        tw_framework__WEBPACK_IMPORTED_MODULE_1__.UIMessageService.showSuccessMessage(msg);\r\n    };\r\n    let defenceTableRows = tw_framework__WEBPACK_IMPORTED_MODULE_1__.UnitScreen.getDefenceTableRows();\r\n    if (defenceTableRows.length == 0) {\r\n        return;\r\n    }\r\n    const onclickFn = (defenceTableRow) => markSupportsByPlayer(defenceTableRow.data.playerName, defenceTableRows);\r\n    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.render)(defenceTableRows, onclickFn);\r\n})();\r\n\n\n//# sourceURL=webpack://tw-userscripts/./src/userscripts/SelectSupportsByPlayer/index.ts?");

/***/ }),

/***/ "./src/userscripts/SelectSupportsByPlayer/ui.ts":
/*!******************************************************!*\
  !*** ./src/userscripts/SelectSupportsByPlayer/ui.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var tw_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tw-framework */ \"../tw-framework/dist/index.js\");\n\r\n\r\nconst ID_PREFIX = 'SelectSupportsByPlayer';\r\nconst PLAYER_NAME_CONTAINER_ID = `${ID_PREFIX}_playerNameSelection`;\r\nconst FILTER_TABLE_ID = `${ID_PREFIX}_filterTable`;\r\nconst FILTER_TABLE_HEADER_ID = `${ID_PREFIX}_filterTableHeader`;\r\nconst FILTER_BUTTON_ID = `${ID_PREFIX}_applyFilterBtn`;\r\nconst FILTER_UNIT_ID_PREFIX = `${ID_PREFIX}_filterRow_%UNIT%`;\r\nconst FILTER_UNIT_OPERAND_ID = `${FILTER_UNIT_ID_PREFIX}_Operand`;\r\nconst FILTER_UNIT_VALUE_ID = `${FILTER_UNIT_ID_PREFIX}_Value`;\r\nconst UI_ELEMENT_TEMPLATE = `\r\n        <div>\r\n            <div>\r\n                <h4 style=\"font-style: normal;\">Unterstützungen eines Spielers auswählen</h4>\r\n                <div id=\"${PLAYER_NAME_CONTAINER_ID}\"></div>\r\n            </div>\r\n\r\n            <div>\r\n                <div style=\"margin: 16px 0px 16px 0px;\">\r\n                    <table id=\"${FILTER_TABLE_ID}\">\r\n                        <tbody>\r\n                            <tr id=\"${FILTER_TABLE_HEADER_ID}\">\r\n                                <th colspan=\"2\">Filter</th>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n\r\n                    <table align=\"left\">\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>\r\n                                    <input id=\"${FILTER_BUTTON_ID}\" class=\"btn\" type=\"submit\" value=\"Filter anwenden\">\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n        </div>`;\r\nconst PLAYER_NAME_ELEMENT_TEMPLATE = `<a style=\"cursor: pointer;\" target=\"_self\"></a>`;\r\nconst FILTER_TABLE_ROW_ELEMENT_TEMPLATE = `\r\n        <tr id=\"%UNIT%\">\r\n            <td>\r\n                <label>\r\n                    <input type=\"checkbox\">\r\n                    %UNIT%\r\n                </label>\r\n            </td>\r\n            <td>\r\n                <select id=\"${FILTER_UNIT_OPERAND_ID}\">\r\n                    <option value=\">\">&gt;</option>\r\n                    <option value=\"<\">&lt;</option>\r\n                    <option value=\"=\">=</option>\r\n                    <option value=\">=\">>=</option>\r\n                    <option value=\"<=\"><=</option>\r\n                    <option value=\"!=\">!=</option>\r\n                </select>\r\n                <input id=\"${FILTER_UNIT_VALUE_ID}\" type=\"number\"> \r\n            </td>\r\n        </tr>\r\n`;\r\nconst renderLayout = () => {\r\n    const CONTENT_ROOT_ELEMENT_ID = 'content_value';\r\n    const ANCHOR_ELEMENT = document.getElementById(CONTENT_ROOT_ELEMENT_ID).querySelector('h3');\r\n    ANCHOR_ELEMENT.after((0,tw_framework__WEBPACK_IMPORTED_MODULE_0__.createElement)(UI_ELEMENT_TEMPLATE));\r\n};\r\nconst createPlayerNameElement = (playerName) => {\r\n    let element = (0,tw_framework__WEBPACK_IMPORTED_MODULE_0__.createElement)(PLAYER_NAME_ELEMENT_TEMPLATE);\r\n    element.innerText = playerName;\r\n    return element;\r\n};\r\nconst renderPlayerNameSelectionInterface = (items, onclickFn) => {\r\n    const ANCHOR_ELEMENT = document.getElementById(PLAYER_NAME_CONTAINER_ID);\r\n    let presentPlayerNames = [];\r\n    for (let i = 0; i < items.length; i++) {\r\n        let item = items[i];\r\n        let playerName = item.data.playerName;\r\n        if (presentPlayerNames.includes(playerName)) {\r\n            continue;\r\n        }\r\n        let element = createPlayerNameElement(playerName);\r\n        element.onclick = () => onclickFn(item);\r\n        presentPlayerNames.push(item.data.playerName);\r\n        ANCHOR_ELEMENT.appendChild(element);\r\n        if (i == items.length - 1) {\r\n            continue;\r\n        }\r\n        let span = document.createElement('span');\r\n        span.innerText = ' - ';\r\n        ANCHOR_ELEMENT.appendChild(span);\r\n    }\r\n};\r\nclass Filter {\r\n}\r\nconst getFilter = (row) => {\r\n    let data = new Filter();\r\n    data.Unit = row.id;\r\n    let operand = row.querySelector(`#${FILTER_UNIT_OPERAND_ID.replace('%UNIT%', data.Unit)}`);\r\n    let value = row.querySelector(`#${FILTER_UNIT_VALUE_ID.replace('%UNIT%', data.Unit)}`);\r\n    data.Operand = operand.value;\r\n    data.Value = Number(value.value);\r\n    return data;\r\n};\r\nconst getActiveFilters = () => {\r\n    let table = document.getElementById(FILTER_TABLE_ID);\r\n    let rows = Array.from(table.querySelectorAll('input[type=\"checkbox\"]:checked')).map(input => input.closest('tr'));\r\n    let filters = [];\r\n    for (const row of rows) {\r\n        let filter = getFilter(row);\r\n        filters.push(filter);\r\n    }\r\n    return filters;\r\n};\r\nconst operatorToFn = {\r\n    '<': (x, y) => x < y,\r\n    '>': (x, y) => x > y,\r\n    '=': (x, y) => x == y,\r\n    '>=': (x, y) => x >= y,\r\n    '<=': (x, y) => x <= y,\r\n    '!=': (x, y) => x != y\r\n};\r\nconst resetFilter = (rows) => {\r\n    for (const row of rows) {\r\n        if (row.element.style.display == 'none') {\r\n            row.element.style.display = '';\r\n        }\r\n    }\r\n};\r\nconst handleFilterButtonClick = () => {\r\n    let filters = getActiveFilters();\r\n    let rows = tw_framework__WEBPACK_IMPORTED_MODULE_0__.UnitScreen.getDefenceTableRows();\r\n    resetFilter(rows);\r\n    for (const row of rows) {\r\n        for (const filter of filters) {\r\n            let fn = operatorToFn[filter.Operand];\r\n            let unit = row.data.units.get(filter.Unit);\r\n            let result = fn(unit, filter.Value);\r\n            if (!result) {\r\n                debugger;\r\n                row.element.style.display = 'none';\r\n            }\r\n        }\r\n    }\r\n};\r\nconst renderFilterInterface = (items) => {\r\n    let filterTable = document.getElementById(FILTER_TABLE_ID);\r\n    let filterTableBody = filterTable.querySelector('tbody');\r\n    for (const key of items[0].data.units.keys()) {\r\n        let template = FILTER_TABLE_ROW_ELEMENT_TEMPLATE.replaceAll('%UNIT%', key);\r\n        let filterItemElement = (0,tw_framework__WEBPACK_IMPORTED_MODULE_0__.createElement)(template);\r\n        filterTableBody.appendChild(filterItemElement);\r\n    }\r\n    let filterBtn = document.getElementById(FILTER_BUTTON_ID);\r\n    filterBtn.onclick = () => handleFilterButtonClick();\r\n};\r\nconst render = (items, onclickFn) => {\r\n    renderLayout();\r\n    renderPlayerNameSelectionInterface(items, onclickFn);\r\n    renderFilterInterface(items);\r\n};\r\n\n\n//# sourceURL=webpack://tw-userscripts/./src/userscripts/SelectSupportsByPlayer/ui.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/userscripts/SelectSupportsByPlayer/index.ts");
/******/ 	
/******/ })()
;