import{i as m,S as u}from"./assets/vendor-7659544d.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="43146074-d3428091907388d5fa71ff65d";async function p(s){const n=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});try{const r=await fetch(`https://pixabay.com/api/?${n.toString()}`);if(!r.ok)throw new Error("Failed to fetch images");const o=await r.json();return o.hits.length===0&&m.show({backgroundColor:"rgba(239, 64, 64, 1)",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"rgba(250, 250, 251, 1)",position:"center"}),o.hits}catch{throw new Error("Failed to fetch images")}}function h(s,n){n.innerHTML="",s.forEach(r=>{const o=document.createElement("div");o.classList.add("card");const e=document.createElement("img");e.classList.add("card-image"),e.src=r.webformatURL,e.alt=r.tags;const t=document.createElement("div");t.classList.add("card-info");const a=document.createElement("p");a.textContent=`Likes ${r.likes}`;const c=document.createElement("p");c.textContent=`Views ${r.views}`;const i=document.createElement("p");i.textContent=`Comments ${r.comments}`;const d=document.createElement("p");d.textContent=`Downloads ${r.downloads}`,t.appendChild(a),t.appendChild(c),t.appendChild(i),t.appendChild(d),o.appendChild(e),o.appendChild(t),n.appendChild(o)})}function l(s){alert(s)}document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("search-form"),n=document.getElementById("search-input"),r=document.getElementById("gallery");s.addEventListener("submit",async o=>{o.preventDefault();const e=n.value.trim();if(!e){l("Please enter a search term");return}try{const t=await p(e);h(t,r)}catch{l("Failed to fetch images")}})});images.forEach(createGalleryItem);new u("#gallery a",{captions:!0,captionDelay:250,captionsData:"alt"});
//# sourceMappingURL=commonHelpers.js.map
