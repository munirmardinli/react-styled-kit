/**
 * @file Module declarations for third-party component types
 * @module types/modules
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @description Type declarations for external modules that don't have their own types
 * @version 1.0.0
 */


/**
 * Type declaration for @mui/x-date-pickers demo container module
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @module @mui/x-date-pickers/internals/demo
 * @description Declaration for the demo container component from Material UI Date Pickers
 * @example
 * import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
 *
 * <DemoContainer>
 *   {/* Date picker components *\/}
 * </DemoContainer>
 */
declare module '@mui/x-date-pickers/internals/demo' {
	/**
 * Demo container component for date pickers
 * @typedef {React.ComponentType<any>} DemoContainer
 * @description A container component used for demonstrating date picker components.
 * Provides consistent styling and layout for date picker examples.
 */
	export const DemoContainer: React.ComponentType<any>;
}

/**
 * Type declaration for react-big-calendar drag and drop module
 * @author Munir Mardinli <munir@mardinli.de>
 * @date 2025-06-20
 * @module @types/react-big-calendar/lib/addons/dragAndDrop
 * @description Declaration for the drag and drop calendar component from React Big Calendar
 * @example
 * import { DnDCalendar } from 'react-big-calendar/lib/addons/dragAndDrop';
 *
 * <DnDCalendar
 *   events={events}
 *   onEventDrop={handleEventDrop}
 *   defaultView="week"
 * />
 */
declare module '@types/react-big-calendar/lib/addons/dragAndDrop' {
	/**
 * Drag and Drop calendar component
 * @typedef {React.ComponentType<any>} DnDCalendar
 * @description An enhanced version of React Big Calendar with drag and drop functionality for events.
 * Supports all standard calendar props plus drag and drop specific handlers.
 */
	export const DnDCalendar: React.ComponentType<any>;
}
