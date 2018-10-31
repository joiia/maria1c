!function(e){var n={};function t(o){if(n[o])return n[o].exports;var s=n[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([,,,function(e,n){!function(e,n,t){var o=[],s={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){o.push({name:e,fn:n,options:t})},addAsyncTest:function(e){o.push({name:null,fn:e})}},a=function(){};a.prototype=s,a=new a;var r=[];var i=n.documentElement,l="svg"===i.nodeName.toLowerCase();
/*!
  {
    "name": "SVG",
    "property": "svg",
    "caniuse": "svg",
    "tags": ["svg"],
    "authors": ["Erik Dahlstrom"],
    "polyfills": [
      "svgweb",
      "raphael",
      "amplesdk",
      "canvg",
      "svg-boilerplate",
      "sie",
      "dojogfx",
      "fabricjs"
    ]
  }
  !*/
a.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,n,t,s,i,l;for(var c in o)if(o.hasOwnProperty(c)){if(e=[],(n=o[c]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s="function"==typeof n.fn?n.fn():n.fn,i=0;i<e.length;i++)1===(l=e[i].split(".")).length?a[l[0]]=s:(!a[l[0]]||a[l[0]]instanceof Boolean||(a[l[0]]=new Boolean(a[l[0]])),a[l[0]][l[1]]=s),r.push((s?"":"no-")+l.join("-"))}}(),function(e){var n=i.className,t=a._config.classPrefix||"";if(l&&(n=n.baseVal),a._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}a._config.enableClasses&&(n+=" "+t+e.join(" "+t),l?i.className.baseVal=n:i.className=n)}(r),delete s.addTest,delete s.addAsyncTest;for(var c=0;c<a._q.length;c++)a._q[c]();e.Modernizr=a}(window,document)},function(e,n,t){"use strict";t.r(n);t(3)}]);