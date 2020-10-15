/*!
 * 
 *   simple-keyboard-autocorrect v2.2.26
 *   https://github.com/hodgef/simple-keyboard-autocorrect
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleKeyboardAutocorrect=e():t.SimpleKeyboardAutocorrect=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){t.exports=n(2)},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r);e.default=function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(this,"init",(function(t){t.registerModule("autocorrect",(function(e){e.setDictionary=function(t){e.wordBank=o()(t)},e.get=function(t){return e.wordBank.get(t)},e.setDictionary(t.options.autocorrectDict),e.fn={},e.fn.handleButtonClicked=t.handleButtonClicked,t.handleButtonClicked=function(n){var r=t.options.autocorrectHotkey||"{space}",o="",i="";if(n===r){var u=t.getInput().split(" ");if(i=u[u.length-1],u&&((o=e.wordBank.get(i))&&n===r&&!t.options.disableAutocorrectSetInput)){var a=o[0][1];u[u.length-1]=a,t.setInput(u.join(" ")),t.setCaretPosition(t.getInput().length),t.options.debug&&console.log("keyboard.getCaretPosition()",t.getCaretPosition())}}"function"==typeof t.options.onAutocorrectPrediction&&i&&t.options.onAutocorrectPrediction(i,o),e.fn.handleButtonClicked(n)}}))}))}},function(t,e,n){!function(){var e=function(t,e,n,r){var o={};t=t||[],o.gramSizeLower=n||2,o.gramSizeUpper=r||3,o.useLevenshtein="boolean"!=typeof e||e,o.exactSet={},o.matchDict={},o.items={};var i=function(t,e){if(null===t&&null===e)throw"Trying to compare two null values";if(null===t||null===e)return 0;var n=function(t,e){for(var n,r,o=[],i=0;i<=e.length;i++)for(var u=0;u<=t.length;u++)r=i&&u?t.charAt(u-1)===e.charAt(i-1)?n:Math.min(o[u],o[u-1],n)+1:i+u,n=o[u],o[u]=r;return o.pop()}(t=String(t),e=String(e));return t.length>e.length?1-n/t.length:1-n/e.length},u=/[^a-zA-Z0-9\u00C0-\u00FF, ]+/g,a=function(t,e){for(var n={},r=function(t,e){e=e||2;var n="-"+t.toLowerCase().replace(u,"")+"-",r=e-n.length,o=[];if(r>0)for(var i=0;i<r;++i)n+="-";for(i=0;i<n.length-e+1;++i)o.push(n.slice(i,i+e));return o}(t,e=e||2),o=0;o<r.length;++o)r[o]in n?n[r[o]]+=1:n[r[o]]=1;return n};o.get=function(t,e,n){void 0===n&&(n=.33);var r=this._get(t,n);return r||void 0===e?r:e},o._get=function(t,e){for(var n=[],r=this.gramSizeUpper;r>=this.gramSizeLower;--r)if((n=this.__get(t,r,e))&&n.length>0)return n;return null},o.__get=function(t,e,n){var r,o,u,c,s=this._normalizeStr(t),f={},h=a(s,e),l=this.items[e],p=0;for(r in h)if(o=h[r],p+=Math.pow(o,2),r in this.matchDict)for(w=0;w<this.matchDict[r].length;++w)u=this.matchDict[r][w][0],c=this.matchDict[r][w][1],u in f?f[u]+=o*c:f[u]=o*c;if(function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}(f))return null;var g,d=Math.sqrt(p),v=[];for(var m in f)g=f[m],v.push([g/(d*l[m][0]),l[m][1]]);var S=function(t,e){return t[0]<e[0]?1:t[0]>e[0]?-1:0};if(v.sort(S),this.useLevenshtein){for(var y=[],b=Math.min(50,v.length),w=0;w<b;++w)y.push([i(v[w][1],s),v[w][1]]);(v=y).sort(S)}y=[];return v.forEach(function(t){t[0]>=n&&y.push([t[0],this.exactSet[t[1]]])}.bind(this)),y},o.add=function(t){if(this._normalizeStr(t)in this.exactSet)return!1;for(var e=this.gramSizeLower;e<this.gramSizeUpper+1;++e)this._add(t,e)},o._add=function(t,e){var n=this._normalizeStr(t),r=this.items[e]||[],o=r.length;r.push(0);var i,u,c=a(n,e),s=0;for(i in c)u=c[i],s+=Math.pow(u,2),i in this.matchDict?this.matchDict[i].push([o,u]):this.matchDict[i]=[[o,u]];var f=Math.sqrt(s);r[o]=[f,n],this.items[e]=r,this.exactSet[n]=t},o._normalizeStr=function(t){if("[object String]"!==Object.prototype.toString.call(t))throw"Must use a string as argument to FuzzySet functions";return t.toLowerCase()},o.length=function(){var t,e=0;for(t in this.exactSet)this.exactSet.hasOwnProperty(t)&&(e+=1);return e},o.isEmpty=function(){for(var t in this.exactSet)if(this.exactSet.hasOwnProperty(t))return!1;return!0},o.values=function(){var t,e=[];for(t in this.exactSet)this.exactSet.hasOwnProperty(t)&&e.push(this.exactSet[t]);return e};for(var c=o.gramSizeLower;c<o.gramSizeUpper+1;++c)o.items[c]=[];for(c=0;c<t.length;++c)o.add(t[c]);return o};t.exports?(t.exports=e,this&&(this.FuzzySet=e)):this.FuzzySet=e}()}])}));