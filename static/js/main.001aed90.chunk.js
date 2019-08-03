(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,a,t){e.exports=t(92)},51:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(24),l=t.n(s),o=(t(51),t(6)),c=t(19),i=t(26),m=t.n(i),u=t(17),d=t.n(u),p=function(e){e?d.a.defaults.headers.common.Authorization=e:delete d.a.defaults.headers.common.Authorization},h=function(e){return{type:"SET_CURRENT_USER",payload:e}},g=function(){return function(e){localStorage.removeItem("jwtToken"),p(!1),e(h({}))}},v=t(9),f=t(18),b=t(41),N=t(42),E=function(e){return void 0===e||null===e||"object"===typeof e&&0===Object.keys(e).length||"string"===typeof e&&0===e.trim().length},y={isAuthenticated:!1,user:{}},w={},k=Object(f.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_CURRENT_USER":return Object(N.a)({},e,{isAuthenticated:!E(a.payload),user:a.payload});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"GET_ERRORS":return a.payload;default:return e}}}),O=[b.a],j=Object(f.e)(k,{},Object(f.d)(f.a.apply(void 0,O),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),S=t(12),C=t(13),x=t(16),T=t(14),R=t(15),_=function(e){function a(){return Object(S.a)(this,a),Object(x.a)(this,Object(T.a)(a).apply(this,arguments))}return Object(R.a)(a,e),Object(C.a)(a,[{key:"onLogoutClick",value:function(e){e.preventDefault(),this.props.logoutUser()}},{key:"render",value:function(){var e=this.props.auth,a=e.isAuthenticated,t=e.user,n=r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:" ",onClick:this.onLogoutClick.bind(this),className:"nav-link"},r.a.createElement("img",{src:t.profilePicture,alt:t.name,className:"rounded-circle",style:{width:"25px",marginRight:"5px"},title:"You must have uploaded a profile picture"})," ","Logout"))),s=r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/register"},"Sign Up")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/login"},"Login")));return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark mb-4"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"https://www.pdn.ac.lk/academics/academics.php"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/University_of_Peradeniya_crest.png/220px-University_of_Peradeniya_crest.png",alt:"logo",style:{width:"30px",height:"30px"}})),r.a.createElement(o.b,{className:"navbar-brand",to:"/"},"Hostel Management"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mobile-nav"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"mobile-nav"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",to:"/profiles"},"Students"))),a?n:s)))}}]),a}(n.Component),U=Object(v.b)(function(e){return{auth:e.auth}},{logoutUser:g})(_),P=function(){return r.a.createElement("footer",{className:"bg-dark text-white bottom mt-5 p-1 text-center"},"Copyright \xa9 ",(new Date).getFullYear()," Hostel Management by Kalana")},D=t(44),A=t.n(D),F=function(e){function a(){return Object(S.a)(this,a),Object(x.a)(this,Object(T.a)(a).apply(this,arguments))}return Object(R.a)(a,e),Object(C.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"render",value:function(){return r.a.createElement("div",{className:"landing"},r.a.createElement("div",{className:"dark-overlay landing-inner text-light"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("h1",{style:{fontSize:"8vw"}},r.a.createElement(A.a,{className:"ukFormat",format:"hh:mm:ssa",ticking:!0,timezone:"Asia/Colombo"})),r.a.createElement("h1",{className:"display-3 mb-4"},"Hostel Management System"),r.a.createElement("p",{className:"lead"}," University of Peradeniya, Sri Lanka"),r.a.createElement("hr",null),r.a.createElement(o.b,{to:"/register",className:"btn btn-lg btn-info mr-2"},"Sign Up"),r.a.createElement(o.b,{to:"/login",className:"btn btn-lg btn-light"},"Login"))))))}}]),a}(n.Component),L=Object(v.b)(function(e){return{auth:e.auth}})(F),M=t(20),I=t(10),H=t(4),G=t.n(H),z=function(e){function a(){var e;return Object(S.a)(this,a),(e=Object(x.a)(this,Object(T.a)(a).call(this))).state={name:"",regNo:"",faculty:"",hall:"",contactNo:"",guardianName:"",guardianTel:"",password:"",password2:"",profilePicture:"",errors:{}},e.onChange=e.onChange.bind(Object(I.a)(e)),e.onSubmit=e.onSubmit.bind(Object(I.a)(e)),e}return Object(R.a)(a,e),Object(C.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/upload")}},{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"onChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var a={name:this.state.name,regNo:this.state.regNo,faculty:this.state.faculty,hall:this.state.hall,contactNo:this.state.contactNo,guardianName:this.state.guardianName,guardianTel:this.state.guardianTel,profilePicture:this.state.profilePicture,password:this.state.password,password2:this.state.password2};this.props.registerUser(a,this.props.history)}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"register"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 m-auto"},r.a.createElement("h1",{className:"display-4 text-center"},"Sign Up"),r.a.createElement("p",{className:"lead text-center"},"Please,Register for the university hostel management system"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":e.name}),placeholder:"Name",name:"name",value:this.state.name,onChange:this.onChange}),e.name&&r.a.createElement("div",{className:"invalid-feedback"},e.name)),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":e.regNo}),placeholder:"Registration No.",value:this.state.regNo,name:"regNo",onChange:this.onChange}),e.regNo&&r.a.createElement("div",{className:"invalid-feedback"},e.regNo),r.a.createElement("small",{className:"form-text text-muted"},"It should be appeared in your University identity card ",r.a.createElement("br",null),"Example:S/00/000)")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":e.faculty}),placeholder:"Faculty",value:this.state.faculty,name:"faculty",onChange:this.onChange}),e.faculty&&r.a.createElement("div",{className:"invalid-feedback"},e.faculty)),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":e.hall}),placeholder:"Hall",value:this.state.hall,name:"hall",onChange:this.onChange}),e.hall&&r.a.createElement("div",{className:"invalid-feedback"},e.hall)),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":e.contactNo}),placeholder:"Contact No:",value:this.state.contactNo,name:"contactNo",onChange:this.onChange}),e.contactNo&&r.a.createElement("div",{className:"invalid-feedback"},e.contactNo)),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":e.guardianName}),placeholder:"Guardian Name",value:this.state.guardianName,name:"guardianName",onChange:this.onChange}),e.guardianName&&r.a.createElement("div",{className:"invalid-feedback"},e.guardianName)),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":e.guardianTel}),placeholder:"Guardian Telephone No:",value:this.state.guardianTel,name:"guardianTel",onChange:this.onChange}),e.guardianTel&&r.a.createElement("div",{className:"invalid-feedback"},e.guardianTel)),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:G()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",value:this.state.password,name:"password",onChange:this.onChange}),e.password&&r.a.createElement("div",{className:"invalid-feedback"},e.password)),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:G()("form-control form-control-lg",{"is-invalid":e.password2}),placeholder:"Confirm Password",value:this.state.password2,name:"password2",onChange:this.onChange}),e.password2&&r.a.createElement("div",{className:"invalid-feedback"},e.password2)),r.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),a}(n.Component),W=Object(v.b)(function(e){return{auth:e.auth,errors:e.errors}},{registerUser:function(e,a){return function(t){d.a.post("/api/users/register",e).then(function(e){return a.push("/upload")}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}}})(Object(c.d)(z)),X=function(e){function a(){var e;return Object(S.a)(this,a),(e=Object(x.a)(this,Object(T.a)(a).call(this))).state={regNo:"",password:"",errors:{}},e.onChange=e.onChange.bind(Object(I.a)(e)),e.onSubmit=e.onSubmit.bind(Object(I.a)(e)),e}return Object(R.a)(a,e),Object(C.a)(a,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated&&this.props.history.push("/dashboard")}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard"),e.errors&&this.setState({errors:e.errors})}},{key:"onSubmit",value:function(e){e.preventDefault();var a={regNo:this.state.regNo,password:this.state.password};this.props.loginUser(a)}},{key:"onChange",value:function(e){this.setState(Object(M.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 m-auto"},r.a.createElement("h1",{className:"display-4 text-center"},"Log In"),r.a.createElement("p",{className:"lead text-center"},"Sign in to your Hostel Management account"),r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:G()("form-control form-control-lg",{"is-invalid":e.regNo}),placeholder:"Registration No: (S/00/000)",name:"regNo",value:this.state.regNo,onChange:this.onChange}),e.regNo&&r.a.createElement("div",{className:"invalid-feedback"},e.regNo)),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"password",className:G()("form-control form-control-lg",{"is-invalid":e.password}),placeholder:"Password",name:"password",value:this.state.password,onChange:this.onChange}),e.password&&r.a.createElement("div",{className:"invalid-feedback"},e.password)),r.a.createElement("input",{type:"submit",className:"btn btn-info btn-block mt-4"}))))))}}]),a}(n.Component),B=Object(v.b)(function(e){return{auth:e.auth,errors:e.errors}},{loginUser:function(e){return function(a){d.a.post("/api/users/login",e).then(function(e){var t=e.data.token;localStorage.setItem("jwtToken",t),p(t);var n=m()(t);a(h(n))}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(X),J=t(31),V=t.n(J),Y=t(45),K=t(21),$=function(e){var a=e.msg;return r.a.createElement("div",null,r.a.createElement("div",{class:"alert alert-warning alert-dismissible fade show",role:"alert"},a,r.a.createElement("button",{type:"button",class:"close","data-dismiss":"alert","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))))},q=function(e){var a=e.percentage;return r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-striped bg-success",role:"progressbar",style:{width:"".concat(a,"%")}},a,"%"))},Q=Object(c.d)(function(){var e=Object(n.useState)(""),a=Object(K.a)(e,2),t=a[0],s=a[1],l=Object(n.useState)("Choose File"),o=Object(K.a)(l,2),c=o[0],i=o[1],m=Object(n.useState)({}),u=Object(K.a)(m,2),p=u[0],h=u[1],g=Object(n.useState)(""),v=Object(K.a)(g,2),f=v[0],b=v[1],N=Object(n.useState)(0),E=Object(K.a)(N,2),y=E[0],w=E[1],k=function(){var e=Object(Y.a)(V.a.mark(function e(a){var n,r,s,l,o;return V.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),(n=new FormData).append("file",t),e.prev=3,e.next=6,d.a.post("/api/users/upload",n,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){w(parseInt(Math.round(100*e.loaded/e.total)))}});case 6:r=e.sent,s=r.data,l=s.fileName,o=s.filePath,h({fileName:l,filePath:o}),b("File Uploaded,Please Click Register"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),500===e.t0.response.status?b("There was a problem with the server"):b(e.t0.response.data.msg);case 15:case"end":return e.stop()}},e,null,[[3,12]])}));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"container mt-4"},r.a.createElement("h4",{className:"display-4 text-center mb-4"},r.a.createElement("i",{className:"fas fa-user-circle"})," Profile Picture")),f?r.a.createElement($,{msg:f}):null,r.a.createElement("form",{onSubmit:k},r.a.createElement("div",{className:"custom-file mb-4"},r.a.createElement("input",{type:"file",className:"custom-file-input",id:"customFile",onChange:function(e){s(e.target.files[0]),i(e.target.files[0].name)}}),r.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},c),r.a.createElement("small",{className:"form-text text-muted"},"Please, Upload your photo")),r.a.createElement(q,{percentage:y}),r.a.createElement("input",{type:"submit",value:"Upload",className:"btn btn-primary btn-block mt-4"})),p?r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col-md-6 m-auto"},r.a.createElement("img",{style:{width:"100%"},className:"rounded img-thumbnail",src:p.filePath,alt:""}),r.a.createElement("h3",{className:"text-center"},p.fileName))):null,r.a.createElement("button",{color:"primary",className:"btn btn-primary btn-block mt-4 px-4"},"Register"))});t(91);if(localStorage.jwtToken){p(localStorage.jwtToken);var Z=m()(localStorage.jwtToken);j.dispatch(h(Z));var ee=Date.now()/1e3;Z.exp<ee&&(j.dispatch(g()),window.location.href="/")}var ae=function(){return r.a.createElement(v.a,{store:j},r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(U,null),r.a.createElement(c.a,{exact:!0,path:["/","/Hostel-Management-System"],component:L}),r.a.createElement("div",{className:"container"},r.a.createElement(c.a,{exact:!0,path:"/register",component:W}),r.a.createElement(c.a,{exact:!0,path:"/upload",component:Q}),r.a.createElement(c.a,{exact:!0,path:"/login",component:B})),r.a.createElement(P,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.001aed90.chunk.js.map