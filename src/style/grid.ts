/**
 * @file Styled DataGrid components
 * @module style/grid
 * @description Customized MUI DataGridPro components with enhanced styling,
 * responsive behavior, and theme-aware color schemes.
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @version 1.0.0
 */
import { alpha, styled, Theme } from "@mui/material/styles";
import { DataGridPro, DataGridProProps } from "@mui/x-data-grid-pro";

/**
 * Styled DataGridPro component
 * @component StyledDataGrid
 * @description A highly customized DataGridPro component with:
 * - Theme-aware color schemes
 * - Responsive design for all screen sizes
 * - Enhanced hover and focus states
 * - Custom header and cell styling
 * - Optimized pagination controls
 * @param {DataGridProProps} props - DataGridPro properties
 * @param {Theme} props.theme - Material-UI theme object
 * @example
 * <StyledDataGrid
 *   rows={data}
 *   columns={columns}
 *   pageSize={10}
 *   checkboxSelection
 * />
 */
export const StyledDataGrid = styled(DataGridPro)<DataGridProProps>(
 ({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  userSelect: "none",
  overflow: "hidden !important",
  cursor: "pointer",
  "& .header-name": {
   backgroundColor: theme.palette.primary.main,
   color: theme.palette.primary.contrastText,
   "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
   },
  },
  "& .MuiDataGrid-row:hover": {
   cursor: "pointer",
   backgroundColor: alpha(theme.palette.primary.main, 0.6),
  },
  "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus": {
   outline: "none",
   border: "none",
   overflow: "hidden !important",
  },
  "& .MuiDataGrid-columnSeparator": {
   cursor: "default",
   visibility: "hidden",
  },
  "& .MuiDataGrid-columnSeparator--sideRight": {
   visibility: "hidden",
   color: "transparent",
  },
  "& .MuiDataGrid-columnSeparator--sideRight:hover": {
   visibility: "hidden",
   color: "transparent",
  },

  "& .MuiDataGrid-pagination": {
   "& .MuiButtonBase-root": {
    color: theme.palette.primary.main,
   },
   "& .MuiButtonBase-root.Mui-disabled": {
    color: alpha(theme.palette.primary.main, 0.5),
   },
  },
  "& .MuiDataGrid-withBorderColor": {
   "& .MuiDataGrid-cell": {
    borderBottom: `1px solid ${theme.palette.divider}`,
    color: theme.palette.text.primary,
   },
   "& .MuiTablePagination-displayedRows": {
    color: theme.palette.text.primary,
    position: "relative",
    "&:hover": {
     color: theme.palette.primary.main,
     cursor: "pointer",
     "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: `linear-gradient(
            to right,
            ${theme.palette.primary.main} 50%,
            ${theme.palette.text.primary} 50%
          )`,
      backgroundSize: "200% 100%",
      backgroundPosition: "100%",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      transition: "background-position 0.5s ease-in-out",
     },
    },
   },
   "& .MuiTablePagination-actions": {
    color: theme.palette.primary.main,

    "& .MuiIconButton-root": {
     color: theme.palette.primary.main,
     background: "none",
     boxShadow: "none",
     "&:hover": {
      color: theme.palette.action.hover,
     },
     "&.Mui-disabled": {
      color: theme.palette.mode === "dark" ? "#ffffff61" : "#00000061",
      userSelect: "none",
      cursor: "not-allowed",
     },
    },
   },
  },
  [theme.breakpoints.down("xs")]: {
   height: "79vh",
   width: "100%",
   display: "flex",
   flexDirection: "column",
   marginBottom: theme.spacing(2),
  },

  [theme.breakpoints.up("sm")]: {
   height: "79vh",
   width: "100%",
   display: "flex",
   flexDirection: "column",
   marginBottom: theme.spacing(7),
  },
  [theme.breakpoints.up("md")]: {
   height: "79vh",
   width: "100%",
   display: "flex",
   flexDirection: "column",
   marginBottom: theme.spacing(8),
  },
  [theme.breakpoints.up("lg")]: {
   height: "79vh",
   width: "100%",
   display: "flex",
   flexDirection: "column",
   marginBottom: theme.spacing(10),
  },
  [theme.breakpoints.down(590)]: {
   "& .MuiDataGrid-root": {
    fontSize: theme.typography.h6.fontSize,
   },
   "& .MuiDataGrid-cell": {
    padding: theme.spacing(0),
   },
   height: "79vh",
   width: "100%",
   display: "flex",
   flexDirection: "column",
   marginBottom: theme.spacing(2),
   paddingLeft: 0,
  },
 }),
);

/**
 * Styled grid overlay component
 * @component StyledGridOverlay
 * @description Custom overlay for DataGrid states (loading, error, empty)
 * @param {Object} props - React props
 * @param {Theme} props.theme - Material-UI theme object
 * @example
 * <StyledGridOverlay>
 *   <CircularProgress />
 *   <Typography>Loading data...</Typography>
 * </StyledGridOverlay>
 */
export const StyledGridOverlay = styled("div")(
 ({ theme }: { theme: Theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.h1.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  typography: theme.typography.pxToRem(20),
  height: "100%",
  backgroundColor:
   theme.palette.mode === "light"
    ? "rgba(255, 255, 255, 0.9)"
    : "rgba(18, 18, 18, 0.9)",
 }),
);
