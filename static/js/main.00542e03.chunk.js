(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{137:function(e,t,n){e.exports={enter:"open_enter__1mHSN",enterActive:"open_enterActive__2rNd0",exit:"open_exit__38nkH",exitActive:"open_exitActive__3-28M"}},138:function(e,t,n){e.exports={window:"AlertWindow_window__1FtqR"}},139:function(e,t,n){e.exports={title:"PhonebookTitle_title__bGXPN"}},140:function(e,t,n){e.exports={wrapper:"SearchForm_wrapper__mH2M3"}},141:function(e,t,n){e.exports={enter:"pop_enter__1beVh",enterActive:"pop_enterActive__1xVpr",exit:"pop_exit__jJeBZ",exitActive:"pop_exitActive__1Xa8E"}},1453:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),i=(n(151),n(10)),l=n(1455),u=n(1454),s=n(24),m=n.n(s),p=n(34),d=n.n(p),f="type/ADD_CONTACT",h="type/REMOVE_CONTACT",_="type/ADD_FILTER",b=function(e){var t=e.id,n=e.name,a=e.number,o=e.onRemoveContact;return r.a.createElement("li",{className:m.a.cardWrapper},n,r.a.createElement("span",null,a),r.a.createElement("button",{onClick:function(e){o(e.target.id)},className:m.a.cardBtn,id:t},"\u2716"))},v=Object(i.b)((function(e){return{contacts:e.contacts}}),(function(e){return{onRemoveContact:function(t){return e(function(e){return{type:h,payload:e}}(t))}}}))(b),E=function(e){var t=e.contacts,n=e.filter;return r.a.createElement(l.a,{component:"ul",className:m.a.list},function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(t,n).map((function(e){var t=e.id,n=e.name,a=e.number;return r.a.createElement(u.a,{key:t,timeout:250,classNames:d.a,unmountOnExit:!0},r.a.createElement(v,{id:t,name:n,number:a}))})))},g=Object(i.b)((function(e){return{contacts:e.contacts,filter:e.filter}}))(E),y=n(35),C=n(68),w=n(36),x=n(37),O=n(39),N=n(38),A=n(40),j=n(69),k=n.n(j),S=n(136),T=n.n(S),W=n(41),F=n.n(W),B=n(42),L=n.n(B),q=function(e){var t=e.title,n=e.value,a=e.handleChange,o=e.placeholder;return r.a.createElement("div",{className:L.a.wrapper},r.a.createElement("label",{className:L.a.title},t),r.a.createElement("input",{className:L.a.input,value:n,type:"text",placeholder:o,onChange:a,name:t.toLowerCase()}))},D={color:"#ff0000",display:"block",fontSize:14,fontWeight:300,margin:0,marginBottom:5},I=function(e){var t=e.errorType;return r.a.createElement("span",{style:D},t)},R=n(137),z=n.n(R),H=n(138),M=n.n(H),P=function(e){var t=e.alert,n=e.switchAlert;return r.a.createElement(u.a,{timeout:1e3,classNames:z.a,in:t,onEnter:function(){setTimeout((function(){n(!1)}),1e3)},unmountOnExit:!0},r.a.createElement("div",{className:M.a.window},"Contact already exists!"))},G={name:[A.validations.required(),A.validations.regex(["^[a-zA-Z\u0430-\u044f\u0410-\u042f]+"])],number:"required|string"},J={"name.required":"Please choose a unique username for your account","number.required":"Enter a valid phone number.","name.regex":"Username contains invalid characters, please use only Latin or Cyrillic letters"},U=function(e){Object(O.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",errors:null,alertWindow:!1},e.addContact=function(t){var n=t.name;if(e.props.contacts.find((function(e){return e.name===n})))e.setState({alertWindow:!0});else{var a=Object(C.a)(Object(C.a)({},t),{},{id:T.a.generate(),newItem:!0});e.props.addContact(a)}},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;Object(A.validateAll)({name:a,number:r},G,J).then((function(){e.addContact({name:a,number:r}),e.reset()})).catch((function(t){var n={};t.forEach((function(e){n[e.field]=e.message})),e.setState({errors:n})}))},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(y.a)({},a,r))},e.handleFake=function(){var t=k.a.name.firstName(),n=k.a.phone.phoneNumberFormat();e.setState({name:t,number:n})},e.reset=function(){e.setState({name:"",number:"",errors:null})},e}return Object(x.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.name,a=t.number,o=t.errors,c=t.alertWindow;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit,className:F.a.form},r.a.createElement(q,{title:"Name",value:n,handleChange:this.handleChange,placeholder:"Write name..."}),o&&r.a.createElement(I,{errorType:o.name}),r.a.createElement(q,{title:"Number",value:a,handleChange:this.handleChange,placeholder:"Write phone..."}),o&&r.a.createElement(I,{errorType:o.number}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:F.a.submitBtn},"Add contact"),r.a.createElement("button",{type:"button",className:F.a.submitBtn,onClick:this.handleFake},"Generate fake contact"))),r.a.createElement(P,{alert:c,switchAlert:function(t){return e.setState({alertWindow:t})}}))}}]),n}(a.Component),V=Object(i.b)((function(e){return{contacts:e.contacts}}),(function(e){return{addContact:function(t){return e(function(e){return{type:f,payload:e}}(t))}}}))(U),K=n(139),X=n.n(K),Z=function(e){Object(O.a)(n,e);var t=Object(N.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={onLoad:!1},e}return Object(x.a)(n,[{key:"componentDidMount",value:function(){this.setState({onLoad:!0})}},{key:"render",value:function(){var e=this.state.onLoad,t=this.props.name;return r.a.createElement(u.a,{in:e,timeout:500,classNames:d.a,unmountOnExit:!0},r.a.createElement("h2",{className:X.a.title},t))}}]),n}(a.Component),Q=n(140),Y=n.n(Q),$=n(141),ee=n.n($),te=function(e){var t=e.contacts,n=e.filter,a=e.filteredString;return r.a.createElement(u.a,{timeout:250,classNames:ee.a,in:!!(t.length>2||n),unmountOnExit:!0},r.a.createElement("div",{className:Y.a.wrapper},r.a.createElement(q,{title:"Find contacts by name",handleChange:function(e){return a(e.target.value)},placeholder:"Search something...."})))},ne=Object(i.b)((function(e){return{contacts:e.contacts,filter:e.filter}}),(function(e){return{filteredString:function(t){return e(function(e){return{type:_,payload:e}}(t))}}}))(te),ae=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,{name:"Phonebook"}),r.a.createElement(V,null),r.a.createElement(ne,null),r.a.createElement(g,null))},re=n(12),oe=n(142),ce=n(144),ie=Object(re.combineReducers)({contacts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case f:return[].concat(Object(ce.a)(e),[a]);case h:return e.filter((function(e){return e.id!==a}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case _:return a;default:return e}}}),le=n(143),ue=n.n(le),se=Object(re.compose)(Object(oe.devToolsEnhancer)(),ue()()),me=Object(re.createStore)(ie,se);c.a.render(r.a.createElement(i.a,{store:me},r.a.createElement(ae,null)),document.getElementById("root"))},146:function(e,t,n){e.exports=n(1453)},151:function(e,t,n){},24:function(e,t,n){e.exports={list:"Contacts_list__KkwUE",cardWrapper:"Contacts_cardWrapper__4NHbg",cardBtn:"Contacts_cardBtn__2D54o"}},34:function(e,t,n){e.exports={enter:"slide_enter__2WLhU",enterActive:"slide_enterActive__CtCqg",exit:"slide_exit__1zO8S",exitActive:"slide_exitActive__1TOj5"}},41:function(e,t,n){e.exports={form:"ContactForm_form__2qxOd",submitBtn:"ContactForm_submitBtn__2Ezjt"}},42:function(e,t,n){e.exports={wrapper:"InputTitle_wrapper__1wu-Q",title:"InputTitle_title__195af",input:"InputTitle_input__2GK3A"}}},[[146,1,2]]]);
//# sourceMappingURL=main.00542e03.chunk.js.map