// Minimal service worker so the phone treats this page as an installable app. It never stores data or pages.
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function (e) {
  if (e.request.mode === "navigate") {
    e.respondWith(fetch(e.request).catch(function () {
      return new Response("No connection. Connect to Wi-Fi or mobile data to use Yemken CleanSure.", { headers: { "Content-Type": "text/plain" } });
    }));
  }
});
