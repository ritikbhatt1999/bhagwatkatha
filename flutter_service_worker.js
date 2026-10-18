'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a375d24d63c024a08dea4bbc82b0e470",
"version.json": "505bd70d4ed31f3e24809dceb9d09c98",
"index.html": "03f316551dcdba1cf8eb6a2e30d31c86",
"/": "03f316551dcdba1cf8eb6a2e30d31c86",
"main.dart.js": "d2aab24892e635e177bdbe6af972a9e1",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "da87c6b9582e52c3f77e0247b1f5483c",
"audio/katha_ambience.mp3": "68c26fb6e5e13ad84a17c3389d5f5eb2",
"icons/Icon-192.png": "a795126334685b926fd6417a53df11dc",
"icons/Icon-maskable-192.png": "a795126334685b926fd6417a53df11dc",
"icons/Icon-maskable-512.png": "90b8bbff04933a5900875ee6527c9806",
"icons/Icon-512.png": "90b8bbff04933a5900875ee6527c9806",
"manifest.json": "e32b834ad23bba3a1d8f7dc79c18bac3",
".git/config": "d02ad062e614100dddeca6f0eb4e65b2",
".git/objects/50/dfd543ddf44bb5e2abee4bcde69136deacd611": "b999b2c05c099f1948577670beb251a6",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/04/b5f4e112af62c4d638d64e7f2d0701882d9478": "3948def6cec3ae2795d1fbf80a9f47ea",
".git/objects/69/b2023ef3b84225f16fdd15ba36b2b5fc3cee43": "6ccef18e05a49674444167a08de6e407",
".git/objects/51/ba415fbca46522eda2f3022288a744f6fcd9f1": "56e84ef8f2bae482a135468936d48086",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/9d/f8fbe0ccd38652cdc91109af6b99d0c4912232": "fe53870bb68475b7c04e192103b9cf8a",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/bb/faaec57762ee7c1eeb8a710c3a251f7b0fb201": "8768e1261a5250050ae513bf0c69024a",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d7/ed05748a409f47cd34ae33183faa9cf71bd270": "e3fe47be7524c8294084dfb0b4da37ce",
".git/objects/be/cb837407d2e60720655c160e668ee6619e0fe4": "5deafd604f10e99795ff161a2c7db287",
".git/objects/e2/430828a73e0b5fc1c8caf4f988cc90b893324c": "2799fe9dd02aab697582c079f24e1cc0",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fd/de4b14ef78ccefb275472996eeda7fee00243d": "5620ec517cb6774d681c1b7eebba9448",
".git/objects/fd/c7fe879f00e257a42a95dd967f11b19d35f126": "14a90d1fb18c91583b600f86e0cdbaab",
".git/objects/f5/825843cac6346038fe089fa3a4d2ed6bdda18a": "5b94284fe10a49c6072fad6ae31544fe",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/cf/6764ed40b470687fa5ede881eeedbfa2305eac": "074a7ce89e4d61fe2c854cde9568152e",
".git/objects/ca/1e2fd1a02a4b8d374b6478771303cd54944f35": "9cb32ce8fc37c6683ed9d15b529cf34c",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c6/1fe370043ea382a809ca2cc02ca4a50fab23bf": "8b5d6d750423e1a6e2c3d92d37fb2d62",
".git/objects/ec/f639213f328a6a5879f8185201597e90df2aa1": "2268c9ed895b59229e15cdfd3974b7e9",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/16/bbd257ab3d2ea8c5c29160887e8fd9d1440204": "fa2d4a6deec86aac71b641e0ec3f5de7",
".git/objects/1a/3c9c1f0ad48b7f6635c3fc20aa731b92c45ebb": "cca0b4098d54e49c3253fa47fcd67968",
".git/objects/2f/88862e69c92492f6844eed0c243a2574bc3e2f": "86d53a6af148a7698a1868c6f233e35e",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/98/69825f02417185015e96c4df2e148c59b5463d": "32cb0efab7bdfb3bc196d8e996d11c69",
".git/objects/30/42524b10d84816777f6c568b1897e0eb8343ff": "b21a3fc03c8e11f4143ea909768b6ff6",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/6d/863284707b98eda164cee9bb23107ca8a6ad9a": "2124666e16a2cb60bce7a5308678a205",
".git/objects/06/4b023ff32f561ea7557ee6c1f5d968da9a10ae": "69d72180ea0bfbeed4ab67a0629b0368",
".git/objects/d3/1d76371f726011783048a418b1c8db36949ccd": "154c739a4c6817c66206f9656f57b968",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/de/65ff653fe6693f13c237e0b5a2706c6a259007": "a4a2d36a1cc752af61438454de5e6920",
".git/objects/de/67fb5a4e409aba3803254e481fdc710e879bbe": "bce22433f2e96fcc342711eddb372d42",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ef/9b333ae3dfdc2671cb7eb2fb66e0fb756a5e43": "801db6c9aaa6c92fcc2e17a617dc1e27",
".git/objects/c4/800a755be1260a44636b34f6196095e751fa01": "2773d4d2f29206f7e0eeb27e79dbfe8c",
".git/objects/e6/eb8f689cbc9febb5a913856382d297dae0d383": "466fce65fb82283da16cdd7c93059ff3",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/faa41a2f6c77ad1bf026458ebd4096c75a4536": "73f9b61826a25144652e91740bc8ce45",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/41/dce46a3e0694853f52b51b65f289a1d786439e": "d974bf9da60ab9dc6735ab8fc9467c74",
".git/objects/24/fecfd4d6031afb84a62e398fef484ad0ae06b9": "d28e33734570c4971f6a6b0c0a7683f4",
".git/objects/85/05ef5bb56deee8461c347901f427e267c86a29": "ee2ab24146b67c1bf3ffb24796819b05",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/40/de556933317ed9627a0dc2e5262f68a15ecfa9": "35d0d90910228f76fe28239a95a401fe",
".git/objects/2b/940432856195647a95a8bd0f0f04a6a279a000": "acb8229374804c1c07a1b5ffd564d420",
".git/objects/2b/614b1b32586c8fbae7c89486ca74f2ad1eafd2": "c3021e394b52d4feb8c60d14dc910de7",
".git/objects/78/f5258699ddd75887930d522ac7f04d0cfd29c2": "3c2288aae256bf7146f54069b8c9d2b2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a1d6e297cc7694f620f1d2b9db4c2f92",
".git/logs/refs/heads/main": "925a33573e6951baa9c5eab23c87b609",
".git/logs/refs/remotes/origin/main": "13b28ca99d3b778c46bf1520c39fb452",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f3d53736dd1cfba2ce8c306c7d80159b",
".git/refs/remotes/origin/main": "f3d53736dd1cfba2ce8c306c7d80159b",
".git/index": "4f747463e13bb9ceb555e76115a20d35",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/images/krishna_peacock_row.jpg": "670399fda85bcb43be575f1e2040b703",
"assets/images/hari_ram_bhatt.jpg": "605cc6923f07dff4e610f9986c6c3a68",
"assets/images/krishna_flute_feather.jpg": "ff226a67ab2c7416348869b6fed75471",
"assets/images/krishna_peacock_feather.jpg": "00d823412fbf842e8b2ed7cdcffb72ac",
"assets/images/ancestor_4.jpg": "266747f1382fd3f5b88c840e6ad70eae",
"assets/images/ancestor_3.jpg": "ad9efd0fdfd414d09060418382671359",
"assets/images/godambari_devi.jpg": "9008ad8b664fc3de151bd5a319d9b66e",
"assets/images/krishna_peacock.jpg": "3a68e9f29c9cea0346af7b81973cacaa",
"assets/images/krishna_bansuri_ornament.jpg": "9640342fbf223d5268bf5b915c90b229",
"assets/NOTICES": "d61eb38b72726969f927ad53463889c7",
"assets/audio/katha_ambience.mp3": "68c26fb6e5e13ad84a17c3389d5f5eb2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "7d15106b51f1f9a0b40b4f6506d62505",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "9ea01ce0f5dc5488d2a7dca769e34649",
"assets/fonts/MaterialIcons-Regular.otf": "ad5241e65406396a1b653e160c1db3f4",
"assets/assets/images/hari_ram_bhatt.jpg": "605cc6923f07dff4e610f9986c6c3a68",
"assets/assets/images/ancestor_4.jpg": "266747f1382fd3f5b88c840e6ad70eae",
"assets/assets/images/ancestor_3.jpg": "ad9efd0fdfd414d09060418382671359",
"assets/assets/images/app_logo.png": "6c95e99ce435ed6ccacbc7ab4d5eccee",
"assets/assets/images/godambari_devi.jpg": "9008ad8b664fc3de151bd5a319d9b66e",
"assets/assets/images/panditji.png": "f407f225d49409aaf7c76c39287c8257",
"assets/assets/audio/katha_ambience.mp3": "68c26fb6e5e13ad84a17c3389d5f5eb2",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
