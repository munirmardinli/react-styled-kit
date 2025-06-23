# 🎨 @munirmardinli_org/react-styled-kit

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![GitHub Version](https://img.shields.io/github/package-json/v/munirmardinli/react-styled-kit?color=green&label=version)](https://github.com/munirmardinli/react-styled-kit)
[![TypeScript](https://img.shields.io/badge/lang-typescript-3178C6.svg)](https://www.typescriptlang.org/)
[![Docs](https://img.shields.io/badge/docs-typedoc-blueviolet.svg)](https://munirmardinli.github.io/react-styled-kit//)
[![npm](https://img.shields.io/npm/v/@munirmardinli_org/react-styled-kit)](https://www.npmjs.com/package/@munirmardinli_org/react-styled-kit)
[![GitHub Issues](https://img.shields.io/github/issues/munirmardinli/react-styled-kit)](https://github.com/munirmardinli/react-styled-kit/issues)
[![GitHub Stars](https://img.shields.io/github/stars/munirmardinli/react-styled-kit)](https://github.com/munirmardinli/react-styled-kit/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/munirmardinli/react-styled-kit)](https://github.com/munirmardinli/react-styled-kit/network/members)

# 🎨 `@munirmardinli_org/react-styled-kit` — Elegant React Component Styling Utilities

> A sleek, scalable component styling toolkit for React, with enhanced Material-UI integration, powerful utilities, and elegant defaults — crafted by [Munir Mardinli](mailto:munir@mardinli.de).

<a href="https://www.buymeacoffee.com/munirmardinli" target="_blank">
  <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=☕&slug=munirmardinli&button_colour=40DCA5&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" />
</a>

---

## ✨ Key Features
- ✅ Fully themed Material-UI component wrappers
- 🧩 Composable & accessible React UI building blocks
- 🎨 Unified design language across your app
- 📐 pxToRem and other utility functions for scalable UIs
- 🌒 Light & dark theme support out of the box
- 📱 Responsive layouts with overlay management
- ⚡ Plug-and-play — use what you need
---

## 📦 Installation

```bash
npm install @munirmardinli_org/react-styled-kit
# or
yarn add @munirmardinli_org/react-styled-kit
```

## 🚀 Quick Example

```tsx
import {
  StyledButton,
  StyledCalendar,
  Drawer,
  AppBar,
  Search,
  pxToRem,
} from "@munirmardinli_org/react-styled-kit";

const Example = () => (
  <>
    <AppBar />
    <Drawer />
    <Search />
    <StyledButton>Click me</StyledButton>
    <p style={{ fontSize: pxToRem(16) }}>This text uses rem units.</p>
  </>
);

```

## 🧱 Components Overview

| Component                                                                                          | Description                             |
| -------------------------------------------------------------------------------------------------- | --------------------------------------- |
| `StyledButton`                                                                                     | Button with unified styling             |
| `StyledCalendar`                                                                                   | Custom calendar view                    |
| `Drawer`, `AppBar`, `DrawerHeader`                                                                 | Layout navigation elements              |
| `Search`, `SearchSelect`, `StyledInputBase`                                                        | Search and filter UI                    |
| `StyledSnackbar`, `StyledSnackbarAlert`                                                            | Notification components                 |
| `StyledTooltip`                                                                                    | Tooltip with custom design              |
| `StyledDataGrid`, `StyledGridOverlay`                                                              | Advanced grid with overlays             |
| `StyledTextField`, `StyledDateInput`, `StyledDemoContainer`                                        | Form inputs                             |
| `StyledTypography`, `StyledTypographyCaption`, `StyledTypographySubcaption`, `TypographyContainer` | Typography utilities                    |
| `StyledSwitchMode`                                                                                 | Theme switch toggle                     |
| `StyledScrollToTopFab`, `StykedKeyboardArrowUp`                                                    | Floating action button to scroll to top |
| `Logo`, `StyledMenuItem`, `StyledMenuIcon`                                                         | Branding and menu elements              |

## 🧠 Utility Functions

`pxToRem(value: number): string`

    Converts pixel values to `rem` units based on a base font size of 16px.

```ts
pxToRem(16); // '1rem'
```

## 📁 Folder Structure

```txt
📦 style
├── button.ts
├── calendar.css
├── calendar.ts
├── drawer.ts
├── grid.ts
├── scrollToTop.ts
├── search.ts
├── snackbar.ts
├── switchMode.ts
├── textfield.ts
├── tooltip.ts
├── typography.ts
└── pxToRem.ts
```

## 👨‍🎨 Author

👤 Munir Mardinli

📧 [munir@mardinli.de](mailto:munir@mardinli.de)

🌐 [mardinli.de](https://mardinli.de)

## 🏷️ License

**MIT License** © [Munir Mardinli](https://linktr.ee/munirmardinli)

<details>
<summary>Full License Text</summary>

```text
MIT License

Copyright (c) 2025 Munir Mardinli

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
</details>
