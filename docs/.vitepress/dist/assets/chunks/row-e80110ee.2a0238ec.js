import{N as p}from"./index-2d271046.81f36178.js";import"./index.0d7c8eb8.js";import{e as a,R as s,g as n}from"../app.c22c6c8c.js";import"./constants-669e1a5f.1c19f570.js";const h=a({props:{record:{type:Object,require:!0,default:()=>({})}},setup(r,{slots:o}){return()=>{var d;var t;const e={...r.record,title:(d=(t=r.record)==null?void 0:t.label)!=null?d:""},l=e.children;return delete e.children,s(p,e,{default:()=>[n(o,"edit-node",{},()=>l.map(i=>n(o,"node",{record:i})))]})}}});export{h as default};