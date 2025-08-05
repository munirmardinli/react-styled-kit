import{j as e,r as d,u as J,b as cn,d as B,y as on}from"./iframe-jxtUxaR9.js";import{s as b}from"./styled-DVBkpXcY.js";import{d as wn,a as rn}from"./ButtonBase-ip0BSY1n.js";import{u as m,e as an}from"./useSlot-Axrh0xRK.js";import{u as Mn}from"./getReactElementRef-C9fz6be2.js";import{a as Q,g as Y,c as nn,m as tn,b as q}from"./createSimplePaletteValueFilter-3gGRDZXa.js";import{C as Bn,a as jn}from"./ClickAwayListener-CX9zYNdu.js";import{P as dn}from"./Paper-CeAM3uet.js";import{G as On}from"./Grow-GuQTlBHW.js";import{c as N}from"./createSvgIcon-Dujc27Ao.js";import{I as Pn}from"./IconButton-tEHc8Nrn.js";import{B as c}from"./Button-Dk24mqPE.js";import"./preload-helper-D9Z9MdNV.js";import"./assertThisInitialized-BjnbojEp.js";import"./index-CmV3qbgN.js";function zn(n){return Y("MuiAlert",n)}const sn=Q("MuiAlert",["root","action","icon","message","filled","colorSuccess","colorInfo","colorWarning","colorError","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),Ln=N(e.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"})),Tn=N(e.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"})),En=N(e.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"})),In=N(e.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"})),Rn=n=>{const{variant:t,color:r,severity:o,classes:a}=n,l={root:["root",`color${B(r||o)}`,`${t}${B(r||o)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return nn(l,zn,a)},$n=b(dn,{name:"MuiAlert",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:r}=n;return[t.root,t[r.variant],t[`${r.variant}${B(r.color||r.severity)}`]]}})(tn(({theme:n})=>{const t=n.palette.mode==="light"?n.darken:n.lighten,r=n.palette.mode==="light"?n.lighten:n.darken;return{...n.typography.body2,backgroundColor:"transparent",display:"flex",padding:"6px 16px",variants:[...Object.entries(n.palette).filter(q(["light"])).map(([o])=>({props:{colorSeverity:o,variant:"standard"},style:{color:n.vars?n.vars.palette.Alert[`${o}Color`]:t(n.palette[o].light,.6),backgroundColor:n.vars?n.vars.palette.Alert[`${o}StandardBg`]:r(n.palette[o].light,.9),[`& .${sn.icon}`]:n.vars?{color:n.vars.palette.Alert[`${o}IconColor`]}:{color:n.palette[o].main}}})),...Object.entries(n.palette).filter(q(["light"])).map(([o])=>({props:{colorSeverity:o,variant:"outlined"},style:{color:n.vars?n.vars.palette.Alert[`${o}Color`]:t(n.palette[o].light,.6),border:`1px solid ${(n.vars||n).palette[o].light}`,[`& .${sn.icon}`]:n.vars?{color:n.vars.palette.Alert[`${o}IconColor`]}:{color:n.palette[o].main}}})),...Object.entries(n.palette).filter(q(["dark"])).map(([o])=>({props:{colorSeverity:o,variant:"filled"},style:{fontWeight:n.typography.fontWeightMedium,...n.vars?{color:n.vars.palette.Alert[`${o}FilledColor`],backgroundColor:n.vars.palette.Alert[`${o}FilledBg`]}:{backgroundColor:n.palette.mode==="dark"?n.palette[o].dark:n.palette[o].main,color:n.palette.getContrastText(n.palette[o].main)}}}))]}})),Fn=b("div",{name:"MuiAlert",slot:"Icon"})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Dn=b("div",{name:"MuiAlert",slot:"Message"})({padding:"8px 0",minWidth:0,overflow:"auto"}),Hn=b("div",{name:"MuiAlert",slot:"Action"})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),ln={success:e.jsx(Ln,{fontSize:"inherit"}),warning:e.jsx(Tn,{fontSize:"inherit"}),error:e.jsx(En,{fontSize:"inherit"}),info:e.jsx(In,{fontSize:"inherit"})},Vn=d.forwardRef(function(t,r){const o=J({props:t,name:"MuiAlert"}),{action:a,children:l,className:u,closeText:g="Close",color:f,components:v={},componentsProps:p={},icon:S,iconMapping:O=ln,onClose:j,role:P="alert",severity:x="success",slotProps:G={},slots:s={},variant:i="standard",...k}=o,y={...o,color:f,severity:x,variant:i,colorSeverity:f||x},w=Rn(y),M={slots:{closeButton:v.CloseButton,closeIcon:v.CloseIcon,...s},slotProps:{...p,...G}},[L,K]=m("root",{ref:r,shouldForwardComponentProp:!0,className:cn(w.root,u),elementType:$n,externalForwardedProps:{...M,...k},ownerState:y,additionalProps:{role:P,elevation:0}}),[T,E]=m("icon",{className:w.icon,elementType:Fn,externalForwardedProps:M,ownerState:y}),[I,R]=m("message",{className:w.message,elementType:Dn,externalForwardedProps:M,ownerState:y}),[$,F]=m("action",{className:w.action,elementType:Hn,externalForwardedProps:M,ownerState:y}),[h,Z]=m("closeButton",{elementType:Pn,externalForwardedProps:M,ownerState:y}),[_,X]=m("closeIcon",{elementType:Bn,externalForwardedProps:M,ownerState:y});return e.jsxs(L,{...K,children:[S!==!1?e.jsx(T,{...E,children:S||O[x]||ln[x]}):null,e.jsx(I,{...R,children:l}),a!=null?e.jsx($,{...F,children:a}):null,a==null&&j?e.jsx($,{...F,children:e.jsx(h,{size:"small","aria-label":g,title:g,color:"inherit",onClick:j,...Z,children:e.jsx(_,{fontSize:"small",...X})})}):null]})});function Wn(n={}){const{autoHideDuration:t=null,disableWindowBlurListener:r=!1,onClose:o,open:a,resumeHideDuration:l}=n,u=wn();d.useEffect(()=>{if(!a)return;function s(i){i.defaultPrevented||i.key==="Escape"&&o?.(i,"escapeKeyDown")}return document.addEventListener("keydown",s),()=>{document.removeEventListener("keydown",s)}},[a,o]);const g=rn((s,i)=>{o?.(s,i)}),f=rn(s=>{!o||s==null||u.start(s,()=>{g(null,"timeout")})});d.useEffect(()=>(a&&f(t),u.clear),[a,t,f,u]);const v=s=>{o?.(s,"clickaway")},p=u.clear,S=d.useCallback(()=>{t!=null&&f(l??t*.5)},[t,l,f]),O=s=>i=>{const k=s.onBlur;k?.(i),S()},j=s=>i=>{const k=s.onFocus;k?.(i),p()},P=s=>i=>{const k=s.onMouseEnter;k?.(i),p()},x=s=>i=>{const k=s.onMouseLeave;k?.(i),S()};return d.useEffect(()=>{if(!r&&a)return window.addEventListener("focus",S),window.addEventListener("blur",p),()=>{window.removeEventListener("focus",S),window.removeEventListener("blur",p)}},[r,a,S,p]),{getRootProps:(s={})=>{const i={...an(n),...an(s)};return{role:"presentation",...s,...i,onBlur:O(i),onFocus:j(i),onMouseEnter:P(i),onMouseLeave:x(i)}},onClickAway:v}}function Un(n){return Y("MuiSnackbarContent",n)}Q("MuiSnackbarContent",["root","message","action"]);const Nn=n=>{const{classes:t}=n;return nn({root:["root"],action:["action"],message:["message"]},Un,t)},Gn=b(dn,{name:"MuiSnackbarContent",slot:"Root"})(tn(({theme:n})=>{const t=n.palette.mode==="light"?.8:.98;return{...n.typography.body2,color:n.vars?n.vars.palette.SnackbarContent.color:n.palette.getContrastText(on(n.palette.background.default,t)),backgroundColor:n.vars?n.vars.palette.SnackbarContent.bg:on(n.palette.background.default,t),display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",flexGrow:1,[n.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}}})),Kn=b("div",{name:"MuiSnackbarContent",slot:"Message"})({padding:"8px 0"}),Zn=b("div",{name:"MuiSnackbarContent",slot:"Action"})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),_n=d.forwardRef(function(t,r){const o=J({props:t,name:"MuiSnackbarContent"}),{action:a,className:l,message:u,role:g="alert",...f}=o,v=o,p=Nn(v);return e.jsxs(Gn,{role:g,elevation:6,className:cn(p.root,l),ownerState:v,ref:r,...f,children:[e.jsx(Kn,{className:p.message,ownerState:v,children:u}),a?e.jsx(Zn,{className:p.action,ownerState:v,children:a}):null]})});function Xn(n){return Y("MuiSnackbar",n)}Q("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const qn=n=>{const{classes:t,anchorOrigin:r}=n,o={root:["root",`anchorOrigin${B(r.vertical)}${B(r.horizontal)}`]};return nn(o,Xn,t)},Jn=b("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(n,t)=>{const{ownerState:r}=n;return[t.root,t[`anchorOrigin${B(r.anchorOrigin.vertical)}${B(r.anchorOrigin.horizontal)}`]]}})(tn(({theme:n})=>({zIndex:(n.vars||n).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center",variants:[{props:({ownerState:t})=>t.anchorOrigin.vertical==="top",style:{top:8,[n.breakpoints.up("sm")]:{top:24}}},{props:({ownerState:t})=>t.anchorOrigin.vertical!=="top",style:{bottom:8,[n.breakpoints.up("sm")]:{bottom:24}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="left",style:{justifyContent:"flex-start",[n.breakpoints.up("sm")]:{left:24,right:"auto"}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="right",style:{justifyContent:"flex-end",[n.breakpoints.up("sm")]:{right:24,left:"auto"}}},{props:({ownerState:t})=>t.anchorOrigin.horizontal==="center",style:{[n.breakpoints.up("sm")]:{left:"50%",right:"auto",transform:"translateX(-50%)"}}}]}))),Qn=d.forwardRef(function(t,r){const o=J({props:t,name:"MuiSnackbar"}),a=Mn(),l={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{action:u,anchorOrigin:{vertical:g,horizontal:f}={vertical:"bottom",horizontal:"left"},autoHideDuration:v=null,children:p,className:S,ClickAwayListenerProps:O,ContentProps:j,disableWindowBlurListener:P=!1,message:x,onBlur:G,onClose:s,onFocus:i,onMouseEnter:k,onMouseLeave:y,open:w,resumeHideDuration:M,slots:L={},slotProps:K={},TransitionComponent:T,transitionDuration:E=l,TransitionProps:{onEnter:I,onExited:R,...$}={},...F}=o,h={...o,anchorOrigin:{vertical:g,horizontal:f},autoHideDuration:v,disableWindowBlurListener:P,TransitionComponent:T,transitionDuration:E},Z=qn(h),{getRootProps:_,onClickAway:X}=Wn({...h}),[un,en]=d.useState(!0),gn=A=>{en(!0),R&&R(A)},fn=(A,C)=>{en(!1),I&&I(A,C)},D={slots:{transition:T,...L},slotProps:{content:j,clickAwayListener:O,transition:$,...K}},[vn,Cn]=m("root",{ref:r,className:[Z.root,S],elementType:Jn,getSlotProps:_,externalForwardedProps:{...D,...F},ownerState:h}),[Sn,{ownerState:kn,...mn}]=m("clickAwayListener",{elementType:jn,externalForwardedProps:D,getSlotProps:A=>({onClickAway:(...C)=>{const An=C[0];A.onClickAway?.(...C),!An?.defaultMuiPrevented&&X(...C)}}),ownerState:h}),[bn,xn]=m("content",{elementType:_n,shouldForwardComponentProp:!0,externalForwardedProps:D,additionalProps:{message:x,action:u},ownerState:h}),[yn,hn]=m("transition",{elementType:On,externalForwardedProps:D,getSlotProps:A=>({onEnter:(...C)=>{A.onEnter?.(...C),fn(...C)},onExited:(...C)=>{A.onExited?.(...C),gn(...C)}}),additionalProps:{appear:!0,in:w,timeout:E,direction:g==="top"?"down":"up"},ownerState:h});return!w&&un?null:e.jsx(Sn,{...mn,...L.clickAwayListener&&{ownerState:kn},children:e.jsx(vn,{...Cn,children:e.jsx(yn,{...hn,children:p||e.jsx(bn,{...xn})})})})}),z=b(Qn)(({theme:n})=>({"& .MuiSnackbar-root":{zIndex:n.zIndex.snackbar,borderRadius:n.shape.borderRadius,boxShadow:n.shadows[3],backgroundColor:n.palette.background.default,color:n.palette.text.primary,transition:"all 0.3s ease","&:hover":{boxShadow:n.shadows[6],transform:"scale(1.05)"}},"& .MuiSnackbar-anchorOriginBottomCenter":{bottom:n.spacing(2)},"& .MuiSnackbar-anchorOriginBottomLeft":{bottom:n.spacing(2),left:n.spacing(2)},"& .MuiSnackbar-anchorOriginBottomRight":{bottom:n.spacing(2),right:n.spacing(2)},"& .MuiSnackbar-anchorOriginTopCenter":{top:n.spacing(2)},"& .MuiSnackbar-anchorOriginTopLeft":{top:n.spacing(2),left:n.spacing(2)},"& .MuiSnackbar-anchorOriginTopRight":{top:n.spacing(2),right:n.spacing(2)}})),pn=b(Vn)(({theme:n})=>({"& .MuiAlert-root":{borderRadius:n.shape.borderRadius,padding:n.spacing(1.5,2),fontSize:n.typography.pxToRem(14),boxShadow:n.shadows[3],transition:"all 0.3s ease","&:hover":{boxShadow:n.shadows[6],transform:"scale(1.05)"}},"& .MuiAlert-action":{marginLeft:n.spacing(1)},"& .MuiAlert-colorError":{backgroundColor:n.palette.error.main,color:n.palette.error.contrastText},"& .MuiAlert-colorInfo":{backgroundColor:n.palette.info.main,color:n.palette.info.contrastText},"& .MuiAlert-colorSuccess":{backgroundColor:n.palette.success.main,color:n.palette.success.contrastText},"& .MuiAlert-colorWarning":{backgroundColor:n.palette.warning.main,color:n.palette.warning.contrastText},"& .MuiAlert-filled":{border:`1px solid ${n.palette.divider}`},"& .MuiAlert-filledError":{backgroundColor:n.palette.error.dark},"& .MuiAlert-filledInfo":{backgroundColor:n.palette.info.dark},"& .MuiAlert-filledSuccess":{backgroundColor:n.palette.success.dark},"& .MuiAlert-filledWarning":{backgroundColor:n.palette.warning.dark},"& .MuiAlert-outlined":{border:`1px solid ${n.palette.grey[300]}`,backgroundColor:n.palette.background.paper},"& .MuiAlert-outlinedError":{borderColor:n.palette.error.main},"& .MuiAlert-outlinedInfo":{borderColor:n.palette.info.main},"& .MuiAlert-outlinedSuccess":{borderColor:n.palette.success.main},"& .MuiAlert-outlinedWarning":{borderColor:n.palette.warning.main},"& .MuiAlert-standard":{backgroundColor:n.palette.background.default,color:n.palette.text.primary},"& .MuiAlert-standardError":{backgroundColor:n.palette.error.light},"& .MuiAlert-standardInfo":{backgroundColor:n.palette.info.light},"& .MuiAlert-standardSuccess":{backgroundColor:n.palette.success.light},"& .MuiAlert-standardWarning":{backgroundColor:n.palette.warning.light},"& .MuiAlert-icon":{marginRight:n.spacing(1)},"& .MuiAlert-message":{display:"flex",alignItems:"center"}})),ft={title:"Components/Snackbars/Snackbars",component:z,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `.trim()}}}},H={render:()=>{const[n,t]=d.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{variant:"contained",onClick:()=>t(!0),children:"Show Snackbar"}),e.jsx(z,{open:n,autoHideDuration:6e3,onClose:()=>t(!1),message:"This is a basic snackbar message"})]})},name:"Basic Usage"},V={render:()=>{const[n,t]=d.useState(!1),[r,o]=d.useState("info"),a=l=>{o(l),t(!0)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"16px"},children:[e.jsx(c,{variant:"contained",color:"error",onClick:()=>a("error"),children:"Error"}),e.jsx(c,{variant:"contained",color:"warning",onClick:()=>a("warning"),children:"Warning"}),e.jsx(c,{variant:"contained",color:"info",onClick:()=>a("info"),children:"Info"}),e.jsx(c,{variant:"contained",color:"success",onClick:()=>a("success"),children:"Success"})]}),e.jsx(z,{open:n,autoHideDuration:6e3,onClose:()=>t(!1),anchorOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsxs(pn,{severity:r,onClose:()=>t(!1),children:["This is a ",r," message!"]})})]})},name:"Severity Levels"},W={render:()=>{const[n,t]=d.useState({open:!1,vertical:"top",horizontal:"center"}),{vertical:r,horizontal:o,open:a}=n,l=g=>()=>{t({...g,open:!0})},u=()=>{t({...n,open:!1})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(c,{variant:"outlined",onClick:l({vertical:"top",horizontal:"left",open:!1}),children:"Top-Left"}),e.jsx(c,{variant:"outlined",onClick:l({vertical:"top",horizontal:"center",open:!1}),children:"Top-Center"}),e.jsx(c,{variant:"outlined",onClick:l({vertical:"top",horizontal:"right",open:!1}),children:"Top-Right"})]}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(c,{variant:"outlined",onClick:l({vertical:"bottom",horizontal:"left",open:!1}),children:"Bottom-Left"}),e.jsx(c,{variant:"outlined",onClick:l({vertical:"bottom",horizontal:"center",open:!1}),children:"Bottom-Center"}),e.jsx(c,{variant:"outlined",onClick:l({vertical:"bottom",horizontal:"right",open:!1}),children:"Bottom-Right"})]})]}),e.jsx(z,{anchorOrigin:{vertical:r,horizontal:o},open:a,onClose:u,message:"Positioned snackbar"},r+o)]})},name:"Position Variations"},U={render:()=>{const[n,t]=d.useState(!1),[r,o]=d.useState("standard");return e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"16px"},children:[e.jsx(c,{variant:"outlined",onClick:()=>{o("standard"),t(!0)},children:"Standard"}),e.jsx(c,{variant:"outlined",onClick:()=>{o("filled"),t(!0)},children:"Filled"}),e.jsx(c,{variant:"outlined",onClick:()=>{o("outlined"),t(!0)},children:"Outlined"})]}),e.jsx(z,{open:n,autoHideDuration:6e3,onClose:()=>t(!1),anchorOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsxs(pn,{severity:"info",variant:r,onClose:()=>t(!1),children:["This is a ",r," variant alert"]})})]})},name:"Alert Variants"};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
    <Button variant="contained" onClick={() => setOpen(true)}>
     Show Snackbar
    </Button>
    <StyledSnackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)} message="This is a basic snackbar message" />
   </>;
  },
  name: "Basic Usage"
}`,...H.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState<AlertProps["severity"]>("info");
    const showAlert = (type: AlertProps["severity"]) => {
      setSeverity(type);
      setOpen(true);
    };
    return <>
    <div style={{
        display: "flex",
        gap: "8px",
        marginBottom: "16px"
      }}>
     <Button variant="contained" color="error" onClick={() => showAlert("error")}>
      Error
     </Button>
     <Button variant="contained" color="warning" onClick={() => showAlert("warning")}>
      Warning
     </Button>
     <Button variant="contained" color="info" onClick={() => showAlert("info")}>
      Info
     </Button>
     <Button variant="contained" color="success" onClick={() => showAlert("success")}>
      Success
     </Button>
    </div>

    <StyledSnackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)} anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}>
     <StyledSnackbarAlert severity={severity} onClose={() => setOpen(false)}>
      This is a {severity} message!
     </StyledSnackbarAlert>
    </StyledSnackbar>
   </>;
  },
  name: "Severity Levels"
}`,...V.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = useState({
      open: false,
      vertical: "top" as "top" | "bottom",
      horizontal: "center" as "left" | "center" | "right"
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
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}>
     <div style={{
          display: "flex",
          gap: "8px"
        }}>
      <Button variant="outlined" onClick={handleClick({
            vertical: "top",
            horizontal: "left",
            open: false
          })}>
       Top-Left
      </Button>
      <Button variant="outlined" onClick={handleClick({
            vertical: "top",
            horizontal: "center",
            open: false
          })}>
       Top-Center
      </Button>
      <Button variant="outlined" onClick={handleClick({
            vertical: "top",
            horizontal: "right",
            open: false
          })}>
       Top-Right
      </Button>
     </div>
     <div style={{
          display: "flex",
          gap: "8px"
        }}>
      <Button variant="outlined" onClick={handleClick({
            vertical: "bottom",
            horizontal: "left",
            open: false
          })}>
       Bottom-Left
      </Button>
      <Button variant="outlined" onClick={handleClick({
            vertical: "bottom",
            horizontal: "center",
            open: false
          })}>
       Bottom-Center
      </Button>
      <Button variant="outlined" onClick={handleClick({
            vertical: "bottom",
            horizontal: "right",
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
  name: "Position Variations"
}`,...W.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [variant, setVariant] = useState<AlertProps["variant"]>("standard");
    return <>
    <div style={{
        display: "flex",
        gap: "8px",
        marginBottom: "16px"
      }}>
     <Button variant="outlined" onClick={() => {
          setVariant("standard");
          setOpen(true);
        }}>
      Standard
     </Button>
     <Button variant="outlined" onClick={() => {
          setVariant("filled");
          setOpen(true);
        }}>
      Filled
     </Button>
     <Button variant="outlined" onClick={() => {
          setVariant("outlined");
          setOpen(true);
        }}>
      Outlined
     </Button>
    </div>

    <StyledSnackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)} anchorOrigin={{
        vertical: "bottom",
        horizontal: "center"
      }}>
     <StyledSnackbarAlert severity="info" variant={variant} onClose={() => setOpen(false)}>
      This is a {variant} variant alert
     </StyledSnackbarAlert>
    </StyledSnackbar>
   </>;
  },
  name: "Alert Variants"
}`,...U.parameters?.docs?.source}}};const vt=["BasicUsage","SeverityLevels","PositionVariations","AlertVariants"];export{U as AlertVariants,H as BasicUsage,W as PositionVariations,V as SeverityLevels,vt as __namedExportsOrder,ft as default};
