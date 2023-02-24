// ==UserScript==
// @name         SendBackButtonOnTop
// @namespace    https://github.com/LegendaryB/tw-userscripts
// @version      0.1
// @author       LegendaryB
// @include      https://de*.die-staemme.de/game.php*screen=place*&mode=units*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==

(async()=>{const e=document.querySelector('[name="back"]');e.style.marginBottom="1em",document.getElementById("units_home").parentElement.before(e)})();