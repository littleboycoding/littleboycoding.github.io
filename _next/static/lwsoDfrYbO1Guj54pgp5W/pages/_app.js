(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{0:function(e,t,n){n("cM/9"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=(n("hjJ8"),n("MX0m")),o=n.n(i),s=n("o0o1"),c=n.n(s),l=n("vcXL"),u=n.n(l),f=n("miPH"),d=n.n(f);function h(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState}function p(){return"undefined"===typeof navigator.onLine||navigator.onLine}const g=new WeakMap;let m=0;const y=new class{constructor(e={}){this.__cache=new Map(Object.entries(e)),this.__listeners=[]}get(e){const[t]=this.serializeKey(e);return this.__cache.get(t)}set(e,t,n=!0){const[r]=this.serializeKey(e);this.__cache.set(r,t),n&&R(e,t,!1),this.notify()}keys(){return Array.from(this.__cache.keys())}has(e){const[t]=this.serializeKey(e);return this.__cache.has(t)}clear(e=!0){e&&this.__cache.forEach(e=>R(e,null,!1)),this.__cache.clear(),this.notify()}delete(e,t=!0){const[n]=this.serializeKey(e);t&&R(e,null,!1),this.__cache.delete(n),this.notify()}serializeKey(e){let t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";let t="arg";for(let n=0;n<e.length;++n){let r;null===e[n]||"object"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):g.has(e[n])?r=g.get(e[n]):(r=m,g.set(e[n],m++)),t+="@"+r}return t}(e)):e=String(e||""),[e,t,e?"err@"+e:""]}subscribe(e){if("function"!==typeof e)throw new Error("Expected the listener to be a function.");let t=!0;return this.__listeners.push(e),()=>{if(!t)return;t=!1;const n=this.__listeners.indexOf(e);n>-1&&(this.__listeners[n]=this.__listeners[this.__listeners.length-1],this.__listeners.length--)}}notify(){for(let e of this.__listeners)e()}},_={},x={},b={},w={},v={};const j="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),O={onLoadingSlow:()=>{},onSuccess:()=>{},onError:()=>{},onErrorRetry:function(e,t,n,r,a){if(!h())return;if(n.errorRetryCount&&a.retryCount>n.errorRetryCount)return;const i=Math.min(a.retryCount||0,8),o=~~((Math.random()+.5)*(1<<i))*n.errorRetryInterval;setTimeout(r,o,a)},errorRetryInterval:1e3*(j?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(j?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:d.a};let C=!1;if("undefined"!==typeof window&&window.addEventListener&&!C){const e=()=>{if(h()&&p())for(let e in b)b[e][0]&&b[e][0]()};window.addEventListener("visibilitychange",e,!1),window.addEventListener("focus",e,!1),C=!0}var k=O;const E=Object(r.createContext)({});E.displayName="SWRConfigContext";var I=E;const N="undefined"===typeof window,T=N?r.useEffect:r.useLayoutEffect,S=(e,t,n)=>{const r=w[e];if(e&&r)for(let a=0;a<r.length;++a)r[a](!1,t,n)},R=async(e,t,n=!0)=>{const[r]=y.serializeKey(e);if(!r)return;if("undefined"===typeof t)return((e,t=!0)=>{const[n,,r]=y.serializeKey(e);if(!n)return;const a=w[n];if(n&&a){const e=y.get(n),i=y.get(r);for(let n=0;n<a.length;++n)a[n](t,e,i,n>0)}})(e,n);let a,i;if(v[r]=Date.now()-1,t&&"function"===typeof t)try{a=await t(y.get(r))}catch(s){i=s}else if(t&&"function"===typeof t.then)try{a=await t}catch(s){i=s}else a=t;"undefined"!==typeof a&&y.set(r,a,!1);const o=w[r];if(o)for(let c=0;c<o.length;++c)o[c](!!n,a,i,c>0);if(i)throw i;return a};I.Provider;var L=function(...e){let t,n,a={};e.length>=1&&(t=e[0]),e.length>2?(n=e[1],a=e[2]):"function"===typeof e[1]?n=e[1]:"object"===typeof e[1]&&(a=e[1]);const[i,o,s]=y.serializeKey(t);a=Object.assign({},k,Object(r.useContext)(I),a),"undefined"===typeof n&&(n=a.fetcher);const c=y.get(i)||a.initialData,l=y.get(s),u=Object(r.useRef)({data:!1,error:!1,isValidating:!1}),f=Object(r.useRef)({data:c,error:l,isValidating:!1}),d=Object(r.useState)(null)[1];let g=Object(r.useCallback)(e=>{let t=!1;for(let n in e)f.current[n]=e[n],u.current[n]&&(t=!0);(t||a.suspense)&&d({})},[]);const m=Object(r.useRef)(!1),j=Object(r.useRef)(i),O=Object(r.useCallback)((e,t)=>R(i,e,t),[i]),C=Object(r.useCallback)(async(e={})=>{if(!i||!n)return!1;if(m.current)return!1;e=Object.assign({dedupe:!1},e);let t=!0,r="undefined"!==typeof _[i]&&e.dedupe;try{let e,c;if(g({isValidating:!0}),r?(c=x[i],e=await _[i]):(_[i]&&(v[i]=Date.now()-1),a.loadingTimeout&&!y.get(i)&&setTimeout(()=>{t&&a.onLoadingSlow(i,a)},a.loadingTimeout),_[i]=null!==o?n(...o):n(i),x[i]=c=Date.now(),e=await _[i],setTimeout(()=>{delete _[i],delete x[i]},a.dedupingInterval),a.onSuccess(e,i,a)),v[i]&&c<=v[i])return g({isValidating:!1}),!1;y.set(i,e,!1),y.set(s,void 0,!1);const l={isValidating:!1};"undefined"!==typeof f.current.error&&(l.error=void 0),a.compare(f.current.data,e)||(l.data=e),g(l),r||S(i,e,void 0)}catch(c){if(delete _[i],delete x[i],y.set(s,c,!1),f.current.error!==c&&(g({isValidating:!1,error:c}),r||S(i,void 0,c)),a.onError(c,i,a),a.shouldRetryOnError){const t=(e.retryCount||0)+1;a.onErrorRetry(c,i,a,C,Object.assign({dedupe:!0},e,{retryCount:t}))}}return t=!1,!0},[i]);if(T(()=>{if(!i)return;m.current=!1;const e=f.current.data,t=y.get(i)||a.initialData;j.current===i&&a.compare(e,t)||(g({data:t}),j.current=i);const n=()=>C({dedupe:!0});let r;a.initialData||("undefined"!==typeof t&&!N&&window.requestIdleCallback?window.requestIdleCallback(n):n()),a.revalidateOnFocus&&(r=function(e,t){let n=!1;return(...r)=>{n||(n=!0,e(...r),setTimeout(()=>n=!1,t))}}(n,a.focusThrottleInterval),b[i]?b[i].push(r):b[i]=[r]);const o=(e=!0,t,r,i=!0)=>{const o={};let s=!1;return"undefined"===typeof t||a.compare(f.current.data,t)||(o.data=t,s=!0),f.current.error!==r&&(o.error=r,s=!0),s&&g(o),!!e&&(i?n():C())};w[i]?w[i].push(o):w[i]=[o];let s=null;return!N&&window.addEventListener&&a.revalidateOnReconnect&&window.addEventListener("online",s=n),()=>{if(g=()=>null,m.current=!0,r&&b[i]){const e=b[i],t=e.indexOf(r);t>=0&&(e[t]=e[e.length-1],e.pop())}if(w[i]){const e=w[i],t=e.indexOf(o);t>=0&&(e[t]=e[e.length-1],e.pop())}!N&&window.removeEventListener&&null!==s&&window.removeEventListener("online",s)}},[i,C]),T(()=>{let e=null;const t=async()=>{f.current.error||!a.refreshWhenHidden&&!h()||!a.refreshWhenOffline&&!p()||await C({dedupe:!0}),a.refreshInterval&&(e=setTimeout(t,a.refreshInterval))};return a.refreshInterval&&(e=setTimeout(t,a.refreshInterval)),()=>{e&&clearTimeout(e)}},[a.refreshInterval,a.refreshWhenHidden,a.refreshWhenOffline,C]),a.suspense){if(N)throw new Error("Suspense on server side is not yet supported!");let e=y.get(i),t=y.get(s);if("undefined"===typeof e&&"undefined"===typeof t){if(_[i]||C(),_[i]&&"function"===typeof _[i].then)throw _[i];e=_[i]}if("undefined"===typeof e&&t)throw t;return{error:t,data:e,revalidate:C,mutate:O,isValidating:f.current.isValidating}}return Object(r.useMemo)(()=>{const e={revalidate:C,mutate:O};return Object.defineProperties(e,{error:{get:function(){return u.current.error=!0,f.current.error}},data:{get:function(){return u.current.data=!0,f.current.data}},isValidating:{get:function(){return u.current.isValidating=!0,f.current.isValidating}}}),e},[C])};new Map;var V=L,z=n("IP2g"),P=n("8tEE"),X=[".userContainer.jsx-2083173085{border-bottom:1px dashed #ccc;padding:15px 50px 15px 50px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".userImage.jsx-2083173085{width:150px;height:150px;object-fit:cover;border-radius:5px;}",".userInfo.jsx-2083173085{margin-left:10px;width:calc(100% - 160px);}","@media screen and (max-width:900px){.userContainer.jsx-2083173085{display:block;}.userInfo.jsx-2083173085{width:100%;margin-left:0;}.userImage.jsx-2083173085{margin-bottom:20px;}}"];X.__hash="2083173085";var H=X,K=a.a.createElement;function M(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u()(e).then((function(e){return e.json()})));case 1:case"end":return t.stop()}}),null,null,null,Promise)}var W=function(e){var t=V("https://api.github.com/users/littleboycoding",M),n=t.data;return t.error,n?n?K(a.a.Fragment,null,K(o.a,{id:H.__hash},H),K("div",{className:"jsx-".concat(H.__hash)+" userContainer"},K("img",{src:n.avatar_url,alt:"picture of thanawat",className:"jsx-".concat(H.__hash)+" userImage"}),K("div",{className:"jsx-".concat(H.__hash)+" userInfo"},K("b",{style:{fontSize:"20px"},className:"jsx-".concat(H.__hash)},n.name)," @".concat(n.login),K("br",{className:"jsx-".concat(H.__hash)}),K(z.a,{icon:P.b})," ",K("a",{target:"_blank",href:"https://github.com/littleboycoding",className:"jsx-".concat(H.__hash)},"GitHub")," ",K(z.a,{icon:P.a})," ",K("a",{target:"_blank",href:"https://www.facebook.com/littleboycoding",className:"jsx-".concat(H.__hash)},"Facebook"),K("p",{className:"jsx-".concat(H.__hash)},n.bio)))):void 0:K(a.a.Fragment,null,K(o.a,{id:H.__hash},H),K("div",{className:"jsx-".concat(H.__hash)+" userContainer"},K("div",{src:"#",style:{backgroundColor:"#CCC"},className:"jsx-".concat(H.__hash)+" userImage"}),K("div",{className:"jsx-".concat(H.__hash)+" userInfo"},K("b",{style:{fontSize:"20px"},className:"jsx-".concat(H.__hash)},"Thanawat Yodnil")," @littleboycoding",K("br",{className:"jsx-".concat(H.__hash)}),K(z.a,{icon:P.b})," ",K("a",{target:"_blank",href:"https://github.com/littleboycoding",className:"jsx-".concat(H.__hash)},"GitHub")," ",K(z.a,{icon:P.a})," ",K("a",{target:"_blank",href:"https://www.facebook.com/littleboycoding",className:"jsx-".concat(H.__hash)},"Facebook"))))},A=[".container.jsx-2567176745{width:55%;min-height:calc(100% - 60px);min-width:900px;position:absolute;left:50%;top:60px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);}",".content.jsx-2567176745{padding:0px 30px 30px 30px;position:relative;-webkit-animation:fade-jsx-2567176745 0.4s;animation:fade-jsx-2567176745 0.4s;min-height:100px;}",".footer.jsx-2567176745{padding:30px 0px 30px 0px;border-top:1px dashed #ccc;text-align:center;}","@-webkit-keyframes fade-jsx-2567176745{from{opacity:0;}to{opacity:1;}}","@keyframes fade-jsx-2567176745{from{opacity:0;}to{opacity:1;}}","@media screen and (max-width:900px){.container.jsx-2567176745{width:100%;min-width:0;left:0;top:0;position:static;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}.content.jsx-2567176745{padding:0px 20px 20px 20px;}}"];A.__hash="2567176745";var D=A,F=a.a.createElement;var J=function(e){return F(a.a.Fragment,null,F(o.a,{id:D.__hash},D),F("div",{className:"jsx-".concat(D.__hash)+" container"},F(W,null),F("div",{className:"jsx-".concat(D.__hash)+" content"},e.children),F("div",{className:"jsx-".concat(D.__hash)+" footer"},F("p",{className:"jsx-".concat(D.__hash)},"Created with \u2764 by Thanawat Yodnil",F("br",{className:"jsx-".concat(D.__hash)}),F("br",{className:"jsx-".concat(D.__hash)}),"\xa9 Unlicense Since 2562"))))},q=n("nOHt"),G=n.n(q),Y=n("7O5W"),B=(n("VAPu"),n("wHSu")),U=n("8Kt/"),Q=n.n(U),Z=a.a.createElement;Y.a.autoAddCss=!1;t.default=function(e){var t=e.Component,n=e.pageProps,i=Object(r.useState)(!1),o=i[0],s=i[1];return Object(r.useEffect)((function(){return G.a.events.on("routeChangeStart",(function(){s(!0)})),G.a.events.on("routeChangeComplete",(function(){s(!1)})),function(){G.a.events.off("routeChangeStart",(function(){s(!0)})),G.a.events.off("routeChangeComplete",(function(){s(!1)}))}})),Z(a.a.Fragment,null,Z(J,null,o?Z("p",n,Z(z.a,{icon:B.b})," \u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25",Z(Q.a,null,Z("title",null,"\u0e01\u0e33\u0e25\u0e31\u0e07\u0e42\u0e2b\u0e25\u0e14\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25 - Little Boy Coding"))):Z(t,n)))}},VAPu:function(e,t,n){},"cM/9":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},hjJ8:function(e,t,n){},miPH:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty;e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var o,s,c,l=r(t),u=r(n);if(l&&u){if((s=t.length)!=n.length)return!1;for(o=s;0!==o--;)if(!e(t[o],n[o]))return!1;return!0}if(l!=u)return!1;var f=t instanceof Date,d=n instanceof Date;if(f!=d)return!1;if(f&&d)return t.getTime()==n.getTime();var h=t instanceof RegExp,p=n instanceof RegExp;if(h!=p)return!1;if(h&&p)return t.toString()==n.toString();var g=a(t);if((s=g.length)!==a(n).length)return!1;for(o=s;0!==o--;)if(!i.call(n,g[o]))return!1;for(o=s;0!==o--;)if(!e(t[c=g[o]],n[c]))return!1;return!0}return t!==t&&n!==n}},vcXL:function(e,t,n){"use strict";var r=self.fetch.bind(self);e.exports=r,e.exports.default=e.exports}},[[0,0,2,5,6,1,3,4]]]);