(this.webpackJsonpStarWars=this.webpackJsonpStarWars||[]).push([[0],[,,,,,function(e,t,n){"use strict";n.d(t,"f",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"i",(function(){return r})),n.d(t,"h",(function(){return s})),n.d(t,"g",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return j})),n.d(t,"j",(function(){return _}));var a="https://",c="http://",r="swapi.dev/api/",s="people",i="/?page=",o=a+r+s+i,l=a+r+s,u=a+r+s+"/?search=",j=".jpg",_="https://starwars-visualguide.com/assets/img/characters"},,,,,,,,function(e,t,n){e.exports={container:"ChooseSide_container__2w_6b",item:"ChooseSide_item__2ty8w",item__header:"ChooseSide_item__header__EGZJ8",item__img:"ChooseSide_item__img__3N5Aa",item__light:"ChooseSide_item__light__2dWJN",item__dark:"ChooseSide_item__dark__BLjMz",item__neitral:"ChooseSide_item__neitral__mm4Ng"}},function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return i}));var a=n(7),c=n.n(a),r=n(12),s=(n(5),function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if((n=e.sent).ok){e.next=7;break}return console.error("Could not fetch.",n.status),e.abrupt("return",!1);case 7:return e.next=9,n.json();case 9:return e.abrupt("return",e.sent);case 12:return e.prev=12,e.t0=e.catch(0),console.error("Could not fetch.",e.t0.message),e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()),i=function(){var e=Object(r.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return fetch(e).then((function(e){return e.json()}))})));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},function(e,t,n){e.exports={list__container:"SearchPageInfo_list__container__inVnP",list__item:"SearchPageInfo_list__item__e7aeF",person__photo:"SearchPageInfo_person__photo__1x6Dk",person__name:"SearchPageInfo_person__name__1NNHW",person__comment:"SearchPageInfo_person__comment__2th5G"}},function(e,t,n){e.exports={wrapper:"PersonInfo_wrapper__1igD9",list__container:"PersonInfo_list__container__2n_tw",list__item:"PersonInfo_list__item__XJ5RX",item__title:"PersonInfo_item__title__rGs6K"}},,,,,,function(e,t,n){e.exports={list__container:"PeopleList_list__container__1cwf2",list__item:"PeopleList_list__item__1baJS",person_photo:"PeopleList_person_photo__1Ma6e"}},function(e,t,n){e.exports={container:"PeopleNavigation_container__quvTB",buttons:"PeopleNavigation_buttons__Bx6B5"}},function(e,t,n){e.exports={container:"PersonPhoto_container__3ZvB_",photo:"PersonPhoto_photo__1K1va",favorite:"PersonPhoto_favorite__3Xnb_"}},function(e,t,n){e.exports={wrapper:"PersonPage_wrapper__3xvZw",person__name:"PersonPage_person__name__2jGZE",container:"PersonPage_container__1Q2YH"}},function(e,t,n){e.exports={wrapper__input:"UIInput_wrapper__input__1tqeZ",input:"UIInput_input__3UN0L",clear:"UIInput_clear__19L-2"}},function(e,t,n){e.exports={container:"Favorite_container__3Ty2v",counter:"Favorite_counter__Vz9eB",icon:"Favorite_icon__Hoi0g"}},function(e,t,n){e.exports={container:"Header_container__2mU5J",logo:"Header_logo__3Z87V",list__container:"Header_list__container__3TQDc"}},,,function(e,t,n){e.exports={text:"ErrorMessage_text__2U4JR",video:"ErrorMessage_video__2dwzW"}},function(e,t,n){e.exports={button:"UIButton_button__2D-bO",dark:"UIButton_dark__1Dt0X",light:"UIButton_light__3JhdD"}},function(e,t,n){e.exports={loader:"UILoading_loader__CSepF",shadow:"UILoading_shadow__1Pm5q"}},function(e,t,n){e.exports={link:"PersonLinkBack_link__2kOn7",link__img:"PersonLinkBack_link__img__1gUD1"}},function(e,t,n){e.exports={img:"NotFoundPage_img__1fy3i",text:"NotFoundPage_text__23LDL"}},function(e,t,n){},,function(e,t,n){e.exports={video:"UIVideo_video__2aopG"}},function(e,t,n){e.exports={comment:"FavoritesPage_comment__3AJyE"}},function(e,t,n){e.exports={input__search:"SearchPage_input__search__dNL3w"}},function(e,t,n){e.exports={wrapper:"App_wrapper___ywII"}},,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(17),s=n.n(r),i=n(20),o=n(11),l=n(19),u="ADD_PERSON_TO_FAVORITE",j="REMOVE_PERSON_FROM_FAVORITE",_=function(e){var t=localStorage.getItem(e);return null!==t?JSON.parse(t):{}}("store"),p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(o.a)(Object(o.a)({},e),t.payload);case j:return Object(l.omit)(e,[t.payload]);default:return e}},d=Object(i.a)({favoriteReducer:p}),b=Object(i.b)(d);b.subscribe((function(){var e,t;e="store",t=b.getState().favoriteReducer,localStorage.setItem(e,JSON.stringify(t))}));var m=b,h=n(10),f=n(3),O=n(42),x=n(0),g=["children"],v="light",A="dark",N="neitral",S=c.a.createContext(),k=function(e){var t=e.children,n=Object(O.a)(e,g),c=Object(a.useState)(null),r=Object(f.a)(c,2),s=r[0],i=r[1];return Object(x.jsx)(S.Provider,Object(o.a)(Object(o.a)({value:{theme:s,change:function(e){i(e),function(e){var t=document.querySelector(":root");["header","bgimage"].forEach((function(n){t.style.setProperty("--theme-default-".concat(n),"var(--theme-".concat(e,"-").concat(n,")"))}))}(e)}}},n),{},{children:t}))},P=function(){return Object(a.useContext)(S)},w=n(7),I=n.n(w),C=n(12),y=n(9),F=n.n(y),B=n(38),E=n.n(B),U=function(e){var t=e.src,n=e.playbackRate,c=e.classes,r=Object(a.useRef)(null);return Object(a.useEffect)((function(){r.current.playbackRate=n}),[]),Object(x.jsx)("video",{loop:!0,autoPlay:!0,muted:!0,className:F()(E.a.video,c),ref:r,children:Object(x.jsx)("source",{src:t})})},L=n.p+"static/media/han-solo.db435084.mp4",R=n(31),H=n.n(R),V=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("p",{className:H.a.text,children:["The dark side of the force has won.",Object(x.jsx)("br",{}),"We cannot display data.",Object(x.jsx)("br",{}),"Come back when we fix everything"]}),Object(x.jsx)(U,{src:L,classes:H.a.video,playbackRate:1})]})},z=function(e){return function(t){var n=Object(a.useState)(!1),c=Object(f.a)(n,2),r=c[0],s=c[1];return Object(x.jsx)(x.Fragment,{children:r?Object(x.jsx)(V,{}):Object(x.jsx)(e,Object(o.a)({setErrorApi:s},t))})}},M=n(4),J=n(22),W=n.n(J),D=function(e){var t=e.people;return Object(x.jsx)("ul",{className:W.a.list__container,children:t.map((function(e){var t=e.id,n=e.name,a=e.img;return Object(x.jsx)("li",{className:W.a.list__item,children:Object(x.jsxs)(M.b,{to:"/people/".concat(t),children:[Object(x.jsx)("img",{className:W.a.person_photo,src:a,alt:n}),Object(x.jsx)("p",{children:n})]})},t)}))})},Z=(n(36),n(32)),G=n.n(Z),Y=function(e){var t=e.text,n=e.onClick,a=e.disabled,c=e.theme,r=void 0===c?"dark":c,s=e.classes;return Object(x.jsx)("button",{onClick:n,disabled:a,className:F()(G.a.button,G.a[r],s),children:t})},q=n(23),Q=n.n(q),X=function(e){var t=e.getResource,n=e.prevPage,a=e.nextPage,c=e.counterPage;return Object(x.jsxs)("div",{className:Q.a.container,children:[Object(x.jsx)(M.b,{to:"/people/?page=".concat(c-1),className:Q.a.buttons,children:Object(x.jsx)(Y,{text:"Previous",onClick:function(){return t(n)},disabled:!n})}),Object(x.jsx)(M.b,{to:"/people/?page=".concat(c+1),className:Q.a.buttons,children:Object(x.jsx)(Y,{text:"Next",onClick:function(){return t(a)},disabled:!a})})]})},T=n(14),K=n(5),$=function(e){var t=e.lastIndexOf(K.g),n=e.slice(t+K.g.length,e.length);return Number(n)},ee=function(e){return function(e,t){return e.replace(K.f+K.i+t,"").replace(/\//g,"")}(e,K.h)},te=function(e){return"".concat(K.j,"/").concat(e+K.d)},ne=n(2),ae=(n(54),z((function(e){var t=e.setErrorApi,n=Object(a.useState)(null),c=Object(f.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(null),o=Object(f.a)(i,2),l=o[0],u=o[1],j=Object(a.useState)(null),_=Object(f.a)(j,2),p=_[0],d=_[1],b=Object(a.useState)(1),m=Object(f.a)(b,2),h=m[0],O=m[1],g=new URLSearchParams(Object(ne.e)().search).get("page"),v=function(){var e=Object(C.a)(I.a.mark((function e(n){var a,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)(n);case 2:(a=e.sent)?(c=a.results.map((function(e){var t=e.name,n=e.url,a=ee(n);return{id:a,name:t,img:te(a)}})),s(c),u(a.previous),d(a.next),O($(n)),t(!1)):t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){v(K.a+g)}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(X,{getResource:v,prevPage:l,nextPage:p,counterPage:h}),r&&Object(x.jsx)(D,{people:r})]})}))),ce=n.p+"static/media/light-side.eebc5217.jpg",re=n.p+"static/media/dark-side.e0f8cab7.jpg",se=n.p+"static/media/falcon.c1d0a8d1.jpg",ie=n(13),oe=n.n(ie),le=function(e){var t=e.classes,n=e.theme,a=e.text,c=e.img,r=P();return Object(x.jsxs)("div",{className:F()(oe.a.item,t),onClick:function(){return r.change(n)},children:[Object(x.jsx)("div",{className:oe.a.item__header,children:a}),Object(x.jsx)("img",{className:oe.a.item__img,src:c,alt:a})]})},ue=function(){var e=[{theme:v,text:"Light Side",img:ce,classes:oe.a.item__light},{theme:A,text:"Dark Side",img:re,classes:oe.a.item__dark},{theme:N,text:"I'm Han Solo",img:se,classes:oe.a.item__neitral}];return Object(x.jsx)("div",{className:oe.a.container,children:e.map((function(e,t){var n=e.theme,a=e.text,c=e.img,r=e.classes;return Object(x.jsx)(le,{theme:n,text:a,img:c,classes:r},t)}))})},je=(n(55),function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{className:"header__text",children:"Home Page"}),Object(x.jsx)(ue,{})]})}),_e=n(16),pe=n.n(_e),de=function(e){var t=e.personInfo;return Object(x.jsx)("div",{className:pe.a.wrapper,children:Object(x.jsx)("ul",{className:pe.a.list__container,children:t.map((function(e){var t=e.title,n=e.data;return n&&Object(x.jsxs)("li",{className:pe.a.list__item,children:[Object(x.jsx)("span",{className:pe.a.item__title,children:t}),": ",n]},t)}))})})},be=n(18),me=n.p+"static/media/favorite.da1cf66a.svg",he=n.p+"static/media/favoriteFill.f6e6ead8.svg",fe=n(24),Oe=n.n(fe),xe=function(e){var t=e.personId,n=e.personPhoto,a=e.personName,c=e.personFavorite,r=e.setPersonFavorite,s=Object(h.b)();return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:Oe.a.container,children:[Object(x.jsx)("img",{className:Oe.a.photo,src:n,alt:a}),Object(x.jsx)("img",{className:Oe.a.favorite,src:c?he:me,alt:"add to favorite",onClick:function(){var e;c?(s(function(e){return{type:j,payload:e}}(t)),r(!1)):(s((e=Object(be.a)({},t,{name:a,img:n}),{type:u,payload:e})),r(!0))}})]})})},ge=n.p+"static/media/loaderBlue.411f4840.svg",ve=n.p+"static/media/loaderBlack.aa1401fa.svg",Ae=n.p+"static/media/loaderWhite.9faab9db.svg",Ne=n(33),Se=n.n(Ne),ke=function(e){var t=e.theme,n=void 0===t?"white":t,c=e.isShadow,r=void 0===c||c,s=e.classes,i=Object(a.useState)(null),o=Object(f.a)(i,2),l=o[0],u=o[1];return Object(a.useEffect)((function(){switch(n){case"black":u(ve);break;case"white":default:u(Ae);break;case"blue":u(ge)}}),[]),Object(x.jsx)("img",{className:F()(Se.a.loader,r&&Se.a.shadow,s),src:l,alt:"Loader"})},Pe=n(34),we=n.n(Pe),Ie=function(){var e=Object(ne.f)();return Object(x.jsxs)("a",{href:"#",onClick:function(t){e(-1)},className:we.a.link,children:[Object(x.jsx)("img",{className:we.a.link__img,src:"data:image/png;base64,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",alt:"back"}),Object(x.jsx)("span",{children:"Go back"})]})},Ce=n(25),ye=n.n(Ce),Fe=c.a.lazy((function(){return n.e(3).then(n.bind(null,60))})),Be=z((function(e){var t=e.setErrorApi,n=Object(ne.g)().id,c=Object(a.useState)(null),r=Object(f.a)(c,2),s=r[0],i=r[1],o=Object(a.useState)(null),l=Object(f.a)(o,2),u=l[0],j=l[1],_=Object(a.useState)(null),p=Object(f.a)(_,2),d=p[0],b=p[1],m=Object(a.useState)(null),O=Object(f.a)(m,2),g=O[0],v=O[1],A=Object(a.useState)(null),N=Object(f.a)(A,2),S=N[0],k=N[1],P=Object(a.useState)(!1),w=Object(f.a)(P,2),y=w[0],F=w[1],B=Object(h.c)((function(e){return e.favoriteReducer}));return Object(a.useEffect)((function(){Object(C.a)(I.a.mark((function e(){var a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)("".concat(K.b,"/").concat(n,"/"));case 2:a=e.sent,B[n]?F(!0):F(!1),k(n),a?(i([{title:"Height",data:a.height},{title:"Mass",data:a.mass},{title:"Hair Color",data:a.hair_color},{title:"Skin Color",data:a.skin_color},{title:"Eye Color",data:a.eye_color},{title:"Birth Year",data:a.birth_year},{title:"Gender",data:a.gender}]),j(a.name),b(te(n)),a.films.length&&v(a.films),t(!1)):t(!0);case 6:case"end":return e.stop()}}),e)})))()}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(Ie,{}),Object(x.jsxs)("div",{className:ye.a.wrapper,children:[Object(x.jsx)("span",{className:ye.a.person__name,children:u}),Object(x.jsxs)("div",{className:ye.a.container,children:[Object(x.jsx)(xe,{personId:S,personPhoto:d,personName:u,personFavorite:y,setPersonFavorite:F}),s&&Object(x.jsx)(de,{personInfo:s}),g&&Object(x.jsx)(a.Suspense,{fallback:Object(x.jsx)(ke,{}),children:Object(x.jsx)(Fe,{personFilms:g})})]})]})]})})),Ee=n(35),Ue=n.n(Ee),Le=n.p+"static/media/404.1062f5e4.png",Re=function(){var e=Object(ne.e)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("img",{className:Ue.a.img,src:Le,alt:"Not Found"}),Object(x.jsxs)("p",{className:Ue.a.text,children:["No match for ",Object(x.jsx)("u",{children:e.pathname})]})]})},He=n(39),Ve=n.n(He),ze=function(){var e=Object(a.useState)([]),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(h.c)((function(e){return e.favoriteReducer}));return Object(a.useEffect)((function(){var e=Object.entries(r);if(e.length){var t=e.map((function(e){return Object(o.a)({id:e[0]},e[1])}));c(t)}}),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{className:"header__text",children:"FavoritesPage"}),n.length?Object(x.jsx)(D,{people:n}):Object(x.jsx)("h2",{className:Ve.a.comment,children:"No data"})]})},Me=n(15),Je=n.n(Me),We=function(e){var t=e.people;return Object(x.jsx)(x.Fragment,{children:t.length?Object(x.jsx)("ul",{className:Je.a.list__container,children:t.map((function(e){var t=e.id,n=e.name,a=e.img;return Object(x.jsx)("li",{className:Je.a.list__item,children:Object(x.jsxs)(M.b,{to:"/people/".concat(t),children:[Object(x.jsx)("img",{className:Je.a.person__photo,src:a,alt:n}),Object(x.jsx)("p",{className:Je.a.person__name,children:n})]})},t)}))}):Object(x.jsx)("h2",{className:Je.a.person__comment,children:"No results"})})},De=n.p+"static/media/cancel.1791036e.svg",Ze=n(26),Ge=n.n(Ze),Ye=function(e){var t=e.value,n=e.handelInputChange,a=e.placeholder,c=e.classes;return Object(x.jsxs)("div",{className:F()(Ge.a.wrapper__input,c),children:[Object(x.jsx)("input",{type:"search",value:t,onChange:function(e){return n(e.target.value)},placeholder:a,className:Ge.a.input}),Object(x.jsx)("img",{onClick:function(){return t&&n("")},src:De,className:F()(Ge.a.clear),alt:"Clear"})]})},qe=n(40),Qe=n.n(qe),Xe=z((function(e){var t=e.setErrorApi,n=Object(a.useState)(""),c=Object(f.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)([]),o=Object(f.a)(i,2),u=o[0],j=o[1],_=function(){var e=Object(C.a)(I.a.mark((function e(n){var a,c;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(T.a)(K.c+n);case 2:(a=e.sent)?(c=a.results.map((function(e){var t=e.name,n=e.url,a=ee(n);return{id:a,name:t,img:te(a)}})),j(c),t(!1)):t(!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){_("")}),[]);var p=Object(a.useCallback)(Object(l.debounce)((function(e){return _(e)}),300),[]);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{className:"header__text",children:"Search"}),Object(x.jsx)(Ye,{value:r,handelInputChange:function(e){s(e),p(e)},placeholder:"Input character's name",classes:Qe.a.input__search}),Object(x.jsx)(We,{people:u})]})})),Te=[{path:"/",element:je},{path:"/people",element:ae},{path:"/people/:id",element:Be},{path:"/favorites",element:ze},{path:"/search",element:Xe},{path:"/fail",element:V},{path:"/not-found",element:Re},{path:"*",exact:!1,element:Re}],Ke=n.p+"static/media/bookmark.47c78774.svg",$e=n(27),et=n.n($e),tt=function(){var e=Object(a.useState)(0),t=Object(f.a)(e,2),n=t[0],c=t[1],r=Object(h.c)((function(e){return e.favoriteReducer}));return Object(a.useEffect)((function(){var e=Object.keys(r).length;e.toString().length>2?c("..."):c(e),c(e)})),Object(x.jsx)("div",{className:et.a.container,children:Object(x.jsxs)(M.b,{to:"/favorites",children:[Object(x.jsx)("span",{className:et.a.counter,children:n}),Object(x.jsx)("img",{className:et.a.icon,src:Ke,alt:"favorites"})]})})},nt=n.p+"static/media/droid.e59cd9ff.svg",at=n.p+"static/media/lightsaber.eb7d4cd6.svg",ct=n.p+"static/media/space-station.7a027c6e.svg",rt=n(28),st=n.n(rt),it=function(){var e=Object(a.useState)(ct),t=Object(f.a)(e,2),n=t[0],c=t[1],r=P();return Object(a.useEffect)((function(){switch(r.theme){case v:c(at);break;case A:c(ct);break;case N:c(nt);break;default:c(ct)}}),[r]),Object(x.jsxs)("div",{className:st.a.container,children:[Object(x.jsx)("img",{className:st.a.logo,src:n,alt:"logo"}),Object(x.jsxs)("ul",{className:st.a.list__container,children:[Object(x.jsx)("li",{children:Object(x.jsx)(M.c,{to:"/",children:"Home"})}),Object(x.jsx)("li",{children:Object(x.jsx)(M.c,{to:"/people/?page=1",children:"People"})}),Object(x.jsx)("li",{children:Object(x.jsx)(M.c,{to:"/search",children:"Search"})}),Object(x.jsx)("li",{children:Object(x.jsx)(M.c,{to:"/not-found",children:"Not Found"})}),Object(x.jsx)("li",{children:Object(x.jsx)(M.c,{to:"/fail",children:"Fail"})})]}),Object(x.jsx)(tt,{})]})},ot=n(41),lt=n.n(ot),ut=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(M.a,{children:Object(x.jsxs)("div",{className:lt.a.wrapper,children:[Object(x.jsx)(it,{}),Object(x.jsx)(ne.c,{children:Te.map((function(e,t){return Object(x.jsx)(ne.a,{path:e.path,element:Object(x.jsx)(e.element,{})},t)}))})]})})})};n(56);s.a.render(Object(x.jsx)(h.a,{store:m,children:Object(x.jsx)(k,{children:Object(x.jsx)(ut,{})})}),document.getElementById("root"))}],[[57,1,2]]]);
//# sourceMappingURL=main.fc00a850.chunk.js.map