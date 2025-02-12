import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import TextAnalysisPage from "./TextAnalysisPage";
import ImageAnalysisPage from "./ImageAnalysisPage";
import ResultsHistoryPage from "./ResultsHistoryPage";
import UserProfilePage from "./UserProfilePage";
import AboutHelpPage from "./AboutHelpPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/text-analysis" element={<TextAnalysisPage />} />
      <Route path="/image-analysis" element={<ImageAnalysisPage />} />
      <Route path="/results-history" element={<ResultsHistoryPage />} />
      <Route path="/user-profile" element={<UserProfilePage />} />
      <Route path="/about-help" element={<AboutHelpPage />} />
    </Routes>
  );
}
