(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime/runtime-types.d.ts" />
/// <reference path="../../../shared/runtime/dev-globals.d.ts" />
/// <reference path="../../../shared/runtime/dev-protocol.d.ts" />
/// <reference path="../../../shared/runtime/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateB.type === 'total') {
        // A total update replaces the entire chunk, so it supersedes any prior update.
        return updateB;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/gdp-uk-news-frontend/src/app/utils/fetcher.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetcher",
    ()=>fetcher
]);
const fetcher = async (url)=>{
    const res = await fetch(url);
    if (!res.ok) {
        const error = new Error(`An error occurred while fetching data from ${url}. - ${res.status}`);
        error.status = res.status;
        throw error;
    }
    return res.json();
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/check-consent/index.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CheckConsent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$script$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/script.js [client] (ecmascript)");
;
;
;
function CheckConsent() {
    const checkConsentScript = `
  (function(){
    window.sdc = window.sdc || {};
    window.sdc.checkConsent = function(rootElement, callback) {
        if (rootElement === null) {
            return;
        }

        if (!rootElement.dataset.consent || rootElement.dataset.consent.toString() !== 'true') {
            var observer = new MutationObserver(function (mutationsList, observer) {
                for (var mutation in mutationsList) {
                    mutation = mutationsList[mutation];
                    if (
                        mutation.type !== 'attributes'
                        || mutation.attributeName !== 'data-consent'
                        || mutation.target.dataset.consent.toString() !== 'true'
                        || !mutation.target.attributes.getNamedItem(mutation.attributeName).value) {
                        continue;
                    }

                    callback();
                    observer.disconnect();
                }
            });

            observer.observe(rootElement, {attributes: true});
        } else {
            callback();
        }
    };

    window.sdc.executeConsentByElement = function(element) {
        const vendorMapping = window.sdc.consentIdMapping || {};
        const vendorName = element.dataset.vendorName;

        if (!document.cookie) {
            return;
        }

        const consentsCookie = document.cookie
            .split('; ')
            .find(function (row) { return row.startsWith('consents=') });

        if (!consentsCookie) {
            return;
        }

        const consentsValue = consentsCookie.split('=')[1];

        if (!vendorMapping) {
            return;
        }

        const vendor = vendorMapping.filter(function(vendor) {
            return vendor.vendorName === vendorName;
        })[0];

        if (consentsValue.includes(':' + vendor.gdpId + ':') && vendor.active) {
            element.dataset.consent = 'true';
            return;
        }

        if (document.querySelectorAll('[data-vendor-name="' + vendorName + '"][data-consent="true"]').length) {
          element.dataset.consent = 'true';
          return;
        }

        element.dataset.consent = 'false';
    }
}());`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$script$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
        dangerouslySetInnerHTML: {
            __html: checkConsentScript
        },
        id: "check-consent-script"
    }, void 0, false, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/check-consent/index.jsx",
        lineNumber: 77,
        columnNumber: 10
    }, this);
}
_c = CheckConsent;
var _c;
__turbopack_context__.k.register(_c, "CheckConsent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/data/site-meta-data.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const data = {
    title: 'Election results: Find out who won across the country',
    description: 'Sky News delivers breaking news, headlines and top stories from business, politics, entertainment and more in the UK and worldwide.',
    manifest: '/resources/manifest.json',
    url: 'https://news.sky.com',
    locale: 'en_GB',
    index: true,
    image: 'share-image-generic.png',
    og_type: 'website',
    twitter_handle: '@skynews',
    twitter_country: 'GB',
    twitter_app_iphone: '316391924',
    twitter_app_ipad: '316391924',
    twitter_app_googleplay: 'com.bskyb.skynews.android',
    facebook_app: '744976955573926',
    icons_favicon: '/resources/favicon.ico',
    icons_svg: '/resources/icon.svg',
    icons_apple_touch: '/resources/apple-touch-icon.png',
    theme_light: '#fff',
    theme_dark: '#222',
    ld: [
        {
            '@context': 'http://schema.org',
            '@type': 'Organization',
            name: 'Sky News',
            legalName: 'Sky News LIMITED',
            url: 'https://news.sky.com/',
            description: "Sky News is an unrivalled, world class breaking news service with a spirit of innovation and a fresh approach to news broadcasting. As the UK's first dedicated 24-hour news channel, Sky News has built a deserved reputation for being the first to break major news as well as offering insight and analysis on the latest stories. It is renowned for the speed of its coverage and flexibility of reporting news live across all its platforms - TV, mobile, online, social, connected TV and radio.",
            logo: {
                '@type': 'ImageObject',
                url: 'https://news.sky.com/assets/sky-news-logo.svg?v=1',
                width: 136,
                height: 32
            },
            foundingDate: 1989,
            founders: {
                '@type': 'Person',
                name: 'Rupert Murdoch'
            },
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Grant Way',
                addressLocality: 'Isleworth',
                addressRegion: 'Greater London',
                postalCode: 'TW7 5QD',
                addressCountry: 'United Kingdom'
            },
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                telephone: '[(+44) 0333 7591 018]',
                email: 'news@sky.com'
            },
            sameAs: [
                'https://www.facebook.com/skynews',
                'https://twitter.com/skynews',
                'https://www.instagram.com/skynews',
                'https://www.youtube.com/skynews',
                'https://en.wikipedia.org/wiki/Sky_News',
                'https://plus.google.com/+SkyNews'
            ]
        }
    ]
};
const __TURBOPACK__default__export__ = data;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteMetaData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$data$2f$site$2d$meta$2d$data$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/data/site-meta-data.js [client] (ecmascript)");
;
;
;
;
function SiteMetaData({ overrides = {}, inApp }) {
    const metaData = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$data$2f$site$2d$meta$2d$data$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
        ...overrides
    };
    const title = `${metaData.title} | Sky News`;
    const description = metaData.description ?? __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$data$2f$site$2d$meta$2d$data$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].description;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "description",
                content: metaData.description
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            inApp || !metaData.index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "robots",
                content: "NOODP,NOINDEX,NOFOLLOW"
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "robots",
                content: "NOODP,INDEX,FOLLOW,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:title",
                content: title
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:type",
                content: metaData.og_type
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:url",
                content: metaData.url
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:image",
                content: `/resources/elections/${metaData.image ?? __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$data$2f$site$2d$meta$2d$data$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].image}`
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "og:locale",
                content: metaData.locale
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:site",
                content: metaData.twitter_handle
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:title",
                content: title
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:description",
                content: description
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:card",
                content: "app"
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:app:country",
                content: metaData.twitter_country
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:app:id:iphone",
                content: metaData.twitter_app_iphone
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:app:id:ipad",
                content: metaData.twitter_app_ipad
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "twitter:app:id:googleplay",
                content: metaData.twitter_app_googleplay
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                property: "fb:app_id",
                content: metaData.facebook_app
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "icon",
                href: metaData.icons_favicon,
                sizes: "any"
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "icon",
                href: metaData.icons_svg,
                type: "image/svg+xml"
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "apple-touch-icon",
                href: metaData.icons_apple_touch
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "manifest",
                href: metaData.manifest
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "theme-color",
                content: metaData.theme_light,
                media: "(prefers-color-scheme: light)"
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                name: "theme-color",
                content: metaData.theme_dark,
                media: "(prefers-color-scheme: dark)"
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            metaData?.ld?.map((ld, index)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                    type: "application/ld+json",
                    dangerouslySetInnerHTML: {
                        __html: JSON.stringify(ld)
                    }
                }, index, false, {
                    fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
                    lineNumber: 55,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = SiteMetaData;
SiteMetaData.propTypes = {
    overrides: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object,
    inApp: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].bool
};
var _c;
__turbopack_context__.k.register(_c, "SiteMetaData");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/gdp-uk-news-frontend/src/pages/_app.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/head.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/prop-types/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$swr$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/node_modules/swr/dist/index.mjs [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$fetcher$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/app/utils/fetcher.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$check$2d$consent$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/check-consent/index.jsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$site$2d$meta$2d$data$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/components/site-meta-data/index.tsx [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$data$2f$site$2d$meta$2d$data$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/gdp-uk-news-frontend/src/data/site-meta-data.js [client] (ecmascript)");
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
function App({ Component, pageProps }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const inApp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "App.useMemo[inApp]": ()=>router.query?.inApp === 'true'
    }["App.useMemo[inApp]"], []);
    const pageTitle = pageProps.metaData?.title ?? __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$data$2f$site$2d$meta$2d$data$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].title;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$swr$2f$dist$2f$index$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__["SWRConfig"], {
        value: {
            refreshInterval: ("TURBOPACK compile-time value", "10") * 1000 || 10000,
            revalidateOnMount: true,
            fetcher: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$app$2f$utils$2f$fetcher$2e$js__$5b$client$5d$__$28$ecmascript$29$__["fetcher"]
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: `${pageTitle} | Sky News`
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/pages/_app.js",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                        rel: "preload",
                        href: "/_next/static/media/sky-headline-semi-bold.4cd85fea.woff",
                        as: "font",
                        type: "font/woff",
                        crossOrigin: "true"
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/pages/_app.js",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$site$2d$meta$2d$data$2f$index$2e$tsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                        overrides: pageProps?.metaData,
                        inApp: inApp
                    }, void 0, false, {
                        fileName: "[project]/gdp-uk-news-frontend/src/pages/_app.js",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/gdp-uk-news-frontend/src/pages/_app.js",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$src$2f$components$2f$check$2d$consent$2f$index$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/pages/_app.js",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {
                ...pageProps,
                inApp: inApp
            }, void 0, false, {
                fileName: "[project]/gdp-uk-news-frontend/src/pages/_app.js",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/gdp-uk-news-frontend/src/pages/_app.js",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(App, "6YeMLoSJBim8rGs/8ItzATKOX8c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = App;
App.propTypes = {
    Component: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].func,
    pageProps: __TURBOPACK__imported__module__$5b$project$5d2f$gdp$2d$uk$2d$news$2d$frontend$2f$node_modules$2f$prop$2d$types$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].object
};
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/gdp-uk-news-frontend/src/pages/_app.js [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/_app";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/gdp-uk-news-frontend/src/pages/_app.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if ("TURBOPACK compile-time truthy", 1) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/gdp-uk-news-frontend/src/pages/_app\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/gdp-uk-news-frontend/src/pages/_app.js [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__0kmurs6._.js.map