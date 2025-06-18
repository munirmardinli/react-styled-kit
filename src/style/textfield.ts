import { TextField } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DateTimePicker } from '@mui/x-date-pickers-pro';

export const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'error' && prop !== 'required',
})<{ error?: boolean; required?: boolean }>(({ theme, error, required }) => ({
  '& label': {
    color: theme.palette.text.primary,
    display: 'flex',
    alignItems: 'center',
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.h6.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    ...(error && {
      'color': theme.palette.error.main,
      '&::after': {
        color: theme.palette.error.main,
      },
    }),
    ...(required && {
      '&::after': {
        content: '"*"',
        color: theme.palette.error.main,
        left: '100%',
        marginLeft: '4px',
        fontSize: theme.typography.h6.fontSize,
        fontWeight: theme.typography.fontWeightMedium,
      },
    }),
  },

  '& .MuiInputBase-root': {
    'borderColor': error ? theme.palette.error.main : 'inherit',
    'position': 'relative',
    '&::before': {
      borderBottom: `2px solid ${
        error ? theme.palette.error.main : theme.palette.primary.main
      }`,
      transition: 'border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    '&:hover::before': {
      borderBottomColor: alpha(
        error ? theme.palette.error.main : theme.palette.primary.main,
        0.5,
      ),
    },
    '&:hover': {
      borderColor: error
        ? theme.palette.error.main
        : theme.palette.primary.main,
    },
    '&.Mui-focused': {
      borderColor: error
        ? theme.palette.error.main
        : theme.palette.primary.main,
    },
    '& .MuiInputBase-input': {
      'color': error ? theme.palette.error.main : theme.palette.text.primary,
      'fontFamily': theme.typography.fontFamily,
      'fontSize': theme.typography.h6.fontSize,
      'fontWeight': theme.typography.fontWeightRegular,
      '&:focus': {
        color: error ? theme.palette.error.main : theme.palette.text.primary,
      },
    },
  },
  '& .MuiFormHelperText-root': {
    color: error ? theme.palette.error.main : theme.palette.text.secondary,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.caption.fontSize,
    fontWeight: theme.typography.fontWeightRegular,
  },
  '& .MuiInputLabel-root': {
    'fontFamily': theme.typography.fontFamily,
    'fontSize': theme.typography.h6.fontSize,
    'fontWeight': theme.typography.fontWeightMedium,
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
    '&:hover': {
      color: alpha(theme.palette.primary.main, 0.5),
    },
  },
  'marginBottom': '1.3vh',
  'maxWidth': '100%',
  'width': '100%',
}));

export const StyledDateInput = styled(DateTimePicker)(({ theme }) => ({
  '& .MuiInputBase-root': {
    'fontFamily': theme.typography.fontFamily,
    'boxSizing': 'border-box',
    'borderTop': 'none',
    'borderLeft': 'none',
    'borderRight': 'none',
    'marginBottom': '2px',
    'width': '100%',
    'alignItems': 'center',
    'paddingRight': '4px',
    'borderBottom': `2px solid ${theme.palette.primary.main}`,
    'transition': 'border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      borderBottom: `2px solid ${alpha(theme.palette.primary.main, 0.5)}`,
    },
    '&.Mui-focused': {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiInputBase-root::before': {
    borderBottom: 'none !important',
  },
  '& .MuiSvgIcon-root': {
    color: theme.palette.primary.main,
  },
  '& .MuiFormLabel-asterisk': {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.error.main,
    marginLeft: '4px',
  },
  '& .MuiIconButton-root': {
    'backgroundColor': 'transparent',
    '&:active': {
      backgroundColor: 'transparent',
    },
    '&:focus': {
      outline: 'none',
    },
  },
  '& label': {
    color: theme.palette.text.primary,
  },
  '& .MuiDayPicker-Day': {
    backgroundColor: theme.palette.primary.main,
  },
  '& .MuiCalendarPicker-daySelected': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  '& .css-1axguy0-MuiTypography-root-MuiDayCalendar-weekDayLabel': {
    color: `${theme.palette.primary.dark} !important`,
  },
  '& .css-oy0w5c-MuiPaper-root-MuiPickersPopper-paper': {
    color: theme.palette.primary.main,
  },
  '&::-webkit-scrollbar': {
    width: '12px',
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.primary.main,
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '100px',
    border: `100px solid ${theme.palette.primary.main}`,
  },
  '&': {
    scrollbarWidth: 'thin',
    scrollbarColor: `${theme.palette.primary.main} ${theme.palette.primary.main}`,
  },
  'marginBottom': '1.3vh',
  'maxWidth': '100%',
  'width': '100%',
}));

export const StyledDemoContainer = styled(DemoContainer)(({ theme }) => ({  padding: '16px',
  backgroundColor: theme.palette.background.default,
  borderRadius: '8px',
  boxShadow: theme.shadows[1],
  maxWidth: '100%',
  width: '100%',
}));
