/**
 * @file Styled button components
 * @module style/button
 * @description Customized Material-UI button components with enhanced styling and hover effects
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @version 1.0.0
 */
import type { ButtonProps } from '@mui/material';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * Styled button component with dynamic theming
 * @component StyledButton
 * @description A highly customizable button component that adapts to theme and variant.
 * Features include:
 * - Dynamic background and text colors based on theme mode and variant
 * - Smooth hover and active state transitions
 * - Responsive shadow effects
 * - Consistent border radius
 * @param {ButtonProps} props - Material-UI Button props
 * @param {string} [props.variant] - Button variant ('contained', 'outlined', or 'text')
 * @example
 * <StyledButton variant="contained">Submit</StyledButton>
 * <StyledButton variant="outlined">Cancel</StyledButton>
 */
export const StyledButton = styled(Button)<ButtonProps>(
  ({ theme, variant }) => ({
    'backgroundColor':
      variant === 'contained'
        ? theme.palette.primary.main
        : theme.palette.mode === 'dark'
          ? 'transparent'
          : 'transparent',
    'color':
      variant === 'contained'
        ? theme.palette.common.white
        : theme.palette.mode === 'dark'
          ? theme.palette.common.white
          : theme.palette.primary.main,
    'textTransform': 'none',
    'lineHeight': 'initial',
    'border':
      variant === 'outlined'
        ? `1px solid ${theme.palette.primary.main}`
        : 'none',
    'borderRadius': '8px',
    'boxShadow':
      variant === 'contained' ? '0px 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
    'transition':
      'transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease',

    '&:hover': {
      'backgroundColor':
        variant === 'contained'
          ? theme.palette.action.hover
          : variant === 'outlined'
            ? theme.palette.action.hover
            : theme.palette.mode === 'dark'
              ? theme.palette.action.hover
              : 'transparent',
      'cursor': 'pointer',
      'opacity': 0.9,
      'transform': 'scale(1)',
      'boxShadow':
        variant === 'contained' ? '0px 6px 10px rgba(0, 0, 0, 0.15)' : 'none',
      '& span': {
        transform: 'translateX(3px)',
      },
    },
    '&:active': {
      transform: 'scale(0.98)',
      boxShadow:
        variant === 'contained' ? '0px 3px 8px rgba(0, 0, 0, 0.2)' : 'none',
    },
  }),
);

/**
 * Styled close icon button component
 * @component StyledCloseIcon
 * @description A specialized button component designed for close/dismiss actions.
 * Features include:
 * - Consistent info color scheme
 * - Smooth hover animations
 * - Fixed white text color
 * - Shadow effects
 * @param {ButtonProps} props - Material-UI Button props
 * @example
 * <StyledCloseIcon onClick={handleClose}>
 *   <CloseIcon />
 * </StyledCloseIcon>
 */
export const StyledCloseIcon = styled(Button)<ButtonProps>(({ theme }) => ({
  'lineHeight': 'initial',
  'border': 'none',
  'borderRadius': '8px',
  'boxShadow': '0px 4px 6px rgba(0, 0, 0, 0.1)',
  'transition': 'transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease',
  'color': theme.palette.common.white,
  'textTransform': 'none',
  'backgroundColor': theme.palette.info.main,
  '&:hover': {
    'backgroundColor': theme.palette.info.main,
    'cursor': 'pointer',
    'opacity': 0.9,
    'transform': 'scale(1)',
    'boxShadow': '0px 6px 10px rgba(0, 0, 0, 0.15)',
    '& span': {
      transform: 'translateX(3px)',
    },
  },
}));
