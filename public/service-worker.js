const staticCache = "site-static-v1";

const assets = [
  "/",
  "/index.html",
  "/icons/favicon.ico",
  "images/dont-forget.png",
  "static/js/runtime-main.881da6c9.js",
  "static/js/2.efa9d503.chunk.js",
  "static/css/main.e0b71711.chunk.css",
  "static/js/main.022efb73.chunk.js",
];

const self = this;

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(staticCache).then(cache => {
      return cache.addAll(assets);
    })
  );
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== staticCache).map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener("fetch", e => {
  if (!navigator.onLine) {
    e.respondWith(
      caches.match(e.request).then(cacheResults => {
        return cacheResults;
      })
    );
  }
});
