(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{Lhi7:function(t,e,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("8Kt/"),i=n.n(a),c=n("nOHt"),s=o.a.createElement;e.a=function(t){var e=Object(c.useRouter)(),n=t.title?t.title+" - Little Boy Coding":"Little Boy Coding: My personal blog \ud83d\udd25\ud83d\ude80\ud83c\udf89";return s(i.a,null,s("title",{key:"title"},n),s("meta",{key:"description",name:"description",content:t.description}),s("meta",{key:"author",name:"author",content:"Thanawat Yodnil"}),s("meta",{name:"keywords",key:"keywords",content:"\u0e01\u0e32\u0e23\u0e2a\u0e23\u0e49\u0e32\u0e07\u0e40\u0e27\u0e47\u0e1a\u0e44\u0e0b\u0e15\u0e4c, blog, Thanawat Yodnil, web developer"}),s("meta",{key:"og:title",property:"og:title",content:n}),s("meta",{key:"og:image",property:"og:image",content:t.thumbnail?0===t.thumbnail.search("http")?t.thumbnail:t.basedomain+t.basepath+t.thumbnail:"https://www.gravatar.com/avatar/81f506d45aad1acc94b8d6a64bc6a448?s=1000"}),s("meta",{key:"og:url",property:"og:url",content:t.basedomain+e.asPath}),s("meta",{key:"og:type",property:"og:type",content:"article"}),s("meta",{key:"og:description",property:"og:description",content:t.homepage?"\u0e40\u0e27\u0e47\u0e1a\u0e1a\u0e25\u0e47\u0e2d\u0e01\u0e40\u0e25\u0e47\u0e01\u0e46\u0e02\u0e2d\u0e07\u0e19\u0e31\u0e01\u0e1e\u0e31\u0e12\u0e19\u0e32 \ud83d\udcbb \u0e17\u0e35\u0e48\u0e0a\u0e2d\u0e1a\u0e04\u0e49\u0e19\u0e2b\u0e32\u0e2a\u0e34\u0e48\u0e07\u0e43\u0e2b\u0e21\u0e48\u0e46 \u0e41\u0e25\u0e30\u0e17\u0e33\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2d\u0e38\u0e14\u0e21\u0e01\u0e32\u0e13\u0e4c\u0e15\u0e31\u0e27\u0e40\u0e2d\u0e07":t.description}))}},RNiq:function(t,e,n){"use strict";n.r(e),n.d(e,"__N_SSG",(function(){return f}));var r=n("MX0m"),o=n.n(r),a=n("q1tI"),i=n.n(a),c=n("YFqc"),s=n.n(c),l=n("Lhi7"),u=i.a.createElement;function p(t){var e=t.data,n=e.blog.length>0?e.blog.map((function(t){return u(a.Fragment,{key:t.fileName},u(o.a,{id:"1101828137"},["a.jsx-1101828137{-webkit-text-decoration:none;text-decoration:none;color:black;}","a.jsx-1101828137:visited{color:#555;}","a.jsx-1101828137:hover{-webkit-text-decoration:underline;text-decoration:underline;cursor:pointer;}"]),u(s.a,{href:"".concat(e.basepath,"/article/[title]"),as:"".concat(e.basepath,"/article/").concat(t.fileName)},u("a",{className:"jsx-1101828137"},u("li",{className:"jsx-1101828137"},t.title))))})):"\u0e44\u0e21\u0e48\u0e21\u0e35\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e43\u0e19\u0e02\u0e13\u0e30\u0e19\u0e35\u0e49";return u("ul",null,n)}var f=!0;e.default=function(t){return u(i.a.Fragment,null,u(l.a,{basedomain:t.basedomain,basepath:t.basepath,description:t.description,homepage:!0}),u("h1",null,"\ud83d\udcf0 BLOG"),u(p,{data:t}))}},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("lwsE"),o=n("W8MJ"),a=n("7W2i"),i=n("a1gu"),c=n("Nsbk");function s(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var l=n("TqRt"),u=n("284h");e.__esModule=!0,e.default=void 0;var p,f=u(n("q1tI")),h=n("QmWs"),d=n("g/15"),v=l(n("nOHt")),m=n("elyg");function y(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var g=new Map,b=window.IntersectionObserver,w={};function k(){return p||(b?p=new b((function(t){t.forEach((function(t){if(g.has(t.target)){var e=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(p.unobserve(t.target),g.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var x=function(t){a(l,t);var e,n=(e=l,function(){var t,n=c(e);if(s()){var r=c(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return i(this,t)});function l(t){var e;return r(this,l),(e=n.call(this,t)).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var e=null,n=null,r=null;return function(o,a){if(r&&o===e&&a===n)return r;var i=t(o,a);return e=o,n=a,r=i,i}}((function(t,e){return{href:(0,m.addBasePath)(y(t)),as:e?(0,m.addBasePath)(y(e)):e}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),i=a.href,c=a.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(i)){var s=window.location.pathname;i=(0,h.resolve)(s,i),c=c?(0,h.resolve)(s,c):i,t.preventDefault();var l=e.props.scroll;null==l&&(l=c.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](i,c,{shallow:e.props.shallow}).then((function(t){t&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return o(l,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&b&&t&&t.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=k();return n?(n.observe(t),g.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}g.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();v.default.prefetch(e[0],e[1],t).catch((function(t){0})),w[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=f.default.createElement("a",null,e));var a=f.Children.only(e),i={ref:function(e){t.handleRef(e),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(e):"object"===typeof a.ref&&(a.ref.current=e))},onMouseEnter:function(e){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(i.href=o||r),f.default.cloneElement(a,i)}}]),l}(f.Component);e.default=x},"m0L+":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["m0L+",0,2,1,3]]]);