(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(8),r=n.n(c),i=(n(15),n(1)),u=n(2),o=n(4),m=n(3),h=n(5),s=function(e){function t(){var e;Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).handleClick=function(){e.setState({day:e.state.today+""})};var n=new Date;return e.state={today:n},e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("label",null,"Today's Date",l.a.createElement("button",{onClick:this.handleClick},this.state.day)))}}]),t}(l.a.Component),d=n(6),b=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={value:""},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Today I'm Grateful for",l.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange}))))}}]),t}(l.a.Component),p=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("p",null,"Priorities"),l.a.createElement("form",null,l.a.createElement("input",{type:"text"}),l.a.createElement("input",{type:"checkbox"})),l.a.createElement("form",null,l.a.createElement("input",{type:"text"}),l.a.createElement("input",{type:"checkbox"})),l.a.createElement("form",null,l.a.createElement("input",{type:"text"}),l.a.createElement("input",{type:"checkbox"})))}}]),t}(l.a.Component);n(16);var f=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(s,null),l.a.createElement(b,null),l.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.a4cac141.chunk.js.map