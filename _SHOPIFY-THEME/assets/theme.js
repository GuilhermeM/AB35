Shopify.arrayIncludes = function(e, t) {
  for (var n = 0; n < e.length; n++)
    if (e[n] == t) return !0;
  return !1
}, Shopify.uniq = function(e) {
  for (var t = [], n = 0; n < e.length; n++) Shopify.arrayIncludes(t, e[n]) || t.push(e[n]);
  return t
}

/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

(function (factory) {
  typeof define === 'function' && define.amd ? define('index', factory) :
  factory();
}((function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  var Responsive = /*#__PURE__*/function () {
    function Responsive() {
      var _this = this;

      _classCallCheck(this, Responsive);

      this.currentBreakpoint = Responsive.getCurrentBreakpoint();
      window.addEventListener('resize', function () {
        var newBreakpoint = Responsive.getCurrentBreakpoint();

        if (_this.currentBreakpoint === newBreakpoint) {
          return;
        }

        document.dispatchEvent(new CustomEvent('breakpoint:changed', {
          detail: {
            previousBreakpoint: _this.currentBreakpoint,
            currentBreakpoint: newBreakpoint
          }
        }));
        _this.currentBreakpoint = newBreakpoint;
      });
    }

    _createClass(Responsive, null, [{
      key: "matchesBreakpoint",
      value: function matchesBreakpoint(breakpoint) {
        switch (breakpoint) {
          case 'phone':
            return window.matchMedia('screen and (max-width: 640px)').matches;

          case 'tablet':
            return window.matchMedia('screen and (min-width: 641px) and (max-width: 1007px)').matches;

          case 'tablet-and-up':
            return window.matchMedia('screen and (min-width: 641px)').matches;

          case 'pocket':
            return window.matchMedia('screen and (max-width: 1007px)').matches;

          case 'lap':
            return window.matchMedia('screen and (min-width: 1008px) and (max-width: 1279px)').matches;

          case 'lap-and-up':
            return window.matchMedia('screen and (min-width: 1008px)').matches;

          case 'desk':
            return window.matchMedia('screen and (min-width: 1280px)').matches;

          case 'widescreen':
            return window.matchMedia('screen and (min-width: 1600px)').matches;

          case 'supports-hover':
            return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        }
      }
    }, {
      key: "getCurrentBreakpoint",
      value: function getCurrentBreakpoint() {
        if (window.matchMedia('screen and (max-width: 640px)').matches) {
          return 'phone';
        }

        if (window.matchMedia('screen and (min-width: 641px) and (max-width: 1007px)').matches) {
          return 'tablet';
        }

        if (window.matchMedia('screen and (min-width: 1008px) and (max-width: 1279px)').matches) {
          return 'lap';
        }

        if (window.matchMedia('screen and (min-width: 1280px)').matches) {
          return 'desk';
        }
      }
    }]);

    return Responsive;
  }();

  var Carousel = /*#__PURE__*/function () {
    function Carousel(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var overrideSettings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, Carousel);

      this.element = element;
      this.initialConfig = Object.assign(JSON.parse(element.getAttribute('data-flickity-config')), overrideSettings);
      this.options = options;

      this._attachListeners();

      this._build();
    }

    _createClass(Carousel, [{
      key: "destroy",
      value: function destroy() {
        this.flickityInstance.destroy();

        if (this.initialConfig['breakpoints'] !== undefined) {
          document.removeEventListener('breakpoint:changed', this._onBreakpointChangedListener);
        }
      }
    }, {
      key: "getFlickityInstance",
      value: function getFlickityInstance() {
        return this.flickityInstance;
      }
    }, {
      key: "selectCell",
      value: function selectCell(index) {
        var shouldPause = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var shouldAnimate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        if (shouldPause) {
          this.flickityInstance.pausePlayer();
        }

        this.flickityInstance.select(index, false, !shouldAnimate);
      }
    }, {
      key: "next",
      value: function next() {
        this.flickityInstance.next();
      }
    }, {
      key: "previous",
      value: function previous() {
        this.flickityInstance.previous();
      }
    }, {
      key: "pausePlayer",
      value: function pausePlayer() {
        this.flickityInstance.pausePlayer();
      }
    }, {
      key: "unpausePlayer",
      value: function unpausePlayer() {
        this.flickityInstance.unpausePlayer();
      }
    }, {
      key: "resize",
      value: function resize() {
        this.flickityInstance.resize();
      }
    }, {
      key: "getSelectedIndex",
      value: function getSelectedIndex() {
        return this.flickityInstance.selectedIndex;
      }
    }, {
      key: "getSelectedCell",
      value: function getSelectedCell() {
        return this.flickityInstance.selectedCell.element;
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        if (this.initialConfig['breakpoints'] !== undefined) {
          this._onBreakpointChangedListener = this._onBreakpointChanged.bind(this);
          document.addEventListener('breakpoint:changed', this._onBreakpointChangedListener);
        }
      }
      /**
       * Create the carousel instance
       */

    }, {
      key: "_build",
      value: function _build() {
        var _this = this;

        var config = this._processConfig();

        this.flickityInstance = new Flickity(this.element, config);

        this._validateDraggable();

        this.selectedIndex = this.flickityInstance.selectedIndex;
        this.flickityInstance.on('resize', this._validateDraggable.bind(this));

        if (this.options['onSelect']) {
          this.flickityInstance.on('select', function () {
            // Flickity will send the "select" event whenever the window resize (even on mobile...), as a consequence we need to check
            // first if the slide index have changed or not (cf: https://github.com/metafizzy/flickity/issues/529)
            if (_this.selectedIndex !== _this.flickityInstance.selectedIndex) {
              _this.options['onSelect'](_this.flickityInstance.selectedIndex, _this.flickityInstance.selectedCell.element);

              _this.selectedIndex = _this.flickityInstance.selectedIndex;
            }
          });
        }

        if (this.options['onSettle']) {
          this.flickityInstance.on('settle', function (index) {
            _this.options['onSettle'](index, _this.flickityInstance.selectedCell.element);
          });
        }

        if (this.options['onClick']) {
          this.flickityInstance.on('staticClick', function (event, pointer, cell, index) {
            _this.options['onClick'](cell, index);
          });
        }
      }
      /**
       * By default, Flickity does not disable draggable automatically if there is nothing to slide. We therefore manually do the check here by checking
       * if the displayed elements equals to the amount of elements
       */

    }, {
      key: "_validateDraggable",
      value: function _validateDraggable() {
        var isActive = this.flickityInstance.isActive || false;

        if (!isActive || !this.flickityInstance.options['draggable']) {
          return; // Not draggable, so nothing to do
        }

        if (undefined === this.flickityInstance.selectedElements || this.flickityInstance.selectedElements.length === this.flickityInstance.cells.length) {
          this.flickityInstance.unbindDrag();
        } else {
          this.flickityInstance.bindDrag();
        }
      }
      /**
       * Flickity is a CSS driven library and hence it is hard to setup some stuff in pure JS
       */

    }, {
      key: "_processConfig",
      value: function _processConfig() {
        var config = Object.assign({}, this.initialConfig);
        delete config['breakpoints'];

        if (this.initialConfig['breakpoints'] === undefined) {
          return config; // No change, we simply return the config as it is
        }

        var breakpoints = this.initialConfig['breakpoints'];
        breakpoints.forEach(function (breakpoint) {
          if (Responsive.matchesBreakpoint(breakpoint['matches'])) {
            config = Object.assign(config, breakpoint['settings']);
          }
        });
        return config;
      }
      /**
       * Verify if the breakpoint has changed, and optionally update the carousel
       */

    }, {
      key: "_onBreakpointChanged",
      value: function _onBreakpointChanged() {
        // The breakpoint may have changed, so we delete the carousel and rebuild it
        this.flickityInstance.destroy();

        this._build();
      }
    }]);

    return Carousel;
  }();

  var Animation = /*#__PURE__*/function () {
    function Animation() {
      _classCallCheck(this, Animation);
    }

    _createClass(Animation, null, [{
      key: "slideUp",
      value:
      /**
       * Slide up aims to close an element. To do that, we take the height of the element, and set it to 0 to
       * force an animation
       */
      function slideUp(element) {
        element.style.height = "".concat(element.scrollHeight, "px"); // Force previous height to allow CSS transition

        element.offsetHeight; // Force redraw

        element.style.height = 0;
      }
      /**
       * Slide down aims to open an element. To do that, you must make sure that the element you are trying to open
       * is set with height: 0; overflow: hidden in the CSS, and does not contain any padding nor margin.
       */

    }, {
      key: "slideDown",
      value: function slideDown(element) {
        if (element.style.height === 'auto') {
          return;
        } // To do the animation we temporarily hide it, check the height, and transition to it


        element.style.height = "".concat(element.firstElementChild.scrollHeight, "px");

        var transitionEnded = function transitionEnded(event) {
          if (event.propertyName === 'height') {
            element.style.height = 'auto'; // Allows the content to grow normally

            element.removeEventListener('transitionend', transitionEnded);
          }
        };

        element.addEventListener('transitionend', transitionEnded);
      }
    }]);

    return Animation;
  }();

  /**
   * Various DOM helper
   */
  var Dom = /*#__PURE__*/function () {
    function Dom() {
      _classCallCheck(this, Dom);
    }

    _createClass(Dom, null, [{
      key: "getSiblings",
      value:
      /**
       * Get all the previous and next siblings, optionally filtered by a selector
       */
      function getSiblings(element, filter) {
        var includeSelf = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var siblings = [];
        var currentElement = element; // Do the previous first

        while (currentElement = currentElement.previousElementSibling) {
          if (!filter || currentElement.matches(filter)) {
            siblings.push(currentElement);
          }
        }

        if (includeSelf) {
          siblings.push(element);
        } // Then the next side


        currentElement = element;

        while (currentElement = currentElement.nextElementSibling) {
          if (!filter || currentElement.matches(filter)) {
            siblings.push(currentElement);
          }
        }

        return siblings;
      }
      /**
       * By default, NodeList object are only iterable with forEach on newest browsers. To support it cross-browser,
       * we need to normalize it
       */

    }, {
      key: "nodeListToArray",
      value: function nodeListToArray(nodeList, filter) {
        var items = [];

        for (var i = 0; i !== nodeList.length; ++i) {
          if (!filter || nodeList[i].matches(filter)) {
            items.push(nodeList[i]);
          }
        }

        return items;
      }
      /**
       * Calculate an element width with its margin
       */

    }, {
      key: "outerWidthWithMargin",
      value: function outerWidthWithMargin(element) {
        var width = element.offsetWidth,
            style = getComputedStyle(element);
        width += parseInt(style.marginLeft) + parseInt(style.marginRight);
        return width;
      }
      /**
       * Calculate an element height with its margin
       */

    }, {
      key: "outerHeightWithMargin",
      value: function outerHeightWithMargin(element) {
        var height = element.offsetHeight,
            style = getComputedStyle(element);
        height += parseInt(style.marginTop) + parseInt(style.marginBottom);
        return height;
      }
    }]);

    return Dom;
  }();

  var Collapsible = /*#__PURE__*/function () {
    function Collapsible() {
      _classCallCheck(this, Collapsible);

      this.domDelegate = new domDelegate.Delegate(document.body);

      this._attachListeners();
    }

    _createClass(Collapsible, [{
      key: "_attachListeners",
      value: function _attachListeners() {
        this.domDelegate.on('click', '[data-action="toggle-collapsible"]', this._toggleCollapsible.bind(this));
      }
      /**
       * Toggle a given collapsible
       */

    }, {
      key: "_toggleCollapsible",
      value: function _toggleCollapsible(event, target) {
        var _this = this;

        // If this is an auto-expand and that it reaches the needed breakpoint, we do nothing
        var parentCollapsible = target.closest('.Collapsible');

        if (parentCollapsible.classList.contains('Collapsible--autoExpand') && Responsive.matchesBreakpoint('tablet-and-up')) {
          return;
        }

        var isOpen = target.getAttribute('aria-expanded') === 'true';

        if (isOpen) {
          this._close(parentCollapsible, target);
        } else {
          this._open(parentCollapsible, target);
        } // We make sure to close any siblings collapsible as well


        Dom.getSiblings(parentCollapsible).forEach(function (collapsibleToClose) {
          return _this._close(collapsibleToClose);
        });
        event.preventDefault();
      }
      /**
       * Open a given collapsible
       */

    }, {
      key: "_open",
      value: function _open(collapsible) {
        var toggleButton = collapsible.querySelector('.Collapsible__Button'),
            collapsibleInner = collapsible.querySelector('.Collapsible__Inner');

        if (!collapsibleInner || toggleButton.getAttribute('aria-expanded') === 'true') {
          return; // It's already open
        }

        toggleButton.setAttribute('aria-expanded', 'true');
        collapsibleInner.style.overflow = 'visible';
        Animation.slideDown(collapsibleInner);
        setTimeout(function () {
          collapsible.style.overflow = 'visible';
        }, 350);
      }
      /**
       * Close a given collapsible
       */

    }, {
      key: "_close",
      value: function _close(collapsible) {
        var toggleButton = collapsible.querySelector('.Collapsible__Button'),
            collapsibleInner = collapsible.querySelector('.Collapsible__Inner');

        if (!collapsibleInner || toggleButton.getAttribute('aria-expanded') === 'false') {
          return; // It's already closed
        }

        toggleButton.setAttribute('aria-expanded', 'false');
        collapsibleInner.style.overflow = 'hidden';
        collapsible.style.overflow = 'hidden';
        Animation.slideUp(collapsibleInner);
      }
    }]);

    return Collapsible;
  }();

  var Accessibility = /*#__PURE__*/function () {
    function Accessibility() {
      _classCallCheck(this, Accessibility);
    }

    _createClass(Accessibility, null, [{
      key: "trapFocus",
      value:
      /**
       * Traps the focus in a particular container
       */
      function trapFocus(container, namespace) {
        this.listeners = this.listeners || {}; // We check if there is an element with the attribute "autofocus"

        var elementToFocus = container.querySelector('[autofocus]') || container;
        container.setAttribute('tabindex', '-1');
        elementToFocus.focus();

        this.listeners[namespace] = function (event) {
          if (container !== event.target && !container.contains(event.target)) {
            container.focus();
          }
        };

        document.addEventListener('focusin', this.listeners[namespace]);
      }
      /**
       * Removes the trap of focus in a particular container
       */

    }, {
      key: "removeTrapFocus",
      value: function removeTrapFocus(container, namespace) {
        if (container) {
          container.removeAttribute('tabindex');
        }

        if (this.listeners && this.listeners[namespace]) {
          document.removeEventListener('focusin', this.listeners[namespace]);
        }
      }
      /**
       * Reset any previous trap focus
       */

    }, {
      key: "clearTrapFocus",
      value: function clearTrapFocus() {
        for (var key in this.listeners) {
          if (this.listeners.hasOwnProperty(key)) {
            document.removeEventListener('focusin', this.listeners[key]);
          }
        }

        this.listeners = {};
      }
    }]);

    return Accessibility;
  }();

  var Drawer = /*#__PURE__*/function () {
    function Drawer(element) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Drawer);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.delegateBody = new domDelegate.Delegate(document.body);

      this.onOpen = options['onOpen'] || function () {};

      this.onClose = options['onClose'] || function () {};

      this.isOpen = false;
      this.direction = this.element.classList.contains('Drawer--fromLeft') ? 'fromLeft' : 'fromRight';
      this.pageOverlayElement = document.querySelector('.PageOverlay');

      this._attachListeners();
    }

    _createClass(Drawer, [{
      key: "destroy",
      value: function destroy() {
        this.delegateBody.off('click', "[data-action=\"open-drawer\"][data-drawer-id=\"".concat(this.element.id, "\"]"));
        this.delegateBody.off('click', "[data-action=\"close-drawer\"][data-drawer-id=\"".concat(this.element.id, "\"]"));
        window.removeEventListener('resize', this._calculateMaxHeightListener);
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this.isOpen ? this.close() : this.open();
      }
    }, {
      key: "open",
      value: function open(event) {
        if (this.isOpen) {
          return;
        } // Make sure that the search is closed whenever a drawer is opened


        this.element.dispatchEvent(new CustomEvent('search:close', {
          bubbles: true
        }));

        if (event) {
          event.preventDefault();
        }

        this.element.setAttribute('aria-hidden', 'false');

        this._calculateMaxHeight();

        document.documentElement.classList.add('no-scroll'); // This prevent the body to scroll on iOS. This is honestly a bit hacky, but until the platform supports "touch-action: none" like
        // other browsers, this is the only way to achieve that
        //disableBodyScroll(true, '[data-scrollable]');

        Accessibility.trapFocus(this.element, 'drawer');
        document.querySelector('#shopify-section-header').style.zIndex = ''; // Ugly hack
        // We attach an event to the page overlay to close it

        this.pageOverlayElement.classList.add('is-visible');
        this.pageOverlayElement.addEventListener('click', this._closeListener);
        this.isOpen = true;
        this.onOpen(); // Call the callback to allow other code to hook their logic

        return false;
      }
    }, {
      key: "close",
      value: function close(event) {
        if (!this.isOpen) {
          return;
        }

        if (event) {
          event.preventDefault();
        }

        this.element.setAttribute('aria-hidden', 'true');
        document.documentElement.classList.remove('no-scroll'); //disableBodyScroll(false, '[data-scrollable]');

        Accessibility.removeTrapFocus(this.element, 'drawer');
        this.pageOverlayElement.classList.remove('is-visible');
        this.pageOverlayElement.removeEventListener('click', this._closeListener);
        this.isOpen = false;
        this.onClose(); // Call the callback to allow other code to hook their logic
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._openListener = this.open.bind(this);
        this._closeListener = this.close.bind(this);
        this._calculateMaxHeightListener = this._calculateMaxHeight.bind(this);
        this.delegateBody.on('click', "[data-action=\"open-drawer\"][data-drawer-id=\"".concat(this.element.id, "\"]"), this._openListener);
        this.delegateBody.on('click', "[data-action=\"close-drawer\"][data-drawer-id=\"".concat(this.element.id, "\"]"), this._closeListener);
        this.element.addEventListener('keyup', this._handleKeyboard.bind(this));
        window.addEventListener('resize', this._calculateMaxHeightListener);
      }
      /**
       * Make sure that we force a max-height so that the drawer always stays on screen
       */

    }, {
      key: "_calculateMaxHeight",
      value: function _calculateMaxHeight() {
        this.element.style.maxHeight = window.innerHeight + 'px';
      }
    }, {
      key: "_handleKeyboard",
      value:
      /**
       * Handle a11y events
       */
      function _handleKeyboard(event) {
        if (this.isOpen && event.keyCode === 27) {
          this.close();
        }
      }
    }]);

    return Drawer;
  }();

  /**
   * Simple plugin that handles the loading bar actions
   *
   * This plugin uses delegate events so it's independent of the sections.
   */
  var LoadingBar = /*#__PURE__*/function () {
    function LoadingBar() {
      _classCallCheck(this, LoadingBar);

      this.element = document.querySelector('.LoadingBar');
      document.addEventListener('theme:loading:start', this._onLoadingStart.bind(this));
      document.addEventListener('theme:loading:end', this._onLoadingEnd.bind(this));
      this.element.addEventListener('transitionend', this._onTransitionEnd.bind(this));
    }

    _createClass(LoadingBar, [{
      key: "_onLoadingStart",
      value: function _onLoadingStart() {
        this.element.classList.add('is-visible');
        this.element.style.width = '40%';
      }
    }, {
      key: "_onLoadingEnd",
      value: function _onLoadingEnd() {
        this.element.style.width = '100%';
        this.element.classList.add('is-finished');
      }
    }, {
      key: "_onTransitionEnd",
      value: function _onTransitionEnd(event) {
        if (event.propertyName === 'width' && this.element.classList.contains('is-finished')) {
          this.element.classList.remove('is-visible');
          this.element.classList.remove('is-finished');
          this.element.style.width = '0';
        }
      }
    }]);

    return LoadingBar;
  }();

  var Modal = /*#__PURE__*/function () {
    function Modal() {
      _classCallCheck(this, Modal);

      this.domDelegate = new domDelegate.Delegate(document.body);
      this.activeModal = null; // Keep track of the active modal

      this.wasLocked = false;
      this.pageOverlayElement = document.querySelector('.PageOverlay');

      this._attachListeners();

      this._checkOpenByHash();
    }

    _createClass(Modal, [{
      key: "_attachListeners",
      value: function _attachListeners() {
        this._closeListener = this._closeModal.bind(this);
        this._handleKeyboardListener = this._handleKeyboard.bind(this);
        this.domDelegate.on('click', '[data-action="open-modal"]', this._openModalEvent.bind(this));
        this.domDelegate.on('click', '[data-action="close-modal"]', this._closeModal.bind(this));
      }
    }, {
      key: "_openModalEvent",
      value: function _openModalEvent(event, target) {
        this._openModal(document.getElementById(target.getAttribute('aria-controls')));

        event.preventDefault();
        event.stopPropagation();
      }
    }, {
      key: "_openModal",
      value: function _openModal(modal) {
        var _this = this;

        if (this.activeModal || !modal) {
          return; // If there is already an open modal, we return as we only allows one modal at a time
        }

        this.activeModal = modal;
        this.domDelegate.on('keyup', this._handleKeyboardListener);

        if (document.documentElement.classList.contains('no-scroll')) {
          this.wasLocked = true;
        }

        fastdom.mutate(function () {
          Accessibility.clearTrapFocus(); // Needed as the modal can be open on top of a popover

          _this._onTransitionEndedListener = _this._onTransitionEnded.bind(_this);

          _this.activeModal.addEventListener('transitionend', _this._onTransitionEndedListener);

          _this.activeModal.setAttribute('aria-hidden', 'false');

          document.documentElement.classList.add('no-scroll'); // If the modal is not a fullscreen modal, then we also display the overlay

          if (!_this.activeModal.classList.contains('Modal--fullScreen')) {
            _this.pageOverlayElement.classList.add('is-visible');

            _this.pageOverlayElement.addEventListener('click', _this._closeListener);
          }
        });
      }
    }, {
      key: "_closeModal",
      value: function _closeModal() {
        var _this2 = this;

        if (!this.activeModal) {
          return; // If no modal are open, we return immediately
        }

        this.activeModal.removeEventListener('keyup', this._handleKeyboardListener);
        this.domDelegate.off('keyup');
        fastdom.mutate(function () {
          // If the modal is of video type, we need to remove the iframe to stop the video
          if (_this2.activeModal.classList.contains('Modal--videoContent')) {
            _this2._resetVideoListener = _this2._resetVideo.bind(_this2);

            _this2.activeModal.addEventListener('transitionend', _this2._resetVideoListener);
          }

          Accessibility.removeTrapFocus(_this2.activeModal, 'modal');

          if (!_this2.activeModal.classList.contains('Modal--fullScreen')) {
            _this2.pageOverlayElement.classList.remove('is-visible');

            _this2.pageOverlayElement.removeEventListener('click', _this2._closeListener);
          }

          _this2.activeModal.setAttribute('aria-hidden', 'true');

          _this2.activeModal = null;

          if (!_this2.wasLocked) {
            document.documentElement.classList.remove('no-scroll');
          }
        });
      }
    }, {
      key: "_onTransitionEnded",
      value: function _onTransitionEnded(event) {
        if (event.propertyName !== 'visibility') {
          return;
        }

        Accessibility.trapFocus(this.activeModal, 'modal'); // Trap the focus first (as this trigger reflows)

        this.activeModal.removeEventListener('transitionend', this._onTransitionEndedListener);
      }
    }, {
      key: "_resetVideo",
      value: function _resetVideo(event) {
        if (event.propertyName !== 'visibility') {
          return; // We check the visibility property as it's the one LazySizes uses for triggering lazyloading
        }

        var iframe = event.target.querySelector('iframe');
        iframe.parentNode.innerHTML = "<iframe class=\"Image--lazyLoad\" data-src=".concat(iframe.getAttribute('data-src'), " frameborder=\"0\" allowfullscreen>");
        event.target.removeEventListener('transitionend', this._resetVideoListener);
      }
      /**
       * Some forms needs to be open inside a modal, and on page reload we must make sure to properly open the modal again
       */

    }, {
      key: "_checkOpenByHash",
      value: function _checkOpenByHash() {
        var hash = window.location.hash,
            modal = document.getElementById(hash.replace('#', ''));

        if (modal && modal.classList.contains('Modal')) {
          this._openModal(modal);
        }
      }
      /**
       * Handle a11y events
       */

    }, {
      key: "_handleKeyboard",
      value: function _handleKeyboard(event) {
        if (null !== this.activeModal && event.keyCode === 27) {
          this._closeModal();
        }
      }
    }]);

    return Modal;
  }();

  var Popover = /*#__PURE__*/function () {
    function Popover(element, options) {
      _classCallCheck(this, Popover);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.activator = options['activator'] || document.querySelector("[aria-controls=\"".concat(element.getAttribute('id'), "\"]"));
      this.preferredPosition = options['preferredPosition'] || 'bottom';
      this.preferredAlignment = options['preferredAlignment'] || undefined;
      this.threshold = options['threshold'] || 20;
      this.isOpen = false;

      this.onValueChanged = options['onValueChanged'] || function () {};

      this.onOpen = options['onOpen'] || function () {};

      this.onClose = options['onClose'] || function () {};

      this.showOverlay = options['showOverlay'] === undefined ? true : options['showOverlay'];
      this.pageOverlayElement = document.querySelector('.PageOverlay');

      this._attachListeners();
    }

    _createClass(Popover, [{
      key: "destroy",
      value: function destroy() {
        this.element.removeEventListener('keyup', this._handleKeyboardListener);
        this.delegateElement.off('click');
        this.activator.removeEventListener('click', this._toggleListener);
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this.isOpen ? this.close() : this.open();
      }
    }, {
      key: "open",
      value: function open() {
        var _this = this;

        // Note: the additional check on the aria-controls is used here so that a given activator can be used on different
        //       popovers and be modified dynamically in JavaScript
        if (this.isOpen || this.activator.getAttribute('aria-controls') !== this.element.id) {
          return;
        }

        this.element.setAttribute('aria-hidden', 'false');
        this.activator.setAttribute('aria-expanded', 'true');
        disableBodyScroll(true, '[data-scrollable]');
        document.documentElement.classList.add('no-scroll'); // Prevent scrolling when popover is open

        if (Responsive.matchesBreakpoint('lap-and-up')) {
          document.body.addEventListener('click', this._clickOutsideListener);

          this._position();

          this.element.setAttribute('tabindex', '-1');
          this.element.addEventListener('transitionend', function () {
            _this.element.focus();
          }, {
            once: true
          });
        } else {
          this.element.removeAttribute('style');

          if (this.showOverlay) {
            this.pageOverlayElement.classList.add('is-visible');
            this.pageOverlayElement.addEventListener('click', this._closeListener);
          }
        }

        this.onOpen(this); // Call the callback to allow other code to hook their logic

        this.isOpen = true;
      }
    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        this.element.setAttribute('aria-hidden', 'true');
        this.activator.setAttribute('aria-expanded', 'false');
        disableBodyScroll(false, '[data-scrollable]');
        document.documentElement.classList.remove('no-scroll');

        if (Responsive.matchesBreakpoint('lap-and-up')) {
          document.body.removeEventListener('click', this._clickOutsideListener);
        } else if (this.showOverlay) {
          this.pageOverlayElement.classList.remove('is-visible');
          this.pageOverlayElement.removeEventListener('click', this._closeListener);
        }

        this.element.removeAttribute('tabindex');
        this.activator.focus();
        this.onClose(this); // Call the callback to allow other code to hook their logic

        this.isOpen = false;
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._handleKeyboardListener = this._handleKeyboard.bind(this);
        this._clickOutsideListener = this._clickOutside.bind(this);
        this._closeListener = this.close.bind(this);
        this._toggleListener = this.toggle.bind(this);
        this.element.addEventListener('keyup', this._handleKeyboardListener);
        this.activator.addEventListener('click', this._toggleListener);
        this.delegateElement.on('click', '[data-action="close-popover"]', this.close.bind(this));
        this.delegateElement.on('click', '[data-action="select-value"]', this._valueChanged.bind(this));

        if (this.element.hasAttribute('id')) {
          this.delegateElement.on('focusout', "#".concat(this.element.getAttribute('id')), this._onFocusOut.bind(this));
        }
      }
      /**
       * Whenever a value is selected, it can notify a callback so that the calling code can do its own logic in response
       * of the value change
       */

    }, {
      key: "_valueChanged",
      value: function _valueChanged(event) {
        Dom.getSiblings(event.target, '.is-selected').forEach(function (item) {
          return item.classList.remove('is-selected');
        });
        event.target.classList.add('is-selected'); // If there is a callback in option we call it with the value

        this.onValueChanged(event.target.getAttribute('data-value'), event.target, this.activator);
        this.close();
      }
    }, {
      key: "_onFocusOut",
      value: function _onFocusOut(event) {
        if (!this.element.contains(event.relatedTarget) && event.relatedTarget !== this.activator) {
          this.close();
        }
      }
      /**
       * Callback that is called to decide if we should close the popover when a click is captured outside
       */

    }, {
      key: "_clickOutside",
      value: function _clickOutside(event) {
        if (!event.target.closest('.Popover') && !event.target.closest('.Modal') && event.target !== this.activator && !this.activator.contains(event.target)) {
          this.close();
        }
      }
      /**
       * On desktop, we reposition the popover in JavaScript by doing some smart logic to detect the most appropriate area
       */

    }, {
      key: "_position",
      value: function _position() {
        var _this2 = this;

        var topPosition = 0,
            rightPosition = 0,
            position = '',
            alignment = '',
            threshold = this.threshold;
        fastdom.measure(function () {
          var windowHeight = window.innerHeight,
              activatorBoundingRect = _this2.activator.getBoundingClientRect(),
              halfHeight = windowHeight / 2;

          if (_this2.preferredPosition === 'bottom') {
            alignment = 'right';

            if (_this2.element.clientHeight <= windowHeight - (activatorBoundingRect.bottom + threshold) || windowHeight - activatorBoundingRect.bottom >= halfHeight) {
              position = 'bottom';
            } else {
              position = 'top';
            }
          } else if (_this2.preferredPosition === 'top') {
            alignment = 'right';

            if (_this2.element.clientHeight <= activatorBoundingRect.top - threshold || activatorBoundingRect.top >= halfHeight) {
              position = 'top';
            } else {
              position = 'bottom';
            }
          } else {
            position = 'left'; // Is there enough space to use the center alignment (which is preferred)?

            var halfElementHeight = _this2.element.clientHeight / 2;

            if (activatorBoundingRect.top >= halfElementHeight && windowHeight - activatorBoundingRect.bottom >= halfElementHeight) {
              alignment = 'center';
            } else if (windowHeight - activatorBoundingRect.bottom >= halfElementHeight) {
              alignment = 'bottom';
            } else {
              alignment = 'top';
            }
          }

          if (_this2.preferredAlignment) {
            alignment = _this2.preferredAlignment;
          }

          if (position === 'top') {
            topPosition = activatorBoundingRect.top - _this2.element.clientHeight - threshold;

            if (alignment === 'center') {
              rightPosition = window.innerWidth - activatorBoundingRect.right - _this2.element.clientWidth / 2 + 3;
            } else {
              rightPosition = window.innerWidth - activatorBoundingRect.right;
            }
          } else if (position === 'bottom') {
            topPosition = activatorBoundingRect.bottom + threshold;

            if (alignment === 'center') {
              rightPosition = window.innerWidth - activatorBoundingRect.right - _this2.element.clientWidth / 2 + 3;
            } else {
              rightPosition = window.innerWidth - activatorBoundingRect.right;
            }
          } else {
            rightPosition = window.innerWidth - activatorBoundingRect.left + threshold;

            if (alignment === 'center') {
              topPosition = activatorBoundingRect.top - _this2.element.clientHeight / 2 + _this2.activator.clientHeight / 2;
            } else if (alignment === 'top') {
              topPosition = activatorBoundingRect.bottom - _this2.element.clientHeight;
            } else {
              topPosition = activatorBoundingRect.top;
            }
          }
        });
        fastdom.mutate(function () {
          ['Popover--positionBottom', 'Popover--positionTop', 'Popover--positionCenter', 'Popover--alignTop', 'Popover--alignCenter', 'Popover--alignBottom'].map(function (item) {
            return _this2.element.classList.remove(item);
          });

          _this2.element.classList.add("Popover--position".concat(position.charAt(0).toUpperCase() + position.slice(1)));

          _this2.element.classList.add("Popover--align".concat(alignment.charAt(0).toUpperCase() + alignment.slice(1)));

          _this2.element.setAttribute('style', "top: ".concat(parseInt(topPosition), "px; right: ").concat(parseInt(rightPosition), "px;"));
        });
      }
      /**
       * Handle a11y events
       */

    }, {
      key: "_handleKeyboard",
      value: function _handleKeyboard(event) {
        if (this.isOpen && event.keyCode === 27) {
          this.close();
        }
      }
    }]);

    return Popover;
  }();

  /**
   * This class will coordinate all the transitions from the website
   */
  var PageTransition = /*#__PURE__*/function () {
    function PageTransition() {
      _classCallCheck(this, PageTransition);

      this.domDelegate = new domDelegate.Delegate(document.body);
      this.pageTransition = document.querySelector('.PageTransition');

      this._attachListeners();
    }

    _createClass(PageTransition, [{
      key: "_attachListeners",
      value: function _attachListeners() {
        this.domDelegate.on('click', 'a[href]:not([href^="#"]):not([href^="javascript:"]):not([href^="mailto:"]):not([href^="tel:"]):not([target="_blank"])', this._onPageUnload.bind(this));
      }
      /**
       * This callback captures click and transition from one page to another by doing a transition
       */

    }, {
      key: "_onPageUnload",
      value: function _onPageUnload(event, target) {
        var _this = this;

        if (event.defaultPrevented || event.ctrlKey || event.metaKey || !window.theme.showPageTransition || !this.pageTransition) {
          return;
        }

        event.preventDefault(); // Prevent the click to happen

        if (window.theme.showPageTransition && this.pageTransition) {
          var doTransition = function doTransition(event) {
            // Animation is finished, we can transition
            if (event.propertyName === 'opacity') {
              _this.pageTransition.removeEventListener('transitionend', doTransition);

              window.location.href = target.href;
            }
          };

          this.pageTransition.addEventListener('transitionend', doTransition);
          this.pageTransition.style.visibility = 'visible';
          this.pageTransition.style.opacity = '1';
        }
      }
    }], [{
      key: "getInstance",
      value: function getInstance() {
        if (!this.instance) {
          this.instance = new PageTransition();
        }

        return this.instance;
      }
    }]);

    return PageTransition;
  }();

  /**
   * Note: this was a feature that was added at the very end and couldn't do something much cleaner without rewriting large parts of the theme...
   */
  var ProductItemColorSwatch = /*#__PURE__*/function () {
    function ProductItemColorSwatch(element) {
      _classCallCheck(this, ProductItemColorSwatch);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.delegateElement.on('change', '.ColorSwatch__Radio', this._colorChanged.bind(this));
    }

    _createClass(ProductItemColorSwatch, [{
      key: "_colorChanged",
      value: function _colorChanged(event, target) {
        // We need to change the URL of the various links
        var productItem = target.closest('.ProductItem'),
        variantUrl = target.getAttribute('data-variant-url');
        productItem.querySelector('.ProductItem__ImageWrapper').setAttribute('href', variantUrl);
        productItem.querySelector('.ProductItem__Title > a').setAttribute('href', variantUrl); // If we have a custom image for the variant, we change it
        
        var originalImageElement = productItem.querySelector('.ProductItem__Image:not(.ProductItem__Image--alternate)');

        if (target.hasAttribute('data-image-url') && target.getAttribute('data-image-id') !== originalImageElement.getAttribute('data-image-id')) {
          var newImageElement = document.createElement('img');
          newImageElement.className = 'ProductItem__Image Image--fadeIn Image--lazyLoad';
          newImageElement.setAttribute('data-image-id', target.getAttribute('data-image-id'));
          newImageElement.setAttribute('data-src', target.getAttribute('data-image-url'));
          newImageElement.setAttribute('data-widths', target.getAttribute('data-image-widths'));
          newImageElement.setAttribute('data-sizes', 'auto'); // Replace the original node

          if (window.theme.productImageSize === 'natural') {
            originalImageElement.parentNode.style.paddingBottom = "".concat(100.0 / target.getAttribute('data-image-aspect-ratio'), "%");
          }

          originalImageElement.parentNode.style.setProperty('--aspect-ratio', target.getAttribute('data-image-aspect-ratio'));
          originalImageElement.parentNode.replaceChild(newImageElement, originalImageElement);
        }
      }
    }]);

    return ProductItemColorSwatch;
  }();

  var Image = /*#__PURE__*/function () {
    function Image() {
      _classCallCheck(this, Image);
    }

    _createClass(Image, null, [{
      key: "getSizedImageUrl",
      value:
      /**
       * Create a CDN URL (similar to the img_url filter in Liquid)
       */
      function getSizedImageUrl(src, size) {
        if (size === null) {
          return src;
        }

        if (size === 'master') {
          return src.replace(/http(s)?:/, '');
        }

        var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

        if (match) {
          var prefix = src.split(match[0]);
          var suffix = match[0];
          return (prefix[0] + '_' + size + suffix).replace(/http(s)?:/, '');
        } else {
          return null;
        }
      }
      /**
       * From a given set of desired sizes and a given image, filter out any unwanted sizes
       */

    }, {
      key: "getSupportedSizes",
      value: function getSupportedSizes(image, desiredSizes) {
        var supportedSizes = [],
            imageWidth = image['width'];
        desiredSizes.forEach(function (width) {
          if (imageWidth >= width) {
            supportedSizes.push(width);
          }
        });
        return supportedSizes;
      }
    }]);

    return Image;
  }();

  var ProductImageZoom = /*#__PURE__*/function () {
    function ProductImageZoom(element, slideshow) {
      _classCallCheck(this, ProductImageZoom);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.delegateRoot = new domDelegate.Delegate(document.body);
      this.slideshow = slideshow;

      this._attachListeners();
    }

    _createClass(ProductImageZoom, [{
      key: "destroy",
      value: function destroy() {
        this.delegateElement.off('click');
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="open-product-zoom"]', this._initPhotoSwipe.bind(this));
        this.delegateElement.on('click', '.Product__SlideItem--image', this._initPhotoSwipeFromImageClick.bind(this));
      }
      /**
       * To save performance, we only initialize PhotoSwipe when it's requested. All high resolution images
       * are also loaded only on demand. Also, please note that PhotoSwipe is always completely destroyed
       * whenever it is closed, so it stays super snappy
       */

    }, {
      key: "_initPhotoSwipe",
      value: function _initPhotoSwipe() {
        var images = [];
        this.slideshow.flickityInstance.cells.forEach(function (item) {
          if (item.element.classList.contains('Product__SlideItem--image')) {
            images.push(item.element.querySelector('img'));
          }
        });

        this._createPhotoSwipeInstance(this._createPhotoSwipeItemsFromImages(images), parseInt(this.slideshow.flickityInstance.selectedElement.getAttribute('data-image-media-position')));
      }
      /**
       * On desktop we do not have the dedicated small icon, instead the zoom is triggered when clicking directly on the image
       */

    }, {
      key: "_initPhotoSwipeFromImageClick",
      value: function _initPhotoSwipeFromImageClick(event, target) {
        // Opening this way is only available on desktop
        if (Responsive.matchesBreakpoint('pocket')) {
          return;
        }

        var images = Dom.nodeListToArray(this.element.querySelectorAll('.Product__SlideItem--image img'));

        this._createPhotoSwipeInstance(this._createPhotoSwipeItemsFromImages(images), parseInt(target.getAttribute('data-image-media-position')));
      }
      /**
       * Take a list of images and create a PhotoSwipe array. This is called whenever the gallery is initialized.
       */

    }, {
      key: "_createPhotoSwipeItemsFromImages",
      value: function _createPhotoSwipeItemsFromImages(images) {
        return images.map(function (image) {
          var maxWidth = parseInt(image.getAttribute('data-max-width')),
              maxHeight = parseInt(image.getAttribute('data-max-height')),
              maxDimension = Responsive.matchesBreakpoint('phone') ? 1200 : 1800,
              // 1200 is max size for mobile and 1800 for larger devices
          reduceFactor = 1.0;

          if (maxWidth >= maxHeight) {
            reduceFactor = Math.max(maxWidth / maxDimension, 1.0);
          } else {
            reduceFactor = Math.max(maxHeight / maxDimension, 1.0);
          }

          var requestedWidth = Math.floor(maxWidth / reduceFactor);
          var requestedHeight = Math.floor(maxHeight / reduceFactor);
          return {
            msrc: image.currentSrc || image.src,
            // For browser that supports srcset, currentSrc is the currently used image
            w: requestedWidth,
            h: requestedHeight,
            initialZoomLevel: 0.65,
            src: Image.getSizedImageUrl(image.getAttribute('data-original-src'), requestedWidth + 'x' + requestedHeight)
          };
        });
      }
      /**
       * Take a list of nodes containing all images and create a PhotoSwipe array. This is called
       * whenever the gallery is initialized.
       */

    }, {
      key: "_createPhotoSwipeInstance",
      value: function _createPhotoSwipeInstance(items, selectedImageIndex) {
        var _this = this;

        var photoswipeContainer = document.querySelector('.pswp');
        this.photoSwipeInstance = new PhotoSwipe(photoswipeContainer, false, items, {
          index: selectedImageIndex,
          showHideOpacity: true,
          showAnimationDuration: 500,
          loop: false,
          history: false,
          closeOnVerticalDrag: false,
          allowPanToNext: false,
          pinchToClose: false,
          errorMsg: '<p class="pswp__error-msg">' + window.languages.productImageLoadingError + '</p>',
          scaleMode: 'zoom',
          getDoubleTapZoom: function getDoubleTapZoom(isMouseClick, item) {
            if (isMouseClick) {
              return 1.6;
            } else {
              return item.initialZoomLevel < 0.7 ? 1 : 1.33;
            }
          },
          getThumbBoundsFn: function getThumbBoundsFn(index) {
            var thumbnail = _this.element.querySelector(".Product__Slideshow .Carousel__Cell[data-image-media-position=\"".concat(parseInt(index), "\"] img")),
                pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                rect = thumbnail.getBoundingClientRect();

            return {
              x: rect.left,
              y: rect.top + pageYScroll,
              w: rect.width
            };
          }
        }); // We need to patch PhotoSwipe update size to solve iOS 15 issue

        var originalUpdateSize = this.photoSwipeInstance.updateSize,
            lastWidth = null;

        this.photoSwipeInstance.updateSize = function () {
          if (lastWidth === null || lastWidth !== window.innerWidth) {
            originalUpdateSize(this, arguments);
          }

          lastWidth = window.innerWidth;
        };

        this.photoSwipeInstance.listen('beforeChange', this._onSlideChanged.bind(this));
        this.photoSwipeInstance.listen('destroy', this._destroyPhotoSwipe.bind(this));
        this.photoSwipeInstance.listen('doubleTap', this._onDoubleTap.bind(this));
        this.photoSwipeInstance.listen('initialZoomIn', this._onInitialZoomIn.bind(this));
        this.photoSwipeInstance.listen('initialZoomOut', this._onInitialZoomOut.bind(this));
        this.delegateRoot.on('pswpTap', '.pswp__scroll-wrap', this._onSingleTap.bind(this));
        this.delegateRoot.on('pswpTap', '.pswp__button--close', this.photoSwipeInstance.close);
        this.delegateRoot.on('pswpTap', '.pswp__button--prev', this.photoSwipeInstance.prev);
        this.delegateRoot.on('pswpTap', '.pswp__button--next', this.photoSwipeInstance.next);
        this.photoSwipeInstance.init();
      }
      /**
       * Update the nav
       */

    }, {
      key: "_onSlideChanged",
      value: function _onSlideChanged() {
        if (this.photoSwipeInstance.getCurrentIndex() === 0) {
          this.photoSwipeInstance.scrollWrap.querySelector('.pswp__button--prev').setAttribute('disabled', 'disabled');
        } else {
          this.photoSwipeInstance.scrollWrap.querySelector('.pswp__button--prev').removeAttribute('disabled');
        }

        if (this.photoSwipeInstance.getCurrentIndex() + 1 === this.photoSwipeInstance.options.getNumItemsFn()) {
          this.photoSwipeInstance.scrollWrap.querySelector('.pswp__button--next').setAttribute('disabled', 'disabled');
        } else {
          this.photoSwipeInstance.scrollWrap.querySelector('.pswp__button--next').removeAttribute('disabled');
        }
      }
      /**
       * This event is a bit different and is triggered when the user click somewhere. We use it do allow to zoom in and
       * zoom out in the image on desktop and use for the UI
       */

    }, {
      key: "_onSingleTap",
      value: function _onSingleTap(event) {
        if (!event.detail || event.detail.pointerType === 'mouse') {
          if (event.target.classList.contains('pswp__img')) {
            this.photoSwipeInstance.toggleDesktopZoom(event.detail.releasePoint);
          }
        } else {
          if (event.target.classList.contains('pswp__button')) {
            return;
          }

          event.target.closest('.pswp').querySelector('.pswp__ui').classList.toggle('pswp__ui--hidden');
        }
      }
    }, {
      key: "_onDoubleTap",
      value: function _onDoubleTap(point) {
        var initialZoomLevel = this.photoSwipeInstance.currItem.initialZoomLevel;

        if (this.photoSwipeInstance.getZoomLevel() !== initialZoomLevel) {
          this.photoSwipeInstance.zoomTo(initialZoomLevel, point, 333);
        } else {
          this.photoSwipeInstance.zoomTo(initialZoomLevel < 0.7 ? 1 : 1.33, point, 333);
        }
      }
    }, {
      key: "_onInitialZoomIn",
      value: function _onInitialZoomIn() {
        document.querySelector('.pswp__ui').classList.remove('pswp__ui--hidden');
      }
    }, {
      key: "_onInitialZoomOut",
      value: function _onInitialZoomOut() {
        document.querySelector('.pswp__ui').classList.add('pswp__ui--hidden');
      }
      /**
       * PhotoSwipe instance is automatically destroyed for us when it's closed. What we need to do is simply re-set
       * our in-memory instance to null and our own events
       */

    }, {
      key: "_destroyPhotoSwipe",
      value: function _destroyPhotoSwipe() {
        this.delegateRoot.off('pswpTap');
        this.photoSwipeInstance = null;
      }
    }]);

    return ProductImageZoom;
  }();

  var ProductModel = /*#__PURE__*/function () {
    function ProductModel(element, stackProductImages) {
      _classCallCheck(this, ProductModel);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.delegateRoot = new domDelegate.Delegate(document.documentElement);
      this.stackProductImages = stackProductImages;

      this._attachListeners();

      var stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = 'https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui.css';
      document.head.appendChild(stylesheet);
      window.Shopify.loadFeatures([{
        name: 'model-viewer-ui',
        version: '1.0',
        onLoad: this._setupModelViewerUI.bind(this)
      }, {
        name: 'shopify-xr',
        version: '1.0'
      }]);
    }

    _createClass(ProductModel, [{
      key: "destroy",
      value: function destroy() {}
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        var _this = this;

        this.element.querySelector('model-viewer').addEventListener('shopify_model_viewer_ui_toggle_play', function () {
          _this.element.dispatchEvent(new CustomEvent('model:played', {
            bubbles: true
          }));
        });
        this.element.querySelector('model-viewer').addEventListener('shopify_model_viewer_ui_toggle_pause', function () {
          _this.element.dispatchEvent(new CustomEvent('model:paused', {
            bubbles: true
          }));
        });
      }
    }, {
      key: "hasBeenSelected",
      value: function hasBeenSelected() {
        // As per guidelines, we only need to autoplay when it's not a touch device
        if (Responsive.matchesBreakpoint('supports-hover')) {
          this.modelUi.play();
        }
      }
    }, {
      key: "hasBeenDeselected",
      value: function hasBeenDeselected() {
        // In all cases, we just turn it off
        this.modelUi.pause();
      }
    }, {
      key: "_setupModelViewerUI",
      value: function _setupModelViewerUI() {
        this.modelElement = this.element.querySelector('model-viewer');
        this.modelUi = new window.Shopify.ModelViewerUI(this.modelElement);
      }
    }]);

    return ProductModel;
  }();

  var ProductReviews = /*#__PURE__*/function () {
    function ProductReviews(container) {
      _classCallCheck(this, ProductReviews);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.delegateElement.on('click', '.spr-summary-actions-newreview', this._onNewReviewClicked.bind(this)); // Extending Shopify Reviews is a bit manual, but let's do it!

      window.SPRCallbacks = {};
      window.SPRCallbacks.onFormSuccess = this._onFormSuccess.bind(this);
      window.SPRCallbacks.onReviewsLoad = this._onReviewsLoad.bind(this);
    }

    _createClass(ProductReviews, [{
      key: "destroy",
      value: function destroy() {
        this.delegateElement.off();
      }
    }, {
      key: "_updatePagination",
      value: function _updatePagination(event, target) {
        // Unfortunately, we have to use this ugly jQuery style stuff
        SPR.$(target).data('page', parseInt(target.getAttribute('data-page')) + 1);
      }
    }, {
      key: "_onFormSuccess",
      value: function _onFormSuccess() {
        var formSuccess = this.element.querySelector('.spr-form-message-success');
        window.scrollTo(0, formSuccess.offsetTop - 45);
      }
    }, {
      key: "_onReviewsLoad",
      value: function _onReviewsLoad() {
        // We want to move "spr-pagination-next" before the "new review" button in the "spr-summary-actions" div
        var sprSummaryActions = this.element.querySelector('.spr-summary-actions'),
            previousSprPaginationNext = sprSummaryActions.querySelector('.spr-pagination-next'),
            sprPaginationNext = this.element.querySelector('.spr-pagination .spr-pagination-next');

        if (previousSprPaginationNext) {
          previousSprPaginationNext.remove();
        }

        if (sprPaginationNext) {
          sprSummaryActions.insertBefore(sprPaginationNext, sprSummaryActions.firstChild);
        }
      }
    }, {
      key: "_onNewReviewClicked",
      value: function _onNewReviewClicked(event, target) {
        target.style.display = 'none';

        if (target.previousElementSibling) {
          target.previousElementSibling.style.display = 'none';
        }
      }
    }]);

    return ProductReviews;
  }();

  /**
   * This implementation allows to serialize a form
   */
  var Form = /*#__PURE__*/function () {
    function Form() {
      _classCallCheck(this, Form);
    }

    _createClass(Form, null, [{
      key: "serialize",
      value: function serialize(form) {
        function stringKey(key, value) {
          var beginBracket = key.lastIndexOf('[');

          if (beginBracket === -1) {
            var _hash = {};
            _hash[key] = value;
            return _hash;
          }

          var newKey = key.substr(0, beginBracket);
          var newValue = {};
          newValue[key.substring(beginBracket + 1, key.length - 1)] = value;
          return stringKey(newKey, newValue);
        }

        var hash = {};

        for (var i = 0, len = form.elements.length; i < len; i++) {
          var formElement = form.elements[i];

          if (formElement.name === '' || formElement.disabled) {
            continue;
          }

          if (formElement.name && !formElement.disabled && (formElement.checked || /select|textarea/i.test(formElement.nodeName) || /hidden|text|search|tel|url|email|password|datetime|date|month|week|time|datetime-local|number|range|color/i.test(formElement.type))) {
            var stringKeys = stringKey(formElement.name, formElement.value);
            hash = Form.extend(hash, stringKeys);
          }
        }

        return hash;
      }
    }, {
      key: "extend",
      value: function extend() {
        var extended = {};
        var i = 0; // Merge the object into the extended object

        var merge = function merge(obj) {
          for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
              // If property is an object, merge properties
              if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                extended[prop] = Form.extend(extended[prop], obj[prop]);
              } else {
                extended[prop] = obj[prop];
              }
            }
          }
        }; // Loop through each object and conduct a merge


        for (; i < arguments.length; i++) {
          merge(arguments[i]);
        }

        return extended;
      }
    }]);

    return Form;
  }();

  var Currency = /*#__PURE__*/function () {
    function Currency() {
      _classCallCheck(this, Currency);
    }

    _createClass(Currency, null, [{
      key: "formatMoney",
      value:
      /**
       * Format money values based on your shop currency settings
       *
       * @param  {Number|string} cents - value in cents or dollar amount e.g. 300 cents or 3.00 dollars
       * @param  {String} format - shop money_format setting
       * @return {String} value - formatted value
       */
      function formatMoney(cents, format) {
        if (typeof cents === 'string') {
          cents = cents.replace('.', '');
        }

        var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/,
            formatString = format || '${{amount}}';

        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }

        function formatWithDelimiters(number, precision, thousands, decimal) {
          precision = defaultTo(precision, 2);
          thousands = defaultTo(thousands, ',');
          decimal = defaultTo(decimal, '.');

          if (isNaN(number) || number == null) {
            return 0;
          }

          number = (number / 100.0).toFixed(precision);
          var parts = number.split('.'),
              dollarsAmount = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
              centsAmount = parts[1] ? decimal + parts[1] : '';
          return dollarsAmount + centsAmount;
        }

        var value = '';

        switch (formatString.match(placeholderRegex)[1]) {
          case 'amount':
            value = formatWithDelimiters(cents, 2);
            break;

          case 'amount_no_decimals':
            value = formatWithDelimiters(cents, 0);
            break;

          case 'amount_with_space_separator':
            value = formatWithDelimiters(cents, 2, ' ', '.');
            break;

          case 'amount_no_decimals_with_comma_separator':
            value = formatWithDelimiters(cents, 0, ',', '.');
            break;

          case 'amount_no_decimals_with_space_separator':
            value = formatWithDelimiters(cents, 0, ' ');
            break;

          case 'amount_with_comma_separator':
            value = formatWithDelimiters(cents, 2, '.', ',');
            break;
        }

        if (formatString.indexOf('with_comma_separator') !== -1) {
          return formatString.replace(placeholderRegex, value).replace(',00', '');
        } else {
          return formatString.replace(placeholderRegex, value).replace('.00', '');
        }
      }
    }]);

    return Currency;
  }();

  var VariantSelector = /*#__PURE__*/function () {
    function VariantSelector(element, parentProductVariants) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      _classCallCheck(this, VariantSelector);

      this.element = element;
      this.parentProductVariants = parentProductVariants;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.activator = options['activator'] || document.querySelector("[aria-controls=\"".concat(element.getAttribute('id'), "\"]"));

      this.onValueChangedCallback = options['onValueChanged'] || function () {};

      this.isOpen = false;
      this.pageOverlayElement = document.querySelector('.PageOverlay');
      this.variantChoiceList = Dom.nodeListToArray(this.element.querySelectorAll('.VariantSelector__Choice'));
      this.variantCarousel = new Carousel(this.element.querySelector('.VariantSelector__Carousel'), {
        onSelect: this._variantChanged.bind(this),
        onClick: this._variantSelected.bind(this)
      });

      this._attachListeners();
    }

    _createClass(VariantSelector, [{
      key: "destroy",
      value: function destroy() {
        this.element.removeEventListener('keyup', this._handleKeyboardListener);
        this.delegateElement.off('click');
        this.activator.removeEventListener('click', this._toggleListener);
        this.variantCarousel.destroy();
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this.isOpen ? this.close() : this.open();
      }
    }, {
      key: "open",
      value: function open() {
        if (this.isOpen) {
          return;
        }

        this.element.setAttribute('aria-hidden', 'false');
        this.activator.setAttribute('aria-expanded', 'true');
        Accessibility.trapFocus(this.element, 'variant-selector');
        document.documentElement.classList.add('no-scroll'); // Prevent scrolling when popover is open

        this.element.setAttribute('style', '');
        this.pageOverlayElement.classList.add('is-visible');
        this.pageOverlayElement.addEventListener('click', this._closeListener);
        this.isOpen = true;
      }
    }, {
      key: "close",
      value: function close() {
        if (!this.isOpen) {
          return;
        }

        this.element.setAttribute('aria-hidden', 'true');
        this.activator.setAttribute('aria-expanded', 'false');
        Accessibility.removeTrapFocus(this.element, 'variant-selector');
        document.documentElement.classList.remove('no-scroll');
        this.pageOverlayElement.classList.remove('is-visible');
        this.pageOverlayElement.removeEventListener('click', this._closeListener);
        this.isOpen = false;
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._handleKeyboardListener = this._handleKeyboard.bind(this);
        this._closeListener = this.close.bind(this);
        this._toggleListener = this.toggle.bind(this);
        this.element.addEventListener('keyup', this._handleKeyboardListener);
        this.activator.addEventListener('click', this._toggleListener);
        this.delegateElement.on('click', '[data-action="select-variant"]', this._onVariantSelect.bind(this));
        this.parentProductVariants.delegateElement.on('variant:changed', this._onVariantChanged.bind(this));
      }
      /**
       * Called when the variant is changed (but not yet selected)
       */

    }, {
      key: "_variantChanged",
      value: function _variantChanged(selectedIndex) {
        var activeChoice = this.variantChoiceList[selectedIndex];
        activeChoice.classList.add('is-selected');
        Dom.getSiblings(activeChoice, '.is-selected').forEach(function (item) {
          return item.classList.remove('is-selected');
        });
      }
      /**
       * Called when a variant is clicked or selected
       */

    }, {
      key: "_variantSelected",
      value: function _variantSelected(cellElement, cellIndex) {
        if (this.variantCarousel.getSelectedIndex() === cellIndex) {
          this.onValueChangedCallback(cellElement.getAttribute('data-option-value'), cellElement, this.activator);
          this.close();
        } else {
          this.variantCarousel.selectCell(cellIndex);
        }
      }
    }, {
      key: "_onVariantChanged",
      value: function _onVariantChanged(event) {
        var _this = this;

        var selectedVariant = event.detail.variant,
            imageWrapperElements = this.element.querySelectorAll('.VariantSelector__ImageWrapper'),
            found = false;
        Dom.nodeListToArray(imageWrapperElements).forEach(function (image) {
          var colorPosition = parseInt(image.parentElement.getAttribute('data-option-position')) - 1,
              combinationExcludedColor = '';
          selectedVariant.options.forEach(function (optionValue, index) {
            if (index !== colorPosition) {
              combinationExcludedColor += optionValue;
            }
          });

          if (image.getAttribute('data-variant-title') === combinationExcludedColor) {
            image.setAttribute('aria-hidden', 'false');
            found = true;
          } else {
            image.setAttribute('aria-hidden', 'true');
          }
        });

        if (!found) {
          imageWrapperElements.children[0].setAttribute('aria-hidden', 'false');
        }

        var foundColorIndex = 0;
        Dom.nodeListToArray(this.element.querySelectorAll('.VariantSelector__ChoicePrice')).forEach(function (priceElement, index) {
          var colorPosition = parseInt(priceElement.getAttribute('data-color-position')) - 1;

          _this.parentProductVariants.productData['variants'].forEach(function (variant) {
            var matchOptionsExcludedColor = true;
            variant['options'].forEach(function (option, index) {
              if (index !== colorPosition) {
                if (variant['options'][index] !== selectedVariant['options'][index]) {
                  matchOptionsExcludedColor = false;
                }
              }
            });

            if (matchOptionsExcludedColor && variant['options'][colorPosition] === selectedVariant['options'][colorPosition]) {
              if (foundColorIndex++ === index) {
                priceElement.innerHTML = "<span class=\"Heading Text--subdued\">".concat(Currency.formatMoney(variant['price'], window.theme.moneyFormat), "</span>");
              }
            }
          });
        });
      }
      /**
       * Called when the button "choose this variant" is explicitly clicked
       */

    }, {
      key: "_onVariantSelect",
      value: function _onVariantSelect() {
        var selectedCell = this.variantCarousel.flickityInstance.selectedCell.element;
        this.onValueChangedCallback(selectedCell.getAttribute('data-option-value'), selectedCell, this.activator);
        this.close();
      }
      /**
       * Handle a11y events
       */

    }, {
      key: "_handleKeyboard",
      value: function _handleKeyboard(event) {
        if (this.isOpen && event.keyCode === 27) {
          this.close();
        }
      }
    }]);

    return VariantSelector;
  }();

  /**
   * Handle the store availability management. The parameter is the div that will hold the content. The function
   * "updateWithVariant" must be called whenever the variant is changed.
   */

  var StoreAvailability = /*#__PURE__*/function () {
    function StoreAvailability(element, productTitle) {
      _classCallCheck(this, StoreAvailability);

      this.element = element;
      this.productTitle = productTitle;
      this.existingDrawers = {};
    }

    _createClass(StoreAvailability, [{
      key: "updateWithVariant",
      value: function updateWithVariant(variant) {
        if (!this.element) {
          return; // If the element to inject the store availability does not exist, we return immediately
        } // If the variant is null (for instance unavailable variant), we clear the container


        if (!variant) {
          this.element.textContent = '';
          return;
        } // If we have a new variant we render the section


        this._renderAvailabilitySection(variant['id']);
      }
    }, {
      key: "_renderAvailabilitySection",
      value: function _renderAvailabilitySection(id) {
        var _this = this;

        // First we clear the previous content
        this.element.innerHTML = ''; // If there is already an element with the given modal we remove it first

        var availabilityModal = document.getElementById("StoreAvailabilityModal-".concat(id));

        if (availabilityModal) {
          availabilityModal.remove();
        }

        if (this.existingDrawers["StoreAvailabilityModal-".concat(id)]) {
          this.existingDrawers["StoreAvailabilityModal-".concat(id)].destroy();
          delete this.existingDrawers["StoreAvailabilityModal-".concat(id)];
        }

        return fetch("".concat(window.routes.rootUrlWithoutSlash, "/variants/").concat(id, "?section_id=store-availability")).then(function (response) {
          return response.text().then(function (content) {
            _this.element.innerHTML = content;
            _this.element.innerHTML = _this.element.firstElementChild.innerHTML; // The product title is not rendered so we have to render it manually

            var productTitle = _this.element.querySelector('.store-availabilities-modal__product-title');

            if (productTitle) {
              productTitle.textContent = _this.productTitle;
            } // In order for our modal system to work we have to append the modal to the body instead


            var availabilityModal = document.getElementById("StoreAvailabilityModal-".concat(id));
            document.body.appendChild(availabilityModal); // Create the drawer

            _this.existingDrawers["StoreAvailabilityModal-".concat(id)] = new Drawer(availabilityModal);
          });
        });
      }
    }]);

    return StoreAvailability;
  }();

  var ProductVariants = /*#__PURE__*/function () {
    function ProductVariants(container, options) {
      var _this = this;

      _classCallCheck(this, ProductVariants);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = options;
      var jsonData = JSON.parse(this.element.querySelector('[data-product-json]').innerHTML);
      this.productData = jsonData['product'];
      this.variantsInventories = jsonData['inventories'] || {};
      this.masterSelector = this.element.querySelector("#product-select-".concat(this.productData['id'])); // We init value with the first selected variant

      this.productData['variants'].forEach(function (variant) {
        if (variant['id'] === jsonData['selected_variant_id']) {
          _this.currentVariant = variant;
          _this.option1 = variant['option1'];
          _this.option2 = variant['option2'];
          _this.option3 = variant['option3'];
        }
      });
      this.storeAvailability = new StoreAvailability(this.element.querySelector('.ProductMeta__StoreAvailabilityContainer'), this.productData['title']);
      this.storeAvailability.updateWithVariant(this.currentVariant);

      this._attachListeners();

      this._createSelectors();
    }

    _createClass(ProductVariants, [{
      key: "destroy",
      value: function destroy() {
        this.delegateElement.off('click');
        this.formPopovers.forEach(function (popover) {
          return popover.destroy();
        });
        this.formVariantSelectors.forEach(function (selector) {
          return selector.destroy();
        });
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="add-to-cart"]', this._addToCart.bind(this));
        this.delegateElement.on('click', '[data-action="decrease-quantity"]', this._decreaseQuantity.bind(this));
        this.delegateElement.on('click', '[data-action="increase-quantity"]', this._increaseQuantity.bind(this));
        this.delegateElement.on('change', '[name="quantity"]', this._validateQuantity.bind(this)); // Hook when a radio button change

        this.delegateElement.on('change', '.ProductForm__Option [type="radio"]', this._onOptionChanged.bind(this));
      }
      /**
       * Selectors can either be popovers or dedicated variant selectors. We therefore pre-create them all here
       */

    }, {
      key: "_createSelectors",
      value: function _createSelectors() {
        var _this2 = this;

        // Create the instances for each selector
        this.formPopovers = [];
        this.formVariantSelectors = [];
        Dom.nodeListToArray(this.element.querySelectorAll('.OptionSelector')).forEach(function (item) {
          var popover = new Popover(item, {
            preferredPosition: 'left',
            onValueChanged: _this2._onOptionChanged.bind(_this2)
          });

          _this2.formPopovers.push(popover);
        });
        Dom.nodeListToArray(this.element.querySelectorAll('.VariantSelector')).forEach(function (item) {
          var variantSelector = new VariantSelector(item, _this2, {
            onValueChanged: _this2._onOptionChanged.bind(_this2)
          });

          _this2.formVariantSelectors.push(variantSelector);
        });
        var r = JSON.parse(this.element.querySelector('[data-product-json]').innerHTML);
        this.linkOptionSelectors(r.product, '.Product__InfoWrapper');
      }
      /**
       * ---------------------------------------------------------------------------------------------------
       * CODE THAT HANDLE VARIANT CHANGES IN THE FRONT
       *
       * Please note that this code is highly dependant on the markup and classes, so make sure to NOT
       * edit this code
       * ---------------------------------------------------------------------------------------------------
       */

      /**
       * This callback is called whenever the variant changes and allows to update data about the active variant
       */

    }, {
      key: "_onVariantChanged",
      value: function _onVariantChanged(previousVariant, newVariant) {
        // 1st: the prices
        this._updateProductPrices(newVariant, previousVariant); // 2nd: update inventory


        this._updateInventory(newVariant, previousVariant); // 3rd: update SKU


        this._updateSku(newVariant, previousVariant); // 4th: update the price measurement


        this._updateUnitPrice(newVariant, previousVariant); // 5th: the add to cart button

 
        this._updateAddToCartButton(newVariant, previousVariant); // 6th: store availability


        this.storeAvailability.updateWithVariant(newVariant); // Finally, we send an event so that other system could hook and do their own logic

        this.element.dispatchEvent(new CustomEvent('variant:changed', {
          bubbles: true,
          detail: {
            variant: newVariant,
            previousVariant: previousVariant
          }
        }));
      }
    },{
      key: "updateOptionsInSelector",
      value: function (selectorIndex,r) {
        if($('.ProductForm__Variants').hasClass('template-has-dropdown')){
          switch (selectorIndex) {
            case 0:
              var key = 'root';
              if(jQuery('.OptionSelector.Popover[data-option="0"]').length > 0){
                var selector = jQuery('.OptionSelector.Popover[data-option="0"]');
              }else{
                var selector = jQuery('.ProductForm__Option[data-option="0"]');
              }
              break;
            case 1:
              if(jQuery('.OptionSelector.Popover[data-option="0"]').length > 0){
                var key = jQuery('.OptionSelector.Popover[data-option="0"] .Popover__Value.is-selected').data('value');
              }else{
                var key = jQuery('.ProductForm__Option[data-option="0"] input[type=radio]:checked').val();
              }
              if(jQuery('.OptionSelector.Popover[data-option="1"]').length > 0){
                var selector = jQuery('.OptionSelector.Popover[data-option="1"]');
              }else{
                var selector = jQuery('.ProductForm__Option[data-option="1"]');
              }
              break;
            case 2:
              if(jQuery('.OptionSelector.Popover[data-option="0"]').length > 0){
                var key = jQuery('.OptionSelector.Popover[data-option="0"] .Popover__Value.is-selected').data('value');
              }else{
                var key = jQuery('.ProductForm__Option[data-option="0"] input[type=radio]:checked').val();
              } 
              if(jQuery('.OptionSelector.Popover[data-option="1"]').length > 0){
                key += ' / ' + jQuery('.OptionSelector.Popover[data-option="1"] .Popover__Value.is-selected').data('value');;
              }else{
                key += ' / ' + jQuery('.ProductForm__Option[data-option="1"] input[type=radio]:checked').val();
              }
              if(jQuery('.OptionSelector.Popover[data-option="2"]').length > 0){
                var selector = jQuery('.OptionSelector.Popover[data-option="2"]');
              }else{
                var selector = jQuery('.ProductForm__Option[data-option="2"]');
              }
          }
          var initialValue = selector.val();
          var availableOptions = Shopify.optionsMap[key];
          var newvariant = this.currentVariant;
          jQuery('.ProductForm__Option[data-option= "' + selectorIndex + '"] .js-swatch-element .HorizontalList__Item').each(function() {
            var optionval = $(this).find('input').val(),
                newoptionval = newvariant.options[selectorIndex];
            if(optionval == newoptionval){
              if(newvariant.available){
                $(this).removeClass("soldout_variant");
                $(this).find('input').attr('aria-label', optionval);
              }else{
                $(this).addClass("soldout_variant");
                $(this).find('input').attr('aria-label', 'sold out');
              }
            }else{
              if($.inArray($(this).attr("data-value"), availableOptions) !== -1){
                $(this).removeClass("soldout_variant");
                $(this).find('input').attr('aria-label', optionval);
              }else{
                $(this).addClass("soldout_variant");
                $(this).find('input').attr('aria-label', 'sold out');
              }
            }
          });
          jQuery('.OptionSelector.Popover[data-option= "' + selectorIndex + '"] .Popover__Value').each(function() {
            var optionval = $(this).find('input').val(),
                newoptionval = newvariant.options[selectorIndex];
            if(optionval == newoptionval){
              if(newvariant.available){
                $(this).removeClass("soldout_variant");
                $(this).find('input').attr('aria-label', optionval);
              }else{
                $(this).addClass("soldout_variant");
                $(this).find('input').attr('aria-label', 'sold out');
              }
            }else{
              if($.inArray($(this).attr("data-value"), availableOptions) !== -1){
                $(this).removeClass("soldout_variant");
                $(this).find('input').attr('aria-label', optionval);
              }else{
                $(this).addClass("soldout_variant");
                $(this).find('input').attr('aria-label', 'sold out');
              }
            }
          });
        } else{
          switch (selectorIndex) {
            case 0:
              var key = 'root';
              var selector = jQuery('.ProductForm__Option[data-option="0"]');
              break;
            case 1:
              var key = jQuery('.ProductForm__Option[data-option="0"] input[type=radio]:checked').val();
              var selector = jQuery('.ProductForm__Option[data-option="1"]');
              break;
            case 2:
              var key = jQuery('.ProductForm__Option[data-option="0"] input[type=radio]:checked').val();  
              key += ' / ' + jQuery('.ProductForm__Option[data-option="1"] input[type=radio]:checked').val();
              var selector = jQuery('.ProductForm__Option[data-option="2"]');
          }
          var initialValue = selector.val();
          var availableOptions = Shopify.optionsMap[key];
          var newvariant = this.currentVariant;
          jQuery('.ProductForm__Option[data-option= "' + selectorIndex + '"] .js-swatch-element .HorizontalList__Item').each(function() {
            var optionval = $(this).find('input').val(),
                newoptionval = newvariant.options[selectorIndex];
            if(optionval == newoptionval){
              if(newvariant.available){
                $(this).removeClass("soldout_variant");
                $(this).find('input').attr('aria-label', optionval);
              }else{
                $(this).addClass("soldout_variant");
                $(this).find('input').attr('aria-label', 'sold out');
                console.log('if');
              }
            }else{
              if($.inArray($(this).attr("data-value"), availableOptions) !== -1){
                $(this).removeClass("soldout_variant");
                $(this).find('input').attr('aria-label', optionval);
              }else{
                $(this).addClass("soldout_variant");
                $(this).find('input').attr('aria-label', 'sold out');
                console.log('else');
              }
            }
          });
        }

      }
    }, {
      key: "linkOptionSelectors",
      value: function (product, r) {
        // Building our mapping object.
        Shopify.optionsMap = {};
        for (var i=0; i < product.variants.length; i++) {
          var variant = product.variants[i];
            // Gathering values for the 1st drop-down.
            Shopify.optionsMap['root'] = Shopify.optionsMap['root'] || [];
            Shopify.optionsMap['root'].push(variant.option1);
            Shopify.optionsMap['root'] = Shopify.uniq(Shopify.optionsMap['root']);
            // Gathering values for the 2nd drop-down.
          if (variant.available) {
            if (product.options.length > 1) {
              var key = variant.option1;
              Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
              Shopify.optionsMap[key].push(variant.option2);
              Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
            }
            // Gathering values for the 3rd drop-down.
            if (product.options.length === 3) {
              var key = variant.option1 + ' / ' + variant.option2;
              Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
              Shopify.optionsMap[key].push(variant.option3);
              Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
            }
          }
        }
        var _this0 = this;
        // Update options right away.
        this.updateOptionsInSelector(0,r);
        if (product.options.length > 1) this.updateOptionsInSelector(1,r);
        if (product.options.length === 3) this.updateOptionsInSelector(2,r);

        // When there is an update in the first dropdown.
        $(document).on('change',''+ r + ' .ProductForm__Option[data-option="0"] input[type=radio]',function(){
          _this0.updateOptionsInSelector(0,r);
          _this0.updateOptionsInSelector(1,r);
          if (product.options.length === 3) _this0.updateOptionsInSelector(2,r);
          return true;
        });
        // When there is an update in the second dropdown.
        $(document).on('change',''+ r + ' .ProductForm__Option[data-option="1"] input[type=radio]',function(){
          _this0.updateOptionsInSelector(0,r);
          _this0.updateOptionsInSelector(1,r);
          if (product.options.length === 3) _this0.updateOptionsInSelector(2,r);
          return true;
        });

        $(document).on('click', '.OptionSelector.Popover[data-option="0"] .Popover__Value',function(){
          _this0.updateOptionsInSelector(0,r);
          _this0.updateOptionsInSelector(1,r);
          if (product.options.length === 3) _this0.updateOptionsInSelector(2,r);
          return true;
        });
        $(document).on('click', '.OptionSelector.Popover[data-option="1"] .Popover__Value',function(){
          _this0.updateOptionsInSelector(0,r);
          _this0.updateOptionsInSelector(1,r);
          if (product.options.length === 3) _this0.updateOptionsInSelector(2,r);
          return true;
        });
      }
    },{
	  /**
       * Update the prices (optionally showing compare at price)
       */
      key: "_updateProductPrices",
      value: function _updateProductPrices(newVariant, previousVariant) {
        var productMetaPrices = this.element.querySelector('.ProductMeta__PriceList'),
            currencyFormat = window.theme.currencyCodeEnabled ? window.theme.moneyWithCurrencyFormat : window.theme.moneyFormat;

        if (!productMetaPrices) {
          return;
        }

        if (!newVariant) {
          productMetaPrices.style.display = 'none';
        } else {
          if (previousVariant && previousVariant['price'] === newVariant['price'] && previousVariant['compare_at_price'] === newVariant['compare_at_price']) {
            return; // The price do not have changed so let's return to avoid changing the DOM for nothing
          }

          productMetaPrices.innerHTML = '';

          if (newVariant['compare_at_price'] > newVariant['price']) {
            productMetaPrices.innerHTML += "<span class=\"ProductMeta__Price Price Price--highlight Text--subdued u-h4\" data-money-convertible>".concat(Currency.formatMoney(newVariant['price'], currencyFormat), "</span>");
            productMetaPrices.innerHTML += "<span class=\"ProductMeta__Price Price Price--compareAt Text--subdued u-h4\" data-money-convertible>".concat(Currency.formatMoney(newVariant['compare_at_price'], currencyFormat), "</span>");
          } else {
            productMetaPrices.innerHTML += "<span class=\"ProductMeta__Price Price Text--subdued u-h4\" data-money-convertible>".concat(Currency.formatMoney(newVariant['price'], currencyFormat), "</span>");
          }

          productMetaPrices.style.display = '';
        }
      }
      /**
       * Update the inventory (if needed)
       */

    }, {
      key: "_updateInventory",
      value: function _updateInventory(newVariant) {
        if (!this.options['showInventoryQuantity']) {
          return;
        }

        var productFormInventory = this.element.querySelector('.ProductForm__Inventory'),
            variantInventory = newVariant ? this.variantsInventories[newVariant['id']] : null;

        if (!newVariant || null === variantInventory['inventory_management'] || variantInventory['inventory_quantity'] <= 0 || this.options['inventoryQuantityThreshold'] > 0 && variantInventory['inventory_quantity'] > this.options['inventoryQuantityThreshold']) {
          productFormInventory.style.display = 'none';
        } else {
          productFormInventory.innerHTML = variantInventory['inventory_message'];
          productFormInventory.style.display = '';
        }
      }
      /**
       * Update the SKU
       */

    }, {
      key: "_updateSku",
      value: function _updateSku(newVariant) {
        if (!this.options['showSku'] || !newVariant) {
          return;
        }

        var productSkuNumber = this.element.querySelector('.ProductMeta__SkuNumber');

        if (productSkuNumber && newVariant['sku']) {
          productSkuNumber.innerText = newVariant['sku'];
        }
      }
      /**
       * Update the unit price
       */

    }, {
      key: "_updateUnitPrice",
      value: function _updateUnitPrice(newVariant) {
        if (!newVariant) {
          return;
        }

        var unitPriceMeasurement = this.element.querySelector('.ProductMeta__UnitPriceMeasurement');

        if (!unitPriceMeasurement) {
          return;
        }

        if (!newVariant.hasOwnProperty('unit_price')) {
          unitPriceMeasurement.style.display = 'none';
          return;
        }

        unitPriceMeasurement.style.display = 'block';
        unitPriceMeasurement.querySelector('.UnitPriceMeasurement__Price').innerHTML = Currency.formatMoney(newVariant['unit_price'], window.theme.moneyFormat);
        unitPriceMeasurement.querySelector('.UnitPriceMeasurement__ReferenceUnit').textContent = newVariant['unit_price_measurement']['reference_unit'];
        var unitPriceReferenceValue = unitPriceMeasurement.querySelector('.UnitPriceMeasurement__ReferenceValue');
        unitPriceReferenceValue.textContent = newVariant['unit_price_measurement']['reference_value'];
        unitPriceReferenceValue.style.display = newVariant['unit_price_measurement']['reference_value'] === 1 ? 'none' : 'inline';
      }
      /**
       * Update the add to cart
       */

    }, {
      key: "_updateAddToCartButton",
      value: function _updateAddToCartButton(newVariant) {
        var addToCartButton = this.element.querySelector('.ProductForm__AddToCart'),
            addToCartButtonblodclone = this.element.querySelector('.ProductForm__AddToCart.bold_clone'),
            shopifyPaymentButton = this.element.querySelector('.shopify-payment-button');
        if (addToCartButton) {
          addToCartButton.classList.remove('Button--secondary');
          addToCartButton.classList.remove('Button--primary');
          if(addToCartButtonblodclone != null){
            addToCartButtonblodclone.classList.remove('Button--secondary');
            addToCartButtonblodclone.classList.remove('Button--primary');
          }

          if (!newVariant) {
            addToCartButton.setAttribute('disabled', 'disabled');
            addToCartButton.removeAttribute('data-action');
            addToCartButton.classList.add('Button--secondary');
            addToCartButton.innerHTML = window.languages.productFormUnavailable;
            if(addToCartButtonblodclone != null){
              addToCartButtonblodclone.setAttribute('disabled', 'disabled');
              addToCartButtonblodclone.removeAttribute('data-action');
              addToCartButtonblodclone.classList.add('Button--secondary');
              addToCartButtonblodclone.innerHTML = window.languages.productFormUnavailable;
            }
            let gettext = $('.shipping-notification').data('soldout');
            $('.shipping-notification .text').text(gettext);
            $('.shipping-notification').addClass('red');
          } else {
            if (newVariant['available']) {
              addToCartButton.removeAttribute('disabled');
              addToCartButton.classList.add(addToCartButton.getAttribute('data-use-primary-button') === 'true' ? 'Button--primary' : 'Button--secondary');
              addToCartButton.setAttribute('data-action', 'add-to-cart');
              if(addToCartButtonblodclone != null){
                addToCartButtonblodclone.removeAttribute('disabled');
                addToCartButtonblodclone.classList.add(addToCartButton.getAttribute('data-use-primary-button') === 'true' ? 'Button--primary' : 'Button--secondary');
                addToCartButtonblodclone.setAttribute('data-action', 'add-to-cart');
              }
              if (undefined === this.options['showPriceInButton'] || this.options['showPriceInButton']) {
                addToCartButton.innerHTML = "\n            <span>".concat(window.languages.productFormAddToCart, "</span>\n            <span class=\"Button__SeparatorDot\"></span>\n            <span data-money-convertible>").concat(Currency.formatMoney(newVariant['price'], window.theme.moneyFormat), "</span>\n          ");
                if(addToCartButtonblodclone != null){
                	addToCartButtonblodclone.innerHTML = "\n            <span>".concat(window.languages.productFormAddToCart, "</span>\n            <span class=\"Button__SeparatorDot\"></span>\n            <span data-money-convertible>").concat(Currency.formatMoney(newVariant['price'], window.theme.moneyFormat), "</span>\n          ");
                }
              } else {
                addToCartButton.innerHTML = "<span>".concat(window.languages.productFormAddToCart, "</span>");
                if(addToCartButtonblodclone != null){
                  addToCartButtonblodclone.innerHTML = "<span>".concat(window.languages.productFormAddToCart, "</span>");
                }
              }
              $('.shipping-notification').removeClass('red');
              if(newVariant.inventory_policy == 'deny'){
                let gettext = $('.shipping-notification').data('available');
                let getthreshold = $('.ProductForm__Inventory').data('threshold');
                if(newVariant.inventory_quantity <= getthreshold){
                  $('.shipping-notification .text').text('Only '+newVariant.inventory_quantity+' items left');
                }else{
                  $('.shipping-notification .text').text(gettext);
                }
              }else{
                let gettext = $('.shipping-notification').data('available');
                $('.shipping-notification .text').text(gettext);
              }
            } else {
              addToCartButton.setAttribute('disabled', 'disabled');
              addToCartButton.classList.add('Button--secondary');
              addToCartButton.removeAttribute('data-action');
              addToCartButton.innerHTML = window.languages.productFormSoldOut;
              if(addToCartButtonblodclone != null){
                addToCartButtonblodclone.setAttribute('disabled', 'disabled');
                addToCartButtonblodclone.classList.add('Button--secondary');
                addToCartButtonblodclone.removeAttribute('data-action');
                addToCartButtonblodclone.innerHTML = window.languages.productFormSoldOut;
              }
              let gettext = $('.shipping-notification').data('soldout');
              $('.shipping-notification .text').text(gettext);
            $('.shipping-notification').addClass('red');
            }
          }
        }

        if (this.options['showPaymentButton'] && shopifyPaymentButton) {
          if (!newVariant || !newVariant['available']) {
            shopifyPaymentButton.style.display = 'none';
          } else {
            shopifyPaymentButton.style.display = 'block';
          }
        }
      }
      /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE VARIANT CHANGES
       * ---------------------------------------------------------------------------------------------------
       */

      /**
       * Whenever an option is changed, this code fetch the corresponding active variant
       */

    }, {
      key: "_onOptionChanged",
      value: function _onOptionChanged(newValue, target, activator) {
        // We change the value associated with the activator, and check if we have a color swatch
        if (activator) {
          this['option' + target.getAttribute('data-option-position')] = newValue;
          activator.querySelector('.ProductForm__SelectedValue').innerHTML = newValue;
        } else {
          this['option' + target.getAttribute('data-option-position')] = target.value;
          var selectedValue = target.closest('.ProductForm__Option').querySelector('.ProductForm__SelectedValue');

          if (selectedValue) {
            selectedValue.innerHTML = target.value;
          }
        } // Finally, we get the new variant


        var previousVariant = this.currentVariant;
        this.currentVariant = this._getCurrentVariantFromOptions();

        this._onVariantChanged(previousVariant, this.currentVariant);

        if (this.currentVariant) {
          if (this.options['enableHistoryState']) {
            this._updateHistoryState(this.currentVariant);
          } // We need to modify the hidden select that contain the id attribute as well


          this.masterSelector.querySelector('[selected]').removeAttribute('selected');
          this.masterSelector.querySelector("[value=\"".concat(this.currentVariant['id'], "\"]")).setAttribute('selected', 'selected');
          this.masterSelector.dispatchEvent(new Event('change', {
            bubbles: true
          }));
        }
      }
      /**
       * Get the active variant based on the options
       */

    }, {
      key: "_getCurrentVariantFromOptions",
      value: function _getCurrentVariantFromOptions() {
        var _this3 = this;

        var found = false;
        this.productData['variants'].forEach(function (variant) {
          if (variant['option1'] === _this3.option1 && variant['option2'] === _this3.option2 && variant['option3'] === _this3.option3) {
            found = variant;
          }
        });
        return found || null;
      }
      /**
       * Update the history state for browsers that support it
       */

    }, {
      key: "_updateHistoryState",
      value: function _updateHistoryState(variant) {
        if (!history.replaceState) {
          return;
        }

        var newUrl = "".concat(window.location.protocol, "//").concat(window.location.host).concat(window.location.pathname, "?variant=").concat(variant.id);
        window.history.replaceState({
          path: newUrl
        }, '', newUrl);
      }
      /**
       * ---------------------------------------------------------------------------------------------------
       * INTERNAL CODE THAT HANDLE PRODUCT ADD TO CART
       * ---------------------------------------------------------------------------------------------------
       */

    }, {
      key: "_addToCart",
      value: function _addToCart(event) {
        var _this4 = this;

        if (!this.options['useAjaxCart']) {
          return; // When using a cart type of page, we just simply redirect to the cart page
        }

        event.preventDefault(); // Prevent form to be submitted

        var addToCartButton = this.element.querySelector('.ProductForm__AddToCart'); // First, we switch the status of the button

        addToCartButton.setAttribute('disabled', 'disabled');
        document.dispatchEvent(new CustomEvent('theme:loading:start')); // Then we add the product in Ajax

        var formElement = this.element.querySelector('form[action*="/cart/add"]');
        fetch("".concat(window.routes.cartAddUrl, ".js"), {
          body: JSON.stringify(Form.serialize(formElement)),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          }
        }).then(function (response) {
          document.dispatchEvent(new CustomEvent('theme:loading:end'));
          var quantityElement = formElement.querySelector('[name="quantity"]');

          if (response.ok) {
            addToCartButton.removeAttribute('disabled'); // We simply trigger an event so the mini-cart can re-render

            _this4.element.dispatchEvent(new CustomEvent('product:added', {
              bubbles: true,
              detail: {
                variant: _this4.currentVariant,
                quantity: quantityElement ? parseInt(quantityElement.value) : 1
              }
            }));
          } else {
            response.json().then(function (content) {
              var errorMessageElement = document.createElement('span');
              errorMessageElement.className = 'ProductForm__Error Alert Alert--error';
              errorMessageElement.innerHTML = content['description'];
              addToCartButton.removeAttribute('disabled');
              addToCartButton.insertAdjacentElement('afterend', errorMessageElement);
              setTimeout(function () {
                errorMessageElement.remove();
              }, 2500);
            });
          }
        });
        event.preventDefault();
      }
      /**
       * ---------------------------------------------------------------------------------------------------
       * OTHER
       * ---------------------------------------------------------------------------------------------------
       */

      /**
       * When using the quantity selector, this can be used to decrease the quantity (be ensuring it won't be lower than 1)
       */

    }, {
      key: "_decreaseQuantity",
      value: function _decreaseQuantity(event, target) {
        target.nextElementSibling.value = Math.max(parseInt(target.nextElementSibling.value) - 1, 1);
      }
      /**
       * When using the quantity selector, this can be used to increase the quantity
       */

    }, {
      key: "_increaseQuantity",
      value: function _increaseQuantity(event, target) {
        target.previousElementSibling.value = parseInt(target.previousElementSibling.value) + 1;
      }
      /**
       * Make sure the quantity does not go below when manually changed
       */

    }, {
      key: "_validateQuantity",
      value: function _validateQuantity(event, target) {
        target.value = Math.max(parseInt(target.value) || 1, 1);
      }
    }]);

    return ProductVariants;
  }();

  var ProductVideo = /*#__PURE__*/function () {
    function ProductVideo(element, stackProductImages, enableVideoLooping) {
      _classCallCheck(this, ProductVideo);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.stackProductImages = stackProductImages;
      this.enableVideoLooping = enableVideoLooping;
      this.player = null;
      switch (this.element.getAttribute('data-media-type')) {
        case 'video':
          var stylesheet = document.createElement('link');
          stylesheet.rel = 'stylesheet';
          stylesheet.href = 'https://cdn.shopify.com/shopifycloud/shopify-plyr/v1.0/shopify-plyr.css';
          document.head.appendChild(stylesheet);
          window.Shopify.loadFeatures([{
            name: 'video-ui',
            version: '1.0',
            onLoad: this._setupHtml5Video.bind(this)
          }]);
          break;

        case 'external_video':
          this._setupExternalVideo();
          break;
      }
    }

    _createClass(ProductVideo, [{
      key: "destroy",
      value: function destroy() {
        if (this.player) {
          this.player.destroy(); // Both Plyr and YouTube API use the same name
        }
      }
    }, {
      key: "hasBeenSelected",
      value: function hasBeenSelected() {
        // As per guidelines, we only need to autoplay when it's not a touch device
        if (Responsive.matchesBreakpoint('supports-hover')) {
          this.play();
        }
      }
    }, {
      key: "hasBeenDeselected",
      value: function hasBeenDeselected() {
        this.pause();
      }
    }, {
      key: "play",
      value: function play() {
        switch (this.element.getAttribute('data-media-type')) {
          case 'video':
            this.player.play();
            break;

          case 'external_video':
            this.player.playVideo();
            break;
        }
      }
    }, {
      key: "pause",
      value: function pause() {
        switch (this.element.getAttribute('data-media-type')) {
          case 'video':
            this.player.pause();
            break;

          case 'external_video':
            this.player.pauseVideo();
            break;
        }
      }
    }, {
      key: "_setupHtml5Video",
      value: function _setupHtml5Video() {
        var _this = this;

        this.player = new Shopify.Plyr(this.element.querySelector('video'), {
          controls: ['play', 'progress', 'mute', 'volume', 'play-large', 'fullscreen'],
          loop: {
            active: this.enableVideoLooping
          },
          hideControlsOnPause: true,
          clickToPlay: true,
          iconUrl: '//cdn.shopify.com/shopifycloud/shopify-plyr/v1.0/shopify-plyr.svg',
          tooltips: {
            controls: false,
            seek: true
          }
        });
        this.player.on('play', function () {
          _this.element.dispatchEvent(new CustomEvent('video:played', {
            bubbles: true
          }));
        });
        this.player.on('pause', function () {
          _this.element.dispatchEvent(new CustomEvent('video:paused', {
            bubbles: true
          }));
        });
      }
    }, {
      key: "_setupExternalVideo",
      value: function _setupExternalVideo() {
        if (this.element.getAttribute('data-video-host') === 'youtube') {
          this._loadYouTubeScript().then(this._setupYouTubePlayer.bind(this));
        }
      }
    }, {
      key: "_setupYouTubePlayer",
      value: function _setupYouTubePlayer() {
        var _this2 = this;

        var playerLoadingInterval = setInterval(function () {
          if (window.YT !== undefined && window.YT.Player !== undefined) {
            _this2.player = new YT.Player(_this2.element.querySelector('iframe'), {
              videoId: _this2.element.getAttribute('data-video-id'),
              events: {
                onStateChange: function onStateChange(event) {
                  if (event.data === window.YT.PlayerState.PLAYING) {
                    _this2.element.dispatchEvent(new CustomEvent('video:played', {
                      bubbles: true
                    }));
                  } else if (event.data === YT.PlayerState.PAUSED) {
                    _this2.element.dispatchEvent(new CustomEvent('video:paused', {
                      bubbles: true
                    }));
                  }

                  if (event.data === window.YT.PlayerState.ENDED && _this2.enableVideoLooping) {
                    event.target.seekTo(0);
                  }
                }
              }
            });
            clearInterval(playerLoadingInterval);
          }
        }, 50);
      }
    }, {
      key: "_loadYouTubeScript",
      value: function _loadYouTubeScript() {
        return new Promise(function (resolve, reject) {
          var script = document.createElement('script');
          document.body.appendChild(script);
          script.onload = resolve;
          script.onerror = reject;
          script.async = true;
          script.src = '//www.youtube.com/iframe_api';
        });
      }
    }]);

    return ProductVideo;
  }();

  /**
   * This code has been heavily inspired by this: https://kitaitimakoto.gitlab.io/scrollspy-example/index.en.html#whatsthis
   */
  var ScrollSpy = /*#__PURE__*/function () {
    function ScrollSpy(container, elementsToSpy, observerOptions) {
      var _this = this;

      _classCallCheck(this, ScrollSpy);

      this.container = container;
      this.targets = [];
      this.targetIndices = {};
      this.indicesInViewPort = [];
      this.observer = new IntersectionObserver(this._onIntersectionChange.bind(this), observerOptions);
      elementsToSpy.forEach(function (elementToSpy, index) {
        _this.targets.push(elementToSpy);

        _this.targetIndices[elementToSpy.id] = index;

        _this.observer.observe(elementToSpy);
      });
    }

    _createClass(ScrollSpy, [{
      key: "destroy",
      value: function destroy() {
        this.observer.disconnect();
      }
      /**
       * Called whenever there is a change of visibility
       */

    }, {
      key: "_onIntersectionChange",
      value: function _onIntersectionChange(changes) {
        var oldTargetIndex = this.indicesInViewPort[0] || 0;

        for (var i = changes.length - 1; i >= 0; i--) {
          this._updateIndicesInViewPort(changes[i], oldTargetIndex);
        } // Firefox generates duplicates so make sure to remove


        this.indicesInViewPort = this.indicesInViewPort.filter(function (value, index, self) {
          return self.indexOf(value) === index;
        });

        if (this.indicesInViewPort.length === 0 || oldTargetIndex === this.indicesInViewPort[0]) {
          return;
        }

        var event = new CustomEvent('scrollspy:target:changed', {
          detail: {
            newTarget: this.targets[this.indicesInViewPort[0]],
            oldTarget: this.targets[oldTargetIndex]
          }
        });
        this.container.dispatchEvent(event);
      }
      /**
       * Update indices visible in the view port
       */

    }, {
      key: "_updateIndicesInViewPort",
      value: function _updateIndicesInViewPort(change, oldTargetIndex) {
        var index = this.targetIndices[change.target.id];

        if (change.intersectionRatio === 0) {
          var indexInViewPort = this.indicesInViewPort.indexOf(index);

          if (indexInViewPort !== -1) {
            this.indicesInViewPort.splice(indexInViewPort, 1);
          }
        } else {
          if (index < oldTargetIndex) {
            this.indicesInViewPort.unshift(index);
          } else if (index > this.indicesInViewPort[this.indicesInViewPort.length - 1]) {
            this.indicesInViewPort.push(index);
          } else {
            this.indicesInViewPort.push(index);
            this.indicesInViewPort.sort();
          }
        }
      }
    }]);

    return ScrollSpy;
  }();

  var SearchBar = /*#__PURE__*/function () {
    function SearchBar() {
      _classCallCheck(this, SearchBar);

      this.documentDelegate = new domDelegate.Delegate(document.body);
      this.searchElement = document.getElementById('Search');
      this.searchInputElement = this.searchElement.querySelector('[name="q"]');
      this.searchResultsElement = this.searchElement.querySelector('.Search__Results');
      this.queryMap = {};
      this.isOpen = false;
      this.pageOverlayElement = document.querySelector('.PageOverlay');

      this._attachListeners();
    }

    _createClass(SearchBar, [{
      key: "destroy",
      value: function destroy() {
        this.searchInputElement.removeEventListener('keydown', this._preventSubmissionListener);
        this.searchInputElement.removeEventListener('input', this._onInputListener);
        this.documentDelegate.off();
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._preventSubmissionListener = this._preventSubmission.bind(this);
        this._onInputListener = this._debounce(this._onInput.bind(this), 250);
        this.searchInputElement.addEventListener('keydown', this._preventSubmissionListener);
        this.searchInputElement.addEventListener('input', this._onInputListener);
        this.documentDelegate.on('click', '[data-action="toggle-search"]', this._toggleSearch.bind(this));
        this.documentDelegate.on('click', '[data-action="open-search"]', this._openSearch.bind(this));
        this.documentDelegate.on('click', '[data-action="close-search"]', this._closeSearch.bind(this));
        this.documentDelegate.on('search:close', this._closeSearch.bind(this)); // Allow for third-party elements to close the bar
      }
      /**
       * Toggle the search
       */

    }, {
      key: "_toggleSearch",
      value: function _toggleSearch(event) {
        if (this.isOpen) {
          this._closeSearch(event);
        } else {
          this._openSearch(event);
        }

        event.preventDefault();
      }
      /**
       * Open the search form and trap focus
       */

    }, {
      key: "_openSearch",
      value: function _openSearch() {
        var _this = this;

        this.searchElement.setAttribute('aria-hidden', 'false');
        document.documentElement.classList.add('no-scroll');
        Accessibility.trapFocus(this.searchElement, 'search', this.searchElement.querySelector('[name="q"]'));

        var onFocusListener = function onFocusListener() {
          _this.searchInputElement.focus();

          _this.searchElement.removeEventListener('transitionend', onFocusListener);
        };

        this.searchElement.addEventListener('transitionend', onFocusListener);
        this.isOpen = true;
        this.pageOverlayElement.classList.add('is-visible');
        document.querySelector('#shopify-section-header').style.zIndex = 10;
      }
      /**
       * Close the search form and clear focus
       */

    }, {
      key: "_closeSearch",
      value: function _closeSearch() {
        var _this2 = this;

        this.searchElement.setAttribute('aria-hidden', 'true');
        document.documentElement.classList.remove('no-scroll');
        Accessibility.removeTrapFocus(this.searchElement, 'search');
        this.isOpen = false;

        var onTransitionEnd = function onTransitionEnd(event) {
          if (event.propertyName === 'visibility') {
            document.querySelector('#shopify-section-header').style.zIndex = '';

            _this2.pageOverlayElement.removeEventListener('transitionend', onTransitionEnd);
          }
        };

        this.pageOverlayElement.addEventListener('transitionend', onTransitionEnd);
        this.pageOverlayElement.classList.remove('is-visible');
      }
      /**
       * In order to prevent an odd UX where hitting the enter always choose the product results, if the search is set to product + something else,
       * then we disable submission using enter key
       */

    }, {
      key: "_preventSubmission",
      value: function _preventSubmission(event) {
        if (event.keyCode === 13 && window.theme.searchMode !== 'product') {
          event.preventDefault();
        }
      }
      /**
       * This is called when the user has stopped typing (after debounce delay)
       */

    }, {
      key: "_onInput",
      value: function _onInput(event) {
        var _this3 = this;

        if (event.keyCode === 13) {
          return;
        } // Unfortunately, fetch does not support as of today cancelling a request. As a consequence what we do is that we manually
        // keep track of sent requests, and only use the results of the last one


        this.lastInputValue = event.target.value;

        if (this.lastInputValue === '') {
          this._resetSearch();

          return;
        }

        var queryOptions = {
          method: 'GET',
          credentials: 'same-origin'
        };
        var queries = [fetch("".concat(window.routes.searchUrl, "?section_id=predictive-search&q=").concat(encodeURIComponent(this.lastInputValue), "*&type=product"), queryOptions)];

        if (window.theme.searchMode !== 'product') {
          queries.push(fetch("".concat(window.routes.searchUrl, "?section_id=predictive-search&q=").concat(encodeURIComponent(this.lastInputValue), "*&type=").concat(window.theme.searchMode.replace('product,', '')), queryOptions));
        }
        
        var customCheck = ("".concat(window.routes.searchUrl, "?section_id=predictive-search&q=").concat(encodeURIComponent(this.lastInputValue), "*&type=").concat(window.theme.searchMode.replace('product,', ''))),
            customCheck = customCheck.replace('section_id=predictive-search&','')
        $('.custom_redirect').attr('href',customCheck)   //Added By A
        
        this.queryMap[this.lastInputValue] = true;
        document.dispatchEvent(new CustomEvent('theme:loading:start'));
        Promise.all(queries).then(function (responses) {
          // If we receive the result for a query that is not the last one, we simply do not process the result
          if (_this3.lastInputValue !== event.target.value) {
            return;
          }

          delete _this3.queryMap[event.target.value];
          Promise.all(responses.map(function (response) {
            return response.text();
          })).then(function (contents) {
            // If we have only one content then we only have product, otherwise we have products and articles
            if (window.theme.searchMode === 'product') {
              _this3.searchResultsElement.innerHTML = contents[0];
            } else {
              _this3.searchResultsElement.innerHTML = "<div class=\"PageLayout PageLayout--breakLap\">\n              <div class=\"PageLayout__Section\">".concat(contents[0], "</div>\n              <div class=\"PageLayout__Section PageLayout__Section--secondary\">").concat(contents[1], "</div>\n            </div>");
            }

            _this3.searchResultsElement.setAttribute('aria-hidden', 'false');
           
          });
          document.dispatchEvent(new CustomEvent('theme:loading:end'));
        });
      }
    }, {
      key: "_resetSearch",
      value: function _resetSearch() {
        if (window.theme.searchMode === 'product') {
          this.searchResultsElement.innerHTML = '';
        } else {
          this.searchResultsElement.innerHTML = "<div class=\"PageLayout PageLayout--breakLap\">\n              <div class=\"PageLayout__Section\"></div>\n              <div class=\"PageLayout__Section PageLayout__Section--secondary\"></div>\n            </div>";
        }

        this.searchResultsElement.setAttribute('aria-hidden', 'true');
        document.dispatchEvent(new CustomEvent('theme:loading:end')); // Just in case
      }
      /**
       * Simple function that allows to debounce
       */

    }, {
      key: "_debounce",
      value: function _debounce(fn, delay) {
        var _this4 = this;

        var timer = null;
        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          clearTimeout(timer);
          timer = setTimeout(function () {
            fn.apply(_this4, args);
          }, delay);
        };
      }
    }]);

    return SearchBar;
  }();

  var CountrySelector = /*#__PURE__*/function () {
    function CountrySelector(countrySelect, provinceSelect) {
      _classCallCheck(this, CountrySelector);

      this.countrySelect = countrySelect;
      this.provinceSelect = provinceSelect;

      if (this.countrySelect && this.provinceSelect) {
        this._attachListeners();

        this._initSelectors();
      }
    }

    _createClass(CountrySelector, [{
      key: "destroy",
      value: function destroy() {
        if (this.countrySelect) {
          this.countrySelect.removeEventListener('change', this._onCountryChangedListener);
        }
      }
    }, {
      key: "_initSelectors",
      value: function _initSelectors() {
        // Check first the default value of country
        var defaultCountry = this.countrySelect.getAttribute('data-default');

        if (defaultCountry) {
          for (var i = 0; i !== this.countrySelect.options.length; ++i) {
            if (this.countrySelect.options[i].text === defaultCountry) {
              this.countrySelect.selectedIndex = i;
              break;
            }
          }
        } else {
          this.countrySelect.selectedIndex = 0;
        }

        var event = new Event('change', {
          bubbles: true
        });
        this.countrySelect.dispatchEvent(event); // Then the province

        var defaultProvince = this.provinceSelect.getAttribute('data-default');

        if (defaultProvince) {
          for (var _i = 0; _i !== this.provinceSelect.options.length; ++_i) {
            if (this.provinceSelect.options[_i].text === defaultProvince) {
              this.provinceSelect.selectedIndex = _i;
              break;
            }
          }
        }
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._onCountryChangedListener = this._onCountryChanged.bind(this);
        this.countrySelect.addEventListener('change', this._onCountryChangedListener);
      }
    }, {
      key: "_onCountryChanged",
      value: function _onCountryChanged() {
        var _this = this;

        var selectedOption = this.countrySelect.options[this.countrySelect.selectedIndex],
            provinces = JSON.parse(selectedOption.getAttribute('data-provinces') || '[]'); // First remove all options

        this.provinceSelect.innerHTML = '';

        if (provinces.length === 0) {
          this.provinceSelect.parentNode.style.display = 'none';
          return;
        } // We need to build the provinces array


        provinces.forEach(function (data) {
          _this.provinceSelect.options.add(new Option(data[1], data[0]));
        });
        this.provinceSelect.parentNode.style.display = 'block';
      }
    }]);

    return CountrySelector;
  }();

  var ShippingEstimator = /*#__PURE__*/function () {
    function ShippingEstimator(element) {
      _classCallCheck(this, ShippingEstimator);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.countrySelector = new CountrySelector(this.element.querySelector('[name="country"]'), this.element.querySelector('[name="province"]'));

      this._attachListeners();
    }

    _createClass(ShippingEstimator, [{
      key: "onUnload",
      value: function onUnload() {
        this.delegateElement.off('click');
        this.countrySelector.destroy();
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '.ShippingEstimator__Submit', this._fetchRates.bind(this));
      }
    }, {
      key: "_fetchRates",
      value: function _fetchRates() {
        var _this = this;

        var country = this.element.querySelector('[name="country"]').value,
            province = this.element.querySelector('[name="province"]').value,
            zip = this.element.querySelector('[name="zip"]').value;
        document.dispatchEvent(new CustomEvent('theme:loading:start'));
        fetch("".concat(window.routes.cartUrl, "/shipping_rates.json?shipping_address[zip]=").concat(zip, "&shipping_address[country]=").concat(country, "&shipping_address[province]=").concat(province), {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (response) {
          response.json().then(function (result) {
            document.dispatchEvent(new CustomEvent('theme:loading:end'));

            var resultsContainer = _this.element.querySelector('.ShippingEstimator__Results'),
                errorContainer = _this.element.querySelector('.ShippingEstimator__Error');

            if (response.ok) {
              var shippingRates = result['shipping_rates'];

              if (shippingRates.length === 0) {
                resultsContainer.innerHTML = "<p>".concat(window.languages.shippingEstimatorNoResults, "</p>");
              } else {
                var html = '';

                if (shippingRates.length === 1) {
                  html += "<p>".concat(window.languages.shippingEstimatorOneResult, "</p><ul>");
                } else {
                  html += "<p>".concat(window.languages.shippingEstimatorMoreResults.replace('{{count}}', shippingRates.length), "</p><ul>");
                }

                shippingRates.forEach(function (item) {
                  html += "<li>".concat(item['name'], ": ").concat(Currency.formatMoney(item['price'], window.theme.moneyFormat), "</li>");
                });
                html += '</ul>';
                resultsContainer.firstElementChild.innerHTML = html;
              }

              TweenLite.fromTo(resultsContainer.firstElementChild, 0.6, {
                autoAlpha: 0,
                y: -15
              }, {
                autoAlpha: 1,
                y: 0,
                delay: 0.35
              });
              errorContainer.style.display = 'none';
              resultsContainer.style.display = 'block';
              Animation.slideDown(resultsContainer);
            } else {
              var errorHtml = '';
              Object.keys(result).forEach(function (key) {
                errorHtml += "<li class=\"Alert__ErrorItem\" role=\"alert\" aria-live=\"Assertive\">".concat(key, " ").concat(result[key], "</li>");
              });
              errorContainer.innerHTML = "<ul class=\"Alert__ErrorList\">".concat(errorHtml, "</ul>");
              resultsContainer.style.display = 'none';
              errorContainer.style.display = 'block';
            }
          });
        });
      }
    }]);

    return ShippingEstimator;
  }();

  var AddressesSection = function AddressesSection() {
    var _this = this;

    _classCallCheck(this, AddressesSection);

    this.countrySelectors = [];
    Dom.nodeListToArray(document.querySelectorAll('.Modal--address')).forEach(function (modal) {
      _this.countrySelectors.push(new CountrySelector(modal.querySelector('[name="address[country]"]'), modal.querySelector('[name="address[province]"]')));
    });
  };

  var ArticleList = /*#__PURE__*/function () {
    function ArticleList(container) {
      var _this = this;

      _classCallCheck(this, ArticleList);

      this.element = container;

      if (window.theme.showElementStaggering) {
        this.timeline = new TimelineLite({
          delay: window.theme.showPageTransition ? 0.5 : 0
        });
        this.intersectionObserver = new IntersectionObserver(this._reveal.bind(this));
        Dom.nodeListToArray(this.element.querySelectorAll('.ArticleItem')).forEach(function (item) {
          _this.intersectionObserver.observe(item);
        });
      }
    }

    _createClass(ArticleList, [{
      key: "onUnload",
      value: function onUnload() {
        if (window.theme.showElementStaggering) {
          this.intersectionObserver.disconnect();
          this.timeline.kill();
        }
      }
    }, {
      key: "_reveal",
      value: function _reveal(results) {
        var _this2 = this;

        var toReveal = [];
        results.forEach(function (result) {
          if (result.isIntersecting || result.intersectionRatio > 0) {
            // isIntersecting does not exist on Samsung Android browser
            toReveal.push(result.target);

            _this2.intersectionObserver.unobserve(result.target);
          }
        });

        if (toReveal.length === 0) {
          return;
        }

        this.timeline.staggerFromTo(toReveal, 0.45, {
          autoAlpha: 0,
          y: 30
        }, {
          autoAlpha: 1,
          y: 0
        }, 0.2);
      }
    }]);

    return ArticleList;
  }();

  var ArticleSection = /*#__PURE__*/function () {
    function ArticleSection(container) {
      var _this = this;

      _classCallCheck(this, ArticleSection);

      this.element = container;
      this.toolbarElement = this.element.querySelector('.ArticleToolbar');
      this.articleNavElement = this.element.querySelector('.ArticleNav');
      var articleImageElement = this.element.querySelector('.Article__Image');

      if (articleImageElement && window.matchMedia('(-moz-touch-enabled: 0), (hover: hover)').matches) {
        this.parallaxInstance = new Rellax('.Article__Image', {
          speed: -7,
          center: false,
          round: true
        });
      }

      if (window.theme.showElementStaggering) {
        this.timeline = new TimelineLite({
          delay: window.theme.showPageTransition ? 0.5 : 0
        });
        this.intersectionObserver = new IntersectionObserver(this._reveal.bind(this));
        Dom.nodeListToArray(this.element.querySelectorAll('.ArticleItem')).forEach(function (item) {
          _this.intersectionObserver.observe(item);
        });
      }

      this._attachListeners();
    }

    _createClass(ArticleSection, [{
      key: "onUnload",
      value: function onUnload() {
        if (this.parallaxInstance) {
          this.parallaxInstance.destroy();
        }

        if (window.theme.showElementStaggering) {
          this.intersectionObserver.disconnect();
          this.timeline.kill();
        }

        window.removeEventListener('scroll', this._onScrollListener);
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._onScrollListener = this._checkToolbarVisibility.bind(this);
        window.addEventListener('scroll', this._onScrollListener);
      }
    }, {
      key: "_checkToolbarVisibility",
      value: function _checkToolbarVisibility() {
        var _this2 = this;

        var lastYPosition = 0,
            headerHeight = 0,
            navBottom = 0,
            isFixedHeader = 0,
            header = document.querySelector('.Header');
        fastdom.measure(function () {
          lastYPosition = window.pageYOffset;
          headerHeight = header.offsetHeight;
          isFixedHeader = parseInt(window.getComputedStyle(document.body).getPropertyValue('--use-sticky-header') || 0);

          if (_this2.articleNavElement) {
            navBottom = _this2.articleNavElement.offsetTop + _this2.articleNavElement.clientHeight - headerHeight;
          }
        });
        fastdom.mutate(function () {
          _this2.toolbarElement.style.top = isFixedHeader ? headerHeight + 'px' : null;

          if (_this2.articleNavElement) {
            if (lastYPosition > 150 && _this2.articleNavElement && lastYPosition < navBottom) {
              _this2.toolbarElement.classList.add('is-visible');
            } else {
              _this2.toolbarElement.classList.remove('is-visible');
            }
          } else {
            if (lastYPosition > 150) {
              _this2.toolbarElement.classList.add('is-visible');
            } else {
              _this2.toolbarElement.classList.remove('is-visible');
            }
          }
        });
      }
    }, {
      key: "_reveal",
      value: function _reveal(results) {
        var _this3 = this;

        var toReveal = [];
        results.forEach(function (result) {
          if (result.isIntersecting || result.intersectionRatio > 0) {
            // isIntersecting does not exist on Samsung Android browser
            toReveal.push(result.target);

            _this3.intersectionObserver.unobserve(result.target);
          }
        });

        if (toReveal.length === 0) {
          return;
        }

        this.timeline.staggerFromTo(toReveal, 0.45, {
          autoAlpha: 0,
          y: 30
        }, {
          autoAlpha: 1,
          y: 0
        }, 0.2);
      }
    }]);

    return ArticleSection;
  }();

  var CartSection = /*#__PURE__*/function () {
    function CartSection(container) {
      _classCallCheck(this, CartSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.documentDelegate = new domDelegate.Delegate(document.documentElement);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));
      this.itemCount = this.options['itemCount'];
      this.isCartNoteOpen = false;

      if (this.options['drawer']) {
        this.sidebarDrawer = new Drawer(this.element, {
          onClose: this._onDrawerClosed.bind(this)
        });
      }

      if (this.options['hasShippingEstimator']) {
        this.shippingEstimator = new ShippingEstimator(this.element.querySelector('.ShippingEstimator'));
      }

      this._attachListeners();
    }

    _createClass(CartSection, [{
      key: "onUnload",
      value: function onUnload() {
        if (this.options['hasShippingEstimator']) {
          this.shippingEstimator.destroy();
        }

        this.delegateElement.off();
        document.removeEventListener('product:added', this._onProductAddedListener);
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._onProductAddedListener = this._onProductAdded.bind(this);
        this.delegateElement.on('change', '#cart-note', this._updateCartNote.bind(this));

        if (this.options['type'] !== 'page') {
          this.delegateElement.on('click', '[data-action="update-item-quantity"], [data-action="remove-item"]', this._updateItemQuantity.bind(this));
          this.delegateElement.on('change', '.QuantitySelector__CurrentQuantity', this._updateItemQuantity.bind(this));
        } else {
          this.delegateElement.on('change', '.QuantitySelector__CurrentQuantity', this._reloadPageWithQuantity.bind(this));
        } // We have some listeners that are specific to the fact it's a drawer or the dedicated cart page


        if (this.options['drawer']) {
          this.delegateElement.on('click', '[data-action="toggle-cart-note"]', this._toggleCartNote.bind(this));
        }

        document.addEventListener('product:added', this._onProductAddedListener); // We attach a listener at page level which allows to re-render the cart

        this.documentDelegate.on('cart:refresh', this._rerenderCart.bind(this, false));
      }
    }, {
      key: "_updateCartNote",
      value: function _updateCartNote(event, target) {
        fetch("".concat(window.routes.cartUrl, "/update.js"), {
          body: JSON.stringify({
            note: target.value
          }),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          }
        });
      }
    }, {
      key: "_toggleCartNote",
      value: function _toggleCartNote() {
        var _this = this;

        var noteContainer = this.element.querySelector('.Cart__OffscreenNoteContainer'),
            cartNote = this.element.querySelector('#cart-note');
        this.element.classList.toggle('has-note-open');
        this.element.querySelector('.Cart__NoteButton').innerHTML = cartNote.value !== '' ? window.languages.cartEditNote : window.languages.cartAddNote;
        noteContainer.setAttribute('aria-hidden', noteContainer.getAttribute('aria-hidden') === 'true' ? 'false' : 'true');
        this.isCartNoteOpen = noteContainer.getAttribute('aria-hidden') === 'false';

        if (this.element.classList.contains('has-note-open')) {
          var transitionEndListener = function transitionEndListener() {
            _this.element.querySelector('#cart-note').focus();

            noteContainer.removeEventListener('transitionend', transitionEndListener);
          };

          noteContainer.addEventListener('transitionend', transitionEndListener);
        }
      }
    }, {
      key: "_updateItemQuantity",
      value: function _updateItemQuantity(event, target) {
        var _this2 = this;

        document.dispatchEvent(new CustomEvent('theme:loading:start'));
        var quantity = null,
            elementToAnimate = null;

        if (target.tagName === 'INPUT') {
          quantity = parseInt(Math.max(parseInt(target.value) || 1, 1));
        } else {
          quantity = parseInt(target.getAttribute('data-quantity'));
        } // If the quantity is 0, then we will animate the product with a removal effect


        if (quantity === 0) {
          elementToAnimate = target.closest('.CartItemWrapper');
        }

        fetch("".concat(window.routes.cartChangeUrl, ".js"), {
          body: JSON.stringify({
            line: target.getAttribute('data-line'),
            quantity: quantity
          }),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          }
        }).then(function (cart) {
          cart.json().then(function (content) {
            _this2.itemCount = content['item_count'];

            _this2._rerenderCart(elementToAnimate);

            document.dispatchEvent(new CustomEvent('theme:loading:end'));
          });
        });
        event.preventDefault();
      }
    }, {
      key: "_reloadPageWithQuantity",
      value: function _reloadPageWithQuantity(event, target) {
        window.location.href = "".concat(window.routes.cartChangeUrl, "?quantity=").concat(parseInt(target.value), "&line=").concat(target.getAttribute('data-line'));
      }
    }, {
      key: "_onProductAdded",
      value: function _onProductAdded(event) {
        var _this3 = this;

        this.itemCount += event.detail.quantity;

        this._rerenderCart().then(function () {
          _this3.sidebarDrawer.open();
        });
      }
    }, {
      key: "_onDrawerClosed",
      value: function _onDrawerClosed() {
        if (this.isCartNoteOpen) {
          this._toggleCartNote();
        }
      }
      /**
       * This method is called internally to rerender the cart, based on the content returned by Shopify Ajax API.
       * We could save some performance by updating directly in JavaScript instead of doing a GET call to get the HTML
       * from Shopify, but by experience, this allows for easier app integration as it allows the Liquid to re-run
       * all the time and hence having easier logic.
       */

    }, {
      key: "_rerenderCart",
      value: function _rerenderCart(elementToAnimate) {
        var _this4 = this;

        // Note: appending a timestamp is necessary as the polyfill on IE11 and lower does not support the "cache" property
        return fetch("".concat(window.routes.cartUrl, "?section_id=").concat(this.options['drawer'] && window.theme.pageType !== 'cart' ? 'mini-cart' : 'main-cart', "&timestamp=").concat(Date.now()), {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (content) {
          // If there is an element to animate, we animate it using a transition
          if (_this4.options['drawer'] && elementToAnimate) {
            var timelineLite = new TimelineLite({
              onComplete: function onComplete() {
                content.text().then(function (html) {
                  _this4._replaceContent(html);
                });
              }
            });
            timelineLite.to(elementToAnimate, 0.5, {
              height: 0,
              opacity: 0,
              ease: Cubic.easeOut
            }, 0);

            if (_this4.itemCount === 0) {
              timelineLite.to(_this4.element.querySelector('.Drawer__Footer'), 0.5, {
                y: '100%',
                transition: 'none',
                ease: Cubic.easeInOut
              }, 0);
            }
          } else {
            content.text().then(function (html) {
              _this4._replaceContent(html);
            });
          }
        });
      }
    }, {
      key: "_replaceContent",
      value: function _replaceContent(html) {
        var _this5 = this;

        var tempElement = document.createElement('div');
        tempElement.innerHTML = html;
        var cartNodeParent = this.element.querySelector('.Cart').parentNode;

        if (this.options['drawer'] && window.theme.pageType !== 'cart') {
          var currentScrollPosition = this.element.querySelector('.Drawer__Main').scrollTop;
          cartNodeParent.replaceChild(tempElement.querySelector('.Cart'), this.element.querySelector('.Cart'));
          this.element.querySelector('.Drawer__Main').scrollTop = currentScrollPosition;
        } else {
          // For dedicated page we replace the whole section if there is no more product
          if (this.itemCount === 0) {
            this.element.innerHTML = tempElement.querySelector('.shopify-section').firstElementChild.innerHTML;
          } else {
            cartNodeParent.replaceChild(tempElement.querySelector('.Cart'), this.element.querySelector('.Cart'));
            this.element.querySelector('.PageHeader').innerHTML = tempElement.querySelector('.PageHeader').innerHTML;
          }
        } // We can also update the dot and the quantity


        var cartResult = JSON.parse(tempElement.querySelector('[data-section-type="cart"]').getAttribute('data-section-settings'));
        var cartDot = Dom.nodeListToArray(document.querySelectorAll('.Header__CartDot')),
            cartQuantity = Dom.nodeListToArray(document.querySelectorAll('.Header__CartCount'));
        this.itemCount = cartResult['itemCount'];
        cartDot.forEach(function (item) {
          if (_this5.itemCount === 0) {
            item.classList.remove('is-visible'); // IE 11 and lower does not support second attribute of toggle :(
          } else {
            item.classList.add('is-visible');
          }
        });
        cartQuantity.forEach(function (item) {
          item.textContent = _this5.itemCount;
        });
      }
    }]);

    return CartSection;
  }();

  var CollectionListSection = /*#__PURE__*/function () {
    function CollectionListSection(container) {
      _classCallCheck(this, CollectionListSection);

      this.element = container;
      var collectionListElement = this.element.querySelector('[data-flickity-config]');

      if (collectionListElement) {
        this.carousel = new Carousel(collectionListElement);
      }
    }

    _createClass(CollectionListSection, [{
      key: "onUnload",
      value: function onUnload() {
        if (this.carousel) {
          this.carousel.destroy();
        }
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        if (this.carousel) {
          this.carousel.selectCell(event.target.getAttribute('data-slide-index'), true, !event.detail.load);
        }
      }
    }, {
      key: "onBlockDeselect",
      value: function onBlockDeselect() {
        if (this.carousel) {
          this.carousel.unpausePlayer();
        }
      }
    }]);

    return CollectionListSection;
  }();

  /**
   * This class allows to automatically scrolls within a div when this div does not fit into the visible space
   */
  var OverflowScroller = /*#__PURE__*/function () {
    function OverflowScroller(element) {
      _classCallCheck(this, OverflowScroller);

      if (!element) {
        return;
      }

      this.element = element;
      this.lastKnownY = window.scrollY;
      this.currentTop = 0;
      this.initialTopOffset = parseInt(window.getComputedStyle(this.element).top);

      this._attachListeners();
    }

    _createClass(OverflowScroller, [{
      key: "destroy",
      value: function destroy() {
        window.removeEventListener('scroll', this._checkPositionListener);
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._checkPositionListener = this._checkPosition.bind(this);
        window.addEventListener('scroll', this._checkPositionListener);
      }
    }, {
      key: "_checkPosition",
      value: function _checkPosition() {
        var _this = this;

        fastdom.measure(function () {
          var bounds = _this.element.getBoundingClientRect(),
              maxTop = bounds.top + window.scrollY - _this.element.offsetTop + _this.initialTopOffset,
              minTop = _this.element.clientHeight - window.innerHeight;

          if (window.scrollY < _this.lastKnownY) {
            _this.currentTop -= window.scrollY - _this.lastKnownY;
          } else {
            _this.currentTop += _this.lastKnownY - window.scrollY;
          }

          _this.currentTop = Math.min(Math.max(_this.currentTop, -minTop), maxTop, _this.initialTopOffset);
          _this.lastKnownY = window.scrollY;
        });
        fastdom.mutate(function () {
          _this.element.style.top = "".concat(_this.currentTop, "px");
        });
      }
    }]);

    return OverflowScroller;
  }();

  var CollectionSection = /*#__PURE__*/function () {
    function CollectionSection(element) {
      _classCallCheck(this, CollectionSection);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.toolbarElement = this.element.querySelector('.CollectionToolbar');
      this.collectionInnerElement = this.element.querySelector('.CollectionInner__Products');
      this.settings = JSON.parse(this.element.getAttribute('data-section-settings')); // Create the popover if available

      var sortPopoverElement = document.getElementById('collection-sort-popover');

      if (sortPopoverElement) {
        this.sortPopover = new Popover(sortPopoverElement, {
          onValueChanged: this._sortByChanged.bind(this)
        });
      } // Create the filter drawer if available


      var filterDrawerElement = document.getElementById('collection-filter-drawer');

      if (filterDrawerElement) {
        this.filterDrawer = new Drawer(filterDrawerElement);
      } // Create scroller of sidebar


      if (this.settings['filterPosition'] === 'sidebar') {
        this.filterInnerSidebarScroller = new OverflowScroller(this.element.querySelector('.CollectionInner__Sidebar'));
      } // Setup parallax on image (if any)


      var collectionImageElement = this.element.querySelector('.PageHeader__ImageWrapper');

      if (collectionImageElement && window.matchMedia('(-moz-touch-enabled: 0), (hover: hover)').matches) {
        this.parallaxInstance = new Rellax('.PageHeader__ImageWrapper', {
          speed: -7,
          center: false,
          round: true
        });
      } // Setup product item color swatch


      new ProductItemColorSwatch(this.element.querySelector('.ProductList')); // Setup animation

      this.timeline = new TimelineLite({
        delay: window.theme.showPageTransition ? 0.5 : 0
      });

      this._setupAnimation();

      this._attachListeners();
    }

    _createClass(CollectionSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.delegateElement.off('click');

        if (this.sortPopover) {
          this.sortPopover.destroy();
        }

        if (this.filterDrawer) {
          this.filterDrawer.destroy();
        }

        if (this.filterInnerSidebarScroller) {
          this.filterInnerSidebarScroller.destroy();
        }

        if (this.parallaxInstance) {
          this.parallaxInstance.destroy();
        }

        if (window.theme.showElementStaggering) {
          this.intersectionObserver.disconnect();
          this.timeline.kill();
        }
      }
    }, {
      key: "_setupAnimation",
      value: function _setupAnimation() {
        var _this = this;

        var forceLoadFromTop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (!window.theme.showElementStaggering) {
          return;
        } // If there is already an observer set up, we remove it first


        if (this.intersectionObserver) {
          this.intersectionObserver.disconnect();
        }

        if (forceLoadFromTop) {
          this.timeline.clear();
          this.timeline.staggerFromTo(this.element.querySelectorAll('.ProductList .ProductItem'), 0.25, {
            autoAlpha: 0,
            y: 25
          }, {
            autoAlpha: 1,
            y: 0
          }, 0.1);
        } else {
          this.intersectionObserver = new IntersectionObserver(this._reveal.bind(this), {
            threshold: 0.3
          });
          Dom.nodeListToArray(this.element.querySelectorAll('.ProductList .ProductItem')).forEach(function (item) {
            _this.intersectionObserver.observe(item);
          });
        }
      }
    }, {
      key: "_reveal",
      value: function _reveal(results) {
        var _this2 = this;

        var toReveal = [];
        results.forEach(function (result) {
          if (result.isIntersecting || result.intersectionRatio > 0) {
            // isIntersecting does not exist on Samsung Android browser
            toReveal.push(result.target);

            _this2.intersectionObserver.unobserve(result.target);
          }
        });

        if (toReveal.length === 0) {
          return;
        }

        this.timeline.staggerFromTo(toReveal, 0.35, {
          autoAlpha: 0,
          y: 25
        }, {
          autoAlpha: 1,
          y: 0
        }, 0.15);
      }
    }, {
      key: "_changeLayoutMode",
      value: function _changeLayoutMode(event, target) {
        var _this3 = this;

        var layoutType = target.getAttribute('data-grid-type'),
            newCount = parseInt(target.getAttribute('data-count')); // Otherwise we detect the mode, and change all classes

        var productList = this.collectionInnerElement.querySelector('.ProductList');

        if (productList) {
          var previousCount = parseInt(productList.getAttribute("data-".concat(layoutType, "-count")));

          if (previousCount === newCount) {
            return; // Nothing has changed so we just return to avoid reflow
          }

          productList.setAttribute("data-".concat(layoutType, "-count"), newCount);
          Dom.nodeListToArray(productList.querySelectorAll('.Grid__Cell')).forEach(function (item) {
            if (layoutType === 'mobile') {
              item.classList.remove("1/".concat(previousCount, "--phone")); // IE11 and lower does not support classList.replace

              item.classList.add("1/".concat(newCount, "--phone"));
            } else {
              var previousTabletCount = previousCount === 2 ? 2 : 3,
                  newTabletCount = newCount === 2 ? 2 : 3;

              if (_this3.settings['filterPosition'] === 'drawer') {
                item.classList.remove("1/".concat(previousCount, "--lap-and-up"));
                item.classList.add("1/".concat(newCount, "--lap-and-up"));
              } else {
                item.classList.remove("1/".concat(previousCount, "--desk"));
                item.classList.add("1/".concat(newCount, "--desk"));
              }

              item.classList.remove("1/".concat(previousTabletCount, "--tablet-and-up"));
              item.classList.add("1/".concat(newTabletCount, "--tablet-and-up"));
            }

            if (window.theme.showElementStaggering) {
              item.firstElementChild.style.visibility = 'hidden'; // Make it as hidden so we can re-trigger the animation
            }
          }); // Force lazy sizes to recalculate item sizes

          lazySizes.autoSizer.checkElems();
        }

        target.classList.add('is-active');
        Dom.getSiblings(target)[0].classList.remove('is-active');

        this._setupAnimation(); // In order to prevent reflow and provide better user experience, we save into cart attributes (those are removed before the checkout
        // is submitted) the user choices so they are preserved on page reload, without the need to use JavaScript


        fetch("".concat(window.routes.cartUrl, "/update.js"), {
          body: JSON.stringify({
            attributes: _defineProperty({}, "collection_".concat(layoutType, "_items_per_row"), newCount)
          }),
          credentials: 'same-origin',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest' // This is needed as currently there is a bug in Shopify that assumes this header

          }
        });
      }
    }, {
      key: "_sortByChanged",
      value: function _sortByChanged(sortBy) {
        var currentUrl = new URL(location.href);
        currentUrl.searchParams.set('sort_by', sortBy);
        currentUrl.searchParams.delete('page');

        this._reloadProducts(currentUrl.toString());
      }
    }, {
      key: "_onFiltersCleared",
      value: function _onFiltersCleared(event) {
        this._reloadProducts(event.target.getAttribute('data-url'));
      }
    }, {
      key: "_onFilterChanged",
      value: function _onFilterChanged(event) {
        var formData = new FormData(event.target.closest('form'));
        var searchParamsAsString = new URLSearchParams(formData).toString();

        this._reloadProducts("".concat(window.location.pathname, "?").concat(searchParamsAsString));
      }
    }, {
      key: "_reloadProducts",
      value: function _reloadProducts(url) {
        var _this4 = this;

        if (this.abortController) {
          this.abortController.abort();
        }

        document.dispatchEvent(new CustomEvent('theme:loading:start'));

        if (history.replaceState) {
          window.history.pushState({
            path: url
          }, '', url);
        }

        var currentUrl = new URL(window.location);
        currentUrl.searchParams.set('section_id', this.settings['sectionId']);

        try {
          this.abortController = new AbortController();
          fetch(currentUrl.toString(), {
            signal: this.abortController.signal
          }).then(function (response) {
            response.text().then(function (content) {
              var tempElement = document.createElement('div');
              tempElement.innerHTML = content;
              _this4.collectionInnerElement.innerHTML = tempElement.querySelector('.CollectionInner__Products').innerHTML;
              var toolbarFilter = tempElement.querySelector('.CollectionToolbar__Item--filter');

              if (toolbarFilter) {
                var newToolbarFilter = _this4.element.querySelector('.CollectionToolbar__Item--filter');

                newToolbarFilter.innerHTML = toolbarFilter.innerHTML;
                newToolbarFilter.className = toolbarFilter.className;
              } // We also replace the filters


              var collectionFiltersDrawer = _this4.element.querySelector('#collection-filters-drawer-form'),
                  collectionFiltersSidebar = _this4.element.querySelector('#collection-filters-sidebar-form');

              if (collectionFiltersDrawer) {
                var newDrawerContent = tempElement.querySelector('#collection-filters-drawer-form');
                Array.from(collectionFiltersDrawer.querySelectorAll('.Collapsible')).forEach(function (collapsible) {
                  var newCollapsible = newDrawerContent.querySelector("[data-filter-index=\"".concat(collapsible.getAttribute('data-filter-index'), "\"]"));

                  if (collapsible.firstElementChild.getAttribute('aria-expanded') === 'true') {
                    newCollapsible.style.overflow = 'visible';
                    newCollapsible.firstElementChild.setAttribute('aria-expanded', 'true');
                    newCollapsible.lastElementChild.style.height = 'auto';
                    newCollapsible.lastElementChild.style.overflow = 'visible';
                  }
                });
                collectionFiltersDrawer.innerHTML = newDrawerContent.innerHTML;
                new ProductItemColorSwatch(_this4.element.querySelector('.ProductList'));
              }

              if (collectionFiltersSidebar) {
                var newSidebarContent = tempElement.querySelector('#collection-filters-sidebar-form');
                Array.from(collectionFiltersSidebar.querySelectorAll('.Collapsible')).forEach(function (collapsible) {
                  var newCollapsible = newSidebarContent.querySelector("[data-filter-index=\"".concat(collapsible.getAttribute('data-filter-index'), "\"]"));

                  if (collapsible.firstElementChild.getAttribute('aria-expanded') === 'true') {
                    newCollapsible.style.overflow = 'visible';
                    newCollapsible.firstElementChild.setAttribute('aria-expanded', 'true');
                    newCollapsible.lastElementChild.style.height = 'auto';
                    newCollapsible.lastElementChild.style.overflow = 'visible';
                  }
                });
                collectionFiltersSidebar.innerHTML = newSidebarContent.innerHTML;
              }

              document.dispatchEvent(new CustomEvent('theme:loading:end'));

              _this4._setupAnimation(true); // We scroll to the top


              var elementOffset = _this4.element.querySelector('.CollectionMain').getBoundingClientRect().top - parseInt(document.documentElement.style.getPropertyValue('--header-height'));

              if (Responsive.matchesBreakpoint('lap-and-up') && _this4.toolbarElement && _this4.toolbarElement.clientHeight === 0) {
                elementOffset -= 50;
              }

              if (elementOffset < 0) {
                window.scrollBy({
                  top: elementOffset,
                  behavior: 'smooth'
                });
              }
            });
          });
        } catch (exception) {}
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._changeLayoutModeListener = this._changeLayoutMode.bind(this);
        this.delegateElement.on('click', '[data-action="change-layout-mode"]', this._changeLayoutModeListener);
        this.delegateElement.on('click', '[data-action="clear-filters"]', this._onFiltersCleared.bind(this));
        this.delegateElement.on('change', '[name^="filter."]', this._onFilterChanged.bind(this));
        window.addEventListener('popstate', function (event) {
          if (event.state.path) {
            window.location.href = event.state.path;
          }
        });
        var $this = this;
        $(document).on('click', '.filter-menu-js', function(e){
          e.preventDefault();
          $('.shop-by-category .active_link a').removeAttr('aria-current');
          $('.shop-by-category .active_link').removeClass('active_link');
          $(this).parent().addClass('active_link');
          $(this).parent().find('a').attr('aria-current', 'Page');
          $('.PageHeader .SectionHeader__Heading').html($(this).attr('title'));
          var colUrl = location.origin+$(this).attr("href");
          var currentUrl = new URL(colUrl);
          var sortBy = $('.Popover__ValueList .is-selected').data('value');
          if(sortBy){
            currentUrl.searchParams.set('sort_by', sortBy);
            currentUrl.searchParams.delete('page');
          }
          $this._reloadProducts(currentUrl.toString());
        });
      }
    }]);

    return CollectionSection;
  }();

  var FaqSection = /*#__PURE__*/function () {
    function FaqSection(element) {
      _classCallCheck(this, FaqSection);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);

      this._attachListeners();
    }

    _createClass(FaqSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.delegateElement.off();
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        this._openItem(event.target);
      }
    }, {
      key: "onBlockDeselect",
      value: function onBlockDeselect(event) {
        this._closeItem(event.target);
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '.Faq__Question', this._toggleItem.bind(this));
        this.delegateElement.on('click', '.FaqSummary__Item', this._switchToCategory.bind(this));
      }
    }, {
      key: "_switchToCategory",
      value: function _switchToCategory(event, target) {
        target.classList.add('is-active');
        Dom.getSiblings(target, '.is-active').forEach(function (item) {
          item.classList.remove('is-active');
        });
      }
    }, {
      key: "_toggleItem",
      value: function _toggleItem(event, target) {
        var item = target.closest('.Faq__Item');

        if (item.getAttribute('aria-expanded') === 'true') {
          this._closeItem(item);
        } else {
          this._openItem(item);
        }
      }
    }, {
      key: "_openItem",
      value: function _openItem(item) {
        var answerWrapper = item.querySelector('.Faq__AnswerWrapper');
        item.setAttribute('aria-expanded', 'true');
        answerWrapper.setAttribute('aria-hidden', 'false');
        Animation.slideDown(answerWrapper, true);
        Dom.getSiblings(item, '[aria-expanded="true"]').forEach(function (siblingItem) {
          var siblingAnswerWrapper = siblingItem.querySelector('.Faq__AnswerWrapper');
          siblingItem.setAttribute('aria-expanded', 'false');
          siblingAnswerWrapper.setAttribute('aria-hidden', 'true');
          Animation.slideUp(siblingAnswerWrapper);
        });
      }
    }, {
      key: "_closeItem",
      value: function _closeItem(item) {
        var answerWrapper = item.querySelector('.Faq__AnswerWrapper');
        item.setAttribute('aria-expanded', 'false');
        answerWrapper.setAttribute('aria-hidden', 'true');
        Animation.slideUp(answerWrapper);
      }
    }]);

    return FaqSection;
  }();

  var FeaturedCollectionsSection = /*#__PURE__*/function () {
    function FeaturedCollectionsSection(container) {
      var _this = this;

      _classCallCheck(this, FeaturedCollectionsSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-settings'));
      this.carousels = [];
      Dom.nodeListToArray(this.element.querySelectorAll('[data-flickity-config]')).forEach(function (item) {
        _this.carousels.push(new Carousel(item));
      }); // Setup product item color swatch

      new ProductItemColorSwatch(this.element);

      this._setupAnimation();

      this._attachListeners();
    }

    _createClass(FeaturedCollectionsSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.carousels.forEach(function (item) {
          return item.destroy();
        });
        this.delegateElement.off('click');
        this.intersectionObserver.disconnect();
        this.timeline.kill();
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        // We simply trigger a click on the element that controls this tab
        this.element.querySelector("[aria-controls=\"".concat(event.target.id, "\"]")).click();
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="toggle-tab"]', this._switchTab.bind(this));
      }
    }, {
      key: "_switchTab",
      value: function _switchTab(event, target) {
        var _this2 = this;
        // If the tab is already active, do nothing
        if (target.classList.contains('is-active')) {
          return;
        } // First, switch the current tab


        target.classList.add('is-active');
        target.setAttribute('aria-selected', 'true');
        Dom.getSiblings(target, '.is-active').forEach(function (item) {
          item.classList.remove('is-active');
          item.setAttribute('aria-selected', 'false');
        }); // Then, display the panel

        var tabPanelToShow = this.element.querySelector("#".concat(target.getAttribute('aria-controls')));
        this.timeline.eventCallback('onReverseComplete', function () {
          tabPanelToShow.setAttribute('aria-hidden', 'false');
          Dom.getSiblings(tabPanelToShow, '.TabPanel[aria-hidden="false"]').forEach(function (item) {
            item.setAttribute('aria-hidden', 'true');
          });

          if (Responsive.matchesBreakpoint('lap-and-up')) {
            _this2.carousels.forEach(function (carousel) {
              // There is a bug in Safari where it cannot detect the pseudo-element "::after" if the tab panel is hidden. As a consequence,
              // we manually activate it
              carousel.flickityInstance.activate();
              carousel.flickityInstance.resize(); // Ugly hack
            });
          }

          _this2.timeline.clear();

          _this2._setupAnimation();
        });

        if (this.options['layout'] === 'grid' && window.theme.showElementStaggering) {
          this.timeline.reverse().timeScale(3);
        } else {
          this.timeline.reverse();
        }
      }
    }, {
      key: "_setupAnimation",
      value: function _setupAnimation() {
        var _this3 = this;

        if (this.intersectionObserver) {
          this.intersectionObserver.disconnect();
        }

        this.timeline = new TimelineLite({
          delay: 0.5
        });

        if (this.options['layout'] === 'grid' && window.theme.showElementStaggering) {
          this.intersectionObserver = new IntersectionObserver(this._reveal.bind(this));
          Dom.nodeListToArray(this.element.querySelectorAll('.TabPanel[aria-hidden="false"] .ProductList .ProductItem')).forEach(function (item) {
            _this3.intersectionObserver.observe(item);
          });
        } else {
          var productList = this.element.querySelector('.TabPanel[aria-hidden="false"] .ProductList');

          if (productList) {
            this.timeline.fromTo(productList, 0.6, {
              autoAlpha: 0,
              y: 25
            }, {
              autoAlpha: 1,
              y: 0
            });
          }
        }
      }
    }, {
      key: "_reveal",
      value: function _reveal(results) {
        var _this4 = this;

        var toReveal = [];
        results.forEach(function (result) {
          if (result.isIntersecting || result.intersectionRatio > 0) {
            // isIntersecting does not exist on Samsung Android browser
            toReveal.push(result.target);

            _this4.intersectionObserver.unobserve(result.target);
          }
        });

        if (toReveal.length === 0) {
          return;
        }

        this.timeline.staggerFromTo(toReveal, 0.45, {
          autoAlpha: 0,
          y: 25
        }, {
          autoAlpha: 1,
          y: 0
        }, 0.2);
      }
    }]);

    return FeaturedCollectionsSection;
  }();

  var FeaturedProductSection = /*#__PURE__*/function () {
    function FeaturedProductSection(container) {
      _classCallCheck(this, FeaturedProductSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

      if (!this.options['usePlaceholder']) {
        this.productVariants = new ProductVariants(container, this.options);
      } // We have to re-order elements in the DOM


      var offscreenElement = this.element.querySelector('.Product__OffScreen');

      if (offscreenElement) {
        this.element.appendChild(offscreenElement);
      }

      this._attachListeners();
    }

    _createClass(FeaturedProductSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.delegateElement.off('click');

        if (this.productVariants) {
          this.productVariants.destroy();
        }
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('variant:changed', this._updateMainImage.bind(this));
      }
      /**
       * Update the main featured image
       */

    }, {
      key: "_updateMainImage",
      value: function _updateMainImage(event) {
        var variant = event.detail.variant,
            previousVariant = event.detail.previousVariant;

        if (!variant || !variant['featured_image'] || previousVariant['featured_image'] && previousVariant['featured_image']['id'] === variant['featured_image']['id']) {
          return;
        } // Otherwise we are on the home page. It's a bit more complex as we have to rewrite some code normally written in Liquid


        var newImage = variant['featured_image'];
        console.log(newImage);
        var mainImageContainer = this.element.querySelector('.FeaturedProduct__Gallery .AspectRatio');
        mainImageContainer.style.cssText = "max-width: ".concat(newImage['width'], "px; --aspect-ratio: ").concat(newImage['width'] / newImage['height']);
        var newImageElement = document.createElement('img');
        newImageElement.classList.add('Image--lazyLoad');
        newImageElement.setAttribute('data-src', Image.getSizedImageUrl(newImage['src'], '1x1').replace('_1x1.', '_{width}x.'));
        newImageElement.setAttribute('data-widths', "[".concat(Image.getSupportedSizes(newImage, [200, 400, 600, 700, 800, 900, 1000]).join(','), "]"));
        newImageElement.setAttribute('data-sizes', 'auto');
        mainImageContainer.replaceChild(newImageElement, mainImageContainer.querySelector('img'));
      }
    }]);

    return FeaturedProductSection;
  }();

  var BackgroundVideoSection = /*#__PURE__*/function () {
    function BackgroundVideoSection(container) {
      _classCallCheck(this, BackgroundVideoSection);

      this.element = container;
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

      this._loadScript().then(this._setupPlayer.bind(this));
    }

    _createClass(BackgroundVideoSection, [{
      key: "_loadScript",
      value: function _loadScript() {
        var _this = this;

        return new Promise(function (resolve, reject) {
          var script = document.createElement('script');
          document.body.appendChild(script);
          script.onload = resolve;
          script.onerror = reject;
          script.async = true;
          script.src = _this.options['videoType'] === 'youtube' ? '//www.youtube.com/iframe_api' : '//player.vimeo.com/api/player.js';
        });
      }
    }, {
      key: "onUnload",
      value: function onUnload() {
        if (this.player) {
          this.player.destroy(); // Both YouTube and Vimeo use the same function name
        }
      }
    }, {
      key: "_setupPlayer",
      value: function _setupPlayer() {
        var _this2 = this;

        var elementToInsert = this.element.querySelector('.ImageHero__VideoHolder');
        var playerLoadingInterval = setInterval(function () {
          if (_this2.options['videoType'] === 'youtube') {
            if (window.YT) {
              _this2.player = new YT.Player(elementToInsert, {
                videoId: _this2.options['videoId'],
                playerVars: {
                  showinfo: 0,
                  controls: 0,
                  fs: 0,
                  rel: 0,
                  height: '100%',
                  width: '100%',
                  iv_load_policy: 3,
                  html5: 1,
                  loop: 1,
                  playsinline: 1,
                  modestbranding: 1,
                  disablekb: 1,
                  origin: _this2.options['requestHost']
                },
                events: {
                  onReady: _this2._onYouTubeReady.bind(_this2),
                  onStateChange: _this2._onYouTubeStateChange.bind(_this2)
                }
              });
              clearInterval(playerLoadingInterval);
            }
          } else {
            if (window.Vimeo) {
              _this2.player = new Vimeo.Player(elementToInsert.parentNode, {
                id: _this2.options['videoId'],
                autoplay: true,
                autopause: false,
                muted: true,
                background: true,

                /*height: '100%',
                width: '100%',*/
                loop: true
              });
              clearInterval(playerLoadingInterval);
            }
          }
        }, 50);
      }
    }, {
      key: "_onYouTubeReady",
      value: function _onYouTubeReady(event) {
        this.player.mute();
        this.player.playVideo();
      }
    }, {
      key: "_onYouTubeStateChange",
      value: function _onYouTubeStateChange(event) {
        if (event.data === YT.PlayerState.ENDED) {
          this.player.playVideo();
        }
      }
    }]);

    return BackgroundVideoSection;
  }();

  var GiftCardSection = /*#__PURE__*/function () {
    function GiftCardSection(container) {
      _classCallCheck(this, GiftCardSection);

      this.element = container;

      this._createQrCode();

      this._setupPrint();
    }

    _createClass(GiftCardSection, [{
      key: "_createQrCode",
      value: function _createQrCode() {
        var qrCodeElement = document.getElementById('QrCode');
        new QRCode(qrCodeElement, {
          text: qrCodeElement.getAttribute('data-identifier'),
          width: 120,
          height: 120
        });
      }
    }, {
      key: "_setupPrint",
      value: function _setupPrint() {
        var printElement = document.getElementById('PrintGiftCard');

        if (printElement) {
          printElement.addEventListener('click', function () {
            window.print();
          });
        }
      }
    }]);

    return GiftCardSection;
  }();

  var HeaderSection = /*#__PURE__*/function () {
    function HeaderSection(container) {
      var _this = this;

      _classCallCheck(this, HeaderSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));
      this.lastScrollPosition = -1;
      this.isTouch = window.matchMedia('(-moz-touch-enabled: 1), (hover: none)').matches;

      if (this.options['isSticky']) {
        Stickyfill.addOne(this.element.parentNode);
      } // Set up the search bar


      this.searchBar = new SearchBar();

      this._attachListeners();

      this._verifyNavigationOverlap(); // We set again some CSS variables that are used for some calculations in CSS


      var mainLogo = this.element.querySelector('.Header__LogoImage--primary');

      if (mainLogo && !mainLogo.complete) {
        mainLogo.addEventListener('load', function () {
          fastdom.measure(function () {
            document.documentElement.style.setProperty('--header-height', _this.element.clientHeight + 'px');
            document.documentElement.style.setProperty('--header-is-not-transparent', _this.options['hasTransparentHeader'] ? 0 : 1);
          });
        });
      } else {
        fastdom.measure(function () {
          document.documentElement.style.setProperty('--header-height', _this.element.clientHeight + 'px');
          document.documentElement.style.setProperty('--header-is-not-transparent', _this.options['hasTransparentHeader'] ? 0 : 1);
        });
      }

      window.addEventListener('pageshow', this._checkTransparentHeader.bind(this));

      this._setupLocalizationPopovers();
    }

    _createClass(HeaderSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.element.removeEventListener('mouseleave', this._closeNavigationListener);
        this.element.removeEventListener('mouseenter', this._focusNavigationListener);
        this.element.removeEventListener('focusin', this._focusNavigationListener);
        this.delegateElement.off();
        window.removeEventListener('scroll', this._checkTransparentHeaderListener);
        window.removeEventListener('resize', this._verifyNavigationOverlapListener);

        if (this.options['isSticky']) {
          Stickyfill.removeOne(this.element.parentNode);
        }

        this.searchBar.destroy();
        this.localizationPopovers.forEach(function (localizationPopover) {
          localizationPopover.destroy();
        });
      }
    }, {
      key: "onSelect",
      value: function onSelect() {
        this._checkTransparentHeader();
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        var _this2 = this;

        var listItem = event.target.closest('.HorizontalList__Item');
        fastdom.mutate(function () {
          event.target.setAttribute('aria-hidden', 'false');

          if (listItem) {
            listItem.classList.add('is-expanded');
            Dom.getSiblings(listItem, '.is-expanded').forEach(function (item) {
              item.classList.remove('is-expanded');
            });
          }

          _this2.element.classList.remove('Header--transparent'); // This is needed to make sure everything is visible

        });
      }
    }, {
      key: "onBlockDeselect",
      value: function onBlockDeselect(event) {
        var listItem = event.target.closest('.HorizontalList__Item');
        fastdom.mutate(function () {
          event.target.setAttribute('aria-hidden', 'true');

          if (listItem) {
            listItem.classList.remove('is-expanded');
          }
        });

        this._checkTransparentHeader();
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._checkTransparentHeaderListener = this._checkTransparentHeader.bind(this);
        this._closeNavigationListener = this._closeNavigation.bind(this);
        this._focusNavigationListener = this._focusNavigation.bind(this);
        this._verifyNavigationOverlapListener = this._verifyNavigationOverlap.bind(this);
        this.element.addEventListener('mouseleave', this._closeNavigationListener);
        this.delegateElement.on('mouseenter', '.Header__MainNav .HorizontalList__Item, [aria-haspopup]', this._openMenu.bind(this), true);
        this.delegateElement.on('focusin', '[aria-haspopup]', this._openMenu.bind(this), true);
        this.delegateElement.on('focusout', '[aria-haspopup]', this._closeMenu.bind(this), false);
        this.delegateElement.on('click', '[data-action="toggle-search"]', this._closeNavigationListener);
        this.delegateElement.on('mouseleave', '.DropdownMenu [aria-haspopup]', this._closeMenu.bind(this), true);
        this.delegateElement.on('mouseenter', '.DropdownMenu [aria-haspopup]', this._adjustDropdownPosition.bind(this), true);

        if (this.isTouch) {
          this.delegateElement.on('click', '.Header__MainNav [aria-haspopup]', this._handleTouchMenu.bind(this));
        }

        if (this.options['hasTransparentHeader']) {
          this.element.addEventListener('mouseenter', this._focusNavigationListener);
          this.element.addEventListener('focusin', this._focusNavigationListener);
        }

        if (this.options['isSticky'] && this.options['hasTransparentHeader']) {
          window.addEventListener('scroll', this._checkTransparentHeaderListener);
        }

        if (this.options['navigationStyle'] === 'inline' || this.options['navigationStyle'] === 'logoLeft') {
          window.addEventListener('resize', this._verifyNavigationOverlapListener);
        }
      }
    }, {
      key: "_setupLocalizationPopovers",
      value: function _setupLocalizationPopovers() {
        // Prestige is an extremely complex theme, especially in the header due to the various layouts that power different
        // features. One issue that arises with this is that we output the localization elements twice in the DOM (with the
        // same ID as we're doing a capture in Liquid), and then depending on the screen size one layout is choosen. We therefore
        // have to de-duplicate the ID here. This is honestly not the cleanest code on earth, but I prefer handling this here
        // rather than duplicating too much Liquid
        this.localizationPopovers = [];
        Dom.nodeListToArray(document.querySelectorAll('#header-locale-popover')).forEach(function (item, index) {
          item.id = "".concat(item.id, "-").concat(index);
        });
        Dom.nodeListToArray(document.querySelectorAll('[aria-controls="header-locale-popover"]')).forEach(function (item, index) {
          item.setAttribute('aria-controls', "".concat(item.getAttribute('aria-controls'), "-").concat(index));
        });
        Dom.nodeListToArray(document.querySelectorAll('#header-currency-popover')).forEach(function (item, index) {
          item.id = "".concat(item.id, "-").concat(index);
        });
        Dom.nodeListToArray(document.querySelectorAll('[aria-controls="header-currency-popover"]')).forEach(function (item, index) {
          item.setAttribute('aria-controls', "".concat(item.getAttribute('aria-controls'), "-").concat(index));
        });
        var localePopoverElement1 = document.getElementById('header-locale-popover-0');

        if (localePopoverElement1) {
          this.localizationPopovers.push(new Popover(localePopoverElement1, {
            preferredAlignment: 'center',
            preferredPosition: 'bottom',
            threshold: 12
          }));
        }

        var localePopoverElement2 = document.getElementById('header-locale-popover-1');

        if (localePopoverElement2) {
          this.localizationPopovers.push(new Popover(localePopoverElement2, {
            preferredAlignment: 'center',
            preferredPosition: 'bottom',
            threshold: 12
          }));
        }

        var currencyPopoverElement1 = document.getElementById('header-currency-popover-0');

        if (currencyPopoverElement1) {
          this.localizationPopovers.push(new Popover(currencyPopoverElement1, {
            preferredAlignment: 'center',
            preferredPosition: 'bottom',
            threshold: 12
          }));
        }

        var currencyPopoverElement2 = document.getElementById('header-currency-popover-1');

        if (currencyPopoverElement2) {
          this.localizationPopovers.push(new Popover(currencyPopoverElement2, {
            preferredAlignment: 'center',
            preferredPosition: 'bottom',
            threshold: 12
          }));
        }
      }
    }, {
      key: "_focusNavigation",
      value: function _focusNavigation() {
        var _this3 = this;

        fastdom.mutate(function () {
          if (!_this3.isTouch || Responsive.matchesBreakpoint('desk')) {
            _this3.element.classList.remove('Header--transparent');
          }
        });
      }
    }, {
      key: "_closeNavigation",
      value: function _closeNavigation() {
        var _this4 = this;

        fastdom.mutate(function () {
          Dom.nodeListToArray(_this4.element.querySelectorAll('.is-expanded')).forEach(function (item) {
            item.classList.remove('is-expanded');
            
          });
          Dom.nodeListToArray(_this4.element.querySelectorAll('.Header__MainNav [aria-hidden="false"]')).forEach(function (item) {
            item.setAttribute('aria-hidden', 'true');
           
          });
          
        });
        
        $('#nav-backdrop').removeClass('is-overlay');
        $(".megamenu_content_box").animate({height:0},150);
        $('.style-left-linklist-right-two-image-grid').removeClass('content_active')
        
        if (this.options['hasTransparentHeader']) {
          this._checkTransparentHeader();
        }
      }
    }, {
      key: "_openMenu",
      value: function _openMenu(event, target) {
        if (event.type === 'mouseenter' && target !== event.target) {
          return;
        }

        fastdom.mutate(function () {
          Dom.nodeListToArray(target.children, '.Header__MainNav [aria-hidden="true"]').forEach(function (item) {
            item.setAttribute('aria-hidden', 'false');
            $('#nav-backdrop').addClass("is-overlay");
            var getHeightIs =  $(target).find('.MegaMenu__Inner').innerHeight();
            $(target).parents('header').find('.megamenu_content_box').animate({height:getHeightIs},150);
            setTimeout(function(){
              $(target).find('.style-left-linklist-right-two-image-grid').addClass('content_active')
            },250);
            
          });
          Dom.getSiblings(target, '.is-expanded').forEach(function (item) {
            item.classList.remove('is-expanded');
            $('#nav-backdrop').removeClass('is-overlay');
                        
            
            $(item).find('.style-left-linklist-right-two-image-grid').removeClass('content_active')
            Dom.nodeListToArray(item.children, '.Header__MainNav [aria-hidden="false"]').forEach(function (item) {
              item.setAttribute('aria-hidden', 'true');
            });
          });
          
          target.classList.add('is-expanded'); 
          if(target.hasAttribute('data-mega-menu')){
             
          }else{
            $(target).parents('header').find('.megamenu_content_box').animate({height:0},100);
          }
          if(target.hasAttribute('aria-haspopup')){
            $('#nav-backdrop').addClass("is-overlay");
          }

          $('.Search__Results').attr('aria-hidden',true);
          
        });
      }
    }, {
      key: "_closeMenu",
      value: function _closeMenu(event, target) {
        // Only return if it's a mouseleave event AND the target doesn't match
        if (event.type === 'mouseleave' && target !== event.target) {
          return;
        }
      
        // For focusout events, we need to check if we're actually leaving the menu
        if (event.type === 'focusout' && target.contains(event.relatedTarget)) {
          return;
        }
      
        fastdom.mutate(function () {
          target.classList.remove('is-expanded');
          $('#nav-backdrop').removeClass('is-overlay')
          Dom.nodeListToArray(target.children, '.Header__MainNav [aria-hidden="false"]').forEach(function (item) {
            item.setAttribute('aria-hidden', 'true');
          });
        });
        
        // Always reset megamenu height when truly closing the menu
        $(".megamenu_content_box").animate({height:0}, 150);
      }
    }, {
      key: "_adjustDropdownPosition",
      value: function _adjustDropdownPosition(event, target) {
        var nestedMenus = Dom.nodeListToArray(target.querySelectorAll('.DropdownMenu')),
            shouldOpenLeft = false;
        fastdom.measure(function () {
          var windowWidth = window.innerWidth,
              rightEdge = target.getBoundingClientRect().right;
          nestedMenus.forEach(function (item) {
            if (rightEdge + item.offsetWidth + 100 > windowWidth) {
              shouldOpenLeft = true;
            }
          });
        });
        fastdom.mutate(function () {
          if (shouldOpenLeft) {
            nestedMenus.forEach(function (item) {
              item.classList.add('DropdownMenu--reversed');
            });
          } else {
            nestedMenus.forEach(function (item) {
              item.classList.remove('DropdownMenu--reversed');
            });
          }
        });
      }
      /**
       * On touch devices where we display the standard menu (like landscape iPad or Surface) we need to do additional code to properly
       * handle the opening of menu. Especially, what we do is that if an item has a sub-menu, a click does not follow the link but instead open
       * the sub-menu. If this link is clicked a second twice, then the menu is followed
       */

    }, {
      key: "_handleTouchMenu",
      value: function _handleTouchMenu(event, target) {
        if (!target.classList.contains('is-expanded')) {
          event.preventDefault();
        }
      }
    }, {
      key: "_verifyNavigationOverlap",
      value: function _verifyNavigationOverlap() {
        var _this5 = this;

        var isOverlapping = false,
            mainTopMenu = this.element.querySelector('.Header__MainNav');
        fastdom.measure(function () {
          // To detect if the navigation is overlapping, we take the height of a single item and check if its height is taller than the parent
          if (mainTopMenu) {
            // Get the first element
            var firstNavElementHeight = Dom.outerHeightWithMargin(mainTopMenu.querySelector('.HorizontalList__Item')),
                mainNavHeight = mainTopMenu.scrollHeight;

            if (mainNavHeight > firstNavElementHeight) {
              isOverlapping = true;
            }
          }
        });
        this.element.classList.remove('Header--logoLeft', 'Header--inline', 'Header--center');
        this.element.classList.add("Header--".concat(this.options['navigationStyle']));
        this.element.clientWidth; // Forces a reflow

        fastdom.mutate(function () {
          if (isOverlapping) {
            _this5.element.classList.remove("Header--".concat(_this5.options['navigationStyle']));

            _this5.element.classList.add('Header--center'); // Check if still overlapping despite changing the mode


            if (mainTopMenu) {
              // Get the first element
              var itemTopSet = new Set();
              Array.from(mainTopMenu.querySelectorAll('.HorizontalList__Item')).forEach(function (item) {
                itemTopSet.add(item.getBoundingClientRect().top);
              });
              isOverlapping = itemTopSet.size > 1;
            }
          } else {
            _this5.element.classList.add("Header--".concat(_this5.options['navigationStyle']));

            _this5.element.classList.remove('Header--center');
          }

          var logo = _this5.element.querySelector('.Header__FlexItem--logo');

          logo.classList.toggle('Header__FlexItem--increaseSpace', isOverlapping);

          _this5.element.classList.add('Header--initialized');

          fastdom.measure(function () {
            document.documentElement.style.setProperty('--header-height', _this5.element.clientHeight + 'px');
          });
        });
      }
      /**
       * If the header mode is set to "transparent", we have to do extra work to automatically make it with fill colors when the
       * user starts scrolling. For performance we are using fastDOM to do that (which relies of requestAnimationFrame instead of
       * scroll listener)
       */

    }, {
      key: "_checkTransparentHeader",
      value: function _checkTransparentHeader() {
        var _this6 = this;

        if (!this.options['hasTransparentHeader']) {
          return;
        }

        var scrollThreshold = 10;
        fastdom.measure(function () {
          _this6.lastScrollPosition = window.pageYOffset;
        });
        fastdom.mutate(function () {
          if (_this6.lastScrollPosition <= scrollThreshold) {
            _this6.element.classList.add('Header--transparent');
          } else {
            _this6.element.classList.remove('Header--transparent');
          }
        });
      }
    }]);

    return HeaderSection;
  }();

  var FooterSection = /*#__PURE__*/function () {
    function FooterSection(container) {
      _classCallCheck(this, FooterSection);

      this.element = container;
      var localePopoverElement = document.getElementById('footer-locale-popover');

      if (localePopoverElement) {
        this.localePopover = new Popover(localePopoverElement, {
          preferredAlignment: 'center',
          preferredPosition: 'top',
          threshold: 12
        });
      }

      var currencyPopoverElement = document.getElementById('footer-currency-popover');

      if (currencyPopoverElement) {
        this.currencyPopover = new Popover(currencyPopoverElement, {
          preferredAlignment: 'center',
          preferredPosition: 'top',
          threshold: 12
        });
      }
    }

    _createClass(FooterSection, [{
      key: "onUnload",
      value: function onUnload() {
        if (this.localePopover) {
          this.localePopover.destroy();
        }

        if (this.currencyPopover) {
          this.currencyPopover.destroy();
        }
      }
    }]);

    return FooterSection;
  }();

  var ImageWithTextBlockSection = /*#__PURE__*/function () {
    function ImageWithTextBlockSection(container) {
      _classCallCheck(this, ImageWithTextBlockSection);

      this.element = container;
    }

    _createClass(ImageWithTextBlockSection, [{
      key: "onUnload",
      value: function onUnload() {}
    }]);

    return ImageWithTextBlockSection;
  }();

  var LoginSection = /*#__PURE__*/function () {
    function LoginSection(container) {
      _classCallCheck(this, LoginSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.timelineLite = new TimelineLite();
      this.customerLoginForm = this.element.querySelector('#customer_login');
      this.recoverPasswordForm = this.element.querySelector('#recover_customer_password');
      this.delegateElement.on('click', '[data-action="toggle-recover-form"]', this._showRecoverPassword.bind(this));
    }

    _createClass(LoginSection, [{
      key: "_showRecoverPassword",
      value: function _showRecoverPassword() {
        var isLoginActive = this.customerLoginForm.style.display === 'block';

        if (isLoginActive) {
          this.timelineLite.fromTo(this.customerLoginForm, 0.5, {
            autoAlpha: 1,
            display: 'block',
            y: 0
          }, {
            autoAlpha: 0,
            y: 20,
            display: 'none'
          }).fromTo(this.recoverPasswordForm, 0.5, {
            autoAlpha: 0,
            display: 'none',
            y: 20
          }, {
            autoAlpha: 1,
            display: 'block',
            y: 0,
            delay: 0.25
          });
        } else {
          this.timelineLite.fromTo(this.recoverPasswordForm, 0.5, {
            autoAlpha: 1,
            display: 'block',
            y: 0
          }, {
            autoAlpha: 0,
            y: 20,
            display: 'none'
          }).fromTo(this.customerLoginForm, 0.5, {
            autoAlpha: 0,
            display: 'none',
            y: 20
          }, {
            autoAlpha: 1,
            display: 'block',
            y: 0,
            delay: 0.25
          });
        }
      }
    }]);

    return LoginSection;
  }();

  var MapSection = /*#__PURE__*/function () {
    function MapSection(element) {
      _classCallCheck(this, MapSection);

      this.element = element;
      this.options = JSON.parse(element.getAttribute('data-section-settings'));

      if (this.options['apiKey'] && this.options['mapAddress']) {
        this._loadScript().then(this._initMap.bind(this));
      }
    }

    _createClass(MapSection, [{
      key: "_loadScript",
      value: function _loadScript() {
        var _this = this;

        return new Promise(function (resolve, reject) {
          var script = document.createElement('script');
          document.body.appendChild(script);
          script.onload = resolve;
          script.onerror = reject;
          script.async = true;
          script.src = "https://maps.googleapis.com/maps/api/js?key=".concat(_this.options['apiKey']);
        });
      }
    }, {
      key: "_initMap",
      value: function _initMap() {
        var _this2 = this;

        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
          address: this.options['mapAddress']
        }, function (results, status) {
          if (status !== google.maps.GeocoderStatus.OK) {
            if (Shopify.designMode) ;
          } else {
            var mapOptions = {
              zoom: _this2.options['zoom'],
              center: results[0].geometry.location,
              draggable: false,
              clickableIcons: false,
              scrollwheel: false,
              disableDoubleClickZoom: true,
              disableDefaultUI: true
            };
            var map = new google.maps.Map(_this2.element.querySelector('.FeaturedMap__GMap'), mapOptions),
                center = map.getCenter();
            map.setCenter(center);
            var icon = {
              path: "M32.7374478,5.617 C29.1154478,1.995 24.2994478,0 19.1774478,0 C14.0544478,0 9.23944778,1.995 5.61744778,5.617 C-1.08555222,12.319 -1.91855222,24.929 3.81344778,32.569 L19.1774478,54.757 L34.5184478,32.6 C40.2734478,24.929 39.4404478,12.319 32.7374478,5.617 Z M19.3544478,26 C15.4954478,26 12.3544478,22.859 12.3544478,19 C12.3544478,15.141 15.4954478,12 19.3544478,12 C23.2134478,12 26.3544478,15.141 26.3544478,19 C26.3544478,22.859 23.2134478,26 19.3544478,26 Z",
              fillColor: _this2.options['markerColor'],
              fillOpacity: 1,
              anchor: new google.maps.Point(15, 55),
              strokeWeight: 0,
              scale: 0.6
            };
            new google.maps.Marker({
              map: map,
              position: map.getCenter(),
              icon: icon
            });
            var styledMapType = new google.maps.StyledMapType(JSON.parse(_this2.element.querySelector('[data-gmap-style]').innerHTML));
            map.mapTypes.set('styled_map', styledMapType);
            map.setMapTypeId('styled_map');
            google.maps.event.addDomListener(window, 'resize', function () {
              google.maps.event.trigger(map, 'resize');
              map.setCenter(center);
            });
          }
        });
      }
    }]);

    return MapSection;
  }();

  var NewsletterPopupSection = /*#__PURE__*/function () {
    function NewsletterPopupSection(element) {
      _classCallCheck(this, NewsletterPopupSection);

      this.element = element;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(element.getAttribute('data-section-settings')); // If the popup has been already displayed, we do not display it

      try {
        if (window.location.hash === '#newsletter-popup' && window.theme.pageType !== null) {
          this._openPopup();
        } else if (!this.options['showOnlyOnce'] || this.options['showOnlyOnce'] && localStorage.getItem('themePopup') === null) {
          setTimeout(this._openPopup.bind(this), this.options['apparitionDelay'] * 1000);
        }
      } catch (error) {// Some browsers (especially in private mode) throw an exception when trying to access local storage, so we protect ourselves here
      }

      this._attachListeners();
    }

    _createClass(NewsletterPopupSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.delegateElement.off();
      }
    }, {
      key: "onSelect",
      value: function onSelect() {
        this._openPopup();
      }
    }, {
      key: "onDeselect",
      value: function onDeselect() {
        this._closePopup();
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '[data-action="close-popup"]', this._closePopup.bind(this));
      }
    }, {
      key: "_openPopup",
      value: function _openPopup() {
        this.element.setAttribute('aria-hidden', 'false');
        localStorage.setItem('themePopup', 'true');
      }
    }, {
      key: "_closePopup",
      value: function _closePopup() {
        this.element.setAttribute('aria-hidden', 'true');
      }
    }]);

    return NewsletterPopupSection;
  }();

  var ProductRecommendationsSection = /*#__PURE__*/function () {
    function ProductRecommendationsSection(container) {
      _classCallCheck(this, ProductRecommendationsSection);

      this.element = container;
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));

      if (this.options['useRecommendations']) {
        this._loadRecommendations().then(this._createSlideshow.bind(this));
      } else {
        this._createSlideshow();
      }
    }

    _createClass(ProductRecommendationsSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.carousel.destroy();
      }
    }, {
      key: "_loadRecommendations",
      value: function _loadRecommendations() {
        var _this = this;

        var url = "".concat(window.routes.productRecommendationsUrl, "?section_id=").concat(this.element.getAttribute('data-section-id'), "&product_id=").concat(this.options['productId'], "&limit=").concat(this.options['recommendationsCount']);
        return fetch(url).then(function (response) {
          return response.text().then(function (content) {
            var container = document.createElement('div');
            container.innerHTML = content;
            _this.element.querySelector('.ProductRecommendations').innerHTML = container.querySelector('.ProductRecommendations').innerHTML;
          });
        });
      }
    }, {
      key: "_createSlideshow",
      value: function _createSlideshow() {
        var flickityElement = this.element.querySelector('[data-flickity-config]');

        if (!flickityElement) {
          return;
        }

        this.carousel = new Carousel(flickityElement); // Setup product item color swatch

        new ProductItemColorSwatch(this.element);
      }
    }]);

    return ProductRecommendationsSection;
  }();

  var ProductSection = /*#__PURE__*/function () {
    function ProductSection(container) {
      var _this = this;

      _classCallCheck(this, ProductSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.options = JSON.parse(this.element.getAttribute('data-section-settings'));
      this.viewInSpaceElement = this.element.querySelector('[data-shopify-xr]');
      this.productVariants = new ProductVariants(container, this.options);
      this.productReviews = new ProductReviews(container);
      var productSlideshowElement = this.element.querySelector('.Product__Slideshow'); // If there is no image at all, there is nothing to init

      if (productSlideshowElement) {
        this.productSlideshow = new Carousel(productSlideshowElement, {
          onSelect: this._onImageChanged.bind(this),
          onSettle: this._onImageSettled.bind(this)
        }, {
          draggable: !Responsive.matchesBreakpoint('supports-hover')
        });
        this.mediaList = {}; // We keep track of a list of media element

        this.previouslySelectedMedia = null; // Keep track of the previously selected media
        // For each model and video, we register a media

        productSlideshowElement.querySelectorAll('[data-media-type="model"]').forEach(function (model) {
          _this.mediaList[model.getAttribute('data-media-id')] = new ProductModel(model, _this.options['stackProductImages']);
        });
        productSlideshowElement.querySelectorAll('[data-media-type="video"], [data-media-type="external_video"]').forEach(function (video) {
          _this.mediaList[video.getAttribute('data-media-id')] = new ProductVideo(video, _this.options['stackProductImages'], _this.options['enableVideoLooping']);
        });

        if (this.options['stackProductImages']) {
          this.slideshowNavDots = this.element.querySelector('.Product__SlideshowNav--dots');
          this.slideshowNavDotsItems = this.slideshowNavDots ? Dom.nodeListToArray(this.slideshowNavDots.querySelectorAll('a')) : [];
        }

        if (this.options['showThumbnails']) {
          this.slideshowNavThumbnails = this.element.querySelector('.Product__SlideshowNav--thumbnails');
          this.slideshowNavThumbnailsItems = this.slideshowNavThumbnails ? Dom.nodeListToArray(this.slideshowNavThumbnails.querySelectorAll('.Product__SlideshowNavImage')) : [];
        }

        this.slideshowImages = Dom.nodeListToArray(productSlideshowElement.querySelectorAll('.Carousel__Cell')); // Setup the mobile nav

        this._setupSlideshowMobileNav();
      }

      this.productWrapperElement = this.element.querySelector('.Product__Wrapper');
      this.productInfoElement = this.element.querySelector('.Product__Info');
      this.productAsideElement = this.element.querySelector('.Product__Aside');
      this.productGalleryElement = this.element.querySelector('.Product__Gallery');
      this.quickNav = this.element.querySelector('.Product__QuickNav');

      if (this.options['enableImageZoom']) {
        this.imageZoomInstance = new ProductImageZoom(this.element, this.productSlideshow);
      }

//       Stickyfill.addOne(this.productInfoElement); // We have to re-order elements in the DOM

      var offscreenElement = this.element.querySelector('.Product__OffScreen');

      if (offscreenElement) {
        this.element.appendChild(offscreenElement);
      }

      this._setupDeviceFeatures();

      this._attachListeners();
    }

    _createClass(ProductSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.delegateElement.off('click');
        this.productReviews.destroy();

        if (this.productVariants) {
          this.productVariants.destroy();
        }

        if (this.productSlideshow) {
          this.productSlideshow.destroy();
        }

        if (this.options['enableImageZoom']) {
          this.imageZoomInstance.destroy();
        }

        if (this.carouselNavScrollSpy) {
          this.carouselNavScrollSpy.destroy();
        }

        if (this.quickNav) {
          window.removeEventListener('scroll', this._checkQuickNavListener);
        }

        if (this.productInfoScroller) {
          this.productInfoScroller.destroy();
        }

        if (this.productThumbnailsScroller) {
          this.productThumbnailsScroller.destroy();
        }

        if (window.ResizeObserver && this.productInfoResizeObserver) {
          this.productInfoResizeObserver.disconnect();
        }

//         Stickyfill.removeOne(this.productInfoElement);
        document.removeEventListener('breakpoint:changed', this._onBreakpointChangedListener);
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._onBreakpointChangedListener = this._setupDeviceFeatures.bind(this);
        this._checkQuickNavListener = this._checkQuickNav.bind(this);
        this.delegateElement.on('click', '[data-action="toggle-social-share"]', this._toggleSocialShare.bind(this));
        this.delegateElement.on('variant:changed', this._updateSlideshowImage.bind(this));
        this.delegateElement.on('scrollspy:target:changed', this._onScrollTargetChanged.bind(this));
        this.delegateElement.on('model:played', this._onMediaPlayed.bind(this));
//         this.delegateElement.on('video:played', this._onMediaPlayed.bind(this));
        this.delegateElement.on('model:paused', this._onMediaPaused.bind(this));
//         this.delegateElement.on('video:paused', this._onMediaPaused.bind(this));
        document.addEventListener('breakpoint:changed', this._onBreakpointChangedListener);

        if (this.quickNav) {
          window.addEventListener('scroll', this._checkQuickNavListener);
        }

        if (!this.options['stackProductImages'] && this.options['showThumbnails']) {
          this.delegateElement.on('click', '.Product__SlideshowNavImage', this._switchToImage.bind(this));
        }
      }
    }, {
      key: "_setupSlideshowMobileNav",
      value: function _setupSlideshowMobileNav() {
        var _this2 = this;

        this.slideshowMobileNav = this.element.querySelector('.Product__SlideshowMobileNav');

        if (this.slideshowMobileNav) {
          var slideshowMobileNavDelegate = new domDelegate.Delegate(this.slideshowMobileNav); // Handle the dot

          slideshowMobileNavDelegate.on('click', '.dot', function (event, element) {
            _this2._slideWillChange();

            _this2.productSlideshow.selectCell(parseInt(element.getAttribute('data-index')));
          }); // Handle the buttons

          slideshowMobileNavDelegate.on('click', '.Product__SlideshowNavArrow', function (event, element) {
            _this2._slideWillChange();

            if (element.getAttribute('data-direction') === 'next') {
              _this2.productSlideshow.next();
            } else {
              _this2.productSlideshow.previous();
            }
          });
        }
      }
      /**
       * Update the main carousel image
       */

    }, {
      key: "_updateSlideshowImage",
      value: function _updateSlideshowImage(event) {
        var variant = event.detail.variant,
            previousVariant = event.detail.previousVariant;

        if (!variant || !variant['featured_media'] || previousVariant && previousVariant['featured_media'] && previousVariant['featured_media']['id'] === variant['featured_media']['id']) {
          return;
        } // We have two logic here: if we are on pocket mode, we switch using the carousel, otherwise we simulate a link to the anchor


        this._slideWillChange();

        if (Responsive.matchesBreakpoint('pocket') || !this.options['stackProductImages']) {
          if(this.productSlideshow.flickityInstance){
            for (var i = 0; i !== this.productSlideshow.flickityInstance.cells.length; ++i) {
              var cellElement = this.productSlideshow.flickityInstance.cells[i].element,
                  mediaId = parseInt(cellElement.getAttribute('data-media-id'));
  
              if (mediaId === variant['featured_media']['id']) {
                this.productSlideshow.selectCell(parseInt(cellElement.getAttribute('data-media-position')) - 1);
              }
            }
          }
        } else {
          document.querySelector("[href=\"#Media".concat(variant['featured_media']['id'], "\"]")).click(); //document.getElementById(`Media${variant['featured_media']['id']}`).scrollIntoView({behavior: 'smooth'});
        }
      }
      /**
       * This happens when a media is played
       */

    }, {
      key: "_onMediaPlayed",
      value: function _onMediaPlayed(event) {
        // Remove draggability
        this.productSlideshow.getFlickityInstance().options.draggable = false;
        this.productSlideshow.getFlickityInstance().unbindDrag(); // If there is a previously enabled media, we disable it

        if (this.previouslySelectedMedia && this.previouslySelectedMedia !== event.target) {
          this.mediaList[this.previouslySelectedMedia.getAttribute('data-media-id')].hasBeenDeselected();
        } // If the slideshow is configured to stack images, the "select" method from the carousel is not called, so we
        // have to keep track of it here


        if (this.options['stackProductImages']) {
          this.previouslySelectedMedia = event.target;
        }
      }
      /**
       * This happens when a given media is paused
       */

    }, {
      key: "_onMediaPaused",
      value: function _onMediaPaused() {
        // Enable draggability
        this.productSlideshow.getFlickityInstance().options.draggable = !Responsive.matchesBreakpoint('supports-hover');
        this.productSlideshow.getFlickityInstance().bindDrag();
      }
      /**
       * This method is called when a media changed in the slideshow
       */

    }, {
      key: "_handleMedia",
      value: function _handleMedia(item) {
        // First, we need to turn off the previous media (if any)
        if (this.previouslySelectedMedia && this.previouslySelectedMedia !== item) {
          switch (this.previouslySelectedMedia.getAttribute('data-media-type')) {
            case 'video':
            case 'external_video':
            case 'model':
              this.mediaList[this.previouslySelectedMedia.getAttribute('data-media-id')].hasBeenDeselected();
          } // If the previous media was a model, we need to adjust the "view in space" button to go back to initial value


          if (this.previouslySelectedMedia.getAttribute('data-media-type') === 'model' && this.viewInSpaceElement) {
            this.viewInSpaceElement.setAttribute('data-shopify-model3d-id', this.viewInSpaceElement.getAttribute('data-shopify-model3d-default-id'));
          }
        } // Then, we have to handle the currently selected media


        switch (item.getAttribute('data-media-type')) {
          case 'video':
          case 'external_video':
          case 'model':
            this.mediaList[item.getAttribute('data-media-id')].hasBeenSelected();
            break;
        } // If the media is a model, we need to adjust the "view in space" button


        if (item.getAttribute('data-media-type') === 'model' && this.viewInSpaceElement) {
          this.viewInSpaceElement.setAttribute('data-shopify-model3d-id', item.getAttribute('data-media-id'));
        } // We set the previously selected media to the currently new one, so that when it changes it can be properly accounted


        this.previouslySelectedMedia = item;
      }
      /**
       * Callback when the target changes
       */

    }, {
      key: "_onScrollTargetChanged",
      value: function _onScrollTargetChanged(event) {
        // The scrollspy emit also an "oldTarget", but when scrolling very fast with Firefox or Safari, it prevents the old to be removed, so we
        // manually iterate through all of them to remove it first
        if (this.options['stackProductImages']) {
          this.slideshowNavDotsItems.forEach(function (item) {
            return item.classList.remove('is-selected');
          });
          this.slideshowNavDotsItems[parseInt(event.detail.newTarget.getAttribute('data-media-position')) - 1].classList.add('is-selected');

          if (this.options['showThumbnails']) {
            this.slideshowNavThumbnailsItems.forEach(function (item) {
              return item.classList.remove('is-selected');
            });
            this.slideshowNavThumbnailsItems[parseInt(event.detail.newTarget.getAttribute('data-media-position')) - 1].classList.add('is-selected');
          }
        }
      }
    }, {
      key: "_switchToImage",
      value: function _switchToImage(event, target) {
        event.preventDefault();

        this._slideWillChange();

        for (var i = 0; i !== this.productSlideshow.flickityInstance.cells.length; ++i) {
          var cellElement = this.productSlideshow.flickityInstance.cells[i].element,
              mediaId = parseInt(cellElement.getAttribute('data-media-id'));

          if (mediaId === parseInt(target.getAttribute('data-media-id'))) {
            this.productSlideshow.selectCell(parseInt(cellElement.getAttribute('data-media-position')) - 1);
          }
        }
      }
      /**
       * Check the quick nav
       */

    }, {
      key: "_checkQuickNav",
      value: function _checkQuickNav() {
        var _this3 = this;

        var showAsideQuickNav = false;
        fastdom.measure(function () {
          showAsideQuickNav = window.scrollY >= _this3.productAsideElement.offsetTop - _this3.productAsideElement.clientHeight;
        });
        fastdom.mutate(function () {
          if (showAsideQuickNav) {
            _this3.quickNav.classList.add('is-flipped');
          } else {
            _this3.quickNav.classList.remove('is-flipped');
          }
        });
      }
      /**
       * Toggle the social share icons
       */

    }, {
      key: "_toggleSocialShare",
      value: function _toggleSocialShare(event, target) {
        target.classList.toggle('is-active');
        target.classList.toggle('RoundButton--secondaryState');
        target.setAttribute('aria-expanded', target.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
        target.nextElementSibling.setAttribute('aria-hidden', target.nextElementSibling.getAttribute('aria-hidden') === 'true' ? 'false' : 'true');
      }
    }, {
      key: "_onImageChanged",
      value: function _onImageChanged(event, cell) {
        // If cell is video or model, we hide the action list
        if (Responsive.matchesBreakpoint('pocket')) {
          var productGalleryActionListElement = this.element.querySelector('.Product__Gallery .Product__ActionList');

          if (productGalleryActionListElement) {
            if (cell.classList.contains('Product__SlideItem--image')) {
              productGalleryActionListElement.classList.remove('is-hidden');
            } else {
              productGalleryActionListElement.classList.add('is-hidden');
            }
          }
        } // If we have non-stacked with thumbnails, update it


        if (!this.options['stackProductImages'] && this.options['showThumbnails']) {
          var mediaId = cell.getAttribute('data-media-id');
          this.slideshowNavThumbnailsItems.forEach(function (thumbnail) {
            if (thumbnail.getAttribute('data-media-id') === mediaId) {
              thumbnail.classList.add('is-selected');
            } else {
              thumbnail.classList.remove('is-selected');
            }
          });
        } // If we have the mobile navigation, we also update it


        if (this.slideshowMobileNav) {
          var selectedIndex = parseInt(cell.getAttribute('data-media-position')) - 1; // The -1 is to make it 0 indexed

          Dom.nodeListToArray(this.slideshowMobileNav.querySelectorAll('.dot')).forEach(function (item, index) {
            if (index === selectedIndex) {
              item.classList.add('is-selected');
            } else {
              item.classList.remove('is-selected');
            }
          });
        }
      }
    }, {
      key: "_onImageSettled",
      value: function _onImageSettled(index, cell) {
        this._handleMedia(cell);

        if (Responsive.matchesBreakpoint('lap-and-up')) {
          var slides = this.element.querySelectorAll('.Product__SlideItem:not(.is-selected)');
          slides.forEach(function (slide) {
            slide.classList.add('Product__SlideItem--hidden');
          });
        }
      }
    }, {
      key: "_slideWillChange",
      value: function _slideWillChange() {
        if (Responsive.matchesBreakpoint('lap-and-up')) {
          var slides = this.element.querySelectorAll('.Product__SlideItem');
          slides.forEach(function (slide) {
            slide.classList.remove('Product__SlideItem--hidden');
          });
        }
      }
      /**
       * Verify when the screen size changes to create additional stuff on non pocket mode
       */

    }, {
      key: "_setupDeviceFeatures",
      value: function _setupDeviceFeatures(event) {
        var _this4 = this;

        var currentBreakpoint = event ? event.detail.currentBreakpoint : Responsive.getCurrentBreakpoint(),
            previousBreakpoint = event ? event.detail.previousBreakpoint : null;

        if (currentBreakpoint === previousBreakpoint) {
          return; // Nothing has changed, no specific setup to do
        }

        if (currentBreakpoint === 'phone' || currentBreakpoint === 'tablet') {
          if (this.carouselNavScrollSpy) {
            this.carouselNavScrollSpy.destroy();
          }

          if (this.productInfoScroller) {
            this.productInfoScroller.destroy();
          }

          if (this.productThumbnailsScroller) {
            this.productThumbnailsScroller.destroy();
          }

          if (this.productAsideElement) {
            this.productAsideElement.style.minHeight = null;
          } else {
            this.productWrapperElement.style.minHeight = null;
          }

          this.productInfoElement.parentNode.style.maxHeight = null;
        } else {
          // 1st: scrollspy for the dots and image
          if (this.slideshowImages && this.slideshowImages.length > 1) {
            var offsetTop = 0;

            if (this.options['stackProductImages'] && this.slideshowNavDots) {
              offsetTop = this.slideshowNavDots.firstElementChild.offsetTop;
            }

            if (this.options['showThumbnails'] && Responsive.matchesBreakpoint('desk')) {
              offsetTop = 250;
            }

            this.carouselNavScrollSpy = new ScrollSpy(this.element, this.slideshowImages, {
              rootMargin: "-".concat(offsetTop, "px 0px 0px 0px")
            });
          }

          var productInfoStyles = window.getComputedStyle(this.productInfoElement),
              productInfoPadding = parseInt(productInfoStyles.paddingTop) + parseInt(productInfoStyles.paddingBottom),
              HeaderElement = document.getElementById('section-header'),
              HeaderHeight = HeaderElement.offsetHeight,
              productGalleryHeight = this.productGalleryElement ? parseInt(this.productGalleryElement.scrollHeight) : 0; // 2nd: making sure to set up enough space in aside part

          var calculateMinHeight = function calculateMinHeight() {
//             if (_this4.productAsideElement) {
//               _this4.productAsideElement.style.minHeight = "".concat(_this4.productInfoElement.scrollHeight - productInfoPadding - productGalleryHeight, "px");
//               _this4.productInfoElement.closest('.Product__InfoWrapper').style.maxHeight = _this4.productAsideElement.offsetTop + _this4.productInfoElement.scrollHeight - productInfoPadding + 'px';
//             } else {
//               _this4.productWrapperElement.style.minHeight = "".concat(_this4.productInfoElement.scrollHeight - parseInt(productInfoStyles.paddingTop), "px");
//             }
//             _this4.productInfoElement.style.top = "".concat(parseInt(HeaderHeight), "px");
          };

          calculateMinHeight(); // This code actually works well, but if a merchant is using an app that dynamically adds content (such as ReCharge or any other widget-based app), this
          // will mess the min height. There is a clean solution to this issue, which is by using ResizeObserver. However it's only supported in Chrome for now,
          // but I feel it's already good to have a clean fix

          if (window.ResizeObserver) {
            this.productInfoResizeObserver = new ResizeObserver(function () {
              calculateMinHeight(); // We currently do not take advantage of the values returned by the observer as our calculation depends on other values
            });
            this.productInfoResizeObserver.observe(this.productInfoElement);
          } // 3rd: let's handle the scroll for the product info

//           this.productInfoScroller = new OverflowScroller(this.productInfoElement); // 4th: let's handle the scroll for the thumbnails

          if (this.options['showThumbnails'] && this.slideshowNavThumbnails) {
            this.productThumbnailsScroller = new OverflowScroller(this.slideshowNavThumbnails);
          }
        }
      }
    }]);

    return ProductSection;
  }();

  var RecentlyViewedProductsSection = /*#__PURE__*/function () {
    function RecentlyViewedProductsSection(container) {
      _classCallCheck(this, RecentlyViewedProductsSection);

      this.element = container;
      this.options = JSON.parse(this.element.getAttribute('data-section-settings')); // Setup product item color swatch

      new ProductItemColorSwatch(this.element);

      this._fetchProducts();
    }

    _createClass(RecentlyViewedProductsSection, [{
      key: "onUnload",
      value: function onUnload() {
        if (this.carousel) {
          this.carousel.destroy();
        }
      }
      /**
       * In order to get the products to display, we hit the search template with the given IDS
       */

    }, {
      key: "_fetchProducts",
      value: function _fetchProducts() {
        var _this = this;

        var queryString = this._getSearchQueryString();

        if (queryString === '') {
          return;
        } // If we have a non empty query string we do a search query


        fetch("".concat(window.routes.searchUrl, "?section_id=").concat(this.element.getAttribute('data-section-id'), "&type=product&q=").concat(queryString), {
          credentials: 'same-origin',
          method: 'GET'
        }).then(function (response) {
          response.text().then(function (content) {
            var tempElement = document.createElement('div');
            tempElement.innerHTML = content; // Set the content

            _this.element.innerHTML = tempElement.querySelector('.Section').innerHTML; // Show the section

            _this.element.parentNode.style.display = 'block'; // And finally let's create the carousel !

            _this.carousel = new Carousel(_this.element.querySelector('[data-flickity-config]'));
          });
        });
      }
    }, {
      key: "_getSearchQueryString",
      value: function _getSearchQueryString() {
        var items = JSON.parse(localStorage.getItem('recentlyViewedProducts') || '[]'); // If we are on a product template, we make sure to remove the main product from the related product

        if (items.includes(this.options['productId'])) {
          items.splice(items.indexOf(this.options['productId']), 1);
        }

        return items.map(function (item) {
          return 'id:' + item;
        }).join(' OR ');
      }
    }]);

    return RecentlyViewedProductsSection;
  }();

  /**
   * This code is extracted from Slate
   */

  var SectionContainer = /*#__PURE__*/function () {
    function SectionContainer() {
      _classCallCheck(this, SectionContainer);

      this.constructors = [];
      this.instances = [];

      this._attachListeners();
    }

    _createClass(SectionContainer, [{
      key: "_attachListeners",
      value: function _attachListeners() {
        document.addEventListener('shopify:section:load', this._onSectionLoad.bind(this));
        document.addEventListener('shopify:section:unload', this._onSectionUnload.bind(this));
        document.addEventListener('shopify:section:select', this._onSelect.bind(this));
        document.addEventListener('shopify:section:deselect', this._onDeselect.bind(this));
        document.addEventListener('shopify:section:reorder', this._onReorder.bind(this));
        document.addEventListener('shopify:block:select', this._onBlockSelect.bind(this));
        document.addEventListener('shopify:block:deselect', this._onBlockDeselect.bind(this));
      }
    }, {
      key: "register",
      value: function register(type, constructor) {
        var _this = this;

        this.constructors[type] = constructor;
        Dom.nodeListToArray(document.querySelectorAll("[data-section-type=".concat(type, "]"))).forEach(function (container) {
          _this._createInstance(container, constructor);
        });
      }
      /**
       * Return an object from an array of objects that matches the provided key and value
       */

    }, {
      key: "_findInstance",
      value: function _findInstance(array, key, value) {
        for (var i = 0; i < array.length; i++) {
          if (array[i][key] === value) {
            return array[i];
          }
        }
      }
      /**
       * Remove an object from an array of objects by matching the provided key and value
       */

    }, {
      key: "_removeInstance",
      value: function _removeInstance(array, key, value) {
        var i = array.length;

        while (i--) {
          if (array[i][key] === value) {
            array.splice(i, 1);
            break;
          }
        }

        return array;
      }
    }, {
      key: "_onSectionLoad",
      value: function _onSectionLoad(event) {
        var container = event.target.querySelector('[data-section-id]');

        if (container) {
          this._createInstance(container);
        }
      }
    }, {
      key: "_onSectionUnload",
      value: function _onSectionUnload(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (!instance) {
          return;
        }

        if (typeof instance.onUnload === 'function') {
          instance.onUnload(event);
        }

        this.instances = this._removeInstance(this.instances, 'id', event.detail.sectionId);
      }
    }, {
      key: "_onSelect",
      value: function _onSelect(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onSelect === 'function') {
          instance.onSelect(event);
        }
      }
    }, {
      key: "_onDeselect",
      value: function _onDeselect(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onDeselect === 'function') {
          instance.onDeselect(event);
        }
      }
    }, {
      key: "_onReorder",
      value: function _onReorder(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onReorder === 'function') {
          instance.onReorder(event);
        }
      }
    }, {
      key: "_onBlockSelect",
      value: function _onBlockSelect(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onBlockSelect === 'function') {
          instance.onBlockSelect(event);
        }
      }
    }, {
      key: "_onBlockDeselect",
      value: function _onBlockDeselect(event) {
        var instance = this._findInstance(this.instances, 'id', event.detail.sectionId);

        if (instance && typeof instance.onBlockDeselect === 'function') {
          instance.onBlockDeselect(event);
        }
      }
    }, {
      key: "_createInstance",
      value: function _createInstance(container, constructor) {
        var id = container.getAttribute('data-section-id'),
            type = container.getAttribute('data-section-type');
        constructor = constructor || this.constructors[type];

        if (typeof constructor === 'undefined') {
          return;
        }

        var instance = Object.assign(new constructor(container), {
          id: id,
          type: type,
          container: container
        });
        this.instances.push(instance);
      }
    }]);

    return SectionContainer;
  }();

  var ShopNowSection = /*#__PURE__*/function () {
    function ShopNowSection(container) {
      _classCallCheck(this, ShopNowSection);

      this.element = container;
      this.carousel = new Carousel(this.element.querySelector('[data-flickity-config]')); // Setup product item color swatch

      new ProductItemColorSwatch(this.element);
    }

    _createClass(ShopNowSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.carousel.destroy();
      }
    }]);

    return ShopNowSection;
  }();

  var ShopTheLookSection = /*#__PURE__*/function () {
    function ShopTheLookSection(container) {
      _classCallCheck(this, ShopTheLookSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.usePocketMode = Responsive.matchesBreakpoint('pocket');
      this.pocketActivatorButton = this.element.querySelector('[data-action="open-look"]');

      this._createOuterCarousel();

      this._createPocketPopovers();

      this._attachListeners();
    }

    _createClass(ShopTheLookSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.outerCarousel.destroy();
        this.innerCarousels.forEach(function (item) {
          item.forEach(function (innerItem) {
            return innerItem.destroy();
          });
        });
        this.popovers.forEach(function (item) {
          return item.destroy();
        });
        this.delegateElement.off();
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        this.outerCarousel.selectCell(event.target.getAttribute('data-slide-index'), true, !event.detail.load);
      }
      /**
       * Attach all the listeners
       */

    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '.ShopTheLook__Dot', this._onDotClicked.bind(this));
      }
      /**
       * There is one mobile and tablet popover per look, so we pre-create them
       */

    }, {
      key: "_createPocketPopovers",
      value: function _createPocketPopovers() {
        var _this = this;

        this.popovers = [];
        Dom.nodeListToArray(this.element.querySelectorAll('.Popover')).forEach(function (popover) {
          _this.popovers.push(new Popover(popover, {
            activator: _this.pocketActivatorButton,
            showOverlay: false,
            onOpen: _this._openPocketZoom.bind(_this),
            onClose: _this._closePocketZoom.bind(_this)
          }));
        });
      }
      /**
       * The outer carousel is the carousel that holds the main one (all the looks). Internally, it also creates
       * a sub-carousel for each inner carousel
       */

    }, {
      key: "_createOuterCarousel",
      value: function _createOuterCarousel() {
        var _this2 = this;

        this.outerCarousel = new Carousel(this.element.querySelector('.ShopTheLook'), {
          onSelect: this._onLookChanged.bind(this)
        });
        this.innerCarousels = new Array(this.outerCarousel.flickityInstance.cells.length);

        for (var i = 0; i !== this.innerCarousels.length; ++i) {
          this.innerCarousels[i] = [];
        } // We need to create ALL the carousels (both in desktop and mobile). Fortunately Flickity is quite fast, but
        // we have no other choices if we want to have proper animations everywhere.


        Dom.nodeListToArray(this.element.querySelectorAll('.ShopTheLook__ProductList')).forEach(function (item) {
          var lookIndex = parseInt(item.getAttribute('data-look-index'));

          _this2.innerCarousels[lookIndex].push(new Carousel(item, {
            onSelect: _this2._onProductChanged.bind(_this2)
          })); // By default, Flickity will append the carousel, hence making the "ViewButton" before the carousel. We need to manipulate it to move it after


          item.insertBefore(item.querySelector('.flickity-viewport'), item.querySelector('.ShopTheLook__ViewButton'));
        });
        this.outerCarousel.resize(); // Needed in case the products are taller than the image
      }
      /**
       * This function is called whenever the main look has changed, so that we can modify the popover activator
       */

    }, {
      key: "_onLookChanged",
      value: function _onLookChanged(selectedIndex, selectedCell) {
        // Then, we update the mobile button so that it opens the correct block
        this.pocketActivatorButton.setAttribute('aria-controls', "".concat(selectedCell.getAttribute('id'), "-popover"));
      }
      /**
       * This function is called whenever a product is changed in the list for a given look. This allows to focus the main dot
       */

    }, {
      key: "_onProductChanged",
      value: function _onProductChanged(selectedIndex, selectedCell) {
        var lookItem = this.outerCarousel.getSelectedCell(),
            activeDot = null;
        Dom.nodeListToArray(lookItem.querySelectorAll('.ShopTheLook__Dot')).forEach(function (dot, index) {
          dot.classList.remove('is-active'); // IE11 and lower does not support "toggle" with second parameter :(

          if (index === selectedIndex) {
            dot.classList.add('is-active');
            activeDot = dot;
          }
        }); // Update the link to the product (if using the desktop view)

        lookItem.querySelector('.ShopTheLook__ViewButton').setAttribute('href', selectedCell.getAttribute('data-product-url')); // We trigger an event so that when the dot change we can recalculate the position

        lookItem.dispatchEvent(new CustomEvent('product:changed', {
          detail: {
            dot: activeDot
          }
        }));
      }
      /**
       * This function is called whenever you explicitly click on a dot.
       *
       * On mobile and tablet, this must open the appropriate popver
       */

    }, {
      key: "_onDotClicked",
      value: function _onDotClicked(event, target) {
        var shouldAnimateCarousel = false,
            hasOnePopoverOpen = false,
            lookIndex = this.outerCarousel.getSelectedIndex();
        this.popovers.forEach(function (item) {
          if (item.isOpen) {
            hasOnePopoverOpen = true;
            shouldAnimateCarousel = true;
          }
        }); // Each inner carousel has a mobile AND desktop version, so we change both

        this.innerCarousels[lookIndex].forEach(function (innerCarousel) {
          innerCarousel.selectCell(parseInt(target.getAttribute('data-product-index')) - 1, false, shouldAnimateCarousel);
        });

        if (this.usePocketMode && !hasOnePopoverOpen) {
          this.popovers[lookIndex].open();
        }
      }
      /**
       * This is called when, on mobile, the popover is open. We must open the image in full resolution
       */

    }, {
      key: "_openPocketZoom",
      value: function _openPocketZoom(popover) {
        var _this3 = this;

        this._calculateImageTransform(popover);

        fastdom.mutate(function () {
          // We need to animate the header to avoid a slightly ugly effect if image overlap the header
          document.getElementById('shopify-section-header').style.cssText = 'transform: translateY(-100%); transition: transform 0.3s ease-in-out;';

          _this3.outerCarousel.flickityInstance.unbindDrag(); // Prevent changing the active slide


          _this3.outerCarousel.flickityInstance.element.classList.add('is-zoomed');

          _this3.outerCarousel.getSelectedCell().classList.add('is-expanded');
        });
      }
      /**
       * When the mobile zoom is open, and whenever the active dot changes, we need to potentially re-calculate the transform
       */

    }, {
      key: "_calculateImageTransform",
      value: function _calculateImageTransform(openPopover) {
        var _this4 = this;

        var selectedCell = this.outerCarousel.getSelectedCell();
        fastdom.measure(function () {
          // We first need to compute the initial transform and scale factor
          var scale = window.innerWidth / (selectedCell.offsetWidth - parseInt(window.getComputedStyle(selectedCell).paddingLeft) * 2),
              heightAfterScale = Math.round(selectedCell.offsetHeight * scale),
              // Height of the selected cell once the scale transform is applied
          hiddenImageHeight = Math.round(Math.max(heightAfterScale - (window.innerHeight - openPopover.element.offsetHeight), 0)),
              // Part of image that is below popover
          visibleImageHeight = heightAfterScale - hiddenImageHeight,
              // Part of the image that is visible in the viewport
          minTranslateY = Math.round(-(selectedCell.getBoundingClientRect().top - (heightAfterScale - selectedCell.offsetHeight) / 2)),
              // The minimum translate Y transform allowed so that image is visible
          maxTranslateY = Math.round(minTranslateY - hiddenImageHeight); // The maximum translate Y transform allowed so that image is visible

          _this4._calculateTransformForDotListener = function (event) {
            var dotTopPosition = Math.round((event.detail.dot.offsetTop + event.detail.dot.offsetHeight / 2) * scale),
                offsetToMove = Math.round(dotTopPosition - visibleImageHeight / 2),
                translateY = Math.min(Math.max(minTranslateY - offsetToMove, maxTranslateY), minTranslateY);
            fastdom.mutate(function () {
              _this4.outerCarousel.flickityInstance.viewport.style.transform = "translate3d(0, ".concat(Math.round(translateY), "px, 0) scale(").concat(scale, ")");
            });
          }; // We manually generate an event the first time to trigger the positioning


          selectedCell.addEventListener('product:changed', _this4._calculateTransformForDotListener);
          selectedCell.dispatchEvent(new CustomEvent('product:changed', {
            detail: {
              dot: selectedCell.querySelector('.ShopTheLook__Dot.is-active')
            }
          }));
        });
      }
      /**
       * Close the mobile zoom (which close the popover and remove any transform
       */

    }, {
      key: "_closePocketZoom",
      value: function _closePocketZoom() {
        var _this5 = this;

        var selectedCell = this.outerCarousel.getSelectedCell();
        selectedCell.removeEventListener('product:changed', this._calculateTransformForDotListener);
        fastdom.mutate(function () {
          document.getElementById('shopify-section-header').style.cssText = 'transform: translateY(0); transition: transform 0.3s ease-in-out 0.3s;';

          _this5.outerCarousel.flickityInstance.bindDrag();

          _this5.outerCarousel.flickityInstance.element.classList.remove('is-zoomed');

          _this5.outerCarousel.flickityInstance.viewport.style.transform = null;
          selectedCell.classList.remove('is-expanded');
        });
      }
    }]);

    return ShopTheLookSection;
  }();

  var SidebarMenuSection = /*#__PURE__*/function () {
    function SidebarMenuSection(container) {
      _classCallCheck(this, SidebarMenuSection);

      this.element = container;
      this.sidebarDrawer = new Drawer(container);
    }

    _createClass(SidebarMenuSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.sidebarDrawer.destroy();
      }
    }, {
      key: "onSelect",
      value: function onSelect() {
        this.sidebarDrawer.open();
      }
    }, {
      key: "onDeselect",
      value: function onDeselect() {
        this.sidebarDrawer.close();
      }
    }]);

    return SidebarMenuSection;
  }();

  var SlideshowSection = /*#__PURE__*/function () {
    function SlideshowSection(container) {
      _classCallCheck(this, SlideshowSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.slideshow = new Carousel(this.element.querySelector('[data-flickity-config]'), {
        onSelect: this._onSlideChanged.bind(this)
      });
      this.selectedSlide = null;
      this.shouldAnimate = true;
      this.timeline = new TimelineLite({
        delay: window.theme.showPageTransition ? 0.5 : 0
      });

      if (this.slideshow.flickityInstance.cells.length > 0) {
        this._transitionToSlide(this.slideshow.flickityInstance.selectedCell.element, true);
      }

      this._attachListeners();
    }

    _createClass(SlideshowSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.slideshow.destroy();
        this.timeline.kill();
        this.delegateElement.off();
        document.removeEventListener('breakpoint:changed', this._onBreakpointChangedListener);
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        if (this.slideshow.flickityInstance.options.autoPlay) {
          this.slideshow.flickityInstance.stopPlayer();
        }

        this.shouldAnimate = !event.detail.load;
        this.slideshow.selectCell(event.target.getAttribute('data-slide-index'), false, !event.detail.load);
      }
    }, {
      key: "onBlockDeselect",
      value: function onBlockDeselect() {
        this.shouldAnimate = true;

        if (this.slideshow.flickityInstance.options.autoPlay) {
          this.slideshow.flickityInstance.playPlayer();
        }
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this._onBreakpointChangedListener = this._onBreakpointChanged.bind(this);
        this.delegateElement.on('mouseenter', '.Button', this._pauseSlideshow.bind(this), true);
        this.delegateElement.on('mouseleave', '.Button', this._resumeSlideshow.bind(this), true);
        document.addEventListener('breakpoint:changed', this._onBreakpointChangedListener);
      }
    }, {
      key: "_pauseSlideshow",
      value: function _pauseSlideshow() {
        if (this.slideshow.flickityInstance.options.autoPlay) {
          this.slideshow.flickityInstance.pausePlayer();
        }
      }
    }, {
      key: "_resumeSlideshow",
      value: function _resumeSlideshow() {
        if (this.slideshow.flickityInstance.options.autoPlay) {
          this.slideshow.flickityInstance.unpausePlayer();
        }
      }
    }, {
      key: "_onSlideChanged",
      value: function _onSlideChanged(index, element) {
        this._transitionToSlide(element);
      }
    }, {
      key: "_transitionToSlide",
      value: function _transitionToSlide(slide) {
        var _this = this;

        this.timeline.clear(); // First, we check if there is a previous slide selected, if that's the case

        if (this.selectedSlide) {
          this._slideLeave(this.selectedSlide);

          this.timeline.addLabel('enter', this.shouldAnimate ? '-=0.4' : 0);
        } // We get the next slide (if any) to preload it


        this._lazyLoadNextImage();

        this.timeline.fromTo(slide, this.selectedSlide && this.shouldAnimate ? 0.3 : 0, {
          autoAlpha: 0
        }, {
          autoAlpha: 1,
          ease: Cubic.easeInOut
        }, 'enter'); // The image may take 1s or more to load depending on the network, so we make sure to pause the player, and restart it once it has transitioned

        if (this.slideshow.flickityInstance.options.autoPlay && this.slideshow.flickityInstance.player.state === 'playing') {
          this.slideshow.flickityInstance.pausePlayer();
        }

        Dom.nodeListToArray(slide.querySelectorAll('.Slideshow__Image')).forEach(function (image) {
          if (image.classList.contains('Image--lazyLoading') || image.classList.contains('Image--lazyLoad')) {
            image.addEventListener('lazyloaded', _this._slideEnter.bind(_this, slide));
          } else {
            _this._slideEnter(slide);
          }
        });
        this.selectedSlide = slide;
      }
    }, {
      key: "_slideLeave",
      value: function _slideLeave(slide) {
        var content = slide.querySelector('.SectionHeader'),
            buttonWrapper = slide.querySelector('.SectionHeader__ButtonWrapper');
        this.timeline.fromTo(slide, this.shouldAnimate ? 0.3 : 0, {
          autoAlpha: 1
        }, {
          autoAlpha: 0,
          ease: Cubic.easeInOut,
          delay: this.shouldAnimate ? 0.35 : 0
        });

        if (content) {
          this.timeline.fromTo(content, this.shouldAnimate ? 0.4 : 0, {
            autoAlpha: 1,
            y: 0
          }, {
            autoAlpha: 0,
            y: 20,
            ease: Cubic.easeIn
          }, 0);
        }

        if (buttonWrapper) {
          this.timeline.fromTo(buttonWrapper, this.shouldAnimate ? 0.4 : 0, {
            autoAlpha: 1,
            y: 0
          }, {
            autoAlpha: 0,
            y: 10,
            ease: Cubic.easeIn
          }, 0);
        }
      }
    }, {
      key: "_slideEnter",
      value: function _slideEnter(slide) {
        var images = slide.querySelectorAll('.Slideshow__Image'),
            content = slide.querySelector('.SectionHeader'),
            buttonWrapper = slide.querySelector('.SectionHeader__ButtonWrapper');

        if (this.slideshow.flickityInstance.options.autoPlay && this.slideshow.flickityInstance.player.state === 'paused') {
          this.slideshow.flickityInstance.unpausePlayer();
        }

        if (window.CSS && window.CSS.supports('(object-fit: cover) or (-o-object-fit: cover)')) {
          if (window.theme.showImageZooming) {
            this.timeline.fromTo(images, this.shouldAnimate ? 1.2 : 0, {
              opacity: 0,
              scale: 1.2
            }, {
              opacity: 1,
              scale: 1,
              ease: Quad.easeOut
            }, 'enter');
          } else {
            this.timeline.fromTo(images, this.shouldAnimate ? 1.2 : 0, {
              opacity: 0
            }, {
              opacity: 1,
              ease: Quad.easeOut
            }, 'enter');
          }
        }

        if (content) {
          this.timeline.fromTo(content, this.shouldAnimate ? 0.8 : 0, {
            autoAlpha: 0,
            y: 30
          }, {
            autoAlpha: 1,
            y: 0,
            delay: this.shouldAnimate ? 0.8 : 0,
            ease: Cubic.easeOut
          }, 'enter');
        }

        if (buttonWrapper) {
          this.timeline.fromTo(buttonWrapper, this.shouldAnimate ? 0.8 : 0, {
            autoAlpha: 0,
            y: 20
          }, {
            autoAlpha: 1,
            y: 0,
            delay: this.shouldAnimate ? 0.8 : 0,
            ease: Cubic.easeOut
          }, 'enter');
        }
      }
    }, {
      key: "_lazyLoadNextImage",
      value: function _lazyLoadNextImage() {
        var currentIndex = this.slideshow.flickityInstance.selectedIndex,
            breakpoint = Responsive.getCurrentBreakpoint();

        if (this.slideshow.flickityInstance.cells.length - 1 > currentIndex) {
          var nextCellElement = this.slideshow.flickityInstance.cells[currentIndex + 1].element,
              imageContainers = Dom.nodeListToArray(nextCellElement.querySelectorAll('.Slideshow__ImageContainer')),
              imageToReveal = null;

          if (breakpoint === 'phone') {
            imageToReveal = imageContainers[0];
          } else {
            imageToReveal = imageContainers[1];
          }

          if (window.lazySizes && imageToReveal && imageToReveal.classList.contains('Image--lazyLoad')) {
            lazySizes.loader.unveil(imageToReveal.firstElementChild);
          }
        }
      }
    }, {
      key: "_onBreakpointChanged",
      value: function _onBreakpointChanged(event) {
        if (event.detail.previousBreakpoint === 'phone' && event.detail.currentBreakpoint !== 'phone' || event.detail.previousBreakpoint !== 'phone' && event.detail.currentBreakpoint === 'phone') {
          this.selectedSlide = null;

          this._transitionToSlide(this.slideshow.flickityInstance.selectedElement);
        }
      }
    }]);

    return SlideshowSection;
  }();

  var TestimonialsSection = /*#__PURE__*/function () {
    function TestimonialsSection(container) {
      _classCallCheck(this, TestimonialsSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.navItems = Dom.nodeListToArray(this.element.querySelectorAll('.TestimonialNav__Item'));
      this.carousel = new Carousel(this.element.querySelector('.TestimonialList'), {
        onSelect: this._testimonialChanged.bind(this)
      });

      this._attachListeners();
    }

    _createClass(TestimonialsSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.carousel.destroy();
        this.delegateElement.off('click');
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        this.carousel.selectCell(event.target.getAttribute('data-slide-index'), true);
      }
    }, {
      key: "onBlockDeselect",
      value: function onBlockDeselect() {
        this.carousel.unpausePlayer();
      }
    }, {
      key: "_testimonialClicked",
      value: function _testimonialClicked(event, target) {
        this.carousel.pausePlayer();
        this.carousel.selectCell(parseInt(target.getAttribute('data-index')));
        this.carousel.unpausePlayer();
      }
    }, {
      key: "_testimonialChanged",
      value: function _testimonialChanged(newIndex) {
        this.navItems.forEach(function (item, index) {
          item.classList.remove('is-selected'); // IE11 and lower does not support classList.toggle

          if (newIndex === index) {
            item.classList.add('is-selected');
          }
        });
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '.TestimonialNav__Item', this._testimonialClicked.bind(this));
      }
    }]);

    return TestimonialsSection;
  }();

  var TimelineSection = /*#__PURE__*/function () {
    function TimelineSection(container) {
      _classCallCheck(this, TimelineSection);

      this.element = container;
      this.delegateElement = new domDelegate.Delegate(this.element);
      this.items = Dom.nodeListToArray(this.element.querySelectorAll('.Timeline__Item'));
      this.navItems = Dom.nodeListToArray(this.element.querySelectorAll('.Timeline__NavItem'));

      this._attachListeners();
    }

    _createClass(TimelineSection, [{
      key: "onUnload",
      value: function onUnload() {
        this.delegateElement.off('click');
      }
    }, {
      key: "onBlockSelect",
      value: function onBlockSelect(event) {
        this.navItems[parseInt(event.target.getAttribute('data-index'))].click(); // Simulate a click on the given nav item
      }
    }, {
      key: "_attachListeners",
      value: function _attachListeners() {
        this.delegateElement.on('click', '.Timeline__NavItem', this._clickOnNavItem.bind(this));
      }
    }, {
      key: "_clickOnNavItem",
      value: function _clickOnNavItem(event, target) {
        var newItem = this.items[parseInt(target.getAttribute('data-index'))];

        if (newItem.classList.contains('is-selected')) {
          return;
        }

        var isContentLarger = false,
            navWrapper = target.parentNode,
            scrollableOffset = 0;
        fastdom.measure(function () {
          var scrollableWidth = navWrapper.scrollWidth,
              visibleWidth = navWrapper.offsetWidth;
          isContentLarger = visibleWidth < scrollableWidth;

          if (isContentLarger) {
            var beginBound = target.offsetLeft,
                endBound = beginBound + target.offsetWidth,
                closerToLeft = beginBound <= visibleWidth - endBound;
            var itemToUse = null;

            if (closerToLeft) {
              // If closer to left, we try to make the previous item visible (if possible)
              itemToUse = target.previousElementSibling || target;
            } else {
              // If closer to right, we try to make the next item visible (if possible)
              itemToUse = target.nextElementSibling || target;
            }

            var itemBeginBound = itemToUse.offsetLeft - navWrapper.scrollLeft,
                itemEndBound = itemBeginBound + itemToUse.offsetWidth;

            if (itemEndBound > visibleWidth) {
              // Element is not visible from the right, so we must move by a given amount so that endBound is within viewable screen
              scrollableOffset = itemEndBound - visibleWidth;
            } else if (itemBeginBound < 0) {
              // Element is not visible from the left, so we simply use the opposite of the negative offset
              scrollableOffset = itemBeginBound;
            }
          }
        });
        fastdom.mutate(function () {
          if (isContentLarger) {
            navWrapper.scrollBy({
              behavior: 'smooth',
              left: scrollableOffset
            });
          } // First we set the class on the selected item and remove it on siblings


          target.classList.add('is-selected');
          Dom.getSiblings(target, '.is-selected').forEach(function (item) {
            item.classList.remove('is-selected');
          }); // Then we slide to the appropriate element

          newItem.classList.add('is-selected');
          Dom.getSiblings(newItem, '.is-selected').forEach(function (item) {
            item.classList.remove('is-selected');
          });
        });
      }
    }]);

    return TimelineSection;
  }();

  var PriceRange = /*#__PURE__*/function (_HTMLElement) {
    _inherits(PriceRange, _HTMLElement);

    var _super = _createSuper(PriceRange);

    function PriceRange() {
      _classCallCheck(this, PriceRange);

      return _super.apply(this, arguments);
    }

    _createClass(PriceRange, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this = this;

        this.rangeLowerBound = this.querySelector('.price-range__range-group input:first-child');
        this.rangeHigherBound = this.querySelector('.price-range__range-group input:last-child');
        this.textInputLowerBound = this.querySelector('.price-range__input:first-child input');
        this.textInputHigherBound = this.querySelector('.price-range__input:last-child input'); // Select whole text on focus for text field to improve user experience

        this.textInputLowerBound.addEventListener('focus', function () {
          return _this.textInputLowerBound.select();
        });
        this.textInputHigherBound.addEventListener('focus', function () {
          return _this.textInputHigherBound.select();
        }); // Keep in sync the range with the text input fields

        this.textInputLowerBound.addEventListener('change', function (event) {
          event.target.value = Math.max(Math.min(parseInt(event.target.value), parseInt(_this.textInputHigherBound.value || event.target.max) - 1), event.target.min);
          _this.rangeLowerBound.value = event.target.value;

          _this.rangeLowerBound.parentElement.style.setProperty('--range-min', "".concat(parseInt(_this.rangeLowerBound.value) / parseInt(_this.rangeLowerBound.max) * 100, "%"));
        });
        this.textInputHigherBound.addEventListener('change', function (event) {
          event.target.value = Math.min(Math.max(parseInt(event.target.value), parseInt(_this.textInputLowerBound.value || event.target.min) + 1), event.target.max);
          _this.rangeHigherBound.value = event.target.value;

          _this.rangeHigherBound.parentElement.style.setProperty('--range-max', "".concat(parseInt(_this.rangeHigherBound.value) / parseInt(_this.rangeHigherBound.max) * 100, "%"));
        });
        this.rangeLowerBound.addEventListener('change', function (event) {
          _this.textInputLowerBound.value = event.target.value;

          _this.textInputLowerBound.dispatchEvent(new Event('change', {
            bubbles: true
          }));
        });
        this.rangeHigherBound.addEventListener('change', function (event) {
          _this.textInputHigherBound.value = event.target.value;

          _this.textInputHigherBound.dispatchEvent(new Event('change', {
            bubbles: true
          }));
        }); // We also have to bound the two range sliders

        this.rangeLowerBound.addEventListener('input', function (event) {
          event.target.value = Math.min(parseInt(event.target.value), parseInt(_this.textInputHigherBound.value || event.target.max) - 1); // Bound the value

          event.target.parentElement.style.setProperty('--range-min', "".concat(parseInt(event.target.value) / parseInt(event.target.max) * 100, "%"));
          _this.textInputLowerBound.value = event.target.value;
        });
        this.rangeHigherBound.addEventListener('input', function (event) {
          event.target.value = Math.max(parseInt(event.target.value), parseInt(_this.textInputLowerBound.value || event.target.min) + 1); // Bound the value

          event.target.parentElement.style.setProperty('--range-max', "".concat(parseInt(event.target.value) / parseInt(event.target.max) * 100, "%"));
          _this.textInputHigherBound.value = event.target.value;
        });
      }
    }]);

    return PriceRange;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
  window.customElements.define('price-range', PriceRange);

  (function () {
    // First, we register all plugins that are used for all pages
    new Collapsible();
    new Modal();
    new Responsive();

    if (window.theme.pageType !== 'password' && window.theme.pageType !== 'gift_card') {
      new LoadingBar();
    }

    var sections = new SectionContainer();
    sections.register('header', HeaderSection);
    sections.register('footer', FooterSection);
    sections.register('sidebar-menu', SidebarMenuSection);
    sections.register('cart', CartSection);
    sections.register('newsletter-popup', NewsletterPopupSection); // Sections used on index

    sections.register('slideshow', SlideshowSection);
    sections.register('collection-list', CollectionListSection);
    sections.register('article-list', ArticleList);
    sections.register('featured-product', FeaturedProductSection);
    sections.register('image-with-text-block', ImageWithTextBlockSection);
    sections.register('timeline', TimelineSection);
    sections.register('map', MapSection);
    sections.register('featured-collections', FeaturedCollectionsSection);
    sections.register('shop-the-look', ShopTheLookSection);
    sections.register('testimonials', TestimonialsSection);
    sections.register('background-video', BackgroundVideoSection); // Sections used on product page

    sections.register('product', ProductSection);
    sections.register('product-recommendations', ProductRecommendationsSection); // Sections used on collection page

    sections.register('collection', CollectionSection); // Sections used on blog page

    sections.register('article-list', ArticleList); // Sections used on article page

    sections.register('article', ArticleSection); // Sections used on content pages

    sections.register('faq', FaqSection); // Sections used on login page

    sections.register('login', LoginSection); // Sections used on addresses page

    sections.register('addresses', AddressesSection); // Sections used on gift card page

    sections.register('gift-card', GiftCardSection); // Sections used on different pages

    sections.register('recently-viewed-products', RecentlyViewedProductsSection);
    sections.register('shop-now', ShopNowSection);
    /**
     * ----------------------------------------------------------------------------
     * FLICKITY
     *
     * Starting from iOS 11, Safari on iOS is experiencing a bug that prevents
     * event.preventDefault to be called on dynamically added listeners, which is
     * what Flickity is using.
     *
     * The bug is coming from iOS but it impacts indirectly Flickity. A temporary
     * fix has been suggested here: https://github.com/metafizzy/flickity/issues/740
     * and that we are using here as a temporary workaround, that should be removed
     * once the bug is fixed on iOS
     * ----------------------------------------------------------------------------
     */

    Flickity.defaults.dragThreshold = 7;

    (function () {
      var touchingCarousel = false,
          touchStartCoords;
      document.body.addEventListener('touchstart', function (e) {
        if (e.target.closest('.flickity-slider')) {
          touchingCarousel = true;
        } else {
          touchingCarousel = false;
          return;
        }

        touchStartCoords = {
          x: e.touches[0].pageX,
          y: e.touches[0].pageY
        };
      });
      document.body.addEventListener('touchmove', function (e) {
        if (!(touchingCarousel && e.cancelable)) {
          return;
        }

        var moveVector = {
          x: e.touches[0].pageX - touchStartCoords.x,
          y: e.touches[0].pageY - touchStartCoords.y
        };
        if (Math.abs(moveVector.x) > Flickity.defaults.dragThreshold) e.preventDefault();
      }, {
        passive: false
      });
    })();
    /**
     * ----------------------------------------------------------------------------
     * FLICKITY 2
     *
     * Starting from iOS 15, Safari on iOS automatically starts to expand/collapse
     * the bottom bar as soon as you do even a minor diagonal movement. This is causing
     * a performance issue on iOS15 as it does a lot of reflow. We therefore have to
     * patch Flickity to make sure they re-size the carousel only when the width is
     * changed, by ignoring the height
     * ----------------------------------------------------------------------------
     */


    (function () {
      if (window.Flickity) {
        var originalResizeMethod = window.Flickity.prototype.resize,
            lastWidth = window.innerWidth;

        window.Flickity.prototype.resize = function () {
          if (window.innerWidth === lastWidth && this.maxCellHeight > 0) {
            return;
          }

          lastWidth = window.innerWidth;
          originalResizeMethod.apply(this, arguments); // Call original method
        };
      }
    })();
    /**
     * ----------------------------------------------------------------------------
     * RTE
     * ----------------------------------------------------------------------------
     */


    (function () {
      // We wrap each RTE table by a specific class to allow wrapping
      Dom.nodeListToArray(document.querySelectorAll('.Rte table')).forEach(function (table) {
        table.outerHTML = '<div class="TableWrapper">' + table.outerHTML + '</div>';
      });
      Dom.nodeListToArray(document.querySelectorAll('.Rte iframe')).forEach(function (iframe) {
        // We scope the wrapping only for YouTube and Vimeo
        if (iframe.src.indexOf('youtube') !== -1 || iframe.src.indexOf('youtu.be') !== -1 || iframe.src.indexOf('vimeo') !== -1) {
          iframe.outerHTML = '<div class="VideoWrapper">' + iframe.outerHTML + '</div>'; // Re-set the src attribute on each iframe after page load for Chrome's "incorrect iFrame content on 'back'" bug.
          // https://code.google.com/p/chromium/issues/detail?id=395791. Need to specifically target video and admin bar

          iframe.src = iframe.src;
        }
      });
    })();
    /**
     * ----------------------------------------------------------------------------
     * UTILS
     * ----------------------------------------------------------------------------
     */


    (function () {
      var documentDelegate = new domDelegate.Delegate(document.body),
          announcementBar = document.querySelector('.AnnouncementBar');
      documentDelegate.on('click', '[href^="#"], [data-href]', function (event, target) {
        var selector = target.hasAttribute('href') ? target.getAttribute('href') : target.getAttribute('data-href');

        if (selector === '#' || selector === '#main') {
          return;
        }
        var element = document.querySelector(selector),
            offset = parseInt(target.getAttribute('data-offset') || 0);

        if (announcementBar) {
          offset -= announcementBar.clientHeight;
        }

        if (target.hasAttribute('data-focus-on-click')) {
          var prevScrollY = window.pageYOffset;
          element.focus({
            preventScroll: true
          }); // hack to fix scroll jump after focus

          if (window.pageYOffset !== prevScrollY) {
            window.scrollTo(window.pageXOffset, prevScrollY);
          }

          element.focus();
        }

        window.scrollTo({
          behavior: 'smooth',
          top: element.offsetTop - offset
        });
        event.preventDefault();
      });
    })();

    (function () {
      var windowWidth = window.innerWidth,
          headerSection = document.getElementById('shopify-section-header');
      window.addEventListener('resize', function () {
        var newWidth = -1;
        fastdom.measure(function () {
          newWidth = window.innerWidth;
        });
        fastdom.mutate(function () {
          if (newWidth === windowWidth) {
            return;
          }

          windowWidth = newWidth;
          document.documentElement.style.setProperty('--window-height', window.innerHeight + 'px');

          if (headerSection) {
            document.documentElement.style.setProperty('--header-height', headerSection.clientHeight + 'px');
          }
        });
      });
    })();

    (function () {
      function handleFirstTab(event) {
        if (event.keyCode === 9) {
          document.body.classList.add('is-tabbing');
          window.removeEventListener('keydown', handleFirstTab);
        }
      }

      window.addEventListener('keydown', handleFirstTab);
    })();
    /**
     * ----------------------------------------------------------------------------
     * ANIMATION
     *
     * Important: this has to be at the very end of the file
     * ----------------------------------------------------------------------------
     */


    if (window.theme.showPageTransition) {
      PageTransition.getInstance();
    }
  })();

})));

