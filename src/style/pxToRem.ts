/**
 * @file Utility function for pixel to rem conversion
 * @module style/pxToRem
 * @description Converts pixel values to rem units for responsive typography and layout
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @version 1.0.0
 */

/**
 * Converts pixel values to rem units
 * @function pxToRem
 * @description Utility function that converts pixel values to rem units based on a base font size.
 * This ensures consistent scaling across different browser font size settings and devices.
 *
 * @param {number} px - The pixel value to convert
 * @param {number} [baseFontSize=16] - Base font size (in pixels) for calculation. Defaults to 16px (browser default).
 * @returns {string} The converted value in rem units
 *
 * @example
 * // Basic usage with default base font size (16px)
 * const spacing = pxToRem(32); // returns "2rem"
 *
 * @example
 * // With custom base font size
 * const fontSize = pxToRem(18, 18); // returns "1rem"
 *
 * @example
 * // Usage in styled components
 * const StyledComponent = styled('div')(({ theme }) => ({
 *   padding: pxToRem(16),
 *   fontSize: pxToRem(14),
 * }));
 */
export const pxToRem = (px: number, baseFontSize: number = 16): string => {
 return `${px / baseFontSize}rem`;
};
