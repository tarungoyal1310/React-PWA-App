const cacheName = 'pwa-scroll';
const staticAssets = [
  './',
  './index.html',
  './App.js',
  './App.css'
];


self.addEventListener('install', async event => {
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
});

self.addEventListener('activate', event => {
    console.log('Now ready to handle fetches!');
});

self.addEventListener('fetch', event => {
    console.log('Inside fetch event!');
    const req = event.request;
    event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(req);
    return cachedResponse || fetch(req);
}