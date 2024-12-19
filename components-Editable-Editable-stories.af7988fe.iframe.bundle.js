"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[5137],{"./src/components/Editable/Editable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,EmptyText:()=>EmptyText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Editable_stories});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Editable_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Editable/Editable.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Editable_module.A,options);const Editable_Editable_module=Editable_module.A&&Editable_module.A.locals?Editable_module.A.locals:void 0;var Close=__webpack_require__("./src/foundations/icons/Close.tsx"),Selected=__webpack_require__("./src/foundations/icons/Selected.tsx"),Flex=__webpack_require__("./src/components/Flex/Flex.tsx"),IconButton=__webpack_require__("./src/components/IconButton/IconButton.tsx"),Input=__webpack_require__("./src/components/Input/Input.tsx"),Popover=__webpack_require__("./src/components/Popover/Popover.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Editable=({value,placeholder,label,emptyText="Empty",onChange,disabled=!1,className})=>{const[internalValue,setInternalValue]=(0,react.useState)(value),[emptyError,setEmptyError]=(0,react.useState)(!1);(0,react.useEffect)((()=>{setInternalValue(value)}),[value]);return(0,jsx_runtime.jsx)(Popover.A,{placement:"top",withArrow:!0,content:setVisible=>(0,jsx_runtime.jsxs)("div",{className:(0,clsx.A)(Editable_Editable_module.container,className),children:[(0,jsx_runtime.jsx)(Input.p,{"aria-label":label,placeholder,value:internalValue,error:emptyError,onChange:event=>{setInternalValue(event.currentTarget.value)}}),(0,jsx_runtime.jsxs)(Flex.s,{gap:2,justify:"flex-end",children:[(0,jsx_runtime.jsx)(IconButton.K,{ariaLabel:"Cancel",appearance:"primary",onClick:()=>setVisible(!1),children:(0,jsx_runtime.jsx)(Close.b,{})}),(0,jsx_runtime.jsx)(IconButton.K,{ariaLabel:"Save",appearance:"primary",onClick:()=>(setVisible=>{setEmptyError(!internalValue),internalValue&&(onChange(internalValue),setVisible(!1))})(setVisible),disabled,children:(0,jsx_runtime.jsx)(Selected.c,{})})]})]}),children:(0,jsx_runtime.jsx)("button",{type:"button",className:Editable_Editable_module.trigger,children:value||!!emptyText&&(0,jsx_runtime.jsx)("span",{className:Editable_Editable_module.empty,children:emptyText})})})};Editable.displayName="Editable";try{Editable.displayName="Editable",Editable.__docgenInfo={description:"",displayName:"Editable",props:{value:{defaultValue:null,description:"Renders text content that can be edited.",name:"value",required:!0,type:{name:"string"}},placeholder:{defaultValue:null,description:"Sets a placeholder value in the input field when `value` is an empty string.",name:"placeholder",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Adds accessibility label on the input field.",name:"label",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Toggles disabled state of the save button.",name:"disabled",required:!1,type:{name:"boolean"}},emptyText:{defaultValue:{value:"Empty"},description:"Renders text content that can be edited when `value` is an empty string.",name:"emptyText",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Function executed when input is saved.",name:"onChange",required:!0,type:{name:"(value: string) => void"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Editable/Editable.tsx#Editable"]={docgenInfo:Editable.__docgenInfo,name:"Editable",path:"src/components/Editable/Editable.tsx#Editable"})}catch(__react_docgen_typescript_loader_error){}const Editable_stories={title:"Components/Editable",component:Editable,parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0},description:{component:"Editable is used for editing inline text by clicking on the text.\n\nFigma Source File | Editable (not yet available in Figma, will be updated)"}}},decorators:Story=>(0,jsx_runtime.jsx)("div",{style:{margin:25},children:Story()})},Default={args:{value:"Editable text"}},EmptyText={args:{value:"",emptyText:"This Editable has an empty string as the value",placeholder:"Enter text"}},Disabled={args:{value:"Disabled editable text",disabled:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 'Editable text'\n  }\n}",...Default.parameters?.docs?.source}}},EmptyText.parameters={...EmptyText.parameters,docs:{...EmptyText.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: '',\n    emptyText: 'This Editable has an empty string as the value',\n    placeholder: 'Enter text'\n  }\n}",...EmptyText.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    value: 'Disabled editable text',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Default","EmptyText","Disabled"]},"./src/components/Pressable/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>Pressable});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("./node_modules/react/index.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Pressable_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Pressable/Pressable.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Pressable_module.A,options);const Pressable_Pressable_module=Pressable_module.A&&Pressable_module.A.locals?Pressable_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Pressable=(0,react.forwardRef)((({children,className,...props},ref)=>props.href?(0,jsx_runtime.jsx)("a",{className,ref,...props,children}):(0,jsx_runtime.jsx)("button",{type:"button",className:(0,clsx.A)(Pressable_Pressable_module.root,className),...props,ref,children})));Pressable.displayName="Pressable";try{Pressable.displayName="Pressable",Pressable.__docgenInfo={description:"",displayName:"Pressable",props:{href:{defaultValue:null,description:"Enables component as an HTML Anchor Element.",name:"href",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pressable/index.tsx#Pressable"]={docgenInfo:Pressable.__docgenInfo,name:"Pressable",path:"src/components/Pressable/index.tsx#Pressable"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/LoadingSign/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>LoadingSign});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Rectangle=({rotation,begin})=>(0,jsx_runtime.jsx)("g",{transform:`rotate(${rotation} 10 10)`,children:(0,jsx_runtime.jsx)("rect",{x:"9",y:"3",rx:"1",ry:"1.232",width:"2",height:"4.4",children:(0,jsx_runtime.jsx)("animate",{attributeName:"opacity",values:"1;0",keyTimes:"0;1",dur:"1s",begin:`${begin}s`,repeatCount:"indefinite"})})});Rectangle.displayName="Rectangle";try{Rectangle.displayName="Rectangle",Rectangle.__docgenInfo={description:"",displayName:"Rectangle",props:{rotation:{defaultValue:null,description:"",name:"rotation",required:!0,type:{name:"number"}},begin:{defaultValue:null,description:"",name:"begin",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/LoadingSign/Rectangle.tsx#Rectangle"]={docgenInfo:Rectangle.__docgenInfo,name:"Rectangle",path:"src/foundations/icons/LoadingSign/Rectangle.tsx#Rectangle"})}catch(__react_docgen_typescript_loader_error){}var SvgIcon=__webpack_require__("./src/foundations/icons/SvgIcon.tsx");const LoadingSign=props=>(0,jsx_runtime.jsxs)(SvgIcon.A,{...props,children:[(0,jsx_runtime.jsx)(Rectangle,{rotation:0,begin:-.875}),(0,jsx_runtime.jsx)(Rectangle,{rotation:45,begin:-.75}),(0,jsx_runtime.jsx)(Rectangle,{rotation:90,begin:-.625}),(0,jsx_runtime.jsx)(Rectangle,{rotation:135,begin:-.5}),(0,jsx_runtime.jsx)(Rectangle,{rotation:180,begin:-.375}),(0,jsx_runtime.jsx)(Rectangle,{rotation:225,begin:-.25}),(0,jsx_runtime.jsx)(Rectangle,{rotation:270,begin:-.125}),(0,jsx_runtime.jsx)(Rectangle,{rotation:315,begin:0})]});LoadingSign.displayName="LoadingSign";try{LoadingSign.displayName="LoadingSign",LoadingSign.__docgenInfo={description:"",displayName:"LoadingSign",props:{color:{defaultValue:null,description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/LoadingSign/index.tsx#LoadingSign"]={docgenInfo:LoadingSign.__docgenInfo,name:"LoadingSign",path:"src/foundations/icons/LoadingSign/index.tsx#LoadingSign"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/Selected.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>Selected});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Selected=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.A,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M16.9108 4.41083L7.5 13.8216L3.92253 10.2442L2.74414 11.4225L7.5 16.1784L18.0892 5.58921L16.9108 4.41083Z"})});Selected.displayName="Selected";try{Selected.displayName="Selected",Selected.__docgenInfo={description:"",displayName:"Selected",props:{color:{defaultValue:null,description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Selected.tsx#Selected"]={docgenInfo:Selected.__docgenInfo,name:"Selected",path:"src/foundations/icons/Selected.tsx#Selected"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SvgIcon});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),SvgIcon_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/foundations/icons/SvgIcon.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(SvgIcon_module.A,options);const icons_SvgIcon_module=SvgIcon_module.A&&SvgIcon_module.A.locals?SvgIcon_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const reservedKeywords=["currentColor","inherit"],colorDefaults={color:"inherit",fill:"currentColor",stroke:void 0},SvgIcon=({color="inherit",size="inherit",ariaLabel,children,className,...props})=>{return(0,jsx_runtime.jsx)("svg",{className:(0,clsx.A)(icons_SvgIcon_module.svgIcon,className),style:{"--louis-svgicon-color":(colorType="color",inputColor=color,inputColor&&!reservedKeywords.includes(inputColor)?inputColor:colorDefaults[colorType]),"--louis-svgicon-size":size},...props,"aria-hidden":!ariaLabel||void 0,role:ariaLabel?"img":void 0,"aria-label":ariaLabel,viewBox:"0 0 20 20",children});var colorType,inputColor};SvgIcon.displayName="SvgIcon";try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{color:{defaultValue:{value:"inherit"},description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"inherit"},description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:"undefined"},description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"src/foundations/icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Editable/Editable.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".ZbCOcmkblD2LJbNu23z6 {\n\tpadding: var(--lok-spacing-4);\n\twidth: 230px;\n\tdisplay: grid;\n\tgap: var(--lok-spacing-2);\n}\n\n.sEJp85XXMNBkbQshHLq5 {\n\tbackground-color: transparent;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: inherit;\n\tfont-weight: inherit;\n\tfont-style: inherit;\n\tcolor: inherit;\n}\n\n.CSMPXQ4G0QPwOjbavwQQ {\n\tcolor: var(--lok-color-text-danger);\n\tfont-style: italic;\n}\n","",{version:3,sources:["webpack://./src/components/Editable/Editable.module.css"],names:[],mappings:"AAAA;CACC,6BAA6B;CAC7B,YAAY;CACZ,aAAa;CACb,yBAAyB;AAC1B;;AAEA;CACC,6BAA6B;CAC7B,YAAY;CACZ,eAAe;CACf,kBAAkB;CAClB,oBAAoB;CACpB,mBAAmB;CACnB,cAAc;AACf;;AAEA;CACC,mCAAmC;CACnC,kBAAkB;AACnB",sourcesContent:[".container {\n\tpadding: var(--lok-spacing-4);\n\twidth: 230px;\n\tdisplay: grid;\n\tgap: var(--lok-spacing-2);\n}\n\n.trigger {\n\tbackground-color: transparent;\n\tborder: none;\n\tcursor: pointer;\n\tfont-size: inherit;\n\tfont-weight: inherit;\n\tfont-style: inherit;\n\tcolor: inherit;\n}\n\n.empty {\n\tcolor: var(--lok-color-text-danger);\n\tfont-style: italic;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"ZbCOcmkblD2LJbNu23z6",trigger:"sEJp85XXMNBkbQshHLq5",empty:"CSMPXQ4G0QPwOjbavwQQ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Pressable/Pressable.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".iPosh9GWbEqu1DyHfIfc {\n\tcursor: pointer;\n}\n","",{version:3,sources:["webpack://./src/components/Pressable/Pressable.module.css"],names:[],mappings:"AAAA;CACC,eAAe;AAChB",sourcesContent:[".root {\n\tcursor: pointer;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"iPosh9GWbEqu1DyHfIfc"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/foundations/icons/SvgIcon.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".jDP8NBI3j8mzT_1xZnld {\n\tpointer-events: all;\n\tbox-sizing: border-box;\n\n\t/* passed via style attribute by component */\n\t/* stylelint-disable csstools/value-no-unknown-custom-properties */\n\tcolor: var(--louis-svgicon-color);\n\tfont-size: var(--louis-svgicon-size);\n\t/* stylelint-enable csstools/value-no-unknown-custom-properties */\n\tfill: currentcolor;\n\twidth: 1em;\n\theight: 1em;\n}\n","",{version:3,sources:["webpack://./src/foundations/icons/SvgIcon.module.css"],names:[],mappings:"AAAA;CACC,mBAAmB;CACnB,sBAAsB;;CAEtB,4CAA4C;CAC5C,kEAAkE;CAClE,iCAAiC;CACjC,oCAAoC;CACpC,iEAAiE;CACjE,kBAAkB;CAClB,UAAU;CACV,WAAW;AACZ",sourcesContent:[".svgIcon {\n\tpointer-events: all;\n\tbox-sizing: border-box;\n\n\t/* passed via style attribute by component */\n\t/* stylelint-disable csstools/value-no-unknown-custom-properties */\n\tcolor: var(--louis-svgicon-color);\n\tfont-size: var(--louis-svgicon-size);\n\t/* stylelint-enable csstools/value-no-unknown-custom-properties */\n\tfill: currentcolor;\n\twidth: 1em;\n\theight: 1em;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={svgIcon:"jDP8NBI3j8mzT_1xZnld"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);