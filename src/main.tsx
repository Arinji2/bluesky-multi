import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster.tsx";
import { AnimatePresence } from "framer-motion";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <div className="bg-bg flex flex-col items-center justify-center">
          <div className="px-2  max-w-[1200px] w-full flex flex-col items-center justify-center bg-bg h-fit py-12">
            <App />
          </div>
        </div>
        <Toaster />
      </AnimatePresence>
    </BrowserRouter>
  </StrictMode>,
);
