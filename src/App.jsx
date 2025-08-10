import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Features from './pages/Features.jsx'
import Download from './pages/Download.jsx'
import Community from './pages/Community.jsx'
import FAQ from './pages/FAQ.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <a className="skip-link" href="#main">Skip to content</a>
      <NavBar />
      <Routes>
        <Route path="/" element={<main id="main"><Home /></main>} />
        <Route path="/about" element={<main id="main"><About /></main>} />
        <Route path="/features" element={<main id="main"><Features /></main>} />
        <Route path="/download" element={<main id="main"><Download /></main>} />
        <Route path="/community" element={<main id="main"><Community /></main>} />
        <Route path="/faq" element={<main id="main"><FAQ /></main>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
