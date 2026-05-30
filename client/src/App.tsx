import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Booking from "@/pages/booking";
import Contact from "@/pages/contact";
import Privacy from "@/pages/privacy";

// Base path configuration for GitHub Pages
const base = import.meta.env.BASE_URL || "/";
const routerBase = base === "/" ? undefined : base.replace(/\/$/, "");

function Router() {
  return (
    <WouterRouter base={routerBase}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/booking" component={Booking} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy" component={Privacy} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
