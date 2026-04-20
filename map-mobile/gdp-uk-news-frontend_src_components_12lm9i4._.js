(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/gdp-uk-news-frontend/src/components/ui-election-status/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "status": "styles-module__IuW4Ga__status",
  "status-item": "styles-module__IuW4Ga__status-item",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-status/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Status
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status/styles.module.css [client] (css module)");
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function Status({ status }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: `${css('status')} display-any`,
        "data-testid": "ui-election-status",
        children: status.map(({ name, value, skipValue = false }, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: css('status-item'),
                "data-testid": "ui-election-status-item",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "u-hide-visually",
                        children: skipValue ? name : `${name} ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                            value,
                            replace: {
                                old: '/',
                                new: ' of '
                            },
                            fallback: 'Undeclared'
                        })}`
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-status/index.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-status/index.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    !skipValue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        "aria-hidden": "true",
                        className: "display-any",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                            value
                        })
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-status/index.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-status/index.tsx",
                lineNumber: 22,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-status/index.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = Status;
var _c;
__turbopack_context__.k.register(_c, "Status");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-status-banner/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "banner": "styles-module__r5ZhXq__banner",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-status-banner/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatusBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status-banner/styles.module.css [client] (css module)");
;
;
function StatusBanner({ party, statusText }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].banner} display-any`,
        "data-party": party || 'other',
        "data-testid": "status-banner",
        children: statusText
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-status-banner/index.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = StatusBanner;
var _c;
__turbopack_context__.k.register(_c, "StatusBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "voteshare": "styles-module__lPonrW__voteshare",
  "voteshare-arrow--left": "styles-module__lPonrW__voteshare-arrow--left",
  "voteshare-arrow--right": "styles-module__lPonrW__voteshare-arrow--right",
  "voteshare-bar": "styles-module__lPonrW__voteshare-bar",
  "voteshare-bar-body": "styles-module__lPonrW__voteshare-bar-body",
  "voteshare-bar-current": "styles-module__lPonrW__voteshare-bar-current",
  "voteshare-bar-header": "styles-module__lPonrW__voteshare-bar-header",
  "voteshare-bar-previous": "styles-module__lPonrW__voteshare-bar-previous",
  "voteshare-change": "styles-module__lPonrW__voteshare-change",
  "voteshare-group": "styles-module__lPonrW__voteshare-group",
  "voteshare-header": "styles-module__lPonrW__voteshare-header",
  "voteshare-party": "styles-module__lPonrW__voteshare-party",
  "voteshare-share": "styles-module__lPonrW__voteshare-share",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/stacked-bar/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StackedBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/number-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/styles.module.css [client] (css module)");
;
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function StackedBar({ party = '', votePercentage = 0, votePercentageChange = 0, relativeValue = 100 }) {
    const currentBarWidth = votePercentage / relativeValue;
    const previousBarWidth = (votePercentage + votePercentageChange * -1) / relativeValue;
    const arrowDirection = votePercentageChange > 0 ? 'right' : 'left';
    const arrowColour = votePercentageChange > 0 ? '' : party;
    let arrowDiv;
    let changeDiv;
    // if change is not null OR zero
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["roundToXDecimalPlaces"])(votePercentageChange)) {
        arrowDiv = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-party": arrowColour,
            className: css(`voteshare-arrow--${arrowDirection}`),
            "aria-hidden": "true"
        }, void 0, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/stacked-bar/index.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    // if change is not null i.e. it can be zero
    if (votePercentageChange !== null && votePercentageChange !== 0) {
        changeDiv = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${css('voteshare-change')} display-any`,
            "data-testid": "ui-election-voteshare-change",
            children: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prependSignToParseableNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["formatToXDecimalPlaces"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["roundToXDecimalPlaces"])(votePercentageChange), 1))}%`
        }, void 0, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/stacked-bar/index.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: css('voteshare-group'),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: css('voteshare-bar'),
            "data-direction": arrowDirection,
            "data-change": (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["roundToXDecimalPlaces"])(votePercentageChange),
            style: {
                '--bar-current-width': currentBarWidth,
                '--bar-previous-width': previousBarWidth
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: css('voteshare-bar-body'),
                    "aria-hidden": "true",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-party": party,
                            "data-direction": arrowDirection,
                            className: `${css('voteshare-bar-current')}`,
                            "data-testid": "ui-election-voteshare-bar-current"
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/stacked-bar/index.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        previousBarWidth > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-party": party,
                            "data-direction": arrowDirection,
                            className: css('voteshare-bar-previous'),
                            "data-testid": "ui-election-voteshare-bar-previous"
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/stacked-bar/index.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/stacked-bar/index.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                arrowDiv,
                changeDiv
            ]
        }, void 0, true, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/stacked-bar/index.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/stacked-bar/index.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = StackedBar;
var _c;
__turbopack_context__.k.register(_c, "StackedBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VoteShareGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/array-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/number-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$stacked$2d$bar$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/stacked-bar/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/styles.module.css [client] (css module)");
;
;
;
;
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function VoteShareGraph({ voteShare = [], mainParties = [], mainItemsLength = 4, sortBy = 'votePercentage', changeLabel = '' }) {
    if (voteShare === undefined || voteShare.length < 1) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {}, void 0, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx",
            lineNumber: 45,
            columnNumber: 12
        }, this);
    }
    // build main party order lookup
    const mainPartyOrder = new Map(mainParties.map((abbr, index)=>[
            abbr,
            index
        ]));
    // annotate each item once with fallback order
    const votingAreas = voteShare.map((vote)=>({
            ...vote,
            __mainOrder: mainPartyOrder.get(vote.party?.abbreviation) ?? Number.MAX_SAFE_INTEGER
        }));
    let data;
    // if there is only one other party, show that party
    // if the voting areas length is less than main parties length, just show all parties
    if (votingAreas.length <= mainParties.length + 1) {
        data = [
            ...votingAreas
        ];
        // primary sort + fallback
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sortItems"])(data, [
            {
                sortField: sortBy,
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].desc
            },
            {
                sortField: '__mainOrder',
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].asc
            }
        ]);
    } else {
        // split list into two arrays, first the main parties, then all others
        const { newArray: main, oldArray: other } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["splitArrayByValues"])('party.abbreviation', mainParties, votingAreas);
        // sort both arrays with fallback
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sortItems"])(main, [
            {
                sortField: sortBy,
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].desc
            },
            {
                sortField: '__mainOrder',
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].asc
            }
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sortItems"])(other, [
            {
                sortField: sortBy,
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].desc
            },
            {
                sortField: '__mainOrder',
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].asc
            }
        ]);
        // merge the arrays back together with main first then all others combined
        data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["mergeItems"])(mainParties.length || mainItemsLength, [
            ...main,
            ...other
        ], {
            party: {
                displayName: 'Other',
                abbreviation: 'Other',
                name: 'Other parties'
            }
        });
        // remove 'other', sort again, then put other back at the end
        const lastItem = data.pop();
        // consistent final sort
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sortItems"])(data, [
            {
                sortField: sortBy,
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].desc
            },
            {
                sortField: '__mainOrder',
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].asc
            }
        ]);
        data.push(lastItem);
    }
    let independentCount = 0;
    let relativeValue = 0;
    data.forEach((vote)=>{
        if (vote.party.displayName === 'Ind') {
            independentCount++;
        }
        const barWidth = vote.votePercentage + Math.min(0, vote.votePercentageChange || 0) * -1;
        if (barWidth > relativeValue) {
            relativeValue = barWidth;
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
        className: `${css('voteshare')} display-any`,
        "data-testid": "ui-election-voteshare",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                className: css('voteshare-header'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    "data-testid": "ui-election-voteshare-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            children: "Party"
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            children: "% Share"
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            className: css('voteshare-bar-header'),
                            children: changeLabel
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                children: data.map((vote, index)=>{
                    const showInitials = independentCount > 1 && vote.candidate && vote.party.displayName === 'Ind';
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        "data-testid": "ui-election-voteshare-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: `${css('voteshare-party')} display-any`,
                                "data-testid": "ui-election-voteshare-party",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "u-hide-visually",
                                        children: `${vote.party.name}${showInitials ? ` (${vote.candidate?.firstName} ${vote.candidate?.surname})` : ''}`
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                            value: `${vote.party.displayName}${showInitials ? ` (${vote.candidate?.firstName[0]}${vote.candidate?.surname[0]})` : ''}`
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: `${css('voteshare-share')} display-any`,
                                "data-testid": "ui-election-voteshare-share",
                                children: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["formatToXDecimalPlaces"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["roundToXDecimalPlaces"])(vote.votePercentage), 1)}%`
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx",
                                lineNumber: 149,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: css('voteshare-bar-change'),
                                "data-testid": "ui-election-voteshare-bar-change",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$stacked$2d$bar$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    party: vote.party.abbreviation,
                                    votePercentage: vote.votePercentage,
                                    votePercentageChange: vote.votePercentageChange,
                                    relativeValue: relativeValue
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx",
                                    lineNumber: 153,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx",
                                lineNumber: 152,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx",
                        lineNumber: 134,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_c = VoteShareGraph;
var _c;
__turbopack_context__.k.register(_c, "VoteShareGraph");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-info/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "info": "styles-module__dkL9XG__info",
  "info-bubble": "styles-module__dkL9XG__info-bubble",
  "info-summary": "styles-module__dkL9XG__info-summary",
  "showinfo": "styles-module__dkL9XG__showinfo",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-info/index.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Info
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$info$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/icons/info.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$analytics$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/analytics.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-info/styles.module.css [client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function Info({ modifier = '', style, children, title = 'More information', parentId }) {
    _s();
    const details = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])();
    const bubble = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Info.useEffect": ()=>{
            function closeInfo(event) {
                if (event.type === 'click' && !details.current.contains(event.target) || event.type === 'resize') {
                    requestAnimationFrame({
                        "Info.useEffect.closeInfo": ()=>{
                            details.current.open = null;
                        }
                    }["Info.useEffect.closeInfo"]);
                }
            }
            details.current.addEventListener('toggle', {
                "Info.useEffect": (event)=>{
                    if (event.target.open) {
                        event.stopImmediatePropagation();
                        event.target.style.setProperty('--bubble-x-offset', `${0}px`);
                        const x = Math.min(0, event.target.getBoundingClientRect().left - bubble.current.getBoundingClientRect().left - 30);
                        event.target.style.setProperty('--bubble-x-offset', `${x}px`);
                        bubble.current?.focus();
                        bubble.current?.scrollIntoViewIfNeeded?.();
                        window.addEventListener('resize', closeInfo, {
                            once: true
                        });
                        document.body.addEventListener('click', closeInfo, {
                            once: true
                        });
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$analytics$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["manuallyTrackClick"])(details.current);
                    }
                }
            }["Info.useEffect"]);
            return ({
                "Info.useEffect": ()=>{
                    document.body.removeEventListener('click', closeInfo);
                    window.removeEventListener('resize', closeInfo);
                }
            })["Info.useEffect"];
        }
    }["Info.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
        className: `${css('info')} ${modifier}`,
        style: style,
        ref: details,
        "data-tracking-label": `ui-info/${parentId}/open`,
        "data-testid": "ui-info",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                className: css('info-summary'),
                "data-testid": "ui-info-summary",
                children: [
                    title,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$info$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        className: css('info-summary-icon'),
                        "aria-hidden": "true",
                        "data-testid": "ui-info-summary-icon"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-info/index.jsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-info/index.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: css('info-bubble'),
                "aria-live": "polite",
                tabIndex: "0",
                ref: bubble,
                "data-testid": "ui-info-bubble",
                children: children
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-info/index.jsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-info/index.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(Info, "WGrHSeDzssb1lnRXDdvENIxcLtc=");
_c = Info;
Info.propTypes = {
    modifier: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    style: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    children: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].any,
    title: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    parentId: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string
};
var _c;
__turbopack_context__.k.register(_c, "Info");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-page-header/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "dot-pulse": "styles-module__vuTcYW__dot-pulse",
  "page-header": "styles-module__vuTcYW__page-header",
  "page-header-body": "styles-module__vuTcYW__page-header-body",
  "page-header-cta": "styles-module__vuTcYW__page-header-cta",
  "page-header-link": "styles-module__vuTcYW__page-header-link",
  "page-header-link-group": "styles-module__vuTcYW__page-header-link-group",
  "page-header-logo": "styles-module__vuTcYW__page-header-logo",
  "page-header-title": "styles-module__vuTcYW__page-header-title",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$left$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/icons/arrow-left.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$right$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/icons/arrow-right.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$chevron$2d$right$2d$circle$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/icons/chevron-right-circle.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$tag$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/tag.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-page-header/styles.module.css [client] (css module)");
;
;
;
;
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function PageHeader({ style = {}, font, tag = 'h1', children, Logo, links, callToAction, type, theme }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${css('page-header')} display-any`,
        style: {
            '--title-font': font,
            ...style
        },
        "data-testid": "ui-page-header",
        "data-type": type,
        "data-theme": theme,
        children: [
            Logo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: css('page-header-logo'),
                "data-testid": "ui-page-header-logo",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Logo, {
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: css('page-header-body'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$tag$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        as: tag,
                        className: `${css('page-header-title')} display-any`,
                        "data-testid": "ui-page-header-title",
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    callToAction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        href: callToAction.url,
                        className: css('page-header-cta'),
                        passHref: true,
                        "data-tracking-label": "ui-page-header/cta",
                        "data-testid": "ui-page-header-cta",
                        target: callToAction.target,
                        onClick: callToAction.onclick,
                        children: [
                            callToAction.text,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$chevron$2d$right$2d$circle$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `display-any ${css('page-header-link-group')}`,
                        children: links && links.map((link, index)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.url,
                                scroll: false,
                                className: `${css('page-header-link')}`,
                                "data-type": link.type,
                                passHref: true,
                                "data-tracking-label": `ui-page-header/${link.trackingLabel || 'link'}`,
                                "data-testid": "ui-page-header-link",
                                target: link.target,
                                onClick: link.onclick,
                                children: [
                                    link.backLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$left$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx",
                                        lineNumber: 99,
                                        columnNumber: 37
                                    }, this),
                                    link.hiddenTextPrefix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "u-hide-visually",
                                        children: [
                                            link.hiddenTextPrefix,
                                            " "
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx",
                                        lineNumber: 100,
                                        columnNumber: 45
                                    }, this),
                                    link.text,
                                    !link.backLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$right$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx",
                                        lineNumber: 102,
                                        columnNumber: 38
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx",
                                lineNumber: 87,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c = PageHeader;
var _c;
__turbopack_context__.k.register(_c, "PageHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-section-header/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "section-header": "styles-module__SCDadW__section-header",
  "section-header-chevron": "styles-module__SCDadW__section-header-chevron",
  "section-header-link": "styles-module__SCDadW__section-header-link",
  "section-header-title": "styles-module__SCDadW__section-header-title",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$right$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/icons/arrow-right.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-section-header/styles.module.css [client] (css module)");
;
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function SectionHeader({ modifier = '', style, size, tag = 'h2', text = '', children, id = '', VOText, href = '', textLink = false }) {
    function iframeClickHandler() {
        if (window && window.top) {
            window.top.postMessage({
                type: 'iframe-banner-click',
                context: text
            }, '*');
        }
    }
    const Tag = tag;
    const HeaderContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${css('section-header')} ${modifier}`,
        style: {
            ...style
        },
        "data-size": size,
        "data-testid": "ui-section-header",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                className: css('section-header-title'),
                id: id,
                "data-testid": "ui-section-header-title",
                children: [
                    textLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: typeof textLink === 'string' ? textLink : '#',
                        "aria-hidden": "true",
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: text
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "u-hide-visually",
                        children: VOText || text
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            children,
            href || textLink ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$right$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                className: css('section-header-chevron'),
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx",
                lineNumber: 63,
                columnNumber: 27
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
    if (!href) {
        return HeaderContent;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        passHref: true,
        id: "election-seats-iframe-link",
        style: {
            textDecoration: 'none'
        },
        onClick: ()=>iframeClickHandler(),
        className: `${css('section-header-link')}`,
        target: "_parent",
        children: HeaderContent
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c = SectionHeader;
var _c;
__turbopack_context__.k.register(_c, "SectionHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-table/set-overflow.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>setOverflow
]);
function setOverflow(el) {
    if (!el) {
        return;
    }
    const { scrollWidth, offsetWidth, scrollLeft } = el;
    window.requestAnimationFrame(()=>{
        el.parentNode.dataset.overflow = scrollWidth - offsetWidth - scrollLeft > 5;
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-table/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "table": "styles-module__3_X6Ga__table",
  "table-container": "styles-module__3_X6Ga__table-container",
  "table-elected": "styles-module__3_X6Ga__table-elected",
  "table-excluded": "styles-module__3_X6Ga__table-excluded",
  "table-footnotes": "styles-module__3_X6Ga__table-footnotes",
  "table-key": "styles-module__3_X6Ga__table-key",
  "table-key-item": "styles-module__3_X6Ga__table-key-item",
  "table-long-value": "styles-module__3_X6Ga__table-long-value",
  "table-not_elected": "styles-module__3_X6Ga__table-not_elected",
  "table-overflow": "styles-module__3_X6Ga__table-overflow",
  "table-overflow-wrap": "styles-module__3_X6Ga__table-overflow-wrap",
  "table-short-value": "styles-module__3_X6Ga__table-short-value",
  "table-short-value-icon": "styles-module__3_X6Ga__table-short-value-icon",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Table
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$exports$2f$resize$2d$observer$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/exports/resize-observer.js [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserver$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/@juggle/resize-observer/lib/ResizeObserver.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$set$2d$overflow$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-table/set-overflow.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-table/styles.module.css [client] (css module)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
const TableLayout = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].createContext([]);
function Table({ children = [], layout = [], keys = [], footnotes = [], theme = '' }) {
    _s();
    const container = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Table.useEffect": ()=>{
            container.current.addEventListener('scroll', __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$set$2d$overflow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(null, container.current));
            const ro = new (window.ResizeObserver || __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f40$juggle$2f$resize$2d$observer$2f$lib$2f$ResizeObserver$2e$js__$5b$client$5d$__$28$ecmascript$29$__["ResizeObserver"])({
                "Table.useEffect": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$set$2d$overflow$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])(container.current)
            }["Table.useEffect"]);
            ro.observe(container.current);
        }
    }["Table.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TableLayout.Provider, {
        value: layout,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: css('table-container'),
            "data-theme": theme,
            "data-testid": "ui-table-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: css('table-key'),
                    "aria-hidden": "true",
                    children: keys.map((item, index)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: css('table-key-item'),
                            "data-table-icon": (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                value: item.value,
                                replace: {
                                    old: ' ',
                                    new: '-'
                                }
                            }),
                            children: item.value
                        }, index, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
                            lineNumber: 40,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: css('table-overflow-wrap'),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: css('table-overflow'),
                        ref: container,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: css('table'),
                            style: {
                                '--cols': layout.length
                            },
                            "data-testid": "ui-table",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("colgroup", {
                                    children: layout.map((col, index)=>{
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("col", {
                                            "data-layout": col,
                                            style: {
                                                '--col-width': col.match(/(\d+(\.\d+)?%)/)?.[0]
                                            }
                                        }, index, false, {
                                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
                                            lineNumber: 56,
                                            columnNumber: 21
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this),
                                children
                            ]
                        }, void 0, true, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                footnotes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: css('table-footnotes'),
                    children: footnotes.map((item, index)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `${css('table-footnotes-item')} ${item.modifier}`,
                            children: item.value
                        }, index, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
                            lineNumber: 72,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Table, "gP936EAkbq44zYYGRnj90r2fLhg=");
_c = Table;
const Header = ({ values = [] })=>{
    _s1();
    const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(TableLayout);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        className: "display-any",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            "data-testid": "ui-table-header-row",
            children: values.map((row, index)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                    "data-layout": layout[index],
                    "data-testid": "ui-table-header-cell",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: css('table-long-value'),
                            children: row?.value
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
                            lineNumber: 96,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: css('table-short-value'),
                            "aria-hidden": "true",
                            children: row.shortValue || row.value
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
                            lineNumber: 97,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index, true, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
                    lineNumber: 95,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
            lineNumber: 92,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(Header, "sgWGeBHabHyMNt9ROssfpLSBwzc=");
_c1 = Header;
const Body = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        children: children
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
        lineNumber: 113,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = Body;
const Row = /*#__PURE__*/ _s2(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].memo(_c3 = _s2(function Row({ values = [], fallback = 'No Data' }) {
    _s2();
    const layout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useContext"])(TableLayout);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-testid": "ui-table-row",
        children: values.map((row, index)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                className: `${row.modifier ? css(`table-${row.modifier.toLowerCase()}`) : ''}`,
                "data-layout": layout[index],
                "data-testid": "ui-table-cell",
                ...row.dataset,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "u-hide-visually",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                            value: row.value
                        }) === '-' ? fallback : row.value
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
                        lineNumber: 143,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: css('table-long-value'),
                        "aria-hidden": "true",
                        "data-testid": "ui-table-long-value",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                            value: row.value
                        })
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
                        lineNumber: 144,
                        columnNumber: 13
                    }, this),
                    row?.icon === '-' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: css('table-short-value'),
                        "aria-hidden": "true",
                        "data-testid": "ui-table-short-value",
                        children: row.icon
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
                        lineNumber: 148,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: css('table-short-value-icon'),
                        "aria-hidden": "true",
                        "data-table-icon": row?.icon,
                        children: row?.icon ? '' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                            value: row?.shortValue || row?.value
                        })
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
                        lineNumber: 152,
                        columnNumber: 15
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
                lineNumber: 136,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}, "sgWGeBHabHyMNt9ROssfpLSBwzc=")), "sgWGeBHabHyMNt9ROssfpLSBwzc=");
