import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import Generator from "./pages/Generator";
import Results from "./pages/Results";
import Community from "./pages/Community";
import Features from "./pages/Features";
import MyGeneration from "./pages/MyGeneration";
import Plans from "./pages/Plans";
import Contact from "./pages/Contact";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<Generator />} />
        <Route path="/result/:projectId" element={<Results />} />
        <Route path="/community" element={<Community />} />
        <Route path="/features" element={<Features />} />
        <Route path="/my-generations" element={<MyGeneration />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </>
  );
}
