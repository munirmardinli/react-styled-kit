/**
 * @file Styled snackbar notification components
 * @module style/snackbar
 * @description Customized Material-UI snackbar and alert components with enhanced styling,
 * theme-aware colors, and interactive effects for notification systems.
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @version 1.0.0
 */
import { Alert, AlertProps, Snackbar, SnackbarProps } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

/**
 * Styled snackbar component
 * @component StyledSnackbar
 * @description A customized snackbar container with:
 * - Theme-aware positioning and spacing
 * - Smooth hover animations
 * - Responsive shadow effects
 * - Consistent z-index layering
 *
 * @param {SnackbarProps} props - Material-UI Snackbar props
 * @param {Theme} props.theme - Material-UI theme object
 *
 * @example
 * <StyledSnackbar
 *   open={open}
 *   autoHideDuration={6000}
 *   onClose={handleClose}
 *   anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
 * >
 *   <StyledSnackbarAlert severity="success">
 *     Action completed successfully!
 *   </StyledSnackbarAlert>
 * </StyledSnackbar>
 */
export const StyledSnackbar = styled(Snackbar)<SnackbarProps>(
 ({ theme }: { theme: Theme }) => ({
  "& .MuiSnackbar-root": {
   zIndex: theme.zIndex.snackbar,
   borderRadius: theme.shape.borderRadius,
   boxShadow: theme.shadows[3],
   backgroundColor: theme.palette.background.default,
   color: theme.palette.text.primary,
   transition: "all 0.3s ease",
   "&:hover": {
    boxShadow: theme.shadows[6],
    transform: "scale(1.05)",
   },
  },
  "& .MuiSnackbar-anchorOriginBottomCenter": {
   bottom: theme.spacing(2),
  },
  "& .MuiSnackbar-anchorOriginBottomLeft": {
   bottom: theme.spacing(2),
   left: theme.spacing(2),
  },
  "& .MuiSnackbar-anchorOriginBottomRight": {
   bottom: theme.spacing(2),
   right: theme.spacing(2),
  },
  "& .MuiSnackbar-anchorOriginTopCenter": {
   top: theme.spacing(2),
  },
  "& .MuiSnackbar-anchorOriginTopLeft": {
   top: theme.spacing(2),
   left: theme.spacing(2),
  },
  "& .MuiSnackbar-anchorOriginTopRight": {
   top: theme.spacing(2),
   right: theme.spacing(2),
  },
 }),
);

/**
 * Styled snackbar alert component
 * @component StyledSnackbarAlert
 * @description A customized alert component for snackbars with:
 * - Complete variant styling (standard, filled, outlined)
 * - Severity-based color schemes (error, warning, info, success)
 * - Interactive hover effects
 * - Consistent typography and spacing
 *
 * @param {AlertProps} props - Material-UI Alert props
 * @param {Theme} props.theme - Material-UI theme object
 *
 * @example
 * <StyledSnackbarAlert severity="error" variant="filled">
 *   Error: Action failed to complete!
 * </StyledSnackbarAlert>
 */
export const StyledSnackbarAlert = styled(Alert)<AlertProps>(
 ({ theme }: { theme: Theme }) => ({
  "& .MuiAlert-root": {
   borderRadius: theme.shape.borderRadius,
   padding: theme.spacing(1.5, 2),
   fontSize: theme.typography.pxToRem(14),
   boxShadow: theme.shadows[3],
   transition: "all 0.3s ease",
   "&:hover": {
    boxShadow: theme.shadows[6],
    transform: "scale(1.05)",
   },
  },
  "& .MuiAlert-action": {
   marginLeft: theme.spacing(1),
  },
  "& .MuiAlert-colorError": {
   backgroundColor: theme.palette.error.main,
   color: theme.palette.error.contrastText,
  },
  "& .MuiAlert-colorInfo": {
   backgroundColor: theme.palette.info.main,
   color: theme.palette.info.contrastText,
  },
  "& .MuiAlert-colorSuccess": {
   backgroundColor: theme.palette.success.main,
   color: theme.palette.success.contrastText,
  },
  "& .MuiAlert-colorWarning": {
   backgroundColor: theme.palette.warning.main,
   color: theme.palette.warning.contrastText,
  },
  "& .MuiAlert-filled": {
   border: `1px solid ${theme.palette.divider}`,
  },
  "& .MuiAlert-filledError": {
   backgroundColor: theme.palette.error.dark,
  },
  "& .MuiAlert-filledInfo": {
   backgroundColor: theme.palette.info.dark,
  },
  "& .MuiAlert-filledSuccess": {
   backgroundColor: theme.palette.success.dark,
  },
  "& .MuiAlert-filledWarning": {
   backgroundColor: theme.palette.warning.dark,
  },
  "& .MuiAlert-outlined": {
   border: `1px solid ${theme.palette.grey[300]}`,
   backgroundColor: theme.palette.background.paper,
  },
  "& .MuiAlert-outlinedError": {
   borderColor: theme.palette.error.main,
  },
  "& .MuiAlert-outlinedInfo": {
   borderColor: theme.palette.info.main,
  },
  "& .MuiAlert-outlinedSuccess": {
   borderColor: theme.palette.success.main,
  },
  "& .MuiAlert-outlinedWarning": {
   borderColor: theme.palette.warning.main,
  },
  "& .MuiAlert-standard": {
   backgroundColor: theme.palette.background.default,
   color: theme.palette.text.primary,
  },
  "& .MuiAlert-standardError": {
   backgroundColor: theme.palette.error.light,
  },
  "& .MuiAlert-standardInfo": {
   backgroundColor: theme.palette.info.light,
  },
  "& .MuiAlert-standardSuccess": {
   backgroundColor: theme.palette.success.light,
  },
  "& .MuiAlert-standardWarning": {
   backgroundColor: theme.palette.warning.light,
  },
  "& .MuiAlert-icon": {
   marginRight: theme.spacing(1),
  },
  "& .MuiAlert-message": {
   display: "flex",
   alignItems: "center",
  },
 }),
);
