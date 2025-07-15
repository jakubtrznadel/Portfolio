import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import React from 'react';
import frocarLogo from './assets/Images/frocar_logo.png';
import foodflowLogo from './assets/Images/foodflow_logo.png';
import tripifyLogo from './assets/Images/tripify_logo.png';
import amoraLogo from './assets/Images/amora_logo.png';
import { SiFlutter, SiDart, SiDotnet, SiReact, SiJavascript } from 'react-icons/si';

const projects = [
  {
    id: 1,
    title: 'FroCar Mobile',
    side: 'left',
    logo: frocarLogo,
    link: 'https://github.com/dawid-skowronski/FrocarMobile',
    desc: 'Aplikacja mobilna do zarządzania flotą pojazdów i monitorowania ich stanu.',
    img: frocarLogo,
  },
  {
    id: 2,
    title: 'FoodFlow',
    side: 'right',
    logo: foodflowLogo,
    link: 'https://github.com/jakubtrznadel/FoodFlow',
    desc: 'Platforma do zarządzania zamówieniami i dostawami jedzenia.',
    img: foodflowLogo,
  },
  {
    id: 3,
    title: 'Tripify',
    side: 'left',
    logo: tripifyLogo,
    link: 'https://github.com/jakubtrznadel/Projekt_grupa_G',
    desc: 'Aplikacja do planowania i organizowania podróży grupowych.',
    img: tripifyLogo,
  },
  {
    id: 4,
    title: 'Amora',
    side: 'right',
    logo: amoraLogo,
    link: 'https://github.com/jakubtrznadel/PipsiProject',
    desc: 'Aplikacja wspierająca relacje i komunikację w związkach.',
    img: amoraLogo,
  },
];

function useTypingEffect(text: string, speed = 60) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  React.useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);
  return displayed;
}

