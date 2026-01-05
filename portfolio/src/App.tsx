import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import frocarLogo from './assets/Images/frocar_logo.png';
import foodflowLogo from './assets/Images/foodflow_logo.png';
import tripifyLogo from './assets/Images/tripify_logo.png';
import amoraLogo from './assets/Images/amora_logo.png';
import sportPlusLogo from './assets/Images/sportplus_logo.png';
// Dodano SiVite
import { SiFlutter, SiDart, SiDotnet, SiReact, SiJavascript, SiVite } from 'react-icons/si';

// --- DANE PROJEKTÓW ---
const projects = [
  {
    id: 5,
    title: 'Sport+',
    className: 'tile-large',
    bgColor: '#1c1919',
    theme: 'light',
    logo: sportPlusLogo,
    img: sportPlusLogo,
    link: 'https://github.com/jakubtrznadel/PUMmobile',
    desc: 'Mobilna aplikacja do śledzenia aktywności fizycznej oraz analizy statystyk sportowych.',
    role: 'Implementacja aplikacji mobilnej oraz systemu trackingu GPS.',
  },
  {
    id: 1,
    title: 'FroCar Mobile',
    className: 'tile-normal',
    bgColor: '#14d33dff',
    theme: 'light',
    logo: frocarLogo,
    img: frocarLogo,
    link: 'https://github.com/dawid-skowronski/FrocarMobile',
    desc: 'Aplikacja mobilna symulująca wynajem samochodów oraz udostępnianie własnego pojazdu do wynajmu.',
    role: 'Odpowiadałem za projekt oraz pełną implementację aplikacji mobilnej.',
  },
  {
    id: 4,
    title: 'Amora',
    className: 'tile-normal',
    bgColor: '#993a25ff',
    theme: 'light',
    logo: amoraLogo,
    img: amoraLogo,
    link: 'https://github.com/jakubtrznadel/PipsiProject',
    desc: 'Aplikacja randkowa inspirowana rozwiązaniami typu Tinder.',
    role: 'Projekt UX/UI oraz pełna implementacja warstwy frontendowej.',
  },
  {
    id: 2,
    title: 'FoodFlow',
    className: 'tile-normal',
    bgColor: '#0fe46eff',
    theme: 'dark',
    logo: foodflowLogo,
    img: foodflowLogo,
    link: 'https://github.com/jakubtrznadel/FoodFlow',
    desc: 'Platforma do zarządzania produktami znajdującymi się w kuchni oraz sugerowania przepisów na podstawie dostępnych składników.',
    role: 'Odpowiadałem za pełną implementację projektu.',
  },
  {
    id: 3,
    title: 'Tripify',
    className: 'tile-normal',
    bgColor: '#f5f6fa',
    theme: 'dark',
    logo: tripifyLogo,
    img: tripifyLogo,
    link: 'https://github.com/jakubtrznadel/Projekt_grupa_G',
    desc: 'Aplikacja umożliwiająca rozliczanie wydatków w grupie znajomych podczas wspólnych wyjść lub wyjazdów.',
    role: 'Implementacja aplikacji webowej.',
  },
];

// --- DANE TECHNOLOGII (Nowa struktura) ---
const techStack = [
  {
    name: 'C#',
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="#512BD4" />
        <text x="50%" y="55%" textAnchor="middle" fill="#fff" fontSize="13" fontWeight="bold" dy=".3em">C#</text>
      </svg>
    ),
    color: '#512BD4'
  },
  { name: '.NET', icon: <SiDotnet size={40} />, color: '#512BD4' },
  { name: 'React', icon: <SiReact size={40} />, color: '#61DAFB' },
  { name: 'Vite', icon: <SiVite size={40} />, color: '#646CFF' }, // Dodano Vite
  { name: 'JavaScript', icon: <SiJavascript size={40} />, color: '#F7DF1E' },
  {
    name: 'HTML',
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none"><path d="M5.902 28.001L3.273 2.001h25.454l-2.63 26-10.6 3z" fill="#E44D26"/><path d="M16 28.729l8.577-2.429 2.25-23.001H16z" fill="#F16529"/><path d="M16 13.001h4.3l.3-3.001H16V7.001h7.5l-.08.9-.77 8.6H16zM16 20.001l-.014.004-3.6-.973-.23-2.573H8.98l.45 5.048 6.556 1.82.014-.004z" fill="#EBEBEB"/><path d="M19.997 16.001l-.375 4.176-3.62.973v2.3l6.56-1.82.05-.56.37-4.07zM16 7.001v3.001h-7.02l-.06-.6-.14-1.4-.08-1.001zM16 13.001v3.001h-3.7l-.08-.9-.18-2.101-.04-.5z" fill="#fff"/></svg>
    ),
    color: '#E44D26'
  },
  {
    name: 'CSS',
    icon: (
      <svg width="40" height="40" viewBox="0 0 32 32" fill="none"><path d="M5.902 28.001L3.273 2.001h25.454l-2.63 26-10.6 3z" fill="#264DE4"/><path d="M16 28.729l8.577-2.429 2.25-23.001H16z" fill="#2965F1"/><path d="M16 13.001h4.3l.3-3.001H16V7.001h7.5l-.08.9-.77 8.6H16zM16 20.001l-.014.004-3.6-.973-.23-2.573H8.98l.45 5.048 6.556 1.82.014-.004z" fill="#EBEBEB"/><path d="M19.997 16.001l-.375 4.176-3.62.973v2.3l6.56-1.82.05-.56.37-4.07zM16 7.001v3.001h-7.02l-.06-.6-.14-1.4-.08-1.001zM16 13.001v3.001h-3.7l-.08-.9-.18-2.101-.04-.5z" fill="#fff"/></svg>
    ),
    color: '#264DE4'
  },
  { name: 'Flutter', icon: <SiFlutter size={40} />, color: '#02569B' },
  { name: 'Dart', icon: <SiDart size={40} />, color: '#0175C2' },
];


