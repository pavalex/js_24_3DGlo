(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),r=()=>{const{timeRemaining:e,hours:c,minutes:l,seconds:i}=(()=>{let e=(new Date("15 may 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})(),s=e=>{let t;return t=e.toString().length<2?`0${e}`:e,t};t.textContent=s(c),n.textContent=s(l),o.textContent=s(i);let u=setInterval(r,1e3);e<0&&(t.textContent="00",n.textContent="00",o.textContent="00",clearInterval(u))};r()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=document.querySelector(".close-btn"),o=document.querySelectorAll("ul>li>a"),r=()=>t.classList.toggle("active-menu");e.addEventListener("click",r),n.addEventListener("click",r),o.forEach((e=>{e.addEventListener("click",r)}));for(let e of o)e.addEventListener("click",(function(t){t.preventDefault();const n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=e.querySelector(".popup-close"),o=document.querySelector("main>a");let r,c=0;function l(){let t=.04*c;e.style.opacity=`${t}`,c<25&&(r=requestAnimationFrame(l)),c++}t.forEach((t=>{t.addEventListener("click",(()=>{const t=window.innerWidth;e.style.display="block",t>768&&(r=requestAnimationFrame(l))}))})),n.addEventListener("click",(()=>{e.style.display="none",c=0})),o.addEventListener("click",(function(e){e.preventDefault();const t=o.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth",block:"start"})}))})()})();