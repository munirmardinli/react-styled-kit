import{r as i,j as e}from"./iframe-C8X7cf5N.js";import{s as P}from"./styled-CruTJ39R.js";import{a as A}from"./Switch-DjUmmdxi.js";import{S as j}from"./Stack-CYlNdh54.js";import{T as a}from"./Typography-DgBNisSt.js";import{B as o}from"./Box-UzQ6HGaW.js";import"./createSimplePaletteValueFilter-DShyVaiS.js";import"./useFormControl-bgou5t1f.js";import"./useSlot-DiludE4u.js";import"./ButtonBase-D47jaNOj.js";import"./assertThisInitialized-BjnbojEp.js";import"./useControlled-Bban9pmq.js";import"./getThemeProps-C4HYJJqC.js";const r=P(A)(({theme:t})=>({width:62,height:34,padding:7,"& .MuiSwitch-switchBase":{margin:1,padding:0,transform:"translateX(6px)","&.Mui-checked":{color:"#fff",transform:"translateX(22px)","& .MuiSwitch-thumb:before":{backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`},"& + .MuiSwitch-track":{opacity:1,backgroundColor:t.palette.mode==="dark"?"#8796A5":"#aab4be"}}},"& .MuiSwitch-thumb":{backgroundColor:t.palette.mode==="dark"?"#003892":"#001e3c",width:32,height:32,"&::before":{content:"''",position:"absolute",width:"100%",height:"100%",left:0,top:0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent("#fff")}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`}},"& .MuiSwitch-track":{opacity:1,backgroundColor:t.palette.mode==="dark"?"#8796A5":"#aab4be",borderRadius:20/2}})),q={title:"Components/SwitchMode/Theme Switch",component:r,tags:["autodocs"],parameters:{docs:{description:{component:`
### 🌓 Styled Theme Mode Switch

A customizable switch component for toggling between light and dark themes with dynamic icons.

#### ✅ Features
- Dynamic sun/moon icons that change with the theme
- Theme-aware colors (adapts to current mode)
- Smooth transition animations
- Responsive sizing
- Accessible (includes ARIA labels)

#### 🎛 Props
| Prop        | Type      | Default | Description                              |
|-------------|----------|---------|------------------------------------------|
| checked     | boolean  | false   | Whether switch is on (dark mode)         |
| onChange    | function | -       | Callback when switch state changes       |
| disabled    | boolean  | false   | Disables interaction                     |
| inputProps  | object   | -       | Props applied to the input element       |

---

### 📦 Example Variants

| Story               | Description                                |
|---------------------|--------------------------------------------|
| Basic Usage         | Default theme switch implementation        |
| With State Control  | Demo with React state management           |
| Disabled State      | Non-interactive version                    |
| Custom Labels       | Switch with contextual labels              |

---
        `.trim()}}}},n={args:{inputProps:{"aria-label":"Toggle theme"}},name:"Basic Usage"},d={render:()=>{const[t,s]=i.useState(!1);return e.jsxs(j,{direction:"row",alignItems:"center",spacing:2,children:[e.jsx(a,{children:"Light"}),e.jsx(r,{checked:t,onChange:()=>s(!t),inputProps:{"aria-label":"Toggle dark mode"}}),e.jsx(a,{children:"Dark"})]})},name:"With State Control"},c={args:{disabled:!0,inputProps:{"aria-label":"Disabled theme switch"}},name:"Disabled State"},h={render:()=>{const[t,s]=i.useState(!1);return e.jsxs(o,{sx:{display:"flex",alignItems:"center",gap:2},children:[e.jsxs(o,{sx:{textAlign:"right",width:100},children:[e.jsx(a,{variant:"body2",color:"text.secondary",children:"Current mode:"}),e.jsx(a,{variant:"body1",fontWeight:"medium",children:t?"Dark Theme":"Light Theme"})]}),e.jsx(r,{checked:t,onChange:()=>s(!t),inputProps:{"aria-label":"Toggle theme mode"}}),e.jsxs(o,{sx:{width:100},children:[e.jsx(a,{variant:"caption",display:"block",children:t?"🌙 Moon":"☀️ Sun"}),e.jsx(a,{variant:"caption",display:"block",color:"text.secondary",children:t?"Night time":"Day time"})]})]})},name:"Custom Labels"},l={render:()=>{const[t,s]=i.useState(!1),[p,z]=i.useState(!1),[m,L]=i.useState(!1);return e.jsxs(j,{spacing:3,children:[e.jsxs(o,{children:[e.jsx(a,{variant:"subtitle2",gutterBottom:!0,children:"Small (custom)"}),e.jsx(r,{sx:{width:50,height:26,"& .MuiSwitch-thumb":{width:24,height:24},"& .MuiSwitch-switchBase.Mui-checked":{transform:"translateX(18px)"}},checked:t,onChange:()=>s(!t)})]}),e.jsxs(o,{children:[e.jsx(a,{variant:"subtitle2",gutterBottom:!0,children:"Default"}),e.jsx(r,{checked:p,onChange:()=>z(!p)})]}),e.jsxs(o,{children:[e.jsx(a,{variant:"subtitle2",gutterBottom:!0,children:"Large (custom)"}),e.jsx(r,{sx:{width:80,height:42,padding:"9px","& .MuiSwitch-thumb":{width:38,height:38},"& .MuiSwitch-switchBase.Mui-checked":{transform:"translateX(34px)"}},checked:m,onChange:()=>L(!m)})]})]})},name:"Size Variations"};var g,u,k;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    inputProps: {
      'aria-label': 'Toggle theme'
    }
  },
  name: 'Basic Usage'
}`,...(k=(u=n.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var x,M,S;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [darkMode, setDarkMode] = useState(false);
    return <Stack direction="row" alignItems="center" spacing={2}>
        <Typography>Light</Typography>
        <StyledSwitchMode checked={darkMode} onChange={() => setDarkMode(!darkMode)} inputProps={{
        'aria-label': 'Toggle dark mode'
      }} />
        <Typography>Dark</Typography>
      </Stack>;
  },
  name: 'With State Control'
}`,...(S=(M=d.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var w,b,y;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true,
    inputProps: {
      'aria-label': 'Disabled theme switch'
    }
  },
  name: 'Disabled State'
}`,...(y=(b=c.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,D,T;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [darkMode, setDarkMode] = useState(false);
    return <Box sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }}>
        <Box sx={{
        textAlign: 'right',
        width: 100
      }}>
          <Typography variant="body2" color="text.secondary">
            Current mode:
          </Typography>
          <Typography variant="body1" fontWeight="medium">
            {darkMode ? 'Dark Theme' : 'Light Theme'}
          </Typography>
        </Box>

        <StyledSwitchMode checked={darkMode} onChange={() => setDarkMode(!darkMode)} inputProps={{
        'aria-label': 'Toggle theme mode'
      }} />

        <Box sx={{
        width: 100
      }}>
          <Typography variant="caption" display="block">
            {darkMode ? '🌙 Moon' : '☀️ Sun'}
          </Typography>
          <Typography variant="caption" display="block" color="text.secondary">
            {darkMode ? 'Night time' : 'Day time'}
          </Typography>
        </Box>
      </Box>;
  },
  name: 'Custom Labels'
}`,...(T=(D=h.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var v,B,C;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [darkMode1, setDarkMode1] = useState(false);
    const [darkMode2, setDarkMode2] = useState(false);
    const [darkMode3, setDarkMode3] = useState(false);
    return <Stack spacing={3}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Small (custom)
          </Typography>
          <StyledSwitchMode sx={{
          width: 50,
          height: 26,
          '& .MuiSwitch-thumb': {
            width: 24,
            height: 24
          },
          '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(18px)'
          }
        }} checked={darkMode1} onChange={() => setDarkMode1(!darkMode1)} />
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Default
          </Typography>
          <StyledSwitchMode checked={darkMode2} onChange={() => setDarkMode2(!darkMode2)} />
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Large (custom)
          </Typography>
          <StyledSwitchMode sx={{
          width: 80,
          height: 42,
          padding: '9px',
          '& .MuiSwitch-thumb': {
            width: 38,
            height: 38
          },
          '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(34px)'
          }
        }} checked={darkMode3} onChange={() => setDarkMode3(!darkMode3)} />
        </Box>
      </Stack>;
  },
  name: 'Size Variations'
}`,...(C=(B=l.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};const G=["BasicUsage","WithStateControl","DisabledState","CustomLabels","SizeVariations"];export{n as BasicUsage,h as CustomLabels,c as DisabledState,l as SizeVariations,d as WithStateControl,G as __namedExportsOrder,q as default};
