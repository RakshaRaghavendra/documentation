(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{240:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(d,i(i({ref:t},p),{},{components:n})):r.a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(240)),c={title:"API Management",sidebar_label:"API"},i={unversionedId:"howtos/create/api-management",id:"howtos/create/api-management",isDocsHomePage:!1,title:"API Management",description:"How to add a new API?",source:"@site/docs/howtos/create/api-management.md",slug:"/howtos/create/api-management",permalink:"/docs/howtos/create/api-management",version:"current",sidebar_label:"API",sidebar:"howtos",previous:{title:"Database Management",permalink:"/docs/howtos/create/database-management"},next:{title:"Localisation",permalink:"/docs/howtos/create/localisation"}},l=[{value:"How to add a new API?",id:"how-to-add-a-new-api",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"how-to-add-a-new-api"},"How to add a new API?"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Click on Studio, go to API tab. On the API tab, click on ",Object(o.b)("inlineCode",{parentName:"li"},"+ Create new API")," button.")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/4LTVGU1PwN5m1615524657413.jpg",alt:"Create new API"}))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Enter an API name. API names are alpha-numeric names in Camel Case and we can not have multiple APIs with the same name. The ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://official-joke-api.appspot.com/random_joke"}),"joke API")," used below returns a joke with a punchline in the GET request.")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/xv0tC3Mrgv0K1615524681991.jpg",alt:"Add joke API"}))),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Once added, you can test the API by hitting ",Object(o.b)("inlineCode",{parentName:"li"},"Send")," button. If the API is correctly added and the endpoint works, you should be able to see a sample response as below. ")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/6LksNpELXBBj1615524782194.jpg",alt:"API Response"}))),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Don't forget to click on save button on the bottom left corner, otherwise you won't get a joke. Now you may laugh! \ud83d\ude06")))}s.isMDXComponent=!0}}]);