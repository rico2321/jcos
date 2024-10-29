"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 131:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "w": () => (/* binding */ components)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@nextui-org/react"
var react_ = __webpack_require__(6735);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "clsx"
const external_clsx_namespaceObject = require("clsx");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_namespaceObject);
;// CONCATENATED MODULE: external "prism-react-renderer"
const external_prism_react_renderer_namespaceObject = require("prism-react-renderer");
var external_prism_react_renderer_default = /*#__PURE__*/__webpack_require__.n(external_prism_react_renderer_namespaceObject);
;// CONCATENATED MODULE: external "prettier/standalone"
const standalone_namespaceObject = require("prettier/standalone");
var standalone_default = /*#__PURE__*/__webpack_require__.n(standalone_namespaceObject);
;// CONCATENATED MODULE: ./components/hooks/useCopyToClipboard.ts

function useCopyToClipboard() {
    const { 0: copiedText , 1: setCopiedText  } = (0,external_react_.useState)(null);
    const copy = async (text)=>{
        if (!navigator?.clipboard) {
            console.warn("Clipboard not supported");
            return false;
        }
        // Try to save to clipboard then save it in the state if worked
        try {
            await navigator.clipboard.writeText(text);
            setCopiedText(text);
            return true;
        } catch (error) {
            console.warn("Copy failed", error);
            setCopiedText(null);
            return false;
        }
    };
    return [
        copiedText,
        copy
    ];
}
/* harmony default export */ const hooks_useCopyToClipboard = (useCopyToClipboard);

;// CONCATENATED MODULE: external "prettier/parser-babel"
const parser_babel_namespaceObject = require("prettier/parser-babel");
var parser_babel_default = /*#__PURE__*/__webpack_require__.n(parser_babel_namespaceObject);
;// CONCATENATED MODULE: external "prettier/parser-html"
const parser_html_namespaceObject = require("prettier/parser-html");
var parser_html_default = /*#__PURE__*/__webpack_require__.n(parser_html_namespaceObject);
;// CONCATENATED MODULE: external "prettier/parser-typescript"
const parser_typescript_namespaceObject = require("prettier/parser-typescript");
var parser_typescript_default = /*#__PURE__*/__webpack_require__.n(parser_typescript_namespaceObject);
;// CONCATENATED MODULE: ./blog/components/Codeblock.tsx









const CodeBlock = ({ blockClass , children , language ="tsx" , linesOn =false , disableTabs =false  })=>{
    const [value, copy] = hooks_useCopyToClipboard();
    const { 0: tooltipText , 1: setTooltipText  } = (0,external_react_.useState)("Copy to clipboard");
    const codeParsed = typeof children === "string" ? children.toString().trim() : children?.props?.children.toString().trim();
    const languageSelected = (0,external_react_.useMemo)(()=>{
        switch(language){
            case "tsx":
                return "typescript";
            case "js":
                return "babel";
            default:
                return "html";
        }
    }, [
        language
    ]);
    const formatCode = standalone_default().format(codeParsed, {
        parser: languageSelected,
        plugins: [
            (parser_babel_default()),
            (parser_html_default()),
            (parser_typescript_default())
        ],
        useTabs: true,
        printWidth: 80
    }).trim().replace(/;$/, "");
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_prism_react_renderer_default()), {
            ...external_prism_react_renderer_namespaceObject.defaultProps,
            theme: null,
            code: formatCode,
            // @ts-ignore
            language: language,
            children: ({ className , style , tokens , getLineProps , getTokenProps  })=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("pre", {
                        className: external_clsx_default()(className, disableTabs ? "m-[1rem_0rem_1.25rem_0rem] rounded-xl p-[14px]" : "m-[0rem_0rem_1.25rem_0rem] p-[14px]", "max-h-[32rem] overflow-auto  rounded-b-xl text-left", blockClass),
                        style: style,
                        children: tokens.map((line, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                ...getLineProps({
                                    line,
                                    key: i
                                }),
                                children: [
                                    linesOn && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "table-cell select-none pr-3 text-right text-white opacity-50",
                                        children: i + 1
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "table-cell ",
                                        children: line.map((token, key)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                ...getTokenProps({
                                                    token,
                                                    key,
                                                    className: "text-white "
                                                })
                                            }, key))
                                    })
                                ]
                            }, i))
                    })
                })
        })
    });
};

