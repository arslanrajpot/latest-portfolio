import React from 'react';
import { Container, Content, Links, Copyright } from './styles';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Content>
        <Links>
          <a
            href="https://www.linkedin.com/in/arslanarshad-dev/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/arslanrajpot/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
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
          <a
            href="https://instagram.com/arslan_arshad23"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </Links>

        <Copyright>
          <p>
            Designed & Built by <strong>Arslan Arshad</strong>
          </p>
          <p>© {currentYear} All rights reserved.</p>
        </Copyright>
      </Content>
    </Container>
  );
};