function App() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [closing, setClosing] = useState<'left' | 'right' | null>(null);

  // Typing effect
  const name = useTypingEffect('Jakub Trznadel', 70);
  const job = useTypingEffect(name.length === 'Jakub Trznadel'.length ? 'Software Developer' : '', 40);

  const scrollToTechnologies = () => {
    technologiesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClose = () => {
    const side = projects.find(p => p.id === expanded)?.side;
    setClosing(side === 'right' ? 'right' : 'left');
    setTimeout(() => {
      setExpanded(null);
      setClosing(null);
    }, 600);
  };

  // Rozkład projektów na kolumny
  const leftProjects = projects.filter((_, i) => i % 2 === 0);
  const rightProjects = projects.filter((_, i) => i % 2 === 1);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Portfolio
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="typing">{name}</span>
        </motion.h2>
        <motion.p
          className="subtitle"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <span className="typing">{job}</span>
        </motion.p>
        <motion.div
          className="scroll-arrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          onClick={scrollToTechnologies}
        >
          <span>&#8595;</span>
        </motion.div>
      </section>

      {/* TECHNOLOGIES SECTION */}
      <div ref={technologiesRef} />
      <section className="technologies-section">
        <h2>Technologies I work with</h2>
        <div className="technologies-grid">
          <div className="technology-tile">
            {/* C# / .NET */}
            <div className="technology-row">
              <span className="technology-label">C#</span>
              <span className="technology-icon">
                {/* Prosta ikonka C# */}
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" fill="#512BD4" />
                  <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" dy=".3em">C#</text>
                </svg>
              </span>
            </div>
            <div className="technology-row">
              <span className="technology-label">.NET</span>
              <span className="technology-icon">
                <SiDotnet size={28} color="#512BD4" />
              </span>
            </div>
          </div>
          <div className="technology-tile">
            {/* React, HTML, CSS, JS */}
            <div className="technology-row">
              <span className="technology-label">React</span>
              <span className="technology-icon">
                <SiReact size={28} color="#61DAFB" />
              </span>
            </div>
            <div className="technology-row">
              <span className="technology-label">HTML</span>
              <span className="technology-icon">
                {/* Oficjalny logotyp HTML5 */}
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M5.902 28.001L3.273 2.001h25.454l-2.63 26-10.6 3z" fill="#E44D26"/><path d="M16 28.729l8.577-2.429 2.25-23.001H16z" fill="#F16529"/><path d="M16 13.001h4.3l.3-3.001H16V7.001h7.5l-.08.9-.77 8.6H16zM16 20.001l-.014.004-3.6-.973-.23-2.573H8.98l.45 5.048 6.556 1.82.014-.004z" fill="#EBEBEB"/><path d="M19.997 16.001l-.375 4.176-3.62.973v2.3l6.56-1.82.05-.56.37-4.07zM16 7.001v3.001h-7.02l-.06-.6-.14-1.4-.08-1.001zM16 13.001v3.001h-3.7l-.08-.9-.18-2.101-.04-.5z" fill="#fff"/></svg>
              </span>
            </div>
            <div className="technology-row">
              <span className="technology-label">CSS</span>
              <span className="technology-icon">
                {/* Oficjalny logotyp CSS3 */}
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none"><path d="M5.902 28.001L3.273 2.001h25.454l-2.63 26-10.6 3z" fill="#264DE4"/><path d="M16 28.729l8.577-2.429 2.25-23.001H16z" fill="#2965F1"/><path d="M16 13.001h4.3l.3-3.001H16V7.001h7.5l-.08.9-.77 8.6H16zM16 20.001l-.014.004-3.6-.973-.23-2.573H8.98l.45 5.048 6.556 1.82.014-.004z" fill="#EBEBEB"/><path d="M19.997 16.001l-.375 4.176-3.62.973v2.3l6.56-1.82.05-.56.37-4.07zM16 7.001v3.001h-7.02l-.06-.6-.14-1.4-.08-1.001zM16 13.001v3.001h-3.7l-.08-.9-.18-2.101-.04-.5z" fill="#fff"/></svg>
              </span>
            </div>
            <div className="technology-row">
              <span className="technology-label">JavaScript</span>
              <span className="technology-icon">
                <SiJavascript size={28} color="#F7DF1E" />
              </span>
            </div>
          </div>
          <div className="technology-tile">
            {/* Flutter, Dart */}
            <div className="technology-row">
              <span className="technology-label">Flutter</span>
              <span className="technology-icon">
                <SiFlutter size={28} color="#02569B" />
              </span>
            </div>
            <div className="technology-row">
              <span className="technology-label">Dart</span>
              <span className="technology-icon">
                <SiDart size={28} color="#0175C2" />
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* PROJECTS SECTION */}
      <div ref={projectsRef} />
      <motion.section className="projects-section" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <h2>Projects</h2>
        <div className="projects-grid">
          <div className="project-col">
            {leftProjects.map((project) => (
              <motion.div
                className="project-card left"
                key={project.id}
                onClick={() => setExpanded(project.id)}
                whileHover={{ x: 80, marginLeft: '-80px', scale: 1.06, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
                style={{
                  cursor: expanded ? 'default' : 'pointer',
                  pointerEvents: expanded ? 'none' : 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: project.title === 'FoodFlow' || project.title === 'Tripify' ? '#fff' : '#232526',
                }}
              >
                <img src={project.logo} alt={project.title} className="project-logo only-logo" />
              </motion.div>
            ))}
          </div>
          <div className="project-col">
            {rightProjects.map((project) => (
              <motion.div
                className="project-card right"
                key={project.id}
                onClick={() => setExpanded(project.id)}
                whileHover={{ x: -80, marginRight: '-80px', scale: 1.06, boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}
                style={{
                  cursor: expanded ? 'default' : 'pointer',
                  pointerEvents: expanded ? 'none' : 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: project.title === 'FoodFlow' || project.title === 'Tripify' ? '#fff' : '#232526',
                }}
              >
                <img src={project.logo} alt={project.title} className="project-logo only-logo" />
              </motion.div>
            ))}
          </div>
        </div>
        <AnimatePresence>
          {expanded && (
            <motion.div
              className={`project-expanded ${closing ? `exit-${closing}` : projects.find(p => p.id === expanded)?.side === 'right' ? 'right' : ''}`}
              initial={{ x: projects.find(p => p.id === expanded)?.side === 'right' ? '100vw' : '-100vw' }}
              animate={{ x: 0 }}
              exit={{ x: projects.find(p => p.id === expanded)?.side === 'right' ? '100vw' : '-100vw' }}
              transition={{ duration: 0.6, type: 'tween' }}
              style={{
                background: ['FoodFlow', 'Tripify'].includes(projects.find(p => p.id === expanded)?.title || '') ? 'rgba(255,255,255,0.75)' : 'rgba(24,24,24,0.95)',
                color: ['FoodFlow', 'Tripify'].includes(projects.find(p => p.id === expanded)?.title || '') ? '#181818' : '#fff',
              }}
            >
              <button className="project-close" onClick={handleClose}>&#10005;</button>
              <div className="project-expanded-content"
                style={{
                  background: ['FoodFlow', 'Tripify'].includes(projects.find(p => p.id === expanded)?.title || '') ? '#fff' : '#232526',
                  color: ['FoodFlow', 'Tripify'].includes(projects.find(p => p.id === expanded)?.title || '') ? '#181818' : '#fff',
                }}
              >
                <div className="project-expanded-img"
                  style={{
                    background: ['FoodFlow', 'Tripify'].includes(projects.find(p => p.id === expanded)?.title || '') ? '#fff' : '#181818',
                  }}
                >
                  <img
                    src={projects.find(p => p.id === expanded)?.img}
                    alt={projects.find(p => p.id === expanded)?.title}
                    style={{
                      maxWidth: 520,
                      maxHeight: 280,
                      width: 'auto',
                      height: 'auto',
                      margin: '0 auto',
                      display: 'block',
                    }}
                  />
                </div>
                <div className="project-expanded-info">
                  <h2 style={{ color: ['FoodFlow', 'Tripify'].includes(projects.find(p => p.id === expanded)?.title || '') ? '#181818' : '#fff' }}>
                    {projects.find(p => p.id === expanded)?.title}
                  </h2>
                  <p
                    style={{ color: ['FoodFlow', 'Tripify'].includes(projects.find(p => p.id === expanded)?.title || '') ? '#181818' : '#fff' }}
                  >
                    {projects.find(p => p.id === expanded)?.desc}
                  </p>
                  {projects.find(p => p.id === expanded)?.link && (
                    <a href={projects.find(p => p.id === expanded)?.link} target="_blank" rel="noopener noreferrer" style={{ color: '#181818', fontWeight: 700, marginTop: '1.2rem', fontSize: '1.1rem', textDecoration: 'none', background: '#FFD600', borderRadius: '12px', padding: '0.7rem 1.5rem', boxShadow: 'none' }}>
                      Zobacz repozytorium na GitHubie
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
      {/* EDUCATION SECTION */}
      <section className="education-section">
        <h2>Education</h2>
        <div className="education-list">
          <div className="education-item">
            <span className="education-icon">
              {/* Book icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#FFD600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M6.5 17V5.5A2.5 2.5 0 0 1 9 3h11v14H6.5z" stroke="#FFD600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="school">School Complex No. 1, prof. Bolesław Krupiński</span>
            <span className="degree">IT Technician</span>
            <span className="years">2018 – 2022</span>
          </div>
          <div className="education-item">
            <span className="education-icon">
              {/* Graduation cap icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 3L2 8l10 5 10-5-10-5zm0 13v5m0 0c-4.418 0-8-1.79-8-4V9m8 12c4.418 0 8-1.79 8-4V9" stroke="#FFD600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <span className="school">Collegium Witelona in Legnica</span>
            <span className="degree">Mobile and Web Application Programming</span>
            <span className="years">2022 – present</span>
          </div>
        </div>
      </section>
      {/* NOWA SEKCJA CONTACT */}
      <section className="contact-section">
        <h2>Contact</h2>
        <div className="contact-grid">
          <a className="contact-tile" href="mailto:jakub,trznadel@studenci.collegiumwitelona.pl" target="_blank" rel="noopener noreferrer">
            <span className="contact-tile-icon">
              {/* Ikona maila - koperta, tylko fill */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFD600" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2 0l8 7 8-7" stroke="none"/>
              </svg>
            </span>
            <span className="contact-tile-label">Email</span>
          </a>
          <a className="contact-tile" href="https://github.com/jakubtrznadel" target="_blank" rel="noopener noreferrer">
            <span className="contact-tile-icon">
              {/* Ikona GitHub - octocat, tylko fill */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFD600" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
              </svg>
            </span>
            <span className="contact-tile-label">GitHub</span>
          </a>
          <a className="contact-tile" href="https://www.linkedin.com/in/jakub-trznadel-a91544338/" target="_blank" rel="noopener noreferrer">
            <span className="contact-tile-icon">
              {/* Ikona LinkedIn - "in", tylko fill */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFD600" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.94 19V9.5H4V19h2.94zM5.47 8.27a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42zM20 19h-2.93v-4.7c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.48V19H10V9.5h2.82v1.29h.04c.39-.74 1.34-1.52 2.76-1.52 2.95 0 3.5 1.94 3.5 4.47V19z"/>
              </svg>
            </span>
            <span className="contact-tile-label">LinkedIn</span>
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