$(window).scroll(function(e){
  var scrolly = window.scrollY,
      announcementbar = document.getElementById('shopify-section-announcement'),
      Header = document.getElementById('section-header'),
      Product__Info = document.querySelector('.Product__Info'),
      scrollheight = scrolly - announcementbar.offsetHeight;
  if(Product__Info != undefined){
    if(scrollheight < 0){
      Product__Info.style.top = "".concat(0, "px");
    }else if(scrollheight < Header.offsetHeight){
      Product__Info.style.top = "".concat(parseInt(scrollheight), "px");
    }else{
      Product__Info.style.top = "".concat(parseInt(Header.offsetHeight) + 10, "px");
    }
  }
  //   Product Sticky Bar
  var offscreen = $(".Product .Product__OffScreen");
  // if(offscreen.length != 0){
  //   var topheight = offscreen.offset().top,
  //       offsetheight = $("#shopify-section-footer").offset().top - ($(window).scrollTop() + $(window).height());
  //   topheight - $(window).scrollTop() < 100 && 0 < offsetheight ? $(".ProductForm__BuyButtons_sticky").addClass("sticky_cart") : $(".ProductForm__BuyButtons_sticky").removeClass("sticky_cart")
  // }
});

$(document).on('change','.Custom_ProductForm__Option select',function(){
  var thisval = $(this).val();
  $(this).closest('form').find('select[name="id"]').val(thisval);
});
$(document).on('change','.ProductForm__Option select[name="id"]',function(){
  var Thisval = $(this).val();
  $(this).closest('form').find('.Custom_ProductForm__Option select').val(Thisval);
});

