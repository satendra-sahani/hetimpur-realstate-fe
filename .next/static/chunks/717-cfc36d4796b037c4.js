"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[717],{5197:function(e,t,r){r.d(t,{Z:function(){return n}});let n=(0,r(1462).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},2940:function(e,t,r){r.d(t,{$:function(){return f}});var n=r(5893),a=r(1664),s=r.n(a),i=r(1462);let l=(0,i.Z)("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]),o=(0,i.Z)("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),c=(0,i.Z)("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]),d=(0,i.Z)("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);function f(){return(0,n.jsx)("footer",{className:"bg-gray-800 text-white py-8",children:(0,n.jsxs)("div",{className:"container mx-auto px-6",children:[(0,n.jsxs)("div",{className:"flex flex-wrap justify-between",children:[(0,n.jsxs)("div",{className:"w-full md:w-1/4 mb-6 md:mb-0",children:[(0,n.jsx)("h3",{className:"text-lg font-semibold mb-2",children:"CLBHOOMI.com"}),(0,n.jsx)("p",{className:"text-sm",children:"Find your perfect plot of land with ease."})]}),(0,n.jsxs)("div",{className:"w-full md:w-1/4 mb-6 md:mb-0",children:[(0,n.jsx)("h4",{className:"text-lg font-semibold mb-2",children:"Quick Links"}),(0,n.jsxs)("ul",{className:"text-sm",children:[(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/",className:"hover:text-gray-300",children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/about",className:"hover:text-gray-300",children:"About Us"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s(),{href:"/contact",className:"hover:text-gray-300",children:"Contact"})})]})]}),(0,n.jsxs)("div",{className:"w-full md:w-1/4 mb-6 md:mb-0",children:[(0,n.jsx)("h4",{className:"text-lg font-semibold mb-2",children:"Contact Us"}),(0,n.jsx)("p",{className:"text-sm",children:"Email: info@landmarketplace.com"}),(0,n.jsx)("p",{className:"text-sm",children:"Phone: (123) 456-7890"})]}),(0,n.jsxs)("div",{className:"w-full md:w-1/4",children:[(0,n.jsx)("h4",{className:"text-lg font-semibold mb-2",children:"Follow Us"}),(0,n.jsxs)("div",{className:"flex space-x-4",children:[(0,n.jsx)(s(),{href:"#",className:"hover:text-gray-300",children:(0,n.jsx)(l,{})}),(0,n.jsx)(s(),{href:"#",className:"hover:text-gray-300",children:(0,n.jsx)(o,{})}),(0,n.jsx)(s(),{href:"#",className:"hover:text-gray-300",children:(0,n.jsx)(c,{})}),(0,n.jsx)(s(),{href:"#",className:"hover:text-gray-300",children:(0,n.jsx)(d,{})})]})]})]}),(0,n.jsx)("div",{className:"border-t border-gray-700 mt-8 pt-8 text-sm text-center",children:(0,n.jsxs)("p",{children:["\xa9 ",new Date().getFullYear()," CLBHOOMI.com All rights reserved."]})})]})})}},1528:function(e,t,r){r.d(t,{h:function(){return R}});var n=r(5893),a=r(7294),s=r(1664),i=r.n(s),l=r(9332),o=r(240),c=r(6681),d=r(6014);class f extends a.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function u({children:e,isPresent:t}){let r=(0,a.useId)(),s=(0,a.useRef)(null),i=(0,a.useRef)({width:0,height:0,top:0,left:0}),{nonce:l}=(0,a.useContext)(d._);return(0,a.useInsertionEffect)(()=>{let{width:e,height:n,top:a,left:o}=i.current;if(t||!s.current||!e||!n)return;s.current.dataset.motionPopId=r;let c=document.createElement("style");return l&&(c.nonce=l),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${a}px !important;
            left: ${o}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[t]),(0,n.jsx)(f,{isPresent:t,childRef:s,sizeRef:i,children:a.cloneElement(e,{ref:s})})}let h=({children:e,initial:t,isPresent:r,onExitComplete:s,custom:i,presenceAffectsLayout:l,mode:d})=>{let f=(0,c.h)(m),h=(0,a.useId)(),x=(0,a.useMemo)(()=>({id:h,initial:t,isPresent:r,custom:i,onExitComplete:e=>{for(let t of(f.set(e,!0),f.values()))if(!t)return;s&&s()},register:e=>(f.set(e,!1),()=>f.delete(e))}),l?[Math.random()]:[r]);return(0,a.useMemo)(()=>{f.forEach((e,t)=>f.set(t,!1))},[r]),a.useEffect(()=>{r||f.size||!s||s()},[r]),"popLayout"===d&&(e=(0,n.jsx)(u,{isPresent:r,children:e})),(0,n.jsx)(o.O.Provider,{value:x,children:e})};function m(){return new Map}var x=r(5364),p=r(5487);let y=e=>e.key||"";function g(e){let t=[];return a.Children.forEach(e,e=>{(0,a.isValidElement)(e)&&t.push(e)}),t}var v=r(8868);let j=({children:e,exitBeforeEnter:t,custom:r,initial:s=!0,onExitComplete:i,presenceAffectsLayout:l=!0,mode:o="sync"})=>{(0,p.k)(!t,"Replace exitBeforeEnter with mode='wait'");let d=(0,a.useMemo)(()=>g(e),[e]),f=d.map(y),u=(0,a.useRef)(!0),m=(0,a.useRef)(d),j=(0,c.h)(()=>new Map),[b,N]=(0,a.useState)(d),[w,k]=(0,a.useState)(d);(0,v.L)(()=>{u.current=!1,m.current=d;for(let e=0;e<w.length;e++){let t=y(w[e]);f.includes(t)?j.delete(t):!0!==j.get(t)&&j.set(t,!1)}},[w,f.length,f.join("-")]);let C=[];if(d!==b){let e=[...d];for(let t=0;t<w.length;t++){let r=w[t],n=y(r);f.includes(n)||(e.splice(t,0,r),C.push(r))}"wait"===o&&C.length&&(e=C),k(g(e)),N(d);return}let{forceRender:E}=(0,a.useContext)(x.p);return(0,n.jsx)(n.Fragment,{children:w.map(e=>{let t=y(e),a=d===w||f.includes(t);return(0,n.jsx)(h,{isPresent:a,initial:(!u.current||!!s)&&void 0,custom:a?void 0:r,presenceAffectsLayout:l,mode:o,onExitComplete:a?void 0:()=>{if(!j.has(t))return;j.set(t,!0);let e=!0;j.forEach(t=>{t||(e=!1)}),e&&(null==E||E(),k(m.current),i&&i())},children:e},t)})})};var b=r(649),N=r(2417),w=r(8154),k=r(760),C=r(5007),E=r(1161);function R(){let[e,t]=(0,a.useState)(!1),{user:r}=(0,C.v9)(e=>e.authenticationReducer),s=(0,l.usePathname)(),o=[{href:"/",label:"Home"},{href:"/login",label:"Buy"},{href:"/client/post",label:"Sell"}],c=(0,C.I0)();(0,a.useEffect)(()=>{c((0,E._j)({hideError:!0}))},[c]);let d=()=>{localStorage.clear(),window.location.href="/login"};return(0,n.jsx)("header",{className:"bg-white shadow-md sticky top-0 z-50",children:(0,n.jsxs)("div",{className:"container mx-auto px-4 sm:px-6 py-3",children:[(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)(i(),{href:"/",className:"flex items-center justify-center",children:(0,n.jsx)("img",{src:"/logo.png",height:10,width:120})}),(0,n.jsxs)("nav",{className:"hidden md:flex space-x-4",children:[o.map(e=>(0,n.jsx)(N.z,{asChild:!0,variant:s===e.href?"default":"ghost",className:"transition-colors duration-200",children:(0,n.jsx)(i(),{href:e.href,children:e.label})},e.href)),(null==r?void 0:r.name)&&(0,n.jsx)(N.z,{variant:"ghost",className:"w-full justify-start mb-2",children:(0,n.jsx)(i(),{href:(null==r?void 0:r.role)=="client"?"/client/post":"/",children:null==r?void 0:r.name})}),r&&(0,n.jsx)(N.z,{variant:"ghost",className:"w-full justify-start mb-2",children:(0,n.jsx)(i(),{href:"#-",onClick:d,children:"Logout"})})]}),(0,n.jsx)(N.z,{variant:"ghost",className:"md:hidden",onClick:()=>t(!e),children:e?(0,n.jsx)(w.Z,{className:"h-6 w-6"}):(0,n.jsx)(k.Z,{className:"h-6 w-6"})})]}),(0,n.jsx)(j,{children:e&&(0,n.jsxs)(b.E.nav,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.2},className:"md:hidden mt-4",children:[o.map(e=>(0,n.jsx)(N.z,{asChild:!0,variant:s===e.href?"default":"ghost",className:"w-full justify-start mb-2",onClick:()=>t(!1),children:(0,n.jsx)(i(),{href:e.href,children:e.label})},e.href)),r&&(0,n.jsx)(N.z,{variant:"ghost",className:"w-full justify-start mb-2",onClick:d,children:(0,n.jsx)(i(),{href:"#-",children:"Logout"})})]})})]})})}},2417:function(e,t,r){r.d(t,{z:function(){return c}});var n=r(5893),a=r(7294),s=r(8426),i=r(2003),l=r(4893);let o=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,t)=>{let{className:r,variant:a,size:i,asChild:c=!1,...d}=e,f=c?s.g7:"button";return(0,n.jsx)(f,{className:(0,l.cn)(o({variant:a,size:i,className:r})),ref:t,...d})});c.displayName="Button"},1064:function(e,t,r){r.d(t,{Ol:function(){return o},Zb:function(){return l},aY:function(){return d},eW:function(){return f},ll:function(){return c}});var n=r(5893),a=r(7294),s=r(649),i=r(4893);let l=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.E.div,{ref:t,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},whileHover:{scale:1.05},transition:{duration:.3},className:(0,i.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...a})});l.displayName="Card";let o=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.E.div,{ref:t,initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},className:(0,i.cn)("flex flex-col space-y-1.5 p-6",r),...a})});o.displayName="CardHeader";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.E.h3,{ref:t,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:(0,i.cn)("text-2xl font-semibold leading-none tracking-tight",r),...a})});c.displayName="CardTitle",a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.E.p,{ref:t,initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},className:(0,i.cn)("text-sm text-muted-foreground",r),...a})}).displayName="CardDescription";let d=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.E.div,{ref:t,initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},className:(0,i.cn)("p-6 pt-0",r),...a})});d.displayName="CardContent";let f=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.E.div,{ref:t,initial:{opacity:0},animate:{opacity:1},transition:{delay:.6},className:(0,i.cn)("flex items-center p-6 pt-0",r),...a})});f.displayName="CardFooter"},8501:function(e,t,r){r.d(t,{I:function(){return i}});var n=r(5893),a=r(7294),s=r(4893);let i=a.forwardRef((e,t)=>{let{className:r,type:a,...i}=e;return(0,n.jsx)("input",{type:a,className:(0,s.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...i})});i.displayName="Input"},428:function(e,t,r){r.d(t,{_:function(){return c}});var n=r(5893),a=r(7294),s=r(9102),i=r(2003),l=r(4893);let o=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(s.f,{ref:t,className:(0,l.cn)(o(),r),...a})});c.displayName=s.f.displayName},1161:function(e,t,r){r.d(t,{_j:function(){return s},xT:function(){return i},y:function(){return a}});var n=r(6567);let a=e=>({type:n.x.LOGIN,payload:e}),s=e=>({type:n.x.GET_USER,payload:e}),i=e=>({type:n.x.SIGN_UP,payload:e})},9102:function(e,t,r){r.d(t,{f:function(){return l}});var n=r(7294),a=r(9602),s=r(5893),i=n.forwardRef((e,t)=>(0,s.jsx)(a.WV.label,{...e,ref:t,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var l=i}}]);