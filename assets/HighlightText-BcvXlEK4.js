import{j as r}from"./index-B1BljWgF.js";function a({text:i,filter:s}){if(!s.trim())return i;const o=i.split(new RegExp(`(${s})`,"gi")),e=[];return o.forEach((t,n)=>{t.toLowerCase()===s.toLowerCase()?e.push(r.jsx("mark",{className:"highlight",children:t},n)):e.push(t)}),r.jsx(r.Fragment,{children:e})}export{a as H};