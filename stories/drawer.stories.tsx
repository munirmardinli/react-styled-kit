"use client";

import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";

import {
 AppBar,
 Drawer,
 DrawerHeader,
 StyledListItemButton,
 StyledListItemIcon,
 StyledListItemText,
 StyledMenuItem,
 Logo,
 StyledMenuIcon,
} from "../src/style/drawer";

/* -------------------------------------------------------------------------- */
/* 📘 Storybook Metadata                                                      */
/* -------------------------------------------------------------------------- */
const meta: Meta<typeof Drawer> = {
 title: "Components/Drawer/DrawerNavigation",
 tags: ["autodocs"],
 parameters: {
  docs: {
   description: {
    component: `
### 🗂️ Drawer Navigation Components

Responsive Material-UI drawer navigation with:

- Dynamic open/close toggle
- Path-based navigation item highlighting
- Language selection menu with highlighting
- AppBar with menu icon and logo

---

### 🚀 Features

- Fully responsive and Material-UI theme-aware
- Easily extendable with new navigation items
- Cleanly separated styled components
- Integration of icons and hover effects
        `.trim(),
   },
  },
 },
};

export default meta;

/* -------------------------------------------------------------------------- */
/* 🔘 Standard Drawer Navigation Story                                        */
/* -------------------------------------------------------------------------- */
export const DefaultDrawer: StoryObj<typeof Drawer> = {
 name: "Default Drawer Navigation",
 render: () => {
  const [open, setOpen] = useState(true);
  const [pathname, setPathname] = useState("/dashboard/");
  const [language, setLanguage] = useState("en");

  const navItems = [
   { path: "dashboard", label: "Dashboard", icon: <DashboardIcon /> },
   { path: "settings", label: "Settings", icon: <SettingsIcon /> },
   { path: "home", label: "Home", icon: <HomeIcon /> },
  ];

  return (
   <div style={{ display: "flex", height: "100vh" }}>
    <AppBar position="fixed" open={open}>
     <div
      style={{
       display: "flex",
       alignItems: "center",
       padding: "0 16px",
       height: 64,
      }}
     >
      <StyledMenuIcon
       onClick={() => setOpen(!open)}
       style={{ cursor: "pointer" }}
      />
      <div
       style={{
        marginLeft: 16,
        flexGrow: 1,
        fontWeight: "bold",
        color: "white",
       }}
      >
       My Application
      </div>
      <Logo src="/logo.png" alt="App Logo" width={48} height={48} />
     </div>
    </AppBar>

    <Drawer variant="permanent" open={open}>
     <DrawerHeader>
      <div style={{ flexGrow: 1, paddingLeft: 8, fontWeight: "bold" }}>
       Navigation
      </div>
     </DrawerHeader>

     {navItems.map(({ path, label, icon }) => (
      <StyledListItemButton
       key={path}
       open={open}
       pathname={pathname}
       path={path}
       onClick={() => setPathname(`/${path}/`)}
      >
       <StyledListItemIcon open={open} pathname={pathname} path={path}>
        {icon}
       </StyledListItemIcon>
       <StyledListItemText
        open={open}
        pathname={pathname}
        path={path}
        primary={label}
       />
      </StyledListItemButton>
     ))}

     <div style={{ marginTop: "auto", marginBottom: 16 }}>
      <StyledMenuItem
       path="en"
       languageSelected={language}
       onClick={() => setLanguage("en")}
      >
       English
      </StyledMenuItem>
      <StyledMenuItem
       path="de"
       languageSelected={language}
       onClick={() => setLanguage("de")}
      >
       Deutsch
      </StyledMenuItem>
     </div>
    </Drawer>

    <main style={{ flexGrow: 1, padding: 24, marginTop: 64 }}>
     <h1>Content Area</h1>
     <p>Aktueller Pfad: {pathname}</p>
     <p>Gewählte Sprache: {language}</p>
    </main>
   </div>
  );
 },
};
