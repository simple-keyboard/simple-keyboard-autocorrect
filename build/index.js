/*! For license information please see index.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleKeyboardAutocorrect=e():t.SimpleKeyboardAutocorrect=e()}(self,(()=>(()=>{"use strict";var t={d:(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{default:()=>a});function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(t,e){for(var r,n=0;n<e.length;n++)(r=e[n]).enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,i(r.key),r)}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===r(e)?e:e+""}const a=o((function t(){var e,r,n;(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),e=this,n=function(t){t.registerModule("autocorrect",(function(e){e.setDictionary=function(t){e.wordBank=function(t,e,r,n){var o={};t=t||[],o.gramSizeLower=r||2,o.gramSizeUpper=n||3,o.useLevenshtein="boolean"!=typeof e||e,o.exactSet={},o.matchDict={},o.items={};var i=function(t,e){if(null===t&&null===e)throw"Trying to compare two null values";if(null===t||null===e)return 0;var r=function(t,e){for(var r,n,o=[],i=0;i<=e.length;i++)for(var a=0;a<=t.length;a++)n=i&&a?t.charAt(a-1)===e.charAt(i-1)?r:Math.min(o[a],o[a-1],r)+1:i+a,r=o[a],o[a]=n;return o.pop()}(t=String(t),e=String(e));return t.length>e.length?1-r/t.length:1-r/e.length},a=/[^a-zA-Z0-9\u00C0-\u00FF\u0621-\u064A\u0660-\u0669, ]+/g,u=function(t,e){for(var r={},n=function(t,e){e=e||2;var r="-"+t.toLowerCase().replace(a,"")+"-",n=e-r.length,o=[];if(n>0)for(var i=0;i<n;++i)r+="-";for(i=0;i<r.length-e+1;++i)o.push(r.slice(i,i+e));return o}(t,e=e||2),o=0;o<n.length;++o)n[o]in r?r[n[o]]+=1:r[n[o]]=1;return r};o.get=function(t,e,r){void 0===r&&(r=.33);var n=this._get(t,r);return n||void 0===e?n:e},o._get=function(t,e){for(var r=[],n=this.gramSizeUpper;n>=this.gramSizeLower;--n)if((r=this.__get(t,n,e))&&r.length>0)return r;return null},o.__get=function(t,e,r){var n,o,a,c,s=this._normalizeStr(t),f={},l=u(s,e),h=this.items[e],p=0;for(n in l)if(o=l[n],p+=Math.pow(o,2),n in this.matchDict)for(w=0;w<this.matchDict[n].length;++w)a=this.matchDict[n][w][0],c=this.matchDict[n][w][1],a in f?f[a]+=o*c:f[a]=o*c;if(function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}(f))return null;var g,m=Math.sqrt(p),y=[];for(var d in f)g=f[d],y.push([g/(m*h[d][0]),h[d][1]]);var v=function(t,e){return t[0]<e[0]?1:t[0]>e[0]?-1:0};if(y.sort(v),this.useLevenshtein){for(var S=[],b=Math.min(50,y.length),w=0;w<b;++w)S.push([i(y[w][1],s),y[w][1]]);(y=S).sort(v)}return S=[],y.forEach(function(t){t[0]>=r&&S.push([t[0],this.exactSet[t[1]]])}.bind(this)),S},o.add=function(t){if(this._normalizeStr(t)in this.exactSet)return!1;for(var e=this.gramSizeLower;e<this.gramSizeUpper+1;++e)this._add(t,e)},o._add=function(t,e){var r=this._normalizeStr(t),n=this.items[e]||[],o=n.length;n.push(0);var i,a,c=u(r,e),s=0;for(i in c)a=c[i],s+=Math.pow(a,2),i in this.matchDict?this.matchDict[i].push([o,a]):this.matchDict[i]=[[o,a]];var f=Math.sqrt(s);n[o]=[f,r],this.items[e]=n,this.exactSet[r]=t},o._normalizeStr=function(t){if("[object String]"!==Object.prototype.toString.call(t))throw"Must use a string as argument to FuzzySet functions";return t.toLowerCase()},o.length=function(){var t,e=0;for(t in this.exactSet)this.exactSet.hasOwnProperty(t)&&(e+=1);return e},o.isEmpty=function(){for(var t in this.exactSet)if(this.exactSet.hasOwnProperty(t))return!1;return!0},o.values=function(){var t,e=[];for(t in this.exactSet)this.exactSet.hasOwnProperty(t)&&e.push(this.exactSet[t]);return e};for(var c=o.gramSizeLower;c<o.gramSizeUpper+1;++c)o.items[c]=[];for(c=0;c<t.length;++c)o.add(t[c]);return o}(t)},e.get=function(t){return e.wordBank.get(t)},e.setDictionary(t.options.autocorrectDict),e.fn={},e.fn.handleButtonClicked=t.handleButtonClicked,t.handleButtonClicked=function(r){var n=t.options.autocorrectHotkey||"{space}",o="",i="";if(r===n){var a=t.getInput().split(" ");if(i=a[a.length-1],a&&(o=e.wordBank.get(i))&&r===n&&!t.options.disableAutocorrectSetInput){var u=o[0][1];a[a.length-1]=u,t.setInput(a.join(" ")),t.setCaretPosition(t.getInput().length),t.options.debug&&console.log("keyboard.getCaretPosition()",t.getCaretPosition())}}"function"==typeof t.options.onAutocorrectPrediction&&i&&t.options.onAutocorrectPrediction(i,o),e.fn.handleButtonClicked(r)}}))},(r=i(r="init"))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n}));return e})()));