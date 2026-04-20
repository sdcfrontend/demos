(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/general-election-constituency.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GeneralElectionConstituency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status-banner/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-info/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/array-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/number-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
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
function GeneralElectionConstituency({ election, data }) {
    const assets = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].UK_GENERAL[election.year];
    const tableData = data?.votingArea?.votingStatus === 'DECLARED' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sortItems"])(data?.votingArea?.nominations, [
        {
            sortField: 'voteCount',
            direction: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].desc
        },
        {
            sortField: 'candidate.surname'
        },
        {
            sortField: 'candidate.firstName'
        }
    ]) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sortItems"])(data?.votingArea?.nominations, [
        {
            sortField: 'candidate.surname'
        },
        {
            sortField: 'candidate.firstName'
        }
    ]);
    const statusText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setElectionStatus"])({
        statusType: 'gainOrHold',
        winner: data.votingArea.electedCandidate?.party.displayName,
        sittingParty: data.votingArea.previouslyElectedCandidate?.party.displayName,
        gainOrHold: data.votingArea.gainOrHold,
        isAnnouncementBanner: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                Logo: assets.logo,
                theme: `election-theme-${election.year}-${election.electionType}`,
                links: [
                    {
                        text: 'Full results',
                        url: `/elections/${election.slug}`,
                        backLink: true,
                        hiddenTextPrefix: 'Back to',
                        trackingLabel: 'full-results'
                    },
                    {
                        text: 'Live coverage',
                        url: `https://news.sky.com/politicshub`,
                        type: 'live',
                        target: '_blank',
                        trackingLabel: 'live-coverage'
                    }
                ],
                children: data.votingArea?.shortName
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/general-election-constituency.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-400",
                children: [
                    statusText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        party: data.votingArea.electedCandidate?.party.abbreviation || 'baseline',
                        statusText: statusText
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/general-election-constituency.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        status: [
                            {
                                name: 'Majority',
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prettifyNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                    value: data.votingArea.majority
                                }))
                            },
                            {
                                name: 'Electorate',
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prettifyNumber"])(data.votingArea.electorate)
                            },
                            {
                                name: 'Turnout',
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["appendPercentSignToNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["roundToXDecimalPlaces"])(data.votingArea.turnoutPercentage))
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/general-election-constituency.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/general-election-constituency.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "election-vote-share",
                        text: "Vote Share",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "election-vote-share",
                            children: "The percentage of votes each party has received in this constituency and how it's changed since the last election. The candidate with the highest number of votes wins the seat."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/general-election-constituency.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/general-election-constituency.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        voteShare: data.votingArea.nominations,
                        changeLabel: "Change since 2019",
                        mainParties: election.mainParties
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/general-election-constituency.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/general-election-constituency.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    layout: [
                        'name bold 43%',
                        'name 43%',
                        'cell 14%'
                    ],
                    theme: "elections",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].Header, {
                            values: [
                                {
                                    value: 'Party'
                                },
                                {
                                    value: 'Candidate'
                                },
                                {
                                    value: 'Votes'
                                }
                            ]
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/general-election-constituency.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].Body, {
                            children: tableData.map((row, index)=>{
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].Row, {
                                    values: [
                                        {
                                            value: row.party.name,
                                            dataset: {
                                                'data-party': row.party.abbreviation
                                            }
                                        },
                                        {
                                            value: `${row.candidate.firstName} ${row.candidate.surname}`
                                        },
                                        {
                                            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prettifyNumber"])(row.voteCount)
                                        }
                                    ]
                                }, index, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/general-election-constituency.tsx",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/general-election-constituency.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/general-election-constituency.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/general-election-constituency.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/general-election-constituency.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_c = GeneralElectionConstituency;
var _c;
__turbopack_context__.k.register(_c, "GeneralElectionConstituency");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-constituency.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocalCouncilsConstituency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-seats/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status-banner/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-info/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
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
function LocalCouncilsConstituency({ election, data }) {
    const assets = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].ENGLISH_COUNCIL[election.year];
    const statusText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setElectionStatus"])({
        statusType: 'gainOrHold',
        winner: data.votingArea.controllingParty?.displayName,
        sittingParty: data.votingArea.previouslyControllingParty?.displayName,
        gainOrHold: data.votingArea.gainOrHold,
        isAnnouncementBanner: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                Logo: assets.logo,
                theme: `election-theme-${election.year}-${election.electionType}`,
                links: [
                    {
                        text: 'Full results',
                        url: `/elections/${election.slug}`,
                        backLink: true,
                        hiddenTextPrefix: 'Back to'
                    },
                    {
                        text: 'Live coverage',
                        url: `https://news.sky.com/politicshub`,
                        type: 'live',
                        target: '_blank',
                        trackingLabel: 'live-coverage'
                    }
                ],
                children: data.votingArea?.shortName
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-constituency.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-400",
                "aria-labelledby": "election-council-seats",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "election-council-seats",
                        text: "Seats",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "election-council-seats",
                            children: "The number of seats each party has in this council and how it's changed since the last election."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-constituency.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-constituency.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wrap gap-100",
                        children: [
                            statusText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                party: data.votingArea.controllingParty?.abbreviation || 'baseline',
                                statusText: statusText
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-constituency.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                seats: (data.votingArea.parties ?? []).map((partyResult)=>({
                                        party: {
                                            abbreviation: partyResult.party?.abbreviation ?? '',
                                            name: partyResult.party?.name ?? '',
                                            displayName: partyResult.party?.displayName ?? partyResult.party?.name ?? ''
                                        },
                                        seatCount: partyResult.seatCount ?? null,
                                        seatChange: partyResult.seatsChange ?? null
                                    })),
                                items: 6,
                                mainParties: election.mainParties
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-constituency.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-constituency.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wrap gap-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            status: [
                                {
                                    name: 'Total seats',
                                    value: String(data.votingArea.seats?.total ?? '')
                                },
                                {
                                    name: 'Seats for majority',
                                    value: String(data.votingArea.majorityThreshold ?? '')
                                },
                                {
                                    name: 'Council type',
                                    value: data.votingArea.councilType ?? ''
                                },
                                {
                                    name: 'Boundary change',
                                    value: data.votingArea.boundaryChange ? 'YES' : 'NO'
                                }
                            ]
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-constituency.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-constituency.tsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-constituency.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            data.votingArea.wards && data.votingArea.wards.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-500",
                "aria-labelledby": "election-council-ward-results",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "election-council-ward-results",
                        text: "Results by ward",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "election-council-ward-results",
                            children: "Each councillor elected represents a specific electoral district called a ward. These are the smallest areas of local government, with adult populations averaging about 6,000. Some wards are represented by more than one councillor."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-constituency.tsx",
                            lineNumber: 105,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-constituency.tsx",
                        lineNumber: 104,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid-flex gap-300",
                        style: {
                            alignItems: 'stretch',
                            alignContent: 'start'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                flex: 1,
                                minWidth: 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["AreaList"], {
                                mode: "ward",
                                wardsDeclared: (data.votingArea.wards ?? []).filter((w)=>w.status?.match(/DECLARED|RUSH/)).length,
                                wards: (data.votingArea.wards ?? []).map((ward)=>({
                                        displayName: ward.displayName,
                                        id: ward.id,
                                        lastUpdated: ward.lastUpdated ?? undefined,
                                        status: ward.status ?? undefined,
                                        gainHoldBySeats: ward.gainHoldBySeats ? ward.gainHoldBySeats : undefined,
                                        partyResults: (ward.partyResults ?? []).map((partyResult)=>({
                                                party: {
                                                    abbreviation: partyResult.party?.abbreviation ?? '',
                                                    displayName: partyResult.party?.displayName ?? ''
                                                },
                                                seatsDefending: partyResult.seatsDefending ?? undefined,
                                                seatsWon: partyResult.seatsWon ?? undefined,
                                                voteCount: partyResult.voteCount ?? undefined,
                                                seatsChange: partyResult.seatsChange ?? undefined
                                            }))
                                    })),
                                showSearch: true,
                                showItems: 12,
                                notFoundMessage: "Ward not found. Either it's not up for re-election, or you entered an invalid name.",
                                showFilterOptions: true,
                                inputPlaceholder: "Search by ward name",
                                election: election
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-constituency.tsx",
                                lineNumber: 113,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-constituency.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-constituency.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-constituency.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-constituency.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = LocalCouncilsConstituency;
var _c;
__turbopack_context__.k.register(_c, "LocalCouncilsConstituency");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-ward.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocalCouncilsWard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status-banner/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$winning$2d$candidate$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-winning-candidate/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
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
function LocalCouncilsWard({ election, data }) {
    _s();
    const assets = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].ENGLISH_COUNCIL[election.year];
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Generate council URL: always /elections/{slug}/{first-segment}
    const constituencySegments = Array.isArray(router.query.constituency) ? router.query.constituency : [
        router.query.constituency
    ];
    const councilUrl = `/elections/${election.slug}/${constituencySegments[0]}`;
    const ward = data.votingArea.wards?.[0] ?? null;
    const findParty = (abbreviation)=>ward?.partyResults.find((r)=>r.party.abbreviation === abbreviation)?.party;
    const fallbackGainHold = [
        {
            gainHoldStatus: null,
            partyAbbreviation: 'baseline',
            previousPartyAbbreviation: null
        }
    ];
    const gainHoldArray = ward?.gainHoldBySeats && ward.gainHoldBySeats.length > 0 ? ward.gainHoldBySeats : fallbackGainHold;
    const winnersData = gainHoldArray.map((result)=>{
        const party = findParty(result.partyAbbreviation);
        return {
            candidate: {
                firstName: '',
                surname: ''
            },
            party: party ?? {
                abbreviation: result.partyAbbreviation
            },
            statusText: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setElectionStatus"])({
                statusType: 'gainOrHold',
                gainOrHold: result.gainHoldStatus,
                winner: party?.displayName ?? party?.name ?? result.partyAbbreviation,
                sittingParty: null,
                isAnnouncementBanner: true
            })
        };
    });
    // Use ward.incumbentParties (e.g. ['C','C','L']) to compute previous-party counts
    const incumbentParties = (ward?.incumbentParties ?? []).filter((abbr)=>abbr !== null);
    const previousPartyCounts = incumbentParties.reduce((acc, abbr)=>{
        acc[abbr] = (acc[abbr] || 0) + 1;
        return acc;
    }, {});
    const previousPartySummary = Object.entries(previousPartyCounts).map(([abbr, count])=>{
        const party = findParty(abbr);
        const label = party?.displayName ?? party?.name ?? abbr;
        return `${label} ${count}`;
    }).join(', ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                Logo: assets.logo,
                theme: `election-theme-${election.year}-${election.electionType}`,
                links: [
                    {
                        text: 'Local Council',
                        url: councilUrl,
                        backLink: true,
                        hiddenTextPrefix: 'Back to'
                    },
                    {
                        text: 'Live coverage',
                        url: `https://news.sky.com/politicshub`,
                        type: 'live',
                        target: '_blank',
                        trackingLabel: 'live-coverage'
                    }
                ],
                children: ward?.displayName
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-ward.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid-areas",
                        style: {
                            '--cols': winnersData.map(()=>'1fr').join(' '),
                            '--cols-m': '1fr'
                        },
                        children: winnersData.map((winner, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid-cell wrap gap-200",
                                children: [
                                    winner.party.abbreviation !== 'baseline' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$winning$2d$candidate$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        electedCandidate: winner,
                                        country: "england"
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-ward.tsx",
                                        lineNumber: 118,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        party: winner.party.abbreviation,
                                        statusText: winner.statusText ?? ''
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-ward.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, `${winner.party.abbreviation}-${idx}`, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-ward.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-ward.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        status: [
                            {
                                name: 'Previous election result',
                                value: previousPartySummary.toUpperCase() || '—'
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-ward.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-ward.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/local-councils-ward.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(LocalCouncilsWard, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LocalCouncilsWard;
var _c;
__turbopack_context__.k.register(_c, "LocalCouncilsWard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NorthernIrelandAssemblyConstituency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$members$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-members/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-info/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/array-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/number-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
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
function NorthernIrelandAssemblyConstituency({ election, data }) {
    const assets = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].NORTHERN_IRELAND[election.year];
    const tableData = data?.votingArea?.votingStatus === 'BASELINE' ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["sortItems"])(data?.votingArea?.nominations, [
        {
            sortField: 'candidate.surname'
        },
        {
            sortField: 'candidate.firstName'
        }
    ]) : data?.votingArea?.nominations;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                Logo: assets.logo,
                links: [
                    {
                        text: 'Full results',
                        url: `/elections/${election.slug}`,
                        backLink: true,
                        hiddenTextPrefix: 'Back to'
                    }
                ],
                children: data.votingArea?.shortName
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap gap-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "wrap gap-500",
                        "aria-labelledby": "elected-mlas",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                tag: "h2",
                                id: "elected-mlas",
                                text: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Elected MLA",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "s"
                                        }, void 0, false, {
                                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                                            lineNumber: 50,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this),
                                VOText: "Elected MLAs",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    parentId: "elected-mlas",
                                    children: "The public elect five Members of the Legislative Assembly (MLA) per constituency. The name and party of the five elected candidates appear in order of their election."
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$members$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                data: data.votingArea?.electedCandidates,
                                seats: data.votingArea?.seats.available
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                status: [
                                    {
                                        name: 'Seats',
                                        value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                            value: data.votingArea?.seats.declared,
                                            fallback: 0
                                        })}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                            value: data.votingArea?.seats.available,
                                            fallback: 5
                                        })}`
                                    },
                                    {
                                        name: 'Stage',
                                        value: data.votingArea?.stage
                                    },
                                    {
                                        name: 'Turnout',
                                        value: data.votingArea?.turnoutPercentage && (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["appendPercentSignToNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["roundToXDecimalPlaces"])(data.votingArea?.turnoutPercentage))
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "wrap gap-500",
                        "aria-labelledby": "election-results",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                tag: "h2",
                                id: "election-results",
                                text: "Result",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    parentId: "election-results",
                                    children: "Candidates are listed in descending order of first preference votes. Each candidate's status is shown as elected/not elected/excluded and the counting stage when that status was decided."
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                layout: [
                                    'name bold 33%',
                                    'name 25%',
                                    'cell bold 13%',
                                    'cell 9%',
                                    'cell 9%',
                                    'cell 10%'
                                ],
                                keys: [
                                    {
                                        value: 'Elected'
                                    },
                                    {
                                        value: 'Excluded'
                                    },
                                    {
                                        value: 'Not Elected'
                                    }
                                ],
                                footnotes: [
                                    {
                                        value: '* First preference vote',
                                        modifier: 'ui-table-short-value'
                                    }
                                ],
                                theme: "elections",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].Header, {
                                        values: [
                                            {
                                                value: 'Party'
                                            },
                                            {
                                                value: 'Candidate'
                                            },
                                            {
                                                value: 'Status'
                                            },
                                            {
                                                value: 'Stage'
                                            },
                                            {
                                                value: '1st Pref Votes',
                                                shortValue: 'FPV*'
                                            },
                                            {
                                                value: '%'
                                            }
                                        ]
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].Body, {
                                        children: tableData?.map((row, index)=>{
                                            const resultStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["capitalizeFirstLetter"])(row.resultStatus?.toLowerCase());
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].Row, {
                                                values: [
                                                    {
                                                        value: row.party.name,
                                                        shortValue: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                                            value: row.party.displayName || row.party.abbreviation
                                                        }),
                                                        dataset: {
                                                            'data-party': row.party.abbreviation
                                                        }
                                                    },
                                                    {
                                                        value: `${row.candidate.firstName} ${row.candidate.surname}`,
                                                        shortValue: row.candidate.surname
                                                    },
                                                    {
                                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                                            value: resultStatus,
                                                            replace: {
                                                                old: '_',
                                                                new: ' '
                                                            }
                                                        }),
                                                        modifier: resultStatus,
                                                        icon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                                            value: resultStatus,
                                                            replace: {
                                                                old: '_',
                                                                new: '-'
                                                            }
                                                        })
                                                    },
                                                    {
                                                        value: row.stage
                                                    },
                                                    {
                                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prettifyNumber"])(row.firstPreferenceVoteCount)
                                                    },
                                                    {
                                                        value: row.firstPreferenceVotePercentage && (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["appendPercentSignToNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["roundToXDecimalPlaces"])(row.firstPreferenceVotePercentage))
                                                    }
                                                ]
                                            }, index, false, {
                                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                status: [
                                    {
                                        name: 'Quota',
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prettifyNumber"])(data?.votingArea?.quota)
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    data?.votingArea?.partyResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "wrap gap-500",
                        "aria-labelledby": "election-vote-share",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                tag: "h2",
                                id: "election-vote-share",
                                text: "First preference vote share",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    parentId: "election-vote-share",
                                    children: "Parties may have more than one candidate standing in each constituency. Each party's Northern Ireland vote share is the cumulative first preference vote for all its candidates as a percentage of all valid votes."
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                voteShare: data.votingArea.partyResults.map((item)=>({
                                        ...item,
                                        voteCount: item.firstPreferenceVoteCount,
                                        voteChange: item.firstPreferenceVoteChange,
                                        votePercentage: item.firstPreferenceVotePercentage,
                                        votePercentageChange: item.firstPreferenceVotePercentageChange
                                    })),
                                mainParties: election.mainParties,
                                changeLabel: "Change since 2017"
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/northern-ireland-assembly-constituency.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = NorthernIrelandAssemblyConstituency;
NorthernIrelandAssemblyConstituency.propTypes = {
    election: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    data: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object
};
var _c;
__turbopack_context__.k.register(_c, "NorthernIrelandAssemblyConstituency");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-constituency.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScottishConstituency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status-banner/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$winning$2d$candidate$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-winning-candidate/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-info/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/number-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
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
function ScottishConstituency({ election, data }) {
    _s();
    const assets = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].SCOTTISH_PARLIAMENT[election.year];
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Extract the region URL from the current path for the back link
    // URL structure: /elections/scottish-parliament-2026/scotland-north-east-106/aberdeen-central-1
    // We want to go back to: /elections/scottish-parliament-2026/scotland-north-east-106
    const constituencySegments = Array.isArray(router.query.constituency) ? router.query.constituency : [
        router.query.constituency
    ];
    const regionUrl = constituencySegments.length > 1 ? `/elections/${election.slug}/${constituencySegments[0]}` : `/elections/${election.slug}`;
    const statusText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setElectionStatus"])({
        statusType: 'gainOrHold',
        winner: data.votingArea.electedCandidate?.party.displayName,
        sittingParty: data.votingArea.previouslyElectedCandidate?.party.displayName,
        gainOrHold: data.votingArea.gainHold,
        isAnnouncementBanner: true
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                Logo: assets.logo,
                theme: `election-theme-${election.year}-${election.electionType}`,
                links: [
                    {
                        text: 'Regional',
                        url: regionUrl,
                        backLink: true,
                        hiddenTextPrefix: 'Back to',
                        trackingLabel: 'full-results'
                    },
                    {
                        text: 'Live coverage',
                        url: `https://news.sky.com/politicshub`,
                        type: 'live',
                        target: '_blank',
                        trackingLabel: 'live-coverage'
                    }
                ],
                children: data.votingArea?.displayName || data.votingArea?.name
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-constituency.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-400",
                children: [
                    data.votingArea?.electedCandidate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$winning$2d$candidate$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        electedCandidate: data.votingArea.electedCandidate,
                        country: "scotland"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-constituency.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this),
                    statusText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        party: data.votingArea.electedCandidate?.party.abbreviation || 'baseline',
                        statusText: statusText
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-constituency.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        status: [
                            {
                                name: 'Electorate',
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prettifyNumber"])(data.votingArea.electorate)
                            },
                            {
                                name: 'Turnout',
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["appendPercentSignToNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["roundToXDecimalPlaces"])(data.votingArea.turnoutPercentage))
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-constituency.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-constituency.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            data.votingArea?.votingStatus !== 'RUSH' && data.votingArea?.votingStatus !== 'BASELINE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-500",
                "aria-labelledby": "election-vote-share",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "election-vote-share",
                        text: "Vote Share",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "election-vote-share",
                            children: "The percentage of the vote each party received in this constituency."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-constituency.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-constituency.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        voteShare: (data.votingArea?.nominations ?? []).map((nomination)=>({
                                party: nomination.party,
                                votePercentage: nomination.votePercentage,
                                votePercentageChange: nomination.votePercentageChange
                            })),
                        mainParties: election.mainParties,
                        mainItemsLength: 6,
                        changeLabel: "Change since 2021"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-constituency.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-constituency.tsx",
                lineNumber: 95,
                columnNumber: 9
            }, this),
            data.votingArea?.nominations && data.votingArea.nominations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-400",
                "aria-labelledby": "election-candidates",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "election-candidates",
                        text: "Candidates",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "election-candidates",
                            children: "Who stood for election in this constituency. Losing candidates may still be elected via the regional list system."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-constituency.tsx",
                            lineNumber: 116,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-constituency.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        layout: [
                            'name bold 43%',
                            'name 43%',
                            'name 14%'
                        ],
                        theme: "elections",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].Header, {
                                values: [
                                    {
                                        value: 'Party'
                                    },
                                    {
                                        value: 'Candidate'
                                    },
                                    {
                                        value: 'Votes'
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-constituency.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].Body, {
                                children: [
                                    ...data.votingArea?.nominations ?? []
                                ].sort((a, b)=>(b.voteCount ?? 0) - (a.voteCount ?? 0)).map((nomination, index)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].Row, {
                                        values: [
                                            {
                                                value: nomination.party.name,
                                                dataset: {
                                                    'data-party': nomination.party.abbreviation
                                                }
                                            },
                                            {
                                                value: `${nomination.candidate.firstName} ${nomination.candidate.surname}`
                                            },
                                            {
                                                value: nomination.voteCount?.toLocaleString() ?? '—'
                                            }
                                        ]
                                    }, index, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-constituency.tsx",
                                        lineNumber: 128,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-constituency.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-constituency.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-constituency.tsx",
                lineNumber: 114,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-constituency.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_s(ScottishConstituency, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ScottishConstituency;
var _c;
__turbopack_context__.k.register(_c, "ScottishConstituency");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScottishRegion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/url-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-seats/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-info/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx [client] (ecmascript)");
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
function ScottishRegion({ election, data }) {
    _s();
    const assets = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].SCOTTISH_PARLIAMENT[election.year];
    // Create parent region map for all constituencies in this region
    const parentRegionMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ScottishRegion.useMemo[parentRegionMap]": ()=>{
            if (!data.votingArea) {
                return {};
            }
            const regionId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getId"])(data.votingArea.id || '', '_');
            const regionSlug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$url$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["slugify"])(data.votingArea.name ?? '');
            const map = {};
            (data.votingArea.votingAreas ?? []).forEach({
                "ScottishRegion.useMemo[parentRegionMap]": (constituency)=>{
                    map[constituency.id] = {
                        id: regionId,
                        slug: regionSlug
                    };
                }
            }["ScottishRegion.useMemo[parentRegionMap]"]);
            return map;
        }
    }["ScottishRegion.useMemo[parentRegionMap]"], [
        data.votingArea
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                Logo: assets.logo,
                theme: `election-theme-${election.year}-${election.electionType}`,
                links: [
                    {
                        text: 'Full results',
                        url: `/elections/${election.slug}`,
                        backLink: true,
                        hiddenTextPrefix: 'Back to'
                    },
                    {
                        text: 'Live coverage',
                        url: `https://news.sky.com/politicshub`,
                        type: 'live',
                        target: '_blank',
                        trackingLabel: 'live-coverage'
                    }
                ],
                children: data.votingArea?.displayName || data.votingArea?.name
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-500",
                "aria-labelledby": "regional-seats",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "regional-seats",
                        text: "Regional Seats",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "regional-seats",
                            children: "The number of Scottish Parliament seats won by each party in this region. If a party won lots of constituencies in this region, they may be allocated fewer seats at this level."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        seats: (data.votingArea?.partyResults ?? []).map((partyResult)=>({
                                party: {
                                    abbreviation: partyResult.party.abbreviation,
                                    name: partyResult.party.name,
                                    displayName: partyResult.party.displayName ?? partyResult.party.name
                                },
                                seatCount: partyResult.seats?.count ?? null,
                                seatChange: partyResult.seats?.change ?? null
                            })),
                        items: 6,
                        mainParties: election.mainParties,
                        conditionalOther: true
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        status: [
                            {
                                name: 'Seats declared',
                                value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                    value: data.votingArea?.seats?.declared
                                })}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                    value: data.votingArea?.seats?.available
                                })}`
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            data.votingArea?.votingStatus !== 'RUSH' && data.votingArea?.votingStatus !== 'BASELINE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-500",
                "aria-labelledby": "election-vote-share",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "election-vote-share",
                        text: "Regional list Vote Share",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "election-vote-share",
                            children: "The percentage of the vote each party received in this region."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                            lineNumber: 98,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        voteShare: (data.votingArea?.partyResults ?? []).map((partyResult)=>({
                                ...partyResult,
                                votePercentage: partyResult.votes.percentage,
                                votePercentageChange: partyResult.votes.percentageChange
                            })),
                        mainParties: election.mainParties,
                        mainItemsLength: 6,
                        changeLabel: "Change since 2021"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this),
            data.votingArea?.electedCandidates && data.votingArea.electedCandidates.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-400",
                "aria-labelledby": "election-elected-candidates",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "election-elected-candidates",
                        text: "Elected Candidates",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "election-elected-candidates",
                            children: "Who will represent this region in the Scottish Parliament at Holyrood."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        layout: [
                            'name bold 43%',
                            'name 57%'
                        ],
                        theme: "elections",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].Header, {
                                values: [
                                    {
                                        value: 'Party'
                                    },
                                    {
                                        value: 'Candidate'
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].Body, {
                                children: [
                                    ...data.votingArea?.electedCandidates ?? []
                                ].sort((a, b)=>(a.electedOrder ?? 0) - (b.electedOrder ?? 0)).map((row, index)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].Row, {
                                        values: [
                                            {
                                                value: row.party.name,
                                                dataset: {
                                                    'data-party': row.party.abbreviation
                                                }
                                            },
                                            {
                                                value: `${row.candidate.firstName} ${row.candidate.surname}`
                                            }
                                        ]
                                    }, index, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                                        lineNumber: 126,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-500",
                "aria-labelledby": "election-constituencies",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "election-constituencies",
                        text: "Constituencies",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "election-constituencies",
                            children: "Each of the constituencies in this region directly elect one MSP each, in addition to those MSPs elected via the regional list."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["AreaList"], {
                        mode: "constituency",
                        showFilterOptions: false,
                        showSearch: false,
                        votingAreas: (data.votingArea?.votingAreas ?? []).map((area)=>({
                                ...area,
                                name: area.displayName,
                                shortName: area.displayName,
                                gainOrHold: area.gainHold
                            })),
                        votingAreasCount: data.votingArea?.votingAreas?.length ?? 0,
                        statusType: "gainOrHold",
                        statusMap: {
                            DECLARED: 'DECLARED',
                            IN_PROGRESS: 'IN PROGRESS',
                            RUSH: 'DECLARED'
                        },
                        showItems: 10,
                        electionType: election.electionType,
                        inputPlaceholder: "Search by constituency name or postcode",
                        notFoundMessage: "Constituency not found. Either it's not up for re-election, or you entered an invalid name or postcode.",
                        parentRegionMap: parentRegionMap
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/scottish-region.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(ScottishRegion, "2Jme900F+m/KxJji1UTFB0Fw9EA=");
_c = ScottishRegion;
var _c;
__turbopack_context__.k.register(_c, "ScottishRegion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "four-column": "styles-module__L6rgJG__four-column",
  "two-column": "styles-module__L6rgJG__two-column",
  "us-district-result": "styles-module__L6rgJG__us-district-result",
  "us-district-result-spacer": "styles-module__L6rgJG__us-district-result-spacer",
  "us-district-results-container": "styles-module__L6rgJG__us-district-results-container",
  "us-house-results": "styles-module__L6rgJG__us-house-results",
  "us-senate-results": "styles-module__L6rgJG__us-senate-results",
});
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>USElectionConstituency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/styles.module.css [client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$electoral$2d$districts$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-electoral-districts/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$state$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-state-list/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$state$2d$result$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-state-result-banner/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$state$2d$senate$2d$house$2d$results$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-state-senate-house-results/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$us$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share-graph/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-info/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$down$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/icons/arrow-down.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$up$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/icons/arrow-up.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$us$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/us-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/styles.module.css [client] (css module)");
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
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$constituency$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
const listCss = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function SenateHouseSummaryTransformer({ data, summaryType }) {
    let results;
    let seatsContested;
    if (summaryType === 'SENATE') {
        results = data.votingArea.senateResults;
        seatsContested = data.votingArea.senateSeatsContested;
    } else {
        results = data.votingArea.houseResults;
        seatsContested = data.votingArea.houseSeatsContested;
    }
    const demParty = results.find((result)=>result.party.abbreviation === 'Dem');
    const otherParies = results.find((result)=>result.party.abbreviation === 'OTH');
    const repParty = results.find((result)=>result.party.abbreviation === 'Rep');
    const seats = {
        demSeats: demParty ? demParty.seatCount : 0,
        otherSeats: otherParies ? otherParies.seatCount : 0,
        repSeats: repParty ? repParty.seatCount : 0
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$state$2d$senate$2d$house$2d$results$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        seatsContested: seatsContested,
        seats: seats,
        type: summaryType === 'SENATE' ? 'SENATE' : 'HOUSE'
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
_c = SenateHouseSummaryTransformer;
function StateResultBannerTransformer({ election, data }) {
    const previousElectionYear = (parseInt(election.year, 10) - 4).toString();
    const votingArea = data.votingArea;
    const previousPresidentialWinner = votingArea.previousPresidentialResult.map((result)=>{
        return {
            party: {
                displayName: result.party.displayName || ''
            },
            seatCount: result.electoralVotes,
            voteCount: result.voteCount
        };
    });
    const partyResults = data.votingArea.partyResults?.filter((partyResult)=>partyResult.party.abbreviation !== 'US-OTH')?.map((partyResult)=>{
        const [, displayName] = partyResult.party.displayName?.split(' ') || [
            '',
            partyResult.party.displayName
        ];
        return {
            party: {
                abbreviation: `US-${partyResult.party.abbreviation}`,
                displayName: displayName || partyResult.party.name
            },
            seatCount: partyResult.electoralVotes,
            voteCount: partyResult.voteCount
        };
    });
    const transformedResult = {
        ...data.votingArea,
        displayName: data.votingArea.shortName || '',
        seatCount: data.votingArea.electoralVotes || 0,
        partyResults,
        previousPresidentialWinner
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$state$2d$result$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        votingArea: transformedResult,
        previousElectionYear: previousElectionYear
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
        lineNumber: 108,
        columnNumber: 10
    }, this);
}
_c1 = StateResultBannerTransformer;
function USElectoralDistrictTransformer({ data, election }) {
    _s();
    const [isExpanded, setIsExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [firstPageLoad, setFirstPageLoad] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "USElectoralDistrictTransformer.useEffect": ()=>{
            if (firstPageLoad) {
                setFirstPageLoad(false);
            } else if (!isExpanded) {
                const anchorTag = document.querySelector('#district-results-list-button');
                anchorTag.scrollIntoView({
                    behavior: 'instant',
                    block: 'center'
                });
            }
        }
    }["USElectoralDistrictTransformer.useEffect"], [
        isExpanded
    ]);
    const handleToggleChange = ()=>{
        setIsExpanded(!isExpanded);
    };
    const candidateSurnames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$us$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getCandidateSurnames"])(data.election.partyResults, election.mainParties);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `wrap ${css('us-district-results-container')}`,
        "data-testid": "ui-us-district-results-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap grid-flex",
                children: [
                    data.votingArea.districtResults.sort((a, b)=>{
                        if (a.name.toLowerCase() < b.name.toLowerCase()) {
                            return -1;
                        }
                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return 1;
                        }
                        return 0;
                    }).slice(0, isExpanded ? data.votingArea.districtResults.length : 4).map((districtResult)=>{
                        const partyResults = districtResult.partyResults.map((result)=>{
                            const abbreviation = `US-${result.party.abbreviation}`;
                            let displayName = result.party.displayName || '';
                            if (abbreviation === 'US-Dem') {
                                displayName = candidateSurnames['US-Dem'];
                            }
                            if (abbreviation === 'US-Rep') {
                                displayName = candidateSurnames['US-Rep'];
                            }
                            return {
                                party: {
                                    abbreviation,
                                    displayName,
                                    name: result.party.name
                                },
                                voteCount: result.voteCount,
                                votePercentage: result.votePercentage
                            };
                        });
                        const transformedResult = {
                            name: districtResult.name || '',
                            partyResults
                        };
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: css('us-district-result'),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$electoral$2d$districts$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                districtResult: transformedResult
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                                lineNumber: 172,
                                columnNumber: 17
                            }, this)
                        }, districtResult.name, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                            lineNumber: 171,
                            columnNumber: 15
                        }, this);
                    }),
                    (()=>{
                        const isOddNumber = data.votingArea.districtResults.length % 2 === 1;
                        if (isExpanded && isOddNumber || data.votingArea.districtResults.length < 4 && isOddNumber) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: css('us-district-result-spacer')
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                                lineNumber: 179,
                                columnNumber: 20
                            }, this);
                        }
                    })()
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            (()=>{
                if (data.votingArea.districtResults.length > 4) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: listCss('list-more-us'),
                        type: "button",
                        onClick: ()=>{
                            handleToggleChange();
                        },
                        "data-testid": "district-results-list-button",
                        "data-tracking-label": `district-results/show-${isExpanded ? 'fewer' : 'all'}`,
                        id: "district-results-list-button",
                        children: [
                            `Show ${isExpanded ? 'fewer' : 'more'}`,
                            isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$up$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                                lineNumber: 197,
                                columnNumber: 29
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$icons$2f$arrow$2d$down$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                                lineNumber: 197,
                                columnNumber: 62
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                        lineNumber: 186,
                        columnNumber: 13
                    }, this);
                }
            })()
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
        lineNumber: 131,
        columnNumber: 5
    }, this);
}
_s(USElectoralDistrictTransformer, "B04jGq90E8H6P9ybZaU8u5vf9No=");
_c2 = USElectoralDistrictTransformer;
function USElectionConstituency({ election, data }) {
    const assets = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].US_PRESIDENTIAL[election.year];
    const partyResults = data.votingArea.partyResults.map((partyResult)=>({
            party: {
                abbreviation: `US-${partyResult.party.abbreviation}`,
                displayName: partyResult.party.displayName || partyResult.party.name,
                name: partyResult.party.name
            },
            seatCount: partyResult.electoralVotes,
            voteCount: partyResult.voteCount,
            votePercentage: partyResult.votePercentage
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                Logo: assets.logo,
                theme: `election-theme-${election.year}-${election.electionType}`,
                links: [
                    {
                        text: `All results`,
                        url: '/elections/us-election',
                        backLink: true
                    },
                    {
                        text: 'Live coverage',
                        type: 'live',
                        url: 'https://news.sky.com/us-election-live'
                    }
                ],
                children: data.votingArea.shortName
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-500",
                "aria-labelledby": "results",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "results",
                        text: "Results",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "results",
                            children: "Election experts from Sky’s US partner NBC News will “project” a winner when they have seen enough evidence from exit polls or votes counted so far that they are certain which candidate will receive the most votes. In all cases other than Maine and Nebraska, the winner will receive all the electoral votes available."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StateResultBannerTransformer, {
                        data: data,
                        election: election
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$us$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["USVoteShareGraph"], {
                        "data-testid": "ui-us-vote-share-graph-summary",
                        columnHeaders: [
                            'Party',
                            'Number of votes'
                        ],
                        partyResults: partyResults
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-500",
                "aria-labelledby": "results-breakdown",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "results-breakdown",
                        text: "Results Breakdown",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "results-breakdown",
                            children: "A breakdown of the number of votes received by each candidate in each local counting area within a state."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                            lineNumber: 249,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(USElectoralDistrictTransformer, {
                        data: data,
                        election: election
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            data.votingArea.shortestName !== 'DC' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap grid-flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: `${css('us-senate-results')} wrap gap-200`,
                        "aria-labelledby": "senate-results",
                        "data-testid": "ui-senate-results",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                tag: "h2",
                                id: "senate-results",
                                text: "Senate Results",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    parentId: "senate-results",
                                    children: "The Senate is the upper chamber of the US Congress, similar to the House of Lords in the UK, but elected. It is made up of 100 senators - two from each state - a third of which are up for election this year."
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                                    lineNumber: 263,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                                lineNumber: 262,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SenateHouseSummaryTransformer, {
                                data: data,
                                election: election,
                                summaryType: "SENATE"
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                                lineNumber: 269,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: `${css('us-house-results')} wrap gap-200`,
                        "aria-labelledby": "house-results",
                        "data-testid": "ui-us-house-results",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                tag: "h2",
                                id: "house-results",
                                text: "House Results",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    parentId: "house-results",
                                    children: "The House of Representatives is the lower chamber of the US Congress, similar to the House of Commons in the UK. It is made up of 535 members representing “districts” of roughly equal populations. Bigger states have more representatives."
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                                    lineNumber: 277,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                                lineNumber: 276,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SenateHouseSummaryTransformer, {
                                data: data,
                                election: election,
                                summaryType: "HOUSE"
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                                lineNumber: 283,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                        lineNumber: 271,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                lineNumber: 256,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-500",
                "aria-labelledby": "state-results",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "state-results",
                        text: "State Results",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "state-results",
                            children: "Click or tap on a state name to see detailed results from the vote there."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                            lineNumber: 289,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wrap grid-flex",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$state$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            votingAreas: data.election.votingAreas,
                            nameMap: [
                                {
                                    name: 'District of Columbia',
                                    displayName: 'D.C.'
                                }
                            ]
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/us-election-constituency.tsx",
        lineNumber: 221,
        columnNumber: 5
    }, this);
}
_c3 = USElectionConstituency;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "SenateHouseSummaryTransformer");
__turbopack_context__.k.register(_c1, "StateResultBannerTransformer");
__turbopack_context__.k.register(_c2, "USElectoralDistrictTransformer");
__turbopack_context__.k.register(_c3, "USElectionConstituency");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WelshAssemblyRegion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-seats/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-info/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-table/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/number-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
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
function WelshAssemblyRegion({ election, data }) {
    const assets = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].WELSH_ASSEMBLY[election.year];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                Logo: assets.logo,
                theme: `election-theme-${election.year}-${election.electionType}`,
                links: [
                    {
                        text: 'Full results',
                        url: `/elections/${election.slug}`,
                        backLink: true,
                        hiddenTextPrefix: 'Back to'
                    },
                    {
                        text: 'Live coverage',
                        url: `https://news.sky.com/politicshub`,
                        type: 'live',
                        target: '_blank',
                        trackingLabel: 'live-coverage'
                    }
                ],
                children: data.votingArea?.displayName
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-400",
                "aria-labelledby": "election-seats",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "election-seats",
                        text: "Seats",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "election-seats",
                            children: "The number of Senedd seats won by each party in this constituency."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        seats: (data.votingArea?.partyResults ?? []).map((partyResult)=>({
                                party: {
                                    abbreviation: partyResult.party.abbreviation,
                                    name: partyResult.party.name,
                                    displayName: partyResult.party.displayName ?? partyResult.party.name
                                },
                                seatCount: partyResult.seats?.count ?? null,
                                seatChange: partyResult.seats?.change ?? null
                            })),
                        items: 6,
                        mainParties: election.mainParties,
                        conditionalOther: true
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        status: [
                            {
                                name: 'Registered voters',
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prettifyNumber"])(data.votingArea?.electorate || null)
                            },
                            {
                                name: 'Turnout',
                                value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["appendPercentSignToNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["roundToXDecimalPlaces"])(data.votingArea?.turnoutPercentage || 0))}`
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            data.votingArea?.votingStatus !== 'RUSH' && data.votingArea?.votingStatus !== 'BASELINE' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-400",
                "aria-labelledby": "election-voteshare",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "election-voteshare",
                        text: "Vote Share",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "election-voteshare",
                            children: "The percentage of the vote each party received in this constituency."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        voteShare: (data.votingArea?.partyResults ?? []).map((partyResult)=>({
                                ...partyResult,
                                votePercentage: partyResult.votes?.percentage ?? 0,
                                votePercentageChange: partyResult.votes?.percentageChange ?? 0
                            })),
                        mainParties: election.mainParties,
                        changeLabel: "Change since 2021"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this),
            data.votingArea?.electedCandidates && data.votingArea.electedCandidates.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-400",
                "aria-labelledby": "election-elected-candidates",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "election-elected-candidates",
                        text: "Elected Candidates",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "election-elected-candidates",
                            children: "Who will represent this constituency in the Senedd."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        layout: [
                            'name bold 43%',
                            'name 57%'
                        ],
                        theme: "elections",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].Header, {
                                values: [
                                    {
                                        value: 'Party'
                                    },
                                    {
                                        value: 'Candidate'
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].Body, {
                                children: [
                                    ...data.votingArea?.electedCandidates ?? []
                                ].sort((a, b)=>(a.electedOrder ?? 0) - (b.electedOrder ?? 0)).map((row, index)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$table$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].Row, {
                                        values: [
                                            {
                                                value: row.party.name,
                                                dataset: {
                                                    'data-party': row.party.abbreviation
                                                }
                                            },
                                            {
                                                value: `${row.candidate.firstName} ${row.candidate.surname}`
                                            }
                                        ]
                                    }, index, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx",
                                        lineNumber: 108,
                                        columnNumber: 21
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx",
                lineNumber: 97,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/constituency/welsh-assembly-region.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = WelshAssemblyRegion;
var _c;
__turbopack_context__.k.register(_c, "WelshAssemblyRegion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GeneralElection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$map$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-seats/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status-banner/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-info/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/number-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
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
function MapRegion({ data, election, map }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            '--basis': '464px'
        },
        className: "u-sticky-region",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "u-sticky-target wrap gap-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$map$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        Map: map,
                        votingAreas: data.election.votingAreas,
                        mapKey: election.mapKey,
                        mapKeyShape: "hexagon",
                        electionType: "UK_GENERAL"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "display-fixed-25",
                    children: [
                        "Contains OS data © Crown copyright and database right ",
                        new Date().getFullYear(),
                        " OS 100020571",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        "Contains Royal Mail data © Royal Mail copyright and database right ",
                        new Date().getFullYear(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        "Source: Office for National Statistics licensed under the Open Government Licence v.3.0",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = MapRegion;
function GeneralElection({ data, election }) {
    const assets = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].UK_GENERAL[election.year];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                Logo: assets.logo,
                theme: `election-theme-${election.year}-${election.electionType}`,
                links: [
                    {
                        text: 'Live coverage',
                        url: `https://news.sky.com/politicshub`,
                        type: 'live',
                        target: '_blank',
                        trackingLabel: 'live-coverage'
                    }
                ],
                children: [
                    election.name,
                    " ",
                    election.year
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap gap-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "wrap gap-500",
                        "aria-labelledby": "election-seats",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                tag: "h2",
                                id: "election-seats",
                                text: "Seats",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    parentId: "election-seats",
                                    children: "The number of MPs each party has in parliament. There are 650 in total, one for each constituency. A party needs 326 seats to command a majority."
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "wrap gap-100",
                                children: [
                                    data.election?.announcement?.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        party: data.election.announcement.subject,
                                        statusText: data.election.announcement.message
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        seats: (data.election.partyResults ?? []).map((partyResult)=>({
                                                ...partyResult,
                                                seatCount: partyResult.seats?.count ?? null,
                                                seatChange: partyResult.seats?.change ?? null
                                            })),
                                        items: 5,
                                        mainParties: election.mainParties
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                status: [
                                    {
                                        name: 'Seats to win',
                                        value: '326'
                                    },
                                    {
                                        name: 'Seats declared',
                                        value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                            value: data.election.votingAreasDeclared
                                        })}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                            value: data.election.votingAreasCount
                                        })}`
                                    },
                                    {
                                        name: 'Turnout',
                                        value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["appendPercentSignToNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["roundToXDecimalPlaces"])(data.election.turnoutPercentage))} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prependSignToParseableNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["roundToXDecimalPlaces"])(data.election.turnoutPercentageChange))})`
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    data?.election?.partyResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "wrap gap-500",
                        "aria-labelledby": "election-vote-share",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                tag: "h2",
                                id: "election-vote-share",
                                text: "Vote share",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    parentId: "election-vote-share",
                                    children: "The percentage of votes each party has received and how it's changed since the last election. If a party's votes are spread thinly across lots of constituencies, they might win fewer seats than others despite having a higher vote share."
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                                    lineNumber: 114,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                                lineNumber: 113,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                voteShare: data.election.partyResults.map((partyResult)=>({
                                        ...partyResult,
                                        votePercentage: partyResult.votes.percentage,
                                        votePercentageChange: partyResult.votes.percentageChange
                                    })),
                                mainParties: election.mainParties,
                                changeLabel: "Change since 2019"
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "wrap gap-500",
                        "aria-labelledby": "election-constituency-results",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                tag: "h2",
                                id: "election-constituency-results",
                                text: "Results by Constituencies",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    parentId: "election-constituency-results",
                                    children: "The results from each of the 650 individual elections across the country. You can see the votes each candidate received as well as the voter turnout."
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                                lineNumber: 133,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid-flex gap-300",
                                style: {
                                    '--align': 'stretch',
                                    '--align-children': 'start'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            '--basis': '270px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["AreaList"], {
                                            mode: "constituency",
                                            showFilterOptions: true,
                                            showSearch: true,
                                            votingAreas: data?.election?.votingAreas,
                                            votingAreasDeclared: data?.election?.votingAreasDeclared,
                                            votingAreasCount: data.election.votingAreasCount,
                                            statusType: "gainOrHold",
                                            statusMap: {
                                                DECLARED: 'DECLARED',
                                                IN_PROGRESS: 'IN PROGRESS'
                                            },
                                            showItems: 12,
                                            electionType: election.electionType,
                                            inputPlaceholder: "Search by constituency name or postcode",
                                            notFoundMessage: "Please enter a valid postcode or UK constituency name"
                                        }, void 0, false, {
                                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                                        lineNumber: 140,
                                        columnNumber: 13
                                    }, this),
                                    assets.map && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapRegion, {
                                        data: data,
                                        election: election,
                                        map: assets.map
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                                        lineNumber: 156,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/general-election.jsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
_c1 = GeneralElection;
GeneralElection.propTypes = {
    components: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    fallbackData: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    election: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    data: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object
};
MapRegion.propTypes = {
    election: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    data: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    map: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object
};
var _c, _c1;
__turbopack_context__.k.register(_c, "MapRegion");
__turbopack_context__.k.register(_c1, "GeneralElection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "election-iframe": "styles-module__Zvi5cW__election-iframe",
});
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/general-election-seats-iframe.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GeneralElectionSeatsIframe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/styled-jsx/style.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-seats/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status-banner/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$iframe$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/styles.module.css [client] (css module)");
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
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$iframe$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function GeneralElectionSeatsIframe({ data, election, isWide, inApp }) {
    _s();
    const wrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])();
    function iframeResizeHandler(entries) {
        if (window && window.top) {
            window.top.postMessage({
                type: 'iframe-banner-height',
                height: entries[0].borderBoxSize[0].blockSize
            }, '*');
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GeneralElectionSeatsIframe.useEffect": ()=>{
            const ro = new window.ResizeObserver(iframeResizeHandler);
            ro.observe(wrap.current);
        }
    }["GeneralElectionSeatsIframe.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${css('election-iframe')}`,
        ref: wrap,
        children: [
            !inApp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                id: "8395eeb2d0dba1",
                children: "body{background:0 0}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `wrap wrap-site-width wrap-gutter wrap-auto-align ${isWide ? 'wrap-site-width-wide' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap gap-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/elections/${election.slug}`,
                            id: "election-seats-iframe",
                            size: 2,
                            text: `${election.name} ${election.year}`,
                            style: {
                                '--justify': 'center'
                            }
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/general-election-seats-iframe.jsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "wrap gap-100",
                            children: [
                                data.election?.announcement?.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    party: data.election.announcement.subject,
                                    statusText: data.election.announcement.message
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/general-election-seats-iframe.jsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    seats: data.election.partyResults.map((partyResult)=>({
                                            ...partyResult,
                                            seatCount: partyResult.seats.count,
                                            seatChange: partyResult.seats.change
                                        })),
                                    items: 5,
                                    mainParties: election.mainParties,
                                    theme: "general-election-2024"
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/general-election-seats-iframe.jsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/general-election-seats-iframe.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/general-election-seats-iframe.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/general-election-seats-iframe.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/general-election-seats-iframe.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(GeneralElectionSeatsIframe, "3i7+eQkPYXQxKluV7h60Xwa6fB8=");
_c = GeneralElectionSeatsIframe;
GeneralElectionSeatsIframe.propTypes = {
    data: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    metaData: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    election: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    isWide: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool,
    inApp: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool
};
var _c;
__turbopack_context__.k.register(_c, "GeneralElectionSeatsIframe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/local-councils-iframe.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocalCouncilsIframe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-seats/index.tsx [client] (ecmascript)");
;
;
;
function LocalCouncilsIframe({ data, election }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/elections/${election.slug}`,
        passHref: true,
        id: "election-seats-iframe-link",
        style: {
            textDecoration: 'none'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            seats: (data.election.partyResults ?? []).map((partyResult)=>({
                    party: {
                        abbreviation: partyResult.party.abbreviation,
                        name: partyResult.party.name,
                        displayName: partyResult.party.displayName ?? partyResult.party.name
                    },
                    seatCount: partyResult.seats?.count ?? null,
                    seatChange: partyResult.seats?.change ?? null
                })),
            items: 6,
            mainParties: election.mainParties
        }, void 0, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/local-councils-iframe.tsx",
            lineNumber: 19,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/local-councils-iframe.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = LocalCouncilsIframe;
var _c;
__turbopack_context__.k.register(_c, "LocalCouncilsIframe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/northern-ireland-assembly-iframe.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NorthernIrelandAssemblyIframe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-seats/index.tsx [client] (ecmascript)");
;
;
;
;
function NorthernIrelandAssemblyIframe({ data, election }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/elections/${election.slug}`,
        passHref: true,
        id: "election-seats-iframe-link",
        style: {
            textDecoration: 'none'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            seats: data.election.partyResults,
            items: 6,
            mainParties: election.mainParties
        }, void 0, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/northern-ireland-assembly-iframe.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/northern-ireland-assembly-iframe.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = NorthernIrelandAssemblyIframe;
NorthernIrelandAssemblyIframe.propTypes = {
    data: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    metaData: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    election: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object
};
var _c;
__turbopack_context__.k.register(_c, "NorthernIrelandAssemblyIframe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/us-election-iframe.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>USElectionIframe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/styled-jsx/style.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$us$2d$vote$2d$share$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$us$2d$data$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/us-data-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$iframe$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/styles.module.css [client] (css module)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$iframe$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function USElectionIframe({ data, election, isWide, inApp }) {
    _s();
    const wrap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    function iframeResizeHandler(entries) {
        if (window && window.top) {
            window.top.postMessage({
                type: 'iframe-banner-height',
                height: entries[0].target.offsetHeight
            }, '*');
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "USElectionIframe.useEffect": ()=>{
            const ro = new window.ResizeObserver(iframeResizeHandler);
            if (wrap.current) {
                ro.observe(wrap.current);
            }
        }
    }["USElectionIframe.useEffect"], []);
    const { announcement, mainPartyResults } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$us$2d$data$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["transformVoteShareData"])(data.election.announcement, data.election.partyResults, election.mainParties);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `${css('election-iframe')}`,
        ref: wrap,
        children: [
            !inApp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                id: "8395eeb2d0dba1",
                children: "body{background:0 0}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `wrap wrap-site-width wrap-gutter wrap-auto-align ${isWide ? 'wrap-site-width-wide' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap gap-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/elections/${election.slug}`,
                            id: "us-election-iframe",
                            size: 2,
                            text: `${election.name} ${election.year}`
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/us-election-iframe.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "wrap gap-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$us$2d$vote$2d$share$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                announcement: announcement,
                                seats: mainPartyResults
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/us-election-iframe.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/us-election-iframe.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/us-election-iframe.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/us-election-iframe.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/us-election-iframe.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(USElectionIframe, "3i7+eQkPYXQxKluV7h60Xwa6fB8=");
_c = USElectionIframe;
var _c;
__turbopack_context__.k.register(_c, "USElectionIframe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/us-election-map-iframe.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>USElectionMapIframe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/navigation.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$map$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx [client] (ecmascript)");
;
;
;
;
function transformVotingAreas(data) {
    return data.election.votingAreas.map((votingArea, index)=>{
        const partyResults = votingArea.partyResults?.map((partyResult)=>{
            const [, displayName] = partyResult.party.displayName?.split(' ') || [
                '',
                partyResult.party.displayName
            ];
            return {
                party: {
                    abbreviation: `US-${partyResult.party.abbreviation}`,
                    displayName: displayName || partyResult.party.name,
                    name: displayName || partyResult.party.name
                },
                seatCount: partyResult.electoralVotes,
                voteCount: partyResult.voteCount
            };
        });
        let controllingParty = null;
        if (votingArea.votingStatus === 'DECLARED') {
            const sortedWinningParties = partyResults.filter((partyResult)=>partyResult.seatCount).sort((a, b)=>a.seatCount - b.seatCount);
            if (sortedWinningParties.length === 0) {
                controllingParty = {
                    abbreviation: 'US-Undeclared',
                    displayName: 'Result Not In',
                    name: 'Result Not In'
                };
            }
            if (sortedWinningParties.length === 1) {
                const [winner] = sortedWinningParties;
                controllingParty = winner.party;
            }
            if (sortedWinningParties.length >= 2) {
                const [partyA, partyB] = sortedWinningParties;
                if (partyA.seatCount === partyB.seatCount) {
                    controllingParty = {
                        abbreviation: 'US-Split',
                        displayName: 'Split Delegates',
                        name: 'Split Delegates'
                    };
                }
                if (partyA.party.abbreviation === 'US-Dem') {
                    controllingParty = {
                        abbreviation: 'US-SplitDem',
                        displayName: 'Democrat - Split',
                        name: 'Democrat - Split'
                    };
                }
                if (partyA.party.abbreviation === 'US-Rep') {
                    controllingParty = {
                        abbreviation: 'US-SplitRep',
                        displayName: 'Republican - Split',
                        name: 'Republican - Split'
                    };
                }
            }
        }
        return {
            ...votingArea,
            number: index,
            partyResults,
            controllingParty
        };
    });
}
function USElectionMapIframe({ data, election }) {
    if (data === null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$client$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const assets = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].US_PRESIDENTIAL[election.year];
    const votingAreas = transformVotingAreas(data);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$map$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            Map: assets.map,
            mapKey: [
                {
                    label: 'Democrat',
                    party: 'US-Dem'
                },
                {
                    label: 'Republican',
                    party: 'US-Rep'
                },
                {
                    label: 'Result Not In',
                    party: 'US-Undeclared'
                },
                {
                    label: 'Democrat - Split State',
                    party: 'US-SplitDem'
                },
                {
                    label: 'Republican - Split State',
                    party: 'US-SplitRep'
                }
            ],
            keyStyle: "legend",
            mapKeyShape: "circle",
            votingAreas: votingAreas,
            modifier: "us-election"
        }, void 0, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/us-election-map-iframe.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/us-election-map-iframe.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
_c = USElectionMapIframe;
var _c;
__turbopack_context__.k.register(_c, "USElectionMapIframe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/us-election-remaining-results-iframe.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>USElectionRemainingResultsIframe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$us$2d$undeclared$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-us-undeclared-list/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
;
;
;
function USElectionRemainingResultsIframe({ data, election }) {
    if (data === null) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$us$2d$undeclared$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            votingAreas: null,
            stateAbbreviationDictionary: election.stateAbbreviationDictionary
        }, void 0, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/us-election-remaining-results-iframe.tsx",
            lineNumber: 20,
            columnNumber: 12
        }, this);
    }
    const votingAreas = data.election.votingAreas.filter((area)=>{
        const declaredElectoralVotes = area.partyResults.reduce((tally, partyResult)=>{
            return tally + partyResult.electoralVotes;
        }, 0);
        return area.electoralVotes !== declaredElectoralVotes;
    }).map((votingArea)=>{
        const [first, second] = votingArea.partyResults.filter((partyResult)=>partyResult.voteCount > 0).sort((a, b)=>b.voteCount - a.voteCount);
        let currentlyLeading = null;
        if (first) {
            const party = {
                ...first.party
            };
            if (election.splitStates.includes(votingArea.shortestName || votingArea.displayName)) {
                party.abbreviation = `US-Split${party.abbreviation}`;
            } else {
                party.abbreviation = `US-${party.abbreviation}`;
            }
            const margin = election.splitStates.includes(votingArea.shortestName || votingArea.displayName) ? '-' : (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["formatNumberToPercentageWithOneDecimalPlace"])(first?.votePercentage - second?.votePercentage);
            currentlyLeading = {
                party,
                margin
            };
        }
        return {
            ...votingArea,
            currentlyLeading
        };
    }).sort((a, b)=>b.votePercentage - a.votePercentage);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$us$2d$undeclared$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        votingAreas: votingAreas,
        stateAbbreviationDictionary: election.stateAbbreviationDictionary
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/iframe/us-election-remaining-results-iframe.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_c = USElectionRemainingResultsIframe;
var _c;
__turbopack_context__.k.register(_c, "USElectionRemainingResultsIframe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LocalCouncils
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$map$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-seats/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-info/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
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
function LocalCouncils({ data, election }) {
    const assets = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].ENGLISH_COUNCIL[election.year];
    const votingAreas = data?.election?.votingAreas ?? [];
    const mapAreas = data?.election?.votingAreas ?? [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                Logo: assets.logo,
                theme: `election-theme-${election.year}-${election.electionType}`,
                links: [
                    {
                        text: 'Live coverage',
                        url: `https://news.sky.com/politicshub`,
                        type: 'live',
                        target: '_blank',
                        trackingLabel: 'live-coverage'
                    }
                ],
                children: election.name
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap gap-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "wrap gap-500",
                        "aria-labelledby": "election-seats",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                tag: "h2",
                                id: "election-seats",
                                text: "Seats",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    parentId: "election-seats",
                                    children: "The number of councillors representing each party that have won seats at these elections, and how that compares with the last time these seats were up for election."
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                seats: (data.election.partyResults ?? []).map((partyResult)=>({
                                        party: {
                                            abbreviation: partyResult.party.abbreviation,
                                            name: partyResult.party.name,
                                            displayName: partyResult.party.displayName ?? partyResult.party.name
                                        },
                                        seatCount: partyResult.seats?.count ?? null,
                                        seatChange: partyResult.seats?.change ?? null
                                    })),
                                items: 6,
                                mainParties: election.mainParties
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "wrap gap-500",
                        "aria-labelledby": "election-councils",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                tag: "h2",
                                id: "election-councils",
                                text: "Councils",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    parentId: "election-councils",
                                    children: "The number of councils where each party has won a majority of seats and how that's changed from before the election. Councils with no overall control are where no one party has a majority."
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                seats: (data.election.partyResults ?? []).map((partyResult)=>({
                                        party: {
                                            abbreviation: partyResult.party.abbreviation,
                                            name: partyResult.party.name,
                                            displayName: partyResult.party.displayName ?? partyResult.party.name
                                        },
                                        seatCount: partyResult.councils?.count ?? null,
                                        seatChange: partyResult.councils?.change ?? null
                                    })),
                                items: 6,
                                mainParties: election.mainParties,
                                sortBy: "seatCount",
                                lastItemName: "NOC/Oth"
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                lineNumber: 73,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                status: [
                                    {
                                        name: 'Councils declared',
                                        value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                            value: data.election.votingAreasDeclared,
                                            fallback: '0'
                                        })}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                            value: data.election.votingAreasCount
                                        })}`
                                    },
                                    {
                                        name: 'NOC = No overall control',
                                        skipValue: true
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "wrap gap-500",
                        "aria-labelledby": "election-constituency-results",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                tag: "h2",
                                id: "election-constituency-results",
                                text: "Results by Council",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    parentId: "election-constituency-results",
                                    children: "The results from each of the individual council elections. Click on your council to see more detailed results."
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid-flex gap-300",
                                style: {
                                    '--align': 'stretch',
                                    '--align-children': 'start'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            '--basis': '270px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["AreaList"], {
                                            mode: "constituency",
                                            showFilterOptions: true,
                                            showSearch: true,
                                            votingAreas: votingAreas.map((votingArea)=>({
                                                    ...votingArea,
                                                    partyResults: votingArea.parties || []
                                                })),
                                            votingAreasDeclared: data.election?.votingAreasDeclared,
                                            votingAreasCount: data.election?.votingAreasCount,
                                            statusType: "gainOrHold",
                                            statusMap: {
                                                DECLARED: 'DECLARED',
                                                IN_PROGRESS: 'IN PROGRESS',
                                                RUSH: 'DECLARED'
                                            },
                                            showItems: 12,
                                            electionType: election.electionType,
                                            inputPlaceholder: "Search by council name or postcode",
                                            notFoundMessage: "Council not found. Either it's not up for re-election, or you entered an invalid name or postcode."
                                        }, void 0, false, {
                                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            '--basis': '464px'
                                        },
                                        className: "u-sticky-region",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "wrap gap-200 u-sticky-target",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$map$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        Map: assets.map,
                                                        votingAreas: mapAreas,
                                                        mapKey: election.mapKey ?? [],
                                                        mapStyle: "standard",
                                                        mapKeyShape: "hexagon",
                                                        mapKeyOpen: true,
                                                        mapKeyPosition: "left",
                                                        electionType: election.electionType,
                                                        showMapToggle: election.showLayersToggle
                                                    }, void 0, false, {
                                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "display-fixed-25",
                                                    children: [
                                                        "Contains OS data © Crown copyright and database right ",
                                                        new Date().getFullYear(),
                                                        " OS 100020571",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Contains Royal Mail data © Royal Mail copyright and database right ",
                                                        new Date().getFullYear(),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                                            lineNumber: 169,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Source: Office for National Statistics licensed under the Open Government Licence v.3.0",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                                            lineNumber: 171,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                        lineNumber: 144,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/local-councils.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = LocalCouncils;
var _c;
__turbopack_context__.k.register(_c, "LocalCouncils");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NorthernIrelandAssembly
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$map$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-seats/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-info/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/number-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
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
function MapRegion({ data, map }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            '--basis': '464px'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$map$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
            Map: map,
            votingAreas: data.election.votingAreas,
            title: "Northern Ireland Constituencies"
        }, void 0, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = MapRegion;
function NorthernIrelandAssembly({ data, election }) {
    const assets = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].NORTHERN_IRELAND[election.year];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                Logo: assets.logo,
                link: {
                    text: `Vote ${election.year} Results`,
                    url: '/'
                },
                children: "Northern Ireland Assembly"
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap gap-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "display-100",
                        children: "90 Assembly members are elected in Northern Ireland, in 18 constituencies. The system used is Single Transferable Vote, which makes it difficult for a single party to achieve a majority."
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "wrap gap-500",
                        "aria-labelledby": "election-seats",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                tag: "h2",
                                id: "election-seats",
                                text: "Seats",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    parentId: "election-seats",
                                    children: "There are 90 seats in total, five in each of the 18 constituencies. Candidates are guaranteed election if their first preference vote exceeds the quota established in their constituency. Vote transfers decide the remaining seats. No party has ever achieved a majority in the Assembly."
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                seats: data.election.partyResults,
                                items: 6,
                                mainParties: election.mainParties
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                status: [
                                    {
                                        name: 'Seats',
                                        value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                            value: data.election.seats.declared
                                        })}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                            value: data.election.seats.available
                                        })}`
                                    },
                                    {
                                        name: 'Electorate',
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prettifyNumber"])(data.election.electorate)
                                    },
                                    {
                                        name: 'Turnout',
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["appendPercentSignToNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["roundToXDecimalPlaces"])(data.election.turnoutPercentage))
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    data?.election?.partyResults && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "wrap gap-500",
                        "aria-labelledby": "election-vote-share",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                tag: "h2",
                                id: "election-vote-share",
                                text: "First preference vote share",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    parentId: "election-vote-share",
                                    children: "Parties may have more than one candidate standing in each constituency. Each party's Northern Ireland vote share is the cumulative first preference vote for all its candidates as a percentage of all valid votes."
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                voteShare: data.election.partyResults.map((item)=>({
                                        ...item,
                                        voteCount: item.firstPreferenceVoteCount,
                                        voteChange: item.firstPreferenceVoteChange,
                                        votePercentage: item.firstPreferenceVotePercentage,
                                        votePercentageChange: item.firstPreferenceVotePercentageChange
                                    })),
                                mainParties: election.mainParties,
                                changeLabel: "Change since 2017"
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "wrap gap-500",
                        "aria-labelledby": "election-constituency-results",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                tag: "h2",
                                id: "election-constituency-results",
                                text: "Results by Constituencies",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    parentId: "election-constituency-results",
                                    children: "Details are available for each candidate standing including their name, party, first preference votes and first preference vote share. As the count progresses it will show which candidates have been elected or excluded and at what stage."
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid-flex gap-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            '--basis': '270px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["AreaList"], {
                                            mode: "constituency",
                                            showSearch: true,
                                            votingAreas: data?.election?.votingAreas,
                                            votingAreasDeclared: data?.election?.votingAreasDeclared,
                                            votingAreasCount: data.election.votingAreasCount,
                                            statusMap: {
                                                DECLARED: 'DECLARED',
                                                IN_PROGRESS: 'IN PROGRESS'
                                            },
                                            statusType: "status",
                                            showItems: 12,
                                            inputPlaceholder: "Search by constituency name",
                                            notFoundMessage: "Please enter a valid postcode or NI constituency name"
                                        }, void 0, false, {
                                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    assets.map && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapRegion, {
                                        data: data,
                                        map: assets.map
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
                                        lineNumber: 113,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/northern-ireland-assembly.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c1 = NorthernIrelandAssembly;
NorthernIrelandAssembly.propTypes = {
    components: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    fallbackData: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    election: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    data: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object
};
MapRegion.propTypes = {
    data: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    map: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object
};
var _c, _c1;
__turbopack_context__.k.register(_c, "MapRegion");
__turbopack_context__.k.register(_c1, "NorthernIrelandAssembly");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScottishParliament
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/number-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$scottish$2d$region$2d$lookup$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/scottish-region-lookup.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$map$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-seats/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status-banner/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-info/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$tabs$2f$index$2e$ts__$5b$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-tabs/index.ts [client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$tabs$2f$tabs$2d$list$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-tabs/tabs-list.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$tabs$2f$tabs$2d$panel$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-tabs/tabs-panel.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx [client] (ecmascript)");
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
function ScottishParliament({ data, election }) {
    _s();
    const assets = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].SCOTTISH_PARLIAMENT[election.year];
    const [selectedTab, setSelectedTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const votingRegions = data?.election?.topUpVotingAreas ?? [];
    const votingConstituencies = (data?.election?.votingAreas ?? []).map((area)=>({
            ...area,
            gainOrHold: area.gainHold
        }));
    const mapAreasConstituencies = data?.election?.votingAreas ?? [];
    const mapAreasRegions = data?.election?.topUpVotingAreas ?? [];
    // Create a mapping from constituency IDs to parent region info (includes dynamic IDs from API)
    const parentRegionMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ScottishParliament.useMemo[parentRegionMap]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$scottish$2d$region$2d$lookup$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["createScottishParentRegionMap"])(votingConstituencies, votingRegions)
    }["ScottishParliament.useMemo[parentRegionMap]"], [
        votingConstituencies,
        votingRegions
    ]);
    // Combine constituency and regional party results for total seats
    const combinedPartyResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ScottishParliament.useMemo[combinedPartyResults]": ()=>{
            const partyMap = new Map();
            [
                ...data.election.partyResults ?? [],
                ...data.election.topUpPartyResults ?? []
            ].forEach({
                "ScottishParliament.useMemo[combinedPartyResults]": (result)=>{
                    const key = result.party.abbreviation;
                    const existing = partyMap.get(key);
                    const noCountDeclared = (existing?.seatCount ?? null) === null && (result.seats?.count ?? null) === null;
                    const noChangeDeclared = (existing?.seatChange ?? null) === null && (result.seats?.change ?? null) === null;
                    partyMap.set(key, {
                        party: existing?.party ?? {
                            abbreviation: result.party.abbreviation,
                            name: result.party.name,
                            displayName: result.party.displayName ?? result.party.name
                        },
                        seatCount: noCountDeclared ? null : (existing?.seatCount ?? 0) + (result.seats?.count ?? 0),
                        seatChange: noChangeDeclared ? null : (existing?.seatChange ?? 0) + (result.seats?.change ?? 0)
                    });
                }
            }["ScottishParliament.useMemo[combinedPartyResults]"]);
            return Array.from(partyMap.values());
        }
    }["ScottishParliament.useMemo[combinedPartyResults]"], [
        data.election.partyResults,
        data.election.topUpPartyResults
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                Logo: assets.logo,
                theme: `election-theme-${election.year}-${election.electionType}`,
                links: [
                    {
                        text: 'Live coverage',
                        url: `https://news.sky.com/politicshub`,
                        type: 'live',
                        target: '_blank',
                        trackingLabel: 'live-coverage'
                    }
                ],
                children: election.name
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-500",
                "aria-labelledby": "total-seats",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "total-seats",
                        text: "Total Seats",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "total-seats",
                            children: "The number of Scottish Parliament seats won by each party in both constituencies and regions."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wrap gap-100",
                        children: [
                            data.election?.announcement?.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                party: data.election.announcement.subject ?? '',
                                statusText: data.election.announcement.message
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                seats: combinedPartyResults.map((partyResult)=>({
                                        party: {
                                            abbreviation: partyResult.party.abbreviation,
                                            name: partyResult.party.name,
                                            displayName: partyResult.party.displayName
                                        },
                                        seatCount: partyResult.seatCount,
                                        seatChange: partyResult.seatChange
                                    })),
                                items: 6,
                                mainParties: election.mainParties,
                                conditionalOther: true
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        status: [
                            {
                                name: 'Seats for majority',
                                value: '65'
                            },
                            {
                                name: 'Seats declared',
                                value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                    value: data.election.seats?.declared
                                })}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                    value: data.election.seats?.available
                                })}`
                            },
                            {
                                name: 'Turnout',
                                value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["appendPercentSignToNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["roundToXDecimalPlaces"])(data.election.turnoutPercentage || 0))} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prependSignToParseableNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["roundToXDecimalPlaces"])(data.election.turnoutPercentageChange || 0))}%)`
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-500",
                "aria-labelledby": "constituency-seats",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "constituency-seats",
                        text: "Constituency Seats",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "constituency-seats",
                            children: "The total number of Scottish Parliament seats won by parties in the 73 constituencies, elected using the first past the post system."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        seats: (data.election.partyResults ?? []).map((partyResult)=>({
                                party: {
                                    abbreviation: partyResult.party.abbreviation,
                                    name: partyResult.party.name,
                                    displayName: partyResult.party.displayName ?? partyResult.party.name
                                },
                                seatCount: partyResult.seats?.count ?? null,
                                seatChange: partyResult.seats?.change ?? null
                            })),
                        items: 6,
                        mainParties: election.mainParties,
                        conditionalOther: true
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        status: [
                            {
                                name: 'Seats declared',
                                value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                    value: data.election.votingAreasSummary?.seats?.declared
                                })}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                    value: data.election.votingAreasSummary?.seats?.available
                                })}`
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-500",
                "aria-labelledby": "regional-seats",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "regional-seats",
                        text: "Regional Seats",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "regional-seats",
                            children: "The total number of Scottish Parliament seats won by each party in the eight electoral regions. Each region has seven seats, awarded proportionally to each party based on their vote share. If a party has already won lots of constituency seats in a region they will be allocated fewer regional seats."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        seats: (data.election.topUpPartyResults ?? []).map((partyResult)=>({
                                party: {
                                    abbreviation: partyResult.party.abbreviation,
                                    name: partyResult.party.name,
                                    displayName: partyResult.party.displayName ?? partyResult.party.name
                                },
                                seatCount: partyResult.seats?.count ?? null,
                                seatChange: partyResult.seats?.change ?? null
                            })),
                        items: 6,
                        mainParties: election.mainParties,
                        conditionalOther: true
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        status: [
                            {
                                name: 'Seats declared',
                                value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                    value: data.election.topUpVotingAreasSummary?.seats?.declared
                                })}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                    value: data.election.topUpVotingAreasSummary?.seats?.available
                                })}`
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-500",
                "aria-labelledby": "election-vote-share",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "election-vote-share",
                        text: "Constituency Vote Share",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "election-vote-share",
                            children: "The percentage of the vote each party received in the constituency vote."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        voteShare: (data.election.partyResults ?? []).map((partyResult)=>({
                                ...partyResult,
                                votePercentage: partyResult.votes?.percentage ?? null,
                                votePercentageChange: partyResult.votes?.percentageChange ?? null
                            })),
                        mainParties: election.mainParties,
                        mainItemsLength: 6,
                        changeLabel: "Change since 2021"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-500",
                "aria-labelledby": "results-search",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "results-search",
                        text: "Results Search",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "results-search",
                            children: "Search for your constituency or region to see who was elected where you live."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid-flex gap-300",
                        style: {
                            '--align': 'stretch',
                            '--align-children': 'start'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    '--basis': '270px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "wrap gap-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$tabs$2f$tabs$2d$list$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TabsList"], {
                                            tabs: [
                                                {
                                                    tabName: 'Constituencies'
                                                },
                                                {
                                                    tabName: 'Regions'
                                                }
                                            ],
                                            theme: "election-tabs",
                                            selectedTabIndex: selectedTab,
                                            onTabSelect: setSelectedTab
                                        }, void 0, false, {
                                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                                            lineNumber: 229,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$tabs$2f$tabs$2d$panel$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["TabsPanel"], {
                                            selectedTabIndex: selectedTab,
                                            children: selectedTab === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["AreaList"], {
                                                mode: "constituency",
                                                showFilterOptions: true,
                                                showSearch: true,
                                                votingAreas: votingConstituencies,
                                                votingAreasDeclared: data.election?.votingAreasDeclared,
                                                votingAreasCount: data.election?.votingAreas.length,
                                                statusType: "gainOrHold",
                                                statusMap: {
                                                    DECLARED: 'DECLARED',
                                                    IN_PROGRESS: 'IN PROGRESS',
                                                    RUSH: 'DECLARED'
                                                },
                                                showItems: 10,
                                                electionType: election.electionType,
                                                inputPlaceholder: "Search by constituency name or postcode",
                                                notFoundMessage: "Constituency not found. Either it's not up for re-election, or you entered an invalid name or postcode.",
                                                parentRegionMap: parentRegionMap
                                            }, void 0, false, {
                                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                                                lineNumber: 237,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["AreaList"], {
                                                mode: "constituency",
                                                showFilterOptions: true,
                                                showSearch: true,
                                                votingAreas: votingRegions,
                                                votingAreasCount: votingRegions.length,
                                                statusType: "status",
                                                statusMap: {
                                                    DECLARED: 'DECLARED',
                                                    IN_PROGRESS: 'IN PROGRESS',
                                                    RUSH: 'DECLARED'
                                                },
                                                showItems: 8,
                                                electionType: election.electionType,
                                                inputPlaceholder: "Search by region name or postcode",
                                                notFoundMessage: "Region not found. Either it's not up for re-election, or you entered an invalid name or postcode."
                                            }, void 0, false, {
                                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                                                lineNumber: 257,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                                            lineNumber: 235,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                                    lineNumber: 228,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                                lineNumber: 227,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    '--basis': '464px'
                                },
                                className: "u-sticky-region",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "wrap gap-200 u-sticky-target",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: selectedTab === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$map$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                Map: assets.map,
                                                votingAreas: mapAreasConstituencies,
                                                mapKey: election.mapKey ?? [],
                                                mapStyle: "standard",
                                                mapKeyShape: "hexagon",
                                                mapKeyOpen: true,
                                                mapKeyPosition: "left",
                                                electionType: election.electionType,
                                                parentRegionMap: parentRegionMap
                                            }, void 0, false, {
                                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                                                lineNumber: 282,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$map$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                Map: assets.additionalMap,
                                                votingAreas: mapAreasRegions,
                                                mapKey: election.mapKey ?? [],
                                                mapStyle: "standard",
                                                mapKeyShape: "hexagon",
                                                mapKeyOpen: true,
                                                mapKeyPosition: "left",
                                                electionType: election.electionType,
                                                electedMembersCount: 7
                                            }, void 0, false, {
                                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                                                lineNumber: 300,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                                            lineNumber: 280,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "display-fixed-25",
                                            children: [
                                                "Contains OS data © Crown copyright and database right ",
                                                new Date().getFullYear(),
                                                " OS 100020571",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                                                    lineNumber: 321,
                                                    columnNumber: 17
                                                }, this),
                                                "Contains Royal Mail data © Royal Mail copyright and database right ",
                                                new Date().getFullYear(),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 17
                                                }, this),
                                                "Source: Office for National Statistics licensed under the Open Government Licence v.3.0",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                                                    lineNumber: 325,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                                            lineNumber: 319,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/scottish-parliament.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(ScottishParliament, "dTGgmfbK0WoUb8mso18Kr/l/Kwc=");
