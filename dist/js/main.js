(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds"),o=()=>{const{timeRemaining:e,hours:r,minutes:c,seconds:a}=(()=>{let e=(new Date("18 may 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})(),s=e=>{let t;return t=e.toString().length<2?`0${e}`:e,t};t.textContent=s(r),n.textContent=s(c),l.textContent=s(a);let i=setInterval(o,1e3);e<0&&(t.textContent="00",n.textContent="00",l.textContent="00",clearInterval(i))};o()})(),(()=>{const e=document.querySelector("menu"),t=document.querySelectorAll("ul>li>a");document.addEventListener("click",(t=>{t.target.closest(".menu")||t.target.closest("menu")?(t.preventDefault(),e.classList.add("active-menu")):e.classList.remove("active-menu"),(t.target.closest(".close-btn")||t.target.matches("ul>li>a"))&&(t.preventDefault(),e.classList.remove("active-menu"))}));for(let e of t)e.addEventListener("click",(function(t){t.preventDefault();const n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=document.querySelector("main>a");let l,o=!1,r=0;function c(){let t=.04*r;e.style.opacity=`${t}`,r<25?l=requestAnimationFrame(c):cancelAnimationFrame(l),r++}t.forEach((t=>{t.addEventListener("click",(()=>{const t=window.innerWidth;e.style.display="block",o?(cancelAnimationFrame(l),o=!1):t>768&&(l=requestAnimationFrame(c),o=!0)}))})),n.addEventListener("click",(function(e){e.preventDefault();const t=n.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})})),e.addEventListener("click",(t=>{t.target.closest(".popup-content")&&!t.target.classList.contains("popup-close")||(e.style.display="none",r=0)}))})(),(()=>{const e=document.querySelectorAll(".calc-item"),t=document.querySelectorAll('input[placeholder="Ваше имя"]'),n=document.querySelector('input[placeholder="Ваше сообщение"]'),l=document.querySelectorAll('input[type="email"]'),o=document.querySelectorAll('input[type="tel"]'),r=/\D/g,c=/[^а-яё -]+$/gi,a=/[^a-z\d@-_.!~*']+$/gi,s=/[^\d()-]+$/g;for(let e=0;e<t.length;e++)t[e].addEventListener("input",(()=>t[e].value=t[e].value.replace(c,"").trimStart()));for(let e=0;e<l.length;e++)l[e].addEventListener("input",(()=>l[e].value=l[e].value.replace(a,"").trimStart()));for(let e=0;e<o.length;e++)o[e].addEventListener("input",(()=>o[e].value=o[e].value.replace(s,"")));for(let t=0;t<e.length;t++)e[t].addEventListener("input",(()=>e[t].value=e[t].value.replace(r,"")));n.addEventListener("input",(()=>n.value=n.value.replace(c,"").trimStart()))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const l=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===l?(e.classList.add("active"),n[t].classList.remove("d-none")):(e.classList.remove("active"),n[t].classList.add("d-none"))}))}})),console.log(e),console.log(t),console.log(n)})()})();