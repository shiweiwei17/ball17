import{d as T,c as i,F as $,m as G,_ as I,r as F,q as M,s as R,C as v,x as P,G as y,t as q,H as E}from"./index-a3d33809.js";import{F as D,B as z}from"./index-f89b22c5.js";import{c as C,s as U,h as j,a as H,t as h,p as K,F as W,w as k,D as Y}from"./use-expose-f3a0ac33.js";import{u as J}from"./use-scope-id-c9aa7ad6.js";import"./index-38fc6f84.js";const[L,Q]=C("form"),X={colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:H,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:h,showErrorMessage:h,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var Z=T({name:L,props:X,emits:["submit","failed"],setup(a,{emit:n,slots:s}){const{children:o,linkChildren:m}=U(W),d=e=>e?o.filter(t=>e.includes(t.name)):o,c=e=>new Promise((t,l)=>{const u=[];d(e).reduce((O,N)=>O.then(()=>{if(!u.length)return N.validate().then(x=>{x&&u.push(x)})}),Promise.resolve()).then(()=>{u.length?l(u):t()})}),p=e=>new Promise((t,l)=>{const u=d(e);Promise.all(u.map(r=>r.validate())).then(r=>{r=r.filter(Boolean),r.length?l(r):t()})}),g=e=>{const t=o.find(l=>l.name===e);return t?new Promise((l,u)=>{t.validate().then(r=>{r?u(r):l()})}):Promise.reject()},f=e=>typeof e=="string"?g(e):a.validateFirst?c(e):p(e),b=e=>{typeof e=="string"&&(e=[e]),d(e).forEach(l=>{l.resetValidation()})},_=()=>o.reduce((e,t)=>(e[t.name]=t.getValidationStatus(),e),{}),B=(e,t)=>{o.some(l=>l.name===e?(l.$el.scrollIntoView(t),!0):!1)},V=()=>o.reduce((e,t)=>(t.name!==void 0&&(e[t.name]=t.formValue.value),e),{}),S=()=>{const e=V();f().then(()=>n("submit",e)).catch(t=>{n("failed",{values:e,errors:t}),a.scrollToError&&t[0].name&&B(t[0].name)})},A=e=>{K(e),S()};return m({props:a}),j({submit:S,validate:f,getValues:V,scrollToField:B,resetValidation:b,getValidationStatus:_}),()=>{var e;return i("form",{class:Q(),onSubmit:A},[(e=s.default)==null?void 0:e.call(s)])}}});const ee=k(Z),[te,w]=C("cell-group"),ne={title:String,inset:Boolean,border:h};var le=T({name:te,inheritAttrs:!1,props:ne,setup(a,{slots:n,attrs:s}){const o=()=>{var d;return i("div",G({class:[w({inset:a.inset}),{[Y]:a.border&&!a.inset}]},s,J()),[(d=n.default)==null?void 0:d.call(n)])},m=()=>i("div",{class:w("title",{inset:a.inset})},[n.title?n.title():a.title]);return()=>a.title||n.title?i($,null,[m(),o()]):o()}});const ae=k(le);const oe={class:"btn"},se={__name:"index",setup(a){const n=F(""),s=F(""),o=()=>{s.value=n.value*50},m=()=>{n.value="",s.value=""};return(d,c)=>{const p=D,g=ae,f=z,b=ee;return M(),R("div",null,[i(b,{onSubmit:o},{default:v(()=>[i(g,{inset:""},{default:v(()=>[i(p,{modelValue:P(n),"onUpdate:modelValue":c[0]||(c[0]=_=>y(n)?n.value=_:null),name:"数值",label:"数值",placeholder:"数值",rules:[{required:!0,message:"请填写数值"}]},null,8,["modelValue"]),i(p,{modelValue:P(s),"onUpdate:modelValue":c[1]||(c[1]=_=>y(s)?s.value=_:null),name:"结果",label:"结果",placeholder:"结果"},null,8,["modelValue"])]),_:1}),q("div",oe,[i(f,{round:"",block:"",type:"primary","native-type":"submit",size:"small"},{default:v(()=>[E(" 计算 ")]),_:1}),i(f,{round:"",block:"",onClick:m,size:"small"},{default:v(()=>[E(" 清零 ")]),_:1})])]),_:1})])}}},me=I(se,[["__scopeId","data-v-8492f4ba"]]);export{me as default};
