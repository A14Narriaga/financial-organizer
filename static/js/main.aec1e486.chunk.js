(this["webpackJsonpfinancial-organizer"]=this["webpackJsonpfinancial-organizer"]||[]).push([[0],{19:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(10),i=c.n(s),r=c(3),j=(c(19),c(5)),l=c(11),o=c(4),d=c(9),b=c(12),u=c(1),h=function(e){var t=e.setLogin;return Object(u.jsxs)("section",{className:"login",children:[Object(u.jsxs)("div",{className:"login-card",children:[Object(u.jsx)("div",{className:"login-title",children:Object(u.jsx)("h1",{children:"Organizador Financiero"})}),Object(u.jsx)("div",{className:"login-logo",children:Object(u.jsx)(l.a,{})}),Object(u.jsxs)("div",{className:"login-btn",onClick:function(){return t(!1)},children:[Object(u.jsx)(b.a,{}),Object(u.jsx)("p",{children:"Acceder"})]})]}),Object(u.jsx)("div",{className:"login-footer",children:Object(u.jsx)("footer",{children:Object(u.jsxs)("section",{className:"footer-container",children:[Object(u.jsx)("h3",{children:"By Alan Arriaga"}),Object(u.jsxs)("div",{className:"options",children:[Object(u.jsx)("a",{href:"https://github.com/A14Narriaga",target:"blank",children:Object(u.jsx)(d.a,{})}),Object(u.jsx)("a",{href:"https://a14narriaga.netlify.app/",target:"blank",children:Object(u.jsx)(o.d,{})}),Object(u.jsx)("a",{href:"https://twitter.com/A14Narriaga",target:"blank",children:Object(u.jsx)(d.b,{})})]})]})})})]})},O=function(){return Object(u.jsxs)("header",{children:[Object(u.jsxs)("div",{className:"user",children:[Object(u.jsx)("div",{className:"user-img",children:Object(u.jsx)("img",{src:"RedIsland.jpg",alt:"user-img"})}),Object(u.jsxs)("div",{className:"user-text",children:[Object(u.jsx)("p",{children:"Buenos d\xedas"}),Object(u.jsx)("p",{children:"Alan"})]})]}),Object(u.jsx)("div",{className:"notifications",children:Object(u.jsx)(j.c,{})})]})},x=function(e){var t=e.balance,c=e.currency,a=e.showAmount,n=e.setShowAmount,s=e.hiddeAmout;return Object(u.jsxs)("section",{className:"general-balance",children:[Object(u.jsxs)("div",{className:"amount",children:[Object(u.jsx)("div",{className:"line",style:a?{backgroundColor:"rgb(47, 255, 92)"}:{backgroundColor:"whitesmoke"}}),Object(u.jsxs)("div",{className:"amount-content",children:[Object(u.jsx)("p",{children:"Saldo general"}),Object(u.jsx)("p",{children:"".concat(c," ").concat(a?t:s)})]})]}),Object(u.jsx)("div",{className:"show-amount",onClick:function(){return n((function(e){return!e}))},children:a?Object(u.jsx)(o.b,{}):Object(u.jsx)(o.c,{})})]})},m=function(e){var t=e.bank,c=e.name,a=e.type,n=e.currency,s=e.amount,i=e.showAmount,r=e.hiddeAmout;return Object(u.jsxs)("section",{className:"account",children:[Object(u.jsxs)("div",{className:"account-info",children:[Object(u.jsx)("div",{className:"bank-img",children:Object(u.jsx)("img",{src:"banks/".concat(t,".png"),alt:"bank-img"})}),Object(u.jsxs)("div",{className:"account-data",children:[Object(u.jsx)("p",{children:c}),Object(u.jsx)("p",{children:a})]})]}),Object(u.jsx)("div",{className:"account-amount",children:Object(u.jsx)("p",{children:"".concat(n," ").concat(i?s:r)})})]})},p=c(14),v=c(13),g=function e(t,c,a,n){Object(v.a)(this,e),this.bank=void 0,this.name=void 0,this.type=void 0,this.amount=void 0,this.bank=t,this.name=c,this.type=a,this.amount=n},N=function(e){var t=e.setBalance,c=e.setAddAccount,n=e.setAccounts,s=Object(a.useState)(!1),i=Object(r.a)(s,2),l=i[0],d=i[1],b=Object(a.useState)(-1),h=Object(r.a)(b,2),O=h[0],x=h[1],m=Object(a.useState)(""),v=Object(r.a)(m,2),N=v[0],f=v[1],k=Object(a.useState)("title"),A=Object(r.a)(k,2),y=A[0],S=A[1],C=Object(a.useState)("title"),w=Object(r.a)(C,2),B=w[0],M=w[1];Object(a.useEffect)((function(){d(O>0&&""!==N&&"title"!==y&&"title"!==B)}),[l,O,N,y,B]);return Object(u.jsxs)("section",{className:"add-account",children:[Object(u.jsxs)("div",{className:"add-header",children:[Object(u.jsx)("p",{children:"Agregar cuenta"}),Object(u.jsx)(j.b,{onClick:function(){return c(!1)}})]}),Object(u.jsxs)("div",{className:"add-content",children:[Object(u.jsxs)("div",{className:"add-amount",children:[Object(u.jsx)("label",{htmlFor:"amount",children:"saldo actual"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:"MXN"}),Object(u.jsx)("input",{id:"amount",type:"number",placeholder:"00,000.00",min:"0",onChange:function(e){return x(""===e.target.value?-1:Number(e.target.value))}})]})]}),Object(u.jsx)("div",{className:"add-name",children:Object(u.jsx)("input",{type:"text",placeholder:"Nombre de la cuenta",onChange:function(e){return f(e.target.value)}})}),Object(u.jsxs)("div",{className:"add-row",children:[Object(u.jsx)("label",{htmlFor:"bank",children:"Instituci\xf3n bancaria:"}),Object(u.jsxs)("select",{id:"bank",onChange:function(e){return S(e.target.value)},defaultValue:"title",children:[Object(u.jsx)("option",{value:"title",disabled:!0,children:"Seleccione"}),Object(u.jsx)("option",{value:"wallet",children:"Cartera"}),Object(u.jsx)("option",{value:"banamex",children:"Banamex"}),Object(u.jsx)("option",{value:"mercadopago",children:"Mercadopago"}),Object(u.jsx)("option",{value:"rappi",children:"Rappi"}),Object(u.jsx)("option",{value:"nubank",children:"Nubank"})]})]}),Object(u.jsxs)("div",{className:"add-row",children:[Object(u.jsx)("label",{htmlFor:"type",children:"Tipo:"}),Object(u.jsxs)("select",{id:"type",onChange:function(e){return M(e.target.value)},defaultValue:"title",children:[Object(u.jsx)("option",{value:"title",disabled:!0,children:"Seleccione"}),Object(u.jsx)("option",{value:"Cuenta corriente",children:"Cuenta corriente"}),Object(u.jsx)("option",{value:"Cuenta de ahorro",children:"Cuenta de ahorro"})]})]})]}),Object(u.jsx)("div",{className:"add-footer",children:Object(u.jsx)(o.a,{onClick:function(){l&&(n((function(e){return[].concat(Object(p.a)(e),[new g(y,N,B,O)])})),t((function(e){return e+O})),c(!1))},style:l?{color:"rgb(47, 255, 92)"}:{color:"rgb(77, 77, 77)"}})})]})},f=JSON.parse("[]"),k=function(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(0),i=Object(r.a)(s,2),l=i[0],o=i[1],d=Object(a.useState)(f),b=Object(r.a)(d,2),p=b[0],v=b[1],g=Object(a.useState)(!1),k=Object(r.a)(g,2),A=k[0],y=k[1],S=Object(a.useState)(!0),C=Object(r.a)(S,2),w=C[0],B=C[1],M="----";return c?Object(u.jsx)(h,{setLogin:n}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(O,{}),Object(u.jsx)(x,{balance:l,currency:"MXN",showAmount:w,setShowAmount:B,hiddeAmout:M}),Object(u.jsxs)("section",{className:"card",children:[Object(u.jsxs)("div",{className:"card-header",children:[Object(u.jsx)("p",{className:"title",children:"Mis cuentas"}),Object(u.jsx)("div",{className:"card-options",children:Object(u.jsx)(j.a,{className:"add",onClick:function(){return y(!0)}})})]}),p.map((function(e){return Object(u.jsx)(m,{bank:e.bank,name:e.name,type:e.type,currency:"MXN",amount:e.amount,showAmount:w,hiddeAmout:M})}))]}),A&&Object(u.jsx)(N,{setBalance:o,setAddAccount:y,setAccounts:v}),Object(u.jsx)("section",{className:"card",children:Object(u.jsxs)("div",{className:"card-header",children:[Object(u.jsx)("p",{className:"title",children:"Tarjetas de cr\xe9dito"}),Object(u.jsx)("div",{className:"card-options",children:Object(u.jsx)(j.a,{className:"add"})})]})})]})};i.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.aec1e486.chunk.js.map