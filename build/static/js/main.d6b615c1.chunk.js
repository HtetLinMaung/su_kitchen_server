(this.webpackJsonpsu_kitchen_web=this.webpackJsonpsu_kitchen_web||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/ma-la-xiang-guo-10.beb1a9f7.jpg"},39:function(e){e.exports=JSON.parse('{"a":"https://su-kitchen.herokuapp.com"}')},43:function(e,t,a){e.exports=a(55)},48:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),l=(a(48),a(29)),i=a(3),s=a(30),u=a.n(s),m=a(36),d=a(14),p=a(77),h=a(81),b=a(82),g=a(80),f=a(37),E=Object(p.a)((function(){return{input:{borderWidth:0,padding:".6rem .9rem",borderRadius:10,width:"100%",color:"#E9E9E9",boxSizing:"border-box",backgroundColor:"#FEFEFE",transition:"all 0.3s","&:focus":{color:"#545F6D",outline:"none",boxShadow:"0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)!important","&::placeholder":{color:"#545F6D"}},"&::placeholder":{color:"#E9E9E9"}},errorLabel:{color:"red",fontSize:12}}})),v=function(e){var t=E(),a=Object(f.a)({},e);delete a.errorLabel;var o="";return e.errorLabel&&(o=r.a.createElement("div",{className:t.errorLabel},e.errorLabel)),r.a.createElement(n.Fragment,null,r.a.createElement("input",Object.assign({},a,{className:"".concat(t.input," ").concat(e.className)})),o)};v.defaultProps={className:""};var x=v,j=a(38),w=a.n(j),k=a(39),O=a(83),y=a(79),S=Object(n.createContext)([]),N=Object(p.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),C=function(e){var t=e.children,a=N(),o=Object(n.useState)(!1);return r.a.createElement(S.Provider,{value:o},t,r.a.createElement(O.a,{className:a.backdrop,open:o[0]},r.a.createElement(y.a,{color:"inherit"})))},F=Object(p.a)((function(){return{root:{height:"100vh"},coverImageContainer:{height:"100vh"},coverImage:{width:"100%",height:"100%"},controls:{backgroundColor:"#F3F5F9"},title:{color:"#41546B"},button:{textTransform:"capitalize",backgroundColor:"#FE9215",color:"#fff",borderRadius:10,paddingLeft:"2rem",paddingRight:"2rem","&:hover, &:active":{backgroundColor:"#FE9215"}}}})),I=[{path:"/admin/login",component:function(){var e=Object(i.f)(),t=Object(n.useContext)(S),a=Object(d.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),s=Object(d.a)(l,2),p=s[0],f=s[1],E=Object(n.useState)(""),v=Object(d.a)(E,2),j=v[0],O=v[1],y=Object(n.useState)(""),N=Object(d.a)(y,2),C=N[0],I=N[1],L=Object(n.useState)(""),z=Object(d.a)(L,2),P=z[0],_=z[1],J=F(),B=Object(g.a)("(max-width:1024px)"),D=function(){return p.length>=9&&p.length<=11&&j.length>0},R=function(){var t=Object(m.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!D()){t.next=15;break}return c(!0),t.next=5,fetch("".concat(k.a,"/api/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone_no:p,password:j})}).then((function(e){return e.json()}));case 5:if(a=t.sent,c(!1),"logged in successful"===a.message){t.next=10;break}throw new Error(a.message);case 10:if("admin"===a.data.role){t.next=13;break}throw new Error("Unauthorized!");case 13:localStorage.setItem("su_token",a.token),e.push("/admin");case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(0),o&&c(!1),alert(t.t0.message);case 21:case"end":return t.stop()}}),t,null,[[0,17]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(h.a,{container:!0,className:J.root},r.a.createElement(h.a,{justify:"center",alignItems:"center",container:!0,item:!0,xs:12,sm:12,md:12,lg:7,className:J.controls},r.a.createElement(h.a,{spacing:3,item:!0,container:!0,xs:10,md:4,direction:"column",justify:"center"},r.a.createElement(h.a,{item:!0},r.a.createElement("h2",{className:J.title},"Login to Su's Kitchen Admin")),r.a.createElement(h.a,{item:!0},r.a.createElement(x,{placeholder:"Phone number",value:p,onChange:function(e){e.target.value=e.target.value.replace(/[a-zA-z]/g,"");var t=e.target.value;f(t),t.length<9||t.length>11?I("Phone no must be between 9 and 11 characters!"):I("")},errorLabel:C})),r.a.createElement(h.a,{item:!0},r.a.createElement(x,{type:"password",placeholder:"Password",value:j,onChange:function(e){var t=e.target.value;O(t),0===t.length?_("Password must not be empty!"):_("")},errorLabel:P})),r.a.createElement(h.a,{item:!0,container:!0,justify:"flex-end"},r.a.createElement(h.a,{item:!0},r.a.createElement(b.a,{size:"large",variant:"contained",className:J.button,onClick:R,disabled:!D()||o},"Log In"))))),r.a.createElement(h.a,{style:{display:B?"none":""},item:!0,xs:12,md:5,className:J.coverImageContainer},r.a.createElement("img",{src:w.a,className:J.coverImage,alt:""})))}},{path:"/admin",component:function(){return r.a.createElement("div",null,"Dashboard")}}],L=function(){return r.a.createElement(l.a,null,r.a.createElement(i.c,null,I.map((function(e){return r.a.createElement(i.a,{key:e.path,path:e.path,exact:!0,component:e.component})}))))},z=function(){return r.a.createElement(C,null,r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.d6b615c1.chunk.js.map