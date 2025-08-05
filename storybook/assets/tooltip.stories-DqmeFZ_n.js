import{j as t}from"./iframe-jxtUxaR9.js";import{s as h}from"./styled-DVBkpXcY.js";import{T as g}from"./Tooltip-INQk_AOR.js";import{c as u}from"./createSvgIcon-Dujc27Ao.js";import{B as n}from"./Button-Dk24mqPE.js";import{S as r}from"./Stack-DUIwDFVg.js";import{B as m}from"./Box-Chwz9P_l.js";import{T as i}from"./Typography-CURoC8Wx.js";import"./preload-helper-D9Z9MdNV.js";import"./getReactElementRef-C9fz6be2.js";import"./assertThisInitialized-BjnbojEp.js";import"./index-CmV3qbgN.js";import"./ButtonBase-ip0BSY1n.js";import"./createSimplePaletteValueFilter-3gGRDZXa.js";import"./useSlot-Axrh0xRK.js";import"./useControlled-DBT5ii3A.js";import"./Grow-GuQTlBHW.js";import"./Popper-BO4XRD_B.js";import"./Portal-CAacfZsU.js";import"./createPopper-C9OPT54h.js";import"./useSlotProps-BzD55MaK.js";import"./getThemeProps-CmmfSb0G.js";const e=h(g)(({theme:o})=>({"& .MuiTooltip-popper":{zIndex:o.zIndex.tooltip},"& .MuiTooltip-tooltip":{backgroundColor:o.palette.grey[900],color:o.palette.common.white,fontSize:o.typography.pxToRem(16),padding:o.spacing(1,1.5),borderRadius:o.shape.borderRadius,boxShadow:o.shadows[3]},"& .MuiTooltip-arrow":{color:o.palette.grey[900]},"& .MuiTooltip-popperArrow":{margin:o.spacing(.5)},"& .MuiTooltip-tooltipArrow":{marginTop:o.spacing(1)},"& .MuiTooltip-tooltipPlacementBottom":{marginTop:o.spacing(1)},"& .MuiTooltip-tooltipPlacementLeft":{marginRight:o.spacing(1)},"& .MuiTooltip-tooltipPlacementRight":{marginLeft:o.spacing(1)},"& .MuiTooltip-tooltipPlacementTop":{marginBottom:o.spacing(1),transform:"translateY(-8px)","& .MuiTooltip-arrow":{top:0}},"& .MuiTooltip-touch":{fontSize:o.typography.pxToRem(16),padding:o.spacing(1.5,2)}})),y=u(t.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m1 15h-2v-6h2zm0-8h-2V7h2z"})),T=u(t.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"})),F={title:"Components/ToolTip/Tooltips",component:e,tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `.trim()}}}},a={args:{title:"This is a basic tooltip",children:t.jsx(n,{children:"Hover me"})},name:"Basic Tooltip"},l={args:{title:"Tooltip with arrow",arrow:!0,children:t.jsx(n,{variant:"outlined",children:"Hover for arrow tooltip"})},name:"With Arrow"},s={render:()=>t.jsxs(r,{spacing:4,sx:{p:4},children:[t.jsx(r,{direction:"row",spacing:2,justifyContent:"center",children:t.jsx(e,{title:"Top tooltip",placement:"top",children:t.jsx(n,{children:"Top"})})}),t.jsxs(r,{direction:"row",spacing:2,justifyContent:"space-between",children:[t.jsx(e,{title:"Left tooltip",placement:"left",children:t.jsx(n,{children:"Left"})}),t.jsx(e,{title:"Right tooltip",placement:"right",children:t.jsx(n,{children:"Right"})})]}),t.jsx(r,{direction:"row",spacing:2,justifyContent:"center",children:t.jsx(e,{title:"Bottom tooltip",placement:"bottom",children:t.jsx(n,{children:"Bottom"})})})]}),name:"Placement Variations"},p={render:()=>t.jsx(e,{title:t.jsxs(m,{sx:{p:1},children:[t.jsx(i,{variant:"subtitle2",gutterBottom:!0,children:"Advanced Tooltip"}),t.jsx(i,{variant:"body2",paragraph:!0,children:"This tooltip contains interactive content and formatted text."}),t.jsx(n,{variant:"contained",size:"small",onClick:()=>alert("Tooltip button clicked!"),children:"Action"})]}),arrow:!0,children:t.jsx(n,{variant:"contained",children:"Hover for rich content"})}),name:"Interactive Content"},c={render:()=>t.jsxs(r,{direction:"row",spacing:4,sx:{p:4},children:[t.jsx(e,{title:"Information",arrow:!0,children:t.jsx(y,{color:"info",sx:{fontSize:40,cursor:"pointer"}})}),t.jsx(e,{title:"Delete item",arrow:!0,children:t.jsx(T,{color:"error",sx:{fontSize:40,cursor:"pointer"}})}),t.jsx(e,{title:t.jsxs(m,{children:[t.jsx(i,{variant:"subtitle2",children:"Custom Icon Tooltip"}),t.jsx(i,{variant:"caption",children:"With additional details"})]}),arrow:!0,children:t.jsx(m,{sx:{width:40,height:40,bgcolor:"primary.main",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:t.jsx(i,{color:"white",children:"?"})})})]}),name:"Icon Tooltips"},d={render:()=>t.jsxs(r,{direction:"row",spacing:2,sx:{p:4},children:[t.jsx(e,{title:"Appears quickly",enterDelay:200,leaveDelay:200,children:t.jsx(n,{children:"Fast (200ms)"})}),t.jsx(e,{title:"Takes longer to appear",enterDelay:1e3,leaveDelay:500,children:t.jsx(n,{children:"Slow (1000ms)"})})]}),name:"Delay Variations"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "This is a basic tooltip",
    children: <Button>Hover me</Button>
  },
  name: "Basic Tooltip"
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Tooltip with arrow",
    arrow: true,
    children: <Button variant="outlined">Hover for arrow tooltip</Button>
  },
  name: "With Arrow"
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  name: "Placement Variations"
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <StyledTooltip title={<Box sx={{
    p: 1
  }}>
     <Typography variant="subtitle2" gutterBottom>
      Advanced Tooltip
     </Typography>
     <Typography variant="body2" paragraph>
      This tooltip contains interactive content and formatted text.
     </Typography>
     <Button variant="contained" size="small" onClick={() => alert("Tooltip button clicked!")}>
      Action
     </Button>
    </Box>} arrow>
   <Button variant="contained">Hover for rich content</Button>
  </StyledTooltip>,
  name: "Interactive Content"
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={4} sx={{
    p: 4
  }}>
   <StyledTooltip title="Information" arrow>
    <InfoIcon color="info" sx={{
        fontSize: 40,
        cursor: "pointer"
      }} />
   </StyledTooltip>

   <StyledTooltip title="Delete item" arrow>
    <DeleteIcon color="error" sx={{
        fontSize: 40,
        cursor: "pointer"
      }} />
   </StyledTooltip>

   <StyledTooltip title={<Box>
      <Typography variant="subtitle2">Custom Icon Tooltip</Typography>
      <Typography variant="caption">With additional details</Typography>
     </Box>} arrow>
    <Box sx={{
        width: 40,
        height: 40,
        bgcolor: "primary.main",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
      }}>
     <Typography color="white">?</Typography>
    </Box>
   </StyledTooltip>
  </Stack>,
  name: "Icon Tooltips"
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
  name: "Delay Variations"
}`,...d.parameters?.docs?.source}}};const q=["BasicTooltip","WithArrow","PlacementVariations","InteractiveContent","IconTooltips","DelayVariations"];export{a as BasicTooltip,d as DelayVariations,c as IconTooltips,p as InteractiveContent,s as PlacementVariations,l as WithArrow,q as __namedExportsOrder,F as default};
