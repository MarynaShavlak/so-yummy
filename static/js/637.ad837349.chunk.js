"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[637],{3637:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var a,r,i,o,s=t(123),l=t(5043),d=t(3216),c=t(5706),p=t(7528),u=t(5903);const h=u.default.div(a||(a=(0,p.A)(["\n  position: relative;\n"]))),x=u.default.div(r||(r=(0,p.A)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100%;\n  height: 100%;\n"]))),g=u.default.ul(i||(i=(0,p.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n\n  margin-top: 32px;\n\n  opacity: ",";\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n    flex-wrap: wrap;\n    gap: 32px;\n    margin-top: 50px;\n  }\n\n  @media screen and (min-width: ",") {\n    row-gap: 100px;\n    column-gap: 14px;\n  }\n"])),(e=>{let{isLoading:n}=e;return n?.1:1}),(e=>e.theme.breakpoints.tablet),(e=>e.theme.breakpoints.desktop)),m=u.default.li(o||(o=(0,p.A)(["\n  @media screen and (min-width: ",") {\n    width: calc((100% - 32px) / 2);\n  }\n\n  @media screen and (min-width: ",") {\n    width: calc((100% - 14px * 3) / 4);\n  }\n"])),(e=>e.theme.breakpoints.desktop),(e=>e.theme.breakpoints.desktop));var f=t(1210),b=t(5746),w=t(4536),k=t(2597),y=t(579);function v(){const{categoryName:e}=(0,d.g)(),[n,t]=(0,l.useState)(!1),[a,r]=(0,l.useState)([]),i=(0,l.useRef)({page:1,totalPages:1,limit:8}),o=(0,l.useCallback)((async function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.current.limit;t(!0);const o=e.charAt(0).toUpperCase()+e.slice(1);try{const{data:e}=await(0,c.o2)(o,n,a),{recipes:t,limit:s,page:l,total:d}=e;i.current.totalPages=Math.ceil(d/s),i.current.page=l,r(t)}catch(s){(0,b.U7)(s)}finally{t(!1)}}),[e]),{Component:p}=(0,w.A)({totalPages:i.current.totalPages,page:i.current.page,onFetch:e=>o(e,i.current.limit)});return(0,l.useEffect)((()=>{o()}),[o]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(h,{children:[(0,y.jsx)(g,{isLoading:n,children:a.map((e=>{let{_id:n,title:t,thumb:a}=e;return(0,y.jsx)(m,{children:(0,y.jsx)(s.A,{src:a,title:t,to:"".concat(f.J.RECIPE_PAGE,"/").concat(n)})},n)}))}),n&&(0,y.jsx)(x,{children:(0,y.jsx)(k.A,{})})]}),i.current.totalPages>1&&(0,y.jsx)(p,{})]})}},123:(e,n,t)=>{t.d(n,{A:()=>g});var a,r,i,o,s=t(3216),l=t(7528),d=t(5903);const c=d.default.div(a||(a=(0,l.A)(["\n  position: relative;\n  width: 343px;\n  height: 323px;\n\n  border-radius: ",";\n\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),\n    0px 2px 1px rgba(0, 0, 0, 0.2);\n  cursor: pointer;\n\n  @media screen and (min-width: calc("," - 1px)) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: calc("," - 1px)) {\n    width: 300px;\n  }\n\n  &:hover {\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  }\n\n  transition: ","; ;\n"])),(e=>{let{theme:n}=e;return n.radii.lg}),(e=>{let{theme:n}=e;return n.breakpoints[1]}),(e=>{let{theme:n}=e;return n.breakpoints[2]}),(e=>{let{theme:n}=e;return n.transitions.create(["box-shadow"])})),p=d.default.img(r||(r=(0,l.A)(["\n  width: 100%;\n  height: 100%;\n\n  object-fit: cover;\n\n  border-radius: ",";\n\n  background-color: rgba(235, 243, 212, 0.2);\n"])),(e=>{let{theme:n}=e;return n.radii.lg})),u=d.default.div(i||(i=(0,l.A)(["\n  position: absolute;\n  bottom: 26px;\n  left: 18px;\n  width: 307px;\n  padding: 16px;\n\n  background-color: ",";\n\n  border-radius: ",";\n\n  @media screen and (min-width: calc("," - 1px)) {\n    width: 300px;\n  }\n\n  @media screen and (min-width: calc("," - 1px)) {\n    bottom: 23px;\n    left: 16px;\n    width: 268px;\n  }\n"])),(e=>{let{theme:n}=e;return n.colors.white[100]}),(e=>{let{theme:n}=e;return n.radii.lg}),(e=>{let{theme:n}=e;return n.breakpoints[1]}),(e=>{let{theme:n}=e;return n.breakpoints[2]})),h=d.default.p(o||(o=(0,l.A)(["\n  margin: auto 0;\n\n  color: ",";\n\n  line-height: 1.25;\n  font-weight: ",";\n"])),(e=>{let{theme:n}=e;return n.colors.gray[500]}),(e=>{let{theme:n}=e;return n.fontWeights.medium}));var x=t(579);function g(e){let{src:n,title:t,to:a}=e;const r=(0,s.Zp)();return(0,x.jsxs)(c,{onClick:()=>r(a),children:[(0,x.jsx)(p,{src:n,alt:t}),(0,x.jsx)(u,{children:(0,x.jsx)(h,{children:t})})]})}},4536:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(8168),r=t(8587),i=t(5043);const o=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{boundaryCount:n=1,componentName:t="usePagination",count:s=1,defaultPage:l=1,disabled:d=!1,hideNextButton:c=!1,hidePrevButton:p=!1,onChange:u,page:h,showFirstButton:x=!1,showLastButton:g=!1,siblingCount:m=1}=e,f=(0,r.A)(e,o),[b,w]=function(e){let{controlled:n,default:t,name:a,state:r="value"}=e;const{current:o}=i.useRef(void 0!==n),[s,l]=i.useState(t);return[o?n:s,i.useCallback((e=>{o||l(e)}),[])]}({controlled:h,default:l,name:t,state:"page"}),k=(e,n)=>{h||w(n),u&&u(e,n)},y=(e,n)=>{const t=n-e+1;return Array.from({length:t},((n,t)=>e+t))},v=y(1,Math.min(n,s)),j=y(Math.max(s-n+1,n+1),s),A=Math.max(Math.min(b-m,s-n-2*m-1),n+2),C=Math.min(Math.max(b+m,n+2*m+2),j.length>0?j[0]-2:s-1),P=[...x?["first"]:[],...p?[]:["previous"],...v,...A>n+2?["start-ellipsis"]:n+1<s-n?[n+1]:[],...y(A,C),...C<s-n-1?["end-ellipsis"]:s-n>n?[s-n]:[],...j,...c?[]:["next"],...g?["last"]:[]],B=e=>{switch(e){case"first":return 1;case"previous":return b-1;case"next":return b+1;case"last":return s;default:return null}},M=P.map((e=>"number"===typeof e?{onClick:n=>{k(n,e)},type:"page",page:e,selected:e===b,disabled:d,"aria-current":e===b?"true":void 0}:{onClick:n=>{k(n,B(e))},type:e,page:B(e),selected:!1,disabled:d||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?b>=s:b<=1)}));return(0,a.A)({items:M},f)}var l,d,c,p,u=t(7528),h=t(5903);const x=h.default.ul(l||(l=(0,u.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n\n  width: fit-content;\n  margin: 0 auto 0;\n  margin-top: 50px;\n  padding: 14px 24px;\n\n  background: ",";\n  border-radius: 26px;\n\n  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);\n\n  @media screen and (max-width: calc("," - 0.2px)) {\n    padding: 14px 14px;\n  }\n"])),(e=>{let{theme:n}=e;return n.colors.white[100]}),(e=>{let{theme:n}=e;return n.breakpoints.tablet})),g=h.default.button(d||(d=(0,u.A)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n\n  width: 27px;\n  height: 27px;\n\n  font-weight: 500;\n  font-size: 12px;\n  line-height: calc(18 / 12);\n  font-feature-settings: 'ss04' on;\n\n  color: ",";\n\n  border-radius: 50%;\n\n  background-color: ",";\n"])),(e=>{let{selected:n,theme:t}=e;return n?t.colors.black[400]:t.colors.gray[900]}),(e=>{let{selected:n,theme:t}=e;return n?t.colors.green[100]:"transparent"})),m=(0,h.default)(g)(c||(c=(0,u.A)(["\n  padding-left: 0;\n  padding-right: 0;\n\n  @media screen and (max-width: calc("," - 0.2px)) {\n    margin-right: 5px;\n  }\n\n  margin-right: 10px;\n  font-size: 24px;\n\n  &:disabled {\n    color: rgba(169, 169, 169, 0.73);\n  }\n"])),(e=>{let{theme:n}=e;return n.breakpoints.tablet})),f=(0,h.default)(g)(p||(p=(0,u.A)(["\n  padding-left: 0;\n  padding-right: 0;\n\n  @media screen and (max-width: calc("," - 0.2px)) {\n    margin-left: 5px;\n  }\n\n  margin-left: 10px;\n  font-size: 24px;\n\n  &:disabled {\n    color: rgba(169, 169, 169, 0.73);\n  }\n"])),(e=>{let{theme:n}=e;return n.breakpoints.tablet}));var b=t(579);function w(e){let{items:n=[]}=e;return(0,b.jsx)(x,{children:null===n||void 0===n?void 0:n.map(((e,n)=>{let{page:t,type:a,selected:r,...i}=e,o=null;switch(a){case"start-ellipsis":case"end-ellipsis":o="...";break;case"next":o=(0,b.jsx)(f,{type:"button",selected:r,...i,"data-type":a,children:">"});break;case"previous":o=(0,b.jsx)(m,{type:"button",selected:r,...i,"data-type":a,children:"<"});break;default:o=(0,b.jsx)(g,{type:"button",selected:r,...i,"data-type":a,children:t})}return(0,b.jsx)("li",{children:o},n)}))})}var k=t(5746);function y(e){let{totalPages:n,page:t,onFetch:a}=e;const{items:r}=s({count:n,defaultPage:1,page:t,onChange:async e=>{const{target:{textContent:n,dataset:r}}=e,i=r.type;let o=t;switch(i){case"next":o+=1;break;case"previous":o-=1;break;case"page":o=+n}a(o),(0,k.eG)(!0)}});return{items:r,Component:()=>(0,b.jsx)(w,{items:r})}}},8587:(e,n,t)=>{function a(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,{A:()=>a})}}]);
//# sourceMappingURL=637.ad837349.chunk.js.map