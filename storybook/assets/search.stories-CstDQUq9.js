import{j as e,a as h}from"./iframe-jCa0HKbB.js";import{c as M}from"./createSvgIcon-t_k3IETS.js";import{s as i}from"./styled-B16xe9Yq.js";import{I as B,S as R}from"./Select-CImpXhH2.js";import{a}from"./MenuItem-B6ZsoIZh.js";import"./createSimplePaletteValueFilter-7VjFSC9k.js";import"./useSlot-BEQWaDEZ.js";import"./ButtonBase-BsYm3Bgf.js";import"./assertThisInitialized-BjnbojEp.js";import"./useSlotProps-BkrZAeWU.js";import"./Paper-DMZomIF7.js";import"./getReactElementRef--f2EXp73.js";import"./index-BvyfcoGG.js";import"./Grow-Bf8vvHGD.js";import"./useControlled-kJzqhnF6.js";import"./useId-TgsgIcCt.js";import"./useFormControl-DgL-PlZv.js";import"./Portal-CpN5d4s5.js";const c=M(e.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"})),p=i("div")(({theme:r})=>({position:"relative",display:"flex",borderRadius:r.shape.borderRadius,backgroundColor:h(r.palette.common.white,.15),"&:hover":{backgroundColor:h(r.palette.common.white,.25)},marginLeft:0,width:"100%",[r.breakpoints.up("sm")]:{marginLeft:r.spacing(0),width:"auto"}})),l=i("div")(({theme:r})=>({padding:r.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"})),d=i(B)(({theme:r})=>({color:"inherit",marginBottom:6,width:"100%","& .MuiInputBase-input":{padding:r.spacing(1,1,1,0),paddingLeft:`calc(1em + ${r.spacing(4)})`,transition:r.transitions.create("width"),[r.breakpoints.up("sm")]:{width:"12ch","&:focus":{width:"20ch"}}}})),C=i(R)(({theme:r})=>({color:"inherit",display:"flex",width:"25%",borderRadius:r.shape.borderRadius,backgroundColor:"transparent !important","&::before, &::after":{border:"none !important"},"&.Mui-focused":{backgroundColor:"transparent !important"},"& .MuiInputBase-input":{padding:r.spacing(1,1,1,0),paddingLeft:"calc(1em)",backgroundColor:"transparent !important",[r.breakpoints.up("sm")]:{width:"30ch"}},"&:focus":{outline:"none",backgroundColor:"transparent !important"},"& .MuiSelect-select:focus":{backgroundColor:"transparent !important"}})),J={title:"Components/Search/SearchComponents",tags:["autodocs"],parameters:{docs:{description:{component:`
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
        `.trim()}}}},t={name:"Basic Search",render:()=>e.jsxs(p,{children:[e.jsx(l,{children:e.jsx(c,{})}),e.jsx(d,{placeholder:"Search...",inputProps:{"aria-label":"search"}})]})},o={name:"Search with Filter",render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs(p,{children:[e.jsx(l,{children:e.jsx(c,{})}),e.jsx(d,{placeholder:"Search...",inputProps:{"aria-label":"search"}})]}),e.jsxs(C,{value:"all",inputProps:{"aria-label":"search filter"},children:[e.jsx(a,{value:"all",children:"All"}),e.jsx(a,{value:"recent",children:"Recent"}),e.jsx(a,{value:"popular",children:"Popular"})]})]})},n={name:"Responsive Behavior",parameters:{viewport:{defaultViewport:"mobile1"}},render:()=>e.jsxs(p,{children:[e.jsx(l,{children:e.jsx(c,{})}),e.jsx(d,{placeholder:"Search...",inputProps:{"aria-label":"search"}})]})},s={name:"Filter Dropdown",render:r=>e.jsxs(C,{...r,children:[e.jsx(a,{value:"all",children:"All Categories"}),e.jsx(a,{value:"tech",children:"Technology"}),e.jsx(a,{value:"design",children:"Design"})]}),args:{value:"all",inputProps:{"aria-label":"category filter"}}};var u,m,S;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Basic Search',
  render: () => <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search..." inputProps={{
      'aria-label': 'search'
    }} />
    </Search>
}`,...(S=(m=t.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var g,v,I;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Search with Filter',
  render: () => <div style={{
    display: 'flex',
    gap: '8px'
  }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase placeholder="Search..." inputProps={{
        'aria-label': 'search'
      }} />
      </Search>

      <SearchSelect value="all" inputProps={{
      'aria-label': 'search filter'
    }}>
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="recent">Recent</MenuItem>
        <MenuItem value="popular">Popular</MenuItem>
      </SearchSelect>
    </div>
}`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var b,w,f;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Responsive Behavior',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: () => <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search..." inputProps={{
      'aria-label': 'search'
    }} />
    </Search>
}`,...(f=(w=n.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var x,j,y;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Filter Dropdown',
  render: args => <SearchSelect {...args}>
      <MenuItem value="all">All Categories</MenuItem>
      <MenuItem value="tech">Technology</MenuItem>
      <MenuItem value="design">Design</MenuItem>
    </SearchSelect>,
  args: {
    value: 'all',
    inputProps: {
      'aria-label': 'category filter'
    }
  }
}`,...(y=(j=s.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const K=["BasicSearch","SearchWithFilter","ResponsiveSearch","FilterDropdown"];export{t as BasicSearch,s as FilterDropdown,n as ResponsiveSearch,o as SearchWithFilter,K as __namedExportsOrder,J as default};
