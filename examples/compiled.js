var h=void 0,m=null,n,o=this;function p(){}
function r(a){var b=typeof a;if(b=="object")if(a){if(a instanceof Array)return"array";else if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if(c=="[object Window]")return"object";if(c=="[object Array]"||typeof a.length=="number"&&typeof a.splice!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("splice"))return"array";if(c=="[object Function]"||typeof a.call!="undefined"&&typeof a.propertyIsEnumerable!="undefined"&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if(b=="function"&&typeof a.call=="undefined")return"object";return b}var t="closure_uid_"+Math.floor(Math.random()*2147483648).toString(36),aa=0;function v(a,b){function c(){}c.prototype=b.prototype;a.t=b.prototype;a.prototype=new c};function ba(a,b){for(var c=0,e=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=Math.max(e.length,f.length),g=0;c==0&&g<d;g++){var i=e[g]||"",k=f[g]||"",j=RegExp("(\\d*)(\\D*)","g"),u=RegExp("(\\d*)(\\D*)","g");do{var l=j.exec(i)||["","",""],q=u.exec(k)||["","",""];if(l[0].length==0&&q[0].length==0)break;c=w(l[1].length==0?0:parseInt(l[1],10),q[1].length==0?0:parseInt(q[1],10))||w(l[2].length==0,q[2].length==0)||w(l[2],q[2])}while(c==
0)}return c}function w(a,b){if(a<b)return-1;else if(a>b)return 1;return 0};var x=Array.prototype,ca=x.indexOf?function(a,b,c){return x.indexOf.call(a,b,c)}:function(a,b,c){c=c==m?0:c<0?Math.max(0,a.length+c):c;if(typeof a=="string")return typeof b!="string"||b.length!=1?-1:a.indexOf(b,c);for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var y,z,A,B;function da(){return o.navigator?o.navigator.userAgent:m}B=A=z=y=!1;var C;if(C=da()){var ea=o.navigator;y=C.indexOf("Opera")==0;z=!y&&C.indexOf("MSIE")!=-1;A=!y&&C.indexOf("WebKit")!=-1;B=!y&&!A&&ea.product=="Gecko"}var D=z,E=B,fa=A,ga=o.navigator,ha=(ga&&ga.platform||"").indexOf("Mac")!=-1,F;
a:{var G="",H;if(y&&o.opera)var I=o.opera.version,G=typeof I=="function"?I():I;else if(E?H=/rv\:([^\);]+)(\)|;)/:D?H=/MSIE\s+([^\);]+)(\)|;)/:fa&&(H=/WebKit\/(\S+)/),H)var ia=H.exec(da()),G=ia?ia[1]:"";if(D){var J,ja=o.document;J=ja?ja.documentMode:h;if(J>parseFloat(G)){F=String(J);break a}}F=G}var ka={};function K(a){ka[a]||(ka[a]=ba(F,a)>=0)}var la={};function L(){return la[9]||(la[9]=D&&document.documentMode&&document.documentMode>=9)};function M(){}M.prototype.n=!1;M.prototype.d=function(){if(!this.n)this.n=!0,this.e()};M.prototype.e=function(){this.u&&ma.apply(m,this.u)};function ma(a){for(var b=0,c=arguments.length;b<c;++b){var e=arguments[b],f=r(e);f=="array"||f=="object"&&typeof e.length=="number"?ma.apply(m,e):e&&typeof e.d=="function"&&e.d()}};var N;!D||L();D&&K("8");function O(a,b){this.type=a;this.currentTarget=this.target=b}v(O,M);O.prototype.e=function(){delete this.type;delete this.target;delete this.currentTarget};O.prototype.k=!1;O.prototype.z=!0;function P(a){P[" "](a);return a}P[" "]=p;function Q(a,b){a&&this.i(a,b)}v(Q,O);n=Q.prototype;n.target=m;n.relatedTarget=m;n.offsetX=0;n.offsetY=0;n.clientX=0;n.clientY=0;n.screenX=0;n.screenY=0;n.button=0;n.keyCode=0;n.charCode=0;n.ctrlKey=!1;n.altKey=!1;n.shiftKey=!1;n.metaKey=!1;n.w=!1;n.o=m;
n.i=function(a,b){var c=this.type=a.type;O.call(this,c);this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(E){var f;a:{try{P(e.nodeName);f=!0;break a}catch(d){}f=!1}f||(e=m)}}else if(c=="mouseover")e=a.fromElement;else if(c=="mouseout")e=a.toElement;this.relatedTarget=e;this.offsetX=a.offsetX!==h?a.offsetX:a.layerX;this.offsetY=a.offsetY!==h?a.offsetY:a.layerY;this.clientX=a.clientX!==h?a.clientX:a.pageX;this.clientY=a.clientY!==h?a.clientY:a.pageY;this.screenX=
a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.w=ha?a.metaKey:a.ctrlKey;this.state=a.state;this.o=a;delete this.z;delete this.k};n.e=function(){Q.t.e.call(this);this.relatedTarget=this.currentTarget=this.target=this.o=m};function na(){}var oa=0;n=na.prototype;n.key=0;n.g=!1;n.l=!1;n.i=function(a,b,c,e,f,d){if(r(a)=="function")this.p=!0;else if(a&&a.handleEvent&&r(a.handleEvent)=="function")this.p=!1;else throw Error("Invalid listener argument");this.j=a;this.s=b;this.src=c;this.type=e;this.capture=!!f;this.v=d;this.l=!1;this.key=++oa;this.g=!1};n.handleEvent=function(a){return this.p?this.j.call(this.v||this.src,a):this.j.handleEvent.call(this.j,a)};function R(a,b){this.q=b;this.b=[];if(a>this.q)throw Error("[goog.structs.SimplePool] Initial cannot be greater than max");for(var c=0;c<a;c++)this.b.push(this.a?this.a():{})}v(R,M);R.prototype.a=m;R.prototype.m=m;R.prototype.getObject=function(){return this.b.length?this.b.pop():this.a?this.a():{}};function S(a,b){a.b.length<a.q?a.b.push(b):pa(a,b)}
function pa(a,b){if(a.m)a.m(b);else{var c=r(b);if(c=="object"||c=="array"||c=="function")if(r(b.d)=="function")b.d();else for(var e in b)delete b[e]}}R.prototype.e=function(){R.t.e.call(this);for(var a=this.b;a.length;)pa(this,a.pop());delete this.b};var qa,ra=(qa="ScriptEngine"in o&&o.ScriptEngine()=="JScript")?o.ScriptEngineMajorVersion()+"."+o.ScriptEngineMinorVersion()+"."+o.ScriptEngineBuildVersion():"0";var T,U,V,sa,W,X,Y,ta;
(function(){function a(){return{c:0,f:0}}function b(){return[]}function c(){function a(b){b=g.call(a.src,a.key,b);if(!b)return b}return a}function e(){return new na}function f(){return new Q}var d=qa&&!(ba(ra,"5.7")>=0),g;sa=function(a){g=a};if(d){T=function(a){S(i,a)};U=function(){return k.getObject()};V=function(a){S(k,a)};W=function(){S(j,c())};X=function(a){S(u,a)};Y=function(){return l.getObject()};ta=function(a){S(l,a)};var i=new R(0,600);i.a=a;var k=new R(0,600);k.a=b;var j=new R(0,600);j.a=
c;var u=new R(0,600);u.a=e;var l=new R(0,600);l.a=f}else T=p,U=b,X=W=V=p,Y=f,ta=p})();var Z={},$={},ua={},va={};function wa(a,b,c,e){if(!e.h&&e.r){for(var f=0,d=0;f<e.length;f++)if(e[f].g){var g=e[f].s;g.src=m;W(g);X(e[f])}else f!=d&&(e[d]=e[f]),d++;e.length=d;e.r=!1;d==0&&(V(e),delete $[a][b][c],$[a][b].c--,$[a][b].c==0&&(T($[a][b]),delete $[a][b],$[a].c--),$[a].c==0&&(T($[a]),delete $[a]))}}
function xa(a,b,c,e,f){var d=1,b=b[t]||(b[t]=++aa);if(a[b]){a.f--;a=a[b];a.h?a.h++:a.h=1;try{for(var g=a.length,i=0;i<g;i++){var k=a[i];k&&!k.g&&(d&=ya(k,f)!==!1)}}finally{a.h--,wa(c,e,b,a)}}return Boolean(d)}
function ya(a,b){var c=a.handleEvent(b);if(a.l){var e=a.key;if(Z[e]){var f=Z[e];if(!f.g){var d=f.src,g=f.type,i=f.s,k=f.capture;d.removeEventListener?(d==o||!d.A)&&d.removeEventListener(g,i,k):d.detachEvent&&d.detachEvent(g in va?va[g]:va[g]="on"+g,i);d=d[t]||(d[t]=++aa);i=$[g][k][d];if(ua[d]){var j=ua[d],u=ca(j,f);u>=0&&x.splice.call(j,u,1);j.length==0&&delete ua[d]}f.g=!0;i.r=!0;wa(g,k,d,i);delete Z[e]}}}return c}
sa(function(a,b){if(!Z[a])return!0;var c=Z[a],e=c.type,f=$;if(!(e in f))return!0;var f=f[e],d,g;N===h&&(N=D&&!o.addEventListener);if(N){var i;if(!(i=b))a:{i="window.event".split(".");for(var k=o;d=i.shift();)if(k[d]!=m)k=k[d];else{i=m;break a}i=k}d=i;i=!0 in f;k=!1 in f;if(i){if(d.keyCode<0||d.returnValue!=h)return!0;a:{var j=!1;if(d.keyCode==0)try{d.keyCode=-1;break a}catch(u){j=!0}if(j||d.returnValue==h)d.returnValue=!0}}j=Y();j.i(d,this);d=!0;try{if(i){for(var l=U(),q=j.currentTarget;q;q=q.parentNode)l.push(q);
g=f[!0];g.f=g.c;for(var s=l.length-1;!j.k&&s>=0&&g.f;s--)j.currentTarget=l[s],d&=xa(g,l[s],e,!0,j);if(k){g=f[!1];g.f=g.c;for(s=0;!j.k&&s<l.length&&g.f;s++)j.currentTarget=l[s],d&=xa(g,l[s],e,!1,j)}}else d=ya(c,j)}finally{if(l)l.length=0,V(l);j.d();ta(j)}return d}e=new Q(b,this);try{d=ya(c,e)}finally{e.d()}return d});!D||L();!E&&!D||D&&L()||E&&K("1.9.1");D&&K("9");
