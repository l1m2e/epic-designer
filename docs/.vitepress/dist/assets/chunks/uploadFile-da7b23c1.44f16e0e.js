import{b as f,d as h}from"./index.0155097c.js";import{E as g}from"./index.c45c34da.js";import{i as v,r as E,w as r,m as y,ac as l,I as V}from"../app.40ba1749.js";import"./index.7434e67a.js";import"./index.424a2ce8.js";import"./isEqual.314c6e94.js";import"./use-global-config.a132c9a6.js";import"./use-form-item.ec5899e5.js";const I=v({props:{modelValue:{type:Array,default:()=>[]}},emits:["update:modelValue"],setup(n,{emit:s,attrs:u}){const a=E([]);r(a,e=>{s("update:modelValue",e)}),r(()=>n.modelValue,e=>{if(e!=null&&e.length>0&&a.value!=null){if(a.value===e)return;a.value.length=0,a.value.push(...e)}},{deep:!0,immediate:!0});const i=(e,o)=>{V(()=>{a.value=o})},p=e=>{},m=(e,o,t)=>{console.log(t)},d=(e,o,t)=>{h.error("\u4E0A\u4F20\u5931\u8D25"),console.error(e)},c=y(()=>({...u,"file-list":a.value,onBeforeUpload:p,onChange:i,onSuccess:m,onError:d}));return()=>l("div",null,{default:()=>[l(f,c.value,{default:()=>[l(g,{},{default:()=>[l("span",{class:"iconfont epic-icon-shangchuan1",style:{"margin-right":"2px"}}),l("span",null,{default:()=>"\u4E0A\u4F20\u6587\u4EF6"})]})]})]})}});export{I as default};