import HeroSection from './sections/HeroSection';
import StorySection from './sections/StorySection';
import DetailsSection from './sections/DetailsSection';
import DressCodeSection from './sections/DressCodeSection';
import RSVPSection from './sections/RSVPSection';
import FooterSection from './sections/FooterSection';
import './App.css';

function App() {
  return (
    <main className="min-h-screen bg-cream-50">
      <HeroSection />
      <StorySection />
      <DetailsSection />
      <DressCodeSection />
      <RSVPSection />
      <FooterSection />
    </main>
  );
}

export default App;
