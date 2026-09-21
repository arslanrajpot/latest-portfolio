import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Container, Nav, NavLinks, MobileMenu, ThemeToggle, RightGroup } from './styles';
import { FaBars, FaTimes, FaSun, FaMoon, FaArrowRight } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const NAV_ITEMS = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
];

const SECTION_IDS = ['home', ...NAV_ITEMS.map(item => item.id), 'contact'];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Container $isScrolled={isScrolled}>
      <Nav>
        <HashLink smooth to="#home" className="logo">
          <span className="badge">AA</span>
          <span className="name">Arslan Arshad</span>
        </HashLink>

        <NavLinks $isOpen={isOpen}>
          {NAV_ITEMS.map(item => (
            <HashLink
              key={item.id}
              smooth
              to={`#${item.id}`}
              className={`navlink${activeSection === item.id ? ' active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </HashLink>
          ))}
          <HashLink smooth to="#contact" className="talk-btn" onClick={() => setIsOpen(false)}>
            Let&apos;s talk <FaArrowRight />
          </HashLink>
        </NavLinks>

        <RightGroup>
          <ThemeToggle onClick={toggleTheme} aria-label="Switch between dark and light theme">
            {isDark ? <FaMoon /> : <FaSun />}
            <span>{isDark ? 'Dark' : 'Light'}</span>
          </ThemeToggle>
          <MobileMenu onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileMenu>
        </RightGroup>
      </Nav>
    </Container>
  );
};
