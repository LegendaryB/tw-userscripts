// ==UserScript==
// @name        Faze_Inc_Table_Alarm
// @author      Faze, LegendaryB
// @version     0.3
// @description Plays an alarm sound when a incoming attack will arive in the next configured minutes
// @grant       unsafeWindow
// @run-at      document-idle
// @match       https://*/game.php?*
// ==/UserScript==

(()=>{"use strict";(async()=>{const t=unsafeWindow.$,e=unsafeWindow.TribalWars,a=unsafeWindow.game_data,n=(t,e,a)=>1e3*(60*t*60+60*e+a);let i=0;const r=async()=>{i=0;const o=await(async()=>{let t=document;"overview_villages"!=a.screen&&"incomings"!=a.mode&&(t=await(async t=>{try{let e=await fetch(t),a=await e.text();return(new DOMParser).parseFromString(a,"text/html")}catch(t){return}})(`/game.php?village=${a.village.id}&screen=overview_villages&mode=incomings&subtype=attacks`));const e=t.querySelector("#incomings_table tbody > tr:nth-child(2) > td:nth-child(7) > span").innerText.trim(),i=e.split(":").map((t=>Number(t)));return{raw:e,ms:n(i[0],i[1],i[2])}})();document.title=`INC in: ${o.raw}`,t(e).off().on("global_tick",(()=>{let t=o.ms-1e3*i;document.title=`INC in: ${(t=>{const e=Math.floor(t/1e3)%60,a=Math.floor(t/1e3/60%60);return[Math.floor(t/1e3/60/60%24).toString().padStart(1,"0"),a.toString().padStart(2,"0"),e.toString().padStart(2,"0")].join(":")})(t)}`,i++})),setTimeout((()=>{e.playSound("chat"),setTimeout((async()=>{await r()}),o.ms)}),o.ms-n(0,2,0))};await r()})()})();