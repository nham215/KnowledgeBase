import { ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import theme from "./theme/index.ts";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
   <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
         <App />
      </QueryClientProvider>
   </ThemeProvider>
);
