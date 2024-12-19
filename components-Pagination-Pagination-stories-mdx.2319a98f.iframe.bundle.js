"use strict";(globalThis.webpackChunk_lokalise_louis=globalThis.webpackChunk_lokalise_louis||[]).push([[8299],{"./src/components/Pagination/Pagination.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Pagination_stories,pagination:()=>pagination});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),external_STORYBOOK_MODULE_CLIENT_API_=__webpack_require__("@storybook/client-api"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Pagination_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Pagination/Pagination.module.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Pagination_module.A,options);const Pagination_Pagination_module=Pagination_module.A&&Pagination_module.A.locals?Pagination_module.A.locals:void 0;var Button=__webpack_require__("./src/components/Button/Button.tsx"),Input=__webpack_require__("./src/components/Input/Input.tsx"),Select=__webpack_require__("./src/components/Select/Select.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const calculateCurrentPage=(offset,limit)=>Math.floor(offset/limit+1),calculateNewOffset=(newPage,limit)=>(newPage-1)*limit,selectOptions=[{value:25,label:25},{value:50,label:50},{value:100,label:100}],Pagination=({limit,offset,total,onPaginationChange,className})=>{const[pageInputValue,setPageInputValue]=(0,react.useState)(1),pageCount=((total,limit)=>Math.ceil(total/limit))(total,limit),currentPage=calculateCurrentPage(offset,limit),selectValue=selectOptions.find((({value})=>value===limit));return(0,react.useEffect)((()=>{setPageInputValue(1)}),[limit,offset,total]),(0,jsx_runtime.jsxs)("div",{className:(0,clsx.A)(className,Pagination_Pagination_module.container),children:[(0,jsx_runtime.jsx)("div",{className:(0,clsx.A)(Pagination_Pagination_module.buttonWrapper,{[Pagination_Pagination_module.buttonWrapperVisible]:currentPage>1}),children:(0,jsx_runtime.jsx)(Button.$,{appearance:"accent",variant:"secondary",size:"md",onClick:()=>{currentPage<=1||onPaginationChange([currentPage-1,limit,calculateNewOffset(currentPage-1,limit)])},children:"← Prev"})}),(0,jsx_runtime.jsxs)("div",{className:Pagination_Pagination_module.content,children:[(0,jsx_runtime.jsxs)("div",{className:Pagination_Pagination_module.text,children:["Page ",currentPage," of ",pageCount||1,". Jump to page"]}),(0,jsx_runtime.jsx)("div",{className:Pagination_Pagination_module.inputWrapper,children:(0,jsx_runtime.jsx)(Input.p,{className:Pagination_Pagination_module.input,"aria-label":"page number",type:"number",min:"1",error:!pageInputValue||pageCount<pageInputValue,max:`${pageCount}`,value:pageInputValue.toString(),onChange:event=>{setPageInputValue(parseInt(event.currentTarget.value,10))}})}),(0,jsx_runtime.jsx)("button",{type:"button",className:Pagination_Pagination_module.anchor,onClick:()=>{!pageInputValue||pageInputValue>pageCount||pageInputValue===currentPage||onPaginationChange([pageInputValue,limit,calculateNewOffset(pageInputValue,limit)])},children:"Go"}),(0,jsx_runtime.jsx)("div",{className:Pagination_Pagination_module.text,children:"Show per page"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Select.l,{"aria-label":"page size",isSearchable:!1,value:selectValue,options:selectOptions,onChange:option=>{null!==option&&onPaginationChange([calculateCurrentPage(offset,option.value),option.value,offset])}})})]}),(0,jsx_runtime.jsx)("div",{className:(0,clsx.A)(Pagination_Pagination_module.buttonWrapper,{[Pagination_Pagination_module.buttonWrapperVisible]:currentPage<pageCount}),children:(0,jsx_runtime.jsx)(Button.$,{appearance:"accent",variant:"secondary",size:"md",onClick:()=>{currentPage+1>pageCount||onPaginationChange([currentPage+1,limit,calculateNewOffset(currentPage+1,limit)])},children:"Next →"})})]})};Pagination.displayName="Pagination",Pagination.displayName="Pagination";try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{limit:{defaultValue:null,description:"Sets the maximum number of items to display per page.",name:"limit",required:!0,type:{name:"enum",value:[{value:"25"},{value:"50"},{value:"100"}]}},offset:{defaultValue:null,description:"Sets the current item offset, used to calculate which page should be displayed, can be a number ≥0 and <`total`.",name:"offset",required:!0,type:{name:"number"}},total:{defaultValue:null,description:"Sets the total number of items.",name:"total",required:!0,type:{name:"number"}},onPaginationChange:{defaultValue:null,description:"Function executed when changing pages or changing the number of items displayed per page.",name:"onPaginationChange",required:!0,type:{name:"(pageData: [pageNo: number, limit: PageSize, offset: number]) => void"}},className:{defaultValue:null,description:"Sets the css class attribute.",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"src/components/Pagination/Pagination.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}const Template=args=>{const[_,updateArgs]=(0,external_STORYBOOK_MODULE_CLIENT_API_.useArgs)();return(0,jsx_runtime.jsx)(Pagination,{...args,onPaginationChange:([,limit,offset])=>{updateArgs({offset,limit})}})};const pagination=Template.bind({});pagination.storyName="Pagination",pagination.args={offset:0,limit:25,total:100},pagination.parameters={storySource:{source:"args => {\n  const [_, updateArgs] = useArgs();\n  return <Pagination {...args} onPaginationChange={([, limit, offset]) => {\n    updateArgs({\n      offset,\n      limit\n    });\n  }} />;\n}"}};const componentMeta={title:"Components/Pagination",parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{height:"130px"},children:Story()})],component:Pagination,tags:["stories-mdx"],includeStories:["pagination"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{})}):_createMdxContent();function _createMdxContent(){const _components=Object.assign({div:"div",h1:"h1",ul:"ul",li:"li",a:"a",p:"p",code:"code",h3:"h3",pre:"pre"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Components/Pagination",component:Pagination,parameters:{controls:{sort:"requiredFirst"},docs:{source:{excludeDecorators:!0}}},decorators:[Story=>(0,jsx_runtime.jsx)(_components.div,{style:{height:"130px"},children:Story()})]}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"pagination",children:"Pagination"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#overview",children:"Overview"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#figma-design-file",children:"Figma Design File"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#props",children:"Props"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"#examples",children:"Examples"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"overview",children:"Overview"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"The pagination component is a way to navigate through long lists of data. It allows the user to select a specific page to view, and provides an easy way to move between pages."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Pagination expects items to start counting at ",(0,jsx_runtime.jsx)(_components.code,{children:"0"})," (where the last item equals ",(0,jsx_runtime.jsx)(_components.code,{children:"total - 1"}),")."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"installation",children:"Installation"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-bash",children:"npm install @lokalise/louis\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"usage",children:"Usage"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-tsx",children:"import { Pagination } from '@lokalise/louis';\n\nexport default () => (\n\t<Pagination\n\t\ttotal={100}\n\t\toffset={0}\n\t\tlimit={25}\n\t\tonPaginationChange={([pageNo, limit, offset]) => {\n\t\t\t// react to page change\n\t\t}}\n\t/>\n);\n"})}),"\n",(0,jsx_runtime.jsx)("h2",{id:"figma-design-file",children:"Figma Design File"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://www.figma.com/file/zfCOLmZam4nrttG6IVzQyz/Louis?node-id=4032%3A29260",target:"_blank",rel:"nofollow noopener noreferrer",children:"Figma Source File | Pagination"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)("h2",{id:"props",children:"Props"}),"\n",(0,jsx_runtime.jsx)(dist.uY,{of:Pagination,sort:"requiredFirst"}),"\n",(0,jsx_runtime.jsx)("h2",{id:"examples",children:"Examples"}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{withSource:"open",children:(0,jsx_runtime.jsx)(dist.gG,{name:"Pagination",args:{offset:0,limit:25,total:100},children:Template.bind({})})})]})}}};const Pagination_stories=componentMeta,__namedExportsOrder=["Template","pagination"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Pagination/Pagination.module.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".UfYkdBqKc6RPOmRqSInA {\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.yYOvM81NUVuCTWpnyg6G {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tfont-family: var(--lok-font-family-default);\n}\n\n.n_ps_Ac9nDRrvPz_YaiO {\n\twidth: 55px;\n}\n\n.cwrpJZurtTb6BSkyQ9wG {\n\tmin-width: 40px;\n}\n\n.zAdDlQwiZIraDURKec7R {\n\tfont: var(--lok-typography-body-caption-default);\n\tpadding: var(--lok-spacing-2);\n\tcolor: var(--lok-color-text-light-default);\n}\n\n.FU1GmOIUN63CalVdWEsD {\n\tvisibility: hidden;\n}\n\n.TI4pR6UHjvQjCMu5qzn2 {\n\tvisibility: visible;\n}\n\n.XoGGL6QyUP8Z0TDWgVYu {\n\tcursor: pointer;\n\tcolor: var(--lok-color-text-link-default);\n\ttransition: color var(--lok-motion-speed-1);\n\tbackground-color: transparent;\n\tpadding: 0;\n\tfont: var(--lok-typography-body-caption-default);\n\tborder: none;\n\tpadding-left: var(--lok-spacing-2);\n\n\t&:hover,\n\t&:focus,\n\t&:active,\n\t&:active:hover {\n\t\tcolor: var(--lok-color-text-link-hover);\n\t}\n}\n","",{version:3,sources:["webpack://./src/components/Pagination/Pagination.module.css"],names:[],mappings:"AAAA;CACC,WAAW;CACX,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,mBAAmB;CACnB,2CAA2C;AAC5C;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,eAAe;AAChB;;AAEA;CACC,gDAAgD;CAChD,6BAA6B;CAC7B,0CAA0C;AAC3C;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;AACpB;;AAEA;CACC,eAAe;CACf,yCAAyC;CACzC,2CAA2C;CAC3C,6BAA6B;CAC7B,UAAU;CACV,gDAAgD;CAChD,YAAY;CACZ,kCAAkC;;CAElC;;;;EAIC,uCAAuC;CACxC;AACD",sourcesContent:[".container {\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.content {\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tfont-family: var(--lok-font-family-default);\n}\n\n.inputWrapper {\n\twidth: 55px;\n}\n\n.input {\n\tmin-width: 40px;\n}\n\n.text {\n\tfont: var(--lok-typography-body-caption-default);\n\tpadding: var(--lok-spacing-2);\n\tcolor: var(--lok-color-text-light-default);\n}\n\n.buttonWrapper {\n\tvisibility: hidden;\n}\n\n.buttonWrapperVisible {\n\tvisibility: visible;\n}\n\n.anchor {\n\tcursor: pointer;\n\tcolor: var(--lok-color-text-link-default);\n\ttransition: color var(--lok-motion-speed-1);\n\tbackground-color: transparent;\n\tpadding: 0;\n\tfont: var(--lok-typography-body-caption-default);\n\tborder: none;\n\tpadding-left: var(--lok-spacing-2);\n\n\t&:hover,\n\t&:focus,\n\t&:active,\n\t&:active:hover {\n\t\tcolor: var(--lok-color-text-link-hover);\n\t}\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={container:"UfYkdBqKc6RPOmRqSInA",content:"yYOvM81NUVuCTWpnyg6G",inputWrapper:"n_ps_Ac9nDRrvPz_YaiO",input:"cwrpJZurtTb6BSkyQ9wG",text:"zAdDlQwiZIraDURKec7R",buttonWrapper:"FU1GmOIUN63CalVdWEsD",buttonWrapperVisible:"TI4pR6UHjvQjCMu5qzn2",anchor:"XoGGL6QyUP8Z0TDWgVYu"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);