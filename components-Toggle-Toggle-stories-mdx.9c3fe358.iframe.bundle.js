"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[8887],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.XA,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.zE,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Sw},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(1294).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.d)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.H)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,di:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.di,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz,uY:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.uY});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-links/dist/react/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>react_react_default});var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_=__webpack_require__("@storybook/core-events"),dist=__webpack_require__("./node_modules/@storybook/csf/dist/index.mjs"),{document:chunk_6GSMXRCY_document,HTMLElement}=external_STORYBOOK_MODULE_GLOBAL_.global;var chunk_6GSMXRCY_navigate=params=>external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().emit(external_STORYBOOK_MODULE_CORE_EVENTS_.SELECT_STORY,params),hrefTo=(title,name)=>new Promise((resolve=>{let{location}=chunk_6GSMXRCY_document,query=function parseQuery(queryString){let query={},pairs=("?"===queryString[0]?queryString.substring(1):queryString).split("&").filter(Boolean);for(let i=0;i<pairs.length;i++){let pair=pairs[i].split("=");query[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1]||"")}return query}(location.search),existingId=[].concat(query.id)[0],titleToLink=title||existingId.split("--",2)[0],path=`/story/${(0,dist.Lr)(titleToLink,name)}`,sbPath=location.pathname.replace(/iframe\.html$/,"");resolve(`${location.origin+sbPath}?${Object.entries({path}).map((item=>`${item[0]}=${item[1]}`)).join("&")}`)})),linksListener=e=>{let{target}=e;if(!(target instanceof HTMLElement))return;let element=target,{sbKind:kind,sbStory:story}=element.dataset;(kind||story)&&(e.preventDefault(),chunk_6GSMXRCY_navigate({kind,story}))},hasListener=!1,off=()=>{hasListener&&(hasListener=!1,chunk_6GSMXRCY_document.removeEventListener("click",linksListener))},react=((0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withLinks",parameterName:"links",wrapper:(getStory,context)=>(hasListener||(hasListener=!0,chunk_6GSMXRCY_document.addEventListener("click",linksListener)),external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().once(external_STORYBOOK_MODULE_CORE_EVENTS_.STORY_CHANGED,off),getStory(context))}),__webpack_require__("./node_modules/react/index.js")),LinkTo=class extends react.PureComponent{constructor(){super(...arguments),this.state={href:"/"},this.updateHref=async()=>{let{kind,title=kind,story,name=story}=this.props;if(title&&name){let href=await hrefTo(title,name);this.setState({href})}},this.handleClick=()=>{let{kind,title=kind,story,name=story}=this.props;title&&name&&chunk_6GSMXRCY_navigate({title,name})}}componentDidMount(){this.updateHref()}componentDidUpdate(prevProps){let{kind,title,story,name}=this.props;(prevProps.kind!==kind||prevProps.story!==story||prevProps.title!==title||prevProps.name!==name)&&this.updateHref()}render(){let{kind,title=kind,story,name=story,children,...rest}=this.props,{href}=this.state;return react.createElement("a",{href,onClick:e=>((e,cb=_e=>{})=>{(e=>!(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey))(e)&&(e.preventDefault(),cb(e))})(e,this.handleClick),...rest},children)}};LinkTo.defaultProps={children:void 0};var react_react_default=LinkTo},"./src/components/Toggle/Toggle.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toggle_stories,toggle:()=>toggle});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Toggle_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Toggle/Toggle.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Toggle_module.A,options);const Toggle_Toggle_module=Toggle_module.A&&Toggle_module.A.locals?Toggle_module.A.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Toggle=(0,react.forwardRef)((({className,...props},ref)=>{const{checked,defaultChecked}=props,isChecked=checked||defaultChecked;return(0,jsx_runtime.jsxs)("label",{className:(0,clsx.A)(Toggle_Toggle_module.toggleLabel,{[Toggle_Toggle_module.toggleLabelChecked]:isChecked},className),children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",role:"switch","aria-checked":Boolean(isChecked),ref,className:(0,clsx.A)(Toggle_Toggle_module.toggleInput),...props}),(0,jsx_runtime.jsx)("span",{className:(0,clsx.A)(Toggle_Toggle_module.toggleHandle,Toggle_Toggle_module.toggleHandleHighlighted),"aria-hidden":"true",children:"On"}),(0,jsx_runtime.jsx)("span",{className:Toggle_Toggle_module.toggleHandle,"aria-hidden":"true",children:"Off"}),(0,jsx_runtime.jsx)("span",{className:Toggle_Toggle_module.toggleMask,"aria-hidden":"true"})]})}));Toggle.displayName="Toggle";try{Toggle.displayName="Toggle",Toggle.__docgenInfo={description:"",displayName:"Toggle",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Toggle/Toggle.tsx#Toggle"]={docgenInfo:Toggle.__docgenInfo,name:"Toggle",path:"src/components/Toggle/Toggle.tsx#Toggle"})}catch(__react_docgen_typescript_loader_error){}var external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),dist_react=__webpack_require__("./node_modules/@storybook/addon-links/dist/react/index.mjs");const Template=args=>{const[_,updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)();return(0,jsx_runtime.jsx)(Toggle,{...args,onChange:e=>updateArgs({checked:e.target.checked})})};const toggle=Template.bind({});toggle.storyName="Toggle",toggle.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  return <Toggle {...args} onChange={e => updateArgs({\n    checked: e.target.checked\n  })} />;\n}"}};const componentMeta={title:"Deprecated/Toggle",parameters:{controls:{sort:"requiredFirst"}},component:Toggle,argTypes:{checked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}},tags:["stories-mdx"],includeStories:["toggle"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",p:"p",strong:"strong",br:"br",code:"code",h3:"h3",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Deprecated/Toggle",component:Toggle,parameters:{controls:{sort:"requiredFirst"}},argTypes:{checked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}}}}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"toggle",children:"Toggle"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Deprecated"}),". Use ",(0,jsx_runtime.jsx)(dist_react.A,{kind:"Components/Switch",children:"Switch"})," instead.",(0,jsx_runtime.jsx)(_components.br,{}),"\n",(0,jsx_runtime.jsx)(_components.code,{children:"Toggle"})," allows users to turn an individual option on or off. Changing a toggle should take immediate effect and should not require the user to click Save or Submit to apply the new state."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Toggle } from '@lokalise/louis';\n\nexport default () => {\n\tconst [checked, setChecked] = useState(false);\n\treturn <Toggle checked={checked} onChange={(e) => setChecked(e.currentTarget.checked)} />;\n};\n"})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)("a",{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=11056%3A30188&t=r39e6HnjBbidt5cB-0",target:"_blank",children:(0,jsx_runtime.jsx)(_components.p,{children:"Figma Source File | Toggle"})}),"\n"]}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Toggle",children:Template.bind({})})})]})}}};const Toggle_stories=componentMeta,__namedExportsOrder=["Template","toggle"]},"./node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{$:()=>clsx,A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=clsx},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Toggle/Toggle.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"/* Base toggle container */\n.STXwVLmonIo1gUzZ54Bt {\n\tall: initial;\n\tcursor: pointer;\n\tfont-family: var(--lok-font-family-default);\n\tdisplay: inline-grid;\n\tgrid-template-columns: 1fr 1fr;\n\tborder-radius: var(--lok-radius-m);\n\tborder: 1px solid var(--lok-color-border-default);\n\tposition: relative;\n\tuser-select: none;\n\toverflow: hidden;\n\tfont-size: 10px;\n\tline-height: 14px;\n\ttext-transform: uppercase;\n\tmin-width: max-content;\n}\n\n/* Modifier class for checked state */\n.WnceaMItm26n5O30nSlR {\n\tborder-color: var(--lok-color-border-active);\n}\n\n/* Hidden input with enhanced specificity to override bootstrap styles */\n\n/* To fight specificity issues, we wrap this class with input selector */\n.rQxZs9Fi6S2rNSE6PRh9,\ninput.rQxZs9Fi6S2rNSE6PRh9 {\n\t/* Overrides for global css */\n\tall: initial;\n\tposition: absolute !important;\n\tline-height: initial;\n\n\t/* Visually hidden but accessible */\n\tborder: none;\n\tclip: rect(0, 0, 0, 0);\n\theight: 1px;\n\twidth: 1px;\n\tmargin: -1px;\n\tpadding: 0;\n\toverflow: hidden;\n\twhite-space: nowrap;\n}\n\n/* Toggle handle for both ON and OFF states */\n.esPh5XzAMRJtjwEqlZ_c {\n\tpadding: var(--lok-spacing-1);\n\ttext-align: center;\n\tcolor: var(--lok-color-text-default);\n\tbackground-color: var(--lok-color-border-default);\n}\n\n/* Highlighted state for the active side */\n.iKcw5NHywdY2WwykUlxW {\n\tcolor: var(--lok-color-text-inverse);\n\tbackground-color: var(--lok-color-border-active);\n}\n\n/* Handle disabled state */\n.rQxZs9Fi6S2rNSE6PRh9[disabled] ~ .esPh5XzAMRJtjwEqlZ_c {\n\tcursor: not-allowed;\n}\n\n/* Sliding mask that creates the toggle animation */\n.EmRliO_4xewsspaJhjAZ {\n\twidth: 50%;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: var(--lok-color-background-input-default);\n\ttransition: transform 0.05s ease-in;\n}\n\n/* Mask position when toggle is checked */\n.rQxZs9Fi6S2rNSE6PRh9[aria-checked='true'] ~ .EmRliO_4xewsspaJhjAZ {\n\ttransform: translateX(100%);\n}\n\n/* Mask disabled state */\n.rQxZs9Fi6S2rNSE6PRh9[disabled] ~ .EmRliO_4xewsspaJhjAZ {\n\tcursor: not-allowed;\n}\n","",{version:3,sources:["webpack://./src/components/Toggle/Toggle.module.css"],names:[],mappings:"AAAA,0BAA0B;AAC1B;CACC,YAAY;CACZ,eAAe;CACf,2CAA2C;CAC3C,oBAAoB;CACpB,8BAA8B;CAC9B,kCAAkC;CAClC,iDAAiD;CACjD,kBAAkB;CAClB,iBAAiB;CACjB,gBAAgB;CAChB,eAAe;CACf,iBAAiB;CACjB,yBAAyB;CACzB,sBAAsB;AACvB;;AAEA,qCAAqC;AACrC;CACC,4CAA4C;AAC7C;;AAEA,wEAAwE;;AAExE,wEAAwE;AACxE;;CAEC,6BAA6B;CAC7B,YAAY;CACZ,6BAA6B;CAC7B,oBAAoB;;CAEpB,mCAAmC;CACnC,YAAY;CACZ,sBAAsB;CACtB,WAAW;CACX,UAAU;CACV,YAAY;CACZ,UAAU;CACV,gBAAgB;CAChB,mBAAmB;AACpB;;AAEA,6CAA6C;AAC7C;CACC,6BAA6B;CAC7B,kBAAkB;CAClB,oCAAoC;CACpC,iDAAiD;AAClD;;AAEA,0CAA0C;AAC1C;CACC,oCAAoC;CACpC,gDAAgD;AACjD;;AAEA,0BAA0B;AAC1B;CACC,mBAAmB;AACpB;;AAEA,mDAAmD;AACnD;CACC,UAAU;CACV,kBAAkB;CAClB,MAAM;CACN,SAAS;CACT,OAAO;CACP,2DAA2D;CAC3D,mCAAmC;AACpC;;AAEA,yCAAyC;AACzC;CACC,2BAA2B;AAC5B;;AAEA,wBAAwB;AACxB;CACC,mBAAmB;AACpB",sourcesContent:["/* Base toggle container */\n.toggleLabel {\n\tall: initial;\n\tcursor: pointer;\n\tfont-family: var(--lok-font-family-default);\n\tdisplay: inline-grid;\n\tgrid-template-columns: 1fr 1fr;\n\tborder-radius: var(--lok-radius-m);\n\tborder: 1px solid var(--lok-color-border-default);\n\tposition: relative;\n\tuser-select: none;\n\toverflow: hidden;\n\tfont-size: 10px;\n\tline-height: 14px;\n\ttext-transform: uppercase;\n\tmin-width: max-content;\n}\n\n/* Modifier class for checked state */\n.toggleLabelChecked {\n\tborder-color: var(--lok-color-border-active);\n}\n\n/* Hidden input with enhanced specificity to override bootstrap styles */\n\n/* To fight specificity issues, we wrap this class with input selector */\n.toggleInput,\ninput.toggleInput {\n\t/* Overrides for global css */\n\tall: initial;\n\tposition: absolute !important;\n\tline-height: initial;\n\n\t/* Visually hidden but accessible */\n\tborder: none;\n\tclip: rect(0, 0, 0, 0);\n\theight: 1px;\n\twidth: 1px;\n\tmargin: -1px;\n\tpadding: 0;\n\toverflow: hidden;\n\twhite-space: nowrap;\n}\n\n/* Toggle handle for both ON and OFF states */\n.toggleHandle {\n\tpadding: var(--lok-spacing-1);\n\ttext-align: center;\n\tcolor: var(--lok-color-text-default);\n\tbackground-color: var(--lok-color-border-default);\n}\n\n/* Highlighted state for the active side */\n.toggleHandleHighlighted {\n\tcolor: var(--lok-color-text-inverse);\n\tbackground-color: var(--lok-color-border-active);\n}\n\n/* Handle disabled state */\n.toggleInput[disabled] ~ .toggleHandle {\n\tcursor: not-allowed;\n}\n\n/* Sliding mask that creates the toggle animation */\n.toggleMask {\n\twidth: 50%;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tleft: 0;\n\tbackground-color: var(--lok-color-background-input-default);\n\ttransition: transform 0.05s ease-in;\n}\n\n/* Mask position when toggle is checked */\n.toggleInput[aria-checked='true'] ~ .toggleMask {\n\ttransform: translateX(100%);\n}\n\n/* Mask disabled state */\n.toggleInput[disabled] ~ .toggleMask {\n\tcursor: not-allowed;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={toggleLabel:"STXwVLmonIo1gUzZ54Bt",toggleLabelChecked:"WnceaMItm26n5O30nSlR",toggleInput:"rQxZs9Fi6S2rNSE6PRh9",toggleHandle:"esPh5XzAMRJtjwEqlZ_c",toggleHandleHighlighted:"iKcw5NHywdY2WwykUlxW",toggleMask:"EmRliO_4xewsspaJhjAZ"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);