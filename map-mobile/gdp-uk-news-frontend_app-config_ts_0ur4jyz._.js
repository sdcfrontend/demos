(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/gdp-uk-news-frontend/app-config.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "elections",
    ()=>elections,
    "englishCouncilElectionId",
    ()=>englishCouncilElectionId,
    "localNavData2026",
    ()=>localNavData2026,
    "scottishParliamentElectionId",
    ()=>scottishParliamentElectionId,
    "welshAssemblyElectionId",
    ()=>welshAssemblyElectionId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
const elections = {
    NORTHERN_IRELAND_2022: {
        name: 'Northern Ireland Assembly',
        electionType: 'NORTHERN_IRELAND',
        metaData: {
            title: 'NI Elections 2022'
        },
        id: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NI_2022_ID,
        slug: 'northern-ireland-2022',
        year: '2022',
        mainParties: [
            'DUP',
            'SF',
            'SDLP',
            'UUP',
            'Alliance'
        ]
    },
    NORTHERN_IRELAND_2017: {
        name: 'Northern Ireland Assembly',
        electionType: 'NORTHERN_IRELAND',
        metaData: {
            title: 'NI Elections 2017'
        },
        id: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.NI_2017_ID,
        slug: 'northern-ireland-2017',
        year: '2017',
        mainParties: [
            'DUP',
            'SF',
            'SDLP',
            'UUP',
            'Alliance'
        ]
    },
    GENERAL_ELECTION_2019: {
        name: 'General Election',
        electionType: 'UK_GENERAL',
        metaData: {
            title: 'General Election 2019'
        },
        id: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.GE_2019_ID,
        slug: 'general-election-2019',
        year: '2019',
        mainParties: [
            'C',
            'Lab',
            'LD',
            'SNP'
        ]
    },
    ENGLAND_COUNCILS_2022: {
        name: 'England Councils',
        electionType: 'ENGLISH_COUNCIL',
        metaData: {
            title: 'England Councils 2022 - Election Results'
        },
        id: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.ENGLAND_COUNCILS_2022_ID,
        slug: 'local-councils-2022',
        year: '2022',
        mainParties: [
            'C',
            'Lab',
            'LD',
            'Green',
            'Reform'
        ],
        mapKey: [
            {
                label: 'Con',
                party: 'c con'
            },
            {
                label: 'Lab',
                party: 'lab'
            },
            {
                label: 'Lib Dem',
                party: 'lib-dem ld'
            },
            {
                label: 'Green',
                party: 'green'
            },
            {
                label: 'NOC/Oth',
                party: 'other noc'
            },
            {
                label: 'Undeclared',
                party: 'baseline'
            },
            {
                label: 'No election',
                party: 'no-election',
                modifier: 'ui-election-map-hide-on-filter'
            }
        ]
    },
    ENGLAND_COUNCILS_2023: {
        name: 'England Councils',
        electionType: 'ENGLISH_COUNCIL',
        metaData: {
            title: 'England Councils 2023 - Election Results',
            description: 'See the results from the election in England and look up your local area to see who won and lost where you live.',
            image: 'share-image-vote-2023.jpeg'
        },
        id: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.ENGLAND_COUNCILS_2023_ID,
        slug: 'local-councils-2023',
        year: '2023',
        mainParties: [
            'C',
            'Lab',
            'LD',
            'Green',
            'Reform'
        ],
        mapKey: [
            {
                label: 'Con',
                party: 'c con'
            },
            {
                label: 'Lab',
                party: 'lab'
            },
            {
                label: 'Lib Dem',
                party: 'lib-dem ld'
            },
            {
                label: 'Green',
                party: 'green'
            },
            {
                label: 'NOC/Oth',
                party: 'other noc'
            },
            {
                label: 'Undeclared',
                party: 'baseline'
            },
            {
                label: 'No election',
                party: 'no-election',
                modifier: 'ui-election-map-hide-on-filter'
            }
        ]
    },
    ENGLAND_COUNCILS_2024: {
        name: 'England Councils',
        electionType: 'ENGLISH_COUNCIL',
        metaData: {
            title: 'England Councils 2024 - Election Results',
            description: 'See the results from the election in England and look up your local area to see who won and lost where you live.',
            image: 'share-image-england-councils-2024.png'
        },
        id: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.ENGLAND_COUNCILS_2024_ID,
        slug: 'england-local-councils-2024',
        year: '2024',
        mainParties: [
            'C',
            'Lab',
            'LD',
            'Green',
            'Reform'
        ],
        mapKey: [
            {
                label: 'Con',
                party: 'c con'
            },
            {
                label: 'Lab',
                party: 'lab'
            },
            {
                label: 'Lib Dem',
                party: 'lib-dem ld'
            },
            {
                label: 'Green',
                party: 'green'
            },
            {
                label: 'NOC/Oth',
                party: 'other noc'
            },
            {
                label: 'Undeclared',
                party: 'baseline'
            },
            {
                label: 'No election',
                party: 'no-election',
                modifier: 'ui-election-map-hide-on-filter'
            }
        ]
    },
    GENERAL_ELECTION_2024: {
        name: 'General Election',
        electionType: 'UK_GENERAL',
        metaData: {
            title: 'General Election 2024',
            description: 'Get real time results and latest news on the UK general election. Find out who won and lost in your area and see the breakdown of vote share.',
            image: 'share-image-general-election-2024.png'
        },
        id: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.GE_2024_ID,
        slug: 'general-election-2024',
        year: '2024',
        mainParties: [
            'Lab',
            'C',
            'LD',
            'SNP',
            'Green',
            'Reform',
            'PC'
        ],
        mapKey: [
            {
                label: 'Con',
                party: 'c con'
            },
            {
                label: 'Lab',
                party: 'lab'
            },
            {
                label: 'SNP',
                party: 'snp'
            },
            {
                label: 'Lib Dem',
                party: 'lib-dem ld'
            },
            {
                label: 'Plaid Cymru',
                party: 'pc plaid'
            },
            {
                label: 'Green',
                party: 'green'
            },
            {
                label: 'Reform',
                party: 'reform'
            },
            {
                label: 'DUP',
                party: 'dup'
            },
            {
                label: 'SF',
                party: 'sf'
            },
            {
                label: 'Alliance',
                party: 'alliance'
            },
            {
                label: 'SDLP',
                party: 'sdlp'
            },
            {
                label: 'UUP',
                party: 'uup'
            },
            {
                label: 'Undeclared',
                party: 'baseline'
            }
        ]
    },
    US_ELECTION_2024: {
        name: 'America Votes',
        electionType: 'US_PRESIDENTIAL',
        metaData: {
            title: 'America Votes - US Election Results',
            description: 'Get real time results and latest news on the US general election. Find out who won and lost in each state and see the breakdown of vote share.',
            image: 'share-image-us-election-2024.png'
        },
        constituencyMetaData: {
            title: 'America Votes - US Election State Results',
            description: 'Get real time results and latest news on the US general election. Find out who won and lost in each state and see the breakdown of vote share.',
            image: 'share-image-us-election-2024.png'
        },
        id: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.US_2024_ID,
        slug: 'us-election',
        year: '2024',
        mainParties: [
            'US-Dem',
            'US-Rep'
        ],
        // Pennsylvania, Georgia, North Carolina, Michigan, Arizona, Wisconsin, Nevada, and then Nebraska (in order of electoral votes)
        battlegrounds: [
            'PA',
            'GA',
            'NC',
            'MI',
            'AZ',
            'WI',
            'NV',
            'NE'
        ],
        splitStates: [
            'NE',
            'ME'
        ],
        stateCodeDictionary: {
            alabama: 'AL',
            alaska: 'AK',
            arizona: 'AZ',
            arkansas: 'AR',
            california: 'CA',
            colorado: 'CO',
            connecticut: 'CT',
            delaware: 'DE',
            'district-of-columbia': 'DC',
            florida: 'FL',
            georgia: 'GA',
            hawaii: 'HI',
            idaho: 'ID',
            illinois: 'IL',
            indiana: 'IN',
            iowa: 'IA',
            kansas: 'KS',
            kentucky: 'KY',
            louisiana: 'LA',
            maine: 'ME',
            maryland: 'MD',
            massachusetts: 'MA',
            michigan: 'MI',
            minnesota: 'MN',
            mississippi: 'MS',
            missouri: 'MO',
            montana: 'MT',
            nebraska: 'NE',
            nevada: 'NV',
            'new-hampshire': 'NH',
            'new-jersey': 'NJ',
            'new-mexico': 'NM',
            'new-york': 'NY',
            'north-carolina': 'NC',
            'north-dakota': 'ND',
            ohio: 'OH',
            oklahoma: 'OK',
            oregon: 'OR',
            pennsylvania: 'PA',
            'rhode-island': 'RI',
            'south-carolina': 'SC',
            'south-dakota': 'SD',
            tennessee: 'TN',
            texas: 'TX',
            utah: 'UT',
            vermont: 'VT',
            virginia: 'VA',
            washington: 'WA',
            'west-virginia': 'WV',
            wisconsin: 'WI',
            wyoming: 'WY'
        },
        stateAbbreviationDictionary: {
            AL: 'Alab',
            AK: 'Alaska',
            AZ: 'Ariz',
            AR: 'Ark',
            CA: 'Cali',
            CO: 'Col',
            CT: 'Con',
            DE: 'Del',
            DC: 'DC',
            FL: 'Flo',
            GA: 'GA',
            HI: 'Hawaii',
            ID: 'Idaho',
            IL: 'Ill',
            IN: 'Ind',
            IA: 'Iowa',
            KS: 'Kansas',
            KY: 'KY',
            LA: 'LA',
            ME: 'Maine',
            MD: 'MD',
            MA: 'Mass',
            MI: 'Mich',
            MN: 'Minn',
            MS: 'Missi',
            MO: 'Misso',
            MT: 'Mont',
            NE: 'Nebr',
            NV: 'Nev',
            NH: 'N Ham',
            NJ: 'N Jer',
            NM: 'N Mex',
            NY: 'NY',
            NC: 'N Car',
            ND: 'N Dak',
            OH: 'Ohio',
            OK: 'Okla',
            OR: 'Oregon',
            PA: 'Penn',
            RI: 'Rd Isl',
            SC: 'S Car',
            SD: 'S Dak',
            TN: 'Tenn',
            TX: 'Texas',
            UT: 'Utah',
            VT: 'Verm',
            VA: 'VA',
            WA: 'Wash',
            WV: 'W VA',
            WI: 'Wis',
            WY: 'Wyo'
        }
    },
    ENGLAND_COUNCILS_2025: {
        name: 'Vote 2025',
        electionType: 'ENGLISH_COUNCIL',
        metaData: {
            title: 'England Councils 2025 - Election Results',
            description: 'See the results from the election in England and look up your local area to see who won and lost where you live.',
            image: 'share-image-england-councils-2025.png'
        },
        id: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.ENGLAND_COUNCILS_2025_ID,
        slug: 'england-local-councils-2025',
        year: '2025',
        mainParties: [
            'Lab',
            'C',
            'LD',
            'Reform',
            'Green'
        ],
        mapKey: [
            {
                label: 'Con',
                party: 'c con'
            },
            {
                label: 'Lab',
                party: 'lab'
            },
            {
                label: 'Lib Dem',
                party: 'lib-dem ld'
            },
            {
                label: 'Green',
                party: 'green'
            },
            {
                label: 'Reform',
                party: 'reform'
            },
            {
                label: 'NOC/Oth',
                party: 'other noc'
            },
            {
                label: 'Undeclared',
                party: 'baseline'
            },
            {
                label: 'No election',
                party: 'no-election',
                modifier: 'ui-election-map-hide-on-filter'
            }
        ]
    },
    ENGLAND_COUNCILS_2026: {
        name: 'England Councils',
        electionType: 'ENGLISH_COUNCIL',
        metaData: {
            title: 'England Councils 2026 - Election Results',
            description: 'See the results from the election in England and look up your local area to see who won and lost where you live.',
            image: 'share-image-england-councils-2025.png'
        },
        id: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.ENGLAND_COUNCILS_2026_ID,
        slug: 'england-councils-2026',
        year: '2026',
        mainParties: [
            'Lab',
            'C',
            'LD',
            'Green',
            'Reform'
        ],
        mapKey: [
            {
                label: 'Con',
                party: 'c con'
            },
            {
                label: 'Lab',
                party: 'lab'
            },
            {
                label: 'Lib Dem',
                party: 'lib-dem ld'
            },
            {
                label: 'Green',
                party: 'green'
            },
            {
                label: 'Reform',
                party: 'reform'
            },
            {
                label: 'NOC/Oth',
                party: 'other noc'
            },
            {
                label: 'Undeclared',
                party: 'baseline'
            },
            {
                label: 'No election',
                party: 'no-election',
                modifier: 'ui-election-map-hide-on-filter'
            }
        ],
        showLayersToggle: true
    },
    SCOTTISH_PARLIAMENT_2026: {
        name: 'Scottish Parliament',
        electionType: 'SCOTTISH_PARLIAMENT',
        metaData: {
            title: 'Scottish Parliament 2026 - Election Results',
            description: 'See the results from the election in Scotland and look up your local area to see who won and lost where you live.',
            image: 'share-image-england-councils-2025.png'
        },
        id: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.SCOTTISH_PARLIAMENT_2026_ID,
        slug: 'scottish-parliament-2026',
        year: '2026',
        mainParties: [
            'SNP',
            'C',
            'Lab',
            'Green',
            'LD',
            'Reform'
        ],
        mapKey: [
            {
                label: 'Con',
                party: 'c con'
            },
            {
                label: 'Lab',
                party: 'lab'
            },
            {
                label: 'SNP',
                party: 'snp'
            },
            {
                label: 'Lib Dem',
                party: 'lib-dem ld'
            },
            {
                label: 'Green',
                party: 'green'
            },
            {
                label: 'Reform',
                party: 'reform'
            },
            {
                label: 'Independent',
                party: 'ND ind'
            },
            {
                label: 'NOC/Oth',
                party: 'other noc'
            },
            {
                label: 'Declared',
                party: 'declared rush'
            },
            {
                label: 'Undeclared',
                party: 'baseline'
            },
            {
                label: 'No election',
                party: 'no-election',
                modifier: 'ui-election-map-hide-on-filter'
            }
        ]
    },
    WELSH_ASSEMBLY_2026: {
        name: 'Senedd Cymru',
        electionType: 'WELSH_ASSEMBLY',
        metaData: {
            title: 'Senedd Cymru 2026 - Election Results',
            description: 'See the results from the election in Wales and look up your local area to see who won and lost where you live.',
            image: 'share-image-england-councils-2025.png'
        },
        id: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.WELSH_ASSEMBLY_2026_ID,
        slug: 'senedd-cymru-2026',
        year: '2026',
        mainParties: [
            'Lab',
            'C',
            'PC',
            'LD',
            'Reform',
            'Green'
        ],
        mapKey: [
            {
                label: 'Con',
                party: 'c con'
            },
            {
                label: 'Lab',
                party: 'lab'
            },
            {
                label: 'Lib Dem',
                party: 'lib-dem ld'
            },
            {
                label: 'Plaid',
                party: 'pc plaid'
            },
            {
                label: 'Green',
                party: 'green'
            },
            {
                label: 'Reform',
                party: 'reform'
            },
            {
                label: 'NOC/Oth',
                party: 'other noc'
            },
            {
                label: 'Declared',
                party: 'declared rush'
            },
            {
                label: 'Undeclared',
                party: 'baseline'
            },
            {
                label: 'No election',
                party: 'no-election',
                modifier: 'ui-election-map-hide-on-filter'
            }
        ]
    }
};
const localNavData2026 = {
    firstItemIsTitle: true,
    items: [
        {
            label: 'VOTE 2026',
            link: `/elections`
        },
        {
            label: 'England Councils',
            link: `/elections/${elections.ENGLAND_COUNCILS_2026.slug}`
        },
        {
            label: 'Scottish Parliament',
            link: `/elections/${elections.SCOTTISH_PARLIAMENT_2026.slug}`
        },
        {
            label: 'Senedd Cymru',
            link: `/elections/${elections.WELSH_ASSEMBLY_2026.slug}`
        }
    ]
};
const englishCouncilElectionId = elections.ENGLAND_COUNCILS_2026.id;
const scottishParliamentElectionId = elections.SCOTTISH_PARLIAMENT_2026.id;
const welshAssemblyElectionId = elections.WELSH_ASSEMBLY_2026.id;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=gdp-uk-news-frontend_app-config_ts_0ur4jyz._.js.map