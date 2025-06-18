/* eslint-disable security/detect-object-injection */
import type { TypographyProps } from '@mui/material';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { pxToRem } from './pxToRem';

export const StyledTypography = styled(Typography)<
  TypographyProps & { level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' }
>(({ theme, level = 'h3' }) => ({
  ...theme.typography[level],
  'overflow': 'hidden',
  'textOverflow': 'ellipsis',
  'maxWidth': '100%',
  'color': theme.palette.text.primary,
  'marginTop': theme.spacing(2),
  'textDecoration': 'none',
  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: pxToRem(12),
    whiteSpace: 'normal',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
  },
}));

export const StyledTypographyCaption = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'color',
})<
  TypographyProps & {
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    color?: 'primary' | 'white';
  }
>(({ theme, level = 'h3', color = 'white' }) => ({
  'typography': theme.typography[level],
  'fontWeight': theme.typography.fontWeightBold,
  'textAlign': 'center',
  'textOverflow': 'ellipsis',
  'maxWidth': '100%',
  'color':
    color === 'primary'
      ? theme.palette.primary.main
      : theme.palette.common.white,
  'marginTop': theme.spacing(2),
  'textDecoration': 'none',
  'position': 'relative',
  'overflow': 'hidden',
  'whiteSpace': 'normal',
  'overflowWrap': 'break-word',
  'wordWrap': 'break-word',
  'background': `linear-gradient(
    to right,
    ${theme.palette.primary.main} 50%,
    ${
      color === 'primary'
        ? theme.palette.text.primary
        : theme.palette.text.primary
    } 50%
  )`,
  'backgroundSize': '200% 100%',
  'backgroundPosition': '100%',
  'WebkitBackgroundClip': 'text',
  'WebkitTextFillColor': 'transparent',
  'transition': 'background-position 0.5s ease',
  '&:hover': {
    cursor: 'pointer',
    backgroundPosition: '0%',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: pxToRem(24),
    whiteSpace: 'normal',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: pxToRem(24),
    whiteSpace: 'normal',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: pxToRem(24),
    whiteSpace: 'normal',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
  },
}));

export const StyledTypographySubcaption = styled(Typography)<
  TypographyProps & {
    level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    color?: 'primary' | string;
  }
>(({ theme, level = 'h3', color = theme.palette.text.disabled }) => ({
  'typography': theme.typography[level],
  'overflow': 'hidden',
  'textOverflow': 'ellipsis',
  'maxWidth': '100%',
  'color':
    color === 'primary'
      ? theme.palette.primary.main
      : theme.palette.text.primary,
  'marginTop': theme.spacing(2),
  'textDecoration': 'none',
  '&:hover': {
    cursor: 'pointer',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: pxToRem(19),
    whiteSpace: 'normal',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
  },
  [theme.breakpoints.down('sm')]: {
    marginTop: theme.spacing(4),
    fontSize: pxToRem(15),
    whiteSpace: 'normal',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: pxToRem(24),
  },
}));

export const TypographyContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));
