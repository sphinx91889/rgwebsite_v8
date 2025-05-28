import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SplashScreen } from "./components/SplashScreen";
import { Homepage } from "./screens/Homepage";
import { AboutUs } from "./screens/AboutUs";
import { Services } from "./screens/Services";
import { Products } from "./screens/Products";
import { Portfolio } from "./screens/Portfolio";
import { Blog } from "./screens/Blog";
import { Contact } from "./screens/Contact";
import { Nexus } from "./screens/Nexus";
import { ScrollToTop } from "./ScrollToTop";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/nexus" element={<Nexus />} />
      </Routes>
    </Router>
  </StrictMode>,
);
