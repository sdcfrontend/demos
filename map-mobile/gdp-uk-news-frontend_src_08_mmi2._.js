(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/gdp-uk-news-frontend/src/data/sky-names.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const skyNames = {
    // GE 2019
    'Kingston upon Hull North': 'Hull North',
    'Kingston upon Hull West and Hessle': 'Hull West & Hessle',
    'Carmarthen West and South Pembrokeshire': 'Carmarthen West & Pembrokeshire',
    'Na h-Eileanan an Iar': 'Western Isles',
    // Locals
    'County Durham': 'Durham',
    'Windsor and Maidenhead': 'Windsor & Maidenhead Royal',
    'Bristol, City of': 'Bristol',
    'Herefordshire, County of': 'Herefordshire',
    'Kingston upon Hull, City of': 'Hull',
    // GE 2024
    'Kingston upon Hull East': 'Hull East',
    'Kingston upon Hull North and Cottingham': 'Hull North and Cottingham',
    'Kingston upon Hull West and Haltemprice': 'Hull West and Haltemprice',
    'Montgomeryshire and Glyndŵr': 'Montgomeryshire and Glyndwr',
    'Ynys Môn': 'Ynys Mon'
};
const __TURBOPACK__default__export__ = skyNames;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/pages/elections/[election]/index.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__N_SSP",
    ()=>__N_SSP,
    "default",
    ()=>Election
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/navigation.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$swr$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/swr/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$queries$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/graphql/queries.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$election$2d$type$2d$helper$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/election-type-helper.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$site$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/site.tsx [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
var __N_SSP = true;
function Election({ components, fallbackData, election, inApp, localNavProps }) {
    _s();
    const isWide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSearchParams"])().get('isWide') === 'true';
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$swr$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"])(`/api/elections/get-data?queryKey=${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$graphql$2f$queries$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getQueryData"])('ELECTIONS_DATA_QUERY', fallbackData.election.electionType).key}&electionId=${election.id}&electionType=${fallbackData.election.electionType}`, {
        fallbackData
    });
    const iframe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSearchParams"])().get('iframe');
    if (iframe !== null) {
        const ElectionIframeComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$election$2d$type$2d$helper$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getElectionTypeIframeComponent"])(fallbackData.election.electionType, iframe);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ElectionIframeComponent, {
            data: data,
            election: election,
            isWide: isWide,
            inApp: inApp
        }, void 0, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/pages/elections/[election]/index.js",
            lineNumber: 29,
            columnNumber: 12
        }, this);
    }
    const ElectionComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$election$2d$type$2d$helper$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getElectionTypeComponent"])(fallbackData.election.electionType);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$site$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        components: components,
        inApp: inApp,
        localNavProps: localNavProps,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ElectionComponent, {
            data: data,
            election: election
        }, void 0, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/pages/elections/[election]/index.js",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/pages/elections/[election]/index.js",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Election, "eWIi5rxGinNwgrMxiEvDrrPq7Yk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$swr$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = Election;
Election.propTypes = {
    components: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    fallbackData: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    election: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    inApp: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    localNavProps: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object
};
var _c;
__turbopack_context__.k.register(_c, "Election");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=gdp-uk-news-frontend_src_08_mmi2._.js.map