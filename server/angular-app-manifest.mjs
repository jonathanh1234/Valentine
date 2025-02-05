
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Valentine/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Valentine"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 516, hash: '0f5524c6aeede2f5bae535e870c7a300d4b276ba39c4aff0f668e963b23fffa0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1029, hash: '80fb114365eb60cda74945e16ba1bd62b914ea68a25fcf7a91a51f21d9f0c3fe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3213, hash: '62e63eab6c32e5a1e8d8be2f820b5452e1829c5760662eb1ff8c48cf42487002', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