_c4 = Row;
Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Table");
__turbopack_context__.k.register(_c1, "Header");
__turbopack_context__.k.register(_c2, "Body");
__turbopack_context__.k.register(_c3, "Row$React.memo");
__turbopack_context__.k.register(_c4, "Row");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-az-nav/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "az-nav": "styles-module__TJx-rG__az-nav",
  "az-nav-main": "styles-module__TJx-rG__az-nav-main",
  "az-nav-more": "styles-module__TJx-rG__az-nav-more",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-az-nav/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AzNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/url-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$az$2d$nav$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-az-nav/styles.module.css [client] (css module)");
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$az$2d$nav$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function AzNav({ handler, selectedFilter = 'A', activeLetters = [], label, addButtons, hideAZNav = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: css('az-nav'),
        role: "tablist",
        "aria-label": label,
        "data-testid": "navigation-az",
        children: [
            addButtons && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: css('az-nav-more'),
                children: addButtons.map((button, index)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: button.disabled,
                        hidden: button.hidden,
                        type: "button",
                        onClick: ()=>{
                            button.handler(button.label);
                        },
                        "aria-selected": selectedFilter === button.label,
                        "data-tracking-label": `ui-az-nav/${button.label.toLowerCase()}`,
                        "aria-controls": `panel-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["slugify"])(button.label)}`,
                        id: `tab-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["slugify"])(button.label)}`,
                        role: "tab",
                        "data-testid": "navigation-az-button",
                        children: button.label
                    }, index, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-az-nav/index.tsx",
                        lineNumber: 41,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-az-nav/index.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this),
            !hideAZNav && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: css('az-nav-main'),
                children: [
                    ...Array(26)
                ].map((_, i)=>{
                    const letter = String.fromCharCode(i + 65);
                    const disabled = activeLetters.indexOf(letter) === -1;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        disabled: disabled,
                        onClick: ()=>{
                            handler(letter);
                        },
                        "aria-selected": selectedFilter === letter,
                        "data-tracking-label": `ui-az-nav/${letter}`,
                        "aria-controls": `panel-${letter}`,
                        id: `tab-${letter}`,
                        role: "tab",
                        "data-testid": "navigation-az-button",
                        children: letter
                    }, i, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-az-nav/index.tsx",
                        lineNumber: 68,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-az-nav/index.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-az-nav/index.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c = AzNav;
var _c;
__turbopack_context__.k.register(_c, "AzNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/us-parties.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getWinningParty",
    ()=>getWinningParty
]);
const getWinningParty = (partyResults, electoralVotes)=>{
    const party = partyResults?.filter((partyResult)=>{
        return partyResult.seatCount > 0;
    });
    if (!party || party.length === 0) {
        return undefined;
    }
    if (party.length > 1 || party[0].seatCount !== electoralVotes) {
        return {
            party: {
                abbreviation: 'US-Split-Banner',
                displayName: 'split',
                name: 'split'
            },
            seatCount: 0
        };
    }
    return party[0];
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/party-seat-blocks.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PartySeatBlocks",
    ()=>PartySeatBlocks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
;
function PartySeatBlocks({ seats, id, css, modifier, availableSeats = 0 }) {
    const hasSeats = Array.isArray(seats) && seats.length > 0;
    const hasPlaceholders = !hasSeats && availableSeats > 0;
    if (!hasSeats && !hasPlaceholders) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "u-hide-visually",
                children: "Elected parties: "
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/party-seat-blocks.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "list",
                className: css('party-container', modifier),
                "data-testid": `party-seat-blocks-${id}`,
                children: hasSeats ? seats.map((seat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "listitem",
                        className: css('party-block'),
                        "data-testid": `party-block-${index}`,
                        "data-party": seat.partyAbbreviation.toUpperCase(),
                        title: seat.partyDisplayName,
                        children: seat.partyDisplayName
                    }, `${id}-${index}`, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/party-seat-blocks.tsx",
                        lineNumber: 23,
                        columnNumber: 15
                    }, this)) : Array.from({
                    length: availableSeats
                }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "listitem",
                        className: css('party-block'),
                        "data-testid": `party-block-${index}`,
                        "data-party": "UNDECLARED",
                        title: "undeclared",
                        children: index === 0 ? 'Undeclared' : ''
                    }, `${id}-placeholder-${index}`, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/party-seat-blocks.tsx",
                        lineNumber: 35,
                        columnNumber: 15
                    }, this))
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/party-seat-blocks.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = PartySeatBlocks;
var _c;
__turbopack_context__.k.register(_c, "PartySeatBlocks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/area-item.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AreaItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$election$2d$types$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/election-types.ts [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/__generated__/graphql.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$generate$2d$election$2d$url$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/generate-election-url.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$id$2d$from$2d$name$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/id-from-name.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$party$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/party-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/url-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$party$2d$seat$2d$blocks$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/party-seat-blocks.tsx [client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function AreaItem({ item, isWard, electionSlug, electionType, css, statusMap = {}, statusType = 'gainOrHold', componentName = '', parentRegion }) {
    if (isWard) {
        const ward = item;
        const resolvedId = ward.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$id$2d$from$2d$name$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["idFromName"])(ward.displayName);
        const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$generate$2d$election$2d$url$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["generateElectionUrl"])({
            electionSlug,
            electionType,
            votingArea: {
                id: resolvedId,
                shortName: ward.displayName
            }
        });
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: css('list-item'),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                href: url,
                passHref: true,
                "data-testid": `ward-link-${resolvedId}`,
                className: css('ward-row'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: css('ward-name-box'),
                        "data-party": ward.gainHoldBySeats?.length ? 'declared' : undefined,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: css('ward-name'),
                            children: [
                                ward.displayName,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "u-hide-visually",
                                    children: ", "
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/area-item.tsx",
                                    lineNumber: 53,
                                    columnNumber: 35
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/area-item.tsx",
                            lineNumber: 52,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/area-item.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$party$2d$seat$2d$blocks$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["PartySeatBlocks"], {
                        seats: ward.gainHoldBySeats,
                        id: resolvedId,
                        css: css
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/area-item.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/area-item.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/area-item.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this);
    }
    const va = item;
    const { name, displayName, gainOrHold, votingStatus, id, electedCandidate, previouslyElectedCandidate, controllingParty, previouslyControllingParty, partyResults, electoralVotes, electedCandidates, seats } = va;
    const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$generate$2d$election$2d$url$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["generateElectionUrl"])({
        electionSlug,
        electionType,
        votingArea: {
            id,
            name: displayName || ''
        },
        parentRegion
    });
    const winnerDisplayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$party$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getWinnerName"])(partyResults, electoralVotes, electedCandidate, controllingParty, true);
    const sittingDisplayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$party$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getSittingPartyName"])(previouslyElectedCandidate, previouslyControllingParty, true);
    const mappedStatus = statusMap[votingStatus?.toUpperCase()];
    const statusText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setElectionStatus"])({
        statusType,
        winner: winnerDisplayName,
        sittingParty: sittingDisplayName,
        gainOrHold,
        status: mappedStatus
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: css('list-item'),
        "data-testid": "constituency-list-item",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            href: url,
            className: css('list-link'),
            "data-constituency-id": (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getId"])(id, '_'),
            "data-party": (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$party$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getDataParty"])(partyResults || [], electedCandidate, controllingParty, electoralVotes, votingStatus, electionType),
            "data-testid": "constituency-list-link",
            "data-tracking-label": `${componentName}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["slugify"])(name || '')}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: css('list-name'),
                    "data-testid": "constituency-list-name",
                    children: [
                        displayName,
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "u-hide-visually",
                            children: ", "
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/area-item.tsx",
                            lineNumber: 116,
                            columnNumber: 26
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/area-item.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                ' ',
                electedCandidates ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$party$2d$seat$2d$blocks$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["PartySeatBlocks"], {
                    seats: electedCandidates.map((ec)=>({
                            gainHoldStatus: gainOrHold ?? __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$_$5f$generated_$5f2f$graphql$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["GainHoldStatus"].Hold,
                            partyAbbreviation: ec.party.abbreviation,
                            partyDisplayName: ec.party.displayName
                        })),
                    id: id,
                    css: css,
                    modifier: "party-container-hex",
                    availableSeats: seats?.available
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/area-item.tsx",
                    lineNumber: 119,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: css('list-status'),
                    "data-testid": "constituency-list-status",
                    children: statusText
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/area-item.tsx",
                    lineNumber: 131,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/area-item.tsx",
            lineNumber: 100,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/area-item.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
_c = AreaItem;
var _c;
__turbopack_context__.k.register(_c, "AreaItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/filter-map.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterMap",
    ()=>filterMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$id$2d$from$2d$name$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/id-from-name.ts [client] (ecmascript)");
;
const filterMap = (list, max, style, mapSvg)=>{
    const mapStyle = mapSvg?.getAttribute('data-style') || '';
    if (list.length === max) {
        style.textContent = ``;
        return;
    }
    const nonMatches = list.map((item)=>`[data-id]:not([data-id="${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$id$2d$from$2d$name$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["idFromName"])(item.displayName || item.shortName || item.name)}"])`).join('');
    const nonKeyMatches = list.map((item)=>`([data-party-key~="${item?.controllingParty?.abbreviation || item?.electedCandidate?.party?.abbreviation || item.votingStatus}" i])`).join(':not');
    let css = '';
    if (mapStyle === 'standard') {
        css = list.length > 0 ? `#ui-election-map-svg #Regions {
          filter: none;
        }
        #ui-election-map-svg ${nonMatches} {
          fill: var(--election-map-standard-search-fill);
          stroke: var(--election-map-standard-search-stroke);
          pointer-events: none;
        }` : `#ui-election-map-svg #Regions {
          filter: none;
        }
        #ui-election-map-svg [data-id] {
          fill: var(--election-map-standard-search-fill);
          stroke: var(--election-map-standard-search-stroke);
        }`;
    } else {
        css = `
      path.border {stroke: var(--map-borders-stroke-color-search)}
      #ui-election-map-svg ${nonMatches} {
        fill-opacity: 0;
        stroke-opacity: 0.4;
        pointer-events: none;
      }`;
    }
    style.textContent = `${css} #ui-election-map [data-party-key]:not${nonKeyMatches} {
    display: none !important;
  }`;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "list": "styles-module__0vPnBq__list",
  "list-item": "styles-module__0vPnBq__list-item",
  "list-items": "styles-module__0vPnBq__list-items",
  "list-link": "styles-module__0vPnBq__list-link",
  "list-more": "styles-module__0vPnBq__list-more",
  "list-more-us": "styles-module__0vPnBq__list-more-us",
  "list-name": "styles-module__0vPnBq__list-name",
  "list-navigation": "styles-module__0vPnBq__list-navigation",
  "list-navigation-search": "styles-module__0vPnBq__list-navigation-search",
  "list-navigation-search-icon": "styles-module__0vPnBq__list-navigation-search-icon",
  "list-no-results": "styles-module__0vPnBq__list-no-results",
  "list-status": "styles-module__0vPnBq__list-status",
  "no-js": "styles-module__0vPnBq__no-js",
  "party-block": "styles-module__0vPnBq__party-block",
  "party-container": "styles-module__0vPnBq__party-container",
  "party-container-hex": "styles-module__0vPnBq__party-container-hex",
  "ward-name": "styles-module__0vPnBq__ward-name",
  "ward-name-box": "styles-module__0vPnBq__ward-name-box",
  "ward-row": "styles-module__0vPnBq__ward-row",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AreaList",
    ()=>AreaList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$az$2d$nav$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-az-nav/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$down$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/icons/arrow-down.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$up$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/icons/arrow-up.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$close$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/icons/close.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$search$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/icons/search.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$analytics$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/analytics.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/array-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$id$2d$from$2d$name$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/id-from-name.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$postcode$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/postcode-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/url-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$area$2d$item$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/area-item.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$filter$2d$map$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/filter-map.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/styles.module.css [client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function AreaList(props) {
    _s();
    const { showItems = 10, showSearch, showFilterOptions, hideAZNav = false, votingAreasDeclared = 0, wardsDeclared = 0, inputPlaceholder, showInColumns, mode } = props;
    const isConstituency = mode === 'constituency';
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const electionType = isConstituency ? props.electionType : props.election.electionType;
    // --- Mode-specific configuration ---
    const notFoundMessage = props.notFoundMessage ?? (isConstituency ? '' : 'No wards found.');
    const initialLetter = isConstituency ? props.initialLetter ?? 'All' : 'All';
    const sort = isConstituency ? props.sort ?? 'displayName' : 'displayName';
    const order = isConstituency ? props.order ?? __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].asc : __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].asc;
    // Items and counts
    const rawItems = isConstituency ? props.votingAreas : props.wards;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sortItems"])(rawItems, [
        {
            sortField: sort,
            direction: order
        }
    ]);
    const totalCount = isConstituency ? props.votingAreasCount ?? 650 : rawItems.length;
    // --- Refs ---
    const list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const noResultsDiv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapcss = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // --- State ---
    const [displayItems, setDisplayItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(rawItems);
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(isConstituency ? totalCount : totalCount - showItems);
    const [searchString, setSearchString] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedFilter, setSelectedFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(initialLetter);
    const [noSearchResults, setNoSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Active letters for AZ nav
    const activeLetters = Array.from(new Set(rawItems.map((item)=>isConstituency ? item.name?.charAt(0) : item.displayName?.charAt(0))));
    // Ward-specific: build council URL from route
    const councilUrl = !isConstituency ? (()=>{
        const wardProps = props;
        const constituencySegments = Array.isArray(router.query.constituency) ? router.query.constituency : [
            router.query.constituency
        ];
        return `${wardProps.election.slug}/${constituencySegments[0]}`;
    })() : '';
    const electionSlug = isConstituency ? router.query.election : councilUrl;
    // --- Effects ---
    // Re-sync state when data changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AreaList.useEffect": ()=>{
            if (isConstituency) {
                // Constituency: re-apply current filter/search to new data, preserve expanded state
                const currentExpandedState = isExpanded;
                searchString === '' ? handleFilterChange(selectedFilter) : handleSearchChange(searchString);
                setIsExpanded(currentExpandedState);
            } else {
                // Ward: update items but preserve expanded state
                setDisplayItems([
                    ...rawItems
                ]);
                setCount(rawItems.length - showItems);
                setSelectedFilter(initialLetter);
                setSearchString('');
                setNoSearchResults(false);
            }
        }
    }["AreaList.useEffect"], [
        isConstituency ? props.votingAreas : props.wards
    ]);
    // Constituency-specific: map filter side effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AreaList.useEffect": ()=>{
            if (!isConstituency) {
                return;
            }
            const constProps = props;
            if (constProps.disableMapFilter) {
                return;
            }
            const frame = requestAnimationFrame({
                "AreaList.useEffect.frame": ()=>{
                    if (!mapcss.current) {
                        return;
                    }
                    const mapSvg = document.querySelector('#ui-election-map-svg');
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$filter$2d$map$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["filterMap"])(displayItems, constProps.votingAreasCount ?? 650, mapcss.current, mapSvg);
                }
            }["AreaList.useEffect.frame"]);
            return ({
                "AreaList.useEffect": ()=>cancelAnimationFrame(frame)
            })["AreaList.useEffect"];
        }
    }["AreaList.useEffect"], [
        displayItems
    ]);
    // --- Common helpers ---
    const resetSearch = ()=>{
        setSearchString('');
        setDisplayItems([
            ...rawItems
        ]);
        setIsExpanded(false);
        setCount(isConstituency ? totalCount : rawItems.length - showItems);
        setSelectedFilter(initialLetter);
        setNoSearchResults(false);
    };
    const updateFilteredItems = (filtered)=>{
        setDisplayItems(filtered);
        setCount(filtered.length - showItems);
        setNoSearchResults(filtered.length === 0);
    };
    const filterByString = (searchValue)=>{
        // backslashes will not be escaped correctly when the regex is created, so they need to be encoded first
        const escapedSearchValue = searchValue.replace(/[.*+?^${}()|[\]\\]/g, '');
        const regex = searchValue.length > 1 ? new RegExp(`\\b${escapedSearchValue}`, 'i') : new RegExp(`^${escapedSearchValue}`, 'i');
        const filtered = rawItems.filter((item)=>{
            if (isConstituency) {
                const va = item;
                return va.name.match(regex) || va.shortName?.match(regex);
            }
            return item.displayName.match(regex);
        });
        updateFilteredItems(filtered);
    };
    const filterById = (ids)=>{
        const filtered = rawItems.filter((item)=>{
            if (isConstituency) {
                return ids.includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$id$2d$from$2d$name$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["idFromName"])(item.name));
            }
            return ids.includes((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$id$2d$from$2d$name$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["idFromName"])(item.displayName));
        });
        updateFilteredItems(filtered);
    };
    // --- Search handler ---
    const handleSearchChange = async (searchValue)=>{
        setSearchString(searchValue);
        setSelectedFilter('');
        if (searchValue.length === 0) {
            resetSearch();
            return;
        }
        // Postcode filtering (constituency-only)
        if (isConstituency) {
            const formatted = searchValue.trim().replace(/[.*+?^${}()|[\]\\]/g, '').toUpperCase();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$postcode$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["isFullPostcode"])(formatted)) {
                filterById(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$postcode$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fetchVotingAreas"])(formatted, electionType));
                return;
            }
            const outcodes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$postcode$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getOutcodes"])(formatted);
            if (outcodes) {
                const ids = (await Promise.all(outcodes.map((o)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$postcode$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fetchVotingAreas"])(o, electionType)))).flat();
                filterById(ids);
                return;
            }
        }
        // String filtering (fallback for constituency, primary for wards)
        filterByString(searchValue);
    };
    // --- Declared filter ---
    const handleDeclared = ()=>{
        setIsExpanded(false);
        setSelectedFilter('Latest declared');
        setSearchString('');
        if (isConstituency) {
            const filteredAreas = rawItems.filter((area)=>area.votingStatus.match(/DECLARED|RUSH/));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sortItems"])(filteredAreas, [
                {
                    sortField: 'lastUpdated',
                    direction: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].desc
                }
            ]);
            setDisplayItems(filteredAreas);
            setCount(filteredAreas.length - showItems);
            setNoSearchResults(filteredAreas.length === 0);
        } else {
            const declaredWards = rawItems.filter((ward)=>ward.status?.match(/DECLARED|RUSH/));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sortItems"])(declaredWards, [
                {
                    sortField: 'lastUpdated',
                    direction: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].desc
                }
            ]);
            setDisplayItems(declaredWards);
            setCount(declaredWards.length - showItems);
            setNoSearchResults(declaredWards.length === 0);
        }
    };
    // --- Changed hands filter ---
    const handleChangedHands = ()=>{
        setIsExpanded(false);
        setSelectedFilter('Changed hands');
        setSearchString('');
        if (isConstituency) {
            const filteredConstituencies = rawItems.filter((area)=>area.votingStatus.match(/DECLARED|RUSH/) && (area.previouslyControllingParty?.abbreviation && area.controllingParty?.abbreviation !== area.previouslyControllingParty?.abbreviation || area.previouslyElectedCandidate?.party?.abbreviation && area.electedCandidate?.party?.abbreviation !== area.previouslyElectedCandidate?.party?.abbreviation));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sortItems"])(filteredConstituencies, [
                {
                    sortField: 'lastUpdated',
                    direction: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].desc
                }
            ]);
            setDisplayItems(filteredConstituencies);
            setCount(filteredConstituencies.length - showItems);
            setNoSearchResults(filteredConstituencies.length === 0);
        } else {
            const changedSeats = rawItems.filter((ward)=>ward.status?.match(/DECLARED|RUSH/) && ward.gainHoldBySeats?.some((seat)=>seat.previousPartyAbbreviation && seat.previousPartyAbbreviation !== seat.partyAbbreviation));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sortItems"])(changedSeats, [
                {
                    sortField: 'lastUpdated',
                    direction: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].desc
                }
            ]);
            setDisplayItems(changedSeats);
            setCount(changedSeats.length - showItems);
            setNoSearchResults(changedSeats.length === 0);
        }
    };
    // --- Filter change handler ---
    const handleFilterChange = (filter)=>{
        if (!filter) {
            return;
        }
        setSelectedFilter(filter);
        setSearchString('');
        setIsExpanded(false);
        if (filter.match(/all/i)) {
            resetSearch();
            return;
        }
        if (filter.match(/declared/i)) {
            handleDeclared();
            return;
        }
        if (filter.match(/Changed hands/i)) {
            handleChangedHands();
            return;
        }
        filterByString(filter);
    };
    // --- Toggle expand ---
    const handleToggleChange = ()=>{
        setIsExpanded(!isExpanded);
        const anchorTag = list.current?.querySelector(`li:nth-child(${showItems}) a`);
        anchorTag?.focus();
    };
    // --- Component name for tracking ---
    const componentName = isConstituency ? 'ui-election-constituency-list' : props.componentName || 'ui-election-ward-list';
    // --- AZ Nav buttons ---
    const azNavButtons = isConstituency ? [
        {
            label: 'All',
            handler: resetSearch,
            disabled: false
        },
        {
            label: 'Latest declared',
            handler: handleDeclared,
            disabled: !rawItems.some((area)=>area.votingStatus?.match(/DECLARED|RUSH/))
        },
        {
            label: 'Changed hands',
            handler: handleChangedHands,
            disabled: votingAreasDeclared === 0,
            hidden: !rawItems.some((area)=>area.previouslyControllingParty?.abbreviation || area.previouslyElectedCandidate?.party?.abbreviation)
        }
    ] : [
        {
            label: 'All',
            handler: resetSearch,
            disabled: false
        },
        {
            label: 'Latest declared',
            handler: handleDeclared,
            disabled: wardsDeclared === 0
        },
        {
            label: 'Changed hands',
            handler: handleChangedHands,
            disabled: wardsDeclared === 0 || !rawItems.some((ward)=>ward.gainHoldBySeats?.some((seat)=>seat.previousPartyAbbreviation && seat.previousPartyAbbreviation !== seat.partyAbbreviation))
        }
    ];
    const azNavLabel = isConstituency ? 'Find constituencies by letter' : 'Find wards by letter';
    // --- Show more button ---
    const showMoreText = (()=>{
        if (isConstituency && electionType === 'US_PRESIDENTIAL') {
            return `Show ${isExpanded ? 'fewer states' : 'all states'}`;
        }
        return `Show ${isExpanded ? 'fewer' : 'more'}`;
    })();
    const showMoreClass = isConstituency && electionType === 'US_PRESIDENTIAL' ? 'list-more-us' : 'list-more';
    const showMoreTestId = isConstituency ? 'constituency-list-button' : 'ward-list-button';
    const noResultsTestId = isConstituency ? 'search-not-found-message' : 'ward-list-not-found-message';
    // --- Show more visibility ---
    const showMoreVisible = isConstituency ? count > 0 && displayItems.length > showItems : count > 0;
    // --- No results visibility ---
    const noResultsVisible = isConstituency ? showSearch && noSearchResults === true : displayItems.length === 0;
    // --- Render ---
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: css('list'),
        "data-testid": isConstituency ? 'constituency-list' : 'ward-list',
        children: [
            isConstituency && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                ref: mapcss
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx",
                lineNumber: 371,
                columnNumber: 26
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: css('list-navigation'),
                children: [
                    showSearch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: css('list-navigation-search'),
                        "data-testid": "navigation-search",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                minLength: 1,
                                value: searchString,
                                placeholder: inputPlaceholder,
                                "aria-label": inputPlaceholder,
                                "data-tracking-label": `${componentName}/search-box`,
                                onChange: (ev)=>handleSearchChange(ev.target.value),
                                onClick: (ev)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$analytics$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["manuallyTrackClick"])(ev.target),
                                autoComplete: "off",
                                spellCheck: "false",
                                "data-testid": "navigation-search-input",
                                ref: searchInput
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx",
                                lineNumber: 377,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                className: css('list-navigation-search-icon'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$search$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx",
                                    lineNumber: 392,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx",
                                lineNumber: 391,
                                columnNumber: 13
                            }, this),
                            searchString && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "u-hide-visually",
                                        onClick: ()=>{
                                            if (noSearchResults) {
                                                noResultsDiv.current?.focus();
                                                return;
                                            }
                                            const firstResult = list.current?.querySelector('li:first-child a');
                                            firstResult?.focus();
                                        },
                                        "data-testid": "navigation-search-skip",
                                        "data-tracking-label": `${componentName}/search-skip-button`,
                                        children: "Skip to results"
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx",
                                        lineNumber: 396,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            resetSearch();
                                            searchInput.current?.focus();
                                        },
                                        "data-testid": "navigation-search-clear",
                                        "data-tracking-label": `${componentName}/search-clear-button`,
                                        "aria-label": "Clear search",
                                        children: [
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$close$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx",
                                                lineNumber: 423,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, "clearButton", true, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx",
                                        lineNumber: 411,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx",
                                lineNumber: 395,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx",
                        lineNumber: 376,
                        columnNumber: 11
                    }, this),
                    showFilterOptions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$az$2d$nav$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        handler: handleFilterChange,
                        selectedFilter: selectedFilter,
                        activeLetters: activeLetters,
                        hideAZNav: hideAZNav,
                        label: azNavLabel,
                        addButtons: azNavButtons
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx",
                        lineNumber: 430,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx",
                lineNumber: 374,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-expanded": isExpanded,
                role: showFilterOptions ? 'tabpanel' : undefined,
                "aria-labelledby": `tab-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$id$2d$from$2d$name$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["idFromName"])(selectedFilter).toLowerCase()}`,
                id: `panel-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$id$2d$from$2d$name$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["idFromName"])(selectedFilter).toLowerCase()}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: css('list-items'),
                    ref: list,
                    "data-testid": isConstituency ? 'constituency-list-items' : undefined,
                    "data-show-in-columns": showInColumns || undefined,
                    style: {
                        '--rows': isExpanded ? Math.ceil(displayItems.length / 2) : Math.ceil(Math.min(showItems, displayItems.length) / 2)
                    },
                    children: displayItems.slice(0, isExpanded ? displayItems.length : showItems).map((item)=>{
                        const key = isConstituency ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["slugify"])(item.shortName || '') : item.id || (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$id$2d$from$2d$name$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["idFromName"])(item.displayName);
                        const constProps = props;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$area$2d$item$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            item: item,
                            isWard: !isConstituency,
                            electionSlug: electionSlug,
                            electionType: electionType,
                            css: css,
                            statusMap: constProps.statusMap ?? {},
                            statusType: constProps.statusType ?? 'gainOrHold',
                            componentName: componentName,
                            parentRegion: isConstituency ? constProps.parentRegionMap?.[item.id] : undefined
                        }, key, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx",
                            lineNumber: 467,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx",
                    lineNumber: 448,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx",
                lineNumber: 442,
                columnNumber: 7
            }, this),
            noResultsVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: css('list-no-results'),
                "data-testid": noResultsTestId,
                children: notFoundMessage
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx",
                lineNumber: 486,
                columnNumber: 9
            }, this),
            showMoreVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: css(showMoreClass),
                type: "button",
                onClick: handleToggleChange,
                "data-testid": showMoreTestId,
                "data-tracking-label": `${componentName}/show-${isExpanded ? 'fewer' : 'more'}`,
                children: [
                    showMoreText,
                    isConstituency && electionType === 'US_PRESIDENTIAL' && (isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$up$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx",
                        lineNumber: 503,
                        columnNumber: 27
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$down$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx",
                        lineNumber: 503,
                        columnNumber: 60
                    }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx",
                lineNumber: 493,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx",
        lineNumber: 370,
        columnNumber: 5
    }, this);
}
_s(AreaList, "xvh6NZYCVTxLJA1Vo1CAkKQueXE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AreaList;
var _c;
__turbopack_context__.k.register(_c, "AreaList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-seats/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "seats": "styles-module__yRzMDW__seats",
  "seats-change": "styles-module__yRzMDW__seats-change",
  "seats-count": "styles-module__yRzMDW__seats-count",
  "seats-item": "styles-module__yRzMDW__seats-item",
  "seats-list": "styles-module__yRzMDW__seats-list",
  "seats-party": "styles-module__yRzMDW__seats-party",
  "seats-result": "styles-module__yRzMDW__seats-result",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-seats/seat/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Seat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-seats/styles.module.css [client] (css module)");
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function Seat({ seat, history }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: css('seats-item'),
        style: {
            '--start': history[1],
            '--end': history[0]
        },
        "data-testid": "ui-election-seats-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: css('seats-result'),
                "data-party": seat.party.abbreviation,
                "data-testid": "ui-election-seats-result",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: css('seats-party'),
                        "data-testid": "ui-election-seats-party",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "u-hide-visually",
                                children: seat.party.name
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-seats/seat/index.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                    value: seat.party.displayName,
                                    replace: {
                                        old: new RegExp(/\bSF\b/),
                                        new: 'Sinn Fein'
                                    }
                                })
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-seats/seat/index.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-seats/seat/index.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${css('seats-count')} display-any`,
                        "data-testid": "ui-election-seats-count",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prettifyNumber"])(seat.seatCount)
                                })
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-seats/seat/index.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "u-hide-visually",
                                children: [
                                    "Seats ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prettifyNumber"])(seat.seatCount),
                                        fallback: 'Undeclared'
                                    })
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-seats/seat/index.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-seats/seat/index.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-seats/seat/index.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: css('seats-change'),
                "data-change": seat.seatChange === null ? 'unknown' : Math.sign(seat.seatChange),
                "data-testid": "ui-election-seats-change",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prependSignToParseableNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prettifyNumber"])(seat.seatChange)
                        }))
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-seats/seat/index.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "u-hide-visually",
                        children: [
                            "Change in seats",
                            ' ',
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prependSignToParseableNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prettifyNumber"])(seat.seatChange),
                                fallback: 'Undeclared'
                            }))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-seats/seat/index.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-seats/seat/index.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-seats/seat/index.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = Seat;
var _c;
__turbopack_context__.k.register(_c, "Seat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-seats/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ElectionSeats
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/array-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$seat$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-seats/seat/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-seats/styles.module.css [client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
// Build the other-party merge object used as the aggregated last item.
const otherPartyEntry = (lastItemName)=>({
        party: {
            displayName: lastItemName,
            abbreviation: lastItemName,
            name: 'Other parties'
        }
    });
/**
 * Build the displayed seat data.
 *
 * conditionalOther = true  (suppress Other once data arrives)
 *   - All seatCounts null (no data yet) → show Other as a placeholder.
 *   - Data present, no tail party has ≥ 1 seat (null treated as 0) → no Other.
 *   - Data present, any tail party has ≥ 1 seat → aggregate tail into Other.
 *
 * conditionalOther = false  (show Other by default)
 *   - Tail is empty or every tail party has exactly 0 declared seats → no Other.
 *   - null seatCounts are treated as undeclared (not zero), so Other is kept
 *     while results are still coming in.
 *   - Otherwise → aggregate tail into Other.
 */ function buildData(combined, items, lastItemName, conditionalOther, allUndeclared, mainCount) {
    const tailStart = Math.min(items, mainCount);
    const tail = combined.slice(tailStart);
    if (conditionalOther) {
        // No data yet → show the top `items` parties with no Other.
        // Other only appears once real data arrives and a party beyond the `items` slots has ≥ 1 seat.
        if (allUndeclared) {
            return combined.slice(0, items);
        }
        // Data is in: suppress Other unless a party beyond the display slots has a declared seat count ≥ 1.
        const beyondSlots = combined.slice(items);
        const tailHasSeats = beyondSlots.some((s)=>(s?.seatCount ?? 0) > 0);
        if (!tailHasSeats) {
            return combined.slice(0, items);
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["mergeItems"])(items - 1, combined, otherPartyEntry(lastItemName));
    }
    // Always show Other as the last slot, aggregating any tail parties.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["mergeItems"])(items - 1, combined, otherPartyEntry(lastItemName));
}
function ElectionSeats({ modifier = '', style, seats = [], items = 6, mainParties = [], mainPartyKey = 'party.abbreviation', sortBy = 'seatCount', lastItemName = 'Other', theme = '', hideChange = false, conditionalOther = false }) {
    _s();
    console.log(99, seats);
    const { newArray: main, oldArray: other } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["splitArrayByValues"])(mainPartyKey, mainParties, seats);
    // Sort all parties together; use voteShare as a tiebreaker when seat counts are equal.
    const combined = [
        ...main,
        ...other
    ];
    if (sortBy) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sortItems"])(combined, [
            {
                sortField: sortBy,
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].desc
            },
            {
                sortField: 'voteShare',
                direction: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].desc
            }
        ]);
    }
    // Ensure only parties listed in `mainParties` can appear as individual entries.
    // Any non-main parties will be treated as part of the tail (Other).
    const mainSet = new Set(mainParties);
    const mainsSorted = combined.filter((s)=>mainSet.has(s?.party?.abbreviation));
    const othersSorted = combined.filter((s)=>!mainSet.has(s?.party?.abbreviation));
    const displayCombined = [
        ...mainsSorted,
        ...othersSorted
    ];
    const allUndeclared = seats.length > 0 && seats.every((s)=>s?.seatCount === null || s?.seatCount === undefined);
    const data = buildData(displayCombined, items, lastItemName, conditionalOther, allUndeclared, mainsSorted.length);
    const [animating, setAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Track each party's previous index so CSS can animate position changes.
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        "ElectionSeats.useState": ()=>data.reduce({
                "ElectionSeats.useState": (acc, seat, index)=>{
                    acc[seat.party.abbreviation] = [
                        index
                    ];
                    return acc;
                }
            }["ElectionSeats.useState"], {})
    }["ElectionSeats.useState"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ElectionSeats.useEffect": ()=>{
            data.forEach({
                "ElectionSeats.useEffect": (seat, index)=>{
                    setHistory({
                        "ElectionSeats.useEffect": (prev)=>({
                                ...prev,
                                [seat.party.abbreviation]: [
                                    index,
                                    ...prev[seat.party.abbreviation] ?? []
                                ]
                            })
                    }["ElectionSeats.useEffect"]);
                }
            }["ElectionSeats.useEffect"]);
            setAnimating(false);
            const timeout = setTimeout({
                "ElectionSeats.useEffect.timeout": ()=>setAnimating(true)
            }["ElectionSeats.useEffect.timeout"], 50);
            return ({
                "ElectionSeats.useEffect": ()=>clearTimeout(timeout)
            })["ElectionSeats.useEffect"];
        }
    }["ElectionSeats.useEffect"], [
        seats
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${css('seats')} ${modifier}`,
        style: style,
        "data-animating": animating,
        "data-testid": "ui-election-seats",
        "data-theme": theme,
        "data-hide-change": hideChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: `${css('seats-list')} display-any`,
            "data-testid": "ui-election-seats-list",
            children: data.map((seat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$seat$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    seat: seat,
                    history: history[seat.party.abbreviation] ?? [
                        items - 1,
                        items - 1
                    ]
                }, seat.party.abbreviation ?? index, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-seats/index.tsx",
                    lineNumber: 169,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-seats/index.tsx",
            lineNumber: 167,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-seats/index.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
_s(ElectionSeats, "CdFBLNB4LnMSPiLrQSJNdcbrXI4=");
_c = ElectionSeats;
var _c;
__turbopack_context__.k.register(_c, "ElectionSeats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-winning-candidate/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "details": "styles-module__QQ9NAq__details",
  "name": "styles-module__QQ9NAq__name",
  "party": "styles-module__QQ9NAq__party",
  "rosette": "styles-module__QQ9NAq__rosette",
  "winner": "styles-module__QQ9NAq__winner",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-winning-candidate/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WinningCandidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$winning$2d$candidate$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-winning-candidate/styles.module.css [client] (css module)");
;
;
function WinningCandidate({ electedCandidate, country = 'england' }) {
    const candidateName = [
        electedCandidate.candidate?.firstName,
        electedCandidate.candidate?.surname
    ].filter(Boolean).join(' ').trim();
    const partyName = electedCandidate.party?.name || electedCandidate.party?.displayName || electedCandidate.party?.abbreviation;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$winning$2d$candidate$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].winner} display-any`,
        "data-country": country,
        "data-testid": "winning-candidate",
        "data-party": electedCandidate.party.abbreviation,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$winning$2d$candidate$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].rosette,
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-winning-candidate/index.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$winning$2d$candidate$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].details,
                children: [
                    candidateName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$winning$2d$candidate$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].name} display-any`,
                        "data-testid": "candidate-name",
                        children: candidateName
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-winning-candidate/index.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${candidateName ? __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$winning$2d$candidate$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].party : __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$winning$2d$candidate$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"].name} display-any`,
                        "data-testid": "party-name",
                        children: partyName
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-winning-candidate/index.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-winning-candidate/index.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-winning-candidate/index.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = WinningCandidate;
var _c;
__turbopack_context__.k.register(_c, "WinningCandidate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-members/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "members": "styles-module__u9liAq__members",
  "members-body": "styles-module__u9liAq__members-body",
  "members-icon": "styles-module__u9liAq__members-icon",
  "members-item": "styles-module__u9liAq__members-item",
  "members-list": "styles-module__u9liAq__members-list",
  "members-name": "styles-module__u9liAq__members-name",
  "members-party": "styles-module__u9liAq__members-party",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-members/member/index.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Member
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$members$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-members/styles.module.css [client] (css module)");
;
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$members$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function Member({ member }) {
    const memberName = [
        member?.candidate.firstName,
        member?.candidate.surname
    ].join(' ').trim();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: css('members-item'),
        ...!member && {
            'aria-hidden': 'true'
        },
        "data-testid": "ui-elected-members-item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: css('members-icon'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    fill: "none",
                    "aria-hidden": "true",
                    role: "img",
                    viewBox: "0 0 54 66",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                            id: "clip",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                clipRule: "evenodd",
                                d: "m38.3859 30.0926c-.7503-.2472-1.5618-.1093-2.2465.2778-2.6994 1.5291-5.8144 2.4063-9.1394 2.4063-3.3228 0-6.4378-.8772-9.1372-2.4063-.6847-.3871-1.4962-.525-2.2444-.2778-8.79809 2.9138-14.8684 9.0978-14.8684 16.2553v19.4666h52.5v-19.4666c0-7.1575-6.0681-13.3415-14.8641-16.2553zm-11.3852-1.9073c7.7329 0 14-6.2672 14-14 0-7.73061-6.2671-13.9978-14-13.9978-7.7328 0-14 6.26719-14 13.9978 0 7.7328 6.2672 14 14 14z",
                                fillRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-members/member/index.jsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-members/member/index.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("foreignObject", {
                            x: "0",
                            y: "0",
                            width: "54",
                            height: "66",
                            clipPath: "url(#clip)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '100%',
                                    height: '100%'
                                },
                                "data-party": (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                    value: member?.party.abbreviation,
                                    fallback: 'Result Not In'
                                }),
                                xmlns: "http://www.w3.org/1999/xhtml"
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-members/member/index.jsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-members/member/index.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-members/member/index.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-members/member/index.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: css('members-body'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: css('members-party'),
                        "data-testid": "ui-elected-members-party",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "u-hide-visually",
                                children: member?.party.name
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-members/member/index.jsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                "aria-hidden": "true",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                    value: member?.party.abbreviation,
                                    replace: {
                                        old: new RegExp(/\bSF\b/),
                                        new: 'Sinn Fein'
                                    },
                                    fallback: ''
                                })
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-members/member/index.jsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-members/member/index.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: css('members-name'),
                        "data-testid": "ui-elected-members-name",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: memberName
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-members/member/index.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-members/member/index.jsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-members/member/index.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-members/member/index.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Member;
Member.propTypes = {
    member: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    id: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string
};
var _c;
__turbopack_context__.k.register(_c, "Member");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-members/index.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ElectionMembers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$members$2f$member$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-members/member/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$members$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-members/styles.module.css [client] (css module)");
;
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$members$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
const getMembers = (data = [], seats)=>{
    const members = [];
    for(let i = 0; i < seats; i++){
        members.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$members$2f$member$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            member: data[i],
            id: `mla-${i}`
        }, `mla-${i}`, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-members/index.jsx",
            lineNumber: 12,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0)));
    }
    return members;
};
function ElectionMembers({ modifier = '', style, data, seats }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${css('members')} ${modifier}`,
        style: style,
        "data-testid": "ui-elected-members",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: css('members-list'),
            "data-testid": "ui-elected-members-list",
            children: getMembers(data, seats)
        }, void 0, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-members/index.jsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-members/index.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = ElectionMembers;
ElectionMembers.propTypes = {
    modifier: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].string,
    style: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    data: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].array,
    seats: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].number
};
var _c;
__turbopack_context__.k.register(_c, "ElectionMembers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "us-vote-share-graph": "styles-module__oGSd-a__us-vote-share-graph",
  "us-vote-share-graph-header": "styles-module__oGSd-a__us-vote-share-graph-header",
  "us-vote-share-graph-result-party": "styles-module__oGSd-a__us-vote-share-graph-result-party",
  "us-vote-share-graph-result-votes": "styles-module__oGSd-a__us-vote-share-graph-result-votes",
  "us-vote-share-graph-result-votes-bar": "styles-module__oGSd-a__us-vote-share-graph-result-votes-bar",
  "us-vote-share-graph-result-votes-coloured-bar": "styles-module__oGSd-a__us-vote-share-graph-result-votes-coloured-bar",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "USVoteShareGraph",
    ()=>USVoteShareGraph
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$us$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/us-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$us$2d$vote$2d$share$2d$graph$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/styles.module.css [client] (css module)");
;
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$us$2d$vote$2d$share$2d$graph$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function USVoteShareGraph({ columnHeaders = [
    'Candidate',
    'Votes'
], partyResults, dynamicOrdering = false, showHeader = true, ...props }) {
    const orderPartyResultsByVoteCounts = (partyResults)=>{
        const orderedParties = partyResults.sort((a, b)=>b.voteCount - a.voteCount);
        return orderedParties;
    };
    dynamicOrdering ? orderPartyResultsByVoteCounts(partyResults) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$us$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["orderPartyResults"])(partyResults, [
        'US-Dem',
        'US-Rep',
        'US-OTH'
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
        className: `${css('us-vote-share-graph')} display-any`,
        "data-testid": props['data-testid'] || 'ui-us-vote-share-graph',
        children: [
            showHeader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                className: css('us-vote-share-graph-header'),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    "data-testid": "ui-us-vote-share-graph-header-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            children: columnHeaders[0]
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/index.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            children: columnHeaders[1]
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/index.tsx",
                            lineNumber: 55,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            children: columnHeaders[2]
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/index.tsx",
                            lineNumber: 56,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/index.tsx",
                    lineNumber: 53,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/index.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                children: partyResults.map((result, index)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                        "data-testid": `ui-us-vote-share-graph-result-row-${index}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: `${css('us-vote-share-graph-result-party')} display-any`,
                                "data-testid": `ui-us-vote-share-graph-result-row-party-${index}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "u-hide-visually",
                                        children: `${result.party.abbreviation === 'US-OTH' ? 'Other parties' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["extractSurname"])(result.party.displayName)}`
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/index.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: `${result.party.abbreviation === 'US-OTH' ? 'Other parties' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["extractSurname"])(result.party.displayName)}`
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/index.tsx",
                                        lineNumber: 72,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/index.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: `${css('us-vote-share-graph-result-votes')} display-any`,
                                "data-party": result.party.abbreviation,
                                "data-testid": `ui-us-vote-share-graph-result-votes-${index}`,
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prettifyNumber"])(result.voteCount)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/index.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                className: css('us-vote-share-graph-result-votes-bar'),
                                "data-testid": "ui-us-vote-share-graph-result-votes-bar",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: css('us-vote-share-graph-result-votes-coloured-bar'),
                                    "data-testid": `ui-us-vote-share-graph-result-votes-coloured-bar-${index}`,
                                    "data-party": result.party.abbreviation,
                                    style: {
                                        width: `${result.votePercentage || 0}%`
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/index.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/index.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/index.tsx",
                        lineNumber: 64,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/index.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/index.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_c = USVoteShareGraph;
var _c;
__turbopack_context__.k.register(_c, "USVoteShareGraph");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-electoral-districts/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "electoral-district-container": "styles-module__AQ-ADG__electoral-district-container",
  "electoral-district-name": "styles-module__AQ-ADG__electoral-district-name",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-electoral-districts/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>USElectoralDistrict
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$us$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$electoral$2d$districts$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-electoral-districts/styles.module.css [client] (css module)");
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$electoral$2d$districts$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function USElectoralDistrict({ districtResult }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: css('electoral-district-container'),
        "data-testid": "ui-electoral-district-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${css('electoral-district-name')} display-any`,
                "data-testid": "ui-electoral-district-name",
                children: districtResult.name
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-electoral-districts/index.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$us$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["USVoteShareGraph"], {
                "data-testid": `ui-us-vote-share-graph-${districtResult.name.replaceAll(' ', '-').toLowerCase()}`,
                partyResults: districtResult.partyResults,
                showHeader: false
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-electoral-districts/index.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-electoral-districts/index.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = USElectoralDistrict;
var _c;
__turbopack_context__.k.register(_c, "USElectoralDistrict");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-state-list/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "state-link": "styles-module__8zNt_W__state-link",
  "state-list": "styles-module__8zNt_W__state-list",
  "state-list-link-wrapper": "styles-module__8zNt_W__state-list-link-wrapper",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-state-list/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StateList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$right$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/icons/arrow-right.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/array-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/url-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$state$2d$list$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-state-list/styles.module.css [client] (css module)");
;
;
;
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$state$2d$list$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function StateList({ votingAreas, nameMap }) {
    votingAreas && (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sortItems"])(votingAreas, [
        {
            sortField: 'shortName',
            direction: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].asc
        }
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${css('state-list')}`,
        "data-testid": "ui-state-list",
        children: votingAreas?.map((votingArea)=>{
            const displayName = nameMap?.find((s)=>s.name.toUpperCase() === votingArea.shortName?.toUpperCase())?.displayName || votingArea.shortName;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${css('state-link-wrapper')}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    href: `/elections/us-election/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["slugify"])(votingArea.shortName)}`,
                    className: `${css('state-link')} display-any`,
                    passHref: true,
                    "data-tracking-label": `ui-state-list/${votingArea.shortName}`,
                    "data-testid": "ui-state-link",
                    children: [
                        displayName,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$right$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-list/index.tsx",
                            lineNumber: 48,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-list/index.tsx",
                    lineNumber: 40,
                    columnNumber: 13
                }, this)
            }, votingArea.shortestName, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-list/index.tsx",
                lineNumber: 39,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-list/index.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = StateList;
var _c;
__turbopack_context__.k.register(_c, "StateList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "change-font-family": "styles-module__I9BB3W__change-font-family",
  "desktop-invisible-mobile-visible": "styles-module__I9BB3W__desktop-invisible-mobile-visible",
  "desktop-visible-mobile-invisible": "styles-module__I9BB3W__desktop-visible-mobile-invisible",
  "split-state-electoral-votes-in-text": "styles-module__I9BB3W__split-state-electoral-votes-in-text",
  "state-result-banner": "styles-module__I9BB3W__state-result-banner",
  "state-result-banner-candidate": "styles-module__I9BB3W__state-result-banner-candidate",
  "state-result-banner-candidate-image-dem": "styles-module__I9BB3W__state-result-banner-candidate-image-dem",
  "state-result-banner-candidate-image-rep": "styles-module__I9BB3W__state-result-banner-candidate-image-rep",
  "state-result-banner-container": "styles-module__I9BB3W__state-result-banner-container",
  "state-result-banner-electoral-votes": "styles-module__I9BB3W__state-result-banner-electoral-votes",
  "state-result-banner-image-container": "styles-module__I9BB3W__state-result-banner-image-container",
  "state-result-banner-invisible-container": "styles-module__I9BB3W__state-result-banner-invisible-container",
  "state-result-banner-item": "styles-module__I9BB3W__state-result-banner-item",
  "state-result-banner-item-with-image": "styles-module__I9BB3W__state-result-banner-item-with-image",
  "state-result-banner-no-invisible-container": "styles-module__I9BB3W__state-result-banner-no-invisible-container",
  "state-result-banner-previously-won-container": "styles-module__I9BB3W__state-result-banner-previously-won-container",
  "state-result-banner-previously-won-single-statement": "styles-module__I9BB3W__state-result-banner-previously-won-single-statement",
  "state-result-banner-previously-won-split-statement": "styles-module__I9BB3W__state-result-banner-previously-won-split-statement",
  "state-result-banner-split-banner": "styles-module__I9BB3W__state-result-banner-split-banner",
  "state-result-banner-split-banner-candidate": "styles-module__I9BB3W__state-result-banner-split-banner-candidate",
  "state-result-banner-split-banner-electoral-votes": "styles-module__I9BB3W__state-result-banner-split-banner-electoral-votes",
  "state-result-banner-split-banner-invisible-container": "styles-module__I9BB3W__state-result-banner-split-banner-invisible-container",
  "state-result-banner-split-banner-item": "styles-module__I9BB3W__state-result-banner-split-banner-item",
  "state-result-banner-split-banner-votes": "styles-module__I9BB3W__state-result-banner-split-banner-votes",
  "state-result-banner-vote-percentage": "styles-module__I9BB3W__state-result-banner-vote-percentage",
  "state-result-banner-votes-header": "styles-module__I9BB3W__state-result-banner-votes-header",
  "state-result-banner-winner-header": "styles-module__I9BB3W__state-result-banner-winner-header",
  "state-result-split-banner-candidate-image-dem": "styles-module__I9BB3W__state-result-split-banner-candidate-image-dem",
  "state-result-split-banner-candidate-image-rep": "styles-module__I9BB3W__state-result-split-banner-candidate-image-rep",
  "state-result-split-banner-votes-wrapper": "styles-module__I9BB3W__state-result-split-banner-votes-wrapper",
  "state-result-split-banner-wrapper": "styles-module__I9BB3W__state-result-split-banner-wrapper",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StateResultBanner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/array-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/number-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$us$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/us-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$state$2d$result$2d$banner$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/styles.module.css [client] (css module)");
;
;
;
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$state$2d$result$2d$banner$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function StateResultBanner({ votingArea, previousElectionYear }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sortItems"])(votingArea.previousPresidentialWinner, [
        {
            sortField: 'seatCount',
            direction: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].desc
        },
        {
            sortField: 'party.abbreviation',
            direction: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].asc
        }
    ]);
    const votingAreaWithoutOtherParties = {
        ...votingArea,
        partyResults: votingArea.partyResults.filter((partyResult)=>partyResult.party.abbreviation !== 'US-OTH')
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$us$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["orderPartyResults"])(votingAreaWithoutOtherParties.partyResults, [
        'US-Dem',
        'US-Rep'
    ]);
    let winningParty = [];
    winningParty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$us$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getWinningParty"])(votingAreaWithoutOtherParties.partyResults);
    const electoralVotesIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$us$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getElectoralVotesIn"])(winningParty);
    const splitResult = electoralVotesIn && electoralVotesIn !== votingArea.seatCount || winningParty.length > 1;
    const splitStateElectoralVotesInText = electoralVotesIn && electoralVotesIn !== votingArea.seatCount ? `${electoralVotesIn}/${votingArea.seatCount} electoral votes in` : '';
    const singleWinnerStatement = `This state was previously won by ${votingArea.previousPresidentialWinner[0].party.displayName} in ${previousElectionYear}`;
    const splitState = votingArea.displayName === 'Nebraska' || votingArea.displayName === 'Maine';
    const getSplitWinnerStatement = (mobile = false)=>{
        const secondPartyStatement = votingArea.previousPresidentialWinner[1] ? ` and ${votingArea.previousPresidentialWinner[1]?.seatCount} to ${votingArea.previousPresidentialWinner[1]?.party?.displayName}` : '';
        return `This state previously awarded ${votingArea.previousPresidentialWinner[0].seatCount}${mobile ? '' : ' electoral'} votes to ${votingArea.previousPresidentialWinner[0].party.displayName}${secondPartyStatement}`;
    };
    const renderSingleWinnerBanner = (winningParty, votingAreaElectoralVotes)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: css('state-result-banner-image-container'),
            children: [
                winningParty.party.abbreviation !== 'US-Undeclared-banner' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: css('state-result-banner-invisible-container')
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                    lineNumber: 85,
                    columnNumber: 11
                }, this),
                winningParty.party.abbreviation === 'US-Dem' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    "data-testid": "ui-state-result-banner-candidate-image-dem",
                    className: `${css('state-result-banner-candidate-image-dem')}`,
                    "aria-hidden": "true",
                    src: "/resources/elections/kamala-harris-portrait-2024.png",
                    alt: "Kamala Harris"
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                    lineNumber: 88,
                    columnNumber: 11
                }, this),
                winningParty.party.abbreviation === 'US-Rep' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    "data-testid": "ui-state-result-banner-candidate-image-rep",
                    className: `${css('state-result-banner-candidate-image-rep')}`,
                    "aria-hidden": "true",
                    src: "/resources/elections/donald-trump-portrait-2024.png",
                    alt: "Donald Trump"
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                    lineNumber: 97,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: `${css('state-result-banner')} ui-glass-swoosh`,
                    "data-party": winningParty.party.abbreviation,
                    "data-testid": "ui-state-result-banner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: winningParty.seatCount === 0 ? css('state-result-banner-item') : `${css('state-result-banner-item-with-image')} display-any`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${css('state-result-banner-winner-header')} display-any`,
                                    "data-testid": "ui-state-result-banner-winner-header",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Winner"
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                        lineNumber: 121,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${css('state-result-banner-candidate')} display-any`,
                                    "data-testid": "ui-state-result-banner-candidate",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["extractSurname"])(winningParty.party.displayName.toUpperCase())
                                        }, void 0, false, {
                                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "u-hide-visually",
                                            children: [
                                                "Candidate ",
                                                winningParty.party.displayName
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${css('state-result-banner-votes-header')} display-any`,
                                    "data-testid": "ui-state-result-banner-votes-header",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Electoral votes"
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `${css('state-result-banner-electoral-votes')} display-any`,
                                    "data-testid": "ui-state-result-banner-electoral-votes",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            children: votingAreaElectoralVotes
                                        }, void 0, false, {
                                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "u-hide-visually",
                                            children: votingAreaElectoralVotes === 1 ? `Electoral vote ${votingAreaElectoralVotes}` : `Electoral votes ${votingAreaElectoralVotes}`
                                        }, void 0, false, {
                                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
            lineNumber: 83,
            columnNumber: 7
        }, this);
    };
    const renderSplitWinnerBanner = (winningParties)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: css('state-result-banner-image-container'),
            "data-testid": "ui-state-result-banner-split-banner-image-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: css('state-result-banner-split-banner-invisible-container')
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    "data-testid": "ui-state-result-banner-split-banner-candidate-image-dem",
                    className: `${css('state-result-split-banner-candidate-image-dem')}`,
                    "aria-hidden": "true",
                    src: "/resources/elections/kamala-harris-portrait-2024.png",
                    alt: "Kamala Harris"
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    "data-testid": "ui-state-result-banner-split-banner-candidate-image-rep",
                    className: `${css('state-result-split-banner-candidate-image-rep')}`,
                    "aria-hidden": "true",
                    src: "/resources/elections/donald-trump-portrait-2024.png",
                    alt: "Donald Trump"
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-testid": "ui-state-result-split-banner",
                    className: `${css('state-result-split-banner-wrapper')} ui-glass-swoosh`,
                    children: winningParties.map((winningParty, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: `${css('state-result-banner-split-banner')}`,
                            "data-testid": `ui-state-result-banner-split-banner-${index}`,
                            "data-party": winningParty.party.abbreviation,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: css('state-result-banner-split-banner-item'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${css('state-result-banner-split-banner-candidate')} display-any`,
                                        "data-testid": `ui-state-result-banner-split-banner-candidate-${index}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: css('desktop-visible-mobile-invisible'),
                                                "aria-hidden": "true",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["extractSurname"])(winningParty.party.displayName).toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                                lineNumber: 192,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: css('desktop-invisible-mobile-visible', 'change-font-family'),
                                                "aria-hidden": "true",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["extractSurname"])(winningParty.party.displayName)
                                            }, void 0, false, {
                                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "u-hide-visually",
                                                children: [
                                                    "Candidate ",
                                                    winningParty.party.displayName
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${css('state-result-split-banner-votes-wrapper')} display-any`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${css('state-result-banner-split-banner-votes')} display-any`,
                                                "data-testid": `ui-state-result-banner-split-banner-votes-${index}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": "true",
                                                        children: winningParty.seatCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                                        lineNumber: 205,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "u-hide-visually",
                                                        children: winningParty.seatCount === 1 ? `Electoral vote ${winningParty.seatCount}` : `Electoral votes ${winningParty.seatCount}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                                lineNumber: 201,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `${css('state-result-banner-split-banner-electoral-votes')} display-any`,
                                                "data-testid": "ui-state-result-banner-split-banner-electoral-votes",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: winningParty.seatCount === 1 ? 'Electoral vote' : 'Electoral votes'
                                                }, void 0, false, {
                                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                                lineNumber: 212,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                        lineNumber: 200,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                lineNumber: 187,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
            lineNumber: 157,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: css('state-result-banner-container'),
        children: [
            !splitResult ? renderSingleWinnerBanner(winningParty[0], votingAreaWithoutOtherParties.seatCount) : renderSplitWinnerBanner(votingAreaWithoutOtherParties.partyResults),
            splitStateElectoralVotesInText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${css('split-state-electoral-votes-in-text')} display-any`,
                "data-testid": "ui-state-result-banner-electoral-votes-in-statement",
                children: splitStateElectoralVotesInText
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                lineNumber: 233,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${css('state-result-banner-previously-won-container')}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: splitState ? `${css('state-result-banner-previously-won-split-statement')} display-any` : `${css('state-result-banner-previously-won-single-statement')} display-any`,
                    "data-testid": "ui-state-result-banner-previously-won-statement",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "u-hide-visually",
                            children: splitState ? getSplitWinnerStatement() : singleWinnerStatement
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: css('desktop-visible-mobile-invisible'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: splitState ? getSplitWinnerStatement() : singleWinnerStatement
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                lineNumber: 251,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: css('desktop-invisible-mobile-visible'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: splitState ? getSplitWinnerStatement(true) : singleWinnerStatement
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                                lineNumber: 254,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                            lineNumber: 253,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                    lineNumber: 241,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${css('state-result-banner-vote-percentage')} display-any`,
                "data-testid": "ui-state-banner-vote-percentage",
                children: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["roundDownToOneDecimalPlace"])(votingArea.votePercentage)}% of votes counted`
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx",
        lineNumber: 228,
        columnNumber: 5
    }, this);
}
_c = StateResultBanner;
var _c;
__turbopack_context__.k.register(_c, "StateResultBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-senate-house-summary/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "senate-house-party-name": "styles-module__Lck0wW__senate-house-party-name",
  "senate-house-party-result": "styles-module__Lck0wW__senate-house-party-result",
  "senate-house-party-seats": "styles-module__Lck0wW__senate-house-party-seats",
  "senate-house-party-summary": "styles-module__Lck0wW__senate-house-party-summary",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-senate-house-summary/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SenateHouseSummary",
    ()=>SenateHouseSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$senate$2d$house$2d$summary$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-senate-house-summary/styles.module.css [client] (css module)");
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$senate$2d$house$2d$summary$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function SenateHouseSummary({ seats, id }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${css('senate-house-party-summary')}`,
        "data-testid": `ui-senate-house-party-summary-${id}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${css('senate-house-party-result')}`,
                "data-party": "US-Dem",
                "data-testid": `ui-senate-house-party-result-${id}-dem`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${css('senate-house-party-name')} display-any`,
                        children: "Democrats"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-senate-house-summary/index.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${css('senate-house-party-seats')} display-any`,
                        "data-testid": "ui-senate-house-party-seats-dem",
                        children: seats.demSeats
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-senate-house-summary/index.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-senate-house-summary/index.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${css('senate-house-party-result')}`,
                "data-party": "US-OTH",
                "data-testid": `ui-senate-house-party-result-${id}-other`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${css('senate-house-party-name')} display-any`,
                        children: "Other parties"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-senate-house-summary/index.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${css('senate-house-party-seats')} display-any`,
                        "data-testid": "ui-senate-house-party-seats-other",
                        children: seats.otherSeats
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-senate-house-summary/index.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-senate-house-summary/index.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${css('senate-house-party-result')}`,
                "data-party": "US-Rep",
                "data-testid": `ui-senate-house-party-result-${id}-rep`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${css('senate-house-party-name')} display-any`,
                        children: "Republicans"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-senate-house-summary/index.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${css('senate-house-party-seats')} display-any`,
                        "data-testid": "ui-senate-house-party-seats-rep",
                        children: seats.repSeats
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-senate-house-summary/index.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-senate-house-summary/index.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-senate-house-summary/index.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = SenateHouseSummary;
var _c;
__turbopack_context__.k.register(_c, "SenateHouseSummary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-state-senate-house-results/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "state-house-senate-results-component": "styles-module__8k_Qwq__state-house-senate-results-component",
  "state-house-senate-results-info-text": "styles-module__8k_Qwq__state-house-senate-results-info-text",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-state-senate-house-results/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StateSenateHouseResults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$senate$2d$house$2d$summary$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-senate-house-summary/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$state$2d$senate$2d$house$2d$results$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-state-senate-house-results/styles.module.css [client] (css module)");
;
;
;
;
function StateSenateHouseResults({ seatsContested, seats, type }) {
    function getInformationText(seatsContested, type) {
        if (type === 'SENATE') {
            const senatorsSingularOrPlural = seatsContested === 1 ? 'Senator' : 'Senators';
            return `${seatsContested} ${senatorsSingularOrPlural} standing for election`;
        }
        if (seatsContested === 1) {
            return '1 seat being contested';
        }
        return `All ${seatsContested} seats being contested`;
    }
    const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$state$2d$senate$2d$house$2d$results$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${css('state-house-senate-results-component')}`,
        "data-testid": "ui-state-house-senate-results-component",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${css('state-house-senate-results-info-text')}`,
                "data-testid": `ui-state-house-senate-results-info-text-${type.toLowerCase()}`,
                children: getInformationText(seatsContested, type)
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-senate-house-results/index.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$senate$2d$house$2d$summary$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["SenateHouseSummary"], {
                seats: seats,
                id: type.toLowerCase()
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-senate-house-results/index.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-state-senate-house-results/index.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = StateSenateHouseResults;
var _c;
__turbopack_context__.k.register(_c, "StateSenateHouseResults");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-map/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "map": "styles-module__K9OhwG__map",
  "map-body": "styles-module__K9OhwG__map-body",
  "map-key": "styles-module__K9OhwG__map-key",
  "map-key-container": "styles-module__K9OhwG__map-key-container",
  "map-key-items": "styles-module__K9OhwG__map-key-items",
  "map-key-summary": "styles-module__K9OhwG__map-key-summary",
  "map-label": "styles-module__K9OhwG__map-label",
  "map-svg": "styles-module__K9OhwG__map-svg",
  "map-svg-standard": "styles-module__K9OhwG__map-svg-standard",
  "map-title": "styles-module__K9OhwG__map-title",
  "map-toggle": "styles-module__K9OhwG__map-toggle",
  "map-toggle-btn": "styles-module__K9OhwG__map-toggle-btn",
  "map-tooltip": "styles-module__K9OhwG__map-tooltip",
  "ui-nojs": "styles-module__K9OhwG__ui-nojs",
  "us-election": "styles-module__K9OhwG__us-election",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-map/tooltip.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createElectedMembersCount",
    ()=>createElectedMembersCount,
    "default",
    ()=>tooltip
]);
function createElectedMembersCount(electedMembers, electedMembersCount) {
    // Return empty string if data doesn't exist
    if (electedMembers === undefined || !electedMembersCount) {
        return '';
    }
    const parties = electedMembers ? electedMembers.split(',') : [];
    const count = parseInt(electedMembersCount, 10);
    if (count <= 0) {
        return '';
    }
    const memberDivs = Array.from({
        length: count
    }, (_, i)=>{
        const party = parties[i] || '';
        return `<svg width="12" height="14" viewBox="0 0 12 14" data-party="${party}">
              <path d="M5.74291 0L11.486 3.31579V9.94737L5.74291 13.2632L-0.000208855 9.94737V3.31579L5.74291 0Z" />
            </svg>`;
    }).join('');
    return `<div data-elected-members-count>${memberDivs}</div>`;
}
function tooltip(root, tip) {
    if (!root || !tip) {
        return;
    }
    [
        'onclick',
        'onmousemove'
    ].forEach((evt)=>{
        root[evt] = (event)=>{
            const target = event.target;
            const { label, partyLabel, electedMembers, electedMembersCount, id } = target.dataset;
            let content = `<strong>${label}</strong><span>${partyLabel || ''}</span>`;
            // Add elected members visualization if data exists
            content += createElectedMembersCount(electedMembers, electedMembersCount);
            label && (tip.innerHTML = content);
            const { left, top } = root.getBoundingClientRect();
            const x = event.clientX - left;
            const y = event.clientY - top;
            const offset = Math.min(0, window.innerWidth - (left + (x + tip.offsetWidth)));
            const opacity = target.matches('[data-id]') && id !== 'undefined' ? 1 : 0;
            tip.style.cssText = `left:${x + offset}px; top:${y}px; opacity:${opacity}`;
        };
    });
    root.onmouseleave = ()=>{
        tip.style.opacity = '0';
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ElectionMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$generate$2d$election$2d$url$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/generate-election-url.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$party$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/party-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-info/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$left$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/icons/arrow-left.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$analytics$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/analytics.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$id$2d$from$2d$name$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/id-from-name.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/url-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$map$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-map/styles.module.css [client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$map$2f$tooltip$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-map/tooltip.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$map$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function ElectionMap({ modifier = '', mapStyle = '', votingAreas = [], Map, title = '', keyStyle = 'key', mapKey = [], mapKeyShape = 'circle', mapKeyOpen = false, mapKeyPosition = 'right', electedMembersCount = 6, electionType, ariaHidden = false, parentRegionMap, showMapToggle = false }) {
    _s();
    const [mapTier, setMapTier] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])('lower');
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapKeyOverlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapKeyStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null); // add this
    const mapKeyDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const keyedVotingAreas = votingAreas.reduce((map, area)=>{
        const lookup = area.displayName || area.shortName || area.name || '';
        map[(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$id$2d$from$2d$name$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["idFromName"])(lookup)] = area;
        return map;
    }, {});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ElectionMap.useEffect": ()=>{
            root.current?.querySelectorAll('svg [data-id]').forEach({
                "ElectionMap.useEffect": (item)=>{
                    const element = item;
                    const { id: name } = element.dataset;
                    if (!name || name === 'no-election') {
                        return;
                    }
                    const { shortName, displayName, votingStatus, id, electedCandidate, controllingParty, councilType } = keyedVotingAreas[name] || {};
                    const labelName = displayName || shortName;
                    if (!labelName) {
                        element.dataset.party = 'no-election';
                        return;
                    }
                    const slug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["slugify"])(labelName);
                    element.dataset.label = labelName;
                    element.dataset.party = electedCandidate?.party?.abbreviation || controllingParty?.abbreviation || votingStatus || 'baseline';
                    element.dataset.partyLabel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$party$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getMapPartyLabel"])(keyedVotingAreas[name], electionType);
                    element.dataset.councilType = councilType || '';
                    const partyResults = keyedVotingAreas[name]?.partyResults;
                    if (partyResults) {
                        const nominations = partyResults.flatMap({
                            "ElectionMap.useEffect.nominations": (d)=>'candidateNominations' in d && d.candidateNominations ? d.candidateNominations : []
                        }["ElectionMap.useEffect.nominations"]);
                        if (nominations.length) {
                            const electedMembers = nominations.filter({
                                "ElectionMap.useEffect.electedMembers": (c)=>c.electedOrder !== null
                            }["ElectionMap.useEffect.electedMembers"]).sort({
                                "ElectionMap.useEffect.electedMembers": (a, b)=>(a.electedOrder || 0) - (b.electedOrder || 0)
                            }["ElectionMap.useEffect.electedMembers"]).map({
                                "ElectionMap.useEffect.electedMembers": (c)=>c.party.abbreviation
                            }["ElectionMap.useEffect.electedMembers"]).join(',');
                            element.dataset.electedMembers = electedMembers;
                            element.dataset.electedMembersCount = String(electedMembersCount);
                        }
                    }
                    element.dataset.trackingLabel = `ui-election-map/${slug}`;
                    if (electionType) {
                        element.onclick = ({
                            "ElectionMap.useEffect": (event)=>{
                                event.stopImmediatePropagation();
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$analytics$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["manuallyTrackClick"])(element);
                                const url = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$generate$2d$election$2d$url$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["generateElectionUrl"])({
                                    electionSlug: router.query.election,
                                    electionType,
                                    votingArea: {
                                        id,
                                        shortName: labelName
                                    },
                                    parentRegion: parentRegionMap?.[id]
                                });
                                router.push(url);
                            }
                        })["ElectionMap.useEffect"];
                    }
                }
            }["ElectionMap.useEffect"]);
            if (root.current && tip.current) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$map$2f$tooltip$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"])(root.current, tip.current);
            }
        }
    }["ElectionMap.useEffect"], [
        votingAreas,
        electionType,
        parentRegionMap,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "ElectionMap.useLayoutEffect": ()=>{
            const mql = window.matchMedia('(max-width: 479px)');
            const handleMql = {
                "ElectionMap.useLayoutEffect.handleMql": (e)=>{
                    if (e.matches && mapKeyDetails.current) {
                        mapKeyDetails.current.open = false;
                    }
                }
            }["ElectionMap.useLayoutEffect.handleMql"];
            handleMql(mql);
            mql.addEventListener('change', handleMql);
            return ({
                "ElectionMap.useLayoutEffect": ()=>mql.removeEventListener('change', handleMql)
            })["ElectionMap.useLayoutEffect"];
        }
    }["ElectionMap.useLayoutEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ElectionMap.useEffect": ()=>{
            if (keyStyle === 'key' && mapKeyOverlay.current) {
                mapKeyOverlay.current.addEventListener('click', {
                    "ElectionMap.useEffect": ()=>{
                        if (!mapKeyOverlay.current?.parentNode) {
                            return;
                        }
                        const parentElement = mapKeyOverlay.current.parentNode;
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$analytics$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["manuallyTrackClick"])(parentElement);
                        if (parentElement.hasAttribute('open')) {
                            parentElement.dataset.trackingLabel = '/ui-election-map/map-key/open';
                        } else {
                            parentElement.dataset.trackingLabel = '/ui-election-map/map-key/close';
                        }
                    }
                }["ElectionMap.useEffect"]);
            }
            if (!mapKeyStyle.current) {
                return;
            }
            mapKeyStyle.current.textContent = `${mapKey.map({
                "ElectionMap.useEffect": (item)=>{
                    const parties = item.party.split(' ');
                    return parties.map({
                        "ElectionMap.useEffect": (party)=>`#ui-election-map:has(#ui-election-map-svg :is([data-party~="${party}" i], [data-elected-members*="${party}" i])) [data-party-key~="${party}" i]`
                    }["ElectionMap.useEffect"]);
                }
            }["ElectionMap.useEffect"]).join(',')} { display: flex; }`;
        }
    }["ElectionMap.useEffect"], [
        keyStyle
    ]);
    function renderMapKeyIcon(item) {
        if (mapKeyShape === 'circle') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 18 18",
                role: "presentation",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                id: "split-dem",
                                width: "8",
                                height: "10",
                                patternUnits: "userSpaceOnUse",
                                patternTransform: "rotate(45 50 50)",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "100%",
                                        height: "100%",
                                        fill: "var(--election-party-us-democrat-mid)",
                                        strokeWidth: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        stroke: "var(--election-party-us-democrat-dark)",
                                        strokeWidth: "9",
                                        y2: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                                lineNumber: 238,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                id: "split-rep",
                                width: "8",
                                height: "10",
                                patternUnits: "userSpaceOnUse",
                                patternTransform: "rotate(45 50 50)",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "100%",
                                        height: "100%",
                                        fill: "var(--election-party-us-republican-mid)",
                                        strokeWidth: "0"
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                                        lineNumber: 255,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        stroke: "var(--election-party-us-republican-dark)",
                                        strokeWidth: "9",
                                        y2: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                                        lineNumber: 256,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                        lineNumber: 237,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "9",
                        cy: "9",
                        r: "8",
                        "data-party": item.party
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                lineNumber: 236,
                columnNumber: 9
            }, this);
        }
        if (mapKeyShape === 'hexagon') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                viewBox: "0 0 12 14",
                role: "presentation",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M5.74291 0L11.486 3.31579V9.94737L5.74291 13.2632L-0.000208855 9.94737V3.31579L5.74291 0Z",
                    "data-party": item.party
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                    lineNumber: 266,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                lineNumber: 265,
                columnNumber: 9
            }, this);
        }
    }
    function renderMapKey() {
        if (keyStyle === 'key' && mapKey) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                    ref: mapKeyDetails,
                    className: `${css('map-key')} font-size-any`,
                    "data-tracking-label": "/ui-election-map/map-key/open",
                    role: "presentation",
                    "aria-label": "Toggle map key",
                    open: mapKeyOpen,
                    "data-position": mapKeyPosition,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                            className: css('map-key-summary'),
                            ref: mapKeyOverlay,
                            "data-testid": "ui-election-map-key",
                            children: [
                                "Map Key ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$left$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                                    lineNumber: 289,
                                    columnNumber: 23
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                            lineNumber: 288,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: css('map-key-items'),
                            "data-testid": "ui-election-map-key-content",
                            children: mapKey.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: item.modifier,
                                    "data-party-key": item.party,
                                    children: [
                                        renderMapKeyIcon(item),
                                        " ",
                                        item.label
                                    ]
                                }, index, true, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                                    lineNumber: 293,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                            lineNumber: 291,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                    lineNumber: 279,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                lineNumber: 278,
                columnNumber: 9
            }, this);
        }
    }
    function renderMapToggle() {
        if (!showMapToggle) {
            return null;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${css('map-toggle')} font-size-any`,
            "data-testid": "ui-election-map-toggle",
            role: "group",
            "aria-label": "Map tier",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: css('map-toggle-btn'),
                    "data-active": mapTier === 'lower' || undefined,
                    onClick: ()=>setMapTier('lower'),
                    "aria-pressed": mapTier === 'lower',
                    children: "All councils"
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                    lineNumber: 315,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: css('map-toggle-btn'),
                    "data-active": mapTier === 'upper' || undefined,
                    onClick: ()=>setMapTier('upper'),
                    "aria-pressed": mapTier === 'upper',
                    children: "Hide districts"
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                    lineNumber: 324,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
            lineNumber: 309,
            columnNumber: 7
        }, this);
    }
    function renderLegend() {
        const content = [];
        if (keyStyle === 'legend' && mapKey) {
            const mapKeyCopy = [
                ...mapKey
            ];
            let mapKeyRow = mapKeyCopy.splice(0, 3);
            let rowId = 0;
            while(mapKeyRow.length > 0){
                content.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: css('map-key-items'),
                    "data-style": "legend",
                    "data-testid": "legend",
                    children: mapKeyRow.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: item.modifier,
                            children: [
                                item.label,
                                " ",
                                renderMapKeyIcon(item)
                            ]
                        }, index, true, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                            lineNumber: 347,
                            columnNumber: 15
                        }, this))
                }, rowId, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                    lineNumber: 345,
                    columnNumber: 11
                }, this));
                mapKeyRow = mapKeyCopy.splice(0, 3);
                rowId++;
            }
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: css('map-key-container'),
            children: content
        }, void 0, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
            lineNumber: 357,
            columnNumber: 12
        }, this);
    }
    function renderLabel() {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: css('map-label'),
            "data-testid": "ui-election-map-label",
            role: "group",
            "aria-label": "Interactive map",
            children: [
                "Interactive map ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    children: "Select a location on the map to view full results"
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                    lineNumber: 363,
                    columnNumber: 25
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
            lineNumber: 362,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${css('map')} ${css(modifier)}`,
        "data-testid": "ui-election-map",
        id: "ui-election-map",
        "aria-hidden": ariaHidden || undefined,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: root,
            className: css('map-body'),
            "data-testid": "ui-election-map-body",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                    ref: mapKeyStyle
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                    lineNumber: 376,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("noscript", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ui-nojs",
                        children: "You need javascript enabled to view this content"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                        lineNumber: 378,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                    lineNumber: 377,
                    columnNumber: 9
                }, this),
                electionType !== 'US_PRESIDENTIAL' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: css('map-title'),
                    "data-testid": "ui-election-map-title",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                    lineNumber: 381,
                    columnNumber: 11
                }, this),
                Map && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Map, {
                    className: css(mapStyle === 'standard' ? 'map-svg-standard' : 'map-svg'),
                    role: "img",
                    "aria-label": "Election map",
                    "data-testid": "ui-election-map-svg",
                    id: "ui-election-map-svg",
                    "data-style": mapStyle,
                    "aria-hidden": true,
                    "data-tier": showMapToggle ? mapTier : undefined
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                    lineNumber: 386,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: css('map-tooltip'),
                    "data-testid": "ui-election-map-tooltip",
                    ref: tip,
                    "aria-hidden": "true"
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
                    lineNumber: 397,
                    columnNumber: 9
                }, this),
                renderMapToggle(),
                renderMapKey(),
                renderLegend(),
                renderLabel()
            ]
        }, void 0, true, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
            lineNumber: 375,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx",
        lineNumber: 369,
        columnNumber: 5
    }, this);
}
_s(ElectionMap, "nPXrpIn1NVB0wAg+mwwbFOqbO/E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ElectionMap;
var _c;
__turbopack_context__.k.register(_c, "ElectionMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "candidate": "styles-module__KLxLIG__candidate",
  "candidate-image-dem": "styles-module__KLxLIG__candidate-image-dem",
  "candidate-image-rep": "styles-module__KLxLIG__candidate-image-rep",
  "candidate-party": "styles-module__KLxLIG__candidate-party",
  "candidate-party-name": "styles-module__KLxLIG__candidate-party-name",
  "candidate-party-result": "styles-module__KLxLIG__candidate-party-result",
  "candidate-party-surname": "styles-module__KLxLIG__candidate-party-surname",
  "candidate-result-dem": "styles-module__KLxLIG__candidate-result-dem",
  "candidate-result-rep": "styles-module__KLxLIG__candidate-result-rep",
  "candidate-spacer": "styles-module__KLxLIG__candidate-spacer",
  "candidate-us-dem": "styles-module__KLxLIG__candidate-us-dem",
  "candidate-us-rep": "styles-module__KLxLIG__candidate-us-rep",
  "candidate-wrapper": "styles-module__KLxLIG__candidate-wrapper",
  "candidates": "styles-module__KLxLIG__candidates",
  "candidates-list": "styles-module__KLxLIG__candidates-list",
  "candidates-results-wrapper": "styles-module__KLxLIG__candidates-results-wrapper",
  "us-vote-share": "styles-module__KLxLIG__us-vote-share",
  "vote-count": "styles-module__KLxLIG__vote-count",
  "vote-share-wrapper": "styles-module__KLxLIG__vote-share-wrapper",
  "votes-to-win-banner": "styles-module__KLxLIG__votes-to-win-banner",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>USVoteShare
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/number-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status-banner/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$us$2d$vote$2d$share$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/styles.module.css [client] (css module)");
;
;
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$us$2d$vote$2d$share$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function USVoteShare({ announcement = {
    party: 'US-Unassociated',
    statusText: ''
}, seats, banner = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${css('us-vote-share')}`,
        "data-testid": "ui-us-vote-share",
        style: {
            height: banner ? '100vh' : 'auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${css('vote-share-wrapper')}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        party: announcement.party,
                        statusText: announcement.statusText
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        "data-testid": "ui-candidate-image-dem",
                        className: `${css('candidate-image-dem')}`,
                        "aria-hidden": "true",
                        src: "/resources/elections/kamala-harris-portrait-2024.png",
                        alt: "Kamala Harris"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        "data-testid": "ui-candidate-image-rep",
                        className: `${css('candidate-image-rep')}`,
                        "aria-hidden": "true",
                        src: "/resources/elections/donald-trump-portrait-2024.png",
                        alt: "Donald Trump"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${css('candidates')} ui-glass-swoosh`,
                        "data-testid": "ui-election-us-dem-candidates",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: css('candidates-results-wrapper'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${css('candidate-spacer')}`,
                                        "data-party": "US-Dem"
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${css('candidate-result-dem')}`,
                                        "data-party": "US-Dem",
                                        style: {
                                            width: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["calculatePercentage"])(seats[0].seatCount, 538)}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-party": "US-Undeclared-Banner",
                                        style: {
                                            width: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["calculatePercentage"])(538 - (seats[0].seatCount + seats[1].seatCount), 538)}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${css('candidate-result-rep')}`,
                                        "data-party": "US-Rep",
                                        style: {
                                            width: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["calculatePercentage"])(seats[1].seatCount, 538)}%`
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                                        lineNumber: 77,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `${css('candidate-spacer')}`,
                                        "data-party": "US-Rep"
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: `${css('candidates-list')} display-any`,
                                "data-testid": "ui-election-us-candidates-list",
                                children: seats.map((seat, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: css('candidate', `candidate-${seat.party.abbreviation.toLowerCase()}`),
                                        "data-testid": "ui-election-us-candidate-item",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: css('candidate-party-result'),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: css('candidate-party'),
                                                    "data-testid": `ui-election-candidate-party-${seat.party.abbreviation.toLowerCase()}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "u-hide-visually",
                                                            children: seat.party.abbreviation
                                                        }, void 0, false, {
                                                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: css('candidate-party-name'),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "aria-hidden": "true",
                                                                children: seat.party.displayName
                                                            }, void 0, false, {
                                                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                                                                lineNumber: 99,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: css('candidate-party-surname'),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                "aria-hidden": "true",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["extractSurname"])(seat.party.displayName)
                                                            }, void 0, false, {
                                                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                                                                lineNumber: 102,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                                                    lineNumber: 93,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `${css('vote-count')} display-any`,
                                                    "data-testid": `ui-election-candidate-count-${seat.party.abbreviation.toLowerCase()}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            "aria-hidden": "true",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prettifyNumber"])(seat.seatCount)
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                                                            lineNumber: 109,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "u-hide-visually",
                                                            children: [
                                                                "Votes ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                                                    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prettifyNumber"])(seat.seatCount),
                                                                    fallback: 'Undeclared'
                                                                })
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                                            lineNumber: 92,
                                            columnNumber: 17
                                        }, this)
                                    }, index, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${css('votes-to-win-banner')} display-any`,
                "data-testid": "ui-votes-to-win-banner",
                children: "270 to win"
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = USVoteShare;
var _c;
__turbopack_context__.k.register(_c, "USVoteShare");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "centre": "styles-module__zww3Za__centre",
  "colour-chip": "styles-module__zww3Za__colour-chip",
  "colour-chip-container": "styles-module__zww3Za__colour-chip-container",
  "footnotes": "styles-module__zww3Za__footnotes",
  "footnotes-link": "styles-module__zww3Za__footnotes-link",
  "footnotes-source": "styles-module__zww3Za__footnotes-source",
  "scrollable-table": "styles-module__zww3Za__scrollable-table",
  "table": "styles-module__zww3Za__table",
  "table-container": "styles-module__zww3Za__table-container",
  "table-data": "styles-module__zww3Za__table-data",
  "table-header": "styles-module__zww3Za__table-header",
  "ui-undeclared-list": "styles-module__zww3Za__ui-undeclared-list",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UndeclaredList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$us$2d$undeclared$2d$list$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/styles.module.css [client] (css module)");
;
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$us$2d$undeclared$2d$list$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function UndeclaredList({ votingAreas, stateAbbreviationDictionary }) {
    const formatVotesLeft = (votePercentage)=>{
        const votesLeft = Math.ceil(100 - votePercentage);
        const formattedVotesLeft = votesLeft <= 1 ? `<${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["appendPercentSignToNumber"])(votesLeft)}` : (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["appendPercentSignToNumber"])(votesLeft);
        return formattedVotesLeft;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: css('ui-undeclared-list'),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: css('table'),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: css('table-header'),
                        style: {
                            paddingRight: (votingAreas?.length || 0) < 6 ? '' : 'var(--scrollbar-width)'
                        },
                        "aria-hidden": true,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "State"
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "Electoral votes"
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "Votes left"
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "Margin"
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: "Currently leading"
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    (votingAreas?.length || 0) > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: css('table-container'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${css('scrollable-table')} ui-scrollbars`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: css('table-data'),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "u-hide-visually",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "State"
                                                }, void 0, false, {
                                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Electoral votes"
                                                }, void 0, false, {
                                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Votes left"
                                                }, void 0, false, {
                                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Margin"
                                                }, void 0, false, {
                                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    children: "Currently leading"
                                                }, void 0, false, {
                                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                            lineNumber: 57,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                        lineNumber: 56,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: votingAreas?.map((area, index)=>{
                                            const state = stateAbbreviationDictionary[area.shortestName || area.displayName];
                                            const electoralVotes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prettifyNumber"])(area.electoralVotes);
                                            const votesLeft = formatVotesLeft(area.votePercentage);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: state
                                                    }, void 0, false, {
                                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: electoralVotes
                                                    }, void 0, false, {
                                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: votesLeft
                                                    }, void 0, false, {
                                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        "data-testid": "margin",
                                                        children: area.currentlyLeading?.margin
                                                    }, void 0, false, {
                                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                                        lineNumber: 76,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: css('colour-chip-container'),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: css('colour-chip'),
                                                                "data-testid": "ui-colour-chip",
                                                                "data-party": area.currentlyLeading?.party.abbreviation,
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["extractSurname"])(area.currentlyLeading?.party.displayName || area.currentlyLeading?.party.name || '-')
                                                            }, void 0, false, {
                                                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                                                lineNumber: 79,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                                        lineNumber: 77,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                                lineNumber: 72,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    votingAreas?.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${css('scrollable-table')} ${css('centre')} ui-scrollbars`,
                        children: "All results are now in"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this),
                    votingAreas === null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${css('scrollable-table')} ${css('centre')} ui-scrollbars`,
                        children: "No data currently available"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: css('footnotes'),
                "data-testid": "ui-footnotes",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: css('footnotes-source'),
                        children: "Source Sky News/NBC"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: css('footnotes-link'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/elections/us-election",
                            target: "_parent",
                            children: "View all results"
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = UndeclaredList;
var _c;
__turbopack_context__.k.register(_c, "UndeclaredList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-tabs/tabs-list.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabsList",
    ()=>TabsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function TabsList({ tabs, selectedTabIndex, onTabSelect, className = 'ui-tabs-list', theme = '', tabClassName = 'ui-tabs-list-item', as: Component = 'div' }) {
    _s();
    const tabRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TabsList.useEffect": ()=>{
            tabRefs.current.forEach({
                "TabsList.useEffect": (tab, index)=>{
                    if (tab) {
                        tab.tabIndex = index === selectedTabIndex ? 0 : -1;
                    }
                }
            }["TabsList.useEffect"]);
        }
    }["TabsList.useEffect"], [
        selectedTabIndex
    ]);
    const handleKeyDown = (event, index)=>{
        let newIndex = null;
        switch(event.key){
            case 'ArrowRight':
                newIndex = (index + 1) % tabs.length;
                break;
            case 'ArrowLeft':
                newIndex = (index - 1 + tabs.length) % tabs.length;
                break;
            case 'Home':
                newIndex = 0;
                break;
            case 'End':
                newIndex = tabs.length - 1;
                break;
            default:
                return;
        }
        event.preventDefault();
        tabRefs.current[newIndex]?.focus({
            preventScroll: true
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
        role: "tablist",
        className: `display-fixed-100 ${className}`,
        "data-theme": theme,
        "data-testid": "ui-tabs-list",
        children: tabs.map((tab, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                id: `tab-${index}`,
                ref: (el)=>{
                    tabRefs.current[index] = el;
                },
                className: tabClassName,
                type: "button",
                role: "tab",
                "aria-selected": index === selectedTabIndex,
                "aria-controls": `tabpanel-${index}`,
                onClick: ()=>onTabSelect(index),
                onKeyDown: (e)=>handleKeyDown(e, index),
                children: tab.children ?? tab.tabName
            }, `tab-${index}`, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-tabs/tabs-list.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-tabs/tabs-list.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(TabsList, "0RPxzdnP+nt3nvG0UqqJCVgxs50=");
_c = TabsList;
var _c;
__turbopack_context__.k.register(_c, "TabsList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-tabs/tabs-panel.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TabsPanel",
    ()=>TabsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
;
function TabsPanel({ selectedTabIndex, children, className = 'ui-tabs-panel' }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: `tabpanel-${selectedTabIndex}`,
        className: className,
        role: "tabpanel",
        "aria-labelledby": `tab-${selectedTabIndex}`,
        "data-testid": "ui-tabs-panel",
        children: children
    }, `tabpanel-${selectedTabIndex}`, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-tabs/tabs-panel.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = TabsPanel;
var _c;
__turbopack_context__.k.register(_c, "TabsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-tabs/index.ts [client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$tabs$2f$tabs$2d$list$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-tabs/tabs-list.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$tabs$2f$tabs$2d$panel$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-tabs/tabs-panel.tsx [client] (ecmascript)");
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "battleground-state": "styles-module__Uw6xzG__battleground-state",
  "battleground-state-banner": "styles-module__Uw6xzG__battleground-state-banner",
  "battleground-state-banner-candidate": "styles-module__Uw6xzG__battleground-state-banner-candidate",
  "battleground-state-banner-electoral-votes": "styles-module__Uw6xzG__battleground-state-banner-electoral-votes",
  "battleground-state-banner-item": "styles-module__Uw6xzG__battleground-state-banner-item",
  "battleground-state-banner-votes-header": "styles-module__Uw6xzG__battleground-state-banner-votes-header",
  "battleground-state-banner-winner-header": "styles-module__Uw6xzG__battleground-state-banner-winner-header",
  "battleground-state-cta": "styles-module__Uw6xzG__battleground-state-cta",
  "battleground-state-link": "styles-module__Uw6xzG__battleground-state-link",
  "battleground-state-name": "styles-module__Uw6xzG__battleground-state-name",
  "battleground-state-name-link-wrapper": "styles-module__Uw6xzG__battleground-state-name-link-wrapper",
  "battleground-state-split-banner": "styles-module__Uw6xzG__battleground-state-split-banner",
  "battleground-state-split-banner-electoral-votes": "styles-module__Uw6xzG__battleground-state-split-banner-electoral-votes",
  "battleground-state-split-banner-item": "styles-module__Uw6xzG__battleground-state-split-banner-item",
  "battleground-state-split-banner-votes": "styles-module__Uw6xzG__battleground-state-split-banner-votes",
  "battleground-state-split-banner-votes-wrapper": "styles-module__Uw6xzG__battleground-state-split-banner-votes-wrapper",
  "battleground-state-split-banner-wrapper": "styles-module__Uw6xzG__battleground-state-split-banner-wrapper",
  "battleground-state-vote-info-text": "styles-module__Uw6xzG__battleground-state-vote-info-text",
  "vote-info-text-divider": "styles-module__Uw6xzG__vote-info-text-divider",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BattlegroundState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$right$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/icons/arrow-right.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/number-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/url-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$us$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/us-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$us$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$battleground$2d$state$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/styles.module.css [client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$battleground$2d$state$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function BattlegroundState({ votingArea }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$us$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["orderPartyResults"])(votingArea.partyResults, [
        'US-Dem',
        'US-Rep',
        'US-OTH'
    ]);
    const votingAreaWithoutOtherParties = {
        ...votingArea,
        partyResults: votingArea.partyResults.filter((partyResult)=>partyResult.party.abbreviation !== 'US-OTH')
    };
    let winningParty = [];
    winningParty = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$us$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getWinningParty"])(votingArea.partyResults);
    const renderSingleWinnerBanner = (winningParty, votingAreaElectoralVotes)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: `${css('battleground-state-banner')} ui-glass-swoosh`,
            "data-party": winningParty.party.abbreviation,
            "data-testid": "ui-battleground-state-banner",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: css('battleground-state-banner-item'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: css('battleground-state-banner-winner-header'),
                            "data-testid": "ui-battleground-state-banner-winner-header",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Winner"
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${css('battleground-state-banner-candidate')} display-any`,
                            "data-testid": "ui-battleground-state-banner-candidate",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["extractSurname"])(winningParty.party.displayName.toUpperCase())
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "u-hide-visually",
                                    children: [
                                        "Candidate ",
                                        winningParty.party.displayName
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: css('battleground-state-banner-item'),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: css('battleground-state-banner-votes-header'),
                            "data-testid": "ui-battleground-state-banner-votes-header",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Electoral votes"
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `${css('battleground-state-banner-electoral-votes')} display-any`,
                            "data-testid": "ui-battleground-state-banner-electoral-votes",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    children: votingAreaElectoralVotes
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "u-hide-visually",
                                    children: [
                                        "Electoral Votes ",
                                        votingAreaElectoralVotes
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this);
    };
    const renderSplitWinnerBanner = (winningParties)=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${css('battleground-state-split-banner-wrapper')} ui-glass-swoosh`,
            children: winningParties.map((winningParty, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: `${css('battleground-state-split-banner')}`,
                    "data-testid": "ui-battleground-state-split-banner",
                    "data-party": winningParty.party.abbreviation,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: css('battleground-state-split-banner-item'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: css('battleground-state-split-banner-candidate'),
                                "data-testid": "ui-battleground-state-split-banner-candidate",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["extractSurname"])(winningParty.party.displayName) !== 'OTH' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["extractSurname"])(winningParty.party.displayName) : 'Other parties'
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                                        lineNumber: 112,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "u-hide-visually",
                                        children: [
                                            "Candidate ",
                                            winningParty.party.displayName
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `${css('battleground-state-split-banner-votes-wrapper')} display-any`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${css('battleground-state-split-banner-votes')} display-any`,
                                        "data-testid": "ui-battleground-state-split-banner-votes",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-hidden": "true",
                                                children: winningParty.seatCount
                                            }, void 0, false, {
                                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "u-hide-visually",
                                                children: [
                                                    "Electoral votes ",
                                                    winningParty.seatCount
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                                        lineNumber: 120,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `${css('battleground-state-split-banner-electoral-votes')} display-any`,
                                        "data-testid": "ui-battleground-state-split-banner-electoral-votes",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: winningParty.seatCount === 1 ? 'Electoral vote' : 'Electoral votes'
                                        }, void 0, false, {
                                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                                lineNumber: 119,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                        lineNumber: 107,
                        columnNumber: 13
                    }, this)
                }, index, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
            lineNumber: 99,
            columnNumber: 7
        }, this);
    };
    const electoralVotesIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$us$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getElectoralVotesIn"])(winningParty);
    const splitResult = electoralVotesIn && electoralVotesIn !== votingArea.seatCount || winningParty.length > 1;
    const splitStateElectoralVotesInText = electoralVotesIn && electoralVotesIn !== votingArea.seatCount ? `${electoralVotesIn}/${votingArea.seatCount} electoral votes in` : '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${css('battleground-state')}`,
        "data-testid": `ui-battleground-state-${votingArea.shortName.replace(' ', '-').toLowerCase()}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${css('battleground-state-name-link-wrapper')}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${css('battleground-state-name')} display-any`,
                        "data-testid": "ui-battleground-state-name",
                        children: votingArea.shortName
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/elections/${router.query.election}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["slugify"])(votingArea.shortName)}`,
                        className: `${css('battleground-state-link')} display-any`,
                        passHref: true,
                        "data-tracking-label": `ui-battleground-state/${votingArea.shortName || 'battleground state link'}`,
                        "data-testid": "ui-battleground-state-link",
                        "aria-label": `${votingArea.shortName} state full breakdown`,
                        children: [
                            "Full breakdown",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$right$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            !splitResult ? renderSingleWinnerBanner(winningParty[0], votingArea.seatCount) : renderSplitWinnerBanner(votingAreaWithoutOtherParties.partyResults),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${css('battleground-state-vote-info-text')} display-any`,
                "data-testid": "ui-battleground-vote-info-text",
                children: [
                    `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["roundDownToOneDecimalPlace"])(votingArea.votePercentage)}% of votes counted`,
                    splitStateElectoralVotesInText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `${css('vote-info-text-divider')}`,
                        children: '|'
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                        lineNumber: 179,
                        columnNumber: 44
                    }, this),
                    splitStateElectoralVotesInText
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$us$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["USVoteShareGraph"], {
                partyResults: votingArea.partyResults
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_s(BattlegroundState, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = BattlegroundState;
var _c;
__turbopack_context__.k.register(_c, "BattlegroundState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-waffle/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "waffle-component": "styles-module__vd-8Dq__waffle-component",
  "waffle-info-text": "styles-module__vd-8Dq__waffle-info-text",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-waffle/waffle-utils.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fillAllCellsInRow",
    ()=>fillAllCellsInRow,
    "fillCellsInRowFromIndex",
    ()=>fillCellsInRowFromIndex,
    "fillDemFullRows",
    ()=>fillDemFullRows,
    "fillOther",
    ()=>fillOther,
    "fillOtherToBottom",
    ()=>fillOtherToBottom,
    "fillOtherToTop",
    ()=>fillOtherToTop,
    "fillRepFullRows",
    ()=>fillRepFullRows,
    "fillRowFromLeft",
    ()=>fillRowFromLeft,
    "fillRowFromRight",
    ()=>fillRowFromRight,
    "fillWaffle",
    ()=>fillWaffle,
    "getCellsToBottom",
    ()=>getCellsToBottom,
    "getCellsToTop",
    ()=>getCellsToTop,
    "willAllPartiesShareRow",
    ()=>willAllPartiesShareRow,
    "willDemOverlapWithOther",
    ()=>willDemOverlapWithOther,
    "willDemShareRowWithOther",
    ()=>willDemShareRowWithOther,
    "willDemShareRowWithOtherWhenOtherMovedToTop",
    ()=>willDemShareRowWithOtherWhenOtherMovedToTop,
    "willRepOverlapWithOther",
    ()=>willRepOverlapWithOther,
    "willRepShareRowWithOther",
    ()=>willRepShareRowWithOther,
    "willRepShareRowWithOtherWhenOtherMovedToBottom",
    ()=>willRepShareRowWithOtherWhenOtherMovedToBottom
]);
const usDem = 'US-Dem';
const usRep = 'US-Rep';
const usOther = 'US-OTH';
function getCellsToTop(waffle, rowIndex, inclusive) {
    const inclusiveValue = inclusive ? 1 : 0;
    let cells = 0;
    for(let i = 0; i < rowIndex + inclusiveValue; i++){
        cells += waffle[i].length;
    }
    return cells;
}
function getCellsToBottom(waffle, rowIndex, inclusive) {
    const inclusiveValue = inclusive ? 0 : 1;
    let cells = 0;
    for(let i = rowIndex + inclusiveValue; i < waffle.length; i++){
        cells += waffle[i].length;
    }
    return cells;
}
function fillAllCellsInRow(waffle, rowIndex, dataParty) {
    waffle[rowIndex].forEach((cell)=>{
        cell.dataParty = dataParty;
    });
}
function fillCellsInRowFromIndex(waffle, rowIndex, startingCellIndex, cellsToFill, dataParty) {
    for(let i = startingCellIndex; i < startingCellIndex + cellsToFill; i++){
        waffle[rowIndex][i].dataParty = dataParty;
    }
}
function fillDemFullRows(waffle, cellsToFill) {
    let cellsRemainingToFill = cellsToFill;
    let demExtraCells = 0;
    let demExtraRowIndex = -1;
    for(let i = 0; i < waffle.length; i++){
        if (cellsRemainingToFill < waffle[i].length) {
            demExtraCells = cellsRemainingToFill;
            demExtraRowIndex = i;
            break;
        } else {
            fillAllCellsInRow(waffle, i, usDem);
            cellsRemainingToFill -= waffle[i].length;
        }
    }
    return {
        demExtraCells,
        demExtraRowIndex
    };
}
function fillRepFullRows(waffle, cellsToFill) {
    let cellsRemainingToFill = cellsToFill;
    let repExtraCells = 0;
    let repExtraRowIndex = waffle.length;
    for(let i = waffle.length - 1; i >= 0; i--){
        if (cellsRemainingToFill < waffle[i].length) {
            repExtraCells = cellsRemainingToFill;
            repExtraRowIndex = i;
            break;
        } else {
            fillAllCellsInRow(waffle, i, usRep);
            cellsRemainingToFill -= waffle[i].length;
        }
    }
    return {
        repExtraCells,
        repExtraRowIndex
    };
}
function fillOther(waffle, cellsToFill) {
    const startingRowIndex = waffle.length / 2 - 1;
    let cellsRemainingToFill = cellsToFill;
    for(let i = startingRowIndex; i < waffle.length; i++){
        for(let j = 0; j < waffle[i].length; j++){
            if (!cellsRemainingToFill) {
                break;
            }
            if (!waffle[i][j].dataParty) {
                waffle[i][j].dataParty = usOther;
                cellsRemainingToFill--;
            }
        }
    }
}
function fillOtherToTop(waffle, otherSeats, repExtraRowIndex, repExtraCells) {
    let otherCellsRemainingToFill = otherSeats;
    const availableCellsOnSharedRow = waffle[repExtraRowIndex].length - repExtraCells;
    const cellsToFillOnSharedRow = otherCellsRemainingToFill <= availableCellsOnSharedRow ? otherCellsRemainingToFill : availableCellsOnSharedRow;
    fillRowFromLeft(waffle, repExtraRowIndex, cellsToFillOnSharedRow, usOther);
    otherCellsRemainingToFill -= cellsToFillOnSharedRow;
    let rowIndex = repExtraRowIndex - 1;
    while(otherCellsRemainingToFill >= waffle[rowIndex].length){
        fillAllCellsInRow(waffle, rowIndex, usOther);
        otherCellsRemainingToFill -= waffle[rowIndex].length;
        rowIndex--;
    }
    fillRowFromLeft(waffle, rowIndex, otherCellsRemainingToFill, usOther);
}
function fillOtherToBottom(waffle, otherSeats, demExtraRowIndex, demExtraCells) {
    let otherCellsRemainingToFill = otherSeats;
    const availableCellsOnSharedRow = waffle[demExtraRowIndex].length - demExtraCells;
    const cellsToFillOnSharedRow = otherCellsRemainingToFill <= availableCellsOnSharedRow ? otherCellsRemainingToFill : availableCellsOnSharedRow;
    fillRowFromLeft(waffle, demExtraRowIndex, cellsToFillOnSharedRow, usOther);
    otherCellsRemainingToFill -= cellsToFillOnSharedRow;
    let rowIndex = demExtraRowIndex + 1;
    while(otherCellsRemainingToFill >= waffle[rowIndex].length){
        fillAllCellsInRow(waffle, rowIndex, usOther);
        otherCellsRemainingToFill -= waffle[rowIndex].length;
        rowIndex++;
    }
    fillRowFromLeft(waffle, rowIndex, otherCellsRemainingToFill, usOther);
}
function fillRowFromLeft(waffle, rowIndex, numberToFill, dataParty) {
    for(let cellIndex = 0; cellIndex < numberToFill; cellIndex++){
        waffle[rowIndex][cellIndex].dataParty = dataParty;
    }
}
function fillRowFromRight(waffle, rowIndex, numberToFill, dataParty) {
    for(let cellIndex = waffle[rowIndex].length - numberToFill; cellIndex < waffle[rowIndex].length; cellIndex++){
        waffle[rowIndex][cellIndex].dataParty = dataParty;
    }
}
function willDemOverlapWithOther(waffle, demSeats) {
    const otherStartRowIndex = waffle.length / 2 - 1;
    if (demSeats > getCellsToTop(waffle, otherStartRowIndex, false)) {
        return true;
    }
    return false;
}
function willRepOverlapWithOther(waffle, repSeats, otherSeats) {
    const otherStartRowIndex = waffle.length / 2 - 1;
    if (repSeats + otherSeats > getCellsToBottom(waffle, otherStartRowIndex, true)) {
        return true;
    }
    return false;
}
function willDemShareRowWithOther(waffle, demExtraCells, demExtraRowIndex) {
    const otherStartRowIndex = waffle.length / 2 - 1;
    return demExtraRowIndex >= otherStartRowIndex && demExtraCells > 0;
}
function willRepShareRowWithOther(waffle, repExtraRowIndex, otherSeats) {
    const otherStartRowIndex = waffle.length / 2 - 1;
    let remainingOtherSeats = otherSeats;
    let otherEndRowIndex = otherStartRowIndex;
    while(remainingOtherSeats > 0){
        remainingOtherSeats = remainingOtherSeats - waffle[otherEndRowIndex].length;
        if (remainingOtherSeats > 0) {
            otherEndRowIndex++;
        }
    }
    if (otherEndRowIndex >= repExtraRowIndex) {
        return true;
    }
    return false;
}
function willDemShareRowWithOtherWhenOtherMovedToTop(waffle, demExtraRowIndex, repExtraRowIndex, repExtraCells, otherSeats) {
    const availableCellsOnRepSharedRow = waffle[repExtraRowIndex].length - repExtraCells;
    let otherCellsRemainingToFill = otherSeats;
    const cellsToFillOnRepSharedRow = otherCellsRemainingToFill <= availableCellsOnRepSharedRow ? otherCellsRemainingToFill : availableCellsOnRepSharedRow;
    otherCellsRemainingToFill -= cellsToFillOnRepSharedRow;
    let otherEndRowIndex = repExtraRowIndex;
    if (otherCellsRemainingToFill > 0) {
        otherEndRowIndex--;
    }
    while(otherCellsRemainingToFill > 0){
        otherCellsRemainingToFill = otherCellsRemainingToFill - waffle[otherEndRowIndex].length;
        if (otherCellsRemainingToFill > 0) {
            otherEndRowIndex--;
        }
    }
    if (otherEndRowIndex <= demExtraRowIndex) {
        return true;
    }
    return false;
}
function willRepShareRowWithOtherWhenOtherMovedToBottom(waffle, repExtraRowIndex, demExtraRowIndex, demExtraCells, otherSeats) {
    const availableCellsOnDemSharedRow = waffle[demExtraRowIndex].length - demExtraCells;
    let otherCellsRemainingToFill = otherSeats;
    const cellsToFillOnDemSharedRow = otherCellsRemainingToFill <= availableCellsOnDemSharedRow ? otherCellsRemainingToFill : availableCellsOnDemSharedRow;
    otherCellsRemainingToFill -= cellsToFillOnDemSharedRow;
    let otherEndRowIndex = demExtraRowIndex;
    if (otherCellsRemainingToFill > 0) {
        otherEndRowIndex++;
    }
    while(otherCellsRemainingToFill > 0){
        otherCellsRemainingToFill = otherCellsRemainingToFill - waffle[otherEndRowIndex].length;
        if (otherCellsRemainingToFill > 0) {
            otherEndRowIndex++;
        }
    }
    if (otherEndRowIndex >= repExtraRowIndex) {
        return true;
    }
    return false;
}
function willAllPartiesShareRow(waffle, demExtraRowIndex, demExtraCells, repExtraRowIndex, repExtraCells, otherSeats) {
    return Boolean(demExtraRowIndex === repExtraRowIndex && demExtraCells && repExtraCells && otherSeats);
}
function fillWaffle(waffle, demSeats, repSeats, otherSeats) {
    const { demExtraCells, demExtraRowIndex } = fillDemFullRows(waffle, demSeats);
    const { repExtraCells, repExtraRowIndex } = fillRepFullRows(waffle, repSeats);
    if (!otherSeats && demExtraRowIndex === repExtraRowIndex) {
        if (demSeats >= repSeats) {
            if (repExtraCells) {
                fillRowFromRight(waffle, demExtraRowIndex, demExtraCells, usDem);
            } else {
                fillRowFromLeft(waffle, demExtraRowIndex, demExtraCells, usDem);
            }
            fillRowFromLeft(waffle, repExtraRowIndex, repExtraCells, usRep);
        } else {
            if (demExtraCells) {
                fillRowFromRight(waffle, repExtraRowIndex, repExtraCells, usRep);
            } else {
                fillRowFromLeft(waffle, repExtraRowIndex, repExtraCells, usRep);
            }
            fillRowFromLeft(waffle, demExtraRowIndex, demExtraCells, usDem);
        }
        return;
    }
    if (willAllPartiesShareRow(waffle, demExtraRowIndex, demExtraCells, repExtraRowIndex, repExtraCells, otherSeats)) {
        if (demSeats >= repSeats) {
            if (repExtraCells) {
                fillRowFromRight(waffle, demExtraRowIndex, demExtraCells, usDem);
            } else {
                fillRowFromLeft(waffle, demExtraRowIndex, demExtraCells, usDem);
            }
            fillRowFromLeft(waffle, repExtraRowIndex, repExtraCells, usRep);
            fillCellsInRowFromIndex(waffle, demExtraRowIndex, repExtraCells, otherSeats, usOther);
        } else {
            if (demExtraCells) {
                fillRowFromRight(waffle, repExtraRowIndex, repExtraCells, usRep);
            } else {
                fillRowFromLeft(waffle, repExtraRowIndex, repExtraCells, usRep);
            }
            fillRowFromLeft(waffle, demExtraRowIndex, demExtraCells, usDem);
            fillCellsInRowFromIndex(waffle, repExtraRowIndex, demExtraCells, otherSeats, usOther);
        }
        return;
    }
    if (willRepOverlapWithOther(waffle, repSeats, otherSeats)) {
        fillOtherToTop(waffle, otherSeats, repExtraRowIndex, repExtraCells);
    } else if (willDemOverlapWithOther(waffle, demSeats)) {
        fillOtherToBottom(waffle, otherSeats, demExtraRowIndex, demExtraCells);
    } else {
        fillOther(waffle, otherSeats);
    }
    if (willRepShareRowWithOther(waffle, repExtraRowIndex, otherSeats)) {
        if (otherSeats) {
            fillRowFromRight(waffle, repExtraRowIndex, repExtraCells, usRep);
        } else {
            fillRowFromLeft(waffle, repExtraRowIndex, repExtraCells, usRep);
        }
    } else if (willRepShareRowWithOtherWhenOtherMovedToBottom(waffle, repExtraRowIndex, demExtraRowIndex, demExtraCells, otherSeats)) {
        fillRowFromRight(waffle, repExtraRowIndex, repExtraCells, usRep);
    } else {
        fillRowFromLeft(waffle, repExtraRowIndex, repExtraCells, usRep);
    }
    if (willDemShareRowWithOther(waffle, demExtraCells, demExtraRowIndex)) {
        if (otherSeats) {
            fillRowFromRight(waffle, demExtraRowIndex, demExtraCells, usDem);
        } else {
            fillRowFromLeft(waffle, demExtraRowIndex, demExtraCells, usDem);
        }
    } else if (willDemShareRowWithOtherWhenOtherMovedToTop(waffle, demExtraRowIndex, repExtraRowIndex, repExtraCells, otherSeats)) {
        fillRowFromRight(waffle, demExtraRowIndex, demExtraCells, usDem);
    } else {
        fillRowFromLeft(waffle, demExtraRowIndex, demExtraCells, usDem);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-election-waffle/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Waffle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$senate$2d$house$2d$summary$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-senate-house-summary/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$waffle$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-waffle/styles.module.css [client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$waffle$2f$waffle$2d$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-waffle/waffle-utils.ts [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$waffle$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function Waffle({ Waffle, results, seatsRequired, id }) {
    _s();
    const waffleContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getPartySeats = (results, partyAbbreviation)=>{
        return results.find((result)=>{
            return result.party.abbreviation === partyAbbreviation;
        })?.seatCount || 0;
    };
    const getSeatsFromResults = (results)=>{
        const demSeats = getPartySeats(results, 'US-Dem');
        const repSeats = getPartySeats(results, 'US-Rep');
        const otherSeats = getPartySeats(results, 'US-OTH');
        const turnout = demSeats + repSeats + otherSeats;
        return {
            demSeats,
            repSeats,
            otherSeats,
            turnout
        };
    };
    const seats = getSeatsFromResults(results);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Waffle.useEffect": ()=>{
            const svgRows = waffleContainer.current?.querySelectorAll('g[data-row]') || [];
            const waffle = new Array(svgRows.length);
            for(let rowIndex = 0; rowIndex < svgRows.length; rowIndex++){
                waffle[rowIndex] = Array.from({
                    length: svgRows[rowIndex].children.length
                }, {
                    "Waffle.useEffect": ()=>({
                            dataParty: undefined
                        })
                }["Waffle.useEffect"]);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$waffle$2f$waffle$2d$utils$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["fillWaffle"])(waffle, seats.demSeats, seats.repSeats, seats.otherSeats);
            for(let rowIndex = 0; rowIndex < waffle.length; rowIndex++){
                for(let cellIndex = 0; cellIndex < waffle[rowIndex].length; cellIndex++){
                    const node = waffleContainer.current?.querySelector(`path[data-row="${rowIndex}"][data-cell="${cellIndex}"]`);
                    const dataParty = waffle[rowIndex][cellIndex].dataParty;
                    if (node) {
                        node.dataset.party = dataParty;
                    }
                }
            }
        }
    }["Waffle.useEffect"], [
        results
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${css('waffle-component')}`,
        "data-testid": `ui-waffle-component-${id}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${css('waffle-info-text')} display-any`,
                "data-testid": `ui-waffle-info-text-${id}`,
                children: `${seatsRequired} seats needed for control`
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-waffle/index.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: waffleContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Waffle, {}, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-waffle/index.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-waffle/index.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$senate$2d$house$2d$summary$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["SenateHouseSummary"], {
                seats: seats,
                id: id
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-waffle/index.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-election-waffle/index.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(Waffle, "esI3pzmyV2MmslV0zdjOMQXBeQ4=");
_c = Waffle;
var _c;
__turbopack_context__.k.register(_c, "Waffle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/error-boundary/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorBoundary",
    ()=>ErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    componentDidCatch(error) {
    /* Look to implement logging here? */ }
    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }
    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/analytics/index.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Analytics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$script$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/script.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$hooks$2f$use$2d$browser$2d$layout$2d$effect$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/hooks/use-browser-layout-effect.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$error$2d$boundary$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/error-boundary/index.tsx [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function Analytics({ data = {} }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Analytics.useMemo[values]": ()=>{
            return {
                application: {
                    name: data?.application,
                    environment: data?.applicationEnvironment
                },
                page: {
                    name: data?.name,
                    breadcrumb: data?.breadcrumb,
                    type: data?.type,
                    tags: [
                        data?.tags
                    ]
                }
            };
        }
    }["Analytics.useMemo[values]"], [
        data
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$hooks$2f$use$2d$browser$2d$layout$2d$effect$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "Analytics.useBrowserLayoutEffect": ()=>{
            const handleRouteChange = {
                "Analytics.useBrowserLayoutEffect.handleRouteChange": ()=>{
                    if (window && window.skyTags) {
                        window.skyTags.queue.push([
                            'set',
                            values
                        ]);
                        window.skyTags.queue.push([
                            'event',
                            {
                                type: 'view'
                            }
                        ], [
                            'track'
                        ]);
                    }
                }
            }["Analytics.useBrowserLayoutEffect.handleRouteChange"];
            router.events.on('routeChangeComplete', handleRouteChange);
            return ({
                "Analytics.useBrowserLayoutEffect": ()=>{
                    router.events.off('routeChangeComplete', handleRouteChange);
                }
            })["Analytics.useBrowserLayoutEffect"];
        }
    }["Analytics.useBrowserLayoutEffect"], [
        router.events,
        values
    ]);
    const analyticsScript = `
    function onLoad() {
      (function(){
        var e = window.skyTags = window.skyTags || {}; e.queue = e.queue || [], e.snippetVersion = "1.0", e.emitter = e.emitter || { registry: {}, on: function (e, i) { var s = this.registry, t = s[e]; t ? s[e].push : s[e] = [i] } }, e.queue.push(["init"])
      })();

      skyTags.queue.push(['set', {
        config: {
          adapters: {
            skyAnalytics: {
              maps: {
                schemas: null,
              }
            }
          }
        }
      }]);
      
      skyTags.queue.push(['set', ${JSON.stringify(values)}]);
      skyTags.queue.push(['event', {type: 'view'}], ['track']);
    };

    function init() {
      var script = document.createElement('script');
      script.onload = onLoad;
      script.src = 'https://analytics.global.sky.com/sky-tags/news/${data?.analyticsEnvironment}/sky-tags-without-adobe.min.js';
      script.id = 'analytics-global-sky-lib';
      document.body.appendChild(script);    
    };

    (function(){
      if (!window.sdc || !window.sdc.checkConsent){
        init();
        return;
      }

      window.sdc.checkConsent(document.currentScript, init);
    })();
  `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$error$2d$boundary$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$script$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            dangerouslySetInnerHTML: {
                __html: analyticsScript
            },
            id: "analytics-global-sky-script",
            "data-consent": "false",
            "data-vendor-name": "adobe-analytics"
        }, void 0, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/analytics/index.jsx",
            lineNumber: 86,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/analytics/index.jsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(Analytics, "8IXdIiuWSldOiHblHrm+IYon7nI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$hooks$2f$use$2d$browser$2d$layout$2d$effect$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Analytics;
Analytics.propTypes = {
    data: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object
};
var _c;
__turbopack_context__.k.register(_c, "Analytics");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/chartbeat/index.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Chartbeat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$script$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/script.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$hooks$2f$use$2d$browser$2d$layout$2d$effect$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/hooks/use-browser-layout-effect.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$error$2d$boundary$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/error-boundary/index.tsx [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
function Chartbeat({ data = {}, inApp = false }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Chartbeat.useMemo[values]": ()=>{
            return {
                sections: 'Elections',
                path: router.asPath,
                title: `${data?.pageTitle} | Sky News`
            };
        }
    }["Chartbeat.useMemo[values]"], [
        data
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$hooks$2f$use$2d$browser$2d$layout$2d$effect$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"])({
        "Chartbeat.useBrowserLayoutEffect": ()=>{
            const handleRouteChange = {
                "Chartbeat.useBrowserLayoutEffect.handleRouteChange": ()=>{
                    if (window && window.pSUPERFLY) {
                        window.pSUPERFLY.virtualPage(values);
                    }
                }
            }["Chartbeat.useBrowserLayoutEffect.handleRouteChange"];
            router.events.on('routeChangeComplete', handleRouteChange);
            return ({
                "Chartbeat.useBrowserLayoutEffect": ()=>{
                    router.events.off('routeChangeComplete', handleRouteChange);
                }
            })["Chartbeat.useBrowserLayoutEffect"];
        }
    }["Chartbeat.useBrowserLayoutEffect"], [
        router.events,
        values
    ]);
    const chartbeatScript = `
    window._sf_async_config={
        uid: '${data?.uid}',
        domain: '${data?.domain}',
        sections: 'Elections',
        useCanonical: 'true',
        mobileApp: ${inApp},
      };

    window._sf_endpt = new Date().getTime();

    var init = function () {
        var script = document.createElement('script');
        script.src = document.location.protocol + '//static.chartbeat.com/js/chartbeat.js';
        document.body.appendChild(script);
    };

    (function(){
        if (!window.sdc || !window.sdc.checkConsent){
            init();
            return;
        }

        window.sdc.checkConsent(document.currentScript, init);
    })();
  `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$error$2d$boundary$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["ErrorBoundary"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$script$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            dangerouslySetInnerHTML: {
                __html: chartbeatScript
            },
            id: "chartbeat-sky-script",
            "data-consent": "false",
            "data-vendor-name": "chartbeat"
        }, void 0, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/components/chartbeat/index.jsx",
            lineNumber: 63,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/chartbeat/index.jsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(Chartbeat, "8IXdIiuWSldOiHblHrm+IYon7nI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$hooks$2f$use$2d$browser$2d$layout$2d$effect$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Chartbeat;
Chartbeat.propTypes = {
    data: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    inApp: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool
};
var _c;
__turbopack_context__.k.register(_c, "Chartbeat");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/consent-management/consent-id-mapping.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const consentIdMapping = [
    {
        vendorName: 'chartbeat',
        gdpId: 1,
        active: true,
        sourcepointId: '5ea172e36ede87504f7b4590'
    },
    {
        vendorName: 'userzoom',
        gdpId: 2,
        active: true,
        sourcepointId: '6137185aa2286349e51b0c65'
    },
    {
        vendorName: 'peer-39',
        gdpId: 3,
        active: true,
        sourcepointId: '5f058e622c911e101682422b'
    },
    {
        vendorName: 'brightcove',
        gdpId: 4,
        active: true,
        sourcepointId: '5ec796b4320b5a4efd764e0f'
    },
    {
        vendorName: 'google-tag-manager',
        gdpId: 5,
        active: true,
        sourcepointId: '5e952f6107d9d20c88e7c975'
    },
    {
        vendorName: 'spreaker',
        gdpId: 6,
        active: true,
        sourcepointId: '5f33bda0cfb5e201a573d55f'
    },
    {
        vendorName: 'twitter',
        gdpId: 7,
        active: true,
        sourcepointId: '5fab0c31a22863611c5f8764'
    },
    {
        vendorName: 'youtube',
        gdpId: 8,
        active: true,
        sourcepointId: '5e7ac3fae30e7d1bc1ebf5e8'
    },
    {
        vendorName: 'facebook',
        gdpId: 9,
        active: true,
        sourcepointId: '5f1b2fbdb8e05c3057240f56'
    },
    {
        vendorName: 'instagram',
        gdpId: 10,
        active: true,
        sourcepointId: '6054c53ca228639c6f285121'
    },
    {
        vendorName: 'flourish',
        gdpId: 11,
        active: true,
        sourcepointId: '5ec7955faf2b474b46b7a09e'
    },
    {
        vendorName: 'datawrapper',
        gdpId: 12,
        active: true,
        sourcepointId: '5ec462c02330505ab89fbb37'
    },
    {
        vendorName: 'tiktok',
        gdpId: 13,
        active: true,
        sourcepointId: '5e7f6927b8e05c4e491e7380'
    },
    {
        vendorName: 'qualtrics',
        gdpId: 18,
        active: true,
        sourcepointId: '5f1b2fbeb8e05c3057240fa0'
    },
    {
        vendorName: 'adobe-analytics',
        gdpId: 21,
        active: true,
        sourcepointId: '5ed7a9a9e0e22001da9d52ad'
    }
];
const __TURBOPACK__default__export__ = consentIdMapping;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/consent-management/index.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConsentManagement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$script$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/script.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$consent$2d$management$2f$consent$2d$id$2d$mapping$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/consent-management/consent-id-mapping.ts [client] (ecmascript)");
;
;
;
;
;
function ConsentManagement({ data }) {
    const consentManagementScript = `function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){for(var t,e,o=[],n=window,r=n;r;){try{if(r.frames.__tcfapiLocator){t=r;break}}catch(t){}if(r===n.top)break;r=n.parent}t||(function t(){var e=n.document,o=!!n.frames.__tcfapiLocator;if(!o)if(e.body){var r=e.createElement("iframe");r.style.cssText="display:none",r.name="__tcfapiLocator",e.body.appendChild(r)}else setTimeout(t,5);return!o}(),n.__tcfapi=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];if(!n.length)return o;"setGdprApplies"===n[0]?n.length>3&&2===parseInt(n[1],10)&&"boolean"==typeof n[3]&&(e=n[3],"function"==typeof n[2]&&n[2]("set",!0)):"ping"===n[0]?"function"==typeof n[2]&&n[2]({gdprApplies:e,cmpLoaded:!1,cmpStatus:"stub"}):o.push(n)},n.addEventListener("message",(function(t){var e="string"==typeof t.data,o={};if(e)try{o=JSON.parse(t.data)}catch(t){}else o=t.data;var n="object"===_typeof(o)?o.__tcfapiCall:null;n&&window.__tcfapi(n.command,n.version,(function(o,r){var a={__tcfapiReturn:{returnValue:o,success:r,callId:n.callId}};t&&t.source&&t.source.postMessage&&t.source.postMessage(e?JSON.stringify(a):a,"*")}),n.parameter)}),!1))}();`;
    const consentCookieScript = `
  function createConsentCookie(vendorConsents) {
    const consentedVendors = vendorConsents.consentedVendors || [];
    const grants = vendorConsents.grants;
    const mappedVendors = consentedVendors
      .filter((vendor) => grants[vendor._id].vendorGrant)
      .map((vendor) => vendor._id)
      .map((id) => {
        return window.sdc.consentIdMapping.find((vendorRecord) => vendorRecord.sourcepointId === id);
      })
      .filter((record) => Boolean(record));
    const consentString = \`:\${mappedVendors.map((vendor) => vendor.gdpId).join(':')}:\`;
    const expiryDate = new Date();
    expiryDate.setMonth(expiryDate.getMonth() + 3);
    document.cookie = \`consents=\${consentString}; expires=\${expiryDate}; path=/\`;
    mappedVendors.forEach((vendor) => {
      document
        .querySelectorAll(\`[data-vendor-name="\${vendor.vendorName.toLowerCase()}"]\`)
        .forEach((e) => (e.dataset.consent = true));
    });
  
    document.querySelectorAll(\`[data-vendor-name="iab-vendor"]\`).forEach((e) => (e.dataset.consent = true));
  
    const pendingVendors = document.querySelectorAll('[data-consent="pending"]');
    if (pendingVendors.length) {
      pendingVendors.forEach((vendor) => {
        vendor.dataset.consent = false;
      });
    }
  }
  
  __tcfapi('addEventListener', 2, function (tcData, success) {
    if (success) {
      if (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete') {
        __tcfapi('getCustomVendorConsents', 2, function (vendorConsents, success) {
          if (success) {
            createConsentCookie(vendorConsents);
          }
        });
      }
    }
  });

    const consentsCookie = document.cookie.split('; ').find((row) => row.startsWith('consents='));
    if (consentsCookie) {
      const consentsValue = consentsCookie.split('=')[1];
      for (const vendor of window.sdc.consentIdMapping) {
        if (consentsValue.includes(\`:\${vendor.gdpId}:\`)) {
          document
            .querySelectorAll(\`[data-vendor-name="\${vendor.vendorName}"]:not([data-consent="true"])\`)
            .forEach((e) => {
              if (e) {
                e.dataset.consent = true;
              }
            });
        } else {
          document
            .querySelectorAll(\`[data-vendor-name="\${vendor.vendorName}"]:not([data-consent="false"])\`)
            .forEach((e) => {
              if (e) {
                e.dataset.consent = false;
              }
            });
        }
      }
      document.querySelectorAll(\`[data-vendor-name="iab-vendor"]\`).forEach(function (e) {
        e.dataset.consent = true;
      });
    }
  
    if (!consentsCookie) {
      __tcfapi('getCustomVendorConsents', 2, function (vendorConsents, success) {
        if (success && !vendorConsents.newUser) {
          createConsentCookie(vendorConsents);
        }
      });
    }

    window.addEventListener('load', (event) => {
        setTimeout(function() {
            const consentsCookie = document.cookie
                    .split('; ')
                    .find(row => row.startsWith('consents='));

            if (!consentsCookie) {
                __tcfapi('ping', 2, (pingReturn) => {
                    if (!pingReturn.cmpLoaded) {
                        document.querySelectorAll('[data-consent="pending"]').forEach((function(e) {
                            e.dataset.consent = "fallback"
                        }));
                    }
                });
            }
        }, 500);
    });
  `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$script$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                id: "sourcepointConsentIdMapping",
                children: `
          window.sdc = window.sdc || {};
          window.sdc.consentIdMapping = ${JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$consent$2d$management$2f$consent$2d$id$2d$mapping$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"])};
        `
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/consent-management/index.jsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$script$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                id: "sourcepointManagementScript",
                dangerouslySetInnerHTML: {
                    __html: consentManagementScript
                }
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/consent-management/index.jsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$script$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                id: "sourcepointConfig",
                children: `window._sp_ = {
      config: {
        accountId: ${data.accountId},
        propertyId: ${data.propertyId},
        propertyHref: '${data.propertyHref}',
        joinHref: ${data.joinHref},
        baseEndpoint: 'https://cdn.privacy-mgmt.com',
        gdpr: {},
        events: {
          onSPPMObjectReady() {
            document.body.addEventListener('click', function (e) {
              if (e.target.matches("a[href='#privacy-options']")) {
                e.preventDefault();
                window._sp_.gdpr.loadPrivacyManagerModal(${data.privacyManagerId});
              }
            });
          },
        },
      }
    };`
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/consent-management/index.jsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$script$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                id: "consent",
                dangerouslySetInnerHTML: {
                    __html: consentCookieScript
                }
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/consent-management/index.jsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$script$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                src: "https://cdn.privacy-mgmt.com/unified/wrapperMessagingWithoutDetection.js",
                id: "sourcepoint",
                async: true
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/consent-management/index.jsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/consent-management/index.jsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
}
_c = ConsentManagement;
ConsentManagement.propTypes = {
    data: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object
};
var _c;
__turbopack_context__.k.register(_c, "ConsentManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-localnav/set-scroll-status.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>setScroll
]);
function setScroll(el) {
    if (!el || !el.parentElement) {
        return;
    }
    const { offsetWidth: o, scrollWidth: w, scrollLeft: l } = el;
    let overflow = 'both';
    if (w === o) {
        overflow = 'none';
    } else if (l < 5) {
        overflow = 'right';
    } else if (l + 5 > w - o) {
        overflow = 'left';
    }
    el.parentElement.dataset.overflow = overflow;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/ui-localnav/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "localnav": "styles-module__XCEJrq__localnav",
  "localnav-button": "styles-module__XCEJrq__localnav-button",
  "localnav-item": "styles-module__XCEJrq__localnav-item",
  "localnav-items": "styles-module__XCEJrq__localnav-items",
  "localnav-link": "styles-module__XCEJrq__localnav-link",
  "localnav-title": "styles-module__XCEJrq__localnav-title",
  "localnav-wrap": "styles-module__XCEJrq__localnav-wrap",
  "no-js": "styles-module__XCEJrq__no-js",
});
}),
"[project]/gdp-uk-news-frontend/src/components/ui-localnav/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocalNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$localnav$2f$set$2d$scroll$2d$status$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-localnav/set-scroll-status.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$localnav$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-localnav/styles.module.css [client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$localnav$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function LocalNav({ modifier = '', style = {}, items = [], firstItemIsTitle = null, current = null, ariaLabel = null }) {
    _s();
    const wrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const setDirection = (ev)=>{
        if (wrap.current) {
            const direction = Number(ev.target.dataset.direction);
            wrap.current.scrollBy(wrap.current.offsetWidth * direction / 2, 0);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LocalNav.useEffect": ()=>{
            const el = wrap.current;
            if (!el) {
                return;
            }
            // Keep CSS overflow state in sync with scroll position
            const handleScroll = {
                "LocalNav.useEffect.handleScroll": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$localnav$2f$set$2d$scroll$2d$status$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["default"])(el);
                }
            }["LocalNav.useEffect.handleScroll"];
            // Map vertical wheel → horizontal scroll
            const handleWheel = {
                "LocalNav.useEffect.handleWheel": (event)=>{
                    el.scrollLeft += event.deltaY;
                }
            }["LocalNav.useEffect.handleWheel"];
            // Initial sync (important on mount)
            handleScroll();
            el.addEventListener('scroll', handleScroll);
            el.addEventListener('wheel', handleWheel, {
                passive: true
            });
            const ro = new ResizeObserver(handleScroll);
            ro.observe(el);
            return ({
                "LocalNav.useEffect": ()=>{
                    el.removeEventListener('scroll', handleScroll);
                    el.removeEventListener('wheel', handleWheel);
                    ro.disconnect();
                }
            })["LocalNav.useEffect"];
        }
    }["LocalNav.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${css('localnav')} ${modifier}`,
        style: style,
        "data-has-title": firstItemIsTitle,
        "data-overflow": "none",
        "data-testid": "ui-localnav",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: css('localnav-button'),
                "aria-hidden": "true",
                "data-direction": "-1",
                onClick: setDirection,
                "data-testid": "ui-localnav-button",
                tabIndex: -1,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 34 34",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6.02 12.67a.78.78 0 0 0 .247.525l.188.192L16.52 23.45a.995.995 0 0 0 1.413.001l10.135-10.134.123-.126a.767.767 0 0 0 .248-.53c.006-.173-.155-.438-.442-.725a8.575 8.575 0 0 0-.59-.537c-.05-.04-.096-.078-.138-.11l-.496.495-9.193 9.193-.355.354-.354-.354-9.197-9.198-.484-.484a8.29 8.29 0 0 0-.73.648c-.285.288-.446.553-.44.727z"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-localnav/index.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-localnav/index.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-localnav/index.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: css('localnav-wrap'),
                ref: wrap,
                "aria-label": ariaLabel || undefined,
                "data-testid": "ui-localnav-wrap",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: css('localnav-items'),
                    "data-testid": "ui-localnav-items",
                    children: items.map((item, index)=>{
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: `${css('localnav-item')} ${index === 0 && firstItemIsTitle ? css('localnav-title') : ''}`,
                            "data-testid": "ui-localnav-item",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.link,
                                className: css('localnav-link'),
                                "aria-current": item.current || index === current ? 'page' : undefined,
                                "data-testid": "ui-localnav-link",
                                children: item.label
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-localnav/index.tsx",
                                lineNumber: 103,
                                columnNumber: 17
                            }, this)
                        }, index, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/components/ui-localnav/index.tsx",
                            lineNumber: 98,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-localnav/index.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-localnav/index.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: css('localnav-button'),
                "aria-hidden": "true",
                "data-direction": "1",
                "data-testid": "ui-localnav-button",
                onClick: setDirection,
                tabIndex: -1,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    viewBox: "0 0 34 34",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6.02 12.67a.78.78 0 0 0 .247.525l.188.192L16.52 23.45a.995.995 0 0 0 1.413.001l10.135-10.134.123-.126a.767.767 0 0 0 .248-.53c.006-.173-.155-.438-.442-.725a8.575 8.575 0 0 0-.59-.537c-.05-.04-.096-.078-.138-.11l-.496.495-9.193 9.193-.355.354-.354-.354-9.197-9.198-.484-.484a8.29 8.29 0 0 0-.73.648c-.285.288-.446.553-.44.727z"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-localnav/index.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/ui-localnav/index.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/ui-localnav/index.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/ui-localnav/index.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(LocalNav, "3i7+eQkPYXQxKluV7h60Xwa6fB8=");
_c = LocalNav;
var _c;
__turbopack_context__.k.register(_c, "LocalNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=gdp-uk-news-frontend_src_components_12lm9i4._.js.map