$(document).on('click','.Header__FlexItem.hidden-desk [data-action="toggle-search"]',function(){
  setTimeout(function(){
//     $('#search-focus').focus();
//     $('.sparq-dropdown-container input#sparq-dropdown-searchbox').focus();
  },300);
});

function resizeSlider(){
  if ($(window).width() < 1140) {
    const rewardSlider1 = '.has-reward--card';
    rewardSlider(rewardSlider1);

  }
  if($(window).width() < 767){
    const rewardSlider2 = '.custom_points_rewards_details_bar';
    rewardSlider(rewardSlider2);

  }
}
function rewardSlider(el){
  var flkty = new Flickity( el, {
    // options
    cellAlign: 'center',
    contain: true,
    prevNextButtons: false
  });
}
resizeSlider();
$(window).resize(function(){
  resizeSlider();
});


    if($(window).width() < 1139){
      $(function(){
        $(window).scroll(function(){
          var aTop = $('#section-announcement').height();
          if($(this).scrollTop()>=aTop){
            if(!$('.mobile-search-info').hasClass ('is-demo')){
              // $('.mobile-search-info').hide(500);
              $('.search_icons_wrapper').removeClass('hide_search');
            }
          }else{
            // $('.mobile-search-info').show(500);
            $('.search_icons_wrapper').addClass('hide_search')
          }
        });
      });
      $('.search_icons_wrapper').on('click', function(e) {
        e.preventDefault();
        if($('.mobile-search-info:visible').length){
          $('.mobile-search-info').hide(500).removeClass('is-demo');
        }else{
          $('.mobile-search-info').show(500).addClass('is-demo');
        }
      })
      $('.PageOverlay').on('click',function(){
        $(this).removeClass('is-visible');
        $('.mobile-search-info').hide(500).removeClass('is-demo');
      })
    }
    $('#search-focus').on('click',function(){
        $("body").css('overflow', 'hidden'); 
        $("body").addClass("active-overlay");
      $(".Search__Results").trigger("click");
    });
    
    $(document).on('click','.Search__Close',function(){
        $('.Search__Results').attr('aria-hidden','true');
        $("body").removeClass("active-overlay");
        $("body").css('overflow', 'auto'); 
    });
    $('.PageOverlay').on('click',function(){
          $('.Search__Results').attr('aria-hidden','true');
          $("body").removeClass("active-overlay");
          $("body").css('overflow', 'auto');  
      });
