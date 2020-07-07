(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},133:function(e,t){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},140:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),s=a.n(r),i=(a(74),a(12)),l=a(3),o=(a(75),function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"main-content"},c.a.createElement("div",{className:"main-content_container"},c.a.createElement("h1",{className:"title"},"Hello, Wanderer!"),c.a.createElement("p",{className:"sub-title"},"Sign In or Sign Up and start journey with us."),c.a.createElement("button",{className:"btn-login",onClick:e.auth.login},"Sign In"),c.a.createElement("br",null),c.a.createElement("button",{className:"btn-singin",onClick:e.auth.login},"Sign Up"))),c.a.createElement("ul",{className:"circles"},c.a.createElement("li",{className:"square"}),c.a.createElement("li",{className:"square"}),c.a.createElement("li",{className:"square"}),c.a.createElement("li",{className:"square"}),c.a.createElement("li",{className:"square"}),c.a.createElement("li",{className:"square"}),c.a.createElement("li",{className:"square"}),c.a.createElement("li",{className:"square"}),c.a.createElement("li",{className:"square"}),c.a.createElement("li",{className:"square"}),c.a.createElement("li",{className:"circle"}),c.a.createElement("li",{className:"circle"}),c.a.createElement("li",{className:"circle"}),c.a.createElement("li",{className:"circle"}),c.a.createElement("li",{className:"circle"}),c.a.createElement("li",{className:"circle"}),c.a.createElement("li",{className:"circle"}),c.a.createElement("li",{className:"circle"}),c.a.createElement("li",{className:"circle"}),c.a.createElement("li",{className:"circle"}))))}),u=a(2),m=(a(76),function(e){return n.createElement("div",{className:"wrapper-loading"},n.createElement("div",{className:"fancy-spinner"},n.createElement("div",{className:"ring"}),n.createElement("div",{className:"ring"}),n.createElement("div",{className:"dot"})))}),f=function(e){var t=Object(l.g)();return Object(n.useEffect)((function(){if(!/access_token|id_token|error/.test(window.location.hash))throw new Error("Invalid callback URL.");console.log(t),e.auth.handleAuthentication(t);for(var a=0,n=Object.entries(localStorage);a<n.length;a++){var c=Object(u.a)(n[a],1)[0];"access_token"!==c&&"id_token"!==c&&"expires_at"!==c&&"scopes"!==c&&localStorage.removeItem(c)}}),[]),c.a.createElement(m,null)},d=function(e){var t=e.auth;return c.a.createElement(l.d,null,c.a.createElement(l.b,{path:"/",exact:!0,render:function(e){return t.isAuthenticated()?c.a.createElement(l.a,{to:"/about"}):c.a.createElement(o,{auth:t})}}),c.a.createElement(l.b,{path:"/callback",exact:!0},c.a.createElement(f,Object.assign({auth:e.auth},e))))},h=a(5),E=(a(81),function(e){return n.createElement("header",{className:"container-h",id:"home"},n.createElement("section",{className:"container__header"},n.createElement("div",{className:"logo"},n.createElement("p",{className:"logo__text"},"WebChat")),n.createElement("nav",{className:"navigation"},n.createElement("ul",{className:"navigation__list"},n.createElement("li",{className:"navigation__list-item"},n.createElement(i.b,{to:"/main",className:"navigation__list-link"},"Main")),n.createElement("li",{className:"navigation__list-item"},n.createElement(i.b,{to:"/about",className:"navigation__list-link"},"About")),n.createElement("li",{className:"navigation__list-item"},n.createElement("a",{onClick:function(){return e.auth.logout()},className:"navigation__list-link"},"LogOut"))))))}),g=(a(82),function(e){return n.createElement("div",{className:"wrapper_about"},n.createElement("div",{className:"about-container"},n.createElement("div",null,n.createElement("p",{className:"title"},"Your Account"),n.createElement("p",{className:"user-value"},"Name -- ",e.name),e.update?n.createElement("input",{className:"user-value_input",value:e.name,name:"name",onChange:function(t){return e.setName(t.target.value)}}):n.createElement(n.Fragment,null),n.createElement("p",{className:"user-value"},"Surname -- ",e.family_name),e.update?n.createElement("input",{className:"user-value_input",value:e.family_name,name:"family_name",onChange:function(t){return e.setFamilyName(t.target.value)}}):n.createElement(n.Fragment,null),n.createElement("p",{className:"user-value"},"Nickname -- ",e.nickname," users can find you"),e.update?n.createElement("input",{className:"user-value_input",value:e.nickname,name:"nickname",onChange:function(t){return e.setNickname(t.target.value)}}):n.createElement(n.Fragment,null),e.update?n.createElement(n.Fragment,null,n.createElement("br",null),n.createElement("button",{className:"btn btn--save",onClick:function(){return e.saveUpdates()}},"Save"),n.createElement("button",{className:"btn btn--cansel",onClick:function(){return e.canselUpdates()}},"Cancel")):n.createElement("button",{className:"btn btn--update",onClick:function(){return e.setUpdate(!0)}},"Update")),n.createElement("div",{className:"delete-container"},n.createElement("p",{className:"sub-title"},"Danger Zone"),n.createElement("button",{className:"btn btn--delete",onClick:function(){return e.deleteAcount()}},"DELETE ACOUNT"))))}),p=a(11),b=a.n(p),v=function(e){return b.a.get("/api/users/search/"+e).then((function(e){return console.log("resultFull"+e),e}))},N=function(e){var t=e.email,a=e.room;return b.a.post("/api/notifications/addNotification/"+t+"/"+a).then((function(e){return e}))},O=a(21),_=a.n(O),j=a(38),I=function(){var e=Object(j.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(!t.email_vefified),!t.email_verified){e.next=5;break}return e.abrupt("return",!0);case 5:return e.abrupt("return",!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(j.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:return a=e.sent,e.next=5,a.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=a(6),y=a(4),w=function(e){return{type:"SET_USER_DATA",data:e}},A=function(e){return{type:"UPDATE_USER_DATA",data:e}},D=function(){return{type:"DELETE_USER"}},C=function(e){return{type:"GET_ALL",users:e}},T=function(e){return{type:"ADD_MESS",mess:e}},M=function(e){return{type:"ADD_ROOM",room:e}},U=function(e){return{type:"ADD_INIT_MESS",mess:e}},x=function(){return{type:"REMOVE_MESS"}},q=function(e){return{type:"INIT_NOTIFICATION",initData:e}},R=function(e){return{type:"ADD_NOTIFICATION",addData:e}},F=Object(k.b)((function(e){return{userInf:e.user}}),(function(e){return Object(h.a)({dispatch:e},Object(y.b)({setUserData:w,updateUserData:A,deleteUser:D},e))}))((function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),m=o[0],f=o[1],d=Object(n.useState)(""),h=Object(u.a)(d,2),p=h[0],v=h[1],N=Object(n.useState)(""),O=Object(u.a)(N,2),_=O[0],j=O[1],k=Object(n.useState)(!1),y=Object(u.a)(k,2),w=y[0],A=y[1],D=Object(l.g)();Object(n.useEffect)((function(){e.userInf.isAuth?C(e.userInf,!0):e.auth.getProfile((function(e){var t=e.email,a=e.nickname,n=e.name,c=e.family_name;I(e).then((function(e){return e?S(t).then((function(e){return 404!==e.status?C(e):(r={email:t,nickname:a,name:n,family_name:c},b.a.post("/api/users/create",r).then((function(e){return e})));var r})).then((function(e){void 0===e?console.log("error"):C(e.data)})):D.push("/verified")}))}))}),[]);var C=function(t){var a,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n?(f(t.id),a=t.id):(f(t._id),a=t._id),s(t.name),v(t.nickname),j(t.family_name);var c={name:t.name,email:t.email,nickname:t.nickname,family_name:t.family_name,id:a};e.setUserData(c)};return c.a.createElement("div",null,c.a.createElement(E,{auth:e.auth}),c.a.createElement(g,{update:w,family_name:_,name:r,nickname:p,setName:s,setFamilyName:j,setNickname:v,saveUpdates:function(){var t;(t={id:m,name:r,nickname:p,family_name:_},b.a.put("/api/users/updateUser",t).then((function(e){return e.data}))).then((function(t){return t.name?e.updateUserData({name:t.name,family_name:t.family_name,nickname:t.nickname}):console.log("error")})).then((function(){return A(!1)}))},setUpdate:A,canselUpdates:function(){s(e.userInf.name),v(e.userInf.nickname),j(e.userInf.family_name),A(!1)},deleteAcount:function(){(function(e){return b.a.delete("/api/users/deleteUser/"+e).then((function(e){return e.status}))})(m).then((function(t){200===t?e.deleteUser():console.log("error")})).then((function(){e.auth.logout()}))}}))})),L=(a(101),function(e){return c.a.createElement("div",{className:"user-chat"},c.a.createElement("p",{className:"user-nickname"},e.nickname),c.a.createElement("button",{className:"btn--speak",onClick:function(){return e.startChat(e.email)}},"Chat+"))}),P=(a(102),Object(k.b)((function(e){return{userInf:e.user}}),(function(e){return Object(h.a)({dispatch:e},Object(y.b)({getAllUsers:C},e))}))((function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)([]),l=Object(u.a)(i,2),o=l[0],m=l[1];Object(n.useEffect)((function(){b.a.get("/api/users/getAll").then((function(e){return e.data})).then((function(t){e.getAllUsers(t),s(t.filter((function(t){return t.email!==e.userInf.email})))}))}),[]);return c.a.createElement("div",{className:"users-container"},c.a.createElement("div",{className:"search-users"},c.a.createElement("input",{className:"",placeholder:"Search user",onChange:function(e){var t=r.filter((function(t){return-1!==t.nickname.toLowerCase().search(e.target.value.toLowerCase())}));""===e.target.value?m([]):m(t)}})),c.a.createElement("div",{className:"line"}),o.map((function(t){return c.a.createElement(L,{nickname:t.nickname,startChat:e.startChat,email:t.email})})))}))),W=(a(103),Object(k.b)((function(e){return{userInf:e.user,userAll:e.users.users,notification:e.notifications.notifications}}),(function(e){return Object(h.a)({dispatch:e},Object(y.b)({addInitMess:U,addRoom:M},e))}))((function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)(""),l=Object(u.a)(i,2),o=l[0],m=l[1],f=Object(n.useState)(""),d=Object(u.a)(f,2),h=d[0],E=d[1];return Object(n.useEffect)((function(){E(e.data.room),s(e.data.messages),e.data.users[0]===e.userInf.email?m(e.data.users[1]):m(e.data.users[0]),console.log(h+"-----room")}),[]),c.a.createElement("div",{className:"chat-item-container"},c.a.createElement("div",{className:"chat-info"},c.a.createElement("p",{className:"chat-user"},function(e,t){var a=e.filter((function(e){return e.email===t}));return 0===a.length?"":a[0].name}(e.userAll,o)),c.a.createElement("p",{className:"chat-nitification"},c.a.createElement(c.a.Fragment,null,e.notification.map((function(t){if(console.log(t.room),t.room==e.data.room)return c.a.createElement(c.a.Fragment,null,t.notifications)}))))),c.a.createElement("button",{className:"btn--startchat",onClick:function(){return e.chatGo(h,r)}},"Go Chat"))}))),H=a(20),J=a.n(H),z=function(e,t,a){null!==localStorage.getItem("".concat(t).concat(a))&&"false"!==localStorage.getItem("".concat(t).concat(a))||(e.emit("leave-room",a),e.emit("new-user",a),localStorage.setItem("".concat(t).concat(a),"true"))},G=(a(136),Object(k.b)((function(e){return{notification:e.notifications.notifications}}),(function(e){return Object(h.a)({dispatch:e},Object(y.b)({addMess:T,removeMess:x,initNotification:q,addNotification:R,addInitMess:U,addRoom:M},e))}))((function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),r=a[0],s=a[1],i=Object(n.useState)("localhost:5000"),o=Object(u.a)(i,1)[0],m=J()(o),f=Object(l.g)();Object(n.useEffect)((function(){var t;(t=e.email,b.a.get("/api/rooms/getRoomsUsers/"+t).then((function(e){return e.data}))).then((function(t){s(t),t.forEach((function(t){z(m,e.email,t.room)}))})),function(e){return b.a.get("/api/notifications/getNotification/"+e).then((function(e){return e.data}))}(e.email).then((function(t){e.initNotification(t)}))}),[]),Object(n.useEffect)((function(){m.on("chat-message",(function(t){console.log("herelocation"+window.location),window.location.pathname==="/chat/"+t.room?t.email!==e.email&&e.addMess({mess:t.message,name:t.name}):(N({email:e.email,room:t.room}),e.addNotification(t.room),alert("You have SMS from"+t.name))}))}));var d=function(t,a){0!=e.notification[0][t]?function(e){return b.a.get("/api/rooms/getRoomsMessages/"+e).then((function(e){return e.data[0].messages}))}(t).then((function(t){e.addInitMess(t)})):e.addInitMess(a),e.addRoom(t),f.push("/chat/"+t)};return c.a.createElement("div",{className:"chatlist-container"},r.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(W,{data:e,chatGo:d}))})))}))),B=(a(137),Object(k.b)((function(e){return{userInf:e.user}}),(function(e){return Object(h.a)({dispatch:e},Object(y.b)({getAllUsers:C,addRoom:M,addInitMess:U},e))}))((function(e){var t=Object(l.g)();Object(n.useEffect)((function(){if(""===e.userInf.name){for(var a=0,n=Object.entries(localStorage);a<n.length;a++){var c=Object(u.a)(n[a],1)[0];"access_token"!==c&&"id_token"!==c&&"expires_at"!==c&&"scopes"!==c&&localStorage.setItem(c,"false")}t.push("/about")}}),[]);return c.a.createElement("div",{className:""},c.a.createElement(E,{auth:e.auth}),c.a.createElement("div",{className:"wrapper1"},c.a.createElement("div",{className:"main-container"},c.a.createElement(P,{startChat:function(a){var n={id1:a,id2:e.userInf.email};(function(e){var t=e.id1,a=e.id2;return b.a.get("/api/rooms/getRoom/"+t+"/"+a).then((function(e){return e.data}))})({id1:n.id1,id2:n.id2}).then((function(t){return e.addRoom(t.room),e.addInitMess(t.messages),t})).then((function(e){t.push("/chat/"+e.room)}))}}),c.a.createElement(G,{email:e.userInf.email}))))}))),K=(a(138),function(e){return n.createElement("div",{className:"wrapper"},n.createElement("div",{className:"main-content"},n.createElement("div",{className:"main-content_container"},n.createElement("h1",{className:"title"},"Hello, Wanderer!"),n.createElement("p",{className:"sub-title"},"Please verifide your account and log and start journey with us."),n.createElement("button",{className:"btn-login",onClick:function(){return e.auth.login()}},"Log In"),n.createElement("div",null,n.createElement("div",{className:"infinite-rotate1"}),n.createElement("div",{className:"infinite-rotate2"}),n.createElement("div",{className:"infinite-rotate3"})))),n.createElement("ul",{className:"circles"},n.createElement("li",{className:"square"}),n.createElement("li",{className:"square"}),n.createElement("li",{className:"square"}),n.createElement("li",{className:"square"}),n.createElement("li",{className:"square"}),n.createElement("li",{className:"square"}),n.createElement("li",{className:"square"}),n.createElement("li",{className:"square"}),n.createElement("li",{className:"square"}),n.createElement("li",{className:"square"}),n.createElement("li",{className:"circle"}),n.createElement("li",{className:"circle"}),n.createElement("li",{className:"circle"}),n.createElement("li",{className:"circle"}),n.createElement("li",{className:"circle"}),n.createElement("li",{className:"circle"}),n.createElement("li",{className:"circle"}),n.createElement("li",{className:"circle"}),n.createElement("li",{className:"circle"}),n.createElement("li",{className:"circle"})))}),V=(a(139),function(e){return n.createElement("div",{className:""},n.createElement("header",{className:"header-chat"},n.createElement("div",{className:"logo1"},n.createElement("p",{className:"logo__text1"},"WebChat")),n.createElement("p",{className:"header-p"},n.createElement("button",{className:"header-btn",onClick:function(){return e.leaveRoom()}},"EXIT CHAT")),n.createElement("div",{className:"logo2"},n.createElement("p",{className:"logo__text2"},"WebChat"))),n.createElement("div",{className:"wrapper2"},n.createElement("p",{className:"title-room"},e.chatUser,"---",e.name),n.createElement("div",{className:"chat-mess"},e.mess.map((function(t){return t.email===e.email?n.createElement("p",{className:"right-mess"},t.mess):n.createElement("p",{className:"left-mess"},t.mess)}))),n.createElement("div",{className:"send-mess"},n.createElement("textarea",{rows:3,className:"send-mess_input",value:e.message,onChange:function(t){return e.setMess(t.target.value)},onKeyPress:e.keyPressed}),n.createElement("button",{className:"send-mess_btn",onClick:function(){return e.sendMsg()}},"Send"))))}),X=Object(k.b)((function(e){return{userInf:e.user,userAll:e.users.users,mess:e.messages.messages,roomChat:e.room.room}}),(function(e){return Object(h.a)({dispatch:e},Object(y.b)({addMess:T,removeMess:x,addNotification:R},e))}))((function(e){var t=Object(n.useState)("localhost:5000"),a=Object(u.a)(t,1)[0],r=Object(n.useState)(""),s=Object(u.a)(r,2),i=s[0],o=s[1],m=Object(n.useState)(""),f=Object(u.a)(m,2),d=f[0],h=f[1],E=Object(l.g)(),g=J()(a),p=function(){var t=J()(a);e.addMess({mess:i,email:e.userInf.email}),t.emit("send-chat-message",e.roomChat,i,e.userInf.email,e.userInf.name);var n,c=e.mess;c.push({mess:i,email:e.userInf.email}),n={room:e.roomChat,mess:c},b.a.put("/api/rooms/updateMess",n).then((function(e){return e.data})),o("")};Object(n.useEffect)((function(){if(""===e.userInf.name){for(var t=0,a=Object.entries(localStorage);t<a.length;t++){var n=Object(u.a)(a[t],1)[0];"access_token"!==n&&"id_token"!==n&&"expires_at"!==n&&"scopes"!==n&&localStorage.setItem(n,"false")}E.push("/about")}else{z(g,e.userInf.email,e.roomChat);var c=e.roomChat.replace(e.userInf.email,""),r=e.userAll.filter((function(e){return e.email===c}));h(r[0].name),function(e){var t=e.email,a=e.room;b.a.delete("/api/notifications/deleteNotification/"+t+"/"+a).then((function(e){return e}))}({email:e.userInf.email,room:e.roomChat})}}),[]),Object(n.useEffect)((function(){g.on("chat-message",(function(t){window.location.pathname==="/chat/"+t.room?t.email!==e.userInf.email&&e.addMess({mess:t.message,name:t.name}):(N({email:e.userInf.email,room:t.room}),e.addNotification(t.room),alert("You have SMS from"+t.name))}))}));return c.a.createElement(V,{leaveRoom:function(){e.removeMess(),E.push("/main")},chatUser:d,name:e.userInf.name,mess:e.mess,email:e.userInf.email,message:i,setMess:o,keyPressed:function(e){"Enter"===e.key&&p()},sendMsg:p})})),Y=function(e){var t=e.auth;return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.d,null,c.a.createElement(l.b,{path:"/about",exact:!0,render:function(e){return t.isAuthenticated()?c.a.createElement(F,{auth:t}):c.a.createElement(l.a,{to:"/"})}}),c.a.createElement(l.b,{path:"/main",exact:!0,render:function(e){return t.isAuthenticated()?c.a.createElement(B,{auth:t}):c.a.createElement(l.a,{to:"/"})}}),c.a.createElement(l.b,{path:"/verified",exact:!0,render:function(e){return t.isAuthenticated()?c.a.createElement(K,{auth:t}):c.a.createElement(l.a,{to:"/"})}}),c.a.createElement(l.b,{path:"/chat/:id",exact:!0,render:function(e){return t.isAuthenticated()?c.a.createElement(X,{auth:t}):c.a.createElement(l.a,{to:"/"})}})))},Z=a(64),Q=a(65),$=a(66),ee=function(){function e(t){var a=this;Object(Z.a)(this,e),this.login=function(){a.auth0.authorize()},this.handleAuthentication=function(e){a.auth0.parseHash((function(t,n){n&&n.accessToken&&n.idToken?(a.setSession(n),console.log(a),e.push("/about")):t&&(console.log(a),e.push("/"),alert("Error: ".concat(t.error,". Check the console for further details.")),console.log(t))}))},this.setSession=function(e){console.log(e);var t=JSON.stringify(1e3*e.expiresIn+(new Date).getTime()),n=e.scope||a.requestedScopes||"";localStorage.setItem("access_token",e.accessToken),localStorage.setItem("id_token",e.idToken),localStorage.setItem("expires_at",t),localStorage.setItem("scopes",JSON.stringify(n))},this.logout=function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expires_at"),localStorage.removeItem("scopes"),a.userProfile=null,a.auth0.logout({clientID:"iHE49mBeK4r5dzxgWwZaf3LsiQ6lUfzF",returnTo:"http://localhost:3000"})},this.getAccessToken=function(){var e=localStorage.getItem("access_token");if(!e)throw new Error("No access token found.");return e},this.getProfile=function(e){if(a.userProfile)return e(a.userProfile);a.auth0.client.userInfo(a.getAccessToken(),(function(t,n){n&&(a.userProfile=n),e(n,t)}))},this.history=t,this.userProfile=null,this.requestedScopes="openid profile email read:courses",this.auth0=new $.a.WebAuth({domain:"yurii-dubnytskyi.eu.auth0.com",clientID:"iHE49mBeK4r5dzxgWwZaf3LsiQ6lUfzF",redirectUri:"http://localhost:3000/callback",responseType:"token id_token",scope:this.requestedScopes}),console.log(this)}return Object(Q.a)(e,[{key:"isAuthenticated",value:function(){var e=JSON.parse(localStorage.getItem("expires_at"));return(new Date).getTime()<e}},{key:"userHasScopes",value:function(e){var t=(JSON.parse(localStorage.getItem("scopes"))||"").split(" ");return e.every((function(e){return t.includes(e)}))}}]),e}(),te=a(67),ae=function(e){var t=new ee(window.history);return Object(n.useEffect)((function(){console.log("helllo"),te.a({instanceId:"a2f50c2f-9c1f-49df-8d75-199fb0cd8671"}).then((function(e){return e.start().then((function(){return console.log("hellloooo")})).then((function(){return e.addDeviceInterest("hello")})).then((function(){return console.log("Successfully registered and subscribed! Device ID:",e.deviceId)}))})).catch(console.error)})),c.a.createElement("div",null,c.a.createElement(i.a,null,c.a.createElement(d,Object.assign({auth:t},e)),c.a.createElement(Y,{auth:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne=a(68),ce=function(e,t){return Object(h.a)(Object(h.a)({},e),t)},re={id:"",name:"",email:"",nickname:"",family_name:"",isAuth:!1},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return ce(e,{id:t.data.id,name:t.data.name,email:t.data.email,nickname:t.data.nickname,family_name:t.data.family_name,isAuth:!0});case"UPDATE_USER_DATA":return ce(e,{name:t.data.name,nickname:t.data.nickname,family_name:t.data.family_name});case"DELETE_USER":return ce(e,{id:0,name:"",email:"",nickname:"",family_name:"",isAuth:!1});default:return e}},ie=a(15),le={users:[]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL":return ce(e,{users:Object(ie.a)(t.users)});default:return e}},ue={messages:[]},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESS":return ce(e,{messages:[].concat(Object(ie.a)(e.messages),[t.mess])});case"ADD_INIT_MESS":return ce(e,{messages:t.mess});case"REMOVE_MESS":return ce(e,{messages:[]});default:return e}},fe={room:""},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ROOM":return ce(e,{room:t.room});default:return e}},he={notifications:[]},Ee=function(e,t){return e.map((function(e){e.room===t&&(e.notifications+=1)}))},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_NOTIFICATION":return ce(e,{notifications:Object(ie.a)(t.initData)});case"ADD_NOTIFICATION":return ce(e,{notifications:[].concat(Object(ie.a)(e.notifications),[Ee(e.notifications,t.addData)])});default:return e}},pe=Object(y.c)({user:se,users:oe,messages:me,room:de,notifications:ge}),be=window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||y.d,ve=Object(y.e)(pe,be(Object(y.a)((function(e){return function(t){return function(a){console.log("[Middleware] Dispatching",a);var n=t(a);return console.log("[Middleware] next state",e.getState()),n}}}),ne.a)));s.a.render(c.a.createElement(k.a,{store:ve},c.a.createElement(c.a.StrictMode,null,c.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,a){e.exports=a(140)},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.dfe63660.chunk.js.map