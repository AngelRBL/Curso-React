const CACHE_ELEMENTS = [
  "./",
  "https://unpkg.com/react@17/umd/react.production.min.js",
  "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
  "https://unpkg.com/@babel/standalone/babel.min.js",
  "./style.css",
  "./components/Contador.js",
];
// Se guardan los paquetes en el cache con la version
const CACHE_NAME = "v3_cache_contador_react";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache
        .addAll(CACHE_ELEMENTS)
        .then(() => {
          self.skipWaiting();
        })
        .catch(console.log);
    })
  );
});

// Sirve para utilizar el cache nuevo y limpiar el antiguo.
self.addEventListener("activate", (e) => {
  const cacheWhitelist = [CACHE_NAME];

  e.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            return (
              cacheWhitelist.indexOf(cacheName) === -1 &&
              caches.delete(cacheName) /*elimina el cache antiguo*/
            );
          })
        );
      })
      .then(() => self.clients.claim()) /*Aqui reclama el cache*/
  );
});
// El evento fetch se va a ejecutar cada vez que se haga una peticion.
// Busca una nueva version de nuestro archivos y va a retornar las respuestas que tengan cacheadas.

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) {
        return res;
      }

      return fetch(e.request);
    })
  );
});
