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

var precacheConfig = [["E:/Hexo/Hexo/thenorth/public/2020/11/27/Ubuntu 18.04上不了网/index.html","257051a5a8fa9a92535a58ffae0ee740"],["E:/Hexo/Hexo/thenorth/public/2020/11/27/leetcode刷题笔记/index.html","ad48ff9e5a38babbb6eac7b8d1e4a6b6"],["E:/Hexo/Hexo/thenorth/public/2020/11/28/Butterfly属性信息/index.html","2c5800183f804ea0f80c5233513e3e8e"],["E:/Hexo/Hexo/thenorth/public/2020/11/28/DDos 反射攻击/index.html","a03aa0837237b33822eec042681ac5c4"],["E:/Hexo/Hexo/thenorth/public/2020/11/29/leetcode每日一题976/index.html","bf433e96344f1c64a603939884554380"],["E:/Hexo/Hexo/thenorth/public/2020/12/03/CS4第一课-安装和初步使用/index.html","65df21103fb4b36986a606ca7246e84c"],["E:/Hexo/Hexo/thenorth/public/2020/12/04/CS4第二课-部署到服务器上/index.html","77be827eb33a5caa5913b68ec7c43cce"],["E:/Hexo/Hexo/thenorth/public/2021/01/10/GO编写一个高并发端口扫描工具/index.html","23c14014f172ea870c6af85c26afdad1"],["E:/Hexo/Hexo/thenorth/public/404.html","9988ec6a63760bee0b8b932137a3dcfe"],["E:/Hexo/Hexo/thenorth/public/about/index.html","ccabd975f61c578870eced2023624ae5"],["E:/Hexo/Hexo/thenorth/public/aplayer/index.html","ba68e08d9e6d8f98a883f6b962202d05"],["E:/Hexo/Hexo/thenorth/public/archives/2020/11/index.html","7ccf53144bc290d4a628d3e24ece675e"],["E:/Hexo/Hexo/thenorth/public/archives/2020/12/index.html","b85f7482b8491977c62fa401c917f8ad"],["E:/Hexo/Hexo/thenorth/public/archives/2020/index.html","68dec451ee364df12a6374b6248d1c62"],["E:/Hexo/Hexo/thenorth/public/archives/2021/01/index.html","24c0a510165f6ae081e6dcd0b4878aa4"],["E:/Hexo/Hexo/thenorth/public/archives/2021/index.html","033ffbc02998aeb3dee9d5bba6567eee"],["E:/Hexo/Hexo/thenorth/public/archives/index.html","4fdb2162d21eeca50b2d4f4c40f4e20e"],["E:/Hexo/Hexo/thenorth/public/assets/algolia/algoliasearch.js","d5d2500bfe8443b42baaefe4996ee532"],["E:/Hexo/Hexo/thenorth/public/assets/algolia/algoliasearch.min.js","9c5e51e57e2b1d888950bf4cb5708c49"],["E:/Hexo/Hexo/thenorth/public/assets/algolia/algoliasearchLite.js","ce9b0e62645c036a143f639b92e7789f"],["E:/Hexo/Hexo/thenorth/public/assets/algolia/algoliasearchLite.min.js","c2d71f042c879659dbc97f8853b62f21"],["E:/Hexo/Hexo/thenorth/public/categories/Hexo主题/index.html","cd9fe26185aa0442440d24496dd6e9ba"],["E:/Hexo/Hexo/thenorth/public/categories/Linux/index.html","5e8595f6e8d7149e0921cf9bf4f6c586"],["E:/Hexo/Hexo/thenorth/public/categories/index.html","8674ac136ef4b94f3acb882e26875829"],["E:/Hexo/Hexo/thenorth/public/categories/leetcode/index.html","71af107dbd514d5a19abe7426d411cd1"],["E:/Hexo/Hexo/thenorth/public/categories/网络安全/index.html","82b3fa6bfcc8171629e3248894511925"],["E:/Hexo/Hexo/thenorth/public/css/background.css","b9eb37d4931aded9579eb4b08babbb88"],["E:/Hexo/Hexo/thenorth/public/css/index.css","c0d47edfd1c333e852da7e9b109d8a87"],["E:/Hexo/Hexo/thenorth/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/Hexo/Hexo/thenorth/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["E:/Hexo/Hexo/thenorth/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["E:/Hexo/Hexo/thenorth/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["E:/Hexo/Hexo/thenorth/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["E:/Hexo/Hexo/thenorth/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["E:/Hexo/Hexo/thenorth/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["E:/Hexo/Hexo/thenorth/public/img/wechat.jpg","357fda7cef35f8230460087535d0bc94"],["E:/Hexo/Hexo/thenorth/public/index.html","d0e069b0045f186005bac752d697a1ec"],["E:/Hexo/Hexo/thenorth/public/js/main.js","1c7d6eb8f8b1a9e2a06c37906146eb84"],["E:/Hexo/Hexo/thenorth/public/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["E:/Hexo/Hexo/thenorth/public/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["E:/Hexo/Hexo/thenorth/public/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["E:/Hexo/Hexo/thenorth/public/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["E:/Hexo/Hexo/thenorth/public/link/index.html","4ce8eec5e9a34edf20702afb3e44cd6d"],["E:/Hexo/Hexo/thenorth/public/movies/index.html","19593097d99617ab823c28e7d20d3141"],["E:/Hexo/Hexo/thenorth/public/music/index.html","90d4adb2b6e0c03ccd0b30ff19d2acea"],["E:/Hexo/Hexo/thenorth/public/tags/Butterfly/index.html","a6d2892b53e0069aa9452bcf55d800db"],["E:/Hexo/Hexo/thenorth/public/tags/DDos/index.html","5bd6a7dc9377850a738d183453a9ac73"],["E:/Hexo/Hexo/thenorth/public/tags/Linux常见问题/index.html","b407800843c33a7640d1c4e3acd6637a"],["E:/Hexo/Hexo/thenorth/public/tags/Ubuntu/index.html","d70b6d0fb4ea639ea59eb1f1ec59a5ca"],["E:/Hexo/Hexo/thenorth/public/tags/index.html","52a3b159a0dfb6474de2af042d68cd83"],["E:/Hexo/Hexo/thenorth/public/tags/leetcode每日一题/index.html","a656bd05b4b5c5576167de1ace5eb336"],["E:/Hexo/Hexo/thenorth/public/tags/算法/index.html","4d9d75ce9fa5e74b6d665db83786e118"],["E:/Hexo/Hexo/thenorth/public/tags/红队工具使用/index.html","06049da7933cc72138b03542287d3a12"],["E:/Hexo/Hexo/thenorth/public/tags/红队工具开发/index.html","191c71e906cf3101588ce19cdba46685"],["E:/Hexo/Hexo/thenorth/public/tags/网络安全/index.html","595438a9791007e44c3678363ec26889"],["E:/Hexo/Hexo/thenorth/public/tags/面试/index.html","408b2f1cce2bdae4c3b53dc9daa49e5f"]];
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







