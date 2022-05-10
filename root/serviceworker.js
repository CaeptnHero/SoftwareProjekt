// Reaktion auf register/install-Event
self.addEventListener(`install`, event => {
    console.log('service worker installed');

    /*  - Zugriff auf Cache und ggf Erstellung
        - fügt alle Ressourcen zu
        - erlaubt auf Fertigstellung der Promise zu warten
        - Ausführung im install-Event führt
        - Cachen direkt beim ersten Laden der App durch */
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log('caching urls');
            cache.addAll(urls);
        })
    )
});

// Reaktion auf activate-Event
self.addEventListener(`activate`, event => {
    console.log('service worker activated');
});

// Reaktion auf Ladeanfragen an den Server
// Beim laden wird fetch-Event ausgelöst
// Serviceworker reagiert auf fetch-Event
self.addEventListener(`fetch`, event => {
    console.log('fetch:', event);

    /* - "Normale" Verarbeitung wird manipuliert
       - Prüfung ob angeforderte Ressource im Chache ist
       - true: Cache-Inhalt wird zurückgegeben
       - false: fetch-Events werden normal verarbeitet
       - Öffnen des Caches und Hinzufügen eines Klons der gefetchen Resspurce
    */
    event.respondWith(
        caches.match(event.request).then(chacheResponse => {
            return chacheResponse || fetch(event.request).then(fetchResponse => {
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(event.request.url, fetchResponse.clone());
                    limitCacheSize(dynamicCacheName, 15)
                    return fetchResponse;
                })
            }).catch(() => {
                if (event.request.url.indexOf('html')> -1)
                return caches.match('/error.html');
            })
        })
    )
});

//statisches Cachen von Ressourcen
const chacheName = 'imemory';
const urls = [
    '/',
    '/index.html',
    '/images/default.png',
    '/js/app.js'
];
// Anzahl der Einträge wird begrenzt
// definierter Cache wird geöffnet und der älteste Eintrag wird gelöscht
const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if (keys.length > size) {
                cache.delete(keys[0]).then(limitCacheSize(name, size))
            }
        })
    })
}