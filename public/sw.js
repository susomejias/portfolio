if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,a)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-e604aefe"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/675-f3017dc61289e33e3cbd.js",revision:"eR33M69hcOztWorS9RMus"},{url:"/_next/static/chunks/791-1fa389d31267745a1023.js",revision:"eR33M69hcOztWorS9RMus"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"eR33M69hcOztWorS9RMus"},{url:"/_next/static/chunks/main-bced62fb82adacbe3ff7.js",revision:"eR33M69hcOztWorS9RMus"},{url:"/_next/static/chunks/pages/404-324750b4c6c3cca04e7c.js",revision:"eR33M69hcOztWorS9RMus"},{url:"/_next/static/chunks/pages/500-8a35b9a4ac9d6150243c.js",revision:"eR33M69hcOztWorS9RMus"},{url:"/_next/static/chunks/pages/_app-c0d9f2024e14df9b1d25.js",revision:"eR33M69hcOztWorS9RMus"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"eR33M69hcOztWorS9RMus"},{url:"/_next/static/chunks/pages/contacto-2604c5898aea4a42251a.js",revision:"eR33M69hcOztWorS9RMus"},{url:"/_next/static/chunks/pages/devto-posts-e047939b08347054f143.js",revision:"eR33M69hcOztWorS9RMus"},{url:"/_next/static/chunks/pages/index-4456dcbf35abba21b2b0.js",revision:"eR33M69hcOztWorS9RMus"},{url:"/_next/static/chunks/pages/ponencias-abcc0a95270c46204d68.js",revision:"eR33M69hcOztWorS9RMus"},{url:"/_next/static/chunks/pages/proyectos-288c6fa26331123b89fd.js",revision:"eR33M69hcOztWorS9RMus"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"eR33M69hcOztWorS9RMus"},{url:"/_next/static/chunks/webpack-61f1b6d34e7ba415b8c1.js",revision:"eR33M69hcOztWorS9RMus"},{url:"/_next/static/css/f736bd9167f64d9ed9b3.css",revision:"eR33M69hcOztWorS9RMus"},{url:"/_next/static/eR33M69hcOztWorS9RMus/_buildManifest.js",revision:"eR33M69hcOztWorS9RMus"},{url:"/_next/static/eR33M69hcOztWorS9RMus/_ssgManifest.js",revision:"eR33M69hcOztWorS9RMus"},{url:"/android-icon-144x144.png",revision:"dd54a13b4994d9106ed797bf8cde46b9"},{url:"/android-icon-192x192.png",revision:"83240e1b27c0dc77a24f17febca65955"},{url:"/android-icon-36x36.png",revision:"28bad22bf99fda336154cb33633b55ab"},{url:"/android-icon-48x48.png",revision:"eb272e323e2b21699a5a0c6bf468542f"},{url:"/android-icon-512x512.png",revision:"90d43135d3640c81bbbf86b0480d84ca"},{url:"/android-icon-72x72.png",revision:"0374d7c5a58b5022b4639bcad6d44e6c"},{url:"/android-icon-96x96.png",revision:"3717713484b95e47d723f78f6d304698"},{url:"/apple-icon-114x114.png",revision:"7143eacda82a9086337c2c36fabf36ba"},{url:"/apple-icon-120x120.png",revision:"fbfdeb58b9c22346d32498456e60c9dd"},{url:"/apple-icon-144x144.png",revision:"dd54a13b4994d9106ed797bf8cde46b9"},{url:"/apple-icon-152x152.png",revision:"1985d1141ba9e13be1e84a2435ee9434"},{url:"/apple-icon-180x180.png",revision:"e8a6b5d8e165d4be757b6a6eeb5c0ff1"},{url:"/apple-icon-57x57.png",revision:"a07f28086b71bf62294b9b113812499f"},{url:"/apple-icon-60x60.png",revision:"d4238e1c0dbc243a0a749e8f11060e7b"},{url:"/apple-icon-72x72.png",revision:"0374d7c5a58b5022b4639bcad6d44e6c"},{url:"/apple-icon-76x76.png",revision:"27adf9bd7836d56efa721cb07fe2c272"},{url:"/apple-icon-precomposed.png",revision:"ecb6f5608e69add56f2daaf296b2f770"},{url:"/apple-icon.png",revision:"ecb6f5608e69add56f2daaf296b2f770"},{url:"/avatar.svg",revision:"3f555b54fd753f47c1255d2cde01a3ee"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon-16x16.png",revision:"49c99593e959f8295760085bc15ae3e3"},{url:"/favicon-32x32.png",revision:"e45b4fcc5aa626ce4780844c74737c45"},{url:"/favicon-96x96.png",revision:"3717713484b95e47d723f78f6d304698"},{url:"/favicon.ico",revision:"77e33f9135bc9d2dde9d2c24b4134350"},{url:"/img/avatar.jpeg",revision:"e5270e96c3989c0407556d297333eb1a"},{url:"/img/botTelegramLogo.png",revision:"de94412b8d900f3776bb7fbd889d374c"},{url:"/img/buscadorAjaxjQuery.png",revision:"816a2bfbf20f0ae05f9ec1c62cfe3a01"},{url:"/img/buscaminasjQuery.png",revision:"802abbc581448a34c0b70aee8aca8a0c"},{url:"/img/javierPonferradaLopez.png",revision:"3621553a43d8093ca04d2549662c25e3"},{url:"/img/juanRuedaMorales.png",revision:"6d23d7e9aae40964b40f3e8185d13533"},{url:"/img/logoapp.png",revision:"ce59055ff4731f058c7e345214813ed5"},{url:"/img/marioNavarroMadrid.png",revision:"58d6ae08b6ec546410c9a23ba4459477"},{url:"/img/miguelGavilanMerino.png",revision:"3ee866bc638826c197a6cac31e72c735"},{url:"/img/pisysmana.png",revision:"b9f19d6a5dab3eb96ed051d12f43a97a"},{url:"/img/promises.png",revision:"902c3d36616964ef43ec2b446a113f5f"},{url:"/img/python.png",revision:"8c50ca84c6a4c58f191698951192f39f"},{url:"/img/raspberry.png",revision:"7a252ee4268df71c9fe7e03df0db270b"},{url:"/img/symfony.png",revision:"964801b9fd5ea75a00ddb6a9abda7fac"},{url:"/img/sysmana2020.png",revision:"c26a0798810c8ee6533af6faab5de93a"},{url:"/img/vuejs.png",revision:"a3b3b8e63677d99c423271b90e28e60f"},{url:"/manifest.json",revision:"55f13efeb52e167435c955322dd63b0b"},{url:"/ms-icon-144x144.png",revision:"dd54a13b4994d9106ed797bf8cde46b9"},{url:"/ms-icon-150x150.png",revision:"e35f013f1f00f6a5caa8bab725681592"},{url:"/ms-icon-310x310.png",revision:"5950bab7c4febe63b255f826ff0f041a"},{url:"/ms-icon-70x70.png",revision:"2ba5b534c3caafd8299daf15f9096d4a"},{url:"/robots.txt",revision:"70668f095681c1f8c97e5e4bcad15cee"},{url:"/sitemap.xml",revision:"84542d98626e6f25bd417d34f123b570"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
