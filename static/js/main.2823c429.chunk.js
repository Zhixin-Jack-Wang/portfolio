(window["webpackJsonpmy-portfolio-git"]=window["webpackJsonpmy-portfolio-git"]||[]).push([[0],{103:function(e,n,t){e.exports=t(250)},108:function(e,n,t){},250:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(96),o=t.n(i),l=t(3),c=(t(108),t(12)),s=t(13),m=t(33),d=t(4);function u(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  .hamburger {\n    position: absolute;\n    z-index: 3;\n    right: 1rem;\n    width: 100%;\n    height: 20px;\n    cursor: pointer;\n    position: relative;\n    &-line {\n      z-index: 0;\n      width: 1.75rem;\n      height: 0.2rem;\n      margin: 0 0 5px 0;\n      transition: all 0.5s ease-out;\n      background: white;\n      &:nth-child(1) {\n        top: 0.5rem;\n      }\n      &:nth-child(2) {\n        top: 1rem;\n      }\n      &:nth-child(3) {\n        top: 1.5rem;\n      }\n    }\n\n    &-close {\n      .hamburger-line {\n        // Line 1 - Rotate\n        &:nth-child(1) {\n          transform: rotate(45deg) translate(5px, 5px);\n        }\n\n        // Line 2 - Hide\n        &:nth-child(2) {\n          opacity: 0;\n        }\n\n        // Line 3 - Rotate\n        &:nth-child(3) {\n          transform: rotate(-45deg) translate(7px, -6px);\n        }\n      }\n    }\n  }\n"]);return u=function(){return e},e}var p=d.a.div(u());function h(){var e=Object(l.a)(["\n  position: fixed;\n  z-index: 3;\n  top: 0;\n  width: 100%;\n  height: 3rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: rgba(21, 38, 58, 0.3);\n  .nav-brand {\n    color: white;\n    margin-left: 1rem;\n    font-size: 1.2rem;\n  }\n  .items {\n    display: ",";\n    flex-direction: column;\n    position: absolute;\n    align-items: center;\n    top: 50vh;\n    width: 100%;\n    height: 50vh;\n    background-color: rgba(117, 109, 100, 0.5);\n    color: white;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    animation-name: menu-drop;\n    animation-duration: 1s;\n    animation-fill-mode: forwards;\n    @keyframes menu-drop {\n      0% {\n        top: 50vh;\n      }\n      90% {\n        top: 100vh;\n      }\n      100% {\n        top: 150vh;\n      }\n    }\n    &-show {\n      animation-name: menu-rise;\n      animation-duration: 1s;\n      animation-fill-mode: forwards;\n      @keyframes menu-rise {\n        0% {\n          top: 100vh;\n        }\n        100% {\n          top: 50vh;\n        }\n      }\n    }\n    &__item {\n      margin: 2rem 0;\n      font-size: 2rem;\n      text-decoration: none;\n      color: white;\n      &:hover {\n        color: blue;\n      }\n      @media (min-width: 768px) {\n        margin: 1rem;\n      }\n    }\n  }\n  .contact {\n    position: fixed;\n    width: 100%;\n    bottom: 0;\n    display: flex;\n    justify-content: center;\n    background-color: steelblue;\n    color: white;\n  }\n"]);return h=function(){return e},e}var g=function(){var e=Object(a.useState)({renderOverlay:!1,clicked:!1}),n=Object(m.a)(e,2),t=n[0],i=n[1],o=Object(a.useRef)(null),l=Object(a.useRef)(null),s=function(e){console.log("click"+e.target.className);var n=o.current,t=l.current;"items"==n.className?(n.className="items items-show",t.classList.add("hamburger-close"),i({clicked:!0,renderOverlay:!0})):(n.className="items",t.classList.remove("hamburger-close"),i({clicked:!0,renderOverlay:!1}))};return r.a.createElement(r.a.Fragment,null,function(){if(!0===t.clicked)return!0===t.renderOverlay?r.a.createElement("div",{className:"overlay-portrait  drop-ani"},r.a.createElement("div",{className:"portrait-holder"})):r.a.createElement("div",{className:"overlay-portrait rise-ani"},r.a.createElement("div",{className:"portrait-holder"}))}(),r.a.createElement(f,{clicked:t.clicked},r.a.createElement(c.b,{to:"/"},r.a.createElement("span",{className:"nav-brand"},"Zhixin Wang")),r.a.createElement(p,null,r.a.createElement("div",{className:"hamburger",onClick:s,ref:l},r.a.createElement("div",{className:"hamburger-line"}),r.a.createElement("div",{className:"hamburger-line"}),r.a.createElement("div",{className:"hamburger-line"}))),r.a.createElement("div",{className:"items",ref:o},r.a.createElement(c.b,{to:"/",className:"items__item",onClick:s},"Home"),r.a.createElement(c.b,{to:"/about",className:"items__item",onClick:s},"About"),r.a.createElement(c.b,{to:"/mywork",onClick:s,className:"items__item"},"My Work")),r.a.createElement("div",{className:"contact"},r.a.createElement("span",null,r.a.createElement("strong",null,"Email: "),"zxwang.jack@gmail.com"))))},f=d.a.nav(h(),function(e){return e.clicked?"flex":"none"});function b(){var e=Object(l.a)(["\n  .name {\n    color: yellow;\n  }\n  .title {\n    margin-left: 5rem;\n  }\n  .grating {\n    font-size: 1.5rem;\n    margin-top: 5rem;\n    @media (min-width: 768px) {\n      margin-left: 5rem;\n    }\n  }\n  .cta-wrapper {\n    display: flex;\n    justify-content: flex-end;\n    .cta {\n      margin-top: 2rem;\n      height: 4rem;\n      width: 10rem;\n      font-size: 1.5rem;\n      border-radius: 10px;\n      &:hover {\n        color: black;\n      }\n\n      .link {\n        text-decoration: none;\n        color: white;\n      }\n    }\n  }\n"]);return b=function(){return e},e}var v=function(){return r.a.createElement(E,null,r.a.createElement("h1",{className:"name"},"Zhixin Wang"),r.a.createElement("h2",{className:"title"},"Web Developer"),r.a.createElement("p",{className:"grating"},"Welcome, thank you for visiting my site."),r.a.createElement("div",{className:"cta-wrapper"},r.a.createElement(c.b,{to:"/mywork",className:"link"},r.a.createElement("button",{className:"cta btn-primary"},"My Work"))))},E=d.a.div(b());t(114);function y(){var e=Object(l.a)(["\n  position: relative;\n  z-index: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(176, 145, 143, 0.2);\n  border: 1px solid black;\n  margin-bottom: 3rem;\n  @media (min-width: 992px) {\n    padding: 0rem 10rem;\n  }\n  .title {\n    color: black;\n    font-size: 2rem;\n    margin-bottom: 1rem;\n    @media (min-width: 992px) {\n      font-size: 3rem;\n      margin-bottom: 3rem;\n    }\n  }\n  .carousel {\n    padding: 0rem 1rem;\n    .imgs {\n      width: 30rem;\n      height: 10rem;\n      @media (min-width: 768px) {\n        width: 30rem;\n        height: 20rem;\n      }\n      @media (min-width: 992px) {\n        width: 40rem;\n        height: 40rem;\n      }\n    }\n    .indicators {\n    }\n    .control-prev {\n    }\n  }\n  .info {\n    margin: 1rem;\n    @media (min-width: 992px) {\n      font-size: 2rem;\n    }\n  }\n  .button-group {\n    width: 100%;\n    display: flex;\n    justify-content: space-around;\n    margin-bottom: 1rem;\n    @media (min-width: 992px) {\n      font-size: 2rem;\n      justify-content: space-between;\n    }\n    .btn-primary {\n      border-radius: 10px;\n    }\n    .link {\n      text-decoration: none;\n      color: white;\n      &:hover {\n        color: black;\n      }\n    }\n  }\n"]);return y=function(){return e},e}var w=function(e){var n=e.index,t=e.title,a=e.description,i=e.imgArr,o=e.github,l=e.web;return console.log("index="+n),r.a.createElement(x,null,r.a.createElement("h1",{className:"title"},t),r.a.createElement("div",{id:"carouselExampleIndicators"+n,className:"carousel slide","data-ride":"carousel"},r.a.createElement("ol",{className:"carousel-indicators"},r.a.createElement("li",{"data-target":"#carouselExampleIndicators"+n,"data-slide-to":"0",className:"active indicators"}),r.a.createElement("li",{className:"indicators","data-target":"#carouselExampleIndicators"+n,"data-slide-to":"1"}),r.a.createElement("li",{className:"indicators","data-target":"#carouselExampleIndicators"+n,"data-slide-to":"2"}),r.a.createElement("li",{className:"indicators","data-target":"#carouselExampleIndicators"+n,"data-slide-to":"3"})),r.a.createElement("div",{className:"carousel-inner"},r.a.createElement("div",{className:"carousel-item active"},r.a.createElement("img",{className:"d-block w-100 imgs",src:i[0],alt:"First slide"})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block w-100 imgs",src:i[1],alt:"Second slide"})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block w-100 imgs",src:i[2],alt:"Third slide"})),r.a.createElement("div",{className:"carousel-item"},r.a.createElement("img",{className:"d-block w-100 imgs",src:i[3],alt:"Forth slide"}))),r.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators"+n,role:"button","data-slide":"prev"},r.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Previous")),r.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators"+n,role:"button","data-slide":"next"},r.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),r.a.createElement("span",{className:"sr-only"},"Next"))),r.a.createElement("div",{className:"info"},r.a.createElement("p",null,r.a.createElement("strong",null,"Description:")," ",a),r.a.createElement("p",null,r.a.createElement("strong",null,"Tools:")," MongoDB, Javascript(React.js, Node.js.)")),r.a.createElement("div",{className:"button-group"},r.a.createElement("button",{className:"btn-primary"},r.a.createElement("a",{className:"link",href:o},r.a.createElement("i",{className:"fab fa-github"}),r.a.createElement("span",null," Github"))),r.a.createElement("button",{className:"btn-primary"},r.a.createElement("a",{className:"link",href:l},r.a.createElement("i",{className:"fas fa-link"}),r.a.createElement("span",null," Website")))))},x=d.a.div(y()),N=[{title:"Chrysopoeia",description:"Chrysopoeia is a trading platform for people to exchange and sell pre-owned or used products. What makes Chrysopoeia standout among similar platforms is that it provides a more straight-forward service and an user-friendly UI to speed up the transactions. Users can easily modify their inventory, offers, and connect with product owner.It's an ongoing project",tools:"MongoDB, Javascript(React.js, Node.js.)",imgArr:["https://i.imgur.com/P6eymR9.png","https://i.imgur.com/A8Jej92.png","https://i.imgur.com/ZNF2hro.png","https://i.imgur.com/ypKa88k.png"],github:"https://github.com/Zhixin-Jack-Wang/Chrysopoeia",web:"https://chrysopoeia.herokuapp.com/"},{title:"Stickboard",description:"Stickboard is a virtual representation of a real-life stickboard, you can stick notes and make plans on the board and customize and pull out your board for each day, it's an ongoing project, for now you can only stick notes for meetups",tools:"MongoDB, Javascript(React.js, Node.js.)",imgArr:["https://i.imgur.com/Bgi7RLy.png","https://i.imgur.com/yxviJne.png","https://i.imgur.com/ktOt1gC.png","https://i.imgur.com/yyUTfZQ.png"],github:"https://github.com/Zhixin-Jack-Wang/Stickboard",web:"https://mymeetups.herokuapp.com/"}];function k(){var e=Object(l.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"]);return k=function(){return e},e}var j=function(){var e=Object(a.useState)({projects:N}),n=Object(m.a)(e,2),t=n[0];n[1];return console.log(N),console.log(t),r.a.createElement(O,null,t.projects.map(function(e,n){return console.log(n),r.a.createElement(w,Object.assign({},e,{key:n,index:n}))}))},O=d.a.section(k());function z(){var e=Object(l.a)(["\n  .title {\n    font-size: 2rem;\n    margin-bottom: 2rem;\n    @media (min-width: 992px) {\n      font-size: 5rem;\n      margin-bottom: 4rem;\n    }\n  }\n  @media (min-width: 992px) {\n    .intro {\n      font-size: 2rem;\n    }\n  }\n"]);return z=function(){return e},e}var W=function(){return r.a.createElement(I,null,r.a.createElement("h1",{className:"title"},"Who am I?"),r.a.createElement("p",{className:"intro"},"Enthusiastic developer ready to be part of Toronto\u2019s rapidly growing tech ecosystem. Excited to be an active contributor to the constantly evolving and innovating tech scene."," "),r.a.createElement("p",{className:"intro"},"Strong believer of lifelong learning: not just there to do a job, but to grow with the company, to incorporate the latest technology and solution to increase the market value and general competitiveness of the company."))},I=d.a.div(z());function C(){var e=Object(l.a)(["\n  padding: 0rem 2rem;\n  margin-top: 5rem;\n  @media (min-width: 768px) {\n    padding: 0rem 5rem;\n  }\n"]);return C=function(){return e},e}var J=function(){return r.a.createElement(c.a,null,r.a.createElement(g,null),r.a.createElement(R,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:v}),r.a.createElement(s.a,{exact:!0,path:"/about",component:W}),r.a.createElement(s.a,{exact:!0,path:"/mywork",component:j}))))},R=d.a.section(C());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[103,1,2]]]);
//# sourceMappingURL=main.2823c429.chunk.js.map