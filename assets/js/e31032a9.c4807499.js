"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98201],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>h});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),o=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=o(e.components);return r.createElement(s.Provider,{value:a},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=o(t),m=n,h=g["".concat(s,".").concat(m)]||g[m]||y[m]||i;return t?r.createElement(h,p(p({ref:a},c),{},{components:t})):r.createElement(h,p({ref:a},c))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,p=new Array(i);p[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[g]="string"==typeof e?e:n,p[1]=l;for(var o=2;o<i;o++)p[o]=t[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},36390:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>p,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=t(58168),n=(t(96540),t(15680));const i={id:"SeriesDataItemTypeMap",title:"Interface: SeriesDataItemTypeMap<HorzScaleItem>",sidebar_label:"SeriesDataItemTypeMap",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},p=void 0,l={unversionedId:"api/interfaces/SeriesDataItemTypeMap",id:"api/interfaces/SeriesDataItemTypeMap",title:"Interface: SeriesDataItemTypeMap<HorzScaleItem>",description:"Represents the type of data that a series contains.",source:"@site/docs/api/interfaces/SeriesDataItemTypeMap.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/SeriesDataItemTypeMap",permalink:"/lightweight-charts/docs/next/api/interfaces/SeriesDataItemTypeMap",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"SeriesDataItemTypeMap",title:"Interface: SeriesDataItemTypeMap<HorzScaleItem>",sidebar_label:"SeriesDataItemTypeMap",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},s={},o=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Properties",id:"properties",level:2},{value:"Bar",id:"bar",level:3},{value:"Candlestick",id:"candlestick",level:3},{value:"Area",id:"area",level:3},{value:"Baseline",id:"baseline",level:3},{value:"Line",id:"line",level:3},{value:"Histogram",id:"histogram",level:3},{value:"Custom",id:"custom",level:3}],c={toc:o},g="wrapper";function y(e){let{components:a,...t}=e;return(0,n.yg)(g,(0,r.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Represents the type of data that a series contains."),(0,n.yg)("p",null,"For example a bar series contains ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/BarData"},"BarData")," or ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/WhitespaceData"},"WhitespaceData"),"."),(0,n.yg)("h2",{id:"type-parameters"},"Type parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Name"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("inlineCode",{parentName:"td"},"HorzScaleItem")),(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("a",{parentName:"td",href:"/lightweight-charts/docs/next/api/#time"},(0,n.yg)("inlineCode",{parentName:"a"},"Time")))))),(0,n.yg)("h2",{id:"properties"},"Properties"),(0,n.yg)("h3",{id:"bar"},"Bar"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"Bar"),": ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/BarData"},(0,n.yg)("inlineCode",{parentName:"a"},"BarData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"),(0,n.yg)("p",null,"The types of bar series data."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"candlestick"},"Candlestick"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"Candlestick"),": ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/CandlestickData"},(0,n.yg)("inlineCode",{parentName:"a"},"CandlestickData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"),(0,n.yg)("p",null,"The types of candlestick series data."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"area"},"Area"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"Area"),": ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/AreaData"},(0,n.yg)("inlineCode",{parentName:"a"},"AreaData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"),(0,n.yg)("p",null,"The types of area series data."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"baseline"},"Baseline"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"Baseline"),": ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/BaselineData"},(0,n.yg)("inlineCode",{parentName:"a"},"BaselineData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"),(0,n.yg)("p",null,"The types of baseline series data."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"line"},"Line"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"Line"),": ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LineData"},(0,n.yg)("inlineCode",{parentName:"a"},"LineData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"),(0,n.yg)("p",null,"The types of line series data."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"histogram"},"Histogram"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"Histogram"),": ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/WhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"WhitespaceData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/HistogramData"},(0,n.yg)("inlineCode",{parentName:"a"},"HistogramData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"),(0,n.yg)("p",null,"The types of histogram series data."),(0,n.yg)("hr",null),(0,n.yg)("h3",{id:"custom"},"Custom"),(0,n.yg)("p",null,"\u2022 ",(0,n.yg)("strong",{parentName:"p"},"Custom"),": ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/CustomData"},(0,n.yg)("inlineCode",{parentName:"a"},"CustomData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"," ","|"," ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/CustomSeriesWhitespaceData"},(0,n.yg)("inlineCode",{parentName:"a"},"CustomSeriesWhitespaceData")),"<",(0,n.yg)("inlineCode",{parentName:"p"},"HorzScaleItem"),">"),(0,n.yg)("p",null,"The base types of an custom series data."))}y.isMDXComponent=!0}}]);