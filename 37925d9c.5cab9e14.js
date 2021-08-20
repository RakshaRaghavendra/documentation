(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{114:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),r=(n(0),n(273)),c=["components"],i={title:"Chatbot SDK for cordova",sidebar_label:"cordova Chatbot SDK"},s={unversionedId:"platform_concepts/channelConfiguration/cordova",id:"platform_concepts/channelConfiguration/cordova",isDocsHomePage:!1,title:"Chatbot SDK for cordova",description:"Installation",source:"@site/docs/platform_concepts/channelConfiguration/cordova.md",slug:"/platform_concepts/channelConfiguration/cordova",permalink:"/docs/platform_concepts/channelConfiguration/cordova",version:"current",sidebar_label:"cordova Chatbot SDK",sidebar:"platform_concepts",previous:{title:"react-native Chatbot SDK",permalink:"/docs/platform_concepts/channelConfiguration/react-native"},next:{title:"Facebook Messenger",permalink:"/docs/platform_concepts/channelConfiguration/facebook-messenger"}},l=[{value:"Installation",id:"installation",children:[{value:"cordova",id:"cordova",children:[]}]},{value:"Usage",id:"usage",children:[{value:"Set botId",id:"set-botid",children:[]},{value:"YM AuthenticationToken",id:"ym-authenticationtoken",children:[]},{value:"Push Notifications",id:"push-notifications",children:[]},{value:"Payload",id:"payload",children:[]},{value:"On-Prem Deployments",id:"on-prem-deployments",children:[]},{value:"Speech to Text",id:"speech-to-text",children:[]},{value:"Present chatbot",id:"present-chatbot",children:[]}]},{value:"Bot Events",id:"bot-events",children:[]},{value:"Close bot",id:"close-bot",children:[]},{value:"Demo App",id:"demo-app",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,c);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("h3",{id:"cordova"},"cordova"),Object(r.b)("p",null,"Run this command in terminal form project root folder"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"ionic cordova plugin add cordova-plugin-ymchat\n")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h3",{id:"set-botid"},"Set botId"),Object(r.b)("p",null,"This is the first and compulsory step."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'cordova.plugins.ymchat.setBotId("botId");\n')),Object(r.b)("h3",{id:"ym-authenticationtoken"},"YM AuthenticationToken"),Object(r.b)("p",null,"ymAuthenticationToken is used to associate an identity of the user with the chat bot."),Object(r.b)("p",null,"Whenever chatbot is launched with ymAuthenticationToken it will load the previous chats associated with this user since ",Object(r.b)("strong",{parentName:"p"},"inception"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'cordova.plugins.ymchat.setAuthenticationToken("token");\n')),Object(r.b)("p",null,"Note: History will load only when ",Object(r.b)("inlineCode",{parentName:"p"},"Show history")," flag is enabled in the channel settings"),Object(r.b)("h3",{id:"push-notifications"},"Push Notifications"),Object(r.b)("p",null,"YMChat supports firebase notifications. Pass your ",Object(r.b)("inlineCode",{parentName:"p"},"FCM token")," in setDeviceToken method."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'cordova.plugins.ymchat.setDeviceToken("token");\n')),Object(r.b)("p",null,"Note: Firebase service account key is required to send notifications. You can share the service account key with us. More info ",Object(r.b)("a",{parentName:"p",href:"https://developers.google.com/assistant/engagement/notifications#get_a_service_account_key"},"here")),Object(r.b)("h3",{id:"payload"},"Payload"),Object(r.b)("p",null,"Additional information can be passed in the form of key value pair from app to bot using payload."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'cordova.plugins.ymchat.setPayload({ "name": "yellow" });\n')),Object(r.b)("p",null,"Payload can be used to pass information from host app to bot. The payload dictionary should be JSON compatible else an error will be thrown"),Object(r.b)("p",null,"For passing data from bot to app refer bot ",Object(r.b)("a",{parentName:"p",href:"#bot-events"},"Bot Events")),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"payload security")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Payload is securely passed in HTTPS post request to protect the information passed in it"))),Object(r.b)("h3",{id:"on-prem-deployments"},"On-Prem Deployments"),Object(r.b)("p",null,"ymchat-react-native supports bots with on-prem deployments. For the bot to work, pass the on-prem URL to ",Object(r.b)("inlineCode",{parentName:"p"},"setCustomURL()")," method."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'cordova.plugins.ymchat.setCustomURL("https://your-on-prem-url.com");\n')),Object(r.b)("h3",{id:"speech-to-text"},"Speech to Text"),Object(r.b)("p",null,"Speech to text can be enabled and disabled by calling setEnableSpeech(). Default value is ",Object(r.b)("inlineCode",{parentName:"p"},"false")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.ymchat.setEnableSpeech(true);\n")),Object(r.b)("h4",{id:"ios"},"iOS"),Object(r.b)("p",null,"If you are supporting Speech recognization, add following snippet to Info.plist of the host app"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"<key>NSMicrophoneUsageDescription</key>  \n<string>Your microphone will be used to record your speech when you use the Voice feature.</string>\n<key>NSSpeechRecognitionUsageDescription</key>  \n<string>Speech recognition will be used to determine which words you speak into this device&apos;s microphone.</string>\n")),Object(r.b)("h3",{id:"present-chatbot"},"Present chatbot"),Object(r.b)("p",null,"Chat bot can be presented by calling ",Object(r.b)("inlineCode",{parentName:"p"},"startChatbot()"),". This method will display full screen chat view"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'cordova.plugins.ymchat.startChatbot(\n  (successResponse) => {\n    console.log(successResponse); //prints "OK"\n  },\n  (failureJSON) => {\n    console.log(JSON.stringify(failureJSON));\n    /* Console.log prints\n    {\n      "success": false,\n      "error": "This is the error occurred"\n    } */\n  }\n);\n')),Object(r.b)("h2",{id:"bot-events"},"Bot Events"),Object(r.b)("p",null,"Bot events are used to pass information from bot to app. For passing events from app to bot refer ",Object(r.b)("a",{parentName:"p",href:"#payload"},"Payload")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'cordova.plugins.ymchat.onEventFromBot((result) => {\n  console.log("Code : " + result.code); // Prints the event sent to the chat bot\n  console.log("Data : " + JSON.stringify(result.data)); // Prints the event sent to the chat bot\n});\n')),Object(r.b)("h4",{id:"bot-close-event"},"Bot close event"),Object(r.b)("p",null,"Bot close event is separately sent and it can be handled in following way."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},'cordova.plugins.ymchat.onBotClose(() => {\n  console.log("Bot Closed"); // Prints Bot Closed\n});\n')),Object(r.b)("h2",{id:"close-bot"},"Close bot"),Object(r.b)("p",null,"Bot can be closed by tapping on cross button at top, and they can be programmatically closed using ",Object(r.b)("inlineCode",{parentName:"p"},"closeBot()")," function"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"cordova.plugins.ymchat.closeBot();\n")),Object(r.b)("h2",{id:"demo-app"},"Demo App"),Object(r.b)("p",null,"A demo app can be used as a reference to better understand how this SDK can be integrated in the app\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/yellowmessenger/YMChatIonicDemo"},"https://github.com/yellowmessenger/YMChatIonicDemo")))}b.isMDXComponent=!0},273:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=o,h=b["".concat(c,".").concat(u)]||b[u]||d[u]||r;return n?a.a.createElement(h,i(i({ref:t},l),{},{components:n})):a.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);