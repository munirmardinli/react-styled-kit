import{j as e,a as h}from"./iframe-jxtUxaR9.js";import{c as m}from"./createSvgIcon-Dujc27Ao.js";import{s as i}from"./styled-DVBkpXcY.js";import{I as S,S as g}from"./Select-PW20q-b2.js";import{a}from"./MenuItem--U1MsgKl.js";import"./preload-helper-D9Z9MdNV.js";import"./createSimplePaletteValueFilter-3gGRDZXa.js";import"./useSlot-Axrh0xRK.js";import"./ButtonBase-ip0BSY1n.js";import"./assertThisInitialized-BjnbojEp.js";import"./useSlotProps-BzD55MaK.js";import"./Paper-CeAM3uet.js";import"./getReactElementRef-C9fz6be2.js";import"./index-CmV3qbgN.js";import"./Grow-GuQTlBHW.js";import"./useControlled-DBT5ii3A.js";import"./useFormControl-Fqo6Ursm.js";import"./Portal-CAacfZsU.js";const c=m(e.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"})),p=i("div")(({theme:r})=>({position:"relative",display:"flex",borderRadius:r.shape.borderRadius,backgroundColor:h(r.palette.common.white,.15),"&:hover":{backgroundColor:h(r.palette.common.white,.25)},marginLeft:0,width:"100%",[r.breakpoints.up("sm")]:{marginLeft:r.spacing(0),width:"auto"}})),l=i("div")(({theme:r})=>({padding:r.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"})),d=i(S)(({theme:r})=>({color:"inherit",marginBottom:6,width:"100%","& .MuiInputBase-input":{padding:r.spacing(1,1,1,0),paddingLeft:`calc(1em + ${r.spacing(4)})`,transition:r.transitions.create("width"),[r.breakpoints.up("sm")]:{width:"12ch","&:focus":{width:"20ch"}}}})),u=i(g)(({theme:r})=>({color:"inherit",display:"flex",width:"25%",borderRadius:r.shape.borderRadius,backgroundColor:"transparent !important","&::before, &::after":{border:"none !important"},"&.Mui-focused":{backgroundColor:"transparent !important"},"& .MuiInputBase-input":{padding:r.spacing(1,1,1,0),paddingLeft:"calc(1em)",backgroundColor:"transparent !important",[r.breakpoints.up("sm")]:{width:"30ch"}},"&:focus":{outline:"none",backgroundColor:"transparent !important"},"& .MuiSelect-select:focus":{backgroundColor:"transparent !important"}})),L={title:"Components/Search/SearchComponents",tags:["autodocs"],parameters:{docs:{description:{component:`
### 🔍 Search Components

A collection of customizable search components with responsive behavior and theme-aware styling.

#### ✅ Features
- **Search Container**: Responsive wrapper with hover effects
- **Search Input**: Auto-expanding input field with icon support
- **Search Select**: Filter dropdown with clean styling
- Theme-driven colors and transitions
- Mobile-first responsive design
- Accessibility support (ARIA labels)

---

### 📦 Component Breakdown

| Component          | Description                                |
|--------------------|--------------------------------------------|
| Search             | Outer container with responsive width     |
| SearchIconWrapper  | Absolute-positioned icon container        |
| StyledInputBase    | Custom input with dynamic width            |
| SearchSelect       | Filter dropdown with transparent styling  |

---

### 🎨 Design Tokens
- Uses theme's:
  - \`shape.borderRadius\`
  - \`palette.common.white\` (with alpha transparency)
  - \`spacing\` system
  - \`transitions\` for smooth animations
        `.trim()}}}},n={name:"Basic Search",render:()=>e.jsxs(p,{children:[e.jsx(l,{children:e.jsx(c,{})}),e.jsx(d,{placeholder:"Search...",inputProps:{"aria-label":"search"}})]})},t={name:"Search with Filter",render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs(p,{children:[e.jsx(l,{children:e.jsx(c,{})}),e.jsx(d,{placeholder:"Search...",inputProps:{"aria-label":"search"}})]}),e.jsxs(u,{value:"all",inputProps:{"aria-label":"search filter"},children:[e.jsx(a,{value:"all",children:"All"}),e.jsx(a,{value:"recent",children:"Recent"}),e.jsx(a,{value:"popular",children:"Popular"})]})]})},o={name:"Responsive Behavior",parameters:{viewport:{defaultViewport:"mobile1"}},render:()=>e.jsxs(p,{children:[e.jsx(l,{children:e.jsx(c,{})}),e.jsx(d,{placeholder:"Search...",inputProps:{"aria-label":"search"}})]})},s={name:"Filter Dropdown",render:r=>e.jsxs(u,{...r,children:[e.jsx(a,{value:"all",children:"All Categories"}),e.jsx(a,{value:"tech",children:"Technology"}),e.jsx(a,{value:"design",children:"Design"})]}),args:{value:"all",inputProps:{"aria-label":"category filter"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "Basic Search",
  render: () => <Search>
   <SearchIconWrapper>
    <SearchIcon />
   </SearchIconWrapper>
   <StyledInputBase placeholder="Search..." inputProps={{
      "aria-label": "search"
    }} />
  </Search>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Search with Filter",
  render: () => <div style={{
    display: "flex",
    gap: "8px"
  }}>
   <Search>
    <SearchIconWrapper>
     <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase placeholder="Search..." inputProps={{
        "aria-label": "search"
      }} />
   </Search>

   <SearchSelect value="all" inputProps={{
      "aria-label": "search filter"
    }}>
    <MenuItem value="all">All</MenuItem>
    <MenuItem value="recent">Recent</MenuItem>
    <MenuItem value="popular">Popular</MenuItem>
   </SearchSelect>
  </div>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "Responsive Behavior",
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  },
  render: () => <Search>
   <SearchIconWrapper>
    <SearchIcon />
   </SearchIconWrapper>
   <StyledInputBase placeholder="Search..." inputProps={{
      "aria-label": "search"
    }} />
  </Search>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: "Filter Dropdown",
  render: args => <SearchSelect {...args}>
   <MenuItem value="all">All Categories</MenuItem>
   <MenuItem value="tech">Technology</MenuItem>
   <MenuItem value="design">Design</MenuItem>
  </SearchSelect>,
  args: {
    value: "all",
    inputProps: {
      "aria-label": "category filter"
    }
  }
}`,...s.parameters?.docs?.source}}};const T=["BasicSearch","SearchWithFilter","ResponsiveSearch","FilterDropdown"];export{n as BasicSearch,s as FilterDropdown,o as ResponsiveSearch,t as SearchWithFilter,T as __namedExportsOrder,L as default};
