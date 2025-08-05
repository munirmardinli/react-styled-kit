"use client";

import type { Meta, StoryObj } from "@storybook/react";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";

import {
 Search,
 SearchIconWrapper,
 StyledInputBase,
 SearchSelect,
} from "../src/style/search";

/* -------------------------------------------------------------------------- */
/* 📘 Storybook Metadata                                                      */
/* -------------------------------------------------------------------------- */
const meta: Meta<typeof Search> = {
 title: "Components/Search/SearchComponents",
 tags: ["autodocs"],
 parameters: {
  docs: {
   description: {
    component: `
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
        `.trim(),
   },
  },
 },
};

export default meta;

/* -------------------------------------------------------------------------- */
/* 🔍 Basic Search Input                                                      */
/* -------------------------------------------------------------------------- */
export const BasicSearch: StoryObj<typeof Search> = {
 name: "Basic Search",
 render: () => (
  <Search>
   <SearchIconWrapper>
    <SearchIcon />
   </SearchIconWrapper>
   <StyledInputBase
    placeholder="Search..."
    inputProps={{ "aria-label": "search" }}
   />
  </Search>
 ),
};

/* -------------------------------------------------------------------------- */
/* 🔍 Search with Filter                                                      */
/* -------------------------------------------------------------------------- */
export const SearchWithFilter: StoryObj = {
 name: "Search with Filter",
 render: () => (
  <div style={{ display: "flex", gap: "8px" }}>
   <Search>
    <SearchIconWrapper>
     <SearchIcon />
    </SearchIconWrapper>
    <StyledInputBase
     placeholder="Search..."
     inputProps={{ "aria-label": "search" }}
    />
   </Search>

   <SearchSelect value="all" inputProps={{ "aria-label": "search filter" }}>
    <MenuItem value="all">All</MenuItem>
    <MenuItem value="recent">Recent</MenuItem>
    <MenuItem value="popular">Popular</MenuItem>
   </SearchSelect>
  </div>
 ),
};

/* -------------------------------------------------------------------------- */
/* 🔍 Responsive Behavior                                                     */
/* -------------------------------------------------------------------------- */
export const ResponsiveSearch: StoryObj = {
 name: "Responsive Behavior",
 parameters: {
  viewport: {
   defaultViewport: "mobile1",
  },
 },
 render: () => (
  <Search>
   <SearchIconWrapper>
    <SearchIcon />
   </SearchIconWrapper>
   <StyledInputBase
    placeholder="Search..."
    inputProps={{ "aria-label": "search" }}
   />
  </Search>
 ),
};

/* -------------------------------------------------------------------------- */
/* 🔍 Customized Search Select                                                */
/* -------------------------------------------------------------------------- */
export const FilterDropdown: StoryObj<typeof SearchSelect> = {
 name: "Filter Dropdown",
 render: (args) => (
  <SearchSelect {...args}>
   <MenuItem value="all">All Categories</MenuItem>
   <MenuItem value="tech">Technology</MenuItem>
   <MenuItem value="design">Design</MenuItem>
  </SearchSelect>
 ),
 args: {
  value: "all",
  inputProps: { "aria-label": "category filter" },
 },
};
