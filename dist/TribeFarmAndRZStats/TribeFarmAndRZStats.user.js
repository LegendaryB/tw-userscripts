// ==UserScript==
// @name         TribeFarmAndRZStats
// @author       LegendaryB
// @namespace    https://github.com/LegendaryB/tw-userscripts
// @version      0.1
// @match		 https://*.die-staemme.de/game.php*screen=ranking*&mode=ally*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=die-staemme.de
// @downloadURL  https://github.com/LegendaryB/tw-userscripts/raw/main/dist/TribeFarmAndRZStats/TribeFarmAndRZStats.user.js
// @updateURL    https://github.com/LegendaryB/tw-userscripts/raw/main/dist/TribeFarmAndRZStats/TribeFarmAndRZStats.user.js
// @grant        none
// ==/UserScript==

(()=>{"use strict";const e=e=>new Promise((t=>setTimeout(t,e))),t=async e=>{try{let t=await fetch(e),n=await t.text();return(new DOMParser).parseFromString(n,"text/html")}catch(e){return}},n=async(e,n)=>{try{let r=`/game.php?screen=ranking&mode=in_a_day&type=${n}&name=${encodeURIComponent(e)}`,a=await t(r);if(a.querySelectorAll("em").length>0)return{Rank:0,Points:0};let l=a.getElementById("in_a_day_ranking_table").querySelector("[class=userimage-tiny]").closest("tr");return{Rank:Number(l.cells[0].innerText),Points:Number(l.cells[3].innerText.replaceAll(".",""))}}catch(e){return{Rank:0,Points:0}}};(async()=>{const r=async e=>{let n=await t(e);return Array.from(n.querySelectorAll("[class=userimage-tiny]")).map((e=>e.nextElementSibling.innerText.trim()))};let a=document.getElementById("ally_ranking_table"),l=Array.from(a.querySelectorAll('[href*="game.php"]'));a.querySelector("tbody").firstElementChild.insertAdjacentHTML("beforeend","\n        <th>Farm</th>\n        <th>Raubzug</th>\n        <th>Gesamt</th>");for(const t of l){let a=await r(t),l=0,i=0;for(const e of a){let t=await n(e,"loot_res"),r=await n(e,"scavenge");l+=t.Points,i+=r.Points}let o=l+i,s=t.closest("tr"),c=s.insertCell(-1),m=s.insertCell(-1),y=s.insertCell(-1);c.innerText=l.toLocaleString(),m.innerText=i.toLocaleString(),y.innerText=o.toLocaleString(),await e(100)}})()})();