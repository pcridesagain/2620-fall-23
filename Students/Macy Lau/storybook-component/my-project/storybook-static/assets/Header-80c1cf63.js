import{S,i as j,s as C,e as h,f as B,c as b,g,h as I,j as M,d as p,a as F,b as w,k as v,t as k,l as q,m as y,o as T,p as W,q as E,r as H,u as L,n as N,v as V,w as A,x as z,y as P}from"./index-ccb39d87.js";import{B as x}from"./Button-481c8dfb.js";function R(f){let t,s,l,r;return t=new x({props:{size:"small",label:"Log in"}}),t.$on("click",f[1]),l=new x({props:{primary:!0,size:"small",label:"Sign up"}}),l.$on("click",f[3]),{c(){E(t.$$.fragment),s=B(),E(l.$$.fragment)},l(n){H(t.$$.fragment,n),s=M(n),H(l.$$.fragment,n)},m(n,c){L(t,n,c),w(n,s,c),L(l,n,c),r=!0},p:N,i(n){r||(y(t.$$.fragment,n),y(l.$$.fragment,n),r=!0)},o(n){k(t.$$.fragment,n),k(l.$$.fragment,n),r=!1},d(n){n&&p(s),V(t,n),V(l,n)}}}function G(f){let t,s,l,r=f[0].name+"",n,c,a,e,d;return e=new x({props:{size:"small",label:"Log out"}}),e.$on("click",f[2]),{c(){t=h("span"),s=A("Welcome, "),l=h("b"),n=A(r),c=A("!"),a=B(),E(e.$$.fragment),this.h()},l(i){t=b(i,"SPAN",{class:!0});var o=g(t);s=z(o,"Welcome, "),l=b(o,"B",{});var $=g(l);n=z($,r),$.forEach(p),c=z(o,"!"),o.forEach(p),a=M(i),H(e.$$.fragment,i),this.h()},h(){F(t,"class","welcome")},m(i,o){w(i,t,o),v(t,s),v(t,l),v(l,n),v(t,c),w(i,a,o),L(e,i,o),d=!0},p(i,o){(!d||o&1)&&r!==(r=i[0].name+"")&&P(n,r)},i(i){d||(y(e.$$.fragment,i),d=!0)},o(i){k(e.$$.fragment,i),d=!1},d(i){i&&(p(t),p(a)),V(e,i)}}}function J(f){let t,s,l,r='<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z" fill="#FFF"></path><path d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z" fill="#555AB9"></path><path d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z" fill="#91BAF8"></path></g></svg> <h1>Acme</h1>',n,c,a,e,d;const i=[G,R],o=[];function $(u,m){return u[0]?0:1}return a=$(f),e=o[a]=i[a](f),{c(){t=h("header"),s=h("div"),l=h("div"),l.innerHTML=r,n=B(),c=h("div"),e.c(),this.h()},l(u){t=b(u,"HEADER",{});var m=g(t);s=b(m,"DIV",{class:!0});var _=g(s);l=b(_,"DIV",{"data-svelte-h":!0}),I(l)!=="svelte-d4xcvw"&&(l.innerHTML=r),n=M(_),c=b(_,"DIV",{});var D=g(c);e.l(D),D.forEach(p),_.forEach(p),m.forEach(p),this.h()},h(){F(s,"class","storybook-header")},m(u,m){w(u,t,m),v(t,s),v(s,l),v(s,n),v(s,c),o[a].m(c,null),d=!0},p(u,[m]){let _=a;a=$(u),a===_?o[a].p(u,m):(W(),k(o[_],1,1,()=>{o[_]=null}),q(),e=o[a],e?e.p(u,m):(e=o[a]=i[a](u),e.c()),y(e,1),e.m(c,null))},i(u){d||(y(e),d=!0)},o(u){k(e),d=!1},d(u){u&&p(t),o[a].d()}}}function K(f,t,s){let{user:l=null}=t;const r=T();function n(e){r("login",e)}function c(e){r("logout",e)}function a(e){r("createAccount",e)}return f.$$set=e=>{"user"in e&&s(0,l=e.user)},[l,n,c,a]}class O extends S{constructor(t){super(),j(this,t,K,J,C,{user:0})}}O.__docgen={version:3,name:"Header.svelte",data:[{visibility:"public",description:null,keywords:[],name:"user",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"object",type:"object"},defaultValue:null}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{visibility:"public",description:null,keywords:[],name:"login"},{visibility:"public",description:null,keywords:[],name:"logout"},{visibility:"public",description:null,keywords:[],name:"createAccount"}],slots:[],refs:[]};export{O as H};
//# sourceMappingURL=Header-80c1cf63.js.map