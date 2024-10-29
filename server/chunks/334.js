"use strict";
exports.id = 334;
exports.ids = [334];
exports.modules = {

/***/ 631:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ SectionAnimation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SectionAnimation = ({ children , delay =0.1 , CSS  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
        initial: {
            y: 10,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.8,
            delay
        },
        style: CSS,
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ GridContainer)
/* harmony export */ });
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__);

const GridContainer = (0,_nextui_org_react__WEBPACK_IMPORTED_MODULE_0__.styled)("div", {
    "display": "grid",
    "boxSizing": "border-box",
    "@xsMax": {
        px: "$10"
    },
    "variants": {
        cols: {
            1: {
                gridTemplateColumns: "1fr"
            },
            2: {
                gridTemplateColumns: "repeat(2, 1fr)"
            },
            3: {
                gridTemplateColumns: "repeat(3, 1fr)"
            },
            4: {
                gridTemplateColumns: "repeat(4, 1fr)"
            },
            5: {
                gridTemplateColumns: "repeat(5, 1fr)"
            },
            6: {
                gridTemplateColumns: "repeat(6, 1fr)"
            }
        },
        gap: {
            xs: {
                gap: "$xs"
            },
            sm: {
                gap: "$sm"
            },
            md: {
                gap: "$md"
            },
            lg: {
                gap: "$lg"
            },
            xl: {
                gap: "$xl"
            }
        },
        align: {
            start: {
                alignItems: "start"
            },
            center: {
                alignItems: "center"
            },
            end: {
                alignItems: "end"
            },
            stretch: {
                alignItems: "stretch"
            },
            baseline: {
                alignItems: "baseline"
            }
        },
        justify: {
            start: {
                justifyItems: "start"
            },
            center: {
                justifyItems: "center"
            },
            end: {
                justifyItems: "end"
            },
            stretch: {
                justifyItems: "stretch"
            },
            baseline: {
                justifyItems: "baseline"
            }
        }
    }
});


/***/ })

};
;