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
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
