import { StrictMode } from "react";
import { Provider } from "react-redux";
import { Navigate } from "react-router";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { MantineProvider, createTheme } from "@mantine/core";

import "@fontsource/audiowide";
import "@fontsource/atomic-age";
import "@fontsource-variable/bodoni-moda";
import "@fontsource/manufacturing-consent";

import App from "./App.tsx";
import ShoppingList from "./pages/ShoppingList.tsx";

import { store } from "./state/store.ts";

import "./index.css";
import "@mantine/core/styles.css";

const theme = createTheme({
  fontFamily: "Audiowide, sans-serif",
  // You can also apply it specifically to headings:
  headings: { fontFamily: "Atomic Age, sans-serif", fontWeight: "400" },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/shopping-list" element={<ShoppingList />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </MantineProvider>
  </StrictMode>,
);
