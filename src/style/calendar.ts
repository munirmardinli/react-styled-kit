/**
 * @file Styled calendar components
 * @module style/calendar
 * @description Customized React Big Calendar components with enhanced styling, drag-and-drop functionality,
 * and responsive design. Includes both the main calendar and overlay components.
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @version 1.0.0
 */
import type { Theme } from '@mui/material/styles';
import { alpha, styled } from '@mui/material/styles';
import type { CSSProperties } from '@mui/material/styles/createMixins';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import './calendar.css';

import { pxToRem } from './pxToRem';

/**
 * Drag-and-drop enabled calendar component
 * @constant DnDCalendar
 * @description The base calendar component enhanced with drag-and-drop functionality
 */
const DnDCalendar = withDragAndDrop(Calendar) as React.ComponentType<any>;

/**
 * Responsive text styles for calendar components
 * @function responsiveTextStyles
 * @param {Theme} theme - Material-UI theme object
 * @returns {Record<string, CSSProperties | string | number>} Responsive style object
 * @description Provides consistent responsive typography across different screen sizes
 * with smooth animations and proper text wrapping behavior.
 */
const responsiveTextStyles = (
  theme: Theme,
): Record<string, CSSProperties | string | number> => ({
  '@keyframes slideIn': {
    '0%': {
      transform: 'translateX(-100%)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateX(0)',
      opacity: 1,
    },
  },
  'fontSize': theme.typography.fontSize,
  'whiteSpace': 'normal',
  'overflowWrap': 'break-word',
  'wordWrap': 'break-word',
  [theme.breakpoints.down('lg')]: {
    fontSize: pxToRem(16),
  },
  [theme.breakpoints.down('md')]: {
    fontSize: pxToRem(14),
    whiteSpace: 'normal',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
  },
  [theme.breakpoints.down('sm')]: {
    marginButton: theme.spacing(1),
    fontSize: pxToRem(12),
    whiteSpace: 'normal',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
    height: '700px',
  },
  [theme.breakpoints.down('xs')]: {
    height: '700px',
    fontSize: '1.6em',
    whiteSpace: 'normal',
    overflowWrap: 'break-word',
    wordWrap: 'break-word',
  },
});

/**
 * Styled drag-and-drop calendar component
 * @component StyledCalendar
 * @description A fully customized calendar component with:
 * - Responsive design for all screen sizes
 * - Smooth transitions and animations
 * - Custom toolbars and headers
 * - Theme-aware color schemes
 * - Enhanced event styling
 * @param {Object} props - React Big Calendar props
 * @param {Theme} props.theme - Material-UI theme object
 * @example
 * <StyledCalendar
 *   events={events}
 *   defaultView="week"
 *   onSelectEvent={handleEventSelect}
 * />
 */
