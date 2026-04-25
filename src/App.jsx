import { useEffect, useState } from 'react';
import About from './components/About';
import Areas from './components/Areas';
import CaseStudy from './components/CaseStudy';
import Contact from './components/Contact';
import Differentials from './components/Differentials';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Indicators from './components/Indicators';
import Methodology from './components/Methodology';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [showTopButton, setShowTopButton] = useState(false);
  const [hasResume, setHasResume] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTopButton(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const checkResume = async () => {
      try {
        const response = await fetch(portfolioData.person.resumePath, { method: 'HEAD' });
        setHasResume(response.ok);
      } catch {
        setHasResume(false);
      }
    };

    checkResume();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy via-[#112241] to-navy text-white">
      <Header />
      <main>
        <Hero person={portfolioData.person} heroDescription={portfolioData.heroDescription} hasResume={hasResume} />
        <About aboutText={portfolioData.aboutText} person={portfolioData.person} />
        <Areas areas={portfolioData.areas} />
        <TechStack techStack={portfolioData.techStack} />
        <Experience experiences={portfolioData.experiences} />
        <CaseStudy caseStudy={portfolioData.caseStudy} />
        <Education education={portfolioData.education} />
        <Projects projects={portfolioData.projects} />
        <Methodology methodology={portfolioData.methodology} methodologyText={portfolioData.methodologyText} />
        <Differentials differentials={portfolioData.differentials} />
        <Indicators indicators={portfolioData.indicators} />
        <Contact person={portfolioData.person} disclaimer={portfolioData.disclaimer} />
      </main>
      <Footer />

      {showTopButton && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-5 right-5 rounded-full border border-cyantech/70 bg-deep/90 p-3 text-cyantech transition hover:bg-blueteam"
          aria-label="Voltar ao topo"
        >
          ↑
        </button>
      )}
    </div>
  );
}
