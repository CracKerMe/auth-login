import{F as i}from"./FormItem-BysFT_pZ.js";import{r as u,c as f,o as p,b as d,d as e,e as v,F as h,f as s}from"./index-BuizCe0p.js";const b=e("p",{class:"form-item-sub"},[e("span",{style:{"font-weight":"bold",color:"#ffffff"}},"等等！"),s("您可以选择减少接收邮件的频率，而不是彻底取消订阅。["),e("a",{href:"",target:"_blank"},"每周精选/每月摘要"),s("] 或许更适合您？ ")],-1),_=["disabled"],g=e("p",{class:"form-item-desc"},[e("a",{href:"https://cnsaas.top",target:"_blank",rel:"noopener noreferrer"},"去cnSaaS看看")],-1),V={__name:"cancel-subscription",setup(w){const a=u({email:""});function l(t){return/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(t)}const r=f(()=>!a.value.email&&!l(a.value.email)),n=(t,o)=>{a.value[o]=t},c=t=>{t.preventDefault(),console.log(a.value)};return(t,o)=>(p(),d(h,null,[b,e("form",{class:"form",autocomplete:"off",onSubmit:c},[v(i,{label:"邮箱",type:"email",placeholder:"请输入您的邮箱地址",value:a.value.email,name:"email",svg:'<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path></svg>',"onUpdate:value":o[0]||(o[0]=m=>n(m,"email"))},null,8,["value"]),e("button",{class:"submit-btn",type:"submit",shape:"block",disabled:r.value}," 我意已决，取消订阅 ",8,_),g],32)],64))}};export{V as default};