import{S as I,i as v,s as N,e as P,c as w,a as E,b as x,n as c,d as S}from"./index-ccb39d87.js";function k(s){let e;return{c(){e=P("input"),this.h()},l(r){e=w(r,"INPUT",{type:!0}),this.h()},h(){E(e,"type","text"),e.value=s[0]},m(r,a){x(r,e,a)},p(r,[a]){a&1&&e.value!==r[0]&&(e.value=r[0])},i:c,o:c,d(r){r&&S(e)}}}function b(s,e,r){let{placeholder:a="Placeholder"}=e;return s.$$set=l=>{"placeholder"in l&&r(0,a=l.placeholder)},[a]}class f extends I{constructor(e){super(),v(this,e,b,k,N,{placeholder:0})}}const U=f;f.__docgen={version:3,name:"Input.svelte",data:[{visibility:"public",description:null,keywords:[],name:"placeholder",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:"Placeholder"}],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[],refs:[]};const q={title:"Example/Input",component:U,tags:["autodocs"]},t={args:{primary:!0,placeholder:"Username"}},o={args:{primary:!0,placeholder:"Password"}},n={args:{primary:!0,placeholder:"Email"}};var i,p,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    primary: true,
    placeholder: 'Username'
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    primary: true,
    placeholder: 'Password'
  }
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,y,_;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    primary: true,
    placeholder: 'Email'
  }
}`,...(_=(y=n.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const C=["IN_Login","IN_Password","IN_Email"];export{n as IN_Email,t as IN_Login,o as IN_Password,C as __namedExportsOrder,q as default};
//# sourceMappingURL=Input.stories-458f1578.js.map
