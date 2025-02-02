
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Sante-Landing/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/home/home.module.ts": [
    {
      "path": "chunk-SCX7P4CJ.js",
      "dynamicImport": false
    }
  ],
  "src/app/about/about.module.ts": [
    {
      "path": "chunk-QRXXOHHJ.js",
      "dynamicImport": false
    }
  ],
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    {
      "path": "chunk-7SGGAPCT.js",
      "dynamicImport": false
    }
  ]
},
  assets: {
    'index.csr.html': {size: 1027, hash: '6f1ae185bc9e31b4659d4dd1c4cebc41fb6ea9c46b502cdd7090c5c8b6dbc11b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1153, hash: '61c081208012f17e3a308867c85e6fb5babbd3d7ff94f10f812b806100f82392', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-SHQ362RT.css': {size: 1622, hash: 'OHmpiqIVrC8', text: () => import('./assets-chunks/styles-SHQ362RT_css.mjs').then(m => m.default)}
  },
};
