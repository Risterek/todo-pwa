const CACHE_NAME = 'todo-pwa-v1';
const urlsToCache = [
  '/todo-pwa/',
  '/todo-pwa/index.html',
  '/todo-pwa/style.css',
  '/todo-pwa/app.js',
  '/todo-pwa/manifest.json'
];



self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
