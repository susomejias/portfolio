if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return i[e]||(a=new Promise(async a=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=a}else importScripts(e),a()})),a.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},a=(a,i)=>{Promise.all(a.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(a)};self.define=(a,c,n)=>{i[a]||(i[a]=Promise.resolve().then(()=>{let i={};const r={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return i;case"module":return r;default:return e(a)}})).then(e=>{const a=n(...e);return i.default||(i.default=a),i})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/X9kv_D5DTWDWUsWs9nTvv/_buildManifest.js",revision:"121542b088ab98158c29c14501fb5ed5"},{url:"/_next/static/X9kv_D5DTWDWUsWs9nTvv/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/chunks/470444a3005f64a3e856db561cb0e488319f5391.242e8c32e8f0fe1944ee.js",revision:"1ae94403295c34475f465fc1638382eb"},{url:"/_next/static/chunks/6ef5d3de85eb40b9b9d17c3ab1277739d54999b9.5b0e2dcf17bbc268feff.js",revision:"c9a5a8472d75b4b2b410a3f7e411f402"},{url:"/_next/static/chunks/framework.cb9d4afe4d07c46063c3.js",revision:"3307a0e03685c6c8c2162b0f54ef78b9"},{url:"/_next/static/chunks/main-ef9d5c4ddd8816ce06e3.js",revision:"c560fada05fbf5fc4c074c91cf25711b"},{url:"/_next/static/chunks/pages/_app-a13bce1ef5beb0bab206.js",revision:"521c41dbd26aaa7aee5094be38cc7251"},{url:"/_next/static/chunks/pages/_error-4f0601949c71cd429f69.js",revision:"273dcac8fdda1fa392833a393033de36"},{url:"/_next/static/chunks/pages/contacto-fd6470651ff2ed4df682.js",revision:"9791b06eb4f9559237d07e7aed383970"},{url:"/_next/static/chunks/pages/devto-posts-c84a26606e8768f4d8b8.js",revision:"27fc1a771e20a996f6a07f7cb7fa48c5"},{url:"/_next/static/chunks/pages/index-00f3461dad2157b16d35.js",revision:"f1fa5d05f8983c0679341c4386ccf068"},{url:"/_next/static/chunks/pages/ponencias-bf59697f7de6f12d5d08.js",revision:"d538a13575062d39929b267ca828f970"},{url:"/_next/static/chunks/pages/proyectos-41527ec254f3eb6b0f16.js",revision:"d4e5934bbfc5e79faef24e7d879c286c"},{url:"/_next/static/chunks/polyfills-a5b86a38e61b63f3b3a9.js",revision:"5bfe7580c50dc3ab541a7ccc333814de"},{url:"/_next/static/chunks/webpack-ccf5ab034a524403276a.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/4d58ef7609f58f62c56a.css",revision:"ad28c6ab2b7a2a12fd070624158a6555"},{url:"/android-icon-144x144.png",revision:"5081cb29ededc53f399f72ae26c633af"},{url:"/android-icon-192x192.png",revision:"b1709df2dcdbc5a3519770469be0b52a"},{url:"/android-icon-36x36.png",revision:"0922250c965d2614818eb27763c59dc8"},{url:"/android-icon-48x48.png",revision:"f9973da01e89dbbb9acadacf95b9052e"},{url:"/android-icon-512x512.png",revision:"335cea231d8a52f86da6d0c7cb9b5cb2"},{url:"/android-icon-72x72.png",revision:"452cdb17a1b0b9524597980a2323986b"},{url:"/android-icon-96x96.png",revision:"107eb3b691962b9122e1b1cee5259064"},{url:"/apple-icon-114x114.png",revision:"bbcb5c5ef1aa1006f6f2d8a4f84ec407"},{url:"/apple-icon-120x120.png",revision:"6ab58abce72653be9a71ec98a6ae9159"},{url:"/apple-icon-144x144.png",revision:"5081cb29ededc53f399f72ae26c633af"},{url:"/apple-icon-152x152.png",revision:"d9b20bc621efb8e66ea51926e16987ff"},{url:"/apple-icon-180x180.png",revision:"852c31de1069974841080cab8328e3e6"},{url:"/apple-icon-57x57.png",revision:"8ec6625f82886f3db6bd9ecc3bdf8625"},{url:"/apple-icon-60x60.png",revision:"08b7b6f5d82be597d4ba5b7e6e61dc68"},{url:"/apple-icon-72x72.png",revision:"452cdb17a1b0b9524597980a2323986b"},{url:"/apple-icon-76x76.png",revision:"bafa36ed64ceb1b3d233b684389ee52f"},{url:"/apple-icon-precomposed.png",revision:"0a37f27a51670a64a587c139fc472e30"},{url:"/apple-icon.png",revision:"0a37f27a51670a64a587c139fc472e30"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/favicon-16x16.png",revision:"666d3daab9b7e766328f6405ae213c57"},{url:"/favicon-32x32.png",revision:"234ff958d79ea7b1f38052c1cbdd199e"},{url:"/favicon-96x96.png",revision:"107eb3b691962b9122e1b1cee5259064"},{url:"/favicon.ico",revision:"6e4b1bd5f6bfd329b0df90bbb6eaf0b2"},{url:"/img/avatar.png",revision:"ba36e6f36e3640be70be386871a1d2b2"},{url:"/img/botTelegramLogo.png",revision:"de94412b8d900f3776bb7fbd889d374c"},{url:"/img/buscadorAjaxjQuery.png",revision:"3bca8f8c5c2f1f5946d65b9ad6f0aeb6"},{url:"/img/buscaminasjQuery.png",revision:"df4810ac0750d9d711dcaa398038712b"},{url:"/img/gulp.png",revision:"7fcf4066d2907dcba9ba4da6228423dd"},{url:"/img/javierPonferradaLopez.png",revision:"3621553a43d8093ca04d2549662c25e3"},{url:"/img/juanRuedaMorales.png",revision:"6d23d7e9aae40964b40f3e8185d13533"},{url:"/img/logoapp.png",revision:"ce59055ff4731f058c7e345214813ed5"},{url:"/img/marioNavarroMadrid.png",revision:"58d6ae08b6ec546410c9a23ba4459477"},{url:"/img/miguelGavilanMerino.png",revision:"3ee866bc638826c197a6cac31e72c735"},{url:"/img/pisysmana.png",revision:"3dee4245ef5171d9384132a1c1704078"},{url:"/img/pluginValidacionFormulariojQuery.png",revision:"3c7c6178feba8de65aa7aa21cf261aa2"},{url:"/img/portfolio-logo.png",revision:"335cea231d8a52f86da6d0c7cb9b5cb2"},{url:"/img/portfolio-logo.svg",revision:"4948269e2da26517aed5405ebbf6bdfc"},{url:"/img/promises.png",revision:"b3982dd7bcca96ea3ea43c3e0bded3eb"},{url:"/img/python.png",revision:"8c50ca84c6a4c58f191698951192f39f"},{url:"/img/raspberry.png",revision:"37d1c9b8e537df35bd910d32d6855777"},{url:"/img/sumitools.png",revision:"a9578ad26959cb1b8fd5c798b256245b"},{url:"/img/susomejias-io.png",revision:"a393e725082ff35a099b7a4615a5d42c"},{url:"/img/symfony.png",revision:"51cb1444aec41292a8c028b6f0214369"},{url:"/img/sysmana2020.png",revision:"17bc122bfb4cf7a58223d203a2e33f1b"},{url:"/img/vuejs.png",revision:"1fa5dbc42b9ea29e6c591009a4a8da3d"},{url:"/manifest.json",revision:"21bd60f0c5264c65c27f5a5bdca03c2a"},{url:"/ms-icon-144x144.png",revision:"5081cb29ededc53f399f72ae26c633af"},{url:"/ms-icon-150x150.png",revision:"2846df0400c69ea80f3cfea11876a6fa"},{url:"/ms-icon-310x310.png",revision:"3d7305e1795fb4a1c9b4ca3ffa3836ed"},{url:"/ms-icon-70x70.png",revision:"22a635a12890f7d01f37324c9130e8fc"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
