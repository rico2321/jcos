(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{1127:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return t(5195)}])},5403:function(n,e,t){"use strict";t.d(e,{t:function(){return a}});var r=t(5893),i=t(5331);t(7294);var s={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}},a=function(n){var e=n.children;return(0,r.jsx)(i.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:s,transition:{duration:.4,type:"easeInOut"},style:{position:"relative",marginTop:"1rem",backgroundColor:"inherit"},children:e})}},7963:function(n,e,t){"use strict";t.d(e,{E:function(){return l}});var r=t(5893),i=t(9008),s=t.n(i);t(7294);var a=t(5403),c=t(7600),l=function(n){var e=n.children,t=n.title,i="".concat(t," - Mauricio Siu");return(0,r.jsx)(a.t,{children:(0,r.jsxs)(c.k,{direction:"column",css:{maxW:"640px",ml:"auto",mr:"auto","@xsMax":{px:"$10"}},children:[t&&(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:i}),(0,r.jsx)("meta",{name:"twitter:title",content:i}),(0,r.jsx)("meta",{property:"og:title",content:i})]}),e]})})}},5195:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return C},default:function(){return T}});var r=t(6042),i=t(9396),s=t(5893),a=t(7294),c=t(3659),l=t(7963),o=t(6979),u=t(3585),d=t(9534),h=t(603),p=t(6010),x=t(7087),f=t(3945),m=t.n(f),Z=t(7568),j=t(655),v=function(){var n,e=(0,a.useState)(null),t=e[0],r=e[1];return[t,(n=(0,Z.Z)(function(n){var e;return(0,j.__generator)(this,function(t){switch(t.label){case 0:if(!(null==navigator?void 0:navigator.clipboard))return console.warn("Clipboard not supported"),[2,!1];t.label=1;case 1:return t.trys.push([1,3,,4]),[4,navigator.clipboard.writeText(n)];case 2:return t.sent(),r(n),[2,!0];case 3:return e=t.sent(),console.warn("Copy failed",e),r(null),[2,!1];case 4:return[2]}})}),function(e){return n.apply(this,arguments)})]},g=t(8182),_=t.n(g),y=t(2237),b=t.n(y),w=t(9070),N=t.n(w),k=function(n){var e,t=n.blockClass,c=n.children,l=n.language,o=void 0===l?"tsx":l,u=n.linesOn,d=void 0!==u&&u,f=n.disableTabs,Z=void 0!==f&&f,j=(0,h.Z)(v(),2);j[0],j[1];var g=(0,a.useState)("Copy to clipboard");g[0],g[1];var y="string"==typeof c?c.toString().trim():null==c?void 0:null===(e=c.props)||void 0===e?void 0:e.children.toString().trim(),w=(0,a.useMemo)(function(){switch(o){case"tsx":return"typescript";case"js":return"babel";default:return"html"}},[o]),k=m().format(y,{parser:w,plugins:[_(),b(),N()],useTabs:!0,printWidth:80}).trim().replace(/;$/,"");return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(x.ZP,(0,i.Z)((0,r.Z)({},x.lG),{theme:null,code:k,language:o,children:function(n){var e=n.className,a=n.style,c=n.tokens,l=n.getLineProps,o=n.getTokenProps;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("pre",{className:(0,p.Z)(e,Z?"m-[1rem_0rem_1.25rem_0rem] rounded-xl p-[14px]":"m-[0rem_0rem_1.25rem_0rem] p-[14px]","max-h-[32rem] overflow-auto  rounded-b-xl text-left",t),style:a,children:c.map(function(n,e){return(0,s.jsxs)("div",(0,i.Z)((0,r.Z)({},l({line:n,key:e})),{children:[d&&(0,s.jsx)("span",{className:"table-cell select-none pr-3 text-right text-white opacity-50",children:e+1}),(0,s.jsx)("span",{className:"table-cell ",children:n.map(function(n,e){return(0,s.jsx)("span",(0,r.Z)({},o({token:n,key:e,className:"text-white "})),e)})})]}),e)})})})}}))})},E=function(n){var e=n.children,t=n.className,a=(0,d.Z)(n,["children","className"]);return t?(0,s.jsx)(k,(0,i.Z)((0,r.Z)({language:t.split("-")[1]},a),{children:e})):(0,s.jsx)("code",{className:"text-sm text-primary",children:e})},S={h1:function(n){return(0,s.jsx)(o.Z,(0,i.Z)((0,r.Z)({h1:!0},n),{css:{mb:"$6"}}))},h2:function(n){return(0,s.jsx)(o.Z,(0,r.Z)({h2:!0},n))},h3:function(n){return(0,s.jsx)(o.Z,(0,r.Z)({h3:!0},n))},h4:function(n){return(0,s.jsx)(o.Z,(0,r.Z)({h4:!0},n))},h5:function(n){return(0,s.jsx)(o.Z,(0,r.Z)({h5:!0},n))},h6:function(n){return(0,s.jsx)(o.Z,(0,r.Z)({h6:!0},n))},pre:function(n){return(0,s.jsx)(E,(0,r.Z)({},n))},code:function(n){return(0,s.jsx)(E,(0,r.Z)({},n))},p:function(n){return(0,s.jsx)(o.Z,{as:"p",css:{fontFamily:"inherit",my:"$9",lineHeight:"$xl",letterSpacing:"$normal"},children:n.children})},a:function(n){var e=!/^([a-z0-9]*:|.{0})\/\/.*$/gim.test(n.href);return(0,s.jsx)(u.ZP,{href:n.href,target:e?"_self":"_blank",css:{width:"fit-content",display:"initial"},children:n.children})}},C=!0,T=function(n){var e=n.source;return(0,s.jsx)(l.E,{children:(0,s.jsx)(c.R,(0,i.Z)((0,r.Z)({},e),{components:S}))})}}},function(n){n.O(0,[54,791,596,993,887,774,888,179],function(){return n(n.s=1127)}),_N_E=n.O()}]);