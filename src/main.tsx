// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.tsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* ZMIANA: Dodajemy 'basename', aby router działał poprawnie na GitHub Pages */}
    <BrowserRouter basename="/szafir-bystra-strona">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/polityka-prywatnosci" element={<PrivacyPolicyPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)