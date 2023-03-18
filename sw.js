self.addEventListener('install', event => {
   console.log("Service worker is getting installed", event);
})

self.addEventListener('activate', event => {
   console.log("Service worker is now ACTIVATED", event);
   return self.clients.claim();
})

self.addEventListener('fetch', event => {
   console.log("Listening the fetch event")
   console.log(event);
})