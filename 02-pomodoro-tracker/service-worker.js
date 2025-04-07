const CACHE_NAME = "pomodoro-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/styles.css",
  "/main.js",
  "/src/components/timer-component/timer.js",
  "/src/components/timer-component/timer.css",
  "/src/components/switch-component/theme-switch.js",
  "/src/components/button-component/button.js",
  "/src/components/notification/notification.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
