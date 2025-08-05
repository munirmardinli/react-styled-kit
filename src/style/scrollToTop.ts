/**
 * @file Scroll-to-top components
 * @module style/scrollToTop
 * @description Customized floating action button and icon for scroll-to-top functionality
 * with smooth animations and responsive behavior.
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @version 1.0.0
 */
import { KeyboardArrowUp } from "@mui/icons-material";
import type { FabProps, IconProps } from "@mui/material";
import { Fab } from "@mui/material";
import { styled, Theme } from "@mui/material/styles";

/**
 * Styled scroll-to-top floating action button
 * @component StyledScrollToTopFab
 * @description A customized FAB (Floating Action Button) for scrolling to the top of the page.
 * Features include:
 * - Fixed positioning at bottom-right
 * - Smooth hover and focus animations
 * - Responsive sizing
 * - Theme-aware styling
 *
 * @param {FabProps} props - Material-UI Fab props
 * @param {Theme} props.theme - Material-UI theme object
 *
 * @example
 * <StyledScrollToTopFab
 *   onClick={scrollToTop}
 *   aria-label="scroll back to top"
 * >
 *   <StykedKeyboardArrowUp />
 * </StyledScrollToTopFab>
 */
export const StyledScrollToTopFab = styled(Fab)<FabProps>(
 ({ theme }: { theme: Theme }) => ({
  position: "fixed",
  color: "white",
  backgroundColor: "white",
  borderColor: theme.palette.divider,
  bottom: 16,
  right: 16,
  zIndex: 1000,
  borderRadius: "50%",
  padding: 0,
  transition: "all 0.3s ease",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  "&:hover": {
   backgroundColor: "white",
   transform: "scale(1.1) rotate(10deg)",
   boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
  },
  "&:focus": {
   outline: "none",
   boxShadow: `0 0 0 3px ${theme.palette.primary.main}`,
  },
  [theme.breakpoints.down("md")]: {
   width: "2.2rem",
   height: "2.2rem",
   Opacity: "0.6",
   fontSize: "1rem",
   opacity: 0.8,
  },
  [theme.breakpoints.up("md")]: {
   width: "4rem",
   height: "4rem",
   fontSize: "1.5rem",
  },
 }),
);

/**
 * Styled keyboard arrow-up icon
 * @component StykedKeyboardArrowUp
 * @description A customized arrow-up icon with:
 * - Smooth hover animations
 * - Decorative pseudo-elements
 * - Color transitions
 * - Inherited sizing
 *
 * @param {IconProps} props - Material-UI Icon props
 *
 * @example
 * <StykedKeyboardArrowUp
 *   fontSize="large"
 *   color="inherit"
 * />
 */
export const StykedKeyboardArrowUp = styled(KeyboardArrowUp)<IconProps>(() => ({
 fontSize: "inherit",
 transition: "all 0.3s ease",
 color: "#00854C",
 position: "relative",
 "&::before": {
  content: '""',
  position: "absolute",
  top: 0,
  left: 0,
  width: "10px",
  height: "10px",
  color: "white",
  borderRadius: "50%",
  transition: "all 0.3s ease",
 },
 "&::after": {
  content: '""',
  position: "absolute",
  bottom: 0,
  right: 0,
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  transition: "all 0.3s ease",
  color: "#00854C",
 },
 "&:hover": {
  transform: "scale(1.1)",
  color: "#00854C",
  "&::before, &::after": {
   width: 10,
   height: 10,
  },
 },
}));
