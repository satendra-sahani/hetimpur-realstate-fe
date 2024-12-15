(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[127],{8379:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/payment/checking",function(){return n(7684)}])},5197:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});let a=(0,n(1462).Z)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},1064:function(e,t,n){"use strict";n.d(t,{Ol:function(){return c},Zb:function(){return o},aY:function(){return l},eW:function(){return y},ll:function(){return u}});var a=n(5893),r=n(7294),i=n(649),s=n(4893);let o=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(i.E.div,{ref:t,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},whileHover:{scale:1.05},transition:{duration:.3},className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",n),...r})});o.displayName="Card";let c=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(i.E.div,{ref:t,initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},className:(0,s.cn)("flex flex-col space-y-1.5 p-6",n),...r})});c.displayName="CardHeader";let u=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(i.E.h3,{ref:t,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3},className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",n),...r})});u.displayName="CardTitle",r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(i.E.p,{ref:t,initial:{opacity:0},animate:{opacity:1},transition:{delay:.4},className:(0,s.cn)("text-sm text-muted-foreground",n),...r})}).displayName="CardDescription";let l=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(i.E.div,{ref:t,initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},className:(0,s.cn)("p-6 pt-0",n),...r})});l.displayName="CardContent";let y=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,a.jsx)(i.E.div,{ref:t,initial:{opacity:0},animate:{opacity:1},transition:{delay:.6},className:(0,s.cn)("flex items-center p-6 pt-0",n),...r})});y.displayName="CardFooter"},7684:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(5893),r=n(649),i=n(5197),s=n(1064);function o(){return(0,a.jsx)("div",{className:"min-h-screen flex items-center justify-center p-4",children:(0,a.jsx)(s.Zb,{className:"w-full max-w-md",children:(0,a.jsxs)(s.aY,{className:"flex flex-col items-center justify-center p-6",children:[(0,a.jsx)(r.E.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.5},children:(0,a.jsx)(i.Z,{className:"h-12 w-12 animate-spin text-primary"})}),(0,a.jsx)(r.E.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.2},className:"mt-4 text-lg text-center text-muted-foreground",children:"Processing your payment..."})]})})})}var c=n(1161),u=n(1396),l=n(1163),y=n(7294),d=n(5007),p=()=>{let e=(0,l.useRouter)(),[t,n]=(0,y.useState)(null),{user:r}=(0,d.v9)(e=>e.authenticationReducer),i=(0,d.I0)();return(0,y.useEffect)(()=>{if(!e.isReady||!e.query)return;let t={landId:e.query.landId,razorpay_payment_id:e.query.razorpay_payment_id,razorpay_payment_link_id:e.query.razorpay_payment_link_id,razorpay_payment_link_reference_id:e.query.razorpay_payment_link_reference_id,razorpay_payment_link_status:e.query.razorpay_payment_link_status,razorpay_signature:e.query.razorpay_signature};[t.razorpay_payment_id,t.razorpay_payment_link_id,t.razorpay_payment_link_reference_id,t.razorpay_payment_link_status,t.razorpay_signature].every(e=>void 0!==e)?n(t):console.error("Invalid or incomplete payment details:",e.query)},[e.isReady,e.query]),(0,y.useEffect)(()=>{(null==r?void 0:r._id)&&t&&i((0,u.v3)({data:t,cb:()=>e.push("/payment/success"),errorCB:()=>{e.push("/payment/failed")}}))},[r,t]),(0,y.useEffect)(()=>{i((0,c._j)({hideMessage:!0}))},[i]),(0,a.jsx)(o,{})}},1161:function(e,t,n){"use strict";n.d(t,{_j:function(){return i},xT:function(){return s},y:function(){return r}});var a=n(6567);let r=e=>({type:a.x.LOGIN,payload:e}),i=e=>({type:a.x.GET_USER,payload:e}),s=e=>({type:a.x.SIGN_UP,payload:e})},1396:function(e,t,n){"use strict";n.d(t,{GC:function(){return l},P9:function(){return s},UP:function(){return o},fS:function(){return c},mK:function(){return u},nd:function(){return r},v3:function(){return i}});var a=n(6567);let r=e=>({type:a.x.GENERATE_PAYMENT_LINK,payload:e}),i=e=>({type:a.x.VERIFY_PAYMENT_STATUS,payload:e}),s=e=>({type:a.x.SAVE_LAND,payload:e}),o=e=>({type:a.x.GET_LAND,payload:e}),c=e=>({type:a.x.UPDATE_LAND,payload:e}),u=e=>({type:a.x.DELETE_LAND,payload:e}),l=e=>({type:a.x.UPLOAD_SINGLE_IMAGE,payload:e})},1163:function(e,t,n){e.exports=n(9090)}},function(e){e.O(0,[649,888,774,179],function(){return e(e.s=8379)}),_N_E=e.O()}]);