'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { StyledDataGrid, StyledGridOverlay } from '../style/grid';
import { CircularProgress, Typography } from '@mui/material';

/* -------------------------------------------------------------------------- */
/* 📘 Storybook Metadata                                                      */
/* -------------------------------------------------------------------------- */
const meta: Meta<typeof StyledDataGrid> = {
	title: 'Components/DataGrid/StyledDataGrid',
  component: StyledDataGrid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### 📊 StyledDataGrid

Enhanced [MUI DataGridPro](https://mui.com/x/react-data-grid/) component with comprehensive styling and responsive behavior.

#### ✅ Features
- Theme-aware color schemes (light/dark mode support)
- Responsive design for all screen sizes
- Custom hover and focus states
- Optimized pagination controls
- Customizable header and cell styling
- Built-in loading/empty state overlays

---

### 🖼️ StyledGridOverlay

Custom overlay component for loading, error, or empty states.

#### ✅ Features
- Centered content display
- Theme-aware background
- Flexible content container

---

### 📦 Example Variants

| Story               | Description                                |
|--------------------|--------------------------------------------|
| BasicGrid          | Default configuration                     |
| LoadingState       | With loading overlay                      |
| EmptyState         | With empty data overlay                   |
| ResponsiveBehavior | Different screen size behaviors           |

---
        `.trim(),
      },
    },
  },
};

export default meta;

/* -------------------------------------------------------------------------- */
/* 📊 Basic DataGrid                                                          */
/* -------------------------------------------------------------------------- */
export const BasicGrid: StoryObj<typeof StyledDataGrid> = {
  name: 'Basic DataGrid',
  args: {
    rows: [
      { id: 1, name: 'John Doe', age: 35, department: 'Engineering' },
      { id: 2, name: 'Jane Smith', age: 28, department: 'Marketing' },
      { id: 3, name: 'Robert Johnson', age: 42, department: 'Sales' },
    ],
    columns: [
      { field: 'name', headerName: 'Name', width: 150 },
      { field: 'age', headerName: 'Age', width: 100 },
      { field: 'department', headerName: 'Department', width: 200 },
    ],
    pageSizeOptions: [5, 10],
    initialState: {
      pagination: {
        paginationModel: { pageSize: 5, page: 0 },
      },
    },
  },
};

/* -------------------------------------------------------------------------- */
/* ⏳ Loading State                                                            */
/* -------------------------------------------------------------------------- */
export const LoadingState: StoryObj<typeof StyledDataGrid> = {
  name: 'Loading State',
  args: {
    rows: [],
    columns: [
      { field: 'name', headerName: 'Name', width: 150 },
      { field: 'age', headerName: 'Age', width: 100 },
      { field: 'department', headerName: 'Department', width: 200 },
    ],
    loading: true,
    slots: {
      noRowsOverlay: () => (
        <StyledGridOverlay>
          <CircularProgress />
          <Typography sx={{ mt: 2 }}>Loading data...</Typography>
        </StyledGridOverlay>
      ),
    },
  },
};

/* -------------------------------------------------------------------------- */
/* 🗑️ Empty State                                                             */
/* -------------------------------------------------------------------------- */
export const EmptyState: StoryObj<typeof StyledDataGrid> = {
  name: 'Empty State',
  args: {
    rows: [],
    columns: [
      { field: 'name', headerName: 'Name', width: 150 },
      { field: 'age', headerName: 'Age', width: 100 },
      { field: 'department', headerName: 'Department', width: 200 },
    ],
    slots: {
      noRowsOverlay: () => (
        <StyledGridOverlay>
          <Typography>No data available</Typography>
        </StyledGridOverlay>
      ),
    },
  },
};

/* -------------------------------------------------------------------------- */
/* 📱 Responsive Behavior                                                     */
/* -------------------------------------------------------------------------- */
export const ResponsiveBehavior: StoryObj<typeof StyledDataGrid> = {
  name: 'Responsive Behavior',
  args: {
    rows: [
      { id: 1, name: 'John Doe', age: 35, department: 'Engineering' },
      { id: 2, name: 'Jane Smith', age: 28, department: 'Marketing' },
      { id: 3, name: 'Robert Johnson', age: 42, department: 'Sales' },
      { id: 4, name: 'Emily Davis', age: 31, department: 'HR' },
      { id: 5, name: 'Michael Brown', age: 45, department: 'Finance' },
      { id: 6, name: 'Sarah Wilson', age: 29, department: 'Engineering' },
    ],
    columns: [
      { field: 'name', headerName: 'Name', width: 150, flex: 1 },
      { field: 'age', headerName: 'Age', width: 100, flex: 1 },
      { field: 'department', headerName: 'Department', width: 200, flex: 2 },
    ],
    pageSizeOptions: [5, 10],
    initialState: {
      pagination: {
        paginationModel: { pageSize: 5, page: 0 },
      },
    },
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
