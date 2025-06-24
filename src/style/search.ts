/**
 * @file Search components
 * @module style/search
 * @description Customized search input components with responsive behavior,
 * theme-aware styling, and enhanced interactive states.
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @version 1.0.0
 */
import { InputBase, Select, SelectProps } from '@mui/material';
import { styled, alpha, Theme } from '@mui/material/styles';

/**
 * Search container component
 * @component Search
 * @description Wrapper component for search elements with:
 * - Responsive width behavior
 * - Theme-aware background colors
 * - Smooth hover transitions
 * @param {Object} props - React props
 * @param {Theme} props.theme - Material-UI theme object
 * @example
 * <Search>
 *   <SearchIconWrapper>
 *     <SearchIcon />
 *   </SearchIconWrapper>
 *   <StyledInputBase placeholder="Search..." />
 * </Search>
 */
export const Search = styled('div')(({ theme }: { theme: Theme }) => ({
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

/**
 * Search icon wrapper component
 * @component SearchIconWrapper
 * @description Container for search icon with:
 * - Absolute positioning
 * - Proper alignment
 * - Non-interactive overlay (pointerEvents: none)
 * @param {Object} props - React props
 * @param {Theme} props.theme - Material-UI theme object
 * @example
 * <SearchIconWrapper>
 *   <SearchIcon />
 * </SearchIconWrapper>
 */
export const SearchIconWrapper = styled('div')(({ theme }: { theme: Theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

/**
 * Styled input base component
 * @component StyledInputBase
 * @description Customized input field with:
 * - Icon padding adjustment
 * - Responsive width transitions
 * - Theme-aware text color
 * @param {Object} props - React props
 * @param {Theme} props.theme - Material-UI theme object
 * @example
 * <StyledInputBase
 *   placeholder="Search..."
 *   inputProps={{ 'aria-label': 'search' }}
 * />
 */
export const StyledInputBase = styled(InputBase)(({ theme }: { theme: Theme }) => ({
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

/**
 * Search select component
 * @component SearchSelect
 * @description Customized select input for search filters with:
 * - Transparent background
 * - Borderless design
 * - Responsive width
 * - Focus state cleanup
 * @param {SelectProps} props - Material-UI Select props
 * @param {Theme} props.theme - Material-UI theme object
 * @example
 * <SearchSelect
 *   value={filter}
 *   onChange={handleFilterChange}
 *   inputProps={{ 'aria-label': 'search filter' }}
 * >
 *   <MenuItem value="all">All</MenuItem>
 *   <MenuItem value="recent">Recent</MenuItem>
 * </SearchSelect>
 */
export const SearchSelect = styled(Select)<SelectProps>(({ theme }: { theme: Theme }) => ({
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
