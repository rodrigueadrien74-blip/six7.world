const CACHE = "jeu-v4";

const FILES = [
    "./",
    "./index.html",
    "./manifest.json",
    "./sw.js"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE).then(cache => cache.addAll(FILES))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