export const StyledCalendar = styled(DnDCalendar)(({ theme }) => ({
  'border': `1px solid ${theme.palette.divider}`,
  'color': '#fff',
  'padding': '24px',
  'boxShadow': '0 6px 20px rgba(0, 0, 0, 0.15)',
  'display': 'flex',
  'flexDirection': 'column',
  'alignItems': 'center',
  'pointerEvents': 'inherit',
  'justifyContent': 'center',
  'textOverflow': 'ellipsis',
  'overflow': 'hidden',
  'textDecoration': 'none',
  'typography': theme.typography.h1,
  'transition': theme.transitions.create(['transform', 'box-shadow'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.standard,
  }),
  'borderRadius': '16px',
  'background': `linear-gradient(to right, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 50%)`,
  'backgroundSize': '200% 100%',
  [theme.breakpoints.down('md')]: {
    padding: '16px',
    fontSize: pxToRem(14),
  },

  [theme.breakpoints.down('sm')]: {
    padding: '12px',
    fontSize: pxToRem(12),
  },
  '&.filtering .rbc-time-view, &.filtering .rbc-month-view': {
    opacity: 0.5,
  },
  '& .rbc-toolbar': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 28px',
    backgroundColor: theme.palette.background.paper,
    borderBottom: `1px solid ${theme.palette.text.primary}`,
    borderRadius: '16px',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    flexWrap: 'wrap',
    ...responsiveTextStyles(theme),
    gap: theme.spacing(1),
  },
  '& .rbc-btn-group': {
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    gap: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      fontSize: pxToRem(14),
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: pxToRem(12),
    },
  },
  '& .css-jfdv4h-MuiStack-root>:not(style):not(style)': {
    borderRadius: '16px',
  },
  '& .rbc-calendar': {
    overflow: 'hidden',
    typography: theme.typography.h1,
    ...responsiveTextStyles(theme),
  },
  '& .rbc-toolbar button': {
    'backgroundColor': theme.palette.primary.main,
    'color': '#fff',
    'border': 'none',
    'padding': '10px 16px',
    'fontSize': pxToRem(14),
    'borderRadius': '12px',
    'cursor': 'pointer',
    'fontWeight': theme.typography.fontWeightBold,
    'transition': 'background-color 0.3s, transform 0.2s',
    [theme.breakpoints.down('sm')]: {
      padding: '8px 12px',
      fontSize: pxToRem(12),
    },
    '.rbc-toolbar button:activ': {
      backgroundColor: theme.palette.secondary.main,
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.contrastText,
      transform: 'scale(1.05)',
    },

    '&:active': {
      backgroundColor: theme.palette.primary.dark,
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    },

    '&:focus': {
      outline: `2px solid ${theme.palette.primary.light}`,
    },

    '&.rbc-active': {
      backgroundColor: theme.palette.secondary.main,
      color: '#fff',
    },

    '&.rbc-active:hover': {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.primary.main,
    },

    '&.rbc-active:focus': {
      outline: `2px solid ${theme.palette.primary.light}`,
    },
    ...responsiveTextStyles(theme),
  },

  '& .rbc-toolbar-label': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    flexWrap: 'wrap',
    textDecoration: 'none',
    fontSize: '1.5em',
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.text.primary,
    textTransform: 'uppercase',
  },

  '& .rbc-month-view': {
    'textOverflow': 'ellipsis',
    'backgroundColor': '#fff',
    'border': '1px solid #fff',
    'borderRadius': '16px',
    'overflow': 'hidden',
    ...responsiveTextStyles(theme),

    '& .rbc-day': {
      'border': '1px solid #fff',
      'transition': 'background-color 0.3s',
      'cursor': 'pointer',
      'overflow': 'hidden',
      'height': 'auto',
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
        transform: 'scale(1.02)',
      },
    },
    '.rbc-month-row + .rbc-month-row': {
      borderTop: '1px solid #fff',
    },

    '& .rbc-week': {
      border: '1px solid #fff',
      backgroundColor: theme.palette.primary.main,
      transition: 'background-color 0.3s',
      cursor: 'pointer',
      overflow: 'hidden',
    },
  },

  'rbc-time-header rbc-overflowing': {
    margin: 0,
    padding: 0,
  },
  '.rbc-row': {
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexWrap: 'wrap',
    ...responsiveTextStyles(theme),
  },

  '.rbc-off-range-bg': {
    background: '1px solid #fff',
    borderTop: '1px solid #fff',
    color: theme.palette.primary.main,
    ...responsiveTextStyles(theme),
  },

  '.rbc-day-bg + .rbc-day-bg': {
    borderLeft: '1px solid #fff',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.main,
    ...responsiveTextStyles(theme),
  },

  '.rbc-day-bg': {
    'backgroundColor': theme.palette.primary.main,
    'borderLeft': `1px solid ${theme.palette.divider}`,
    'transition': 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: `5px solid ${theme.palette.primary.main}`,
    },
    [theme.breakpoints.down('sm')]: {
      borderLeft: 'none',
    },
    ...responsiveTextStyles(theme),
  },

  '.rbc-calendar *, .rbc-calendar :before, .rbc-calendar :after': {
    color: theme.palette.text.primary,
    ...responsiveTextStyles(theme),
  },

  '.rbc-button-link': {
    'color': '#fff',
    ...responsiveTextStyles(theme),
    '&:active': {
      color: '#000',
    },
  },

  '.rbc-row-bg': {
    right: '0px',
    ...responsiveTextStyles(theme),
  },

  '.rbc-header': {
    fontSize: '1.2rem',
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    ...responsiveTextStyles(theme),
    borderBottom: '1px solid #fff',
  },
  '.rbc-header + .rbc-header ': {
    borderLeft: '1px solid #fff',
    borderBottom: '1px solid #fff',
  },

  '.rbc-ellipsis, .rbc-show-more, .rbc-event-content': {
    color: '#fff',
    height: 'auto',
  },
  '.rbc-row-segment': {
    flex: 1,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    padding: theme.spacing(0.125),
  },

  '.rbc-day-slot .rbc-background-event': {
    'backgroundColor': theme.palette.secondary.main,
    'transition': 'background-color 0.3s ease',
    'height': '100%',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      transform: 'scale(1.05)',
      cursor: 'pointer',
    },

    '&.rbc-selected': {
      backgroundColor: alpha(theme.palette.secondary.main, 0.8),
      color: '#fff',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    },
  },
  '.rbc-time-view': {
    border: `1px solid ${theme.palette.text.primary}`,
    borderColor: '#eee',
  },
  '.rbc-time-content > * + * > *': {
    borderLeft: `1px solid ${theme.palette.text.primary}`,
    borderTop: 'none',
  },
  '.rbc-day-slot .rbc-time-slot': {
    borderTop: 'none',
    borderLeft: 'none',
  },
  '.rbc-time-view .rbc-row': {
    minHeight: 'unset',
  },
  '.rbc-timeslot-group': {
    borderBottom: `1px solid ${theme.palette.text.primary}`,
  },
  '.rbc-time-header.rbc-overflowing': {
    borderRight: `1px solid ${theme.palette.text.primary}`,
  },
  '.rbc-label': {
    padding: '0 7px',
  },
  '.rbc-time-header-content': {
    borderLeft: `1px solid ${theme.palette.text.primary}`,
  },
  '& .rbc-time-content': {
    borderTop: 'none',
  },
  '& .rbc-header rbc-today': {
    color: 'red',
  },
  '.rbc-today': {
    'background': theme.palette.background.paper,
    '& .rbc-button-link': {
      color: theme.palette.mode === 'dark' ? '#fff' : '#000',
    },
  },
  '.rbc-agenda-view table.rbc-agenda-table thead > tr > th': {
    border: `1px solid ${theme.palette.text.primary}`,
  },
  '.rbc-agenda-view table.rbc-agenda-table tbody > tr > td': {
    borderLeft: `1px solid ${theme.palette.text.primary}`,
    borderRight: `1px solid ${theme.palette.text.primary}`,
    borderBottom: `1px solid ${theme.palette.text.primary}`,
  },
  '.rbc-agenda-view table.rbc-agenda-table': {
    border: 'none',
  },
}));

