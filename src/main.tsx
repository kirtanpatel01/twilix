import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { BrowserRouter, Route, Routes } from "react-router"
import RootLayout from "./components/root-layout.tsx"
import { Create } from "./pages/create.tsx"
import Card from "./pages/card.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="" element={<App />} />
            <Route path="create" element={<Create />} />
            <Route path="create/card" element={<Card />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
