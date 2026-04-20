import React from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { HiOutlineArrowDown } from 'react-icons/hi';
import { Container, Content as StyledContent, TextContent, Title, Subtitle, Description, ButtonGroup, SocialLinks, CodeBlock } from './styles';

const Content = motion(StyledContent);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Hero: React.FC = () => {
  return (
    <Container id="home">
      <Content
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <TextContent>
          <motion.div variants={itemVariants}>
            <CodeBlock>console.log('Hello, World!');</CodeBlock>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Subtitle>Hi, my name is</Subtitle>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Title>
              <span className="highlight">Arslan Arshad.</span>
            </Title>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Title $secondary>
              Full-Stack & AI Engineer
            </Title>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Description>
              I am a <strong>Full-Stack & AI Engineer</strong> with 3+ years building scalable APIs,
              multi-tenant SaaS platforms, and LLM-powered systems. Currently working remotely for a
              <strong> US-based company</strong>, I ship production features with Django/FastAPI,
              React, LangChain, and LangGraph from system design to AWS deployment.
            </Description>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ButtonGroup>
              <HashLink smooth to="#contact" className="primary-btn">
                Get In Touch
              </HashLink>
              <HashLink smooth to="#projects" className="secondary-btn">
                View My Work
                <HiOutlineArrowDown />
              </HashLink>
            </ButtonGroup>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SocialLinks>
              <a
                href="https://www.linkedin.com/in/arslan-arshad-033bb5231"
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
            </SocialLinks>
          </motion.div>
        </TextContent>

        <motion.div
          variants={itemVariants}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '3rem',
          }}
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <HiOutlineArrowDown size={32} style={{ opacity: 0.5 }} />
          </motion.div>
        </motion.div>
      </Content>
    </Container>
  );
};

