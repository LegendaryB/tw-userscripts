// ==UserScript==
// @name         Tribe Farm and RZ stats
// @namespace    https://github.com/LegendaryB/tw-userscripts
// @version      0.1
// @author       LegendaryB
// @match		 https://*.die-staemme.de/game.php*screen=ranking*&mode=ally*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @grant        none
// ==/UserScript==

(()=>{"use strict";const e=e=>new Promise((t=>setTimeout(t,e))),t=async e=>{try{let t=await fetch(e),n=await t.text();return(new DOMParser).parseFromString(n,"text/html")}catch(e){return}},n=async(e,n)=>{try{let r=`/game.php?screen=ranking&mode=in_a_day&type=${n}&name=${encodeURIComponent(e)}`,a=(await t(r)).getElementById("in_a_day_ranking_table").querySelector("[class=userimage-tiny]").closest("tr");return{Rank:a.cells[0].innerText,Points:Number(a.cells[3].innerText.replace(".",""))}}catch(e){return 0}};(async()=>{const r=async e=>{let n=await t(e);return Array.from(n.querySelectorAll("[class=userimage-tiny]")).map((e=>e.nextElementSibling.innerText.trim()))};let a=document.getElementById("ally_ranking_table"),l=Array.from(a.querySelectorAll('[href*="game.php"]'));a.querySelector("tbody").firstElementChild.insertAdjacentHTML("beforeend","\n        <th>Farm</th>\n        <th>Raubzug</th>\n        <th>Gesamt</th>");for(const t of l){let a=await r(t),l=0,i=0;for(const e of a){let t=await n(e,"loot_res"),r=await n(e,"scavenge");l+=t.Points,i+=r.Points}let s=l+i,o=t.closest("tr"),c=o.insertCell(-1),m=o.insertCell(-1),y=o.insertCell(-1);c.innerText=l.toLocaleString(),m.innerText=i.toLocaleString(),y.innerText=s.toLocaleString(),await e(100)}})()})();