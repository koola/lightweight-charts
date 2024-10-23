"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67490,18401],{19490:(e,t,n)=>{n.d(t,{Ay:()=>o});var a=n(58168),i=(n(96540),n(15680));const l={toc:[]},r="wrapper";function o(e){let{components:t,...n}=e;return(0,i.yg)(r,(0,a.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("details",null,(0,i.yg)("summary",null,"How to use the code sample"),(0,i.yg)("strong",null,"The code presented below requires:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"That ",(0,i.yg)("inlineCode",{parentName:"li"},"createChart")," has already been imported. See ",(0,i.yg)("a",{parentName:"li",href:"/docs#creating-a-chart"},"Getting Started")," for more information,"),(0,i.yg)("li",{parentName:"ul"},"and that there is an html div element on the page with an ",(0,i.yg)("inlineCode",{parentName:"li"},"id")," of ",(0,i.yg)("inlineCode",{parentName:"li"},"container"),".")),(0,i.yg)("p",null,"Here is an example skeleton setup: ",(0,i.yg)("a",{parentName:"p",href:"https://codesandbox.io/s/lightweight-charts-skeleton-n67pm6"},"Code Sandbox"),".\nYou can paste the provided code below the ",(0,i.yg)("inlineCode",{parentName:"p"},"// REPLACE EVERYTHING BELOW HERE")," comment."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"Some code may be hidden to improve readability. Toggle the checkbox above the code block to reveal all the code."))))}o.isMDXComponent=!0},22267:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>h,frontMatter:()=>c,metadata:()=>m,toc:()=>v});var a=n(58168),i=(n(96540),n(15680)),l=n(19490),r=n(5546);const o="// remove-start\n// Lightweight Charts\u2122 Example: Inverted Price Scale\n// https://tradingview.github.io/lightweight-charts/tutorials/how_to/inverted-price-scale\n\n// remove-end\nconst chartOptions = {\n\tlayout: {\n\t\ttextColor: CHART_TEXT_COLOR,\n\t\tbackground: { type: 'solid', color: CHART_BACKGROUND_COLOR },\n\t},\n};\n// remove-line\n/** @type {import('lightweight-charts').IChartApi} */\nconst chart = createChart(document.getElementById('container'), chartOptions);\n\nchart.applyOptions({\n\trightPriceScale: {\n\t\tscaleMargins: {\n\t\t\ttop: 0.1,\n\t\t\tbottom: 0.1,\n\t\t},\n\t\t// highlight-start\n\t\tinvertScale: true,\n\t\t// highlight-end\n\t},\n});\n\nconst lineSeries = chart.addLineSeries({ color: LINE_LINE_COLOR });\n\nconst data = [\n\t{ time: '2016-07-18', value: 661.47 },\n\t// hide-start\n\t{ time: '2016-07-25', value: 623.83 },\n\t{ time: '2016-08-01', value: 592.47 },\n\t{ time: '2016-08-08', value: 568.76 },\n\t{ time: '2016-08-15', value: 577.55 },\n\t{ time: '2016-08-22', value: 573.20 },\n\t{ time: '2016-08-29', value: 603.72 },\n\t{ time: '2016-09-05', value: 606.32 },\n\t{ time: '2016-09-12', value: 608.00 },\n\t{ time: '2016-09-19', value: 598.98 },\n\t{ time: '2016-09-26', value: 608.60 },\n\t{ time: '2016-10-03', value: 613.06 },\n\t{ time: '2016-10-10', value: 638.97 },\n\t{ time: '2016-10-17', value: 648.74 },\n\t{ time: '2016-10-24', value: 697.23 },\n\t{ time: '2016-10-31', value: 709.93 },\n\t{ time: '2016-11-07', value: 700.38 },\n\t{ time: '2016-11-14', value: 727.09 },\n\t{ time: '2016-11-21', value: 727.32 },\n\t{ time: '2016-11-28', value: 762.00 },\n\t{ time: '2016-12-05', value: 768.97 },\n\t{ time: '2016-12-12', value: 788.67 },\n\t{ time: '2016-12-19', value: 890.67 },\n\t{ time: '2016-12-26', value: 997.75 },\n\t{ time: '2017-01-02', value: 909.75 },\n\t{ time: '2017-01-09', value: 821.86 },\n\t{ time: '2017-01-16', value: 923.76 },\n\t{ time: '2017-01-23', value: 912.01 },\n\t{ time: '2017-01-30', value: 1011.07 },\n\t{ time: '2017-02-06', value: 1000.73 },\n\t{ time: '2017-02-13', value: 1051.80 },\n\t{ time: '2017-02-20', value: 1179.05 },\n\t{ time: '2017-02-27', value: 1273.00 },\n\t{ time: '2017-03-06', value: 1226.62 },\n\t{ time: '2017-03-13', value: 1017.97 },\n\t{ time: '2017-03-20', value: 960.00 },\n\t{ time: '2017-03-27', value: 1078.01 },\n\t{ time: '2017-04-03', value: 1206.20 },\n\t{ time: '2017-04-10', value: 1162.31 },\n\t{ time: '2017-04-17', value: 1241.99 },\n\t{ time: '2017-04-24', value: 1350.21 },\n\t{ time: '2017-05-01', value: 1554.01 },\n\t{ time: '2017-05-08', value: 1784.00 },\n\t{ time: '2017-05-15', value: 2017.55 },\n\t{ time: '2017-05-22', value: 2178.81 },\n\t{ time: '2017-05-29', value: 2530.27 },\n\t{ time: '2017-06-05', value: 2954.22 },\n\t{ time: '2017-06-12', value: 2516.98 },\n\t{ time: '2017-06-19', value: 2502.03 },\n\t{ time: '2017-06-26', value: 2504.37 },\n\t{ time: '2017-07-03', value: 2502.28 },\n\t{ time: '2017-07-10', value: 1917.63 },\n\t{ time: '2017-07-17', value: 2749.02 },\n\t{ time: '2017-07-24', value: 2742.37 },\n\t{ time: '2017-07-31', value: 3222.75 },\n\t{ time: '2017-08-07', value: 4053.87 },\n\t{ time: '2017-08-14', value: 4058.68 },\n\t{ time: '2017-08-21', value: 4337.68 },\n\t{ time: '2017-08-28', value: 4606.26 },\n\t{ time: '2017-09-04', value: 4226.22 },\n\t{ time: '2017-09-11', value: 3662.99 },\n\t{ time: '2017-09-18', value: 3664.22 },\n\t{ time: '2017-09-25', value: 4377.22 },\n\t{ time: '2017-10-02', value: 4597.98 },\n\t{ time: '2017-10-09', value: 5679.70 },\n\t{ time: '2017-10-16', value: 5969.00 },\n\t{ time: '2017-10-23', value: 6137.37 },\n\t{ time: '2017-10-30', value: 7372.72 },\n\t{ time: '2017-11-06', value: 5870.37 },\n\t{ time: '2017-11-13', value: 8016.58 },\n\t{ time: '2017-11-20', value: 9271.06 },\n\t{ time: '2017-11-27', value: 11250.00 },\n\t{ time: '2017-12-04', value: 14691.00 },\n\t{ time: '2017-12-11', value: 18953.00 },\n\t{ time: '2017-12-18', value: 14157.87 },\n\t{ time: '2017-12-25', value: 13880.00 },\n\t{ time: '2018-01-01', value: 16124.02 },\n\t{ time: '2018-01-08', value: 13647.99 },\n\t{ time: '2018-01-15', value: 11558.87 },\n\t{ time: '2018-01-22', value: 11685.58 },\n\t{ time: '2018-01-29', value: 8191.00 },\n\t{ time: '2018-02-05', value: 8067.00 },\n\t{ time: '2018-02-12', value: 10421.06 },\n\t{ time: '2018-02-19', value: 9590.04 },\n\t{ time: '2018-02-26', value: 11463.27 },\n\t{ time: '2018-03-05', value: 9535.04 },\n\t{ time: '2018-03-12', value: 8188.24 },\n\t{ time: '2018-03-19', value: 8453.90 },\n\t{ time: '2018-03-26', value: 6813.52 },\n\t{ time: '2018-04-02', value: 7027.26 },\n\t{ time: '2018-04-09', value: 8354.22 },\n\t{ time: '2018-04-16', value: 8789.96 },\n\t{ time: '2018-04-23', value: 9393.99 },\n\t{ time: '2018-04-30', value: 9623.54 },\n\t{ time: '2018-05-07', value: 8696.58 },\n\t{ time: '2018-05-14', value: 8518.48 },\n\t{ time: '2018-05-21', value: 7347.39 },\n\t{ time: '2018-05-28', value: 7703.67 },\n\t{ time: '2018-06-04', value: 6781.17 },\n\t{ time: '2018-06-11', value: 6453.41 },\n\t{ time: '2018-06-18', value: 6153.40 },\n\t{ time: '2018-06-25', value: 6349.99 },\n\t{ time: '2018-07-02', value: 6706.60 },\n\t{ time: '2018-07-09', value: 6349.30 },\n\t{ time: '2018-07-16', value: 7396.60 },\n\t{ time: '2018-07-23', value: 8216.74 },\n\t{ time: '2018-07-30', value: 7032.61 },\n\t{ time: '2018-08-06', value: 6310.82 },\n\t{ time: '2018-08-13', value: 6481.99 },\n\t{ time: '2018-08-20', value: 6700.46 },\n\t{ time: '2018-08-27', value: 7290.31 },\n\t{ time: '2018-09-03', value: 6236.04 },\n\t{ time: '2018-09-10', value: 6499.98 },\n\t{ time: '2018-09-17', value: 6702.22 },\n\t{ time: '2018-09-24', value: 6597.81 },\n\t{ time: '2018-10-01', value: 6577.63 },\n\t{ time: '2018-10-08', value: 6183.00 },\n\t{ time: '2018-10-15', value: 6413.38 },\n\t{ time: '2018-10-22', value: 6405.57 },\n\t{ time: '2018-10-29', value: 6421.76 },\n\t{ time: '2018-11-05', value: 6357.54 },\n\t{ time: '2018-11-12', value: 5559.26 },\n\t{ time: '2018-11-19', value: 3938.89 },\n\t{ time: '2018-11-26', value: 4102.05 },\n\t{ time: '2018-12-03', value: 3529.75 },\n\t{ time: '2018-12-10', value: 3193.78 },\n\t{ time: '2018-12-17', value: 3943.83 },\n\t{ time: '2018-12-24', value: 3835.79 },\n\t{ time: '2018-12-31', value: 4040.71 },\n\t{ time: '2019-01-07', value: 3515.95 },\n\t{ time: '2019-01-14', value: 3536.72 },\n\t{ time: '2019-01-21', value: 3533.23 },\n\t{ time: '2019-01-28', value: 3414.82 },\n\t{ time: '2019-02-04', value: 3650.37 },\n\t{ time: '2019-02-11', value: 3625.60 },\n\t{ time: '2019-02-18', value: 3730.68 },\n\t{ time: '2019-02-25', value: 3789.52 },\n\t{ time: '2019-03-04', value: 3897.92 },\n\t{ time: '2019-03-11', value: 3965.50 },\n\t{ time: '2019-03-18', value: 3969.99 },\n\t{ time: '2019-03-25', value: 4096.08 },\n\t{ time: '2019-04-01', value: 5190.85 },\n\t{ time: '2019-04-08', value: 5162.72 },\n\t{ time: '2019-04-15', value: 5295.65 },\n\t{ time: '2019-04-22', value: 5160.98 },\n\t{ time: '2019-04-29', value: 5709.32 },\n\t{ time: '2019-05-06', value: 6974.35 },\n\t{ time: '2019-05-13', value: 8200.00 },\n\t{ time: '2019-05-20', value: 8733.26 },\n\t{ time: '2019-05-27', value: 8702.43 },\n\t// hide-end\n];\n\nlineSeries.setData(data);\n\nchart.timeScale().fitContent();\n",c={title:"Inverted Price Scale",sidebar_label:"Inverted Price Scale",description:"How to invert a price scale.",pagination_prev:null,pagination_next:null,keywords:["price scale","Inverted","example"]},u=void 0,m={unversionedId:"how_to/inverted-price-scale",id:"how_to/inverted-price-scale",title:"Inverted Price Scale",description:"How to invert a price scale.",source:"@site/tutorials/how_to/inverted-price-scale.mdx",sourceDirName:"how_to",slug:"/how_to/inverted-price-scale",permalink:"/lightweight-charts/tutorials/how_to/inverted-price-scale",draft:!1,tags:[],version:"current",frontMatter:{title:"Inverted Price Scale",sidebar_label:"Inverted Price Scale",description:"How to invert a price scale.",pagination_prev:null,pagination_next:null,keywords:["price scale","Inverted","example"]},sidebar:"tutorialsSidebar"},s={},v=[{value:"How to",id:"how-to",level:2},{value:"Resources",id:"resources",level:2},{value:"Full example",id:"full-example",level:2}],d={toc:v},p="wrapper";function h(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"This example shows how to invert a price scale. Usually, the price scale will\nmap the range of numbers from small to large along the vertical axis from bottom\nto top. Inverting the price scale will change this such that the values map from\ntop to bottom."),(0,i.yg)("h2",{id:"how-to"},"How to"),(0,i.yg)("p",null,"Set the ",(0,i.yg)("a",{parentName:"p",href:"/docs/api/interfaces/PriceScaleOptions#invertscale"},(0,i.yg)("inlineCode",{parentName:"a"},"invertScale"))," property\non the ",(0,i.yg)("a",{parentName:"p",href:"/docs/api/interfaces/PriceScaleOptions"},"priceScale options")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"true"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-js"},"chart.applyOptions({\n    rightPriceScale: {\n        invertScale: true,\n    },\n});\n\n// or (for a specific price scale)\nconst priceScale = chart.priceScale();\npriceScale.applyOptions({\n    invertScale: true,\n});\n")),(0,i.yg)("p",null,"You can see a full ",(0,i.yg)("a",{parentName:"p",href:"#full-example"},"working example")," below."),(0,i.yg)("h2",{id:"resources"},"Resources"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/api/interfaces/PriceScaleOptions#invertscale"},"invertScale")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/price-scale"},"Price Scales")," - General introduction to Price Scales.")),(0,i.yg)("h2",{id:"full-example"},"Full example"),(0,i.yg)(r.Ay,{replaceThemeConstants:!0,chart:!0,className:"language-js",hideableCode:!0,chartOnTop:!0,codeUsage:(0,i.yg)(l.Ay,{mdxType:"UsageGuidePartial"}),mdxType:"CodeBlock"},o))}h.isMDXComponent=!0},5546:(e,t,n)=>{n.d(t,{Ay:()=>O});var a=n(96540),i=n(77964),l=n(78478),r=n(95293),o=n(55597),c=n(6715);function u(e,t,n){e.addEventListener("resize",(()=>{const e=t.getBoundingClientRect();n(e.width,e.height)}),!0)}const m={3.8:async e=>{const t=await n.e(73409).then(n.bind(n,73409));return{module:t,createChart:(n,a)=>{const i=t.createChart(n,a);return u(e,n,i.resize.bind(i)),i},createChartEx:void 0}},"4.0":async e=>{const t=await n.e(37476).then(n.bind(n,37476));return{module:t,createChart:(n,a)=>{const i=t.createChart(n,a);return u(e,n,i.resize.bind(i)),i},createChartEx:void 0}},4.1:async e=>{const t=await n.e(59631).then(n.bind(n,59631));return{module:t,createChart:(n,a)=>{const i=t.createChart(n,a);return u(e,n,i.resize.bind(i)),i},createChartEx:(n,a,i)=>{const l=t.createChartEx(n,a,i);return u(e,n,l.resize.bind(l)),l}}},4.2:async e=>{const t=await n.e(90142).then(n.bind(n,90142));return{module:t,createChart:(n,a)=>{const i=t.createChart(n,a);return u(e,n,i.resize.bind(i)),i},createChartEx:(n,a,i)=>{const l=t.createChartEx(n,a,i);return u(e,n,l.resize.bind(l)),l}}},current:async()=>{const e=await n.e(47839).then(n.bind(n,47839));return{module:e,createChart:(t,n)=>{const a=e.createChart(t,n);return u(window,t,a.resize.bind(a)),a},createChartEx:(t,n,a)=>{const i=e.createChartEx(t,n,a);return u(window,t,i.resize.bind(i)),i}}}},s="iframe_R_Fr";function v(e){const{script:t,iframeStyle:n}=e,{preferredVersion:i}=(0,o.g1)(),l=c&&c.length>0?c[0]:"",r=i?.name??l??"current",u=function(e){return`\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t${e}\n\t\t\t};\n\t\t<\/script>\n\t`}(t),v=a.useRef(null);return a.useEffect((()=>{const e=v.current,t=e?.contentWindow,n=e?.contentDocument;if(null===e||!t||!n)return;const a=async()=>{try{const{module:e,createChart:n,createChartEx:a}=await m[r](t);Object.assign(t,e),t.createChart=n,t.createChartEx=a,t.run?.()}catch(e){console.error(e)}};if(void 0!==t.run)a();else{const t=()=>{a(),e.removeEventListener("load",t)};e.addEventListener("load",t)}}),[u]),a.createElement("iframe",{key:t,ref:v,srcDoc:u,className:s,style:n})}var d=n(82840);function p(){const[e,t]=(0,a.useState)("");return(0,a.useEffect)((()=>t(`${Math.random().toString(36).slice(2,11)}`)),[]),e}const h=Object.keys(d.k.DARK);const O=e=>{const{chart:t,replaceThemeConstants:n,hideableCode:o,chartOnly:c,chartOnTop:u=!1,iframeStyle:m,replaceTabs:O=!0,codeUsage:g,..._}=e;let{children:L}=e;const{colorMode:C}=(0,r.G)(),E="dark"===C,y="string"==typeof R?R:p();var R;if(n&&"string"==typeof L&&(L=function(e,t){const n=t?d.k.DARK:d.k.LIGHT;let a=e;for(const i of h)a=a.replace(new RegExp(i,"g"),`'${n[i]}'`);return a}(L,E)),O&&"string"==typeof L&&(L=L.replace(/\t/g,"    ")),L=L.replace(new RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),t||o){const e=!c&&a.createElement(i.A,_,L),n=t&&a.createElement(l.A,{fallback:a.createElement("div",{className:s},"\xa0")},(()=>a.createElement(v,{script:L,iframeStyle:m}))),r=o&&a.createElement(a.Fragment,null,a.createElement("input",{id:y,type:"checkbox",className:"toggle-hidden-lines"}),a.createElement("label",{className:"toggle-label",htmlFor:y},"Show all code"));return u?a.createElement(a.Fragment,null,n,g,r,e):a.createElement(a.Fragment,null,g,r,e,n)}return a.createElement(i.A,_,L)}},82840:(e,t,n)=>{n.d(t,{k:()=>a});const a={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},6715:e=>{e.exports=JSON.parse('["4.2","4.1","4.0","3.8"]')}}]);