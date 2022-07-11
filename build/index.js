/*!
 * 
 *   simple-keyboard-autocorrect v2.2.439
 *   https://github.com/hodgef/simple-keyboard-autocorrect
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleKeyboardAutocorrect=e():t.SimpleKeyboardAutocorrect=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";r.r(e);var n=function(t,e,r,n){var o={};t=t||[],o.gramSizeLower=r||2,o.gramSizeUpper=n||3,o.useLevenshtein="boolean"!=typeof e||e,o.exactSet={},o.matchDict={},o.items={};var i=function(t,e){if(null===t&&null===e)throw"Trying to compare two null values";if(null===t||null===e)return 0;var r=function(t,e){for(var r,n,o=[],i=0;i<=e.length;i++)for(var u=0;u<=t.length;u++)n=i&&u?t.charAt(u-1)===e.charAt(i-1)?r:Math.min(o[u],o[u-1],r)+1:i+u,r=o[u],o[u]=n;return o.pop()}(t=String(t),e=String(e));return t.length>e.length?1-r/t.length:1-r/e.length},u=/[^a-zA-Z0-9\u00C0-\u00FF\u0621-\u064A\u0660-\u0669, ]+/g,a=function(t,e){for(var r={},n=function(t,e){e=e||2;var r="-"+t.toLowerCase().replace(u,"")+"-",n=e-r.length,o=[];if(n>0)for(var i=0;i<n;++i)r+="-";for(i=0;i<r.length-e+1;++i)o.push(r.slice(i,i+e));return o}(t,e=e||2),o=0;o<n.length;++o)n[o]in r?r[n[o]]+=1:r[n[o]]=1;return r};o.get=function(t,e,r){void 0===r&&(r=.33);var n=this._get(t,r);return n||void 0===e?n:e},o._get=function(t,e){for(var r=[],n=this.gramSizeUpper;n>=this.gramSizeLower;--n)if((r=this.__get(t,n,e))&&r.length>0)return r;return null},o.__get=function(t,e,r){var n,o,u,c,f=this._normalizeStr(t),s={},l=a(f,e),h=this.items[e],p=0;for(n in l)if(o=l[n],p+=Math.pow(o,2),n in this.matchDict)for(w=0;w<this.matchDict[n].length;++w)u=this.matchDict[n][w][0],c=this.matchDict[n][w][1],u in s?s[u]+=o*c:s[u]=o*c;if(function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}(s))return null;var g,d=Math.sqrt(p),v=[];for(var m in s)g=s[m],v.push([g/(d*h[m][0]),h[m][1]]);var y=function(t,e){return t[0]<e[0]?1:t[0]>e[0]?-1:0};if(v.sort(y),this.useLevenshtein){for(var b=[],S=Math.min(50,v.length),w=0;w<S;++w)b.push([i(v[w][1],f),v[w][1]]);(v=b).sort(y)}return b=[],v.forEach(function(t){t[0]>=r&&b.push([t[0],this.exactSet[t[1]]])}.bind(this)),b},o.add=function(t){if(this._normalizeStr(t)in this.exactSet)return!1;for(var e=this.gramSizeLower;e<this.gramSizeUpper+1;++e)this._add(t,e)},o._add=function(t,e){var r=this._normalizeStr(t),n=this.items[e]||[],o=n.length;n.push(0);var i,u,c=a(r,e),f=0;for(i in c)u=c[i],f+=Math.pow(u,2),i in this.matchDict?this.matchDict[i].push([o,u]):this.matchDict[i]=[[o,u]];var s=Math.sqrt(f);n[o]=[s,r],this.items[e]=n,this.exactSet[r]=t},o._normalizeStr=function(t){if("[object String]"!==Object.prototype.toString.call(t))throw"Must use a string as argument to FuzzySet functions";return t.toLowerCase()},o.length=function(){var t,e=0;for(t in this.exactSet)this.exactSet.hasOwnProperty(t)&&(e+=1);return e},o.isEmpty=function(){for(var t in this.exactSet)if(this.exactSet.hasOwnProperty(t))return!1;return!0},o.values=function(){var t,e=[];for(t in this.exactSet)this.exactSet.hasOwnProperty(t)&&e.push(this.exactSet[t]);return e};for(var c=o.gramSizeLower;c<o.gramSizeUpper+1;++c)o.items[c]=[];for(c=0;c<t.length;++c)o.add(t[c]);return o};function o(t,e){for(var r,n=0;n<e.length;n++)(r=e[n]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}function i(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}var u=i((function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),function(t,e,r){e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}(this,"init",(function(t){t.registerModule("autocorrect",(function(e){e.setDictionary=function(t){e.wordBank=n(t)},e.get=function(t){return e.wordBank.get(t)},e.setDictionary(t.options.autocorrectDict),e.fn={},e.fn.handleButtonClicked=t.handleButtonClicked,t.handleButtonClicked=function(r){var n=t.options.autocorrectHotkey||"{space}",o="",i="";if(r===n){var u=t.getInput().split(" ");if(i=u[u.length-1],u&&((o=e.wordBank.get(i))&&r===n&&!t.options.disableAutocorrectSetInput)){var a=o[0][1];u[u.length-1]=a,t.setInput(u.join(" ")),t.setCaretPosition(t.getInput().length),t.options.debug&&console.log("keyboard.getCaretPosition()",t.getCaretPosition())}}"function"==typeof t.options.onAutocorrectPrediction&&i&&t.options.onAutocorrectPrediction(i,o),e.fn.handleButtonClicked(r)}}))}))}));e.default=u}])}));