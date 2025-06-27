'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { StyledSwitchMode } from '../src/style/switchMode';
import { Box, Typography, Stack } from '@mui/material';

/* -------------------------------------------------------------------------- */
/* 📘 Storybook Metadata                                                      */
/* -------------------------------------------------------------------------- */
const meta: Meta<typeof StyledSwitchMode> = {
  title: 'Components/SwitchMode/Theme Switch',
  component: StyledSwitchMode,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
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
        `.trim(),
      },
    },
  },
};

export default meta;

/* -------------------------------------------------------------------------- */
/* 🌓 Basic Usage                                                             */
/* -------------------------------------------------------------------------- */
export const BasicUsage: StoryObj<typeof StyledSwitchMode> = {
  args: {
    inputProps: { 'aria-label': 'Toggle theme' },
  },
  name: 'Basic Usage',
};

/* -------------------------------------------------------------------------- */
/* 🎛 With State Control                                                      */
/* -------------------------------------------------------------------------- */
export const WithStateControl: StoryObj = {
  render: () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography>Light</Typography>
        <StyledSwitchMode
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          inputProps={{ 'aria-label': 'Toggle dark mode' }}
        />
        <Typography>Dark</Typography>
      </Stack>
    );
  },
  name: 'With State Control',
};

/* -------------------------------------------------------------------------- */
/* 🔘 Disabled State                                                          */
/* -------------------------------------------------------------------------- */
export const DisabledState: StoryObj<typeof StyledSwitchMode> = {
  args: {
    disabled: true,
    inputProps: { 'aria-label': 'Disabled theme switch' },
  },
  name: 'Disabled State',
};

/* -------------------------------------------------------------------------- */
/* 🏷 Custom Labels                                                           */
/* -------------------------------------------------------------------------- */
export const CustomLabels: StoryObj = {
  render: () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ textAlign: 'right', width: 100 }}>
          <Typography variant="body2" color="text.secondary">
            Current mode:
          </Typography>
          <Typography variant="body1" fontWeight="medium">
            {darkMode ? 'Dark Theme' : 'Light Theme'}
          </Typography>
        </Box>

        <StyledSwitchMode
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
          inputProps={{ 'aria-label': 'Toggle theme mode' }}
        />

        <Box sx={{ width: 100 }}>
          <Typography variant="caption" display="block">
            {darkMode ? '🌙 Moon' : '☀️ Sun'}
          </Typography>
          <Typography variant="caption" display="block" color="text.secondary">
            {darkMode ? 'Night time' : 'Day time'}
          </Typography>
        </Box>
      </Box>
    );
  },
  name: 'Custom Labels',
};

/* -------------------------------------------------------------------------- */
/* 🎨 Size Variations                                                         */
/* -------------------------------------------------------------------------- */
export const SizeVariations: StoryObj = {
  render: () => {
    const [darkMode1, setDarkMode1] = useState(false);
    const [darkMode2, setDarkMode2] = useState(false);
    const [darkMode3, setDarkMode3] = useState(false);

    return (
      <Stack spacing={3}>
        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Small (custom)
          </Typography>
          <StyledSwitchMode
            sx={{
              width: 50,
              height: 26,
              '& .MuiSwitch-thumb': { width: 24, height: 24 },
              '& .MuiSwitch-switchBase.Mui-checked': { transform: 'translateX(18px)' }
            }}
            checked={darkMode1}
            onChange={() => setDarkMode1(!darkMode1)}
          />
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Default
          </Typography>
          <StyledSwitchMode
            checked={darkMode2}
            onChange={() => setDarkMode2(!darkMode2)}
          />
        </Box>

        <Box>
          <Typography variant="subtitle2" gutterBottom>
            Large (custom)
          </Typography>
          <StyledSwitchMode
            sx={{
              width: 80,
              height: 42,
              padding: '9px',
              '& .MuiSwitch-thumb': { width: 38, height: 38 },
              '& .MuiSwitch-switchBase.Mui-checked': { transform: 'translateX(34px)' }
            }}
            checked={darkMode3}
            onChange={() => setDarkMode3(!darkMode3)}
          />
        </Box>
      </Stack>
    );
  },
  name: 'Size Variations',
};
