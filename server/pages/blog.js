"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 8350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ SearchIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5086);



const SearchIcon = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_styles_svg__WEBPACK_IMPORTED_MODULE_2__/* .Svg */ .n, {
        fill: "none",
        height: 24,
        viewBox: "0 0 24 24",
        width: 24,
        css: {
            "& path": {
                stroke: "$accents6"
            }
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2",
            // stroke={fill}
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2
        })
    });
};


/***/ }),

/***/ 5086:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ Svg)
/* harmony export */ });
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__);

const UnstyledSvg = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.styled)("svg", {});
const UnstyledPath = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.styled)("path", {});
const Svg = Object.assign(UnstyledSvg, {
    Path: UnstyledPath
});


/***/ }),

/***/ 5331:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ timeAgo)
});

;// CONCATENATED MODULE: external "dayjs"
const external_dayjs_namespaceObject = require("dayjs");
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_namespaceObject);
;// CONCATENATED MODULE: external "dayjs/plugin/relativeTime"
const relativeTime_namespaceObject = require("dayjs/plugin/relativeTime");
var relativeTime_default = /*#__PURE__*/__webpack_require__.n(relativeTime_namespaceObject);
;// CONCATENATED MODULE: ./components/utils/timeago.ts


function timeAgo(input) {
    external_dayjs_default().extend((relativeTime_default()));
    return external_dayjs_default()(input).fromNow();
}


/***/ }),

/***/ 8010:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4818);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var remark_gfm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6809);
/* harmony import */ var _components_styles_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4660);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_styles_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7600);
/* harmony import */ var _components_layout_blog_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7963);
/* harmony import */ var _components_icons_search_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8350);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_utils_timeago__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5331);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_5__, _components_layout_blog_layout__WEBPACK_IMPORTED_MODULE_9__]);
([next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_1__, remark_gfm__WEBPACK_IMPORTED_MODULE_5__, _components_layout_blog_layout__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const Blog = ({ sources  })=>{
    const { 0: blogs , 1: setBlogs  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(sources);
    const handleSearch = (e)=>{
        const value = e.target.value;
        //  setSearch(value);
        const filteredBlogs = sources.filter((blog)=>blog.title.toLowerCase().includes(value.toLowerCase()));
        setBlogs(filteredBlogs);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_blog_layout__WEBPACK_IMPORTED_MODULE_9__/* .BlogLayout */ .E, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_styles_flex__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .k, {
            direction: "column",
            css: {},
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Text, {
                    h1: true,
                    children: "Blog"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Text, {
                    span: true,
                    css: {
                        color: "$accents8"
                    },
                    children: "Ive been writing online since 3 years, mostly about my life and web development. In total, I've written 3 articles on my blog. Use the search below to filter by title."
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_styles_box__WEBPACK_IMPORTED_MODULE_6__/* .Box */ .x, {
                    css: {
                        my: "$8"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Input, {
                        placeholder: "Search by title",
                        css: {
                            width: "100%",
                            "& .nextui-input-wrapper": {
                                bc: "$accents2"
                            }
                        },
                        contentRight: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons_search_icon__WEBPACK_IMPORTED_MODULE_10__/* .SearchIcon */ .W, {}),
                        onChange: handleSearch
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Text, {
                    h3: true,
                    children: "All posts"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_styles_flex__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .k, {
                    direction: "column",
                    gap: "lg",
                    children: [
                        blogs.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Text, {
                            span: true,
                            css: {
                                color: "$accents8"
                            },
                            children: "No results found"
                        }),
                        blogs.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                                href: `blog/${item.slug}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_styles_flex__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .k, {
                                    direction: "column",
                                    css: {
                                        py: "$8",
                                        px: "$4",
                                        cursor: "pointer",
                                        borderRadius: "$sm",
                                        "&:hover": {
                                            bc: "$accents1"
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_styles_flex__WEBPACK_IMPORTED_MODULE_8__/* .Flex */ .k, {
                                            gap: "xl",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Text, {
                                                    h4: true,
                                                    children: item.title
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Text, {
                                                    span: true,
                                                    css: {
                                                        border: "none",
                                                        height: "fit-content",
                                                        mt: "3px",
                                                        color: "$accents7"
                                                    },
                                                    children: (0,_components_utils_timeago__WEBPACK_IMPORTED_MODULE_12__/* .timeAgo */ .S)(item.date)
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_7__.Text, {
                                            span: true,
                                            css: {
                                                color: "$accents8"
                                            },
                                            children: item.description
                                        })
                                    ]
                                })
                            }, item.slug))
                    ]
                })
            ]
        })
    });
};
const getStaticProps = async ()=>{
    const baseUrl = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), "blog/content");
    const files = fs__WEBPACK_IMPORTED_MODULE_3___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_2___default().join("blog/content"));
    const frontMatters = await Promise.all(files.map(async (file)=>{
        const sourceFile = fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(path__WEBPACK_IMPORTED_MODULE_2___default().join(baseUrl + `/${file}`), "utf8");
        const mdxSource = await (0,next_mdx_remote_serialize__WEBPACK_IMPORTED_MODULE_1__.serialize)(sourceFile, {
            parseFrontmatter: true,
            mdxOptions: {
                remarkPlugins: [
                    remark_gfm__WEBPACK_IMPORTED_MODULE_5__["default"]
                ]
            }
        });
        // @ts-ignore
        mdxSource.frontmatter.slug = file.replace(".mdx", "");
        return mdxSource.frontmatter;
    }));
    return {
        props: {
            sources: JSON.parse(JSON.stringify(frontMatters))
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

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

/***/ 4818:
/***/ ((module) => {

module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

module.exports = import("remark-gfm");;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,600,970,963], () => (__webpack_exec__(8010)));
module.exports = __webpack_exports__;

})();