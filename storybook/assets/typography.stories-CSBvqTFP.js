import{j as r}from"./iframe-DJjkWMKN.js";import{p as o}from"./pxToRem-CPTnK_z9.js";import{s as g}from"./styled-BeE6NuNL.js";import{T as S}from"./Typography-CbyvyCva.js";import{S as m}from"./Stack-CKmdNuOC.js";import{B as w}from"./Box-_eAK-LMN.js";import"./createSimplePaletteValueFilter-nFaaKFLz.js";import"./getThemeProps-DIq0HQRe.js";const a=g(S)(({theme:e,level:p="h3"})=>({...e.typography[p],overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%",color:e.palette.text.primary,marginTop:e.spacing(2),textDecoration:"none","&:hover":{cursor:"pointer"},[e.breakpoints.down("sm")]:{fontSize:o(12),whiteSpace:"normal",overflowWrap:"break-word",wordWrap:"break-word"}})),t=g(S,{shouldForwardProp:e=>e!=="color"})(({theme:e,level:p="h3",color:i="white"})=>({typography:e.typography[p],fontWeight:e.typography.fontWeightBold,textAlign:"center",textOverflow:"ellipsis",maxWidth:"100%",color:i==="primary"?e.palette.primary.main:e.palette.common.white,marginTop:e.spacing(2),textDecoration:"none",position:"relative",overflow:"hidden",whiteSpace:"normal",overflowWrap:"break-word",wordWrap:"break-word",background:`linear-gradient(
    to right,
    ${e.palette.primary.main} 50%,
    ${e.palette.text.primary} 50%
  )`,backgroundSize:"200% 100%",backgroundPosition:"100%",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",transition:"background-position 0.5s ease","&:hover":{cursor:"pointer",backgroundPosition:"0%"},[e.breakpoints.down("md")]:{fontSize:o(24),whiteSpace:"normal",overflowWrap:"break-word",wordWrap:"break-word"},[e.breakpoints.down("sm")]:{fontSize:o(24),whiteSpace:"normal",overflowWrap:"break-word",wordWrap:"break-word"},[e.breakpoints.down("xs")]:{fontSize:o(24),whiteSpace:"normal",overflowWrap:"break-word",wordWrap:"break-word"}})),n=g(S)(({theme:e,level:p="h3",color:i=e.palette.text.disabled})=>({typography:e.typography[p],overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%",color:i==="primary"?e.palette.primary.main:e.palette.text.primary,marginTop:e.spacing(2),textDecoration:"none","&:hover":{cursor:"pointer"},[e.breakpoints.down("md")]:{fontSize:o(19),whiteSpace:"normal",overflowWrap:"break-word",wordWrap:"break-word"},[e.breakpoints.down("sm")]:{marginTop:e.spacing(4),fontSize:o(15),whiteSpace:"normal",overflowWrap:"break-word",wordWrap:"break-word"},[e.breakpoints.down("xs")]:{fontSize:o(24)}})),F=g("div")(()=>({display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"})),q={title:"Components/Data Display/Typography",tags:["autodocs"],parameters:{docs:{description:{component:`
### ✒️ Styled Typography System

A comprehensive set of typography components with responsive behavior and theme-aware styling.

#### ✅ Features
- **StyledTypography**: Base typography with level-based heading styles
- **StyledTypographyCaption**: Prominent caption with gradient effects
- **StyledTypographySubcaption**: Secondary caption with responsive sizing
- **TypographyContainer**: Layout container for typography groups

#### 🎨 Design Characteristics
- Theme-aware colors and spacing
- Responsive text sizing and wrapping
- Interactive hover states
- Text truncation with ellipsis
- Consistent breakpoint behavior

---

### 📦 Component Variants

| Component                     | Description                                |
|-------------------------------|--------------------------------------------|
| Base Typography               | Standard text with heading level support   |
| Gradient Caption              | Prominent caption with gradient animation  |
| Subcaption                    | Secondary supporting text                  |
| Typography Group              | Container for typography compositions      |

---
        `.trim()}}}},s={render:()=>r.jsxs(m,{spacing:4,children:[r.jsx(a,{level:"h1",variant:"h1",children:"Heading 1 (h1)"}),r.jsx(a,{level:"h2",variant:"h2",children:"Heading 2 (h2)"}),r.jsx(a,{level:"h3",variant:"h3",children:"Heading 3 (h3)"}),r.jsx(a,{level:"h4",variant:"h4",children:"Heading 4 (h4)"}),r.jsx(a,{level:"h5",variant:"h5",children:"Heading 5 (h5)"}),r.jsx(a,{level:"h6",variant:"h6",children:"Heading 6 (h6)"})]}),name:"Base Typography"},l={render:()=>r.jsxs(m,{spacing:4,children:[r.jsx(t,{level:"h1",color:"primary",children:"Primary Gradient Caption (h1)"}),r.jsx(t,{level:"h2",color:"white",children:"White Gradient Caption (h2)"}),r.jsx(w,{sx:{bgcolor:"primary.main",p:4},children:r.jsx(t,{level:"h3",color:"white",children:"Caption on Colored Background (h3)"})})]}),name:"Gradient Caption"},y={render:()=>r.jsxs(m,{spacing:4,children:[r.jsx(n,{level:"h4",children:"Default Subcaption (h4)"}),r.jsx(n,{level:"h5",color:"primary",children:"Primary Colored Subcaption (h5)"}),r.jsx(n,{level:"h6",color:"#ff5722",children:"Custom Colored Subcaption (h6)"})]}),name:"Subcaption"},h={render:()=>r.jsxs(F,{children:[r.jsx(a,{level:"h2",variant:"h2",children:"Product Features"}),r.jsx(t,{level:"h3",color:"primary",children:"Innovative Solutions"}),r.jsx(n,{level:"h4",children:"Discover our cutting-edge technology"})]}),name:"Typography Group"},d={render:()=>r.jsxs(w,{sx:{width:300},children:[r.jsx(a,{sx:{whiteSpace:"nowrap"},children:"This is a very long text that will be truncated with ellipsis when it overflows its container width"}),r.jsx(t,{sx:{whiteSpace:"nowrap"},children:"Long gradient caption that will truncate"}),r.jsx(n,{sx:{whiteSpace:"nowrap"},children:"Extended subcaption text that needs truncation"})]}),name:"Text Truncation"},c={render:()=>r.jsxs(w,{sx:{maxWidth:400},children:[r.jsx(a,{level:"h3",children:"Responsive Typography Example"}),r.jsx(t,{children:"This caption will adjust its size on smaller screens"}),r.jsx(n,{children:"Notice how the text wraps and resizes at different breakpoints"})]}),name:"Responsive Behavior",parameters:{viewport:{defaultViewport:"responsive"}}};var u,v,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Stack spacing={4}>
      <StyledTypography level="h1" variant="h1">
        Heading 1 (h1)
      </StyledTypography>
      <StyledTypography level="h2" variant="h2">
        Heading 2 (h2)
      </StyledTypography>
      <StyledTypography level="h3" variant="h3">
        Heading 3 (h3)
      </StyledTypography>
      <StyledTypography level="h4" variant="h4">
        Heading 4 (h4)
      </StyledTypography>
      <StyledTypography level="h5" variant="h5">
        Heading 5 (h5)
      </StyledTypography>
      <StyledTypography level="h6" variant="h6">
        Heading 6 (h6)
      </StyledTypography>
    </Stack>,
  name: 'Base Typography'
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var T,b,f;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Stack spacing={4}>
      <StyledTypographyCaption level="h1" color="primary">
        Primary Gradient Caption (h1)
      </StyledTypographyCaption>
      <StyledTypographyCaption level="h2" color="white">
        White Gradient Caption (h2)
      </StyledTypographyCaption>
      <Box sx={{
      bgcolor: 'primary.main',
      p: 4
    }}>
        <StyledTypographyCaption level="h3" color="white">
          Caption on Colored Background (h3)
        </StyledTypographyCaption>
      </Box>
    </Stack>,
  name: 'Gradient Caption'
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,k,j;y.parameters={...y.parameters,docs:{...(C=y.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Stack spacing={4}>
      <StyledTypographySubcaption level="h4">
        Default Subcaption (h4)
      </StyledTypographySubcaption>
      <StyledTypographySubcaption level="h5" color="primary">
        Primary Colored Subcaption (h5)
      </StyledTypographySubcaption>
      <StyledTypographySubcaption level="h6" color="#ff5722">
        Custom Colored Subcaption (h6)
      </StyledTypographySubcaption>
    </Stack>,
  name: 'Subcaption'
}`,...(j=(k=y.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var W,B,z;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <TypographyContainer>
      <StyledTypography level="h2" variant="h2">
        Product Features
      </StyledTypography>
      <StyledTypographyCaption level="h3" color="primary">
        Innovative Solutions
      </StyledTypographyCaption>
      <StyledTypographySubcaption level="h4">
        Discover our cutting-edge technology
      </StyledTypographySubcaption>
    </TypographyContainer>,
  name: 'Typography Group'
}`,...(z=(B=h.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var G,D,H;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: 300
  }}>
      <StyledTypography sx={{
      whiteSpace: 'nowrap'
    }}>
        This is a very long text that will be truncated with ellipsis when it overflows its container width
      </StyledTypography>
      <StyledTypographyCaption sx={{
      whiteSpace: 'nowrap'
    }}>
        Long gradient caption that will truncate
      </StyledTypographyCaption>
      <StyledTypographySubcaption sx={{
      whiteSpace: 'nowrap'
    }}>
        Extended subcaption text that needs truncation
      </StyledTypographySubcaption>
    </Box>,
  name: 'Text Truncation'
}`,...(H=(D=d.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var P,R,E;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Box sx={{
    maxWidth: 400
  }}>
      <StyledTypography level="h3">
        Responsive Typography Example
      </StyledTypography>
      <StyledTypographyCaption>
        This caption will adjust its size on smaller screens
      </StyledTypographyCaption>
      <StyledTypographySubcaption>
        Notice how the text wraps and resizes at different breakpoints
      </StyledTypographySubcaption>
    </Box>,
  name: 'Responsive Behavior',
  parameters: {
    viewport: {
      defaultViewport: 'responsive'
    }
  }
}`,...(E=(R=c.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const J=["BaseTypography","GradientCaption","Subcaption","TypographyGroup","TextTruncation","ResponsiveBehavior"];export{s as BaseTypography,l as GradientCaption,c as ResponsiveBehavior,y as Subcaption,d as TextTruncation,h as TypographyGroup,J as __namedExportsOrder,q as default};
