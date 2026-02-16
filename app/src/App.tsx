import HeroSection from './sections/HeroSection';
import DetailsSection from './sections/DetailsSection';
import DressCodeSection from './sections/DressCodeSection';
import FooterSection from './sections/FooterSection';
import './App.css';

function App() {
  return (
    <main className="min-h-screen bg-cream-50">
      <HeroSection />
      <DetailsSection />
      <DressCodeSection />
      <FooterSection />
    </main>
  );
}

export default App;
