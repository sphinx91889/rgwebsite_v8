import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { SplashScreen } from "./components/SplashScreen";
import { Homepage } from "./screens/Homepage";
import { AboutUs } from "./screens/AboutUs";
import { Services } from "./screens/Services";
import { Products } from "./screens/Products";
import { Portfolio } from "./screens/Portfolio";
import { Blog } from "./screens/Blog";
import { BlogPost } from "./screens/BlogPost";
import { Contact } from "./screens/Contact";
import { Sturgeon } from "./screens/Sturgeon";
import { Nicole } from "./screens/Nicole";
import { Mevin } from "./screens/Mevin";
import { Nexus } from "./screens/Nexus";
import ClientLogin from "./screens/ClientLogin";
import { ScrollToTop } from "./ScrollToTop";

console.log('React app starting...');

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HelmetProvider>
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
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sturgeon" element={<Sturgeon />} />
          <Route path="/nicole" element={<Nicole />} />
          <Route path="/mevin" element={<Mevin />} />
          <Route path="/nexus" element={<Nexus />} />
          <Route path="/client-login" element={<ClientLogin />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </StrictMode>,
);
