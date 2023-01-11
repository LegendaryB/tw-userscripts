// ==UserScript==
// @name         Tribe farm and rz stats
// @namespace    https://github.com/LegendaryB/tw-userscripts
// @version      0.1
// @author       LegendaryB
// @match		 https://*.die-staemme.de/game.php*screen=ranking*&mode=ally*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==

(async()=>{const e=e=>new Promise((t=>setTimeout(t,e))),t=async e=>{try{let t=await fetch(e),r=await t.text();return(new DOMParser).parseFromString(r,"text/html")}catch(e){return}},r=async e=>{let r=await t(e);return Array.from(r.querySelectorAll("[class=userimage-tiny]")).map((e=>e.nextElementSibling.innerText.trim()))},n=async(e,r)=>{try{let n=`/game.php?screen=ranking&mode=in_a_day&type=${r}&name=${encodeURIComponent(e)}`,a=(await t(n)).getElementById("in_a_day_ranking_table").querySelector("[class=userimage-tiny]").closest("tr");return Number(a.cells[3].innerText.replace(".",""))}catch(e){return 0}};let a=document.getElementById("ally_ranking_table"),l=Array.from(a.querySelectorAll('[href*="game.php"]'));a.querySelector("tbody").firstElementChild.insertAdjacentHTML("beforeend","\n        <th>Farm</th>\n        <th>Raubzug</th>\n        <th>Gesamt</th>");for(const t of l){let a=await r(t),l=0,i=0;for(const e of a){let t=await n(e,"loot_res"),r=await n(e,"scavenge");l+=t,i+=r}let o=l+i,s=t.closest("tr"),c=s.insertCell(-1),m=s.insertCell(-1),y=s.insertCell(-1);c.innerText=l.toLocaleString(),m.innerText=i.toLocaleString(),y.innerText=o.toLocaleString(),await e(100)}})();