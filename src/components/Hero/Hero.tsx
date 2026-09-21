import React from 'react';
import { motion } from 'framer-motion';
import { HashLink } from 'react-router-hash-link';
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { HiOutlineArrowRight, HiOutlineArrowDown } from 'react-icons/hi';
// @ts-ignore
import arslanImage from '../../assets/Arslan_Arshad_Profile.jpg';
import {
  Container,
  GuideLines,
  Glow,
  Content as StyledContent,
  TextContent,
  Eyebrow,
  Title,
  Description,
  ButtonGroup,
  MetaLine,
  SocialLinks,
  PortraitCol,
  PortraitWrapper,
  PortraitBacking,
  PortraitFrame,
  NowCard,
} from './styles';

const Content = motion(StyledContent);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Hero: React.FC = () => {
  return (
    <Container id="home">
      <GuideLines>
        <span />
        <span />
        <span />
        <span />
        <span />
      </GuideLines>
      <Glow />

      <Content variants={containerVariants} initial="hidden" animate="visible">
        <TextContent>
          <motion.div variants={itemVariants}>
            <Eyebrow className="mono">
              <span className="dot" />
              <span>Senior Backend &amp; AI Engineer</span>
            </Eyebrow>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Title className="disp">
              Production backend systems, built <span className="pill">end to end.</span>
            </Title>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Description>
              I architect <strong>Django and FastAPI backends</strong>, <strong>multi-agent LangGraph systems</strong>,
              and RAG pipelines, and I own the decisions from database schema to production deployment. Currently
              leading backend and AI-integration engineering for a 4-service platform at{' '}
              <strong>Kinetic Intelligence</strong>.
            </Description>
          </motion.div>

          <motion.div variants={itemVariants}>
            <ButtonGroup>
              <HashLink smooth to="#work" className="btn btn-primary">
                Explore my work <HiOutlineArrowRight />
              </HashLink>
              <a
                className="btn btn-outline"
                href="/ARSLAN_ARSHAD.pdf"
                download="ARSLAN_ARSHAD.pdf"
              >
                Download résumé <HiOutlineArrowDown />
              </a>
            </ButtonGroup>
          </motion.div>

          <motion.div variants={itemVariants}>
            <MetaLine className="mono">Python · Django · FastAPI &nbsp;/&nbsp; Lahore, Pakistan · Remote</MetaLine>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SocialLinks>
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
            </SocialLinks>
          </motion.div>
        </TextContent>

        <PortraitCol>
          <motion.div variants={itemVariants}>
            <PortraitWrapper>
              <PortraitBacking />
              <PortraitFrame>
                <img src={arslanImage} alt="Arslan Arshad" />
              </PortraitFrame>
              <NowCard>
                <span className="label mono">Now</span>
                <span className="role">Senior Software Engineer</span>
                <span className="place">Kinetic Intelligence · Dubai, UAE</span>
              </NowCard>
            </PortraitWrapper>
          </motion.div>
        </PortraitCol>
      </Content>
    </Container>
  );
};
