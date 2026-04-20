self.__BUILD_MANIFEST = {
  "/elections": [
    "static/chunks/pages/elections.js"
  ],
  "/elections/[election]": [
    "static/chunks/pages/elections/[election].js"
  ],
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error",
    "/api/elections/get-data",
    "/api/healthz",
    "/api/metrics",
    "/api/postcodes/[postcode]",
    "/elections",
    "/elections/[election]",
    "/elections/[election]/banner",
    "/elections/[election]/banner/dark-mode",
    "/elections/[election]/exit-poll",
    "/elections/[election]/widget/[id]",
    "/elections/[election]/[...constituency]"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()