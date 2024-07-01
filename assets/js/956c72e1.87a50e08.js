"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1989],{15680:(e,a,r)=>{r.d(a,{xA:()=>p,yg:()=>h});var t=r(96540);function n(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function i(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?i(Object(r),!0).forEach((function(a){n(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function s(e,a){if(null==e)return{};var r,t,n=function(e,a){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=t.createContext({}),c=function(e){var a=t.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},p=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),g=n,h=d["".concat(l,".").concat(g)]||d[g]||m[g]||i;return r?t.createElement(h,o(o({ref:a},p),{},{components:r})):t.createElement(h,o({ref:a},p))}));function h(e,a){var r=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},52733:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=r(58168),n=(r(96540),r(15680));const i={},o="From v3 to v4",s={unversionedId:"migrations/from-v3-to-v4",id:"migrations/from-v3-to-v4",title:"From v3 to v4",description:"In this document you can find the migration guide from the previous version v3 to v4.",source:"@site/docs/migrations/from-v3-to-v4.md",sourceDirName:"migrations",slug:"/migrations/from-v3-to-v4",permalink:"/lightweight-charts/docs/next/migrations/from-v3-to-v4",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"From v2 to v3",permalink:"/lightweight-charts/docs/next/migrations/from-v2-to-v3"},next:{title:"iOS wrapper",permalink:"/lightweight-charts/docs/next/ios"}},l={},c=[{value:"Exported enum <code>LasPriceAnimationMode</code> has been removed",id:"exported-enum-laspriceanimationmode-has-been-removed",level:2},{value:"<code>scaleMargins</code> option has been removed from series options",id:"scalemargins-option-has-been-removed-from-series-options",level:2},{value:"<code>backgroundColor</code> from <code>layout</code> options has been removed",id:"backgroundcolor-from-layout-options-has-been-removed",level:2},{value:"<code>overlay</code> property of series options has been removed",id:"overlay-property-of-series-options-has-been-removed",level:2},{value:"<code>priceScale</code> option has been removed",id:"pricescale-option-has-been-removed",level:2},{value:"<code>priceScale()</code> method of chart API now requires to provide price scale id",id:"pricescale-method-of-chart-api-now-requires-to-provide-price-scale-id",level:2},{value:"<code>drawTicks</code> from <code>leftPriceScale</code> and <code>rightPriceScale</code> options has been renamed to <code>ticksVisible</code>",id:"drawticks-from-leftpricescale-and-rightpricescale-options-has-been-renamed-to-ticksvisible",level:2},{value:"The type of outbound time values has been changed",id:"the-type-of-outbound-time-values-has-been-changed",level:2},{value:"<code>seriesPrices</code> property from <code>MouseEventParams</code> has been removed",id:"seriesprices-property-from-mouseeventparams-has-been-removed",level:2},{value:"<code>MouseEventParams</code> field <code>hoveredMarkerId</code> was renamed to <code>hoveredObjectId</code>",id:"mouseeventparams-field-hoveredmarkerid-was-renamed-to-hoveredobjectid",level:2}],p={toc:c},d="wrapper";function m(e){let{components:a,...r}=e;return(0,n.yg)(d,(0,t.A)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"from-v3-to-v4"},"From v3 to v4"),(0,n.yg)("p",null,"In this document you can find the migration guide from the previous version v3 to v4."),(0,n.yg)("h2",{id:"exported-enum-laspriceanimationmode-has-been-removed"},"Exported enum ",(0,n.yg)("inlineCode",{parentName:"h2"},"LasPriceAnimationMode")," has been removed"),(0,n.yg)("p",null,"Please use ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/enums/LastPriceAnimationMode"},(0,n.yg)("inlineCode",{parentName:"a"},"LastPriceAnimationMode"))," instead."),(0,n.yg)("h2",{id:"scalemargins-option-has-been-removed-from-series-options"},(0,n.yg)("inlineCode",{parentName:"h2"},"scaleMargins")," option has been removed from series options"),(0,n.yg)("p",null,"Previously, you could do something like the following:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"const series = chart.addLineSeries({\n    scaleMargins: { /* options here */},\n});\n")),(0,n.yg)("p",null,"And ",(0,n.yg)("inlineCode",{parentName:"p"},"scaleMargins")," option was applied to series' price scale as ",(0,n.yg)("inlineCode",{parentName:"p"},"scaleMargins")," option."),(0,n.yg)("p",null,"Since v4 this option won't be applied to the price scale and will be just ignored (if you're using TypeScript you will get a compilation error)."),(0,n.yg)("p",null,"To fix this, you need to apply these options to series' price scale:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"const series = chart.addLineSeries();\n\nseries.priceScale().applyOptions({\n    scaleMargins: { /* options here */},\n});\n")),(0,n.yg)("h2",{id:"backgroundcolor-from-layout-options-has-been-removed"},(0,n.yg)("inlineCode",{parentName:"h2"},"backgroundColor")," from ",(0,n.yg)("inlineCode",{parentName:"h2"},"layout")," options has been removed"),(0,n.yg)("p",null,"If you want to have solid background color you need to use ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LayoutOptions#background"},(0,n.yg)("inlineCode",{parentName:"a"},"background"))," property instead, e.g. instead of:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"const chart = createChart({\n    layout: {\n        backgroundColor: 'red',\n    },\n});\n")),(0,n.yg)("p",null,"use"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"const chart = createChart({\n    layout: {\n        background: {\n            type: ColorType.Solid,\n            color: 'red',\n        },\n    },\n});\n")),(0,n.yg)("h2",{id:"overlay-property-of-series-options-has-been-removed"},(0,n.yg)("inlineCode",{parentName:"h2"},"overlay")," property of series options has been removed"),(0,n.yg)("p",null,"Please follow ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/migrations/from-v2-to-v3#creating-overlay"},"the guide for migrating from v2 to v3")," where this option was deprecated."),(0,n.yg)("h2",{id:"pricescale-option-has-been-removed"},(0,n.yg)("inlineCode",{parentName:"h2"},"priceScale")," option has been removed"),(0,n.yg)("p",null,"Please follow ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/migrations/from-v2-to-v3#two-price-scales"},"the guide for migrating from v2 to v3"),"."),(0,n.yg)("h2",{id:"pricescale-method-of-chart-api-now-requires-to-provide-price-scale-id"},(0,n.yg)("inlineCode",{parentName:"h2"},"priceScale()")," method of chart API now requires to provide price scale id"),(0,n.yg)("p",null,"Before v4 you could write the following code:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"const priceScale = chart.priceScale();\n")),(0,n.yg)("p",null,"And in ",(0,n.yg)("inlineCode",{parentName:"p"},"priceScale")," you had a right price scale if it is visible and a left price scale otherwise."),(0,n.yg)("p",null,"Since v4 you have to provide an ID of price scale explicitly, e.g. if you want to get a right price scale you need to provide ",(0,n.yg)("inlineCode",{parentName:"p"},"'right'"),":"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"const rightPriceScale = chart.priceScale('right');\nconst leftPriceScale = chart.priceScale('left');\n")),(0,n.yg)("h2",{id:"drawticks-from-leftpricescale-and-rightpricescale-options-has-been-renamed-to-ticksvisible"},(0,n.yg)("inlineCode",{parentName:"h2"},"drawTicks")," from ",(0,n.yg)("inlineCode",{parentName:"h2"},"leftPriceScale")," and ",(0,n.yg)("inlineCode",{parentName:"h2"},"rightPriceScale")," options has been renamed to ",(0,n.yg)("inlineCode",{parentName:"h2"},"ticksVisible")),(0,n.yg)("p",null,"Since v4 you have to use ",(0,n.yg)("inlineCode",{parentName:"p"},"ticksVisible")," instead of ",(0,n.yg)("inlineCode",{parentName:"p"},"drawTicks"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"const chart = createChart({\n    leftPriceScale: {\n        ticksVisible: false,\n    },\n    rightPriceScale: {\n        ticksVisible: false,\n    },\n});\n")),(0,n.yg)("p",null,"Also this option is off by default."),(0,n.yg)("h2",{id:"the-type-of-outbound-time-values-has-been-changed"},"The type of outbound time values has been changed"),(0,n.yg)("p",null,"Affected API:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/IChartApi#subscribeclick"},(0,n.yg)("inlineCode",{parentName:"a"},"IChartApi.subscribeClick"))," (via ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/MouseEventParams#time"},(0,n.yg)("inlineCode",{parentName:"a"},"MouseEventParams.time")),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/IChartApi#subscribecrosshairmove"},(0,n.yg)("inlineCode",{parentName:"a"},"IChartApi.subscribeCrosshairMove"))," (via ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/MouseEventParams#time"},(0,n.yg)("inlineCode",{parentName:"a"},"MouseEventParams.time")),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/LocalizationOptions#timeformatter"},(0,n.yg)("inlineCode",{parentName:"a"},"LocalizationOptions.timeFormatter"))," (via argument of ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/#timeformatterfn"},(0,n.yg)("inlineCode",{parentName:"a"},"TimeFormatterFn")),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/TimeScaleOptions#tickmarkformatter"},(0,n.yg)("inlineCode",{parentName:"a"},"TimeScaleOptions.tickMarkFormatter"))," (via argument of ",(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/#tickmarkformatter"},(0,n.yg)("inlineCode",{parentName:"a"},"TickMarkFormatter")),")")),(0,n.yg)("p",null,"Previously the type of an inbound time (a values you provide to the library, e.g. in ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi#setdata"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesApi.setData")),") was different from an outbound one (a values the library provides to your code, e.g. an argument of ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/LocalizationOptions#timeformatter"},(0,n.yg)("inlineCode",{parentName:"a"},"LocalizationOptions.timeFormatter")),").\nSo the difference between types was that outbound time couldn't be a business day string."),(0,n.yg)("p",null,"Since v4 we improved our API in this matter and now the library will return exactly the same values back for all time-related properties."),(0,n.yg)("p",null,"Thus, if you provide a string to your series in ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/ISeriesApi#setdata"},(0,n.yg)("inlineCode",{parentName:"a"},"ISeriesApi.setData")),", you'll receive exactly the same value back:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"series.setData([\n    { time: '2001-01-01', value: 1 },\n]);\n\nchart.applyOptions({\n    localization: {\n        timeFormatter: time => time, // will be '2001-01-01' for the bar above\n    },\n    timeScale: {\n        tickMarkFormatter: time => time, // will be '2001-01-01' for the bar above\n    },\n});\n\nchart.subscribeCrosshairMove(param => {\n    console.log(param.time); // will be '2001-01-01' if you hover the bar above\n});\n\nchart.subscribeClick(param => {\n    console.log(param.time); // will be '2001-01-01' if you click on the bar above\n});\n")),(0,n.yg)("p",null,"Handling this breaking change depends on your needs and your handlers, but generally speaking you need to convert provided time to a desired format manually if it is required.\nFor example, you could use provided helpers to check the type of a time:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"import {\n    createChart,\n    isUTCTimestamp,\n    isBusinessDay,\n} from 'lightweight-charts';\n\nconst chart = createChart(document.body);\n\nchart.subscribeClick(param => {\n    if (param.time === undefined) {\n        // the time is undefined, i.e. there is no any data point where a time could be received from\n        return;\n    }\n\n    if (isUTCTimestamp(param.time)) {\n        // param.time is UTCTimestamp\n    } else if (isBusinessDay(param.time)) {\n        // param.time is a BusinessDay object\n    } else {\n        // param.time is a business day string in ISO format, e.g. `'2010-01-01'`\n    }\n});\n")),(0,n.yg)("h2",{id:"seriesprices-property-from-mouseeventparams-has-been-removed"},(0,n.yg)("inlineCode",{parentName:"h2"},"seriesPrices")," property from ",(0,n.yg)("inlineCode",{parentName:"h2"},"MouseEventParams")," has been removed"),(0,n.yg)("p",null,"Affected API:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/IChartApi#subscribeclick"},(0,n.yg)("inlineCode",{parentName:"a"},"IChartApi.subscribeClick"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/lightweight-charts/docs/next/api/interfaces/IChartApi#subscribecrosshairmove"},(0,n.yg)("inlineCode",{parentName:"a"},"IChartApi.subscribeCrosshairMove")))),(0,n.yg)("p",null,"The property ",(0,n.yg)("inlineCode",{parentName:"p"},"seriesPrices")," of ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/MouseEventParams"},(0,n.yg)("inlineCode",{parentName:"a"},"MouseEventParams"))," has been removed."),(0,n.yg)("p",null,"Instead, you can use ",(0,n.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/next/api/interfaces/MouseEventParams#seriesdata"},(0,n.yg)("inlineCode",{parentName:"a"},"MouseEventParams.seriesData"))," - it is pretty similar to the old ",(0,n.yg)("inlineCode",{parentName:"p"},"seriesPrices"),", but it contains series' data items instead of just prices:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"lineSeries.setData([{ time: '2001-01-01', value: 1 }]);\nbarSeries.setData([{ time: '2001-01-01', open: 5, high: 10, low: 1, close: 7 }]);\n\nchart.subscribeCrosshairMove(param => {\n    console.log(param.seriesData.get(lineSeries)); // { time: '2001-01-01', value: 1 } or undefined\n    console.log(param.seriesData.get(barSeries)); // { time: '2001-01-01', open: 5, high: 10, low: 1, close: 7 } or undefined\n});\n")),(0,n.yg)("h2",{id:"mouseeventparams-field-hoveredmarkerid-was-renamed-to-hoveredobjectid"},(0,n.yg)("inlineCode",{parentName:"h2"},"MouseEventParams")," field ",(0,n.yg)("inlineCode",{parentName:"h2"},"hoveredMarkerId")," was renamed to ",(0,n.yg)("inlineCode",{parentName:"h2"},"hoveredObjectId")),(0,n.yg)("p",null,"Since v4 you have to use ",(0,n.yg)("inlineCode",{parentName:"p"},"hoveredObjectId")," instead of ",(0,n.yg)("inlineCode",{parentName:"p"},"hoveredMarkerId"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-js"},"chart.subscribeCrosshairMove(param => {\n    console.log(param.hoveredObjectId);\n});\n\nchart.subscribeClick(param => {\n    console.log(param.hoveredObjectId);\n});\n")))}m.isMDXComponent=!0}}]);