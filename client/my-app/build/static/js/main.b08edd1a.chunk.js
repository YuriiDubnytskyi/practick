(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{125:function(e,t){},128:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),o=n.n(c),u=(n(73),n(3)),s=n(10),l=function(e){return a.createElement("div",null,"Hello from singin login",a.createElement("button",{onClick:e.auth.login},"Log In"),a.createElement("button",{onClick:e.auth.login},"Sing In"))},i=function(e){var t=Object(u.g)();return Object(a.useEffect)((function(){if(!/access_token|id_token|error/.test(window.location.hash))throw new Error("Invalid callback URL.");console.log(t),e.auth.handleAuthentication(t)}),[]),r.a.createElement("div",null,"Loading...")},m=function(e){var t=e.auth;return r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,render:function(e){return t.isAuthenticated()?r.a.createElement(u.a,{to:"/about"}):r.a.createElement(l,{auth:t})}}),r.a.createElement(u.b,{path:"/callback",exact:!0},r.a.createElement(i,Object.assign({auth:e.auth},e))))},f=n(7),h=n(2),d=function(e){return a.createElement("div",null,a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},a.createElement("ul",{className:"navbar-nav"},a.createElement("li",{className:"nav-item"},a.createElement(s.b,{className:"nav-link",to:"/main"},"Main")),a.createElement("li",{className:"nav-item"},a.createElement(s.b,{className:"nav-link",to:"/about"},"About")),a.createElement("button",{className:"nav-item",onClick:function(){return e.auth.logout()}},"LogOut"))))},E=n(14),p=n.n(E),_=function(e){return p.a.get("/api/users/search/"+e,e).then((function(e){return console.log("resultFull"+e),e}))},b=n(20),O=n.n(b),g=n(38),A=function(){var e=Object(g.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(!t.email_vefified),!t.email_verified){e.next=5;break}return e.abrupt("return",!0);case 5:return e.abrupt("return",!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(g.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:return n=e.sent,e.next=5,n.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=n(11),T=n(4),j=function(e){return{type:"SET_USER_DATA",data:e}},C=function(e){return{type:"UPDATE_USER_DATA",data:e}},k=function(){return{type:"DELETE_USER"}},I=function(e){return{type:"GET_ALL",users:e}},P=function(e){return{type:"ADD_MESS",mess:e}},R=function(e){return{type:"ADD_ROOM",room:e}},y=function(e){return{type:"ADD_INIT_MESS",mess:e}},D=function(){return{type:"REMOVE_MESS"}},U=Object(S.b)((function(e){return{userInf:e.user}}),(function(e){return Object(f.a)({dispatch:e},Object(T.b)({setUserData:j,updateUserData:C,deleteUser:k},e))}))((function(e){var t=Object(a.useState)(""),n=Object(h.a)(t,2),c=(n[0],n[1]),o=Object(a.useState)(""),s=Object(h.a)(o,2),l=s[0],i=s[1],m=Object(a.useState)(""),f=Object(h.a)(m,2),E=f[0],_=f[1],b=Object(a.useState)(""),O=Object(h.a)(b,2),g=O[0],S=O[1],T=Object(a.useState)(""),j=Object(h.a)(T,2),C=j[0],k=j[1],I=Object(a.useState)(""),P=Object(h.a)(I,2),R=P[0],y=P[1],D=Object(a.useState)(!1),U=Object(h.a)(D,2),L=U[0],N=U[1],w=Object(u.g)();Object(a.useEffect)((function(){e.userInf.isAuth?H(e.userInf,!0):e.auth.getProfile((function(e){c(e);var t=e.email,n=e.nickname,a=e.name,r=e.family_name;A(e).then((function(e){return e?v(t).then((function(e){return 404!==e.status?H(e):function(e){return p.a.post("/api/users/create",e).then((function(e){return e}))}({email:t,nickname:n,name:a,family_name:r})})).then((function(e){void 0===e?console.log("error"):H(e.data)})):w.push("/verified")}))}))}),[]);var H=function(t){var n,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a?(S(t.id),console.log("hereTrue"),n=t.id):(S(t._id),n=t._id),i(t.name),_(t.email),k(t.nickname),y(t.family_name),console.log(t);var r={name:t.name,email:t.email,nickname:t.nickname,family_name:t.family_name,id:n};e.setUserData(r)};return r.a.createElement("div",null,r.a.createElement(d,{auth:e.auth}),"Hello from about -",l,"-",E,"-",C,"-",R,r.a.createElement("p",null,"Your Account"),r.a.createElement("p",null,"Name -- ",l),L?r.a.createElement("input",{value:l,name:"name",onChange:function(e){return i(e.target.value)}}):r.a.createElement(r.a.Fragment,null),r.a.createElement("p",null,"Surname -- ",R),L?r.a.createElement("input",{value:R,name:"family_name",onChange:function(e){return y(e.target.value)}}):r.a.createElement(r.a.Fragment,null),r.a.createElement("p",null,"Nickname -- ",C," users can find you"),L?r.a.createElement("input",{value:C,name:"nickname",onChange:function(e){return k(e.target.value)}}):r.a.createElement(r.a.Fragment,null),L?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){var t;(t={id:g,name:l,nickname:C,family_name:R},p.a.put("/api/users/updateUser",t).then((function(e){return e.data}))).then((function(t){return t.name?e.updateUserData({name:t.name,family_name:t.family_name,nickname:t.nickname}):console.log("error")})).then((function(){return N(!1)}))}},"Save"),r.a.createElement("button",{onClick:function(){i(e.userInf.name),k(e.userInf.nickname),y(e.userInf.family_name),N(!1)}},"Cansel")):r.a.createElement("button",{onClick:function(){return N(!0)}},"Update"),r.a.createElement("p",null,"Danger Zone"),r.a.createElement("button",{onClick:function(){(function(e){return p.a.delete("/api/users/deleteUser/"+e,e).then((function(e){return e.status}))})(g).then((function(t){200===t?e.deleteUser():console.log("error")})).then((function(){e.auth.logout()}))}},"DELETE ACOUNT"))})),L=Object(S.b)((function(e){return{userInf:e.user,userAll:e.users.users}}),(function(e){return Object(f.a)({dispatch:e},Object(T.b)({getAllUsers:I},e))}))((function(e){var t=Object(a.useState)([]),n=Object(h.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)([]),s=Object(h.a)(u,2),l=s[0],i=s[1];Object(a.useEffect)((function(){p.a.get("/api/users/getAll").then((function(e){return e.data})).then((function(t){e.getAllUsers(t),o(t.filter((function(t){return t.email!==e.userInf.email})))}))}),[]);return r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Search user",onChange:function(e){var t=c.filter((function(t){return-1!==t.nickname.toLowerCase().search(e.target.value.toLowerCase())}));""===e.target.value?i([]):i(t)}}),l.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,t.nickname),r.a.createElement("button",{onClick:function(){return e.startChat(t.email)}},"Chat+"))})))})),N=n(13),w=n.n(N),H=Object(S.b)((function(e){return{userInf:e.user,userAll:e.users.users,mess:e.messages.messages}}),(function(e){return Object(f.a)({dispatch:e},Object(T.b)({addInitMess:y,addRoom:R},e))}))((function(e){var t=Object(a.useState)([]),n=Object(h.a)(t,2),c=(n[0],n[1],Object(a.useState)([])),o=Object(h.a)(c,2),s=o[0],l=o[1],i=Object(a.useState)(""),m=Object(h.a)(i,2),f=m[0],d=m[1],E=Object(u.g)();Object(a.useEffect)((function(){d(e.data.room),l(e.data.messages)}),[]);var p=Object(a.useState)("https://practick.herokuapp.com:".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_URL:"http://localhost:3001",REACT_APP_AUTH0_AUDIENCE:"http://localhost:3001",REACT_APP_AUTH0_CALLBACK_URL:"http://localhost:3000/callback",REACT_APP_AUTH0_CLIENT_ID:"Vlvnr3poW9Ors21ydAosVRRpVncQlvqS",REACT_APP_AUTH0_DOMAIN:"yurii-dubnytskyi.eu.auth0.com"}).PORT)),_=Object(h.a)(p,2),b=_[0],O=(_[1],w()(b));Object(a.useEffect)((function(){O.on("chat-message",(function(e){console.log("heredata11"+e)}))}));return r.a.createElement("div",null,r.a.createElement("p",null,f),r.a.createElement("button",{onClick:function(){e.addInitMess(s),console.log("hereMess"+e.data),e.addRoom(f),E.push("/chat")}},"Go Chat"))})),M=function(e){var t=Object(a.useState)([]),n=Object(h.a)(t,2),c=n[0],o=n[1],u=Object(a.useState)("https://practick.herokuapp.com:".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_URL:"http://localhost:3001",REACT_APP_AUTH0_AUDIENCE:"http://localhost:3001",REACT_APP_AUTH0_CALLBACK_URL:"http://localhost:3000/callback",REACT_APP_AUTH0_CLIENT_ID:"Vlvnr3poW9Ors21ydAosVRRpVncQlvqS",REACT_APP_AUTH0_DOMAIN:"yurii-dubnytskyi.eu.auth0.com"}).PORT)),s=Object(h.a)(u,2),l=s[0];s[1],w()(l);return Object(a.useEffect)((function(){var t;(t=e.email,p.a.get("/api/rooms/getRoomsUsers/"+t,t).then((function(e){return e.data}))).then((function(e){o(e)}))}),[]),r.a.createElement("div",null,c.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{data:e}))})))},V=Object(S.b)((function(e){return{userInf:e.user,userAll:e.users.users}}),(function(e){return Object(f.a)({dispatch:e},Object(T.b)({getAllUsers:I,addRoom:R},e))}))((function(e){var t=Object(a.useState)(!1),n=Object(h.a)(t,2),c=(n[0],n[1],Object(a.useState)("")),o=Object(h.a)(c,2),s=(o[0],o[1],Object(a.useState)("https://practick.herokuapp.com:".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_URL:"http://localhost:3001",REACT_APP_AUTH0_AUDIENCE:"http://localhost:3001",REACT_APP_AUTH0_CALLBACK_URL:"http://localhost:3000/callback",REACT_APP_AUTH0_CLIENT_ID:"Vlvnr3poW9Ors21ydAosVRRpVncQlvqS",REACT_APP_AUTH0_DOMAIN:"yurii-dubnytskyi.eu.auth0.com"}).PORT))),l=Object(h.a)(s,2),i=l[0],m=(l[1],w()(i)),f=Object(u.g)();Object(a.useEffect)((function(){""===e.userInf.name&&f.push("/about"),null===localStorage.getItem(e.userInf.email)&&localStorage.setItem(e.userInf.email,"false")}),[]);return Object(a.useEffect)((function(){m.on("chat-message",(function(e){console.log("heredata121212121212"+e)}))})),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(d,{auth:e.auth}),r.a.createElement(L,{startChat:function(t){var n,a,r={id1:t,id2:e.userInf.email};console.log("chat"+r),(n=r.id1,a=r.id2,p.a.get("/api/rooms/getRoom/"+n+"/"+a).then((function(e){return e.data}))).then((function(e){R(e.room),f.push("/chat")}))}}),r.a.createElement(M,{email:e.userInf.email})))})),W=function(e){return a.createElement("div",null,"Please verifide your account and log",a.createElement("button",{onClick:function(){return e.auth.login()}},"Login"))},x=Object(S.b)((function(e){return{userInf:e.user,userAll:e.users.users,mess:e.messages.messages,roomChat:e.room.room}}),(function(e){return Object(f.a)({dispatch:e},Object(T.b)({addMess:P,removeMess:D},e))}))((function(e){var t=Object(a.useState)("https://practick.herokuapp.com:".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_API_URL:"http://localhost:3001",REACT_APP_AUTH0_AUDIENCE:"http://localhost:3001",REACT_APP_AUTH0_CALLBACK_URL:"http://localhost:3000/callback",REACT_APP_AUTH0_CLIENT_ID:"Vlvnr3poW9Ors21ydAosVRRpVncQlvqS",REACT_APP_AUTH0_DOMAIN:"yurii-dubnytskyi.eu.auth0.com"}).PORT)),n=Object(h.a)(t,2),c=n[0],o=(n[1],Object(a.useState)("")),s=Object(h.a)(o,2),l=s[0],i=s[1],m=Object(a.useState)([]),f=Object(h.a)(m,2),d=f[0],E=(f[1],Object(u.g)()),_=w()(c);Object(a.useEffect)((function(){"false"===localStorage.getItem(e.userInf.email)&&(_.emit("new-user",e.roomChat),localStorage.setItem(e.userInf.email,"true"))}),[]),Object(a.useEffect)((function(){_.on("chat-message",(function(t){console.log("heredata"+d),t.email!==e.userInf.email&&e.addMess({mess:t.message,name:t.name})}))}));return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){e.removeMess(),E.push("/main")}}),e.roomChat,e.mess.map((function(e){return r.a.createElement("p",null,e.name," -- ",e.mess)})),r.a.createElement("input",{value:l,onChange:function(e){return i(e.target.value)}}),r.a.createElement("button",{onClick:function(){console.log("room"+e.roomChat);var t=w()(c);e.addMess({mess:l,name:e.userInf.name}),t.emit("send-chat-message",e.roomChat,l,e.userInf.email,e.userInf.name);var n,a=e.mess;a.push({mess:l,name:e.userInf.name}),console.log("66666666666666666666666"),n={room:e.roomChat,mess:a},p.a.put("/api/rooms/updateMess",n).then((function(e){return e.data})),i("")}},"Send"))})),K=function(e){var t=e.auth;return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/about",exact:!0,render:function(e){return t.isAuthenticated()?r.a.createElement(U,{auth:t}):r.a.createElement(u.a,{to:"/"})}}),r.a.createElement(u.b,{path:"/main",exact:!0,render:function(e){return t.isAuthenticated()?r.a.createElement(V,{auth:t}):r.a.createElement(u.a,{to:"/"})}}),r.a.createElement(u.b,{path:"/verified",exact:!0,render:function(e){return t.isAuthenticated()?r.a.createElement(W,{auth:t}):r.a.createElement(u.a,{to:"/"})}}),r.a.createElement(u.b,{path:"/chat",exact:!0,render:function(e){return t.isAuthenticated()?r.a.createElement(x,{auth:t}):r.a.createElement(u.a,{to:"/"})}})))},B=n(64),q=n(65),F=n(66),J=function(){function e(t){var n=this;Object(B.a)(this,e),this.login=function(){n.auth0.authorize()},this.handleAuthentication=function(e){n.auth0.parseHash((function(t,a){a&&a.accessToken&&a.idToken?(n.setSession(a),console.log(n),e.push("/about")):t&&(console.log(n),e.push("/"),alert("Error: ".concat(t.error,". Check the console for further details.")),console.log(t))}))},this.setSession=function(e){console.log(e);var t=JSON.stringify(1e3*e.expiresIn+(new Date).getTime()),a=e.scope||n.requestedScopes||"";localStorage.setItem("access_token",e.accessToken),localStorage.setItem("id_token",e.idToken),localStorage.setItem("expires_at",t),localStorage.setItem("scopes",JSON.stringify(a))},this.logout=function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),localStorage.removeItem("scopes"),n.userProfile=null,n.auth0.logout({clientID:"Vlvnr3poW9Ors21ydAosVRRpVncQlvqS",returnTo:"https://practick.herokuapp.com"})},this.getAccessToken=function(){var e=localStorage.getItem("access_token");if(!e)throw new Error("No access token found.");return e},this.getProfile=function(e){if(n.userProfile)return e(n.userProfile);n.auth0.client.userInfo(n.getAccessToken(),(function(t,a){a&&(n.userProfile=a),e(a,t)}))},this.history=t,this.userProfile=null,this.requestedScopes="openid profile email read:courses",this.auth0=new F.a.WebAuth({domain:"yurii-dubnytskyi.eu.auth0.com",clientID:"Vlvnr3poW9Ors21ydAosVRRpVncQlvqS",redirectUri:"https://practick.herokuapp.com/callback",responseType:"token id_token",scope:this.requestedScopes}),console.log(this)}return Object(q.a)(e,[{key:"isAuthenticated",value:function(){var e=JSON.parse(localStorage.getItem("expires_at"));return(new Date).getTime()<e}},{key:"userHasScopes",value:function(e){var t=(JSON.parse(localStorage.getItem("scopes"))||"").split(" ");return e.every((function(e){return t.includes(e)}))}}]),e}(),Q=function(e){Object(u.g)();console.log(e.history);var t=new J(window.history);return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(m,Object.assign({auth:t},e)),r.a.createElement(K,{auth:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=n(67),X=function(e,t){return Object(f.a)(Object(f.a)({},e),t)},z={id:0,name:"",email:"",nickname:"",family_name:"",isAuth:!1},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return X(e,{id:t.data.id,name:t.data.name,email:t.data.email,nickname:t.data.nickname,family_name:t.data.family_name,isAuth:!0});case"UPDATE_USER_DATA":return X(e,{name:t.data.name,nickname:t.data.nickname,family_name:t.data.family_name});case"DELETE_USER":return X(e,{id:0,name:"",email:"",nickname:"",family_name:"",isAuth:!1});default:return e}},Z=n(28),$={users:[]},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL":return X(e,{users:Object(Z.a)(t.users)});default:return e}},te={messages:[]},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESS":return X(e,{messages:[].concat(Object(Z.a)(e.messages),[t.mess])});case"ADD_INIT_MESS":return X(e,{messages:t.mess});case"REMOVE_MESS":return X(e,{messages:[]});default:return e}},ae={room:""},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ROOM":return X(e,{room:t.room});default:return e}},ce=Object(T.c)({user:Y,users:ee,messages:ne,room:re}),oe=window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.d,ue=Object(T.e)(ce,oe(Object(T.a)((function(e){return function(t){return function(n){console.log("[Middleware] Dispatching",n);var a=t(n);return console.log("[Middleware] next state",e.getState()),a}}}),G.a)));o.a.render(r.a.createElement(S.a,{store:ue},r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},68:function(e,t,n){e.exports=n(128)},73:function(e,t,n){}},[[68,1,2]]]);
//# sourceMappingURL=main.b08edd1a.chunk.js.map