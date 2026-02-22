import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

const ProfileCard = lazy(() => import('./components/ProfileCard'));
const SupunPortfolio = lazy(() => import('./components/SupunPortfolio'));
const Home = lazy(() => import('./components/Home'));

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<div className="min-h-screen bg-[#0F172A] flex items-center justify-center text-white">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/supun" element={<SupunPortfolio />} />
          <Route path="/:username" element={<ProfileCard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App
