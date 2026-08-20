import "@/App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BackgroundEffect } from "@/components/BackgroundEffect";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Home from "@/pages/Home";
import PlantDetail from "@/pages/PlantDetail";

function App() {
  useEffect(() => {
    const saved = localStorage.getItem("nfp-theme");
    if (saved === "dark") document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="App min-h-screen">
      <BrowserRouter>
        <BackgroundEffect />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tanaman/:slug" element={<PlantDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
