/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/Hexo/Hexo/thenorth/public/2020/11/27/Ubuntu 18.04上不了网/index.html","2f3e8f4a9295e6b6d87d3231e4e0ea43"],["E:/Hexo/Hexo/thenorth/public/2020/11/27/leetcode刷题笔记/index.html","7df852a6596b703907215afddddf43c7"],["E:/Hexo/Hexo/thenorth/public/2020/11/28/Butterfly属性信息/index.html","82da1eb4b3ca027f45459f16a3e98885"],["E:/Hexo/Hexo/thenorth/public/2020/11/28/DDos 反射攻击/index.html","446b1a88f1b1e1a67cd9b5bcd7402c15"],["E:/Hexo/Hexo/thenorth/public/2020/11/29/leetcode每日一题976/index.html","4310031fec28efa7edaac95767c745d1"],["E:/Hexo/Hexo/thenorth/public/2020/12/03/CS4第一课-安装和初步使用/index.html","e873eea7e0fc81943ce2d8afe58ba1e1"],["E:/Hexo/Hexo/thenorth/public/2020/12/04/CS4第二课-部署到服务器上/index.html","675f2da2e90ad03278323fb0a06e4797"],["E:/Hexo/Hexo/thenorth/public/2021/01/10/GO编写一个高并发端口扫描工具/index.html","21f946d05c2f3a40303da819a5f73558"],["E:/Hexo/Hexo/thenorth/public/404.html","c7b73e55a9a25b71911734b622e7d169"],["E:/Hexo/Hexo/thenorth/public/about/index.html","c98c9360f4333838780dd2d8073192e2"],["E:/Hexo/Hexo/thenorth/public/aplayer/index.html","c6aa63d8dc120ad0e6393662d4ee3111"],["E:/Hexo/Hexo/thenorth/public/archives/2020/11/index.html","a5798a4b7c01c8728f62f0f288bf90a9"],["E:/Hexo/Hexo/thenorth/public/archives/2020/12/index.html","62896fadda01986eb7280d804b0b771b"],["E:/Hexo/Hexo/thenorth/public/archives/2020/index.html","204c38b07a6cd152d0c753e33e4093c7"],["E:/Hexo/Hexo/thenorth/public/archives/2021/01/index.html","72e81ce00a86463bcee7eaeaa5987e1f"],["E:/Hexo/Hexo/thenorth/public/archives/2021/index.html","b9ac15eaec4339ee555784df5aaf73bb"],["E:/Hexo/Hexo/thenorth/public/archives/index.html","cac57c19e3f5efcf309d07a9949e8f68"],["E:/Hexo/Hexo/thenorth/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["E:/Hexo/Hexo/thenorth/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["E:/Hexo/Hexo/thenorth/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["E:/Hexo/Hexo/thenorth/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["E:/Hexo/Hexo/thenorth/public/categories/Hexo主题/index.html","eece5015682902d7d27c5f5f77831146"],["E:/Hexo/Hexo/thenorth/public/categories/Linux/index.html","1fe436c6cc8b485f990e7ef6e2df7921"],["E:/Hexo/Hexo/thenorth/public/categories/index.html","e688e9ffabcccfd8fb088d68a7ddc93f"],["E:/Hexo/Hexo/thenorth/public/categories/leetcode/index.html","cecdc8c7035880a69edab918eb64096c"],["E:/Hexo/Hexo/thenorth/public/categories/网络安全/index.html","7847b8572da8fe29fda5d9a353985a4a"],["E:/Hexo/Hexo/thenorth/public/css/background.css","b9eb37d4931aded9579eb4b08babbb88"],["E:/Hexo/Hexo/thenorth/public/css/index.css","c0d47edfd1c333e852da7e9b109d8a87"],["E:/Hexo/Hexo/thenorth/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Hexo/Hexo/thenorth/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Hexo/Hexo/thenorth/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Hexo/Hexo/thenorth/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/Hexo/Hexo/thenorth/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Hexo/Hexo/thenorth/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/Hexo/Hexo/thenorth/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Hexo/Hexo/thenorth/public/img/wechat.jpg","357fda7cef35f8230460087535d0bc94"],["E:/Hexo/Hexo/thenorth/public/index.html","51ad3f89457926421f86ea38c66a24f0"],["E:/Hexo/Hexo/thenorth/public/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["E:/Hexo/Hexo/thenorth/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["E:/Hexo/Hexo/thenorth/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["E:/Hexo/Hexo/thenorth/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/Hexo/Hexo/thenorth/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/Hexo/Hexo/thenorth/public/link/index.html","48600560ed53046db0cb7db892cee084"],["E:/Hexo/Hexo/thenorth/public/movies/index.html","460df58520354988d4d73160fc042e35"],["E:/Hexo/Hexo/thenorth/public/music/index.html","96177d87b4814eb7627aaa8e183ef33f"],["E:/Hexo/Hexo/thenorth/public/tags/Butterfly/index.html","a3bb738cdb15c421da3cb23221cfbdfd"],["E:/Hexo/Hexo/thenorth/public/tags/DDos/index.html","47eabbfe5828abc82f4e9d8746be5ce6"],["E:/Hexo/Hexo/thenorth/public/tags/Linux常见问题/index.html","facf9f079f4f8cbfc2ab6307f37f2412"],["E:/Hexo/Hexo/thenorth/public/tags/Ubuntu/index.html","17f77f2887f8670604eacd36b9f4ef77"],["E:/Hexo/Hexo/thenorth/public/tags/index.html","6094ac99bbfe500455152f62228fe6fe"],["E:/Hexo/Hexo/thenorth/public/tags/leetcode每日一题/index.html","16a547d3610aede0db5f1a1ae9e0020a"],["E:/Hexo/Hexo/thenorth/public/tags/算法/index.html","8579909b5aa2e1201f9ae41e00c3e00b"],["E:/Hexo/Hexo/thenorth/public/tags/红队工具使用/index.html","d7b8204ea2b061160f3b68eb91edb053"],["E:/Hexo/Hexo/thenorth/public/tags/网络安全/index.html","28a160ae7e8f9f5535648dde33f6ae35"],["E:/Hexo/Hexo/thenorth/public/tags/面试/index.html","4811ff6870b409acc8efb49374fdc703"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







