/**
 * @file Styled tooltip component
 * @module style/tooltip
 * @description A customized Material-UI tooltip with enhanced styling,
 * consistent spacing, and theme-aware colors.
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @version 1.0.0
 */
import { Tooltip, TooltipProps } from '@mui/material';
import { styled } from '@mui/material/styles';

/**
 * Styled tooltip component
 * @component StyledTooltip
 * @description A customized tooltip with:
 * - Theme-aware dark background and white text
 * - Consistent spacing and typography
 * - Shadow effects for depth
 * - Proper z-index layering
 * - Responsive touch targets
 * - Arrow styling for all placements
 *
 * @param {TooltipProps} props - Material-UI Tooltip props
 * @param {Theme} props.theme - Material-UI theme object
 *
 * @example
 * <StyledTooltip title="Click to save" placement="top" arrow>
 *   <Button>Save</Button>
 * </StyledTooltip>
 */
export const StyledTooltip = styled(Tooltip)<TooltipProps>(({ theme }) => ({
  '& .MuiTooltip-popper': {
    zIndex: theme.zIndex.tooltip,
  },
  '& .MuiTooltip-tooltip': {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
    fontSize: theme.typography.pxToRem(16),
    padding: theme.spacing(1, 1.5),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  },
  '& .MuiTooltip-arrow': {
    color: theme.palette.grey[900],
  },
  '& .MuiTooltip-popperArrow': {
    margin: theme.spacing(0.5),
  },
  '& .MuiTooltip-tooltipArrow': {
    marginTop: theme.spacing(1),
  },
  '& .MuiTooltip-tooltipPlacementBottom': {
    marginTop: theme.spacing(1),
  },
  '& .MuiTooltip-tooltipPlacementLeft': {
    marginRight: theme.spacing(1),
  },
  '& .MuiTooltip-tooltipPlacementRight': {
    marginLeft: theme.spacing(1),
  },
  '& .MuiTooltip-tooltipPlacementTop': {
    'marginBottom': theme.spacing(1),
    'transform': 'translateY(-8px)',
    '& .MuiTooltip-arrow': {
      top: 0,
    },
  },
  '& .MuiTooltip-touch': {
    fontSize: theme.typography.pxToRem(16),
    padding: theme.spacing(1.5, 2),
  },
}));
