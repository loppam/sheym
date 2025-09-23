import { useMemo } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import PortfolioPage from './components/PortfolioPage';
import BookingPage from './components/BookingPage';
// import ShopPage from './components/ShopPage';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPage = useMemo(() => {
    const path = location.pathname.replace(/^\/+/, '') || 'home';
    // only keep first segment
    return path.split('/')[0];
  }, [location.pathname]);

  const handleNavigation = (page: string) => {
    navigate(page === 'home' ? '/' : `/${page}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <Header currentPage={currentPage} onNavigate={handleNavigation} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage onNavigate={handleNavigation} />} />
          <Route path="/about" element={<AboutPage onNavigate={handleNavigation} />} />
          <Route path="/services" element={<ServicesPage onNavigate={handleNavigation} />} />
          <Route path="/portfolio" element={<PortfolioPage onNavigate={handleNavigation} />} />
          <Route path="/booking" element={<BookingPage />} />
          {/* <Route path="/shop" element={<ShopPage onNavigate={handleNavigation} />} /> */}
          <Route path="*" element={<HomePage onNavigate={handleNavigation} />} />
        </Routes>
      </main>
      <Footer onNavigate={handleNavigation} />
    </div>
  );
}