"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39130],{15680:(n,i,t)=>{t.d(i,{xA:()=>c,yg:()=>h});var e=t(96540);function o(n,i,t){return i in n?Object.defineProperty(n,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[i]=t,n}function a(n,i){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),t.push.apply(t,e)}return t}function r(n){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?a(Object(t),!0).forEach((function(i){o(n,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))}))}return n}function s(n,i){if(null==n)return{};var t,e,o=function(n,i){if(null==n)return{};var t,e,o={},a=Object.keys(n);for(e=0;e<a.length;e++)t=a[e],i.indexOf(t)>=0||(o[t]=n[t]);return o}(n,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(e=0;e<a.length;e++)t=a[e],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=e.createContext({}),m=function(n){var i=e.useContext(l),t=i;return n&&(t="function"==typeof n?n(i):r(r({},i),n)),t},c=function(n){var i=m(n.components);return e.createElement(l.Provider,{value:i},n.children)},u="mdxType",p={inlineCode:"code",wrapper:function(n){var i=n.children;return e.createElement(e.Fragment,{},i)}},d=e.forwardRef((function(n,i){var t=n.components,o=n.mdxType,a=n.originalType,l=n.parentName,c=s(n,["components","mdxType","originalType","parentName"]),u=m(t),d=o,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return t?e.createElement(h,r(r({ref:i},c),{},{components:t})):e.createElement(h,r({ref:i},c))}));function h(n,i){var t=arguments,o=i&&i.mdxType;if("string"==typeof n||o){var a=t.length,r=new Array(a);r[0]=d;var s={};for(var l in i)hasOwnProperty.call(i,l)&&(s[l]=i[l]);s.originalType=n,s[u]="string"==typeof n?n:o,r[1]=s;for(var m=2;m<a;m++)r[m]=t[m];return e.createElement.apply(null,r)}return e.createElement.apply(null,t)}d.displayName="MDXCreateElement"},65977:(n,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var e=t(58168),o=(t(96540),t(15680));const a={sidebar_position:0,sidebar_label:"Columns",pagination_title:"Histogram Column Widths",title:"Histogram Column Width Calculations",description:"Describes the calculation for histogram column widths",keywords:["plugins","extensions","rendering","canvas","bitmap","media","pixels","histogram","column","width"]},r=void 0,s={unversionedId:"plugins/pixel-perfect-rendering/widths/columns",id:"version-4.1/plugins/pixel-perfect-rendering/widths/columns",title:"Histogram Column Width Calculations",description:"Describes the calculation for histogram column widths",source:"@site/versioned_docs/version-4.1/plugins/pixel-perfect-rendering/widths/columns.md",sourceDirName:"plugins/pixel-perfect-rendering/widths",slug:"/plugins/pixel-perfect-rendering/widths/columns",permalink:"/lightweight-charts/docs/4.1/plugins/pixel-perfect-rendering/widths/columns",draft:!1,tags:[],version:"4.1",sidebarPosition:0,frontMatter:{sidebar_position:0,sidebar_label:"Columns",pagination_title:"Histogram Column Widths",title:"Histogram Column Width Calculations",description:"Describes the calculation for histogram column widths",keywords:["plugins","extensions","rendering","canvas","bitmap","media","pixels","histogram","column","width"]},sidebar:"docsSidebar",previous:{title:"Candlesticks",permalink:"/lightweight-charts/docs/4.1/plugins/pixel-perfect-rendering/widths/candlestick"},next:{title:"Crosshair",permalink:"/lightweight-charts/docs/4.1/plugins/pixel-perfect-rendering/widths/crosshair"}},l={},m=[],c={toc:m},u="wrapper";function p(n){let{components:i,...t}=n;return(0,o.yg)(u,(0,e.A)({},c,t,{components:i,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"It is recommend that you first read the ",(0,o.yg)("a",{parentName:"p",href:"/lightweight-charts/docs/4.1/plugins/pixel-perfect-rendering/"},"Pixel Perfect Rendering")," page.")),(0,o.yg)("p",null,"The following functions can be used to get the calculated width that the library would use for a histogram column at a specific bar spacing and device pixel ratio."),(0,o.yg)("p",null,"You can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"calculateColumnPositionsInPlace")," function instead of the ",(0,o.yg)("inlineCode",{parentName:"p"},"calculateColumnPositions")," function to perform the calculation on an existing array of items without needing to create additional arrays (which is more efficient). It is recommended that you memoize the majority of the calculations below to improve the rendering performance."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-typescript"},"const alignToMinimalWidthLimit = 4;\nconst showSpacingMinimalBarWidth = 1;\n\n/**\n * Spacing gap between columns.\n * @param barSpacingMedia - spacing between bars (media coordinate)\n * @param horizontalPixelRatio - horizontal pixel ratio\n * @returns Spacing gap between columns (in Bitmap coordinates)\n */\nfunction columnSpacing(barSpacingMedia: number, horizontalPixelRatio: number) {\n    return Math.ceil(barSpacingMedia * horizontalPixelRatio) <=\n        showSpacingMinimalBarWidth\n        ? 0\n        : Math.max(1, Math.floor(horizontalPixelRatio));\n}\n\n/**\n * Desired width for columns. This may not be the final width because\n * it may be adjusted later to ensure all columns on screen have a\n * consistent width and gap.\n * @param barSpacingMedia - spacing between bars (media coordinate)\n * @param horizontalPixelRatio - horizontal pixel ratio\n * @param spacing - Spacing gap between columns (in Bitmap coordinates). (optional, provide if you have already calculated it)\n * @returns Desired width for column bars (in Bitmap coordinates)\n */\nfunction desiredColumnWidth(\n    barSpacingMedia: number,\n    horizontalPixelRatio: number,\n    spacing?: number\n) {\n    return (\n        Math.round(barSpacingMedia * horizontalPixelRatio) -\n        (spacing ?? columnSpacing(barSpacingMedia, horizontalPixelRatio))\n    );\n}\n\ninterface ColumnCommon {\n    /** Spacing gap between columns */\n    spacing: number;\n    /** Shift columns left by one pixel */\n    shiftLeft: boolean;\n    /** Half width of a column */\n    columnHalfWidthBitmap: number;\n    /** horizontal pixel ratio */\n    horizontalPixelRatio: number;\n}\n\n/**\n * Calculated values which are common to all the columns on the screen, and\n * are required to calculate the individual positions.\n * @param barSpacingMedia - spacing between bars (media coordinate)\n * @param horizontalPixelRatio - horizontal pixel ratio\n * @returns calculated values for subsequent column calculations\n */\nfunction columnCommon(\n    barSpacingMedia: number,\n    horizontalPixelRatio: number\n): ColumnCommon {\n    const spacing = columnSpacing(barSpacingMedia, horizontalPixelRatio);\n    const columnWidthBitmap = desiredColumnWidth(\n        barSpacingMedia,\n        horizontalPixelRatio,\n        spacing\n    );\n    const shiftLeft = columnWidthBitmap % 2 === 0;\n    const columnHalfWidthBitmap = (columnWidthBitmap - (shiftLeft ? 0 : 1)) / 2;\n    return {\n        spacing,\n        shiftLeft,\n        columnHalfWidthBitmap,\n        horizontalPixelRatio,\n    };\n}\n\ninterface ColumnPosition {\n    left: number;\n    right: number;\n    shiftLeft: boolean;\n}\n\n/**\n * Calculate the position for a column. These values can be later adjusted\n * by a second pass which corrects widths, and shifts columns.\n * @param xMedia - column x position (center) in media coordinates\n * @param columnData - precalculated common values (returned by `columnCommon`)\n * @param previousPosition - result from this function for the previous bar.\n * @returns initial column position\n */\nfunction calculateColumnPosition(\n    xMedia: number,\n    columnData: ColumnCommon,\n    previousPosition: ColumnPosition | undefined\n): ColumnPosition {\n    const xBitmapUnRounded = xMedia * columnData.horizontalPixelRatio;\n    const xBitmap = Math.round(xBitmapUnRounded);\n    const xPositions: ColumnPosition = {\n        left: xBitmap - columnData.columnHalfWidthBitmap,\n        right:\n            xBitmap +\n            columnData.columnHalfWidthBitmap -\n            (columnData.shiftLeft ? 1 : 0),\n        shiftLeft: xBitmap > xBitmapUnRounded,\n    };\n    const expectedAlignmentShift = columnData.spacing + 1;\n    if (previousPosition) {\n        if (xPositions.left - previousPosition.right !== expectedAlignmentShift) {\n            // need to adjust alignment\n            if (previousPosition.shiftLeft) {\n                previousPosition.right = xPositions.left - expectedAlignmentShift;\n            } else {\n                xPositions.left = previousPosition.right + expectedAlignmentShift;\n            }\n        }\n    }\n    return xPositions;\n}\n\nfunction fixPositionsAndReturnSmallestWidth(\n    positions: ColumnPosition[],\n    initialMinWidth: number\n): number {\n    return positions.reduce((smallest: number, position: ColumnPosition) => {\n        if (position.right < position.left) {\n            position.right = position.left;\n        }\n        const width = position.right - position.left + 1;\n        return Math.min(smallest, width);\n    }, initialMinWidth);\n}\n\nfunction fixAlignmentForNarrowColumns(\n    positions: ColumnPosition[],\n    minColumnWidth: number\n) {\n    return positions.map((position: ColumnPosition) => {\n        const width = position.right - position.left + 1;\n        if (width <= minColumnWidth) return position;\n        if (position.shiftLeft) {\n            position.right -= 1;\n        } else {\n            position.left += 1;\n        }\n        return position;\n    });\n}\n\n/**\n * Calculates the column positions and widths for the x positions.\n * This function creates a new array. You may get faster performance using the\n * `calculateColumnPositionsInPlace` function instead\n * @param xMediaPositions - x positions for the bars in media coordinates\n * @param barSpacingMedia - spacing between bars in media coordinates\n * @param horizontalPixelRatio - horizontal pixel ratio\n * @returns Positions for the columns\n */\nexport function calculateColumnPositions(\n    xMediaPositions: number[],\n    barSpacingMedia: number,\n    horizontalPixelRatio: number\n): ColumnPosition[] {\n    const common = columnCommon(barSpacingMedia, horizontalPixelRatio);\n    const positions = new Array<ColumnPosition>(xMediaPositions.length);\n    let previous: ColumnPosition | undefined = undefined;\n    for (let i = 0; i < xMediaPositions.length; i++) {\n        positions[i] = calculateColumnPosition(\n            xMediaPositions[i],\n            common,\n            previous\n        );\n        previous = positions[i];\n    }\n    const initialMinWidth = Math.ceil(barSpacingMedia * horizontalPixelRatio);\n    const minColumnWidth = fixPositionsAndReturnSmallestWidth(\n        positions,\n        initialMinWidth\n    );\n    if (common.spacing > 0 && minColumnWidth < alignToMinimalWidthLimit) {\n        return fixAlignmentForNarrowColumns(positions, minColumnWidth);\n    }\n    return positions;\n}\n\nexport interface ColumnPositionItem {\n    x: number;\n    column?: ColumnPosition;\n}\n\n/**\n * Calculates the column positions and widths for bars using the existing\n * array of items.\n * @param items - bar items which include an `x` property, and will be mutated to contain a column property\n * @param barSpacingMedia - bar spacing in media coordinates\n * @param horizontalPixelRatio - horizontal pixel ratio\n * @param startIndex - start index for visible bars within the items array\n * @param endIndex - end index for visible bars within the items array\n */\nexport function calculateColumnPositionsInPlace(\n    items: ColumnPositionItem[],\n    barSpacingMedia: number,\n    horizontalPixelRatio: number,\n    startIndex: number,\n    endIndex: number\n): void {\n    const common = columnCommon(barSpacingMedia, horizontalPixelRatio);\n    let previous: ColumnPosition | undefined = undefined;\n    for (let i = startIndex; i < Math.min(endIndex, items.length); i++) {\n        items[i].column = calculateColumnPosition(items[i].x, common, previous);\n        previous = items[i].column;\n    }\n    const minColumnWidth = (items as ColumnPositionItem[]).reduce(\n        (smallest: number, item: ColumnPositionItem, index: number) => {\n            if (!item.column || index < startIndex || index > endIndex)\n                return smallest;\n            if (item.column.right < item.column.left) {\n                item.column.right = item.column.left;\n            }\n            const width = item.column.right - item.column.left + 1;\n            return Math.min(smallest, width);\n        },\n        Math.ceil(barSpacingMedia * horizontalPixelRatio)\n    );\n    if (common.spacing > 0 && minColumnWidth < alignToMinimalWidthLimit) {\n        (items as ColumnPositionItem[]).forEach(\n            (item: ColumnPositionItem, index: number) => {\n                if (!item.column || index < startIndex || index > endIndex) return;\n                const width = item.column.right - item.column.left + 1;\n                if (width <= minColumnWidth) return item;\n                if (item.column.shiftLeft) {\n                    item.column.right -= 1;\n                } else {\n                    item.column.left += 1;\n                }\n                return item.column;\n            }\n        );\n    }\n}\n\n")))}p.isMDXComponent=!0}}]);