const staticCache = 'site-static-v1'
const dynamicCache ='site-dy-v1'
const assets=[
    '/index.js',
    '/app.js',
    '/fallback.js',
    '/styles/globals.css',
];//storing request urls
this.addEventListener('install',(e) => {
    e.waitUntil(
        caches.open(staticCache).then(cache => {
        // cache.add() //single item
        console.log("Caching log Assests")
        cache.addAll(assets)// array of item
      })
    )
     //async task, return a promise
})
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then( keys => {
            return Promise.all(keys
                .filter(key => key !== staticCache )
                .map(key => caches.delete(key)))
        })
    )
})
// self.addEventListener('fetch',(e) => {
//     e.respondWith(
//         caches.match(e.request).then(cacheRes => {
//             return cacheRes || fetch(e.request);
//         })
//     )// console.log(e)
// })


const limitCacheSize = (name, size) => {
    caches.open(name).then((cache) => {
      cache.keys().then((keys) => {
        if (keys.length > size) {
          cache.delete(keys[0]).then(limitCacheSize(name, size));
        }
      });
    });
  };


self.addEventListener('fetch',(e) => {
    e.respondWith(
        caches.match(e.request).then(cacheRes => {
            return cacheRes || fetch(e.request).then(fetctRes => {
                return caches.open(dynamicCache).then(cache => {
                    cache.put(e.request.url,fetctRes.clone())
                    // .then( () =>{limitCacheSize(dynamicCache,6)});
                    .then(limitCacheSize(dynamicCache,3));
                    return fetctRes;
                })
            });
//         }).catch(() => caches.match('/fallback.js').then(fetchRes =>{return fetchRes}))
            }).catch(() => return caches.match('/fallback.js'))
    );// console.log(e)
});
