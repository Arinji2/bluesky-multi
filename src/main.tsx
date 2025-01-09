import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="w-full flex flex-col items-center justify-center bg-bg h-fit py-12">
        <App />
      </div>
      <Toaster />
    </BrowserRouter>
  </StrictMode>,
);
