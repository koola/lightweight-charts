"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9997],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=o(a),c=n,h=m["".concat(s,".").concat(c)]||m[c]||k[c]||i;return a?r.createElement(h,l(l({ref:t},d),{},{components:a})):r.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:n,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},91659:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const i={id:"ISeriesApi",title:"Interface: ISeriesApi<TSeriesType>",sidebar_label:"ISeriesApi",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},l=void 0,p={unversionedId:"api/interfaces/ISeriesApi",id:"version-4.0/api/interfaces/ISeriesApi",title:"Interface: ISeriesApi<TSeriesType>",description:"Represents the interface for interacting with series.",source:"@site/versioned_docs/version-4.0/api/interfaces/ISeriesApi.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/ISeriesApi",permalink:"/lightweight-charts/docs/4.0/api/interfaces/ISeriesApi",draft:!1,editUrl:null,tags:[],version:"4.0",sidebarPosition:0,frontMatter:{id:"ISeriesApi",title:"Interface: ISeriesApi<TSeriesType>",sidebar_label:"ISeriesApi",sidebar_position:0,custom_edit_url:null,pagination_next:null,pagination_prev:null},sidebar:"apiSidebar"},s={},o=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Methods",id:"methods",level:2},{value:"priceFormatter",id:"priceformatter",level:3},{value:"Returns",id:"returns",level:4},{value:"priceToCoordinate",id:"pricetocoordinate",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"coordinateToPrice",id:"coordinatetoprice",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"barsInLogicalRange",id:"barsinlogicalrange",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"applyOptions",id:"applyoptions",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"options",id:"options",level:3},{value:"Returns",id:"returns-5",level:4},{value:"priceScale",id:"pricescale",level:3},{value:"Returns",id:"returns-6",level:4},{value:"setData",id:"setdata",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-7",level:4},{value:"update",id:"update",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-8",level:4},{value:"dataByIndex",id:"databyindex",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-9",level:4},{value:"setMarkers",id:"setmarkers",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-10",level:4},{value:"markers",id:"markers",level:3},{value:"Returns",id:"returns-11",level:4},{value:"createPriceLine",id:"createpriceline",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-12",level:4},{value:"removePriceLine",id:"removepriceline",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-13",level:4},{value:"seriesType",id:"seriestype",level:3},{value:"Returns",id:"returns-14",level:4}],d={toc:o},m="wrapper";function k(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Represents the interface for interacting with series."),(0,n.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"TSeriesType")),(0,n.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,n.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/4.0/api/#seriestype"},(0,n.kt)("inlineCode",{parentName:"a"},"SeriesType")))))),(0,n.kt)("h2",{id:"methods"},"Methods"),(0,n.kt)("h3",{id:"priceformatter"},"priceFormatter"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"priceFormatter"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/IPriceFormatter"},(0,n.kt)("inlineCode",{parentName:"a"},"IPriceFormatter"))),(0,n.kt)("p",null,"Returns current price formatter"),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/IPriceFormatter"},(0,n.kt)("inlineCode",{parentName:"a"},"IPriceFormatter"))),(0,n.kt)("p",null,"Interface to the price formatter object that can be used to format prices in the same way as the chart does"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"pricetocoordinate"},"priceToCoordinate"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"priceToCoordinate"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"price"),"): ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#coordinate"},(0,n.kt)("inlineCode",{parentName:"a"},"Coordinate"))),(0,n.kt)("p",null,"Converts specified series price to pixel coordinate according to the series price scale"),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"price")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input price to be converted")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#coordinate"},(0,n.kt)("inlineCode",{parentName:"a"},"Coordinate"))),(0,n.kt)("p",null,"Pixel coordinate of the price level on the chart"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"coordinatetoprice"},"coordinateToPrice"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"coordinateToPrice"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"coordinate"),"): ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#barprice"},(0,n.kt)("inlineCode",{parentName:"a"},"BarPrice"))),(0,n.kt)("p",null,"Converts specified coordinate to price value according to the series price scale"),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"coordinate")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Input coordinate to be converted")))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#barprice"},(0,n.kt)("inlineCode",{parentName:"a"},"BarPrice"))),(0,n.kt)("p",null,"Price value of the coordinate on the chart"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"barsinlogicalrange"},"barsInLogicalRange"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"barsInLogicalRange"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"range"),"): ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/BarsInfo"},(0,n.kt)("inlineCode",{parentName:"a"},"BarsInfo"))),(0,n.kt)("p",null,"Returns bars information for the series in the provided ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/time-scale#logical-range"},"logical range")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"null"),", if no series data has been found in the requested range.\nThis method can be used, for instance, to implement downloading historical data while scrolling to prevent a user from seeing empty space."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("p",null,"Getting bars info for current visible range"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const barsInfo = series.barsInLogicalRange(chart.timeScale().getVisibleLogicalRange());\nconsole.log(barsInfo);\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("p",null,"Implementing downloading historical data while scrolling"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"function onVisibleLogicalRangeChanged(newVisibleLogicalRange) {\n    const barsInfo = series.barsInLogicalRange(newVisibleLogicalRange);\n    // if there less than 50 bars to the left of the visible area\n    if (barsInfo !== null && barsInfo.barsBefore < 50) {\n        // try to load additional historical data and prepend it to the series data\n    }\n}\n\nchart.timeScale().subscribeVisibleLogicalRangeChange(onVisibleLogicalRangeChanged);\n")),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"range")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/4.0/api/interfaces/Range"},(0,n.kt)("inlineCode",{parentName:"a"},"Range")),"<",(0,n.kt)("inlineCode",{parentName:"td"},"number"),">"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The ",(0,n.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/4.0/time-scale#logical-range"},"logical range")," to retrieve info for.")))),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/BarsInfo"},(0,n.kt)("inlineCode",{parentName:"a"},"BarsInfo"))),(0,n.kt)("p",null,"The bars info for the given logical range."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"applyoptions"},"applyOptions"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"applyOptions"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Applies new options to the existing series\nYou can set options initially when you create series or use the ",(0,n.kt)("inlineCode",{parentName:"p"},"applyOptions")," method of the series to change the existing options.\nNote that you can only pass options you want to change."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesPartialOptionsMap"},(0,n.kt)("inlineCode",{parentName:"a"},"SeriesPartialOptionsMap")),"[",(0,n.kt)("inlineCode",{parentName:"td"},"TSeriesType"),"]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any subset of options.")))),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"options"},"options"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"options"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesOptionsMap"},(0,n.kt)("inlineCode",{parentName:"a"},"SeriesOptionsMap")),"[",(0,n.kt)("inlineCode",{parentName:"p"},"TSeriesType"),"]",">"),(0,n.kt)("p",null,"Returns currently applied options"),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesOptionsMap"},(0,n.kt)("inlineCode",{parentName:"a"},"SeriesOptionsMap")),"[",(0,n.kt)("inlineCode",{parentName:"p"},"TSeriesType"),"]",">"),(0,n.kt)("p",null,"Full set of currently applied options, including defaults"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"pricescale"},"priceScale"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"priceScale"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/IPriceScaleApi"},(0,n.kt)("inlineCode",{parentName:"a"},"IPriceScaleApi"))),(0,n.kt)("p",null,"Returns interface of the price scale the series is currently attached"),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/IPriceScaleApi"},(0,n.kt)("inlineCode",{parentName:"a"},"IPriceScaleApi"))),(0,n.kt)("p",null,"IPriceScaleApi object to control the price scale"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setdata"},"setData"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"setData"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Sets or replaces series data."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("p",null,"Setting data to a line series"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"lineSeries.setData([\n    { time: '2018-12-12', value: 24.11 },\n    { time: '2018-12-13', value: 31.74 },\n]);\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("p",null,"Setting data to a bars (or candlestick) series"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"barSeries.setData([\n    { time: '2018-12-19', open: 141.77, high: 170.39, low: 120.25, close: 145.72 },\n    { time: '2018-12-20', open: 145.72, high: 147.99, low: 100.11, close: 108.19 },\n]);\n")),(0,n.kt)("h4",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesDataItemTypeMap"},(0,n.kt)("inlineCode",{parentName:"a"},"SeriesDataItemTypeMap")),"[",(0,n.kt)("inlineCode",{parentName:"td"},"TSeriesType"),"][]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ordered (earlier time point goes first) array of data items. Old data is fully replaced with the new one.")))),(0,n.kt)("h4",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"update"},"update"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"update"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"bar"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Adds new data item to the existing set (or updates the latest item if times of the passed/latest items are equal)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("p",null,"Updating line series data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"lineSeries.update({\n    time: '2018-12-12',\n    value: 24.11,\n});\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("p",null,"Updating bar (or candlestick) series data"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"barSeries.update({\n    time: '2018-12-19',\n    open: 141.77,\n    high: 170.39,\n    low: 120.25,\n    close: 145.72,\n});\n")),(0,n.kt)("h4",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"bar")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesDataItemTypeMap"},(0,n.kt)("inlineCode",{parentName:"a"},"SeriesDataItemTypeMap")),"[",(0,n.kt)("inlineCode",{parentName:"td"},"TSeriesType"),"]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A single data item to be added. Time of the new item must be greater or equal to the latest existing time point. If the new item's time is equal to the last existing item's time, then the existing item is replaced with the new one.")))),(0,n.kt)("h4",{id:"returns-8"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"databyindex"},"dataByIndex"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"dataByIndex"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"logicalIndex"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"mismatchDirection?"),"): ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesDataItemTypeMap"},(0,n.kt)("inlineCode",{parentName:"a"},"SeriesDataItemTypeMap")),"[",(0,n.kt)("inlineCode",{parentName:"p"},"TSeriesType"),"]"),(0,n.kt)("p",null,"Returns a bar data by provided logical index."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const originalData = series.dataByIndex(10, LightweightCharts.MismatchDirection.NearestLeft);\n")),(0,n.kt)("h4",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"logicalIndex")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Logical index")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"mismatchDirection?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/4.0/api/enums/MismatchDirection"},(0,n.kt)("inlineCode",{parentName:"a"},"MismatchDirection"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Search direction if no data found at provided logical index.")))),(0,n.kt)("h4",{id:"returns-9"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesDataItemTypeMap"},(0,n.kt)("inlineCode",{parentName:"a"},"SeriesDataItemTypeMap")),"[",(0,n.kt)("inlineCode",{parentName:"p"},"TSeriesType"),"]"),(0,n.kt)("p",null,"Original data item provided via setData or update methods."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setmarkers"},"setMarkers"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"setMarkers"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Allows to set/replace all existing series markers with new ones."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"series.setMarkers([\n    {\n        time: '2019-04-09',\n        position: 'aboveBar',\n        color: 'black',\n        shape: 'arrowDown',\n    },\n    {\n        time: '2019-05-31',\n        position: 'belowBar',\n        color: 'red',\n        shape: 'arrowUp',\n        id: 'id3',\n    },\n    {\n        time: '2019-05-31',\n        position: 'belowBar',\n        color: 'orange',\n        shape: 'arrowUp',\n        id: 'id4',\n        text: 'example',\n        size: 2,\n    },\n]);\n\nchart.subscribeCrosshairMove(param => {\n    console.log(param.hoveredObjectId);\n});\n\nchart.subscribeClick(param => {\n    console.log(param.hoveredObjectId);\n});\n")),(0,n.kt)("h4",{id:"parameters-7"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesMarker"},(0,n.kt)("inlineCode",{parentName:"a"},"SeriesMarker")),"<",(0,n.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/4.0/api/#time"},(0,n.kt)("inlineCode",{parentName:"a"},"Time")),">","[]"),(0,n.kt)("td",{parentName:"tr",align:"left"},"An array of series markers. This array should be sorted by time. Several markers with same time are allowed.")))),(0,n.kt)("h4",{id:"returns-10"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"markers"},"markers"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"markers"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesMarker"},(0,n.kt)("inlineCode",{parentName:"a"},"SeriesMarker")),"<",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#time"},(0,n.kt)("inlineCode",{parentName:"a"},"Time")),">","[]"),(0,n.kt)("p",null,"Returns an array of series markers."),(0,n.kt)("h4",{id:"returns-11"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/SeriesMarker"},(0,n.kt)("inlineCode",{parentName:"a"},"SeriesMarker")),"<",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/#time"},(0,n.kt)("inlineCode",{parentName:"a"},"Time")),">","[]"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"createpriceline"},"createPriceLine"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"createPriceLine"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/IPriceLine"},(0,n.kt)("inlineCode",{parentName:"a"},"IPriceLine"))),(0,n.kt)("p",null,"Creates a new price line"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const priceLine = series.createPriceLine({\n    price: 80.0,\n    color: 'green',\n    lineWidth: 2,\n    lineStyle: LightweightCharts.LineStyle.Dotted,\n    axisLabelVisible: true,\n    title: 'P/L 500',\n});\n")),(0,n.kt)("h4",{id:"parameters-8"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/4.0/api/#createpricelineoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"CreatePriceLineOptions"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"Any subset of options, however ",(0,n.kt)("inlineCode",{parentName:"td"},"price")," is required.")))),(0,n.kt)("h4",{id:"returns-12"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/lightweight-charts/docs/4.0/api/interfaces/IPriceLine"},(0,n.kt)("inlineCode",{parentName:"a"},"IPriceLine"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"removepriceline"},"removePriceLine"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"removePriceLine"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"line"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Removes the price line that was created before."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"const priceLine = series.createPriceLine({ price: 80.0 });\nseries.removePriceLine(priceLine);\n")),(0,n.kt)("h4",{id:"parameters-9"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"line")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/lightweight-charts/docs/4.0/api/interfaces/IPriceLine"},(0,n.kt)("inlineCode",{parentName:"a"},"IPriceLine"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"A line to remove.")))),(0,n.kt)("h4",{id:"returns-13"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"seriestype"},"seriesType"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"seriesType"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"TSeriesType")),(0,n.kt)("p",null,"Return current series type."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},'const lineSeries = chart.addLineSeries();\nconsole.log(lineSeries.seriesType()); // "Line"\n\nconst candlestickSeries = chart.addCandlestickSeries();\nconsole.log(candlestickSeries.seriesType()); // "Candlestick"\n')),(0,n.kt)("h4",{id:"returns-14"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"TSeriesType")),(0,n.kt)("p",null,"Type of the series."))}k.isMDXComponent=!0}}]);