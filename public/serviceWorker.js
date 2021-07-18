const staticCache = "site-static-v1";
const assets = [
  "/",
  "/index.html",
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "/static/js/vendors~main.chunk.js",
  "/images/dont-forget.png",
  "/icons/favicon.ico",
  "/static/media/done-alert.f490b890.wav",
  "/static/media/delete-alert.28d0f02a.wav",
  "/static/media/add-alert.8fe3317f.wav",
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
  if (!navigator.onLine) {
    e.respondWith(
      caches.match(e.request).then(cacheResults => {
        return cacheResults;
      })
    );
  }
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
