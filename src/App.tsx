import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Preloader from "./components/Pre";
import NavigationBar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import ScrollToTop from "./components/ScrollToTop";
import Particle from "./components/Particle";
import RouteTransitionOverlay from "./components/RouteTransitionOverlay";

import "./style.css";
import "./App.css";

function AppShell({ load }: { load: boolean }) {
  const location = useLocation();
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTransitioning(true);
    const t = window.setTimeout(() => setTransitioning(false), 650);
    return () => window.clearTimeout(t);
  }, [location.pathname]);

  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Particle />
      <RouteTransitionOverlay show={transitioning} />

      <NavigationBar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default function App() {
  const [load, updateLoad] = useState<boolean>(true);

  useEffect(() => {
    const timer = window.setTimeout(() => updateLoad(false), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <AppShell load={load} />
    </Router>
  );
}
