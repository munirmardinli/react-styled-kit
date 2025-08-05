import{j as s}from"./iframe-jxtUxaR9.js";import{c}from"./createSvgIcon-Dujc27Ao.js";import{s as i}from"./styled-DVBkpXcY.js";import{B as l}from"./Button-Dk24mqPE.js";import"./preload-helper-D9Z9MdNV.js";import"./createSimplePaletteValueFilter-3gGRDZXa.js";import"./ButtonBase-ip0BSY1n.js";import"./assertThisInitialized-BjnbojEp.js";const d=c(s.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})),p=i(l)(({theme:o,variant:n})=>({backgroundColor:n==="contained"?o.palette.primary.main:(o.palette.mode==="dark","transparent"),color:n==="contained"||o.palette.mode==="dark"?o.palette.common.white:o.palette.primary.main,textTransform:"none",lineHeight:"initial",border:n==="outlined"?`1px solid ${o.palette.primary.main}`:"none",borderRadius:"8px",boxShadow:n==="contained"?"0px 4px 6px rgba(0, 0, 0, 0.1)":"none",transition:"transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease","&:hover":{backgroundColor:n==="contained"||n==="outlined"||o.palette.mode==="dark"?o.palette.action.hover:"transparent",cursor:"pointer",opacity:.9,transform:"scale(1)",boxShadow:n==="contained"?"0px 6px 10px rgba(0, 0, 0, 0.15)":"none","& span":{transform:"translateX(3px)"}},"&:active":{transform:"scale(0.98)",boxShadow:n==="contained"?"0px 3px 8px rgba(0, 0, 0, 0.2)":"none"}})),m=i(l)(({theme:o})=>({lineHeight:"initial",border:"none",borderRadius:"8px",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)",transition:"transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease",color:o.palette.common.white,textTransform:"none",backgroundColor:o.palette.info.main,"&:hover":{backgroundColor:o.palette.info.main,cursor:"pointer",opacity:.9,transform:"scale(1)",boxShadow:"0px 6px 10px rgba(0, 0, 0, 0.15)","& span":{transform:"translateX(3px)"}}})),h={title:"Components/Buttons/StyledButton",component:p,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `.trim()}}}},t={name:"Contained Button",args:{children:"Save",variant:"contained",onClick:()=>alert("Clicked Contained Button")}},e={name:"Outlined Button",args:{children:"Cancel",variant:"outlined",onClick:()=>alert("Clicked Outlined Button")}},a={name:"Text Button",args:{children:"Learn More",variant:"text",onClick:()=>alert("Clicked Text Button")}},r={name:"Close Button (Icon Only)",render:o=>s.jsx(m,{...o,children:s.jsx(d,{})}),args:{"aria-label":"Close dialog",onClick:()=>alert("Dialog closed")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Contained Button",
  args: {
    children: "Save",
    variant: "contained",
    onClick: () => alert("Clicked Contained Button")
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: "Outlined Button",
  args: {
    children: "Cancel",
    variant: "outlined",
    onClick: () => alert("Clicked Outlined Button")
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "Text Button",
  args: {
    children: "Learn More",
    variant: "text",
    onClick: () => alert("Clicked Text Button")
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: "Close Button (Icon Only)",
  render: args => <StyledCloseIcon {...args}>
   <CloseIcon />
  </StyledCloseIcon>,
  args: {
    "aria-label": "Close dialog",
    onClick: () => alert("Dialog closed")
  }
}`,...r.parameters?.docs?.source}}};const S=["Contained","Outlined","Text","CloseIconButton"];export{r as CloseIconButton,t as Contained,e as Outlined,a as Text,S as __namedExportsOrder,h as default};
