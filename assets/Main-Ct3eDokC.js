import{$ as h,a as u,R as c,b as C,j as t,t as p,u as S,m as o,c as F,d as B}from"./index-ybihtFBv.js";import{u as P}from"./useMainInformation-DlWORWEm.js";const k="/skills",H=async()=>{const{data:e}=await h.get(`${k}?type=front`);return e},_=async()=>{const{data:e}=await h.get(`${k}?type=style`);return e},$=()=>{const{data:e}=u({queryKey:["skills/front"],queryFn:H}),{data:r}=u({queryKey:["skills/style"],queryFn:_});return{front:e,style:r}};var M={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g=c.createContext&&c.createContext(M),T=["attr","size","title"];function q(e,r){if(e==null)return{};var n=I(e,r),a,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)a=i[s],!(r.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function I(e,r){if(e==null)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(r.indexOf(a)>=0)continue;n[a]=e[a]}return n}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function j(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,a)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?j(Object(n),!0).forEach(function(a){G(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function G(e,r,n){return r=R(r),r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function R(e){var r=D(e,"string");return typeof r=="symbol"?r:r+""}function D(e,r){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var a=n.call(e,r||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function z(e){return e&&e.map((r,n)=>c.createElement(r.tag,d({key:n},r.attr),z(r.child)))}function l(e){return r=>c.createElement(V,m({attr:d({},e.attr)},r),z(e.child))}function V(e){var r=n=>{var{attr:a,size:s,title:i}=e,E=q(e,T),f=s||n.size||"1em",x;return n.className&&(x=n.className),e.className&&(x=(x?x+" ":"")+e.className),c.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,a,E,{className:x,style:d(d({color:e.color||n.color},n.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),i&&c.createElement("title",null,i),e.children)};return g!==void 0?c.createElement(g.Consumer,null,n=>r(n)):r(M)}function W(e){return l({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function A(e){return l({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"},child:[]}]})(e)}function K(e){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.25 15.5a.75.75 0 0 1-.75-.75V7.56L7.28 17.78a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L16.44 6.5H9.25a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-.75.75Z"},child:[]}]})(e)}const v="hover:transition_custom focus:transition_custom rounded-[20px] border-[1px] border-[#565656] bg-transparent p-[20px] text-[#919090] hover:border-[transparent] hover:bg-[#ffffffde] hover:text-[#000]",y="mb-[15px] text-[25px] font-medium",b="flex max-w-full flex-wrap gap-[2px]",w="text-[15px] italic leading-[1.33] tracking-[0.03em]",Z=()=>{const{front:e,style:r}=$(),{data:n}=P(),{t:a}=C();return t.jsx("section",{className:"mt-[40px]",children:t.jsxs("div",{className:"container relative",children:[t.jsx("div",{className:"circle right-[-20%] top-[-60px] h-[600px] w-[600px]"}),t.jsxs("h2",{className:"mb-[50px] text-[15px] font-bold text-[#fff]",children:[".../",a(p.title.about)," ..."]}),t.jsx("p",{className:"mx-auto mb-[40px] max-w-[650px] text-[15px] font-normal leading-[1.33] tracking-[0.03em]",children:a(p.title.description)}),t.jsxs("div",{className:"relative",children:[t.jsxs("div",{className:`${v} max-w-[500px]`,children:[t.jsx("h3",{className:y,children:"Front-end"}),t.jsx("ul",{className:b,children:e==null?void 0:e.map(({_id:s,name_skill:i})=>t.jsxs("li",{className:w,children:[i," /"]},s))})]}),t.jsxs("div",{className:`${v} mt-[15px] max-w-[330px]`,children:[t.jsx("h3",{className:y,children:"Style"}),t.jsx("ul",{className:b,children:r==null?void 0:r.map(({_id:s,name_skill:i})=>t.jsxs("li",{className:w,children:[i," /"]},s))})]}),t.jsx("img",{src:n==null?void 0:n.avatar,alt:n==null?void 0:n.name,width:300,height:200,className:"absolute right-[10%] top-[0] h-[300px] w-[280px] rounded-[20px] object-cover object-center"}),t.jsxs("div",{className:"ml-[90px] mt-[40px] flex items-center gap-[20px]",children:[t.jsx("p",{className:"w-[280px] text-[13px] text-[#c7c7c7]",children:a(p.title.checkProjects)}),t.jsxs("a",{href:n==null?void 0:n.git,target:"_blank",className:"relative flex items-center",rel:"noopener noreferrer",children:[t.jsx("span",{className:"block h-[40px] w-[40px] text-[#fff]",children:t.jsx(W,{})}),t.jsx("span",{className:"absolute left-[33px] top-[-5px] block max-w-[40px] rounded-[20px] bg-[#fff] p-[10px]",children:t.jsx(K,{className:"h-[20px] w-[20px] text-[#000]"})})]})]})]})]})})},Q="/experience",U=async e=>{const{data:r}=await h.get(`${Q}?language=${e}`);return r},J=()=>{const{currentLanguage:e}=S(),{data:r}=u({queryKey:["fetch/experience",e],queryFn:()=>U(e)});return{data:r}},X=()=>{const{data:e}=J();return t.jsx("section",{className:"mt-[50px]",children:t.jsxs("div",{className:"container",children:[t.jsx("h2",{className:"text-end text-[90px] font-bold",children:"Work"}),t.jsx("ul",{children:e==null?void 0:e.map(({start_work:r,end_work:n,name_organization:a,position:s})=>t.jsxs("li",{className:"flex items-center justify-between",children:[t.jsx("div",{children:t.jsxs("p",{children:[r," - ",n]})}),t.jsx("p",{children:a}),t.jsx("p",{children:s})]},a))})]})})};function Y(e){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M22.0367422,22 L17.8848745,22 L17.8848745,15.5036305 C17.8848745,13.9543347 17.85863,11.9615082 15.7275829,11.9615082 C13.5676669,11.9615082 13.237862,13.6498994 13.237862,15.3925291 L13.237862,22 L9.0903683,22 L9.0903683,8.64071385 L13.0707725,8.64071385 L13.0707725,10.4673257 L13.1276354,10.4673257 C13.6813927,9.41667396 15.0356049,8.3091593 17.0555507,8.3091593 C21.2599073,8.3091593 22.0367422,11.0753215 22.0367422,14.6734319 L22.0367422,22 Z M4.40923804,6.81585163 C3.07514653,6.81585163 2,5.73720584 2,4.40748841 C2,3.07864579 3.07514653,2 4.40923804,2 C5.73720584,2 6.81585163,3.07864579 6.81585163,4.40748841 C6.81585163,5.73720584 5.73720584,6.81585163 4.40923804,6.81585163 L4.40923804,6.81585163 Z M6.48604672,22 L2.32980492,22 L2.32980492,8.64071385 L6.48604672,8.64071385 L6.48604672,22 Z"},child:[]}]})(e)}function ee(e){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"},child:[]}]})(e)}function te(e){return l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"},child:[]}]})(e)}function re(e){return l({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1"},child:[]}]})(e)}function ne(e){return l({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"},child:[]}]})(e)}const N={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.4}}},ae={hidden:{y:10,opacity:0},visible:{y:0,opacity:1}},O="flex gap-[5px] italic items-center max-w-max  rounded-[30px] border-[1px] text-[#c5c5c5] text-[14px] border-[#7a7a7a] px-[20px] py-[10px]",L="h-[25px] w-[25px] text-[#fff]",se=({data:e})=>{const r=[{name:"LinkedIn",href:e.linkedin,icon:t.jsx(Y,{})},{name:"Email",href:e.email,icon:t.jsx(ee,{})},{name:"GitHub",href:e.git,icon:t.jsx(te,{})},{name:"Telegram",href:e.telegram,icon:t.jsx(ne,{})},{name:"CV",href:e.cv,icon:t.jsx(re,{})}];return t.jsx(o.ul,{className:`${N} mt-[24px] flex items-center justify-center gap-[15px]`,variants:N,initial:"hidden",animate:"visible",children:r.map(({name:n,href:a,icon:s})=>t.jsx(o.li,{className:"item",variants:ae,children:n!=="Email"?t.jsxs(o.a,{href:a,className:O,target:"_blank",whileHover:{scale:1.1},transition:{type:"spring",stiffness:100,damping:2},rel:"noopener noreferrer",children:[t.jsx("span",{className:L,children:s}),n]}):t.jsxs(o.a,{className:O,whileHover:{scale:1.1},transition:{type:"spring",stiffness:100,damping:2},href:`mailto:${a}`,children:[t.jsx("span",{className:L,children:s}),n]})},n))})},ie=()=>{const{data:e}=P(),{t:r}=C();return t.jsx("section",{className:"mt-[40px]",children:t.jsxs("div",{className:"container",children:[t.jsxs("div",{className:"relative mb-[50px]",children:[t.jsx(o.h1,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8},className:"text-[100px] leading-[1.1] tracking-[0.03em] text-[#fff]",children:e==null?void 0:e.position}),t.jsx(o.p,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8},className:"absolute bottom-0 right-[20px] max-w-[670px] text-[18px] leading-[1.33] tracking-[0.03em] text-[#919090]",children:r(p.title.goal)})]}),t.jsxs(F,{to:B.projects,className:"flex items-center justify-end gap-[10px]",children:[t.jsx("span",{className:"w-[270px] max-w-[100%] rounded-[30px] bg-[#fff] py-[10px] text-center text-[20px] italic text-[#000]",children:r(p.title.project)}),t.jsx("span",{className:"block rounded-[50%] bg-[#fff] p-[15px]",children:t.jsx(A,{className:"w-[20px] text-[#000]"})})]}),t.jsx(se,{data:e})]})})};function oe(){return t.jsxs(t.Fragment,{children:[t.jsx(ie,{}),t.jsx(Z,{}),t.jsx(X,{})]})}export{oe as default};
