import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Container, OutlineName, BottomRow, SocialRow } from './styles';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <OutlineName className="disp" aria-hidden="true">
        Arslan Arshad
      </OutlineName>

      <BottomRow className="mono">
        <span>
          © {currentYear} Arslan Arshad · Lahore, Pakistan
        </span>
        <SocialRow>
          <a href="https://www.linkedin.com/in/arslanarshad-dev/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/arslanrajpot/" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=+923097457394&text=Hello+arslan"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a href="https://instagram.com/arslan_arshad23" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
        </SocialRow>
        <a href="#home">Back to top ↑</a>
      </BottomRow>
    </Container>
  );
};
