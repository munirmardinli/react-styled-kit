/* eslint-disable security/detect-object-injection */
/**
 * @file Styled typography components
 * @module style/typography
 * @description Customized typography components with responsive behavior,
 * theme-aware styling, and interactive effects for text elements.
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @version 1.0.0
 */
import type { TypographyProps } from "@mui/material";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { pxToRem } from "./pxToRem";

/**
 * Base styled typography component
 * @component StyledTypography
 * @description A versatile typography component with:
 * - Level-based heading styles (h1-h6)
 * - Text truncation with ellipsis
 * - Theme-aware colors
 * - Responsive text sizing
 * - Interactive hover state
 *
 * @param {Object} props - Component props
 * @param {'h1'|'h2'|'h3'|'h4'|'h5'|'h6'} [props.level='h3'] - Heading level style
 * @param {Theme} props.theme - Material-UI theme object
 *
 * @example
 * <StyledTypography level="h1" variant="h1">
 *   Main Heading
 * </StyledTypography>
 */
export const StyledTypography = styled(Typography)<
 TypographyProps & { level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" }
>(({ theme, level = "h3" }) => ({
 ...theme.typography[level],
 overflow: "hidden",
 textOverflow: "ellipsis",
 maxWidth: "100%",
 color: theme.palette.text.primary,
 marginTop: theme.spacing(2),
 textDecoration: "none",
 "&:hover": {
  cursor: "pointer",
 },
 [theme.breakpoints.down("sm")]: {
  fontSize: pxToRem(12),
  whiteSpace: "normal",
  overflowWrap: "break-word",
  wordWrap: "break-word",
 },
}));

/**
 * Styled caption typography component
 * @component StyledTypographyCaption
 * @description A prominent caption with:
 * - Gradient text effect
 * - Color variants (primary/white)
 * - Bold weight
 * - Center alignment
 * - Responsive text wrapping
 *
 * @param {Object} props - Component props
 * @param {'h1'|'h2'|'h3'|'h4'|'h5'|'h6'} [props.level='h3'] - Heading level style
 * @param {'primary'|'white'} [props.color='white'] - Text color variant
 * @param {Theme} props.theme - Material-UI theme object
 *
 * @example
 * <StyledTypographyCaption color="primary">
 *   Featured Content
 * </StyledTypographyCaption>
 */
export const StyledTypographyCaption = styled(Typography, {
 shouldForwardProp: (prop) => prop !== "color",
})<
 TypographyProps & {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "primary" | "white";
 }
>(({ theme, level = "h3", color = "white" }) => ({
 typography: theme.typography[level],
 fontWeight: theme.typography.fontWeightBold,
 textAlign: "center",
 textOverflow: "ellipsis",
 maxWidth: "100%",
 color:
  color === "primary" ? theme.palette.primary.main : theme.palette.common.white,
 marginTop: theme.spacing(2),
 textDecoration: "none",
 position: "relative",
 overflow: "hidden",
 whiteSpace: "normal",
 overflowWrap: "break-word",
 wordWrap: "break-word",
 background: `linear-gradient(
    to right,
    ${theme.palette.primary.main} 50%,
    ${
     color === "primary"
      ? theme.palette.text.primary
      : theme.palette.text.primary
    } 50%
  )`,
 backgroundSize: "200% 100%",
 backgroundPosition: "100%",
 WebkitBackgroundClip: "text",
 WebkitTextFillColor: "transparent",
 transition: "background-position 0.5s ease",
 "&:hover": {
  cursor: "pointer",
  backgroundPosition: "0%",
 },
 [theme.breakpoints.down("md")]: {
  fontSize: pxToRem(24),
  whiteSpace: "normal",
  overflowWrap: "break-word",
  wordWrap: "break-word",
 },
 [theme.breakpoints.down("sm")]: {
  fontSize: pxToRem(24),
  whiteSpace: "normal",
  overflowWrap: "break-word",
  wordWrap: "break-word",
 },
 [theme.breakpoints.down("xs")]: {
  fontSize: pxToRem(24),
  whiteSpace: "normal",
  overflowWrap: "break-word",
  wordWrap: "break-word",
 },
}));

/**
 * Styled subcaption typography component
 * @component StyledTypographySubcaption
 * @description A secondary caption with:
 * - Custom color options
 * - Responsive sizing
 * - Text truncation
 * - Disabled text styling
 *
 * @param {Object} props - Component props
 * @param {'h1'|'h2'|'h3'|'h4'|'h5'|'h6'} [props.level='h3'] - Heading level style
 * @param {string} [props.color] - Custom text color (defaults to disabled color)
 * @param {Theme} props.theme - Material-UI theme object
 *
 * @example
 * <StyledTypographySubcaption color="primary">
 *   Supporting text
 * </StyledTypographySubcaption>
 */
export const StyledTypographySubcaption = styled(Typography)<
 TypographyProps & {
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  color?: "primary" | string;
 }
>(({ theme, level = "h3", color = theme.palette.text.disabled }) => ({
 typography: theme.typography[level],
 overflow: "hidden",
 textOverflow: "ellipsis",
 maxWidth: "100%",
 color:
  color === "primary" ? theme.palette.primary.main : theme.palette.text.primary,
 marginTop: theme.spacing(2),
 textDecoration: "none",
 "&:hover": {
  cursor: "pointer",
 },
 [theme.breakpoints.down("md")]: {
  fontSize: pxToRem(19),
  whiteSpace: "normal",
  overflowWrap: "break-word",
  wordWrap: "break-word",
 },
 [theme.breakpoints.down("sm")]: {
  marginTop: theme.spacing(4),
  fontSize: pxToRem(15),
  whiteSpace: "normal",
  overflowWrap: "break-word",
  wordWrap: "break-word",
 },
 [theme.breakpoints.down("xs")]: {
  fontSize: pxToRem(24),
 },
}));

/**
 * Typography container component
 * @component TypographyContainer
 * @description A layout container for typography components with:
 * - Flex column layout
 * - Center alignment
 * - Consistent text alignment
 *
 * @example
 * <TypographyContainer>
 *   <StyledTypography level="h1">Title</StyledTypography>
 *   <StyledTypographyCaption>Subtitle</StyledTypographyCaption>
 * </TypographyContainer>
 */
export const TypographyContainer = styled("div")(() => ({
 display: "flex",
 flexDirection: "column",
 alignItems: "center",
 textAlign: "center",
}));
