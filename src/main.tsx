import { StrictMode } from "react";
import { Navigate } from "react-router";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { MantineProvider, createTheme } from "@mantine/core";

import App from "./App.tsx";

import "./index.css";
import "@mantine/core/styles.css";

const theme = createTheme({/** Put your mantine theme override here */});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
);
