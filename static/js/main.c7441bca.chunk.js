(this["webpackJsonpdemo-react-app"]=this["webpackJsonpdemo-react-app"]||[]).push([[0],[,function(e,a,t){e.exports={Card:"NotificationCard_Card__2921U",Icon:"NotificationCard_Icon__3CVV3",Paragraph:"NotificationCard_Paragraph__15zU0",Button:"NotificationCard_Button__6n0BZ",Show:"NotificationCard_Show__1FLQA",Hide:"NotificationCard_Hide__2on9T"}},function(e,a,t){e.exports={SearchBar:"SearchBar_SearchBar__1VxBH",Input:"SearchBar_Input__3KqDZ",Button:"SearchBar_Button__2GMPn",Icon:"SearchBar_Icon__2fT_w"}},,,,,,function(e,a,t){e.exports={Container:"MainNav_Container__3AOts",MainNav:"MainNav_MainNav__34U-g"}},function(e,a,t){e.exports={Btn:"Button_Btn__bZEK8",Black:"Button_Black__QqGn2",Raw:"Button_Raw__33_fl"}},,,function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},function(e,a,t){e.exports={Logo:"Logo_Logo__1IHDV"}},function(e,a,t){e.exports={NavButton:"NavButton_NavButton__fn7Jw"}},function(e,a,t){e.exports={BurgerButton:"BurgerButton_BurgerButton__3ZLhP"}},function(e,a,t){e.exports={Catagory:"Catagory_Catagory__2TkH6"}},function(e,a,t){e.exports={CatagoryField:"CatagoryField_CatagoryField__36hbG"}},,function(e,a,t){e.exports=t(27)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),o=t.n(c),i=(t(24),t(25),t(12)),l=t.n(i),s=(t(26),t(3)),u=t(4),m=t(6),h=t(5),_=t(7),p=t(8),d=t.n(p),g=t(13),f=t.n(g);var v=function(e){return r.a.createElement("p",{className:f.a.Logo,style:{height:e.height}},"ZOZOTOWN")},E=t(2),N=t.n(E);var B=function(e){return r.a.createElement("form",{className:N.a.SearchBar},r.a.createElement("input",{placeholder:"T\xecm ki\u1ebfm m\u1ed9t c\xe1i g\xec \u0111\xf3",className:N.a.Input}),r.a.createElement("button",{className:N.a.Button},r.a.createElement("i",{className:"icon-search "+N.a.Icon})))},b=t(9),C=t.n(b);var y=function(e){var a=[C.a.Btn,C.a[e.type]];return r.a.createElement("button",{className:a.join(" ")},e.children)},w=t(18),j=t(14),k=t.n(j),O=t(1),x=t.n(O);var I=function(e){return r.a.createElement("div",{className:[x.a.Card,x.a[e.showNotification]].join(" ")},r.a.createElement("div",{className:x.a.Icon},r.a.createElement("i",{className:e.icon})),r.a.createElement("p",{className:x.a.Paragraph},e.children),r.a.createElement("div",{className:x.a.Button},r.a.createElement(y,{type:"Raw"},e.action)))};var S=function(e){var a=Object(n.useState)("Hide"),t=Object(w.a)(a,2),c=t[0],o=t[1];return r.a.createElement("div",{className:k.a.NavButton,onMouseEnter:function(){return o("Show")},onMouseLeave:function(){return o("Hide")}},r.a.createElement(y,{type:"Black"},r.a.createElement("i",{className:e.icon})),r.a.createElement(I,{icon:e.icon,showNotification:c,action:e.action},e.children))},M=t(15),H=t.n(M),L=t(16),A=t.n(L),F=t(17),Z=t.n(F);var P=function(e){return r.a.createElement("div",{className:Z.a.CatagoryField},"hihop never die")};var T=function(e){return r.a.createElement("div",{className:A.a.Catagory},r.a.createElement(P,null))};var R=function(e){return r.a.createElement("div",{className:H.a.BurgerButton},r.a.createElement(y,{type:"Black"},r.a.createElement("i",{className:e.icon})),r.a.createElement(T,null))},V=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(_.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:d.a.Container},r.a.createElement("div",{className:d.a.MainNav},r.a.createElement(v,null),r.a.createElement(B,null),r.a.createElement(y,{type:"Black"},"\u0110\u0103ng Nh\u1eadp"),r.a.createElement(S,{icon:"icon-message-square",action:"Nh\u1ea5n v\xe0o \u0111\xe2y \u0111\u1ec3 bi\u1ebft chi ti\u1ebft"},"Ch\xfang t\xf4i s\u1ebd th\xf4ng b\xe1o cho b\u1ea1n v\u1ec1 c\xe1c m\u1eb7t h\xe0ng y\xeau th\xedch c\u1ee7a b\u1ea1n v\xe0 th\xf4ng tin gi\u1ea3m gi\xe1 c\u1eeda h\xe0ng"),r.a.createElement(S,{icon:"icon-heart-outlined",action:"Nh\u1ea5n v\xe0o \u0111\xe2y \u0111\u1ec3 bi\u1ebft chi ti\u1ebft"},'Hi\u1ec7n t\u1ea1i kh\xf4ng ph\u1ea3i th\xe0nh vi\xean c\xf3 th\u1ec3 s\u1eed d\u1ee5ng "Favorites"'),r.a.createElement(S,{icon:"icon-cart",action:"Mua h\xe0ng"},"Kh\xf4ng c\xf3 s\u1ea3n ph\u1ea9m trong gi\u1ecf h\xe0ng"),r.a.createElement(R,{icon:"icon-menu"})))}}]),a}(n.Component),q=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(_.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null),r.a.createElement("main",null,this.props.children),r.a.createElement("div",null,"footer"))}}]),a}(n.Component);var G=function(){return r.a.createElement(q,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo"}),r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"src/App.js")," and save to reload."),r.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.c7441bca.chunk.js.map