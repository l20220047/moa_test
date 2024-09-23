self.addEventListener("install", event =>{

    console.log("service worker installed");

});
self.addEventListener("activate", event => {

    console.log("Service worker activated");

});