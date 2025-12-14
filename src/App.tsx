import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Index from "./pages/Index";
import QuizKaarten from "./pages/QuizKaarten";
import Top10Steden from "./pages/Top10Steden";
import SchematischeSamenvatting from "./pages/SchematischeSamenvatting";
import RijkEnArm from "./pages/RijkEnArm";
import MonopolyOnderzoek from "./pages/MonopolyOnderzoek";
import Droomstad from "./pages/Droomstad";
import KahootQuiz from "./pages/KahootQuiz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Component to handle redirect on refresh
const RedirectOnRefresh = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hasNavigated = useRef(false);

  useEffect(() => {
    // Mark that user has navigated within the app
    hasNavigated.current = true;
  }, [location.pathname]);

  // Check if this is a fresh page load (refresh) on a non-home route
  if (!hasNavigated.current && location.pathname !== "/") {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RedirectOnRefresh>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/quiz-kaarten" element={<QuizKaarten />} />
            <Route path="/top-10-steden" element={<Top10Steden />} />
            <Route path="/schematische-samenvatting" element={<SchematischeSamenvatting />} />
            <Route path="/rijk-en-arm" element={<RijkEnArm />} />
            <Route path="/monopoly-onderzoek" element={<MonopolyOnderzoek />} />
            <Route path="/droomstad" element={<Droomstad />} />
            <Route path="/kahoot-quiz" element={<KahootQuiz />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RedirectOnRefresh>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
