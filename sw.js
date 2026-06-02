const CACHE_NAME = 'faraway-v2';
const ASSETS = [
  './faraway.html',
  './manifest.json',
  'https://esm.run/@mlc-ai/web-llm'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
