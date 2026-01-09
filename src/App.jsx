import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfileCard from './components/ProfileCard';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<ProfileCard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App