_c = ScottishParliament;
var _c;
__turbopack_context__.k.register(_c, "ScottishParliament");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/styles.module.css [client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "sticky-map": "styles-module__Y5WiZa__sticky-map",
  "us-battleground": "styles-module__Y5WiZa__us-battleground",
  "us-constituency-list": "styles-module__Y5WiZa__us-constituency-list",
  "us-house": "styles-module__Y5WiZa__us-house",
  "us-map": "styles-module__Y5WiZa__us-map",
  "us-senate": "styles-module__Y5WiZa__us-senate",
});
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>USElection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/classnames/bind.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$battleground$2d$state$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-battleground-state/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$map$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$us$2d$vote$2d$share$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-us-vote-share/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$waffle$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-waffle/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-info/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$house$2d$waffle$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/elections/house-waffle.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$senate$2d$waffle$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/public/resources/elections/senate-waffle.svg.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/array-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$us$2d$data$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/us-data-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$us$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/us-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/layouts/elections/styles.module.css [client] (css module)");
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
;
;
const css = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$classnames$2f$bind$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bind(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$layouts$2f$elections$2f$styles$2e$module$2e$css__$5b$client$5d$__$28$css__module$29$__["default"]);
function USVoteShareTransformer({ data, election }) {
    const { announcement, mainPartyResults } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$us$2d$data$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["transformVoteShareData"])(data.election.announcement, data.election.partyResults, election.mainParties);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$us$2d$vote$2d$share$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        announcement: announcement,
        seats: mainPartyResults
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
        lineNumber: 37,
        columnNumber: 10
    }, this);
}
_c = USVoteShareTransformer;
function transformVotingAreas(data, candidateSurnames) {
    return data.election.votingAreas.map((votingArea, index)=>{
        const partyResults = votingArea.partyResults?.map((partyResult)=>{
            const [, displayName] = partyResult.party.displayName?.split(' ') || [
                '',
                partyResult.party.displayName
            ];
            return {
                party: {
                    abbreviation: `US-${partyResult.party.abbreviation}`,
                    displayName: displayName || partyResult.party.name,
                    name: displayName || partyResult.party.name
                },
                seatCount: partyResult.electoralVotes,
                voteCount: partyResult.voteCount,
                votePercentage: partyResult.votePercentage
            };
        });
        let controllingParty = null;
        const demSplitParty = {
            abbreviation: 'US-SplitDem',
            displayName: 'Democrat - Split',
            name: candidateSurnames ? `${candidateSurnames['US-Dem']} - Split` : 'Democrat - Split'
        };
        const repSplitParty = {
            abbreviation: 'US-SplitRep',
            displayName: 'Republican - Split',
            name: candidateSurnames ? `${candidateSurnames['US-Rep']} - Split` : 'Republican - Split'
        };
        if (votingArea.votingStatus === 'DECLARED') {
            const sortedWinningParties = [
                ...partyResults
            ].filter((partyResult)=>partyResult.seatCount).sort((a, b)=>b.seatCount - a.seatCount);
            if (sortedWinningParties.length === 0) {
                controllingParty = {
                    abbreviation: 'US-Undeclared',
                    displayName: 'Result Not In',
                    name: 'Result Not In'
                };
            }
            if (sortedWinningParties.length === 1) {
                const [winner] = sortedWinningParties;
                if (winner.seatCount === votingArea.electoralVotes) {
                    controllingParty = winner.party;
                } else if (winner.party.abbreviation === 'US-Dem') {
                    controllingParty = demSplitParty;
                } else if (winner.party.abbreviation === 'US-Rep') {
                    controllingParty = repSplitParty;
                }
            }
            if (sortedWinningParties.length >= 2) {
                const [partyA, partyB] = sortedWinningParties;
                if (partyA.seatCount === partyB.seatCount) {
                    controllingParty = {
                        abbreviation: 'US-Split',
                        displayNameme: 'Split Delegates',
                        name: 'Split Delegates'
                    };
                } else if (partyA.party.abbreviation === 'US-Dem') {
                    controllingParty = demSplitParty;
                } else if (partyA.party.abbreviation === 'US-Rep') {
                    controllingParty = repSplitParty;
                }
            }
        }
        return {
            ...votingArea,
            number: index,
            partyResults,
            controllingParty
        };
    });
}
function ConstituencyListTransformer({ data }) {
    const votingAreas = transformVotingAreas(data);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["AreaList"], {
        mode: "constituency",
        electionType: "US_PRESIDENTIAL",
        statusType: "us-status",
        votingAreas: votingAreas,
        showItems: 10,
        showFilterOptions: false,
        showSearch: true,
        inputPlaceholder: "Search by state name",
        sort: "shortName",
        order: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$array$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["Order"].asc,
        disableMapFilter: true
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_c1 = ConstituencyListTransformer;
function MapTransformer({ data, election }) {
    const assets = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].US_PRESIDENTIAL[election.year];
    const candidateSurnames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$us$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["getCandidateSurnames"])(data.election.partyResults, election.mainParties);
    const votingAreas = transformVotingAreas(data, candidateSurnames);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `u-sticky-region ${css('us-map')}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "u-sticky-target wrap gap-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$map$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                    Map: assets.map,
                    mapKey: [
                        {
                            label: candidateSurnames['US-Dem'],
                            party: 'US-Dem'
                        },
                        {
                            label: candidateSurnames['US-Rep'],
                            party: 'US-Rep'
                        },
                        {
                            label: 'Result Not In',
                            party: 'US-Undeclared'
                        },
                        {
                            label: `${candidateSurnames['US-Dem']} - Split State`,
                            party: 'US-SplitDem'
                        },
                        {
                            label: `${candidateSurnames['US-Rep']} - Split State`,
                            party: 'US-SplitRep'
                        }
                    ],
                    keyStyle: "legend",
                    mapKeyShape: "circle",
                    votingAreas: votingAreas,
                    modifier: "us-election",
                    electionType: "US_PRESIDENTIAL",
                    ariaHidden: true
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                    lineNumber: 153,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                lineNumber: 152,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
_c2 = MapTransformer;
function SenateTransformer({ data }) {
    const { senateResults } = data.election;
    const transformedSenateResults = senateResults?.map((senateResult)=>({
            party: {
                abbreviation: `US-${senateResult.party.abbreviation}`,
                displayName: senateResult.party.displayName,
                name: senateResult.party.name
            },
            seatCount: senateResult.seatCount
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$waffle$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        Waffle: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$senate$2d$waffle$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
        results: transformedSenateResults,
        seatsRequired: 51,
        id: "senate"
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
        lineNumber: 188,
        columnNumber: 10
    }, this);
}
_c3 = SenateTransformer;
function HouseTransformer({ data, election }) {
    const { houseResults } = data.election;
    const transformedHouseResults = houseResults?.map((houseResult)=>({
            party: {
                abbreviation: `US-${houseResult.party.abbreviation}`,
                displayName: houseResult.party.displayName,
                name: houseResult.party.name
            },
            seatCount: houseResult.seatCount
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$waffle$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        Waffle: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$public$2f$resources$2f$elections$2f$house$2d$waffle$2e$svg$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
        results: transformedHouseResults,
        seatsRequired: 218,
        id: "house"
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
        lineNumber: 202,
        columnNumber: 10
    }, this);
}
_c4 = HouseTransformer;
function BattlegroundTransformer({ data, election }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "wrap grid-flex",
        children: election.battlegrounds.map((battleground)=>{
            const votingArea = data.election.votingAreas.find((votingArea)=>battleground === votingArea.shortestName);
            if (votingArea) {
                const v = {
                    ...votingArea,
                    shortName: votingArea.shortName || votingArea.name,
                    shortestName: votingArea.shortestName || votingArea.name,
                    seatCount: votingArea.electoralVotes,
                    partyResults: votingArea.partyResults.map((partyResult)=>({
                            party: {
                                abbreviation: `US-${partyResult.party.abbreviation}`,
                                displayName: partyResult.party.displayName || partyResult.party.name,
                                name: partyResult.party.name
                            },
                            seatCount: partyResult.electoralVotes,
                            voteCount: partyResult.voteCount,
                            votePercentage: partyResult.votePercentage
                        }))
                };
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: css('us-battleground'),
                    "data-testid": "ui-battleground-state-summary",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$battleground$2d$state$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        votingArea: v
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                        lineNumber: 229,
                        columnNumber: 15
                    }, this)
                }, battleground, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                    lineNumber: 228,
                    columnNumber: 13
                }, this);
            }
            return null;
        })
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
        lineNumber: 207,
        columnNumber: 5
    }, this);
}
_c5 = BattlegroundTransformer;
function USElection({ data, election }) {
    const assets = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].US_PRESIDENTIAL[election.year];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                Logo: assets.logo,
                theme: `election-theme-${election.year}-${election.electionType}`,
                links: [
                    {
                        text: 'Live coverage',
                        type: 'live',
                        url: 'https://news.sky.com/us-election-live'
                    }
                ],
                children: election.name
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                lineNumber: 244,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap gap-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(USVoteShareTransformer, {
                    data: data,
                    election: election
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                    lineNumber: 252,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-500",
                "aria-labelledby": "election-results",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "election-results",
                        text: "Projected State Results",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "election-results",
                            children: "Which candidate is projected to win in each state. We use the term “projected” because the results are yet to be officially confirmed by state officials, which typically happens after 7-30 days depending on the state."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `grid-flex gap-700 ${css('sticky-map')}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: css('us-constituency-list'),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ConstituencyListTransformer, {
                                    data: data,
                                    election: election
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                                lineNumber: 263,
                                columnNumber: 11
                            }, this),
                            assets.map && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MapTransformer, {
                                data: data,
                                election: election
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                                lineNumber: 266,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "wrap gap-500",
                "aria-labelledby": "election-battlegrounds",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        tag: "h2",
                        id: "election-battlegrounds",
                        text: "Battleground States",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                            parentId: "election-battlegrounds",
                            children: "These are the eight tightest races that will likely decide the presidency, in order of how many electoral votes they represent. Whichever candidate performs best in these states is likely to become the president."
                        }, void 0, false, {
                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                            lineNumber: 271,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BattlegroundTransformer, {
                        data: data,
                        election: election
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap grid-flex",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: `wrap gap-200 ${css('us-senate')}`,
                        "aria-labelledby": "election-senate",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                tag: "h2",
                                id: "election-senate",
                                text: "Senate Results",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    parentId: "election-senate",
                                    children: "The Senate is the upper chamber of the US Congress, similar to the House of Lords in the UK, but elected. It is made up of 100 senators - two from each state. A third of seats (34) are up for election this year."
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                                    lineNumber: 281,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SenateTransformer, {
                                data: data,
                                election: election
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: `wrap gap-200 ${css('us-house')}`,
                        "aria-labelledby": "election-house",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                tag: "h2",
                                id: "election-house",
                                text: "House Results",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    parentId: "election-house",
                                    children: "The House of Representatives is the lower chamber of the US Congress, similar to the House of Commons in the UK. It is made up of 435 members, each representing “districts” of roughly equal populations. All of them are up for election this year."
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                                    lineNumber: 290,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HouseTransformer, {
                                data: data,
                                election: election
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/us-election.tsx",
        lineNumber: 243,
        columnNumber: 5
    }, this);
}
_c6 = USElection;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "USVoteShareTransformer");
__turbopack_context__.k.register(_c1, "ConstituencyListTransformer");
__turbopack_context__.k.register(_c2, "MapTransformer");
__turbopack_context__.k.register(_c3, "SenateTransformer");
__turbopack_context__.k.register(_c4, "HouseTransformer");
__turbopack_context__.k.register(_c5, "BattlegroundTransformer");
__turbopack_context__.k.register(_c6, "USElection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WelshAssembly
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-constituency-list/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$map$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-map/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-seats/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-status-banner/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-election-vote-share-graph/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-info/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-page-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-section-header/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/assets-selector.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/number-helpers.ts [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/string-helpers.ts [client] (ecmascript)");
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
function WelshAssembly({ data, election }) {
    const assets = __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$assets$2d$selector$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"].WELSH_ASSEMBLY[election.year];
    // Cast the GQL response to the component’s VotingArea type
    const votingAreas = data?.election?.topUpVotingAreas ?? [];
    const mapAreas = data?.election?.topUpVotingAreas ?? [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$page$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                Logo: assets.logo,
                theme: `election-theme-${election.year}-${election.electionType}`,
                links: [
                    {
                        text: 'Live coverage',
                        url: `https://news.sky.com/politicshub`,
                        type: 'live',
                        target: '_blank',
                        trackingLabel: 'live-coverage'
                    }
                ],
                children: election.name
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap gap-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "wrap gap-500",
                        "aria-labelledby": "election-seats",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                tag: "h2",
                                id: "election-seats",
                                text: "Total Seats",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    parentId: "election-seats",
                                    children: "The number of Senedd seats won by each party, out of 96. There are 16 constituencies with six seats each, awarded proportionally based on their vote share."
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                    lineNumber: 49,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "wrap gap-100",
                                children: [
                                    data.election?.announcement?.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2d$banner$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        party: data.election.announcement.subject ?? '',
                                        statusText: data.election.announcement.message
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$seats$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                        seats: (data.election.topUpPartyResults ?? []).map((partyResult)=>({
                                                party: {
                                                    abbreviation: partyResult.party.abbreviation,
                                                    name: partyResult.party.name,
                                                    displayName: partyResult.party.displayName ?? partyResult.party.name
                                                },
                                                seatCount: partyResult.seats?.count ?? null,
                                                seatChange: partyResult.seats?.change ?? null
                                            })),
                                        items: 6,
                                        mainParties: election.mainParties,
                                        conditionalOther: true
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$status$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                status: [
                                    {
                                        name: 'Seats for majority',
                                        value: '49'
                                    },
                                    {
                                        name: 'Seats declared',
                                        value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                            value: data.election.seats?.declared
                                        })}/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["setValue"])({
                                            value: data.election.seats?.available
                                        })}`
                                    },
                                    {
                                        name: 'Turnout',
                                        value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["appendPercentSignToNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["roundToXDecimalPlaces"])(data.election.topUpVotingAreasSummary?.turnoutPercentage || 0))} (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$string$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["prependSignToParseableNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$number$2d$helpers$2e$ts__$5b$client$5d$__$28$ecmascript$29$__["roundToXDecimalPlaces"])(data.election.topUpVotingAreasSummary?.turnoutPercentageChange || 0))}%)`
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "wrap gap-500",
                        "aria-labelledby": "election-vote-share",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                tag: "h2",
                                id: "election-vote-share",
                                text: "Vote Share",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    parentId: "election-vote-share",
                                    children: "The percentage of the vote each party received."
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$vote$2d$share$2d$graph$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                voteShare: (data.election.topUpPartyResults ?? []).map((partyResult)=>({
                                        ...partyResult,
                                        votePercentage: partyResult.votes?.percentage ?? 0,
                                        votePercentageChange: partyResult.votes?.percentageChange ?? 0
                                    })),
                                mainParties: election.mainParties,
                                changeLabel: "Change since 2021"
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "wrap gap-500",
                        "aria-labelledby": "election-constituency-results",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$section$2d$header$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                tag: "h2",
                                id: "election-constituency-results",
                                text: "Results by Constituency",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$info$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    parentId: "election-constituency-results",
                                    children: "The results from each of the constituencies. Click on your constituency to see more detailed results."
                                }, void 0, false, {
                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid-flex gap-300",
                                style: {
                                    '--align': 'stretch',
                                    '--align-children': 'start'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            '--basis': '270px'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$constituency$2d$list$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["AreaList"], {
                                            mode: "constituency",
                                            showFilterOptions: true,
                                            showSearch: true,
                                            votingAreas: votingAreas,
                                            votingAreasDeclared: data.election?.votingAreasDeclared,
                                            votingAreasCount: data.election?.votingAreasCount,
                                            statusType: "status",
                                            statusMap: {
                                                DECLARED: 'DECLARED',
                                                IN_PROGRESS: 'IN PROGRESS',
                                                RUSH: 'DECLARED'
                                            },
                                            showItems: 10,
                                            electionType: election.electionType,
                                            inputPlaceholder: "Search by constituency name or postcode",
                                            notFoundMessage: "Constituency not found. Either it's not up for re-election, or you entered an invalid name or postcode."
                                        }, void 0, false, {
                                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            '--basis': '464px'
                                        },
                                        className: "u-sticky-region",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "wrap gap-200 u-sticky-target",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$election$2d$map$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                        Map: assets.map,
                                                        votingAreas: mapAreas,
                                                        mapKey: election.mapKey ?? [],
                                                        mapStyle: "standard",
                                                        mapKeyShape: "hexagon",
                                                        mapKeyOpen: true,
                                                        mapKeyPosition: "left",
                                                        electionType: election.electionType
                                                    }, void 0, false, {
                                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                                        lineNumber: 144,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "display-fixed-25",
                                                    children: [
                                                        "Contains OS data © Crown copyright and database right ",
                                                        new Date().getFullYear(),
                                                        " OS 100020571",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                                            lineNumber: 163,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Contains Royal Mail data © Royal Mail copyright and database right ",
                                                        new Date().getFullYear(),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 19
                                                        }, this),
                                                        "Source: Office for National Statistics licensed under the Open Government Licence v.3.0",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                                    lineNumber: 161,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/elections/welsh-assembly.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_c = WelshAssembly;
var _c;
__turbopack_context__.k.register(_c, "WelshAssembly");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/layouts/site.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Layout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/head.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$ui$2d$news$2d$footer$2f$template$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/ui-news-footer/template.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$ui$2d$news$2d$header$2f$template$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/ui-news-header/template.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$analytics$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/analytics/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$chartbeat$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/chartbeat/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$consent$2d$management$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/consent-management/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$localnav$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/ui-localnav/index.tsx [client] (ecmascript)");
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
function Layout({ components, children, inApp, localNavProps }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Auto-detect current nav item based on pathname (strips query strings for matching)
    // Reduce path to first two segments (e.g., /elections/senedd-cymru-2026/constituency-1 → /elections/senedd-cymru-2026)
    const truncatedPath = router.asPath?.split('?')[0].split('/').slice(0, 3).join('/');
    const currentNavIndex = localNavProps?.items && truncatedPath ? localNavProps.items.findIndex((item)=>item.link === truncatedPath) : -1;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    async: true,
                    src: `https://assets.adobedtm.com/launch-${components.launch?.appId}.min.js`
                }, void 0, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/layouts/site.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/site.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wrap gap-0",
                children: [
                    !inApp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$ui$2d$news$2d$header$2f$template$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        data: components.headerData
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/site.tsx",
                        lineNumber: 50,
                        columnNumber: 20
                    }, this),
                    localNavProps && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$ui$2d$localnav$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        ...localNavProps,
                        current: currentNavIndex >= 0 ? currentNavIndex : null
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/site.tsx",
                        lineNumber: 51,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wrap gap-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                id: "main",
                                className: "wrap wrap-auto-align wrap-gutter wrap-site-width gap-700",
                                children: children
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/site.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$ui$2d$news$2d$footer$2f$template$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                data: components.footerData
                            }, void 0, false, {
                                fileName: "[project]/gdp-uk-news-frontend/src/layouts/site.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/gdp-uk-news-frontend/src/layouts/site.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/site.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            components.consentManagement?.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$consent$2d$management$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                data: components.consentManagement
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/site.tsx",
                lineNumber: 59,
                columnNumber: 49
            }, this),
            components.chartbeat?.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$chartbeat$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                data: components?.chartbeat,
                inApp: inApp
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/site.tsx",
                lineNumber: 60,
                columnNumber: 41
            }, this),
            !inApp && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$analytics$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                data: components?.analytics
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/layouts/site.tsx",
                lineNumber: 61,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/layouts/site.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(Layout, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Layout;
var _c;
__turbopack_context__.k.register(_c, "Layout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=gdp-uk-news-frontend_src_layouts_01.-x~5._.js.map