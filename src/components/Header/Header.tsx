import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Container, Nav, NavLinks, MobileMenu, ThemeToggle } from './styles';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container $isScrolled={isScrolled}>
      <Nav>
        <HashLink smooth to="#home" className="logo">
          <span className="bracket">&lt;</span>
          <span className="name">Arslan Arshad</span>
          <span className="bracket">/&gt;</span>
        </HashLink>

        <NavLinks $isOpen={isOpen}>
          <HashLink smooth to="#home" onClick={() => setIsOpen(false)}>
            Home
          </HashLink>
          <HashLink smooth to="#about" onClick={() => setIsOpen(false)}>
            About
          </HashLink>
          <HashLink smooth to="#experience" onClick={() => setIsOpen(false)}>
            Experience
          </HashLink>
          <HashLink smooth to="#skills" onClick={() => setIsOpen(false)}>
            Skills
          </HashLink>
          <HashLink smooth to="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </HashLink>
          <HashLink smooth to="#contact" onClick={() => setIsOpen(false)}>
            Contact
          </HashLink>
          <a
            href="/ARSLAN_ARSHAD.pdf"
            download="ARSLAN_ARSHAD.pdf"
            className="resume-btn"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a>
        </NavLinks>

        <ThemeToggle onClick={toggleTheme}>
          {isDark ? <FaMoon /> : <FaSun />}
        </ThemeToggle>

        <MobileMenu onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileMenu>
      </Nav>
    </Container>
  );
};

