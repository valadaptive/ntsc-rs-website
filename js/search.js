var K,h,Le,ce,A,Ee,Ae,ae,Te,he,fe,le,at,B={},Ue=[],ft=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ve=Array.isArray;function H(t,e){for(var n in e)t[n]=e[n];return t}function pe(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function lt(t,e,n){var r,o,i,s={};for(i in e)i=="key"?r=e[i]:i=="ref"?o=e[i]:s[i]=e[i];if(arguments.length>2&&(s.children=arguments.length>3?K.call(arguments,2):n),typeof t=="function"&&t.defaultProps!=null)for(i in t.defaultProps)s[i]===void 0&&(s[i]=t.defaultProps[i]);return X(t,s,r,o,null)}function X(t,e,n,r,o){var i={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:o??++Le,__i:-1,__u:0};return o==null&&h.vnode!=null&&h.vnode(i),i}function I(t){return t.children}function T(t,e){this.props=t,this.context=e}function U(t,e){if(e==null)return t.__?U(t.__,t.__i+1):null;for(var n;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null)return n.__e;return typeof t.type=="function"?U(t):null}function Ie(t){var e,n;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((n=t.__k[e])!=null&&n.__e!=null){t.__e=t.__c.base=n.__e;break}return Ie(t)}}function Pe(t){(!t.__d&&(t.__d=!0)&&A.push(t)&&!Z.__r++||Ee!==h.debounceRendering)&&((Ee=h.debounceRendering)||Ae)(Z)}function Z(){var t,e,n,r,o,i,s,u;for(A.sort(ae);t=A.shift();)t.__d&&(e=A.length,r=void 0,i=(o=(n=t).__v).__e,s=[],u=[],n.__P&&((r=H({},o)).__v=o.__v+1,h.vnode&&h.vnode(r),de(n.__P,r,o,n.__n,n.__P.namespaceURI,32&o.__u?[i]:null,s,i??U(o),!!(32&o.__u),u),r.__v=o.__v,r.__.__k[r.__i]=r,$e(s,r,u),r.__e!=i&&Ie(r)),A.length>e&&A.sort(ae));Z.__r=0}function Me(t,e,n,r,o,i,s,u,f,a,c){var _,v,l,p,x,m,y=r&&r.__k||Ue,d=e.length;for(f=ct(n,e,y,f,d),_=0;_<d;_++)(l=n.__k[_])!=null&&(v=l.__i===-1?B:y[l.__i]||B,l.__i=_,m=de(t,l,v,o,i,s,u,f,a,c),p=l.__e,l.ref&&v.ref!=l.ref&&(v.ref&&me(v.ref,null,l),c.push(l.ref,l.__c||p,l)),x==null&&p!=null&&(x=p),4&l.__u||v.__k===l.__k?f=Fe(l,f,t):typeof l.type=="function"&&m!==void 0?f=m:p&&(f=p.nextSibling),l.__u&=-7);return n.__e=x,f}function ct(t,e,n,r,o){var i,s,u,f,a,c=n.length,_=c,v=0;for(t.__k=new Array(o),i=0;i<o;i++)(s=e[i])!=null&&typeof s!="boolean"&&typeof s!="function"?(f=i+v,(s=t.__k[i]=typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?X(null,s,null,null,null):ve(s)?X(I,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?X(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):s).__=t,s.__b=t.__b+1,u=null,(a=s.__i=ht(s,n,f,_))!==-1&&(_--,(u=n[a])&&(u.__u|=2)),u==null||u.__v===null?(a==-1&&v--,typeof s.type!="function"&&(s.__u|=4)):a!=f&&(a==f-1?v--:a==f+1?v++:(a>f?v--:v++,s.__u|=4))):t.__k[i]=null;if(_)for(i=0;i<c;i++)(u=n[i])!=null&&!(2&u.__u)&&(u.__e==r&&(r=U(u)),Re(u,u));return r}function Fe(t,e,n){var r,o;if(typeof t.type=="function"){for(r=t.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=t,e=Fe(r[o],e,n));return e}t.__e!=e&&(e&&t.type&&!n.contains(e)&&(e=U(t)),n.insertBefore(t.__e,e||null),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function ht(t,e,n,r){var o,i,s=t.key,u=t.type,f=e[n];if(f===null||f&&s==f.key&&u===f.type&&!(2&f.__u))return n;if(r>(f!=null&&!(2&f.__u)?1:0))for(o=n-1,i=n+1;o>=0||i<e.length;){if(o>=0){if((f=e[o])&&!(2&f.__u)&&s==f.key&&u===f.type)return o;o--}if(i<e.length){if((f=e[i])&&!(2&f.__u)&&s==f.key&&u===f.type)return i;i++}}return-1}function He(t,e,n){e[0]=="-"?t.setProperty(e,n??""):t[e]=n==null?"":typeof n!="number"||ft.test(e)?n:n+"px"}function G(t,e,n,r,o){var i;e:if(e=="style")if(typeof n=="string")t.style.cssText=n;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||He(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||He(t.style,e,n[e])}else if(e[0]=="o"&&e[1]=="n")i=e!=(e=e.replace(Te,"$1")),e=e.toLowerCase()in t||e=="onFocusOut"||e=="onFocusIn"?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+i]=n,n?r?n.u=r.u:(n.u=he,t.addEventListener(e,i?le:fe,i)):t.removeEventListener(e,i?le:fe,i);else{if(o=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&n==1?"":n))}}function Ne(t){return function(e){if(this.l){var n=this.l[e.type+t];if(e.t==null)e.t=he++;else if(e.t<n.u)return;return n(h.event?h.event(e):e)}}}function de(t,e,n,r,o,i,s,u,f,a){var c,_,v,l,p,x,m,y,d,E,P,z,R,Ce,J,se,ue,C=e.type;if(e.constructor!==void 0)return null;128&n.__u&&(f=!!(32&n.__u),i=[u=e.__e=n.__e]),(c=h.__b)&&c(e);e:if(typeof C=="function")try{if(y=e.props,d="prototype"in C&&C.prototype.render,E=(c=C.contextType)&&r[c.__c],P=c?E?E.props.value:c.__:r,n.__c?m=(_=e.__c=n.__c).__=_.__E:(d?e.__c=_=new C(y,P):(e.__c=_=new T(y,P),_.constructor=C,_.render=pt),E&&E.sub(_),_.props=y,_.state||(_.state={}),_.context=P,_.__n=r,v=_.__d=!0,_.__h=[],_._sb=[]),d&&_.__s==null&&(_.__s=_.state),d&&C.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=H({},_.__s)),H(_.__s,C.getDerivedStateFromProps(y,_.__s))),l=_.props,p=_.state,_.__v=e,v)d&&C.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),d&&_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(d&&C.getDerivedStateFromProps==null&&y!==l&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(y,P),!_.__e&&(_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(y,_.__s,P)===!1||e.__v==n.__v)){for(e.__v!=n.__v&&(_.props=y,_.state=_.__s,_.__d=!1),e.__e=n.__e,e.__k=n.__k,e.__k.some(function(D){D&&(D.__=e)}),z=0;z<_._sb.length;z++)_.__h.push(_._sb[z]);_._sb=[],_.__h.length&&s.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(y,_.__s,P),d&&_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(l,p,x)})}if(_.context=P,_.props=y,_.__P=t,_.__e=!1,R=h.__r,Ce=0,d){for(_.state=_.__s,_.__d=!1,R&&R(e),c=_.render(_.props,_.state,_.context),J=0;J<_._sb.length;J++)_.__h.push(_._sb[J]);_._sb=[]}else do _.__d=!1,R&&R(e),c=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++Ce<25);_.state=_.__s,_.getChildContext!=null&&(r=H(H({},r),_.getChildContext())),d&&!v&&_.getSnapshotBeforeUpdate!=null&&(x=_.getSnapshotBeforeUpdate(l,p)),u=Me(t,ve(se=c!=null&&c.type===I&&c.key==null?c.props.children:c)?se:[se],e,n,r,o,i,s,u,f,a),_.base=e.__e,e.__u&=-161,_.__h.length&&s.push(_),m&&(_.__E=_.__=null)}catch(D){if(e.__v=null,f||i!=null)if(D.then){for(e.__u|=f?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;i[i.indexOf(u)]=null,e.__e=u}else for(ue=i.length;ue--;)pe(i[ue]);else e.__e=n.__e,e.__k=n.__k;h.__e(D,e,n)}else i==null&&e.__v==n.__v?(e.__k=n.__k,e.__e=n.__e):u=e.__e=vt(n.__e,e,n,r,o,i,s,f,a);return(c=h.diffed)&&c(e),128&e.__u?void 0:u}function $e(t,e,n){for(var r=0;r<n.length;r++)me(n[r],n[++r],n[++r]);h.__c&&h.__c(e,t),t.some(function(o){try{t=o.__h,o.__h=[],t.some(function(i){i.call(o)})}catch(i){h.__e(i,o.__v)}})}function vt(t,e,n,r,o,i,s,u,f){var a,c,_,v,l,p,x,m=n.props,y=e.props,d=e.type;if(d=="svg"?o="http://www.w3.org/2000/svg":d=="math"?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),i!=null){for(a=0;a<i.length;a++)if((l=i[a])&&"setAttribute"in l==!!d&&(d?l.localName==d:l.nodeType==3)){t=l,i[a]=null;break}}if(t==null){if(d==null)return document.createTextNode(y);t=document.createElementNS(o,d,y.is&&y),u&&(h.__m&&h.__m(e,i),u=!1),i=null}if(d===null)m===y||u&&t.data===y||(t.data=y);else{if(i=i&&K.call(t.childNodes),m=n.props||B,!u&&i!=null)for(m={},a=0;a<t.attributes.length;a++)m[(l=t.attributes[a]).name]=l.value;for(a in m)if(l=m[a],a!="children"){if(a=="dangerouslySetInnerHTML")_=l;else if(!(a in y)){if(a=="value"&&"defaultValue"in y||a=="checked"&&"defaultChecked"in y)continue;G(t,a,null,l,o)}}for(a in y)l=y[a],a=="children"?v=l:a=="dangerouslySetInnerHTML"?c=l:a=="value"?p=l:a=="checked"?x=l:u&&typeof l!="function"||m[a]===l||G(t,a,l,m[a],o);if(c)u||_&&(c.__html===_.__html||c.__html===t.innerHTML)||(t.innerHTML=c.__html),e.__k=[];else if(_&&(t.innerHTML=""),Me(t,ve(v)?v:[v],e,n,r,d=="foreignObject"?"http://www.w3.org/1999/xhtml":o,i,s,i?i[0]:n.__k&&U(n,0),u,f),i!=null)for(a=i.length;a--;)pe(i[a]);u||(a="value",d=="progress"&&p==null?t.removeAttribute("value"):p!==void 0&&(p!==t[a]||d=="progress"&&!p||d=="option"&&p!==m[a])&&G(t,a,p,m[a],o),a="checked",x!==void 0&&x!==t[a]&&G(t,a,x,m[a],o))}return t}function me(t,e,n){try{if(typeof t=="function"){var r=typeof t.__u=="function";r&&t.__u(),r&&e==null||(t.__u=t(e))}else t.current=e}catch(o){h.__e(o,n)}}function Re(t,e,n){var r,o;if(h.unmount&&h.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||me(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(i){h.__e(i,e)}r.base=r.__P=null}if(r=t.__k)for(o=0;o<r.length;o++)r[o]&&Re(r[o],e,n||typeof t.type!="function");n||pe(t.__e),t.__c=t.__=t.__e=void 0}function pt(t,e,n){return this.constructor(t,n)}function De(t,e,n){var r,o,i,s;e==document&&(e=document.documentElement),h.__&&h.__(t,e),o=(r=typeof n=="function")?null:n&&n.__k||e.__k,i=[],s=[],de(e,t=(!r&&n||e).__k=lt(I,null,[t]),o||B,B,e.namespaceURI,!r&&n?[n]:o?null:e.firstChild?K.call(e.childNodes):null,i,!r&&n?n:o?o.__e:e.firstChild,r,s),$e(i,t,s)}K=Ue.slice,h={__e:function(t,e,n,r){for(var o,i,s;e=e.__;)if((o=e.__c)&&!o.__)try{if((i=o.constructor)&&i.getDerivedStateFromError!=null&&(o.setState(i.getDerivedStateFromError(t)),s=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(t,r||{}),s=o.__d),s)return o.__E=o}catch(u){t=u}throw t}},Le=0,ce=function(t){return t!=null&&t.constructor==null},T.prototype.setState=function(t,e){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=H({},this.state),typeof t=="function"&&(t=t(H({},n),this.props)),t&&H(n,t),t!=null&&this.__v&&(e&&this._sb.push(e),Pe(this))},T.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Pe(this))},T.prototype.render=I,A=[],Ae=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ae=function(t,e){return t.__v.__b-e.__v.__b},Z.__r=0,Te=/(PointerCapture)$|Capture$/i,he=0,fe=Ne(!1),le=Ne(!0),at=0;var Y,w,ye,Be,ge=0,Ge=[],b=h,je=b.__b,qe=b.__r,We=b.diffed,Oe=b.__c,Ve=b.unmount,ze=b.__;function Xe(t,e){b.__h&&b.__h(w,t,ge||e),ge=0;var n=w.__H||(w.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({}),n.__[t]}function Ze(t,e){var n=Xe(Y++,3);!b.__s&&Ke(n.__H,e)&&(n.__=t,n.i=e,w.__H.__h.push(n))}function j(t){return ge=5,q(function(){return{current:t}},[])}function q(t,e){var n=Xe(Y++,7);return Ke(n.__H,e)&&(n.__=t(),n.__H=e,n.__h=t),n.__}function dt(){for(var t;t=Ge.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(Q),t.__H.__h.forEach(be),t.__H.__h=[]}catch(e){t.__H.__h=[],b.__e(e,t.__v)}}b.__b=function(t){w=null,je&&je(t)},b.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),ze&&ze(t,e)},b.__r=function(t){qe&&qe(t),Y=0;var e=(w=t.__c).__H;e&&(ye===w?(e.__h=[],w.__h=[],e.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0})):(e.__h.forEach(Q),e.__h.forEach(be),e.__h=[],Y=0)),ye=w},b.diffed=function(t){We&&We(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Ge.push(e)!==1&&Be===b.requestAnimationFrame||((Be=b.requestAnimationFrame)||mt)(dt)),e.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0})),ye=w=null},b.__c=function(t,e){e.some(function(n){try{n.__h.forEach(Q),n.__h=n.__h.filter(function(r){return!r.__||be(r)})}catch(r){e.some(function(o){o.__h&&(o.__h=[])}),e=[],b.__e(r,n.__v)}}),Oe&&Oe(t,e)},b.unmount=function(t){Ve&&Ve(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{Q(r)}catch(o){e=o}}),n.__H=void 0,e&&b.__e(e,n.__v))};var Je=typeof requestAnimationFrame=="function";function mt(t){var e,n=function(){clearTimeout(r),Je&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);Je&&(e=requestAnimationFrame(n))}function Q(t){var e=w,n=t.__c;typeof n=="function"&&(t.__c=void 0,n()),w=e}function be(t){var e=w;t.__c=t.__(),w=e}function Ke(t,e){return!t||t.length!==e.length||e.some(function(n,r){return n!==t[r]})}var yt=Symbol.for("preact-signals");function te(){if(N>1)N--;else{for(var t,e=!1;W!==void 0;){var n=W;for(W=void 0,ke++;n!==void 0;){var r=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&Ye(n))try{n.c()}catch(o){e||(t=o,e=!0)}n=r}}if(ke=0,N--,e)throw t}}function ne(t){if(N>0)return t();N++;try{return t()}finally{te()}}var g=void 0;var W=void 0,N=0,ke=0,ee=0;function Qe(t){if(g!==void 0){var e=t.n;if(e===void 0||e.t!==g)return e={i:0,S:t,p:g.s,n:void 0,t:g,e:void 0,x:void 0,r:e},g.s!==void 0&&(g.s.n=e),g.s=e,t.n=e,32&g.f&&t.S(e),e;if(e.i===-1)return e.i=0,e.n!==void 0&&(e.n.p=e.p,e.p!==void 0&&(e.p.n=e.n),e.p=g.s,e.n=void 0,g.s.n=e,g.s=e),e}}function k(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}k.prototype.brand=yt;k.prototype.h=function(){return!0};k.prototype.S=function(t){this.t!==t&&t.e===void 0&&(t.x=this.t,this.t!==void 0&&(this.t.e=t),this.t=t)};k.prototype.U=function(t){if(this.t!==void 0){var e=t.e,n=t.x;e!==void 0&&(e.x=n,t.e=void 0),n!==void 0&&(n.e=e,t.x=void 0),t===this.t&&(this.t=n)}};k.prototype.subscribe=function(t){var e=this;return L(function(){var n=e.value,r=g;g=void 0;try{t(n)}finally{g=r}})};k.prototype.valueOf=function(){return this.value};k.prototype.toString=function(){return this.value+""};k.prototype.toJSON=function(){return this.value};k.prototype.peek=function(){var t=g;g=void 0;try{return this.value}finally{g=t}};Object.defineProperty(k.prototype,"value",{get:function(){var t=Qe(this);return t!==void 0&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if(ke>100)throw new Error("Cycle detected");this.v=t,this.i++,ee++,N++;try{for(var e=this.t;e!==void 0;e=e.x)e.t.N()}finally{te()}}}});function M(t){return new k(t)}function Ye(t){for(var e=t.s;e!==void 0;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function et(t){for(var e=t.s;e!==void 0;e=e.n){var n=e.S.n;if(n!==void 0&&(e.r=n),e.S.n=e,e.i=-1,e.n===void 0){t.s=e;break}}}function tt(t){for(var e=t.s,n=void 0;e!==void 0;){var r=e.p;e.i===-1?(e.S.U(e),r!==void 0&&(r.n=e.n),e.n!==void 0&&(e.n.p=r)):n=e,e.S.n=e.r,e.r!==void 0&&(e.r=void 0),e=r}t.s=n}function F(t){k.call(this,void 0),this.x=t,this.s=void 0,this.g=ee-1,this.f=4}(F.prototype=new k).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===ee))return!0;if(this.g=ee,this.f|=1,this.i>0&&!Ye(this))return this.f&=-2,!0;var t=g;try{et(this),g=this;var e=this.x();(16&this.f||this.v!==e||this.i===0)&&(this.v=e,this.f&=-17,this.i++)}catch(n){this.v=n,this.f|=16,this.i++}return g=t,tt(this),this.f&=-2,!0};F.prototype.S=function(t){if(this.t===void 0){this.f|=36;for(var e=this.s;e!==void 0;e=e.n)e.S.S(e)}k.prototype.S.call(this,t)};F.prototype.U=function(t){if(this.t!==void 0&&(k.prototype.U.call(this,t),this.t===void 0)){this.f&=-33;for(var e=this.s;e!==void 0;e=e.n)e.S.U(e)}};F.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;t!==void 0;t=t.x)t.t.N()}};Object.defineProperty(F.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=Qe(this);if(this.h(),t!==void 0&&(t.i=this.i),16&this.f)throw this.v;return this.v}});function O(t){return new F(t)}function nt(t){var e=t.u;if(t.u=void 0,typeof e=="function"){N++;var n=g;g=void 0;try{e()}catch(r){throw t.f&=-2,t.f|=8,Se(t),r}finally{g=n,te()}}}function Se(t){for(var e=t.s;e!==void 0;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,nt(t)}function gt(t){if(g!==this)throw new Error("Out-of-order effect");tt(this),g=t,this.f&=-2,8&this.f&&Se(this),te()}function V(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}V.prototype.c=function(){var t=this.S();try{if(8&this.f||this.x===void 0)return;var e=this.x();typeof e=="function"&&(this.u=e)}finally{t()}};V.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,nt(this),et(this),N++;var t=g;return g=this,gt.bind(this,t)};V.prototype.N=function(){2&this.f||(this.f|=2,this.o=W,W=this)};V.prototype.d=function(){this.f|=8,1&this.f||Se(this)};function L(t){var e=new V(t);try{e.c()}catch(n){throw e.d(),n}return e.d.bind(e)}var we,ie,xe,rt=[],it=[];L(function(){we=this.N})();function $(t,e){h[t]=e.bind(null,h[t]||function(){})}function re(t){xe&&xe(),xe=t&&t.S()}function ot(t){var e=this,n=t.data,r=oe(n);r.value=n;var o=q(function(){for(var u=e,f=e.__v;f=f.__;)if(f.__c){f.__c.__$f|=4;break}var a=O(function(){var l=r.value.value;return l===0?0:l===!0?"":l||""}),c=O(function(){return!ce(a.value)}),_=L(function(){if(this.N=_t,c.value){var l=a.value;u.base&&u.base.nodeType===3&&(u.base.data=l)}}),v=e.__$u.d;return e.__$u.d=function(){_(),v.call(this)},[c,a]},[]),i=o[0],s=o[1];return i.value?s.peek():s.value}ot.displayName="_st";Object.defineProperties(k.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:ot},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});$("__b",function(t,e){if(typeof e.type=="string"){var n,r=e.props;for(var o in r)if(o!=="children"){var i=r[o];i instanceof k&&(n||(e.__np=n={}),n[o]=i,r[o]=i.peek())}}t(e)});$("__r",function(t,e){re();var n,r=e.__c;r&&(r.__$f&=-2,(n=r.__$u)===void 0&&(r.__$u=n=function(o){var i;return L(function(){i=this}),i.c=function(){r.__$f|=1,r.setState({})},i}())),ie=r,re(n),t(e)});$("__e",function(t,e,n,r){re(),ie=void 0,t(e,n,r)});$("diffed",function(t,e){re(),ie=void 0;var n;if(typeof e.type=="string"&&(n=e.__e)){var r=e.__np,o=e.props;if(r){var i=n.U;if(i)for(var s in i){var u=i[s];u!==void 0&&!(s in r)&&(u.d(),i[s]=void 0)}else i={},n.U=i;for(var f in r){var a=i[f],c=r[f];a===void 0?(a=bt(n,f,c,o),i[f]=a):a.o(c,o)}}}t(e)});function bt(t,e,n,r){var o=e in t&&t.ownerSVGElement===void 0,i=M(n);return{o:function(s,u){i.value=s,r=u},d:L(function(){this.N=_t;var s=i.value.value;r[e]!==s&&(r[e]=s,o?t[e]=s:s?t.setAttribute(e,s):t.removeAttribute(e))})}}$("unmount",function(t,e){if(typeof e.type=="string"){var n=e.__e;if(n){var r=n.U;if(r){n.U=void 0;for(var o in r){var i=r[o];i&&i.d()}}}}else{var s=e.__c;if(s){var u=s.__$u;u&&(s.__$u=void 0,u.d())}}t(e)});$("__h",function(t,e,n,r){(r<3||r===9)&&(e.__$f|=2),t(e,n,r)});T.prototype.shouldComponentUpdate=function(t,e){var n=this.__$u,r=n&&n.s!==void 0;for(var o in e)return!0;if(this.__f||typeof this.u=="boolean"&&this.u===!0){var i=2&this.__$f;if(!(r||i||4&this.__$f)||1&this.__$f)return!0}else if(!(r||4&this.__$f)||3&this.__$f)return!0;for(var s in t)if(s!=="__source"&&t[s]!==this.props[s])return!0;for(var u in this.props)if(!(u in t))return!0;return!1};function oe(t){return q(function(){return M(t)},[])}function _e(t){var e=j(t);return e.current=t,ie.__$f|=4,q(function(){return O(function(){return e.current()})},[])}var kt=typeof requestAnimationFrame>"u"?setTimeout:requestAnimationFrame,St=function(t){queueMicrotask(function(){queueMicrotask(t)})};function xt(){ne(function(){for(var t;t=rt.shift();)we.call(t)})}function wt(){rt.push(this)===1&&(h.requestAnimationFrame||kt)(xt)}function Ct(){ne(function(){for(var t;t=it.shift();)we.call(t)})}function _t(){it.push(this)===1&&(h.requestAnimationFrame||St)(Ct)}function st(t){var e=j(t);e.current=t,Ze(function(){return L(function(){return this.N=wt,e.current()})},[])}var Et=0,Dt=Array.isArray;function S(t,e,n,r,o,i){e||(e={});var s,u,f=e;if("ref"in f)for(u in f={},e)u=="ref"?s=e[u]:f[u]=e[u];var a={type:t,props:f,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Et,__i:-1,__u:0,__source:o,__self:i};if(typeof t=="function"&&(s=t.defaultProps))for(u in s)f[u]===void 0&&(f[u]=s[u]);return h.vnode&&h.vnode(a),a}var Pt=({results:t,resultsPerPage:e})=>{let n=oe(1),r=j(null),o=oe(null);st(()=>{if(!t.value)return;let a=r.current!==t.value;r.current=t.value,n.value;let c=a?1:n.value,_=(c-1)*e,v=c*e;Promise.all(t.value.results.slice(_,v).map(p=>p.data().then(x=>({result:p,data:x})))).then(p=>{if(p.length===0){o.value=S("div",{class:"search-no-results",children:"No results"}),a&&(n.value=0);return}a&&(n.value=1),o.value=p.map(({result:x,data:m})=>{let d=m.sub_results[0]?.url===(m.meta?.url||m.url)?m.sub_results.slice(1,4):m.sub_results.slice(0,3);return S("a",{class:"search-result",href:m.url,children:[S("header",{class:"result-title",children:m.meta.title??"No Title"}),S("div",{class:"result-excerpt",dangerouslySetInnerHTML:{__html:m.excerpt}}),d.map(E=>S("a",{className:"search-sub-result",href:E.url,children:[S("header",{class:"sub-result-title",children:E.title}),S("div",{class:"sub-result-excerpt",dangerouslySetInnerHTML:{__html:E.excerpt}})]}))]},x.id)})})});let i=t.value?Math.ceil(t.value.results.length/e):0,s=_e(()=>()=>{n.value>1&&n.value--}),u=_e(()=>()=>{n.value<i&&n.value++}),f=_e(()=>a=>{let c=Number(a.currentTarget.value);Number.isFinite(c)&&(n.value=Math.max(1,Math.min(c,i)))});return t.value?S("div",{class:"search-results",children:[S("div",{class:"pagination",children:[S("button",{class:"icon-button arrow-left",onClick:s.value,disabled:n.value<=1,title:"Previous page"}),S("input",{type:"number",class:"search-results-page-input",value:n.value,onChange:f.value,disabled:i===0})," of ",i,S("button",{class:"icon-button arrow-right",onClick:u.value,disabled:n.value>=i,title:"Next page"})]}),S("div",{class:"search-results-list",children:o.value})]}):null};function ut(){let t=document.getElementById("search-input"),e=!1,n=!1,r,o=async()=>{if(e)return r;e=!0;let v=t.getAttribute("placeholder");return setTimeout(()=>{n||(t.setAttribute("placeholder","Loading..."),t.classList.add("loading"))},100),r=import("/pagefind/pagefind.js").then(async l=>(await l.init(),l.preload("").then(()=>{t.setAttribute("placeholder",v),t.classList.remove("loading")}),n=!0,l)),r},i=document.getElementById("search-results-container");new ResizeObserver(([v])=>{i.style.top=`${v.borderBoxSize[0].blockSize}px`}).observe(document.getElementById("navigation-bar"));let u=M(null);t.addEventListener("input",v=>{_();let l=v.currentTarget.value;if(!l){u.value=null;return}o().then(p=>p.debouncedSearch(l)).then(p=>{p&&(u.value=p)})}),t.addEventListener("focus",()=>{o()},{once:!0}),t.removeAttribute("disabled"),t.value="";let f=document.getElementById("search-open"),a=document.getElementById("search-area");f.addEventListener("click",()=>{a.classList.contains("open")?a.classList.remove("open"):(a.classList.add("open"),t.focus()),_()});let c=document.getElementById("search-clear");c.addEventListener("click",()=>{t.value="",u.value=null,a.classList.remove("open"),_()});let _=()=>{a.classList.contains("open")||t.value.length>0?c.classList.add("active"):c.classList.remove("active")};_(),De(S(Pt,{results:u,resultsPerPage:5}),document.getElementById("search-results-container"))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ut):ut();
//# sourceMappingURL=search.js.map
