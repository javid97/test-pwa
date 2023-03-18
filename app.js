let defferedPrompt;
if ('serviceWorker' in navigator) {
   navigator.serviceWorker
      .register('sw.js') // register also take in the second parameter as object in which we can specify the scope of the service worker e.g ('/sw.js', {scope: '/help/})
      .then(() => {
         console.log("Service Worker Registered");
      })
      .catch((err) => console.log(err))
}


window.addEventListener('beforeinstallprompt', function (event) {
   console.log("Before install prompt fired");
   event.preventDefault();
   defferedPrompt = event;
   return false;
})