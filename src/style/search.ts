import { InputBase, Select, SelectProps } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';

export const Search = styled('div')(({ theme }) => ({
  'position': 'relative',
  'display': 'flex',
  'borderRadius': theme.shape.borderRadius,
  'backgroundColor': alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  'marginLeft': 0,
  'width': '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(0),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  'color': 'inherit',
  'marginBottom': 6,
  'width': '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      'width': '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const SearchSelect = styled(Select)<SelectProps>(({ theme }) => ({
  'color': 'inherit',
  'display': 'flex',
  'width': '25%',
  'borderRadius': theme.shape.borderRadius,
  'backgroundColor': 'transparent !important',
  '&::before, &::after': {
    border: 'none !important',
  },
  '&.Mui-focused': {
    backgroundColor: 'transparent !important',
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: 'calc(1em)',
    backgroundColor: 'transparent !important',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
    },
  },
  '&:focus': {
    outline: 'none',
    backgroundColor: 'transparent !important',
  },
  '& .MuiSelect-select:focus': {
    backgroundColor: 'transparent !important',
  },
}));
