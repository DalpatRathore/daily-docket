const staticCache = "site-static-v1";

const assets = [
  "/",
  "/index.html",
  "/icons/favicon.ico",
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "/static/js/vendors~main.chunk.js",
];

const self = this;

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(staticCache).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches
      .match(e.request)
      .then(cacheResults => {
        return cacheResults || fetch(e.request);
      })
      .catch(() => {
        console.log("no internet connection");
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
