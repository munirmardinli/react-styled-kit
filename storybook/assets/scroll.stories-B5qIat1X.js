import{r as T,u as R,j as e,b as v,d as u}from"./iframe-jxtUxaR9.js";import{c as A}from"./createSvgIcon-Dujc27Ao.js";import{s as g,r as I}from"./styled-DVBkpXcY.js";import{a as j,g as M,c as V,m as b,b as D}from"./createSimplePaletteValueFilter-3gGRDZXa.js";import{B as U}from"./ButtonBase-ip0BSY1n.js";import"./preload-helper-D9Z9MdNV.js";import"./assertThisInitialized-BjnbojEp.js";function E(o){return M("MuiFab",o)}const C=j("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),B=o=>{const{color:r,variant:a,classes:t,size:l}=o,c={root:["root",a,`size${u(l)}`,r==="inherit"?"colorInherit":r]},d=V(c,E,t);return{...t,...d}},K=g(U,{name:"MuiFab",slot:"Root",shouldForwardProp:o=>I(o)||o==="classes",overridesResolver:(o,r)=>{const{ownerState:a}=o;return[r.root,r[a.variant],r[`size${u(a.size)}`],a.color==="inherit"&&r.colorInherit,r[u(a.size)],r[a.color]]}})(b(({theme:o})=>({...o.typography.button,minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(o.vars||o).zIndex.fab,boxShadow:(o.vars||o).shadows[6],"&:active":{boxShadow:(o.vars||o).shadows[12]},color:o.vars?o.vars.palette.grey[900]:o.palette.getContrastText?.(o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],"&:hover":{backgroundColor:(o.vars||o).palette.grey.A100,"@media (hover: none)":{backgroundColor:(o.vars||o).palette.grey[300]},textDecoration:"none"},[`&.${C.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]},variants:[{props:{size:"small"},style:{width:40,height:40}},{props:{size:"medium"},style:{width:48,height:48}},{props:{variant:"extended"},style:{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48}},{props:{variant:"extended",size:"small"},style:{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34}},{props:{variant:"extended",size:"medium"},style:{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40}},{props:{color:"inherit"},style:{color:"inherit"}}]})),b(({theme:o})=>({variants:[...Object.entries(o.palette).filter(D(["dark","contrastText"])).map(([r])=>({props:{color:r},style:{color:(o.vars||o).palette[r].contrastText,backgroundColor:(o.vars||o).palette[r].main,"&:hover":{backgroundColor:(o.vars||o).palette[r].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[r].main}}}}))]})),b(({theme:o})=>({[`&.${C.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}}))),W=T.forwardRef(function(r,a){const t=R({props:r,name:"MuiFab"}),{children:l,className:c,color:d="default",component:f="button",disabled:h=!1,disableFocusRipple:w=!1,focusVisibleClassName:y,size:k="large",variant:F="circular",...z}=t,x={...t,color:d,component:f,disabled:h,disableFocusRipple:w,size:k,variant:F},p=B(x);return e.jsx(K,{className:v(p.root,c),component:f,disabled:h,focusRipple:!w,focusVisibleClassName:v(p.focusVisible,y),ownerState:x,ref:a,...z,classes:p,children:l})}),$=A(e.jsx("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"})),m=g(W)(({theme:o})=>({position:"fixed",color:"white",backgroundColor:"white",borderColor:o.palette.divider,bottom:16,right:16,zIndex:1e3,borderRadius:"50%",padding:0,transition:"all 0.3s ease",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)","&:hover":{backgroundColor:"white",transform:"scale(1.1) rotate(10deg)",boxShadow:"0 8px 15px rgba(0, 0, 0, 0.2)"},"&:focus":{outline:"none",boxShadow:`0 0 0 3px ${o.palette.primary.main}`},[o.breakpoints.down("md")]:{width:"2.2rem",height:"2.2rem",Opacity:"0.6",fontSize:"1rem",opacity:.8},[o.breakpoints.up("md")]:{width:"4rem",height:"4rem",fontSize:"1.5rem"}})),S=g($)(()=>({fontSize:"inherit",transition:"all 0.3s ease",color:"#00854C",position:"relative","&::before":{content:'""',position:"absolute",top:0,left:0,width:"10px",height:"10px",color:"white",borderRadius:"50%",transition:"all 0.3s ease"},"&::after":{content:'""',position:"absolute",bottom:0,right:0,width:"10px",height:"10px",borderRadius:"50%",transition:"all 0.3s ease",color:"#00854C"},"&:hover":{transform:"scale(1.1)",color:"#00854C","&::before, &::after":{width:10,height:10}}})),G={title:"Components/ScrollToTop/StyledScrollToTop",tags:["autodocs"],parameters:{docs:{description:{component:`
### 🚀 Scroll-to-Top Components

Custom floating action button and icon for smooth scroll-to-top functionality.

#### ✅ Features
- Fixed positioning at bottom-right
- Smooth hover and focus animations
- Responsive sizing (mobile/desktop)
- Theme-aware styling
- Accessible with proper ARIA labels
- Decorative icon animations

---

### 📦 Components

| Component                   | Description                                |
|----------------------------|--------------------------------------------|
| StyledScrollToTopFab       | Floating action button container           |
| StykedKeyboardArrowUp      | Animated arrow icon                        |

---

### 🎛️ Variants

| Story               | Description                                |
|--------------------|--------------------------------------------|
| Default            | Basic scroll-to-top button                 |
| MobileSize         | Responsive mobile version                  |
| CustomIcon         | With customized icon properties            |

---
        `.trim()}}}},s={name:"Default Scroll-to-Top",render:o=>e.jsx(m,{...o,children:e.jsx(S,{fontSize:"large"})}),args:{"aria-label":"Scroll back to top",onClick:()=>alert("Scrolling to top!")},parameters:{viewport:{defaultViewport:"desktop"}}},i={name:"Mobile Size",render:o=>e.jsx(m,{...o,children:e.jsx(S,{fontSize:"medium"})}),args:{"aria-label":"Scroll back to top",onClick:()=>alert("Scrolling to top!")},parameters:{viewport:{defaultViewport:"mobile1"}}},n={name:"Custom Icon",render:o=>e.jsx(m,{...o,children:e.jsx(S,{fontSize:"large",sx:{color:"#FF5722","&:hover":{color:"#E64A19",transform:"scale(1.2) rotate(15deg)"}}})}),args:{"aria-label":"Scroll back to top",onClick:()=>alert("Scrolling to top!"),sx:{backgroundColor:"#FFF8E1","&:hover":{backgroundColor:"#FFECB3"}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Default Scroll-to-Top",
  render: args => <StyledScrollToTopFab {...args}>
   <StykedKeyboardArrowUp fontSize="large" />
  </StyledScrollToTopFab>,
  args: {
    "aria-label": "Scroll back to top",
    onClick: () => alert("Scrolling to top!")
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop"
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: "Mobile Size",
  render: args => <StyledScrollToTopFab {...args}>
   <StykedKeyboardArrowUp fontSize="medium" />
  </StyledScrollToTopFab>,
  args: {
    "aria-label": "Scroll back to top",
    onClick: () => alert("Scrolling to top!")
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Custom Icon",
  render: args => <StyledScrollToTopFab {...args}>
   <StykedKeyboardArrowUp fontSize="large" sx={{
      color: "#FF5722",
      "&:hover": {
        color: "#E64A19",
        transform: "scale(1.2) rotate(15deg)"
      }
    }} />
  </StyledScrollToTopFab>,
  args: {
    "aria-label": "Scroll back to top",
    onClick: () => alert("Scrolling to top!"),
    sx: {
      backgroundColor: "#FFF8E1",
      "&:hover": {
        backgroundColor: "#FFECB3"
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const J=["Default","MobileSize","CustomIcon"];export{n as CustomIcon,s as Default,i as MobileSize,J as __namedExportsOrder,G as default};
