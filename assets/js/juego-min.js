/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-syntax */
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

const myModule=(()=>{"use strict";let e=[],t=["C","D","H","S"],r=["A","J","Q","K"],l=[],n=document.querySelector("#btnGet"),s=document.querySelector("#btnNew"),i=document.querySelectorAll("small"),a=document.querySelectorAll(".divCards"),d=document.querySelector("#btnStop"),o=(t=2)=>{e=c(),l=[];for(let r=0;r<t;r+=1)l.push(0);i.forEach(e=>e.innerText=0),a.forEach(e=>e.innerHTML=""),d.disabled=!1,n.disabled=!1},c=()=>{e=[];for(let l=2;l<=10;l+=1)for(let n of t)e.push(`${l}${n}`);for(let s of t)for(let i of r)e.push(`${i}${s}`);return _.shuffle(e)},h=()=>{if(0===e.length)throw Error("No hay cartas en el deck");return e.pop()},u=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},$=(e,t)=>(l[t]+=u(e),i[t].innerText=l[t],l[t]),f=(e,t)=>{let r=document.createElement("img");r.src=`assets/cards/${e}.png`,r.classList.add("card"),a[t].append(r)},p=()=>{let[e,t]=l;setTimeout(()=>{t===e?alert("It's a tie!!!!!"):e>21?alert("The computer is the winner!"):t>21?alert("The player is the winner! Congratulations"):alert("The computer is the winner!")},100)},b=e=>{let t=0;do{let r=h();t=$(r,l.length-1),f(r,l.length-1)}while(t<e&&e<=21);p()};return n.addEventListener("click",()=>{let e=h(),t=$(e,0);f(e,0),t>21?(console.warn("Lo siento mucho, perdiste"),n.disabled=!0,d.disabled=!0,b(t)):21===t&&(console.warn("21, genial"),n.disabled=!0,d.disabled=!0,b(t))}),d.addEventListener("click",()=>{d.disabled=!0,n.disabled=!0,b(l[0])}),s.addEventListener("click",()=>{o()}),{newGame:o}})();