exports.id=285,exports.ids=[285],exports.modules={20791:(e,t,r)=>{let a={"4174cdc6eecae0851e3b781888a5729c86583cff":()=>Promise.resolve().then(r.bind(r,11159)).then(e=>e.invalidateCacheAction)};async function s(e,...t){return(await a[e]()).apply(null,t)}e.exports={"4174cdc6eecae0851e3b781888a5729c86583cff":s.bind(null,"4174cdc6eecae0851e3b781888a5729c86583cff")}},29704:(e,t,r)=>{Promise.resolve().then(r.bind(r,4939))},89787:(e,t,r)=>{Promise.resolve().then(r.bind(r,54020)),Promise.resolve().then(r.bind(r,16566)),Promise.resolve().then(r.bind(r,33473)),Promise.resolve().then(r.bind(r,72248))},88604:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,12994,23)),Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23))},35303:()=>{},84398:(e,t,r)=>{"use strict";r.d(t,{x:()=>a});let a=(0,r(17577).createContext)(0)},49086:(e,t,r)=>{"use strict";r.d(t,{w:()=>a});let a=(0,r(17577).createContext)(null)},22890:(e,t,r)=>{"use strict";r.d(t,{F:()=>a});let a=(0,r(17577).createContext)(null)},4939:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var a=r(10326),s=r(17577),l=r(95920),i=r(70717),d=r(90855),n=r(88378),o=r(46226),c=r(90434),h=r(35047);let u=function(){let e=[{name:"Home",icon:l.Z,path:"/dashboard"},{name:"History",icon:i.Z,path:"/dashboard/history"},{name:"Billing",icon:d.Z,path:"/dashboard/billing"},{name:"Setting",icon:n.Z,path:"/dashboard/settings"}],t=(0,h.usePathname)();return(0,a.jsxs)("div",{className:"h-screen relative p-5 shadow-sm border bg-white",children:[a.jsx("div",{className:"flex justify-center",children:a.jsx(o.default,{src:"/logo.svg",alt:"logo",width:120,height:100})}),a.jsx("hr",{className:"my-6 border"}),a.jsx("div",{className:"mt-3",children:e.map((e,r)=>a.jsx(c.default,{href:e.path,children:(0,a.jsxs)("div",{className:`flex gap-2 mb-2 p-3
                    hover:bg-primary hover:text-white rounded-lg
                    cursor-pointer items-center
                    ${t==e.path&&"bg-primary text-white"}
                    `,children:[a.jsx(e.icon,{className:"h-6 w-6"}),a.jsx("h2",{className:"text-lg",children:e.name})]})}))}),a.jsx("div",{className:"absolute bottom-10 left-0 w-full"})]})};var m=r(12220);let f=function(){return a.jsx("div",{className:"p-5 shadow-sm border-b-2 bg-white flex justify-between items-center",children:a.jsx("div",{className:"flex gap-5 items-center",children:a.jsx(m.l8,{})})})};var v=r(84398),p=r(22890),x=r(49086);let b=function({children:e}){let[t,r]=(0,s.useState)(0),[l,i]=(0,s.useState)(!1),[d,n]=(0,s.useState)();return a.jsx(v.x.Provider,{value:{totalUsage:t,setTotalUsage:r},children:a.jsx(p.F.Provider,{value:{userSubscription:l,setUserSubscription:i},children:a.jsx(x.w.Provider,{value:{updateCreditUsage:d,setUpdateCreditUsage:n},children:(0,a.jsxs)("div",{className:"bg-slate-100 min-h-screen",children:[a.jsx("div",{className:"md:w-64 hidden md:block fixed",children:a.jsx(u,{})}),(0,a.jsxs)("div",{className:"md:ml-64",children:[a.jsx(f,{}),e]}),a.jsx("div",{})]})})})})}},62881:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(17577);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=(...e)=>e.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let d=(0,a.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:d="",children:n,iconNode:o,...c},h)=>(0,a.createElement)("svg",{ref:h,...i,width:t,height:t,stroke:e,strokeWidth:s?24*Number(r)/Number(t):r,className:l("lucide",d),...c},[...o.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(n)?n:[n]])),n=(e,t)=>{let r=(0,a.forwardRef)(({className:r,...i},n)=>(0,a.createElement)(d,{ref:n,iconNode:t,className:l(`lucide-${s(e)}`,r),...i}));return r.displayName=`${e}`,r}},70717:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});/**
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
 */let a=(0,r(62881).Z)("WalletCards",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]])},46226:(e,t,r)=>{"use strict";r.d(t,{default:()=>s.a});var a=r(69029),s=r.n(a)},90434:(e,t,r)=>{"use strict";r.d(t,{default:()=>s.a});var a=r(79404),s=r.n(a)},69029:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return n},getImageProps:function(){return d}});let a=r(91174),s=r(23078),l=r(92481),i=a._(r(86820));function d(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let n=l.Image},13321:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>l,default:()=>d});var a=r(68570);let s=(0,a.createProxy)(String.raw`/media/pyromaniac/1bcfed82-c9ff-4469-b177-7d2f357b8240/Projects/SASS-AI-CONTENT-GENERATOR/app/dashboard/layout.tsx`),{__esModule:l,$$typeof:i}=s;s.default;let d=(0,a.createProxy)(String.raw`/media/pyromaniac/1bcfed82-c9ff-4469-b177-7d2f357b8240/Projects/SASS-AI-CONTENT-GENERATOR/app/dashboard/layout.tsx#default`)},42255:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var a=r(19510),s=r(19541);r(71159);let l=function(){return a.jsx("div",{className:"flex items-center justify-center h-screen",children:a.jsx(s.Z,{className:"animate-spin h-10 w-10 text-primary"})})}},11506:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n,metadata:()=>d});var a=r(19510),s=r(71206),l=r.n(s);r(67272);var i=r(75376);let d={title:"Create Next App",description:"Generated by create next app"};function n({children:e}){return a.jsx(i.El,{children:a.jsx("html",{lang:"en",children:a.jsx("body",{className:l().className,children:e})})})}},27162:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var a=r(71159);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l=(...e)=>e.filter((e,t,r)=>!!e&&r.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let d=(0,a.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:s,className:d="",children:n,iconNode:o,...c},h)=>(0,a.createElement)("svg",{ref:h,...i,width:t,height:t,stroke:e,strokeWidth:s?24*Number(r)/Number(t):r,className:l("lucide",d),...c},[...o.map(([e,t])=>(0,a.createElement)(e,t)),...Array.isArray(n)?n:[n]])),n=(e,t)=>{let r=(0,a.forwardRef)(({className:r,...i},n)=>(0,a.createElement)(d,{ref:n,iconNode:t,className:l(`lucide-${s(e)}`,r),...i}));return r.displayName=`${e}`,r}},19541:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(27162).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},98815:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(27162).Z)("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]])},57481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(66621);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},67272:()=>{}};