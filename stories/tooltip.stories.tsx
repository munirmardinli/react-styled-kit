"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { StyledTooltip } from "../src/style/tooltip";
import Button from "@mui/material/Button";
import { Stack, Typography, Box } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";

/* -------------------------------------------------------------------------- */
/* 📘 Storybook Metadata                                                      */
/* -------------------------------------------------------------------------- */
const meta: Meta<typeof StyledTooltip> = {
 title: "Components/ToolTip/Tooltips",
 component: StyledTooltip,
 tags: ["autodocs"],
 parameters: {
  docs: {
   description: {
    component: `
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
        `.trim(),
   },
  },
 },
};

export default meta;

/* -------------------------------------------------------------------------- */
/* 💡 Basic Tooltip                                                           */
/* -------------------------------------------------------------------------- */
export const BasicTooltip: StoryObj<typeof StyledTooltip> = {
 args: {
  title: "This is a basic tooltip",
  children: <Button>Hover me</Button>,
 },
 name: "Basic Tooltip",
};

/* -------------------------------------------------------------------------- */
/* ➡️ With Arrow                                                              */
/* -------------------------------------------------------------------------- */
export const WithArrow: StoryObj<typeof StyledTooltip> = {
 args: {
  title: "Tooltip with arrow",
  arrow: true,
  children: <Button variant="outlined">Hover for arrow tooltip</Button>,
 },
 name: "With Arrow",
};

/* -------------------------------------------------------------------------- */
/* 📍 Placement Variations                                                    */
/* -------------------------------------------------------------------------- */
export const PlacementVariations: StoryObj = {
 render: () => (
  <Stack spacing={4} sx={{ p: 4 }}>
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
  </Stack>
 ),
 name: "Placement Variations",
};

/* -------------------------------------------------------------------------- */
/* 🖱️ Interactive Content                                                     */
/* -------------------------------------------------------------------------- */
export const InteractiveContent: StoryObj = {
 render: () => (
  <StyledTooltip
   title={
    <Box sx={{ p: 1 }}>
     <Typography variant="subtitle2" gutterBottom>
      Advanced Tooltip
     </Typography>
     <Typography variant="body2" paragraph>
      This tooltip contains interactive content and formatted text.
     </Typography>
     <Button
      variant="contained"
      size="small"
      onClick={() => alert("Tooltip button clicked!")}
     >
      Action
     </Button>
    </Box>
   }
   arrow
  >
   <Button variant="contained">Hover for rich content</Button>
  </StyledTooltip>
 ),
 name: "Interactive Content",
};

/* -------------------------------------------------------------------------- */
/* 🎨 Icon Tooltips                                                           */
/* -------------------------------------------------------------------------- */
export const IconTooltips: StoryObj = {
 render: () => (
  <Stack direction="row" spacing={4} sx={{ p: 4 }}>
   <StyledTooltip title="Information" arrow>
    <InfoIcon color="info" sx={{ fontSize: 40, cursor: "pointer" }} />
   </StyledTooltip>

   <StyledTooltip title="Delete item" arrow>
    <DeleteIcon color="error" sx={{ fontSize: 40, cursor: "pointer" }} />
   </StyledTooltip>

   <StyledTooltip
    title={
     <Box>
      <Typography variant="subtitle2">Custom Icon Tooltip</Typography>
      <Typography variant="caption">With additional details</Typography>
     </Box>
    }
    arrow
   >
    <Box
     sx={{
      width: 40,
      height: 40,
      bgcolor: "primary.main",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
     }}
    >
     <Typography color="white">?</Typography>
    </Box>
   </StyledTooltip>
  </Stack>
 ),
 name: "Icon Tooltips",
};

/* -------------------------------------------------------------------------- */
/* ⏱️ Delay Variations                                                        */
/* -------------------------------------------------------------------------- */
export const DelayVariations: StoryObj = {
 render: () => (
  <Stack direction="row" spacing={2} sx={{ p: 4 }}>
   <StyledTooltip title="Appears quickly" enterDelay={200} leaveDelay={200}>
    <Button>Fast (200ms)</Button>
   </StyledTooltip>

   <StyledTooltip
    title="Takes longer to appear"
    enterDelay={1000}
    leaveDelay={500}
   >
    <Button>Slow (1000ms)</Button>
   </StyledTooltip>
  </Stack>
 ),
 name: "Delay Variations",
};
