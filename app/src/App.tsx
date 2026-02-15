import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Hero from './sections/Hero';
import Story from './sections/Story';
import SaveDate from './sections/SaveDate';
import Details from './sections/Details';
import Venue from './sections/Venue';
import Gallery from './sections/Gallery';
import RSVP from './sections/RSVP';
import Closing from './sections/Closing';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Refresh ScrollTrigger after all components mount
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      {/* Paper texture overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.025'/%3E%3C/svg%3E")`,
          opacity: 0.5,
        }}
      />
      
      {/* Sections */}
      <Hero />
      <Story />
      <SaveDate />
      <Details />
      <Venue />
      <Gallery />
      <RSVP />
      <Closing />
    </main>
  );
}

export default App;
