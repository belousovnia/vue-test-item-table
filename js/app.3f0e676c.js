(function(){"use strict";var t={6575:function(t,e,a){var s=a(144),i=a(998),n=function(){var t=this,e=t._self._c;return e(i.Z,[e("Header"),e("router-view")],1)},r=[],l=a(5716),o=a(6190),d=a(2118),u=function(){var t=this,e=t._self._c;return e(d.Z,{staticClass:"header",attrs:{fluid:""}},[e(l.Z,{attrs:{color:"green",dark:""},on:{click:function(e){return t.$router.push({name:"home"})}}},[e(o.Z,{attrs:{light:""}},[t._v("Главная")])],1)],1)},f=[],c=a(1001),m={},h=(0,c.Z)(m,u,f,!1,null,"142ff7a6",null),p=h.exports;null===localStorage.getItem("staff")&&localStorage.setItem("staff",JSON.stringify([]));var g={name:"App",components:{Header:p}},v=g,x=(0,c.Z)(v,n,r,!1,null,"05c32b0c",null),Z=x.exports,b=a(8345),k=a(4145),S=a(4886),w=a(8323),_=a(2374),y=a(9930),D=a(4324),C=a(3687),O=a(7808),E=a(1783),I=function(){var t=this,e=t._self._c;return e(w.Z,{attrs:{fluid:""}},[e(k.Z,[e(S.EB,[e(O.Z,{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),e(_.Z,{attrs:{headers:t.headers,items:t.getStaff,search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[e(E.Z,{staticClass:"delete-dialog",attrs:{flat:""}},[e(y.Z,{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[e(k.Z,[e(S.EB,{staticClass:"text-h5"},[t._v("Вы точно хотите удалить работника?")]),e(S.h7,[e(C.Z),e(o.Z,{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("Да")]),e(o.Z,{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v("Отмена")]),e(C.Z)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function({item:a}){return[e(d.Z,{staticClass:"contaier-icons"},[e(D.Z,{staticClass:"mr-2",on:{click:function(e){return t.routeStaff(a)}}},[t._v(" mdi-eye ")]),e("DialogFormVue",{attrs:{itemEdited:a}}),e(D.Z,{on:{click:function(e){return t.deleteItem(a)}}},[t._v(" mdi-delete ")])],1)]}}])})],1),e("div",{staticClass:"d-flex justify-end ma-4"},[e("DialogFormVue")],1)],1)},N=[],j=a(629),$=a(120),R=a(266),V=a(6236),P=a(5125),F=a(4528),T=a(1713),q=a(4239),B=function(){var t=this,e=t._self._c;return e("div",[e(y.Z,{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[void 0===t.itemEdited?e(o.Z,t._g(t._b({attrs:{color:"green",dark:""}},"v-btn",s,!1),a),[t._v(" Добавить ")]):t._e(),void 0!==t.itemEdited?e(D.Z,t._g(t._b({staticClass:"mr-2"},"v-icon",s,!1),a),[t._v(" mdi-pencil ")]):t._e()]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(k.Z,[e(S.EB,[e("span",{staticClass:"text-h5"},[t._v("Новый работник")])]),e(S.ZB,[e(P.Z,{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[e(T.Z,{staticClass:"mb-6",attrs:{"no-gutters":""}},[e(R.Z,{attrs:{sm:"5",md:"6"}},[e(O.Z,{staticClass:"mr-4",attrs:{rules:t.nameRules,label:"Фамилия*",required:""},model:{value:t.lastName,callback:function(e){t.lastName=e},expression:"lastName"}})],1),e(R.Z,{attrs:{sm:"5",md:"6"}},[e(O.Z,{attrs:{rules:t.nameRules,label:"Имя*",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),e(R.Z,{attrs:{sm:"5",md:"6"}},[e(O.Z,{staticClass:"mr-4",attrs:{rules:t.nameRules,label:"Отчество*",required:""},model:{value:t.patronymic,callback:function(e){t.patronymic=e},expression:"patronymic"}})],1),e(R.Z,{attrs:{sm:"5",md:"6"}},[e(O.Z,{attrs:{rules:t.postRules,label:"Должность*",required:""},model:{value:t.post,callback:function(e){t.post=e},expression:"post"}})],1),e(R.Z,{attrs:{sm:"5",md:"6"}},[e(O.Z,{staticClass:"mr-4",attrs:{label:"Заработная плата",rules:t.wageRules,required:""},model:{value:t.wage,callback:function(e){t.wage=e},expression:"wage"}})],1),e(R.Z,{attrs:{sm:"5",md:"6"}},[e(q.Z,{attrs:{items:t.rateList,rules:t.rateRules,label:"Ставка"},model:{value:t.rate,callback:function(e){t.rate=e},expression:"rate"}})],1)],1),e($.Z,{attrs:{label:"Трудовая книжка",required:""},model:{value:t.workbook,callback:function(e){t.workbook=e},expression:"workbook"}}),e(F.Z,{attrs:{"close-on-content-click":!1,"nudge-right":40,transition:"scale-transition","offset-y":"","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function({on:a,attrs:s}){return[e(O.Z,t._g(t._b({attrs:{label:"Дата начала работы","prepend-icon":"mdi-calendar",readonly:"",rules:t.startDateRules},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}},"v-text-field",s,!1),a))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[e(V.Z,{attrs:{locale:"ru"},on:{input:function(e){t.menu=!1}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),e(o.Z,{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success"},on:{click:t.validate}},[t._v(" Сохранить ")]),e(o.Z,{staticClass:"mr-4",attrs:{color:"error"},on:{click:t.resetForm}},[t._v(" Отмена ")])],1)],1)],1)],1)],1)},L=[],J={props:["itemEdited"],data:()=>({dialog:!1,valid:!0,name:null,lastName:null,patronymic:null,post:null,wage:null,rate:null,workbook:!1,rateList:["Полная","Половина"],startDate:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),menu:!1,nameRules:[t=>!!t||"Необходимо ввести имя",t=>!/[^A-Za-zА-Яа-я]/.test(t)||"Допускаются только буквы"],postRules:[t=>!!t||"Необходимо ввести должность"],wageRules:[t=>!!t||"Необходимо указать заработную плату",t=>!/[^0-9]/.test(t)||"Допускаются только цифры"],rateRules:[t=>!!t||"Необходимо выбрать ставку"],startDateRules:[t=>!!t||"Необходимо выбрать дату начала работы"]}),computed:(0,j.Se)(["getStaff"]),methods:{...(0,j.OI)(["setStaff","deletStaff"]),resetForm(){this.dialog=!1,void 0!==this.itemEdited?(this.defaultValue(),this.$refs.form.resetValidation()):this.$refs.form.reset()},validate(){this.$refs.form.validate()&&(this.setStaff({newStaff:{name:this.name,lastName:this.lastName,patronymic:this.patronymic,post:this.post,wage:this.wage,rate:this.rate,workbook:this.workbook,startDate:this.startDate},indexStaff:this.getEditedItem()}),this.$nextTick((()=>this.resetForm())))},getEditedItem(){return void 0!==this.itemEdited?this.getStaff.indexOf(this.itemEdited):null},defaultValue(){this.name=this.itemEdited["name"],this.lastName=this.itemEdited["lastName"],this.patronymic=this.itemEdited["patronymic"],this.post=this.itemEdited["post"],this.wage=this.itemEdited["wage"],this.rate=this.itemEdited["rate"],this.workbook=this.itemEdited["workbook"],this.startDate=this.itemEdited["startDate"]}},watch:{editedIndex:(t,e)=>{console.log(t)}},mounted(){void 0!==this.itemEdited&&this.defaultValue()}},z=J,M=(0,c.Z)(z,B,L,!1,null,"50016080",null),A=M.exports,H={data:()=>({search:"",dialogDelete:!1,editedIndex:-1,headers:[{text:"Фамилия",value:"lastName"},{text:"Имя",value:"name"},{text:"Отчество",value:"patronymic"},{text:"Должность",value:"post"},{text:"",value:"actions",sortable:!1}]}),components:{DialogFormVue:A},computed:(0,j.Se)(["getStaff"]),methods:{...(0,j.OI)(["deletStaff"]),deleteItem(t){this.editedIndex=this.getStaff.indexOf(t),this.dialogDelete=!0},closeDelete(){this.dialogDelete=!1,this.$nextTick((()=>{this.editedIndex=-1}))},editedItem(t){this.editedIndex=this.getStaff.indexOf(t)},closeEdited(){this.$nextTick((()=>{this.editedIndex=-1}))},deleteItemConfirm(){this.deletStaff(this.editedIndex),this.closeDelete()},routeStaff(t){this.$router.push({name:"staff",params:{index:this.getStaff.indexOf(t)}})}},watch:{dialogDelete(t){t||this.closeDelete()}}},G=H,K=(0,c.Z)(G,I,N,!1,null,"52d0c8af",null),Q=K.exports,U=function(){var t=this,e=t._self._c;return e(d.Z,{staticClass:"d-flex justify-center"},[e(k.Z,{staticClass:"ma-8 pa-6 staff-card",attrs:{"max-width":"800",width:"100%","min-width":"350","justify-center":""}},[e("DialogFormVue",{staticClass:"d-flex justify-end",attrs:{itemEdited:this.getStaff[this.$route.params.index]}}),t._l(t.valueList,(function(a,s){return e(T.Z,{staticClass:"mb-6",attrs:{"no-gutters":""}},[e(R.Z,{attrs:{sm:"6",md:"6"}},[t._v(t._s(s)+":")]),e(R.Z,{attrs:{sm:"6",md:"6"}},[t._v(t._s(a))])],1)})),e("div",{staticClass:"d-flex justify-end pr-2"},[e(D.Z,{on:{click:function(e){t.dialogDelete=!0}}},[t._v(" mdi-delete ")])],1)],2),e(E.Z,{staticClass:"delete-dialog",attrs:{flat:""}},[e(y.Z,{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[e(k.Z,[e(S.EB,{staticClass:"text-h5"},[t._v("Вы точно хотите удалить работника?")]),e(S.h7,[e(C.Z),e(o.Z,{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v("Да")]),e(o.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialogDelete=!1}}},[t._v("Отмена")]),e(C.Z)],1)],1)],1)],1)],1)},W=[],X={computed:(0,j.Se)(["getStaff"]),index:function(){},components:{DialogFormVue:A},data:()=>({valueList:{},index:null,dialogDelete:!1}),methods:{...(0,j.OI)(["deletStaff"]),settingValue(){this.valueList={["Имя"]:this.getStaff[this.index]["name"],["Фамилия"]:this.getStaff[this.index]["lastName"],["Отчество"]:this.getStaff[this.index]["patronymic"],["Должность"]:this.getStaff[this.index]["post"],["Зарплата"]:this.getStaff[this.index]["wage"],["Ставка"]:this.getStaff[this.index]["rate"],["Трудовая книжка"]:this.getStaff[this.index]["workbook"]?"сдана":"не сдана",["Дата начала работы"]:this.getStaff[this.index]["startDate"]}},deleteItemConfirm(){this.deletStaff(this.index),this.dialogDelete=!1,this.$router.push({name:"home"})}},mounted(){this.index=this.$route.params.index,this.settingValue()},watch:{"$store.state.table.staff":function(){this.settingValue()}}},Y=X,tt=(0,c.Z)(Y,U,W,!1,null,"f72870e6",null),et=tt.exports;s.ZP.use(b.Z);const at=[{path:"/",name:"home",component:Q},{path:"/staff/:index",name:"staff",component:et}],st=new b.Z({mode:"history",base:"/vue-test-item-table/",routes:at});var it=st,nt={state:{staff:JSON.parse(localStorage.getItem("staff"))},getters:{getStaff:t=>t.staff},mutations:{setStaff:(t,e)=>{null===e.indexStaff?t.staff.push(e.newStaff):t.staff.splice(e.indexStaff,1,e.newStaff),localStorage.setItem("staff",JSON.stringify(t.staff))},deletStaff:(t,e)=>{t.staff.splice(e,1),localStorage.setItem("staff",JSON.stringify(t.staff))}},actions:{}},rt={state:{},getters:{},mutations:{},actions:{}};s.ZP.use(j.ZP);var lt=new j.ZP.Store({modules:{table:nt,views:rt}}),ot=a(1705);s.ZP.use(ot.Z);var dt=new ot.Z({});s.ZP.config.productionTip=!1,new s.ZP({router:it,store:lt,vuetify:dt,render:t=>t(Z)}).$mount("#app")}},e={};function a(s){var i=e[s];if(void 0!==i)return i.exports;var n=e[s]={exports:{}};return t[s](n,n.exports,a),n.exports}a.m=t,function(){var t=[];a.O=function(e,s,i,n){if(!s){var r=1/0;for(u=0;u<t.length;u++){s=t[u][0],i=t[u][1],n=t[u][2];for(var l=!0,o=0;o<s.length;o++)(!1&n||r>=n)&&Object.keys(a.O).every((function(t){return a.O[t](s[o])}))?s.splice(o--,1):(l=!1,n<r&&(r=n));if(l){t.splice(u--,1);var d=i();void 0!==d&&(e=d)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[s,i,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,n,r=s[0],l=s[1],o=s[2],d=0;if(r.some((function(e){return 0!==t[e]}))){for(i in l)a.o(l,i)&&(a.m[i]=l[i]);if(o)var u=o(a)}for(e&&e(s);d<r.length;d++)n=r[d],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(u)},s=self["webpackChunkvue_test_item"]=self["webpackChunkvue_test_item"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(6575)}));s=a.O(s)})();
//# sourceMappingURL=app.3f0e676c.js.map