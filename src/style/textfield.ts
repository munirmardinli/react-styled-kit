/**
 * @file Styled form input components
 * @module style/textfield
 * @description Customized form input components including text fields, date pickers,
 * and demo containers with consistent styling and theme integration.
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @version 1.0.0
 */
import { TextField } from '@mui/material';
import { alpha, styled, SxProps, Theme } from '@mui/material/styles';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import type {} from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers-pro';

/**
 * Styled text field component
 * @component StyledTextField
 * @description A customized text input field with:
 * - Error state styling
 * - Required field indication
 * - Theme-aware colors and typography
 * - Consistent hover and focus states
 *
 * @param {Object} props - Component props
 * @param {boolean} [props.error] - Whether the field is in error state
 * @param {boolean} [props.required] - Whether the field is required
 * @param {Theme} props.theme - Material-UI theme object
 *
 * @example
 * <StyledTextField
 *   label="Email"
 *   required
 *   error={!!errors.email}
 *   helperText={errors.email?.message}
 * />
 */
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
			borderBottom: `2px solid ${error ? theme.palette.error.main : theme.palette.primary.main
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

/**
 * Styled date/time picker component
 * @component StyledDateInput
 * @description A customized date picker with:
 * - Clean borderless design
 * - Theme-aware calendar styling
 * - Custom scrollbar styling
 * - Focus state management
 *
 * @param {Object} props - React props
 * @param {Theme} props.theme - Material-UI theme object
 *
 * @example
 * <StyledDateInput
 *   label="Appointment Date"
 *   value={date}
 *   onChange={handleDateChange}
 * />
 */
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

/**
 * Styled demo container component
 * @component StyledDemoContainer
 * @description A container for form demos with:
 * - Consistent padding and spacing
 * - Theme-aware background
 * - Subtle shadow effect
 *
 * @param {Object} props - React props
 * @param {Theme} props.theme - Material-UI theme object
 *
 * @example
 * <StyledDemoContainer>
 *   <StyledDateInput label="Demo Date" />
 *   <StyledTextField label="Demo Field" />
 * </StyledDemoContainer>
 */
export const StyledDemoContainer = styled(DemoContainer as React.ComponentType<{
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}>)(
  ({ theme }) => ({
    padding: '16px',
    backgroundColor: theme.palette.background.default,
    borderRadius: '8px',
    boxShadow: theme.shadows[1],
    maxWidth: '100%',
    width: '100%',
  })
);
