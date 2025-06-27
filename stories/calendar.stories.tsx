'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { StyledCalendar, RBCOverlay } from '../src/style/calendar';

import { dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { de } from 'date-fns/locale/de';

/* -------------------------------------------------------------------------- */
/* 📅 Localizer: Required by react-big-calendar                               */
/* -------------------------------------------------------------------------- */
const locales = { de };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

/* -------------------------------------------------------------------------- */
/* 📘 Storybook Metadata                                                      */
/* -------------------------------------------------------------------------- */
const meta: Meta<typeof StyledCalendar> = {
  title: 'Components/Calendar/StyledCalendar',
  component: StyledCalendar,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### 🗓 StyledCalendar

**A fully customized calendar component** built on top of \`react-big-calendar\`, extended with:

- Responsive layout & scalable typography
- Theme-aware styling (light/dark)
- Smooth transition animations
- Custom toolbar and event styles
- Drag-and-drop support via backend integration

---

### 🌍 Localization

Uses \`date-fns\` with German locale (\`de\`). You must pass a \`localizer\` instance to the calendar to avoid runtime errors. See examples below.

---

### 🧩 RBCOverlay

**Overlay component** for rendering contextual event content (e.g. details, edit forms):

- Absolutely positioned container
- Fully themeable via CSS or Tailwind
- Integrates with \`StyledCalendar\` by placing it within the same container

---

### ✅ Examples

| Story             | Description                                |
|------------------|--------------------------------------------|
| WeekView         | Weekly view with drag-and-drop enabled     |
| MonthView        | Month view with simple event selection     |
| OverlayExample   | Shows an overlay panel on top of calendar  |

---
        `.trim(),
      },
    },
  },
};

export default meta;

/* -------------------------------------------------------------------------- */
/* 📊 Sample Data                                                             */
/* -------------------------------------------------------------------------- */
const sampleEvents = [
  {
    id: 1,
    title: 'Team Meeting',
    start: new Date(2025, 5, 20, 9),
    end: new Date(2025, 5, 20, 10),
  },
  {
    id: 2,
    title: 'Client Lunch',
    start: new Date(2025, 5, 21, 12, 30),
    end: new Date(2025, 5, 21, 13, 30),
  },
];

/* -------------------------------------------------------------------------- */
/* 📘 Week View: Drag-and-Drop Enabled                                        */
/* -------------------------------------------------------------------------- */
export const WeekView: StoryObj<typeof StyledCalendar> = {
  name: 'Week View (Drag & Drop)',
  args: {
    localizer,
    events: sampleEvents,
    defaultView: 'week',
    style: { height: 600 },
    onEventDrop: ({ event }) => alert(`"${event.title}" was moved`),
    onSelectEvent: (e) => alert(`Selected: ${e.title}`),
  },
};

/* -------------------------------------------------------------------------- */
/* 📘 Month View                                                              */
/* -------------------------------------------------------------------------- */
export const MonthView: StoryObj<typeof StyledCalendar> = {
  name: 'Month View',
  args: {
    localizer,
    events: sampleEvents,
    defaultView: 'month',
    style: { height: 500 },
    onSelectEvent: (e) => alert(`Event selected: ${e.title}`),
  },
};

/* -------------------------------------------------------------------------- */
/* 📘 Overlay Demo                                                            */
/* -------------------------------------------------------------------------- */
export const OverlayExample: StoryObj<typeof RBCOverlay> = {
  name: 'RBCOverlay Example',
  render: () => (
    <div style={{ position: 'relative', height: 250, border: '1px solid #ddd', padding: 16 }}>
      <StyledCalendar
        localizer={localizer}
        events={sampleEvents}
        defaultView="week"
        style={{ height: 250 }}
      />
      <RBCOverlay style={{ top: 40, left: 40 }}>
        <div className="rbc-overlay-header">📌 Event Details</div>
        <div className="rbc-event-label">Team Call</div>
        <div className="rbc-event">Agenda: Release Planning</div>
      </RBCOverlay>
    </div>
  ),
};
