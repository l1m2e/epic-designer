import{e as Q,j as g,r as b,f as k,o as u,c as r,b as t,d as C,q as y,u as w,M as T,X as j,n as V,P as B,m as q,D as I,E as P,Z as N}from"../app.f47f61a8.js";import{R as X}from"./vuedraggable.umd-6a5b6da9.995dc650.js";import{R,K as _,Q as D,L as z,T as F}from"./index-b8b964c9.8f77b590.js";import"./commonjsHelpers-c5d32002.490f5bf3.js";const G={class:"epic-component-view flex flex-col"},H={class:"search-box px-10px pr-14px py-6px"},J=t("span",{class:"iconfont icon-yulan"},null,-1),M={class:"flex flex-1 overflow-auto"},O={class:"tabs-box"},W=["title","onClick"],Y={class:"h-full flex-1 overflow-auto py-2 box-border"},Z=["onClick"],A={class:"text-center pt-42px text-gray-400"},oe=Q({__name:"index",setup($){const E=R.getComponent("input"),d=g("pageSchema"),p=g("designer"),v=R.getSchemaByGroup(),o=b(""),m={title:"\u5168\u90E8",list:[]},c=b(m),S=k(()=>[m,...v.value]),s=k(()=>{let a=c.value.list;if(c.value.title==="\u5168\u90E8"){const l=v.value.map(e=>e.list);a=[].concat(...l)}return o.value?a.filter(l=>{var e;return(e=l.label)==null?void 0:e.includes(o.value)}):a});function U(a){c.value=a}function K(a){s.value[a.oldIndex]=_({...N(s.value[a.oldIndex]),id:D()})}function L(a){var h;var l;const e=z(d.schemas,(h=(l=p.state.checkedNode)==null?void 0:l.id)!=null?h:"root");if(!e)return!1;let{list:n,schema:i,index:f}=e;i.children&&!["row","tabs"].includes(i.type)&&(n=i.children,f=i.children.length-1);const x=_({...N(a),id:D()});n.splice(f+1,0,x),p.setCheckedNode(x),F.push(d.schemas,"\u63D2\u5165\u7EC4\u4EF6")}return(a,l)=>(u(),r("div",G,[t("div",H,[C(w(E),{placeholder:"\u8BF7\u8F93\u5165\u7EC4\u4EF6\u540D\u79F0",modelValue:o.value,"onUpdate:modelValue":l[0]||(l[0]=e=>o.value=e),value:o.value,"onUpdate:value":l[1]||(l[1]=e=>o.value=e)},{prefix:y(()=>[J]),_:1},8,["modelValue","value"])]),t("div",M,[t("div",O,[(u(!0),r(T,null,j(S.value,(e,n)=>(u(),r("div",{class:V(["tab cursor-pointer truncate",{checked:c.value.title===e.title}]),key:n,title:e.title,onClick:i=>U(e)},B(e.title),11,W))),128))]),t("div",Y,[C(w(X),q({modelValue:s.value,"onUpdate:modelValue":l[2]||(l[2]=e=>s.value=e)},{group:{name:"edit-draggable",pull:"clone",put:!1},sort:!1,animation:180,ghostClass:"moving"},{"item-key":"id",class:"grid grid-cols-[auto_auto] px-10px gap-2",onEnd:l[3]||(l[3]=e=>K(e))}),{item:y(({element:e})=>[t("div",{class:"source-componet-item flex items-center truncate",onClick:n=>L(e)},[t("span",{class:V(["iconfont",e.icon])},null,2),t("div",null,B(e.label),1)],8,Z)]),_:1},16,["modelValue"]),I(t("div",A,"\u6CA1\u6709\u67E5\u8BE2\u5230\u7684\u7EC4\u4EF6",512),[[P,!s.value.length]])])])]))}});export{oe as default};