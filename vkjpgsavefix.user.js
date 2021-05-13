// ==UserScript==
// @name          VK jpg save fixer
// @namespace     https://github.com/rawdez/vanillamod
// @version       1.0
// @description   убирает ненужную фигню из путей картинок, например, чтобы использовать ссылку для своих обоев в Vanilla Dark 2 VK Fix/Mod.
// @author        rawdez
// @run-at        document-idle
// @include       /^https?:\/\/(.)*\.userapi\.com\/imp(.)\/(.*)\.jpg(.*)/
// ==/UserScript==

var pathTrim = location.href.replace (/^https?:\/\/(.)*\.userapi\.com\/imp(.)\/(.*)\.jpg(.*)/, "https://pp.userapi.com/$3\.jpg");
location.replace (pathTrim);
