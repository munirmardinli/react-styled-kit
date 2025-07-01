import{j as n,r as u,u as Q,b as At,d as j,s as at,q as st,x as it}from"./iframe-BHvjZJ2j.js";import{s as y}from"./styled-Sfmc8kDj.js";import{c as Ht,a as lt}from"./ButtonBase-BexB5UvK.js";import{u as x,e as ct}from"./useSlot-8ULM_Esb.js";import{u as Vt}from"./getReactElementRef-CYxBYyGO.js";import{a as Y,g as tt,c as et,m as ot,b as J}from"./createSimplePaletteValueFilter-C0NtnPPB.js";import{C as Ft,a as Wt}from"./ClickAwayListener-B2MXm1is.js";import{P as wt}from"./Paper-DKGskS9b.js";import{G as Ut}from"./Grow-B6DGIYSA.js";import{c as G}from"./createSvgIcon--LnHKQuG.js";import{I as Nt}from"./IconButton-Z1FxMWD-.js";import{B as p}from"./Button-BiK53QvZ.js";import"./assertThisInitialized-BjnbojEp.js";import"./index-CeiEOdnu.js";function Gt(t){return tt("MuiAlert",t)}const dt=Y("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Kt=G(n.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"})),Zt=G(n.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})),_t=G(n.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),qt=G(n.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"})),Xt=t=>{const{variant:e,color:r,severity:o,classes:a}=t,l={root:["root",`color${j(r||o)}`,`${e}${j(r||o)}`,`${e}`],icon:["icon"],message:["message"],action:["action"]};return et(l,Gt,a)},Jt=y(wt,{name:"MuiAlert",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[r.variant],e[`${r.variant}${j(r.color||r.severity)}`]]}})(ot(({theme:t})=>{const e=t.palette.mode==="light"?at:st,r=t.palette.mode==="light"?st:at;return{...t.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(t.palette).filter(J(["light"])).map(([o])=>({props:{colorSeverity:o,variant:"standard"},style:{color:t.vars?t.vars.palette.Alert[`${o}Color`]:e(t.palette[o].light,.6),backgroundColor:t.vars?t.vars.palette.Alert[`${o}StandardBg`]:r(t.palette[o].light,.9),[`& .${dt.icon}`]:t.vars?{color:t.vars.palette.Alert[`${o}IconColor`]}:{color:t.palette[o].main}}})),...Object.entries(t.palette).filter(J(["light"])).map(([o])=>({props:{colorSeverity:o,variant:"outlined"},style:{color:t.vars?t.vars.palette.Alert[`${o}Color`]:e(t.palette[o].light,.6),border:`1px solid ${(t.vars||t).palette[o].light}`,[`& .${dt.icon}`]:t.vars?{color:t.vars.palette.Alert[`${o}IconColor`]}:{color:t.palette[o].main}}})),...Object.entries(t.palette).filter(J(["dark"])).map(([o])=>({props:{colorSeverity:o,variant:"filled"},style:{fontWeight:t.typography.fontWeightMedium,...t.vars?{color:t.vars.palette.Alert[`${o}FilledColor`],backgroundColor:t.vars.palette.Alert[`${o}FilledBg`]}:{backgroundColor:t.palette.mode==="dark"?t.palette[o].dark:t.palette[o].main,color:t.palette.getContrastText(t.palette[o].main)}}}))]}})),Qt=y("div",{name:"MuiAlert",slot:"Icon"})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Yt=y("div",{name:"MuiAlert",slot:"Message"})({padding:"8px 0",minWidth:0,overflow:"auto"}),te=y("div",{name:"MuiAlert",slot:"Action"})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),pt={success:n.jsx(Kt,{fontSize:"inherit"}),warning:n.jsx(Zt,{fontSize:"inherit"}),error:n.jsx(_t,{fontSize:"inherit"}),info:n.jsx(qt,{fontSize:"inherit"})},ee=u.forwardRef(function(e,r){const o=Q({props:e,name:"MuiAlert"}),{action:a,children:l,className:f,closeText:v="Close",color:S,components:k={},componentsProps:g={},icon:m,iconMapping:P=pt,onClose:O,role:z="alert",severity:h="success",slotProps:K={},slots:s={},variant:i="standard",...c}=o,A={...o,color:S,severity:h,variant:i,colorSeverity:S||h},M=Xt(A),B={slots:{closeButton:k.CloseButton,closeIcon:k.CloseIcon,...s},slotProps:{...g,...K}},[L,Z]=x("root",{ref:r,shouldForwardComponentProp:!0,className:At(M.root,f),elementType:Jt,externalForwardedProps:{...B,...c},ownerState:A,additionalProps:{role:z,elevation:0}}),[I,E]=x("icon",{className:M.icon,elementType:Qt,externalForwardedProps:B,ownerState:A}),[R,$]=x("message",{className:M.message,elementType:Yt,externalForwardedProps:B,ownerState:A}),[D,H]=x("action",{className:M.action,elementType:te,externalForwardedProps:B,ownerState:A}),[w,_]=x("closeButton",{elementType:Nt,externalForwardedProps:B,ownerState:A}),[q,X]=x("closeIcon",{elementType:Ft,externalForwardedProps:B,ownerState:A});return n.jsxs(L,{...Z,children:[m!==!1?n.jsx(I,{...E,children:m||P[h]||pt[h]}):null,n.jsx(R,{...$,children:l}),a!=null?n.jsx(D,{...H,children:a}):null,a==null&&O?n.jsx(D,{...H,children:n.jsx(w,{size:"small","aria-label":v,title:v,color:"inherit",onClick:O,..._,children:n.jsx(q,{fontSize:"small",...X})})}):null]})});function oe(t={}){const{autoHideDuration:e=null,disableWindowBlurListener:r=!1,onClose:o,open:a,resumeHideDuration:l}=t,f=Ht();u.useEffect(()=>{if(!a)return;function s(i){i.defaultPrevented||i.key==="Escape"&&(o==null||o(i,"escapeKeyDown"))}return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[a,o]);const v=lt((s,i)=>{o==null||o(s,i)}),S=lt(s=>{!o||s==null||f.start(s,()=>{v(null,"timeout")})});u.useEffect(()=>(a&&S(e),f.clear),[a,e,S,f]);const k=s=>{o==null||o(s,"clickaway")},g=f.clear,m=u.useCallback(()=>{e!=null&&S(l??e*.5)},[e,l,S]),P=s=>i=>{const c=s.onBlur;c==null||c(i),m()},O=s=>i=>{const c=s.onFocus;c==null||c(i),g()},z=s=>i=>{const c=s.onMouseEnter;c==null||c(i),g()},h=s=>i=>{const c=s.onMouseLeave;c==null||c(i),m()};return u.useEffect(()=>{if(!r&&a)return window.addEventListener("focus",m),window.addEventListener("blur",g),()=>{window.removeEventListener("focus",m),window.removeEventListener("blur",g)}},[r,a,m,g]),{getRootProps:(s={})=>{const i={...ct(t),...ct(s)};return{role:"presentation",...s,...i,onBlur:P(i),onFocus:O(i),onMouseEnter:z(i),onMouseLeave:h(i)}},onClickAway:k}}function ne(t){return tt("MuiSnackbarContent",t)}Y("MuiSnackbarContent",["root","message","action"]);const re=t=>{const{classes:e}=t;return et({root:["root"],action:["action"],message:["message"]},ne,e)},ae=y(wt,{name:"MuiSnackbarContent",slot:"Root"})(ot(({theme:t})=>{const e=t.palette.mode==="light"?.8:.98;return{...t.typography.body2,color:t.vars?t.vars.palette.SnackbarContent.color:t.palette.getContrastText(it(t.palette.background.default,e)),backgroundColor:t.vars?t.vars.palette.SnackbarContent.bg:it(t.palette.background.default,e),display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",flexGrow:1,[t.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),se=y("div",{name:"MuiSnackbarContent",slot:"Message"})({padding:"8px 0"}),ie=y("div",{name:"MuiSnackbarContent",slot:"Action"})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),le=u.forwardRef(function(e,r){const o=Q({props:e,name:"MuiSnackbarContent"}),{action:a,className:l,message:f,role:v="alert",...S}=o,k=o,g=re(k);return n.jsxs(ae,{role:v,elevation:6,className:At(g.root,l),ownerState:k,ref:r,...S,children:[n.jsx(se,{className:g.message,ownerState:k,children:f}),a?n.jsx(ie,{className:g.action,ownerState:k,children:a}):null]})});function ce(t){return tt("MuiSnackbar",t)}Y("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const de=t=>{const{classes:e,anchorOrigin:r}=t,o={root:["root",`anchorOrigin${j(r.vertical)}${j(r.horizontal)}`]};return et(o,ce,e)},pe=y("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[`anchorOrigin${j(r.anchorOrigin.vertical)}${j(r.anchorOrigin.horizontal)}`]]}})(ot(({theme:t})=>({zIndex:(t.vars||t).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:e})=>e.anchorOrigin.vertical==="top",style:{top:8,[t.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:e})=>e.anchorOrigin.vertical!=="top",style:{bottom:8,[t.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:e})=>e.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[t.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:e})=>e.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[t.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:e})=>e.anchorOrigin.horizontal==="center",style:{[t.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),ue=u.forwardRef(function(e,r){const o=Q({props:e,name:"MuiSnackbar"}),a=Vt(),l={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{action:f,anchorOrigin:{vertical:v,horizontal:S}={vertical:"bottom",horizontal:"left"},autoHideDuration:k=null,children:g,className:m,ClickAwayListenerProps:P,ContentProps:O,disableWindowBlurListener:z=!1,message:h,onBlur:K,onClose:s,onFocus:i,onMouseEnter:c,onMouseLeave:A,open:M,resumeHideDuration:B,slots:L={},slotProps:Z={},TransitionComponent:I,transitionDuration:E=l,TransitionProps:{onEnter:R,onExited:$,...D}={},...H}=o,w={...o,anchorOrigin:{vertical:v,horizontal:S},autoHideDuration:k,disableWindowBlurListener:z,TransitionComponent:I,transitionDuration:E},_=de(w),{getRootProps:q,onClickAway:X}=oe({...w}),[Bt,nt]=u.useState(!0),jt=d=>{nt(!0),$&&$(d)},Ot=(d,C)=>{nt(!1),R&&R(d,C)},V={slots:{transition:I,...L},slotProps:{content:O,clickAwayListener:P,transition:D,...Z}},[Pt,zt]=x("root",{ref:r,className:[_.root,m],elementType:pe,getSlotProps:q,externalForwardedProps:{...V,...H},ownerState:w}),[Tt,{ownerState:Lt,...It}]=x("clickAwayListener",{elementType:Wt,externalForwardedProps:V,getSlotProps:d=>({onClickAway:(...C)=>{var rt;const b=C[0];(rt=d.onClickAway)==null||rt.call(d,...C),!(b!=null&&b.defaultMuiPrevented)&&X(...C)}}),ownerState:w}),[Et,Rt]=x("content",{elementType:le,shouldForwardComponentProp:!0,externalForwardedProps:V,additionalProps:{message:h,action:f},ownerState:w}),[$t,Dt]=x("transition",{elementType:Ut,externalForwardedProps:V,getSlotProps:d=>({onEnter:(...C)=>{var b;(b=d.onEnter)==null||b.call(d,...C),Ot(...C)},onExited:(...C)=>{var b;(b=d.onExited)==null||b.call(d,...C),jt(...C)}}),additionalProps:{appear:!0,in:M,timeout:E,direction:v==="top"?"down":"up"},ownerState:w});return!M&&Bt?null:n.jsx(Tt,{...It,...L.clickAwayListener&&{ownerState:Lt},children:n.jsx(Pt,{...zt,children:n.jsx($t,{...Dt,children:g||n.jsx(Et,{...Rt})})})})}),T=y(ue)(({theme:t})=>({"& .MuiSnackbar-root":{zIndex:t.zIndex.snackbar,borderRadius:t.shape.borderRadius,boxShadow:t.shadows[3],backgroundColor:t.palette.background.default,color:t.palette.text.primary,transition:"all 0.3s ease","&:hover":{boxShadow:t.shadows[6],transform:"scale(1.05)"}},"& .MuiSnackbar-anchorOriginBottomCenter":{bottom:t.spacing(2)},"& .MuiSnackbar-anchorOriginBottomLeft":{bottom:t.spacing(2),left:t.spacing(2)},"& .MuiSnackbar-anchorOriginBottomRight":{bottom:t.spacing(2),right:t.spacing(2)},"& .MuiSnackbar-anchorOriginTopCenter":{top:t.spacing(2)},"& .MuiSnackbar-anchorOriginTopLeft":{top:t.spacing(2),left:t.spacing(2)},"& .MuiSnackbar-anchorOriginTopRight":{top:t.spacing(2),right:t.spacing(2)}})),Mt=y(ee)(({theme:t})=>({"& .MuiAlert-root":{borderRadius:t.shape.borderRadius,padding:t.spacing(1.5,2),fontSize:t.typography.pxToRem(14),boxShadow:t.shadows[3],transition:"all 0.3s ease","&:hover":{boxShadow:t.shadows[6],transform:"scale(1.05)"}},"& .MuiAlert-action":{marginLeft:t.spacing(1)},"& .MuiAlert-colorError":{backgroundColor:t.palette.error.main,color:t.palette.error.contrastText},"& .MuiAlert-colorInfo":{backgroundColor:t.palette.info.main,color:t.palette.info.contrastText},"& .MuiAlert-colorSuccess":{backgroundColor:t.palette.success.main,color:t.palette.success.contrastText},"& .MuiAlert-colorWarning":{backgroundColor:t.palette.warning.main,color:t.palette.warning.contrastText},"& .MuiAlert-filled":{border:`1px solid ${t.palette.divider}`},"& .MuiAlert-filledError":{backgroundColor:t.palette.error.dark},"& .MuiAlert-filledInfo":{backgroundColor:t.palette.info.dark},"& .MuiAlert-filledSuccess":{backgroundColor:t.palette.success.dark},"& .MuiAlert-filledWarning":{backgroundColor:t.palette.warning.dark},"& .MuiAlert-outlined":{border:`1px solid ${t.palette.grey[300]}`,backgroundColor:t.palette.background.paper},"& .MuiAlert-outlinedError":{borderColor:t.palette.error.main},"& .MuiAlert-outlinedInfo":{borderColor:t.palette.info.main},"& .MuiAlert-outlinedSuccess":{borderColor:t.palette.success.main},"& .MuiAlert-outlinedWarning":{borderColor:t.palette.warning.main},"& .MuiAlert-standard":{backgroundColor:t.palette.background.default,color:t.palette.text.primary},"& .MuiAlert-standardError":{backgroundColor:t.palette.error.light},"& .MuiAlert-standardInfo":{backgroundColor:t.palette.info.light},"& .MuiAlert-standardSuccess":{backgroundColor:t.palette.success.light},"& .MuiAlert-standardWarning":{backgroundColor:t.palette.warning.light},"& .MuiAlert-icon":{marginRight:t.spacing(1)},"& .MuiAlert-message":{display:"flex",alignItems:"center"}})),Be={title:"Components/Snackbars/Snackbars",component:T,tags:["autodocs"],parameters:{docs:{description:{component:`
### 🍿 StyledSnackbar & StyledSnackbarAlert

Customized notification components built on Material-UI's Snackbar and Alert with enhanced styling and interactive effects.

#### ✅ Features
- Theme-aware positioning and colors
- Severity-based styling (error, warning, info, success)
- Multiple variants (standard, filled, outlined)
- Smooth hover animations and shadow effects
- Responsive design with consistent spacing

---

### 📦 Example Variants

| Story               | Description                                |
|---------------------|--------------------------------------------|
| Basic Usage         | Default snackbar with text message         |
| Severity Levels     | Different alert types (error, warning, etc)|
| Position Variations | Different screen placement options         |
| Alert Variants      | Standard, filled, and outlined styles      |

---
        `.trim()}}}},F={render:()=>{const[t,e]=u.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(p,{variant:"contained",onClick:()=>e(!0),children:"Show Snackbar"}),n.jsx(T,{open:t,autoHideDuration:6e3,onClose:()=>e(!1),message:"This is a basic snackbar message"})]})},name:"Basic Usage"},W={render:()=>{const[t,e]=u.useState(!1),[r,o]=u.useState("info"),a=l=>{o(l),e(!0)};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"16px"},children:[n.jsx(p,{variant:"contained",color:"error",onClick:()=>a("error"),children:"Error"}),n.jsx(p,{variant:"contained",color:"warning",onClick:()=>a("warning"),children:"Warning"}),n.jsx(p,{variant:"contained",color:"info",onClick:()=>a("info"),children:"Info"}),n.jsx(p,{variant:"contained",color:"success",onClick:()=>a("success"),children:"Success"})]}),n.jsx(T,{open:t,autoHideDuration:6e3,onClose:()=>e(!1),anchorOrigin:{vertical:"bottom",horizontal:"center"},children:n.jsxs(Mt,{severity:r,onClose:()=>e(!1),children:["This is a ",r," message!"]})})]})},name:"Severity Levels"},U={render:()=>{const[t,e]=u.useState({open:!1,vertical:"top",horizontal:"center"}),{vertical:r,horizontal:o,open:a}=t,l=v=>()=>{e({...v,open:!0})},f=()=>{e({...t,open:!1})};return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsx(p,{variant:"outlined",onClick:l({vertical:"top",horizontal:"left",open:!1}),children:"Top-Left"}),n.jsx(p,{variant:"outlined",onClick:l({vertical:"top",horizontal:"center",open:!1}),children:"Top-Center"}),n.jsx(p,{variant:"outlined",onClick:l({vertical:"top",horizontal:"right",open:!1}),children:"Top-Right"})]}),n.jsxs("div",{style:{display:"flex",gap:"8px"},children:[n.jsx(p,{variant:"outlined",onClick:l({vertical:"bottom",horizontal:"left",open:!1}),children:"Bottom-Left"}),n.jsx(p,{variant:"outlined",onClick:l({vertical:"bottom",horizontal:"center",open:!1}),children:"Bottom-Center"}),n.jsx(p,{variant:"outlined",onClick:l({vertical:"bottom",horizontal:"right",open:!1}),children:"Bottom-Right"})]})]}),n.jsx(T,{anchorOrigin:{vertical:r,horizontal:o},open:a,onClose:f,message:"Positioned snackbar"},r+o)]})},name:"Position Variations"},N={render:()=>{const[t,e]=u.useState(!1),[r,o]=u.useState("standard");return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"16px"},children:[n.jsx(p,{variant:"outlined",onClick:()=>{o("standard"),e(!0)},children:"Standard"}),n.jsx(p,{variant:"outlined",onClick:()=>{o("filled"),e(!0)},children:"Filled"}),n.jsx(p,{variant:"outlined",onClick:()=>{o("outlined"),e(!0)},children:"Outlined"})]}),n.jsx(T,{open:t,autoHideDuration:6e3,onClose:()=>e(!1),anchorOrigin:{vertical:"bottom",horizontal:"center"},children:n.jsxs(Mt,{severity:"info",variant:r,onClose:()=>e(!1),children:["This is a ",r," variant alert"]})})]})},name:"Alert Variants"};var ut,gt,ft;F.parameters={...F.parameters,docs:{...(ut=F.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Show Snackbar
        </Button>
        <StyledSnackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)} message="This is a basic snackbar message" />
      </>;
  },
  name: 'Basic Usage'
}`,...(ft=(gt=F.parameters)==null?void 0:gt.docs)==null?void 0:ft.source}}};var vt,St,kt;W.parameters={...W.parameters,docs:{...(vt=W.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState<AlertProps['severity']>('info');
    const showAlert = (type: AlertProps['severity']) => {
      setSeverity(type);
      setOpen(true);
    };
    return <>
        <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '16px'
      }}>
          <Button variant="contained" color="error" onClick={() => showAlert('error')}>
            Error
          </Button>
          <Button variant="contained" color="warning" onClick={() => showAlert('warning')}>
            Warning
          </Button>
          <Button variant="contained" color="info" onClick={() => showAlert('info')}>
            Info
          </Button>
          <Button variant="contained" color="success" onClick={() => showAlert('success')}>
            Success
          </Button>
        </div>

        <StyledSnackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}>
          <StyledSnackbarAlert severity={severity} onClose={() => setOpen(false)}>
            This is a {severity} message!
          </StyledSnackbarAlert>
        </StyledSnackbar>
      </>;
  },
  name: 'Severity Levels'
}`,...(kt=(St=W.parameters)==null?void 0:St.docs)==null?void 0:kt.source}}};var Ct,mt,xt;U.parameters={...U.parameters,docs:{...(Ct=U.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = useState({
      open: false,
      vertical: 'top' as 'top' | 'bottom',
      horizontal: 'center' as 'left' | 'center' | 'right'
    });
    const {
      vertical,
      horizontal,
      open
    } = state;
    const handleClick = (newState: typeof state) => () => {
      setState({
        ...newState,
        open: true
      });
    };
    const handleClose = () => {
      setState({
        ...state,
        open: false
      });
    };
    return <>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
          <div style={{
          display: 'flex',
          gap: '8px'
        }}>
            <Button variant="outlined" onClick={handleClick({
            vertical: 'top',
            horizontal: 'left',
            open: false
          })}>
              Top-Left
            </Button>
            <Button variant="outlined" onClick={handleClick({
            vertical: 'top',
            horizontal: 'center',
            open: false
          })}>
              Top-Center
            </Button>
            <Button variant="outlined" onClick={handleClick({
            vertical: 'top',
            horizontal: 'right',
            open: false
          })}>
              Top-Right
            </Button>
          </div>
          <div style={{
          display: 'flex',
          gap: '8px'
        }}>
            <Button variant="outlined" onClick={handleClick({
            vertical: 'bottom',
            horizontal: 'left',
            open: false
          })}>
              Bottom-Left
            </Button>
            <Button variant="outlined" onClick={handleClick({
            vertical: 'bottom',
            horizontal: 'center',
            open: false
          })}>
              Bottom-Center
            </Button>
            <Button variant="outlined" onClick={handleClick({
            vertical: 'bottom',
            horizontal: 'right',
            open: false
          })}>
              Bottom-Right
            </Button>
          </div>
        </div>

        <StyledSnackbar anchorOrigin={{
        vertical,
        horizontal
      }} open={open} onClose={handleClose} message="Positioned snackbar" key={vertical + horizontal} />
      </>;
  },
  name: 'Position Variations'
}`,...(xt=(mt=U.parameters)==null?void 0:mt.docs)==null?void 0:xt.source}}};var yt,bt,ht;N.parameters={...N.parameters,docs:{...(yt=N.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [variant, setVariant] = useState<AlertProps['variant']>('standard');
    return <>
        <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '16px'
      }}>
          <Button variant="outlined" onClick={() => {
          setVariant('standard');
          setOpen(true);
        }}>
            Standard
          </Button>
          <Button variant="outlined" onClick={() => {
          setVariant('filled');
          setOpen(true);
        }}>
            Filled
          </Button>
          <Button variant="outlined" onClick={() => {
          setVariant('outlined');
          setOpen(true);
        }}>
            Outlined
          </Button>
        </div>

        <StyledSnackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)} anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}>
          <StyledSnackbarAlert severity="info" variant={variant} onClose={() => setOpen(false)}>
            This is a {variant} variant alert
          </StyledSnackbarAlert>
        </StyledSnackbar>
      </>;
  },
  name: 'Alert Variants'
}`,...(ht=(bt=N.parameters)==null?void 0:bt.docs)==null?void 0:ht.source}}};const je=["BasicUsage","SeverityLevels","PositionVariations","AlertVariants"];export{N as AlertVariants,F as BasicUsage,U as PositionVariations,W as SeverityLevels,je as __namedExportsOrder,Be as default};
