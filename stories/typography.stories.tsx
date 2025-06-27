'use client';

import type { Meta, StoryObj } from '@storybook/react';
import {
  StyledTypography,
  StyledTypographyCaption,
  StyledTypographySubcaption,
  TypographyContainer
} from '../src/style/typography';
import { Box, Stack } from '@mui/material';

/* -------------------------------------------------------------------------- */
/* 📘 Storybook Metadata                                                      */
/* -------------------------------------------------------------------------- */
const meta: Meta<typeof StyledTypography> = {
  title: 'Components/Data Display/Typography',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
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
        `.trim(),
      },
    },
  },
};

export default meta;

/* -------------------------------------------------------------------------- */
/* ✒️ Base Typography                                                         */
/* -------------------------------------------------------------------------- */
export const BaseTypography: StoryObj = {
  render: () => (
    <Stack spacing={4}>
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
    </Stack>
  ),
  name: 'Base Typography',
};

/* -------------------------------------------------------------------------- */
/* 🌈 Gradient Caption                                                         */
/* -------------------------------------------------------------------------- */
export const GradientCaption: StoryObj = {
  render: () => (
    <Stack spacing={4}>
      <StyledTypographyCaption level="h1" color="primary">
        Primary Gradient Caption (h1)
      </StyledTypographyCaption>
      <StyledTypographyCaption level="h2" color="white">
        White Gradient Caption (h2)
      </StyledTypographyCaption>
      <Box sx={{ bgcolor: 'primary.main', p: 4 }}>
        <StyledTypographyCaption level="h3" color="white">
          Caption on Colored Background (h3)
        </StyledTypographyCaption>
      </Box>
    </Stack>
  ),
  name: 'Gradient Caption',
};

/* -------------------------------------------------------------------------- */
/* 📝 Subcaption                                                              */
/* -------------------------------------------------------------------------- */
export const Subcaption: StoryObj = {
  render: () => (
    <Stack spacing={4}>
      <StyledTypographySubcaption level="h4">
        Default Subcaption (h4)
      </StyledTypographySubcaption>
      <StyledTypographySubcaption level="h5" color="primary">
        Primary Colored Subcaption (h5)
      </StyledTypographySubcaption>
      <StyledTypographySubcaption level="h6" color="#ff5722">
        Custom Colored Subcaption (h6)
      </StyledTypographySubcaption>
    </Stack>
  ),
  name: 'Subcaption',
};

/* -------------------------------------------------------------------------- */
/* 🖋️ Typography Group                                                        */
/* -------------------------------------------------------------------------- */
export const TypographyGroup: StoryObj = {
  render: () => (
    <TypographyContainer>
      <StyledTypography level="h2" variant="h2">
        Product Features
      </StyledTypography>
      <StyledTypographyCaption level="h3" color="primary">
        Innovative Solutions
      </StyledTypographyCaption>
      <StyledTypographySubcaption level="h4">
        Discover our cutting-edge technology
      </StyledTypographySubcaption>
    </TypographyContainer>
  ),
  name: 'Typography Group',
};

/* -------------------------------------------------------------------------- */
/* ✂️ Text Truncation                                                         */
/* -------------------------------------------------------------------------- */
export const TextTruncation: StoryObj = {
  render: () => (
    <Box sx={{ width: 300 }}>
      <StyledTypography sx={{ whiteSpace: 'nowrap' }}>
        This is a very long text that will be truncated with ellipsis when it overflows its container width
      </StyledTypography>
      <StyledTypographyCaption sx={{ whiteSpace: 'nowrap' }}>
        Long gradient caption that will truncate
      </StyledTypographyCaption>
      <StyledTypographySubcaption sx={{ whiteSpace: 'nowrap' }}>
        Extended subcaption text that needs truncation
      </StyledTypographySubcaption>
    </Box>
  ),
  name: 'Text Truncation',
};

/* -------------------------------------------------------------------------- */
/* 📱 Responsive Behavior                                                     */
/* -------------------------------------------------------------------------- */
export const ResponsiveBehavior: StoryObj = {
  render: () => (
    <Box sx={{ maxWidth: 400 }}>
      <StyledTypography level="h3">
        Responsive Typography Example
      </StyledTypography>
      <StyledTypographyCaption>
        This caption will adjust its size on smaller screens
      </StyledTypographyCaption>
      <StyledTypographySubcaption>
        Notice how the text wraps and resizes at different breakpoints
      </StyledTypographySubcaption>
    </Box>
  ),
  name: 'Responsive Behavior',
  parameters: {
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};