;// CONCATENATED MODULE: ./blog/components/Code.tsx



const Code = ({ children , className , ...props })=>{
    if (!className) return /*#__PURE__*/ jsx_runtime_.jsx("code", {
        className: "text-sm text-primary",
        children: children
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(CodeBlock, {
        language: className.split("-")[1],
        ...props,
        children: children
    });
};

;// CONCATENATED MODULE: ./blog/components/index.tsx



const components = {
    h1: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
            h1: true,
            ...props,
            css: {
                mb: "$6"
            }
        }),
    h2: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
            h2: true,
            ...props
        }),
    h3: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
            h3: true,
            ...props
        }),
    h4: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
            h4: true,
            ...props
        }),
    h5: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
            h5: true,
            ...props
        }),
    h6: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
            h6: true,
            ...props
        }),
    pre: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(Code, {
            ...props
        }),
    code: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(Code, {
            ...props
        }),
    p: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
            as: "p",
            css: {
                fontFamily: "inherit",
                my: "$9",
                lineHeight: "$xl",
                letterSpacing: "$normal"
            },
            children: props.children
        }),
    a: (props)=>{
        const isRelativeUrl = !/^([a-z0-9]*:|.{0})\/\/.*$/gim.test(props.href);
        return /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
            href: props.href,
            target: isRelativeUrl ? "_self" : "_blank",
            css: {
                width: "fit-content",
                display: "initial"
            },
            children: props.children
        });
    }
};


/***/ }),

/***/ 6051:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4818);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6809);
/* harmony import */ var next_mdx_remote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9961);
/* harmony import */ var _components_layout_blog_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7963);
/* harmony import */ var _blog_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(131);
/* harmony import */ var remark_mdx_code_meta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1462);
/* harmony import */ var rehype_slug__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__, remark_gfm__WEBPACK_IMPORTED_MODULE_5__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_6__, _components_layout_blog_layout__WEBPACK_IMPORTED_MODULE_7__, remark_mdx_code_meta__WEBPACK_IMPORTED_MODULE_9__, rehype_slug__WEBPACK_IMPORTED_MODULE_10__]);
([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__, remark_gfm__WEBPACK_IMPORTED_MODULE_5__, next_mdx_remote__WEBPACK_IMPORTED_MODULE_6__, _components_layout_blog_layout__WEBPACK_IMPORTED_MODULE_7__, remark_mdx_code_meta__WEBPACK_IMPORTED_MODULE_9__, rehype_slug__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Index = ({ source  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_blog_layout__WEBPACK_IMPORTED_MODULE_7__/* .BlogLayout */ .E, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_mdx_remote__WEBPACK_IMPORTED_MODULE_6__.MDXRemote, {
            ...source,
            components: _blog_components__WEBPACK_IMPORTED_MODULE_8__/* .components */ .w
        })
    });
};
async function getStaticPaths() {
    const files = fs__WEBPACK_IMPORTED_MODULE_2___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_3___default().join("blog/content"));
    const removedPrefixFiles = files.map((file)=>`/blog/${file.replace(".mdx", "")}`);
    return {
        paths: removedPrefixFiles,
        fallback: "blocking"
    };
}
const getStaticProps = async ({ params  })=>{
    const slug = params?.slug;
    const baseUrl = path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), `blog/content/${slug}.mdx`);
    const sourceFile = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(baseUrl, "utf8");
    const mdxSource = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_4__.serialize)(sourceFile, {
        parseFrontmatter: true,
        mdxOptions: {
            remarkPlugins: [
                remark_mdx_code_meta__WEBPACK_IMPORTED_MODULE_9__["default"],
                remark_gfm__WEBPACK_IMPORTED_MODULE_5__["default"]
            ],
            rehypePlugins: [
                [
                    rehype_slug__WEBPACK_IMPORTED_MODULE_10__["default"]
                ]
            ]
        }
    });
    return {
        props: {
            source: mdxSource
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 9961:
/***/ ((module) => {

module.exports = import("next-mdx-remote");;

/***/ }),

/***/ 4818:
/***/ ((module) => {

module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ 7752:
/***/ ((module) => {

module.exports = import("rehype-slug");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

/***/ }),

/***/ 1462:
/***/ ((module) => {

module.exports = import("remark-mdx-code-meta");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [600,963], () => (__webpack_exec__(6051)));
module.exports = __webpack_exports__;

})();