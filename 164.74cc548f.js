(window.webpackJsonp=window.webpackJsonp||[]).push([[164,21,103],{248:function(e,t,n){"use strict";var a=n(3),r=n(7),c=n(0),o=n.n(c),l=n(24),u=n(22),i=n(244),s=n(245),m=n(243),f=n(23),b=n(249),h=n(332),d=n(333),O=n(254),j=null;function g(e){var t=e.hit,n=e.children;return o.a.createElement(m.a,{to:t.url},n)}function p(e){var t=e.state,n=e.onClose,a=Object(b.a)().generateSearchPageLink;return o.a.createElement(m.a,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function v(e){var t,m,b=e.contextualSearch,v=Object(r.a)(e,["contextualSearch"]),k=Object(u.default)().siteMetadata,E=Object(O.a)(),C=null!==(t=null===(m=v.searchParameters)||void 0===m?void 0:m.facetFilters)&&void 0!==t?t:[],w=b?[].concat(E,C):C,P=Object.assign({},v.searchParameters,{facetFilters:w}),S=Object(s.b)().withBaseUrl,y=Object(i.useHistory)(),F=Object(c.useRef)(null),N=Object(c.useState)(!1),R=N[0],x=N[1],M=Object(c.useState)(null),I=M[0],U=M[1],A=Object(c.useCallback)((function(){return j?Promise.resolve():Promise.all([n.e(165).then(n.bind(null,253)),Promise.all([n.e(0),n.e(166)]).then(n.bind(null,252)),n.e(0).then(n.t.bind(null,56,7))]).then((function(e){var t=e[0].DocSearchModal;j=t}))}),[]),B=Object(c.useCallback)((function(){A().then((function(){x(!0)}))}),[A,x]),H=Object(c.useCallback)((function(){x(!1)}),[x]),J=Object(c.useCallback)((function(e){A().then((function(){x(!0),U(e.key)}))}),[A,x,U]),L=Object(c.useRef)({navigate:function(e){var t=e.itemUrl;y.push(t)}}).current,V=Object(c.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:S(""+t.pathname+t.hash)})}))})).current,Y=Object(c.useMemo)((function(){return function(e){return o.a.createElement(p,Object(a.a)({},e,{onClose:H}))}}),[H]),_=Object(c.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",k.docusaurusVersion),e}),[k.docusaurusVersion]);return Object(h.a)({isOpen:R,onOpen:B,onClose:H,onInput:J,searchButtonRef:F}),o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,null,o.a.createElement("link",{rel:"preconnect",href:"https://"+v.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.a.createElement(d.a,{onTouchStart:A,onFocus:A,onMouseOver:A,onClick:B,ref:F}),R&&Object(l.createPortal)(o.a.createElement(j,Object(a.a)({onClose:H,initialScrollY:window.scrollY,initialQuery:I,navigator:L,transformItems:V,hitComponent:g,resultsFooterComponent:Y,transformSearchClient:_},v,{searchParameters:P})),document.body))}t.a=function(){var e=Object(u.default)().siteConfig;return o.a.createElement(v,e.themeConfig.algolia)}},266:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(250);t.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);