import{j as n}from"./index-B1BljWgF.js";function m({children:s,id:e,label:r="",prefix:t,icon:a,colorTag:i,helperText:c,onClickIcon:l}){return n.jsxs("div",{className:"input-wrapper",children:[r&&n.jsx(u,{id:e,label:r}),n.jsxs("div",{className:"input-field",children:[i&&n.jsx(p,{colorTag:i}),t&&n.jsx(o,{prefix:t}),s,a&&n.jsx(x,{icon:a,onClick:l})]}),c&&n.jsx(j,{helperText:c})]})}function u({id:s,label:e}){return n.jsx("label",{htmlFor:s,className:"input-label",children:e})}function p({colorTag:s}){return n.jsx("span",{style:{backgroundColor:s},className:"input-color-tag"})}function o({prefix:s}){return n.jsx("span",{className:"input-prefix",children:s})}function x({icon:s,onClick:e}){return n.jsx("span",{className:"input-icon","data-active":!!e,onClick:e,children:s})}function j({helperText:s}){return n.jsx("p",{className:"input-helper-text",children:s})}export{m as I};