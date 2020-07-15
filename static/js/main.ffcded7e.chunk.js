(this["webpackJsonptest-pik"]=this["webpackJsonptest-pik"]||[]).push([[0],{59:function(e,a,t){e.exports=t(69)},64:function(e,a,t){},69:function(e,a,t){"use strict";t.r(a);var r=t(0),l=t.n(r),n=t(54),s=t.n(n),i=(t(64),t(58)),m=t(35),c=t(46),o=t(44),u=t.n(o),d=function(e){var a=e.id,t=e.className,r=e.label,n=e.error,s=Object(c.a)(e,["id","className","label","error"]),i=u()("input",t,{error:n});return l.a.createElement("div",{className:"input-field"},l.a.createElement("input",Object.assign({name:a,id:a,className:i},s)),r&&l.a.createElement("label",{className:"input-label",htmlFor:a},r),n&&l.a.createElement("span",{className:"message-error"},n))};d.defaultProps={className:"",label:"",error:""};var b=d,h=function(e){var a=e.children,t=e.onClick,r=e.className,n=e.disabled,s=e.active,i=Object(c.a)(e,["children","onClick","className","disabled","active"]),m=u()("btn",r,{active:s});return l.a.createElement("button",Object.assign({className:m,disabled:n,onClick:function(e){return n?e.preventDefault():t(e)}},i),a)};h.defaultProps={children:"Default button",onClick:function(){},className:"",disabled:!1,active:!1};var p=h;var g=function(){var e=Object(i.a)({initialValues:{name:"\u0412\u0430\u0441\u044f",email:"",birthdate:"",message:"\u041f\u0440\u0438\u0432\u0435\u0442, \u041f\u0435\u0442\u044f!"},validationSchema:m.a().shape({name:m.b().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),email:m.b().email("\u041d\u0435\u043a\u043a\u043e\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email-\u0430\u0434\u0440\u0435\u0441").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),birthdate:m.b().matches(/^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{2})$/,"\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),message:m.b().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")}),onSubmit:function(e){console.log(e)}});return l.a.createElement(l.a.Fragment,null,l.a.createElement("form",{className:"form",onSubmit:e.handleSubmit},l.a.createElement("h2",{className:"form-title"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"),l.a.createElement("p",{className:"form-subtitle"},"\u0410\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0440\u0430\u0441\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u044e\u0442\u0441\u044f"),l.a.createElement("div",{className:"form-group"},l.a.createElement(b,{name:"name",id:"name",label:"\u0418\u043c\u044f",className:"input",placeholder:"\xa0",type:"text",value:e.values.name,onChange:e.handleChange,error:e.touched.name&&e.errors.name}),l.a.createElement(b,{name:"email",id:"email",label:"Email",className:e.errors.email?"input-error":"input",placeholder:"\xa0",type:"email",value:e.values.email,onChange:e.handleChange,error:e.touched.email&&e.errors.email}),l.a.createElement(b,{name:"birthdate",id:"birthdate",label:"\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f",className:e.errors.birthdate?"input-error":"input",placeholder:"\xa0",type:"text",value:e.values.birthdate,onChange:e.handleChange,error:e.touched.birthdate&&e.errors.birthdate})),l.a.createElement(b,{name:"message",id:"message",label:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",className:e.errors.message?"input-error":"input",placeholder:"\xa0",type:"text",value:e.values.message,onChange:e.handleChange,error:e.touched.message&&e.errors.message}),l.a.createElement("div",{className:"btn-container"},l.a.createElement(p,{className:"btn btn-clear",onClick:e.handleReset},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"),l.a.createElement(p,{className:"btn",type:"submit",disabled:e.isSubmitting||!e.dirty},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))))};s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.ffcded7e.chunk.js.map