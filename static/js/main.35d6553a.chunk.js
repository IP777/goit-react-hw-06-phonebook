(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{138:function(e,t,n){e.exports={enter:"open_enter__1mHSN",enterActive:"open_enterActive__2rNd0",exit:"open_exit__38nkH",exitActive:"open_exitActive__3-28M"}},139:function(e,t,n){e.exports={window:"AlertWindow_window__1FtqR"}},140:function(e,t,n){e.exports={title:"PhonebookTitle_title__bGXPN"}},141:function(e,t,n){e.exports={wrapper:"SearchForm_wrapper__mH2M3"}},142:function(e,t,n){e.exports={enter:"pop_enter__1beVh",enterActive:"pop_enterActive__1xVpr",exit:"pop_exit__jJeBZ",exitActive:"pop_exitActive__1Xa8E"}},1453:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),i=(n(151),n(10)),l="type/ADD_CONTACT",u="type/REMOVE_CONTACT",s="type/ADD_FILTER",m=function(e){return{type:l,payload:e}},p=function(e){return{type:u,payload:e}},d=function(e){return{type:s,payload:e}},f=n(17),h=n(18),_=n(21),v=n(20),b=n(1455),E=n(1454),y=n(39),C=n.n(y),g=n(37),O=n.n(g),w=function(e){var t=e.contacts,n=e.filter,a=e.onRemoveContact;return r.a.createElement(b.a,{component:"ul",className:C.a.list},function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(t,n).map((function(e){var t=e.id,n=e.name,o=e.number;return r.a.createElement(E.a,{key:t,timeout:250,classNames:O.a,unmountOnExit:!0},r.a.createElement("li",{className:C.a.cardWrapper},n,r.a.createElement("span",null,o),r.a.createElement("button",{onClick:function(){return a(t)},className:C.a.cardBtn},"\u2716")))})))},x=Object(i.b)((function(e){return{contacts:e.contacts,filter:e.filter}}),(function(e){return{onRemoveContact:function(t){return e(p(t))}}}))(w),A=n(38),j=n(68),N=n(40),k=n(69),S=n.n(k),T=n(137),W=n.n(T),B=n(41),F=n.n(B),L=n(42),D=n.n(L),q=function(e){var t=e.title,n=e.value,a=e.handleChange,o=e.placeholder;return r.a.createElement("div",{className:D.a.wrapper},r.a.createElement("label",{className:D.a.title},t),r.a.createElement("input",{className:D.a.input,value:n,type:"text",placeholder:o,onChange:a,name:t.toLowerCase()}))},I={color:"#ff0000",display:"block",fontSize:14,fontWeight:300,margin:0,marginBottom:5},R=function(e){var t=e.errorType;return r.a.createElement("span",{style:I},t)},J=n(138),M=n.n(J),U=n(139),H=n.n(U),P=function(e){var t=e.alert,n=e.switchAlert;return r.a.createElement(E.a,{timeout:1e3,classNames:M.a,in:t,onEnter:function(){setTimeout((function(){n(!1)}),1e3)},unmountOnExit:!0},r.a.createElement("div",{className:H.a.window},"Contact already exists!"))},z={name:[N.validations.required(),N.validations.regex(["^[a-zA-Z\u0430-\u044f\u0410-\u042f]+"])],number:"required|string"},G={"name.required":"Please choose a unique username for your account","number.required":"Enter a valid phone number.","name.regex":"Username contains invalid characters, please use only Latin or Cyrillic letters"},V=function(e){Object(_.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",errors:null,alertWindow:!1},e.addContact=function(t){var n=t.name;if(e.props.contacts.find((function(e){return e.name===n})))e.setState({alertWindow:!0});else{var a=Object(j.a)(Object(j.a)({},t),{},{id:W.a.generate(),newItem:!0});e.props.addContact(a)}},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;Object(N.validateAll)({name:a,number:r},z,G).then((function(){e.addContact({name:a,number:r}),e.reset()})).catch((function(t){var n={};t.forEach((function(e){n[e.field]=e.message})),e.setState({errors:n})}))},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(A.a)({},a,r))},e.handleFake=function(){var t=S.a.name.firstName(),n=S.a.phone.phoneNumberFormat();e.setState({name:t,number:n})},e.reset=function(){e.setState({name:"",number:"",errors:null})},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.number,o=t.errors,c=t.alertWindow;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:F.a.form},r.a.createElement(q,{title:"Name",value:n,handleChange:this.handleChange,placeholder:"Write name..."}),o&&r.a.createElement(R,{errorType:o.name}),r.a.createElement(q,{title:"Number",value:a,handleChange:this.handleChange,placeholder:"Write phone..."}),o&&r.a.createElement(R,{errorType:o.number}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:F.a.submitBtn},"Add contact"),r.a.createElement("button",{type:"button",className:F.a.submitBtn,onClick:this.handleFake},"Generate fake contact"))),r.a.createElement(P,{alert:c,switchAlert:function(t){return e.setState({alertWindow:t})}}))}}]),n}(a.Component),K=Object(i.b)((function(e){return{contacts:e.contacts}}),(function(e){return{addContact:function(t){return e(m(t))}}}))(V),Q=n(140),X=n.n(Q),Z=function(e){Object(_.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={onLoad:!1},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.setState({onLoad:!0})}},{key:"render",value:function(){var e=this.state.onLoad,t=this.props.name;return r.a.createElement(E.a,{in:e,timeout:500,classNames:O.a,unmountOnExit:!0},r.a.createElement("h2",{className:X.a.title},t))}}]),n}(a.Component),Y=n(141),$=n.n(Y),ee=n(142),te=n.n(ee),ne=function(e){var t=e.contacts,n=e.filteredString;return r.a.createElement(E.a,{timeout:250,classNames:te.a,in:t.length>2,unmountOnExit:!0},r.a.createElement("div",{className:$.a.wrapper},r.a.createElement(q,{title:"Find contacts by name",handleChange:function(e){return n(e.target.value)},placeholder:"Search something...."})))},ae=Object(i.b)((function(e){return{contacts:e.contacts,filter:e.filter}}),(function(e){return{filteredString:function(t){return e(d(t))}}}))(ne),re=function(e){Object(_.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(h.a)(n,[{key:"componentDidUpdate",value:function(){}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("contact");if(e){var t=JSON.parse(e);this.props.addContact(t)}}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{name:"Phonebook"}),r.a.createElement(K,null),r.a.createElement(ae,null),r.a.createElement(x,null))}}]),n}(a.Component),oe=Object(i.b)((function(e){return{contacts:e.contacts,filter:e.filter}}),(function(e){return{addContact:function(t){return e(m(t))},removeContact:function(t){return e(p(t))},filteredContacts:function(t){return e(d(t))}}}))(re),ce=n(12),ie=n(143),le=n(144),ue=Object(ce.combineReducers)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case l:return[].concat(Object(le.a)(e),[a]);case u:return e.filter((function(e){return e.id!==a}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case s:return a;default:return e}}}),se=n(70),me=n.n(se);console.log(me.a);var pe=Object(ce.compose)(Object(ie.devToolsEnhancer)(),me()()),de=Object(ce.createStore)(ue,pe);c.a.render(r.a.createElement(i.a,{store:de},r.a.createElement(oe,null)),document.getElementById("root"))},146:function(e,t,n){e.exports=n(1453)},151:function(e,t,n){},37:function(e,t,n){e.exports={enter:"slide_enter__2WLhU",enterActive:"slide_enterActive__CtCqg",exit:"slide_exit__1zO8S",exitActive:"slide_exitActive__1TOj5"}},39:function(e,t,n){e.exports={list:"Contacts_list__KkwUE",cardWrapper:"Contacts_cardWrapper__4NHbg",cardBtn:"Contacts_cardBtn__2D54o"}},41:function(e,t,n){e.exports={form:"AddContactForm_form__3UaBO",submitBtn:"AddContactForm_submitBtn__rQCJL"}},42:function(e,t,n){e.exports={wrapper:"InputTitle_wrapper__1wu-Q",title:"InputTitle_title__195af",input:"InputTitle_input__2GK3A"}}},[[146,1,2]]]);
//# sourceMappingURL=main.35d6553a.chunk.js.map