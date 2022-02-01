!function(){"use strict";var t={206:function(t,e){var n=window,i=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.msRequestAnimationFrame||function(t){return setTimeout(t,16)},a=window,r=a.cancelAnimationFrame||a.mozCancelAnimationFrame||function(t){clearTimeout(t)};function o(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function s(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function l(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function u(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var c=document.documentElement;function f(t){var e="";return t.fake&&(e=c.style.overflow,t.style.background="",t.style.overflow=c.style.overflow="hidden",c.appendChild(t)),e}function d(t,e){t.fake&&(t.remove(),c.style.overflow=e,c.offsetHeight)}function v(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function p(t){return("insertRule"in t?t.cssRules:t.rules).length}function m(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var h="classList"in document.createElement("_"),y=h?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},g=h?function(t,e){y(t,e)||t.classList.add(e)}:function(t,e){y(t,e)||(t.className+=" "+e)},x=h?function(t,e){y(t,e)&&t.classList.remove(e)}:function(t,e){y(t,e)&&(t.className=t.className.replace(e,""))};function b(t,e){return t.hasAttribute(e)}function C(t,e){return t.getAttribute(e)}function w(t){return void 0!==t.item}function M(t,e){if(t=w(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function T(t,e){t=w(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function _(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function L(t,e){"none"!==t.style.display&&(t.style.display="none")}function E(t,e){"none"===t.style.display&&(t.style.display="")}function S(t){return"none"!==window.getComputedStyle(t).display}function A(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach((function(i){"ms"===i&&"transform"!==t||e.push(i+n)})),t=e}var i=document.createElement("fakeelement");t.length;for(var a=0;a<t.length;a++){var r=t[a];if(void 0!==i.style[r])return r}return!1}function N(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var B=!1;try{var I=Object.defineProperty({},"passive",{get:function(){B=!0}});window.addEventListener("test",null,I)}catch(t){}var D=!!B&&{passive:!0};function H(t,e,n){for(var i in e){var a=["touchstart","touchmove"].indexOf(i)>=0&&!n&&D;t.addEventListener(i,e[i],a)}}function O(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&D;t.removeEventListener(n,e[n],i)}}function k(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach((function(n){n(e,t)}))}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var q=function(t){t=o({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var e=document,n=window,a={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},c={},h=t.useLocalStorage;if(h){var w=navigator.userAgent,B=new Date;try{(c=n.localStorage)?(c.setItem(B,B),h=c.getItem(B)==B,c.removeItem(B)):h=!1,h||(c={})}catch(t){h=!1}h&&(c.tnsApp&&c.tnsApp!==w&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(t){c.removeItem(t)})),localStorage.tnsApp=w)}var I=c.tC?s(c.tC):l(c,"tC",function(){var t=document,e=u(),n=f(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",s=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],l=0;l<3;l++)if(r=s[l],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?d(e,n):i.remove(),a}(),h),D=c.tPL?s(c.tPL):l(c,"tPL",function(){var t,e=document,n=u(),i=f(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var s=0;s<70;s++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?d(n,i):a.remove(),t}(),h),R=c.tMQ?s(c.tMQ):l(c,"tMQ",function(){if(window.matchMedia||window.msMatchMedia)return!0;var t,e=document,n=u(),i=f(n),a=e.createElement("div"),r=e.createElement("style"),o="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",a.className="tns-mq-test",n.appendChild(r),n.appendChild(a),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(e.createTextNode(o)),t=window.getComputedStyle?window.getComputedStyle(a).position:a.currentStyle.position,n.fake?d(n,i):a.remove(),"absolute"===t}(),h),P=c.tTf?s(c.tTf):l(c,"tTf",A("transform"),h),W=c.t3D?s(c.t3D):l(c,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=u(),a=f(i),r=n.createElement("p"),o=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?d(i,a):r.remove(),void 0!==e&&e.length>0&&"none"!==e}(P),h),z=c.tTDu?s(c.tTDu):l(c,"tTDu",A("transitionDuration"),h),F=c.tTDe?s(c.tTDe):l(c,"tTDe",A("transitionDelay"),h),j=c.tADu?s(c.tADu):l(c,"tADu",A("animationDuration"),h),V=c.tADe?s(c.tADe):l(c,"tADe",A("animationDelay"),h),G=c.tTE?s(c.tTE):l(c,"tTE",N(z,"Transition"),h),Q=c.tAE?s(c.tAE):l(c,"tAE",N(j,"Animation"),h),X=n.console&&"function"==typeof n.console.warn,Y=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],K={};if(Y.forEach((function(n){if("string"==typeof t[n]){var i=t[n],a=e.querySelector(i);if(K[n]=i,!a||!a.nodeName)return void(X&&console.warn("Can't find",t[n]));t[n]=a}})),!(t.container.children.length<1)){var J=t.responsive,U=t.nested,Z="carousel"===t.mode;if(J){0 in J&&(t=o(t,J[0]),delete J[0]);var $={};for(var tt in J){var et=J[tt];et="number"==typeof et?{items:et}:et,$[tt]=et}J=$,$=null}if(Z||function t(e){for(var n in e)Z||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!Z){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,at=t.animateDelay,rt=t.animateNormal}var ot,st,lt="horizontal"===t.axis,ut=e.createElement("div"),ct=e.createElement("div"),ft=t.container,dt=ft.parentNode,vt=ft.outerHTML,pt=ft.children,mt=pt.length,ht=In(),yt=!1;J&&$n(),Z&&(ft.className+=" tns-vpfix");var gt,xt,bt,Ct,wt,Mt=t.autoWidth,Tt=qn("fixedWidth"),_t=qn("edgePadding"),Lt=qn("gutter"),Et=On(),St=qn("center"),At=Mt?1:Math.floor(qn("items")),Nt=qn("slideBy"),Bt=t.viewportMax||t.fixedWidthViewportWidth,It=qn("arrowKeys"),Dt=qn("speed"),Ht=t.rewind,Ot=!Ht&&t.loop,kt=qn("autoHeight"),qt=qn("controls"),Rt=qn("controlsText"),Pt=qn("nav"),Wt=qn("touch"),zt=qn("mouseDrag"),Ft=qn("autoplay"),jt=qn("autoplayTimeout"),Vt=qn("autoplayText"),Gt=qn("autoplayHoverPause"),Qt=qn("autoplayResetOnVisibility"),Xt=(null,Ct=qn("nonce"),wt=document.createElement("style"),Ct&&wt.setAttribute("nonce",Ct),document.querySelector("head").appendChild(wt),wt.sheet?wt.sheet:wt.styleSheet),Yt=t.lazyload,Kt=t.lazyloadSelector,Jt=[],Ut=Ot?(xt=function(){if(Mt||Tt&&!Bt)return mt-1;var e=Tt?"fixedWidth":"items",n=[];if((Tt||t[e]<mt)&&n.push(t[e]),J)for(var i in J){var a=J[i][e];a&&(Tt||a<mt)&&n.push(a)}return n.length||n.push(0),Math.ceil(Tt?Bt/Math.min.apply(null,n):Math.max.apply(null,n))}(),bt=Z?Math.ceil((5*xt-mt)/2):4*xt-mt,bt=Math.max(xt,bt),kn("edgePadding")?bt+1:bt):0,Zt=Z?mt+2*Ut:mt+Ut,$t=!(!Tt&&!Mt||Ot),te=Tt?_i():null,ee=!Z||!Ot,ne=lt?"left":"top",ie="",ae="",re=Tt?function(){return St&&!Ot?mt-1:Math.ceil(-te/(Tt+Lt))}:Mt?function(){for(var t=0;t<Zt;t++)if(gt[t]>=-te)return t}:function(){return St&&Z&&!Ot?mt-1:Ot||Z?Math.max(0,Zt-Math.ceil(At)):Zt-1},oe=An(qn("startIndex")),se=oe;Sn();var le,ue,ce,fe=0,de=Mt?null:re(),ve=t.preventActionWhenRunning,pe=t.swipeAngle,me=!pe||"?",he=!1,ye=t.onInit,ge=new k,xe=" tns-slider tns-"+t.mode,be=ft.id||(ce=window.tnsId,window.tnsId=ce?ce+1:1,"tns"+window.tnsId),Ce=qn("disable"),we=!1,Me=t.freezable,Te=!(!Me||Mt)&&Zn(),_e=!1,Le={click:Hi,keydown:function(t){t=Fi(t);var e=[a.LEFT,a.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Ye.disabled||Hi(t,-1):Ke.disabled||Hi(t,1))}},Ee={click:function(t){if(he){if(ve)return;Ii()}for(var e=ji(t=Fi(t));e!==$e&&!b(e,"data-nav");)e=e.parentNode;if(b(e,"data-nav")){var n=an=Number(C(e,"data-nav")),i=Tt||Mt?n*mt/en:n*At;Di(Oe?n:Math.min(Math.ceil(i),mt-1),t),rn===n&&(fn&&Pi(),an=-1)}},keydown:function(t){t=Fi(t);var n=e.activeElement;if(b(n,"data-nav")){var i=[a.LEFT,a.RIGHT,a.ENTER,a.SPACE].indexOf(t.keyCode),r=Number(C(n,"data-nav"));i>=0&&(0===i?r>0&&zi(Ze[r-1]):1===i?r<en-1&&zi(Ze[r+1]):(an=r,Di(r,t)))}}},Se={mouseover:function(){fn&&(ki(),dn=!0)},mouseout:function(){dn&&(Oi(),dn=!1)}},Ae={visibilitychange:function(){e.hidden?fn&&(ki(),pn=!0):pn&&(Oi(),pn=!1)}},Ne={keydown:function(t){t=Fi(t);var e=[a.LEFT,a.RIGHT].indexOf(t.keyCode);e>=0&&Hi(t,0===e?-1:1)}},Be={touchstart:Xi,touchmove:Yi,touchend:Ji,touchcancel:Ji},Ie={mousedown:Xi,mousemove:Yi,mouseup:Ji,mouseleave:Ji},De=kn("controls"),He=kn("nav"),Oe=!!Mt||t.navAsThumbnails,ke=kn("autoplay"),qe=kn("touch"),Re=kn("mouseDrag"),Pe="tns-slide-active",We="tns-slide-cloned",ze="tns-complete",Fe={load:function(t){li(ji(t))},error:function(t){var e;e=ji(t),g(e,"failed"),ui(e)}},je="force"===t.preventScrollOnTouch;if(De)var Ve,Ge,Qe=t.controlsContainer,Xe=t.controlsContainer?t.controlsContainer.outerHTML:"",Ye=t.prevButton,Ke=t.nextButton,Je=t.prevButton?t.prevButton.outerHTML:"",Ue=t.nextButton?t.nextButton.outerHTML:"";if(He)var Ze,$e=t.navContainer,tn=t.navContainer?t.navContainer.outerHTML:"",en=Mt?mt:Zi(),nn=0,an=-1,rn=Bn(),on=rn,sn="tns-nav-active",ln="Carousel Page ",un=" (Current Slide)";if(ke)var cn,fn,dn,vn,pn,mn="forward"===t.autoplayDirection?1:-1,hn=t.autoplayButton,yn=t.autoplayButton?t.autoplayButton.outerHTML:"",gn=["<span class='tns-visually-hidden'>"," animation</span>"];if(qe||Re)var xn,bn,Cn={},wn={},Mn=!1,Tn=lt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Mt||En(Ce||Te),P&&(ne=P,ie="translate",W?(ie+=lt?"3d(":"3d(0px, ",ae=lt?", 0px, 0px)":", 0px)"):(ie+=lt?"X(":"Y(",ae=")")),Z&&(ft.className=ft.className.replace("tns-vpfix","")),function(){if(kn("gutter"),ut.className="tns-outer",ct.className="tns-inner",ut.id=be+"-ow",ct.id=be+"-iw",""===ft.id&&(ft.id=be),xe+=D||Mt?" tns-subpixel":" tns-no-subpixel",xe+=I?" tns-calc":" tns-no-calc",Mt&&(xe+=" tns-autowidth"),xe+=" tns-"+t.axis,ft.className+=xe,Z?((ot=e.createElement("div")).id=be+"-mw",ot.className="tns-ovh",ut.appendChild(ot),ot.appendChild(ct)):ut.appendChild(ct),kt&&((ot||ct).className+=" tns-ah"),dt.insertBefore(ut,ft),ct.appendChild(ft),m(pt,(function(t,e){g(t,"tns-item"),t.id||(t.id=be+"-item"+e),!Z&&rt&&g(t,rt),M(t,{"aria-hidden":"true",tabindex:"-1"})})),Ut){for(var n=e.createDocumentFragment(),i=e.createDocumentFragment(),a=Ut;a--;){var r=a%mt,o=pt[r].cloneNode(!0);if(g(o,We),T(o,"id"),i.insertBefore(o,i.firstChild),Z){var s=pt[mt-1-r].cloneNode(!0);g(s,We),T(s,"id"),n.appendChild(s)}}ft.insertBefore(n,ft.firstChild),ft.appendChild(i),pt=ft.children}}(),function(){if(!Z)for(var e=oe,i=oe+Math.min(mt,At);e<i;e++){var a=pt[e];a.style.left=100*(e-oe)/At+"%",g(a,nt),x(a,rt)}if(lt&&(D||Mt?(v(Xt,"#"+be+" > .tns-item","font-size:"+n.getComputedStyle(pt[0]).fontSize+";",p(Xt)),v(Xt,"#"+be,"font-size:0;",p(Xt))):Z&&m(pt,(function(t,e){t.style.marginLeft=function(t){return I?I+"("+100*t+"% / "+Zt+")":100*t/Zt+"%"}(e)}))),R){if(z){var r=ot&&t.autoHeight?jn(t.speed):"";v(Xt,"#"+be+"-mw",r,p(Xt))}r=Rn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),v(Xt,"#"+be+"-iw",r,p(Xt)),Z&&(r=lt&&!Mt?"width:"+Pn(t.fixedWidth,t.gutter,t.items)+";":"",z&&(r+=jn(Dt)),v(Xt,"#"+be,r,p(Xt))),r=lt&&!Mt?Wn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(r+=zn(t.gutter)),Z||(z&&(r+=jn(Dt)),j&&(r+=Vn(Dt))),r&&v(Xt,"#"+be+" > .tns-item",r,p(Xt))}else Z&&kt&&(ot.style[z]=Dt/1e3+"s"),ct.style.cssText=Rn(_t,Lt,Tt,kt),Z&&lt&&!Mt&&(ft.style.width=Pn(Tt,Lt,At)),r=lt&&!Mt?Wn(Tt,Lt,At):"",Lt&&(r+=zn(Lt)),r&&v(Xt,"#"+be+" > .tns-item",r,p(Xt));if(J&&R)for(var o in J){o=parseInt(o);var s=J[o],l=(r="",""),u="",c="",f="",d=Mt?null:qn("items",o),h=qn("fixedWidth",o),y=qn("speed",o),b=qn("edgePadding",o),C=qn("autoHeight",o),w=qn("gutter",o);z&&ot&&qn("autoHeight",o)&&"speed"in s&&(l="#"+be+"-mw{"+jn(y)+"}"),("edgePadding"in s||"gutter"in s)&&(u="#"+be+"-iw{"+Rn(b,w,h,y,C)+"}"),Z&&lt&&!Mt&&("fixedWidth"in s||"items"in s||Tt&&"gutter"in s)&&(c="width:"+Pn(h,w,d)+";"),z&&"speed"in s&&(c+=jn(y)),c&&(c="#"+be+"{"+c+"}"),("fixedWidth"in s||Tt&&"gutter"in s||!Z&&"items"in s)&&(f+=Wn(h,w,d)),"gutter"in s&&(f+=zn(w)),!Z&&"speed"in s&&(z&&(f+=jn(y)),j&&(f+=Vn(y))),f&&(f="#"+be+" > .tns-item{"+f+"}"),(r=l+u+c+f)&&Xt.insertRule("@media (min-width: "+o/16+"em) {"+r+"}",Xt.cssRules.length)}}(),Gn();var _n=Ot?Z?function(){var t=fe,e=de;t+=Nt,e-=Nt,_t?(t+=1,e-=1):Tt&&(Et+Lt)%(Tt+Lt)&&(e-=1),Ut&&(oe>e?oe-=mt:oe<t&&(oe+=mt))}:function(){if(oe>de)for(;oe>=fe+mt;)oe-=mt;else if(oe<fe)for(;oe<=de-mt;)oe+=mt}:function(){oe=Math.max(fe,Math.min(de,oe))},Ln=Z?function(){var t,e,n,i,a,r,o,s,l,u,c;Mi(ft,""),z||!Dt?(Si(),Dt&&S(ft)||Ii()):(t=ft,e=ne,n=ie,i=ae,a=Li(),r=Dt,o=Ii,s=Math.min(r,10),l=a.indexOf("%")>=0?"%":"px",a=a.replace(l,""),u=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),c=(a-u)/r*s,setTimeout((function a(){r-=s,u+=c,t.style[e]=n+u+l+i,r>0?setTimeout(a,s):o()}),s)),lt||Ui()}:function(){Jt=[];var t={};t[G]=t[Q]=Ii,O(pt[se],t),H(pt[oe],t),Ai(se,nt,it,!0),Ai(oe,rt,nt),G&&Q&&Dt&&S(ft)||Ii()};return{version:"2.9.4",getInfo:ta,events:ge,goTo:Di,play:function(){Ft&&!fn&&(Ri(),vn=!1)},pause:function(){fn&&(Pi(),vn=!0)},isOn:yt,updateSliderHeight:mi,refresh:Gn,destroy:function(){if(Xt.disabled=!0,Xt.ownerNode&&Xt.ownerNode.remove(),O(n,{resize:Jn}),It&&O(e,Ne),Qe&&O(Qe,Le),$e&&O($e,Ee),O(ft,Se),O(ft,Ae),hn&&O(hn,{click:Wi}),Ft&&clearInterval(cn),Z&&G){var i={};i[G]=Ii,O(ft,i)}Wt&&O(ft,Be),zt&&O(ft,Ie);var a=[vt,Xe,Je,Ue,tn,yn];for(var r in Y.forEach((function(e,n){var i="container"===e?ut:t[e];if("object"==typeof i&&i){var r=!!i.previousElementSibling&&i.previousElementSibling,o=i.parentNode;i.outerHTML=a[n],t[e]=r?r.nextElementSibling:o.firstElementChild}})),Y=nt=it=at=rt=lt=ut=ct=ft=dt=vt=pt=mt=st=ht=Mt=Tt=_t=Lt=Et=At=Nt=Bt=It=Dt=Ht=Ot=kt=Xt=Yt=gt=Jt=Ut=Zt=$t=te=ee=ne=ie=ae=re=oe=se=fe=de=pe=me=he=ye=ge=xe=be=Ce=we=Me=Te=_e=Le=Ee=Se=Ae=Ne=Be=Ie=De=He=Oe=ke=qe=Re=Pe=ze=Fe=le=qt=Rt=Qe=Xe=Ye=Ke=Ve=Ge=Pt=$e=tn=Ze=en=nn=an=rn=on=sn=ln=un=Ft=jt=mn=Vt=Gt=hn=yn=Qt=gn=cn=fn=dn=vn=pn=Cn=wn=xn=Mn=bn=Tn=Wt=zt=null,this)"rebuild"!==r&&(this[r]=null);yt=!1},rebuild:function(){return q(o(t,K))}}}function En(t){t&&(qt=Pt=Wt=zt=It=Ft=Gt=Qt=!1)}function Sn(){for(var t=Z?oe-Ut:oe;t<0;)t+=mt;return t%mt+1}function An(t){return t=t?Math.max(0,Math.min(Ot?mt-1:mt-At,t)):0,Z?t+Ut:t}function Nn(t){for(null==t&&(t=oe),Z&&(t-=Ut);t<0;)t+=mt;return Math.floor(t%mt)}function Bn(){var t,e=Nn();return t=Oe?e:Tt||Mt?Math.ceil((e+1)*en/mt-1):Math.floor(e/At),!Ot&&Z&&oe===de&&(t=en-1),t}function In(){return n.innerWidth||e.documentElement.clientWidth||e.body.clientWidth}function Dn(t){return"top"===t?"afterbegin":"beforeend"}function Hn(t){if(null!=t){var n,i,a=e.createElement("div");return t.appendChild(a),i=(n=a.getBoundingClientRect()).right-n.left,a.remove(),i||Hn(t.parentNode)}}function On(){var t=_t?2*_t-Lt:0;return Hn(dt)-t}function kn(e){if(t[e])return!0;if(J)for(var n in J)if(J[n][e])return!0;return!1}function qn(e,n){if(null==n&&(n=ht),"items"===e&&Tt)return Math.floor((Et+Lt)/(Tt+Lt))||1;var i=t[e];if(J)for(var a in J)n>=parseInt(a)&&e in J[a]&&(i=J[a][e]);return"slideBy"===e&&"page"===i&&(i=qn("items")),Z||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function Rn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=lt?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var s="-"+e+"px";r="margin: 0 "+(lt?s+" 0 0":"0 "+s+" 0")+";"}return!Z&&a&&z&&i&&(r+=jn(i)),r}function Pn(t,e,n){return t?(t+e)*Zt+"px":I?I+"("+100*Zt+"% / "+n+")":100*Zt/n+"%"}function Wn(t,e,n){var i;if(t)i=t+e+"px";else{Z||(n=Math.floor(n));var a=Z?Zt:n;i=I?I+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==U?i+";":i+" !important;"}function zn(t){var e="";return!1!==t&&(e=(lt?"padding-":"margin-")+(lt?"right":"bottom")+": "+t+"px;"),e}function Fn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function jn(t){return Fn(z,18)+"transition-duration:"+t/1e3+"s;"}function Vn(t){return Fn(j,17)+"animation-duration:"+t/1e3+"s;"}function Gn(){if(kn("autoHeight")||Mt||!lt){var t=ft.querySelectorAll("img");m(t,(function(t){var e=t.src;Yt||(e&&e.indexOf("data:image")<0?(t.src="",H(t,Fe),g(t,"loading"),t.src=e):li(t))})),i((function(){di(_(t),(function(){le=!0}))})),kn("autoHeight")&&(t=ci(oe,Math.min(oe+At-1,Zt-1))),Yt?Qn():i((function(){di(_(t),Qn)}))}else Z&&Ei(),Yn(),Kn()}function Qn(){if(Mt&&mt>1){var t=Ot?oe:mt-1;!function e(){var n=pt[t].getBoundingClientRect().left,i=pt[t-1].getBoundingClientRect().right;Math.abs(n-i)<=1?Xn():setTimeout((function(){e()}),16)}()}else Xn()}function Xn(){lt&&!Mt||(hi(),Mt?(te=_i(),Me&&(Te=Zn()),de=re(),En(Ce||Te)):Ui()),Z&&Ei(),Yn(),Kn()}function Yn(){if(yi(),ut.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ri()+"</span>  of "+mt+"</div>"),ue=ut.querySelector(".tns-liveregion .current"),ke){var e=Ft?"stop":"start";hn?M(hn,{"data-action":e}):t.autoplayButtonOutput&&(ut.insertAdjacentHTML(Dn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+gn[0]+e+gn[1]+Vt[0]+"</button>"),hn=ut.querySelector("[data-action]")),hn&&H(hn,{click:Wi}),Ft&&(Ri(),Gt&&H(ft,Se),Qt&&H(ft,Ae))}if(He){if($e)M($e,{"aria-label":"Carousel Pagination"}),m(Ze=$e.children,(function(t,e){M(t,{"data-nav":e,tabindex:"-1","aria-label":ln+(e+1),"aria-controls":be})}));else{for(var n="",i=Oe?"":'style="display:none"',a=0;a<mt;a++)n+='<button type="button" data-nav="'+a+'" tabindex="-1" aria-controls="'+be+'" '+i+' aria-label="'+ln+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",ut.insertAdjacentHTML(Dn(t.navPosition),n),$e=ut.querySelector(".tns-nav"),Ze=$e.children}if($i(),z){var r=z.substring(0,z.length-18).toLowerCase(),o="transition: all "+Dt/1e3+"s";r&&(o="-"+r+"-"+o),v(Xt,"[aria-controls^="+be+"-item]",o,p(Xt))}M(Ze[rn],{"aria-label":ln+(rn+1)+un}),T(Ze[rn],"tabindex"),g(Ze[rn],sn),H($e,Ee)}De&&(Qe||Ye&&Ke||(ut.insertAdjacentHTML(Dn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+be+'">'+Rt[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+be+'">'+Rt[1]+"</button></div>"),Qe=ut.querySelector(".tns-controls")),Ye&&Ke||(Ye=Qe.children[0],Ke=Qe.children[1]),t.controlsContainer&&M(Qe,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&M([Ye,Ke],{"aria-controls":be,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(M(Ye,{"data-controls":"prev"}),M(Ke,{"data-controls":"next"})),Ve=xi(Ye),Ge=xi(Ke),wi(),Qe?H(Qe,Le):(H(Ye,Le),H(Ke,Le))),ti()}function Kn(){if(Z&&G){var i={};i[G]=Ii,H(ft,i)}Wt&&H(ft,Be,t.preventScrollOnTouch),zt&&H(ft,Ie),It&&H(e,Ne),"inner"===U?ge.on("outerResized",(function(){Un(),ge.emit("innerLoaded",ta())})):(J||Tt||Mt||kt||!lt)&&H(n,{resize:Jn}),kt&&("outer"===U?ge.on("innerLoaded",fi):Ce||fi()),si(),Ce?ii():Te&&ni(),ge.on("indexChanged",vi),"inner"===U&&ge.emit("innerLoaded",ta()),"function"==typeof ye&&ye(ta()),yt=!0}function Jn(t){i((function(){Un(Fi(t))}))}function Un(n){if(yt){"outer"===U&&ge.emit("outerResized",ta(n)),ht=In();var i,a=st,r=!1;J&&($n(),(i=a!==st)&&ge.emit("newBreakpointStart",ta(n)));var o,s,l=At,u=Ce,c=Te,f=It,d=qt,h=Pt,y=Wt,b=zt,C=Ft,w=Gt,M=Qt,T=oe;if(i){var _=Tt,S=kt,A=Rt,N=St,B=Vt;if(!R)var I=Lt,D=_t}if(It=qn("arrowKeys"),qt=qn("controls"),Pt=qn("nav"),Wt=qn("touch"),St=qn("center"),zt=qn("mouseDrag"),Ft=qn("autoplay"),Gt=qn("autoplayHoverPause"),Qt=qn("autoplayResetOnVisibility"),i&&(Ce=qn("disable"),Tt=qn("fixedWidth"),Dt=qn("speed"),kt=qn("autoHeight"),Rt=qn("controlsText"),Vt=qn("autoplayText"),jt=qn("autoplayTimeout"),R||(_t=qn("edgePadding"),Lt=qn("gutter"))),En(Ce),Et=On(),lt&&!Mt||Ce||(hi(),lt||(Ui(),r=!0)),(Tt||Mt)&&(te=_i(),de=re()),(i||Tt)&&(At=qn("items"),Nt=qn("slideBy"),(s=At!==l)&&(Tt||Mt||(de=re()),_n())),i&&Ce!==u&&(Ce?ii():function(){if(we){if(Xt.disabled=!1,ft.className+=xe,Ei(),Ot)for(var t=Ut;t--;)Z&&E(pt[t]),E(pt[Zt-t-1]);if(!Z)for(var e=oe,n=oe+mt;e<n;e++){var i=pt[e],a=e<oe+At?nt:rt;i.style.left=100*(e-oe)/At+"%",g(i,a)}ei(),we=!1}}()),Me&&(i||Tt||Mt)&&(Te=Zn())!==c&&(Te?(Si(Li(An(0))),ni()):(function(){if(_e){if(_t&&R&&(ct.style.margin=""),Ut)for(var t="tns-transparent",e=Ut;e--;)Z&&x(pt[e],t),x(pt[Zt-e-1],t);ei(),_e=!1}}(),r=!0)),En(Ce||Te),Ft||(Gt=Qt=!1),It!==f&&(It?H(e,Ne):O(e,Ne)),qt!==d&&(qt?Qe?E(Qe):(Ye&&E(Ye),Ke&&E(Ke)):Qe?L(Qe):(Ye&&L(Ye),Ke&&L(Ke))),Pt!==h&&(Pt?(E($e),$i()):L($e)),Wt!==y&&(Wt?H(ft,Be,t.preventScrollOnTouch):O(ft,Be)),zt!==b&&(zt?H(ft,Ie):O(ft,Ie)),Ft!==C&&(Ft?(hn&&E(hn),fn||vn||Ri()):(hn&&L(hn),fn&&Pi())),Gt!==w&&(Gt?H(ft,Se):O(ft,Se)),Qt!==M&&(Qt?H(e,Ae):O(e,Ae)),i){if(Tt===_&&St===N||(r=!0),kt!==S&&(kt||(ct.style.height="")),qt&&Rt!==A&&(Ye.innerHTML=Rt[0],Ke.innerHTML=Rt[1]),hn&&Vt!==B){var k=Ft?1:0,q=hn.innerHTML,P=q.length-B[k].length;q.substring(P)===B[k]&&(hn.innerHTML=q.substring(0,P)+Vt[k])}}else St&&(Tt||Mt)&&(r=!0);if((s||Tt&&!Mt)&&(en=Zi(),$i()),(o=oe!==T)?(ge.emit("indexChanged",ta()),r=!0):s?o||vi():(Tt||Mt)&&(si(),yi(),ai()),s&&!Z&&function(){for(var t=oe+Math.min(mt,At),e=Zt;e--;){var n=pt[e];e>=oe&&e<t?(g(n,"tns-moving"),n.style.left=100*(e-oe)/At+"%",g(n,nt),x(n,rt)):n.style.left&&(n.style.left="",g(n,rt),x(n,nt)),x(n,it)}setTimeout((function(){m(pt,(function(t){x(t,"tns-moving")}))}),300)}(),!Ce&&!Te){if(i&&!R&&(_t===D&&Lt===I||(ct.style.cssText=Rn(_t,Lt,Tt,Dt,kt)),lt)){Z&&(ft.style.width=Pn(Tt,Lt,At));var W=Wn(Tt,Lt,At)+zn(Lt);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Xt,p(Xt)-1),v(Xt,"#"+be+" > .tns-item",W,p(Xt))}kt&&fi(),r&&(Ei(),se=oe)}i&&ge.emit("newBreakpointEnd",ta(n))}}function Zn(){if(!Tt&&!Mt)return mt<=(St?At-(At-1)/2:At);var t=Tt?(Tt+Lt)*mt:gt[mt],e=_t?Et+2*_t:Et+Lt;return St&&(e-=Tt?(Et-Tt)/2:(Et-(gt[oe+1]-gt[oe]-Lt))/2),t<=e}function $n(){for(var t in st=0,J)t=parseInt(t),ht>=t&&(st=t)}function ti(){!Ft&&hn&&L(hn),!Pt&&$e&&L($e),qt||(Qe?L(Qe):(Ye&&L(Ye),Ke&&L(Ke)))}function ei(){Ft&&hn&&E(hn),Pt&&$e&&E($e),qt&&(Qe?E(Qe):(Ye&&E(Ye),Ke&&E(Ke)))}function ni(){if(!_e){if(_t&&(ct.style.margin="0px"),Ut)for(var t="tns-transparent",e=Ut;e--;)Z&&g(pt[e],t),g(pt[Zt-e-1],t);ti(),_e=!0}}function ii(){if(!we){if(Xt.disabled=!0,ft.className=ft.className.replace(xe.substring(1),""),T(ft,["style"]),Ot)for(var t=Ut;t--;)Z&&L(pt[t]),L(pt[Zt-t-1]);if(lt&&Z||T(ct,["style"]),!Z)for(var e=oe,n=oe+mt;e<n;e++){var i=pt[e];T(i,["style"]),x(i,nt),x(i,rt)}ti(),we=!0}}function ai(){var t=ri();ue.innerHTML!==t&&(ue.innerHTML=t)}function ri(){var t=oi(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function oi(t){null==t&&(t=Li());var e,n,i,a=oe;if(St||_t?(Mt||Tt)&&(n=-(parseFloat(t)+_t),i=n+Et+2*_t):Mt&&(n=gt[oe],i=n+Et),Mt)gt.forEach((function(t,r){r<Zt&&((St||_t)&&t<=n+.5&&(a=r),i-t>=.5&&(e=r))}));else{if(Tt){var r=Tt+Lt;St||_t?(a=Math.floor(n/r),e=Math.ceil(i/r-1)):e=a+Math.ceil(Et/r)-1}else if(St||_t){var o=At-1;if(St?(a-=o/2,e=oe+o/2):e=oe+o,_t){var s=_t*At/Et;a-=s,e+=s}a=Math.floor(a),e=Math.ceil(e)}else e=a+At-1;a=Math.max(a,0),e=Math.min(e,Zt-1)}return[a,e]}function si(){if(Yt&&!Ce){var t=oi();t.push(Kt),ci.apply(null,t).forEach((function(t){if(!y(t,ze)){var e={};e[G]=function(t){t.stopPropagation()},H(t,e),H(t,Fe),t.src=C(t,"data-src");var n=C(t,"data-srcset");n&&(t.srcset=n),g(t,"loading")}}))}}function li(t){g(t,"loaded"),ui(t)}function ui(t){g(t,ze),x(t,"loading"),O(t,Fe)}function ci(t,e,n){var i=[];for(n||(n="img");t<=e;)m(pt[t].querySelectorAll(n),(function(t){i.push(t)})),t++;return i}function fi(){var t=ci.apply(null,oi());i((function(){di(t,mi)}))}function di(t,e){return le?e():(t.forEach((function(e,n){!Yt&&e.complete&&ui(e),y(e,ze)&&t.splice(n,1)})),t.length?void i((function(){di(t,e)})):e())}function vi(){si(),yi(),ai(),wi(),function(){if(Pt&&(rn=an>=0?an:Bn(),an=-1,rn!==on)){var t=Ze[on],e=Ze[rn];M(t,{tabindex:"-1","aria-label":ln+(on+1)}),x(t,sn),M(e,{"aria-label":ln+(rn+1)+un}),T(e,"tabindex"),g(e,sn),on=rn}}()}function pi(t,e){for(var n=[],i=t,a=Math.min(t+e,Zt);i<a;i++)n.push(pt[i].offsetHeight);return Math.max.apply(null,n)}function mi(){var t=kt?pi(oe,At):pi(Ut,mt),e=ot||ct;e.style.height!==t&&(e.style.height=t+"px")}function hi(){gt=[0];var t=lt?"left":"top",e=lt?"right":"bottom",n=pt[0].getBoundingClientRect()[t];m(pt,(function(i,a){a&&gt.push(i.getBoundingClientRect()[t]-n),a===Zt-1&&gt.push(i.getBoundingClientRect()[e]-n)}))}function yi(){var t=oi(),e=t[0],n=t[1];m(pt,(function(t,i){i>=e&&i<=n?b(t,"aria-hidden")&&(T(t,["aria-hidden","tabindex"]),g(t,Pe)):b(t,"aria-hidden")||(M(t,{"aria-hidden":"true",tabindex:"-1"}),x(t,Pe))}))}function gi(t){return t.nodeName.toLowerCase()}function xi(t){return"button"===gi(t)}function bi(t){return"true"===t.getAttribute("aria-disabled")}function Ci(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function wi(){if(qt&&!Ht&&!Ot){var t=Ve?Ye.disabled:bi(Ye),e=Ge?Ke.disabled:bi(Ke),n=oe<=fe,i=!Ht&&oe>=de;n&&!t&&Ci(Ve,Ye,!0),!n&&t&&Ci(Ve,Ye,!1),i&&!e&&Ci(Ge,Ke,!0),!i&&e&&Ci(Ge,Ke,!1)}}function Mi(t,e){z&&(t.style[z]=e)}function Ti(t){return null==t&&(t=oe),Mt?(Et-(_t?Lt:0)-(gt[t+1]-gt[t]-Lt))/2:Tt?(Et-Tt)/2:(At-1)/2}function _i(){var t=Et+(_t?Lt:0)-(Tt?(Tt+Lt)*Zt:gt[Zt]);return St&&!Ot&&(t=Tt?-(Tt+Lt)*(Zt-1)-Ti():Ti(Zt-1)-gt[Zt-1]),t>0&&(t=0),t}function Li(t){var e;if(null==t&&(t=oe),lt&&!Mt)if(Tt)e=-(Tt+Lt)*t,St&&(e+=Ti());else{var n=P?Zt:At;St&&(t-=Ti()),e=100*-t/n}else e=-gt[t],St&&Mt&&(e+=Ti());return $t&&(e=Math.max(e,te)),e+(!lt||Mt||Tt?"px":"%")}function Ei(t){Mi(ft,"0s"),Si(t)}function Si(t){null==t&&(t=Li()),ft.style[ne]=ie+t+ae}function Ai(t,e,n,i){var a=t+At;Ot||(a=Math.min(a,Zt));for(var r=t;r<a;r++){var o=pt[r];i||(o.style.left=100*(r-oe)/At+"%"),at&&F&&(o.style[F]=o.style[V]=at*(r-t)/1e3+"s"),x(o,e),g(o,n),i&&Jt.push(o)}}function Ni(t,e){ee&&_n(),(oe!==se||e)&&(ge.emit("indexChanged",ta()),ge.emit("transitionStart",ta()),kt&&fi(),fn&&t&&["click","keydown"].indexOf(t.type)>=0&&Pi(),he=!0,Ln())}function Bi(t){return t.toLowerCase().replace(/-/g,"")}function Ii(t){if(Z||he){if(ge.emit("transitionEnd",ta(t)),!Z&&Jt.length>0)for(var e=0;e<Jt.length;e++){var n=Jt[e];n.style.left="",V&&F&&(n.style[V]="",n.style[F]=""),x(n,it),g(n,rt)}if(!t||!Z&&t.target.parentNode===ft||t.target===ft&&Bi(t.propertyName)===Bi(ne)){if(!ee){var i=oe;_n(),oe!==i&&(ge.emit("indexChanged",ta()),Ei())}"inner"===U&&ge.emit("innerLoaded",ta()),he=!1,se=oe}}}function Di(t,e){if(!Te)if("prev"===t)Hi(e,-1);else if("next"===t)Hi(e,1);else{if(he){if(ve)return;Ii()}var n=Nn(),i=0;if("first"===t?i=-n:"last"===t?i=Z?mt-At-n:mt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(mt-1,t))),i=t-n)),!Z&&i&&Math.abs(i)<At){var a=i>0?1:-1;i+=oe+i-mt>=fe?mt*a:2*mt*a*-1}oe+=i,Z&&Ot&&(oe<fe&&(oe+=mt),oe>de&&(oe-=mt)),Nn(oe)!==Nn(se)&&Ni(e)}}function Hi(t,e){if(he){if(ve)return;Ii()}var n;if(!e){for(var i=ji(t=Fi(t));i!==Qe&&[Ye,Ke].indexOf(i)<0;)i=i.parentNode;var a=[Ye,Ke].indexOf(i);a>=0&&(n=!0,e=0===a?-1:1)}if(Ht){if(oe===fe&&-1===e)return void Di("last",t);if(oe===de&&1===e)return void Di("first",t)}e&&(oe+=Nt*e,Mt&&(oe=Math.floor(oe)),Ni(n||t&&"keydown"===t.type?t:null))}function Oi(){cn=setInterval((function(){Hi(null,mn)}),jt),fn=!0}function ki(){clearInterval(cn),fn=!1}function qi(t,e){M(hn,{"data-action":t}),hn.innerHTML=gn[0]+t+gn[1]+e}function Ri(){Oi(),hn&&qi("stop",Vt[1])}function Pi(){ki(),hn&&qi("start",Vt[0])}function Wi(){fn?(Pi(),vn=!0):(Ri(),vn=!1)}function zi(t){t.focus()}function Fi(t){return Vi(t=t||n.event)?t.changedTouches[0]:t}function ji(t){return t.target||n.event.srcElement}function Vi(t){return t.type.indexOf("touch")>=0}function Gi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Qi(){return r=wn.y-Cn.y,o=wn.x-Cn.x,e=Math.atan2(r,o)*(180/Math.PI),n=pe,i=!1,(a=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":a<=n&&(i="vertical"),i===t.axis;var e,n,i,a,r,o}function Xi(t){if(he){if(ve)return;Ii()}Ft&&fn&&ki(),Mn=!0,bn&&(r(bn),bn=null);var e=Fi(t);ge.emit(Vi(t)?"touchStart":"dragStart",ta(t)),!Vi(t)&&["img","a"].indexOf(gi(ji(t)))>=0&&Gi(t),wn.x=Cn.x=e.clientX,wn.y=Cn.y=e.clientY,Z&&(xn=parseFloat(ft.style[ne].replace(ie,"")),Mi(ft,"0s"))}function Yi(t){if(Mn){var e=Fi(t);wn.x=e.clientX,wn.y=e.clientY,Z?bn||(bn=i((function(){Ki(t)}))):("?"===me&&(me=Qi()),me&&(je=!0)),("boolean"!=typeof t.cancelable||t.cancelable)&&je&&t.preventDefault()}}function Ki(t){if(me){if(r(bn),Mn&&(bn=i((function(){Ki(t)}))),"?"===me&&(me=Qi()),me){!je&&Vi(t)&&(je=!0);try{t.type&&ge.emit(Vi(t)?"touchMove":"dragMove",ta(t))}catch(t){}var e=xn,n=Tn(wn,Cn);!lt||Tt||Mt?(e+=n,e+="px"):(e+=P?n*At*100/((Et+Lt)*Zt):100*n/(Et+Lt),e+="%"),ft.style[ne]=ie+e+ae}}else Mn=!1}function Ji(e){if(Mn){bn&&(r(bn),bn=null),Z&&Mi(ft,""),Mn=!1;var n=Fi(e);wn.x=n.clientX,wn.y=n.clientY;var a=Tn(wn,Cn);if(Math.abs(a)){if(!Vi(e)){var o=ji(e);H(o,{click:function t(e){Gi(e),O(o,{click:t})}})}Z?bn=i((function(){if(lt&&!Mt){var t=-a*At/(Et+Lt);t=a>0?Math.floor(t):Math.ceil(t),oe+=t}else{var n=-(xn+a);if(n<=0)oe=fe;else if(n>=gt[Zt-1])oe=de;else for(var i=0;i<Zt&&n>=gt[i];)oe=i,n>gt[i]&&a<0&&(oe+=1),i++}Ni(e,a),ge.emit(Vi(e)?"touchEnd":"dragEnd",ta(e))})):me&&Hi(e,a>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(je=!1),pe&&(me="?"),Ft&&!fn&&Oi()}function Ui(){(ot||ct).style.height=gt[oe+At]-gt[oe]+"px"}function Zi(){var t=Tt?(Tt+Lt)*mt/Et:mt/At;return Math.min(Math.ceil(t),mt)}function $i(){if(Pt&&!Oe&&en!==nn){var t=nn,e=en,n=E;for(nn>en&&(t=en,e=nn,n=L);t<e;)n(Ze[t]),t++;nn=en}}function ta(t){return{container:ft,slideItems:pt,navContainer:$e,navItems:Ze,controlsContainer:Qe,hasControls:De,prevButton:Ye,nextButton:Ke,items:At,slideBy:Nt,cloneCount:Ut,slideCount:mt,slideCountNew:Zt,index:oe,indexCached:se,displayIndex:Sn(),navCurrentIndex:rn,navCurrentIndexCached:on,pages:en,pagesCached:nn,sheet:Xt,isOn:yt,event:t||{}}}X&&console.warn("No slides found in",t.container)};e.W=q}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}!function(){var t=n(206);function e(t){document.querySelector(t).classList.add(t.slice(1)+"_active")}function i(t){document.querySelector(t).classList.remove(t.slice(1)+"_active")}function a(t){document.querySelectorAll(t).forEach(((e,n)=>{0==n&&e.classList.add(t.slice(1)+"_first-active"),1==n&&e.classList.add(t.slice(1)+"_second-active"),2==n&&e.classList.add(t.slice(1)+"_third-active"),3==n&&e.classList.add(t.slice(1)+"_fourth-active")}))}function r(t){document.querySelectorAll(t).forEach(((e,n)=>{0==n&&e.classList.remove(t.slice(1)+"_first-active"),1==n&&e.classList.remove(t.slice(1)+"_second-active"),2==n&&e.classList.remove(t.slice(1)+"_third-active"),3==n&&e.classList.remove(t.slice(1)+"_fourth-active")}))}(()=>{const n=(0,t.W)({container:".slider",items:1,slideBy:"page",autoplay:!1,axis:"vertical",controlsContainer:".controls",nav:!1,mouseDrag:!0,autoHeight:!0,startIndex:0});n.events.on("transitionStart",(function(){1==n.getInfo().displayIndex?(e(".header__title"),e(".main-logo")):(i(".header__title"),i(".main-logo")),2==n.getInfo().displayIndex?(document.querySelector(".quality__text").classList.add("quality__text_active"),a(".quality__image")):(document.querySelector(".quality__text").classList.remove("quality__text_active"),r(".quality__image")),3==n.getInfo().displayIndex?(document.querySelector(".great__text").classList.add("great__text_active"),a(".great__list-item")):(document.querySelector(".great__text").classList.remove("great__text_active"),r(".great__list-item")),5==n.getInfo().displayIndex?a(".artist__item"):r(".artist__item")}))})(),(()=>{const t=document.querySelectorAll(".special__btn"),e=document.querySelectorAll(".special__items"),n=document.querySelector(".special__btns");function i(t){e.forEach(((e,n)=>{n==t?e.classList.add("special__items_active"):e.classList.remove("special__items_active")}))}t.forEach(((t,e)=>{1==e?t.classList.add("special__btn_active"):t.classList.remove("special__btn_active")})),i(1),n.addEventListener("click",(e=>{let n=e.target;t.forEach(((t,e)=>{t.classList.remove("special__btn_active"),n==t&&(t.classList.add("special__btn_active"),i(e))}))}))})(),(()=>{function t(t){return t>=0&&t<10?"0".concat(t):t}!function(e,n){const i=document.querySelector(".header__counter"),a=i.querySelector("#hours"),r=i.querySelector("#minutes"),o=i.querySelector("#seconds"),s=setInterval(l,1e3);function l(){const e=function(t){const e=Date.parse("2022-02-20")-Date.parse(new Date);return{total:e,hours:Math.floor(e/36e5),minutes:Math.floor(e/1e3/60%60),seconds:Math.floor(e/1e3%60)}}();a.textContent=t(e.hours),r.textContent=t(e.minutes),o.textContent=t(e.seconds),e.total<=0&&clearInterval(s)}l()}()})()}()}();
//# sourceMappingURL=bundle.js.map