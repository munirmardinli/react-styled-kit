import{j as s}from"./iframe-knLkElny.js";import{c as h}from"./createSvgIcon-C019KJBS.js";import{s as B}from"./styled-Cm3m7c_-.js";import{B as f}from"./Button-JldB48m0.js";import"./createSimplePaletteValueFilter-CPCKqSWq.js";import"./useId-BuOvd87i.js";import"./ButtonBase-8-kPn0NI.js";import"./assertThisInitialized-BjnbojEp.js";const S=h(s.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),k=B(f)(({theme:o,variant:n})=>({backgroundColor:n==="contained"?o.palette.primary.main:(o.palette.mode==="dark","transparent"),color:n==="contained"||o.palette.mode==="dark"?o.palette.common.white:o.palette.primary.main,textTransform:"none",lineHeight:"initial",border:n==="outlined"?`1px solid ${o.palette.primary.main}`:"none",borderRadius:"8px",boxShadow:n==="contained"?"0px 4px 6px rgba(0, 0, 0, 0.1)":"none",transition:"transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease","&:hover":{backgroundColor:n==="contained"||n==="outlined"||o.palette.mode==="dark"?o.palette.action.hover:"transparent",cursor:"pointer",opacity:.9,transform:"scale(1)",boxShadow:n==="contained"?"0px 6px 10px rgba(0, 0, 0, 0.15)":"none","& span":{transform:"translateX(3px)"}},"&:active":{transform:"scale(0.98)",boxShadow:n==="contained"?"0px 3px 8px rgba(0, 0, 0, 0.2)":"none"}})),I=B(f)(({theme:o})=>({lineHeight:"initial",border:"none",borderRadius:"8px",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)",transition:"transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease",color:o.palette.common.white,textTransform:"none",backgroundColor:o.palette.info.main,"&:hover":{backgroundColor:o.palette.info.main,cursor:"pointer",opacity:.9,transform:"scale(1)",boxShadow:"0px 6px 10px rgba(0, 0, 0, 0.15)","& span":{transform:"translateX(3px)"}}})),E={title:"Components/Buttons/StyledButton",component:k,tags:["autodocs"],parameters:{docs:{description:{component:`
### 🔘 StyledButton

Custom-themed button component built on top of [MUI's \`Button\`](https://mui.com/material-ui/react-button/), with full support for all variants and theme overrides.

#### ✅ Features
- Supports all MUI \`variant\` options: \`contained\`, \`outlined\`, \`text\`
- Theme-driven colors, padding, and shadows
- Smooth hover/active animations
- Designed for consistency across all UI layers

---

### ❌ StyledCloseIcon

An icon-only button component, typically used for dismiss/close actions.

#### ✅ Features
- Uses MUI's \`IconButton\` under the hood
- Hover & focus-visible styling
- Compact and accessible (with \`aria-label\` support)

---

### 📦 Example Variants

| Story               | Description                                |
|--------------------|--------------------------------------------|
| Contained          | Primary CTA button (filled)                |
| Outlined           | Secondary action (border-only)             |
| Text               | Tertiary/minimal action                    |
| CloseIconButton    | Icon-only variant for modal/tooltips etc.  |

---
        `.trim()}}}},t={name:"Contained Button",args:{children:"Save",variant:"contained",onClick:()=>alert("Clicked Contained Button")}},e={name:"Outlined Button",args:{children:"Cancel",variant:"outlined",onClick:()=>alert("Clicked Outlined Button")}},a={name:"Text Button",args:{children:"Learn More",variant:"text",onClick:()=>alert("Clicked Text Button")}},r={name:"Close Button (Icon Only)",render:o=>s.jsx(I,{...o,children:s.jsx(S,{})}),args:{"aria-label":"Close dialog",onClick:()=>alert("Dialog closed")}};var i,l,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Contained Button',
  args: {
    children: 'Save',
    variant: 'contained',
    onClick: () => alert('Clicked Contained Button')
  }
}`,...(c=(l=t.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,p,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Outlined Button',
  args: {
    children: 'Cancel',
    variant: 'outlined',
    onClick: () => alert('Clicked Outlined Button')
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,x,C;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Text Button',
  args: {
    children: 'Learn More',
    variant: 'text',
    onClick: () => alert('Clicked Text Button')
  }
}`,...(C=(x=a.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var g,b,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Close Button (Icon Only)',
  render: args => <StyledCloseIcon {...args}>
      <CloseIcon />
    </StyledCloseIcon>,
  args: {
    'aria-label': 'Close dialog',
    onClick: () => alert('Dialog closed')
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const H=["Contained","Outlined","Text","CloseIconButton"];export{r as CloseIconButton,t as Contained,e as Outlined,a as Text,H as __namedExportsOrder,E as default};
