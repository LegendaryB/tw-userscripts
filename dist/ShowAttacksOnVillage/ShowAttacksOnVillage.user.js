// ==UserScript==
// @name         ShowAttacksOnVillage
// @namespace    https://github.com/LegendaryB/tw-userscripts
// @version      0.1
// @author       LegendaryB
// @match		 https://*.die-staemme.de/game.php*&screen=place&try=confirm
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==

(()=>{"use strict";(async()=>{const e="ShowAttacksOnVillageHeader",t=`\n        <table class="vis" style="float: right;">\n            <tbody>\n                <tr id="${e}">\n                    <th colspan="2">\n                        Ankommende Truppen\n                    </th>\n                </tr>\n            </tbody>\n        </table>`,n=document.querySelector(".village_anchor").querySelector("a").href,r=document.getElementById("command-data-form").querySelector("div");r.style.display="table-row",r.querySelector("table").style.float="left",r.insertAdjacentHTML("beforeend",t);const a=document.getElementById(e),l=await(async e=>(await(async e=>{try{let t=await fetch(e),n=await t.text();return(new DOMParser).parseFromString(n,"text/html")}catch(e){return}})(e)).querySelectorAll(".command-row"))(n);let o=a;for(const e of l)e.removeChild(e.cells[e.cells.length-1]),o.after(e),o=e})()})();