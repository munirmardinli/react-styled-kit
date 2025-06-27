/**
 * @file Style package for React components
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @module style
 * @description This package provides styled components and utility functions for a React application.
 * It includes styled versions of Material-UI components, custom components, and helper functions.
 * @version 1.0.0
 * @exports StyledButton, StyledCloseIcon, StyledCalendar, RBCOverlay, drawerWidth, openedMixin,
 * closedMixin, DrawerHeader, AppBar, Drawer, StyledListItemText, StyledListItemIcon,
 * StyledListItemButton, StyledMenuItem, Logo, StyledMenuIcon, StyledScrollToTopFab,
 * StyledKeyboardArrowUp, StyledDataGrid, StyledGridOverlay, Search, SearchIconWrapper,
 * StyledInputBase, SearchSelect, StyledSnackbar, StyledSnackbarAlert, StyledSwitchMode,
 * StyledDateInput, StyledTextField, StyledDemoContainer, StyledTooltip, StyledTypography,
 * StyledTypographyCaption, StyledTypographySubcaption, TypographyContainer, pxToRem
 */


/**
 * Utility function to convert pixels to rem units
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @function pxToRem
 * @param {number} value - The pixel value to convert
 * @returns {string} The value in rem units
 * @example
 * const fontSize = pxToRem(16); // returns '1rem'
 */
export { pxToRem } from './style/pxToRem';
/**
 * Styled button component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledButton
 * @description A customized button component with consistent styling
 */
export { StyledButton } from "./style/button"
/**
 * Styled close icon component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledCloseIcon
 * @description A customized close icon with consistent styling
 */
export { StyledCloseIcon } from "./style/button"
/**
 * Styled calendar component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledCalendar
 * @description A customized calendar component with consistent styling
 */
export { StyledCalendar } from "./style/calendar"
/**
 * Overlay component for RBC (React Big Calendar)
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} RBCOverlay
 * @description An overlay component for calendar events
 */
export { RBCOverlay } from "./style/calendar"
/**
 * Width of the drawer component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @constant {number} drawerWidth
 * @description The width of the drawer in pixels when open
 */
export { drawerWidth } from "./style/drawer"
/**
 * Styled app bar component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} AppBar
 * @description A customized app bar with position-aware styling
 */
export { AppBar } from "./style/drawer"
/**
 * Mixin for closed drawer state
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @function closedMixin
 * @param {Object} theme - Material-UI theme object
 * @returns {Object} Style object for closed drawer
 */
export { closedMixin } from "./style/drawer"
/**
 * Styled drawer component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} Drawer
 * @description A customized drawer with responsive behavior
 */
export { Drawer } from "./style/drawer"
/**
 * Styled drawer header component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} DrawerHeader
 * @description The header section of the drawer
 */
export { DrawerHeader } from "./style/drawer"
/**
 * Mixin for opened drawer state
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @function openedMixin
 * @param {Object} theme - Material-UI theme object
 * @returns {Object} Style object for opened drawer
 */
export { openedMixin } from "./style/drawer"
/**
 * Styled list item button component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledListItemButton
 * @description Customized button for list items
 */
export { StyledListItemButton } from "./style/drawer"
/**
 * Styled list item icon component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledListItemIcon
 * @description Customized icon for list items
 */
export { StyledListItemIcon } from "./style/drawer"
/**
 * Styled list item text component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledListItemText
 * @description Customized text for list items
 */
export { StyledListItemText } from "./style/drawer"
/**
 * Styled menu item component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledMenuItem
 * @description Customized menu item with consistent styling
 */
export { StyledMenuItem } from "./style/drawer"
/**
 * Styled menu icon component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledMenuIcon
 * @description Customized menu icon with consistent styling
 */
export { StyledMenuIcon } from "./style/drawer"
/**
 * Application logo component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} Logo
 * @description The application logo with responsive sizing
 */
export { Logo } from "./style/drawer"
/**
 * Styled data grid component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledDataGrid
 * @description Customized data grid with consistent styling
 */
export { StyledDataGrid } from "./style/grid"
/**
 * Styled grid overlay component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledGridOverlay
 * @description Customized overlay for the data grid
 */
export { StyledGridOverlay } from "./style/grid"
/**
 * Styled scroll-to-top FAB component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledScrollToTopFab
 * @description Customized floating action button for scrolling to top
 */
export { StyledScrollToTopFab } from "./style/scrollToTop";
/**
 * Styled keyboard arrow up icon
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledKeyboardArrowUp
 * @description Customized keyboard arrow up icon
 */
export { StykedKeyboardArrowUp } from "./style/scrollToTop";
/**
 * Search select component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} SearchSelect
 * @description Customized select input for search functionality
 */
export { SearchSelect } from "./style/search"
/**
 * Search component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} Search
 * @description Customized search input container
 */
export { Search } from "./style/search"
/**
 * Search icon wrapper component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} SearchIconWrapper
 * @description Wrapper for search icon with proper positioning
 */
export { SearchIconWrapper } from "./style/search"
/**
 * Styled base input component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledInputBase
 * @description Customized base input with consistent styling
 */
export { StyledInputBase } from "./style/search"
/**
 * Styled snackbar component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledSnackbar
 * @description Customized snackbar notification
 */
export { StyledSnackbar } from "./style/snackbar";
/**
 * Styled snackbar alert component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledSnackbarAlert
 * @description Customized alert for snackbar notifications
 */
export { StyledSnackbarAlert } from "./style/snackbar";
/**
 * Styled mode switch component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledSwitchMode
 * @description Customized switch for toggling between light/dark mode
 */
export { StyledSwitchMode } from "./style/switchMode";
/**
 * Styled date input component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledDateInput
 * @description Customized date input field
 */
export { StyledDateInput } from "./style/textfield";
/**
 * Styled demo container component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledDemoContainer
 * @description Container for demo components with consistent styling
 */
export { StyledDemoContainer } from "./style/textfield";
/**
 * Styled text field component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledTextField
 * @description Customized text input field
 */
export { StyledTextField } from "./style/textfield";
/**
 * Styled tooltip component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledTooltip
 * @description Customized tooltip with consistent styling
 */
export { StyledTooltip } from "./style/tooltip";
/**
 * Styled caption typography component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledTypographyCaption
 * @description Caption typography variant with custom styling
 */
export { StyledTypographyCaption } from "./style/typography";
/**
 * Styled typography component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} StyledTypography
 * @description Base typography component with consistent styling
 */
export { StyledTypography } from "./style/typography";
/**
 * Typography container component
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @typedef {React.ComponentType} TypographyContainer
 * @description Container for typography components with proper spacing
 */
export { TypographyContainer } from "./style/typography";
/**
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * Styled subcaption typography component
 * @typedef {React.ComponentType} StyledTypographySubcaption
 * @description Smaller caption typography variant with custom styling
 */
export { StyledTypographySubcaption } from "./style/typography";
