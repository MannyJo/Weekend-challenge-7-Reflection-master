(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5351:function(e,t,a){e.exports=a(5551)},5356:function(e,t,a){},5358:function(e,t,a){},5551:function(e,t,a){"use strict";a.r(t);var n=a(48),l=a(0),r=a.n(l),c=a(28),o=a.n(c),i=(a(5356),a(15)),s=a(16),u=a(18),m=a(17),d=a(19),p=a(5553),h=a(5552),E=(a(5358),a(5554)),b=a(20),f=a(35),g=a.n(f),y=a(36),v=a.n(y),O=a(29),w=a.n(O),j=a(22),N=a.n(j),k=a(45),C=a.n(k),_=a(39),D=a.n(_),x=a(9),P=a.n(x),A=a(37),S=a.n(A),L=a(23),T=a.n(L),I=a(32),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={feeling_level:""},a.handleChange=function(e){a.setState({feeling_level:e.target.value})},a.handleNextClick=function(e){e.preventDefault(),a.state.feeling_level?(a.props.dispatch({type:"ADD_FEELING_LEVEL",payload:Number(a.state.feeling_level)}),a.props.history.push("/2")):a.props.dispatch({type:"OPEN_DIALOG",payload:{open:!0,title:"You didn't choose anything.",content:"Please choose one of the buttons."}})},a.componentDidMount=function(){a.props.dispatch({type:"STEPPER_0"})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(P.a,{container:!0},r.a.createElement(P.a,{item:!0,xs:2}),r.a.createElement(P.a,{item:!0,xs:8},r.a.createElement("form",{onSubmit:this.handleNextClick,className:"form"},r.a.createElement(g.a,null,r.a.createElement(v.a,null,r.a.createElement(w.a,{className:"question",variant:"h5",component:"h2"},r.a.createElement("b",null,"How are you feeling today?")),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement(D.a,{row:!0},r.a.createElement(P.a,{container:!0,alignItems:"center"},r.a.createElement(P.a,{item:!0,xs:2},r.a.createElement("span",{className:"caption"},"Really Bad")),r.a.createElement(P.a,{item:!0,xs:8},r.a.createElement(C.a,{"aria-label":"feeling",name:"feeling",value:this.state.feeling_level,onChange:this.handleChange,style:{display:"flex"},row:!0},r.a.createElement(N.a,{value:"1",name:"radio-button","aria-label":"1",style:{width:"20%",padding:"0"}}),r.a.createElement(N.a,{value:"2",name:"radio-button","aria-label":"2",style:{width:"20%",padding:"0"}}),r.a.createElement(N.a,{value:"3",name:"radio-button","aria-label":"3",style:{width:"20%",padding:"0"}}),r.a.createElement(N.a,{value:"4",name:"radio-button","aria-label":"4",style:{width:"20%",padding:"0"}}),r.a.createElement(N.a,{value:"5",name:"radio-button","aria-label":"5",style:{width:"20%",padding:"0"}}))),r.a.createElement(P.a,{item:!0,xs:2},r.a.createElement("span",{className:"caption"},"Awesome!!"))))),r.a.createElement(S.a,{className:"nextButton"},r.a.createElement(T.a,{color:"primary",type:"submit"},"Next ",r.a.createElement(I.b,null))))))))}}]),t}(l.Component),F=Object(E.a)(Object(b.b)()(R)),G=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={understanding_level:""},a.handleChange=function(e){a.setState({understanding_level:e.target.value})},a.handleNextClick=function(e){e.preventDefault(),a.state.understanding_level?(a.props.dispatch({type:"ADD_UNDERSTANDING_LEVEL",payload:Number(a.state.understanding_level)}),a.props.history.push("/3")):a.props.dispatch({type:"OPEN_DIALOG",payload:{open:!0,title:"You didn't choose anything.",content:"Please choose one of the buttons."}})},a.componentDidMount=function(){a.props.dispatch({type:"STEPPER_1"})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(P.a,{container:!0},r.a.createElement(P.a,{item:!0,xs:2}),r.a.createElement(P.a,{item:!0,xs:8},r.a.createElement("form",{onSubmit:this.handleNextClick,className:"form"},r.a.createElement(g.a,null,r.a.createElement(v.a,null,r.a.createElement(w.a,{className:"question",variant:"h5",component:"h2"},r.a.createElement("b",null,"How well are you understanding the content?")),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement(D.a,{row:!0},r.a.createElement(P.a,{container:!0,alignItems:"center"},r.a.createElement(P.a,{item:!0,xs:2},r.a.createElement("span",{className:"caption"},"Really Bad")),r.a.createElement(P.a,{item:!0,xs:8},r.a.createElement(C.a,{"aria-label":"understanding",name:"understanding",value:this.state.understanding_level,onChange:this.handleChange,style:{display:"flex"},row:!0},r.a.createElement(N.a,{value:"1",name:"radio-button","aria-label":"1",style:{width:"20%",padding:"0"}}),r.a.createElement(N.a,{value:"2",name:"radio-button","aria-label":"2",style:{width:"20%",padding:"0"}}),r.a.createElement(N.a,{value:"3",name:"radio-button","aria-label":"3",style:{width:"20%",padding:"0"}}),r.a.createElement(N.a,{value:"4",name:"radio-button","aria-label":"4",style:{width:"20%",padding:"0"}}),r.a.createElement(N.a,{value:"5",name:"radio-button","aria-label":"5",style:{width:"20%",padding:"0"}}))),r.a.createElement(P.a,{item:!0,xs:2},r.a.createElement("span",{className:"caption"},"Awesome!!"))))),r.a.createElement(S.a,{className:"nextButton"},r.a.createElement(T.a,{color:"primary",type:"submit"},"Next ",r.a.createElement(I.b,null))))))))}}]),t}(l.Component),B=Object(E.a)(Object(b.b)()(G)),W=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={support_level:""},a.handleChange=function(e){a.setState({support_level:e.target.value})},a.handleNextClick=function(e){e.preventDefault(),a.state.support_level?(a.props.dispatch({type:"ADD_SUPPORT_LEVEL",payload:Number(a.state.support_level)}),a.props.history.push("/4")):a.props.dispatch({type:"OPEN_DIALOG",payload:{open:!0,title:"You didn't choose anything.",content:"Please choose one of the buttons."}})},a.componentDidMount=function(){a.props.dispatch({type:"STEPPER_2"})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(P.a,{container:!0},r.a.createElement(P.a,{item:!0,xs:2}),r.a.createElement(P.a,{item:!0,xs:8},r.a.createElement("form",{onSubmit:this.handleNextClick,className:"form"},r.a.createElement(g.a,null,r.a.createElement(v.a,null,r.a.createElement(w.a,{className:"question",variant:"h5",component:"h2"},r.a.createElement("b",null,"How well are you being supported?")),r.a.createElement("hr",null),r.a.createElement("br",null),r.a.createElement(D.a,{row:!0},r.a.createElement(P.a,{container:!0,alignItems:"center"},r.a.createElement(P.a,{item:!0,xs:2},r.a.createElement("span",{className:"caption"},"Really Bad")),r.a.createElement(P.a,{item:!0,xs:8},r.a.createElement(C.a,{"aria-label":"support",name:"support",value:this.state.support_level,onChange:this.handleChange,style:{display:"flex"},row:!0},r.a.createElement(N.a,{value:"1",name:"radio-button","aria-label":"1",style:{width:"20%",padding:"0"}}),r.a.createElement(N.a,{value:"2",name:"radio-button","aria-label":"2",style:{width:"20%",padding:"0"}}),r.a.createElement(N.a,{value:"3",name:"radio-button","aria-label":"3",style:{width:"20%",padding:"0"}}),r.a.createElement(N.a,{value:"4",name:"radio-button","aria-label":"4",style:{width:"20%",padding:"0"}}),r.a.createElement(N.a,{value:"5",name:"radio-button","aria-label":"5",style:{width:"20%",padding:"0"}}))),r.a.createElement(P.a,{item:!0,xs:2},r.a.createElement("span",{className:"caption"},"Awesome!!"))))),r.a.createElement(S.a,{className:"nextButton"},r.a.createElement(T.a,{color:"primary",type:"submit"},"Next ",r.a.createElement(I.b,null))))))))}}]),t}(l.Component),U=Object(E.a)(Object(b.b)()(W)),M=a(47),V=a.n(M),H=a(124),q=a.n(H),Y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={comment:""},a.handleChange=function(e){a.setState({comment:e.target.value})},a.handleNextClick=function(e){e.preventDefault(),V()({method:"POST",url:"/feedback",data:Object(n.a)({},a.props.feedback,{comment:a.state.comment})}).then(function(){a.props.dispatch({type:"RESET_FEEDBACK"}),a.props.history.push("/5")}).catch(function(e){a.props.dispatch({type:"OPEN_DIALOG",payload:{open:!0,title:"Error with storing feedback",content:""}})})},a.componentDidMount=function(){a.props.dispatch({type:"STEPPER_3"})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(P.a,{container:!0},r.a.createElement(P.a,{item:!0,xs:2}),r.a.createElement(P.a,{item:!0,xs:8},r.a.createElement("form",{onSubmit:this.handleNextClick,className:"form"},r.a.createElement(g.a,null,r.a.createElement(v.a,null,r.a.createElement(w.a,{className:"question",variant:"h5",component:"h2"},r.a.createElement("b",null,"Any Comments you want to leave?")),r.a.createElement(q.a,{id:"standard-full-width",label:"Comment",style:{margin:8},placeholder:"Write here",helperText:"Write anything what you want",value:this.state.comment,onChange:this.handleChange,fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0}})),r.a.createElement(S.a,{className:"nextButton"},r.a.createElement(T.a,{color:"primary",type:"submit"},"Send\xa0\xa0",r.a.createElement(I.c,null))))))))}}]),t}(l.Component),K=Object(E.a)(Object(b.b)(function(e){return{feedback:e.feedback}})(Y)),J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).goToFirstPage=function(){a.props.history.push("/")},a.componentDidMount=function(){a.props.dispatch({type:"STEPPER_FINISh"})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"successDiv"},"THANK YOU !!"),r.a.createElement(T.a,{variant:"extendedFab",color:"primary",onClick:this.goToFirstPage},"Leave New Feedback"))}}]),t}(l.Component),Q=Object(E.a)(Object(b.b)()(J)),X=a(125),$=a.n(X),z=a(127),Z=a.n(z),ee=a(25),te=a.n(ee),ae=a(126),ne=a.n(ae),le=a(78),re=a.n(le),ce=a(128),oe=a.n(ce),ie=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={feedbackList:[]},a.getFeedback=function(){V()({method:"GET",url:"/feedback"}).then(function(e){a.setState({feedbackList:e.data})}).catch(function(e){a.props.dispatch({type:"OPEN_DIALOG",payload:{open:!0,title:"Error with getting feedback",content:""}})})},a.handleDeleteClick=function(e){return function(){window.confirm("Are you sure?")&&V()({method:"DELETE",url:"/feedback/delete/".concat(e)}).then(function(){a.getFeedback()}).catch(function(e){a.props.dispatch({type:"OPEN_DIALOG",payload:{open:!0,title:"Error with deleting feedback",content:""}})})}},a.handleChange=function(e){return function(t){V()({method:"PUT",url:"/feedback/update",data:{id:e,flagged:t.target.checked}}).then(function(){a.getFeedback()}).catch(function(e){a.props.dispatch({type:"OPEN_DIALOG",payload:{open:!0,title:"Error with updating further review flag",content:""}})})}},a.componentDidMount=function(){a.getFeedback()},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(P.a,{container:!0},r.a.createElement(P.a,{item:!0,md:2}),r.a.createElement(P.a,{item:!0,xs:12,md:8},r.a.createElement($.a,{style:{overflowX:"auto",backgroundColor:"white"}},r.a.createElement(ne.a,null,r.a.createElement(re.a,{className:"adminTableHeader"},r.a.createElement(te.a,null,"Further Review"),r.a.createElement(te.a,{numeric:!0},"Feeling"),r.a.createElement(te.a,{numeric:!0},"Comprehension"),r.a.createElement(te.a,{numeric:!0},"Support"),r.a.createElement(te.a,null,"Comments"),r.a.createElement(te.a,null,"Delete"))),r.a.createElement(Z.a,{className:"adminTableBody"},this.state.feedbackList.map(function(t){return r.a.createElement(re.a,{key:t.id},r.a.createElement(te.a,null,r.a.createElement(oe.a,{checked:t.flagged,onChange:e.handleChange(t.id),value:"flagged"})),r.a.createElement(te.a,{numeric:!0,component:"th",scope:"row"},t.feeling),r.a.createElement(te.a,{numeric:!0},t.understanding),r.a.createElement(te.a,{numeric:!0},t.support),r.a.createElement(te.a,null,t.comments),r.a.createElement(te.a,null,r.a.createElement(T.a,{color:"secondary",onClick:e.handleDeleteClick(t.id)},r.a.createElement(I.a,null))))})))),r.a.createElement(P.a,{item:!0,md:2})))}}]),t}(l.Component),se=Object(E.a)(Object(b.b)()(ie)),ue=a(129),me=a.n(ue),de=a(130),pe=a.n(de),he=a(131),Ee=a.n(he),be=["Feeling","Comprehension","Support","Comment"],fe=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(me.a,{style:{backgroundColor:"rgba(0, 0, 0, 0.0)"},activeStep:this.props.stepper,alternativeLabel:!0},be.map(function(t,a){return r.a.createElement(pe.a,{key:t},r.a.createElement(Ee.a,null,e.props.stepper>=a?r.a.createElement("span",{style:{color:"#3d4fbb"}},t):r.a.createElement("span",null,t)))})))}}]),t}(l.Component),ge=Object(b.b)(function(e){return{stepper:e.stepper}})(fe),ye=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,window.location.hash.includes("admin")||window.location.hash.includes("Admin")?r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Feedback Results!")):r.a.createElement("div",null,r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Feedback!"),r.a.createElement("h4",null,r.a.createElement("i",null,"Don't forget it!"))),r.a.createElement(ge,null)))}}]),t}(l.Component),ve=a(132),Oe=a.n(ve),we=a(133),je=a.n(we),Ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).handleClose=function(){a.props.dispatch({type:"OPEN_DIALOG",payload:{open:!1}})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(Oe.a,{open:this.props.dialogOpen.open,onClose:this.handleClose,"aria-labelledby":"responsive-dialog-title"},r.a.createElement(w.a,{className:"dialogTitle",variant:"h5",component:"h2"},this.props.dialogOpen.title),r.a.createElement(w.a,{className:"dialogTitle",variant:"inherit",color:"textSecondary"},this.props.dialogOpen.content),r.a.createElement(je.a,null,r.a.createElement(T.a,{onClick:this.handleClose,color:"primary",autoFocus:!0},"Okay")))}}]),t}(l.Component),ke=Object(b.b)(function(e){return{dialogOpen:e.dialogOpen}})(Ne),Ce=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(ye,null),r.a.createElement(h.a,{exact:!0,path:"/",component:F}),r.a.createElement(h.a,{path:"/2",component:B}),r.a.createElement(h.a,{path:"/3",component:U}),r.a.createElement(h.a,{path:"/4",component:K}),r.a.createElement(h.a,{path:"/5",component:Q}),r.a.createElement(h.a,{path:"/admin",component:se}),r.a.createElement(ke,null)))}}]),t}(l.Component),_e=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function De(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var xe=a(46),Pe=a(134),Ae=a.n(Pe),Se=Object(xe.c)({feedback:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FEELING_LEVEL":return Object(n.a)({},e,{feeling:t.payload});case"ADD_UNDERSTANDING_LEVEL":return Object(n.a)({},e,{understanding:t.payload});case"ADD_SUPPORT_LEVEL":return Object(n.a)({},e,{support:t.payload});case"RESET_FEEDBACK":return{};default:return e}},dialogOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_DIALOG":return t.payload;default:return e}},stepper:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch((arguments.length>1?arguments[1]:void 0).type){case"STEPPER_0":return 0;case"STEPPER_1":return 1;case"STEPPER_2":return 2;case"STEPPER_3":return 3;case"STEPPER_FINISh":return 4;default:return e}}}),Le=Object(xe.d)(Se,Object(xe.a)(Ae.a));o.a.render(r.a.createElement(b.a,{store:Le},r.a.createElement(Ce,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");_e?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):De(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):De(e)})}}()}},[[5351,2,1]]]);
//# sourceMappingURL=main.a4ab120b.chunk.js.map