(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{64:function(e,t,n){},66:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(20),i=n.n(r),o=n(35),a=(n(64),n(13)),l=n(19),u=n(16),h=n(15),j=(n(65),n(66),n(36)),b=n(31),d=n(27),m=n(2),O=function(e){console.log(e);var t={color:"rgb(190,255,90)",textDecoration:"none",display:"inline-block"};return Object(m.jsxs)(j.a,{expand:"lg",className:"App-nav",children:[Object(m.jsx)(j.a.Brand,{href:"#home",children:"React-Bootstrap"}),Object(m.jsx)(j.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsx)(j.a.Collapse,{id:"basic-navbar-nav",children:Object(m.jsxs)(b.a,{className:"mr-auto",children:[Object(m.jsx)(o.b,{className:"nav-item",style:t,to:"#",children:"Wecome"}),Object(m.jsx)(o.b,{className:"nav-item",style:t,to:"#",children:"Signup/Signin"}),Object(m.jsx)(b.a.Link,{href:"#home",children:"Home"}),Object(m.jsx)(b.a.Link,{href:"#link",children:"Link"}),Object(m.jsxs)(d.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(m.jsx)(d.a.Item,{href:"#action/3.1",children:"Action"}),Object(m.jsx)(d.a.Item,{href:"#action/3.2",children:"Another action"}),Object(m.jsx)(d.a.Item,{href:"#action/3.3",children:"Something"}),Object(m.jsx)(d.a.Divider,{}),Object(m.jsx)(d.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]})},f=function(e){console.log(e);return Object(m.jsxs)("header",{className:"App-header",styles:{display:"flex",justifyContent:"space-around",alignItems:"center"},children:[Object(m.jsx)("h1",{children:"This is the Header"}),Object(m.jsx)(O,{})]})},p=n(58),x=n(59),g=n(50),v=function e(){Object(a.a)(this,e),this.correctNum1=Math.ceil(10*Math.random()),this.correctNum2=Math.ceil(10*Math.random()),this.correctSum=this.correctNum1+this.correctNum2,this.wrongSum1=Math.ceil(20*Math.random()),this.wrongSum2=Math.ceil(20*Math.random()),this.wrongSum3=Math.ceil(20*Math.random())},y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e,c){var s;Object(a.a)(this,n),(s=t.call(this,c)).questions=new Array(e);for(var r=0;r<e;++r)s.questions[r]=new v;return s}return n}(s.a.Component),S=n(45),w=function(e){var t=new y(6);console.log(t);return Object(m.jsxs)(S.a,{style:{backgroundColor:"white",color:"black",borderRadius:"50%",minHeight:"50vh"},children:[Object(m.jsxs)("h2",{children:[t.questions[0].correctNum1," + ",t.questions[0].correctNum2," = ",t.questions[0].correctSum]}),Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:["Wrong Answer 1: ",t.questions[0].wrongSum1]}),Object(m.jsxs)("li",{children:["Wrong Answer 2: ",t.questions[0].wrongSum2]}),Object(m.jsxs)("li",{children:["Wrong Answer 3: ",t.questions[0].wrongSum3]})]})]})},q=n(32),k=n(57),C=n(44),A=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={count:1,correctAnswer:"",currentAnswer:"",numOfCorrect:0,numOfIncorrect:0,isQuestionOpen:!1},e.quiz=new y(6),e.formStyles={backgroundColor:"white",color:"black",borderRadius:"3%",padding:"1em",minHeight:"50vh",listStyle:"none"},e.questionStyles={backgroundColor:"white",color:"black",borderRadius:"3%",padding:"2em",listStyle:"none"},e.alertClicked=function(){e.setState((function(e){return{count:e.count+1}}))},e.handleChange=function(t){t.preventDefault(),e.setState((function(n){return console.log(e.state),{currentAnswer:parseInt(t.target.innerText),correctAnswer:e.quiz.questions[e.state.count].correctSum}}),(function(){return console.log("Login: "+JSON.stringify(e.state))}))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.props),e.setState((function(t){return e.state.currentAnswer===e.state.correctAnswer?(console.log(e.state),{count:t.count+1,numOfCorrect:t.numOfCorrect+1}):(console.log(e.state),{count:t.count+1,numOfIncorrect:t.numOfIncorrect+1})}),(function(){return console.log("Login: "+JSON.stringify(e.state))})),e.shuffleList()},e.shuffleList=function(){for(var e=document.querySelector(".list-group"),t=e.children.length;t>=0;t--)e.appendChild(e.children[Math.random()*t|0]),console.log(e.children[1]),e.children[1].classList.remove("active")},e}return Object(l.a)(n,[{key:"showQuestion",value:function(){this.setState({isQuestionOpen:!0})}},{key:"render",value:function(){return console.log(this.quiz),this.state.count<this.quiz.questions.length?Object(m.jsxs)(S.a,{style:this.formStyles,children:[Object(m.jsxs)(k.a,{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("h3",{children:["question ",this.state.count," of 5"]}),Object(m.jsxs)("h2",{style:this.questionStyles,children:["What is the sum of ",this.quiz.questions[this.state.count].correctNum1," + ",this.quiz.questions[this.state.count].correctNum2]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)(q.a,{children:[Object(m.jsx)(q.a.Item,{action:!0,href:"#link1",onClick:this.handleChange,children:this.quiz.questions[this.state.count].wrongSum1}),Object(m.jsx)(q.a.Item,{action:!0,href:"#link2",onClick:this.handleChange,children:this.quiz.questions[this.state.count].wrongSum2}),Object(m.jsx)(q.a.Item,{action:!0,href:"#link3",onClick:this.handleChange,children:this.quiz.questions[this.state.count].wrongSum3}),Object(m.jsx)(q.a.Item,{action:!0,href:"#",onClick:this.handleChange,children:this.quiz.questions[this.state.count].correctSum})]}),Object(m.jsx)("br",{}),Object(m.jsx)(C.a,{variant:"primary",type:"submit",children:"Submit"})]}),this.shuffleList]}):Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Congradulations for completing the quiz!"}),Object(m.jsxs)("h3",{children:["You scored ",this.state.numOfCorrect," out of ",this.state.count," correct."]})]})}}]),n}(s.a.Component),N=function(e){var t=Object(c.useState)("home"),n=Object(p.a)(t,2),s=n[0],r=n[1];return Object(m.jsxs)(x.a,{id:"controlled-tab-example",activeKey:s,onSelect:function(e){return r(e)},children:[Object(m.jsx)(g.a,{eventKey:"home",title:"Overview",className:"App-tabs-overview",children:Object(m.jsx)("h2",{style:{color:"white"},children:"Click 'Orbit' or 'Form' to start the quiz!"})}),Object(m.jsx)(g.a,{eventKey:"orbit",title:"Orbit",className:"App-tabs-orbit",children:Object(m.jsx)(w,{})}),Object(m.jsx)(g.a,{eventKey:"form",title:"Form",className:"App-tabs-form",children:Object(m.jsx)(A,{})})]})},I=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"App-quizes-container",children:Object(m.jsx)(N,{})})}}]),n}(c.Component),z=function(e){return console.log(e),Object(m.jsx)("main",{className:"App-main",children:Object(m.jsx)(I,{})})},M=function(e){console.log(e);return Object(m.jsx)("footer",{className:"App-footer",styles:{display:"flex",position:"absolute",bottom:"0",justifyContent:"space-around",alignItems:"center"},children:Object(m.jsx)("div",{children:"This is the footer"})})},L=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App-pages-container",children:[Object(m.jsx)(f,{className:"App-header"}),Object(m.jsx)(z,{className:"App-main"}),Object(m.jsx)(M,{className:"App-footer"})]})}}]),n}(c.Component),D=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(L,{})})}}]),n}(c.Component);i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(o.a,{children:Object(m.jsx)(D,{})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.18024c10.chunk.js.map