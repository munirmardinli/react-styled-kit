'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { StyledScrollToTopFab, StykedKeyboardArrowUp } from '../style/scrollToTop';

/* -------------------------------------------------------------------------- */
/* 📘 Storybook Metadata                                                      */
/* -------------------------------------------------------------------------- */
const meta: Meta<typeof StyledScrollToTopFab> = {
  title: 'Components/ScrollToTop/StyledScrollToTop',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### 🚀 Scroll-to-Top Components

Custom floating action button and icon for smooth scroll-to-top functionality.

#### ✅ Features
- Fixed positioning at bottom-right
- Smooth hover and focus animations
- Responsive sizing (mobile/desktop)
- Theme-aware styling
- Accessible with proper ARIA labels
- Decorative icon animations

---

### 📦 Components

| Component                   | Description                                |
|----------------------------|--------------------------------------------|
| StyledScrollToTopFab       | Floating action button container           |
| StykedKeyboardArrowUp      | Animated arrow icon                        |

---

### 🎛️ Variants

| Story               | Description                                |
|--------------------|--------------------------------------------|
| Default            | Basic scroll-to-top button                 |
| MobileSize         | Responsive mobile version                  |
| CustomIcon         | With customized icon properties            |

---
        `.trim(),
      },
    },
  },
};

export default meta;

/* -------------------------------------------------------------------------- */
/* 🚀 Default Scroll-to-Top Button                                            */
/* -------------------------------------------------------------------------- */
export const Default: StoryObj<typeof StyledScrollToTopFab> = {
  name: 'Default Scroll-to-Top',
  render: (args) => (
    <StyledScrollToTopFab {...args}>
      <StykedKeyboardArrowUp fontSize="large" />
    </StyledScrollToTopFab>
  ),
  args: {
    'aria-label': 'Scroll back to top',
    onClick: () => alert('Scrolling to top!'),
  },
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

/* -------------------------------------------------------------------------- */
/* 📱 Mobile Size Variant                                                     */
/* -------------------------------------------------------------------------- */
export const MobileSize: StoryObj<typeof StyledScrollToTopFab> = {
  name: 'Mobile Size',
  render: (args) => (
    <StyledScrollToTopFab {...args}>
      <StykedKeyboardArrowUp fontSize="medium" />
    </StyledScrollToTopFab>
  ),
  args: {
    'aria-label': 'Scroll back to top',
    onClick: () => alert('Scrolling to top!'),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

/* -------------------------------------------------------------------------- */
/* 🎨 Custom Icon Variant                                                     */
/* -------------------------------------------------------------------------- */
export const CustomIcon: StoryObj<typeof StyledScrollToTopFab> = {
  name: 'Custom Icon',
  render: (args) => (
    <StyledScrollToTopFab {...args}>
      <StykedKeyboardArrowUp
        fontSize="large"
        sx={{
          color: '#FF5722',
          '&:hover': {
            color: '#E64A19',
            transform: 'scale(1.2) rotate(15deg)',
          },
        }}
      />
    </StyledScrollToTopFab>
  ),
  args: {
    'aria-label': 'Scroll back to top',
    onClick: () => alert('Scrolling to top!'),
    sx: {
      backgroundColor: '#FFF8E1',
      '&:hover': {
        backgroundColor: '#FFECB3',
      },
    },
  },
};
