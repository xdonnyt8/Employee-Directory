(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{19:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),u=a(6),m=a(17),o=a.n(m),i=function(){return o.a.get("https://randomuser.me/api/?results=50&nat=us")},s=a(45),E=a(43),f=a(46),p=a(44);var h=function(e){var t=e.image,a=e.firstName,n=e.lastName,r=e.age,c=e.phone,u=e.email;return l.a.createElement("div",null,l.a.createElement(E.a,{className:""},l.a.createElement(p.a,null,l.a.createElement("img",{src:t})),l.a.createElement(p.a,null,l.a.createElement("p",null,n,", ",a)),l.a.createElement(p.a,null,l.a.createElement("p",null,r)),l.a.createElement(p.a,null,l.a.createElement("p",null,c)),l.a.createElement(p.a,null,l.a.createElement("p",null,u))))};var d=function(e){return e.data.map((function(e){return l.a.createElement(h,{image:e.picture.thumbnail,firstName:e.name.first,lastName:e.name.last,age:e.dob.age,phone:e.phone,email:e.email})}))},b=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),m=Object(u.a)(c,2),o=m[0],h=m[1],b=Object(n.useState)(""),g=Object(u.a)(b,2),v=g[0],N=g[1];Object(n.useEffect)((function(){i().then((function(e){return r(e.data.results)}))}),[]);var y=a.filter((function(e){return e.name.last.toLowerCase().startsWith(v.toLowerCase())||e.name.first.toLowerCase().startsWith(v.toLowerCase())}));return l.a.createElement(s.a,{fluid:!0},l.a.createElement(E.a,null,l.a.createElement("h1",null,"Employee Directory")),l.a.createElement(E.a,null,l.a.createElement(f.a,{onClick:function(){o?(r(a.sort((function(e,t){return e.name.last>t.name.last?-1:1}))),h(!1)):(r(a.sort((function(e,t){return e.name.last>t.name.last?1:-1}))),h(!0))}},"Sort Last Name"),l.a.createElement(f.a,{onClick:function(){o?(r(a.sort((function(e,t){return e.name.first>t.name.first?-1:1}))),h(!1)):(r(a.sort((function(e,t){return e.name.first>t.name.first?1:-1}))),h(!0))}},"Sort First Name"),l.a.createElement(f.a,{onClick:function(){o?(r(a.sort((function(e,t){return e.dob.age>t.dob.age?-1:1}))),h(!1)):(r(a.sort((function(e,t){return e.dob.age>t.dob.age?1:-1}))),h(!0))}},"Sort Age"),l.a.createElement("form",null,l.a.createElement("input",{value:v,onChange:function(e){N(e.target.value)},className:"",type:"text",placeholder:"Search Names"}))),l.a.createElement(E.a,null,l.a.createElement(p.a,null,l.a.createElement("h3",null,"Picture")),l.a.createElement(p.a,null,l.a.createElement("h3",null,"Name")),l.a.createElement(p.a,null,l.a.createElement("h3",null,"Age")),l.a.createElement(p.a,null,l.a.createElement("h3",null,"Phone Number")),l.a.createElement(p.a,null,l.a.createElement("h3",null,"Email"))),l.a.createElement(p.a,null,l.a.createElement(d,{data:y})))};var g=function(){return l.a.createElement("div",null,l.a.createElement(b,null))};a(41);c.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.957c42b6.chunk.js.map