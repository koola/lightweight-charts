"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5304],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>g});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,g=u["".concat(o,".").concat(y)]||u[y]||d[y]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=y;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},27763:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(58168),a=(n(96540),n(15680));const i={id:"IPriceScaleApi",title:"Interface: IPriceScaleApi",sidebar_label:"IPriceScaleApi",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,p={unversionedId:"api/interfaces/IPriceScaleApi",id:"version-4.1/api/interfaces/IPriceScaleApi",title:"Interface: IPriceScaleApi",description:"Interface to control chart's price scale",source:"@site/versioned_docs/version-4.1/api/interfaces/IPriceScaleApi.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/IPriceScaleApi",permalink:"/lightweight-charts/docs/api/interfaces/IPriceScaleApi",draft:!1,editUrl:null,tags:[],version:"4.1",sidebarPosition:0,frontMatter:{id:"IPriceScaleApi",title:"Interface: IPriceScaleApi",sidebar_label:"IPriceScaleApi",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},o={},c=[{value:"Methods",id:"methods",level:2},{value:"applyOptions",id:"applyoptions",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"options",id:"options",level:3},{value:"Returns",id:"returns-1",level:4},{value:"width",id:"width",level:3},{value:"Returns",id:"returns-2",level:4}],s={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Interface to control chart's price scale"),(0,a.yg)("h2",{id:"methods"},"Methods"),(0,a.yg)("h3",{id:"applyoptions"},"applyOptions"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"applyOptions"),"(",(0,a.yg)("inlineCode",{parentName:"p"},"options"),"): ",(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("p",null,"Applies new options to the price scale"),(0,a.yg)("h4",{id:"parameters"},"Parameters"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Type"),(0,a.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("inlineCode",{parentName:"td"},"options")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/api/#deeppartial"},(0,a.yg)("inlineCode",{parentName:"a"},"DeepPartial")),"<",(0,a.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/api/interfaces/PriceScaleOptions"},(0,a.yg)("inlineCode",{parentName:"a"},"PriceScaleOptions")),">"),(0,a.yg)("td",{parentName:"tr",align:"left"},"Any subset of options.")))),(0,a.yg)("h4",{id:"returns"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"void")),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"options"},"options"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"options"),"(): ",(0,a.yg)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/PriceScaleOptions"},(0,a.yg)("inlineCode",{parentName:"a"},"PriceScaleOptions")),">"),(0,a.yg)("p",null,"Returns currently applied options of the price scale"),(0,a.yg)("h4",{id:"returns-1"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,a.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/api/interfaces/PriceScaleOptions"},(0,a.yg)("inlineCode",{parentName:"a"},"PriceScaleOptions")),">"),(0,a.yg)("p",null,"Full set of currently applied options, including defaults"),(0,a.yg)("hr",null),(0,a.yg)("h3",{id:"width"},"width"),(0,a.yg)("p",null,"\u25b8 ",(0,a.yg)("strong",{parentName:"p"},"width"),"(): ",(0,a.yg)("inlineCode",{parentName:"p"},"number")),(0,a.yg)("p",null,"Returns a width of the price scale if it's visible or 0 if invisible."),(0,a.yg)("h4",{id:"returns-2"},"Returns"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"number")))}d.isMDXComponent=!0}}]);