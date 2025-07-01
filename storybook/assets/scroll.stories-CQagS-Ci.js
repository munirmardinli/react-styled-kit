import{r as E,u as B,j as e,b as v,d as u}from"./iframe-IwT84T3c.js";import{c as K}from"./createSvgIcon-BYuvrw-D.js";import{s as g,r as W}from"./styled-CDRqgd7X.js";import{a as $,g as N,c as P,m as b,b as O}from"./createSimplePaletteValueFilter-D8TDwMFs.js";import{B as H}from"./ButtonBase-CtXANbeg.js";import"./assertThisInitialized-BjnbojEp.js";function L(o){return N("MuiFab",o)}const C=$("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),_=o=>{const{color:r,variant:a,classes:t,size:n}=o,c={root:["root",a,`size${u(n)}`,r==="inherit"?"colorInherit":r]},d=P(c,L,t);return{...t,...d}},q=g(H,{name:"MuiFab",slot:"Root",shouldForwardProp:o=>W(o)||o==="classes",overridesResolver:(o,r)=>{const{ownerState:a}=o;return[r.root,r[a.variant],r[`size${u(a.size)}`],a.color==="inherit"&&r.colorInherit,r[u(a.size)],r[a.color]]}})(b(({theme:o})=>{var r,a;return{...o.typography.button,minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,zIndex:(o.vars||o).zIndex.fab,boxShadow:(o.vars||o).shadows[6],"&:active":{boxShadow:(o.vars||o).shadows[12]},color:o.vars?o.vars.palette.grey[900]:(a=(r=o.palette).getContrastText)==null?void 0:a.call(r,o.palette.grey[300]),backgroundColor:(o.vars||o).palette.grey[300],"&:hover":{backgroundColor:(o.vars||o).palette.grey.A100,"@media (hover: none)":{backgroundColor:(o.vars||o).palette.grey[300]},textDecoration:"none"},[`&.${C.focusVisible}`]:{boxShadow:(o.vars||o).shadows[6]},variants:[{props:{size:"small"},style:{width:40,height:40}},{props:{size:"medium"},style:{width:48,height:48}},{props:{variant:"extended"},style:{borderRadius:48/2,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48}},{props:{variant:"extended",size:"small"},style:{width:"auto",padding:"0 8px",borderRadius:34/2,minWidth:34,height:34}},{props:{variant:"extended",size:"medium"},style:{width:"auto",padding:"0 16px",borderRadius:40/2,minWidth:40,height:40}},{props:{color:"inherit"},style:{color:"inherit"}}]}}),b(({theme:o})=>({variants:[...Object.entries(o.palette).filter(O(["dark","contrastText"])).map(([r])=>({props:{color:r},style:{color:(o.vars||o).palette[r].contrastText,backgroundColor:(o.vars||o).palette[r].main,"&:hover":{backgroundColor:(o.vars||o).palette[r].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[r].main}}}}))]})),b(({theme:o})=>({[`&.${C.disabled}`]:{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground}}))),G=E.forwardRef(function(r,a){const t=B({props:r,name:"MuiFab"}),{children:n,className:c,color:d="default",component:f="button",disabled:h=!1,disableFocusRipple:w=!1,focusVisibleClassName:M,size:V="large",variant:D="circular",...U}=t,x={...t,color:d,component:f,disabled:h,disableFocusRipple:w,size:V,variant:D},p=_(x);return e.jsx(q,{className:v(p.root,c),component:f,disabled:h,focusRipple:!w,focusVisibleClassName:v(p.focusVisible,M),ownerState:x,ref:a,...U,classes:p,children:n})}),J=K(e.jsx("path",{d:"M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6z"})),m=g(G)(({theme:o})=>({position:"fixed",color:"white",backgroundColor:"white",borderColor:o.palette.divider,bottom:16,right:16,zIndex:1e3,borderRadius:"50%",padding:0,transition:"all 0.3s ease",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)","&:hover":{backgroundColor:"white",transform:"scale(1.1) rotate(10deg)",boxShadow:"0 8px 15px rgba(0, 0, 0, 0.2)"},"&:focus":{outline:"none",boxShadow:`0 0 0 3px ${o.palette.primary.main}`},[o.breakpoints.down("md")]:{width:"2.2rem",height:"2.2rem",Opacity:"0.6",fontSize:"1rem",opacity:.8},[o.breakpoints.up("md")]:{width:"4rem",height:"4rem",fontSize:"1.5rem"}})),S=g(J)(()=>({fontSize:"inherit",transition:"all 0.3s ease",color:"#00854C",position:"relative","&::before":{content:'""',position:"absolute",top:0,left:0,width:"10px",height:"10px",color:"white",borderRadius:"50%",transition:"all 0.3s ease"},"&::after":{content:'""',position:"absolute",bottom:0,right:0,width:"10px",height:"10px",borderRadius:"50%",transition:"all 0.3s ease",color:"#00854C"},"&:hover":{transform:"scale(1.1)",color:"#00854C","&::before, &::after":{width:10,height:10}}})),ao={title:"Components/ScrollToTop/StyledScrollToTop",tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `.trim()}}}},s={name:"Default Scroll-to-Top",render:o=>e.jsx(m,{...o,children:e.jsx(S,{fontSize:"large"})}),args:{"aria-label":"Scroll back to top",onClick:()=>alert("Scrolling to top!")},parameters:{viewport:{defaultViewport:"desktop"}}},i={name:"Mobile Size",render:o=>e.jsx(m,{...o,children:e.jsx(S,{fontSize:"medium"})}),args:{"aria-label":"Scroll back to top",onClick:()=>alert("Scrolling to top!")},parameters:{viewport:{defaultViewport:"mobile1"}}},l={name:"Custom Icon",render:o=>e.jsx(m,{...o,children:e.jsx(S,{fontSize:"large",sx:{color:"#FF5722","&:hover":{color:"#E64A19",transform:"scale(1.2) rotate(15deg)"}}})}),args:{"aria-label":"Scroll back to top",onClick:()=>alert("Scrolling to top!"),sx:{backgroundColor:"#FFF8E1","&:hover":{backgroundColor:"#FFECB3"}}}};var y,k,F;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Default Scroll-to-Top',
  render: args => <StyledScrollToTopFab {...args}>
      <StykedKeyboardArrowUp fontSize="large" />
    </StyledScrollToTopFab>,
  args: {
    'aria-label': 'Scroll back to top',
    onClick: () => alert('Scrolling to top!')
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    }
  }
}`,...(F=(k=s.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var z,T,R;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Mobile Size',
  render: args => <StyledScrollToTopFab {...args}>
      <StykedKeyboardArrowUp fontSize="medium" />
    </StyledScrollToTopFab>,
  args: {
    'aria-label': 'Scroll back to top',
    onClick: () => alert('Scrolling to top!')
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(R=(T=i.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var A,I,j;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Custom Icon',
  render: args => <StyledScrollToTopFab {...args}>
      <StykedKeyboardArrowUp fontSize="large" sx={{
      color: '#FF5722',
      '&:hover': {
        color: '#E64A19',
        transform: 'scale(1.2) rotate(15deg)'
      }
    }} />
    </StyledScrollToTopFab>,
  args: {
    'aria-label': 'Scroll back to top',
    onClick: () => alert('Scrolling to top!'),
    sx: {
      backgroundColor: '#FFF8E1',
      '&:hover': {
        backgroundColor: '#FFECB3'
      }
    }
  }
}`,...(j=(I=l.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};const eo=["Default","MobileSize","CustomIcon"];export{l as CustomIcon,s as Default,i as MobileSize,eo as __namedExportsOrder,ao as default};
