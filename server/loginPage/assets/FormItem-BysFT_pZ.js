import{_ as i,r as c,k as p,o as d,b as m,d as o,A as u,x as _}from"./index-BuizCe0p.js";const f={class:"form-item"},v=["for"],y=["innerHTML"],g=["type","id","placeholder","value","autocomplete","name","readonly"],h={__name:"FormItem",props:{label:String,type:String,placeholder:String,value:String,name:String,svg:String,readonly:{type:Boolean,default:!1}},emits:["update:value"],setup(l,{emit:n}){const e=l,s=n,a=c(""),r=t=>{a.value=t.target.value,s("update:value",a.value)};return p(()=>e.value,t=>{a.value=t},{immediate:!0}),(t,S)=>(d(),m("div",f,[o("label",{for:`${e.name}_form_item`},u(e.label),9,v),o("div",{class:_({readonly:e.readonly})},[o("span",{innerHTML:e.svg},null,8,y),o("input",{type:e.type,id:`${e.name}_form_item`,placeholder:e.placeholder,value:a.value,autocapitalize:"off",autocomplete:e.type==="password"?"new-password":"off",name:e.name,onChange:r,readonly:e.readonly},null,40,g)],2)]))}},b=i(h,[["__scopeId","data-v-91c3fd5f"]]);export{b as F};