// $(document).on('click','.Search__Close',function(){
//   $('.Search__Results').attr('aria-hidden','true');
// })
$('.Header__Icon[data-action="toggle-search"]').click(function(e){
  e.stopPropagation()
})

// Mega Menu
// var getMainImg = $('.style-left-linklist-right-two-image-grid .MegaMenu__PushImageWrapper ').html();
// var getMainText = $('.style-left-linklist-right-two-image-grid .MegaMenu__PushHeading').html();
// $('.style-left-linklist-right-two-image-grid .MegaMenu__Inner .Linklist__Item').hover(function(){
//   var getImgUrl = $(this).find('a').attr('data-collections-img'),
//       getCollectionsCount = $(this).find('a').attr('data-collections-count');
//   if(getImgUrl != '' && getCollectionsCount != '' ){
//     $('.MegaMenu__PushImageWrapper').html(`<img class="Image--fadeIn Image--lazyLoaded" data-src="${getImgUrl}" alt="" src="${getImgUrl}"><span class="Image__Loader"></span>`);
//     $('.MegaMenu__PushHeading').addClass('small-text').html(getCollectionsCount + ' ' + 'products');
//   }else{
//     outerWork(getMainImg,getMainText)
//   }
// },function(){
//   outerWork(getMainImg,getMainText)
// })

