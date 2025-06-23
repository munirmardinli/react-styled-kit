import { StyledButton, StyledCloseIcon } from '../style/button';
import CloseIcon from '@mui/icons-material/Close';
import type { Meta, StoryObj } from '@storybook/react';

/**
 * Meta configuration for StyledButton stories
 */
const meta: Meta<typeof StyledButton> = {
  title: 'Components/StyledButton',
  component: StyledButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
A set of custom MUI-based buttons with consistent styling, responsive theming,
and smooth hover/active animations.

Includes:
- Standard action buttons: contained, outlined, and text
- A styled close/dismiss button with icon
        `.trim(),
      },
    },
  },
};

export default meta;

/**
 * Contained variant of the StyledButton
 */
export const Contained: StoryObj<typeof StyledButton> = {
  args: {
    children: 'Contained Button',
    variant: 'contained',
  },
};

/**
 * Outlined variant of the StyledButton
 */
export const Outlined: StoryObj<typeof StyledButton> = {
  args: {
    children: 'Outlined Button',
    variant: 'outlined',
  },
};

/**
 * Text variant of the StyledButton
 */
export const Text: StoryObj<typeof StyledButton> = {
  args: {
    children: 'Text Button',
    variant: 'text',
  },
};

/**
 * Close icon button using StyledCloseIcon
 */
export const CloseButton: StoryObj<typeof StyledCloseIcon> = {
  render: (args) => (
    <StyledCloseIcon {...args}>
      <CloseIcon />
    </StyledCloseIcon>
  ),
  args: {
    'aria-label': 'Close',
  },
};
