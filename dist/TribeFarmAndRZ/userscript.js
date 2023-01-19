// ==UserScript==
// @name         Tribe farm and rz stats
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
/******/ 	var __webpack_modules__ = ({

/***/ "./src/userscripts/TribeFarmAndRZ/index.ts":
/*!*************************************************!*\
  !*** ./src/userscripts/TribeFarmAndRZ/index.ts ***!
  \*************************************************/
/***/ (() => {

eval("(async () => {\r\n    const sleep = ms => new Promise(r => setTimeout(r, ms));\r\n    const requestPageAndParse = async (link) => {\r\n        try {\r\n            let response = await fetch(link);\r\n            let html = await response.text();\r\n            let parser = new DOMParser();\r\n            let doc = parser.parseFromString(html, 'text/html');\r\n            return doc;\r\n        }\r\n        catch (err) {\r\n            debugger;\r\n            return undefined;\r\n        }\r\n    };\r\n    const getPlayers = async (allyInfoLink) => {\r\n        let doc = await requestPageAndParse(allyInfoLink);\r\n        let playerItems = Array.from(doc.querySelectorAll('[class=userimage-tiny]'));\r\n        let playerNames = playerItems.map(memberImageElement => {\r\n            let member = memberImageElement.nextElementSibling;\r\n            return member.innerText.trim();\r\n        });\r\n        return playerNames;\r\n    };\r\n    const getInADayInfo = async (playerName, type) => {\r\n        try {\r\n            let url = `/game.php?screen=ranking&mode=in_a_day&type=${type}&name=${encodeURIComponent(playerName)}`;\r\n            let doc = await requestPageAndParse(url);\r\n            let table = doc.getElementById('in_a_day_ranking_table');\r\n            let row = table.querySelector('[class=userimage-tiny]').closest('tr');\r\n            let points = Number(row.cells[3].innerText.replace('.', ''));\r\n            return points;\r\n        }\r\n        catch (err) {\r\n            return 0;\r\n        }\r\n    };\r\n    let table = document.getElementById('ally_ranking_table');\r\n    let allyInfoLinks = Array.from(table.querySelectorAll('[href*=\"game.php\"]'));\r\n    let headers = `\r\n        <th>Farm</th>\r\n        <th>Raubzug</th>\r\n        <th>Gesamt</th>`;\r\n    let tableHead = table.querySelector('tbody').firstElementChild;\r\n    tableHead.insertAdjacentHTML('beforeend', headers);\r\n    for (const allyInfoLink of allyInfoLinks) {\r\n        let playerNames = await getPlayers(allyInfoLink);\r\n        let allyFarm = 0;\r\n        let allyRz = 0;\r\n        for (const playerName of playerNames) {\r\n            let farm = await getInADayInfo(playerName, \"loot_res\");\r\n            let rz = await getInADayInfo(playerName, \"scavenge\");\r\n            allyFarm += farm;\r\n            allyRz += rz;\r\n        }\r\n        let allyTotal = allyFarm + allyRz;\r\n        let allyRow = allyInfoLink.closest('tr');\r\n        let allyFarmCell = allyRow.insertCell(-1);\r\n        let allyRzCell = allyRow.insertCell(-1);\r\n        let allyTotalCell = allyRow.insertCell(-1);\r\n        allyFarmCell.innerText = allyFarm.toLocaleString();\r\n        allyRzCell.innerText = allyRz.toLocaleString();\r\n        allyTotalCell.innerText = allyTotal.toLocaleString();\r\n        await sleep(100);\r\n    }\r\n})();\r\n\n\n//# sourceURL=webpack://tw-userscripts/./src/userscripts/TribeFarmAndRZ/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/userscripts/TribeFarmAndRZ/index.ts"]();
/******/ 	
/******/ })()
;