'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9cd599a3523898e6a12e13ec787da50a",
".git/config": "846a7709a0a6194d50494bbeebd99c07",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8f269eed7d9b6ee28cebc7ea2e1ebe62",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "04451539f4c81984b2da5676fe7e55e6",
".git/logs/refs/heads/master": "10e1a4bfd12229217e0917cd44d92a7b",
".git/logs/refs/remotes/origin/main": "12199bbe0d113d670e6976f19f041f0a",
".git/logs/refs/remotes/origin/master": "1ac8a2e3653f9794e1a035580c0e7958",
".git/objects/03/57edcaa16abd62d177613fcf9d875ea31c2a80": "bc1c385a586404d01aef3a2b5b26d719",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0b/08c2335504a83754473b480b65bbd1d74da86c": "6e0ca10a4213f1421aa3d579d3784f92",
".git/objects/13/b894d2cdc1592922dd9f7f5a60add5c6a57aee": "f6e94a5ba03f8ac0e9807983c0c1038b",
".git/objects/1e/81e8e0b667524fcd260c5345fde587de02607c": "081d9d47892d4fa77a947da0c0ddfce8",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/86ba256018b77c69d797f165bdae0bd1e38ca8": "66676a231e72dbac638e808d734be54f",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/3a/62f3171d07aa8d8ab44a7d2120c5cb255654fb": "9d5c40ba4217e794e6f0ddd4f577d2b6",
".git/objects/3b/fd5d1c18afaa4d6fe13a03d7ebc7ecc5174624": "3b6f11cbb198a31e102e3fa91d2f2731",
".git/objects/3c/18c315096121c27219c9f6db923a934900830e": "58326765511761f35c07dd32bcc550b1",
".git/objects/3e/e4cb6b8305bd9a99f6cae6951d240a91d043e6": "6d082cf2da6e4662639eaf219a44153b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/688cc69220f2db244df9486c161534d42f30d2": "0ef92158331c6af710f7beb1a73c8b30",
".git/objects/51/84c18f7979a39d97da05596222ee4927b2d94d": "5c7b88e77dcb4f8b3751ec7b07e6a146",
".git/objects/53/d0cfd746966439c8adda5bf2fa465929364bbe": "8b3ffb80f5be6b0e7bdbc8c49e52767e",
".git/objects/56/bd5234991c3a1a8349e741811e7da9d492af41": "03191b731c0662db0271f2147968b0bd",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6a/37dbfc09aee059d0a4b591ef0f4b197f722702": "ccd9ef7fe5662029a796e74becae9379",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6f/4bf17b187b990b479b40a5785ba9d29b046489": "dba24114ac28cb221893a77835ffae9d",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/75/7044fdeaab5c39b2b97fdd142c7e6204278589": "f3f4d4a7762497feab483c94aef56a47",
".git/objects/75/730c12daf109db5d1abadb1933b303a59181c9": "9c8ee188002bcc36776f2ddbe77310c4",
".git/objects/7b/5bb88dea2b0af6a25ca1bc8c13a42127964432": "9c761a88362b38a9de7e0ab8e534d337",
".git/objects/81/a52f22af04543aa5f612d2d40a55dd3cb55111": "d3e8c9606154f69347bf23fcfdf20b24",
".git/objects/83/f5a24083dd909cc91b798e8344528697e81727": "e8804fe3973e3dcec4b15b6d74fb718a",
".git/objects/84/d9ca95cae508db0b11d805ea2a65582b44f27e": "1cf1de010db86428ca051d4c0056210b",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/df7fcefea29127b57af88814c3c136a63eb9a6": "46c95650df0eb0374604e20bf851bf6f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/a4/cf55a44c604c6659ed24e5f23a361f49f7f77e": "5c3e80c0b06345a15fc98308b053d7f1",
".git/objects/a8/77a36e94d2dd523afb37ef52bc822568bbc591": "09bd59efd24b732b3db8efbde59ad9cb",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/a4ac1734ca70aa5a74b019a66f0dd3f1a9b310": "a1a9de0c7adfacc9954bd5acc382bb91",
".git/objects/b6/e3e2eab1c967e4222b629957455e1313862360": "dfc674b88009b22516cdf45796f11570",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/2d73babd0bf22c2b83b1322a48f2e1c103430a": "a0c3136f40809f48ba9379c94d129e84",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/cb/7c004857ac63fa9b4a76451651509a3f6ac86c": "b08f0856a1f540b1b2585afbcd3b47d1",
".git/objects/cd/d230aaa6ecb95326e2216debbee66b2d67ffb6": "7886708331b25d316b195f979e9f5155",
".git/objects/cd/f93a1ad12dff5fafee9fa7c16effa6708a450f": "c7f40ff6484334bea2b1399d0a55c518",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/8434e09480c7f7eaadba2d9c93066ead10aeda": "38ccaf8011c08826c15c904f08c2c473",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/b6cd5fdaabcd05441d29e93a9077e221987bae": "066a08c4890098e506d31c1515abfe4d",
".git/objects/e6/0cf9958c237ce5272fb2507468c9b014a92555": "7bcabd3f9e5ce892545962680324be7c",
".git/objects/e8/9605ac37c05e96fde10d6f0d1c904ff9bbcd1b": "cd2a6784cc2c68aee8bd358f0f663c62",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/76f42ebe91590e42ed5d616dd54ab350f13fc8": "3318edfeb2e3dd129bc9325e47458295",
".git/objects/fc/3bec2283f00403cf5f65f1a4f40c65e768cefa": "72d52cf40525f0fd129ea600761dce1b",
".git/refs/heads/master": "ac91132a145666b1fc7cb24bd2d9f499",
".git/refs/remotes/origin/main": "588ef69a670ef8d44ec59ce271e518e7",
".git/refs/remotes/origin/master": "ac91132a145666b1fc7cb24bd2d9f499",
"assets/AssetManifest.bin": "650448b74063dee1f8ae7a95f3cc350b",
"assets/AssetManifest.bin.json": "d7b07dc292a50bbcc39408b4995736ff",
"assets/AssetManifest.json": "cf2e5f32a1418711a2c4a23eae38e815",
"assets/assets/12.jpg": "79a0759fa3a2c22ee27d4d9c39e3a18d",
"assets/assets/13.jpg": "5277e5a070e12063c93ab435847d6578",
"assets/assets/14.jpg": "8678e5b253c014a42c34307e588578c5",
"assets/assets/15.jpg": "5b7e2fa045c1e2a7bc219d3d626b2ee9",
"assets/assets/16.jpg": "cc54bc24e9e1a9681911aa9a10ae27e8",
"assets/assets/abella.jpg": "0b77149d3b92178f49beceef026fb513",
"assets/assets/app-release.apk": "80534a105f5ceb0e57e94fd4f8289e0d",
"assets/assets/caryn.png": "1d2f9d731674591a4723e9ab99413507",
"assets/assets/emakarter.png": "ce886ec38ad5f61d9bf04834a9973429",
"assets/assets/hannamiller.png": "edabbb925c3e5802e03394d7d26e6404",
"assets/assets/heidigrey.png": "8fd87f15f2b7f01ec5ec5b7eb3ae50f1",
"assets/assets/jessarhodes.jpg": "8a5960c012b233d9ee6a6bdb8af9012b",
"assets/assets/solarkate2.png": "6aed6028952d86a2698d4b644c9fea34",
"assets/assets/violetsummers.png": "e21e5283b5ed421c608616402dc9485d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a3e0d65b41683d1cbd31b11af652e9c3",
"assets/NOTICES": "51567aad151995eeceb87d2abe184145",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "3ed4134791263548f274b5c14e211d9c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "da0d69cb56b8e6861146b75b37378570",
"/": "da0d69cb56b8e6861146b75b37378570",
"main.dart.js": "240704a44bece6486f77786426971634",
"manifest.json": "7dba45bb613aac1dc2e405c09ccca7f0",
"version.json": "044ed5176b6dd8636d53989cc567ce0a"};
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