function outerWork(getMainImg,getMainText){
  $('.MegaMenu__PushImageWrapper').html(getMainImg);
  $('.MegaMenu__PushHeading').removeClass('small-text').html(getMainText);
}

$('.sidemenu-tab-wrapper .Collapsible').click(function(){
  var getTabName = $(this).attr('data-tab-handle');
  $('.sidemenu-tab-wrapper .Collapsible.activeTab').removeClass('activeTab');
  $(this).addClass('activeTab')
  $('.nav-tab-contents .Collapsible.tab-content-wrapper').addClass('tab-contents');
  $(`.menu-collections-wrapper`).addClass('tab-contents');
  $('.nav-tab-contents .Collapsible.tab-content-wrapper.active_tab').removeClass('active_tab');
  $(`.nav-tab-contents .Collapsible[data-tab="${getTabName}"]`).removeClass('tab-contents').addClass('active_tab');
  $(`.menu-collections-wrapper[data-img-tab="${getTabName}"]`).removeClass('tab-contents');
})

$('#search-focus').on('keyup keypress blur change focus', function(e) {
  $('.Header__MainNav .HorizontalList__Item.is-expanded').removeClass('is-expanded').find('.MegaMenu, .DropdownMenu').attr('aria-hidden',true);
  $('#nav-backdrop').removeClass('is-overlay');
  $('.megamenu_content_box').css('height',0);
});
 
