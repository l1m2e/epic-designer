"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("vue"),o=require("naive-ui"),r=a.defineComponent({emits:["update:modelValue"],setup(i,{emit:d,attrs:l}){function n(e=null){d("update:modelValue",e)}return()=>{const e={...l,value:l.modelValue,"onUpdate:value":n};return a.h(o.NRadioGroup,e,{default:()=>{var t;return[(t=e.options)==null?void 0:t.map(u=>a.h(o.NRadio,{value:u.value,key:u.value},{default:()=>u.label}))]}})}}});exports.default=r;