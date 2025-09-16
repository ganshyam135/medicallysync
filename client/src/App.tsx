import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Testimonials from "./pages/testimonials";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";
import TVUnitGallery from "./pages/gallery/tv-unit";
import KitchenGallery from "./pages/gallery/kitchen";
import BedroomGallery from "./pages/gallery/bedroom";
import PoojaRoomGallery from "./pages/gallery/pooja-room";
import LivingRoomGallery from "./pages/gallery/living-room";
import DiningRoomGallery from "./pages/gallery/dining-room";
import StudyRoomGallery from "./pages/gallery/study-room";
import BathroomGallery from "./pages/gallery/bathroom";

function Router() {
  const [location] = useLocation();
  
  // Reset scroll position when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <>
      <Header />
      <main className="pt-20"> {/* Add padding to account for fixed header */}
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/testimonials" component={Testimonials} />
          <Route path="/contact" component={Contact} />
          <Route path="/gallery/tv-unit" component={TVUnitGallery} />
          <Route path="/gallery/kitchen" component={KitchenGallery} />
          <Route path="/gallery/bedroom" component={BedroomGallery} />
          <Route path="/gallery/pooja-room" component={PoojaRoomGallery} />
          <Route path="/gallery/living-room" component={LivingRoomGallery} />
          <Route path="/gallery/dining-room" component={DiningRoomGallery} />
          <Route path="/gallery/study-room" component={StudyRoomGallery} />
          <Route path="/gallery/bathroom" component={BathroomGallery} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