/**
 * Calendar overlay component
 * @component RBCOverlay
 * @description A styled overlay component for calendar events with:
 * - Absolute positioning
 * - Theme-aware colors
 * - Custom shadow effects
 * - Responsive typography
 * @param {Object} props - React props
 * @param {Theme} props.theme - Material-UI theme object
 * @example
 * <RBCOverlay>
 *   <div className="rbc-overlay-header">Event Details</div>
 *   <div className="rbc-event-content">Meeting with Team</div>
 * </RBCOverlay>
 */
export const RBCOverlay = styled('div')(({ theme }) => ({
  'position': 'absolute',
  'zIndex': 1,
  'border': `1px solid ${theme.palette.text.primary}`,
  'backgroundColor': theme.palette.primary.main,
  'boxShadow': '0 5px 15px #fff',
  'padding': '10px',

  '& > * + *': {
    marginTop: '1px',
  },

  '& .rbc-overlay-header': {
    borderBottom: `1px solid ${theme.palette.text.primary}`,
    margin: '-10px -10px 5px',
    padding: '2px 10px',
  },
  '& .rbc-event-label': {
    color: 'gray',
    marginBottom: '5px',
  },
  '& .rbc-event': {
    border: 'none',
    color: 'black',
    padding: '10px',
    margin: '10px',
    width: '99%',
  },
  '& .rbc-day-slot': {
    fontSize: pxToRem(14),
  },
  '& .rbc-time-gutter.rbc-time-column': {
    'fontSize': pxToRem(12),
    '& .rbc-timeslot-group': {
      padding: '0 20px',
    },
  },
}));
