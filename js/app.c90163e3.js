(function(){"use strict";var o={1499:function(o,e,t){var n=t(3396);const a={class:"btn"};function i(o,e,t,i,d,s){return(0,n.wg)(),(0,n.iD)("button",a,[(0,n.WI)(o.$slots,"default",{},void 0,!0)])}var d={name:"my-button"},s=t(89);const l=(0,s.Z)(d,[["render",i],["__scopeId","data-v-2d43d4fc"]]);var r=l,u=t(9242);function c(o,e,t,a,i,d){return(0,n.wg)(),(0,n.j4)(u.uT,{name:"modal"},{default:(0,n.w5)((()=>[t.show?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"modal",onClick:e[1]||(e[1]=(...o)=>d.hideModal&&d.hideModal(...o)),onKeydown:e[2]||(e[2]=(0,u.D2)(((...o)=>d.hideModal&&d.hideModal(...o)),["esc"]))},[(0,n._)("div",{class:"modal__content",onClick:e[0]||(e[0]=(0,u.iM)((()=>{}),["stop"]))},[(0,n.WI)(o.$slots,"default",{},void 0,!0)])],32)):(0,n.kq)("",!0)])),_:3})}var m={name:"my-modal",props:{show:{type:Boolean,required:!0}},methods:{hideModal(){this.$emit("update:show",!1)}}};const p=(0,s.Z)(m,[["render",c],["__scopeId","data-v-787ed6e3"]]);var h=p;const v=["value"];function f(o,e,t,a,i,d){return(0,n.wg)(),(0,n.iD)("input",{class:"input",type:"text",value:t.modelValue,onInput:e[0]||(e[0]=(...o)=>d.updateInput&&d.updateInput(...o))},null,40,v)}var A={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput(o){this.$emit("update:modelValue",o.target.value)}}};const _=(0,s.Z)(A,[["render",f],["__scopeId","data-v-bf218b24"]]);var b=_,g=t(7139);const w=["value"],y=["value"];function T(o,e,t,a,i,d){return(0,n.wg)(),(0,n.iD)("select",{class:"select",value:t.modelValue,onChange:e[0]||(e[0]=(...o)=>d.changeOption&&d.changeOption(...o))},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.options,(o=>((0,n.wg)(),(0,n.iD)("option",{key:o.value,value:o.value},(0,g.zw)(o.name),9,y)))),128))],40,w)}var k={name:"my-select",props:{modelValue:String,options:{type:Array,required:!0,default:()=>[]}},methods:{changeOption(o){this.$emit("update:modelValue",o.target.value)}}};const C=(0,s.Z)(k,[["render",T],["__scopeId","data-v-f55a0020"]]);var V=C;const D=o=>((0,n.dD)("data-v-eff91e68"),o=o(),(0,n.Cn)(),o),O={class:"loader"},I=D((()=>(0,n._)("div",{class:"loader__inner"},null,-1))),M=[I];function x(o,e,t,a,i,d){return(0,n.wg)(),(0,n.iD)("div",O,M)}var U={name:"my-loader"};const j=(0,s.Z)(U,[["render",x],["__scopeId","data-v-eff91e68"]]);var W=j,L=[r,h,b,V,W],E={mounted(o){o.focus()}},q=t(2483);const B=o=>((0,n.dD)("data-v-66cc4374"),o=o(),(0,n.Cn)(),o),H={class:"container home"},Q=B((()=>(0,n._)("h2",{class:"main-title"},"Home",-1))),R=B((()=>(0,n._)("hr",{class:"bottom-line"},null,-1))),F=B((()=>(0,n._)("p",{class:"home__text"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad alias animi aut blanditiis corporis, dolorum eligendi explicabo hic ipsum iure labore laborum libero nam nemo, nisi nobis pariatur perspiciatis quas quis repellendus repudiandae saepe sed similique sint temporibus vero voluptatibus! A ab accusantium architecto aut consequatur consequuntur, ducimus error est fugiat nisi non optio, perferendis possimus quo sapiente veritatis voluptas! Ab ipsum nobis, nulla quos rem tenetur vitae? Earum illo ipsa nobis!",-1))),Y=[Q,R,F];function Z(o,e){return(0,n.wg)(),(0,n.iD)("main",H,Y)}const J={},z=(0,s.Z)(J,[["render",Z],["__scopeId","data-v-66cc4374"]]);var N=z;const K={class:"container todo"},P=(0,n._)("h2",{class:"main-title"},"Todo List",-1),S=(0,n._)("hr",{class:"bottom-line"},null,-1),G={class:"todo__control"},$={class:"left-block"},X={class:"right-block"},oo=(0,n._)("hr",{class:"bottom-line"},null,-1),eo={key:2},to=(0,n._)("h3",{class:"info"},"Events empty...",-1),no=[to];function ao(o,e,t,a,i,d){const s=(0,n.up)("my-button"),l=(0,n.up)("my-select"),r=(0,n.up)("my-input"),u=(0,n.up)("my-loader"),c=(0,n.up)("todo-list"),m=(0,n.up)("todo-form"),p=(0,n.up)("my-modal");return(0,n.wg)(),(0,n.iD)("main",K,[P,S,(0,n._)("div",G,[(0,n._)("div",$,[(0,n.Wm)(s,{onClick:d.showModal},{default:(0,n.w5)((()=>[(0,n.Uk)(" Create event ")])),_:1},8,["onClick"]),(0,n.Wm)(l,{modelValue:i.defaultSort,"onUpdate:modelValue":e[0]||(e[0]=o=>i.defaultSort=o),options:i.sortOptions},null,8,["modelValue","options"])]),(0,n._)("div",X,[(0,n.Wm)(r,{modelValue:i.searchValue,"onUpdate:modelValue":e[1]||(e[1]=o=>i.searchValue=o),modelModifiers:{trim:!0},placeholder:"Search..."},null,8,["modelValue"])])]),oo,i.isTodosLoading?((0,n.wg)(),(0,n.j4)(u,{key:0})):i.todos.length?((0,n.wg)(),(0,n.j4)(c,{key:1,loading:i.isTodosLoading,todos:d.searchedTodo,onUpdateTodo:d.updateTodo,onRemoveTodo:d.removeTodo},null,8,["loading","todos","onUpdateTodo","onRemoveTodo"])):((0,n.wg)(),(0,n.iD)("div",eo,no)),(0,n.Wm)(p,{show:i.modalVisible,"onUpdate:show":e[2]||(e[2]=o=>i.modalVisible=o)},{default:(0,n.w5)((()=>[(0,n.Wm)(m,{onCreateTodo:d.createTodo,onHideModal:d.hideModal},null,8,["onCreateTodo","onHideModal"])])),_:1},8,["show"])])}t(7658);const io={class:"list"};function so(o,e,t,a,i,d){const s=(0,n.up)("todo-item");return(0,n.wg)(),(0,n.j4)(u.uT,{name:"empty"},{default:(0,n.w5)((()=>[(0,n._)("ul",io,[(0,n.Wm)(u.W3,{name:"todo-list"},{default:(0,n.w5)((()=>[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.todos,((o,e)=>((0,n.wg)(),(0,n.j4)(s,{todo:o,index:++e,key:o.id,onUpdateTodo:d.updateTodo,onRemoveTodo:d.removeTodo},null,8,["todo","index","onUpdateTodo","onRemoveTodo"])))),128))])),_:1})])])),_:1})}const lo={class:"input-container"},ro=["id"],uo=["for"],co={class:"item__inner"},mo={class:"item__text"};function po(o,e,t,a,i,d){return(0,n.wg)(),(0,n.iD)("li",{class:(0,g.C_)(["item",{done:t.todo.completed}])},[(0,n._)("div",lo,[(0,n._)("input",{onChange:e[0]||(e[0]=(...o)=>d.updateCompleted&&d.updateCompleted(...o)),id:t.index,class:"custom-checkbox",type:"checkbox"},null,40,ro),(0,n._)("label",{for:t.index},null,8,uo)]),(0,n._)("div",co,[(0,n._)("strong",null,(0,g.zw)(t.index),1),(0,n._)("span",mo,(0,g.zw)(t.todo.title),1)]),(0,n._)("button",{class:"item__btn",onClick:e[1]||(e[1]=(...o)=>d.removeTodo&&d.removeTodo(...o))})],2)}var ho={props:{todo:{type:Object,required:!0},index:Number},methods:{updateCompleted(){this.$emit("update-todo",this.todo)},removeTodo(){this.$emit("remove-todo",this.todo.id)}}};const vo=(0,s.Z)(ho,[["render",po],["__scopeId","data-v-da51eb48"]]);var fo=vo,Ao={props:{todos:{type:Array,required:!0}},components:{TodoItem:fo},methods:{updateTodo(o){this.$emit("update-todo",o)},removeTodo(o){this.$emit("remove-todo",o)}}};const _o=(0,s.Z)(Ao,[["render",so],["__scopeId","data-v-9d2aff24"]]);var bo=_o,go="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfmDA4DDyJ5WCt/AAABpklEQVQ4y+2UPUvDQBiAHz9+QAS5rOqguwjV4CCWZO0P6F8Qx84i/oJu6hJwFoJp/0C3glZdOoogFJMUQWzxo03OIbWNzcXPTbx3yb28D/fe3XOZkPx8TP6C/SPwrlbQ1IVn2poWjCdlIrY2sLFFXjIejTw2Npt377KJzz0NmxtauLo5hpq4tGjhYLwk8om2TwGmmCHnbevmKH9uLm+TY5YZFln3stoWeVx8HvFxhTVY1cLFp0cPH2ffyGhbItHNIV4VRbl0UaQ6RN2Dse2kjkbE+BNt6vMn1GlnoQpYIiyqtHmmyz1d+vQJqBxa6UoFLBFF6nQJiYiI6FA7KKjqlLBcmjvhngiJJMQ7Kiur1HperlzrTI/mO1l+KmyK99wnIiQk5IGa+FrbDXNwr306eHg88ExARXx+YEO0R0DtqLxQpkbAEz6u+PiqGvmETZX4hEWBypt1erYk5xo2LV5iJUb3KqyBdR6OyNIzF8OPaZuEiYtHhyalMzV8C5s4NHHSIuomDk2OV7Mfxh0YlN6/nOHqBqWckbnnOK7UziE5TWUm/n/63xuviBPie3243rwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMTItMTRUMDE6MTU6MzQrMDI6MDBKcDN7AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTEyLTE0VDAxOjE1OjM0KzAyOjAwOy2LxwAAAABJRU5ErkJggg==";const wo=o=>((0,n.dD)("data-v-190b179c"),o=o(),(0,n.Cn)(),o),yo={class:"form__close"},To={class:"form__inner"},ko=wo((()=>(0,n._)("h3",{class:"form__title"},"Creating event",-1)));function Co(o,e,t,a,i,d){const s=(0,n.up)("my-input"),l=(0,n.up)("my-button"),r=(0,n.Q2)("focus");return(0,n.wg)(),(0,n.iD)("form",{class:"form",onSubmit:e[2]||(e[2]=(0,u.iM)(((...o)=>d.createTodo&&d.createTodo(...o)),["prevent"]))},[(0,n._)("div",yo,[(0,n._)("img",{src:go,alt:"close",onClick:e[0]||(e[0]=(...o)=>d.hideModal&&d.hideModal(...o))})]),(0,n._)("div",To,[ko,(0,n.wy)((0,n.Wm)(s,{modelValue:i.title,"onUpdate:modelValue":e[1]||(e[1]=o=>i.title=o),modelModifiers:{trim:!0}},null,8,["modelValue"]),[[r]]),(0,n.Wm)(l,{type:"submit"},{default:(0,n.w5)((()=>[(0,n.Uk)(" Save ")])),_:1})])],32)}var Vo={data(){return{title:""}},methods:{createTodo(){if(this.title){const o={id:Date.now(),title:this.title,completed:!1};this.$emit("create-todo",o),this.title=""}},hideModal(){this.$emit("hide-modal",!1)}}};const Do=(0,s.Z)(Vo,[["render",Co],["__scopeId","data-v-190b179c"]]);var Oo=Do,Io={name:"App",components:{TodoList:bo,TodoForm:Oo},data(){return{modalVisible:!1,isTodosLoading:!0,defaultSort:"number",searchValue:"",sortOptions:[{value:"number",name:"By number"},{value:"name",name:"By name"}],todos:[]}},methods:{updateTodo(o){o.completed=!o.completed},removeTodo(o){this.todos=this.todos.filter((e=>e.id!==o))},showModal(){this.modalVisible=!0},createTodo(o){this.todos.push(o),this.modalVisible=!1},hideModal(){this.modalVisible=!1}},mounted(){fetch("https://jsonplaceholder.typicode.com/todos/?_limit=66").then((o=>o.json())).then((o=>{this.todos=o.filter((o=>!o.completed)),this.isTodosLoading=!1}))},watch:{defaultSort(o){switch(o){case"number":return this.todos.sort(((o,e)=>o.id-e.id));case"name":return this.todos.sort(((o,e)=>o.title.localeCompare(e.title)));default:return this.todos}}},computed:{searchedTodo(){return this.todos.filter((o=>o.title.toLowerCase().includes(this.searchValue.toLowerCase())))}}};const Mo=(0,s.Z)(Io,[["render",ao]]);var xo=Mo,Uo=t.p+"img/cat.0398d573.png";const jo=o=>((0,n.dD)("data-v-7702f52d"),o=o(),(0,n.Cn)(),o),Wo={class:"container about"},Lo=jo((()=>(0,n._)("h2",{class:"main-title"},"About",-1))),Eo=jo((()=>(0,n._)("hr",{class:"bottom-line"},null,-1))),qo=jo((()=>(0,n._)("img",{src:Uo,alt:"cat"},null,-1))),Bo=[Lo,Eo,qo];function Ho(o,e){return(0,n.wg)(),(0,n.iD)("main",Wo,Bo)}const Qo={},Ro=(0,s.Z)(Qo,[["render",Ho],["__scopeId","data-v-7702f52d"]]);var Fo=Ro;const Yo=[{path:"/",component:N},{path:"/todo",component:xo},{path:"/about",component:Fo}],Zo=(0,q.p7)({routes:Yo,history:(0,q.r5)("/vue-todo/")});var Jo=Zo;const zo=(0,n._)("header",{class:"header"},[(0,n._)("h1",null,"Todo Vue Application")],-1),No={class:"container nav"},Ko={class:"nav__links"};function Po(o,e){const t=(0,n.up)("router-link"),a=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)(n.HY,null,[zo,(0,n._)("nav",No,[(0,n._)("div",Ko,[(0,n.Wm)(t,{class:"link",to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1}),(0,n.Wm)(t,{class:"link",to:"/todo"},{default:(0,n.w5)((()=>[(0,n.Uk)("Todos")])),_:1}),(0,n.Wm)(t,{class:"link",to:"/about"},{default:(0,n.w5)((()=>[(0,n.Uk)("About")])),_:1})])]),(0,n.Wm)(a)],64)}const So={},Go=(0,s.Z)(So,[["render",Po]]);var $o=Go;const Xo=(0,u.ri)($o);L.forEach((o=>{Xo.component(o.name,o)})),Xo.directive("focus",E),Xo.use(Jo).mount("#app")}},e={};function t(n){var a=e[n];if(void 0!==a)return a.exports;var i=e[n]={exports:{}};return o[n](i,i.exports,t),i.exports}t.m=o,function(){var o=[];t.O=function(e,n,a,i){if(!n){var d=1/0;for(u=0;u<o.length;u++){n=o[u][0],a=o[u][1],i=o[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||d>=i)&&Object.keys(t.O).every((function(o){return t.O[o](n[l])}))?n.splice(l--,1):(s=!1,i<d&&(d=i));if(s){o.splice(u--,1);var r=a();void 0!==r&&(e=r)}}return e}i=i||0;for(var u=o.length;u>0&&o[u-1][2]>i;u--)o[u]=o[u-1];o[u]=[n,a,i]}}(),function(){t.n=function(o){var e=o&&o.__esModule?function(){return o["default"]}:function(){return o};return t.d(e,{a:e}),e}}(),function(){t.d=function(o,e){for(var n in e)t.o(e,n)&&!t.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){t.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)}}(),function(){t.p="/vue-todo/"}(),function(){var o={143:0};t.O.j=function(e){return 0===o[e]};var e=function(e,n){var a,i,d=n[0],s=n[1],l=n[2],r=0;if(d.some((function(e){return 0!==o[e]}))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(l)var u=l(t)}for(e&&e(n);r<d.length;r++)i=d[r],t.o(o,i)&&o[i]&&o[i][0](),o[i]=0;return t.O(u)},n=self["webpackChunkvue_todo"]=self["webpackChunkvue_todo"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(1499)}));n=t.O(n)})();
//# sourceMappingURL=app.c90163e3.js.map