function useTypingEffect(text: string, speed = 60) {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);
  useEffect(() => {
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
  const containerRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLElement>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, []);

  const name = useTypingEffect('Jakub Trznadel', 70);
  const job = useTypingEffect(name.length === 'Jakub Trznadel'.length ? 'Software Developer' : '', 40);

  const scrollToTechnologies = () => {
    technologiesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <div className="snap-container" ref={containerRef}>
      <section className="snap-section hero-section">
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

      {/* --- ZAKTUALIZOWANA SEKJA TECHNOLOGII --- */}
      <section className="snap-section technologies-section" ref={technologiesRef}>
        <h2>Technologies I work with</h2>
        <div className="technologies-grid">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="tech-card"
              whileHover={{ y: -8, scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{ '--hover-color': tech.color } as React.CSSProperties}
            >
              <div className="tech-icon" style={{ color: tech.color }}>
                {tech.icon}
              </div>
              <span className="tech-name">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="snap-section projects-section">
        <h2>My Projects</h2>
        <div className="bento-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              className={`bento-tile ${project.className} theme-${project.theme}`}
              onClick={() => setSelectedId(project.id)}
              whileHover={{ scale: 0.98 }}
              style={{ backgroundColor: project.bgColor }}
            >
              <motion.div className="bento-content">
                {project.logo && (
                   <motion.img 
                     src={project.logo} 
                     alt={project.title} 
                     className="bento-logo" 
                     layoutId={`logo-${project.id}`}
                   />
                )}
                <motion.span 
                  className="bento-click-hint" 
                  initial={{ opacity: 0 }} 
                  whileHover={{ opacity: 1 }}
                >
                   Zobacz szczegóły
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedProject && (
            <>
               <motion.div 
                 className="backdrop"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 exit={{ opacity: 0 }}
                 onClick={() => setSelectedId(null)}
               />
               <motion.div
                  layoutId={`card-${selectedId}`}
                  className={`fullscreen-card theme-${selectedProject.theme}`}
                  style={{ backgroundColor: selectedProject.bgColor }}
               >
                  <button className="close-fullscreen" onClick={() => setSelectedId(null)}>
                    &#10005;
                  </button>
                  
                  <div className="fullscreen-content">
                    <div className="fullscreen-left">
                       <motion.div 
                         className="fullscreen-logo-wrapper"
                         layoutId={`logo-${selectedId}`}
                       >
                         {selectedProject.logo && (
                            <img src={selectedProject.logo} alt="" />
                         )}
                       </motion.div>
                    </div>
                    
                    <motion.div 
                      className="fullscreen-right"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <h1>{selectedProject.title}</h1>
                      <div className="fullscreen-divider" />
                      
                      <div className="fullscreen-section">
                        <h3>O projekcie</h3>
                        <p>{selectedProject.desc}</p>
                      </div>

                      <div className="fullscreen-section">
                        <h3>Moja rola</h3>
                        <p>{selectedProject.role}</p>
                      </div>

                      {selectedProject.link && (
                       <button 
                        className="github-btn"
                        onClick={() => window.open(selectedProject.link, '_blank', 'noopener,noreferrer')}
                      >
                      <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Zobacz kod na GitHub</span>
                  </button>
)}
                    </motion.div>
                  </div>
               </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>

      {/* --- ZAKTUALIZOWANA SEKJA EDUKACJI --- */}
      <section className="snap-section education-section">
        <h2>Education</h2>
        <div className="education-list">
          <div className="education-item">
            <div className="education-accent"></div>
            <span className="education-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </span>
            <span className="school">School Complex No. 1, prof. Bolesław Krupiński</span>
            <span className="degree">IT Technician</span>
            <span className="years">2018 – 2022</span>
          </div>
          <div className="education-item">
            <div className="education-accent"></div>
            <span className="education-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3L2 8l10 5 10-5-10-5zm0 13v5m0 0c-4.418 0-8-1.79-8-4V9m8 12c4.418 0 8-1.79 8-4V9"/></svg>
            </span>
            <span className="school">Collegium Witelona in Legnica</span>
            <span className="degree">Mobile and Web Application Programming</span>
            <span className="years">2022 – present</span>
          </div>
        </div>
      </section>

      <section className="snap-section contact-section">
        <h2>Contact</h2>
        <div className="contact-grid">
          <a className="contact-tile" href="mailto:jakub,trznadel@studenci.collegiumwitelona.pl" target="_blank" rel="noopener noreferrer">
            <span className="contact-tile-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFD600" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2 0l8 7 8-7" stroke="none"/>
              </svg>
            </span>
            <span className="contact-tile-label">Email</span>
          </a>
          <a className="contact-tile" href="https://github.com/jakubtrznadel" target="_blank" rel="noopener noreferrer">
            <span className="contact-tile-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFD600" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
              </svg>
            </span>
            <span className="contact-tile-label">GitHub</span>
          </a>
          <a className="contact-tile" href="https://www.linkedin.com/in/jakub-trznadel-a91544338/" target="_blank" rel="noopener noreferrer">
            <span className="contact-tile-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#FFD600" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.94 19V9.5H4V19h2.94zM5.47 8.27a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42zM20 19h-2.93v-4.7c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.48V19H10V9.5h2.82v1.29h.04c.39-.74 1.34-1.52 2.76-1.52 2.95 0 3.5 1.94 3.5 4.47V19z"/>
              </svg>
            </span>
            <span className="contact-tile-label">LinkedIn</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;