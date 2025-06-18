import { Menu as MenuIcon } from '@mui/icons-material';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuItemProps,
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import type { Theme, CSSObject } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Image, { ImageProps } from 'next/image';

export const drawerWidth = 240;

export const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

export const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  fontSize: '20px',
  textAlign: 'left',
}));

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  flexShrink: 2,
  backgroundColor: theme.palette.primary.main,
  justifyContent: 'center',
  boxShadow: 'none',
  borderBottom: '1px solid',
  borderColor: theme.palette.divider,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export const StyledListItemText = styled(ListItemText)<{
  open: boolean;
  pathname: string;
  path: string;
}>(({ theme, open, pathname, path }) => ({
  opacity: open ? 1 : 0,
  typography: theme.typography.h4,
  cursor: 'pointer',
  color:
    pathname === `/${path}/`
      ? theme.palette.common.white
      : theme.palette.text.primary,
}));

export const StyledListItemIcon = styled(ListItemIcon)<{
  open: boolean;
  pathname: string;
  path: string;
}>(({ theme, open, pathname, path }) => ({
  'mr': open ? 3 : 'auto',
  'justifyContent': 'center',
  'cursor': 'pointer',
  'color':
    pathname === `/${path}/`
      ? theme.palette.common.white
      : theme.palette.text.primary,
  '&:hover': {
    color:
      pathname === `/${path}/`
        ? theme.palette.common.white
        : theme.palette.secondary.main,
  },
}));

export const StyledListItemButton = styled(ListItemButton)<{
  open: boolean;
  pathname: string;
  path: string;
}>(({ theme, open, pathname, path }) => ({
  'minHeight': 48,
  'justifyContent': open ? 'initial' : 'center',
  'px': 2.5,
  'cursor': 'pointer',
  'backgroundColor':
    pathname === `/${path}/` ? theme.palette.primary.main : undefined,
  '&:hover': {
    backgroundColor:
      pathname === `/${path}/`
        ? theme.palette.secondary.main
        : theme.palette.action.hover,
  },
}));

export const StyledMenuItem = styled(MenuItem, {
  shouldForwardProp: (prop) => prop !== 'path' && prop !== 'languageSelected',
})<
  MenuItemProps & {
    path: string;
    languageSelected?: string;
  }
>(({ theme, path, languageSelected }) => ({
  'backgroundColor':
    languageSelected === path ? theme.palette.primary.main : 'inherit',
  'color':
    languageSelected === path
      ? theme.palette.common.white
      : theme.palette.text.primary,
  '&:hover': {
    backgroundColor:
      languageSelected === path ? theme.palette.action.hover : 'inherit',
  },
  'fontWeight': theme.typography.fontWeightLight,
  'fontFamily': theme.typography.fontFamily,
  'fontSize': theme.typography.fontSize,
}));

export const Logo = styled(Image)<ImageProps>(({ theme }) => ({
  'maxHeight': '9vh',
  'filter': 'drop-shadow(0 0 2 rgb(1, 34, 81))',
  'maxWidth': '16vh',
  'transition': 'opacity 0.5s ease',
  'border': `1px solid ${theme.palette.primary.main}`,
  'borderRadius': '50%',
  'objectFit': 'cover',
  '&:hover': {
    opacity: 0.5,
    cursor: 'pointer',
    filter: 'drop-shadow(0 0 5 rgb(0, 17, 40))',
  },
  [theme.breakpoints.down('md')]: {
    height: '7vh',
    maxWidth: '25vh',
  },
  [theme.breakpoints.down('lg')]: {
    height: '8vh',
    maxWidth: '25vh',
  },
  [theme.breakpoints.up('sm')]: {
    height: '16vh',
    maxWidth: '25vh',
  },
}));

export const StyledMenuIcon = styled(MenuIcon)(({ theme }) => ({
  'color': theme.palette.primary.dark,
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));
