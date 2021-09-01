(this.webpackJsonpOpenCV=this.webpackJsonpOpenCV||[]).push([[0],{211:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(16),a=c.n(n),l=c(24),i=(c(97),function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,216)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),s(e),n(e),a(e),l(e)}))}),r=c(20),o=function(e,t){switch(t.type){case"UPDATE_DATA":return{data:e.data};case"UPDATE_SECTION_INDEX":var c=e.data;return c.sectionIndex=t.payload,{data:c};case"UPDATE_TEMPLATE_INDEX":var s=e.data;return s.templateIndex=t.payload,{data:s};case"UPDATE_SETTINGS_MODAL":var n=e.data;return n.settingsModal=t.payload,{data:n};default:return e}},j=c(1),d={data:{personal_details:{text:"",settings:{fontSize:"text-2xl",textPosition:"justify-start",textColor:"#000000"}},education:{sections:[],settings:{fontSize:"text-lg",textPosition:"justify-start",textColor:"#000000"}},experience:{sections:[],settings:{fontSize:"text-lg",textPosition:"justify-start",textColor:"#000000"}},projects:{text:"",sections:[],settings:{fontSize:"text-lg",textPosition:"justify-start",textColor:"#000000"}},languages:{sections:[],settings:{fontSize:"text-lg",textPosition:"justify-start",textColor:"#000000"}},contact:{sections:[],settings:{fontSize:"text-lg",textPosition:"justify-start",textColor:"#000000"}},sectionIndex:"",settingsModal:!1,templateIndex:1}},x=Object(s.createContext)(d),b=function(e){var t=Object.assign({},e),c=Object(s.useReducer)(o,d),n=Object(r.a)(c,2),a=n[0],l=n[1];return Object(j.jsx)(x.Provider,{value:{data:a.data,updateData:function(e){l({type:"UPDATE_DATA",payload:e})},updateIndex:function(e){l({type:"UPDATE_SECTION_INDEX",payload:e})},updateSettingsModal:function(){l({type:"UPDATE_SETTINGS_MODAL",payload:!a.data.settingsModal})},updateTempIndex:function(e){l({type:"UPDATE_TEMPLATE_INDEX",payload:e})},sectionIndex:a.data.sectionIndex,settingsModal:a.data.settingsModal,templateIndex:a.data.templateIndex},children:t.children})},u=(c(99),function(){var e=Object(s.useContext)(x),t=e.data,c=e.updateData,n=e.sectionIndex;return{AddExperience:function(){t[n].sections.push({from:"",to:"",text:""}),c(t)},AddLanguage:function(){t[n].sections.push(""),c(t)},AddProject:function(){t[n].sections.push({projectName:"",projectDescription:""}),c(t)},AddEducation:function(){t[n].sections.push({from:"",to:"",text:""}),c(t)},UpdateLanguage:function(e,s){t[n].sections[s]=e.target.value,c(t)},UpdateProjectName:function(e,s){t[n].sections[s].projectName=e.target.value,c(t)},UpdateProjectDescription:function(e,s){t[n].sections[s].projectDescription=e.target.value,c(t)},ModifyText:function(e){t[n].text=e.target.value,c(t)},UpdateFromSection:function(e,s){t[n].sections[s].from=e.target.value,c(t),console.log(t)},UpdateToSection:function(e,s){t[n].sections[s].to=e.target.value,c(t)},UpdateTextSection:function(e,s){t[n].sections[s].text=e.target.value,c(t)},DeleteSection:function(e){console.log(e),t[n].sections.splice(e,1),c(t)},AddContact:function(){t[n].sections.push({title:"",details:""}),c(t)},UpdateContactTitleSection:function(e,s){t[n].sections[s].title=e.target.value,c(t)},UpdateContactDetailsSection:function(e,s){t[n].sections[s].details=e.target.value,c(t)},CheckSections:function(e){var c=!1;return t[e].sections.map((function(e,t){c||""!==e.to&&""!==e.from&&""!==e.text&&(c=!0)})),c},CheckProjectsStatus:function(){var e=!1;return t.projects.sections.map((function(t,c){e||""!==t.projectName&&""!==t.projectDescription&&(e=!0)})),e},CheckSectionTextStatus:function(e){var c=!1;return t[e].sections.map((function(e,t){c||""===e||(c=!0)})),c}}}),p=function(e){var t=Object.assign({},e),c=Object(s.useContext)(x).data;return(0,u().CheckSectionTextStatus)("contact")?Object(j.jsxs)("div",{className:"flex-col",children:[t.showTitle&&Object(j.jsx)("div",{children:"Contact"}),c.contact.sections.map((function(e,t){return Object(j.jsx)("div",{style:{color:c.contact.settings.textColor},className:c.contact.settings.fontSize+" flex "+c.contact.settings.textPosition,children:Object(j.jsx)("div",{className:"flex-col gap-y-3",children:Object(j.jsxs)("div",{className:"flex",children:[Object(j.jsx)("span",{className:"",children:e.title}),""!==e.title&&Object(j.jsx)("span",{children:": "}),Object(j.jsx)("span",{className:"",children:e.details})]})})},"educ"+t)}))]}):Object(j.jsx)(j.Fragment,{})},f=function(){var e=Object(s.useContext)(x).data;return(0,u().CheckSections)("education")?Object(j.jsxs)("div",{className:"flex-col",children:[Object(j.jsx)("div",{children:"Education"}),e.education.sections.map((function(t,c){return Object(j.jsxs)("div",{style:{color:e.education.settings.textColor},className:e.education.settings.fontSize+" flex "+e.education.settings.textPosition,children:[Object(j.jsxs)("div",{className:"mr-1",children:[c+1,"."]}),Object(j.jsxs)("div",{className:"flex-col gap-y-3",children:[Object(j.jsx)("div",{className:"flex",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"",children:t.from}),""!==t.from&&Object(j.jsx)("span",{children:" into "}),Object(j.jsx)("span",{className:"",children:t.to})]})}),Object(j.jsx)("div",{children:Object(j.jsx)("span",{className:"",children:t.text})})]})]},"educ"+c)}))]}):Object(j.jsx)(j.Fragment,{})},O=function(){var e=Object(s.useContext)(x).data;return(0,u().CheckSections)("experience")?Object(j.jsxs)("div",{className:"flex-col",children:[Object(j.jsx)("div",{children:"Experience"}),e.experience.sections.map((function(t,c){return Object(j.jsxs)("div",{style:{color:e.experience.settings.textColor},className:e.experience.settings.fontSize+" flex "+e.experience.settings.textPosition,children:[Object(j.jsxs)("div",{className:"mr-1",children:[c+1,"."]}),Object(j.jsxs)("div",{className:"flex-col gap-y-3",children:[Object(j.jsx)("div",{className:"flex",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"",children:t.from}),Object(j.jsx)("span",{children:" into "}),Object(j.jsx)("span",{className:"",children:t.to})]})}),Object(j.jsx)("div",{children:Object(j.jsx)("span",{className:"",children:t.text})})]})]},"ex"+c)}))]}):Object(j.jsx)(j.Fragment,{})},m=function(){var e=Object(s.useContext)(x).data;return(0,u().CheckSectionTextStatus)("languages")?Object(j.jsxs)("div",{className:"flex-col",children:[Object(j.jsx)("div",{children:"Languages"}),e.languages.sections.map((function(t,c){return Object(j.jsxs)("div",{style:{color:e.projects.settings.textColor},className:e.projects.settings.fontSize+" flex "+e.projects.settings.textPosition,children:[Object(j.jsxs)("div",{className:"mr-1",children:[c+1,"."]}),Object(j.jsx)("div",{className:"flex-col gap-y-3",children:Object(j.jsx)("div",{className:"flex-col",children:t})})]},"language"+c)}))]}):Object(j.jsx)(j.Fragment,{})},g=function(){var e=Object(s.useContext)(x).data;return""!==e.personal_details.text?Object(j.jsxs)("div",{className:"flex-col",children:[Object(j.jsx)("div",{children:"Personal Profile"}),Object(j.jsx)("div",{style:{color:e.personal_details.settings.textColor},className:e.personal_details.settings.fontSize+" flex "+e.personal_details.settings.textPosition,children:e.personal_details.text})]}):Object(j.jsx)(j.Fragment,{})},h=function(){var e=Object(s.useContext)(x).data;return(0,u().CheckProjectsStatus)()?Object(j.jsxs)("div",{className:"flex-col",children:[Object(j.jsx)("div",{children:"Projects"}),Object(j.jsx)("div",{children:e.projects.text}),e.projects.sections.map((function(t,c){return Object(j.jsxs)("div",{style:{color:e.projects.settings.textColor},className:e.projects.settings.fontSize+" flex "+e.projects.settings.textPosition,children:[Object(j.jsxs)("div",{className:"mr-1",children:[c+1,"."]}),Object(j.jsx)("div",{className:"flex-col gap-y-3",children:Object(j.jsxs)("div",{className:"flex-col",children:[Object(j.jsx)("span",{className:"",children:t.projectName}),Object(j.jsx)("span",{className:"",children:t.projectDescription})]})})]},"project"+c)}))]}):Object(j.jsx)(j.Fragment,{})},v=function(e){var t=Object.assign({},e);return Object(j.jsxs)("div",{className:"grid grid-cols-12",children:[Object(j.jsxs)("div",{className:"col-span-2 h-screen text-white bg-gray-700",children:[t.debug?Object(j.jsx)("div",{className:"p-3 flex-col",children:Object(j.jsx)(p,{showTitle:!0})}):Object(j.jsxs)("div",{className:"p-3 flex-col",children:[Object(j.jsx)("span",{children:"Contact"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"})]}),t.debug?Object(j.jsx)("div",{className:"p-3 flex-col",children:Object(j.jsx)(m,{})}):Object(j.jsxs)("div",{className:"p-3 flex-col",children:[Object(j.jsx)("span",{children:"Langauges"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"})]})]}),Object(j.jsxs)("div",{className:"col-span-10 h-screen text-black",children:[t.debug?Object(j.jsx)("div",{className:"p-3 flex-col",children:Object(j.jsx)(g,{})}):Object(j.jsxs)("div",{className:"p-3 flex-col",children:[Object(j.jsx)("span",{children:"Personal Profile"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"})]}),t.debug?Object(j.jsx)("div",{className:"p-3 flex-col",children:Object(j.jsx)(f,{})}):Object(j.jsxs)("div",{className:"p-3 flex-col",children:[Object(j.jsx)("span",{children:"Education"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"})]}),t.debug?Object(j.jsx)("div",{className:"p-3 flex-col",children:Object(j.jsx)(h,{})}):Object(j.jsxs)("div",{className:"p-3 flex-col",children:[Object(j.jsx)("span",{children:"Projects"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"})]}),t.debug?Object(j.jsx)("div",{className:"p-3 flex-col",children:Object(j.jsx)(O,{})}):Object(j.jsxs)("div",{className:"p-3 flex-col",children:[Object(j.jsx)("span",{children:"Experience"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"})]})]})]})},N=function(e){var t=Object.assign({},e);return Object(j.jsxs)("div",{className:"flex-col",children:[t.debug?Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsx)(p,{})}):Object(j.jsxs)("div",{className:"bg-gray-500  flex-col p-3",children:[Object(j.jsx)("div",{className:"flex justify-center items-center",children:Object(j.jsx)("div",{className:"w-1/2 p-3 bg-gray-400 mb-2"})}),Object(j.jsx)("div",{className:"flex justify-center items-center",children:Object(j.jsx)("div",{className:"w-1/2 p-3 bg-gray-400 mb-2"})}),Object(j.jsx)("div",{className:"flex justify-center items-center",children:Object(j.jsx)("div",{className:"w-1/2 p-3 bg-gray-400 mb-2"})})]}),t.debug?Object(j.jsx)("div",{className:"p-3",children:Object(j.jsx)(g,{})}):Object(j.jsxs)("div",{className:"p-3 flex-col",children:[Object(j.jsx)("span",{children:"Personal Profile"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"})]}),t.debug?Object(j.jsx)("div",{className:"p-3",children:Object(j.jsx)(f,{})}):Object(j.jsxs)("div",{className:"p-3 flex-col",children:[Object(j.jsx)("span",{children:"Education"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"})]}),t.debug?Object(j.jsx)("div",{className:"p-3",children:Object(j.jsx)(O,{})}):Object(j.jsxs)("div",{className:"p-3 flex-col",children:[Object(j.jsx)("span",{children:"Experience"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"})]}),t.debug?Object(j.jsx)("div",{className:"p-3",children:Object(j.jsx)(h,{})}):Object(j.jsxs)("div",{className:"p-3 flex-col",children:[Object(j.jsx)("span",{children:"Projects"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"})]}),t.debug?Object(j.jsx)("div",{className:"p-3",children:Object(j.jsx)(m,{})}):Object(j.jsxs)("div",{className:"p-3 flex-col",children:[Object(j.jsx)("span",{children:"Languages"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"}),Object(j.jsx)("div",{className:"w-full p-3 bg-gray-400 mb-2"})]})]})},y=function(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),c=t[0],n=t[1],a=[Object(j.jsx)(v,{}),Object(j.jsx)(N,{})],i=Object(s.useContext)(x).updateTempIndex;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsx)("h1",{children:"Choose Your CV Template"})}),Object(j.jsxs)("div",{className:"grid grid-cols-12",children:[Object(j.jsx)("div",{onClick:function(){c-1>=0&&n(c-1)},className:"col-span-2 cursor-pointer flex justify-center items-center",children:"<"}),Object(j.jsx)("div",{className:"col-span-8 cursor-pointer hover:bg-gray-300",children:Object(j.jsx)(l.b,{to:"/builder",onClick:function(){return i(c)},children:a[c]})}),Object(j.jsx)("div",{onClick:function(){c+1<a.length&&n(c+1)},className:"col-span-2 cursor-pointer flex justify-center items-center",children:">"})]})]})},C=c(215),w=function(e){var t=Object.assign({},e);return Object(j.jsxs)(C.a,{show:t.visible,onHide:function(){return t.onClick()},children:[Object(j.jsx)(C.a.Header,{closeButton:!0,children:t.Header}),Object(j.jsx)(C.a.Body,{children:t.Body})]})},S=function(){var e=Object(s.useContext)(x),t=e.data,c=e.sectionIndex,n=e.updateSettingsModal,a=u(),l=a.AddEducation,i=a.ModifyText,r=a.UpdateFromSection,o=a.UpdateToSection,d=a.UpdateTextSection,b=a.AddExperience,p=a.AddLanguage,f=a.UpdateLanguage,O=a.AddProject,m=a.UpdateProjectDescription,g=a.UpdateProjectName,h=a.DeleteSection,v=a.AddContact,N=a.UpdateContactTitleSection,y=a.UpdateContactDetailsSection;return{Header:Object(j.jsxs)("div",{className:"flex justify-between gap-x-0.5",children:[Object(j.jsxs)("span",{children:[" ",c.toUpperCase().replace("_"," ")]}),Object(j.jsx)("span",{children:Object(j.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 cursor-pointer",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",onClick:function(){return n()},children:[Object(j.jsx)("path",{strokeWidth:"2",d:"M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"}),Object(j.jsx)("path",{strokeWidth:"2",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"})]})})]}),Body:Object(j.jsx)("div",{className:"",children:"personal_details"===c?Object(j.jsx)("div",{className:"flex-col",children:Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsx)("textarea",{className:"flex h-52 w-full ",onChange:function(e){return i(e)},placeholder:"Type your profile",value:t[c].text})})}):"education"===c?Object(j.jsxs)("div",{className:"flex-col",children:[Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsx)("button",{onClick:function(){return l()},className:"rounded h-12 w-full p-2 cursor-pointer bg-indigo-500",children:"Add Education"})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"flex-wrap justify-center flex items-center",children:t[c].sections.map((function(e,t){return Object(j.jsxs)("div",{className:"flex-col w-full gap-y-6 pl-2 pt-5",children:[Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsxs)("span",{children:["Education ",t+1]})}),Object(j.jsxs)("div",{className:"border-2 p-2 w-full",children:[Object(j.jsxs)("div",{className:"flex-wrap w-full gap-x-3",children:[Object(j.jsx)("input",{onChange:function(e){return r(e,t)},className:"w-1/2 p-2 rounded",placeholder:"from",type:"date",value:e.from}),Object(j.jsx)("input",{className:"w-1/2 p-2 rounded",placeholder:"To",onChange:function(e){return o(e,t)},type:"date",value:e.to})]}),Object(j.jsx)("br",{}),Object(j.jsx)("textarea",{className:"rounded w-full p-2",placeholder:"Education",onChange:function(e){return d(e,t)},value:e.text})]}),Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsx)("button",{onClick:function(){return h(t)},className:"p-3 w-full cursor-pointer bg-red-500",children:"Delete"})})]})}))})]}):"experience"===c?Object(j.jsxs)("div",{className:"flex-col",children:[Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsx)("button",{onClick:function(){return b()},className:"rounded w-full h-12 p-2 cursor-pointer bg-indigo-500",children:"Add Experience"})}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"flex-wrap justify-center flex items-center",children:t[c].sections.map((function(e,t){return Object(j.jsxs)("div",{className:"flex-col gap-y-6 pl-2 pt-5",children:[Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsxs)("span",{children:["Experience ",t+1]})}),Object(j.jsxs)("div",{className:"border-2 p-2",children:[Object(j.jsxs)("div",{className:"flex-wrap gap-x-3",children:[Object(j.jsx)("input",{onChange:function(e){return r(e,t)},className:"w-1/2 p-2 rounded",placeholder:"from",type:"date",value:e.from}),Object(j.jsx)("input",{className:"w-1/2 p-2 rounded",placeholder:"To",onChange:function(e){return o(e,t)},type:"date",value:e.to})]}),Object(j.jsx)("br",{}),Object(j.jsx)("textarea",{className:"rounded w-full p-2",placeholder:"Experience",onChange:function(e){return d(e,t)},value:e.text})]}),Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsx)("button",{onClick:function(){return h(t)},className:"p-3 w-full cursor-pointer bg-red-500",children:"Delete"})})]})}))})]}):"languages"===c?Object(j.jsxs)("div",{className:"flex-col",children:[Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsx)("button",{onClick:function(){return p()},className:"rounded w-full h-12 p-2 cursor-pointer bg-indigo-500",children:"Add Language"})}),t[c].sections.map((function(e,t){return Object(j.jsx)("div",{className:"flex-col align-middle",children:Object(j.jsxs)("div",{className:"flex items-center",children:[Object(j.jsx)("input",{onChange:function(e){return f(e,t)},className:"p-2 mb-2 mt-2 w-full",value:e,placeholder:"Language "+(t+1)}),Object(j.jsx)("div",{onClick:function(){return h(t)},className:"rounded bg-red-500 cursor-pointer flex justify-center items-center w-10 h-10",children:"X"})]})},"lang"+t)}))]}):"projects"===c?Object(j.jsxs)("div",{className:"flex-col gap-y-2",children:[Object(j.jsxs)("div",{className:"flex-col flex justify-center",children:[Object(j.jsx)("input",{placeholder:"Projects Description ",onChange:function(e){return i(e)},className:"p-2"})," ",Object(j.jsx)("br",{}),Object(j.jsx)("button",{onClick:function(){return O()},className:"rounded h-12 p-2 cursor-pointer bg-indigo-500",children:"Add Project"})]}),Object(j.jsx)("div",{className:"p-3",children:t[c].sections.map((function(e,t){return Object(j.jsxs)("div",{className:"flex-col mt-3",children:[Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsxs)("span",{children:["Project ",t+1]})}),Object(j.jsxs)("div",{className:"border-2",children:[Object(j.jsx)("input",{onChange:function(e){return g(e,t)},placeholder:"Project Title",value:e.projectName,className:"p-2 mb-3 w-full"}),Object(j.jsx)("textarea",{className:"w-full p-2",placeholder:"Project "+(t+1),onChange:function(e){return m(e,t)},children:e.projectDescription})]}),Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsx)("button",{onClick:function(){return h(t)},className:"p-3 w-full cursor-pointer bg-red-500",children:"Delete"})})]},"project"+t)}))})]}):"contact"===c?Object(j.jsxs)("div",{className:"flex-col",children:[Object(j.jsx)("div",{className:"flex justify-center",children:Object(j.jsx)("button",{onClick:function(){return v()},className:"rounded cursor-pointer w-full h-12 p-2 bg-indigo-500",children:"Add Contact"})}),t[c].sections.map((function(e,t){return Object(j.jsx)("div",{className:"flex-col align-middle",children:Object(j.jsxs)("div",{className:"flex items-center",children:[Object(j.jsx)("input",{onChange:function(e){return N(e,t)},className:"p-2 mb-2 mt-2 w-full",value:e.title,placeholder:"Contact "+(t+1)}),Object(j.jsx)("input",{onChange:function(e){return y(e,t)},className:"p-2 mb-2 mt-2 w-full",value:e.details,placeholder:"Details"}),Object(j.jsx)("div",{onClick:function(){return h(t)},className:"rounded bg-red-500 flex justify-center cursor-pointer items-center w-10 h-10",children:"X"})]})},"contact"+t)}))]}):Object(j.jsx)(j.Fragment,{})})}},P=c(92),T=function(){var e=["text-sm","text-lg","text-2xl","text-3xl","text-4xl"],t=Object(s.useState)(!1),c=Object(r.a)(t,2),n=c[0],a=c[1],l=Object(s.useContext)(x),i=l.data,o=l.updateData,d=l.sectionIndex,b=Object(s.useState)({fontSize:"text-lg",textPosition:"justify-start",textColor:"#FFFFFF"}),u=Object(r.a)(b,2),p=u[0],f=u[1];Object(s.useEffect)((function(){""!==d&&f(i[d].settings)}),[d,i]);return{SettingsHeader:Object(j.jsxs)("div",{children:[d.toUpperCase().replace("_"," ")+" "," SETTINGS "]}),SettingsBody:Object(j.jsxs)("div",{className:"flex flex-col gap-x-10 ",children:[Object(j.jsxs)("div",{className:"flex flex-col h-14 justify-center items-center p-4",children:[Object(j.jsx)("span",{children:"Font Size"}),Object(j.jsxs)("div",{className:"flex w-full gap-x-3 justify-center items-center text-center",children:[Object(j.jsx)("input",{className:"cursor-pointer w-10 text-center "+(e.indexOf(p.fontSize)===e.length-1?"bg-gray-50":"bg-gray-400"),value:"+",onClick:function(){return i[d].settings.fontSize=e[e.indexOf(p.fontSize)+1],void o(i)},disabled:e.indexOf(p.fontSize)===e.length-1,readOnly:!0}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{className:"w-40 text-center "+p.fontSize,value:"Font Size",readOnly:!0})}),Object(j.jsx)("input",{className:"cursor-pointer w-10 text-center "+(0===e.indexOf(p.fontSize)?"bg-gray-50":"bg-gray-400"),value:"-",onClick:function(){return i[d].settings.fontSize=e[e.indexOf(p.fontSize)-1],void o(i)},disabled:0===e.indexOf(p.fontSize),readOnly:!0})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"flex w-full flex-col h-14 justify-center items-center p-4",children:[Object(j.jsx)("span",{children:"Position"}),Object(j.jsxs)("select",{value:p.textPosition,onChange:function(e){return t=e,i[d].settings.textPosition=t.target.value,void o(i);var t},children:[Object(j.jsx)("option",{value:"justify-start",children:"Left"}),Object(j.jsx)("option",{value:"justify-end",children:"Right"}),Object(j.jsx)("option",{value:"justify-center",children:"Center"})]})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"flex relative w-full flex-col h-14 justify-center items-center p-4",children:[Object(j.jsx)("span",{className:"cursor-pointer",onClick:function(){return a(!n)},children:"Choose Color"}),n&&Object(j.jsxs)("div",{className:"absolute z-1 bottom-full top-10",children:[Object(j.jsx)(P.a,{color:p.textColor,onChange:function(e){return t=e,i[d].settings.textColor=t.hex,void o(i);var t}}),"ColorPicker : ",p.textColor]})]}),Object(j.jsx)("div",{})]})}},k=c(6),E=c.n(k),D=function(){var e=Object(s.useContext)(x),t=e.data,c=e.updateIndex,n=e.sectionIndex,a=u(),l=a.CheckSections,i=a.CheckProjectsStatus,r=a.CheckSectionTextStatus,o=function(e,t){e&&c(t)};return Object(j.jsxs)("div",{className:"flex-col justify-center items-start p-2 z-0 relative",children:[Object(j.jsx)("div",{onClick:function(){return c("personal_details")},className:E()("flex-col p-3 cursor-pointer rounded",{"hover:bg-gray-200":"personal_details"!==n,"bg-gray-200":"personal_details"===n}),children:Object(j.jsx)("div",{className:"flex items-center ",children:Object(j.jsx)("span",{className:"",children:"Personal Profile"})})}),Object(j.jsx)("div",{onClick:function(){return o(""!==t.personal_details.text,"education")},className:E()("flex-col p-3 cursor-pointer rounded",{"hover:bg-gray-200":"education"!==n&&""!==t.personal_details.text,"bg-gray-200":"education"===n,"text-gray-500":""===t.personal_details.text}),children:Object(j.jsx)("div",{className:"flex items-center ",children:Object(j.jsx)("span",{className:"",children:"Education"})})}),Object(j.jsx)("div",{onClick:function(){return o(l("education"),"experience")},className:E()("flex-col p-3 cursor-pointer rounded",{"hover:bg-gray-200":"experience"!==n&&l("education"),"bg-gray-200":"experience"===n,"text-gray-500":!l("education")}),children:Object(j.jsx)("div",{className:"flex ",children:Object(j.jsx)("span",{className:"",children:"Experience"})})}),Object(j.jsx)("div",{onClick:function(){return o(l("experience"),"projects")},className:E()("flex-col p-3 cursor-pointer rounded",{"hover:bg-gray-200":"projects"!==n&&l("experience"),"bg-gray-200":"projects"===n,"text-gray-500":!l("experience")}),children:Object(j.jsx)("div",{className:"flex ",children:Object(j.jsx)("span",{className:"",children:"Projects"})})}),Object(j.jsx)("div",{onClick:function(){return o(i(),"languages")},className:E()("flex-col p-3 cursor-pointer rounded",{"hover:bg-gray-200":"languages"!==n&&i(),"bg-gray-200":"languages"===n,"text-gray-500":!i()}),children:Object(j.jsx)("div",{className:"flex ",children:Object(j.jsx)("span",{className:"",children:"Languages"})})}),Object(j.jsx)("div",{onClick:function(){return o(r("languages"),"contact")},className:E()("flex-col p-3 cursor-pointer rounded",{"hover:bg-gray-200":"contact"!==n&&r("languages"),"bg-gray-200":"contact"===n,"text-gray-500":!r("languages")}),children:Object(j.jsx)("div",{className:"flex ",children:Object(j.jsx)("span",{className:"",children:"Contact"})})})]})},A=function(e){Object.assign({},e);var t=Object(s.useContext)(x).templateIndex;return 0===t?Object(j.jsx)(v,{debug:!0}):1===t?Object(j.jsx)(N,{debug:!0}):Object(j.jsx)(j.Fragment,{})},I=function(){var e=S(),t=e.Header,c=e.Body,n=T(),a=n.SettingsHeader,l=n.SettingsBody,i=Object(s.useContext)(x),r=i.updateIndex,o=i.sectionIndex,d=i.settingsModal,b=i.updateSettingsModal;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"grid grid-cols-12",children:Object(j.jsx)("div",{className:"col-span-3",children:Object(j.jsxs)("div",{className:"flex items-center",children:[Object(j.jsx)("img",{src:"logo.png",className:"w-1/4 h-1/2",alt:""}),Object(j.jsx)("span",{children:"v 1.0.0"})]})})}),Object(j.jsxs)("div",{className:"grid grid-cols-12 h-screen",children:[Object(j.jsx)("div",{className:"bg-indigo-500 col-span-3 h-full",children:Object(j.jsx)(D,{})}),Object(j.jsxs)("div",{className:"col-span-9 p-3",children:[Object(j.jsx)(A,{}),Object(j.jsxs)("div",{className:"flex items-center",children:[Object(j.jsx)(w,{Header:t,Body:c,visible:""!==o,onClick:function(){r("")}}),Object(j.jsx)(w,{Header:a,Body:l,visible:d,onClick:function(){b()}})]})]})]})]})},_=c(8),z=c(10),U=Object(z.a)();a.a.render(Object(j.jsx)(l.a,{children:Object(j.jsx)(b,{children:Object(j.jsx)(_.b,{history:U,children:Object(j.jsxs)(_.c,{children:[Object(j.jsx)(_.a,{path:"/",component:y,exact:!0}),Object(j.jsx)(_.a,{path:"/builder",component:I,exact:!0})]})})})}),document.getElementById("root")),i()},97:function(e,t,c){}},[[211,1,2]]]);
//# sourceMappingURL=main.ebbd4100.chunk.js.map