import{R as P,A as F,d as x}from"../guide_components_k-designer.md.c908a8ef.js";import{d as C,m as R,u as _,i as A,g as B,o as r,c as u,F as b,r as f,a as s,t as q,h as V,k as w,l as U,f as k,w as N,n as D,j as E,b as I}from"../app.eaa969de.js";const K={class:"rule-item-main bg-white m-t-2 p-2 rounded border border-solid border-gray-200 hover:border-primary transition-all relative"},M={key:0,class:"flex m-t-2 first:m-0"},L={class:"attr-label",title:"\u6821\u9A8C\u65F6\u673A"},S={class:"attr-input"},T=s("span",{class:"iconfont icon-shanchu1"},null,-1),z=[T],G=C({__name:"KRuleItem",props:{rule:{required:!0}},emits:R(["change","delete"],["update:rule"]),setup(v,{emit:i}){const t=_(v,"rule"),h=A("pageManager",{}),n=B(()=>Object.entries(h.funcs.value).filter(([e,o])=>typeof o=="function").map(([e])=>({label:e,value:e}))),c=["string","number","url","array","email"],a=[{label:"change",value:"change"},{label:"blur",value:"blur"}],g=[{label:"string",value:"string"},{label:"number",value:"number"},{label:"boolean",value:"boolean"},{label:"method",value:"method"},{label:"regexp",value:"regexp"},{label:"integer",value:"integer"},{label:"float",value:"float"},{label:"array",value:"array"},{label:"object",value:"object"},{label:"date",value:"date"},{label:"url",value:"url"},{label:"hex",value:"hex"},{label:"email",value:"email"},{label:"any",value:"any"}],m=[{type:"select",label:"\u6821\u9A8C\u65F6\u673A",model:"trigger",componentProps:{options:a,placeholder:"\u6821\u9A8C\u65F6\u673A",multiple:!0,mode:"multiple"}},{type:"switch",label:"\u81EA\u5B9A\u4E49\u89C4\u5219",model:"isValidator"},{type:"select",label:"\u6821\u9A8C\u51FD\u6570",model:"validator",show(){return!!t.value.isValidator},componentProps:{options:n.value,placeholder:"\u6821\u9A8C\u51FD\u6570"}},{type:"select",label:"\u7C7B\u578B",model:"type",show(){return!t.value.isValidator},componentProps:{options:g,placeholder:"\u7C7B\u578B"}},{type:"input",label:"\u6B63\u5219\u6821\u9A8C",model:"pattern",show(){return!t.value.isValidator},componentProps:{placeholder:"\u6B63\u5219\u6821\u9A8C"}},{type:"number",label:"\u5B57\u6BB5\u957F\u5EA6",model:"len",show(){var e;return c.includes((e=t.value.type)!=null?e:"")},componentProps:{min:0,placeholder:"\u5B57\u6BB5\u957F\u5EA6"}},{type:"number",label:"\u6700\u5C0F\u957F\u5EA6",model:"min",show(){var e;return c.includes((e=t.value.type)!=null?e:"")},componentProps:{min:0,placeholder:"\u6700\u5C0F\u957F\u5EA6"}},{type:"number",label:"\u6700\u5927\u957F\u5EA6",model:"max",show(){var e;return c.includes((e=t.value.type)!=null?e:"")},componentProps:{min:0,placeholder:"\u6700\u5927\u957F\u5EA6"}},{type:"input",label:"\u6821\u9A8C\u4FE1\u606F",model:"message",componentProps:{placeholder:"\u6821\u9A8C\u4FE1\u606F"}}];function y(){const e=t.value;e.isValidator?(delete e.type,delete e.pattern,delete e.len,delete e.min,delete e.max):delete e.validator,i("change",e)}function d(){i("delete")}return(e,o)=>(r(),u("div",K,[(r(),u(b,null,f(m,(l,p)=>(r(),u(b,{key:p},[!l.show||l.show()?(r(),u("div",M,[s("div",L,q(l.label),1),s("div",S,[V(w(P),{modelValue:t.value[l.model],"onUpdate:modelValue":j=>t.value[l.model]=j,record:{...l,noFormItem:!0},onChange:y},null,8,["modelValue","onUpdate:modelValue","record"])])])):U("",!0)],64))),64)),s("div",{class:"rule-btn-delete absolute top-0 right-0 transition-all w-6 h-6 cursor-pointer rounded-bl-1 flex-center color-white",onClick:d},z)]))}}),H={class:"rule-item-main bg-white m-t-2 p-2 rounded border border-solid border-gray-200 hover:border-primary transition-all relative"},J={key:0,class:"flex m-t-2 first:m-0"},O={class:"attr-label"},X={class:"flex-1"},Y=C({__name:"ERuleEditor",props:{modelValue:{type:Array,default:void 0}},emits:["update:modelValue"],setup(v,{emit:i}){const t=v,h=F.getComponent("button"),n=k({required:!1,message:"\u5FC5\u586B\u9879",trigger:["change"]}),c=[{type:"switch",label:"\u5FC5\u586B\u9879",model:"required"},{type:"select",label:"\u6821\u9A8C\u65F6\u673A",model:"trigger",show(){return!!n.value.required},componentProps:{options:[{label:"change",value:"change"},{label:"blur",value:"blur"}],placeholder:"\u6821\u9A8C\u65F6\u673A",multiple:!0,mode:"multiple"}},{type:"input",label:"\u6821\u9A8C\u4FE1\u606F",model:"message",show(){return!!n.value.required},componentProps:{placeholder:"\u6821\u9A8C\u4FE1\u606F"}}],a=k([]);N(()=>t.modelValue,d=>{if(d){if(!d)return;a.value=[],d.forEach(e=>{typeof e.required<"u"?n.value=e:a.value.push(e)})}},{immediate:!0});function g(){a.value.push({message:"",trigger:["change"]}),m()}function m(){if(n.value.required){i("update:modelValue",x([...a.value,n.value]));return}if(a.value.length){i("update:modelValue",x(a.value));return}i("update:modelValue",void 0)}function y(d){a.value.splice(d,1),m()}return(d,e)=>(r(),u("div",null,[s("div",H,[(r(),u(b,null,f(c,(o,l)=>(r(),u(b,{key:l},[!o.show||o.show()?(r(),u("div",J,[s("div",O,q(o.label),1),s("div",X,[V(w(P),{modelValue:n.value[o.model],"onUpdate:modelValue":p=>n.value[o.model]=p,record:{...o,noFormItem:!0},onChange:m},null,8,["modelValue","onUpdate:modelValue","record"])])])):U("",!0)],64))),64))]),(r(!0),u(b,null,f(a.value,(o,l)=>(r(),D(G,{key:l,rule:a.value[l],"onUpdate:rule":p=>a.value[l]=p,onDelete:p=>y(l),onChange:m},null,8,["rule","onUpdate:rule","onDelete"]))),128)),V(w(h),{class:"m-t-2",onClick:g},{default:E(()=>[I(" \u6DFB\u52A0\u89C4\u5219 ")]),_:1})]))}});export{Y as default};