import{R as l,j as a,m as u,u as O,t as f,a as L,b as N}from"./index-WRMLzquL.js";import{a as P}from"./useFetchMainInformation-BKGQjpeT.js";var b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},x=l.createContext&&l.createContext(b),C=["attr","size","title"];function E(t,e){if(t==null)return{};var r=M(t,e),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function M(t,e){if(t==null)return{};var r={};for(var n in t)if(Object.prototype.hasOwnProperty.call(t,n)){if(e.indexOf(n)>=0)continue;r[n]=t[n]}return r}function m(){return m=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},m.apply(this,arguments)}function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?h(Object(r),!0).forEach(function(n){z(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function z(t,e,r){return e=B(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function B(t){var e=S(t,"string");return typeof e=="symbol"?e:e+""}function S(t,e){if(typeof t!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function y(t){return t&&t.map((e,r)=>l.createElement(e.tag,p({key:r},e.attr),y(e.child)))}function c(t){return e=>l.createElement(_,m({attr:p({},t.attr)},e),y(t.child))}function _(t){var e=r=>{var{attr:n,size:i,title:s}=t,w=E(t,C),d=i||r.size||"1em",o;return r.className&&(o=r.className),t.className&&(o=(o?o+" ":"")+t.className),l.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,w,{className:o,style:p(p({color:t.color||r.color},r.style),t.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&l.createElement("title",null,s),t.children)};return x!==void 0?l.createElement(x.Consumer,null,r=>e(r)):e(b)}function H(t){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"},child:[]}]})(t)}function T(t){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z"},child:[]}]})(t)}function k(t){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"},child:[]}]})(t)}function F(t){return c({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"},child:[]}]})(t)}function I(t){return c({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1"},child:[]}]})(t)}function D(t){return c({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"},child:[]}]})(t)}const g={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.4}}},R={hidden:{y:10,opacity:0},visible:{y:0,opacity:1}},v="flex gap-[5px] italic items-center max-w-max  rounded-[30px] border-[1px] text-[#c5c5c5] text-[14px] border-[#7a7a7a] px-[20px] py-[10px]",j="h-[25px] w-[25px] text-[#fff]",G=({data:t})=>{const e=[{name:"LinkedIn",href:t.linkedin,icon:a.jsx(T,{})},{name:"Email",href:t.email,icon:a.jsx(k,{})},{name:"GitHub",href:t.git,icon:a.jsx(F,{})},{name:"Telegram",href:t.telegram,icon:a.jsx(D,{})},{name:"CV",href:t.cv,icon:a.jsx(I,{})}];return a.jsx(u.ul,{className:`${g} mt-[24px] flex items-center justify-center gap-[15px]`,variants:g,initial:"hidden",animate:"visible",children:e.map(({name:r,href:n,icon:i})=>a.jsx(u.li,{className:"item",variants:R,children:r!=="Email"?a.jsxs("a",{href:n,className:v,target:"_blank",rel:"noopener noreferrer",children:[a.jsx("span",{className:j,children:i}),r]}):a.jsxs("a",{className:v,href:`mailto:${n}`,children:[a.jsx("span",{className:j,children:i}),r]})},r))})},V=()=>{const{data:t}=P(),{t:e}=O();return a.jsx("section",{className:"mt-[40px]",children:a.jsxs("div",{className:"container",children:[a.jsxs("div",{className:"relative mb-[50px]",children:[a.jsx(u.h1,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},className:"text-[100px] leading-[1.1] tracking-[0.03em] text-[#fff]",children:t==null?void 0:t.position}),a.jsx(u.p,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},className:"absolute bottom-0 right-[20px] max-w-[670px] text-[18px] leading-[1.33] tracking-[0.03em] text-[#919090]",children:e(f.title.goal)})]}),a.jsxs(L,{to:N.projects,className:"flex items-center justify-end gap-[10px]",children:[a.jsx("span",{className:"w-[270px] max-w-[100%] rounded-[30px] bg-[#fff] py-[10px] text-center text-[20px] italic text-[#000]",children:e(f.title.project)}),a.jsx("span",{className:"block rounded-[50%] bg-[#fff] p-[15px]",children:a.jsx(H,{className:"w-[20px] text-[#000]"})})]}),a.jsx(G,{data:t})]})})};function A(){return a.jsx(a.Fragment,{children:a.jsx(V,{})})}export{A as default};
