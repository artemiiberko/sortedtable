(this.webpackJsonpsortedtable=this.webpackJsonpsortedtable||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),d=(a(57),a(14)),l=a(8),i=a(106),o=a(107),j=a(49),b=a(111),s=a(48),u=a(110),h=a(16),O=(a(100),a(1)),x=function(e){return Object(O.jsx)("div",{children:Object(O.jsxs)(h.BootstrapTable,{data:e.data,selectRow:{mode:"checkbox",clickToSelect:!0,onSelect:e.onSelectRow,hideSelectColumn:!0,bgColor:"#F04545"},hover:!0,striped:!0,children:[Object(O.jsx)(h.TableHeaderColumn,{isKey:!0,dataField:"_id",width:"0%",children:"ID"}),Object(O.jsx)(h.TableHeaderColumn,{dataField:"brand",dataAlign:"center",headerAlign:"center",width:"41.75%",children:"Marka pojazdu"}),Object(O.jsx)(h.TableHeaderColumn,{dataField:"model",dataAlign:"center",headerAlign:"center",width:"41.75%",children:"Model pojazdu"}),Object(O.jsx)(h.TableHeaderColumn,{dataField:"year",dataAlign:"center",headerAlign:"center",width:"16.5%",children:"Rok produkcji"})]})})},m=a(11),f=a(2),y=a(105),p=a(108),g=a(109),C=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),r=a[0],c=a[1],i=function(){return c(!1)},o=Object(n.useState)({_id:Math.max.apply(Math,Object(d.a)(e.data.map((function(e){return e._id})))),brand:"",model:"",year:2020}),j=Object(l.a)(o,2),b=j[0],s=j[1],h=function(t){var a=Math.max.apply(Math,Object(d.a)(e.data.map((function(e){return e._id}))));a++;var n=t.target,r=n.name,c=n.value;s((function(e){var t;return Object(f.a)(Object(f.a)({},e),{},(t={},Object(m.a)(t,r,c),Object(m.a)(t,"_id",a),t))}))};return Object(O.jsxs)("div",{children:[Object(O.jsxs)(y.a,{className:"justify-content-around",children:[Object(O.jsx)(u.a,{variant:"danger",onClick:e.deleteCar,children:"Delete"}),Object(O.jsx)(u.a,{variant:"dark",onClick:function(){return c(!0)},children:"+ Add new car"})]}),Object(O.jsxs)(p.a,{show:r,onHide:i,children:[Object(O.jsx)(p.a.Header,{closeButton:!0,children:Object(O.jsx)(p.a.Title,{children:"Add new car"})}),Object(O.jsxs)(p.a.Body,{children:[Object(O.jsxs)(g.a.Group,{className:"mb-3",children:[Object(O.jsx)(g.a.Label,{children:"Brand"}),Object(O.jsx)(g.a.Control,{type:"text",placeholder:"Brand",onChange:h,value:b.brand,name:"brand"})]}),Object(O.jsxs)(g.a.Group,{className:"mb-3",children:[Object(O.jsx)(g.a.Label,{children:"Model"}),Object(O.jsx)(g.a.Control,{type:"text",placeholder:"Model",onChange:h,value:b.model,name:"model"})]}),Object(O.jsxs)(g.a.Group,{className:"mb-3",children:[Object(O.jsx)(g.a.Label,{children:"Production year"}),Object(O.jsx)(g.a.Control,{type:"number",placeholder:"Year",onChange:h,value:b.year,name:"year"})]})]}),Object(O.jsxs)(p.a.Footer,{children:[Object(O.jsx)(u.a,{variant:"secondary",onClick:i,children:"Close"}),Object(O.jsx)(u.a,{variant:"primary",onClick:function(t){""!==b.brand&""!==b.model&""!==b.year&&(e.addCar(b),c(!1))},children:"Add"})]})]})]})},v=(a(102),[{_id:1,brand:"BMW",model:"X5",year:2020},{_id:2,brand:"Tesla",model:"Model S",year:2021},{_id:3,brand:"Toyota",model:"Land Cruiser",year:2017},{_id:4,brand:"Audi",model:"TT",year:2018},{_id:5,brand:"Ford",model:"F-150",year:2015}]);var k=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),r=a[0],c=a[1],h=Object(n.useState)(v),m=Object(l.a)(h,2),f=m[0],y=m[1],p=r,g=f.filter((function(e){return e.model.toLowerCase().includes(p.toLowerCase())}));function k(e,t){return e.brand<t.brand?-1:e.brand>t.brand?1:0}function S(e,t){return e.model<t.model?-1:e.model>t.model?1:0}function _(e,t){return e.year>t.year?-1:e.year<t.year?1:0}var w=g,T=Object(n.useState)([]),F=Object(l.a)(T,2),A=F[0],M=F[1];return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)(i.a,{children:[Object(O.jsxs)(o.a,{style:{padding:20,background:"#ebebeb"},children:[Object(O.jsx)(j.a,{children:Object(O.jsx)(C,{addCar:function(e){y((function(t){return[].concat(Object(d.a)(t),[e])}))},data:f,deleteCar:function(){var e=A;y((function(t){return t.filter((function(t){return 0===e.filter((function(e){return e._id===t._id})).length}))}))}})}),Object(O.jsx)(j.a,{children:Object(O.jsx)(b.a,{children:Object(O.jsx)(s.a,{type:"text",placeholder:"Search model",onChange:function(e){return c(e.target.value)},value:r})})})]}),Object(O.jsxs)(o.a,{style:{marginBottom:10,marginTop:10},children:[Object(O.jsx)(j.a,{lg:"5",children:Object(O.jsx)(u.a,{variant:"light",onClick:function(){y(g.sort(k))},children:"Sort by brand"})}),Object(O.jsx)(j.a,{lg:"5",children:Object(O.jsx)(u.a,{variant:"light",onClick:function(){y(g.sort(S))},children:"Sort by model"})}),Object(O.jsx)(j.a,{lg:"2",children:Object(O.jsx)(u.a,{variant:"light",onClick:function(){y(g.sort(_))},children:"Sort by year"})})]}),Object(O.jsx)(o.a,{children:Object(O.jsx)(x,{data:w,onSelectRow:function(e,t,a){M(t?function(t){return[].concat(Object(d.a)(t),[{_id:e._id}])}:A.filter((function(t){return t._id!==e._id})))}})})]})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,112)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,d=t.getTTFB;a(e),n(e),r(e),c(e),d(e)}))};c.a.render(Object(O.jsx)(k,{}),document.getElementById("root")),S()},57:function(e,t,a){}},[[103,1,2]]]);
//# sourceMappingURL=main.1a402741.chunk.js.map