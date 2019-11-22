/*!
 * 
 *   simple-keyboard-autocorrect v2.0.32
 *   https://github.com/hodgef/simple-keyboard-autocorrect
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 * 
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleKeyboardAutocorrect=e():t.SimpleKeyboardAutocorrect=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){t.exports=n(2)},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r);e.default=function t(){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(this,"init",(function(t){t.registerModule("autocorrect",(function(e){e.setDictionary=function(t){e.wordBank=i()(t)},e.get=function(t){return e.wordBank.get(t)},e.setDictionary(t.options.autocorrectDict),e.fn={},e.fn.handleButtonClicked=t.handleButtonClicked,t.handleButtonClicked=function(n){var r=t.options.autocorrectHotkey||"{space}",i="",o="";if(n===r){var a=t.getInput().split(" ");if(o=a[a.length-1],a&&((i=e.wordBank.get(o))&&n===r&&!t.options.disableAutocorrectSetInput)){var u=i[0][1];a[a.length-1]=u,t.setInput(a.join(" ")),t.caretPosition=t.getInput().length,t.options.debug&&console.log("keyboard.caretPosition",t.caretPosition)}}"function"==typeof t.options.onAutocorrectPrediction&&o&&t.options.onAutocorrectPrediction(o,i),e.fn.handleButtonClicked(n)}}))}))}},function(t,e,n){!function(){var e=function(t,e,n,r){var i={};t=t||[],i.gramSizeLower=n||2,i.gramSizeUpper=r||3,i.useLevenshtein="boolean"!=typeof e||e,i.exactSet={},i.matchDict={},i.items={};var o=function(t,e){if(null===t&&null===e)throw"Trying to compare two null values";if(null===t||null===e)return 0;var n=function(t,e){for(var n,r,i=[],o=0;o<=e.length;o++)for(var a=0;a<=t.length;a++)r=o&&a?t.charAt(a-1)===e.charAt(o-1)?n:Math.min(i[a],i[a-1],n)+1:o+a,n=i[a],i[a]=r;return i.pop()}(t=String(t),e=String(e));return t.length>e.length?1-n/t.length:1-n/e.length},a=/[^a-zA-Z0-9\u00C0-\u00FF, ]+/g,u=function(t,e){for(var n={},r=function(t,e){e=e||2;var n="-"+t.toLowerCase().replace(a,"")+"-",r=e-n.length,i=[];if(r>0)for(var o=0;o<r;++o)n+="-";for(o=0;o<n.length-e+1;++o)i.push(n.slice(o,o+e));return i}(t,e=e||2),i=0;i<r.length;++i)r[i]in n?n[r[i]]+=1:n[r[i]]=1;return n};i.get=function(t,e,n){void 0===n&&(n=.33);var r=this._get(t,n);return r||void 0===e?r:e},i._get=function(t,e){var n=this._normalizeStr(t),r=this.exactSet[n];if(r)return[[1,r]];for(var i=[],o=this.gramSizeUpper;o>=this.gramSizeLower;--o)if((i=this.__get(t,o,e))&&i.length>0)return i;return null},i.__get=function(t,e,n){var r,i,a,c,s=this._normalizeStr(t),f={},h=u(s,e),l=this.items[e],p=0;for(r in h)if(i=h[r],p+=Math.pow(i,2),r in this.matchDict)for(w=0;w<this.matchDict[r].length;++w)a=this.matchDict[r][w][0],c=this.matchDict[r][w][1],a in f?f[a]+=i*c:f[a]=i*c;if(function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}(f))return null;var d,g=Math.sqrt(p),v=[];for(var m in f)d=f[m],v.push([d/(g*l[m][0]),l[m][1]]);var S=function(t,e){return t[0]<e[0]?1:t[0]>e[0]?-1:0};if(v.sort(S),this.useLevenshtein){for(var y=[],b=Math.min(50,v.length),w=0;w<b;++w)y.push([o(v[w][1],s),v[w][1]]);(v=y).sort(S)}y=[];return v.forEach(function(t){t[0]>=n&&y.push([t[0],this.exactSet[t[1]]])}.bind(this)),y},i.add=function(t){if(this._normalizeStr(t)in this.exactSet)return!1;for(var e=this.gramSizeLower;e<this.gramSizeUpper+1;++e)this._add(t,e)},i._add=function(t,e){var n=this._normalizeStr(t),r=this.items[e]||[],i=r.length;r.push(0);var o,a,c=u(n,e),s=0;for(o in c)a=c[o],s+=Math.pow(a,2),o in this.matchDict?this.matchDict[o].push([i,a]):this.matchDict[o]=[[i,a]];var f=Math.sqrt(s);r[i]=[f,n],this.items[e]=r,this.exactSet[n]=t},i._normalizeStr=function(t){if("[object String]"!==Object.prototype.toString.call(t))throw"Must use a string as argument to FuzzySet functions";return t.toLowerCase()},i.length=function(){var t,e=0;for(t in this.exactSet)this.exactSet.hasOwnProperty(t)&&(e+=1);return e},i.isEmpty=function(){for(var t in this.exactSet)if(this.exactSet.hasOwnProperty(t))return!1;return!0},i.values=function(){var t,e=[];for(t in this.exactSet)this.exactSet.hasOwnProperty(t)&&e.push(this.exactSet[t]);return e};for(var c=i.gramSizeLower;c<i.gramSizeUpper+1;++c)i.items[c]=[];for(c=0;c<t.length;++c)i.add(t[c]);return i};t.exports?(t.exports=e,this&&(this.FuzzySet=e)):this.FuzzySet=e}()}])}));