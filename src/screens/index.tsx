import type { ReactElement } from "react";
import Dashboard from "./Dashboard";

export interface Window {
  title: string;
  screen: ReactElement;
}

export interface MenuCategory {
  label: string;
  windows: Window[];
}

export const menu: MenuCategory[] = [
  {
    label: "Applications",
    windows: [
      { title: "Dashboard", screen: <Dashboard /> },
      { title: "Film Tracker", screen: <Dashboard /> },
    ],
  },
  {
    label: "Notes",
    windows: [
      { title: "Shopping List", screen: <Dashboard /> },
      { title: "Reminders", screen: <Dashboard /> },
    ],
  },
  {
    label: "Browser",
    windows: [{ title: "Recipes", screen: <Dashboard /> }],
  },
  {
    label: "Games",
    windows: [
      { title: "Hydrangea", screen: <Dashboard /> },
      { title: "MeatCute Roullette", screen: <Dashboard /> },
    ],
  },
];
