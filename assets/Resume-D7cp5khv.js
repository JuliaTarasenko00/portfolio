import{r as b,j as e}from"./index-BYy1NT7f.js";import{H as y,a as N}from"./index-BP1zWixn.js";import{a as S,s as v,u as C,b as T,m as c}from"./motion-BfzarjNx.js";function E(a){a.values.forEach(s=>s.stop())}function p(a,s){[...s].reverse().forEach(t=>{const n=a.getVariant(t);n&&v(a,n),a.variantChildren&&a.variantChildren.forEach(o=>{p(o,s)})})}function L(a,s){if(Array.isArray(s))return p(a,s);if(typeof s=="string")return p(a,[s]);v(a,s)}function R(){const a=new Set,s={subscribe(i){return a.add(i),()=>void a.delete(i)},start(i,t){const n=[];return a.forEach(o=>{n.push(S(o,i,{transitionOverride:t}))}),Promise.all(n)},set(i){return a.forEach(t=>{L(t,i)})},stop(){a.forEach(i=>{E(i)})},mount(){return()=>{s.stop()}}};return s}function M(){const a=C(R);return T(a.mount,[]),a}const z=M,m="mb-[10px] flex items-center gap-[3px] text-[25px] font-bold text-main_color",g=" w-[25px] h-[25px] text-[#eaa70c]",x="flex flex-col gap-[10px]",u="rounded-[15px] w-[300px] px-[10px] py-[15px] flex flex-col gap-[3px]",h=" text-[12px] italic text-center",_=" text-[12px] ",k="font-medium text-[15px]",w={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.2}}},f={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},A=({educationList:a,experienceList:s,skillsList:i})=>{const t=z();return b.useEffect(()=>{t.start({x:[0,-i.length*50],transition:{repeat:1/0,repeatType:"mirror",duration:i.length,ease:"linear"}})},[t,i.length]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex justify-around",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:m,children:[e.jsx(y,{className:g})," Education"]}),e.jsx(c.ul,{className:x,variants:w,initial:"hidden",animate:"visible",children:a.map(({start_education:n,end_education:o,degree:r,programme_subject:l,name_organization:d,id:j})=>e.jsxs(c.li,{variants:f,className:`${u} bg-[#80808029] even:bg-[#eaa70c1c]`,children:[e.jsxs("p",{className:h,children:[n," - ",o]}),e.jsxs("h3",{className:k,children:[r,l&&","," ",l]}),e.jsxs("p",{className:_,children:[" ",d]})]},j))})]}),e.jsxs("div",{children:[e.jsxs("h2",{className:m,children:[e.jsx(N,{className:g}),"Experience"]}),e.jsx(c.ul,{className:x,variants:w,initial:"hidden",animate:"visible",children:s.map(({start_work:n,end_work:o,position:r,name_organization:l,id:d})=>e.jsxs(c.li,{variants:f,className:`${u} bg-[#80808029] odd:bg-[#eaa70c1c]`,children:[e.jsxs("p",{className:h,children:[n," - ",o]}),e.jsx("h3",{className:k,children:r}),e.jsx("p",{className:_,children:l})]},d))})]})]}),e.jsxs("div",{className:"mt-[20px] max-w-full overflow-hidden p-[10px]",children:[e.jsx("h2",{className:m,children:"Work Skills"}),e.jsx(c.ul,{animate:t,className:"flex gap-[12px]",children:i.map(({name_skill:n,id:o,image:r})=>e.jsxs("li",{className:"flex flex-col items-center gap-[2px]",children:[e.jsx("img",{src:r,alt:n,width:70,height:70,className:"h-[70px] min-w-[70px] rounded-[20px] object-contain"}),e.jsx("p",{className:"text-[13px] italic text-main_color",children:n})]},o))})]})]})},I=[{start_education:"11.2022",end_education:"10.2023",degree:"Full-stack Developer",programme_subject:null,name_organization:"GoIt",id:"1"},{start_education:"09.2022",end_education:"12.2023",degree:"Master`s",programme_subject:"Economics",name_organization:"Odesa National University of Technology",id:"2"},{start_education:"09.2019",end_education:"01.2022",degree:"Bachelor`s",programme_subject:"Finance, banking and insurance",name_organization:"Kyiv National University of Trade and Economics",id:"3"}],B=[{start_work:"11.2023",end_work:"now",position:"Front-end Developer",name_organization:"Baza Trainee",id:"1"},{start_work:"08.2020",end_work:"06.2023",position:"Customer service specialist",name_organization:"PrivatBank",id:"2"},{start_work:"10.2019",end_work:"08.2020",position:"Bank Product Sales Manager",name_organization:"OschadBank",id:"3"}],H=[{name_skill:"HTML5",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",id:"1"},{name_skill:"CSS3",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/340px-CSS3_logo_and_wordmark.svg.png",id:"2"},{name_skill:"SCSS",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png",id:"3"},{name_skill:"Responsive/Adaptive design",image:"https://marketing.invisionapp-cdn.com/cms/images/lr1orcar/marketing-pages/012ecee36138fcb5d0ea06eda0c81ba6ef61f251-851x565.png?w=2000&fm=jpg&q=90",id:"4"},{name_skill:"JavaScript",image:"https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png",id:"5"},{name_skill:"React JS",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",id:"6"},{name_skill:"Redux/Redux Toolkit",image:"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png",id:"8"},{name_skill:"Next.js",image:"https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png",id:"9"},{name_skill:"TypeScript",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",id:"7"},{name_skill:"TailwindCSS",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/768px-Tailwind_CSS_Logo.svg.png?20230715030042",id:"10"},{name_skill:"Node.js",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png",id:"11"},{name_skill:"Express.js",image:"https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",id:"12"},{name_skill:"MongoDB",image:"https://cdn.iconscout.com/icon/free/png-256/free-mongodb-226029.png?f=webp",id:"13"},{name_skill:"Git",image:"https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",id:"14"}],F=I,V=B,D=H;function P(){return e.jsx("section",{className:"w-[100%]",children:e.jsx(A,{educationList:F,experienceList:V,skillsList:D})})}export{P as default};