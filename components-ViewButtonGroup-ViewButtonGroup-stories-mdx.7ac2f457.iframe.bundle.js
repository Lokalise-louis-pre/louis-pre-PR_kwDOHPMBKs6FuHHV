"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[3453],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),preview_errors=__webpack_require__("./node_modules/@storybook/core-events/dist/errors/preview-errors.mjs"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new preview_errors._U({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(1294).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.H)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,di:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.di,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.uY});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/components/ViewButtonGroup/ViewButtonGroup.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ViewButtonGroup_stories,viewButtonGroup:()=>viewButtonGroup});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),addon_docs_dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ViewButton_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/ViewButtonGroup/ViewButton.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ViewButton_module.A,options);const ViewButtonGroup_ViewButton_module=ViewButton_module.A&&ViewButton_module.A.locals?ViewButton_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ViewButtonGroup=({onChange,value,children:childrenProp,className})=>{const children=react.Children.map(childrenProp,(child=>(0,react.cloneElement)(child,{selected:child.props.value===value,onChange})));return(0,jsx_runtime.jsx)("span",{className:(0,clsx.$)(ViewButtonGroup_ViewButton_module.container,className),children})};ViewButtonGroup.displayName="ViewButtonGroup";try{ViewButtonGroup.displayName="ViewButtonGroup",ViewButtonGroup.__docgenInfo={description:"",displayName:"ViewButtonGroup",props:{onChange:{defaultValue:null,description:"Function passed down to ViewButton children and executed when a button is clicked.",name:"onChange",required:!0,type:{name:"(value: T) => void"}},value:{defaultValue:null,description:"Sets the currently selected ViewButton.",name:"value",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Renders 2 or more ViewButtons.",name:"children",required:!0,type:{name:"ReactElement<ViewButtonProps<T>, string | JSXElementConstructor<any>>[]"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ViewButtonGroup/ViewButtonGroup.tsx#ViewButtonGroup"]={docgenInfo:ViewButtonGroup.__docgenInfo,name:"ViewButtonGroup",path:"src/components/ViewButtonGroup/ViewButtonGroup.tsx#ViewButtonGroup"})}catch(__react_docgen_typescript_loader_error){}var Tooltip=__webpack_require__("./src/components/Tooltip/Tooltip.tsx");const ViewButton=({label,value,selected=!1,onChange,children})=>(0,jsx_runtime.jsx)(Tooltip.m,{tooltip:label,children:(0,jsx_runtime.jsx)("button",{"aria-selected":selected,onClick:()=>onChange&&onChange(value),"aria-label":label,type:"button",role:"option",className:ViewButtonGroup_ViewButton_module.viewButton,children})});ViewButton.displayName="ViewButton";try{ViewButton.displayName="ViewButton",ViewButton.__docgenInfo={description:"",displayName:"ViewButton",props:{label:{defaultValue:null,description:"Sets accessibility label.",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"Sets value to use when onChange is executed.",name:"value",required:!0,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"Toggles selected state of the button.",name:"selected",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"Function executed when the button is clicked.",name:"onChange",required:!1,type:{name:"((value: T) => void)"}},children:{defaultValue:null,description:"Renders text content and / or any HTML node in the alert.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ViewButtonGroup/ViewButton.tsx#ViewButton"]={docgenInfo:ViewButton.__docgenInfo,name:"ViewButton",path:"src/components/ViewButtonGroup/ViewButton.tsx#ViewButton"})}catch(__react_docgen_typescript_loader_error){}var Grid=__webpack_require__("./src/foundations/icons/Grid.tsx"),List=__webpack_require__("./src/foundations/icons/List.tsx"),MenuHamburger=__webpack_require__("./src/foundations/icons/MenuHamburger.tsx"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api");const Template=args=>{const[_,updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)();return(0,jsx_runtime.jsxs)(ViewButtonGroup,{...args,onChange:value=>{updateArgs({value}),(0,dist.XI)("onChange")(value)},children:[(0,jsx_runtime.jsx)(ViewButton,{value:"value1",label:"Label one",children:(0,jsx_runtime.jsx)(Grid.x,{})}),(0,jsx_runtime.jsx)(ViewButton,{value:"value2",label:"Label two",children:(0,jsx_runtime.jsx)(List.B,{})}),(0,jsx_runtime.jsx)(ViewButton,{value:"value3",label:"Label three",children:(0,jsx_runtime.jsx)(MenuHamburger.f,{})})]})};const viewButtonGroup=Template.bind({});viewButtonGroup.storyName="ViewButtonGroup",viewButtonGroup.args={value:"value1"},viewButtonGroup.parameters={storySource:{source:'args => {\n  const [_, updateArgs] = useArgs();\n  return <ViewButtonGroup {...args} onChange={value => {\n    updateArgs({\n      value\n    });\n    action("onChange")(value);\n  }}>\n\t\t\t<ViewButton value="value1" label="Label one">\n\t\t\t\t<GridIcon />\n\t\t\t</ViewButton>\n\t\t\t<ViewButton value="value2" label="Label two">\n\t\t\t\t<ListIcon />\n\t\t\t</ViewButton>\n\t\t\t<ViewButton value="value3" label="Label three">\n\t\t\t\t<MenuHamburgerIcon />\n\t\t\t</ViewButton>\n\t\t</ViewButtonGroup>;\n}'}};const componentMeta={title:"Components/ViewButtonGroup",parameters:{controls:{sort:"requiredFirst",exclude:["children","onChange"]},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{height:"50px"},children:Story()})],component:ViewButtonGroup,subcomponents:{ViewButton},argTypes:{value:{control:"inline-radio",options:["value1","value2","value3"]}},tags:["stories-mdx"],includeStories:["viewButtonGroup"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({div:"div",h1:"h1",ul:"ul",li:"li",a:"a",p:"p",code:"code",h3:"h3",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(addon_docs_dist.W8,{title:"Components/ViewButtonGroup",component:ViewButtonGroup,subcomponents:{ViewButton},parameters:{controls:{sort:"requiredFirst",exclude:["children","onChange"]},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>(0,jsx_runtime.jsx)(_components.div,{style:{height:"50px"},children:Story()})],argTypes:{value:{control:"inline-radio",options:["value1","value2","value3"]}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"viewbuttongroup",children:"ViewButtonGroup"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["ViewButtonGroup can be used to switch between different views (e.g. from a list view to a card view). It must have at least 2 or more ",(0,jsx_runtime.jsx)(_components.code,{children:"ViewButton"})," children to toggle between."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { ViewButtonGroup, ViewButton, DetailsIcon, GridIcon } from \'@lokalise/louis\';\n\nexport default () => {\n\tconst [value, setValue] = useState(\'value1\');\n\treturn (\n\t\t<ViewButtonGroup value={value} onChange={(value) => setValue(value)}>\n\t\t\t<ViewButton value="value1" label="Label one">\n\t\t\t\t<GridIcon />\n\t\t\t</ViewButton>\n\t\t\t<ViewButton value="value2" label="Label two">\n\t\t\t\t<DetailsIcon />\n\t\t\t</ViewButton>\n\t\t</ViewButtonGroup>\n\t);\n};\n'})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4030%3A23318",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Source File | ViewButtonGroup"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.uY,{of:ViewButtonGroup,sort:"requiredFirst"}),"\n",(0,jsx_runtime.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{withSource:"open",children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{name:"ViewButtonGroup",args:{value:"value1"},children:Template.bind({})})})]})}}};const ViewButtonGroup_stories=componentMeta,__namedExportsOrder=["Template","viewButtonGroup"]},"./src/foundations/icons/Grid.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Grid});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Grid=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.A,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M12.2819 2.49106C12.2513 2.49181 12.2209 2.49481 12.1908 2.50002H4.79166C3.53342 2.50002 2.5 3.53344 2.5 4.79168V12.1891C2.48897 12.2562 2.48897 12.3247 2.5 12.3918V15.2083C2.5 16.4666 3.53342 17.5 4.79166 17.5H12.1891C12.2562 17.511 12.3247 17.511 12.3918 17.5H15.2083C16.4666 17.5 17.5 16.4666 17.5 15.2083V12.3942C17.511 12.3271 17.511 12.2587 17.5 12.1916V4.79168C17.5 3.53344 16.4666 2.50002 15.2083 2.50002H12.3942C12.3571 2.49366 12.3195 2.49066 12.2819 2.49106ZM4.79166 3.75002H7.08333V7.08335H3.75V4.79168C3.75 4.20909 4.20907 3.75002 4.79166 3.75002ZM8.33333 3.75002H11.6667V7.08335H8.33333V3.75002ZM12.9167 3.75002H15.2083C15.7909 3.75002 16.25 4.20909 16.25 4.79168V7.08335H12.9167V3.75002ZM3.75 8.33335H7.08333V11.6667H3.75V8.33335ZM8.33333 8.33335H11.6667V11.6667H8.33333V8.33335ZM12.9167 8.33335H16.25V11.6667H12.9167V8.33335ZM3.75 12.9167H7.08333V16.25H4.79166C4.20907 16.25 3.75 15.7909 3.75 15.2083V12.9167ZM8.33333 12.9167H11.6667V16.25H8.33333V12.9167ZM12.9167 12.9167H16.25V15.2083C16.25 15.7909 15.7909 16.25 15.2083 16.25H12.9167V12.9167Z"})});Grid.displayName="Grid";try{Grid.displayName="Grid",Grid.__docgenInfo={description:"",displayName:"Grid",props:{color:{defaultValue:null,description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/Grid.tsx#Grid"]={docgenInfo:Grid.__docgenInfo,name:"Grid",path:"src/foundations/icons/Grid.tsx#Grid"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/List.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>List});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const List=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.A,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M3.125 2.08331C2.55684 2.08331 2.08334 2.55682 2.08334 3.12498V5.62498C2.08334 6.19314 2.55684 6.66665 3.125 6.66665H5.625C6.19317 6.66665 6.66667 6.19314 6.66667 5.62498V3.12498C6.66667 2.55682 6.19317 2.08331 5.625 2.08331H3.125ZM3.33334 3.33331H5.41667V5.41665H3.33334V3.33331ZM8.54167 3.74998C8.45885 3.74881 8.37662 3.76411 8.29977 3.79499C8.22291 3.82588 8.15296 3.87173 8.09398 3.92988C8.035 3.98803 7.98816 4.05733 7.9562 4.13374C7.92423 4.21015 7.90777 4.29215 7.90777 4.37498C7.90777 4.45781 7.92423 4.53981 7.9562 4.61622C7.98816 4.69263 8.035 4.76193 8.09398 4.82008C8.15296 4.87823 8.22291 4.92408 8.29977 4.95497C8.37662 4.98585 8.45885 5.00115 8.54167 4.99998H17.2917C17.3745 5.00115 17.4567 4.98585 17.5336 4.95497C17.6104 4.92408 17.6804 4.87823 17.7394 4.82008C17.7983 4.76193 17.8452 4.69263 17.8771 4.61622C17.9091 4.53981 17.9256 4.45781 17.9256 4.37498C17.9256 4.29215 17.9091 4.21015 17.8771 4.13374C17.8452 4.05733 17.7983 3.98803 17.7394 3.92988C17.6804 3.87173 17.6104 3.82588 17.5336 3.79499C17.4567 3.76411 17.3745 3.74881 17.2917 3.74998H8.54167ZM3.125 7.70831C2.55684 7.70831 2.08334 8.18182 2.08334 8.74998V11.25C2.08334 11.8181 2.55684 12.2916 3.125 12.2916H5.625C6.19317 12.2916 6.66667 11.8181 6.66667 11.25V8.74998C6.66667 8.18182 6.19317 7.70831 5.625 7.70831H3.125ZM3.33334 8.95831H5.41667V11.0416H3.33334V8.95831ZM8.54167 9.37498C8.45885 9.37381 8.37662 9.38911 8.29977 9.41999C8.22291 9.45088 8.15296 9.49673 8.09398 9.55488C8.035 9.61303 7.98816 9.68233 7.9562 9.75874C7.92423 9.83515 7.90777 9.91715 7.90777 9.99998C7.90777 10.0828 7.92423 10.1648 7.9562 10.2412C7.98816 10.3176 8.035 10.3869 8.09398 10.4451C8.15296 10.5032 8.22291 10.5491 8.29977 10.58C8.37662 10.6108 8.45885 10.6262 8.54167 10.625H17.2917C17.3745 10.6262 17.4567 10.6108 17.5336 10.58C17.6104 10.5491 17.6804 10.5032 17.7394 10.4451C17.7983 10.3869 17.8452 10.3176 17.8771 10.2412C17.9091 10.1648 17.9256 10.0828 17.9256 9.99998C17.9256 9.91715 17.9091 9.83515 17.8771 9.75874C17.8452 9.68233 17.7983 9.61303 17.7394 9.55488C17.6804 9.49673 17.6104 9.45088 17.5336 9.41999C17.4567 9.38911 17.3745 9.37381 17.2917 9.37498H8.54167ZM3.125 13.3333C2.55684 13.3333 2.08334 13.8068 2.08334 14.375V16.875C2.08334 17.4431 2.55684 17.9166 3.125 17.9166H5.625C6.19317 17.9166 6.66667 17.4431 6.66667 16.875V14.375C6.66667 13.8068 6.19317 13.3333 5.625 13.3333H3.125ZM3.33334 14.5833H5.41667V16.6666H3.33334V14.5833ZM8.54167 15C8.45885 14.9988 8.37662 15.0141 8.29977 15.045C8.22291 15.0759 8.15296 15.1217 8.09398 15.1799C8.035 15.238 7.98816 15.3073 7.9562 15.3837C7.92423 15.4601 7.90777 15.5422 7.90777 15.625C7.90777 15.7078 7.92423 15.7898 7.9562 15.8662C7.98816 15.9426 8.035 16.0119 8.09398 16.0701C8.15296 16.1282 8.22291 16.1741 8.29977 16.205C8.37662 16.2358 8.45885 16.2512 8.54167 16.25H17.2917C17.3745 16.2512 17.4567 16.2358 17.5336 16.205C17.6104 16.1741 17.6804 16.1282 17.7394 16.0701C17.7983 16.0119 17.8452 15.9426 17.8771 15.8662C17.9091 15.7898 17.9256 15.7078 17.9256 15.625C17.9256 15.5422 17.9091 15.4601 17.8771 15.3837C17.8452 15.3073 17.7983 15.238 17.7394 15.1799C17.6804 15.1217 17.6104 15.0759 17.5336 15.045C17.4567 15.0141 17.3745 14.9988 17.2917 15H8.54167Z"})});List.displayName="List";try{List.displayName="List",List.__docgenInfo={description:"",displayName:"List",props:{color:{defaultValue:null,description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/List.tsx#List"]={docgenInfo:List.__docgenInfo,name:"List",path:"src/foundations/icons/List.tsx#List"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/MenuHamburger.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>MenuHamburger});__webpack_require__("./node_modules/react/index.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/foundations/icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const MenuHamburger=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.A,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M2.29168 3.74994C2.20886 3.74877 2.12663 3.76407 2.04978 3.79495C1.97292 3.82584 1.90297 3.87169 1.84399 3.92984C1.78501 3.98799 1.73817 4.05729 1.70621 4.1337C1.67424 4.21011 1.65778 4.29211 1.65778 4.37494C1.65778 4.45777 1.67424 4.53977 1.70621 4.61618C1.73817 4.69259 1.78501 4.76189 1.84399 4.82004C1.90297 4.87819 1.97292 4.92404 2.04978 4.95493C2.12663 4.98581 2.20886 5.00111 2.29168 4.99994H17.7083C17.7912 5.00111 17.8734 4.98581 17.9502 4.95493C18.0271 4.92404 18.0971 4.87819 18.156 4.82004C18.215 4.76189 18.2618 4.69259 18.2938 4.61618C18.3258 4.53977 18.3422 4.45777 18.3422 4.37494C18.3422 4.29211 18.3258 4.21011 18.2938 4.1337C18.2618 4.05729 18.215 3.98799 18.156 3.92984C18.0971 3.87169 18.0271 3.82584 17.9502 3.79495C17.8734 3.76407 17.7912 3.74877 17.7083 3.74994H2.29168ZM2.29168 9.37494C2.20886 9.37377 2.12663 9.38907 2.04978 9.41995C1.97292 9.45084 1.90297 9.49669 1.84399 9.55484C1.78501 9.61299 1.73817 9.68229 1.70621 9.7587C1.67424 9.83511 1.65778 9.91711 1.65778 9.99994C1.65778 10.0828 1.67424 10.1648 1.70621 10.2412C1.73817 10.3176 1.78501 10.3869 1.84399 10.445C1.90297 10.5032 1.97292 10.549 2.04978 10.5799C2.12663 10.6108 2.20886 10.6261 2.29168 10.6249H17.7083C17.7912 10.6261 17.8734 10.6108 17.9502 10.5799C18.0271 10.549 18.0971 10.5032 18.156 10.445C18.215 10.3869 18.2618 10.3176 18.2938 10.2412C18.3258 10.1648 18.3422 10.0828 18.3422 9.99994C18.3422 9.91711 18.3258 9.83511 18.2938 9.7587C18.2618 9.68229 18.215 9.61299 18.156 9.55484C18.0971 9.49669 18.0271 9.45084 17.9502 9.41995C17.8734 9.38907 17.7912 9.37377 17.7083 9.37494H2.29168ZM2.29168 14.9999C2.20886 14.9988 2.12663 15.0141 2.04978 15.045C1.97292 15.0758 1.90297 15.1217 1.84399 15.1798C1.78501 15.238 1.73817 15.3073 1.70621 15.3837C1.67424 15.4601 1.65778 15.5421 1.65778 15.6249C1.65778 15.7078 1.67424 15.7898 1.70621 15.8662C1.73817 15.9426 1.78501 16.0119 1.84399 16.07C1.90297 16.1282 1.97292 16.174 2.04978 16.2049C2.12663 16.2358 2.20886 16.2511 2.29168 16.2499H17.7083C17.7912 16.2511 17.8734 16.2358 17.9502 16.2049C18.0271 16.174 18.0971 16.1282 18.156 16.07C18.215 16.0119 18.2618 15.9426 18.2938 15.8662C18.3258 15.7898 18.3422 15.7078 18.3422 15.6249C18.3422 15.5421 18.3258 15.4601 18.2938 15.3837C18.2618 15.3073 18.215 15.238 18.156 15.1798C18.0971 15.1217 18.0271 15.0758 17.9502 15.045C17.8734 15.0141 17.7912 14.9988 17.7083 14.9999H2.29168Z"})});MenuHamburger.displayName="MenuHamburger";try{MenuHamburger.displayName="MenuHamburger",MenuHamburger.__docgenInfo={description:"",displayName:"MenuHamburger",props:{color:{defaultValue:null,description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/MenuHamburger.tsx#MenuHamburger"]={docgenInfo:MenuHamburger.__docgenInfo,name:"MenuHamburger",path:"src/foundations/icons/MenuHamburger.tsx#MenuHamburger"})}catch(__react_docgen_typescript_loader_error){}},"./src/foundations/icons/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>SvgIcon});var clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),SvgIcon_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/foundations/icons/SvgIcon.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(SvgIcon_module.A,options);const icons_SvgIcon_module=SvgIcon_module.A&&SvgIcon_module.A.locals?SvgIcon_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const reservedKeywords=["currentColor","inherit"],colorDefaults={color:"inherit",fill:"currentColor",stroke:void 0},SvgIcon=({color="inherit",size="inherit",ariaLabel,children,className,...props})=>{return(0,jsx_runtime.jsx)("svg",{className:(0,clsx.A)(icons_SvgIcon_module.svgIcon,className),style:{"--louis-svgicon-color":(colorType="color",inputColor=color,inputColor&&!reservedKeywords.includes(inputColor)?inputColor:colorDefaults[colorType]),"--louis-svgicon-size":size},...props,"aria-hidden":!ariaLabel||void 0,role:ariaLabel?"img":void 0,"aria-label":ariaLabel,viewBox:"0 0 20 20",children});var colorType,inputColor};SvgIcon.displayName="SvgIcon";try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{color:{defaultValue:{value:"inherit"},description:"Icon color can be set to any CSS color value.\n`inherit` will inherit the text color of parent elements.",name:"color",required:!1,type:{name:"string"}},size:{defaultValue:{value:"inherit"},description:"Icon size is controlled by css `font-size` using the `size` prop, no inline size attributes are applied on the SVG element.",name:"size",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:{value:"undefined"},description:"Should be set when the icon is used in a meaningful context, instead of purely decorative.",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/foundations/icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"src/foundations/icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/ViewButtonGroup/ViewButton.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".fRJo9LKU5Auh91Qqr_Gw {\n\tposition: relative;\n\tdisplay: inline-block;\n\tpadding: 4px 7px 8px;\n\theight: 30px;\n\tz-index: 1;\n\tvertical-align: middle;\n\tmargin: 0 0 0 -1px;\n\tcursor: pointer;\n\tbackground: transparent;\n\tborder: 1px solid var(--lok-color-border-active);\n\tfont-size: 20px;\n\tcolor: var(--lok-color-text-link-default);\n\n\t&:first-child {\n\t\tborder-radius: var(--lok-radius-m) 0 0 var(--lok-radius-m);\n\t}\n\n\t&:last-of-type {\n\t\tborder-radius: 0 var(--lok-radius-m) var(--lok-radius-m) 0;\n\t}\n\n\t&:hover,\n\t&:focus {\n\t\tbackground: var(--lok-color-background-surface-fore);\n\t}\n\n\t&[aria-selected='true'] {\n\t\tz-index: 2;\n\t\tbackground: var(--lok-color-background-action-primary-default);\n\t\tcolor: var(--lok-color-text-inverse);\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\tbackground: var(--lok-color-background-action-primary-default);\n\t\t}\n\t}\n}\n\n.PJm8bD7TF8guG58LM3A1 {\n\tdisplay: flex;\n\tflex-wrap: nowrap;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tpadding: 0 0 0 1px;\n}\n","",{version:3,sources:["webpack://./src/components/ViewButtonGroup/ViewButton.module.css"],names:[],mappings:"AAAA;CACC,kBAAkB;CAClB,qBAAqB;CACrB,oBAAoB;CACpB,YAAY;CACZ,UAAU;CACV,sBAAsB;CACtB,kBAAkB;CAClB,eAAe;CACf,uBAAuB;CACvB,gDAAgD;CAChD,eAAe;CACf,yCAAyC;;CAEzC;EACC,0DAA0D;CAC3D;;CAEA;EACC,0DAA0D;CAC3D;;CAEA;;EAEC,oDAAoD;CACrD;;CAEA;EACC,UAAU;EACV,8DAA8D;EAC9D,oCAAoC;;EAEpC;;GAEC,8DAA8D;EAC/D;CACD;AACD;;AAEA;CACC,aAAa;CACb,iBAAiB;CACjB,2BAA2B;CAC3B,mBAAmB;CACnB,kBAAkB;AACnB",sourcesContent:[".viewButton {\n\tposition: relative;\n\tdisplay: inline-block;\n\tpadding: 4px 7px 8px;\n\theight: 30px;\n\tz-index: 1;\n\tvertical-align: middle;\n\tmargin: 0 0 0 -1px;\n\tcursor: pointer;\n\tbackground: transparent;\n\tborder: 1px solid var(--lok-color-border-active);\n\tfont-size: 20px;\n\tcolor: var(--lok-color-text-link-default);\n\n\t&:first-child {\n\t\tborder-radius: var(--lok-radius-m) 0 0 var(--lok-radius-m);\n\t}\n\n\t&:last-of-type {\n\t\tborder-radius: 0 var(--lok-radius-m) var(--lok-radius-m) 0;\n\t}\n\n\t&:hover,\n\t&:focus {\n\t\tbackground: var(--lok-color-background-surface-fore);\n\t}\n\n\t&[aria-selected='true'] {\n\t\tz-index: 2;\n\t\tbackground: var(--lok-color-background-action-primary-default);\n\t\tcolor: var(--lok-color-text-inverse);\n\n\t\t&:hover,\n\t\t&:focus {\n\t\t\tbackground: var(--lok-color-background-action-primary-default);\n\t\t}\n\t}\n}\n\n.container {\n\tdisplay: flex;\n\tflex-wrap: nowrap;\n\tjustify-content: flex-start;\n\talign-items: center;\n\tpadding: 0 0 0 1px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={viewButton:"fRJo9LKU5Auh91Qqr_Gw",container:"PJm8bD7TF8guG58LM3A1"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/foundations/icons/SvgIcon.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".jDP8NBI3j8mzT_1xZnld {\n\tpointer-events: all;\n\tbox-sizing: border-box;\n\n\t/* passed via style attribute by component */\n\t/* stylelint-disable csstools/value-no-unknown-custom-properties */\n\tcolor: var(--louis-svgicon-color);\n\tfont-size: var(--louis-svgicon-size);\n\t/* stylelint-enable csstools/value-no-unknown-custom-properties */\n\tfill: currentcolor;\n\twidth: 1em;\n\theight: 1em;\n}\n","",{version:3,sources:["webpack://./src/foundations/icons/SvgIcon.module.css"],names:[],mappings:"AAAA;CACC,mBAAmB;CACnB,sBAAsB;;CAEtB,4CAA4C;CAC5C,kEAAkE;CAClE,iCAAiC;CACjC,oCAAoC;CACpC,iEAAiE;CACjE,kBAAkB;CAClB,UAAU;CACV,WAAW;AACZ",sourcesContent:[".svgIcon {\n\tpointer-events: all;\n\tbox-sizing: border-box;\n\n\t/* passed via style attribute by component */\n\t/* stylelint-disable csstools/value-no-unknown-custom-properties */\n\tcolor: var(--louis-svgicon-color);\n\tfont-size: var(--louis-svgicon-size);\n\t/* stylelint-enable csstools/value-no-unknown-custom-properties */\n\tfill: currentcolor;\n\twidth: 1em;\n\theight: 1em;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={svgIcon:"jDP8NBI3j8mzT_1xZnld"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);