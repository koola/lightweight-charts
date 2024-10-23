"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29264,18401],{2104:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>O,contentTitle:()=>b,default:()=>L,frontMatter:()=>R,metadata:()=>w,toc:()=>v});var r=n(58168),a=n(96540),o=n(15680),i=n(7499),s=n(5546);const c="// delete-start\n/* Note: this file shouldn't be used directly because it has some constants which are set by\nthe docusaurus site to ensure that the chart looks great in both dark and light color themes.\nIf you want to use this example then please copy the code presented on the documentation site.\n[link](https://tradingview.github.io/lightweight-charts/tutorials/react/advanced) */\n// delete-end\nimport { createChart } from 'lightweight-charts';\nimport React, {\n\tcreateContext,\n\tforwardRef,\n\tuseCallback,\n\tuseContext,\n\tuseEffect,\n\tuseImperativeHandle,\n\tuseLayoutEffect,\n\tuseRef,\n\tuseState,\n} from 'react';\n\nconst Context = createContext();\n\nconst initialData = [\n\t{ time: '2018-10-11', value: 52.89 },\n\t{ time: '2018-10-12', value: 51.65 },\n\t{ time: '2018-10-13', value: 51.56 },\n\t{ time: '2018-10-14', value: 50.19 },\n\t{ time: '2018-10-15', value: 51.86 },\n\t{ time: '2018-10-16', value: 51.25 },\n];\n\nconst initialData2 = [\n\t{ time: '2018-10-11', value: 42.89 },\n\t{ time: '2018-10-12', value: 41.65 },\n\t{ time: '2018-10-13', value: 41.56 },\n\t{ time: '2018-10-14', value: 40.19 },\n\t{ time: '2018-10-15', value: 41.86 },\n\t{ time: '2018-10-16', value: 41.25 },\n];\nconst currentDate = new Date(initialData[initialData.length - 1].time);\n\nexport const App = props => {\n\tconst {\n\t\tcolors: {\n\t\t\tbackgroundColor = CHART_BACKGROUND_COLOR,\n\t\t\tlineColor = LINE_LINE_COLOR,\n\t\t\ttextColor = CHART_TEXT_COLOR,\n\t\t} = {},\n\t} = props;\n\n\tconst [chartLayoutOptions, setChartLayoutOptions] = useState({});\n\t// The following variables illustrate how a series could be updated.\n\tconst series1 = useRef(null);\n\tconst series2 = useRef(null);\n\tconst [started, setStarted] = useState(false);\n\tconst [isSecondSeriesActive, setIsSecondSeriesActive] = useState(false);\n\n\t// The purpose of this effect is purely to show how a series could\n\t// be updated using the `reference` passed to the `Series` component.\n\tuseEffect(() => {\n\t\tif (series1.current === null) {\n\t\t\treturn;\n\t\t}\n\t\tlet intervalId;\n\n\t\tif (started) {\n\t\t\tintervalId = setInterval(() => {\n\t\t\t\tcurrentDate.setDate(currentDate.getDate() + 1);\n\t\t\t\tconst next = {\n\t\t\t\t\ttime: currentDate.toISOString().slice(0, 10),\n\t\t\t\t\tvalue: 53 - 2 * Math.random(),\n\t\t\t\t};\n\t\t\t\tseries1.current.update(next);\n\t\t\t\tif (series2.current) {\n\t\t\t\t\tseries2.current.update({\n\t\t\t\t\t\t...next,\n\t\t\t\t\t\tvalue: 43 - 2 * Math.random(),\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}, 1000);\n\t\t}\n\t\treturn () => clearInterval(intervalId);\n\t}, [started]);\n\n\tuseEffect(() => {\n\t\tsetChartLayoutOptions({\n\t\t\tbackground: {\n\t\t\t\tcolor: backgroundColor,\n\t\t\t},\n\t\t\ttextColor,\n\t\t});\n\t}, [backgroundColor, textColor]);\n\n\treturn (\n\t\t<>\n\t\t\t<button type=\"button\" onClick={() => setStarted(current => !current)}>\n\t\t\t\t{started ? 'Stop updating' : 'Start updating series'}\n\t\t\t</button>\n\t\t\t<button type=\"button\" onClick={() => setIsSecondSeriesActive(current => !current)}>\n\t\t\t\t{isSecondSeriesActive ? 'Remove second series' : 'Add second series'}\n\t\t\t</button>\n\t\t\t<Chart layout={chartLayoutOptions}>\n\t\t\t\t<Series\n\t\t\t\t\tref={series1}\n\t\t\t\t\ttype={'line'}\n\t\t\t\t\tdata={initialData}\n\t\t\t\t\tcolor={lineColor}\n\t\t\t\t/>\n\t\t\t\t{isSecondSeriesActive && <Series\n\t\t\t\t\tref={series2}\n\t\t\t\t\ttype={'area'}\n\t\t\t\t\tdata={initialData2}\n\t\t\t\t\tcolor={lineColor}\n\t\t\t\t/>}\n\t\t\t</Chart>\n\t\t</>\n\t);\n};\n\nexport function Chart(props) {\n\tconst [container, setContainer] = useState(false);\n\tconst handleRef = useCallback(ref => setContainer(ref), []);\n\treturn (\n\t\t<div ref={handleRef}>\n\t\t\t{container && <ChartContainer {...props} container={container} />}\n\t\t</div>\n\t);\n}\n\nexport const ChartContainer = forwardRef((props, ref) => {\n\tconst { children, container, layout, ...rest } = props;\n\n\tconst chartApiRef = useRef({\n\t\tisRemoved: false,\n\t\tapi() {\n\t\t\tif (!this._api) {\n\t\t\t\tthis._api = createChart(container, {\n\t\t\t\t\t...rest,\n\t\t\t\t\tlayout,\n\t\t\t\t\twidth: container.clientWidth,\n\t\t\t\t\theight: 300,\n\t\t\t\t});\n\t\t\t\tthis._api.timeScale().fitContent();\n\t\t\t}\n\t\t\treturn this._api;\n\t\t},\n\t\tfree(series) {\n\t\t\tif (this._api && series) {\n\t\t\t\tthis._api.removeSeries(series);\n\t\t\t}\n\t\t},\n\t});\n\n\tuseLayoutEffect(() => {\n\t\tconst currentRef = chartApiRef.current;\n\t\tconst chart = currentRef.api();\n\n\t\tconst handleResize = () => {\n\t\t\tchart.applyOptions({\n\t\t\t\t...rest,\n\t\t\t\twidth: container.clientWidth,\n\t\t\t});\n\t\t};\n\n\t\twindow.addEventListener('resize', handleResize);\n\t\treturn () => {\n\t\t\twindow.removeEventListener('resize', handleResize);\n\t\t\tchartApiRef.current.isRemoved = true;\n\t\t\tchart.remove();\n\t\t};\n\t}, []);\n\n\tuseLayoutEffect(() => {\n\t\tconst currentRef = chartApiRef.current;\n\t\tcurrentRef.api();\n\t}, []);\n\n\tuseLayoutEffect(() => {\n\t\tconst currentRef = chartApiRef.current;\n\t\tcurrentRef.api().applyOptions(rest);\n\t}, []);\n\n\tuseImperativeHandle(ref, () => chartApiRef.current.api(), []);\n\n\tuseEffect(() => {\n\t\tconst currentRef = chartApiRef.current;\n\t\tcurrentRef.api().applyOptions({ layout });\n\t}, [layout]);\n\n\treturn (\n\t\t<Context.Provider value={chartApiRef.current}>\n\t\t\t{props.children}\n\t\t</Context.Provider>\n\t);\n});\nChartContainer.displayName = 'ChartContainer';\n\nexport const Series = forwardRef((props, ref) => {\n\tconst parent = useContext(Context);\n\tconst context = useRef({\n\t\tapi() {\n\t\t\tif (!this._api) {\n\t\t\t\tconst { children, data, type, ...rest } = props;\n\t\t\t\tthis._api =\n\t\t\t\t\ttype === 'line'\n\t\t\t\t\t\t? parent.api().addLineSeries(rest)\n\t\t\t\t\t\t: parent.api().addAreaSeries(rest);\n\t\t\t\tthis._api.setData(data);\n\t\t\t}\n\t\t\treturn this._api;\n\t\t},\n\t\tfree() {\n\t\t\t// check if parent component was removed already\n\t\t\tif (this._api && !parent.isRemoved) {\n\t\t\t\t// remove only current series\n\t\t\t\tparent.free(this._api);\n\t\t\t}\n\t\t},\n\t});\n\n\tuseLayoutEffect(() => {\n\t\tconst currentRef = context.current;\n\t\tcurrentRef.api();\n\n\t\treturn () => currentRef.free();\n\t}, []);\n\n\tuseLayoutEffect(() => {\n\t\tconst currentRef = context.current;\n\t\tconst { children, data, ...rest } = props;\n\t\tcurrentRef.api().applyOptions(rest);\n\t});\n\n\tuseImperativeHandle(ref, () => context.current.api(), []);\n\n\treturn (\n\t\t<Context.Provider value={context.current}>\n\t\t\t{props.children}\n\t\t</Context.Provider>\n\t);\n});\nSeries.displayName = 'Series';\n";var l=n(37055);const p=(0,a.createContext)(),u=[{time:"2018-10-11",value:52.89},{time:"2018-10-12",value:51.65},{time:"2018-10-13",value:51.56},{time:"2018-10-14",value:50.19},{time:"2018-10-15",value:51.86},{time:"2018-10-16",value:51.25}],h=[{time:"2018-10-11",value:42.89},{time:"2018-10-12",value:41.65},{time:"2018-10-13",value:41.56},{time:"2018-10-14",value:40.19},{time:"2018-10-15",value:41.86},{time:"2018-10-16",value:41.25}],d=new Date(u[u.length-1].time),f=t=>{const{colors:{backgroundColor:e=CHART_BACKGROUND_COLOR,lineColor:n=LINE_LINE_COLOR,textColor:r=CHART_TEXT_COLOR}={}}=t,[o,i]=(0,a.useState)({}),s=(0,a.useRef)(null),c=(0,a.useRef)(null),[l,p]=(0,a.useState)(!1),[f,g]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{if(null===s.current)return;let t;return l&&(t=setInterval((()=>{d.setDate(d.getDate()+1);const t={time:d.toISOString().slice(0,10),value:53-2*Math.random()};s.current.update(t),c.current&&c.current.update({...t,value:43-2*Math.random()})}),1e3)),()=>clearInterval(t)}),[l]),(0,a.useEffect)((()=>{i({background:{color:e},textColor:r})}),[e,r]),a.createElement(a.Fragment,null,a.createElement("button",{type:"button",onClick:()=>p((t=>!t))},l?"Stop updating":"Start updating series"),a.createElement("button",{type:"button",onClick:()=>g((t=>!t))},f?"Remove second series":"Add second series"),a.createElement(m,{layout:o},a.createElement(C,{ref:s,type:"line",data:u,color:n}),f&&a.createElement(C,{ref:c,type:"area",data:h,color:n})))};function m(t){const[e,n]=(0,a.useState)(!1),o=(0,a.useCallback)((t=>n(t)),[]);return a.createElement("div",{ref:o},e&&a.createElement(g,(0,r.A)({},t,{container:e})))}const g=(0,a.forwardRef)(((t,e)=>{const{children:n,container:r,layout:o,...i}=t,s=(0,a.useRef)({isRemoved:!1,api(){return this._api||(this._api=(0,l.R9)(r,{...i,layout:o,width:r.clientWidth,height:300}),this._api.timeScale().fitContent()),this._api},free(t){this._api&&t&&this._api.removeSeries(t)}});return(0,a.useLayoutEffect)((()=>{const t=s.current.api(),e=()=>{t.applyOptions({...i,width:r.clientWidth})};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e),s.current.isRemoved=!0,t.remove()}}),[]),(0,a.useLayoutEffect)((()=>{s.current.api()}),[]),(0,a.useLayoutEffect)((()=>{s.current.api().applyOptions(i)}),[]),(0,a.useImperativeHandle)(e,(()=>s.current.api()),[]),(0,a.useEffect)((()=>{s.current.api().applyOptions({layout:o})}),[o]),a.createElement(p.Provider,{value:s.current},t.children)}));g.displayName="ChartContainer";const C=(0,a.forwardRef)(((t,e)=>{const n=(0,a.useContext)(p),r=(0,a.useRef)({api(){if(!this._api){const{children:e,data:r,type:a,...o}=t;this._api="line"===a?n.api().addLineSeries(o):n.api().addAreaSeries(o),this._api.setData(r)}return this._api},free(){this._api&&!n.isRemoved&&n.free(this._api)}});return(0,a.useLayoutEffect)((()=>{const t=r.current;return t.api(),()=>t.free()}),[]),(0,a.useLayoutEffect)((()=>{const e=r.current,{children:n,data:a,...o}=t;e.api().applyOptions(o)})),(0,a.useImperativeHandle)(e,(()=>r.current.api()),[]),a.createElement(p.Provider,{value:r.current},t.children)}));C.displayName="Series";var y=n(22452);const R={sidebar_label:"Advanced example",hide_table_of_contents:!0},b="React - Advanced example",w={unversionedId:"react/advanced",id:"react/advanced",title:"React - Advanced example",description:"The following describes a more complex scenario where a user could imagine splitting the responsibilities of the chart between components.",source:"@site/tutorials/react/02-advanced.mdx",sourceDirName:"react",slug:"/react/advanced",permalink:"/lightweight-charts/tutorials/react/advanced",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Advanced example",hide_table_of_contents:!0},sidebar:"tutorialsSidebar",previous:{title:"Simple example",permalink:"/lightweight-charts/tutorials/react/simple"},next:{title:"Vue.js - Wrapper Component",permalink:"/lightweight-charts/tutorials/vuejs/wrapper"}},O={},v=[],_={toc:v},E="wrapper";function L(t){let{components:e,...n}=t;return(0,o.yg)(E,(0,r.A)({},_,n,{components:e,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"react---advanced-example"},"React - Advanced example"),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"The following describes a more complex scenario where a user could imagine splitting the responsibilities of the chart between components."),(0,o.yg)("p",{parentName:"admonition"},"If you want to consult a simpler approach please consult this ",(0,o.yg)("a",{parentName:"p",href:"./simple"},"example"),".")),(0,o.yg)("admonition",{type:"warning"},(0,o.yg)("p",{parentName:"admonition"},"By following the steps below we assume you're familiar with Lightweight Charts\u2122, how to set up a project using it and how to render a chart."),(0,o.yg)("p",{parentName:"admonition"},"If not, please follow this ",(0,o.yg)("a",{parentName:"p",href:"./simple"},"guide"),".")),(0,o.yg)("p",null,"If you're familiar with Lightweight Charts\u2122 you probably already know that a ",(0,o.yg)("em",{parentName:"p"},"Chart")," is a container that can contain one or more ",(0,o.yg)("a",{parentName:"p",href:"/docs/series-types"},(0,o.yg)("em",{parentName:"a"},"Series")),".\nEach ",(0,o.yg)("em",{parentName:"p"},"Series")," has its own options (for instance ",(0,o.yg)("a",{parentName:"p",href:"/docs/api/interfaces/AreaStyleOptions"},"AreaStyleOptions"),", ",(0,o.yg)("a",{parentName:"p",href:"/docs/api/interfaces/LineStyleOptions"},"LineStyleOptions"),", etc) in addition to ",(0,o.yg)("a",{parentName:"p",href:"/docs/price-scale"},"price")," and/or ",(0,o.yg)("a",{parentName:"p",href:"/docs/time-scale"},"time")," scale."),(0,o.yg)("p",null,"Based on this principle, one could easily imagine having a main component ",(0,o.yg)("em",{parentName:"p"},"Chart")," that could have some ",(0,o.yg)("em",{parentName:"p"},"Series")," children that could themselves have other children and so on.\nTherefore the structure could become something like"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"<Chart component>\n    <Series component 1>\n        <child component />\n    </Series component 1>\n    <Series component n>\n        <child component />\n    </Series component n>\n</Chart component>\n")),(0,o.yg)("p",null,"Even though it's possible to create a Chart without a Series, the complexity arises when another component wants to interact with any of its siblings/parent, like updating a series by adding more data or resizing the chart itself."),(0,o.yg)("p",null,"Given this tutorial is about React this is how we are going to define components relying on React ",(0,o.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"Hooks")," and ",(0,o.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/composition-vs-inheritance.html"},"composition"),"."),(0,o.yg)("p",null,"However, one drawback with the way React and its hooks like ",(0,o.yg)("em",{parentName:"p"},"useEffect")," ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/facebook/react/issues/16728"},"work")," in a parent/children implementation is that their respective hooks are called in a bottom-up order for instanciation but top-to-bottom when it comes to clean-up."),(0,o.yg)("p",null,"The following skeleton illustrates the mechanism."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect } from 'react';\n\nexport const ParentComponent = () => {\n    // this effect will be triggered in position 3\n    useEffect(() =>\n        () => {\n            // this clean up will be triggered in position 1\n        }\n    , []);\n\n    // this effect will be triggered in position 4\n    useEffect(() =>\n        () => {\n            // this clean up will be triggered in position 2\n        }\n    , []);\n\n    // The parent will then return Following bit is to propagate all props & internalRef object down to children\n    return (\n        <ChildComponent />\n    );\n};\nParentComponent.displayName = 'ParentComponent';\n\nexport const ChildComponent = () => {\n    // this effect will be triggered in position 1\n    useEffect(() =>\n        () => {\n            // this clean up will be triggered in position 3\n        }\n    , []);\n\n    // this effect will be triggered in position 2\n    useEffect(() =>\n        () => {\n            // this clean up will be triggered in position 4\n        }\n    , []);\n\n    return (\n        <div />\n    );\n};\nChildComponent.displayName = 'ChildComponent';\n")),(0,o.yg)("p",null,"In essence, taking the example above, it means that a ",(0,o.yg)("inlineCode",{parentName:"p"},"ChildComponent")," (aka Series) would be created first whilst requiring a ",(0,o.yg)("inlineCode",{parentName:"p"},"ParentComponent")," (aka Chart)."),(0,o.yg)("p",null,"To achieve that, we will have to rely on a few hooks and take advantage of the way they work in addition to use ",(0,o.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/forwarding-refs.html"},"ref/forwardRef")," which is a technique to pass down properties from one component to its children."),(0,o.yg)("p",null,'In the end the "visible" structure and usage will be alike but internally it will be something like:'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"<Chart component>\n    <ChartContainer>\n        <Series component 1>\n            <child component />\n        </Series component 1>\n        <Series component n>\n            <child component />\n        </Series component n>\n    </ChartContainer>\n</Chart component>\n")),(0,o.yg)("p",null,"where the ChartContainer's role would be needed to attach a DOMElement on which the chart will render.\nChartContainer will be responsible for creating a ",(0,o.yg)("strong",{parentName:"p"},"ref"),"erence that will hold functions to handle the lifecycle of the chart.\nThat reference will then be propagated down to the Series."),(0,o.yg)("p",null,"The same technique will be used within the Series component to handle this time the lifecycle of any Series along with adding data to be plotted."),(0,o.yg)("p",null,'Moreover those 2 "main" components will "expose" whatever functions the user wants from the internal reference object at a higher level, meaning once those references are accessible any other component would then be able to act on either the Chart or any Series.'),(0,o.yg)("p",null,"Here's a skeleton of what the final structure would be like:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-js"},"import React, { useEffect, useImperativeHandle, useRef, createContext, forwardRef } from 'react';\n\nconst Context = createContext();\n\nexport const MainComponent = props =>\n    // Creates the first reference and instanciate a ParentComponent\n    (\n        <div ref={chartReference}>\n            <ParentComponent {...props} container={container} />\n        </div>\n    );\n\nexport const ParentComponent = forwardRef((props, ref) => {\n    const internalRef = useRef({\n        method1() {\n            // This function would be responsible for creating the chart for instance\n        },\n        methodn() {\n            // This function would be responsible for cleaning up the chart\n        },\n    });\n\n    // this effect will be triggered in position 3\n    useEffect(() =>\n        () => {\n            // this clean up will be triggered in position 1\n        }\n    , []);\n\n    // this effect will be triggered in position 4\n    useEffect(() =>\n        () => {\n            // this clean up will be triggered in position 2\n        }\n    , []);\n\n    useImperativeHandle(ref, () => {\n        // That's the hook responsible for exposing part of/entirety of internalRef\n    }, []);\n\n    // Following bit is to propagate all props & internalRef object down to children\n    return (\n        <Context.Provider value={internalRef.current}>\n            {props.children}\n        </Context.Provider>\n    );\n});\nParentComponent.displayName = 'ParentComponent';\n\nexport const ChildComponent = forwardRef((props, ref) => {\n    const internalRef = useRef({\n        method1() {\n            // This function would be responsible for creating a series\n        },\n        methodn() {\n            // This function would be responsible for removing it\n        },\n    });\n\n    // this effect will be triggered in position 1\n    useEffect(() =>\n        () => {\n            // this clean up will be triggered in position 3\n        }\n    , []);\n\n    // this effect will be triggered in position 2\n    useEffect(() =>\n        () => {\n            // this clean up will be triggered in position 4\n        }\n    , []);\n\n    useImperativeHandle(ref, () => {\n        // That's the hook responsible for exposing part of/entirety of internalRef\n    }, []);\n\n    // Following bit is to propagate all props & internalRef object down to children\n    return (\n        <Context.Provider value={internalRef.current}>\n            {props.children}\n        </Context.Provider>\n    );\n});\nChildComponent.displayName = 'ChildComponent';\n")),(0,o.yg)("p",null,"By considering all the above you could end up with Chart/Series components looking like the following"),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"For this example we are using props to set chart colors based on the current theme (light or dark). In your real code it might be a better idea to use a ",(0,o.yg)("a",{parentName:"p",href:"https://reactjs.org/docs/context.html#when-to-use-context"},"Context"),".")),(0,o.yg)(s.Ay,{replaceThemeConstants:!0,className:"language-jsx",mdxType:"CodeBlock"},c),(0,o.yg)("p",null,"The code above will produce a line series.\nGiven a ",(0,o.yg)("inlineCode",{parentName:"p"},"series1")," reference is created to be passed to the Series component you could reuse that object via ",(0,o.yg)("inlineCode",{parentName:"p"},"series1.current.[any function applicable on Series]"),"."),(0,o.yg)("p",null,"For instance and as shown below ",(0,o.yg)("inlineCode",{parentName:"p"},"series1.current.update(new data)")," is used upon clicking on the button."),(0,o.yg)("div",{className:y.A.ChartContainer},(0,o.yg)(i.k,{ChartComponent:f,mdxType:"ThemedChart"})))}L.isMDXComponent=!0},5546:(t,e,n)=>{n.d(e,{Ay:()=>g});var r=n(96540),a=n(77964),o=n(78478),i=n(95293),s=n(55597),c=n(6715);function l(t,e,n){t.addEventListener("resize",(()=>{const t=e.getBoundingClientRect();n(t.width,t.height)}),!0)}const p={3.8:async t=>{const e=await n.e(73409).then(n.bind(n,73409));return{module:e,createChart:(n,r)=>{const a=e.createChart(n,r);return l(t,n,a.resize.bind(a)),a},createChartEx:void 0}},"4.0":async t=>{const e=await n.e(37476).then(n.bind(n,37476));return{module:e,createChart:(n,r)=>{const a=e.createChart(n,r);return l(t,n,a.resize.bind(a)),a},createChartEx:void 0}},4.1:async t=>{const e=await n.e(59631).then(n.bind(n,59631));return{module:e,createChart:(n,r)=>{const a=e.createChart(n,r);return l(t,n,a.resize.bind(a)),a},createChartEx:(n,r,a)=>{const o=e.createChartEx(n,r,a);return l(t,n,o.resize.bind(o)),o}}},4.2:async t=>{const e=await n.e(90142).then(n.bind(n,90142));return{module:e,createChart:(n,r)=>{const a=e.createChart(n,r);return l(t,n,a.resize.bind(a)),a},createChartEx:(n,r,a)=>{const o=e.createChartEx(n,r,a);return l(t,n,o.resize.bind(o)),o}}},current:async()=>{const t=await n.e(47839).then(n.bind(n,47839));return{module:t,createChart:(e,n)=>{const r=t.createChart(e,n);return l(window,e,r.resize.bind(r)),r},createChartEx:(e,n,r)=>{const a=t.createChartEx(e,n,r);return l(window,e,a.resize.bind(a)),a}}}},u="iframe_R_Fr";function h(t){const{script:e,iframeStyle:n}=t,{preferredVersion:a}=(0,s.g1)(),o=c&&c.length>0?c[0]:"",i=a?.name??o??"current",l=function(t){return`\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t${t}\n\t\t\t};\n\t\t<\/script>\n\t`}(e),h=r.useRef(null);return r.useEffect((()=>{const t=h.current,e=t?.contentWindow,n=t?.contentDocument;if(null===t||!e||!n)return;const r=async()=>{try{const{module:t,createChart:n,createChartEx:r}=await p[i](e);Object.assign(e,t),e.createChart=n,e.createChartEx=r,e.run?.()}catch(t){console.error(t)}};if(void 0!==e.run)r();else{const e=()=>{r(),t.removeEventListener("load",e)};t.addEventListener("load",e)}}),[l]),r.createElement("iframe",{key:e,ref:h,srcDoc:l,className:u,style:n})}var d=n(82840);function f(){const[t,e]=(0,r.useState)("");return(0,r.useEffect)((()=>e(`${Math.random().toString(36).slice(2,11)}`)),[]),t}const m=Object.keys(d.k.DARK);const g=t=>{const{chart:e,replaceThemeConstants:n,hideableCode:s,chartOnly:c,chartOnTop:l=!1,iframeStyle:p,replaceTabs:g=!0,codeUsage:C,...y}=t;let{children:R}=t;const{colorMode:b}=(0,i.G)(),w="dark"===b,O="string"==typeof v?v:f();var v;if(n&&"string"==typeof R&&(R=function(t,e){const n=e?d.k.DARK:d.k.LIGHT;let r=t;for(const a of m)r=r.replace(new RegExp(a,"g"),`'${n[a]}'`);return r}(R,w)),g&&"string"==typeof R&&(R=R.replace(/\t/g,"    ")),R=R.replace(new RegExp(/\/\/ delete-start[\w\W]*?\/\/ delete-end/,"gm"),""),e||s){const t=!c&&r.createElement(a.A,y,R),n=e&&r.createElement(o.A,{fallback:r.createElement("div",{className:u},"\xa0")},(()=>r.createElement(h,{script:R,iframeStyle:p}))),i=s&&r.createElement(r.Fragment,null,r.createElement("input",{id:O,type:"checkbox",className:"toggle-hidden-lines"}),r.createElement("label",{className:"toggle-label",htmlFor:O},"Show all code"));return l?r.createElement(r.Fragment,null,n,C,i,t):r.createElement(r.Fragment,null,C,i,t,n)}return r.createElement(a.A,y,R)}},7499:(t,e,n)=>{n.d(e,{k:()=>s});var r=n(95293),a=n(96540),o=n(82840);function i(t){const e=t?"DARK":"LIGHT";return{backgroundColor:o.k[e].CHART_BACKGROUND_COLOR,lineColor:o.k[e].LINE_LINE_COLOR,textColor:o.k[e].CHART_TEXT_COLOR,areaTopColor:o.k[e].AREA_TOP_COLOR,areaBottomColor:o.k[e].AREA_BOTTOM_COLOR}}function s(t){const{ChartComponent:e}=t,n=function(){const{colorMode:t}=(0,r.G)(),e="dark"===t,[n,o]=(0,a.useState)(i(e));return(0,a.useEffect)((()=>{o(i(e))}),[e]),n}();return a.createElement(e,{colors:n})}},82840:(t,e,n)=>{n.d(e,{k:()=>r});const r={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",LINE_LINE2_COLOR:"rgb(225, 87, 90)",LINE_LINE3_COLOR:"rgb(242, 142, 44)",LINE_LINE4_COLOR:"rgb(164, 89, 209)",LINE_LINE5_COLOR:"rgb(27, 156, 133)",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},22452:(t,e,n)=>{n.d(e,{A:()=>r});const r={ChartContainer:"ChartContainer_Hwvl"}},6715:t=>{t.exports=JSON.parse('["4.2","4.1","4.0","3.8"]')}}]);