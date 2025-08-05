"use client";

import type { Meta, StoryObj } from "@storybook/react";
import {
 StyledTextField,
 StyledDateInput,
 StyledDemoContainer,
} from "../src/style/textfield";
import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { Box, Stack } from "@mui/material";

/* -------------------------------------------------------------------------- */
/* 📘 Storybook Metadata                                                      */
/* -------------------------------------------------------------------------- */
const meta: Meta<typeof StyledTextField> = {
 title: "Components/Inputs/Form Fields",
 tags: ["autodocs"],
 parameters: {
  docs: {
   description: {
    component: `
### 📝 Styled Form Input Components

Customized form controls with consistent styling and theme integration.

#### ✅ Features
- **StyledTextField**: Enhanced text input with error states and validation
- **StyledDateInput**: Clean date/time picker with custom calendar styling
- **StyledDemoContainer**: Themed container for form demonstrations

#### 🎨 Design Characteristics
- Theme-aware colors and typography
- Consistent hover/focus states
- Responsive layout
- Accessible markup
- Custom validation styling

---

### 📦 Component Variants

| Component               | Description                                |
|-------------------------|--------------------------------------------|
| Text Field              | Standard text input with validation        |
| Date Picker             | Custom styled date/time selection          |
| Form Demo               | Container for input demonstrations         |
| Input States            | Various input states (error, disabled etc) |

---
        `.trim(),
   },
  },
 },
};

export default meta;

/* -------------------------------------------------------------------------- */
/* 📝 Text Field                                                              */
/* -------------------------------------------------------------------------- */
export const TextFieldBasic: StoryObj<typeof StyledTextField> = {
 render: () => {
  const [value, setValue] = useState("");

  return (
   <StyledTextField
    label="Username"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    helperText="Enter your username"
   />
  );
 },
 name: "Text Field",
};

/* -------------------------------------------------------------------------- */
/* 📅 Date Picker                                                             */
/* -------------------------------------------------------------------------- */
export const DatePicker: StoryObj = {
 render: () => {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
   <LocalizationProvider dateAdapter={AdapterDateFns}>
    <StyledDateInput
     label="Appointment Date"
     value={date}
     onChange={(newValue) => setDate(newValue)}
    />
   </LocalizationProvider>
  );
 },
 name: "Date Picker",
};

/* -------------------------------------------------------------------------- */
/* 🎛️ Input States                                                           */
/* -------------------------------------------------------------------------- */
export const InputStates: StoryObj = {
 render: () => (
  <Stack spacing={4}>
   <StyledTextField
    label="Required Field"
    required
    helperText="This field is required"
   />

   <StyledTextField
    label="Error State"
    error
    helperText="This field has an error"
    defaultValue="Invalid value"
   />

   <StyledTextField
    label="Disabled Field"
    disabled
    defaultValue="Can't edit this"
   />

   <LocalizationProvider dateAdapter={AdapterDateFns}>
    <StyledDateInput label="Required Date" required />

    <StyledDateInput label="Disabled Date Picker" disabled />
   </LocalizationProvider>
  </Stack>
 ),
 name: "Input States",
};
