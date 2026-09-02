/* Mutolaa Lab — oddiy keshlovchi.
   Ilova qobig'ini saqlaydi, shuning uchun ikkinchi ochilishda
   internet sekin bo'lsa ham tez ochiladi. */
const NOM = "mutolaa-v2";
const QOBIQ = ["/", "/index.html", "/app.js", "/manifest.webmanifest", "/icon-192.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(NOM).then((c) => c.addAll(QOBIQ)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((k) => Promise.all(k.filter((x) => x !== NOM).map((x) => caches.delete(x))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== "GET") return;            // so'rovlar keshlanmaydi
  if (u.pathname.startsWith("/api/")) return;
  if (u.pathname.startsWith("/.netlify/")) return;        // model javoblari ham

  e.respondWith(
    caches.match(e.request).then((bor) =>
      bor || fetch(e.request).then((r) => {
        if (r.ok && u.origin === location.origin) {
          const nusxa = r.clone();
          caches.open(NOM).then((c) => c.put(e.request, nusxa));
        }
        return r;
      }).catch(() => caches.match("/index.html"))
    )
  );
});
