(this.webpackJsonpcursoReactIonic=this.webpackJsonpcursoReactIonic||[]).push([[1],{52:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=52},53:function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=53},54:function(e,t,n){var c={"./ion-icon.entry.js":[80,12]};function r(e){if(!n.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(c)},r.id=54,e.exports=r},63:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(9),r=n.n(c),s=n(29),i=n.n(s),a=n(4),o=n(44),l=n(15),j=n(18),u=(n(63),n(3)),d=[{title:"Clientes",url:"/page/custumers/",iosIcon:j.h,mdIcon:j.g},{title:"Empleados",url:"/page/employees/",iosIcon:j.i,mdIcon:j.i},{title:"Proveedores",url:"/page/suppliers/",iosIcon:j.c,mdIcon:j.c}],h=["Family","Friends","Notes","Work","Travel","Reminders"],b=function(){var e=Object(l.f)();return Object(u.jsx)(a.o,{contentId:"main",type:"overlay",children:Object(u.jsxs)(a.f,{children:[Object(u.jsxs)(a.m,{id:"inbox-list",children:[Object(u.jsx)(a.n,{children:"Inbox"}),Object(u.jsx)(a.r,{children:"hi@ionicframework.com"}),d.map((function(t,n){return Object(u.jsx)(a.q,{autoHide:!1,children:Object(u.jsxs)(a.k,{className:e.pathname===t.url?"selected":"",routerLink:t.url,routerDirection:"none",lines:"none",detail:!1,children:[Object(u.jsx)(a.i,{slot:"start",ios:t.iosIcon,md:t.mdIcon}),Object(u.jsx)(a.l,{children:t.title})]})},n)}))]}),Object(u.jsxs)(a.m,{id:"labels-list",children:[Object(u.jsx)(a.n,{children:"Labels"}),h.map((function(e,t){return Object(u.jsxs)(a.k,{lines:"none",children:[Object(u.jsx)(a.i,{slot:"start",icon:j.b}),Object(u.jsx)(a.l,{children:e})]},t)}))]})]})})},p=(n(65),n(66),n(67),n(68),n(69),n(70),n(71),n(72),n(73),n(74),n(75),n(6)),x=n(14),O=n(1),f=n.n(O);function m(){return v.apply(this,arguments)}function v(){return(v=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:8080/api/custumers",e.next=3,fetch("http://localhost:8080/api/custumers",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return y.apply(this,arguments)}function y(){return(y=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://localhost:8080/api/custumers/"+t,e.next=3,fetch(n,{method:"DELETE",headers:{"Content-Type":"application/json"}});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return w.apply(this,arguments)}function w(){return(w=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:8080/api/custumers",e.next=3,fetch("http://localhost:8080/api/custumers",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return E.apply(this,arguments)}function E(){return(E=Object(p.a)(f.a.mark((function e(t){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://localhost:8080/api/custumers/"+t,e.next=3,fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return c=e.sent,e.next=6,c.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var S=function(){var e=Object(l.g)().name,t=Object(c.useState)([]),n=Object(x.a)(t,2),r=n[0],s=n[1],i=Object(l.e)();Object(c.useEffect)((function(){d()}),[i.location.pathname]);var o=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:d();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(a.s,{children:[Object(u.jsx)(a.h,{children:Object(u.jsxs)(a.y,{children:[Object(u.jsx)(a.c,{slot:"start",children:Object(u.jsx)(a.p,{})}),Object(u.jsx)(a.x,{children:e})]})}),Object(u.jsxs)(a.f,{fullscreen:!0,children:[Object(u.jsx)(a.h,{collapse:"condense",children:Object(u.jsx)(a.y,{children:Object(u.jsx)(a.x,{size:"large",children:e})})}),Object(u.jsx)(a.f,{children:Object(u.jsxs)(a.d,{children:[Object(u.jsx)(a.x,{children:"Gesti\xf3n de Clientes"}),Object(u.jsx)(a.k,{children:Object(u.jsxs)(a.b,{onClick:function(){i.push("/page/custumer/new")},color:"primary",fill:"solid",slot:"end",size:"default",children:[Object(u.jsx)(a.i,{icon:j.a}),"Agregar Cliente"]})}),Object(u.jsxs)(a.g,{className:"table",children:[Object(u.jsxs)(a.v,{children:[Object(u.jsx)(a.e,{children:"Nombre"}),Object(u.jsx)(a.e,{children:"Email"}),Object(u.jsx)(a.e,{children:"Tel\xe9fono"}),Object(u.jsx)(a.e,{children:"Direcci\xf3n"}),Object(u.jsx)(a.e,{children:"Acciones"})]}),r.map((function(e){return Object(u.jsxs)(a.v,{children:[Object(u.jsxs)(a.e,{children:[e.firstname," ",e.lastname]}),Object(u.jsx)(a.e,{children:e.email}),Object(u.jsx)(a.e,{children:e.phone}),Object(u.jsx)(a.e,{children:e.address}),Object(u.jsxs)(a.e,{children:[Object(u.jsx)(a.b,{onClick:function(){return t=String(e.id),void i.push("/page/custumer/"+t);var t},color:"primary",fill:"clear",children:Object(u.jsx)(a.i,{icon:j.f,slot:"icon-only"})}),Object(u.jsx)(a.b,{onClick:function(){return o(String(e.id))},color:"danger",fill:"clear",children:Object(u.jsx)(a.i,{icon:j.e,slot:"icon-only"})})]})]})}))]})]})})]})]})},T=function(){var e,t=Object(l.g)().name,n=Object(c.useState)({}),r=Object(x.a)(n,2),s=r[0],i=r[1],o=Object(l.e)(),d=Object(l.h)("/page/custumer/:id"),h=null===d||void 0===d||null===(e=d.params)||void 0===e?void 0:e.id;Object(c.useEffect)((function(){b()}),[o.location.pathname]);var b=function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"!==h){e.next=4;break}i({}),e.next=8;break;case 4:return e.next=6,C(h);case 6:t=e.sent,i(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(s);case 2:o.push("/page/custumers");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(a.s,{children:[Object(u.jsx)(a.h,{children:Object(u.jsxs)(a.y,{children:[Object(u.jsx)(a.c,{slot:"start",children:Object(u.jsx)(a.p,{})}),Object(u.jsx)(a.x,{children:t})]})}),Object(u.jsxs)(a.f,{fullscreen:!0,children:[Object(u.jsx)(a.h,{collapse:"condense",children:Object(u.jsx)(a.y,{children:Object(u.jsx)(a.x,{size:"large",children:t})})}),Object(u.jsx)(a.f,{children:Object(u.jsxs)(a.d,{children:[Object(u.jsxs)(a.x,{children:[" ","new"===h?"Agregar Cliente":"Editar Cliente"]}),Object(u.jsxs)(a.v,{children:[Object(u.jsx)(a.e,{children:Object(u.jsxs)(a.k,{children:[Object(u.jsx)(a.l,{position:"stacked",children:"Nombre"}),Object(u.jsx)(a.j,{onIonChange:function(e){s.firstname=String(e.detail.value)},value:s.firstname,children:" "})]})}),Object(u.jsx)(a.e,{children:Object(u.jsxs)(a.k,{children:[Object(u.jsx)(a.l,{position:"stacked",children:"Apellidos"}),Object(u.jsx)(a.j,{onIonChange:function(e){s.lastname=String(e.detail.value)},value:s.lastname,children:" "})]})})]}),Object(u.jsxs)(a.v,{children:[Object(u.jsx)(a.e,{children:Object(u.jsxs)(a.k,{children:[Object(u.jsx)(a.l,{position:"stacked",children:"Email"}),Object(u.jsx)(a.j,{onIonChange:function(e){s.email=String(e.detail.value)},value:s.email,children:" "})]})}),Object(u.jsx)(a.e,{children:Object(u.jsxs)(a.k,{children:[Object(u.jsx)(a.l,{position:"stacked",children:"Addres"}),Object(u.jsx)(a.j,{onIonChange:function(e){s.address=String(e.detail.value)},value:s.address,children:" "})]})})]}),Object(u.jsxs)(a.v,{children:[Object(u.jsx)(a.e,{children:Object(u.jsxs)(a.k,{children:[Object(u.jsx)(a.l,{position:"stacked",children:"Telf"}),Object(u.jsx)(a.j,{onIonChange:function(e){s.phone=String(e.detail.value)},value:s.phone,children:" "})]})}),Object(u.jsx)(a.e,{})]}),Object(u.jsx)(a.k,{children:Object(u.jsxs)(a.b,{onClick:O,color:"success",fill:"solid",slot:"end",size:"default",children:[Object(u.jsx)(a.i,{icon:j.d}),"Guardar"]})})]})})]})]})};function I(){return N.apply(this,arguments)}function N(){return(N=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:8080/api/employees",e.next=3,fetch("http://localhost:8080/api/employees",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return D.apply(this,arguments)}function D(){return(D=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://localhost:8080/api/employee/"+t,e.next=3,fetch(n,{method:"DELETE",headers:{"Content-Type":"application/json"}});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return z.apply(this,arguments)}function z(){return(z=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:8080/api/employee",e.next=3,fetch("http://localhost:8080/api/employee",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){return L.apply(this,arguments)}function L(){return(L=Object(p.a)(f.a.mark((function e(t){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://localhost:8080/api/employee/"+t,e.next=3,fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return c=e.sent,e.next=6,c.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var F=function(){var e=Object(l.g)().name,t=Object(c.useState)([]),n=Object(x.a)(t,2),r=n[0],s=n[1],i=Object(l.e)();Object(c.useEffect)((function(){d()}),[i.location.pathname]);var o=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:d();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(a.s,{children:[Object(u.jsx)(a.h,{children:Object(u.jsxs)(a.y,{children:[Object(u.jsx)(a.c,{slot:"start",children:Object(u.jsx)(a.p,{})}),Object(u.jsx)(a.x,{children:e})]})}),Object(u.jsxs)(a.f,{fullscreen:!0,children:[Object(u.jsx)(a.h,{collapse:"condense",children:Object(u.jsx)(a.y,{children:Object(u.jsx)(a.x,{size:"large",children:e})})}),Object(u.jsx)(a.f,{children:Object(u.jsxs)(a.d,{children:[Object(u.jsx)(a.x,{children:"Gesti\xf3n de Empleados"}),Object(u.jsx)(a.k,{children:Object(u.jsxs)(a.b,{onClick:function(){i.push("/page/employee/new")},color:"primary",fill:"solid",slot:"end",size:"default",children:[Object(u.jsx)(a.i,{icon:j.a}),"Agregar Empleado"]})}),Object(u.jsxs)(a.g,{className:"table",children:[Object(u.jsxs)(a.v,{children:[Object(u.jsx)(a.e,{children:"Nombre"}),Object(u.jsx)(a.e,{children:"Email"}),Object(u.jsx)(a.e,{children:"Tel\xe9fono"}),Object(u.jsx)(a.e,{children:"Direcci\xf3n"}),Object(u.jsx)(a.e,{children:"Acciones"})]}),r.map((function(e){return Object(u.jsxs)(a.v,{children:[Object(u.jsxs)(a.e,{children:[e.firstname," ",e.lastname]}),Object(u.jsx)(a.e,{children:e.email}),Object(u.jsx)(a.e,{children:e.phone}),Object(u.jsx)(a.e,{children:e.address}),Object(u.jsxs)(a.e,{children:[Object(u.jsx)(a.b,{onClick:function(){return t=String(e.id),void i.push("/page/employee/"+t);var t},color:"primary",fill:"clear",children:Object(u.jsx)(a.i,{icon:j.f,slot:"icon-only"})}),Object(u.jsx)(a.b,{onClick:function(){return o(String(e.id))},color:"danger",fill:"clear",children:Object(u.jsx)(a.i,{icon:j.e,slot:"icon-only"})})]})]})}))]})]})})]})]})},U=function(){var e,t=Object(l.g)().name,n=Object(c.useState)({}),r=Object(x.a)(n,2),s=r[0],i=r[1],o=Object(l.e)(),d=Object(l.h)("/page/employee/:id"),h=null===d||void 0===d||null===(e=d.params)||void 0===e?void 0:e.id;Object(c.useEffect)((function(){b()}),[o.location.pathname]);var b=function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"!==h){e.next=4;break}i({}),e.next=8;break;case 4:return e.next=6,G(h);case 6:t=e.sent,i(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(s);case 2:o.push("/page/employees");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(a.s,{children:[Object(u.jsx)(a.h,{children:Object(u.jsxs)(a.y,{children:[Object(u.jsx)(a.c,{slot:"start",children:Object(u.jsx)(a.p,{})}),Object(u.jsx)(a.x,{children:t})]})}),Object(u.jsxs)(a.f,{fullscreen:!0,children:[Object(u.jsx)(a.h,{collapse:"condense",children:Object(u.jsx)(a.y,{children:Object(u.jsx)(a.x,{size:"large",children:t})})}),Object(u.jsx)(a.f,{children:Object(u.jsxs)(a.d,{children:[Object(u.jsxs)(a.x,{children:[" ","new"===h?"Agregar Empleado":"Editar Empleado"]}),Object(u.jsxs)(a.v,{children:[Object(u.jsx)(a.e,{children:Object(u.jsxs)(a.k,{children:[Object(u.jsx)(a.l,{position:"stacked",children:"Nombre"}),Object(u.jsx)(a.j,{onIonChange:function(e){s.firstname=String(e.detail.value)},value:s.firstname,children:" "})]})}),Object(u.jsx)(a.e,{children:Object(u.jsxs)(a.k,{children:[Object(u.jsx)(a.l,{position:"stacked",children:"Apellidos"}),Object(u.jsx)(a.j,{onIonChange:function(e){s.lastname=String(e.detail.value)},value:s.lastname,children:" "})]})})]}),Object(u.jsxs)(a.v,{children:[Object(u.jsx)(a.e,{children:Object(u.jsxs)(a.k,{children:[Object(u.jsx)(a.l,{position:"stacked",children:"Email"}),Object(u.jsx)(a.j,{onIonChange:function(e){s.email=String(e.detail.value)},value:s.email,children:" "})]})}),Object(u.jsx)(a.e,{children:Object(u.jsxs)(a.k,{children:[Object(u.jsx)(a.l,{position:"stacked",children:"Addres"}),Object(u.jsx)(a.j,{onIonChange:function(e){s.address=String(e.detail.value)},value:s.address,children:" "})]})})]}),Object(u.jsxs)(a.v,{children:[Object(u.jsx)(a.e,{children:Object(u.jsxs)(a.k,{children:[Object(u.jsx)(a.l,{position:"stacked",children:"Telf"}),Object(u.jsx)(a.j,{onIonChange:function(e){s.phone=String(e.detail.value)},value:s.phone,children:" "})]})}),Object(u.jsx)(a.e,{})]}),Object(u.jsxs)(a.v,{children:[Object(u.jsx)(a.e,{children:Object(u.jsxs)(a.k,{children:[Object(u.jsx)(a.l,{position:"stacked",children:"Salary"}),Object(u.jsx)(a.j,{onIonChange:function(e){s.salary=Number(e.detail.value)},value:s.salary,children:" "})]})}),Object(u.jsx)(a.e,{})]}),Object(u.jsx)(a.k,{children:Object(u.jsxs)(a.b,{onClick:O,color:"success",fill:"solid",slot:"end",size:"default",children:[Object(u.jsx)(a.i,{icon:j.d}),"Guardar"]})})]})})]})]})};function _(){return J.apply(this,arguments)}function J(){return(J=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:8080/api/suppliers",e.next=3,fetch("http://localhost:8080/api/suppliers",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return M.apply(this,arguments)}function M(){return(M=Object(p.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://localhost:8080/api/supplier/"+t,e.next=3,fetch(n,{method:"DELETE",headers:{"Content-Type":"application/json"}});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(e){return R.apply(this,arguments)}function R(){return(R=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://localhost:8080/api/supplier",e.next=3,fetch("http://localhost:8080/api/supplier",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e){return q.apply(this,arguments)}function q(){return(q=Object(p.a)(f.a.mark((function e(t){var n,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="http://localhost:8080/api/supplier/"+t,e.next=3,fetch(n,{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return c=e.sent,e.next=6,c.json();case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $=function(){var e,t=Object(l.g)().name,n=Object(c.useState)({}),r=Object(x.a)(n,2),s=r[0],i=r[1],o=Object(l.e)(),d=Object(l.h)("/page/supplier/:id"),h=null===d||void 0===d||null===(e=d.params)||void 0===e?void 0:e.id;Object(c.useEffect)((function(){b()}),[o.location.pathname]);var b=function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"!==h){e.next=4;break}i({}),e.next=8;break;case 4:return e.next=6,H(h);case 6:t=e.sent,i(t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B(s);case 2:o.push("/page/suppliers");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(a.s,{children:[Object(u.jsx)(a.h,{children:Object(u.jsxs)(a.y,{children:[Object(u.jsx)(a.c,{slot:"start",children:Object(u.jsx)(a.p,{})}),Object(u.jsx)(a.x,{children:t})]})}),Object(u.jsxs)(a.f,{fullscreen:!0,children:[Object(u.jsx)(a.h,{collapse:"condense",children:Object(u.jsx)(a.y,{children:Object(u.jsx)(a.x,{size:"large",children:t})})}),Object(u.jsx)(a.f,{children:Object(u.jsxs)(a.d,{children:[Object(u.jsxs)(a.x,{children:[" ","new"===h?"Agregar Proveedor":"Editar Proveedor"]}),Object(u.jsxs)(a.v,{children:[Object(u.jsx)(a.e,{children:Object(u.jsxs)(a.k,{children:[Object(u.jsx)(a.l,{position:"stacked",children:"Nombre"}),Object(u.jsx)(a.j,{onIonChange:function(e){s.name=String(e.detail.value)},value:s.name,children:" "})]})}),Object(u.jsx)(a.e,{children:Object(u.jsxs)(a.k,{children:[Object(u.jsx)(a.l,{position:"stacked",children:"Contacto"}),Object(u.jsx)(a.j,{onIonChange:function(e){s.contact=String(e.detail.value)},value:s.contact,children:" "})]})})]}),Object(u.jsxs)(a.v,{children:[Object(u.jsx)(a.e,{children:Object(u.jsxs)(a.k,{children:[Object(u.jsx)(a.l,{position:"stacked",children:"Email"}),Object(u.jsx)(a.j,{onIonChange:function(e){s.email=String(e.detail.value)},value:s.email,children:" "})]})}),Object(u.jsx)(a.e,{children:Object(u.jsxs)(a.k,{children:[Object(u.jsx)(a.l,{position:"stacked",children:"Addres"}),Object(u.jsx)(a.j,{onIonChange:function(e){s.address=String(e.detail.value)},value:s.address,children:" "})]})})]}),Object(u.jsx)(a.v,{children:Object(u.jsx)(a.e,{children:Object(u.jsxs)(a.k,{children:[Object(u.jsx)(a.l,{position:"stacked",children:"Telf"}),Object(u.jsx)(a.j,{onIonChange:function(e){s.phone=String(e.detail.value)},value:s.phone,children:" "})]})})}),Object(u.jsx)(a.v,{children:Object(u.jsx)(a.e,{children:Object(u.jsxs)(a.k,{children:[Object(u.jsx)(a.l,{position:"stacked",children:"Web"}),Object(u.jsx)(a.j,{onIonChange:function(e){s.web=String(e.detail.value)},value:s.web,children:" "})]})})}),Object(u.jsx)(a.k,{children:Object(u.jsxs)(a.b,{onClick:O,color:"success",fill:"solid",slot:"end",size:"default",children:[Object(u.jsx)(a.i,{icon:j.d}),"Guardar"]})})]})})]})]})},K=function(){var e=Object(l.g)().name,t=Object(c.useState)([]),n=Object(x.a)(t,2),r=n[0],s=n[1],i=Object(l.e)();Object(c.useEffect)((function(){d()}),[i.location.pathname]);var o=function(){var e=Object(p.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(t);case 2:d();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(p.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_();case 2:t=e.sent,s(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(a.s,{children:[Object(u.jsx)(a.h,{children:Object(u.jsxs)(a.y,{children:[Object(u.jsx)(a.c,{slot:"start",children:Object(u.jsx)(a.p,{})}),Object(u.jsx)(a.x,{children:e})]})}),Object(u.jsxs)(a.f,{fullscreen:!0,children:[Object(u.jsx)(a.h,{collapse:"condense",children:Object(u.jsx)(a.y,{children:Object(u.jsx)(a.x,{size:"large",children:e})})}),Object(u.jsx)(a.f,{children:Object(u.jsxs)(a.d,{children:[Object(u.jsx)(a.x,{children:"Gesti\xf3n de Proveedores"}),Object(u.jsx)(a.k,{children:Object(u.jsxs)(a.b,{onClick:function(){i.push("/page/supplier/new")},color:"primary",fill:"solid",slot:"end",size:"default",children:[Object(u.jsx)(a.i,{icon:j.a}),"Agregar Proveedor"]})}),Object(u.jsxs)(a.g,{className:"table",children:[Object(u.jsxs)(a.v,{children:[Object(u.jsx)(a.e,{children:"Nombre"}),Object(u.jsx)(a.e,{children:"Email"}),Object(u.jsx)(a.e,{children:"Tel\xe9fono"}),Object(u.jsx)(a.e,{children:"Web"}),Object(u.jsx)(a.e,{children:"Acciones"})]}),r.map((function(e){return Object(u.jsxs)(a.v,{children:[Object(u.jsx)(a.e,{children:e.name}),Object(u.jsx)(a.e,{children:e.email}),Object(u.jsx)(a.e,{children:e.phone}),Object(u.jsx)(a.e,{children:e.web}),Object(u.jsxs)(a.e,{children:[Object(u.jsx)(a.b,{onClick:function(){return t=String(e.id),void i.push("/page/supplier/"+t);var t},color:"primary",fill:"clear",children:Object(u.jsx)(a.i,{icon:j.f,slot:"icon-only"})}),Object(u.jsx)(a.b,{onClick:function(){return o(String(e.id))},color:"danger",fill:"clear",children:Object(u.jsx)(a.i,{icon:j.e,slot:"icon-only"})})]})]})}))]})]})})]})]})};Object(a.H)();var Q=function(){return Object(u.jsx)(a.a,{children:Object(u.jsx)(o.a,{children:Object(u.jsxs)(a.w,{contentId:"main",children:[Object(u.jsx)(b,{}),Object(u.jsxs)(a.u,{id:"main",children:[Object(u.jsx)(l.b,{path:"/",exact:!0,children:Object(u.jsx)(l.a,{to:"/page/Inbox"})}),Object(u.jsx)(l.b,{path:"/page/custumers/",exact:!0,children:Object(u.jsx)(S,{})}),Object(u.jsx)(l.b,{path:"/page/custumer/:id",exact:!0,children:Object(u.jsx)(T,{})}),Object(u.jsx)(l.b,{path:"/page/employees/",exact:!0,children:Object(u.jsx)(F,{})}),Object(u.jsx)(l.b,{path:"/page/employee/:id",exact:!0,children:Object(u.jsx)(U,{})}),Object(u.jsx)(l.b,{path:"/page/suppliers/",exact:!0,children:Object(u.jsx)(K,{})}),Object(u.jsx)(l.b,{path:"/page/supplier/:id",exact:!0,children:Object(u.jsx)($,{})})]})]})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=function(e){e&&e instanceof Function&&n.e(14).then(n.bind(null,90)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(Q,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),V()}},[[76,2,3]]]);
//# sourceMappingURL=main.a1590578.chunk.js.map