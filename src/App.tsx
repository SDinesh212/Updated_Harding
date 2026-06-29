import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import XRayPage from "./pages/XRayPage";
import OpenMRIPage from "./pages/OpenMRIPage";
import UltrasoundPage from "./pages/UltrasoundPage";
import MammographyPage from "./pages/MammographyPage";
import DEXAPage from "./pages/DEXAPage";
import CTScanPage from "./pages/CTScanPage";
import BreastUltrasoundPage from "./pages/BreastUltrasoundPage";
import LungScreeningPage from "./pages/LungScreeningPage";
import CardiacScoringPage from "./pages/CardiacScoringPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/x-ray" element={<XRayPage />} />
      <Route path="/services/x-ray" element={<XRayPage />} />
      <Route path="/open-mri" element={<OpenMRIPage />} />
      <Route path="/ultrasound" element={<UltrasoundPage />} />
      <Route path="/3d-mammography" element={<MammographyPage />} />
      <Route path="/dexa-scan" element={<DEXAPage />} />
      <Route path="/ct-scan" element={<CTScanPage />} />
      <Route path="/3d-breast-ultrasound" element={<BreastUltrasoundPage />} />
      <Route path="/lung-cancer-screening" element={<LungScreeningPage />} />
      <Route path="/cardiac-scoring" element={<CardiacScoringPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}
