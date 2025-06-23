import{s as T,B as O,j as s,o as j}from"./mui-CukjQa0I.js";const R=T(O)(({theme:o,variant:t})=>({backgroundColor:t==="contained"?o.palette.primary.main:(o.palette.mode==="dark","transparent"),color:t==="contained"||o.palette.mode==="dark"?o.palette.common.white:o.palette.primary.main,textTransform:"none",lineHeight:"initial",border:t==="outlined"?`1px solid ${o.palette.primary.main}`:"none",borderRadius:"8px",boxShadow:t==="contained"?"0px 4px 6px rgba(0, 0, 0, 0.1)":"none",transition:"transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease","&:hover":{backgroundColor:t==="contained"||t==="outlined"||o.palette.mode==="dark"?o.palette.action.hover:"transparent",cursor:"pointer",opacity:.9,transform:"scale(1)",boxShadow:t==="contained"?"0px 6px 10px rgba(0, 0, 0, 0.15)":"none","& span":{transform:"translateX(3px)"}},"&:active":{transform:"scale(0.98)",boxShadow:t==="contained"?"0px 3px 8px rgba(0, 0, 0, 0.2)":"none"}})),A=T(O)(({theme:o})=>({lineHeight:"initial",border:"none",borderRadius:"8px",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)",transition:"transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease",color:o.palette.common.white,textTransform:"none",backgroundColor:o.palette.info.main,"&:hover":{backgroundColor:o.palette.info.main,cursor:"pointer",opacity:.9,transform:"scale(1)",boxShadow:"0px 6px 10px rgba(0, 0, 0, 0.15)","& span":{transform:"translateX(3px)"}}})),H={title:"Components/StyledButton",component:R,tags:["autodocs"],parameters:{docs:{description:{component:`
A set of custom MUI-based buttons with consistent styling, responsive theming,
and smooth hover/active animations.

Includes:
- Standard action buttons: contained, outlined, and text
- A styled close/dismiss button with icon
        `.trim()}}}},e={args:{children:"Contained Button",variant:"contained"}},n={args:{children:"Outlined Button",variant:"outlined"}},a={args:{children:"Text Button",variant:"text"}},r={render:o=>s.jsx(A,{...o,children:s.jsx(j,{})}),args:{"aria-label":"Close"}};var i,d,c,p,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Contained Button',
    variant: 'contained'
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source},description:{story:"Contained variant of the StyledButton",...(l=(p=e.parameters)==null?void 0:p.docs)==null?void 0:l.description}}};var u,m,x,g,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Outlined Button',
    variant: 'outlined'
  }
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source},description:{story:"Outlined variant of the StyledButton",...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.description}}};var y,C,h,S,f;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Text Button',
    variant: 'text'
  }
}`,...(h=(C=a.parameters)==null?void 0:C.docs)==null?void 0:h.source},description:{story:"Text variant of the StyledButton",...(f=(S=a.parameters)==null?void 0:S.docs)==null?void 0:f.description}}};var B,w,v,I,k;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <StyledCloseIcon {...args}>
      <CloseIcon />
    </StyledCloseIcon>,
  args: {
    'aria-label': 'Close'
  }
}`,...(v=(w=r.parameters)==null?void 0:w.docs)==null?void 0:v.source},description:{story:"Close icon button using StyledCloseIcon",...(k=(I=r.parameters)==null?void 0:I.docs)==null?void 0:k.description}}};const X=["Contained","Outlined","Text","CloseButton"];export{r as CloseButton,e as Contained,n as Outlined,a as Text,X as __namedExportsOrder,H as default};
