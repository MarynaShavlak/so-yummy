"use strict";(self.webpackChunkso_yummy=self.webpackChunkso_yummy||[]).push([[908],{6908:(e,n,t)=>{t.r(n),t.d(n,{default:()=>O});var i,a,s,r=t(5043),o=t(7528),c=t(5903),d=t(5719);const p=c.default.section(i||(i=(0,o.A)(["\n  --section-padding-top: 50px;\n  --section-padding-bottom: 100px;\n  padding-top: var(--section-padding-top);\n  padding-bottom: var(--section-padding-bottom);\n\n  @media screen and (min-width: ",") {\n    --section-padding-top: 72px;\n    --section-padding-bottom: 200px;\n  }\n\n  @media screen and (min-width: ",") {\n    --section-padding-top: 100px;\n    --section-padding-bottom: 100px;\n  }\n"])),(e=>e.theme.breakpoints.tablet),(e=>e.theme.breakpoints.desktop)),l=(0,c.default)(d.m)(a||(a=(0,o.A)([""]))),u=c.default.h2(s||(s=(0,o.A)(["\n  --title-margin-bottom: 50px;\n\n  margin-bottom: var(--title-margin-bottom);\n\n  font-weight: 600;\n  font-size: 28px;\n  line-height: 1;\n  letter-spacing: -0.02em;\n  font-feature-settings: 'liga' off;\n\n  color: ",";\n\n  @media screen and (min-width: ",") {\n    --title-margin-bottom: 100px;\n\n    font-size: 32px;\n  }\n\n  @media screen and (min-width: ",") {\n    font-size: 44px;\n  }\n"])),(e=>{let{theme:n}=e;return n.colors.gray[400]}),(e=>e.theme.breakpoints.tablet),(e=>e.theme.breakpoints.desktop));var g=t(5706),m=t(579);const h=(0,r.createContext)({});function x(e){let{children:n,value:t}=e;return(0,m.jsx)(h.Provider,{value:t,children:n})}var f,b=t(8164),v=t(1210);const w=c.default.li(f||(f=(0,o.A)([""])));var k=t(5173),j=t.n(k);j().shape({_id:j().string.isRequired,thumb:j().string.isRequired,title:j().string.isRequired,time:j().string.isRequired,description:j().string.isRequired}).isRequired;function y(e){let{recipe:n}=e;const{removeOwnRecipe:t}=(0,r.useContext)(h);return(0,m.jsx)(w,{children:(0,m.jsx)(b.A,{owner:!0,recipe:n,onDelete:async()=>{await t(n._id)},to:"".concat(v.J.RECIPE_PAGE,"/").concat(n._id)})})}var R;const A=c.default.ul(R||(R=(0,o.A)(["\n  --list-gap: 18px;\n\n  display: flex;\n  flex-direction: column;\n  gap: var(--list-gap);\n\n  @media screen and (min-width: ",") {\n    --list-gap: 40px;\n  }\n\n  @media screen and (min-width: ",") {\n    --list-gap: 50px;\n  }\n"])),(e=>e.theme.breakpoints.tablet),(e=>e.theme.breakpoints.desktop));function C(e){let{recipes:n}=e;return(0,m.jsx)(A,{children:null===n||void 0===n?void 0:n.map((e=>(0,m.jsx)(y,{recipe:e},e._id)))})}var P=t(4536),_=t(5746),q=t(2317),E=t(3184),z=t(2597);function F(){const e=(0,r.useRef)({page:1,totalPages:1}),[n,t]=(0,r.useState)([]),[i,a]=(0,r.useState)(!1),s=(0,r.useCallback)((async function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;a(!0);try{const{data:a}=await(0,g.BL)(n,i),{recipes:s,limit:r,total:o,page:c}=a;e.current.totalPages=Math.ceil(o/r),e.current.page=c,t(s)}catch(s){(0,_.U7)(s)}finally{a(!1)}}),[]),o=(0,r.useCallback)((async t=>{const i=1===n.length?1===e.current.page?1:e.current.page-1:e.current.page;await(0,g.Hb)(t),await s(i)}),[s,n]),{Component:c}=(0,P.A)({totalPages:e.current.totalPages,page:e.current.page,onFetch:s});return(0,r.useEffect)((()=>{s()}),[s]),(0,m.jsx)(p,{children:(0,m.jsxs)(l,{children:[(0,m.jsx)(u,{children:"My recipes"}),(0,m.jsx)(x,{value:{removeOwnRecipe:o},children:i?(0,m.jsx)(z.A,{}):n.length>0?(0,m.jsx)(C,{recipes:n}):(0,m.jsx)(E.A,{message:q.d.ownRecipesNotFound})}),e.current.totalPages>1&&(0,m.jsx)(c,{})]})})}var M=t(6283);function O(){return(0,M.b)(),(0,m.jsx)(F,{})}}}]);
//# sourceMappingURL=908.2bfe8018.chunk.js.map