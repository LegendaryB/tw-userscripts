// ==UserScript==
// @name         SelectSupportingPlayer
// @namespace    https://github.com/LegendaryB/tw-userscripts
// @version      0.1
// @author       LegendaryB
// @include		 https://de*.die-staemme.de/game.php*screen=place*&mode=units*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==

(()=>{const e="SelectSupportingPlayer",t=`<select style="float: right;" id="${e}"></select>`,l=e=>e.cells[1].innerText.match(/\(([^()]*)\)/g)[0].replace("(","").replace(")",""),n=(e,t)=>{let l=document.createElement("option");l.value=t,l.innerText=t,e.add(l)},c=(e,t)=>{for(const n of e)t(l(n),n.querySelector('[name^="id_"]'))};document.getElementById("units_home").parentElement.insertAdjacentHTML("beforebegin",t);let o=document.getElementById(e),r=[...document.querySelectorAll('[name^="id_"]')].map((e=>e.closest("tr"))),a=(e=>{let t=[];for(let n=0;n<e.length;n++){let c=e[n],o=l(c);t.includes(o)||t.push(o)}return t})(r);((e,t)=>{n(e,"");for(const l of t)n(e,l)})(o,a),o.onchange=e=>{let t=o.value;t.length>0?((e,t)=>{c(t,((t,l)=>{l.checked=t===e}))})(t,r):(e=>{c(e,((e,t)=>{t.checked=!1}))})(r)}})();