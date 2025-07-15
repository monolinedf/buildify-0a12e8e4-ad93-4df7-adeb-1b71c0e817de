
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import OurPrograms from "./pages/OurPrograms";
import OurResearch from "./pages/OurResearch";
import Apply from "./pages/Apply";
import Study from "./pages/Study";
import International from "./pages/International";
import Research from "./pages/Research";
import CampusLife from "./pages/CampusLife";
import Alumni from "./pages/Alumni";
import OurUni from "./pages/OurUni";
import QuickLinks from "./pages/QuickLinks";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-programs" element={<OurPrograms />} />
          <Route path="/our-research" element={<OurResearch />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/study" element={<Study />} />
          <Route path="/international" element={<International />} />
          <Route path="/research" element={<Research />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/our-uni" element={<OurUni />} />
          <Route path="/quick-links" element={<QuickLinks />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;