if(Shopify.optionsMap){
  $('.ProductForm .ProductForm__Option input[type=radio]').click(function() {
    if($(".ProductForm .ProductForm__Variants .ProductForm__Option--labelled").length > 1){
      setTimeout(function(){
        var $thisval = $('.ProductForm .ProductForm__Option[data-option=1] input[type=radio]:checked').val();
        // var $thisval = $(this).val();
        var $root = Shopify.optionsMap.root;
        $('.ProductForm .ProductForm__Option[data-option=0] .HorizontalList__Item').removeClass("soldout_variant")
        for(i=0; i < $root.length; i++){
          var $key = $root[i];
          if($.inArray($thisval,Shopify.optionsMap[$key]) == -1){
            $(".ProductForm .ProductForm__Option[data-option=0] input[value='"+$key+"']").parents(".HorizontalList__Item").addClass("soldout_variant");
            $(".ProductForm .ProductForm__Option[data-option=0] input[value='"+$key+"']").attr('aria-label', 'sold out');
          }
        }
      },100);
    }
  });
  $('.ProductForm .ProductForm__Option[data-option=1] input[type=radio]:checked').click();
}

// $( "#search-focus" ).focus(function() {
//   $("body").css('overflow', 'hidden'); 
// }).focusout(function() {
//   $("body").css('overflow', 'auto'); 
// });
//  $("#search-focus").click(function(){
//     $("body").addClass("active-overlay");
// });

// $(".search_close_and_count").click(function(){
//     $("body").removeClass("active-overlay");
// });