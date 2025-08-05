"use client";

import type { Meta, StoryObj } from "@storybook/react";
import CloseIcon from "@mui/icons-material/Close";

import { StyledButton, StyledCloseIcon } from "../src/style/button";

/* -------------------------------------------------------------------------- */
/* 📘 Storybook Metadata                                                      */
/* -------------------------------------------------------------------------- */
const meta: Meta<typeof StyledButton> = {
 title: "Components/Buttons/StyledButton",
 component: StyledButton,
 tags: ["autodocs"],
 parameters: {
  docs: {
   description: {
    component: `
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
        `.trim(),
   },
  },
 },
};

export default meta;

/* -------------------------------------------------------------------------- */
/* 🔘 Contained Button                                                        */
/* -------------------------------------------------------------------------- */
export const Contained: StoryObj<typeof StyledButton> = {
 name: "Contained Button",
 args: {
  children: "Save",
  variant: "contained",
  onClick: () => alert("Clicked Contained Button"),
 },
};

/* -------------------------------------------------------------------------- */
/* 🟦 Outlined Button                                                         */
/* -------------------------------------------------------------------------- */
export const Outlined: StoryObj<typeof StyledButton> = {
 name: "Outlined Button",
 args: {
  children: "Cancel",
  variant: "outlined",
  onClick: () => alert("Clicked Outlined Button"),
 },
};

/* -------------------------------------------------------------------------- */
/* 📝 Text Button                                                             */
/* -------------------------------------------------------------------------- */
export const Text: StoryObj<typeof StyledButton> = {
 name: "Text Button",
 args: {
  children: "Learn More",
  variant: "text",
  onClick: () => alert("Clicked Text Button"),
 },
};

/* -------------------------------------------------------------------------- */
/* ❌ Close Icon Button                                                       */
/* -------------------------------------------------------------------------- */
export const CloseIconButton: StoryObj<typeof StyledCloseIcon> = {
 name: "Close Button (Icon Only)",
 render: (args) => (
  <StyledCloseIcon {...args}>
   <CloseIcon />
  </StyledCloseIcon>
 ),
 args: {
  "aria-label": "Close dialog",
  onClick: () => alert("Dialog closed"),
 },
};
