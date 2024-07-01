(()=>{var e={};e.id=702,e.ids=[702],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},6113:e=>{"use strict";e.exports=require("crypto")},6005:e=>{"use strict";e.exports=require("node:crypto")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},3057:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),r(69521),r(13321),r(42255),r(11506),r(35866);var a=r(23191),s=r(88716),i=r(37922),o=r.n(i),n=r(95231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let d=["",{children:["dashboard",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,69521)),"/media/pyromaniac/1bcfed82-c9ff-4469-b177-7d2f357b8240/Projects/SASS-AI-CONTENT-GENERATOR/app/dashboard/page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,13321)),"/media/pyromaniac/1bcfed82-c9ff-4469-b177-7d2f357b8240/Projects/SASS-AI-CONTENT-GENERATOR/app/dashboard/layout.tsx"],loading:[()=>Promise.resolve().then(r.bind(r,42255)),"/media/pyromaniac/1bcfed82-c9ff-4469-b177-7d2f357b8240/Projects/SASS-AI-CONTENT-GENERATOR/app/dashboard/loading.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,11506)),"/media/pyromaniac/1bcfed82-c9ff-4469-b177-7d2f357b8240/Projects/SASS-AI-CONTENT-GENERATOR/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/media/pyromaniac/1bcfed82-c9ff-4469-b177-7d2f357b8240/Projects/SASS-AI-CONTENT-GENERATOR/app/dashboard/page.tsx"],u="/dashboard/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/dashboard/page",pathname:"/dashboard",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},92684:(e,t,r)=>{Promise.resolve().then(r.bind(r,68872))},68872:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var a=r(10326),s=r(17577);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r(62881).Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]),o=function({onSearchInput:e}){return(0,a.jsxs)("div",{className:"p-10 bg-gradient-to-br from-purple-500 via-purple-700  to-blue-600 flex flex-col justify-center items-center text-white",children:[a.jsx("h2",{className:"text-3xl font-bold",children:"Browse All Templates"}),a.jsx("p",{children:"What would you like to create today?"}),a.jsx("div",{className:"w-full  flex justify-center",children:(0,a.jsxs)("div",{className:"flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]",children:[a.jsx(i,{className:"text-primary"}),a.jsx("input",{type:"text",placeholder:"Search",onChange:t=>e(t.target.value),className:"bg-transparent w-full outline-none text-black"})]})})]})};var n=r(70835),l=r(46226),d=r(90434);let c=function(e){return a.jsx(d.default,{href:"/dashboard/content/"+e?.slug,children:(0,a.jsxs)("div",{className:"p-5 shadow-md rounded-md border bg-white  flex flex-col gap-3  cursor-pointer h-full hover:scale-105 transition-all",children:[a.jsx(l.default,{src:e.icon,alt:"icon",width:50,height:50}),a.jsx("h2",{className:"font-medium text-lg",children:e.name}),a.jsx("p",{className:"text-gray-500 line-clamp-3",children:e.desc})]})})},u=function({userSearchInput:e}){let[t,r]=(0,s.useState)(n.Z);return a.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10",children:t.map((e,t)=>a.jsx(c,{...e}))})},p=function(){let[e,t]=(0,s.useState)();return(0,a.jsxs)("div",{children:[a.jsx(o,{onSearchInput:e=>t(e)}),a.jsx(u,{userSearchInput:e})]})}},62881:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var a=r(17577);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=(...e)=>e.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,a.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:n="",children:l,iconNode:d,...c},u)=>(0,a.createElement)("svg",{ref:u,...o,width:t,height:t,stroke:e,strokeWidth:s?24*Number(r)/Number(t):r,className:i("lucide",n),...c},[...d.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(l)?l:[l]])),l=(e,t)=>{let r=(0,a.forwardRef)(({className:r,...o},l)=>(0,a.createElement)(n,{ref:l,iconNode:t,className:i(`lucide-${s(e)}`,r),...o}));return r.displayName=`${e}`,r}},70717:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]])},95920:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]])},88378:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},90855:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(62881).Z)("WalletCards",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]])},46226:(e,t,r)=>{"use strict";r.d(t,{default:()=>s.a});var a=r(69029),s=r.n(a)},90434:(e,t,r)=>{"use strict";r.d(t,{default:()=>s.a});var a=r(79404),s=r.n(a)},69029:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return n}});let a=r(91174),s=r(23078),i=r(92481),o=a._(r(86820));function n(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=i.Image},69521:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>n});var a=r(68570);let s=(0,a.createProxy)(String.raw`/media/pyromaniac/1bcfed82-c9ff-4469-b177-7d2f357b8240/Projects/SASS-AI-CONTENT-GENERATOR/app/dashboard/page.tsx`),{__esModule:i,$$typeof:o}=s;s.default;let n=(0,a.createProxy)(String.raw`/media/pyromaniac/1bcfed82-c9ff-4469-b177-7d2f357b8240/Projects/SASS-AI-CONTENT-GENERATOR/app/dashboard/page.tsx#default`)},27162:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var a=r(71159);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),i=(...e)=>e.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,a.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:n="",children:l,iconNode:d,...c},u)=>(0,a.createElement)("svg",{ref:u,...o,width:t,height:t,stroke:e,strokeWidth:s?24*Number(r)/Number(t):r,className:i("lucide",n),...c},[...d.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(l)?l:[l]])),l=(e,t)=>{let r=(0,a.forwardRef)(({className:r,...o},l)=>(0,a.createElement)(n,{ref:l,iconNode:t,className:i(`lucide-${s(e)}`,r),...o}));return r.displayName=`${e}`,r}},19541:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(27162).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,70,919,621,162,133],()=>r(3057));module.exports=a})();