(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(14),i=n.n(a),s=(n(22),n(5)),o=n.n(s),u=n(15),j=n(3),l=(n(24),n(16)),b=n.n(l),p=n(45),d=n(0),h=function(e){return e.ingredients.map((function(e){return Object(d.jsxs)("ul",{className:"ingredient-list",children:[Object(d.jsx)("li",{className:"ingredient-text",children:e.text}),Object(d.jsxs)("li",{className:"ingredient-weight",children:["Weight - ",e.weight]})]},Object(p.a)())}))},f=function(e){var t=e.recipe,n=Object(c.useState)(!1),r=Object(j.a)(n,2),a=r[0],i=r[1],s=t.recipe,o=s.label,u=s.image,l=s.url,b=s.ingredients;return Object(d.jsxs)("div",{className:"recipe",children:[Object(d.jsx)("h2",{children:o}),Object(d.jsx)("img",{src:u,alt:o}),Object(d.jsx)("a",{href:l,target:"_blank",rel:"noopener noreferrer",children:"URL"}),Object(d.jsx)("button",{onClick:function(){return i(!a)},children:"Ingredients"}),a&&Object(d.jsx)(h,{ingredients:b})]})},O=function(e){var t=e.alert;return Object(d.jsx)("div",{className:"alert",children:Object(d.jsx)("h3",{children:t})})};var x=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(j.a)(a,2),s=i[0],l=i[1],h=Object(c.useState)(""),x=Object(j.a)(h,2),m=x[0],g=x[1],v="https://api.edamam.com/search?q=".concat(n,"&app_id=").concat("34363f53","&app_key=").concat("7ef67469f3ae3b41dc87eeb7a8c6a010"),S=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===n){e.next=12;break}return e.next=3,b.a.get(v);case 3:if((t=e.sent).data.more){e.next=6;break}return e.abrupt("return",g("No food with such name"));case 6:console.log(t),l(t.data.hits),r(""),g(""),e.next=13;break;case 12:g("Please fill the form");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Food Searching App"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),S()},className:"search-form",children:[""!==m&&Object(d.jsx)(O,{alert:m}),Object(d.jsx)("input",{type:"text",name:"query",onChange:function(e){return r(e.target.value)},value:n,autoComplete:"off",placeholder:"Search Food"}),Object(d.jsx)("input",{type:"submit",value:"Search"})]}),Object(d.jsx)("div",{className:"recipes",children:s!==[]&&s.map((function(e){return Object(d.jsx)(f,{recipe:e},Object(p.a)())}))})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),m()}},[[44,1,2]]]);
//# sourceMappingURL=main.8acbf4e4.chunk.js.map