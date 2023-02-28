// ==UserScript==
// @name         SendBackButtonOnTop
// @author       LegendaryB
// @namespace    https://github.com/LegendaryB/tw-userscripts
// @version      0.1
// @include      https://de*.die-staemme.de/game.php*screen=place*&mode=units*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @downloadURL  https://github.com/LegendaryB/tw-userscripts/raw/main/dist/SendBackButtonOnTop/SendBackButtonOnTop.user.js
// @updateURL    https://github.com/LegendaryB/tw-userscripts/raw/main/dist/SendBackButtonOnTop/SendBackButtonOnTop.user.js
// @grant        none
// ==/UserScript==

(async()=>{const e=document.querySelector('[name="back"]');e.style.marginBottom="1em",document.getElementById("units_home").parentElement.prepend(e)})();