/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Team from './components/Team';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll();

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <div data-scroll-section>
          <Hero />
        </div>
        <div data-scroll-section>
          <About />
        </div>
        <div data-scroll-section>
          <Services />
        </div>
        <div data-scroll-section>
          <Process />
        </div>
        <div data-scroll-section>
          <Team />
        </div>
        <div data-scroll-section>
          <Stats />
        </div>
        <div data-scroll-section>
          <Portfolio />
        </div>
        <div data-scroll-section>
          <Testimonials />
        </div>
        <div data-scroll-section>
          <FAQ />
        </div>
        <div data-scroll-section>
          <Contact />
        </div>
      </main>
      <div data-scroll-section>
        <Footer />
      </div>
    </div>
  );
}


