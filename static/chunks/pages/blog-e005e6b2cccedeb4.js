(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{2858:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});let n={},o=(e,t)=>{let r=`[Next UI]${t?` [${t}]`:" "}: ${e}`;"undefined"==typeof console||n[r]||(n[r]=!0,console.warn(r))}},7484:function(e){var t;t=function(){"use strict";var e="millisecond",t="second",r="minute",n="hour",o="week",i="month",s="quarter",a="year",l="date",d="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,c=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],r=e%100;return"["+e+(t[(r-20)%10]||t[r]||t[0])+"]"}},h=function(e,t,r){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(r)+e},p="en",f={};f[p]=$;var g=function(e){return e instanceof y},m=function e(t,r,n){var o;if(!t)return p;if("string"==typeof t){var i=t.toLowerCase();f[i]&&(o=i),r&&(f[i]=r,o=i);var s=t.split("-");if(!o&&s.length>1)return e(s[0])}else{var a=t.name;f[a]=t,o=a}return!n&&o&&(p=o),o||!n&&p},b=function(e,t){if(g(e))return e.clone();var r="object"==typeof t?t:{};return r.date=e,r.args=arguments,new y(r)},x={s:h,z:function(e){var t=-e.utcOffset(),r=Math.abs(t);return(t<=0?"+":"-")+h(Math.floor(r/60),2,"0")+":"+h(r%60,2,"0")},m:function e(t,r){if(t.date()<r.date())return-e(r,t);var n=12*(r.year()-t.year())+(r.month()-t.month()),o=t.clone().add(n,i),s=r-o<0,a=t.clone().add(n+(s?-1:1),i);return+(-(n+(r-o)/(s?o-a:a-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(d){return({M:i,y:a,w:o,d:"day",D:l,h:n,m:r,s:t,ms:e,Q:s})[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};x.l=m,x.i=g,x.w=function(e,t){return b(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var y=function(){function $(e){this.$L=m(e.locale,null,!0),this.parse(e)}var h=$.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,r=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(u);if(n){var o=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],o,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return x},h.isValid=function(){return this.$d.toString()!==d},h.isSame=function(e,t){var r=b(e);return this.startOf(t)<=r&&r<=this.endOf(t)},h.isAfter=function(e,t){return b(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<b(e)},h.$g=function(e,t,r){return x.u(e)?this[t]:this.set(r,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,s){var d=this,u=!!x.u(s)||s,c=x.p(e),$=function(e,t){var r=x.w(d.$u?Date.UTC(d.$y,t,e):new Date(d.$y,t,e),d);return u?r:r.endOf("day")},h=function(e,t){return x.w(d.toDate()[e].apply(d.toDate("s"),(u?[0,0,0,0]:[23,59,59,999]).slice(t)),d)},p=this.$W,f=this.$M,g=this.$D,m="set"+(this.$u?"UTC":"");switch(c){case a:return u?$(1,0):$(31,11);case i:return u?$(1,f):$(0,f+1);case o:var b=this.$locale().weekStart||0,y=(p<b?p+7:p)-b;return $(u?g-y:g+(6-y),f);case"day":case l:return h(m+"Hours",0);case n:return h(m+"Minutes",1);case r:return h(m+"Seconds",2);case t:return h(m+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(o,s){var d,u=x.p(o),c="set"+(this.$u?"UTC":""),$=((d={}).day=c+"Date",d[l]=c+"Date",d[i]=c+"Month",d[a]=c+"FullYear",d[n]=c+"Hours",d[r]=c+"Minutes",d[t]=c+"Seconds",d[e]=c+"Milliseconds",d)[u],h="day"===u?this.$D+(s-this.$W):s;if(u===i||u===a){var p=this.clone().set(l,1);p.$d[$](h),p.init(),this.$d=p.set(l,Math.min(this.$D,p.daysInMonth())).$d}else $&&this.$d[$](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[x.p(e)]()},h.add=function(e,s){var l,d=this;e=Number(e);var u=x.p(s),c=function(t){var r=b(d);return x.w(r.date(r.date()+Math.round(t*e)),d)};if(u===i)return this.set(i,this.$M+e);if(u===a)return this.set(a,this.$y+e);if("day"===u)return c(1);if(u===o)return c(7);var $=((l={})[r]=6e4,l[n]=36e5,l[t]=1e3,l)[u]||1,h=this.$d.getTime()+e*$;return x.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var n=e||"YYYY-MM-DDTHH:mm:ssZ",o=x.z(this),i=this.$H,s=this.$m,a=this.$M,l=r.weekdays,u=r.months,$=function(e,r,o,i){return e&&(e[r]||e(t,n))||o[r].slice(0,i)},h=function(e){return x.s(i%12||12,e,"0")},p=r.meridiem||function(e,t,r){var n=e<12?"AM":"PM";return r?n.toLowerCase():n},f={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:x.s(a+1,2,"0"),MMM:$(r.monthsShort,a,u,3),MMMM:$(u,a),D:this.$D,DD:x.s(this.$D,2,"0"),d:String(this.$W),dd:$(r.weekdaysMin,this.$W,l,2),ddd:$(r.weekdaysShort,this.$W,l,3),dddd:l[this.$W],H:String(i),HH:x.s(i,2,"0"),h:h(1),hh:h(2),a:p(i,s,!0),A:p(i,s,!1),m:String(s),mm:x.s(s,2,"0"),s:String(this.$s),ss:x.s(this.$s,2,"0"),SSS:x.s(this.$ms,3,"0"),Z:o};return n.replace(c,function(e,t){return t||f[e]||o.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,l,d){var u,c=x.p(l),$=b(e),h=($.utcOffset()-this.utcOffset())*6e4,p=this-$,f=x.m(this,$);return f=((u={})[a]=f/12,u[i]=f,u[s]=f/3,u[o]=(p-h)/6048e5,u.day=(p-h)/864e5,u[n]=p/36e5,u[r]=p/6e4,u[t]=p/1e3,u)[c]||p,d?f:x.a(f)},h.daysInMonth=function(){return this.endOf(i).$D},h.$locale=function(){return f[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var r=this.clone(),n=m(e,t,!0);return n&&(r.$L=n),r},h.clone=function(){return x.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},$}(),v=y.prototype;return b.prototype=v,[["$ms",e],["$s",t],["$m",r],["$H",n],["$W","day"],["$M",i],["$y",a],["$D",l]].forEach(function(e){v[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),b.extend=function(e,t){return e.$i||(e(t,y,b),e.$i=!0),b},b.locale=m,b.isDayjs=g,b.unix=function(e){return b(1e3*e)},b.en=f[p],b.Ls=f,b.p={},b},e.exports=t()},4110:function(e){var t;t=function(){return function(e,t,r){e=e||{};var n=t.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(e,t,r,o){return n.fromToBase(e,t,r,o)}r.en.relativeTime=o,n.fromToBase=function(t,n,i,s,a){for(var l,d,u,c=i.$locale().relativeTime||o,$=e.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],h=$.length,p=0;p<h;p+=1){var f=$[p];f.d&&(l=s?r(t).diff(i,f.d,!0):i.diff(t,f.d,!0));var g=(e.rounding||Math.round)(Math.abs(l));if(u=l>0,g<=f.r||!f.r){g<=1&&p>0&&(f=$[p-1]);var m=c[f.l];a&&(g=a(""+g)),d="string"==typeof m?m.replace("%d",g):m(g,n,f.l,u);break}}if(n)return d;var b=u?c.future:c.past;return"function"==typeof b?b(d):b.replace("%s",d)},n.to=function(e,t){return i(e,t,this,!0)},n.from=function(e,t){return i(e,t,this)};var s=function(e){return e.$u?r.utc():r()};n.toNow=function(e){return this.to(s(this),e)},n.fromNow=function(e){return this.from(s(this),e)}}},e.exports=t()},7801:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r(192)}])},5403:function(e,t,r){"use strict";r.d(t,{t:function(){return s}});var n=r(5893),o=r(5331);r(7294);var i={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}},s=function(e){var t=e.children;return(0,n.jsx)(o.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:i,transition:{duration:.4,type:"easeInOut"},style:{position:"relative",marginTop:"1rem",backgroundColor:"inherit"},children:t})}},7963:function(e,t,r){"use strict";r.d(t,{E:function(){return l}});var n=r(5893),o=r(9008),i=r.n(o);r(7294);var s=r(5403),a=r(7600),l=function(e){var t=e.children,r=e.title,o="".concat(r," - Mauricio Siu");return(0,n.jsx)(s.t,{children:(0,n.jsxs)(a.k,{direction:"column",css:{maxW:"640px",ml:"auto",mr:"auto","@xsMax":{px:"$10"}},children:[r&&(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:o}),(0,n.jsx)("meta",{name:"twitter:title",content:o}),(0,n.jsx)("meta",{property:"og:title",content:o})]}),t]})})}},192:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return G},default:function(){return K}});var n=r(5893),o=r(7294),i=r(4660),s=r(6979),a=r(3952),l=r(9641),d=r(6249),u=r(2858),c=r(88);let $=({size:e,fill:t,plain:r,width:o,height:i,className:s,...a})=>(0,n.jsx)("svg",r?{className:s,fill:"none",height:e||i,stroke:t,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,viewBox:"0 0 24 24",width:e||o,...a,children:(0,n.jsx)("path",{d:"M18 6L6 18M6 6l12 12"})}:{className:s,height:e||i,viewBox:"0 0 24 24",width:e||o,...a,children:(0,n.jsx)("path",{d:"M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z",fill:t})}),h=o.memo($);var p=(0,c.Z)(h,{width:24,height:24,plain:!1,className:""}),f=r(1309),g=r(3569),m=r(6212),b=r(9975);let x=(0,m.zo)("div",{$$inputColor:"$colors$accents0",$$inputTextColor:"$colors$text",$$inputPlaceholderColor:"$colors$accents6",$$inputShadow:"$shadows$sm",$$inputBorderColor:"$colors$border",$$inputHoverBorderColor:"$colors$foreground",$$inputLabelColor:"$$inputHoverBorderColor",display:"inline-flex",flexDirection:"column",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitBoxAlign:"center",variants:{color:{default:{},primary:{$$inputHoverBorderColor:"$colors$primary",$$inputLabelColor:"$colors$primary"},secondary:{$$inputHoverBorderColor:"$colors$secondary",$$inputLabelColor:"$colors$secondary"},success:{$$inputHoverBorderColor:"$colors$success",$$inputLabelColor:"$colors$success"},warning:{$$inputHoverBorderColor:"$colors$warning",$$inputLabelColor:"$colors$warning"},error:{$$inputHoverBorderColor:"$colors$error",$$inputLabelColor:"$colors$error"}},status:{default:{},primary:{$$inputColor:"$colors$primaryLight",$$inputPlaceholderColor:"$colors$primaryLightContrast",$$inputTextColor:"$colors$primaryLightContrast",$$inputLabelColor:"$$inputTextColor",$$inputHoverBorderColor:"$colors$primary"},secondary:{$$inputColor:"$colors$secondaryLight",$$inputPlaceholderColor:"$colors$secondaryLightContrast",$$inputTextColor:"$colors$secondaryLightContrast",$$inputLabelColor:"$$inputTextColor",$$inputHoverBorderColor:"$colors$secondary"},success:{$$inputColor:"$colors$successLight",$$inputPlaceholderColor:"$colors$successLightContrast",$$inputTextColor:"$colors$successLightContrast",$$inputLabelColor:"$$inputTextColor",$$inputHoverBorderColor:"$colors$success"},warning:{$$inputColor:"$colors$warningLight",$$inputPlaceholderColor:"$colors$warningLightContrast",$$inputTextColor:"$colors$warningLightContrast",$$inputLabelColor:"$$inputTextColor",$$inputHoverBorderColor:"$colors$warning"},error:{$$inputColor:"$colors$errorLight",$$inputPlaceholderColor:"$colors$errorLightContrast",$$inputTextColor:"$colors$errorLightContrast",$$inputLabelColor:"$$inputTextColor",$$inputHoverBorderColor:"$colors$error"}},helperColor:{default:{$$inputHelperColor:"$colors$text"},primary:{$$inputHelperColor:"$colors$primary"},secondary:{$$inputHelperColor:"$colors$secondary"},success:{$$inputHelperColor:"$colors$success"},warning:{$$inputHelperColor:"$colors$warning"},error:{$$inputHelperColor:"$colors$error"}},borderWeight:{light:{$$inputBorderWeight:"$borderWeights$light"},normal:{$$inputBorderWeight:"$borderWeights$normal"},bold:{$$inputBorderWeight:"$borderWeights$bold"},extrabold:{$$inputBorderWeight:"$borderWeights$extrabold"},black:{$$inputBorderWeight:"$borderWeights$black"}},size:{xs:{$$inputBorderRadius:"$space$3",$$inputFontSize:"$fontSizes$xs",$$inputHeightRatio:"1.2",br:"$$inputBorderRadius"},sm:{$$inputBorderRadius:"$space$4",$$inputFontSize:"$fontSizes$xs",$$inputHeightRatio:"1.6",br:"$$inputBorderRadius"},md:{$$inputBorderRadius:"$space$6",$$inputFontSize:"$fontSizes$sm",$$inputHeightRatio:"2",br:"$$inputBorderRadius"},lg:{$$inputBorderRadius:"$space$7",$$inputFontSize:"$fontSizes$md",$$inputHeightRatio:"2.2",br:"$$inputBorderRadius"},xl:{$$inputBorderRadius:"$space$8",$$inputFontSize:"$fontSizes$lg",$$inputHeightRatio:"2.6",br:"$$inputBorderRadius"}},rounded:{true:{$$inputBorderRadius:"$radii$pill"}},disabled:{true:{$$inputColor:"$colors$accents1",$$inputTextColor:"$colors$accents7",$$inputPlaceholderColor:"$colors$accents7",$$inputShadow:"$shadows$sm"}}}}),y={WebkitTextFillColor:"$$inputTextColor",WebkitBackgroundClip:"text !important",caretColor:"$$inputTextColor"},v=(0,m.zo)("div",{width:"100%",br:"$$inputBorderRadius",input:{"&:-webkit-autofill":{...y,"&:hover":y,"&:focus":y,"&:active":y}},"@motion":{transition:"none"},variants:{isTextarea:{false:{display:"inline-flex",alignItems:"center",height:"calc($$inputHeightRatio * $9)"}},focused:{true:{}},isReadOnly:{false:{}},underlined:{true:{}},animated:{true:{transition:"$default"},false:{transition:"none"}}},compoundVariants:[{isReadOnly:!1,underlined:!0,css:{transform:"none"}},{focused:!0,animated:!0,isReadOnly:!1,underlined:!1,css:{transform:"translateY(-$space$1)"}}]}),C=(0,m.zo)("input",{padding:0,fontSize:"$$inputFontSize",bg:"transparent",border:"none",color:"$$inputTextColor",br:0,outline:"none",size:"100%",minWidth:0,WebkitAppearance:"none","::placeholder":{color:"$$inputPlaceholderColor",transition:"opacity 0.25s ease 0s",MozTransition:"opacity 0.25s ease 0s",MsTransition:"opacity 0.25s ease 0s",WebkitTransition:"opacity 0.25s ease 0s"},"@motion":{transition:"none","&::placeholder":{transition:"none"}},"&:disabled":{pe:"none",color:"$accents4",cursor:"not-allowed"},variants:{isTextarea:{true:{boxShadow:"none",display:"block",size:"100%",resize:"none",border:"none",outline:"none"}},focused:{true:{"&::placeholder":{opacity:0,transition:"opacity 0.25s ease 0s"}}},bordered:{true:{padding:"0 $3"}},rounded:{true:{padding:"0 $3"}},animated:{false:{transition:"none","::placeholder":{transition:"none"}}},hasLeftContent:{true:{ml:0}},hasRightContent:{true:{mr:0}}}}),w=(0,m.zo)("div",{flex:1,position:"relative",br:"$$inputBorderRadius",bg:"$$inputColor",display:"inline-flex",verticalAlign:"middle",alignItems:"center",userSelect:"none","@motion":{transition:"none","&:before":{transition:"none"},"&:after":{transition:"none"}},variants:{focused:{true:{}},isReadOnly:{true:{}},bordered:{true:{bg:"transparent",border:"none",boxShadow:"0 0 0 $$inputBorderWeight $$inputBorderColor",transition:"box-shadow 0.25s ease"}},shadow:{true:{transition:"$default"}},disabled:{true:{cursor:"not-allowed"}},underlined:{true:{bg:"transparent",[`& ${C}`]:{margin:"$2 $3"},"&:before":{content:"",position:"absolute",zIndex:"$2",width:0,bottom:0,height:"$1",left:"50%",transform:"translate(-50%)",background:"$$inputHoverBorderColor",transition:"width 0.25s ease"},"&:after":{content:"",position:"absolute",zIndex:"$1",bottom:0,width:"100%",height:"$$inputBorderWeight",bg:"$$inputBorderColor"}},false:{[`& ${C}`]:{margin:"$2 $5"}}},animated:{false:{transition:"none","&:before":{transition:"none"},"&:after":{transition:"none"}}},isTextarea:{true:{boxSizing:"border-box",width:"100%",maxWidth:"100%",height:"auto"},false:{height:"100%"}}},compoundVariants:[{bordered:!0,underlined:!0,css:{boxShadow:"0 0 0 0px $$inputBorderColor"}},{focused:!0,underlined:!0,css:{"&:before":{width:"100%"}}},{focused:!0,shadow:!0,isReadOnly:!1,underlined:!1,css:{boxShadow:"$$inputShadow"}},{focused:!0,bordered:!0,isReadOnly:!1,underlined:!1,css:{boxShadow:"0 0 0 $$inputBorderWeight $$inputHoverBorderColor"}},{bordered:!0,isReadOnly:!1,underlined:!1,css:{"&:hover":{boxShadow:"0 0 0 $$inputBorderWeight $$inputHoverBorderColor"}}},{isTextarea:!0,underlined:!1,css:{[`& ${C}`]:{margin:"$xs $sm"}}}]}),S=(0,m.zo)("div",{position:"absolute",opacity:0,bottom:"calc($$inputHeightRatio * -$space$5)","@motion":{transition:"none"},variants:{animated:{true:{transition:"opacity 0.25s ease"},false:{transition:"none"}},withValue:{true:{opacity:1}}}}),M=(0,m.zo)("p",{margin:"$1 0 0 $5",fontSize:"$space$5",color:"$$inputHelperColor"}),T=(0,m.zo)("span",{},b.q4),R=(0,m.zo)("label",{d:"block",fontWeight:"$normal",color:"$$inputLabelColor",p:"0 0 0 $2",mb:"$3",fs:"$$inputFontSize",lh:"$md",WebkitTouchCallout:"none",WebkitUserSelect:"none",KhtmlUserSelect:"none",MozUserSelect:"none",MsUserSelect:"none",us:"none","> *:first-child":{marginTop:0},"> *:last-child":{mb:0},"@motion":{transition:"none"},variants:{rounded:{true:{padding:"0 0 0 $3"}},asPlaceholder:{true:{position:"absolute",padding:0,zIndex:"$1",left:"$space$6",top:"20%",mb:0,cursor:"text",color:"$$inputPlaceholderColor",transition:"left 0.25s ease 0s, color 0.25s ease 0s, top 0.25s ease 0s"}},animated:{false:{transition:"none"}},focused:{true:{color:"$$inputHoverBorderColor"}},underlined:{true:{}},withValue:{true:{}},isTextarea:{true:{}},bordered:{true:{}},hasContentLeft:{true:{}}},compoundVariants:[{underlined:!0,asPlaceholder:!0,css:{left:"$space$2"}},{asPlaceholder:!0,focused:!0,underlined:!1,isTextarea:!1,css:{top:"-72%",left:"$2",cursor:"inherit"}},{asPlaceholder:!0,focused:!0,underlined:!0,isTextarea:!1,css:{top:"-72%",left:"0px",cursor:"inherit"}},{asPlaceholder:!0,withValue:!0,underlined:!1,isTextarea:!1,css:{color:"$$inputTextColor",top:"-72%",left:"$2",cursor:"inherit"}},{asPlaceholder:!0,withValue:!0,underlined:!0,isTextarea:!1,css:{color:"$$inputTextColor",top:"-72%",left:"0px",cursor:"inherit"}},{asPlaceholder:!0,isTextarea:!0,css:{top:"$5"}},{asPlaceholder:!0,hasContentLeft:!0,css:{left:"calc($space$6 + $$inputHeightRatio * $space$7)"}},{asPlaceholder:!0,isTextarea:!0,focused:!0,css:{top:"calc(-$space$10 - $space$3)",left:"$2"}},{asPlaceholder:!0,isTextarea:!0,withValue:!0,css:{top:"-$11"}},{asPlaceholder:!0,focused:!0,isTextarea:!0,bordered:!0,css:{top:"-$12"}}],defaultVariants:{asPlaceholder:!1}}),B=(0,m.zo)("span",{position:"relative",display:"inline-flex",width:"initial",height:"100%",fontWeight:"$medium",ai:"center",pe:"none",margin:0,padding:"0 $sm",color:"$$inputPlaceholderColor",fontSize:"$$inputFontSize",lineHeight:"$xs",variants:{isRight:{true:{btrr:"$$inputBorderRadius",bbrr:"$$inputBorderRadius"},false:{btlr:"$$inputBorderRadius",bblr:"$$inputBorderRadius"}},isDark:{true:{}},isDefaultStatus:{true:{}},underlined:{true:{bg:"transparent"}},bordered:{true:{"&:after":{display:"none"},"&:before":{display:"none"}}}},compoundVariants:[{isRight:!0,underlined:!0,css:{borderLeftColor:"$$inputPlaceholderColor",borderLeftStyle:"solid",marginLeft:"$2",borderLeftWidth:"calc($$inputBorderWeight / 2)",height:"40%"}},{isRight:!1,underlined:!0,css:{borderRightColor:"$$inputPlaceholderColor",borderRightStyle:"solid",marginRight:"$2",borderRightWidth:"calc($$inputBorderWeight / 1)",height:"40%"}},{isDefaultStatus:!0,bordered:!1,underlined:!1,css:{bg:"$accents2"}},{isDefaultStatus:!0,bordered:!1,underlined:!1,isDark:!0,css:{color:"$accents6"}},{isDefaultStatus:!1,bordered:!0,underlined:!1,css:{bg:"$$inputColor"}},{bordered:!0,isRight:!0,css:{peddingRight:"$sm",paddingLeft:0}},{bordered:!0,isRight:!1,css:{peddingLeft:"$sm",paddingRight:0}}],defaultVariants:{isRight:!1}}),k=(0,m.zo)("span",{variants:{applyStyles:{true:{display:"flex",boxSizing:"content-box",width:"calc($$inputHeightRatio * $space$4)",height:"100%",alignItems:"center",verticalAlign:"center",margin:0,padding:"0 calc($$inputHeightRatio * $3)",color:"$$inputTextColor",lineHeight:"$xs",position:"relative",cursor:"default",pe:"none"}},clickable:{true:{cursor:"pointer",pe:"auto"}}}}),L=(0,m.zo)("button",{position:"absolute",right:0,margin:0,d:"inline-flex",ai:"center",border:"none",bg:"transparent",width:"auto",height:"auto",cursor:"pointer",boxSizing:"border-box",transition:"color 250ms ease 0s, transform 250ms ease 0s, opacity 250ms ease 0s",color:"$$inputPlaceholderColor",visibility:"hidden",transform:"translateX(20%)",opacity:0,"&:hover":{opacity:.85},svg:{color:"currentColor",size:"calc($space$5 * $$inputHeightRatio)"},"@motion":{transition:"none"},variants:{visible:{true:{visibility:"visible",transform:"translateX(0)",opacity:1}},underlined:{true:{padding:"0 $1"}},animated:{false:{transition:"none"}},hasContentRight:{true:{padding:0,position:"relative",transform:"translateX(30%)"}},disabled:{true:{cursor:"not-allowed","&:hover":{color:"$accents3"}}}}}),j=(0,m.zo)("span",{display:"flex",br:"100%"},b.BM),z={disabled:!1,bordered:!1,readOnly:!1,clearable:!1,rounded:!1,animated:!0,underlined:!1,shadow:!0,fullWidth:!1,contentClickable:!1,contentRightStyling:!0,contentLeftStyling:!0,required:!1,width:"initial",size:"md",color:"default",helperColor:"default",status:"default",borderWeight:"normal",autoComplete:"off",className:"",placeholder:"",initialValue:""},D="nextui-input",H=o.forwardRef(({as:e="input",label:t,labelPlaceholder:r,labelLeft:i,labelRight:s,size:c,helperText:$,color:h,helperColor:m,status:b,contentLeft:y,contentRight:z,contentClickable:H,contentLeftStyling:W,contentRightStyling:N,onContentClick:P,initialValue:O,onChange:_,readOnly:I,value:Z,onClearClick:F,clearable:V,shadow:A,animated:U,required:Y,width:E,className:q,onBlur:X,onFocus:J,autoComplete:G,placeholder:K,fullWidth:Q,borderWeight:ee,disabled:et,bordered:er,underlined:en,rounded:eo,css:ei,...es},ea)=>{let el=(0,o.useRef)(null);(0,o.useImperativeHandle)(ea,()=>el.current);let[ed,eu]=(0,o.useState)(O),[ec,e$]=(0,o.useState)(!1),{isDark:eh}=(0,d.Z)(),ep=(0,o.useMemo)(()=>void 0!==Z,[Z]),ef=(0,o.useMemo)(()=>t||r,[t,r]),eg=(0,o.useMemo)(()=>r?"":K,[K,r]),em=(0,o.useMemo)(()=>Q?"100%":E||"initial",[Q,E]);en&&g.Ts&&(er&&(0,u.Z)("Using underlined and bordered at the same time will have no effect."),eo&&(0,u.Z)("Using underlined and rounded at the same time will have no effect."));let eb=(e,t)=>{et||P&&P(e,t)};(0,o.useEffect)(()=>{ep&&eu(Z)},[ep,Z]);let ex=(0,o.useMemo)(()=>"textarea"===e,[e]),ey={...es,...ep?{value:ed}:{defaultValue:O}},{isFocusVisible:ev,focusProps:eC}=(0,l.Fx)(),{labelProps:ew,fieldProps:eS}=function(e){let{id:t,label:r,"aria-labelledby":n,"aria-label":o,labelElementType:i="label"}=e;t=(0,a.Me)(t);let s=(0,a.Me)(),l={};return r?(n=n?`${n} ${s}`:s,l={id:s,htmlFor:"label"===i?t:void 0}):n||o||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"),{labelProps:l,fieldProps:(0,a.bE)({id:t,"aria-label":o,"aria-labelledby":n})}}({...ey,label:ef}),eM=(0,o.useMemo)(()=>ec?"hover":et?"disabled":I?"read-only":ed?"with-value":"normal",[ec,et,I,ed]);return(0,n.jsxs)(x,{borderWeight:ee,className:(0,f.Z)(`${D}-main-container`,`${D}-main-container--${eM}`),color:h,css:{width:em,...ei},"data-state":eM,disabled:et,helperColor:m,rounded:eo,size:c,status:b,children:[ef&&(0,n.jsx)(R,{animated:U,asPlaceholder:!!r,bordered:er,className:`${D}-block-label`,focused:ec,hasContentLeft:!!y,htmlFor:"htmlFor"in ew?ew.htmlFor:"",id:ew.id,isTextarea:ex,rounded:eo,underlined:en,withValue:!!ed,children:ef}),(0,n.jsx)(v,{animated:U,className:(0,f.Z)(`${D}-container`,`${D}-container--${eM}`,{[`${D}-container--input`]:!ex,[`${D}-container--textarea`]:ex,[`${D}-container--read-only`]:I},q),focused:ec,isReadOnly:I,isTextarea:ex,underlined:en,children:(0,n.jsxs)(w,{animated:U,as:ef?"div":"label",bordered:er,className:(0,f.Z)(`${D}-wrapper`,`${D}-wrapper--${eM}`,{[`${D}-wrapper--bordered`]:er,[`${D}-wrapper--underlined`]:en,[`${D}-wrapper--shadow`]:A}),disabled:et,focused:ec,isReadOnly:I,isTextarea:ex,shadow:A,underlined:en,children:[!ef&&K&&(0,n.jsx)(T,{className:`${D}-placeholder`,children:K}),i&&(0,n.jsx)(B,{bordered:er,className:`${D}-label--left`,isDark:eh,isDefaultStatus:"default"===b,underlined:en,children:i}),y&&(0,n.jsx)(k,{applyStyles:W,className:(0,f.Z)(`${D}-content`,`${D}-content--left`),clickable:H,onClick:e=>eb("left",e),children:y}),(0,n.jsx)(C,{ref:el,"aria-multiline":ex,"aria-placeholder":eg,"aria-readonly":I,"aria-required":Y,as:e,autoComplete:G,bordered:er,className:(0,f.Z)({[`${D}`]:!ex,[`${D}-textarea`]:ex,[`${D}-disabled`]:et,[`${D}-rounded`]:eo,[`${D}-${D}-right-content`]:z,[`${D}-left-content`]:y}),"data-state":eM,disabled:et,focused:ec,hasLeftContent:!!y,hasRightContent:!!z,isTextarea:ex,placeholder:eg,readOnly:I,required:Y,type:"text",onBlur(e){e$(!1),X&&X(e)},onChange(e){et||I||(ep||eu(e.target.value),_&&_(e))},onFocus(e){e$(!0),J&&J(e)},...ey,...eS}),V&&(0,n.jsx)(L,{animated:U,"aria-label":"clear",className:`${D}-clear-button`,disabled:et||I,hasContentRight:!!z,lang:"en",type:"button",underlined:en,visible:Boolean(ed),onClick(e){var t;if(e.preventDefault(),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),ep||eu(""),F&&F(e),!el.current)return;let r=(t=el.current,{...e,target:t,currentTarget:t});r.target.value="",_&&_(r),el.current.focus()},...eC,children:(0,n.jsx)(j,{isFocusVisible:ev,children:(0,n.jsx)(p,{fill:"currentColor"})})}),z&&(0,n.jsx)(k,{applyStyles:N,className:(0,f.Z)(`${D}-content`,`${D}-content--right`),clickable:H,onClick:e=>eb("right",e),children:z}),s&&(0,n.jsx)(B,{bordered:er,className:`${D}-label--right`,isDark:eh,isDefaultStatus:"default"===b,isRight:!0,underlined:en,children:s})]})}),(0,n.jsx)(S,{className:`${D}-helper-text-container`,withValue:!!$,children:$&&(0,n.jsx)(M,{className:`${D}-helper-text`,children:$})})]})});H.displayName="NextUI.Input",H.defaultProps=z,H.toString=()=>".nextui-input";var W=H;let N=({visible:e})=>(0,n.jsx)("svg",{className:"nextui-input-password-icon",fill:"none",height:"16",shapeRendering:"geometricPrecision",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",style:{color:"currentColor"},viewBox:"0 0 24 24",width:"16",children:(0,n.jsxs)(n.Fragment,e?{children:[(0,n.jsx)("path",{d:"M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"}),(0,n.jsx)("path",{d:"M1 1l22 22"})]}:{children:[(0,n.jsx)("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),(0,n.jsx)("circle",{cx:"12",cy:"12",r:"3"})]})}),P=o.memo(N),O={...z,hideToggle:!1,visibleIcon:(0,n.jsx)(P,{visible:!0}),hiddenIcon:(0,n.jsx)(P,{visible:!1})},_=o.forwardRef(({hideToggle:e,visibleIcon:t,hiddenIcon:r,children:i,...s},a)=>{let l=(0,o.useRef)(null),[d,u]=(0,o.useState)(!1);(0,o.useImperativeHandle)(a,()=>l.current);let c=()=>{u(e=>!e)},$=(0,o.useMemo)(()=>({...s,ref:l,className:(0,f.Z)("nextui-input-password",s.className),contentClickable:!0,onContentClick:c,type:d?"text":"password"}),[s,c,d,l]),h=(0,o.useMemo)(()=>e?null:d?t:r,[e,d,t,r]);return(0,n.jsx)(W,{contentRight:h,...$,children:i})});g.Ts&&(_.displayName="NextUI.InputPassword"),_.toString=()=>".nextui-input-password";var I=(0,c.Z)(_,O);W.Password=I;var Z=r(7600),F=r(7963),V=r(5086),A=function(){return(0,n.jsx)(V.n,{fill:"none",height:24,viewBox:"0 0 24 24",width:24,css:{"& path":{stroke:"$accents6"}},children:(0,n.jsx)("path",{d:"M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2})})},U=r(1664),Y=r.n(U),E=r(7484),q=r.n(E),X=r(4110),J=r.n(X),G=!0,K=function(e){var t=e.sources,r=(0,o.useState)(t),a=r[0],l=r[1],d=function(e){var r=e.target.value;l(t.filter(function(e){return e.title.toLowerCase().includes(r.toLowerCase())}))};return(0,n.jsx)(F.E,{children:(0,n.jsxs)(Z.k,{direction:"column",css:{},children:[(0,n.jsx)(s.Z,{h1:!0,children:"Blog"}),(0,n.jsx)(s.Z,{span:!0,css:{color:"$accents8"},children:"Ive been writing online since 3 years, mostly about my life and web development. In total, I've written 3 articles on my blog. Use the search below to filter by title."}),(0,n.jsx)(i.x,{css:{my:"$8"},children:(0,n.jsx)(W,{placeholder:"Search by title",css:{width:"100%","& .nextui-input-wrapper":{bc:"$accents2"}},contentRight:(0,n.jsx)(A,{}),onChange:d})}),(0,n.jsx)(s.Z,{h3:!0,children:"All posts"}),(0,n.jsxs)(Z.k,{direction:"column",gap:"lg",children:[0===a.length&&(0,n.jsx)(s.Z,{span:!0,css:{color:"$accents8"},children:"No results found"}),a.map(function(e){var t;return(0,n.jsx)(Y(),{href:"blog/".concat(e.slug),children:(0,n.jsxs)(Z.k,{direction:"column",css:{py:"$8",px:"$4",cursor:"pointer",borderRadius:"$sm","&:hover":{bc:"$accents1"}},children:[(0,n.jsxs)(Z.k,{gap:"xl",children:[(0,n.jsx)(s.Z,{h4:!0,children:e.title}),(0,n.jsx)(s.Z,{span:!0,css:{border:"none",height:"fit-content",mt:"3px",color:"$accents7"},children:(t=e.date,q().extend(J()),q()(t).fromNow())})]}),(0,n.jsx)(s.Z,{span:!0,css:{color:"$accents8"},children:e.description})]})},e.slug)})]})]})})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7801)}),_N_E=e.O()}]);