(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{13:function(e,t,a){e.exports=a(24)},18:function(e,t,a){},19:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),o=a.n(r),l=(a(18),a(11)),s=a(7),i=a(1),u=a(2),m=a(3),p=a(4),b=(a(19),function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(){e.props.onIncrement(e.props.habit)},e.handleDecrement=function(){e.props.onDecrement(e.props.habit)},e.handleDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){console.log("habit: ".concat(this.props.habit.name," mounted"))}},{key:"componentWillUnmount",value:function(){console.log("habit: ".concat(this.props.habit.name," will unmount"))}},{key:"render",value:function(){var e=this.props.habit,t=e.name,a=e.count;return c.a.createElement("li",{className:"habit"},c.a.createElement("span",{className:"habit-name"},t),c.a.createElement("span",{className:"habit-count"},a),c.a.createElement("button",{className:"habit-button habit-increase",onClick:this.handleIncrement},c.a.createElement("i",{className:"fas fa-plus-square"})),c.a.createElement("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement},c.a.createElement("i",{className:"fas fa-minus-square"})),c.a.createElement("button",{className:"habit-button habit-delete",onClick:this.handleDelete},c.a.createElement("i",{className:"fas fa-trash"})))}}]),a}(n.PureComponent)),h=Object(n.memo)((function(e){var t=c.a.createRef(),a=c.a.createRef();return c.a.createElement("form",{ref:a,className:"add-form",onSubmit:function(n){n.preventDefault();var c=t.current.value;c&&e.onAdd(c),a.current.reset()}},c.a.createElement("input",{ref:t,type:"text",className:"add-input",placeholder:"Habit"}),c.a.createElement("button",{className:"add-button"},"Add"))})),f=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleAdd=function(t){e.props.onAdd(t)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(h,{onAdd:this.handleAdd}),c.a.createElement("ul",null,this.props.habits.map((function(t){return c.a.createElement(b,{key:t.id,habit:t,onIncrement:e.props.onIncrement,onDecrement:e.props.onDecrement,onDelete:e.props.onDelete})}))),c.a.createElement("button",{className:"habits-reset",onClick:this.props.onReset},"Reset All"))}}]),a}(n.Component),d=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return c.a.createElement("nav",{className:"navbar"},c.a.createElement("i",{className:"navbar-logo fas fa-leaf"}),c.a.createElement("span",null,"Habit Tracker"),c.a.createElement("span",{className:"navbar-count"},this.props.totalCount))}}]),a}(n.PureComponent),E=(n.Component,a(20),a(12)),v=function(e){var t=Object(n.useState)(0),a=Object(E.a)(t,2),r=a[0],o=a[1],l=Object(n.useRef)(),s=Object(n.useCallback)((function(){o(r+1)}));return Object(n.useEffect)((function(){console.log("mounted & updated: ".concat(r))}),[]),c.a.createElement("li",{className:"habit"},c.a.createElement("span",{ref:l,className:"habit-name"},"Reading"),c.a.createElement("span",{className:"habit-count"},r),c.a.createElement("button",{className:"habit-button habit-increase",onClick:s},c.a.createElement("i",{className:"fas fa-plus-square"})))};o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.81d6e456.chunk.js.map