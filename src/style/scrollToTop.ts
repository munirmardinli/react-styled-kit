import { KeyboardArrowUp } from '@mui/icons-material';
import type { FabProps, IconProps } from '@mui/material';
import { Fab } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledScrollToTopFab = styled(Fab)<FabProps>(({ theme }) => ({
  'position': 'fixed',
  'color': 'white',
  'backgroundColor': 'white',
  'borderColor': theme.palette.divider,
  'bottom': 16,
  'right': 16,
  'zIndex': 1000,
  'borderRadius': '50%',
  'padding': 0,
  'transition': 'all 0.3s ease',
  'boxShadow': '0 4px 8px rgba(0, 0, 0, 0.2)',
  '&:hover': {
    backgroundColor: 'white',
    transform: 'scale(1.1) rotate(10deg)',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
  },
  '&:focus': {
    outline: 'none',
    boxShadow: `0 0 0 3px ${theme.palette.primary.main}`,
  },
  [theme.breakpoints.down('md')]: {
    width: '2.2rem',
    height: '2.2rem',
    Opacity: '0.6',
    fontSize: '1rem',
    opacity: 0.8,
  },
  [theme.breakpoints.up('md')]: {
    width: '4rem',
    height: '4rem',
    fontSize: '1.5rem',
  },
}));

export const StykedKeyboardArrowUp = styled(KeyboardArrowUp)<IconProps>(() => ({
  'fontSize': 'inherit',
  'transition': 'all 0.3s ease',
  'color': '#00854C',
  'position': 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '10px',
    height: '10px',
    color: 'white',
    borderRadius: '50%',
    transition: 'all 0.3s ease',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    transition: 'all 0.3s ease',
    color: '#00854C',
  },
  '&:hover': {
    'transform': 'scale(1.1)',
    'color': '#00854C',
    '&::before, &::after': {
      width: 10,
      height: 10,
    },
  },
}));
