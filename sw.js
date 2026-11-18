/* Koh Lipe instructor calculator v1.1.0 — offline cache */
const CACHE='koh-lipe-earnings-v1.1.0';
const SHELL=['./','./index.html','./app.js','./user-guide.html','./manifest.webmanifest','./icon-180.png','./icon-192.png','./icon-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('koh-lipe-earnings-')&&k!==CACHE).map(k=>caches.delete(k)))),self.clients.claim()])));
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET'||new URL(event.request.url).origin!==self.location.origin)return;
 event.respondWith(fetch(event.request).then(response=>{if(response.ok){const clone=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,clone)).catch(()=>{});}return response;}).catch(()=>caches.match(event.request).then(response=>response||(event.request.mode==='navigate'?caches.match('./index.html'):Response.error()))));
});
