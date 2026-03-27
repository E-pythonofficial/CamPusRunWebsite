import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./lib/auth-context"; // Import your new provider
import LandingPage from "./pages/LandingPage"; // Ensure casing matches your file name
import ComingSoon from "./pages/ComingSoon";

const App = () => {
  // --- THEME INITIALIZATION ---
  useEffect(() => {
    // We check if a theme is saved, otherwise we default to 'dark' 
    // to show off that premium #071D3D Navy aesthetic immediately.
    const savedTheme = localStorage.getItem('campusrun_theme') || 'dark';
    document.documentElement.classList.add(savedTheme);
  }, []);

  return (
    <AuthProvider> 
      <BrowserRouter>
        <Routes>
          {/* Main Entry Point */}
          <Route path="/" element={<LandingPage />} />

          {/* Waitlist / Sign Up Target */}
          <Route path="/coming-soon" element={<ComingSoon />} />

          {/* Old routes or typos redirect to home */}
          <Route path="/landing" element={<Navigate to="/" replace />} />
          <Route path="/coming-soon" element={<Navigate to="/coming-soon" replace />} />
          
          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;