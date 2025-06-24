/**
 * @file Styled drawer navigation components
 * @module style/drawer
 * @description Customized Material-UI drawer components with responsive behavior,
 * theme-aware styling, and navigation features. Includes drawer, app bar, menu items,
 * and related components.
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @version 1.0.0
 */
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

/**
 * Width of the drawer when fully opened
 * @constant {number} drawerWidth
 * @default 240
 */
export const drawerWidth = 240;

/**
 * Mixin for opened drawer state styles
 * @function openedMixin
 * @param {Theme} theme - Material-UI theme object
 * @returns {CSSObject} Style object for opened drawer
 */
export const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

/**
 * Mixin for closed drawer state styles
 * @function closedMixin
 * @param {Theme} theme - Material-UI theme object
 * @returns {CSSObject} Style object for closed drawer
 */
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

/**
 * Styled drawer header component
 * @component DrawerHeader
 * @description The header section of the drawer with proper alignment and spacing
 * @param {Object} props - React props
 * @param {Theme} props.theme - Material-UI theme object
 */
export const DrawerHeader = styled('div')(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  fontSize: '20px',
  textAlign: 'left',
}));

/**
 * Styled app bar component
 * @component AppBar
 * @description Customized app bar that responds to drawer state
 * @typedef {React.ComponentType} AppBar
 * @property {boolean} open - Whether the drawer is open
 */
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

/**
 * Styled drawer component
 * @component Drawer
 * @description Responsive drawer that toggles between open and closed states
 * @typedef {React.ComponentType} Drawer
 * @property {boolean} open - Whether the drawer is open
 */
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

/**
 * Styled list item text component
 * @component StyledListItemText
 * @description Customized text for navigation items with path-based highlighting
 * @typedef {React.ComponentType} StyledListItemText
 * @property {boolean} open - Whether the drawer is open
 * @property {string} pathname - Current route path
 * @property {string} path - Item's target path
 */
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

/**
 * Styled list item icon component
 * @component StyledListItemIcon
 * @description Customized icon for navigation items with path-based coloring
 * @typedef {React.ComponentType} StyledListItemIcon
 * @property {boolean} open - Whether the drawer is open
 * @property {string} pathname - Current route path
 * @property {string} path - Item's target path
 */
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

/**
 * Styled list item button component
 * @component StyledListItemButton
 * @description Interactive button for navigation items with path-based highlighting
 * @typedef {React.ComponentType} StyledListItemButton
 * @property {boolean} open - Whether the drawer is open
 * @property {string} pathname - Current route path
 * @property {string} path - Item's target path
 */
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

/**
 * Styled menu item component
 * @component StyledMenuItem
 * @description Customized menu item with language selection support
 * @typedef {React.ComponentType} StyledMenuItem
 * @property {string} path - Item's target path
 * @property {string} [languageSelected] - Currently selected language
 */
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

/**
 * Application logo component
 * @component Logo
 * @description Responsive application logo with hover effects
 * @typedef {React.ComponentType} Logo
 * @extends ImageProps
 */
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

/**
 * Styled menu icon component
 * @component StyledMenuIcon
 * @description Customized menu toggle icon with hover effects
 */
export const StyledMenuIcon = styled(MenuIcon)(({ theme }) => ({
  'color': theme.palette.primary.dark,
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));
