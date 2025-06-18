import { Tooltip, TooltipProps } from '@mui/material';
import { styled } from '@mui/material/styles';

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
