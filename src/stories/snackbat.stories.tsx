'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { StyledSnackbar, StyledSnackbarAlert } from '../style/snackbar';
import { AlertProps } from '@mui/material/Alert';

/* -------------------------------------------------------------------------- */
/* 📘 Storybook Metadata                                                      */
/* -------------------------------------------------------------------------- */
const meta: Meta<typeof StyledSnackbar> = {
  title: 'Components/Snackbars/Snackbars',
  component: StyledSnackbar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### 🍿 StyledSnackbar & StyledSnackbarAlert

Customized notification components built on Material-UI's Snackbar and Alert with enhanced styling and interactive effects.

#### ✅ Features
- Theme-aware positioning and colors
- Severity-based styling (error, warning, info, success)
- Multiple variants (standard, filled, outlined)
- Smooth hover animations and shadow effects
- Responsive design with consistent spacing

---

### 📦 Example Variants

| Story               | Description                                |
|---------------------|--------------------------------------------|
| Basic Usage         | Default snackbar with text message         |
| Severity Levels     | Different alert types (error, warning, etc)|
| Position Variations | Different screen placement options         |
| Alert Variants      | Standard, filled, and outlined styles      |

---
        `.trim(),
      },
    },
  },
};

export default meta;

/* -------------------------------------------------------------------------- */
/* 🍿 Basic Usage                                                             */
/* -------------------------------------------------------------------------- */
export const BasicUsage: StoryObj<typeof StyledSnackbar> = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Show Snackbar
        </Button>
        <StyledSnackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="This is a basic snackbar message"
        />
      </>
    );
  },
  name: 'Basic Usage',
};

/* -------------------------------------------------------------------------- */
/* ⚠️ Severity Levels                                                         */
/* -------------------------------------------------------------------------- */
export const SeverityLevels: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState<AlertProps['severity']>('info');

    const showAlert = (type: AlertProps['severity']) => {
      setSeverity(type);
      setOpen(true);
    };

    return (
      <>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <Button variant="contained" color="error" onClick={() => showAlert('error')}>
            Error
          </Button>
          <Button variant="contained" color="warning" onClick={() => showAlert('warning')}>
            Warning
          </Button>
          <Button variant="contained" color="info" onClick={() => showAlert('info')}>
            Info
          </Button>
          <Button variant="contained" color="success" onClick={() => showAlert('success')}>
            Success
          </Button>
        </div>

        <StyledSnackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <StyledSnackbarAlert severity={severity} onClose={() => setOpen(false)}>
            This is a {severity} message!
          </StyledSnackbarAlert>
        </StyledSnackbar>
      </>
    );
  },
  name: 'Severity Levels',
};

/* -------------------------------------------------------------------------- */
/* 📍 Position Variations                                                     */
/* -------------------------------------------------------------------------- */
export const PositionVariations: StoryObj = {
  render: () => {
    const [state, setState] = useState({
      open: false,
      vertical: 'top' as 'top' | 'bottom',
      horizontal: 'center' as 'left' | 'center' | 'right',
    });

    const { vertical, horizontal, open } = state;

    const handleClick = (newState: typeof state) => () => {
      setState({ ...newState, open: true });
    };

    const handleClose = () => {
      setState({ ...state, open: false });
    };

    return (
      <>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button
              variant="outlined"
              onClick={handleClick({ vertical: 'top', horizontal: 'left', open: false })}
            >
              Top-Left
            </Button>
            <Button
              variant="outlined"
              onClick={handleClick({ vertical: 'top', horizontal: 'center', open: false })}
            >
              Top-Center
            </Button>
            <Button
              variant="outlined"
              onClick={handleClick({ vertical: 'top', horizontal: 'right', open: false })}
            >
              Top-Right
            </Button>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button
              variant="outlined"
              onClick={handleClick({ vertical: 'bottom', horizontal: 'left', open: false })}
            >
              Bottom-Left
            </Button>
            <Button
              variant="outlined"
              onClick={handleClick({ vertical: 'bottom', horizontal: 'center', open: false })}
            >
              Bottom-Center
            </Button>
            <Button
              variant="outlined"
              onClick={handleClick({ vertical: 'bottom', horizontal: 'right', open: false })}
            >
              Bottom-Right
            </Button>
          </div>
        </div>

        <StyledSnackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          message="Positioned snackbar"
          key={vertical + horizontal}
        />
      </>
    );
  },
  name: 'Position Variations',
};

/* -------------------------------------------------------------------------- */
/* 🎨 Alert Variants                                                          */
/* -------------------------------------------------------------------------- */
export const AlertVariants: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(false);
    const [variant, setVariant] = useState<AlertProps['variant']>('standard');

    return (
      <>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          <Button variant="outlined" onClick={() => { setVariant('standard'); setOpen(true); }}>
            Standard
          </Button>
          <Button variant="outlined" onClick={() => { setVariant('filled'); setOpen(true); }}>
            Filled
          </Button>
          <Button variant="outlined" onClick={() => { setVariant('outlined'); setOpen(true); }}>
            Outlined
          </Button>
        </div>

        <StyledSnackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <StyledSnackbarAlert
            severity="info"
            variant={variant}
            onClose={() => setOpen(false)}
          >
            This is a {variant} variant alert
          </StyledSnackbarAlert>
        </StyledSnackbar>
      </>
    );
  },
  name: 'Alert Variants',
};
