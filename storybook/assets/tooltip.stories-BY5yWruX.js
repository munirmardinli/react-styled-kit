import{j as t}from"./iframe-Bon1a5A0.js";import{s as M}from"./styled-CeY5bLqF.js";import{T as R}from"./Tooltip-C7984clg.js";import{c as A}from"./createSvgIcon-CFKoQ-5m.js";import{B as r}from"./Button-DdQXgI2G.js";import{S as i}from"./Stack-CuPjvdxb.js";import{B as m}from"./Box-J0ydNMDv.js";import{T as a}from"./Typography-1SPRHf2u.js";import"./getReactElementRef-tU6f1sVq.js";import"./assertThisInitialized-BjnbojEp.js";import"./index-93t2EH-V.js";import"./ButtonBase-CpjExmji.js";import"./createSimplePaletteValueFilter-bAqWkpTS.js";import"./useSlot-Ci5nbmAn.js";import"./useControlled-BkEj9Wty.js";import"./Grow-CYyIFDjA.js";import"./Popper-BNzFeKDw.js";import"./Portal-CMto2QXE.js";import"./createPopper-D0FOOgzE.js";import"./useSlotProps-CyG5XPLi.js";import"./getThemeProps-C4o0_BU3.js";const e=M(R)(({theme:o})=>({"& .MuiTooltip-popper":{zIndex:o.zIndex.tooltip},"& .MuiTooltip-tooltip":{backgroundColor:o.palette.grey[900],color:o.palette.common.white,fontSize:o.typography.pxToRem(16),padding:o.spacing(1,1.5),borderRadius:o.shape.borderRadius,boxShadow:o.shadows[3]},"& .MuiTooltip-arrow":{color:o.palette.grey[900]},"& .MuiTooltip-popperArrow":{margin:o.spacing(.5)},"& .MuiTooltip-tooltipArrow":{marginTop:o.spacing(1)},"& .MuiTooltip-tooltipPlacementBottom":{marginTop:o.spacing(1)},"& .MuiTooltip-tooltipPlacementLeft":{marginRight:o.spacing(1)},"& .MuiTooltip-tooltipPlacementRight":{marginLeft:o.spacing(1)},"& .MuiTooltip-tooltipPlacementTop":{marginBottom:o.spacing(1),transform:"translateY(-8px)","& .MuiTooltip-arrow":{top:0}},"& .MuiTooltip-touch":{fontSize:o.typography.pxToRem(16),padding:o.spacing(1.5,2)}})),P=A(t.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"})),V=A(t.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"})),rt={title:"Components/ToolTip/Tooltips",component:e,tags:["autodocs"],parameters:{docs:{description:{component:`
### 💡 Styled Tooltip

A customized tooltip component with enhanced styling and theme-aware colors.

#### ✅ Features
- Theme-aware dark background with white text
- Consistent spacing and typography
- Shadow effects for depth
- Proper z-index layering
- Responsive touch targets
- Arrow styling for all placements
- All Material-UI Tooltip props supported

#### 🎛 Props
| Prop        | Type      | Default | Description                              |
|-------------|----------|---------|------------------------------------------|
| title       | string   | -       | Tooltip content                          |
| placement   | string   | 'bottom'| Position relative to target              |
| arrow       | boolean  | false   | Whether to show arrow                    |
| enterDelay  | number   | 0       | Delay before showing (ms)                |
| leaveDelay  | number   | 0       | Delay before hiding (ms)                 |

---

### 📦 Example Variants

| Story               | Description                                |
|---------------------|--------------------------------------------|
| Basic Tooltip       | Default tooltip implementation             |
| With Arrow          | Tooltip with pointing arrow                |
| Placement Variations| Different positioning options              |
| Interactive Content | Tooltip with interactive elements inside   |
| Icon Tooltips       | Tooltips attached to icons                 |

---
        `.trim()}}}},n={args:{title:"This is a basic tooltip",children:t.jsx(r,{children:"Hover me"})},name:"Basic Tooltip"},l={args:{title:"Tooltip with arrow",arrow:!0,children:t.jsx(r,{variant:"outlined",children:"Hover for arrow tooltip"})},name:"With Arrow"},s={render:()=>t.jsxs(i,{spacing:4,sx:{p:4},children:[t.jsx(i,{direction:"row",spacing:2,justifyContent:"center",children:t.jsx(e,{title:"Top tooltip",placement:"top",children:t.jsx(r,{children:"Top"})})}),t.jsxs(i,{direction:"row",spacing:2,justifyContent:"space-between",children:[t.jsx(e,{title:"Left tooltip",placement:"left",children:t.jsx(r,{children:"Left"})}),t.jsx(e,{title:"Right tooltip",placement:"right",children:t.jsx(r,{children:"Right"})})]}),t.jsx(i,{direction:"row",spacing:2,justifyContent:"center",children:t.jsx(e,{title:"Bottom tooltip",placement:"bottom",children:t.jsx(r,{children:"Bottom"})})})]}),name:"Placement Variations"},p={render:()=>t.jsx(e,{title:t.jsxs(m,{sx:{p:1},children:[t.jsx(a,{variant:"subtitle2",gutterBottom:!0,children:"Advanced Tooltip"}),t.jsx(a,{variant:"body2",paragraph:!0,children:"This tooltip contains interactive content and formatted text."}),t.jsx(r,{variant:"contained",size:"small",onClick:()=>alert("Tooltip button clicked!"),children:"Action"})]}),arrow:!0,children:t.jsx(r,{variant:"contained",children:"Hover for rich content"})}),name:"Interactive Content"},c={render:()=>t.jsxs(i,{direction:"row",spacing:4,sx:{p:4},children:[t.jsx(e,{title:"Information",arrow:!0,children:t.jsx(P,{color:"info",sx:{fontSize:40,cursor:"pointer"}})}),t.jsx(e,{title:"Delete item",arrow:!0,children:t.jsx(V,{color:"error",sx:{fontSize:40,cursor:"pointer"}})}),t.jsx(e,{title:t.jsxs(m,{children:[t.jsx(a,{variant:"subtitle2",children:"Custom Icon Tooltip"}),t.jsx(a,{variant:"caption",children:"With additional details"})]}),arrow:!0,children:t.jsx(m,{sx:{width:40,height:40,bgcolor:"primary.main",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:t.jsx(a,{color:"white",children:"?"})})})]}),name:"Icon Tooltips"},d={render:()=>t.jsxs(i,{direction:"row",spacing:2,sx:{p:4},children:[t.jsx(e,{title:"Appears quickly",enterDelay:200,leaveDelay:200,children:t.jsx(r,{children:"Fast (200ms)"})}),t.jsx(e,{title:"Takes longer to appear",enterDelay:1e3,leaveDelay:500,children:t.jsx(r,{children:"Slow (1000ms)"})})]}),name:"Delay Variations"};var u,h,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'This is a basic tooltip',
    children: <Button>Hover me</Button>
  },
  name: 'Basic Tooltip'
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var y,T,x;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Tooltip with arrow',
    arrow: true,
    children: <Button variant="outlined">Hover for arrow tooltip</Button>
  },
  name: 'With Arrow'
}`,...(x=(T=l.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var w,f,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Stack spacing={4} sx={{
    p: 4
  }}>
      <Stack direction="row" spacing={2} justifyContent="center">
        <StyledTooltip title="Top tooltip" placement="top">
          <Button>Top</Button>
        </StyledTooltip>
      </Stack>

      <Stack direction="row" spacing={2} justifyContent="space-between">
        <StyledTooltip title="Left tooltip" placement="left">
          <Button>Left</Button>
        </StyledTooltip>
        <StyledTooltip title="Right tooltip" placement="right">
          <Button>Right</Button>
        </StyledTooltip>
      </Stack>

      <Stack direction="row" spacing={2} justifyContent="center">
        <StyledTooltip title="Bottom tooltip" placement="bottom">
          <Button>Bottom</Button>
        </StyledTooltip>
      </Stack>
    </Stack>,
  name: 'Placement Variations'
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var j,B,v;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <StyledTooltip title={<Box sx={{
    p: 1
  }}>
          <Typography variant="subtitle2" gutterBottom>
            Advanced Tooltip
          </Typography>
          <Typography variant="body2" paragraph>
            This tooltip contains interactive content and formatted text.
          </Typography>
          <Button variant="contained" size="small" onClick={() => alert('Tooltip button clicked!')}>
            Action
          </Button>
        </Box>} arrow>
      <Button variant="contained">Hover for rich content</Button>
    </StyledTooltip>,
  name: 'Interactive Content'
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var b,I,D;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={4} sx={{
    p: 4
  }}>
      <StyledTooltip title="Information" arrow>
        <InfoIcon color="info" sx={{
        fontSize: 40,
        cursor: 'pointer'
      }} />
      </StyledTooltip>

      <StyledTooltip title="Delete item" arrow>
        <DeleteIcon color="error" sx={{
        fontSize: 40,
        cursor: 'pointer'
      }} />
      </StyledTooltip>

      <StyledTooltip title={<Box>
            <Typography variant="subtitle2">Custom Icon Tooltip</Typography>
            <Typography variant="caption">With additional details</Typography>
          </Box>} arrow>
        <Box sx={{
        width: 40,
        height: 40,
        bgcolor: 'primary.main',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
      }}>
          <Typography color="white">?</Typography>
        </Box>
      </StyledTooltip>
    </Stack>,
  name: 'Icon Tooltips'
}`,...(D=(I=c.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var k,C,z;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={2} sx={{
    p: 4
  }}>
      <StyledTooltip title="Appears quickly" enterDelay={200} leaveDelay={200}>
        <Button>Fast (200ms)</Button>
      </StyledTooltip>

      <StyledTooltip title="Takes longer to appear" enterDelay={1000} leaveDelay={500}>
        <Button>Slow (1000ms)</Button>
      </StyledTooltip>
    </Stack>,
  name: 'Delay Variations'
}`,...(z=(C=d.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};const it=["BasicTooltip","WithArrow","PlacementVariations","InteractiveContent","IconTooltips","DelayVariations"];export{n as BasicTooltip,d as DelayVariations,c as IconTooltips,p as InteractiveContent,s as PlacementVariations,l as WithArrow,it as __namedExportsOrder,rt as default};
